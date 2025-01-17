import urllib.parse as urlparse
from http.server import HTTPServer, BaseHTTPRequestHandler
import re
from socketserver import ThreadingMixIn
import json
import time
import mysql.connector.pooling
from datetime import datetime
import jwt
from threading import Semaphore
from authing.v2.authentication import AuthenticationClient, AuthenticationClientOptions
# python3

finish = False


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_auth(self, token, refertag):
        try:
            decodedToken = jwt.decode(token, cfg['app_secret'], algorithms=[
                                      "HS256"], options={"verify_aud": False})
            curDateTime = datetime.utcnow().microsecond * 1000
            if curDateTime > decodedToken['exp']:
                print('token expired')
                self.auth(refertag)
                return False, None
        except:
            self.auth(refertag)
            return False, None
        return True, decodedToken['data']['email']

    def signin(self, token):
        if not self.do_auth(token, "signin")[0]:
            return
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(camHtml, encoding='utf8'))

    def auth(self, reftag):
        if reftag == None:
            return
        self.send_response(200)
        self.end_headers()
        content = authHtml
        print(content)
        content = content.replace("reftag", reftag)
        self.wfile.write(bytes(content, encoding='utf8'))

    def health(self):
        self.send_response(200)
        self.end_headers()

    def thanks(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(thanksHtml, encoding='utf8'))

    def unauth(self):
        self.send_response(401)
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        print(content_length)
        token = str(self.headers["Authorization"])[7:]
        body = self.rfile.read(content_length)
        jsonData = json.loads(body)
        res = self.do_auth(token, None)
        if not res[0]:
            self.unauth()
            return

        self.send_response(200)
        self.end_headers()

        try:
            conn = mydbpool.get_connection()
            cursor = conn.cursor()
            sql = "REPLACE INTO signin (name, signin_date, photo) VALUES (%s, %s, %s)"
            name = jsonData['name']
            dt = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
            photoB64 = jsonData['photo']

            val = (name, dt, photoB64)
            cursor.execute(sql, val)
            conn.commit()
            print(name, "done")
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            mydbpool.put_connection(conn)

    def query_list(self, token, offset):
        if not self.do_auth(token, None)[0]:
            self.unauth()
            return

        self.send_response(200)
        data = {}
        data["finish"] = finish
        pics = []
        if not finish:
            try:
                conn = mydbpool.get_connection()
                cursor = conn.cursor(buffered=True)
                begin_clock = time.perf_counter()
                cursor.execute(
                    "SELECT name, signin_date, photo FROM signin limit 10 offset %s" % (offset))
                res = cursor.fetchall()
                print("table length :", len(res))
                for x in res:
                    if x[0] == None or x[1] == None or x[2] == None:
                        continue
                    pics += [x[2]]
                print("list-gen process:", time.perf_counter() - begin_clock)
            except Exception as e:
                print(e)
            finally:
                cursor.close()
                mydbpool.put_connection(conn)

        data["next_offset"] = int(offset) + len(pics)
        data["pics"] = pics
        self.end_headers()
        self.wfile.write(bytes(json.dumps(data), encoding='utf8'))

    def list(self, token):
        if not self.do_auth(token, 'list')[0]:
            print('unauth')
            self.unauth()
            return

        try:
            conn = mydbpool.get_connection()
            cursor = conn.cursor(buffered=True)
            cursor.execute(
                "SELECT name, signin_date, photo FROM signin limit 20")
            res = cursor.fetchall()
            print("table length :", len(res))
            content = listHtml
            body = ""
            for x in res:
                if x[0] == None or x[1] == None or x[2] == None:
                    continue
                body += "<tr>"
                body += "<td>" + x[0] + "</td>"
                body += "<td>" + x[1].strftime('%Y-%m-%d %H:%M:%S') + "</td>"
                body += "<td>" + "<img style='display:block; width:100px;height:100px;' src='" + \
                    x[2] + "'/> </td>"
                body += "</tr>"
            content = content.replace("tag", body)
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            mydbpool.put_connection(conn)

        self.send_response(200)
        self.end_headers()
        # content = listHtml
        self.wfile.write(bytes(content, encoding='utf8'))

    def dofinish(self, token):
        if not self.do_auth(token, None)[0]:
            self.unauth()
            return

        global finish
        finish = True
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes('finished', encoding='utf8'))

    def do_GET(self):
        content = ""
        token = ""
        pr = urlparse.urlparse(self.path)
        if pr.query != "":
            query = urlparse.parse_qs(pr.query)
            if "token" in query:
                token = query['token'][0]
        if "Authorization" in self.headers:
            token = str(self.headers["Authorization"])[7:]

        print(pr.path)
        try:
            if pr.path == '/':
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes(indexHtml, encoding='utf8'))
            elif re.match(r"/assets/.*", pr.path):
                content = open(pr.path[1:]).read()

                self.send_response(200)
                if pr.path.endswith('js'):
                    self.send_header("Content-type", "text/javascript")
                elif pr.path.endswith('css'):
                    self.send_header("Content-type", "text/css")
                elif pr.path.endswith('svg'):
                    self.send_header("Content-type", "image/svg+xml")
                elif pr.path.endswith('jpg'):
                    self.send_header("Content-type", "image/jpeg")
                self.end_headers()
                self.wfile.write(bytes(content, encoding='utf8'))
            elif pr.path == "/display.html":
                content = displayHtml
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes(content, encoding='utf8'))
            elif pr.path == "/signin":
                self.signin(token)
            elif pr.path == "/login":
                self.auth('signin')
            elif pr.path == "/list":
                self.list(token)
            elif pr.path == "/exchange_code":
                if "code" in query:
                    code = query['code'][0]
                    print(code)
                    token_resp = authentication_client.get_access_token_by_code(
                        code)

                print(token_resp)
                if "token" in token_resp:
                    data = {"token": token_resp["token"][0]}
                    self.send_response(200)
                    self.end_headers()
                    self.wfile.write(bytes(json.dumps(data), encoding='utf8'))
                else:
                    self.send_response(400)
                    self.end_headers()
            elif pr.path == "/query_list":
                self.query_list(token, query["offset"][0])
            elif pr.path == "/health":
                self.health()
            elif pr.path == "/finish":
                self.dofinish(token)
            else:
                content = "Unknown Path"
                self.send_response(404)
                self.end_headers()
                self.wfile.write(bytes(content, encoding='utf8'))
        except Exception as e:
            print(e)
            content = "Something Wrong..."
            self.send_response(404)
            self.end_headers()
            self.wfile.write(bytes(content, encoding='utf8'))


