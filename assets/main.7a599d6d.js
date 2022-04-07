var Ne=(T,f)=>()=>(f||T((f={exports:{}}).exports,f),f.exports);import{r as I,c as Te,g as Oe,u as se,i as ce,j as A,F as V,a as m,A as Ee,R as Re,b as _e}from"./useMeasure.54907f3e.js";var Xe=Ne((Ze,q)=>{var me={exports:{}};(function(T,f){(function(s,b){T.exports=b(I.exports)})(Te,function(v){return function(s){var b={};function l(i){if(b[i])return b[i].exports;var c=b[i]={i,l:!1,exports:{}};return s[i].call(c.exports,c,c.exports,l),c.l=!0,c.exports}return l.m=s,l.c=b,l.d=function(i,c,h){l.o(i,c)||Object.defineProperty(i,c,{enumerable:!0,get:h})},l.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,c){if(c&1&&(i=l(i)),c&8||c&4&&typeof i=="object"&&i&&i.__esModule)return i;var h=Object.create(null);if(l.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:i}),c&2&&typeof i!="string")for(var F in i)l.d(h,F,function(_){return i[_]}.bind(null,F));return h},l.n=function(i){var c=i&&i.__esModule?function(){return i.default}:function(){return i};return l.d(c,"a",c),c},l.o=function(i,c){return Object.prototype.hasOwnProperty.call(i,c)},l.p="",l(l.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(s,b,l){l.r(b);var i=l("react"),c=function(){var y=function(o,r){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,d){n.__proto__=d}||function(n,d){for(var u in d)d.hasOwnProperty(u)&&(n[u]=d[u])},y(o,r)};return function(o,r){y(o,r);function n(){this.constructor=o}o.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(){return h=Object.assign||function(y){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(y[d]=o[d])}return y},h.apply(this,arguments)},F=function(y,o){var r={};for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&o.indexOf(n)<0&&(r[n]=y[n]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(y);d<n.length;d++)o.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(y,n[d])&&(r[n[d]]=y[n[d]]);return r};(function(){typeof window!="undefined"&&(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(o){var r=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return r?new Promise(function(n,d){r.call(navigator,o,n,d)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function _(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var W=function(y){c(o,y);function o(r){var n=y.call(this,r)||this;return n.canvas=null,n.ctx=null,n.requestUserMediaId=0,n.unmounted=!1,n.state={hasUserMedia:!1},n}return o.prototype.componentDidMount=function(){var r=this,n=r.state,d=r.props;if(this.unmounted=!1,!_()){d.onUserMediaError("getUserMedia not supported");return}n.hasUserMedia||this.requestUserMedia(),d.children&&typeof d.children!="function"&&console.warn("children must be a function")},o.prototype.componentDidUpdate=function(r){var n=this.props;if(!_()){n.onUserMediaError("getUserMedia not supported");return}var d=JSON.stringify(r.audioConstraints)!==JSON.stringify(n.audioConstraints),u=JSON.stringify(r.videoConstraints)!==JSON.stringify(n.videoConstraints),P=r.minScreenshotWidth!==n.minScreenshotWidth,a=r.minScreenshotHeight!==n.minScreenshotHeight;(u||P||a)&&(this.canvas=null,this.ctx=null),(d||u)&&(this.stopAndCleanup(),this.requestUserMedia())},o.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},o.stopMediaStream=function(r){r&&(r.getVideoTracks&&r.getAudioTracks?(r.getVideoTracks().map(function(n){r.removeTrack(n),n.stop()}),r.getAudioTracks().map(function(n){r.removeTrack(n),n.stop()})):r.stop())},o.prototype.stopAndCleanup=function(){var r=this.state;r.hasUserMedia&&(o.stopMediaStream(this.stream),r.src&&window.URL.revokeObjectURL(r.src))},o.prototype.getScreenshot=function(r){var n=this,d=n.state,u=n.props;if(!d.hasUserMedia)return null;var P=this.getCanvas(r);return P&&P.toDataURL(u.screenshotFormat,u.screenshotQuality)},o.prototype.getCanvas=function(r){var n=this,d=n.state,u=n.props;if(!this.video||!d.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var P=this.video.videoWidth,a=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var g=P/a;P=u.minScreenshotWidth||this.video.clientWidth,a=P/g,u.minScreenshotHeight&&a<u.minScreenshotHeight&&(a=u.minScreenshotHeight,P=a*g)}this.canvas=document.createElement("canvas"),this.canvas.width=(r==null?void 0:r.width)||P,this.canvas.height=(r==null?void 0:r.height)||a,this.ctx=this.canvas.getContext("2d")}var S=this,k=S.ctx,p=S.canvas;return k&&p&&(u.mirrored&&(k.translate(p.width,0),k.scale(-1,1)),k.imageSmoothingEnabled=u.imageSmoothing,k.drawImage(this.video,0,0,(r==null?void 0:r.width)||p.width,(r==null?void 0:r.height)||p.height),u.mirrored&&(k.scale(-1,1),k.translate(-p.width,0))),p},o.prototype.requestUserMedia=function(){var r=this,n=this.props,d=function(a,g){var S={video:typeof g!="undefined"?g:!0};n.audio&&(S.audio=typeof a!="undefined"?a:!0),r.requestUserMediaId++;var k=r.requestUserMediaId;navigator.mediaDevices.getUserMedia(S).then(function(p){r.unmounted||k!==r.requestUserMediaId?o.stopMediaStream(p):r.handleUserMedia(null,p)}).catch(function(p){r.handleUserMedia(p)})};if("mediaDevices"in navigator)d(n.audioConstraints,n.videoConstraints);else{var u=function(a){return{optional:[{sourceId:a}]}},P=function(a){var g=a.deviceId;return typeof g=="string"?g:Array.isArray(g)&&g.length>0?g[0]:typeof g=="object"&&g.ideal?g.ideal:null};MediaStreamTrack.getSources(function(a){var g=null,S=null;a.forEach(function(j){j.kind==="audio"?g=j.id:j.kind==="video"&&(S=j.id)});var k=P(n.audioConstraints);k&&(g=k);var p=P(n.videoConstraints);p&&(S=p),d(u(g),u(S))})}},o.prototype.handleUserMedia=function(r,n){var d=this.props;if(r||!n){this.setState({hasUserMedia:!1}),d.onUserMediaError(r);return}this.stream=n;try{this.video&&(this.video.srcObject=n),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(n)})}d.onUserMedia(n)},o.prototype.render=function(){var r=this,n=this,d=n.state,u=n.props,P=u.audio;u.forceScreenshotSourceSize,u.onUserMedia,u.onUserMediaError,u.screenshotFormat,u.screenshotQuality,u.minScreenshotWidth,u.minScreenshotHeight,u.audioConstraints,u.videoConstraints,u.imageSmoothing;var a=u.mirrored,g=u.style,S=g===void 0?{}:g,k=u.children,p=F(u,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),j=a?h(h({},S),{transform:(S.transform||"")+" scaleX(-1)"}):S,Y={getScreenshot:this.getScreenshot.bind(this)};return i.createElement(i.Fragment,null,i.createElement("video",h({autoPlay:!0,src:d.src,muted:!P,playsInline:!0,ref:function(J){r.video=J},style:j},p)),k&&k(Y))},o.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},o}(i.Component);b.default=W},react:function(s,b){s.exports=v}}).default})})(me);var le=Oe(me.exports);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var B=function(){return B=Object.assign||function(f){for(var v,s=1,b=arguments.length;s<b;s++){v=arguments[s];for(var l in v)Object.prototype.hasOwnProperty.call(v,l)&&(f[l]=v[l])}return f},B.apply(this,arguments)},je=function(T){T===void 0&&(T={});var f=I.exports.useState(T),v=f[0],s=f[1],b=I.exports.useCallback(function(l){s(function(i){return Object.assign({},i,l instanceof Function?l(i):l)})},[]);return[v,b]},Ie=je;function ue(T){for(var f=[],v=0;v<T.length;v++)f.push({start:T.start(v),end:T.end(v)});return f}function Fe(T){return function(f){var v,s;I.exports.isValidElement(f)?(v=f,s=v.props):s=f;var b=Ie({buffered:[],time:0,duration:0,paused:!0,muted:!1,volume:1,playing:!1}),l=b[0],i=b[1],c=I.exports.useRef(null),h=function(a,g){return function(S){try{g&&g(S)}finally{a&&a(S)}}},F=function(){return i({paused:!1})},_=function(){return i({playing:!0})},W=function(){return i({playing:!1})},y=function(){return i({paused:!0,playing:!1})},o=function(){var a=c.current;!a||i({muted:a.muted,volume:a.volume})},r=function(){var a=c.current;if(!!a){var g=a.duration,S=a.buffered;i({duration:g,buffered:ue(S)})}},n=function(){var a=c.current;!a||i({time:a.currentTime})},d=function(){var a=c.current;!a||i({buffered:ue(a.buffered)})};v?v=I.exports.cloneElement(v,B(B({controls:!1},s),{ref:c,onPlay:h(s.onPlay,F),onPlaying:h(s.onPlaying,_),onWaiting:h(s.onWaiting,W),onPause:h(s.onPause,y),onVolumeChange:h(s.onVolumeChange,o),onDurationChange:h(s.onDurationChange,r),onTimeUpdate:h(s.onTimeUpdate,n),onProgress:h(s.onProgress,d)})):v=I.exports.createElement(T,B(B({controls:!1},s),{ref:c,onPlay:h(s.onPlay,F),onPlaying:h(s.onPlaying,_),onWaiting:h(s.onWaiting,W),onPause:h(s.onPause,y),onVolumeChange:h(s.onVolumeChange,o),onDurationChange:h(s.onDurationChange,r),onTimeUpdate:h(s.onTimeUpdate,n),onProgress:h(s.onProgress,d)}));var u=!1,P={play:function(){var a=c.current;if(!!a&&!u){var g=a.play(),S=typeof g=="object";if(S){u=!0;var k=function(){u=!1};g.then(k,k)}return g}},pause:function(){var a=c.current;if(a&&!u)return a.pause()},seek:function(a){var g=c.current;!g||l.duration===void 0||(a=Math.min(l.duration,Math.max(0,a)),g.currentTime=a)},volume:function(a){var g=c.current;!g||(a=Math.min(1,Math.max(0,a)),g.volume=a,i({volume:a}))},mute:function(){var a=c.current;!a||(a.muted=!0)},unmute:function(){var a=c.current;!a||(a.muted=!1)}};return I.exports.useEffect(function(){var a=c.current;!a||(i({volume:a.volume,muted:a.muted,paused:a.paused}),s.autoPlay&&a.paused&&P.play())},[s.src]),[v,l,P,c]}}var We=Fe("audio"),Ae=We,q={};(function T(f,v,s,b){var l=!!(f.Worker&&f.Blob&&f.Promise&&f.OffscreenCanvas&&f.OffscreenCanvasRenderingContext2D&&f.HTMLCanvasElement&&f.HTMLCanvasElement.prototype.transferControlToOffscreen&&f.URL&&f.URL.createObjectURL);function i(){}function c(t){var e=v.exports.Promise,M=e!==void 0?e:f.Promise;return typeof M=="function"?new M(t):(t(i,i),null)}var h=function(){var t=Math.floor(16.666666666666668),e,M,w={},U=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(C){var x=Math.random();return w[x]=requestAnimationFrame(function N(E){U===E||U+t-1<E?(U=E,delete w[x],C()):w[x]=requestAnimationFrame(N)}),x},M=function(C){w[C]&&cancelAnimationFrame(w[C])}):(e=function(C){return setTimeout(C,t)},M=function(C){return clearTimeout(C)}),{frame:e,cancel:M}}(),F=function(){var t,e,M={};function w(U){function C(x,N){U.postMessage({options:x||{},callback:N})}U.init=function(N){var E=N.transferControlToOffscreen();U.postMessage({canvas:E},[E])},U.fire=function(N,E,$){if(e)return C(N,null),e;var R=Math.random().toString(36).slice(2);return e=c(function(z){function L(O){O.data.callback===R&&(delete M[R],U.removeEventListener("message",L),e=null,$(),z())}U.addEventListener("message",L),C(N,R),M[R]=L.bind(null,{data:{callback:R}})}),e},U.reset=function(){U.postMessage({reset:!0});for(var N in M)M[N](),delete M[N]}}return function(){if(t)return t;if(!s&&l){var U=["var CONFETTI, SIZE = {}, module = {};","("+T.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([U])))}catch(C){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",C),null}w(t)}return t}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(t,e){return e?e(t):t}function y(t){return t!=null}function o(t,e,M){return W(t&&y(t[e])?t[e]:_[e],M)}function r(t){return t<0?0:Math.floor(t)}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function d(t){return parseInt(t,16)}function u(t){return t.map(P)}function P(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:d(e.substring(0,2)),g:d(e.substring(2,4)),b:d(e.substring(4,6))}}function a(t){var e=o(t,"origin",Object);return e.x=o(e,"x",Number),e.y=o(e,"y",Number),e}function g(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function S(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function k(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function p(t,e,M,w,U,C,x,N,E){t.save(),t.translate(e,M),t.rotate(C),t.scale(w,U),t.arc(0,0,1,x,N,E),t.restore()}function j(t){var e=t.angle*(Math.PI/180),M=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*M-Math.random()*M),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function Y(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var M=e.tick++/e.totalTicks,w=e.x+e.random*e.tiltCos,U=e.y+e.random*e.tiltSin,C=e.wobbleX+e.random*e.tiltCos,x=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-M)+")",t.beginPath(),e.shape==="circle"?t.ellipse?t.ellipse(e.x,e.y,Math.abs(C-w)*e.ovalScalar,Math.abs(x-U)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):p(t,e.x,e.y,Math.abs(C-w)*e.ovalScalar,Math.abs(x-U)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(U)),t.lineTo(Math.floor(C),Math.floor(x)),t.lineTo(Math.floor(w),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}function J(t,e,M,w,U){var C=e.slice(),x=t.getContext("2d"),N,E,$=c(function(R){function z(){N=E=null,x.clearRect(0,0,w.width,w.height),U(),R()}function L(){s&&!(w.width===b.width&&w.height===b.height)&&(w.width=t.width=b.width,w.height=t.height=b.height),!w.width&&!w.height&&(M(t),w.width=t.width,w.height=t.height),x.clearRect(0,0,w.width,w.height),C=C.filter(function(O){return Y(x,O)}),C.length?N=h.frame(L):z()}N=h.frame(L),E=z});return{addFettis:function(R){return C=C.concat(R),$},canvas:t,promise:$,reset:function(){N&&h.cancel(N),E&&E()}}}function te(t,e){var M=!t,w=!!o(e||{},"resize"),U=o(e,"disableForReducedMotion",Boolean),C=l&&!!o(e||{},"useWorker"),x=C?F():null,N=M?g:S,E=t&&x?!!t.__confetti_initialized:!1,$=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,R;function z(O,Q,K){for(var H=o(O,"particleCount",r),G=o(O,"angle",Number),X=o(O,"spread",Number),D=o(O,"startVelocity",Number),xe=o(O,"decay",Number),Me=o(O,"gravity",Number),Se=o(O,"drift",Number),ne=o(O,"colors",u),Ce=o(O,"ticks",Number),ae=o(O,"shapes"),ke=o(O,"scalar"),ie=a(O),oe=H,ee=[],Ue=t.width*ie.x,Pe=t.height*ie.y;oe--;)ee.push(j({x:Ue,y:Pe,angle:G,spread:X,startVelocity:D,color:ne[oe%ne.length],shape:ae[n(0,ae.length)],ticks:Ce,decay:xe,gravity:Me,drift:Se,scalar:ke}));return R?R.addFettis(ee):(R=J(t,ee,N,Q,K),R.promise)}function L(O){var Q=U||o(O,"disableForReducedMotion",Boolean),K=o(O,"zIndex",Number);if(Q&&$)return c(function(D){D()});M&&R?t=R.canvas:M&&!t&&(t=k(K),document.body.appendChild(t)),w&&!E&&N(t);var H={width:t.width,height:t.height};x&&!E&&x.init(t),E=!0,x&&(t.__confetti_initialized=!0);function G(){if(x){var D={getBoundingClientRect:function(){if(!M)return t.getBoundingClientRect()}};N(D),x.postMessage({resize:{width:D.width,height:D.height}});return}H.width=H.height=null}function X(){R=null,w&&f.removeEventListener("resize",G),M&&t&&(document.body.removeChild(t),t=null,E=!1)}return w&&f.addEventListener("resize",G,!1),x?x.fire(O,H,X):z(O,H,X)}return L.reset=function(){x&&x.reset(),R&&R.reset()},L}var Z;function re(){return Z||(Z=te(null,{useWorker:!0,resize:!0})),Z}v.exports=function(){return re().apply(this,arguments)},v.exports.reset=function(){re().reset()},v.exports.create=te})(function(){return typeof window!="undefined"?window:typeof self!="undefined"?self:this||{}}(),q,!1);var de=q.exports;q.exports.create;var Le="https://7anniversary.blob.core.windows.net/$web/assets/cheer.edd66a72.mp3",pe="https://7anniversary.blob.core.windows.net/$web/assets/pic-tl.6cfc85ae.svg",ve="https://7anniversary.blob.core.windows.net/$web/assets/pic-tr.00db4771.svg",De="https://7anniversary.blob.core.windows.net/$web/assets/pic-bl.49e26862.svg",be="https://7anniversary.blob.core.windows.net/$web/assets/pic-br.cabd1206.svg",he="https://7anniversary.blob.core.windows.net/$web/assets/frame.4c0b7093.svg",$e="https://7anniversary.blob.core.windows.net/$web/assets/title.270303a9.svg",ze="https://7anniversary.blob.core.windows.net/$web/assets/title-m.cbbbe27a.svg",ye="https://7anniversary.blob.core.windows.net/$web/assets/dot-bl.e3f5e76e.svg",we="https://7anniversary.blob.core.windows.net/$web/assets/dot-tr.cd13e70b.svg",fe="https://7anniversary.blob.core.windows.net/$web/assets/loading.f7b1362b.svg";const He=()=>A(V,{children:[m("img",{className:"absolute top-0 left-0 block origin-top-left scale-75 bg-left-top bg-no-repeat xl:scale-90 2xl:scale-100",src:pe,style:{width:"164px",height:"164px"}}),m("img",{className:"absolute top-0 right-0 block origin-top-right scale-75 bg-right-top bg-no-repeat xl:scale-90 2xl:scale-100",src:we,style:{width:"259px",height:"259px"}}),m("img",{className:"block absolute right-[90px] top-[110px] bg-no-repeat bg-right-top origin-top-right scale-75 xl:scale-90 2xl:scale-100",src:ve,style:{width:"147px",height:"147px"}}),m("img",{className:"absolute bottom-0 left-0 block origin-bottom-left scale-75 bg-left-bottom bg-no-repeat xl:scale-90 2xl:scale-100",src:ye,style:{width:"259px",height:"259px"}}),m("img",{className:"block absolute left-[140px] bottom-[50px] bg-no-repeat bg-left-bottom origin-bottom-left scale-75 xl:scale-90 2xl:scale-100",src:De,style:{width:"112px",height:"112px"}}),m("img",{className:"absolute bottom-0 right-0 block origin-bottom-right scale-75 bg-right-bottom bg-no-repeat xl:scale-90 2xl:scale-100",src:be,style:{width:"164px",height:"164px"}})]}),Ve=()=>A(V,{children:[m("img",{className:"block absolute right-0 top-0 transform bg-no-repeat bg-right-top origin-top-right scale-[0.4]",src:we,style:{width:"259px",height:"259px"}}),m("img",{className:"block absolute left-0 bottom-0 bg-no-repeat bg-left-bottom origin-bottom-left  scale-[0.5]",src:ye,style:{width:"259px",height:"259px"}}),m("img",{className:"block absolute bottom-[42px] left-0 bg-no-repeat bg-left-top origin-left scale-[0.42]",src:pe,style:{width:"164px",height:"164px"}}),m("img",{className:"block absolute right-0 bottom-0 bg-no-repeat bg-right-bottom origin-bottom-right scale-[0.42]",src:be,style:{width:"164px",height:"164px"}}),m("img",{className:"block absolute bottom-[30px] left-[50%] bg-no-repeat bg-top",src:ve,style:{width:"147px",height:"147px",transform:"translateX(-50%) scale(0.6)"}})]}),ge=()=>{const f=Date.now()+1e4,v={startVelocity:30,spread:360,ticks:60,zIndex:0};function s(l,i){return Math.random()*(i-l)+l}const b=setInterval(function(){const l=f-Date.now();if(l<=0)return clearInterval(b);const i=50*(l/1e4);de(Object.assign({},v,{particleCount:i,origin:{x:s(.1,.3),y:Math.random()-.2}})),de(Object.assign({},v,{particleCount:i,origin:{x:s(.7,.9),y:Math.random()-.2}}))},250)},Be=async(T,f,v)=>{const s=document.getElementById("wcrop"),b=s.getContext("2d");var l=new Image;return l.src=T,new Promise(i=>{l.onload=()=>{const c=l.naturalHeight,h=l.naturalWidth;b==null||b.drawImage(l,0,-.2*(c/h*f),f,c/h*f),i(s.toDataURL("image/jpeg",1))}})},qe=()=>{const[T,,f]=Ae({src:Le,autoPlay:!1}),[v,{width:s,height:b}]=se(),[l,{width:i,height:c}]=se(),h=I.exports.useRef(null),F=I.exports.useRef(null),[_,W]=I.exports.useState("unfinished"),y=I.exports.useRef(!1),[o,r]=I.exports.useState("cam"),[n,d]=I.exports.useState(""),[u,P]=I.exports.useState("PingCAPer"),a=I.exports.useCallback(async()=>{var S;if(h.current&&!y.current){const k=h.current.getScreenshot();d(k),r("image"),W("checking"),y.current=!0;try{const p=await((S=ce.exports.getAuthClient())==null?void 0:S.getCurrentUser());P((p==null?void 0:p.name)||"PingCAPer"),await fetch("https://7th.pingcap.net",{method:"POST",body:JSON.stringify({photo:k,name:(p==null?void 0:p.name)||"Unknown"}),headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+(p==null?void 0:p.token)})}),f.play(),ge(),W("finished")}catch(p){console.error(p),W("unfinished")}finally{y.current=!1}}},[h]),g=I.exports.useCallback(async()=>{var S;if(F.current&&!y.current){const k=F.current.getScreenshot();d(k),r("image"),W("checking"),y.current=!0;try{const p=await Be(k,i,c),j=await((S=ce.exports.getAuthClient())==null?void 0:S.getCurrentUser());P((j==null?void 0:j.name)||"PingCAPer"),await fetch("https://7th.pingcap.net",{method:"POST",body:JSON.stringify({photo:p,name:(j==null?void 0:j.name)||"Unknown"}),headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+(j==null?void 0:j.token)})}),f.play(),ge(),W("finished")}catch(p){console.error(p),W("unfinished")}finally{y.current=!1}}},[F,i,c]);return A(V,{children:[m("div",{className:"absolute w-0 h-0 opacity-0 pointer-events-none",children:T}),A("div",{className:"h-full w-full min-h-[640px] relative hidden lg:flex",children:[m(He,{}),m("div",{className:"absolute inset-0 z-[100] flex items-center justify-center",children:A("div",{className:"flex w-full pl-20 justify-evenly pr-28",children:[m("div",{className:"origin-center scale-75 bg-left bg-no-repeat xl:scale-90 2xl:scale-100",style:{backgroundImage:`url(${$e})`,width:"367px",height:"481px"}}),A("div",{className:"flex flex-col items-center",children:[m("div",{className:"relative flex origin-center scale-75 bg-right bg-no-repeat xl:scale-90 2xl:scale-100",style:{backgroundImage:`url(${he})`,width:"700px",height:"474px",padding:"5.7143% 6.2857% 5.4286% 6.4286%"},children:m("div",{className:"flex-grow w-full overflow-hidden bg-white",ref:v,children:s&&b?o==="cam"?m(le,{ref:h,minScreenshotWidth:s,minScreenshotHeight:b,style:{width:s,height:b},screenshotFormat:"image/jpeg",videoConstraints:{height:b,width:s}}):m("img",{src:n,className:"block"}):m(V,{})})}),A("button",{className:`flex items-center mt-10 px-8 h-10 rounded-3xl transform bg-white text-vi-base text-lg font-semibold outline-none border-none cursor-pointer shadow-btn-white transition-all ${_==="checking"?"cursor-wait":_==="finished"?"shadow-none text-white bg-transparent tracking-widest":"hover:shadow-btn-white-hover active:scale-90"}`,onClick:a,children:[_==="checking"&&m("div",{className:"w-5 h-5 mr-4 bg-no-repeat animate-spin",style:{backgroundImage:`url(${fe})`}}),_==="finished"?`\u{1F389}  Welcome, ${u}  \u{1F389}`:"Check In"]})]})]})})]}),A("div",{className:"relative w-full h-full min-h-screen lg:hidden",children:[m(Ve,{}),A("div",{className:"absolute inset-0 z-[100] flex flex-col items-center px-6 py-12",children:[m("img",{src:ze,className:"block mb-8"}),A("div",{className:"relative",children:[m("img",{src:he,className:"block"}),m("div",{className:"absolute inset-0 flex flex-col",style:{padding:"5.7143% 6.2857% 5.4286% 6.4286%"},children:m("div",{className:"flex-grow w-full overflow-hidden bg-white",ref:l,children:i&&c?A(V,{children:[m("canvas",{id:"wcrop",className:"absolute opacity-0 pointer-events-none",width:i,height:c}),o==="cam"?m(le,{ref:F,minScreenshotWidth:i,minScreenshotHeight:c,style:{minWidth:"100%",transform:"translateY(-20%)"},screenshotFormat:"image/jpeg",forceScreenshotSourceSize:!0}):m("img",{src:n,className:"block",style:{transform:"translateY(-20%)"}})]}):m(V,{})})})]}),A("button",{className:`flex items-center mt-12 px-8 h-10 rounded-3xl transform bg-white text-vi-base text-lg font-semibold outline-none border-none cursor-pointer shadow-btn-white transition-all ${_==="checking"?"cursor-wait":_==="finished"?"shadow-none text-white bg-transparent tracking-widest":"hover:shadow-btn-white-hover active:scale-90"}`,onClick:g,children:[_==="checking"&&m("div",{className:"w-5 h-5 mr-4 bg-no-repeat animate-spin",style:{backgroundImage:`url(${fe})`}}),_==="finished"?`\u{1F389}  Welcome, ${u}  \u{1F389}`:"Check In"]})]})]})]})},Ge=()=>m("div",{className:"h-full bg-vi-base lg:min-w-[1280px]",children:m(Ee,{children:m(qe,{})})});Re.render(m(_e.StrictMode,{children:m(Ge,{})}),document.getElementById("root"))});export default Xe();
