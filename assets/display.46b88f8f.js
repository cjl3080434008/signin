import{u as X,r as p,a as o,A as Y,j as _,F as A,i as C,R as H,b as $}from"./useMeasure.b2b67adf.js";var k="https://7th.azureedge.net/$web/assets/vi7th.a14b08ab.jpg";const d=72,z=13,U=5,B=27,N=(l,n)=>{var c;const r=[[1,1,1,1,0,1,1,1,0,1,0,0,1],[0,0,0,1,0,0,1,0,0,1,0,0,1],[0,0,1,0,0,0,1,0,0,1,1,1,1],[0,1,0,0,0,0,1,0,0,1,0,0,1],[0,1,0,0,0,0,1,0,0,1,0,0,1]];return((c=r==null?void 0:r[l])==null?void 0:c[n])===1},R=({x:l,y:n,baseX7:r,baseY7:c,imgSrc:i})=>{const m=N(n-c,l-r);return o("div",{className:`absolute box-border h-[72px] w-[72px] flex overflow-hidden items-center justify-center ${m||!i?"bg-transparent":"bg-white"}`,style:{left:l*d,top:n*d},children:!m&&i&&o("img",{src:i,className:"w-[70px] h-[70px] block object-cover"})})},S=()=>{const[l,{width:n,height:r}]=X(),{xItemNum:c,yItemNum:i,baseXOffset:m,baseYOffset:y,baseX7:M,baseY7:j,cubeIdxs:g}=p.exports.useMemo(()=>{const e=Math.floor(n/d),t=Math.floor(r/d),s=(n-e*d)/2,h=(r-t*d)/2,a=Math.floor((e-z)/2),b=Math.floor((t-U)/2),u=[],x=[];for(let f=0;f<e*t;f+=1){const O=Math.floor(f/e),T=f%e;N(O-b,T-a)?x.push(f):u.push(f)}u.sort(()=>Math.random()>.5?-1:1);const v=[...u,...x];return{xItemNum:e,yItemNum:t,baseXOffset:s,baseYOffset:h,baseX7:a,baseY7:b,cubeIdxs:v}},[n,r]),[w,I]=p.exports.useState([]);p.exports.useEffect(()=>{(async()=>{let e=0;const t=async(s=0)=>{var h;try{const a=await((h=C.exports.getAuthClient())==null?void 0:h.getCurrentUser()),b=await fetch("https://7th.pingcap.net/query_list?offset="+s,{method:"GET",mode:"cors",headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+(a==null?void 0:a.token)})}),{next_offset:u,pics:x=[]}=await b.json();s=u,I(v=>[...v,...x])}catch(a){console.error(a)}window.setTimeout(()=>{t(s)},5*1e3)};t(e)})()},[]);const E=p.exports.useMemo(()=>{const e=w.slice(0,c*i),t=[];if(e!=null&&e.length)for(let s=0;s<g.length;s+=1){const h=g[s],a=(e==null?void 0:e[s])&&g.length-s>B?e==null?void 0:e[s]:"";t[h]=a}return t},[w,c,i]);return o("div",{className:"h-screen max-h-screen overflow-hidden bg-vi-base lg:min-w-[1280px] flex flex-col pl-2 box-border",children:o(Y,{children:_("div",{className:"relative flex-grow",ref:l,children:[o("div",{className:"absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-20",children:o("img",{src:k,className:"block object-contain w-full h-full"})}),n?o("div",{className:"z-20",style:{transform:`translate(${m}px, ${y}px)`},children:E.map((e,t)=>o(R,{y:Math.floor(t/c),x:t%c,baseX7:M,baseY7:j,imgSrc:e},`${t}`))}):o(A,{})]})})})};H.render(o($.StrictMode,{children:o(S,{})}),document.getElementById("root"));