class ThreadingHttpServer (ThreadingMixIn, HTTPServer):
    pass


class ReallyMySQLConnectionPool(mysql.connector.pooling.MySQLConnectionPool):
    def __init__(self, **mysql_config):
        pool_size = mysql_config.get('pool_size', 10)
        self._semaphore = Semaphore(pool_size)
        super().__init__(**mysql_config)

    def get_connection(self):
        self._semaphore.acquire()
        return super().get_connection()

    def put_connection(self, con):
        con.close()  # con是PooledMySQLConnection的实例
        self._semaphore.release()


if __name__ == "__main__":
    try:
        cfgfile = open("config.json", "r")
        cfg = json.load(cfgfile)
        cfgfile.close()
        print(cfg)

        authentication_client = AuthenticationClient(
            options=AuthenticationClientOptions(
                app_id=cfg['app_id'],
                app_host='https://pingcap.authing.cn',
                secret=cfg['app_secret'],
                protocol='oidc',
                redirect_uri='https://pingcap.authing.cn',
                token_endpoint_auth_method='client_secret_post'
            ))

        mydbpool = ReallyMySQLConnectionPool(pool_name="signin",
                                             pool_size=32,
                                             pool_reset_session=False,
                                             host=cfg['db'], port=cfg['db_port'],
                                             user=cfg['db_user'], password=cfg['db_pw'],
                                             database="signin")

        authHtml = open("auth.html").read()
        authHtml = authHtml.replace("app_id", cfg['app_id'])
        camHtml = open("cam.html").read()
        indexHtml = open("index.html").read()
        camHtml = camHtml.replace("pingcap_host", cfg['host'])
        listHtml = open("list.html").read()
        thanksHtml = open("thanks.html").read()
        displayHtml = open("display.html").read()
        myServer = ThreadingHttpServer(
            ('0.0.0.0', 8000), SimpleHTTPRequestHandler)
        myServer.serve_forever()
    finally:
        myServer.server_close()
        print("server close")
