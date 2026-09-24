(()=>{var Kp=Object.defineProperty;var Xp=(e,t)=>{for(var i in t)Kp(e,i,{get:t[i],enumerable:!0})};var Is={};Xp(Is,{ACESFilmicToneMapping:()=>xs,Box3:()=>dt,BufferGeometry:()=>zt,Color:()=>Re,DirectionalLight:()=>fl,DoubleSide:()=>Nt,EdgesGeometry:()=>Nh,EquirectangularReflectionMapping:()=>ln,GLTFLoader:()=>Gv,Group:()=>xi,KTX2Loader:()=>wn,LineBasicMaterial:()=>yn,LineSegments:()=>xa,LinearFilter:()=>ht,LinearSRGBColorSpace:()=>Gt,LoadingManager:()=>pl,MathUtils:()=>Ea,Mesh:()=>mt,MeshBasicMaterial:()=>Fi,MeshDepthMaterial:()=>Al,MeshPhysicalMaterial:()=>Ci,MeshStandardMaterial:()=>yi,MeshoptDecoder:()=>Rx,NoColorSpace:()=>vi,OrbitControls:()=>Mv,OrthographicCamera:()=>Yr,PMREMGenerator:()=>vs,PerspectiveCamera:()=>Zt,Plane:()=>Ei,PlaneGeometry:()=>Xr,Raycaster:()=>Gh,RepeatWrapping:()=>Mr,SRGBColorSpace:()=>Et,Scene:()=>ys,ShaderChunk:()=>Ge,ShaderMaterial:()=>wi,Sphere:()=>Ot,Vector2:()=>Ce,Vector3:()=>D,Vector4:()=>at,WebGLRenderTarget:()=>ui,WebGLRenderer:()=>Hh,acceleratedRaycast:()=>Ry,computeBoundsTree:()=>Py,disposeBoundsTree:()=>Ly});var on={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},an={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yp=0,vd=1,Jp=2,No=1,Zp=2,Zn=3,hr=0,di=1,Nt=2,Ir=0,ts=1,xd=2,yd=3,Cd=4,$p=5,Za=100,ef=101,tf=102,rf=103,af=104,nf=200,sf=201,of=202,lf=203,pA=204,fA=205,cf=206,hf=207,df=208,uf=209,Af=210,pf=211,ff=212,gf=213,mf=214,Lc=0,Fc=1,Nc=2,ss=3,Uc=4,kc=5,Qc=6,Oc=7,gA=0,bf=1,_f=2,lr=0,mA=1,bA=2,_A=3,xs=4,EA=5,vA=6,xA=7,Id="attached",Ef="detached",yA=300,qr=301,fn=302,ln=303,Bl=304,ll=306,Mr=1e3,Wi=1001,Wo=1002,Mt=1003,xh=1004,$n=1005,ht=1006,Uo=1007,qi=1008,Ne=1009,CA=1010,IA=1011,_a=1012,yh=1013,Xi=1014,Ut=1015,$t=1016,Ch=1017,Ih=1018,os=1020,cl=35902,hl=35899,SA=1021,ls=1022,It=1023,wr=1026,pa=1027,Vr=1028,dl=1029,Li=1030,Sh=1031,Mh=1033,cn=33776,fa=33777,ko=33778,ga=33779,qo=35840,Gc=35841,gn=35842,cs=35843,jo=36196,hs=37492,ds=37496,Ko=37488,Xo=37489,us=37490,Yo=37491,ma=37808,Hc=37809,zc=37810,Vc=37811,hn=37812,Wc=37813,qc=37814,jc=37815,Kc=37816,Xc=37817,Yc=37818,Jc=37819,Zc=37820,$c=37821,mn=36492,eh=36494,Jo=36495,Zo=36283,$o=36284,As=36285,el=36286,ps=2300,fs=2301,Rl=2302,Sd=2303,Md=2400,wd=2401,Td=2402,vf=2500,xf=0,MA=1,th=2,yf=3200,ih=0,Cf=1,vi="",Et="srgb",Gt="srgb-linear",tl="linear",tt="srgb",Dl=7680,If=519,Sf=512,Mf=513,wf=514,wh=515,Tf=516,Bf=517,Th=518,Rf=519,wA=35044,Bd="300 es",ji=2e3,gs=2001;function Df(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ms(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Lf(){let e=ms("canvas");return e.style.display="block",e}var Rd={},bn=null;function il(...e){let t="THREE."+e.shift();bn?bn("log",t,...e):console.log(t,...e)}function TA(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Se(...e){e=TA(e);let t="THREE."+e.shift();if(bn)bn("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Fe(...e){e=TA(e);let t="THREE."+e.shift();if(bn)bn("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function dn(...e){let t=e.join(" ");t in Rd||(Rd[t]=!0,Se(...e))}function Ff(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Nf={[Lc]:Fc,[Nc]:Qc,[Uc]:Oc,[ss]:kc,[Fc]:Lc,[Qc]:Nc,[Oc]:Uc,[kc]:ss},Kr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,un=Math.PI/180,_n=180/Math.PI;function Ki(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ii[e&255]+ii[e>>8&255]+ii[e>>16&255]+ii[e>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[i&63|128]+ii[i>>8&255]+"-"+ii[i>>16&255]+ii[i>>24&255]+ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]).toLowerCase()}function ke(e,t,i){return Math.max(t,Math.min(i,e))}function Bh(e,t){return(e%t+t)%t}function Uf(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function kf(e,t,i){return e!==t?(i-e)/(t-e):0}function is(e,t,i){return(1-i)*e+i*t}function Qf(e,t,i,r){return is(e,t,1-Math.exp(-i*r))}function Of(e,t=1){return t-Math.abs(Bh(e,t*2)-t)}function Gf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Hf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function zf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Vf(e,t){return e+Math.random()*(t-e)}function Wf(e){return e*(.5-Math.random())}function qf(e){e!==void 0&&(Dd=e);let t=Dd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jf(e){return e*un}function Kf(e){return e*_n}function Xf(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Yf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Jf(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Zf(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),h=s((t+r)/2),u=n((t-r)/2),d=s((t-r)/2),A=n((r-t)/2),m=s((r-t)/2);switch(a){case"XYX":e.set(o*h,l*u,l*d,o*c);break;case"YZY":e.set(l*d,o*h,l*u,o*c);break;case"ZXZ":e.set(l*u,l*d,o*h,o*c);break;case"XZX":e.set(o*h,l*m,l*A,o*c);break;case"YXY":e.set(l*A,o*h,l*m,o*c);break;case"ZYZ":e.set(l*m,l*A,o*h,o*c);break;default:Se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Vi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ea={DEG2RAD:un,RAD2DEG:_n,generateUUID:Ki,clamp:ke,euclideanModulo:Bh,mapLinear:Uf,inverseLerp:kf,lerp:is,damp:Qf,pingpong:Of,smoothstep:Gf,smootherstep:Hf,randInt:zf,randFloat:Vf,randFloatSpread:Wf,seededRandom:qf,degToRad:jf,radToDeg:Kf,isPowerOfTwo:Xf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:Zf,normalize:it,denormalize:Vi},BA=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ke(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};BA.prototype.isVector2=!0;var Ce=BA,Yi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],u=a[n+0],d=a[n+1],A=a[n+2],m=a[n+3];if(h!==m||o!==u||l!==d||c!==A){let g=o*u+l*d+c*A+h*m;g<0&&(u=-u,d=-d,A=-A,m=-m,g=-g);let f=1-s;if(g<.9995){let p=Math.acos(g),x=Math.sin(p);f=Math.sin(f*p)/x,s=Math.sin(s*p)/x,o=o*f+u*s,l=l*f+d*s,c=c*f+A*s,h=h*f+m*s}else{o=o*f+u*s,l=l*f+d*s,c=c*f+A*s,h=h*f+m*s;let p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],u=a[n+1],d=a[n+2],A=a[n+3];return e[t]=s*A+c*h+o*d-l*u,e[t+1]=o*A+c*u+l*h-s*d,e[t+2]=l*A+c*d+s*u-o*h,e[t+3]=c*A-s*h-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),u=o(i/2),d=o(r/2),A=o(a/2);switch(n){case"XYZ":this._x=u*c*h+l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h-u*d*A;break;case"YXZ":this._x=u*c*h+l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h+u*d*A;break;case"ZXY":this._x=u*c*h-l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h-u*d*A;break;case"ZYX":this._x=u*c*h-l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h+u*d*A;break;case"YZX":this._x=u*c*h+l*d*A,this._y=l*d*h+u*c*A,this._z=l*c*A-u*d*h,this._w=l*c*h-u*d*A;break;case"XZY":this._x=u*c*h-l*d*A,this._y=l*d*h-u*c*A,this._z=l*c*A+u*d*h,this._w=l*c*h+u*d*A;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],u=i+s+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(a-l)*d,this._z=(n-r)*d}else if(i>s&&i>h){let d=2*Math.sqrt(1+i-s-h);this._w=(c-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(a+l)/d}else if(s>h){let d=2*Math.sqrt(1+s-i-h);this._w=(a-l)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+c)/d}else{let d=2*Math.sqrt(1+h-i-s);this._w=(n-r)/d,this._x=(a+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},RA=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pd.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pd.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),u=2*(n*r-s*i);return this.x=i+l*c+s*u-o*h,this.y=r+l*h+o*c-n*u,this.z=a+l*u+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this.z=ke(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this.z=ke(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ke(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};RA.prototype.isVector3=!0;var D=RA,Pl=new D,Pd=new Yi,DA=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],u=r[7],d=r[2],A=r[5],m=r[8],g=a[0],f=a[3],p=a[6],x=a[1],v=a[4],b=a[7],_=a[2],S=a[5],M=a[8];return n[0]=s*g+o*x+l*_,n[3]=s*f+o*v+l*S,n[6]=s*p+o*b+l*M,n[1]=c*g+h*x+u*_,n[4]=c*f+h*v+u*S,n[7]=c*p+h*b+u*M,n[2]=d*g+A*x+m*_,n[5]=d*f+A*v+m*S,n[8]=d*p+A*b+m*M,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*s-o*c,d=o*l-h*n,A=c*n-s*l,m=i*u+r*d+a*A;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=u*g,t[1]=(a*c-h*r)*g,t[2]=(o*r-a*s)*g,t[3]=d*g,t[4]=(h*i-a*l)*g,t[5]=(a*n-o*i)*g,t[6]=A*g,t[7]=(r*l-c*i)*g,t[8]=(s*i-r*n)*g,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return dn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,i)),this}rotate(t){return dn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,i){return dn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};DA.prototype.isMatrix3=!0;var He=DA,Ll=new He,Ld=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){let e={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===tt&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===tt&&(a.r=An(a.r),a.g=An(a.g),a.b=An(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vi?tl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return dn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return dn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Gt]:{primaries:t,whitePoint:r,transfer:tl,toXYZ:Ld,fromXYZ:Fd,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:t,whitePoint:r,transfer:tt,toXYZ:Ld,fromXYZ:Fd,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),e}var ze=$f();function Sr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function An(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ma,eg=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ma===void 0&&(Ma=ms("canvas")),Ma.width=e.width,Ma.height=e.height;let r=Ma.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Sr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tg=0,Rh=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Fl(r[n].image)):a.push(Fl(r[n]))}else a=Fl(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Fl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?eg.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}var ig=0,Nl=new D,Ai=class Qo extends Kr{constructor(t=Qo.DEFAULT_IMAGE,i=Qo.DEFAULT_MAPPING,r=Wi,a=Wi,n=ht,s=qi,o=It,l=Ne,c=Qo.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Ki(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Se(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yA)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ai.DEFAULT_IMAGE=null;Ai.DEFAULT_MAPPING=yA;Ai.DEFAULT_ANISOTROPY=1;var PA=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],A=s[2],m=s[6],g=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-A)<.01&&Math.abs(d-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+A)<.1&&Math.abs(d+m)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,x=(u+1)/2,v=(g+1)/2,b=(l+h)/4,_=(c+A)/4,S=(d+m)/4;return p>x&&p>v?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=b/r,n=_/r):x>v?x<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(x),r=b/a,n=S/a):v<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(v),r=_/n,a=S/n),this.set(r,a,n,i),this}let f=Math.sqrt((m-d)*(m-d)+(c-A)*(c-A)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(m-d)/f,this.y=(c-A)/f,this.z=(h-l)/f,this.w=Math.acos((o+u+g-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this.z=ke(this.z,t.z,i.z),this.w=ke(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this.z=ke(this.z,t,i),this.w=ke(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ke(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};PA.prototype.isVector4=!0;var at=PA,rg=class extends Kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Ai(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Rh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends rg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},LA=class extends Ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},FA=class extends Ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},NA=class UA{constructor(t,i,r,a,n,s,o,l,c,h,u,d,A,m,g,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,u,d,A,m,g,f)}set(t,i,r,a,n,s,o,l,c,h,u,d,A,m,g,f){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=A,p[7]=m,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new UA().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/wa.setFromMatrixColumn(t,0).length(),n=1/wa.setFromMatrixColumn(t,1).length(),s=1/wa.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),u=Math.sin(n);if(t.order==="XYZ"){let d=s*h,A=s*u,m=o*h,g=o*u;i[0]=l*h,i[4]=-l*u,i[8]=c,i[1]=A+m*c,i[5]=d-g*c,i[9]=-o*l,i[2]=g-d*c,i[6]=m+A*c,i[10]=s*l}else if(t.order==="YXZ"){let d=l*h,A=l*u,m=c*h,g=c*u;i[0]=d+g*o,i[4]=m*o-A,i[8]=s*c,i[1]=s*u,i[5]=s*h,i[9]=-o,i[2]=A*o-m,i[6]=g+d*o,i[10]=s*l}else if(t.order==="ZXY"){let d=l*h,A=l*u,m=c*h,g=c*u;i[0]=d-g*o,i[4]=-s*u,i[8]=m+A*o,i[1]=A+m*o,i[5]=s*h,i[9]=g-d*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let d=s*h,A=s*u,m=o*h,g=o*u;i[0]=l*h,i[4]=m*c-A,i[8]=d*c+g,i[1]=l*u,i[5]=g*c+d,i[9]=A*c-m,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let d=s*l,A=s*c,m=o*l,g=o*c;i[0]=l*h,i[4]=g-d*u,i[8]=m*u+A,i[1]=u,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=A*u+m,i[10]=d-g*u}else if(t.order==="XZY"){let d=s*l,A=s*c,m=o*l,g=o*c;i[0]=l*h,i[4]=-u,i[8]=c*h,i[1]=d*u+g,i[5]=s*h,i[9]=A*u-m,i[2]=m*u-A,i[6]=o*h,i[10]=g*u+d}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ag,t,ng)}lookAt(t,i,r){let a=this.elements;return Si.subVectors(t,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Fr.crossVectors(r,Si),Fr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Fr.crossVectors(r,Si)),Fr.normalize(),Qs.crossVectors(Si,Fr),a[0]=Fr.x,a[4]=Qs.x,a[8]=Si.x,a[1]=Fr.y,a[5]=Qs.y,a[9]=Si.y,a[2]=Fr.z,a[6]=Qs.z,a[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],u=r[5],d=r[9],A=r[13],m=r[2],g=r[6],f=r[10],p=r[14],x=r[3],v=r[7],b=r[11],_=r[15],S=a[0],M=a[4],E=a[8],y=a[12],R=a[1],T=a[5],B=a[9],N=a[13],P=a[2],Q=a[6],j=a[10],z=a[14],ne=a[3],K=a[7],J=a[11],Y=a[15];return n[0]=s*S+o*R+l*P+c*ne,n[4]=s*M+o*T+l*Q+c*K,n[8]=s*E+o*B+l*j+c*J,n[12]=s*y+o*N+l*z+c*Y,n[1]=h*S+u*R+d*P+A*ne,n[5]=h*M+u*T+d*Q+A*K,n[9]=h*E+u*B+d*j+A*J,n[13]=h*y+u*N+d*z+A*Y,n[2]=m*S+g*R+f*P+p*ne,n[6]=m*M+g*T+f*Q+p*K,n[10]=m*E+g*B+f*j+p*J,n[14]=m*y+g*N+f*z+p*Y,n[3]=x*S+v*R+b*P+_*ne,n[7]=x*M+v*T+b*Q+_*K,n[11]=x*E+v*B+b*j+_*J,n[15]=x*y+v*N+b*z+_*Y,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],A=t[14],m=t[3],g=t[7],f=t[11],p=t[15],x=l*A-c*d,v=o*A-c*u,b=o*d-l*u,_=s*A-c*h,S=s*d-l*h,M=s*u-o*h;return i*(g*x-f*v+p*b)-r*(m*x-f*_+p*S)+a*(m*v-g*_+p*M)-n*(m*b-g*S+f*M)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],A=t[11],m=t[12],g=t[13],f=t[14],p=t[15],x=i*o-r*s,v=i*l-a*s,b=i*c-n*s,_=r*l-a*o,S=r*c-n*o,M=a*c-n*l,E=h*g-u*m,y=h*f-d*m,R=h*p-A*m,T=u*f-d*g,B=u*p-A*g,N=d*p-A*f,P=x*N-v*B+b*T+_*R-S*y+M*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/P;return t[0]=(o*N-l*B+c*T)*Q,t[1]=(a*B-r*N-n*T)*Q,t[2]=(g*M-f*S+p*_)*Q,t[3]=(d*S-u*M-A*_)*Q,t[4]=(l*R-s*N-c*y)*Q,t[5]=(i*N-a*R+n*y)*Q,t[6]=(f*b-m*M-p*v)*Q,t[7]=(h*M-d*b+A*v)*Q,t[8]=(s*B-o*R+c*E)*Q,t[9]=(r*R-i*B-n*E)*Q,t[10]=(m*S-g*b+p*x)*Q,t[11]=(u*b-h*S-A*x)*Q,t[12]=(o*y-s*T-l*E)*Q,t[13]=(i*T-r*y+a*E)*Q,t[14]=(g*v-m*_-f*x)*Q,t[15]=(h*_-u*v+d*x)*Q,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,u=o+o,d=n*c,A=n*h,m=n*u,g=s*h,f=s*u,p=o*u,x=l*c,v=l*h,b=l*u,_=r.x,S=r.y,M=r.z;return a[0]=(1-(g+p))*_,a[1]=(A+b)*_,a[2]=(m-v)*_,a[3]=0,a[4]=(A-b)*S,a[5]=(1-(d+p))*S,a[6]=(f+x)*S,a[7]=0,a[8]=(m+v)*M,a[9]=(f-x)*M,a[10]=(1-(d+g))*M,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=wa.set(a[0],a[1],a[2]).length(),o=wa.set(a[4],a[5],a[6]).length(),l=wa.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Oi.copy(this);let c=1/s,h=1/o,u=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,i.setFromRotationMatrix(Oi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=ji,l=!1){let c=this.elements,h=2*n/(i-t),u=2*n/(r-a),d=(i+t)/(i-t),A=(r+a)/(r-a),m,g;if(l)m=n/(s-n),g=s*n/(s-n);else if(o===ji)m=-(s+n)/(s-n),g=-2*s*n/(s-n);else if(o===gs)m=-s/(s-n),g=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=ji,l=!1){let c=this.elements,h=2/(i-t),u=2/(r-a),d=-(i+t)/(i-t),A=-(r+a)/(r-a),m,g;if(l)m=1/(s-n),g=s/(s-n);else if(o===ji)m=-2/(s-n),g=-(s+n)/(s-n);else if(o===gs)m=-1/(s-n),g=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=A,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};NA.prototype.isMatrix4=!0;var Le=NA,wa=new D,Oi=new Le,ag=new D(0,0,0),ng=new D(1,1,1),Fr=new D,Qs=new D,Si=new D,Nd=new Le,Ud=new Yi,En=class kA{constructor(t=0,i=0,r=0,a=kA.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],u=a[2],d=a[6],A=a[10];switch(i){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,A),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nd,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Dh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,kd=new D,Ta=new Yi,fr=new Le,Os=new D,Dn=new D,og=new D,lg=new Yi,Qd=new D(1,0,0),Od=new D(0,1,0),Gd=new D(0,0,1),Hd={type:"added"},cg={type:"removed"},Ba={type:"childadded",child:null},Ul={type:"childremoved",child:null},Ht=class Oo extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oo.DEFAULT_UP.clone();let t=new D,i=new En,r=new Yi,a=new D(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Le},normalMatrix:{value:new He}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Oo.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oo.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ta.setFromAxisAngle(t,i),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(t,i){return Ta.setFromAxisAngle(t,i),this.quaternion.premultiply(Ta),this}rotateX(t){return this.rotateOnAxis(Qd,t)}rotateY(t){return this.rotateOnAxis(Od,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,i){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Qd,t)}translateY(t){return this.translateOnAxis(Od,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Os.copy(t):Os.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Dn,Os,this.up):fr.lookAt(Os,Dn,this.up),this.quaternion.setFromRotationMatrix(fr),a&&(fr.extractRotation(a.matrixWorld),Ta.setFromRotationMatrix(fr),this.quaternion.premultiply(Ta.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cg),Ul.child=t,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];n(t.shapes,u)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),d=s(t.skeletons),A=s(t.animations),m=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),d.length>0&&(r.skeletons=d),A.length>0&&(r.animations=A),m.length>0&&(r.nodes=m)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},kl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let m of e.hand.values()){let g=t.getJointPose(m,i),f=this._getHandJoint(l,m);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),d=.02,A=.005;l.inputState.pinching&&u>d+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},QA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ql(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ze.workingColorSpace){if(e=Bh(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Ql(n,a,e+1/3),this.g=Ql(n,a,e),this.b=Ql(n,a,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function i(a){a!==void 0&&parseFloat(a)<1&&Se("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Se("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=QA[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ze.workingToColorSpace(ri.copy(this),e),Math.round(ke(ri.r*255,0,255))*65536+Math.round(ke(ri.g*255,0,255))*256+Math.round(ke(ri.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(ri.copy(this),t);let i=ri.r,r=ri.g,a=ri.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Et){ze.workingToColorSpace(ri.copy(this),e);let t=ri.r,i=ri.g,r=ri.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Gs);let i=is(Nr.h,Gs.h,t),r=is(Nr.s,Gs.s,t),a=is(Nr.l,Gs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new Re;Re.NAMES=QA;var ys=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gi=new D,gr=new D,Ol=new D,mr=new D,Ra=new D,Da=new D,zd=new D,Gl=new D,Hl=new D,zl=new D,Vl=new at,Wl=new at,ql=new at,Pi=class $a{constructor(t=new D,i=new D,r=new D){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Gi.subVectors(t,i),a.cross(Gi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Gi.subVectors(a,i),gr.subVectors(r,i),Ol.subVectors(t,i);let s=Gi.dot(Gi),o=Gi.dot(gr),l=Gi.dot(Ol),c=gr.dot(gr),h=gr.dot(Ol),u=s*c-o*o;if(u===0)return n.set(0,0,0),null;let d=1/u,A=(c*l-o*h)*d,m=(s*h-o*l)*d;return n.set(1-A-m,m,A)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,mr.x),l.addScaledVector(s,mr.y),l.addScaledVector(o,mr.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Vl.setScalar(0),Wl.setScalar(0),ql.setScalar(0),Vl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,r),ql.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Vl,n.x),s.addScaledVector(Wl,n.y),s.addScaledVector(ql,n.z),s}static isFrontFacing(t,i,r,a){return Gi.subVectors(r,i),gr.subVectors(t,i),Gi.cross(gr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Gi.cross(gr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return $a.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return $a.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return $a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Ra.subVectors(a,r),Da.subVectors(n,r),Gl.subVectors(t,r);let l=Ra.dot(Gl),c=Da.dot(Gl);if(l<=0&&c<=0)return i.copy(r);Hl.subVectors(t,a);let h=Ra.dot(Hl),u=Da.dot(Hl);if(h>=0&&u<=h)return i.copy(a);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),i.copy(r).addScaledVector(Ra,s);zl.subVectors(t,n);let A=Ra.dot(zl),m=Da.dot(zl);if(m>=0&&A<=m)return i.copy(n);let g=A*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),i.copy(r).addScaledVector(Da,o);let f=h*m-A*u;if(f<=0&&u-h>=0&&A-m>=0)return zd.subVectors(n,a),o=(u-h)/(u-h+(A-m)),i.copy(a).addScaledVector(zd,o);let p=1/(f+g+d);return s=g*p,o=d*p,i.copy(r).addScaledVector(Ra,s).addScaledVector(Da,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Hi):Hi.fromBufferAttribute(a,n),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pn),zs.subVectors(this.max,Pn),Pa.subVectors(e.a,Pn),La.subVectors(e.b,Pn),Fa.subVectors(e.c,Pn),Ur.subVectors(La,Pa),kr.subVectors(Fa,La),ia.subVectors(Pa,Fa);let t=[0,-Ur.z,Ur.y,0,-kr.z,kr.y,0,-ia.z,ia.y,Ur.z,0,-Ur.x,kr.z,0,-kr.x,ia.z,0,-ia.x,-Ur.y,Ur.x,0,-kr.y,kr.x,0,-ia.y,ia.x,0];return!jl(t,Pa,La,Fa,zs)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Pa,La,Fa,zs))?!1:(Vs.crossVectors(Ur,kr),t=[Vs.x,Vs.y,Vs.z],jl(t,Pa,La,Fa,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new D,new D,new D,new D,new D,new D,new D,new D],Hi=new D,Hs=new dt,Pa=new D,La=new D,Fa=new D,Ur=new D,kr=new D,ia=new D,Pn=new D,zs=new D,Vs=new D,ra=new D;function jl(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){ra.fromArray(e,n);let o=a.x*Math.abs(ra.x)+a.y*Math.abs(ra.y)+a.z*Math.abs(ra.z),l=t.dot(ra),c=i.dot(ra),h=r.dot(ra);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Bt=new D,Ws=new Ce,dg=0,Xt=class extends Kr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wA,this.updateRanges=[],this.gpuType=Ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},OA=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},GA=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ui=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ug=new dt,Ln=new D,Kl=new D,Ot=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ug.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ln.subVectors(e,this.center);let t=Ln.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ln,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ln.copy(e.center).add(Kl)),this.expandByPoint(Ln.copy(e.center).sub(Kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ag=0,Bi=new Le,Xl=new Ht,Na=new D,Mi=new dt,Fn=new dt,jt=new D,zt=class HA extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?GA:OA)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new He().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,i,r){return Bi.makeTranslation(t,i,r),this.applyMatrix4(Bi),this}scale(t,i,r){return Bi.makeScale(t,i,r),this.applyMatrix4(Bi),this}lookAt(t){return Xl.lookAt(t),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ui(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Mi.setFromBufferAttribute(n),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Mi.min,Fn.min),Mi.expandByPoint(jt),jt.addVectors(Mi.max,Fn.max),Mi.expandByPoint(jt)):(Mi.expandByPoint(Fn.min),Mi.expandByPoint(Fn.max))}Mi.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)jt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(jt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Na.fromBufferAttribute(t,c),jt.add(Na)),a=Math.max(a,r.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Xt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let E=0;E<r.count;E++)o[E]=new D,l[E]=new D;let c=new D,h=new D,u=new D,d=new Ce,A=new Ce,m=new Ce,g=new D,f=new D;function p(E,y,R){c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,y),u.fromBufferAttribute(r,R),d.fromBufferAttribute(n,E),A.fromBufferAttribute(n,y),m.fromBufferAttribute(n,R),h.sub(c),u.sub(c),A.sub(d),m.sub(d);let T=1/(A.x*m.y-m.x*A.y);isFinite(T)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-A.y).multiplyScalar(T),f.copy(u).multiplyScalar(A.x).addScaledVector(h,-m.x).multiplyScalar(T),o[E].add(g),o[y].add(g),o[R].add(g),l[E].add(f),l[y].add(f),l[R].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let E=0,y=x.length;E<y;++E){let R=x[E],T=R.start,B=R.count;for(let N=T,P=T+B;N<P;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new D,b=new D,_=new D,S=new D;function M(E){_.fromBufferAttribute(a,E),S.copy(_);let y=o[E];v.copy(y),v.sub(_.multiplyScalar(_.dot(y))).normalize(),b.crossVectors(S,y);let R=b.dot(l[E])<0?-1:1;s.setXYZW(E,v.x,v.y,v.z,R)}for(let E=0,y=x.length;E<y;++E){let R=x[E],T=R.start,B=R.count;for(let N=T,P=T+B;N<P;N+=3)M(t.getX(N+0)),M(t.getX(N+1)),M(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Xt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let d=0,A=r.count;d<A;d++)r.setXYZ(d,0,0,0);let a=new D,n=new D,s=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,A=t.count;d<A;d+=3){let m=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);a.fromBufferAttribute(i,m),n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,f),h.subVectors(s,n),u.subVectors(a,n),h.cross(u),o.fromBufferAttribute(r,m),l.fromBufferAttribute(r,g),c.fromBufferAttribute(r,f),o.add(h),l.add(h),c.add(h),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,A=i.count;d<A;d+=3)a.fromBufferAttribute(i,d+0),n.fromBufferAttribute(i,d+1),s.fromBufferAttribute(i,d+2),h.subVectors(s,n),u.subVectors(a,n),h.cross(u),r.setXYZ(d+0,h.x,h.y,h.z),r.setXYZ(d+1,h.x,h.y,h.z),r.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)jt.fromBufferAttribute(t,i),jt.normalize(),t.setXYZ(i,jt.x,jt.y,jt.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),A=0,m=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?A=l[g]*o.data.stride+o.offset:A=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[A++]}return new Xt(d,h,u)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new HA,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],A=t(d,r);l.push(A)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let A=c[u];h.push(A.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],u=n[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pg=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wA,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},li=new D,fg=class zA{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)li.fromBufferAttribute(this,i),li.applyMatrix4(t),this.setXYZ(i,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)li.fromBufferAttribute(this,i),li.applyNormalMatrix(t),this.setXYZ(i,li.x,li.y,li.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)li.fromBufferAttribute(this,i),li.transformDirection(t),this.setXYZ(i,li.x,li.y,li.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=it(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=it(i,this.array),r=it(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=it(i,this.array),r=it(r,this.array),a=it(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=it(i,this.array),r=it(r,this.array),a=it(a,this.array),n=it(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){il("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Xt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zA(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){il("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yl=new D,gg=new D,mg=new He,Ei=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Yl.subVectors(i,t).cross(gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Yl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mg.getNormalMatrix(e),r=this.coplanarPoint(Yl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bg=0,cr=class extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=ts,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pA,this.blendDst=fA,this.blendEquation=Za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Se(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Se(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_r=new D,Jl=new D,qs=new D,js=new D,va=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jl.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),js.copy(this.origin).sub(Jl);let a=e.distanceTo(t)*.5,n=-this.direction.dot(qs),s=js.dot(this.direction),o=-js.dot(qs),l=js.lengthSq(),c=Math.abs(1-n*n),h,u,d,A;if(c>0)if(h=n*o-s,u=n*s-o,A=a*c,h>=0)if(u>=-A)if(u<=A){let m=1/c;h*=m,u*=m,d=h*(h+n*u+2*s)+u*(n*h+u+2*o)+l}else u=a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;else u=-a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;else u<=-A?(h=Math.max(0,-(-n*a+s)),u=h>0?-a:Math.min(Math.max(-a,-o),a),d=-h*h+u*(u+2*o)+l):u<=A?(h=0,u=Math.min(Math.max(-a,-o),a),d=u*(u+2*o)+l):(h=Math.max(0,-(n*a+s)),u=h>0?a:Math.min(Math.max(-a,-o),a),d=-h*h+u*(u+2*o)+l);else u=n>0?-a:a,h=Math.max(0,-(n*u+s)),d=-h*h+u*(u+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Jl).addScaledVector(qs,u),d}intersectSphere(e,t){if(e.radius<0)return null;_r.subVectors(e.center,this.origin);let i=_r.dot(this.direction),r=_r.dot(_r)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),c>=0?(a=(e.min.y-u.y)*c,n=(e.max.y-u.y)*c):(a=(e.max.y-u.y)*c,n=(e.min.y-u.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-u.z)*h,o=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,o=(e.min.z-u.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,u=e.y-n.y,d=e.z-n.z,A=t.x-n.x,m=t.y-n.y,g=t.z-n.z,f=i.x-n.x,p=i.y-n.y,x=i.z-n.z,v=Math.abs(o),b=Math.abs(l),_=Math.abs(c),S,M,E,y,R,T,B,N,P,Q,j,z;if(v>=b&&v>=_?(E=o,T=h,P=A,z=f,o>=0?(S=l,M=c,y=u,R=d,B=m,N=g,Q=p,j=x):(S=c,M=l,y=d,R=u,B=g,N=m,Q=x,j=p)):b>=_?(E=l,T=u,P=m,z=p,l>=0?(S=c,M=o,y=d,R=h,B=g,N=A,Q=x,j=f):(S=o,M=c,y=h,R=d,B=A,N=g,Q=f,j=x)):(E=c,T=d,P=g,z=x,c>=0?(S=o,M=l,y=h,R=u,B=A,N=m,Q=f,j=p):(S=l,M=o,y=u,R=h,B=m,N=A,Q=p,j=f)),E===0)return null;let ne=S/E,K=M/E,J=1/E,Y=y-ne*T,_e=R-K*T,de=B-ne*P,Ke=N-K*P,Qe=Q-ne*z,X=j-K*z,re=Qe*Ke-X*de,oe=Y*X-_e*Qe,we=de*_e-Ke*Y;if(r){if(re<0||oe<0||we<0)return null}else if((re<0||oe<0||we<0)&&(re>0||oe>0||we>0))return null;let Be=re+oe+we;if(Be===0)return null;let ge=J*(re*T+oe*P+we*z);return(Be>0?ge<0:ge>0)?null:this.at(ge/Be,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=gA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vd=new Le,aa=new va,Ks=new Ot,Wd=new D,Xs=new D,Ys=new D,Js=new D,Zl=new D,Zs=new D,qd=new D,$s=new D,mt=class extends Ht{constructor(e=new zt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Zs.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Zl.fromBufferAttribute(h,e),n?Zs.addScaledVector(Zl,c):Zs.addScaledVector(Zl.sub(t),c))}t.add(Zs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(a),aa.copy(e.ray).recast(e.near),!(Ks.containsPoint(aa.origin)===!1&&(aa.intersectSphere(Ks,Wd)===null||aa.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(Vd.copy(a).invert(),aa.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&aa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,aa)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,u=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(n))for(let A=0,m=u.length;A<m;A++){let g=u[A],f=n[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let v=p,b=x;v<b;v+=3){let _=s.getX(v),S=s.getX(v+1),M=s.getX(v+2);r=eo(this,f,e,i,l,c,h,_,S,M),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let A=Math.max(0,d.start),m=Math.min(s.count,d.start+d.count);for(let g=A,f=m;g<f;g+=3){let p=s.getX(g),x=s.getX(g+1),v=s.getX(g+2);r=eo(this,n,e,i,l,c,h,p,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let A=0,m=u.length;A<m;A++){let g=u[A],f=n[g.materialIndex],p=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=p,b=x;v<b;v+=3){let _=v,S=v+1,M=v+2;r=eo(this,f,e,i,l,c,h,_,S,M),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let A=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=A,f=m;g<f;g+=3){let p=g,x=g+1,v=g+2;r=eo(this,n,e,i,l,c,h,p,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function _g(e,t,i,r,a,n,s,o){let l;if(t.side===di?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===hr,o),l===null)return null;$s.copy(o),$s.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo($s);return c<i.near||c>i.far?null:{distance:c,point:$s.clone(),object:e}}function eo(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,Xs),e.getVertexPosition(l,Ys),e.getVertexPosition(c,Js);let h=_g(e,t,i,r,Xs,Ys,Js,qd);if(h){let u=new D;Pi.getBarycoord(qd,Xs,Ys,Js,u),a&&(h.uv=Pi.getInterpolatedAttribute(a,o,l,c,u,new Ce)),n&&(h.uv1=Pi.getInterpolatedAttribute(n,o,l,c,u,new Ce)),s&&(h.normal=Pi.getInterpolatedAttribute(s,o,l,c,u,new D),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Pi.getNormal(Xs,Ys,Js,d.normal),h.face=d,h.barycoord=u}return h}var Nn=new at,jd=new at,Kd=new at,Eg=new at,Xd=new Le,to=new D,$l=new Ot,Yd=new Le,ec=new va,vg=class extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Id,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingBox.expandByPoint(to)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,to),this.boundingSphere.expandByPoint(to)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(r),e.ray.intersectsSphere($l)!==!1&&(Yd.copy(r).invert(),ec.copy(e.ray).applyMatrix4(Yd),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():Se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;jd.fromBufferAttribute(r.attributes.skinIndex,e),Kd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Nn.copy(t),t.set(0,0,0,0)):(Nn.set(...t,1),t.set(0,0,0)),Nn.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=Kd.getComponent(a);if(n!==0){let s=jd.getComponent(a);Xd.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(Eg.copy(Nn).applyMatrix4(Xd),n)}}return t.isVector4&&(t.w=Nn.w),t.applyMatrix4(this.bindMatrixInverse)}},VA=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},ba=class extends Ai{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Mt,c=Mt,h,u){super(null,n,s,o,l,c,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jd=new Le,xg=new Le,yg=class WA{constructor(t=[],i=[]){this.uuid=Ki(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){Se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new Le;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:xg;Jd.multiplyMatrices(o,i[n]),Jd.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new WA(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new ba(i,t,t,It,Ut);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(Se("Skeleton: No bone found with UUID:",n),s=new VA),this.bones.push(s),this.boneInverses.push(new Le().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},rl=class extends Xt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ua=new Le,Zd=new Le,io=[],$d=new dt,Cg=new Le,Un=new mt,kn=new Ot,Ig=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Cg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ua),$d.copy(e.boundingBox).applyMatrix4(Ua),this.boundingBox.union($d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ua),kn.copy(e.boundingSphere).applyMatrix4(Ua),this.boundingSphere.union(kn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Un.geometry=this.geometry,Un.material=this.material,Un.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kn.copy(this.boundingSphere),kn.applyMatrix4(i),e.ray.intersectsSphere(kn)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Ua),Zd.multiplyMatrices(i,Ua),Un.matrixWorld=Zd,Un.raycast(e,io);for(let n=0,s=io.length;n<s;n++){let o=io[n];o.instanceId=a,o.object=this,t.push(o)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(r*this.count),r,this.count,Vr,Ut));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},na=new Ot,Sg=new Ce(.5,.5),ro=new D,vn=class{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,a=new Ei,n=new Ei){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],u=a[6],d=a[7],A=a[8],m=a[9],g=a[10],f=a[11],p=a[12],x=a[13],v=a[14],b=a[15];if(r[0].setComponents(l-n,d-c,f-A,b-p).normalize(),r[1].setComponents(l+n,d+c,f+A,b+p).normalize(),r[2].setComponents(l+s,d+h,f+m,b+x).normalize(),r[3].setComponents(l-s,d-h,f-m,b-x).normalize(),i)r[4].setComponents(o,u,g,v).normalize(),r[5].setComponents(l-o,d-u,f-g,b-v).normalize();else if(r[4].setComponents(l-o,d-u,f-g,b-v).normalize(),t===ji)r[5].setComponents(l+o,d+u,f+g,b+v).normalize();else if(t===gs)r[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(na)}intersectsSprite(e){na.center.set(0,0,0);let t=Sg.distanceTo(e.center);return na.radius=.7071067811865476+t,na.applyMatrix4(e.matrixWorld),this.intersectsSphere(na)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eu=new Le,Mg=class qA{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new vn),r[a].setFromProjectionMatrix(eu,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new vn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new qA().copy(this)}};function tc(e,t){return e-t}function wg(e,t){return e.z-t.z}function Tg(e,t){return t.z-e.z}var Bg=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},bi=new Le,Rg=new Re(1,1,1),Dg=new vn,Pg=new Mg,ao=new dt,sa=new Ot,Qn=new D,tu=new D,Lg=new D,ic=new Bg,ai=new mt,no=[];function Fg(e,t,i=0){let r=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){let a=e.count;for(let n=0;n<a;n++)for(let s=0;s<r;s++)t.setComponent(n+i,s,e.getComponent(n,s))}else t.array.set(e.array,i*r);t.needsUpdate=!0}function oa(e,t){if(e.constructor!==t.constructor){let i=Math.min(e.length,t.length);for(let r=0;r<i;r++)t[r]=e[r]}else{let i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var Ng=class extends mt{constructor(e,t,i=t*2,r){super(new zt,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new ba(t,e,e,It,Ut);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new ba(t,e,e,dl,Xi);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new ba(t,e,e,It,Ut);i.colorSpace=ze.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in e.attributes){let n=e.getAttribute(a),{array:s,itemSize:o,normalized:l}=n,c=new s.constructor(i*o),h=new Xt(c,o,l);t.setAttribute(a,h)}if(e.getIndex()!==null){let a=i>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Xt(a,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let r=e.getAttribute(i),a=t.getAttribute(i);if(r.itemSize!==a.itemSize||r.normalized!==a.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,bi),this.getBoundingBoxAt(a,ao).applyMatrix4(bi),e.union(ao)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,r=t.length;i<r;i++){if(t[i].active===!1)continue;let a=t[i].geometryIndex;this.getMatrixAt(i,bi),this.getBoundingSphereAt(a,sa).applyMatrix4(bi),e.union(sa)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let t={visible:!0,active:!0,geometryIndex:e},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(tc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));let r=this._matricesTexture;bi.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Rg.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},a=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let n=e.getIndex();if(n!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=i===-1?n.count:i),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let s;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(tc),s=this._availableGeometryIds.shift(),a[s]=r):(s=this._geometryCount,this._geometryCount++,a.push(r)),this.setGeometryAt(s,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,s}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,r=i.getIndex()!==null,a=i.getIndex(),n=t.getIndex(),s=this._geometryInfo[e];if(r&&n.count>s.reservedIndexCount||t.attributes.position.count>s.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let o=s.vertexStart,l=s.reservedVertexCount;s.vertexCount=t.getAttribute("position").count;for(let c in i.attributes){let h=t.getAttribute(c),u=i.getAttribute(c);Fg(h,u,o);let d=h.itemSize;for(let A=h.count,m=l;A<m;A++){let g=o+A;for(let f=0;f<d;f++)u.setComponent(g,f,0)}u.needsUpdate=!0,u.addUpdateRange(o*d,l*d)}if(r){let c=s.indexStart,h=s.reservedIndexCount;s.indexCount=t.getIndex().count;for(let u=0;u<n.count;u++)a.setX(c+u,o+n.getX(u));for(let u=n.count,d=h;u<d;u++)a.setX(c+u,o);a.needsUpdate=!0,a.addUpdateRange(c,s.reservedIndexCount)}return s.start=r?s.indexStart:s.vertexStart,s.count=r?s.indexCount:s.vertexCount,s.boundingBox=null,t.boundingBox!==null&&(s.boundingBox=t.boundingBox.clone()),s.boundingSphere=null,t.boundingSphere!==null&&(s.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let r=0,a=i.length;r<a;r++)i[r].active&&i[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,i=this._geometryInfo,r=i.map((n,s)=>s).sort((n,s)=>i[n].vertexStart-i[s].vertexStart),a=this.geometry;for(let n=0,s=i.length;n<s;n++){let o=r[n],l=i[o];if(l.active!==!1){if(a.index!==null){if(l.indexStart!==t){let{indexStart:c,vertexStart:h,reservedIndexCount:u}=l,d=a.index,A=d.array,m=e-h;for(let g=c;g<c+u;g++)A[g]=A[g]+m;d.array.copyWithin(t,c,c+u),d.addUpdateRange(t,u),d.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:c,reservedVertexCount:h}=l,u=a.attributes;for(let d in u){let A=u[d],{array:m,itemSize:g}=A;m.copyWithin(e*g,c*g,(c+h)*g),A.addUpdateRange(e*g,h*g),A.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=a.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){let a=new dt,n=i.index,s=i.attributes.position;for(let o=r.start,l=r.start+r.count;o<l;o++){let c=o;n&&(c=n.getX(c)),a.expandByPoint(Qn.fromBufferAttribute(s,c))}r.boundingBox=a}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){let a=new Ot;this.getBoundingBoxAt(e,ao),ao.getCenter(a.center);let n=i.index,s=i.attributes.position,o=0;for(let l=r.start,c=r.start+r.count;l<c;l++){let h=l;n&&(h=n.getX(h)),Qn.fromBufferAttribute(s,h),o=Math.max(o,a.center.distanceToSquared(Qn))}a.radius=Math.sqrt(o),r.boundingSphere=a}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let i=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(tc);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let r=new Int32Array(e),a=new Int32Array(e);oa(this._multiDrawCounts,r),oa(this._multiDrawStarts,a),this._multiDrawCounts=r,this._multiDrawStarts=a,this._maxInstanceCount=e;let n=this._indirectTexture,s=this._matricesTexture,o=this._colorsTexture;n.dispose(),this._initIndirectTexture(),oa(n.image.data,this._indirectTexture.image.data),s.dispose(),this._initMatricesTexture(),oa(s.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),oa(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(n=>n.active);if(Math.max(...i.map(n=>n.vertexStart+n.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(n=>n.indexStart+n.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new zt,this._initializeGeometry(r));let a=this.geometry;r.index&&oa(r.index.array,a.index.array);for(let n in r.attributes)oa(r.attributes[n].array,a.attributes[n].array)}raycast(e,t){let i=this._instanceInfo,r=this._geometryInfo,a=this.matrixWorld,n=this.geometry;ai.material=this.material,ai.geometry.index=n.index,ai.geometry.attributes=n.attributes,ai.geometry.boundingBox===null&&(ai.geometry.boundingBox=new dt),ai.geometry.boundingSphere===null&&(ai.geometry.boundingSphere=new Ot);for(let s=0,o=i.length;s<o;s++){if(!i[s].visible||!i[s].active)continue;let l=i[s].geometryIndex,c=r[l];ai.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(s,ai.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,ai.geometry.boundingBox),this.getBoundingSphereAt(l,ai.geometry.boundingSphere),ai.raycast(e,no);for(let h=0,u=no.length;h<u;h++){let d=no[h];d.object=this,d.batchId=s,t.push(d)}no.length=0}ai.material=null,ai.geometry.index=null,ai.geometry.attributes={},ai.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,r,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let n=r.getIndex(),s=n===null?1:n.array.BYTES_PER_ELEMENT,o=1;a.wireframe&&(o=2,s=r.attributes.position.count>65535?4:2);let l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,A=this._indirectTexture,m=A.image.data,g=i.isArrayCamera?Pg:Dg;d&&(i.isArrayCamera?g.setFromArrayCamera(i):(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth)));let f=0;if(this.sortObjects){bi.copy(this.matrixWorld).invert(),Qn.setFromMatrixPosition(i.matrixWorld).applyMatrix4(bi),tu.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(bi);for(let v=0,b=l.length;v<b;v++)if(l[v].visible&&l[v].active){let _=l[v].geometryIndex;this.getMatrixAt(v,bi),this.getBoundingSphereAt(_,sa).applyMatrix4(bi);let S=!1;if(d&&(S=!g.intersectsSphere(sa)),!S){let M=u[_],E=Lg.subVectors(sa.center,Qn).dot(tu);ic.push(M.start,M.count,E,v)}}let p=ic.list,x=this.customSort;x===null?p.sort(a.transparent?Tg:wg):x.call(this,p,i);for(let v=0,b=p.length;v<b;v++){let _=p[v];c[f]=_.start*s*o,h[f]=_.count*o,m[f]=_.index,f++}ic.reset()}else for(let p=0,x=l.length;p<x;p++)if(l[p].visible&&l[p].active){let v=l[p].geometryIndex,b=!1;if(d&&(this.getMatrixAt(p,bi),this.getBoundingSphereAt(v,sa).applyMatrix4(bi),b=!g.intersectsSphere(sa)),!b){let _=u[v];c[f]=_.start*s*o,h[f]=_.count*o,m[f]=p,f++}}A.needsUpdate=!0,this._multiDrawCount=f,this._multiDrawBytesPerElement=s,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,a,n){this.onBeforeRender(e,null,r,a,n)}},yn=class extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new D,nl=new D,iu=new Le,On=new va,so=new Ot,rc=new D,ru=new D,Cs=class extends Ht{constructor(e=new zt,t=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)al.fromBufferAttribute(t,r-1),nl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=al.distanceTo(nl);e.setAttribute("lineDistance",new Ui(i,1))}else Se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=a,e.ray.intersectsSphere(so)===!1)return;iu.copy(r).invert(),On.copy(e.ray).applyMatrix4(iu);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){let u=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let A=u,m=d-1;A<m;A+=l){let g=c.getX(A),f=c.getX(A+1),p=oo(this,e,On,o,g,f,A);p&&t.push(p)}if(this.isLineLoop){let A=c.getX(d-1),m=c.getX(u),g=oo(this,e,On,o,A,m,d-1);g&&t.push(g)}}else{let u=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let A=u,m=d-1;A<m;A+=l){let g=oo(this,e,On,o,A,A+1,A);g&&t.push(g)}if(this.isLineLoop){let A=oo(this,e,On,o,d-1,u,d-1);A&&t.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function oo(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(al.fromBufferAttribute(o,a),nl.fromBufferAttribute(o,n),i.distanceSqToSegment(al,nl,rc,ru)>r)return;rc.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(rc);if(!(l<t.near||l>t.far))return{distance:l,point:ru.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var au=new D,nu=new D,xa=class extends Cs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)au.fromBufferAttribute(t,r),nu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+au.distanceTo(nu);e.setAttribute("lineDistance",new Ui(i,1))}else Se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ph=class extends Cs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jA=class extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},su=new Le,rh=new va,lo=new Ot,co=new D,Lh=class extends Ht{constructor(e=new zt,t=new jA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=a,e.ray.intersectsSphere(lo)===!1)return;su.copy(r).invert(),rh.copy(e.ray).applyMatrix4(su);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),u=Math.min(l.count,n.start+n.count);for(let d=h,A=u;d<A;d++){let m=l.getX(d);co.fromBufferAttribute(c,m),ou(co,m,o,r,e,t,this)}}else{let h=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let d=h,A=u;d<A;d++)co.fromBufferAttribute(c,d),ou(co,d,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function ou(e,t,i,r,a,n,s){let o=rh.distanceSqToPoint(e);if(o<i){let l=new D;rh.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ul=class extends Ai{constructor(e,t,i,r,a,n,s,o,l,c,h,u){super(null,n,s,o,l,c,r,a,h,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Ug=class extends ul{constructor(e,t,i,r,a,n){super(e,t,i,a,n),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Wi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},kg=class extends ul{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,qr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},KA=class extends Ai{constructor(e=[],t=qr,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bs=class extends Ai{constructor(e,t,i=Xi,r,a,n,s=Mt,o=Mt,l,c=wr,h=1){if(c!==wr&&c!==pa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qg=class extends bs{constructor(e,t=Xi,i=qr,r,a,n=Mt,s=Mt,o,l=wr){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},XA=class extends Ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fh=class YA extends zt{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=0,A=0;m("z","y","x",-1,-1,r,i,t,s,n,0),m("z","y","x",1,-1,r,i,-t,s,n,1),m("x","z","y",1,1,t,r,i,a,s,2),m("x","z","y",1,-1,t,r,-i,a,s,3),m("x","y","z",1,-1,t,i,r,a,n,4),m("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(h,3)),this.setAttribute("uv",new Ui(u,2));function m(g,f,p,x,v,b,_,S,M,E,y){let R=b/M,T=_/E,B=b/2,N=_/2,P=S/2,Q=M+1,j=E+1,z=0,ne=0,K=new D;for(let J=0;J<j;J++){let Y=J*T-N;for(let _e=0;_e<Q;_e++){let de=_e*R-B;K[g]=de*x,K[f]=Y*v,K[p]=P,c.push(K.x,K.y,K.z),K[g]=0,K[f]=0,K[p]=S>0?1:-1,h.push(K.x,K.y,K.z),u.push(_e/M),u.push(1-J/E),z+=1}}for(let J=0;J<E;J++)for(let Y=0;Y<M;Y++){let _e=d+Y+Q*J,de=d+Y+Q*(J+1),Ke=d+(Y+1)+Q*(J+1),Qe=d+(Y+1)+Q*J;l.push(_e,de,Qe),l.push(de,Ke,Qe),ne+=6}o.addGroup(A,ne,y),A+=ne,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new YA(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ho=new D,uo=new D,ac=new D,Ao=new Pi,Nh=class extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(un*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},u=[];for(let d=0;d<s;d+=3){a?(o[0]=a.getX(d),o[1]=a.getX(d+1),o[2]=a.getX(d+2)):(o[0]=d,o[1]=d+1,o[2]=d+2);let{a:A,b:m,c:g}=Ao;if(A.fromBufferAttribute(n,o[0]),m.fromBufferAttribute(n,o[1]),g.fromBufferAttribute(n,o[2]),Ao.getNormal(ac),c[0]=`${Math.round(A.x*i)},${Math.round(A.y*i)},${Math.round(A.z*i)}`,c[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let f=0;f<3;f++){let p=(f+1)%3,x=c[f],v=c[p],b=Ao[l[f]],_=Ao[l[p]],S=`${x}_${v}`,M=`${v}_${x}`;M in h&&h[M]?(ac.dot(h[M].normal)<=r&&(u.push(b.x,b.y,b.z),u.push(_.x,_.y,_.z)),h[M]=null):S in h||(h[S]={index0:o[f],index1:o[p],normal:ac.clone()})}}for(let d in h)if(h[d]){let{index0:A,index1:m}=h[d];ho.fromBufferAttribute(n,A),uo.fromBufferAttribute(n,m),u.push(ho.x,ho.y,ho.z),u.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new Ui(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Xr=class JA extends zt{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,u=t/o,d=i/l,A=[],m=[],g=[],f=[];for(let p=0;p<h;p++){let x=p*d-s;for(let v=0;v<c;v++){let b=v*u-n;m.push(b,-x,0),g.push(0,0,1),f.push(v/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let v=x+c*p,b=x+c*(p+1),_=x+1+c*(p+1),S=x+1+c*p;A.push(v,b,S),A.push(b,_,S)}this.setIndex(A),this.setAttribute("position",new Ui(m,3)),this.setAttribute("normal",new Ui(g,3)),this.setAttribute("uv",new Ui(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new JA(t.width,t.height,t.widthSegments,t.heightSegments)}};function xn(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(lu(a))a.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(lu(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function hi(e){let t={};for(let i=0;i<e.length;i++){let r=xn(e[i]);for(let a in r)t[a]=r[a]}return t}function lu(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Og(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function ZA(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var Gg={clone:xn,merge:hi},Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xn(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Re().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new at().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vg=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yi=class extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ci=class extends yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Al=class extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wg=class extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Go(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function qg(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function cu(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function jg(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var Cn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kg=class extends Cn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case wd:a=e,s=2*t-i;break;case Td:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case wd:n=e,o=2*i-t;break;case Td:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,A=(i-t)/(r-t),m=A*A,g=m*A,f=-u*g+2*u*m-u*A,p=(1+u)*g+(-1.5-2*u)*m+(-.5+u)*A+1,x=(-1-d)*g+(1.5+d)*m+.5*A,v=d*g-d*m;for(let b=0;b!==s;++b)a[b]=f*n[c+b]+p*n[l+b]+x*n[o+b]+v*n[h+b];return a}},Xg=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let u=0;u!==s;++u)a[u]=n[l+u]*h+n[o+u]*c;return a}},Yg=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Jg=class extends Cn{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let A=(i-t)/(r-t),m=1-A;for(let g=0;g!==s;++g)a[g]=n[l+g]*m+n[o+g]*A;return a}let u=s*2,d=e-1;for(let A=0;A!==s;++A){let m=n[l+A],g=n[o+A],f=d*u+A*2,p=h[f],x=h[f+1],v=e*u+A*2,b=c[v],_=c[v+1],S=$g(i,t,p,b,r);a[A]=$A(S,m,x,_,g)}return a}};function $A(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Zg(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function $g(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=$A(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Zg(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var Zi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Go(e.settings)&&(i.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break;case Sd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Se("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Go(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Fe("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Fe("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Pf(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Rl,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,u=h-i,d=h+i;for(let A=0;A!==i;++A){let m=t[h+A];if(m!==t[u+A]||m!==t[d+A]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,u=n*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Go(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hu(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Zi.prototype.ValueTypeName="";Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=fs;var In=class extends Zi{constructor(e,t,i){super(e,t,i)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=ps;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var ep=class extends Zi{constructor(e,t,i,r){super(e,t,i,r)}};ep.prototype.ValueTypeName="color";var _s=class extends Zi{constructor(e,t,i,r){super(e,t,i,r)}};_s.prototype.ValueTypeName="number";var em=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)Yi.slerpFlat(a,0,n,l-s,n,l,o);return a}},Es=class extends Zi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new em(this.times,this.values,this.getValueSize(),e)}};Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Sn=class extends Zi{constructor(e,t,i){super(e,t,i)}};Sn.prototype.ValueTypeName="string";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=ps;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Zi{constructor(e,t,i,r){super(e,t,i,r)}};sl.prototype.ValueTypeName="vector";var tm=class{constructor(e="",t=-1,i=[],r=vf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(rm(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(Zi.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let c=qg(o);o=cu(o,1,c),l=cu(l,1,c),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new _s(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],c=l.name.match(a);if(c&&c.length>1){let h=c[1],u=r[h];u||(r[h]=u=[]),u.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function im(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return sl;case"color":return ep;case"quaternion":return Es;case"bool":case"boolean":return In;case"string":return Sn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function rm(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=im(e.type);if(e.times===void 0){let r=[],a=[];jg(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),Go(e.settings)&&(i.settings={inTangents:Hr(e.settings.inTangents,Float32Array),outTangents:Hr(e.settings.outTangents,Float32Array)}),i}var Cr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(du(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!du(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function du(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var pl=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],A=l[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},am=new pl,ya=class{constructor(e){this.manager=e!==void 0?e:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er={},nm=class extends Error{constructor(e,t){super(e),this.response=t}},rs=class extends ya{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Cr.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:i,onError:r});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Se("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=Er[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,A=d!==0,m=0,g=new ReadableStream({start(f){p();function p(){h.read().then(({done:x,value:v})=>{if(x)f.close();else{m+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:A,loaded:m,total:d});for(let _=0,S=c.length;_<S;_++){let M=c[_];M.onProgress&&M.onProgress(b)}f.enqueue(v),p()}},x=>{f.error(x)})}}});return new Response(g)}else throw new nm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return l.json();default:if(s==="")return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(s),h=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(h);return l.arrayBuffer().then(d=>u.decode(d))}}}).then(l=>{Cr.add(`file:${e}`,l);let c=Er[e];delete Er[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let c=Er[e];if(c===void 0)throw this.manager.itemError(e),l;delete Er[e];for(let h=0,u=c.length;h<u;h++){let d=c[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ka=new WeakMap,sm=class extends ya{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Cr.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let h=ka.get(n);h===void 0&&(h=[],ka.set(n,h)),h.push({onLoad:t,onError:r})}return n}let s=ms("img");function o(){c(),t&&t(this);let h=ka.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}ka.delete(this),a.manager.itemEnd(e)}function l(h){c(),r&&r(h),Cr.remove(`image:${e}`);let u=ka.get(this)||[];for(let d=0;d<u.length;d++){let A=u[d];A.onError&&A.onError(h)}ka.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}},om=class extends ya{constructor(e){super(e)}load(e,t,i,r){let a=new Ai,n=new sm(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},Uh=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nc=new Le,uu=new D,Au=new D,kh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ne,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vn,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new D,fo=new Yi,ar=new D,tp=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,fo,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,fo,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(po,fo,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,fo,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qr=new D,pu=new Ce,fu=new Ce,Zt=class extends tp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(un*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _n*2*Math.atan(Math.tan(un*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,pu,fu),t.subVectors(fu,pu)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(un*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lm=class extends kh{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=_n*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},cm=class extends Uh{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new lm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hm=class extends kh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}},dm=class extends Uh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yr=class extends tp{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},um=class extends kh{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fl=class extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new um}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},as=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},sc=new WeakMap,Am=class extends ya{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Se("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Se("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=Cr.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{sc.has(n)===!0?(r&&r(sc.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Cr.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),sc.set(o,l),Cr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});Cr.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Qa=-90,Oa=1,pm=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zt(Qa,Oa,e,t);r.layers=this.layers,this.add(r);let a=new Zt(Qa,Oa,e,t);a.layers=this.layers,this.add(a);let n=new Zt(Qa,Oa,e,t);n.layers=this.layers,this.add(n);let s=new Zt(Qa,Oa,e,t);s.layers=this.layers,this.add(s);let o=new Zt(Qa,Oa,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Qa,Oa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,u,d),e.xr.enabled=A,i.texture.needsPMREMUpdate=!0}},fm=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qh="\\[\\]\\.:\\/",gm=new RegExp("["+Qh+"]","g"),Oh="[^"+Qh+"]",mm="[^"+Qh.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",Oh),_m=/(WCOD+)?/.source.replace("WCOD",mm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),xm=new RegExp("^"+bm+_m+Em+vm+"$"),ym=["material","materials","bones","map"],Cm=class{constructor(e,t,i){let r=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class en{constructor(t,i,r){this.path=i,this.parsedPath=r||en.parseTrackName(i),this.node=en.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new en.Composite(t,i,r):new en(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(t){let i=xm.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);ym.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=en.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Se("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Cm;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EC=new Float32Array(1),gu=new Le,Gh=class{constructor(e,t,i=0,r=1/0){this.ray=new va(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(e,t=!0,i=[]){return ah(e,this,i,t),i.sort(mu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ah(e[r],this,i,t);return i.sort(mu),i}};function mu(e,t){return e.distance-t.distance}function ah(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)ah(n[s],t,i,!0)}}var bu=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Im=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}};Im.prototype.isMatrix2=!0;var _u=new D,go=new D,Ga=new D,Ha=new D,oc=new D,Sm=new D,Mm=new D,Tr=class{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_u.subVectors(e,this.start),go.subVectors(this.end,this.start);let i=go.dot(go);if(i===0)return 0;let r=go.dot(_u)/i;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Sm,i=Mm){let r=10000000000000001e-32,a,n,s=this.start,o=e.start,l=this.end,c=e.end;Ga.subVectors(l,s),Ha.subVectors(c,o),oc.subVectors(s,o);let h=Ga.dot(Ga),u=Ha.dot(Ha),d=Ha.dot(oc);if(h<=r&&u<=r)return t.copy(s),i.copy(o),t.sub(i),t.dot(t);if(h<=r)a=0,n=d/u,n=ke(n,0,1);else{let A=Ga.dot(oc);if(u<=r)n=0,a=ke(-A/h,0,1);else{let m=Ga.dot(Ha),g=h*u-m*m;g!==0?a=ke((m*d-A*u)/g,0,1):a=0,n=(m*a+d)/u,n<0?(n=0,a=ke(-A/h,0,1)):n>1&&(n=1,a=ke((m-A)/h,0,1))}}return t.copy(s).addScaledVector(Ga,a),i.copy(o).addScaledVector(Ha,n),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},wm=class extends Kr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Eu(e,t,i,r){let a=Tm(r);switch(i){case SA:return e*t;case Vr:return e*t/a.components*a.byteLength;case dl:return e*t/a.components*a.byteLength;case Li:return e*t*2/a.components*a.byteLength;case Sh:return e*t*2/a.components*a.byteLength;case ls:return e*t*3/a.components*a.byteLength;case It:return e*t*4/a.components*a.byteLength;case Mh:return e*t*4/a.components*a.byteLength;case cn:case fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ko:case ga:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gc:case cs:return Math.max(e,16)*Math.max(t,8)/4;case qo:case gn:return Math.max(e,8)*Math.max(t,8)/2;case jo:case hs:case Ko:case Xo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ds:case us:case Yo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case hn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case mn:case eh:case Jo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zo:case $o:return Math.ceil(e/4)*Math.ceil(t/4)*8;case As:case el:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tm(e){switch(e){case Ne:case CA:return{byteLength:1,components:1};case _a:case IA:case $t:return{byteLength:2,components:1};case Ch:case Ih:return{byteLength:2,components:4};case Xi:case yh:case Ut:return{byteLength:4,components:1};case cl:case hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ip(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Bm(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,h),o.onUploadCallback();let A;if(c instanceof Float32Array)A=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)A=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)A=e.SHORT;else if(c instanceof Uint32Array)A=e.UNSIGNED_INT;else if(c instanceof Int32Array)A=e.INT;else if(c instanceof Int8Array)A=e.BYTE;else if(c instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:A,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){let h=l.array,u=l.updateRanges;if(e.bindBuffer(c,o),u.length===0)e.bufferSubData(c,0,h);else{u.sort((A,m)=>A.start-m.start);let d=0;for(let A=1;A<u.length;A++){let m=u[d],g=u[A];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let A=0,m=u.length;A<m;A++){let g=u[A];e.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$b=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Rm,alphahash_pars_fragment:Dm,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Fm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:km,batching_pars_vertex:Qm,batching_vertex:Om,begin_vertex:Gm,beginnormal_vertex:Hm,bsdfs:zm,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Xm,color_fragment:Ym,color_pars_fragment:Jm,color_pars_vertex:Zm,color_vertex:$m,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:i0,displacementmap_pars_vertex:r0,displacementmap_vertex:a0,emissivemap_fragment:n0,emissivemap_pars_fragment:s0,colorspace_fragment:o0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:h0,envmap_pars_fragment:d0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:y0,envmap_vertex:A0,fog_vertex:p0,fog_pars_vertex:f0,fog_fragment:g0,fog_pars_fragment:m0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:_0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:v0,lights_pars_begin:x0,lights_toon_fragment:C0,lights_toon_pars_fragment:I0,lights_phong_fragment:S0,lights_phong_pars_fragment:M0,lights_physical_fragment:w0,lights_physical_pars_fragment:T0,lights_fragment_begin:B0,lights_fragment_maps:R0,lights_fragment_end:D0,lightprobes_pars_fragment:P0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:U0,map_fragment:k0,map_pars_fragment:Q0,map_particle_fragment:O0,map_particle_pars_fragment:G0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:z0,morphinstance_vertex:V0,morphcolor_vertex:W0,morphnormal_vertex:q0,morphtarget_pars_vertex:j0,morphtarget_vertex:K0,normal_fragment_begin:X0,normal_fragment_maps:Y0,normal_pars_fragment:J0,normal_pars_vertex:Z0,normal_vertex:$0,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:rb,iridescence_pars_fragment:ab,opaque_fragment:nb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:lb,dithering_fragment:cb,dithering_pars_fragment:hb,roughnessmap_fragment:db,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:pb,shadowmap_vertex:fb,shadowmask_pars_fragment:gb,skinbase_vertex:mb,skinning_pars_vertex:bb,skinning_vertex:_b,skinnormal_vertex:Eb,specularmap_fragment:vb,specularmap_pars_fragment:xb,tonemapping_fragment:yb,tonemapping_pars_fragment:Cb,transmission_fragment:Ib,transmission_pars_fragment:Sb,uv_pars_fragment:Mb,uv_pars_vertex:wb,uv_vertex:Tb,worldpos_vertex:Bb,background_vert:Rb,background_frag:Db,backgroundCube_vert:Pb,backgroundCube_frag:Lb,cube_vert:Fb,cube_frag:Nb,depth_vert:Ub,depth_frag:kb,distance_vert:Qb,distance_frag:Ob,equirect_vert:Gb,equirect_frag:Hb,linedashed_vert:zb,linedashed_frag:Vb,meshbasic_vert:Wb,meshbasic_frag:qb,meshlambert_vert:jb,meshlambert_frag:Kb,meshmatcap_vert:Xb,meshmatcap_frag:Yb,meshnormal_vert:Jb,meshnormal_frag:Zb,meshphong_vert:$b,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:i_,meshtoon_vert:r_,meshtoon_frag:a_,points_vert:n_,points_frag:s_,shadow_vert:o_,shadow_frag:l_,sprite_vert:c_,sprite_frag:h_},he={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},or={basic:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:hi([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:hi([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:hi([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:hi([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:hi([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:hi([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:hi([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:hi([he.lights,he.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};or.physical={uniforms:hi([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var mo={r:0,b:0,g:0},d_=new Le,rp=new He;rp.set(-1,0,0,0,1,0,0,0,1);function u_(e,t,i,r,a,n){let s=new Re(0),o=a===!0?0:1,l,c,h=null,u=0,d=null;function A(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let b=x.backgroundBlurriness>0;v=t.get(v,b)}return v}function m(x){let v=!1,b=A(x);b===null?f(s,o):b&&b.isColor&&(f(b,1),v=!0);let _=e.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,n):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(x,v){let b=A(v);b&&(b.isCubeTexture||b.mapping===ll)?(c===void 0&&(c=new mt(new Fh(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:xn(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=ze.getTransfer(b.colorSpace)!==tt,(h!==b||u!==b.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=e.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new mt(new Xr(2,2),new wi({name:"BackgroundMaterial",uniforms:xn(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ze.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==e.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=e.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(mo,ZA(e)),i.buffers.color.setClear(mo.r,mo.g,mo.b,v,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,v=1){s.set(x),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,f(s,o)},render:m,addToRenderList:g,dispose:p}}function A_(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=d(null),n=a,s=!1;function o(T,B,N,P,Q){let j=!1,z=u(T,P,N,B);n!==z&&(n=z,c(n.object)),j=A(T,P,N,Q),j&&m(T,P,N,Q),Q!==null&&t.update(Q,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,b(T,B,N,P),Q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return e.createVertexArray()}function c(T){return e.bindVertexArray(T)}function h(T){return e.deleteVertexArray(T)}function u(T,B,N,P){let Q=P.wireframe===!0,j=r[B.id];j===void 0&&(j={},r[B.id]=j);let z=T.isInstancedMesh===!0?T.id:0,ne=j[z];ne===void 0&&(ne={},j[z]=ne);let K=ne[N.id];K===void 0&&(K={},ne[N.id]=K);let J=K[Q];return J===void 0&&(J=d(l()),K[Q]=J),J}function d(T){let B=[],N=[],P=[];for(let Q=0;Q<i;Q++)B[Q]=0,N[Q]=0,P[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:P,object:T,attributes:{},index:null}}function A(T,B,N,P){let Q=n.attributes,j=B.attributes,z=0,ne=N.getAttributes();for(let K in ne)if(ne[K].location>=0){let J=Q[K],Y=j[K];if(Y===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor)),J===void 0||J.attribute!==Y||Y&&J.data!==Y.data)return!0;z++}return n.attributesNum!==z||n.index!==P}function m(T,B,N,P){let Q={},j=B.attributes,z=0,ne=N.getAttributes();for(let K in ne)if(ne[K].location>=0){let J=j[K];J===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(J=T.instanceColor));let Y={};Y.attribute=J,J&&J.data&&(Y.data=J.data),Q[K]=Y,z++}n.attributes=Q,n.attributesNum=z,n.index=P}function g(){let T=n.newAttributes;for(let B=0,N=T.length;B<N;B++)T[B]=0}function f(T){p(T,0)}function p(T,B){let N=n.newAttributes,P=n.enabledAttributes,Q=n.attributeDivisors;N[T]=1,P[T]===0&&(e.enableVertexAttribArray(T),P[T]=1),Q[T]!==B&&(e.vertexAttribDivisor(T,B),Q[T]=B)}function x(){let T=n.newAttributes,B=n.enabledAttributes;for(let N=0,P=B.length;N<P;N++)B[N]!==T[N]&&(e.disableVertexAttribArray(N),B[N]=0)}function v(T,B,N,P,Q,j,z){z===!0?e.vertexAttribIPointer(T,B,N,Q,j):e.vertexAttribPointer(T,B,N,P,Q,j)}function b(T,B,N,P){g();let Q=P.attributes,j=N.getAttributes(),z=B.defaultAttributeValues;for(let ne in j){let K=j[ne];if(K.location>=0){let J=Q[ne];if(J===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),J!==void 0){let Y=J.normalized,_e=J.itemSize,de=t.get(J);if(de===void 0)continue;let Ke=de.buffer,Qe=de.type,X=de.bytesPerElement,re=Qe===e.INT||Qe===e.UNSIGNED_INT||J.gpuType===yh;if(J.isInterleavedBufferAttribute){let oe=J.data,we=oe.stride,Be=J.offset;if(oe.isInstancedInterleavedBuffer){for(let ge=0;ge<K.locationSize;ge++)p(K.location+ge,oe.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<K.locationSize;ge++)f(K.location+ge);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let ge=0;ge<K.locationSize;ge++)v(K.location+ge,_e/K.locationSize,Qe,Y,we*X,(Be+_e/K.locationSize*ge)*X,re)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)p(K.location+oe,J.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<K.locationSize;oe++)f(K.location+oe);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let oe=0;oe<K.locationSize;oe++)v(K.location+oe,_e/K.locationSize,Qe,Y,_e*X,_e/K.locationSize*oe*X,re)}}else if(z!==void 0){let Y=z[ne];if(Y!==void 0)switch(Y.length){case 2:e.vertexAttrib2fv(K.location,Y);break;case 3:e.vertexAttrib3fv(K.location,Y);break;case 4:e.vertexAttrib4fv(K.location,Y);break;default:e.vertexAttrib1fv(K.location,Y)}}}}x()}function _(){y();for(let T in r){let B=r[T];for(let N in B){let P=B[N];for(let Q in P){let j=P[Q];for(let z in j)h(j[z].object),delete j[z];delete P[Q]}}delete r[T]}}function S(T){if(r[T.id]===void 0)return;let B=r[T.id];for(let N in B){let P=B[N];for(let Q in P){let j=P[Q];for(let z in j)h(j[z].object),delete j[z];delete P[Q]}}delete r[T.id]}function M(T){for(let B in r){let N=r[B];for(let P in N){let Q=N[P];if(Q[T.id]===void 0)continue;let j=Q[T.id];for(let z in j)h(j[z].object),delete j[z];delete Q[T.id]}}}function E(T){for(let B in r){let N=r[B],P=T.isInstancedMesh===!0?T.id:0,Q=N[P];if(Q!==void 0){for(let j in Q){let z=Q[j];for(let ne in z)h(z[ne].object),delete z[ne];delete Q[j]}delete N[P],Object.keys(N).length===0&&delete r[B]}}}function y(){R(),s=!0,n!==a&&(n=a,c(n.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:y,resetDefaultState:R,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:E,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:f,disableUnusedAttributes:x}}function p_(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];i.update(u,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function f_(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(M){return!(M!==It&&r.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let E=M===$t&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==Ne&&M!==Ut&&!E&&r.convert(M)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=i.logarithmicDepthBuffer===!0,d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&d===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:A,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:S}}function g_(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Ei,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let A=u.length!==0||d||r!==0||a;return a=d,r=u.length,A},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,d){i=h(u,d,0)},this.setState=function(u,d,A){let m=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,p=e.get(u);if(!a||m===null||m.length===0||n&&!f)n?h(null):c();else{let x=n?0:r,v=x*4,b=p.clippingState||null;l.value=b,b=h(m,d,v,A);for(let _=0;_!==v;++_)b[_]=i[_];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(u,d,A,m){let g=u!==null?u.length:0,f=null;if(g!==0){if(f=l.value,m!==!0||f===null){let p=A+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let v=0,b=A;v!==g;++v,b+=4)s.copy(u[v]).applyMatrix4(x,o),s.normal.toArray(f,b),f[b+3]=s.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}var nn=4,m_=6,b_=20,__=256,Gn=new Yr,vu=new Re,lc=null,cc=0,hc=0,dc=!1,E_=new D,la=new D,vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=E_}=a;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===fn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:$t,format:It,colorSpace:Gt,depthBuffer:!1},r=xu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(a)),this._blurMaterial=y_(a,e,t),this._ggxMaterial=x_(a,e,t)}return r}_compileMaterial(e){let t=new mt(new zt,e);this._renderer.compile(t,Gn)}_sceneToCubeUV(e,t,i,r,a){let n=new Zt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(vu),l.toneMapping=lr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Fh,new Fi({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));let u=this._backgroundBox,d=u.material,A=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,A=!0):(d.color.copy(vu),A=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[g],a.y,a.z)):f===1?(n.up.set(0,0,s[g]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[g],a.z)):(n.up.set(0,s[g],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[g]));let p=this._cubeSize;za(r,f*p,g>2?p:0,p,p),l.setRenderTarget(r),A&&l.render(u,n),l.render(e,n)}l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qr||e.mapping===fn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;za(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,Gn)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),u=l*1.25,d=h*u,{_lodMax:A}=this,m=this._sizeLods[i],g=3*m*(i>A-nn?i-A+nn:0),f=4*(this._cubeSize-m);o.envMap.value=e.texture,o.roughness.value=d,o.mipInt.value=A-t,za(a,g,f,3*m,2*m),r.setRenderTarget(a),r.render(s,Gn),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=A-i,za(e,g,f,3*m,2*m),r.setRenderTarget(e),r.render(s,Gn)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],h=3*c*(r>this._lodMax-nn?r-this._lodMax+nn:0),u=4*(this._cubeSize-c);za(t,h,u,3*c,2*c),n.setRenderTarget(t),n.render(o,Gn)}};function v_(e){let t=[],i=[],r=e,a=e-nn+1+m_;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,A=3,m=new Float32Array(A*d*u),g=new Float32Array(A*d*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,v=p>2?0:-1,b=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];m.set(b,A*d*p);for(let _=0;_<d;_++){let S=h[_*2]*2-1,M=h[_*2+1]*2-1;p===0?la.set(1,M,S):p===1?la.set(-S,1,-M):p===2?la.set(-S,M,1):p===3?la.set(-1,M,-S):p===4?la.set(-S,-1,M):la.set(S,M,-1),la.toArray(g,(p*d+_)*A)}}let f=new zt;f.setAttribute("position",new Xt(m,A)),f.setAttribute("outputDirection",new Xt(g,A)),i.push(new mt(f,null)),r>nn&&r--}return{lodMeshes:i,sizeLods:t}}function xu(e,t,i){let r=new ui(e,t,i);return r.texture.mapping=ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function za(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function x_(e,t,i){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:__,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function y_(e,t,i){return new wi({name:"SphericalGaussianBlur",defines:{SAMPLES:b_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function yu(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Cu(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ap=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new KA(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fh(5,5,5),a=new wi({name:"CubemapFromEquirect",uniforms:xn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:Ir});a.uniforms.tEquirect.value=t;let n=new mt(r,a),s=t.minFilter;return t.minFilter===qi&&(t.minFilter=ht),new pm(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function C_(e){let t=new WeakMap,i=new WeakMap,r=null;function a(d,A=!1){return d==null?null:A?s(d):n(d)}function n(d){if(d&&d.isTexture){let A=d.mapping;if(A===ln||A===Bl)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let g=new ap(m.height);return g.fromEquirectangularTexture(e,d),t.set(d,g),d.addEventListener("dispose",c),o(g.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){let A=d.mapping,m=A===ln||A===Bl,g=A===qr||A===fn;if(m||g){let f=i.get(d),p=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return r===null&&(r=new vs(e)),f=m?r.fromEquirectangular(d,f):r.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,i.set(d,f),f.texture;if(f!==void 0)return f.texture;{let x=d.image;return m&&x&&x.height>0||g&&x&&l(x)?(r===null&&(r=new vs(e)),f=m?r.fromEquirectangular(d):r.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,i.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,A){return A===ln?d.mapping=qr:A===Bl&&(d.mapping=fn),d}function l(d){let A=0,m=6;for(let g=0;g<m;g++)d[g]!==void 0&&A++;return A===m}function c(d){let A=d.target;A.removeEventListener("dispose",c);let m=t.get(A);m!==void 0&&(t.delete(A),m.dispose())}function h(d){let A=d.target;A.removeEventListener("dispose",h);let m=i.get(A);m!==void 0&&(i.delete(A),m.dispose())}function u(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:u}}function I_(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&dn("WebGLRenderer: "+r+" extension not supported."),a}}}function S_(e,t,i,r){let a={},n=new WeakMap;function s(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];let A=n.get(d);A&&(t.remove(A),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,i.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,i.memory.geometries++),d}function l(u){let d=u.attributes;for(let A in d)t.update(d[A],e.ARRAY_BUFFER)}function c(u){let d=[],A=u.index,m=u.attributes.position,g=0;if(m===void 0)return;if(A!==null){let x=A.array;g=A.version;for(let v=0,b=x.length;v<b;v+=3){let _=x[v+0],S=x[v+1],M=x[v+2];d.push(_,S,S,M,M,_)}}else{let x=m.array;g=m.version;for(let v=0,b=x.length/3-1;v<b;v+=3){let _=v+0,S=v+1,M=v+2;d.push(_,S,S,M,M,_)}}let f=new(m.count>=65535?GA:OA)(d,1);f.version=g;let p=n.get(u);p&&t.remove(p),n.set(u,f)}function h(u){let d=n.get(u);if(d){let A=u.index;A!==null&&d.version<A.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function M_(e,t,i){let r;function a(u){r=u}let n,s;function o(u){n=u.type,s=u.bytesPerElement}function l(u,d){e.drawElements(r,d,n,u*s),i.update(d,r,1)}function c(u,d,A){A!==0&&(e.drawElementsInstanced(r,d,n,u*s,A),i.update(d,r,A))}function h(u,d,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,n,u,0,A);let m=0;for(let g=0;g<A;g++)m+=d[g];i.update(m,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w_(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Fe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function T_(e,t,i){let r=new WeakMap,a=new at;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=r.get(o);if(d===void 0||d.count!==u){let A=function(){E.dispose(),r.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;m===!0&&(b=1),g===!0&&(b=2),f===!0&&(b=3);let _=o.attributes.position.count*b,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*S*4*u),E=new LA(M,_,S,u);E.type=Ut,E.needsUpdate=!0;let y=b*4;for(let R=0;R<u;R++){let T=p[R],B=x[R],N=v[R],P=_*S*4*R;for(let Q=0;Q<T.count;Q++){let j=Q*y;m===!0&&(a.fromBufferAttribute(T,Q),M[P+j+0]=a.x,M[P+j+1]=a.y,M[P+j+2]=a.z,M[P+j+3]=0),g===!0&&(a.fromBufferAttribute(B,Q),M[P+j+4]=a.x,M[P+j+5]=a.y,M[P+j+6]=a.z,M[P+j+7]=0),f===!0&&(a.fromBufferAttribute(N,Q),M[P+j+8]=a.x,M[P+j+9]=a.y,M[P+j+10]=a.z,M[P+j+11]=N.itemSize===4?a.w:1)}}d={count:u,texture:E,size:new Ce(_,S)},r.set(o,d),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let A=0;for(let g=0;g<c.length;g++)A+=c[g];let m=o.morphTargetsRelative?1:1-A;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:n}}function B_(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,u=c.geometry,d=t.get(c,u);if(n.get(d)!==h&&(t.update(d),n.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let A=c.skeleton;n.get(A)!==h&&(A.update(),n.set(A,h))}return d}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}var R_={[mA]:"LINEAR_TONE_MAPPING",[bA]:"REINHARD_TONE_MAPPING",[_A]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[vA]:"AGX_TONE_MAPPING",[xA]:"NEUTRAL_TONE_MAPPING",[EA]:"CUSTOM_TONE_MAPPING"};function D_(e,t,i,r,a,n){let s=new ui(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new zt;c.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ui([0,2,0,0,2,0],2));let h=new Vg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new mt(c,h),d=new Yr(-1,1,1,-1,0,1),A=null,m=null,g=!1,f,p=null,x=[],v=!1;this.setSize=function(b,_){s.setSize(b,_),o!==null&&o.setSize(b,_),l!==null&&l.setSize(b,_);for(let S=0;S<x.length;S++){let M=x[S];M.setSize&&M.setSize(b,_)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;let _=s.width,S=s.height;x.length>0&&o===null&&(o=new ui(_,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new ui(_,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<x.length;M++){let E=x[M];E.setSize&&E.setSize(_,S)}},this.begin=function(b,_){if(g||b.toneMapping===lr&&x.length===0)return!1;if(p=_,_!==null){let S=_.width,M=_.height;(s.width!==S||s.height!==M)&&this.setSize(S,M)}return v===!1&&b.setRenderTarget(s),f=b.toneMapping,b.toneMapping=lr,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=f,g=!0;let S=s,M=o;for(let E=0;E<x.length;E++){let y=x[E];y.enabled!==!1&&(y.render(b,M,S,_),y.needsSwap!==!1&&(S=M,M=M===o?l:o))}if(A!==b.outputColorSpace||m!==b.toneMapping){A=b.outputColorSpace,m=b.toneMapping,h.defines={},ze.getTransfer(A)===tt&&(h.defines.SRGB_TRANSFER="");let E=R_[m];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var np=new Ai,nh=new bs(1,1),sp=new LA,op=new FA,lp=new KA,Iu=[],Su=[],Mu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function Mn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Iu[a];if(n===void 0&&(n=new Float32Array(a),Iu[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Vt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Wt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ml(e,t){let i=Su[t];i===void 0&&(i=new Int32Array(t),Su[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function P_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function L_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vt(i,t))return;e.uniform2fv(this.addr,t),Wt(i,t)}}function F_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Vt(i,t))return;e.uniform3fv(this.addr,t),Wt(i,t)}}function N_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vt(i,t))return;e.uniform4fv(this.addr,t),Wt(i,t)}}function U_(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Vt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wt(i,t)}else{if(Vt(i,r))return;Tu.set(r),e.uniformMatrix2fv(this.addr,!1,Tu),Wt(i,r)}}function k_(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Vt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wt(i,t)}else{if(Vt(i,r))return;wu.set(r),e.uniformMatrix3fv(this.addr,!1,wu),Wt(i,r)}}function Q_(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Vt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wt(i,t)}else{if(Vt(i,r))return;Mu.set(r),e.uniformMatrix4fv(this.addr,!1,Mu),Wt(i,r)}}function O_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function G_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vt(i,t))return;e.uniform2iv(this.addr,t),Wt(i,t)}}function H_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Vt(i,t))return;e.uniform3iv(this.addr,t),Wt(i,t)}}function z_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vt(i,t))return;e.uniform4iv(this.addr,t),Wt(i,t)}}function V_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function W_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Vt(i,t))return;e.uniform2uiv(this.addr,t),Wt(i,t)}}function q_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Vt(i,t))return;e.uniform3uiv(this.addr,t),Wt(i,t)}}function j_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Vt(i,t))return;e.uniform4uiv(this.addr,t),Wt(i,t)}}function K_(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(nh.compareFunction=i.isReversedDepthBuffer()?Th:wh,n=nh):n=np,i.setTexture2D(t||n,a)}function X_(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||op,a)}function Y_(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||lp,a)}function J_(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||sp,a)}function Z_(e){switch(e){case 5126:return P_;case 35664:return L_;case 35665:return F_;case 35666:return N_;case 35674:return U_;case 35675:return k_;case 35676:return Q_;case 5124:case 35670:return O_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return z_;case 5125:return V_;case 36294:return W_;case 36295:return q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return J_}}function $_(e,t){e.uniform1fv(this.addr,t)}function eE(e,t){let i=Mn(t,this.size,2);e.uniform2fv(this.addr,i)}function tE(e,t){let i=Mn(t,this.size,3);e.uniform3fv(this.addr,i)}function iE(e,t){let i=Mn(t,this.size,4);e.uniform4fv(this.addr,i)}function rE(e,t){let i=Mn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function aE(e,t){let i=Mn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function nE(e,t){let i=Mn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function sE(e,t){e.uniform1iv(this.addr,t)}function oE(e,t){e.uniform2iv(this.addr,t)}function lE(e,t){e.uniform3iv(this.addr,t)}function cE(e,t){e.uniform4iv(this.addr,t)}function hE(e,t){e.uniform1uiv(this.addr,t)}function dE(e,t){e.uniform2uiv(this.addr,t)}function uE(e,t){e.uniform3uiv(this.addr,t)}function AE(e,t){e.uniform4uiv(this.addr,t)}function pE(e,t,i){let r=this.cache,a=t.length,n=ml(i,a);Vt(r,n)||(e.uniform1iv(this.addr,n),Wt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=nh:s=np;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function fE(e,t,i){let r=this.cache,a=t.length,n=ml(i,a);Vt(r,n)||(e.uniform1iv(this.addr,n),Wt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||op,n[s])}function gE(e,t,i){let r=this.cache,a=t.length,n=ml(i,a);Vt(r,n)||(e.uniform1iv(this.addr,n),Wt(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||lp,n[s])}function mE(e,t,i){let r=this.cache,a=t.length,n=ml(i,a);Vt(r,n)||(e.uniform1iv(this.addr,n),Wt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||sp,n[s])}function bE(e){switch(e){case 5126:return $_;case 35664:return eE;case 35665:return tE;case 35666:return iE;case 35674:return rE;case 35675:return aE;case 35676:return nE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return hE;case 36294:return dE;case 36295:return uE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return mE}}var _E=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}},EE=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bE(t.type)}},vE=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function Bu(e,t){e.seq.push(t),e.map[t.id]=t}function xE(e,t,i){let r=e.name,a=r.length;for(uc.lastIndex=0;;){let n=uc.exec(r),s=uc.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Bu(i,c===void 0?new _E(o,e,t):new EE(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new vE(o),Bu(i,h)),i=h}}}var Ho=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);xE(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function Ru(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var yE=37297,CE=0;function IE(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var Du=new He;function SE(e){ze._getMatrix(Du,ze.workingColorSpace,e);let t=`mat3( ${Du.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(e)){case tl:return[t,"LinearTransferOETF"];case tt:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Pu(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+IE(e.getShaderSource(t),s)}else return a}function ME(e,t){let i=SE(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var wE={[mA]:"Linear",[bA]:"Reinhard",[_A]:"Cineon",[xs]:"ACESFilmic",[vA]:"AgX",[xA]:"Neutral",[EA]:"Custom"};function TE(e,t){let i=wE[t];return i===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var bo=new D;function BE(){ze.getLuminanceCoefficients(bo);let e=bo.x.toFixed(4),t=bo.y.toFixed(4),i=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RE(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function DE(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function PE(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function es(e){return e!==""}function Lu(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(e){return e.replace(LE,NE)}var FE=new Map;function NE(e,t){let i=Ge[t];if(i===void 0){let r=FE.get(t);if(r!==void 0)i=Ge[r],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sh(i)}var UE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(e){return e.replace(UE,kE)}function kE(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Uu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var QE={[No]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function OE(e){return QE[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GE={[qr]:"ENVMAP_TYPE_CUBE",[fn]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function HE(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":GE[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var zE={[fn]:"ENVMAP_MODE_REFRACTION"};function VE(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":zE[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WE={[gA]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function qE(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":WE[e.combine]||"ENVMAP_BLENDING_NONE"}function jE(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function KE(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=OE(i),c=HE(i),h=VE(i),u=qE(i),d=jE(i),A=RE(i),m=DE(n),g=a.createProgram(),f,p,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(es).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(es).join(`
`),p.length>0&&(p+=`
`)):(f=[Uu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[Uu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==lr?"#define TONE_MAPPING":"",i.toneMapping!==lr?Ge.tonemapping_pars_fragment:"",i.toneMapping!==lr?TE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ME("linearToOutputTexel",i.outputColorSpace),BE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(es).join(`
`)),s=sh(s),s=Lu(s,i),s=Fu(s,i),o=sh(o),o=Lu(o,i),o=Fu(o,i),s=Nu(s),o=Nu(o),i.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",i.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+f+s,b=x+p+o,_=Ru(a,a.VERTEX_SHADER,v),S=Ru(a,a.FRAGMENT_SHADER,b);a.attachShader(g,_),a.attachShader(g,S),i.index0AttributeName!==void 0?a.bindAttribLocation(g,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function M(T){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(g)||"",N=a.getShaderInfoLog(_)||"",P=a.getShaderInfoLog(S)||"",Q=B.trim(),j=N.trim(),z=P.trim(),ne=!0,K=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(ne=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,g,_,S);else{let J=Pu(a,_,"vertex"),Y=Pu(a,S,"fragment");Fe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+Q+`
`+J+`
`+Y)}else Q!==""?Se("WebGLProgram: Program Info Log:",Q):(j===""||z==="")&&(K=!1);K&&(T.diagnostics={runnable:ne,programLog:Q,vertexShader:{log:j,prefix:f},fragmentShader:{log:z,prefix:p}})}a.deleteShader(_),a.deleteShader(S),E=new Ho(a,g),y=PE(a,g)}let E;this.getUniforms=function(){return E===void 0&&M(this),E};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(g,yE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=S,this}var XE=0,YE=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new JE(e),t.set(e,i)),i}},JE=class{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}};function ZE(e){return e===Li||e===us||e===As}function $E(e,t,i,r,a,n){let s=new Dh,o=new YE,l=new Set,c=[],h=new Map,u=r.logarithmicDepthBuffer,d=r.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,y,R,T,B,N){let P=T.fog,Q=B.geometry,j=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?T.environment:null,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ne=t.get(E.envMap||j,z),K=ne&&ne.mapping===ll?ne.image.height:null,J=A[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&Se("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let Y=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=Y!==void 0?Y.length:0,de=0;Q.morphAttributes.position!==void 0&&(de=1),Q.morphAttributes.normal!==void 0&&(de=2),Q.morphAttributes.color!==void 0&&(de=3);let Ke,Qe,X,re;if(J){let Lt=or[J];Ke=Lt.vertexShader,Qe=Lt.fragmentShader}else{Ke=E.vertexShader,Qe=E.fragmentShader;let Lt=o.getVertexShaderStage(E),$e=o.getFragmentShaderStage(E);o.update(E,Lt,$e),X=Lt.id,re=$e.id}let oe=e.getRenderTarget(),we=e.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,nt=!!E.map,Ye=!!E.matcap,Oe=!!ne,yt=!!E.aoMap,si=!!E.lightMap,Ii=!!E.bumpMap&&E.wireframe===!1,ft=!!E.normalMap,gi=!!E.displacementMap,Dt=!!E.emissiveMap,Pt=!!E.metalnessMap,U=!!E.roughnessMap,mi=E.anisotropy>0,Je=E.clearcoat>0,bt=E.dispersion>0,w=E.retroreflectivity>0,C=E.iridescence>0,L=E.sheen>0,V=E.transmission>0,$=mi&&!!E.anisotropyMap,ce=Je&&!!E.clearcoatMap,Ae=Je&&!!E.clearcoatNormalMap,O=Je&&!!E.clearcoatRoughnessMap,se=C&&!!E.iridescenceMap,ue=C&&!!E.iridescenceThicknessMap,ve=L&&!!E.sheenColorMap,ae=L&&!!E.sheenRoughnessMap,Me=!!E.specularMap,Te=!!E.specularColorMap,Ue=!!E.specularIntensityMap,Ze=V&&!!E.transmissionMap,k=V&&!!E.thicknessMap,Z=!!E.gradientMap,te=!!E.alphaMap,me=E.alphaTest>0,xe=!!E.alphaHash,ie=!!E.extensions,fe=lr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(fe=e.toneMapping);let Pe={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Qe,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:nt,matcap:Ye,envMap:Oe,envMapMode:Oe&&ne.mapping,envMapCubeUVHeight:K,aoMap:yt,lightMap:si,bumpMap:Ii,normalMap:ft,displacementMap:gi,emissiveMap:Dt,normalMapObjectSpace:ft&&E.normalMapType===Cf,normalMapTangentSpace:ft&&E.normalMapType===ih,packedNormalMap:ft&&E.normalMapType===ih&&ZE(E.normalMap.format),metalnessMap:Pt,roughnessMap:U,anisotropy:mi,anisotropyMap:$,clearcoat:Je,clearcoatMap:ce,clearcoatNormalMap:Ae,clearcoatRoughnessMap:O,dispersion:bt,retroreflection:w,iridescence:C,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:L,sheenColorMap:ve,sheenRoughnessMap:ae,specularMap:Me,specularColorMap:Te,specularIntensityMap:Ue,transmission:V,transmissionMap:Ze,thicknessMap:k,gradientMap:Z,opaque:E.transparent===!1&&E.blending===ts&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:xe,combine:E.combine,mapUv:nt&&m(E.map.channel),aoMapUv:yt&&m(E.aoMap.channel),lightMapUv:si&&m(E.lightMap.channel),bumpMapUv:Ii&&m(E.bumpMap.channel),normalMapUv:ft&&m(E.normalMap.channel),displacementMapUv:gi&&m(E.displacementMap.channel),emissiveMapUv:Dt&&m(E.emissiveMap.channel),metalnessMapUv:Pt&&m(E.metalnessMap.channel),roughnessMapUv:U&&m(E.roughnessMap.channel),anisotropyMapUv:$&&m(E.anisotropyMap.channel),clearcoatMapUv:ce&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(E.sheenRoughnessMap.channel),specularMapUv:Me&&m(E.specularMap.channel),specularColorMapUv:Te&&m(E.specularColorMap.channel),specularIntensityMapUv:Ue&&m(E.specularIntensityMap.channel),transmissionMapUv:Ze&&m(E.transmissionMap.channel),thicknessMapUv:k&&m(E.thicknessMap.channel),alphaMapUv:te&&m(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ft||mi),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(nt||te),fog:!!P,useFog:E.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&ft===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:de,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:fe,decodeVideoTexture:nt&&E.map.isVideoTexture===!0&&ze.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:Dt&&E.emissiveMap.isVideoTexture===!0&&ze.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nt,flipSided:E.side===di,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&E.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function f(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(p(y,E),x(y,E),y.push(e.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function p(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numSunLights),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numSunLightShadows),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.retroreflection&&s.enable(24),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),y.packedNormalMap&&s.enable(22),y.vertexNormals&&s.enable(23),E.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),y.numLightProbeGrids>0&&s.enable(22),y.hasPositionAttribute&&s.enable(23),E.push(s.mask)}function v(E){let y=A[E.type],R;if(y){let T=or[y];R=Gg.clone(T.uniforms)}else R=E.uniforms;return R}function b(E,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new KE(e,y,E,a),c.push(R),h.set(y,R)),R}function _(E){if(--E.usedTimes===0){let y=c.indexOf(E);c[y]=c[c.length-1],c.pop(),h.delete(E.cacheKey),E.destroy()}}function S(E){o.remove(E)}function M(){o.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:M}}function ev(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function tv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function ku(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Qu(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(d){let A=0;return d.isInstancedMesh&&(A+=2),d.isSkinnedMesh&&(A+=1),A}function o(d,A,m,g,f,p){let x=e[t];return x===void 0?(x={id:d.id,object:d,geometry:A,material:m,materialVariant:s(d),groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},e[t]=x):(x.id=d.id,x.object=d,x.geometry=A,x.material=m,x.materialVariant=s(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=f,x.group=p),t++,x}function l(d,A,m,g,f,p,x){x.reversedDepth===!0&&(f=-f);let v=o(d,A,m,g,f,p);m.transmission>0?r.push(v):m.transparent===!0?a.push(v):i.push(v)}function c(d,A,m,g,f,p){let x=o(d,A,m,g,f,p);m.transmission>0?r.unshift(x):m.transparent===!0?a.unshift(x):i.unshift(x)}function h(d,A){i.length>1&&i.sort(d||tv),r.length>1&&r.sort(A||ku),a.length>1&&a.sort(A||ku)}function u(){for(let d=t,A=e.length;d<A;d++){let m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:u,sort:h}}function iv(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new Qu,e.set(r,[s])):a>=n.length?(s=new Qu,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function rv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new D,color:new Re};break;case"SpotLight":i={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return e[t.id]=i,i}}}function av(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var nv=0;function sv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ov(e){let t=new rv,i=av(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new D);let a=new D,n=new Le,s=new Le;function o(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let A=0,m=0,g=0,f=0,p=0,x=0,v=0,b=0,_=0,S=0,M=0,E=0,y=0,R=0;c.sort(sv);for(let B=0,N=c.length;B<N;B++){let P=c[B],Q=P.color,j=P.intensity,z=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Li?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=Q.r*j,u+=Q.g*j,d+=Q.b*j;else if(P.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(P.sh.coefficients[K],j);R++}else if(P.isSunLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,Y=i.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[m]=Y,r.sunShadowMap[m]=ne;let _e=J.getViewportCount();for(let de=0;de<_e;de++)r.sunShadowMatrix[g+de]=J.getMatrix(de),r.sunShadowCascade[g+de]=J._cascadeData[de];g+=_e,m++}r.sun[A]=K,A++}else if(P.isDirectionalLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,Y=i.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.directionalShadow[f]=Y,r.directionalShadowMap[f]=ne,r.directionalShadowMatrix[f]=P.shadow.matrix,_++}r.directional[f]=K,f++}else if(P.isSpotLight){let K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(Q).multiplyScalar(j),K.distance=z,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,r.spot[x]=K;let J=P.shadow;if(P.map&&(r.spotLightMap[E]=P.map,E++,J.updateMatrices(P),P.castShadow&&y++),r.spotLightMatrix[x]=J.matrix,P.castShadow){let Y=i.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.spotShadow[x]=Y,r.spotShadowMap[x]=ne,M++}x++}else if(P.isRectAreaLight){let K=t.get(P);K.color.copy(Q).multiplyScalar(j),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=K,v++}else if(P.isPointLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){let J=P.shadow,Y=i.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,r.pointShadow[p]=Y,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=P.shadow.matrix,S++}r.point[p]=K,p++}else if(P.isHemisphereLight){let K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(j),K.groundColor.copy(P.groundColor).multiplyScalar(j),r.hemi[b]=K,b++}}v>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let T=r.hash;(T.sunLength!==A||T.directionalLength!==f||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==v||T.hemiLength!==b||T.numSunShadows!==m||T.numDirectionalShadows!==_||T.numPointShadows!==S||T.numSpotShadows!==M||T.numSpotMaps!==E||T.numLightProbes!==R)&&(r.sun.length=A,r.directional.length=f,r.spot.length=x,r.rectArea.length=v,r.point.length=p,r.hemi.length=b,r.sunShadow.length=m,r.sunShadowMap.length=m,r.sunShadowMatrix.length=g,r.sunShadowCascade.length=g,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.directionalShadowMatrix.length=_,r.pointShadow.length=S,r.pointShadowMap.length=S,r.pointShadowMatrix.length=S,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+E-y,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=y,r.numLightProbes=R,T.sunLength=A,T.directionalLength=f,T.pointLength=p,T.spotLength=x,T.rectAreaLength=v,T.hemiLength=b,T.numSunShadows=m,T.numDirectionalShadows=_,T.numPointShadows=S,T.numSpotShadows=M,T.numSpotMaps=E,T.numLightProbes=R,r.version=nv++)}function l(c,h){let u=0,d=0,A=0,m=0,g=0,f=0,p=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let b=c[x];if(b.isSunLight){let _=r.sun[u];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let _=r.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(p),d++}else if(b.isSpotLight){let _=r.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let _=r.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),s.identity(),n.copy(b.matrixWorld),n.premultiply(p),s.extractRotation(n),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){let _=r.point[A];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),A++}else if(b.isHemisphereLight){let _=r.hemi[f];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),f++}}}return{setup:o,setupView:l,state:r}}function Ou(e){let t=new ov(e),i=[],r=[],a=[];function n(d){u.camera=d,i.length=0,r.length=0,a.length=0}function s(d){i.push(d)}function o(d){r.push(d)}function l(d){a.push(d)}function c(){t.setup(i)}function h(d){t.setupView(i,d)}let u={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function lv(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Ou(e),t.set(a,[o])):n>=s.length?(o=new Ou(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],uv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Gu=new Le,Hn=new D,Ac=new D;function Av(e,t,i){let r=new vn,a=new Ce,n=new Ce,s=new at,o=new Al,l=new Wg,c={},h=i.maxTextureSize,u={[hr]:di,[di]:hr,[Nt]:Nt},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),A=d.clone();A.defines.HORIZONTAL_PASS=1;let m=new zt;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new mt(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let p=this.type;this.render=function(S,M,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Zp&&(Se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let y=e.getRenderTarget(),R=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Ir),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=p!==this.type;N&&M.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Q=>Q.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Q=S.length;P<Q;P++){let j=S[P],z=j.shadow;if(z===void 0){Se("WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);let ne=z.getFrameExtents();a.multiply(ne),n.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/ne.x),a.x=n.x*ne.x,z.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/ne.y),a.y=n.y*ne.y,z.mapSize.y=n.y));let K=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=K,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zn){if(j.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ui(a.x,a.y,{format:Li,type:$t,minFilter:ht,magFilter:ht,generateMipmaps:!1}),z.map.texture.name=j.name+".shadowMap",z.map.depthTexture=new bs(a.x,a.y,Ut),z.map.depthTexture.name=j.name+".shadowMapDepth",z.map.depthTexture.format=wr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt}else j.isPointLight?(z.map=new ap(a.x),z.map.depthTexture=new Qg(a.x,Xi)):(z.map=new ui(a.x,a.y),z.map.depthTexture=new bs(a.x,a.y,Xi)),z.map.depthTexture.name=j.name+".shadowMap",z.map.depthTexture.format=wr,this.type===No?(z.map.depthTexture.compareFunction=K?Th:wh,z.map.depthTexture.minFilter=ht,z.map.depthTexture.magFilter=ht):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==a.x||z.map.height!==a.y)&&z.map.setSize(a.x,a.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();j.isPointLight!==!0&&z.updateMatrices(j,E);for(let Y=0;Y<J;Y++){let _e=z.getCamera(Y);if(j.isPointLight){let de=z.camera,Ke=z.matrix,Qe=j.distance||de.far;Qe!==de.far&&(de.far=Qe,de.updateProjectionMatrix()),Hn.setFromMatrixPosition(j.matrixWorld),de.position.copy(Hn),Ac.copy(de.position),Ac.add(dv[Y]),de.up.copy(uv[Y]),de.lookAt(Ac),de.updateMatrixWorld(),Ke.makeTranslation(-Hn.x,-Hn.y,-Hn.z),Gu.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Gu,de.coordinateSystem,de.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,Y),e.clear();else{Y===0&&(e.setRenderTarget(z.map),e.clear());let de=z.getViewport(Y);s.set(n.x*de.x,n.y*de.y,n.x*de.z,n.y*de.w),B.viewport(s)}r=z.getFrustum(Y),b(M,E,_e,j,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&x(z,E),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(y,R,T)};function x(S,M){let E=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,A.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),S.mapPass===null?S.mapPass=new ui(a.x,a.y,{format:Li,type:$t}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,e.setRenderTarget(S.mapPass),e.clear(),e.renderBufferDirect(M,null,E,d,g,null),A.uniforms.shadow_pass.value=S.mapPass.texture,A.uniforms.resolution.value.set(S.map.width,S.map.height),A.uniforms.radius.value=S.radius,e.setRenderTarget(S.map),e.clear(),e.renderBufferDirect(M,null,E,A,g,null)}function v(S,M,E,y){let R=null,T=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)R=T;else if(R=E.isPointLight===!0?l:o,e.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let B=R.uuid,N=M.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let Q=P[N];Q===void 0&&(Q=R.clone(),P[N]=Q,M.addEventListener("dispose",_)),R=Q}if(R.visible=M.visible,R.wireframe=M.wireframe,y===Zn?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:u[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=e.properties.get(R);B.light=E}return R}function b(S,M,E,y,R){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Zn)&&(!S.frustumCulled||S.intersectsFrustum(r))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);let B=t.update(S),N=S.material;if(Array.isArray(N)){let P=B.groups;for(let Q=0,j=P.length;Q<j;Q++){let z=P[Q],ne=N[z.materialIndex];if(ne&&ne.visible){let K=v(S,ne,y,R);S.onBeforeShadow(e,S,M,E,B,K,z),e.renderBufferDirect(E,null,B,K,S,z),S.onAfterShadow(e,S,M,E,B,K,z)}}}else if(N.visible){let P=v(S,N,y,R);S.onBeforeShadow(e,S,M,E,B,P,null),e.renderBufferDirect(E,null,B,P,S,null),S.onAfterShadow(e,S,M,E,B,P,null)}}let T=S.children;for(let B=0,N=T.length;B<N;B++)b(T[B],M,E,y,R)}function _(S){S.target.removeEventListener("dispose",_);for(let M in c){let E=c[M],y=S.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function pv(e,t){function i(){let k=!1,Z=new at,te=null,me=new at(0,0,0,0);return{setMask:function(xe){te!==xe&&!k&&(e.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){k=xe},setClear:function(xe,ie,fe,Pe,Lt){Lt===!0&&(xe*=Pe,ie*=Pe,fe*=Pe),Z.set(xe,ie,fe,Pe),me.equals(Z)===!1&&(e.clearColor(xe,ie,fe,Pe),me.copy(Z))},reset:function(){k=!1,te=null,me.set(-1,0,0,0)}}}function r(){let k=!1,Z=!1,te=null,me=null,xe=null;return{setReversed:function(ie){if(Z!==ie){let fe=t.get("EXT_clip_control");ie?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Z=ie;let Pe=xe;xe=null,this.setClear(Pe)}},getReversed:function(){return Z},setTest:function(ie){ie?oe(e.DEPTH_TEST):we(e.DEPTH_TEST)},setMask:function(ie){te!==ie&&!k&&(e.depthMask(ie),te=ie)},setFunc:function(ie){if(Z&&(ie=Nf[ie]),me!==ie){switch(ie){case Lc:e.depthFunc(e.NEVER);break;case Fc:e.depthFunc(e.ALWAYS);break;case Nc:e.depthFunc(e.LESS);break;case ss:e.depthFunc(e.LEQUAL);break;case Uc:e.depthFunc(e.EQUAL);break;case kc:e.depthFunc(e.GEQUAL);break;case Qc:e.depthFunc(e.GREATER);break;case Oc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}me=ie}},setLocked:function(ie){k=ie},setClear:function(ie){xe!==ie&&(xe=ie,Z&&(ie=1-ie),e.clearDepth(ie))},reset:function(){k=!1,te=null,me=null,xe=null,Z=!1}}}function a(){let k=!1,Z=null,te=null,me=null,xe=null,ie=null,fe=null,Pe=null,Lt=null;return{setTest:function($e){k||($e?oe(e.STENCIL_TEST):we(e.STENCIL_TEST))},setMask:function($e){Z!==$e&&!k&&(e.stencilMask($e),Z=$e)},setFunc:function($e,ir,pr){(te!==$e||me!==ir||xe!==pr)&&(e.stencilFunc($e,ir,pr),te=$e,me=ir,xe=pr)},setOp:function($e,ir,pr){(ie!==$e||fe!==ir||Pe!==pr)&&(e.stencilOp($e,ir,pr),ie=$e,fe=ir,Pe=pr)},setLocked:function($e){k=$e},setClear:function($e){Lt!==$e&&(e.clearStencil($e),Lt=$e)},reset:function(){k=!1,Z=null,te=null,me=null,xe=null,ie=null,fe=null,Pe=null,Lt=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,h={},u={},d={},A=new WeakMap,m=[],g=null,f=!1,p=null,x=null,v=null,b=null,_=null,S=null,M=null,E=new Re(0,0,0),y=0,R=!1,T=null,B=null,N=null,P=null,Q=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ne=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=ne>=1):K.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=ne>=2);let J=null,Y={},_e=e.getParameter(e.SCISSOR_BOX),de=e.getParameter(e.VIEWPORT),Ke=new at().fromArray(_e),Qe=new at().fromArray(de);function X(k,Z,te,me){let xe=new Uint8Array(4),ie=e.createTexture();e.bindTexture(k,ie),e.texParameteri(k,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(k,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<te;fe++)k===e.TEXTURE_3D||k===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,me,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(Z+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ie}let re={};re[e.TEXTURE_2D]=X(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=X(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=X(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=X(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(e.DEPTH_TEST),s.setFunc(ss),Ii(!1),ft(vd),oe(e.CULL_FACE),yt(Ir);function oe(k){h[k]!==!0&&(e.enable(k),h[k]=!0)}function we(k){h[k]!==!1&&(e.disable(k),h[k]=!1)}function Be(k,Z){return d[k]!==Z?(e.bindFramebuffer(k,Z),d[k]=Z,k===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=Z),k===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function ge(k,Z){let te=m,me=!1;if(k){te=A.get(Z),te===void 0&&(te=[],A.set(Z,te));let xe=k.textures;if(te.length!==xe.length||te[0]!==e.COLOR_ATTACHMENT0){for(let ie=0,fe=xe.length;ie<fe;ie++)te[ie]=e.COLOR_ATTACHMENT0+ie;te.length=xe.length,me=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,me=!0);me&&e.drawBuffers(te)}function nt(k){return g!==k?(e.useProgram(k),g=k,!0):!1}let Ye={[Za]:e.FUNC_ADD,[ef]:e.FUNC_SUBTRACT,[tf]:e.FUNC_REVERSE_SUBTRACT};Ye[rf]=e.MIN,Ye[af]=e.MAX;let Oe={[nf]:e.ZERO,[sf]:e.ONE,[of]:e.SRC_COLOR,[pA]:e.SRC_ALPHA,[Af]:e.SRC_ALPHA_SATURATE,[df]:e.DST_COLOR,[cf]:e.DST_ALPHA,[lf]:e.ONE_MINUS_SRC_COLOR,[fA]:e.ONE_MINUS_SRC_ALPHA,[uf]:e.ONE_MINUS_DST_COLOR,[hf]:e.ONE_MINUS_DST_ALPHA,[pf]:e.CONSTANT_COLOR,[ff]:e.ONE_MINUS_CONSTANT_COLOR,[gf]:e.CONSTANT_ALPHA,[mf]:e.ONE_MINUS_CONSTANT_ALPHA};function yt(k,Z,te,me,xe,ie,fe,Pe,Lt,$e){if(k===Ir){f===!0&&(we(e.BLEND),f=!1);return}if(f===!1&&(oe(e.BLEND),f=!0),k!==$p){if(k!==p||$e!==R){if((x!==Za||_!==Za)&&(e.blendEquation(e.FUNC_ADD),x=Za,_=Za),$e)switch(k){case ts:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xd:e.blendFunc(e.ONE,e.ONE);break;case yd:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Cd:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Fe("WebGLState: Invalid blending: ",k);break}else switch(k){case ts:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xd:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case yd:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cd:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",k);break}v=null,b=null,S=null,M=null,E.set(0,0,0),y=0,p=k,R=$e}return}xe=xe||Z,ie=ie||te,fe=fe||me,(Z!==x||xe!==_)&&(e.blendEquationSeparate(Ye[Z],Ye[xe]),x=Z,_=xe),(te!==v||me!==b||ie!==S||fe!==M)&&(e.blendFuncSeparate(Oe[te],Oe[me],Oe[ie],Oe[fe]),v=te,b=me,S=ie,M=fe),(Pe.equals(E)===!1||Lt!==y)&&(e.blendColor(Pe.r,Pe.g,Pe.b,Lt),E.copy(Pe),y=Lt),p=k,R=!1}function si(k,Z){k.side===Nt?we(e.CULL_FACE):oe(e.CULL_FACE);let te=k.side===di;Z&&(te=!te),Ii(te),k.blending===ts&&k.transparent===!1?yt(Ir):yt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),n.setMask(k.colorWrite);let me=k.stencilWrite;o.setTest(me),me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):we(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ii(k){T!==k&&(k?e.frontFace(e.CW):e.frontFace(e.CCW),T=k)}function ft(k){k!==Yp?(oe(e.CULL_FACE),k!==B&&(k===vd?e.cullFace(e.BACK):k===Jp?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):we(e.CULL_FACE),B=k}function gi(k){k!==N&&(z&&e.lineWidth(k),N=k)}function Dt(k,Z,te){k?(oe(e.POLYGON_OFFSET_FILL),(P!==Z||Q!==te)&&(P=Z,Q=te,s.getReversed()&&(Z=-Z),e.polygonOffset(Z,te))):we(e.POLYGON_OFFSET_FILL)}function Pt(k){k?oe(e.SCISSOR_TEST):we(e.SCISSOR_TEST)}function U(k){k===void 0&&(k=e.TEXTURE0+j-1),J!==k&&(e.activeTexture(k),J=k)}function mi(k,Z,te){te===void 0&&(J===null?te=e.TEXTURE0+j-1:te=J);let me=Y[te];me===void 0&&(me={type:void 0,texture:void 0},Y[te]=me),(me.type!==k||me.texture!==Z)&&(J!==te&&(e.activeTexture(te),J=te),e.bindTexture(k,Z||re[k]),me.type=k,me.texture=Z)}function Je(){let k=Y[J];k!==void 0&&k.type!==void 0&&(e.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function bt(){try{e.compressedTexImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function C(){try{e.texSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function L(){try{e.texSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ce(){try{e.texStorage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Ae(){try{e.texStorage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function O(){try{e.texImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function se(){try{e.texImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ue(k){return u[k]!==void 0?u[k]:e.getParameter(k)}function ve(k,Z){u[k]!==Z&&(e.pixelStorei(k,Z),u[k]=Z)}function ae(k){Ke.equals(k)===!1&&(e.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function Me(k){Qe.equals(k)===!1&&(e.viewport(k.x,k.y,k.z,k.w),Qe.copy(k))}function Te(k,Z){let te=c.get(Z);te===void 0&&(te=new WeakMap,c.set(Z,te));let me=te.get(k);me===void 0&&(me=e.getUniformBlockIndex(Z,k.name),te.set(k,me))}function Ue(k,Z){let te=c.get(Z).get(k);l.get(Z)!==te&&(e.uniformBlockBinding(Z,te,k.__bindingPointIndex),l.set(Z,te))}function Ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,Y={},d={},A=new WeakMap,m=[],g=null,f=!1,p=null,x=null,v=null,b=null,_=null,S=null,M=null,E=new Re(0,0,0),y=0,R=!1,T=null,B=null,N=null,P=null,Q=null,Ke.set(0,0,e.canvas.width,e.canvas.height),Qe.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:oe,disable:we,bindFramebuffer:Be,drawBuffers:ge,useProgram:nt,setBlending:yt,setMaterial:si,setFlipSided:Ii,setCullFace:ft,setLineWidth:gi,setPolygonOffset:Dt,setScissorTest:Pt,activeTexture:U,bindTexture:mi,unbindTexture:Je,compressedTexImage2D:bt,compressedTexImage3D:w,texImage2D:O,texImage3D:se,pixelStorei:ve,getParameter:ue,updateUBOMapping:Te,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:C,texSubImage3D:L,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:ae,viewport:Me,reset:Ze}}function fv(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u=new Set,d,A=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,C){return m?new OffscreenCanvas(w,C):ms("canvas")}function f(w,C,L){let V=1,$=bt(w);if(($.width>L||$.height>L)&&(V=L/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ce=Math.floor(V*$.width),Ae=Math.floor(V*$.height);d===void 0&&(d=g(ce,Ae));let O=C?g(ce,Ae):d;return O.width=ce,O.height=Ae,O.getContext("2d").drawImage(w,0,0,ce,Ae),Se("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+Ae+")."),O}else return"data"in w&&Se("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function p(w){return w.generateMipmaps}function x(w){e.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(w,C,L,V,$,ce=!1){if(w!==null){if(e[w]!==void 0)return e[w];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ae;V&&(Ae=t.get("EXT_texture_norm16"),Ae||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=C;if(C===e.RED&&(L===e.FLOAT&&(O=e.R32F),L===e.HALF_FLOAT&&(O=e.R16F),L===e.UNSIGNED_BYTE&&(O=e.R8),L===e.UNSIGNED_SHORT&&Ae&&(O=Ae.R16_EXT),L===e.SHORT&&Ae&&(O=Ae.R16_SNORM_EXT)),C===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(O=e.R8UI),L===e.UNSIGNED_SHORT&&(O=e.R16UI),L===e.UNSIGNED_INT&&(O=e.R32UI),L===e.BYTE&&(O=e.R8I),L===e.SHORT&&(O=e.R16I),L===e.INT&&(O=e.R32I)),C===e.RG&&(L===e.FLOAT&&(O=e.RG32F),L===e.HALF_FLOAT&&(O=e.RG16F),L===e.UNSIGNED_BYTE&&(O=e.RG8),L===e.UNSIGNED_SHORT&&Ae&&(O=Ae.RG16_EXT),L===e.SHORT&&Ae&&(O=Ae.RG16_SNORM_EXT)),C===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(O=e.RG8UI),L===e.UNSIGNED_SHORT&&(O=e.RG16UI),L===e.UNSIGNED_INT&&(O=e.RG32UI),L===e.BYTE&&(O=e.RG8I),L===e.SHORT&&(O=e.RG16I),L===e.INT&&(O=e.RG32I)),C===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(O=e.RGB8UI),L===e.UNSIGNED_SHORT&&(O=e.RGB16UI),L===e.UNSIGNED_INT&&(O=e.RGB32UI),L===e.BYTE&&(O=e.RGB8I),L===e.SHORT&&(O=e.RGB16I),L===e.INT&&(O=e.RGB32I)),C===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),L===e.UNSIGNED_INT&&(O=e.RGBA32UI),L===e.BYTE&&(O=e.RGBA8I),L===e.SHORT&&(O=e.RGBA16I),L===e.INT&&(O=e.RGBA32I)),C===e.RGB&&(L===e.UNSIGNED_SHORT&&Ae&&(O=Ae.RGB16_EXT),L===e.SHORT&&Ae&&(O=Ae.RGB16_SNORM_EXT),L===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),L===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),C===e.RGBA){let se=ce?tl:ze.getTransfer($);L===e.FLOAT&&(O=e.RGBA32F),L===e.HALF_FLOAT&&(O=e.RGBA16F),L===e.UNSIGNED_BYTE&&(O=se===tt?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT&&Ae&&(O=Ae.RGBA16_EXT),L===e.SHORT&&Ae&&(O=Ae.RGBA16_SNORM_EXT),L===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function _(w,C){let L;return w?C===null||C===Xi||C===os?L=e.DEPTH24_STENCIL8:C===Ut?L=e.DEPTH32F_STENCIL8:C===_a&&(L=e.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xi||C===os?L=e.DEPTH_COMPONENT24:C===Ut?L=e.DEPTH_COMPONENT32F:C===_a&&(L=e.DEPTH_COMPONENT16),L}function S(w,C){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==ht?Math.log2(Math.max(C.width,C.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?C.mipmaps.length:1}function M(w){let C=w.target;C.removeEventListener("dispose",M),y(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function E(w){let C=w.target;C.removeEventListener("dispose",E),T(C)}function y(w){let C=r.get(w);if(C.__webglInit===void 0)return;let L=w.source,V=A.get(L);if(V){let $=V[C.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(w),Object.keys(V).length===0&&A.delete(L)}r.remove(w)}function R(w){let C=r.get(w);e.deleteTexture(C.__webglTexture);let L=w.source,V=A.get(L);delete V[C.__cacheKey],s.memory.textures--}function T(w){let C=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(C.__webglFramebuffer[V]))for(let $=0;$<C.__webglFramebuffer[V].length;$++)e.deleteFramebuffer(C.__webglFramebuffer[V][$]);else e.deleteFramebuffer(C.__webglFramebuffer[V]);C.__webglDepthbuffer&&e.deleteRenderbuffer(C.__webglDepthbuffer[V])}else{if(Array.isArray(C.__webglFramebuffer))for(let V=0;V<C.__webglFramebuffer.length;V++)e.deleteFramebuffer(C.__webglFramebuffer[V]);else e.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&e.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&e.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let V=0;V<C.__webglColorRenderbuffer.length;V++)C.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(C.__webglColorRenderbuffer[V]);C.__webglDepthRenderbuffer&&e.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let L=w.textures;for(let V=0,$=L.length;V<$;V++){let ce=r.get(L[V]);ce.__webglTexture&&(e.deleteTexture(ce.__webglTexture),s.memory.textures--),r.remove(L[V])}r.remove(w)}let B=0;function N(){B=0}function P(){return B}function Q(w){B=w}function j(){let w=B;return w>=a.maxTextures&&Se("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,w}function z(w){let C=[];return C.push(w.wrapS),C.push(w.wrapT),C.push(w.wrapR||0),C.push(w.magFilter),C.push(w.minFilter),C.push(w.anisotropy),C.push(w.internalFormat),C.push(w.format),C.push(w.type),C.push(w.generateMipmaps),C.push(w.premultiplyAlpha),C.push(w.flipY),C.push(w.unpackAlignment),C.push(w.colorSpace),C.join()}function ne(w,C){let L=r.get(w);if(w.isVideoTexture&&mi(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&L.__version!==w.version){let V=w.image;if(V===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{we(L,w,C);return}}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+C)}function K(w,C){let L=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){we(L,w,C);return}else w.isExternalTexture&&(L.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+C)}function J(w,C){let L=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){we(L,w,C);return}i.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+C)}function Y(w,C){let L=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&L.__version!==w.version){Be(L,w,C);return}i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+C)}let _e={[Mr]:e.REPEAT,[Wi]:e.CLAMP_TO_EDGE,[Wo]:e.MIRRORED_REPEAT},de={[Mt]:e.NEAREST,[xh]:e.NEAREST_MIPMAP_NEAREST,[$n]:e.NEAREST_MIPMAP_LINEAR,[ht]:e.LINEAR,[Uo]:e.LINEAR_MIPMAP_NEAREST,[qi]:e.LINEAR_MIPMAP_LINEAR},Ke={[Sf]:e.NEVER,[Rf]:e.ALWAYS,[Mf]:e.LESS,[wh]:e.LEQUAL,[wf]:e.EQUAL,[Th]:e.GEQUAL,[Tf]:e.GREATER,[Bf]:e.NOTEQUAL};function Qe(w,C){if(C.type===Ut&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ht||C.magFilter===Uo||C.magFilter===$n||C.magFilter===qi||C.minFilter===ht||C.minFilter===Uo||C.minFilter===$n||C.minFilter===qi)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,_e[C.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,_e[C.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,_e[C.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,de[C.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,de[C.minFilter]),C.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Ke[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Mt||C.minFilter!==$n&&C.minFilter!==qi||C.type===Ut&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function X(w,C){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,C.addEventListener("dispose",M));let V=C.source,$=A.get(V);$===void 0&&($={},A.set(V,$));let ce=z(C);if(ce!==w.__cacheKey){$[ce]===void 0&&($[ce]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,L=!0),$[ce].usedTimes++;let Ae=$[w.__cacheKey];Ae!==void 0&&($[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(C)),w.__cacheKey=ce,w.__webglTexture=$[ce].texture}return L}function re(w,C,L){return Math.floor(Math.floor(w/L)/C)}function oe(w,C,L,V){let $=w.updateRanges;if($.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,C.width,C.height,L,V,C.data);else{$.sort((ue,ve)=>ue.start-ve.start);let ce=0;for(let ue=1;ue<$.length;ue++){let ve=$[ce],ae=$[ue],Me=ve.start+ve.count,Te=re(ae.start,C.width,4),Ue=re(ve.start,C.width,4);ae.start<=Me+1&&Te===Ue&&re(ae.start+ae.count-1,C.width,4)===Te?ve.count=Math.max(ve.count,ae.start+ae.count-ve.start):(++ce,$[ce]=ae)}$.length=ce+1;let Ae=i.getParameter(e.UNPACK_ROW_LENGTH),O=i.getParameter(e.UNPACK_SKIP_PIXELS),se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,C.width);for(let ue=0,ve=$.length;ue<ve;ue++){let ae=$[ue],Me=Math.floor(ae.start/4),Te=Math.ceil(ae.count/4),Ue=Me%C.width,Ze=Math.floor(Me/C.width),k=Te;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ze),i.texSubImage2D(e.TEXTURE_2D,0,Ue,Ze,k,1,L,V,C.data)}w.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Ae),i.pixelStorei(e.UNPACK_SKIP_PIXELS,O),i.pixelStorei(e.UNPACK_SKIP_ROWS,se)}}function we(w,C,L){let V=e.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),C.isData3DTexture&&(V=e.TEXTURE_3D);let $=X(w,C),ce=C.source;i.bindTexture(V,w.__webglTexture,e.TEXTURE0+L);let Ae=r.get(ce);if(ce.version!==Ae.__version||$===!0){if(i.activeTexture(e.TEXTURE0+L),!(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)){let Z=ze.getPrimaries(ze.workingColorSpace),te=C.colorSpace===vi?null:ze.getPrimaries(C.colorSpace),me=C.colorSpace===vi||Z===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}i.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment);let O=f(C.image,!1,a.maxTextureSize);O=Je(C,O);let se=n.convert(C.format,C.colorSpace),ue=n.convert(C.type),ve=b(C.internalFormat,se,ue,C.normalized,C.colorSpace,C.isVideoTexture);Qe(V,C);let ae,Me=C.mipmaps,Te=C.isVideoTexture!==!0,Ue=Ae.__version===void 0||$===!0,Ze=ce.dataReady,k=S(C,O);if(C.isDepthTexture)ve=_(C.format===pa,C.type),Ue&&(Te?i.texStorage2D(e.TEXTURE_2D,1,ve,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,ve,O.width,O.height,0,se,ue,null));else if(C.isDataTexture)if(Me.length>0){Te&&Ue&&i.texStorage2D(e.TEXTURE_2D,k,ve,Me[0].width,Me[0].height);for(let Z=0,te=Me.length;Z<te;Z++)ae=Me[Z],Te?Ze&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ue,ae.data):i.texImage2D(e.TEXTURE_2D,Z,ve,ae.width,ae.height,0,se,ue,ae.data);C.generateMipmaps=!1}else Te?(Ue&&i.texStorage2D(e.TEXTURE_2D,k,ve,O.width,O.height),Ze&&oe(C,O,se,ue)):i.texImage2D(e.TEXTURE_2D,0,ve,O.width,O.height,0,se,ue,O.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Te&&Ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,k,ve,Me[0].width,Me[0].height,O.depth);for(let Z=0,te=Me.length;Z<te;Z++)if(ae=Me[Z],C.format!==It)if(se!==null)if(Te){if(Ze)if(C.layerUpdates.size>0){let me=Eu(ae.width,ae.height,C.format,C.type);for(let xe of C.layerUpdates){let ie=ae.data.subarray(xe*me/ae.data.BYTES_PER_ELEMENT,(xe+1)*me/ae.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,xe,ae.width,ae.height,1,se,ie)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,O.depth,se,ae.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,ve,ae.width,ae.height,O.depth,0,ae.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Ze&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,O.depth,se,ue,ae.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Z,ve,ae.width,ae.height,O.depth,0,se,ue,ae.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{Te&&Ue&&i.texStorage2D(e.TEXTURE_2D,k,ve,Me[0].width,Me[0].height);for(let Z=0,te=Me.length;Z<te;Z++)ae=Me[Z],C.format!==It?se!==null?Te?Ze&&i.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ae.data):i.compressedTexImage2D(e.TEXTURE_2D,Z,ve,ae.width,ae.height,0,ae.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ze&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ue,ae.data):i.texImage2D(e.TEXTURE_2D,Z,ve,ae.width,ae.height,0,se,ue,ae.data)}else if(C.isDataArrayTexture)if(Te){if(Ue&&i.texStorage3D(e.TEXTURE_2D_ARRAY,k,ve,O.width,O.height,O.depth),Ze)if(C.layerUpdates.size>0){let Z=Eu(O.width,O.height,C.format,C.type);for(let te of C.layerUpdates){let me=O.data.subarray(te*Z/O.data.BYTES_PER_ELEMENT,(te+1)*Z/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,te,O.width,O.height,1,se,ue,me)}C.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,se,ue,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,O.width,O.height,O.depth,0,se,ue,O.data);else if(C.isData3DTexture)Te?(Ue&&i.texStorage3D(e.TEXTURE_3D,k,ve,O.width,O.height,O.depth),Ze&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,se,ue,O.data)):i.texImage3D(e.TEXTURE_3D,0,ve,O.width,O.height,O.depth,0,se,ue,O.data);else if(C.isFramebufferTexture){if(Ue)if(Te)i.texStorage2D(e.TEXTURE_2D,k,ve,O.width,O.height);else{let Z=O.width,te=O.height;for(let me=0;me<k;me++)i.texImage2D(e.TEXTURE_2D,me,ve,Z,te,0,se,ue,null),Z>>=1,te>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),O.parentNode!==Z){Z.appendChild(O),u.add(C),Z.onpaint=te=>{let me=te.changedElements;for(let xe of u)me.includes(xe.image)&&(xe.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{let te=e.RGBA,me=e.RGBA,xe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,te,me,xe,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Te&&Ue){let Z=bt(Me[0]);i.texStorage2D(e.TEXTURE_2D,k,ve,Z.width,Z.height)}for(let Z=0,te=Me.length;Z<te;Z++)ae=Me[Z],Te?Ze&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,se,ue,ae):i.texImage2D(e.TEXTURE_2D,Z,ve,se,ue,ae);C.generateMipmaps=!1}else if(Te){if(Ue){let Z=bt(O);i.texStorage2D(e.TEXTURE_2D,k,ve,Z.width,Z.height)}Ze&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,se,ue,O)}else i.texImage2D(e.TEXTURE_2D,0,ve,se,ue,O);p(C)&&x(V),Ae.__version=ce.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function Be(w,C,L){if(C.image.length!==6)return;let V=X(w,C),$=C.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+L);let ce=r.get($);if($.version!==ce.__version||V===!0){i.activeTexture(e.TEXTURE0+L);let Ae=ze.getPrimaries(ze.workingColorSpace),O=C.colorSpace===vi?null:ze.getPrimaries(C.colorSpace),se=C.colorSpace===vi||Ae===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ue=C.isCompressedTexture||C.image[0].isCompressedTexture,ve=C.image[0]&&C.image[0].isDataTexture,ae=[];for(let ie=0;ie<6;ie++)!ue&&!ve?ae[ie]=f(C.image[ie],!0,a.maxCubemapSize):ae[ie]=ve?C.image[ie].image:C.image[ie],ae[ie]=Je(C,ae[ie]);let Me=ae[0],Te=n.convert(C.format,C.colorSpace),Ue=n.convert(C.type),Ze=b(C.internalFormat,Te,Ue,C.normalized,C.colorSpace),k=C.isVideoTexture!==!0,Z=ce.__version===void 0||V===!0,te=$.dataReady,me=S(C,Me);Qe(e.TEXTURE_CUBE_MAP,C);let xe;if(ue){k&&Z&&i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Ze,Me.width,Me.height);for(let ie=0;ie<6;ie++){xe=ae[ie].mipmaps;for(let fe=0;fe<xe.length;fe++){let Pe=xe[fe];C.format!==It?Te!==null?k?te&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,0,0,Pe.width,Pe.height,Te,Pe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,Ze,Pe.width,Pe.height,0,Pe.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,0,0,Pe.width,Pe.height,Te,Ue,Pe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe,Ze,Pe.width,Pe.height,0,Te,Ue,Pe.data)}}}else{if(xe=C.mipmaps,k&&Z){xe.length>0&&me++;let ie=bt(ae[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,me,Ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ve){k?te&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ae[ie].width,ae[ie].height,Te,Ue,ae[ie].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,ae[ie].width,ae[ie].height,0,Te,Ue,ae[ie].data);for(let fe=0;fe<xe.length;fe++){let Pe=xe[fe].image[ie].image;k?te&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,0,0,Pe.width,Pe.height,Te,Ue,Pe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,Ze,Pe.width,Pe.height,0,Te,Ue,Pe.data)}}else{k?te&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Te,Ue,ae[ie]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ze,Te,Ue,ae[ie]);for(let fe=0;fe<xe.length;fe++){let Pe=xe[fe];k?te&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,0,0,Te,Ue,Pe.image[ie]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe+1,Ze,Te,Ue,Pe.image[ie])}}}p(C)&&x(e.TEXTURE_CUBE_MAP),ce.__version=$.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function ge(w,C,L,V,$,ce){let Ae=n.convert(L.format,L.colorSpace),O=n.convert(L.type),se=b(L.internalFormat,Ae,O,L.normalized,L.colorSpace),ue=r.get(C),ve=r.get(L);if(ve.__renderTarget=C,!ue.__hasExternalTextures){let ae=Math.max(1,C.width>>ce),Me=Math.max(1,C.height>>ce);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?i.texImage3D($,ce,se,ae,Me,C.depth,0,Ae,O,null):i.texImage2D($,ce,se,ae,Me,0,Ae,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),U(C)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,$,ve.__webglTexture,0,Pt(C)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,$,ve.__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(w,C,L){if(e.bindRenderbuffer(e.RENDERBUFFER,w),C.depthBuffer){let V=C.depthTexture,$=V&&V.isDepthTexture?V.type:null,ce=_(C.stencilBuffer,$),Ae=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;U(C)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pt(C),ce,C.width,C.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt(C),ce,C.width,C.height):e.renderbufferStorage(e.RENDERBUFFER,ce,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ae,e.RENDERBUFFER,w)}else{let V=C.textures;for(let $=0;$<V.length;$++){let ce=V[$],Ae=n.convert(ce.format,ce.colorSpace),O=n.convert(ce.type),se=b(ce.internalFormat,Ae,O,ce.normalized,ce.colorSpace);U(C)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pt(C),se,C.width,C.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt(C),se,C.width,C.height):e.renderbufferStorage(e.RENDERBUFFER,se,C.width,C.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(w,C,L){let V=C.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=r.get(C.depthTexture);if($.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,C.depthTexture.addEventListener("dispose",M)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,C.depthTexture);let ue=n.convert(C.depthTexture.format),ve=n.convert(C.depthTexture.type),ae;C.depthTexture.format===wr?ae=e.DEPTH_COMPONENT24:C.depthTexture.format===pa&&(ae=e.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ae,C.width,C.height,0,ue,ve,null)}}else ne(C.depthTexture,0);let ce=$.__webglTexture,Ae=Pt(C),O=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+L:e.TEXTURE_2D,se=C.depthTexture.format===pa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(C.depthTexture.format===wr)U(C)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,O,ce,0,Ae):e.framebufferTexture2D(e.FRAMEBUFFER,se,O,ce,0);else if(C.depthTexture.format===pa)U(C)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,O,ce,0,Ae):e.framebufferTexture2D(e.FRAMEBUFFER,se,O,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(w){let C=r.get(w),L=w.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==w.depthTexture){let V=w.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),V){let $=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),C.__depthDisposeCallback=$}C.__boundDepthTexture=V}if(w.depthTexture&&!C.__autoAllocateDepthBuffer)if(L)for(let V=0;V<6;V++)Ye(C.__webglFramebuffer[V],w,V);else{let V=w.texture.mipmaps;V&&V.length>0?Ye(C.__webglFramebuffer[0],w,0):Ye(C.__webglFramebuffer,w,0)}else if(L){C.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(i.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer[V]),C.__webglDepthbuffer[V]===void 0)C.__webglDepthbuffer[V]=e.createRenderbuffer(),nt(C.__webglDepthbuffer[V],w,!1);else{let $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=C.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ce)}}else{let V=w.texture.mipmaps;if(V&&V.length>0?i.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=e.createRenderbuffer(),nt(C.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=C.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ce)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function yt(w,C,L){let V=r.get(w);C!==void 0&&ge(V.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&Oe(w)}function si(w){let C=w.texture,L=r.get(w),V=r.get(C);w.addEventListener("dispose",E);let $=w.textures,ce=w.isWebGLCubeRenderTarget===!0,Ae=$.length>1;if(Ae||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=C.version,s.memory.textures++),ce){L.__webglFramebuffer=[];for(let O=0;O<6;O++)if(C.mipmaps&&C.mipmaps.length>0){L.__webglFramebuffer[O]=[];for(let se=0;se<C.mipmaps.length;se++)L.__webglFramebuffer[O][se]=e.createFramebuffer()}else L.__webglFramebuffer[O]=e.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){L.__webglFramebuffer=[];for(let O=0;O<C.mipmaps.length;O++)L.__webglFramebuffer[O]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(Ae)for(let O=0,se=$.length;O<se;O++){let ue=r.get($[O]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&U(w)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let O=0;O<$.length;O++){let se=$[O];L.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[O]);let ue=n.convert(se.format,se.colorSpace),ve=n.convert(se.type),ae=b(se.internalFormat,ue,ve,se.normalized,se.colorSpace,w.isXRRenderTarget===!0),Me=Pt(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,ae,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,L.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),nt(L.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),Qe(e.TEXTURE_CUBE_MAP,C);for(let O=0;O<6;O++)if(C.mipmaps&&C.mipmaps.length>0)for(let se=0;se<C.mipmaps.length;se++)ge(L.__webglFramebuffer[O][se],w,C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,se);else ge(L.__webglFramebuffer[O],w,C,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(C)&&x(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ae){for(let O=0,se=$.length;O<se;O++){let ue=$[O],ve=r.get(ue),ae=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ae,ve.__webglTexture),Qe(ae,ue),ge(L.__webglFramebuffer,w,ue,e.COLOR_ATTACHMENT0+O,ae,0),p(ue)&&x(ae)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,V.__webglTexture),Qe(O,C),C.mipmaps&&C.mipmaps.length>0)for(let se=0;se<C.mipmaps.length;se++)ge(L.__webglFramebuffer[se],w,C,e.COLOR_ATTACHMENT0,O,se);else ge(L.__webglFramebuffer,w,C,e.COLOR_ATTACHMENT0,O,0);p(C)&&x(O),i.unbindTexture()}w.depthBuffer&&Oe(w)}function Ii(w){let C=w.textures;for(let L=0,V=C.length;L<V;L++){let $=C[L];if(p($)){let ce=v(w),Ae=r.get($).__webglTexture;i.bindTexture(ce,Ae),x(ce),i.unbindTexture()}}}let ft=[],gi=[];function Dt(w){if(w.samples>0){if(U(w)===!1){let C=w.textures,L=w.width,V=w.height,$=e.COLOR_BUFFER_BIT,ce=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ae=r.get(w),O=C.length>1;if(O)for(let ue=0;ue<C.length;ue++)i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let se=w.texture.mipmaps;se&&se.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ue=0;ue<C.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]);let ve=r.get(C[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,L,V,0,0,L,V,$,e.NEAREST),l===!0&&(ft.length=0,gi.length=0,ft.push(e.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ft.push(ce),gi.push(ce),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,gi)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let ue=0;ue<C.length;ue++){i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,Ae.__webglColorRenderbuffer[ue]);let ve=r.get(C[ue]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ae.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let C=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[C])}}}function Pt(w){return Math.min(a.maxSamples,w.samples)}function U(w){let C=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function mi(w){let C=s.render.frame;h.get(w)!==C&&(h.set(w,C),w.update())}function Je(w,C){let L=w.colorSpace,V=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Gt&&L!==vi&&(ze.getTransfer(L)===tt?(V!==It||$!==Ne)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",L)),C}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=N,this.getTextureUnits=P,this.setTextureUnits=Q,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=yt,this.setupRenderTarget=si,this.updateRenderTargetMipmap=Ii,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function gv(e,t){function i(r,a=vi){let n,s=ze.getTransfer(a);if(r===Ne)return e.UNSIGNED_BYTE;if(r===Ch)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ih)return e.UNSIGNED_SHORT_5_5_5_1;if(r===cl)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===hl)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===CA)return e.BYTE;if(r===IA)return e.SHORT;if(r===_a)return e.UNSIGNED_SHORT;if(r===yh)return e.INT;if(r===Xi)return e.UNSIGNED_INT;if(r===Ut)return e.FLOAT;if(r===$t)return e.HALF_FLOAT;if(r===SA)return e.ALPHA;if(r===ls)return e.RGB;if(r===It)return e.RGBA;if(r===wr)return e.DEPTH_COMPONENT;if(r===pa)return e.DEPTH_STENCIL;if(r===Vr)return e.RED;if(r===dl)return e.RED_INTEGER;if(r===Li)return e.RG;if(r===Sh)return e.RG_INTEGER;if(r===Mh)return e.RGBA_INTEGER;if(r===cn||r===fa||r===ko||r===ga)if(s===tt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===cn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ko)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===cn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ko)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qo||r===Gc||r===gn||r===cs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===qo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gc)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jo||r===hs||r===ds||r===Ko||r===Xo||r===us||r===Yo)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===jo||r===hs)return s===tt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===ds)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ko)return n.COMPRESSED_R11_EAC;if(r===Xo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===us)return n.COMPRESSED_RG11_EAC;if(r===Yo)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ma||r===Hc||r===zc||r===Vc||r===hn||r===Wc||r===qc||r===jc||r===Kc||r===Xc||r===Yc||r===Jc||r===Zc||r===$c)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===ma)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hn)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zc)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$c)return s===tt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mn||r===eh||r===Jo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===mn)return s===tt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eh)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zo||r===$o||r===As||r===el)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Zo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===$o)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===As)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===el)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===os?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_v=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new XA(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wi({vertexShader:mv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ev=class extends Kr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,u=null,d=null,A=null,m=typeof XRWebGLBinding<"u",g=new _v,f={},p=t.getContextAttributes(),x=null,v=null,b=[],_=[],S=new Ce,M=null,E=null,y=new Zt;y.viewport=new at;let R=new Zt;R.viewport=new at;let T=[y,R],B=new fm,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=b[X];return re===void 0&&(re=new kl,b[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=b[X];return re===void 0&&(re=new kl,b[X]=re),re.getGripSpace()},this.getHand=function(X){let re=b[X];return re===void 0&&(re=new kl,b[X]=re),re.getHandSpace()};function Q(X){let re=_.indexOf(X.inputSource);if(re===-1)return;let oe=b[re];oe!==void 0&&(oe.update(X.inputSource,X.frame,l||n),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",z);for(let X=0;X<b.length;X++){let re=_[X];re!==null&&(_[X]=null,b[X].disconnect(re))}N=null,P=null,g.reset();for(let X in f)delete f[X];if(e.setRenderTarget(x),d=null,u=null,h=null,r=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(S.width,S.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){s=X,i.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",j),r.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(S),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,oe=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?pa:wr,oe=p.stencil?os:Xi);let Be={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ui(u.textureWidth,u.textureHeight,{format:It,type:Ne,depthTexture:new bs(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ui(d.framebufferWidth,d.framebufferHeight,{format:It,type:Ne,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(X){for(let re=0;re<X.removed.length;re++){let oe=X.removed[re],we=_.indexOf(oe);we>=0&&(_[we]=null,b[we].disconnect(oe))}for(let re=0;re<X.added.length;re++){let oe=X.added[re],we=_.indexOf(oe);if(we===-1){for(let ge=0;ge<b.length;ge++)if(ge>=_.length){_.push(oe),we=ge;break}else if(_[ge]===null){_[ge]=oe,we=ge;break}if(we===-1)break}let Be=b[we];Be&&Be.connect(oe)}}let ne=new D,K=new D;function J(X,re,oe){ne.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);let we=ne.distanceTo(K),Be=re.projectionMatrix.elements,ge=oe.projectionMatrix.elements,nt=Be[14]/(Be[10]-1),Ye=Be[14]/(Be[10]+1),Oe=(Be[9]+1)/Be[5],yt=(Be[9]-1)/Be[5],si=(Be[8]-1)/Be[0],Ii=(ge[8]+1)/ge[0],ft=nt*si,gi=nt*Ii,Dt=we/(-si+Ii),Pt=Dt*-si;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ(Dt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Be[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let U=nt+Dt,mi=Ye+Dt,Je=ft-Pt,bt=gi+(we-Pt),w=Oe*Ye/mi*U,C=yt*Ye/mi*U;X.projectionMatrix.makePerspective(Je,bt,w,C,U,mi),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let re=X.near,oe=X.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),B.near=R.near=y.near=re,B.far=R.far=y.far=oe,(N!==B.near||P!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,P=B.far),B.layers.mask=X.layers.mask|6,y.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;let we=X.parent,Be=B.cameras;Y(B,we);for(let ge=0;ge<Be.length;ge++)Y(Be[ge],we);Be.length===2?J(B,y,R):B.projectionMatrix.copy(y.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),_e(X,B,we)};function _e(X,re,oe){oe===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_n*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(X){o=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(X){return f[X]};let de=null;function Ke(X,re){if(c=re.getViewerPose(l||n),A=re,c!==null){let oe=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,we=!0);for(let ge=0;ge<oe.length;ge++){let nt=oe[ge],Ye=null;if(d!==null)Ye=d.getViewport(nt);else{let yt=h.getViewSubImage(u,nt);Ye=yt.viewport,ge===0&&(e.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(v))}let Oe=T[ge];Oe===void 0&&(Oe=new Zt,Oe.layers.enable(ge),Oe.viewport=new at,T[ge]=Oe),Oe.matrix.fromArray(nt.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(nt.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ge===0&&(B.matrix.copy(Oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),we===!0&&B.cameras.push(Oe)}let Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){h=i.getBinding();let ge=h.getDepthInformation(oe[0]);ge&&ge.isValid&&ge.texture&&g.init(ge,r.renderState)}if(Be&&Be.includes("camera-access")&&m){e.state.unbindTexture(),h=i.getBinding();for(let ge=0;ge<oe.length;ge++){let nt=oe[ge].camera;if(nt){let Ye=f[nt];Ye||(Ye=new XA,f[nt]=Ye);let Oe=h.getCameraImage(nt);Ye.sourceTexture=Oe}}}}for(let oe=0;oe<b.length;oe++){let we=_[oe],Be=b[oe];we!==null&&Be!==void 0&&Be.update(we,re,l||n)}de&&de(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),A=null}let Qe=new ip;Qe.setAnimationLoop(Ke),this.setAnimationLoop=function(X){de=X},this.dispose=function(){}}},vv=new Le,cp=new He;cp.set(-1,0,0,0,1,0,0,0,1);function xv(e,t){function i(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function r(f,p){p.color.getRGB(f.fogColor.value,ZA(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function a(f,p,x,v,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(f,p):p.isMeshLambertMaterial?(n(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(f,p),u(f,p)):p.isMeshPhongMaterial?(n(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(f,p),d(f,p),p.isMeshPhysicalMaterial&&A(f,p,b)):p.isMeshMatcapMaterial?(n(f,p),m(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),g(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,x,v):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,i(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,i(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===di&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,i(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===di&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,i(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,i(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x=t.get(p),v=x.envMap,b=x.envMapRotation;v&&(f.envMap.value=v,f.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(cp),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,f.aoMapTransform))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,i(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,x,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=v*.5,p.map&&(f.map.value=p.map,i(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,i(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,i(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function A(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){let x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function yv(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let S=_.program;r.uniformBlockBinding(b,S)}function c(b,_){let S=a[b.id];S===void 0&&(f(b),S=h(b),a[b.id]=S,b.addEventListener("dispose",x));let M=_.program;r.updateUBOMapping(b,M);let E=t.render.frame;n[b.id]!==E&&(d(b),n[b.id]=E)}function h(b){let _=u();b.__bindingPointIndex=_;let S=e.createBuffer(),M=b.__size,E=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,M,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function u(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=a[b.id],S=b.uniforms,M=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let E=0,y=S.length;E<y;E++){let R=S[E];if(Array.isArray(R))for(let T=0,B=R.length;T<B;T++)A(R[T],E,T,M);else A(R,E,0,M)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(b,_,S,M){if(g(b,_,S,M)===!0){let E=b.__offset,y=b.value;if(Array.isArray(y)){let R=0;for(let T=0;T<y.length;T++){let B=y[T],N=p(B);m(B,b.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,E,b.__data)}}function m(b,_,S){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,S)}function g(b,_,S,M){let E=b.value,y=_+"_"+S;if(M[y]===void 0)return typeof E=="number"||typeof E=="boolean"?M[y]=E:ArrayBuffer.isView(E)?M[y]=E.slice():M[y]=E.clone(),!0;{let R=M[y];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return M[y]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(R.equals(E)===!1)return R.copy(E),!0}}return!1}function f(b){let _=b.uniforms,S=0,M=16;for(let y=0,R=_.length;y<R;y++){let T=Array.isArray(_[y])?_[y]:[_[y]];for(let B=0,N=T.length;B<N;B++){let P=T[B],Q=Array.isArray(P.value)?P.value:[P.value];for(let j=0,z=Q.length;j<z;j++){let ne=Q[j],K=p(ne),J=S%M,Y=J%K.boundary,_e=J+Y;S+=Y,_e!==0&&M-_e<K.storage&&(S+=M-_e),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=K.storage}}}let E=S%M;return E>0&&(S+=M-E),b.__size=S,b.__cache={},this}function p(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let S=s.indexOf(_.__bindingPointIndex);s.splice(S,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete n[_.id]}function v(){for(let b in a)e.deleteBuffer(a[b]);s=[],a={},n={}}return{bind:l,update:c,dispose:v}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;function Iv(){return nr===null&&(nr=new ba(Cv,16,16,Li,$t),nr.name="DFG_LUT",nr.minFilter=ht,nr.magFilter=ht,nr.wrapS=Wi,nr.wrapT=Wi,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var Hh=class{constructor(e={}){let{canvas:t=Lf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ne}=e;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=n;let m=d,g=new Set([Mh,Sh,dl]),f=new Set([Ne,Xi,_a,os,Ch,Ih]),p=new Uint32Array(4),x=new Int32Array(4),v=new D,b=null,_=null,S=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1,T=null,B=null,N=null,P=null;this._outputColorSpace=Et;let Q=0,j=0,z=null,ne=-1,K=null,J=new at,Y=new at,_e=null,de=new Re(0),Ke=0,Qe=t.width,X=t.height,re=1,oe=null,we=null,Be=new at(0,0,Qe,X),ge=new at(0,0,Qe,X),nt=!1,Ye=new vn,Oe=!1,yt=!1,si=new Le,Ii=new D,ft=new at,gi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Pt(){return z===null?re:1}let U=i;function mi(I,F){return t.getContext(I,F)}let Je,bt,w,C,L,V,$,ce,Ae,O,se,ue,ve,ae,Me,Te,Ue,Ze,k,Z,te,me,xe;try{let I={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",$e,!1),U===null){let F="webgl2";if(U=mi(F,I),U===null)throw mi(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(I){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Fe("WebGLRenderer: "+I.message),I}function ie(){Je=new I_(U),Je.init(),te=new gv(U,Je),bt=new f_(U,Je,e,te),w=new pv(U,Je),bt.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),B=U.createFramebuffer(),N=U.createFramebuffer(),P=U.createFramebuffer(),C=new w_(U),L=new ev,V=new fv(U,Je,w,L,bt,te,C),$=new C_(y),ce=new Bm(U),me=new A_(U,ce),Ae=new S_(U,ce,C,me),O=new B_(U,Ae,ce,me,C),Ze=new T_(U,bt,V),Me=new g_(L),se=new $E(y,$,Je,bt,me,Me),ue=new xv(y,L),ve=new iv,ae=new lv(Je),Ue=new u_(y,$,w,O,A,o),Te=new Av(y,O,bt),xe=new yv(U,C,bt,w),k=new p_(U,Je,C),Z=new M_(U,Je,C),C.programs=se.programs,y.capabilities=bt,y.extensions=Je,y.properties=L,y.renderLists=ve,y.shadowMap=Te,y.state=w,y.info=C}m!==Ne&&(E=new D_(m,t.width,t.height,s,r,a));let fe=new Ev(y,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=Je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(I){I!==void 0&&(re=I,this.setSize(Qe,X,!1))},this.getSize=function(I){return I.set(Qe,X)},this.setSize=function(I,F,W=!0){if(fe.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=I,X=F,t.width=Math.floor(I*re),t.height=Math.floor(F*re),W===!0&&(t.style.width=I+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,I,F)},this.getDrawingBufferSize=function(I){return I.set(Qe*re,X*re).floor()},this.setDrawingBufferSize=function(I,F,W){Qe=I,X=F,re=W,t.width=Math.floor(I*W),t.height=Math.floor(F*W),this.setViewport(0,0,I,F)},this.setEffects=function(I){if(m===Ne){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let F=0;F<I.length;F++)if(I[F].isOutputPass===!0){Se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(J)},this.getViewport=function(I){return I.copy(Be)},this.setViewport=function(I,F,W,H){I.isVector4?Be.set(I.x,I.y,I.z,I.w):Be.set(I,F,W,H),w.viewport(J.copy(Be).multiplyScalar(re).round())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,F,W,H){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,F,W,H),w.scissor(Y.copy(ge).multiplyScalar(re).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(I){w.setScissorTest(nt=I)},this.setOpaqueSort=function(I){oe=I},this.setTransparentSort=function(I){we=I},this.getClearColor=function(I){return I.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(I=!0,F=!0,W=!0){let H=0;if(I){let G=!1;if(z!==null){let le=z.texture.format;G=g.has(le)}if(G){let le=z.texture.type,pe=f.has(le),be=Ue.getClearColor(),Ee=Ue.getClearAlpha(),De=be.r,We=be.g,je=be.b;pe?(p[0]=De,p[1]=We,p[2]=je,p[3]=Ee,U.clearBufferuiv(U.COLOR,0,p)):(x[0]=De,x[1]=We,x[2]=je,x[3]=Ee,U.clearBufferiv(U.COLOR,0,x))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),T=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Ue.dispose(),ve.dispose(),ae.dispose(),L.dispose(),$.dispose(),O.dispose(),me.dispose(),xe.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ud),fe.removeEventListener("sessionend",Ad),ea.stop()};function Pe(I){I.preventDefault(),il("WebGLRenderer: Context Lost."),R=!0}function Lt(){il("WebGLRenderer: Context Restored."),R=!1;let I=C.autoReset,F=Te.enabled,W=Te.autoUpdate,H=Te.needsUpdate,G=Te.type;ie(),C.autoReset=I,Te.enabled=F,Te.autoUpdate=W,Te.needsUpdate=H,Te.type=G}function $e(I){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ir(I){let F=I.target;F.removeEventListener("dispose",ir),pr(F)}function pr(I){Hp(I),L.remove(I)}function Hp(I){let F=L.get(I).programs;F!==void 0&&(F.forEach(function(W){se.releaseProgram(W)}),I.isShaderMaterial&&se.releaseShaderCache(I))}this.renderBufferDirect=function(I,F,W,H,G,le){F===null&&(F=gi);let pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,be=Wp(I,F,W,H,G);w.setMaterial(H,pe);let Ee=W.index,De=1;if(H.wireframe===!0){if(Ee=Ae.getWireframeAttribute(W),Ee===void 0)return;De=2}let We=W.drawRange,je=W.attributes.position,Ie=We.start*De,st=(We.start+We.count)*De;le!==null&&(Ie=Math.max(Ie,le.start*De),st=Math.min(st,(le.start+le.count)*De)),Ee!==null?(Ie=Math.max(Ie,0),st=Math.min(st,Ee.count)):je!=null&&(Ie=Math.max(Ie,0),st=Math.min(st,je.count));let Tt=st-Ie;if(Tt<0||Tt===1/0)return;me.setup(G,H,be,W,Ee);let ut,At=k;if(Ee!==null&&(ut=ce.get(Ee),At=Z,At.setIndex(ut)),G.isMesh)H.wireframe===!0?(w.setLineWidth(H.wireframeLinewidth*Pt()),At.setMode(U.LINES)):At.setMode(U.TRIANGLES);else if(G.isLine){let vt=H.linewidth;vt===void 0&&(vt=1),w.setLineWidth(vt*Pt()),G.isLineSegments?At.setMode(U.LINES):G.isLineLoop?At.setMode(U.LINE_LOOP):At.setMode(U.LINE_STRIP)}else G.isPoints?At.setMode(U.POINTS):G.isSprite&&At.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let vt=G._multiDrawStarts,ye=G._multiDrawCounts,oi=G._multiDrawCount,ta=Ee?ce.get(Ee).bytesPerElement:1,Ti=L.get(H).currentProgram.getUniforms();for(let rr=0;rr<oi;rr++)Ti.setValue(U,"_gl_DrawID",rr),At.render(vt[rr]/ta,ye[rr])}else if(G.isInstancedMesh)At.renderInstances(Ie,Tt,G.count);else if(W.isInstancedBufferGeometry){let vt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,vt);At.renderInstances(Ie,Tt,ye)}else At.render(Ie,Tt)};function dd(I,F,W,H){T!==null&&I.isNodeMaterial&&T.setObject(H,I),Oe===!0&&Me.setState(I,W,!1),I.transparent===!0&&I.side===Nt&&I.forceSinglePass===!1?(I.side=di,I.needsUpdate=!0,ks(I,F,H),I.side=hr,I.needsUpdate=!0,ks(I,F,H),I.side=Nt):ks(I,F,H)}this.compile=function(I,F,W=null){W===null&&(W=I),T!==null&&T.renderStart(I,F,W),_=ae.get(W),_.init(F),M.push(_),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),I!==W&&I.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(),T!==null&&T.updateLights(_.state.lightsArray),yt=this.localClippingEnabled,Oe=Me.init(this.clippingPlanes,yt),Oe===!0&&Me.setGlobalState(this.clippingPlanes,F),T!==null&&Te.render(_.state.shadowsArray,W,F);let H=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let le=G.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){let be=le[pe];dd(be,W,F,G),H.add(be)}else dd(le,W,F,G),H.add(le)}),_=M.pop(),T!==null&&T.renderEnd(),H},this.compileAsync=function(I,F,W=null){let H=this.compile(I,F,W);return new Promise(G=>{function le(){if(H.forEach(function(pe){let be=L.get(pe).currentProgram;(be===void 0||be.isReady())&&H.delete(pe)}),H.size===0){G(I);return}setTimeout(le,10)}Je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let wl=null;function zp(I){wl&&wl(I)}function ud(){ea.stop()}function Ad(){ea.start()}let ea=new ip;ea.setAnimationLoop(zp),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(I){wl=I,fe.setAnimationLoop(I),I===null?ea.stop():ea.start()},fe.addEventListener("sessionstart",ud),fe.addEventListener("sessionend",Ad),this.render=function(I,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;T!==null&&T.renderStart(I,F);let W=fe.enabled===!0&&fe.isPresenting===!0,H=E!==null&&(z===null||W)&&E.begin(y,z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,F,z),_=ae.get(I,M.length),_.init(F),_.state.textureUnits=V.getTextureUnits(),M.push(_),si.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ye.setFromProjectionMatrix(si,ji,F.reversedDepth),yt=this.localClippingEnabled,Oe=Me.init(this.clippingPlanes,yt),b=ve.get(I,S.length),b.init(),S.push(b),fe.enabled===!0&&fe.isPresenting===!0){let le=y.xr.getDepthSensingMesh();le!==null&&Tl(le,F,-1/0,y.sortObjects)}Tl(I,F,0,y.sortObjects),b.finish(),T!==null&&T.updateLights(_.state.lightsArray),y.sortObjects===!0&&b.sort(oe,we),Dt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Dt&&Ue.addToRenderList(b,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Me.beginShadows();let G=_.state.shadowsArray;if(Te.render(G,I,F),Oe===!0&&Me.endShadows(),(H&&E.hasRenderPass())===!1){let le=b.opaque,pe=b.transmissive;if(_.setupLights(),F.isArrayCamera){let be=F.cameras;if(pe.length>0)for(let Ee=0,De=be.length;Ee<De;Ee++){let We=be[Ee];fd(le,pe,I,We)}Dt&&Ue.render(I);for(let Ee=0,De=be.length;Ee<De;Ee++){let We=be[Ee];pd(b,I,We,We.viewport)}}else pe.length>0&&fd(le,pe,I,F),Dt&&Ue.render(I),pd(b,I,F)}z!==null&&j===0&&(V.updateMultisampleRenderTarget(z),V.updateRenderTargetMipmap(z)),H&&E.end(y),I.isScene===!0&&I.onAfterRender(y,I,F),me.resetDefaultState(),ne=-1,K=null,M.pop(),M.length>0?(_=M[M.length-1],V.setTextureUnits(_.state.textureUnits),Oe===!0&&Me.setGlobalState(y.clippingPlanes,_.state.camera)):_=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,T!==null&&T.renderEnd()};function Tl(I,F,W,H){if(I.visible===!1)return;if(I.layers.test(F.layers)){if(I.isGroup)W=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(F);else if(I.isLightProbeGrid)_.pushLightProbeGrid(I);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Ye)){H&&ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(si);let le=O.update(I),pe=I.material;pe.visible&&b.push(I,le,pe,W,ft.z,null,F)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Ye))){let le=O.update(I),pe=I.material;if(H&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ft.copy(I.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ft.copy(le.boundingSphere.center)),ft.applyMatrix4(I.matrixWorld).applyMatrix4(si)),Array.isArray(pe)){let be=le.groups;for(let Ee=0,De=be.length;Ee<De;Ee++){let We=be[Ee],je=pe[We.materialIndex];je&&je.visible&&b.push(I,le,je,W,ft.z,We,F)}}else pe.visible&&b.push(I,le,pe,W,ft.z,null,F)}}let G=I.children;for(let le=0,pe=G.length;le<pe;le++)Tl(G[le],F,W,H)}function pd(I,F,W,H){let{opaque:G,transmissive:le,transparent:pe}=I;_.setupLightsView(W),Oe===!0&&Me.setGlobalState(y.clippingPlanes,W),H&&w.viewport(J.copy(H)),G.length>0&&Us(G,F,W),le.length>0&&Us(le,F,W),pe.length>0&&Us(pe,F,W),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function fd(I,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[H.id]===void 0){let je=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[H.id]=new ui(1,1,{generateMipmaps:!0,type:je?$t:Ne,minFilter:qi,samples:Math.max(4,bt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let G=_.state.transmissionRenderTarget[H.id],le=H.viewport||J;G.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);let pe=y.getRenderTarget(),be=y.getActiveCubeFace(),Ee=y.getActiveMipmapLevel();y.setRenderTarget(G),y.getClearColor(de),Ke=y.getClearAlpha(),Ke<1&&y.setClearColor(16777215,.5),y.clear(),Dt&&Ue.render(W);let De=y.toneMapping;y.toneMapping=lr;let We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),_.setupLightsView(H),Oe===!0&&Me.setGlobalState(y.clippingPlanes,H),Us(I,W,H),V.updateMultisampleRenderTarget(G),V.updateRenderTargetMipmap(G),Je.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ie=0,st=F.length;Ie<st;Ie++){let Tt=F[Ie],{object:ut,geometry:At,material:vt,group:ye}=Tt;if(vt.side===Nt&&ut.layers.test(H.layers)){let oi=vt.side;vt.side=di,vt.needsUpdate=!0,gd(ut,W,H,At,vt,ye),vt.side=oi,vt.needsUpdate=!0,je=!0}}je===!0&&(V.updateMultisampleRenderTarget(G),V.updateRenderTargetMipmap(G))}y.setRenderTarget(pe,be,Ee),y.setClearColor(de,Ke),We!==void 0&&(H.viewport=We),y.toneMapping=De}function Us(I,F,W){let H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,le=I.length;G<le;G++){let pe=I[G],{object:be,geometry:Ee,group:De}=pe,We=pe.material;We.allowOverride===!0&&H!==null&&(We=H),be.layers.test(W.layers)&&gd(be,F,W,Ee,We,De)}}function gd(I,F,W,H,G,le){T!==null&&G.isNodeMaterial&&T.setObject(I,G),I.onBeforeRender(y,F,W,H,G,le),I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(y,F,W,H,I,le),G.transparent===!0&&G.side===Nt&&G.forceSinglePass===!1?(G.side=di,G.needsUpdate=!0,y.renderBufferDirect(W,F,H,G,I,le),G.side=hr,G.needsUpdate=!0,y.renderBufferDirect(W,F,H,G,I,le),G.side=Nt):y.renderBufferDirect(W,F,H,G,I,le),I.onAfterRender(y,F,W,H,G,le)}function ks(I,F,W){F.isScene!==!0&&(F=gi);let H=L.get(I),G=_.state.lights,le=_.state.shadowsArray,pe=G.state.version,be=se.getParameters(I,G.state,le,F,W,_.state.lightProbeGridArray),Ee=se.getProgramCacheKey(be),De=H.programs;H.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let We=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;H.envMap=$.get(I.envMap||H.environment,We),H.envMapRotation=H.environment!==null&&I.envMap===null?F.environmentRotation:I.envMapRotation,De===void 0&&(I.addEventListener("dispose",ir),De=new Map,H.programs=De);let je=De.get(Ee);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===pe)return bd(I,be),je}else be.uniforms=se.getUniforms(I),T!==null&&I.isNodeMaterial&&T.build(I,W,be),I.onBeforeCompile(be,y),je=se.acquireProgram(be,Ee),De.set(Ee,je),H.uniforms=be.uniforms;let Ie=H.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),bd(I,be),H.needsLights=jp(I),H.lightsStateVersion=pe,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=_.state.lightProbeGridArray.length>0,H.currentProgram=je,H.uniformsList=null,je}function md(I){if(I.uniformsList===null){let F=I.currentProgram.getUniforms();I.uniformsList=Ho.seqWithValue(F.seq,I.uniforms)}return I.uniformsList}function bd(I,F){let W=L.get(I);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Vp(I,F){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=I.length;W<H;W++){let G=I[W];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function Wp(I,F,W,H,G){F.isScene!==!0&&(F=gi),V.resetTextureUnits();let le=F.fog,pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,be=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ze.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=$.get(H.envMap||pe,Ee),We=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color,ut=lr;H.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ut=y.toneMapping);let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=At!==void 0?At.length:0,ye=L.get(H),oi=_.state.lights;if(Oe===!0&&(yt===!0||I!==K)){let lt=I===K&&H.id===ne;Me.setState(H,I,lt)}let ta=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==oi.state.version||ye.outputColorSpace!==be||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==De||H.fog===!0&&ye.fog!==le||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Me.numPlanes||ye.numIntersection!==Me.numIntersection)||ye.vertexAlphas!==We||ye.vertexTangents!==je||ye.morphTargets!==Ie||ye.morphNormals!==st||ye.morphColors!==Tt||ye.toneMapping!==ut||ye.morphTargetsCount!==vt||!!ye.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(ta=!0):(ta=!0,ye.__version=H.version);let Ti=ye.currentProgram;ta===!0&&(Ti=ks(H,F,G),T&&H.isNodeMaterial&&T.onUpdateProgram(H,Ti,ye));let rr=!1,Pr=!1,Ia=!1,ot=Ti.getUniforms(),Ct=ye.uniforms;if(w.useProgram(Ti.program)&&(rr=!0,Pr=!0,Ia=!0),H.id!==ne&&(ne=H.id,Pr=!0),ye.needsLights){let lt=Vp(_.state.lightProbeGridArray,G);ye.lightProbeGrid!==lt&&(ye.lightProbeGrid=lt,Pr=!0)}if(rr||K!==I){w.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ot.setValue(U,"projectionMatrix",I.projectionMatrix),ot.setValue(U,"viewMatrix",I.matrixWorldInverse);let lt=ot.map.cameraPosition;lt!==void 0&&lt.setValue(U,Ii.setFromMatrixPosition(I.matrixWorld)),bt.logarithmicDepthBuffer&&ot.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),K!==I&&(K=I,Pr=!0,Ia=!0)}if(ye.needsLights&&(oi.state.sunShadowMap.length>0&&ot.setValue(U,"sunShadowMap",oi.state.sunShadowMap,V),oi.state.directionalShadowMap.length>0&&ot.setValue(U,"directionalShadowMap",oi.state.directionalShadowMap,V),oi.state.spotShadowMap.length>0&&ot.setValue(U,"spotShadowMap",oi.state.spotShadowMap,V),oi.state.pointShadowMap.length>0&&ot.setValue(U,"pointShadowMap",oi.state.pointShadowMap,V)),G.isSkinnedMesh){ot.setOptional(U,G,"bindMatrix"),ot.setOptional(U,G,"bindMatrixInverse");let lt=G.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(U,"boneTexture",lt.boneTexture,V))}G.isBatchedMesh&&(ot.setOptional(U,G,"batchingTexture"),ot.setValue(U,"batchingTexture",G._matricesTexture,V),ot.setOptional(U,G,"batchingIdTexture"),ot.setValue(U,"batchingIdTexture",G._indirectTexture,V),ot.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(U,"batchingColorTexture",G._colorsTexture,V));let Lr=W.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&Ze.update(G,W,Ti),(Pr||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,ot.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Ct.envMapIntensity.value=F.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Iv()),Pr){if(ot.setValue(U,"toneMappingExposure",y.toneMappingExposure),ye.needsLights&&qp(Ct,Ia),le&&H.fog===!0&&ue.refreshFogUniforms(Ct,le),ue.refreshMaterialUniforms(Ct,H,re,X,_.state.transmissionRenderTarget[I.id]),ye.needsLights&&ye.lightProbeGrid){let lt=ye.lightProbeGrid;Ct.probesSH.value=lt.texture,Ct.probesMin.value.copy(lt.boundingBox.min),Ct.probesMax.value.copy(lt.boundingBox.max),Ct.probesResolution.value.copy(lt.resolution)}Ho.upload(U,md(ye),Ct,V)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ho.upload(U,md(ye),Ct,V),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(U,"center",G.center),ot.setValue(U,"modelViewMatrix",G.modelViewMatrix),ot.setValue(U,"normalMatrix",G.normalMatrix),ot.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let lt=H.uniformsGroups;for(let Rn=0,Sa=lt.length;Rn<Sa;Rn++){let Ed=lt[Rn];xe.update(Ed,Ti),xe.bind(Ed,Ti)}}return Ti}function qp(I,F){I.ambientLightColor.needsUpdate=F,I.lightProbe.needsUpdate=F,I.sunLights.needsUpdate=F,I.sunLightShadows.needsUpdate=F,I.directionalLights.needsUpdate=F,I.directionalLightShadows.needsUpdate=F,I.pointLights.needsUpdate=F,I.pointLightShadows.needsUpdate=F,I.spotLights.needsUpdate=F,I.spotLightShadows.needsUpdate=F,I.rectAreaLights.needsUpdate=F,I.hemisphereLights.needsUpdate=F}function jp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,F,W){let H=L.get(I);H.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),L.get(I.texture).__webglTexture=F,L.get(I.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,F){let W=L.get(I);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(I,F=0,W=0){z=I,Q=F,j=W;let H=null,G=!1,le=!1;if(I){let pe=L.get(I);if(pe.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),J.copy(I.viewport),Y.copy(I.scissor),_e=I.scissorTest,w.viewport(J),w.scissor(Y),w.setScissorTest(_e),ne=-1;return}else if(pe.__webglFramebuffer===void 0)V.setupRenderTarget(I);else if(pe.__hasExternalTextures)V.rebindTextures(I,L.get(I.texture).__webglTexture,L.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let De=I.depthTexture;if(pe.__boundDepthTexture!==De){if(De!==null&&L.has(De)&&(I.width!==De.image.width||I.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(I)}}let be=I.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(le=!0);let Ee=L.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?H=Ee[F][W]:H=Ee[F],G=!0):I.samples>0&&V.useMultisampledRTT(I)===!1?H=L.get(I).__webglMultisampledFramebuffer:Array.isArray(Ee)?H=Ee[W]:H=Ee,J.copy(I.viewport),Y.copy(I.scissor),_e=I.scissorTest}else J.copy(Be).multiplyScalar(re).floor(),Y.copy(ge).multiplyScalar(re).floor(),_e=nt;if(W!==0&&(H=B),w.bindFramebuffer(U.FRAMEBUFFER,H)&&w.drawBuffers(I,H),w.viewport(J),w.scissor(Y),w.setScissorTest(_e),G){let pe=L.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(le){let pe=F;for(let be=0;be<I.textures.length;be++){let Ee=L.get(I.textures[be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+be,Ee.__webglTexture,W,pe)}}else if(I!==null&&W!==0){let pe=L.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,W)}ne=-1};function _d(I){let F=L.get(I);return(F.__readFormat!==I.format||F.__readType!==I.type)&&(F.__readFormat=I.format,F.__readType=I.type,F.__formatReadable=bt.textureFormatReadable(I.format),F.__typeReadable=bt.textureTypeReadable(I.type)),F}this.readRenderTargetPixels=function(I,F,W,H,G,le,pe,be=0){if(!(I&&I.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){w.bindFramebuffer(U.FRAMEBUFFER,Ee);try{let De=I.textures[be],We=De.format,je=De.type;I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Ie=_d(De);if(Ie.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=I.width-H&&W>=0&&W<=I.height-G&&U.readPixels(F,W,H,G,te.convert(We),te.convert(je),le)}finally{let De=z!==null?L.get(z).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(I,F,W,H,G,le,pe,be=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee)if(F>=0&&F<=I.width-H&&W>=0&&W<=I.height-G){w.bindFramebuffer(U.FRAMEBUFFER,Ee);let De=I.textures[be],We=De.format,je=De.type;I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Ie=_d(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),U.readPixels(F,W,H,G,te.convert(We),te.convert(je),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Tt=z!==null?L.get(z).__webglFramebuffer:null;w.bindFramebuffer(U.FRAMEBUFFER,Tt);let ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ff(U,ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(st),U.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,F=null,W=0){let H=Math.pow(2,-W),G=Math.floor(I.image.width*H),le=Math.floor(I.image.height*H),pe=F!==null?F.x:0,be=F!==null?F.y:0;V.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,pe,be,G,le),w.unbindTexture()},this.copyTextureToTexture=function(I,F,W=null,H=null,G=0,le=0){let pe,be,Ee,De,We,je,Ie,st,Tt,ut=I.isCompressedTexture?I.mipmaps[le]:I.image;if(W!==null)pe=W.max.x-W.min.x,be=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,We=W.min.y,je=W.isBox3?W.min.z:0;else{let Ct=Math.pow(2,-G);pe=Math.floor(ut.width*Ct),be=Math.floor(ut.height*Ct),I.isDataArrayTexture?Ee=ut.depth:I.isData3DTexture?Ee=Math.floor(ut.depth*Ct):Ee=1,De=0,We=0,je=0}H!==null?(Ie=H.x,st=H.y,Tt=H.z):(Ie=0,st=0,Tt=0);let At=te.convert(F.format),vt=te.convert(F.type),ye;F.isData3DTexture?(V.setTexture3D(F,0),ye=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(V.setTexture2DArray(F,0),ye=U.TEXTURE_2D_ARRAY):(V.setTexture2D(F,0),ye=U.TEXTURE_2D),w.activeTexture(U.TEXTURE0),w.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let oi=w.getParameter(U.UNPACK_ROW_LENGTH),ta=w.getParameter(U.UNPACK_IMAGE_HEIGHT),Ti=w.getParameter(U.UNPACK_SKIP_PIXELS),rr=w.getParameter(U.UNPACK_SKIP_ROWS),Pr=w.getParameter(U.UNPACK_SKIP_IMAGES);w.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),w.pixelStorei(U.UNPACK_SKIP_PIXELS,De),w.pixelStorei(U.UNPACK_SKIP_ROWS,We),w.pixelStorei(U.UNPACK_SKIP_IMAGES,je);let Ia=I.isDataArrayTexture||I.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(I.isDepthTexture){let Ct=L.get(I),Lr=L.get(F),lt=L.get(Ct.__renderTarget),Rn=L.get(Lr.__renderTarget);w.bindFramebuffer(U.READ_FRAMEBUFFER,lt.__webglFramebuffer),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Sa=0;Sa<Ee;Sa++)Ia&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(I).__webglTexture,G,je+Sa),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(F).__webglTexture,le,Tt+Sa)),U.blitFramebuffer(De,We,pe,be,Ie,st,pe,be,U.DEPTH_BUFFER_BIT,U.NEAREST);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||I.isRenderTargetTexture||L.has(I)){let Ct=L.get(I),Lr=L.get(F);w.bindFramebuffer(U.READ_FRAMEBUFFER,N),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,P);for(let lt=0;lt<Ee;lt++)Ia?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.__webglTexture,G,je+lt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,G),ot?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lr.__webglTexture,le,Tt+lt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lr.__webglTexture,le),G!==0?U.blitFramebuffer(De,We,pe,be,Ie,st,pe,be,U.COLOR_BUFFER_BIT,U.NEAREST):ot?U.copyTexSubImage3D(ye,le,Ie,st,Tt+lt,De,We,pe,be):U.copyTexSubImage2D(ye,le,Ie,st,De,We,pe,be);w.bindFramebuffer(U.READ_FRAMEBUFFER,null),w.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ot?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(ye,le,Ie,st,Tt,pe,be,Ee,At,vt,ut.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,le,Ie,st,Tt,pe,be,Ee,At,ut.data):U.texSubImage3D(ye,le,Ie,st,Tt,pe,be,Ee,At,vt,ut):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,le,Ie,st,pe,be,At,vt,ut.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,le,Ie,st,ut.width,ut.height,At,ut.data):U.texSubImage2D(U.TEXTURE_2D,le,Ie,st,pe,be,At,vt,ut);w.pixelStorei(U.UNPACK_ROW_LENGTH,oi),w.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ta),w.pixelStorei(U.UNPACK_SKIP_PIXELS,Ti),w.pixelStorei(U.UNPACK_SKIP_ROWS,rr),w.pixelStorei(U.UNPACK_SKIP_IMAGES,Pr),le===0&&F.generateMipmaps&&U.generateMipmap(ye),w.unbindTexture()},this.initRenderTarget=function(I){L.get(I).__webglFramebuffer===void 0&&V.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?V.setTextureCube(I,0):I.isData3DTexture?V.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?V.setTexture2DArray(I,0):V.setTexture2D(I,0),w.unbindTexture()},this.resetState=function(){Q=0,j=0,z=null,w.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}},Hu={type:"change"},zh={type:"start"},hp={type:"end"},_o=new va,zu=new Ei,Sv=Math.cos(70*Ea.DEG2RAD),Ft=new D,_i=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6,Mv=class extends wm{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:on.ROTATE,MIDDLE:on.DOLLY,RIGHT:on.PAN},this.touches={ONE:an.ROTATE,TWO:an.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Yi,this._lastTargetPosition=new D,this._quat=new Yi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bu,this._sphericalDelta=new bu,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tv.bind(this),this._onPointerDown=wv.bind(this),this._onPointerUp=Bv.bind(this),this._onContextMenu=Uv.bind(this),this._onMouseWheel=Pv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Fv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Rv.bind(this),this._onMouseMove=Dv.bind(this),this._interceptControlDown=kv.bind(this),this._interceptControlUp=Qv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_i:i>Math.PI&&(i-=_i),r<-Math.PI?r+=_i:r>Math.PI&&(r-=_i),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){let s=Ft.length();n=this._clampDistance(s*this._scale);let o=s-n;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),a=!!o}else if(this.object.isOrthographicCamera){let s=new D(this._mouse.x,this._mouse.y,0);s.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=o!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(s),this.object.updateMatrixWorld(),n=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(_o.origin.copy(this.object.position),_o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_o.direction))<Sv?this.object.lookAt(this.target):(zu.setFromNormalAndCoplanarPoint(this.object.up,this.target),_o.intersectPlane(zu,this.target))))}else if(this.object.isOrthographicCamera){let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_i/60*this.autoRotateSpeed*e:_i/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ft.copy(r).sub(this.target);let a=Ft.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,n=i.width,s=i.height;this._mouse.x=r/n*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function wv(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Tv(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Bv(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hp),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Rv(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case on.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=rt.DOLLY;break;case on.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rt.ROTATE}break;case on.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(zh)}function Dv(e){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Pv(e){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(e.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(hp))}function Lv(e){this.enabled!==!1&&this._handleKeyDown(e)}function Fv(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case an.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=rt.TOUCH_ROTATE;break;case an.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case an.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=rt.TOUCH_DOLLY_PAN;break;case an.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(zh)}function Nv(e){switch(this._trackPointer(e),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=rt.NONE}}function Uv(e){this.enabled!==!1&&e.preventDefault()}function kv(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qv(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vu(e,t){if(t===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===th||t===MA){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===th)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Ov(e){let t=new Map,i=new Map,r=e.clone();return dp(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function dp(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)dp(e.children[r],t.children[r],i)}var Gv=class extends ya{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Wu(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wu(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nx(t)})}load(e,t,i,r){let a=this,n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){let l=as.extractUrlBase(e);n=as.resolveURL(l,this.path)}else n=as.extractUrlBase(e);this.manager.itemStart(e);let s=function(l){r?r(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},o=new rs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{a.parse(l,n,function(c){t(c),a.manager.itemEnd(e)},s)}catch(c){s(c)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,n={},s={},o=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===up){try{n[Ve.KHR_BINARY_GLTF]=new sx(e)}catch(c){r&&r(c);return}a=JSON.parse(n[Ve.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _x(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[h.name]=h,n[h.name]=!0}if(a.extensionsUsed)for(let c=0;c<a.extensionsUsed.length;++c){let h=a.extensionsUsed[c],u=a.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:n[h]=new Vv;break;case Ve.KHR_DRACO_MESH_COMPRESSION:n[h]=new ox(a,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:n[h]=new lx;break;case Ve.KHR_MESH_QUANTIZATION:n[h]=new cx;break;default:u.indexOf(h)>=0&&s[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(n),l.setPlugins(s),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}};function Hv(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function wt(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zv=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let a=t.json,n=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],s,o=new Re(16777215);n.color!==void 0&&o.setRGB(n.color[0],n.color[1],n.color[2],Gt);let l=n.range!==void 0?n.range:0;switch(n.type){case"directional":s=new fl(o),s.target.position.set(0,0,-1),s.add(s.target);break;case"point":s=new dm(o),s.distance=l;break;case"spot":s=new cm(o),s.distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=n.spot.innerConeAngle!==void 0?n.spot.innerConeAngle:0,n.spot.outerConeAngle=n.spot.outerConeAngle!==void 0?n.spot.outerConeAngle:Math.PI/4,s.angle=n.spot.outerConeAngle,s.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return s.position.set(0,0,0),sr(s,n),n.intensity!==void 0&&(s.intensity=n.intensity),s.name=t.createUniqueName(n.name||"light_"+e),r=Promise.resolve(s),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(n){return i._getNodeRef(t.cache,a,n)})}},Vv=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Fi}extendParams(e,t,i){let r=[];e.color=new Re(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],Gt),e.opacity=n[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",a.baseColorTexture,Et))}return Promise.all(r)}},Wv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},qv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}},jv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Kv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Xv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Et)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},Yv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Jv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let a=i.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],Gt),Promise.all(r)}},Zv=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},$v=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let a=i.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],Gt),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Et)),Promise.all(r)}},ex=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},tx=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Ci:null}extendMaterialParams(e,t){let i=wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},ix=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,n)}},rx=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(e,n.source,o)}},ax=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let n=a.extensions[t],s=r.images[n.source],o=i.textureLoader;if(s.uri){let l=i.options.manager.getHandler(s.uri);l!==null&&(o=l)}return i.loadTextureImage(e,n.source,o)}},Wu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){let o=r.byteOffset||0,l=r.byteLength||0,c=r.count,h=r.byteStride,u=new Uint8Array(s,o,l);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(c,h,u,r.mode,r.filter).then(function(d){return d.buffer}):n.ready.then(function(){let d=new ArrayBuffer(c*h);return n.decodeGltfBuffer(new Uint8Array(d),c,h,u,r.mode,r.filter),d})})}else return null}},nx=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let o of r.primitives)if(o.mode!==Di.TRIANGLES&&o.mode!==Di.TRIANGLE_STRIP&&o.mode!==Di.TRIANGLE_FAN&&o.mode!==void 0)return null;let a=i.extensions[this.name].attributes,n=[],s={};for(let o in a)n.push(this.parser.getDependency("accessor",a[o]).then(l=>(s[o]=l,s[o])));return n.length<1?null:(n.push(this.parser.createNodeMesh(e)),Promise.all(n).then(o=>{let l=o.pop(),c=l.isGroup?l.children:[l],h=o[0].count,u=[];for(let d of c){let A=new Le,m=new D,g=new Yi,f=new D(1,1,1),p=new Ig(d.geometry,d.material,h);for(let v=0;v<h;v++)s.TRANSLATION&&m.fromBufferAttribute(s.TRANSLATION,v),s.ROTATION&&g.fromBufferAttribute(s.ROTATION,v),s.SCALE&&f.fromBufferAttribute(s.SCALE,v),p.setMatrixAt(v,A.compose(m,g,f));let x=null;for(let v in s)if(v==="_COLOR_0"){let b=s[v];p.instanceColor=new rl(b.array,b.itemSize,b.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(x===null){let _=p.geometry;x=new zt,x.name=_.name;for(let S in _.attributes)x.setAttribute(S,_.attributes[S]);for(let S in _.morphAttributes)x.morphAttributes[S]=_.morphAttributes[S];_.index!==null&&x.setIndex(_.index),x.morphTargetsRelative=_.morphTargetsRelative;for(let S of _.groups)x.addGroup(S.start,S.count,S.materialIndex);_.boundingBox!==null&&(x.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(x.boundingSphere=_.boundingSphere.clone()),x.drawRange.start=_.drawRange.start,x.drawRange.count=_.drawRange.count,x.userData=Object.assign({},_.userData),p.geometry=x}let b=s[v];x.setAttribute(v,new rl(b.array,b.itemSize,b.normalized))}Ht.prototype.copy.call(p,d),this.parser.assignFinalMaterial(p),u.push(p)}return l.isGroup?(l.clear(),l.add(...u),l):u[0]}))}},up="glTF",zn=12,qu={JSON:1313821514,BIN:5130562},sx=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,zn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-zn,a=new DataView(e,zn),n=0;for(;n<r;){let s=a.getUint32(n,!0);n+=4;let o=a.getUint32(n,!0);if(n+=4,o===qu.JSON){let l=new Uint8Array(e,zn+n,s);this.content=i.decode(l)}else if(o===qu.BIN){let l=zn+n;this.body=e.slice(l,l+s)}n+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ox=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},l={};for(let c in n){let h=oh[c]||c.toLowerCase();s[h]=n[c]}for(let c in e.attributes){let h=oh[c]||c.toLowerCase();if(n[c]!==void 0){let u=i.accessors[e.attributes[c]],d=pn[u.componentType];l[h]=d.name,o[h]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(c){return new Promise(function(h,u){r.decodeDracoFile(c,function(d){for(let A in d.attributes){let m=d.attributes[A],g=o[A];g!==void 0&&(m.normalized=g)}h(d)},s,l,Gt,u)})})}},lx=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},cx=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},Ap=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[a+n];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=s*2,l=s*3,c=r-t,h=(i-t)/c,u=h*h,d=u*h,A=e*l,m=A-l,g=-2*d+3*u,f=d-u,p=1-g,x=f-u+h;for(let v=0;v!==s;v++){let b=n[m+v+s],_=n[m+v+o]*c,S=n[A+v+s],M=n[A+v]*c;a[v]=p*b+x*_+g*S+f*M}return a}},hx=new Yi,dx=class extends Ap{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return hx.fromArray(a).normalize().toArray(a),a}},Di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:Mt,9729:ht,9984:xh,9985:Uo,9986:$n,9987:qi},Ku={33071:Wi,33648:Wo,10497:Mr},fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Or={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ux={CUBICSPLINE:void 0,LINEAR:fs,STEP:ps},gc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ax(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hr})),e.DefaultMaterial}function ca(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function sr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function px(e,t,i){let r=!1,a=!1,n=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(r=!0),u.NORMAL!==void 0&&(a=!0),u.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(r){let d=u.POSITION!==void 0?i.getDependency("accessor",u.POSITION):e.attributes.position;s.push(d)}if(a){let d=u.NORMAL!==void 0?i.getDependency("accessor",u.NORMAL):e.attributes.normal;o.push(d)}if(n){let d=u.COLOR_0!==void 0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return r&&(e.morphAttributes.position=h),a&&(e.morphAttributes.normal=u),n&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function fx(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gx(e){let t,i=e.extensions&&e.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+mc(i.attributes):t=e.indices+":"+mc(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+mc(e.targets[r]);return t}function mc(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function lh(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mx(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bx=new Le,_x=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,n=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;let o=s.match(/Version\/(\d+)/);r=i&&o?parseInt(o[1],10):-1,a=s.indexOf("Firefox")>-1,n=a?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&n<98?this.textureLoader=new om(this.options.manager):this.textureLoader=new Am(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){let s={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return ca(a,s,r),sr(s,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(s)})).then(function(){for(let o of s.scenes)o.updateMatrixWorld();e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){let n=t[r].joints;for(let s=0,o=n.length;s<o;s++)e[n[s]].isBone=!0}for(let r=0,a=e.length;r<a;r++){let n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(n,s)=>{let o=this.associations.get(n);o!=null&&this.associations.set(s,o);for(let[l,c]of n.children.entries())a(c,s.children[l])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(a,n){i.load(as.resolveURL(t.uri,r.path),a,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let n=fc[r.type],s=pn[r.componentType],o=r.normalized===!0,l=new s(r.count*n);return Promise.resolve(new Xt(l,n,o))}let a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(n){let s=n[0],o=fc[r.type],l=pn[r.componentType],c=l.BYTES_PER_ELEMENT,h=c*o,u=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,A=r.normalized===!0,m,g;if(d&&d!==h){let f=Math.floor(u/d),p="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,x=t.cache.get(p);x||(m=new l(s,f*d,r.count*d/c),x=new pg(m,d/c),t.cache.add(p,x)),g=new fg(x,o,u%d/c,A)}else s===null?m=new l(r.count*o):m=new l(s,u,r.count*o),g=new Xt(m,o,A);if(r.sparse!==void 0){let f=fc.SCALAR,p=pn[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,b=new p(n[1],x,r.sparse.count*f),_=new l(n[2],v,r.sparse.count*o);s!==null&&(g=new Xt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,M=b.length;S<M;S++){let E=b[S];if(g.setX(E,_[S*o]),o>=2&&g.setY(E,_[S*o+1]),o>=3&&g.setZ(E,_[S*o+2]),o>=4&&g.setW(E,_[S*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=A}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],n=this.textureLoader;if(a.uri){let s=i.manager.getHandler(a.uri);s!==null&&(n=s)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],s=a.images[t],o=(s.uri||s.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=n.name||s.name||"",c.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(c.name=s.uri);let h=(a.samplers||{})[n.sampler]||{};return c.magFilter=ju[h.magFilter]||ht,c.minFilter=ju[h.minFilter]||qi,c.wrapS=Ku[h.wrapS]||Mr,c.wrapT=Ku[h.wrapT]||Mr,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Mt&&c.minFilter!==ht,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let n=r.images[e],s=self.URL||self.webkitURL,o=n.uri||"",l=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(h){l=!0;let u=new Blob([h],{type:n.mimeType});return o=s.createObjectURL(u),o});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(o).then(function(h){return new Promise(function(u,d){let A=u;t.isImageBitmapLoader===!0&&(A=function(m){let g=new Ai(m);g.needsUpdate=!0,u(g)}),t.load(as.resolveURL(h,a.path),A,void 0,d)})}).then(function(h){return l===!0&&s.revokeObjectURL(o),sr(h,n),h.userData.mimeType=n.mimeType||mx(n.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),a.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let s=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(s){let o=a.associations.get(n);n=a.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(n,s),a.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){let s="PointsMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new jA,cr.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(s,o)),i=o}else if(e.isLine){let s="LineBasicMaterial:"+i.uuid,o=this.cache.get(s);o||(o=new yn,cr.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(s,o)),i=o}if(r||a||n){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),n&&(s+="flat-shading:");let o=this.cache.get(s);o||(o=i.clone(),a&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(s,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return yi}loadMaterial(e){let t=this,i=this.json,r=this.extensions,a=i.materials[e],n,s={},o=a.extensions||{},l=[];if(o[Ve.KHR_MATERIALS_UNLIT]){let h=r[Ve.KHR_MATERIALS_UNLIT];n=h.getMaterialType(),l.push(h.extendParams(s,a,t))}else{let h=a.pbrMetallicRoughness||{};if(s.color=new Re(1,1,1),s.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;s.color.setRGB(u[0],u[1],u[2],Gt),s.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(s,"map",h.baseColorTexture,Et)),s.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,s.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(s,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(s,"roughnessMap",h.metallicRoughnessTexture))),n=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=Nt);let c=a.alphaMode||gc.OPAQUE;if(c===gc.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,c===gc.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&n!==Fi&&(l.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new Ce(1,1),a.normalTexture.scale!==void 0)){let h=a.normalTexture.scale;s.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&n!==Fi&&(l.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&n!==Fi){let h=a.emissiveFactor;s.emissive=new Re().setRGB(h[0],h[1],h[2],Gt)}return a.emissiveTexture!==void 0&&n!==Fi&&l.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,Et)),Promise.all(l).then(function(){let h=new n(s);return a.name&&(h.name=a.name),sr(h,a),t.associations.set(h,{materials:e}),a.extensions&&ca(r,h,a),h})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(o){return Xu(o,s,t)})}let n=[];for(let s=0,o=e.length;s<o;s++){let l=e[s],c=gx(l),h=r[c];if(h)n.push(h.promise);else{let u;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?u=a(l):u=Xu(new zt,l,t),l.mode===Di.TRIANGLE_STRIP?u=u.then(d=>Vu(d,MA)):l.mode===Di.TRIANGLE_FAN&&(u=u.then(d=>Vu(d,th))),r[c]={primitive:l,promise:u},n.push(u)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],n=a.primitives,s=[];for(let o=0,l=n.length;o<l;o++){let c=n[o].material===void 0?Ax(this.cache):this.getDependency("material",n[o].material);s.push(c)}return s.push(t.loadGeometries(n)),Promise.all(s).then(async function(o){let l=o.slice(0,o.length-1),c=o[o.length-1],h=[];for(let d=0,A=c.length;d<A;d++){let m=c[d],g=n[d],f,p=l[d];if(g.mode===Di.TRIANGLES||g.mode===Di.TRIANGLE_STRIP||g.mode===Di.TRIANGLE_FAN||g.mode===void 0){let x=a.isSkinnedMesh===!0,v=m.hasAttribute("skinIndex")&&m.hasAttribute("skinWeight");x&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=x&&v?new vg(m,p):new mt(m,p),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(g.mode===Di.LINES)f=new xa(m,p);else if(g.mode===Di.LINE_STRIP)f=new Cs(m,p);else if(g.mode===Di.LINE_LOOP)f=new Ph(m,p);else if(g.mode===Di.POINTS)f=new Lh(m,p);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&fx(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),sr(f,a),g.extensions&&ca(r,f,g),t.assignFinalMaterial(f),h.push(f)}for(let d=0,A=h.length;d<A;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return a.extensions&&ca(r,h[0],a),h[0];let u=new xi;a.extensions&&ca(r,u,a),t.associations.set(u,{meshes:e});for(let d=0,A=h.length;d<A;d++)u.add(h[d]);return u})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(Ea.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Yr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),sr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let a=r.pop(),n=r,s=[],o=[];for(let l=0,c=n.length;l<c;l++){let h=n[l];if(h){s.push(h);let u=new Le;a!==null&&u.fromArray(a.array,l*16),o.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yg(s,o)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],s=[],o=[],l=[],c=[];for(let h=0,u=r.channels.length;h<u;h++){let d=r.channels[h],A=r.samplers[d.sampler],m=d.target,g=m.node,f=r.parameters!==void 0?r.parameters[A.input]:A.input,p=r.parameters!==void 0?r.parameters[A.output]:A.output;m.node!==void 0&&(n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",p)),l.push(A),c.push(m))}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){let u=h[0],d=h[1],A=h[2],m=h[3],g=h[4],f=[];for(let x=0,v=u.length;x<v;x++){let b=u[x],_=d[x],S=A[x],M=m[x],E=g[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let y=i._createAnimationTracks(b,_,S,M,E);if(y)for(let R=0;R<y.length;R++)f.push(y[R])}let p=new tm(a,void 0,f);return sr(p,r),p})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){let n=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&n.traverse(function(s){if(s.isMesh)for(let o=0,l=r.weights.length;o<l;o++)s.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],a=i._loadNodeShallow(e),n=[],s=r.children||[];for(let l=0,c=s.length;l<c;l++)n.push(i.getDependency("node",s[l]));let o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(n),o]).then(function(l){let c=l[0],h=l[1],u=l[2];u!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(u,bx)});for(let d=0,A=h.length;d<A;d++)c.add(h[d]);if(c.userData.pivot!==void 0&&h.length>0){let d=c.userData.pivot,A=h[0];c.pivot=new D().fromArray(d),c.position.x-=d[0],c.position.y-=d[1],c.position.z-=d[2],A.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",s=[],o=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return o&&s.push(o),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(l){return r._getNodeRef(r.cameraCache,a.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){s.push(l)}),this.nodeCache[e]=Promise.all(s).then(function(l){let c;if(a.isBone===!0?c=new VA:l.length>1?c=new xi:l.length===1?c=l[0]:c=new Ht,c!==l[0])for(let h=0,u=l.length;h<u;h++)c.add(l[h]);if(a.name&&(c.userData.name=a.name,c.name=n),sr(c,a),a.extensions&&ca(i,c,a),a.matrix!==void 0){let h=new Le;h.fromArray(a.matrix),c.applyMatrix4(h)}else a.translation!==void 0&&c.position.fromArray(a.translation),a.rotation!==void 0&&c.quaternion.fromArray(a.rotation),a.scale!==void 0&&c.scale.fromArray(a.scale);if(!r.associations.has(c))r.associations.set(c,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){let h=r.associations.get(c);r.associations.set(c,{...h})}return r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new xi;i.name&&(a.name=r.createUniqueName(i.name)),sr(a,i),i.extensions&&ca(t,a,i);let n=i.nodes||[],s=[];for(let o=0,l=n.length;o<l;o++)s.push(r.getDependency("node",n[o]));return Promise.all(s).then(function(o){for(let c=0,h=o.length;c<h;c++){let u=o[c];u.parent!==null?a.add(Ov(u)):a.add(u)}let l=c=>{let h=new Map;for(let[u,d]of r.associations)(u instanceof cr||u instanceof Ai)&&h.set(u,d);return c.traverse(u=>{let d=r.associations.get(u);d!=null&&h.set(u,d)}),h};return r.associations=l(a),a})}_createAnimationTracks(e,t,i,r,a){let n=[],s=e.name?e.name:e.uuid,o=[];function l(d){d.morphTargetInfluences&&o.push(d.name?d.name:d.uuid)}Or[a.path]===Or.weights?(l(e),e.isGroup&&e.children.forEach(l)):o.push(s);let c;switch(Or[a.path]){case Or.weights:c=_s;break;case Or.rotation:c=Es;break;case Or.translation:case Or.scale:c=sl;break;default:i.itemSize===1?c=_s:c=sl;break}let h=r.interpolation!==void 0?ux[r.interpolation]:fs,u=this._getArrayFromAccessor(i);for(let d=0,A=o.length;d<A;d++){let m=new c(o[d]+"."+Or[a.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),n.push(m)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=lh(t.constructor),r=new Float32Array(t.length);for(let a=0,n=t.length;a<n;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){let i=this instanceof Es?dx:Ap;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ex(e,t,i){let r=t.attributes,a=new dt;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(a.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=lh(pn[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new D,l=new D;for(let c=0,h=n.length;c<h;c++){let u=n[c];if(u.POSITION!==void 0){let d=i.json.accessors[u.POSITION],A=d.min,m=d.max;if(A!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(A[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(A[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(A[2]),Math.abs(m[2]))),d.normalized){let g=lh(pn[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new Ot;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function Xu(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=oh[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return ze.workingColorSpace!==Gt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),sr(e,t),Ex(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?px(e,t.targets,i):e})}var vx=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let i=this.workersResolve[e];if(i&&i(t),this.queue.length){let{resolve:r,msg:a,transfer:n}=this.queue.shift();this.workersResolve[e]=r,this.workers[e].postMessage(a,n)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{let r=this._getIdleWorker();r!==-1?(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=i,this.workers[r].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}},Vn=class{constructor(e,t,i,r){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=r,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){let i=this._offset,r=0;for(;this._dataView.getUint8(this._offset)!==t&&r<e;)r++,this._offset++;return r<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,r)}},xC=new Uint8Array([0]),ci=[171,75,84,88,32,50,48,187,13,10,26,10];function Yu(e){return new TextDecoder().decode(e)}function xx(e){let t=new Uint8Array(e.buffer,e.byteOffset,ci.length);if(t[0]!==ci[0]||t[1]!==ci[1]||t[2]!==ci[2]||t[3]!==ci[3]||t[4]!==ci[4]||t[5]!==ci[5]||t[6]!==ci[6]||t[7]!==ci[7]||t[8]!==ci[8]||t[9]!==ci[9]||t[10]!==ci[10]||t[11]!==ci[11])throw new Error("Missing KTX 2.0 identifier.");let i={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},r=17*Uint32Array.BYTES_PER_ELEMENT,a=new Vn(e,ci.length,r,!0);i.vkFormat=a._nextUint32(),i.typeSize=a._nextUint32(),i.pixelWidth=a._nextUint32(),i.pixelHeight=a._nextUint32(),i.pixelDepth=a._nextUint32(),i.layerCount=a._nextUint32(),i.faceCount=a._nextUint32(),i.levelCount=a._nextUint32(),i.supercompressionScheme=a._nextUint32();let n=a._nextUint32(),s=a._nextUint32(),o=a._nextUint32(),l=a._nextUint32(),c=a._nextUint64(),h=a._nextUint64(),u=3*Math.max(i.levelCount,1)*8,d=new Vn(e,ci.length+r,u,!0);for(let Y=0,_e=Math.max(i.levelCount,1);Y<_e;Y++)i.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});let A=new Vn(e,n,s,!0);A._skip(4);let m=A._nextUint16(),g=A._nextUint16(),f=A._nextUint16(),p=A._nextUint16(),x={vendorId:m,descriptorType:g,versionNumber:f,colorModel:A._nextUint8(),colorPrimaries:A._nextUint8(),transferFunction:A._nextUint8(),flags:A._nextUint8(),texelBlockDimension:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],bytesPlane:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],samples:[]},v=(p/4-6)/4;for(let Y=0;Y<v;Y++){let _e={bitOffset:A._nextUint16(),bitLength:A._nextUint8(),channelType:A._nextUint8(),samplePosition:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&_e.channelType?(_e.sampleLower=A._nextInt32(),_e.sampleUpper=A._nextInt32()):(_e.sampleLower=A._nextUint32(),_e.sampleUpper=A._nextUint32()),x.samples[Y]=_e}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(x);let b=new Vn(e,o,l,!0);for(;b._offset<l;){let Y=b._nextUint32(),_e=b._scan(Y),de=Yu(_e);if(i.keyValue[de]=b._nextUint8Array(Y-_e.byteLength-1),de.match(/^ktx/i)){let Ke=Yu(i.keyValue[de]);i.keyValue[de]=Ke.substring(0,Ke.lastIndexOf("\0"))}b._skip(Y%4?4-Y%4:0)}if(h<=0)return i;let _=new Vn(e,c,h,!0),S=_._nextUint16(),M=_._nextUint16(),E=_._nextUint32(),y=_._nextUint32(),R=_._nextUint32(),T=_._nextUint32(),B=[];for(let Y=0,_e=Math.max(i.levelCount,1);Y<_e;Y++)B.push({imageFlags:_._nextUint32(),rgbSliceByteOffset:_._nextUint32(),rgbSliceByteLength:_._nextUint32(),alphaSliceByteOffset:_._nextUint32(),alphaSliceByteLength:_._nextUint32()});let N=c+_._offset,P=N+E,Q=P+y,j=Q+R,z=new Uint8Array(e.buffer,e.byteOffset+N,E),ne=new Uint8Array(e.buffer,e.byteOffset+P,y),K=new Uint8Array(e.buffer,e.byteOffset+Q,R),J=new Uint8Array(e.buffer,e.byteOffset+j,T);return i.globalData={endpointCount:S,selectorCount:M,imageDescs:B,endpointsData:z,selectorsData:ne,tablesData:K,extendedData:J},i}var bc,vr,ch,_c={env:{emscripten_notify_memory_growth:function(e){ch=new Uint8Array(vr.exports.memory.buffer)}}},yx=class{init(){return bc||(bc=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Ju).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,_c)).then(this._init):WebAssembly.instantiate(Buffer.from(Ju,"base64"),_c).then(this._init),bc)}_init(e){vr=e.instance,_c.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!vr)throw new Error("ZSTDDecoder: Await .init() before decoding.");let i=e.byteLength,r=vr.exports.malloc(i);ch.set(e,r),t=t||Number(vr.exports.ZSTD_findDecompressedSize(r,i));let a=vr.exports.malloc(t),n=vr.exports.ZSTD_decompress(a,t,r,i),s=ch.slice(a,a+n);return vr.exports.free(r),vr.exports.free(a),s}},Ju="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",Cx="display-p3",Ix="display-p3-linear",yC={...ze.spaces[Et],outputColorSpaceConfig:{drawingBufferColorSpace:Et,toneMappingMode:"extended"}},Sx=new URL("../libs/basis/basis_transcoder.wasm",document.baseURI).toString(),Mx=new URL("../libs/basis/basis_transcoder.js",document.baseURI).toString(),Ec=new WeakMap,vc=0,xc,wn=class tn extends ya{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new vx,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await t.init(),this.detectSupport(t)}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-s3tc"),bptcSupported:t.hasFeature("texture-compression-bc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let t=new rs(this.manager);t.setWithCredentials(this.withCredentials);let i=new rs(this.manager);i.setWithCredentials(this.withCredentials),i.setResponseType("arraybuffer");let r,a;this.transcoderPath===""?(r=t.loadAsync(Mx),a=i.loadAsync(Sx)):(t.setPath(this.transcoderPath),r=t.loadAsync("basis_transcoder.js"),i.setPath(this.transcoderPath),a=i.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([r,a]).then(([n,s])=>{let o=tn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(tn.EngineFormat),"let _EngineType = "+JSON.stringify(tn.EngineType),"let _TranscoderFormat = "+JSON.stringify(tn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(tn.BasisFormat),"/* basis_transcoder.js */",n,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=s,this.workerPool.setWorkerCreator(()=>{let c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),vc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),vc++}return this.transcoderPending}load(t,i,r,a){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let n=new rs(this.manager);n.setPath(this.path),n.setCrossOrigin(this.crossOrigin),n.setWithCredentials(this.withCredentials),n.setRequestHeader(this.requestHeader),n.setResponseType("arraybuffer"),n.load(t,s=>{this.parse(s,i,a)},r,a)}parse(t,i,r){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ec.has(t))return Ec.get(t).promise.then(i).catch(r);this._createTexture(t).then(a=>i?i(a):null).catch(r)}_createTextureFrom(t,i){let{type:r,error:a,data:{faces:n,width:s,height:o,format:l,type:c,dfdFlags:h}}=t;if(r==="error")return Promise.reject(a);let u;if(i.faceCount===6)u=new kg(n,l,c);else{let d=n[0].mipmaps;u=i.layerCount>1?new Ug(d,s,o,i.layerCount,l,c):new ul(d,s,o,l,c)}return u.minFilter=n[0].mipmaps.length===1?ht:qi,u.magFilter=ht,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=pp(i),u.premultiplyAlpha=!!(h&1),u}async _createTexture(t,i={}){let r=xx(new Uint8Array(t)),a=r.vkFormat===1000066e3&&r.dataFormatDescriptor[0].colorModel===167;if(!(r.vkFormat===0||a&&!this.workerConfig.astcHDRSupported))return Bx(r);let n=i,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:n},[t])).then(o=>this._createTextureFrom(o.data,r));return Ec.set(t,{promise:s}),s}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),vc--}};wn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};wn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};wn.EngineFormat={RGBAFormat:It,RGBA_ASTC_4x4_Format:ma,RGB_BPTC_UNSIGNED_Format:Jo,RGBA_BPTC_Format:mn,RGBA_ETC2_EAC_Format:ds,RGBA_PVRTC_4BPPV1_Format:gn,RGBA_S3TC_DXT5_Format:ga,RGB_ETC1_Format:jo,RGB_ETC2_Format:hs,RGB_PVRTC_4BPPV1_Format:qo,RGBA_S3TC_DXT1_Format:fa};wn.EngineType={UnsignedByteType:Ne,HalfFloatType:$t,FloatType:Ut};wn.BasisWorker=function(){let e,t,i,r=_EngineFormat,a=_EngineType,n=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(m){let g=m.data;switch(g.type){case"init":e=g.config,o(g.transcoderBinary);break;case"transcode":t.then(()=>{try{let{faces:f,buffers:p,width:x,height:v,hasAlpha:b,format:_,type:S,dfdFlags:M}=l(g.buffer);self.postMessage({type:"transcode",id:g.id,data:{faces:f,width:x,height:v,hasAlpha:b,format:_,type:S,dfdFlags:M}},p)}catch(f){console.error(f),self.postMessage({type:"error",id:g.id,error:f.message})}});break}});function o(m){t=new Promise(g=>{i={wasmBinary:m,onRuntimeInitialized:g},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(m){let g=new i.KTX2File(new Uint8Array(m));function f(){g.close(),g.delete()}if(!g.isValid())throw f(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let p;if(g.isUASTC())p=s.UASTC;else if(g.isETC1S())p=s.ETC1S;else if(g.isHDR())p=s.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let x=g.getWidth(),v=g.getHeight(),b=g.getLayers()||1,_=g.getLevels(),S=g.getFaces(),M=g.getHasAlpha(),E=g.getDFDFlags(),{transcoderFormat:y,engineFormat:R,engineType:T}=u(p,x,v,M);if(!x||!v||!_)throw f(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw f(),new Error("THREE.KTX2Loader: .startTranscoding failed");let B=[],N=[];for(let P=0;P<S;P++){let Q=[];for(let j=0;j<_;j++){let z=[],ne,K;for(let Y=0;Y<b;Y++){let _e=g.getImageLevelInfo(j,Y,P);P===0&&j===0&&Y===0&&(_e.origWidth%4!==0||_e.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),_>1?(ne=_e.origWidth,K=_e.origHeight):(ne=_e.width,K=_e.height);let de=new Uint8Array(g.getImageTranscodedSizeInBytes(j,Y,0,y)),Ke=g.transcodeImage(de,j,Y,P,y,0,-1,-1);if(T===a.HalfFloatType&&(de=new Uint16Array(de.buffer,de.byteOffset,de.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!Ke)throw f(),new Error("THREE.KTX2Loader: .transcodeImage failed.");z.push(de)}let J=A(z);Q.push({data:J,width:ne,height:K}),N.push(J.buffer)}B.push({mipmaps:Q,width:x,height:v,format:R,type:T})}return f(),{faces:B,buffers:N,width:x,height:v,hasAlpha:M,dfdFlags:E,format:R,type:T}}let c=[{if:"astcSupported",basisFormat:[s.UASTC],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[r.RGBA_ASTC_4x4_Format,r.RGBA_ASTC_4x4_Format],engineType:[a.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[r.RGBA_BPTC_Format,r.RGBA_BPTC_Format],engineType:[a.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.BC1,n.BC3],engineFormat:[r.RGBA_S3TC_DXT1_Format,r.RGBA_S3TC_DXT5_Format],engineType:[a.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[r.RGB_ETC2_Format,r.RGBA_ETC2_EAC_Format],engineType:[a.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.ETC1],engineFormat:[r.RGB_ETC1_Format],engineType:[a.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[r.RGB_PVRTC_4BPPV1_Format,r.RGBA_PVRTC_4BPPV1_Format],engineType:[a.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[s.UASTC_HDR],transcoderFormat:[n.BC6H],engineFormat:[r.RGB_BPTC_UNSIGNED_Format],engineType:[a.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[s.ETC1S,s.UASTC],transcoderFormat:[n.RGBA32,n.RGBA32],engineFormat:[r.RGBAFormat,r.RGBAFormat],engineType:[a.UnsignedByteType,a.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[s.UASTC_HDR],transcoderFormat:[n.RGBA_HALF],engineFormat:[r.RGBAFormat],engineType:[a.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[s.ETC1S]:c.filter(m=>m.basisFormat.includes(s.ETC1S)).sort((m,g)=>m.priorityETC1S-g.priorityETC1S),[s.UASTC]:c.filter(m=>m.basisFormat.includes(s.UASTC)).sort((m,g)=>m.priorityUASTC-g.priorityUASTC),[s.UASTC_HDR]:c.filter(m=>m.basisFormat.includes(s.UASTC_HDR)).sort((m,g)=>m.priorityHDR-g.priorityHDR)};function u(m,g,f,p){let x=h[m];for(let v=0;v<x.length;v++){let b=x[v];if(b.if&&!e[b.if]||!b.basisFormat.includes(m)||p&&b.transcoderFormat.length<2||b.needsPowerOfTwo&&!(d(g)&&d(f)))continue;let _=b.transcoderFormat[p?1:0],S=b.engineFormat[p?1:0],M=b.engineType[0];return{transcoderFormat:_,engineFormat:S,engineType:M}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(m){return m<=2?!0:(m&m-1)===0&&m!==0}function A(m){if(m.length===1)return m[0];let g=0;for(let x=0;x<m.length;x++){let v=m[x];g+=v.byteLength}let f=new Uint8Array(g),p=0;for(let x=0;x<m.length;x++){let v=m[x];f.set(v,p),p+=v.byteLength}return f}};var wx=new Set([It,ls,Li,Vr]),Tx=new Set([91]),yc={109:It,103:Li,100:Vr,97:It,83:Li,76:Vr,91:It,43:It,37:It,22:Li,16:Li,15:Vr,9:Vr,123:ls,122:ls,152:ds,148:hs,153:Ko,154:Xo,155:us,156:Yo,1000066e3:ma,158:ma,157:ma,1000066004:hn,166:hn,165:hn,134:fa,133:fa,132:cn,131:cn,138:ga,137:ga,140:$o,139:Zo,142:el,141:As,146:mn,145:mn,1000054005:gn,1000054001:gn,1000054004:cs,1000054e3:cs},ha={109:Ut,103:Ut,100:Ut,97:$t,83:$t,76:$t,91:_a,43:Ne,37:Ne,22:Ne,16:Ne,15:Ne,9:Ne,123:cl,122:hl,152:Ne,148:Ne,153:Ne,154:Ne,155:Ne,156:Ne,1000066e3:$t,158:Ne,157:Ne,1000066004:$t,166:Ne,165:Ne,134:Ne,133:Ne,132:Ne,131:Ne,138:Ne,137:Ne,140:Ne,139:Ne,142:Ne,141:Ne,146:Ne,145:Ne,1000054005:Ne,1000054001:Ne,1000054004:Ne,1000054e3:Ne};async function Bx(e){let{vkFormat:t}=e;if(yc[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+t);ha[t]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+t);let i;e.supercompressionScheme===2&&(xc||(xc=new Promise(async s=>{let o=new yx;await o.init(),s(o)})),i=await xc);let r=[];for(let s=0;s<e.levels.length;s++){let o=Math.max(1,e.pixelWidth>>s),l=Math.max(1,e.pixelHeight>>s),c=e.pixelDepth?Math.max(1,e.pixelDepth>>s):0,h=e.levels[s],u;if(e.supercompressionScheme===0)u=h.levelData;else if(e.supercompressionScheme===2)u=i.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let d;ha[t]===Ut?d=new Float32Array(u.buffer,u.byteOffset,u.byteLength/Float32Array.BYTES_PER_ELEMENT):ha[t]===$t||ha[t]===_a?d=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/Uint16Array.BYTES_PER_ELEMENT):ha[t]===cl||ha[t]===hl?d=new Uint32Array(u.buffer,u.byteOffset,u.byteLength/Uint32Array.BYTES_PER_ELEMENT):d=u,r.push({data:d,width:o,height:l,depth:c})}let a=e.levelCount===0||r.length>1,n;if(wx.has(yc[t]))n=e.pixelDepth===0?new ba(r[0].data,e.pixelWidth,e.pixelHeight):new FA(r[0].data,e.pixelWidth,e.pixelHeight,e.pixelDepth),n.minFilter=a?xh:Mt,n.magFilter=Mt,n.generateMipmaps=e.levelCount===0,n.normalized=Tx.has(t);else{if(e.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");n=new ul(r,e.pixelWidth,e.pixelHeight),n.minFilter=a?qi:ht,n.magFilter=ht}return n.mipmaps=r,n.type=ha[t],n.format=yc[t],n.colorSpace=pp(e),n.needsUpdate=!0,Promise.resolve(n)}function pp(e){let t=e.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?Et:Gt:t.colorPrimaries===10?t.transferFunction===2?Cx:Ix:(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),vi)}var Rx=(function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a=WebAssembly.validate(i)?o(t):o(e),n,s=WebAssembly.instantiate(a,{}).then(function(p){n=p.instance,n.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var b=p.charCodeAt(v);x[v]=b>96?b-97:b>64?b-39:b+4}for(var _=0,v=0;v<p.length;++v)x[_++]=x[v]<60?r[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,_)}function l(p,x,v,b,_,S,M){var E=p.exports.sbrk,y=b+3&-4,R=E(y*_),T=E(S.length),B=new Uint8Array(p.exports.memory.buffer);B.set(S,T);var N=x(R,b,_,T,S.length);if(N==0&&M&&M(R,y,_),v.set(B.subarray(R,R+b*_)),E(R-E(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function A(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var b=v.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+f.name+";"+l.toString()+f.toString(),v=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(v),_=u.length;_<p;++_)u[_]=A(b);for(var _=p;_<u.length;++_)u[_].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function g(p,x,v,b,_){for(var S=u[0],M=1;M<u.length;++M)u[M].pending<S.pending&&(S=u[M]);return new Promise(function(E,y){var R=new Uint8Array(v),T=++d;S.pending+=p,S.requests[T]={resolve:E,reject:y},S.object.postMessage({id:T,count:p,size:x,source:R,mode:b,filter:_},[R.buffer])})}function f(p){var x=p.data;self.ready.then(function(v){if(!x.id)return self.close();try{var b=new Uint8Array(x.count*x.size);l(v,v.exports[x.mode],b,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:s,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,b,_){l(n,n.exports.meshopt_decodeVertexBuffer,p,x,v,b,n.exports[c[_]])},decodeIndexBuffer:function(p,x,v,b){l(n,n.exports.meshopt_decodeIndexBuffer,p,x,v,b)},decodeIndexSequence:function(p,x,v,b){l(n,n.exports.meshopt_decodeIndexSequence,p,x,v,b)},decodeGltfBuffer:function(p,x,v,b,_,S){l(n,n.exports[h[_]],p,x,v,b,n.exports[c[S]])},decodeGltfBufferAsync:function(p,x,v,b,_){return u.length>0?g(p,x,v,h[b],c[_]):s.then(function(){var S=new Uint8Array(p*x);return l(n,n.exports[h[b]],S,p,x,v,n.exports[c[_]]),S})}}})(),zo=Math.pow(2,-24),Vh=Symbol("SKIP_GENERATION"),fp={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Vh]:!1};function xt(e,t,i){return i.min.x=t[e],i.min.y=t[e+1],i.min.z=t[e+2],i.max.x=t[e+3],i.max.y=t[e+4],i.max.z=t[e+5],i}function hh(e){let t=-1,i=-1/0;for(let r=0;r<3;r++){let a=e[r+3]-e[r];a>i&&(i=a,t=r)}return t}function Zu(e,t){t.set(e)}function $u(e,t,i){let r,a;for(let n=0;n<3;n++){let s=n+3;r=e[n],a=t[n],i[n]=r<a?r:a,r=e[s],a=t[s],i[s]=r>a?r:a}}function Eo(e,t,i){for(let r=0;r<3;r++){let a=t[e+2*r],n=t[e+2*r+1],s=a-n,o=a+n;s<i[r]&&(i[r]=s),o>i[r+3]&&(i[r+3]=o)}}function Wn(e){let t=e[3]-e[0],i=e[4]-e[1],r=e[5]-e[2];return 2*(t*i+i*r+r*t)}function St(e,t){return t[e+15]===65535}function Kt(e,t){return t[e+6]}function ni(e,t){return t[e+14]}function kt(e){return e+8}function Qt(e,t){let i=t[e+6];return e+i*8}function Wh(e,t){return t[e+7]}function Cc(e,t,i,r,a){let n=1/0,s=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,A=1/0,m=-1/0,g=-1/0,f=-1/0,p=e.offset||0;for(let x=(t-p)*6,v=(t+i-p)*6;x<v;x+=6){let b=e[x+0],_=e[x+1],S=b-_,M=b+_;S<n&&(n=S),M>l&&(l=M),b<u&&(u=b),b>m&&(m=b);let E=e[x+2],y=e[x+3],R=E-y,T=E+y;R<s&&(s=R),T>c&&(c=T),E<d&&(d=E),E>g&&(g=E);let B=e[x+4],N=e[x+5],P=B-N,Q=B+N;P<o&&(o=P),Q>h&&(h=Q),B<A&&(A=B),B>f&&(f=B)}r[0]=n,r[1]=s,r[2]=o,r[3]=l,r[4]=c,r[5]=h,a[0]=u,a[1]=d,a[2]=A,a[3]=m,a[4]=g,a[5]=f}var xr=32,Dx=(e,t)=>e.candidate-t.candidate,Gr=new Array(xr).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),vo=new Float32Array(6);function Px(e,t,i,r,a,n){let s=-1,o=0;if(n===0)s=hh(t),s!==-1&&(o=(t[s]+t[s+3])/2);else if(n===1)s=hh(e),s!==-1&&(o=Lx(i,r,a,s));else if(n===2){let l=Wn(e),c=1.25*a,h=i.offset||0,u=(r-h)*6,d=(r+a-h)*6;for(let A=0;A<3;A++){let m=t[A],g=(t[A+3]-m)/xr;if(a<xr/4){let f=[...Gr];f.length=a;let p=0;for(let v=u;v<d;v+=6,p++){let b=f[p];b.candidate=i[v+2*A],b.count=0;let{bounds:_,leftCacheBounds:S,rightCacheBounds:M}=b;for(let E=0;E<3;E++)M[E]=1/0,M[E+3]=-1/0,S[E]=1/0,S[E+3]=-1/0,_[E]=1/0,_[E+3]=-1/0;Eo(v,i,_)}f.sort(Dx);let x=a;for(let v=0;v<x;v++){let b=f[v];for(;v+1<x&&f[v+1].candidate===b.candidate;)f.splice(v+1,1),x--}for(let v=u;v<d;v+=6){let b=i[v+2*A];for(let _=0;_<x;_++){let S=f[_];b>=S.candidate?Eo(v,i,S.rightCacheBounds):(Eo(v,i,S.leftCacheBounds),S.count++)}}for(let v=0;v<x;v++){let b=f[v],_=b.count,S=a-b.count,M=b.leftCacheBounds,E=b.rightCacheBounds,y=0;_!==0&&(y=Wn(M)/l);let R=0;S!==0&&(R=Wn(E)/l);let T=1+1.25*(y*_+R*S);T<c&&(s=A,c=T,o=b.candidate)}}else{for(let x=0;x<xr;x++){let v=Gr[x];v.count=0,v.candidate=m+g+x*g;let b=v.bounds;for(let _=0;_<3;_++)b[_]=1/0,b[_+3]=-1/0}for(let x=u;x<d;x+=6){let v=~~((i[x+2*A]-m)/g);v>=xr&&(v=xr-1);let b=Gr[v];b.count++,Eo(x,i,b.bounds)}let f=Gr[xr-1];Zu(f.bounds,f.rightCacheBounds);for(let x=xr-2;x>=0;x--){let v=Gr[x],b=Gr[x+1];$u(v.bounds,b.rightCacheBounds,v.rightCacheBounds)}let p=0;for(let x=0;x<xr-1;x++){let v=Gr[x],b=v.count,_=v.bounds,S=Gr[x+1].rightCacheBounds;b!==0&&(p===0?Zu(_,vo):$u(_,vo,vo)),p+=b;let M=0,E=0;p!==0&&(M=Wn(vo)/l);let y=a-p;y!==0&&(E=Wn(S)/l);let R=1+1.25*(M*p+E*y);R<c&&(s=A,c=R,o=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${n} used.`);return{axis:s,pos:o}}function Lx(e,t,i,r){let a=0,n=e.offset;for(let s=t,o=t+i;s<o;s++)a+=e[(s-n)*6+r*2];return a/i}var Ic=class{constructor(){this.boundingData=new Float32Array(6)}};function Fx(e,t,i,r,a,n){let s=r,o=r+a-1,l=n.pos,c=n.axis*2,h=i.offset||0;for(;;){for(;s<=o&&i[(s-h)*6+c]<l;)s++;for(;s<=o&&i[(o-h)*6+c]>=l;)o--;if(s<o){for(let u=0;u<t;u++){let d=e[s*t+u];e[s*t+u]=e[o*t+u],e[o*t+u]=d}for(let u=0;u<6;u++){let d=s-h,A=o-h,m=i[d*6+u];i[d*6+u]=i[A*6+u],i[A*6+u]=m}s++,o--}else return s}}var gp,Vo,dh,mp,Nx=Math.pow(2,32);function uh(e){return"count"in e?1:1+uh(e.left)+uh(e.right)}function Ux(e,t,i){return gp=new Float32Array(i),Vo=new Uint32Array(i),dh=new Uint16Array(i),mp=new Uint8Array(i),Ah(e,t)}function Ah(e,t){let i=e/4,r=e/2,a="count"in t,n=t.boundingData;for(let s=0;s<6;s++)gp[i+s]=n[s];if(a)return t.buffer?(mp.set(new Uint8Array(t.buffer),e),e+t.buffer.byteLength):(Vo[i+6]=t.offset,dh[r+14]=t.count,dh[r+15]=65535,e+32);{let{left:s,right:o,splitAxis:l}=t,c=e+32,h=Ah(c,s),u=e/32,d=h/32-u;if(d>Nx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Vo[i+6]=d,Vo[i+7]=l,Ah(h,o)}}function kx(e,t,i,r,a,n){let{maxDepth:s,verbose:o,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u}=a,d=e.primitiveBuffer,A=e.primitiveBufferStride,m=new Float32Array(6),g=!1,f=new Ic;return Cc(t,i,r,f.boundingData,m),x(f,i,r,m),f;function p(v){u&&u((v-n.offset)/n.count)}function x(v,b,_,S=null,M=0){!g&&M>=s&&(g=!0,o&&console.warn(`BVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`));let E=_>c;if(_<=l&&!E||M>=s)return p(b+_),v.offset=b,v.count=_,v;let y=Px(v.boundingData,S,t,b,_,h),R=y.axis===-1?-1:Fx(d,A,t,b,_,y);if(y.axis===-1||R===b||R===b+_){if(!E)return p(b+_),v.offset=b,v.count=_,v;y.axis=Math.max(0,hh(v.boundingData)),R=b+Math.max(1,Math.floor(_/2))}v.splitAxis=y.axis;let T=new Ic,B=b,N=R-b;v.left=T,Cc(t,B,N,T.boundingData,m),x(T,B,N,m,M+1);let P=new Ic,Q=R,j=_-N;return v.right=P,Cc(t,Q,j,P.boundingData,m),x(P,Q,j,m,M+1),v}}function Qx(e,t){let i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=e.getRootRanges(t.range),a=r[0],n=r[r.length-1],s={offset:a.offset,count:n.offset+n.count-a.offset},o=new Float32Array(6*s.count);o.offset=s.offset,e.computePrimitiveBounds(s.offset,s.count,o),e._roots=r.map(l=>{let c=kx(e,o,l.offset,l.count,t,s),h=uh(c),u=new i(32*h);return Ux(0,c,u),u})}var qh=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},Ox=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},gt=new Ox,Wr,sn,Va=[],xo=new qh(()=>new dt);function Gx(e,t,i,r,a,n){Wr=xo.getPrimitive(),sn=xo.getPrimitive(),Va.push(Wr,sn),gt.setBuffer(e._roots[t]);let s=ph(0,e.geometry,i,r,a,n);gt.clearBuffer(),xo.releasePrimitive(Wr),xo.releasePrimitive(sn),Va.pop(),Va.pop();let o=Va.length;return o>0&&(sn=Va[o-1],Wr=Va[o-2]),s}function ph(e,t,i,r,a=null,n=0,s=0){let{float32Array:o,uint16Array:l,uint32Array:c}=gt,h=e*2;if(St(h,l)){let u=Kt(e,c),d=ni(h,l);return xt(e,o,Wr),r(u,d,!1,s,n+e/8,Wr)}else{let u=function(T){let{uint16Array:B,uint32Array:N}=gt,P=T*2;for(;!St(P,B);)T=kt(T),P=T*2;return Kt(T,N)},d=function(T){let{uint16Array:B,uint32Array:N}=gt,P=T*2;for(;!St(P,B);)T=Qt(T,N),P=T*2;return Kt(T,N)+ni(P,B)},A=kt(e),m=Qt(e,c),g=A,f=m,p,x,v,b;if(a&&(v=Wr,b=sn,xt(g,o,v),xt(f,o,b),p=a(v),x=a(b),x<p)){g=m,f=A;let T=p;p=x,x=T,v=b}v||(v=Wr,xt(g,o,v));let _=St(g*2,l),S=i(v,_,p,s+1,n+g/8),M;if(S===2){let T=u(g),B=d(g)-T;M=r(T,B,!0,s+1,n+g/8,v)}else M=S&&ph(g,t,i,r,a,n,s+1);if(M)return!0;b=sn,xt(f,o,b);let E=St(f*2,l),y=i(b,E,x,s+1,n+f/8),R;if(y===2){let T=u(f),B=d(f)-T;R=r(T,B,!0,s+1,n+f/8,b)}else R=y&&ph(f,t,i,r,a,n,s+1);return!!R}}var ns=new gt.constructor,ol=new gt.constructor,zr=new qh(()=>new dt),Wa=new dt,qa=new dt,Sc=new dt,Mc=new dt,wc=!1;function Hx(e,t,i,r){if(wc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");wc=!0;let a=e._roots,n=t._roots,s,o=0,l=0,c=new Le().copy(i).invert();for(let h=0,u=a.length;h<u;h++){ns.setBuffer(a[h]),l=0;let d=zr.getPrimitive();xt(0,ns.float32Array,d),d.applyMatrix4(c);for(let A=0,m=n.length;A<m&&(ol.setBuffer(n[A]),s=zi(0,0,i,c,r,o,l,0,0,d),ol.clearBuffer(),l+=n[A].byteLength/32,!s);A++);if(zr.releasePrimitive(d),ns.clearBuffer(),o+=a[h].byteLength/32,s)break}return wc=!1,s}function zi(e,t,i,r,a,n=0,s=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=ol,d=ns):(u=ns,d=ol);let A=u.float32Array,m=u.uint32Array,g=u.uint16Array,f=d.float32Array,p=d.uint32Array,x=d.uint16Array,v=e*2,b=t*2,_=St(v,g),S=St(b,x),M=!1;if(S&&_)h?M=a(Kt(t,p),ni(t*2,x),Kt(e,m),ni(e*2,g),l,s+t/8,o,n+e/8):M=a(Kt(e,m),ni(e*2,g),Kt(t,p),ni(t*2,x),o,n+e/8,l,s+t/8);else if(S){let E=zr.getPrimitive();xt(t,f,E),E.applyMatrix4(i);let y=kt(e),R=Qt(e,m);xt(y,A,Wa),xt(R,A,qa);let T=E.intersectsBox(Wa),B=E.intersectsBox(qa);M=T&&zi(t,y,r,i,a,s,n,l,o+1,E,!h)||B&&zi(t,R,r,i,a,s,n,l,o+1,E,!h),zr.releasePrimitive(E)}else{let E=kt(t),y=Qt(t,p);xt(E,f,Sc),xt(y,f,Mc);let R=c.intersectsBox(Sc),T=c.intersectsBox(Mc);if(R&&T)M=zi(e,E,i,r,a,n,s,o,l+1,c,h)||zi(e,y,i,r,a,n,s,o,l+1,c,h);else if(R)if(_)M=zi(e,E,i,r,a,n,s,o,l+1,c,h);else{let B=zr.getPrimitive();B.copy(Sc).applyMatrix4(i);let N=kt(e),P=Qt(e,m);xt(N,A,Wa),xt(P,A,qa);let Q=B.intersectsBox(Wa),j=B.intersectsBox(qa);M=Q&&zi(E,N,r,i,a,s,n,l,o+1,B,!h)||j&&zi(E,P,r,i,a,s,n,l,o+1,B,!h),zr.releasePrimitive(B)}else if(T)if(_)M=zi(e,y,i,r,a,n,s,o,l+1,c,h);else{let B=zr.getPrimitive();B.copy(Mc).applyMatrix4(i);let N=kt(e),P=Qt(e,m);xt(N,A,Wa),xt(P,A,qa);let Q=B.intersectsBox(Wa),j=B.intersectsBox(qa);M=Q&&zi(y,N,r,i,a,s,n,l,o+1,B,!h)||j&&zi(y,P,r,i,a,s,n,l,o+1,B,!h),zr.releasePrimitive(B)}}return M}var Tc=new class{constructor(){let e=null,t=null,i=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(n,s)=>{if(r)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=s,this.buffer=e=n._roots[s],this.uint16Array=i=new Uint16Array(e),this.uint32Array=t=new Uint32Array(e)},this.reset=()=>{this.root=null,this.buffer=e=null,this.uint16Array=i=null,this.uint32Array=t=null},this.getRangeStart=n=>{let s=n*2;for(;!St(s,i);)n=kt(n),s=n*2;return Kt(n,t)},this.getRangeEnd=n=>{let s=n*2;for(;!St(s,i);)n=Qt(n,t),s=n*2;return Kt(n,t)+ni(s,i)};let a=(n,s,o)=>{let l=s*2,c=St(l,i);if(!n(o,c,s)&&!c){let h=kt(s),u=Qt(s,t);a(n,h,o+1),a(n,u,o+1)}};this.traverseBuffer=n=>{if(r)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");r=!0;try{a(n,0,0)}finally{r=!1}},this.traverse=n=>{this.traverseBuffer((s,o,l)=>{if(o){let c=l*2,h=t[l+6],u=i[c+14];return n(s,o,new Float32Array(e,l*4,6),h,u)}else{let c=Wh(l,t);return n(s,o,new Float32Array(e,l*4,6),c)}})}}},eA=new dt,ja=new Float32Array(6),zx=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...fp,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),Qx(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,i,r){let a=1/0,n=1/0,s=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=e,u=e+t;h<u;h++){this.writePrimitiveBounds(h,ja,0);let[d,A,m,g,f,p]=ja;d<a&&(a=d),g>o&&(o=g),A<n&&(n=A),f>l&&(l=f),m<s&&(s=m),p>c&&(c=p)}return i[r+0]=a,i[r+1]=n,i[r+2]=s,i[r+3]=o,i[r+4]=l,i[r+5]=c,i}computePrimitiveBounds(e,t,i){let r=i.offset||0;for(let a=e,n=e+t;a<n;a++){this.writePrimitiveBounds(a,ja,0);let[s,o,l,c,h,u]=ja,d=(s+c)/2,A=(o+h)/2,m=(l+u)/2,g=(c-s)/2,f=(h-o)/2,p=(u-l)/2,x=(a-r)*6;i[x+0]=d,i[x+1]=g+(Math.abs(d)+g)*zo,i[x+2]=A,i[x+3]=f+(Math.abs(A)+f)*zo,i[x+4]=m,i[x+5]=p+(Math.abs(m)+p)*zo}return i}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let i=0,r=t.length;i<r;i++)t[i]+=e;else{let i=this._roots;for(let r=0;r<i.length;r++){let a=i[r],n=new Uint32Array(a),s=new Uint16Array(a),o=a.byteLength/32;for(let l=0;l<o;l++){let c=8*l,h=2*c;St(h,s)&&(n[c+6]+=e)}}}}traverse(e,t=0){Tc.setBVH(this,t),Tc.traverse(e),Tc.reset()}refit(){let e=this._roots;for(let t=0,i=e.length;t<i;t++){let r=e[t],a=new Uint32Array(r),n=new Uint16Array(r),s=new Float32Array(r),o=r.byteLength/32;for(let l=o-1;l>=0;l--){let c=l*8,h=c*2;if(St(h,n)){let u=Kt(c,a),d=ni(h,n);this.writePrimitiveRangeBounds(u,d,ja,0),s.set(ja,c)}else{let u=kt(c),d=Qt(c,a);for(let A=0;A<3;A++){let m=s[u+A],g=s[u+A+3],f=s[d+A],p=s[d+A+3];s[c+A]=m<f?m:f,s[c+A+3]=g>p?g:p}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(t=>{xt(0,new Float32Array(t),eA),e.union(eA)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:i,intersectsRange:r,intersectsPrimitive:a,scratchPrimitive:n,iterate:s}=e;if(r&&a){let h=r;r=(u,d,A,m,g)=>h(u,d,A,m,g)?!0:s(u,d,this,a,A,m,n)}else r||(a?r=(h,u,d,A)=>s(h,u,this,a,d,A,n):r=(h,u,d)=>d);let o=!1,l=0,c=this._roots;for(let h=0,u=c.length;h<u;h++){let d=c[h];if(o=Gx(this,h,i,r,t,l),o)break;l+=d.byteLength/32}return o}bvhcast(e,t,i){let{intersectsRanges:r}=i;return Hx(this,e,t,r)}};function Vx(){return typeof SharedArrayBuffer<"u"}function jh(e){return e.index?e.index.count:e.attributes.position.count}function bl(e){return jh(e)/3}function Wx(e,t=ArrayBuffer){return e>65535?new Uint32Array(new t(4*e)):new Uint16Array(new t(2*e))}function qx(e,t){if(!e.index){let i=e.attributes.position.count,r=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,a=Wx(i,r);e.setIndex(new Xt(a,1));for(let n=0;n<i;n++)a[n]=n}}function jx(e,t,i){let r=jh(e)/i,a=t||e.drawRange,n=a.start/i,s=(a.start+a.count)/i,o=Math.max(0,n),l=Math.min(r,s)-o;return{offset:Math.floor(o),count:Math.floor(l)}}function Kx(e,t){return e.groups.map(i=>({offset:i.start/t,count:i.count/t}))}function tA(e,t,i){let r=jx(e,t,i),a=Kx(e,i);if(!a.length)return[r];let n=[],s=r.offset,o=r.offset+r.count,l=jh(e)/i,c=[];for(let d of a){let{offset:A,count:m}=d,g=A,f=isFinite(m)?m:l-A,p=A+f;g<o&&p>s&&(c.push({pos:Math.max(s,g),isStart:!0}),c.push({pos:Math.min(o,p),isStart:!1}))}c.sort((d,A)=>d.pos!==A.pos?d.pos-A.pos:d.type==="end"?-1:1);let h=0,u=null;for(let d of c){let A=d.pos;h!==0&&A!==u&&n.push({offset:u,count:A-u}),h+=d.isStart?1:-1,u=A}return n}function Xx(e,t){let i=e[e.length-1],r=i.offset+i.count>2**16,a=e.reduce((c,h)=>c+h.count,0),n=r?4:2,s=t?new SharedArrayBuffer(a*n):new ArrayBuffer(a*n),o=r?new Uint32Array(s):new Uint16Array(s),l=0;for(let c=0;c<e.length;c++){let{offset:h,count:u}=e[c];for(let d=0;d<u;d++)o[l+d]=h+d;l+=u}return o}var Yx=class extends zx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!Vx())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...fp,...t},t[Vh]||this.init(t)}init(e){let{geometry:t,primitiveStride:i}=this;if(e.indirect){let r=tA(t,e.range,i),a=Xx(r,e.useSharedArrayBuffer);this._indirectBuffer=a}else qx(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new dt))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:tA(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}},Br=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,r=-1/0;for(let a=0,n=e.length;a<n;a++){let s=e[a][t];i=s<i?s:i,r=s>r?s:r}this.min=i,this.max=r}setFromPoints(e,t){let i=1/0,r=-1/0;for(let a=0,n=t.length;a<n;a++){let s=t[a],o=e.dot(s);i=o<i?o:i,r=o>r?o:r}this.min=i,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}};Br.prototype.setFromBox=(function(){let e=new D;return function(t,i){let r=i.min,a=i.max,n=1/0,s=-1/0;for(let o=0;o<=1;o++)for(let l=0;l<=1;l++)for(let c=0;c<=1;c++){e.x=r.x*o+a.x*(1-o),e.y=r.y*l+a.y*(1-l),e.z=r.z*c+a.z*(1-c);let h=t.dot(e);n=Math.min(h,n),s=Math.max(h,s)}this.min=n,this.max=s}})();var Jx=(function(){let e=new D,t=new D,i=new D;return function(r,a,n){let s=r.start,o=e,l=a.start,c=t;i.subVectors(s,l),e.subVectors(r.end,r.start),t.subVectors(a.end,a.start);let h=i.dot(c),u=c.dot(o),d=c.dot(c),A=i.dot(o),m=o.dot(o)*d-u*u,g,f;m!==0?g=(h*u-A*d)/m:g=0,f=(h+g*u)/d,n.x=g,n.y=f}})(),Kh=(function(){let e=new Ce,t=new D,i=new D;return function(r,a,n,s){Jx(r,a,e);let o=e.x,l=e.y;if(o>=0&&o<=1&&l>=0&&l<=1){r.at(o,n),a.at(l,s);return}else if(o>=0&&o<=1){l<0?a.at(0,s):a.at(1,s),r.closestPointToPoint(s,!0,n);return}else if(l>=0&&l<=1){o<0?r.at(0,n):r.at(1,n),a.closestPointToPoint(n,!0,s);return}else{let c;o<0?c=r.start:c=r.end;let h;l<0?h=a.start:h=a.end;let u=t,d=i;if(r.closestPointToPoint(h,!0,t),a.closestPointToPoint(c,!0,i),u.distanceToSquared(h)<=d.distanceToSquared(c)){n.copy(u),s.copy(h);return}else{n.copy(c),s.copy(d);return}}}})(),Zx=(function(){let e=new D,t=new D,i=new Ei,r=new Tr;return function(a,n){let{radius:s,center:o}=a,{a:l,b:c,c:h}=n;if(r.start=l,r.end=c,r.closestPointToPoint(o,!0,e).distanceTo(o)<=s||(r.start=l,r.end=h,r.closestPointToPoint(o,!0,e).distanceTo(o)<=s)||(r.start=c,r.end=h,r.closestPointToPoint(o,!0,e).distanceTo(o)<=s))return!0;let u=n.getPlane(i);if(Math.abs(u.distanceToPoint(o))<=s){let d=u.projectPoint(o,t);if(n.containsPoint(d))return!0}return!1}})(),$x=["x","y","z"],yr=1e-15,iA=yr*yr;function Ri(e){return Math.abs(e)<yr}var Ji=class extends Pi{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Br),this.points=[this.a,this.b,this.c],this.plane=new Ei,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Tr,this.needsUpdate=!0}intersectsSphere(e){return Zx(e,this)}update(){let e=this.a,t=this.b,i=this.c,r=this.points,a=this.satAxes,n=this.satBounds,s=a[0],o=n[0];this.getNormal(s),o.setFromPoints(s,r);let l=a[1],c=n[1];l.subVectors(e,t),c.setFromPoints(l,r);let h=a[2],u=n[2];h.subVectors(t,i),u.setFromPoints(h,r);let d=a[3],A=n[3];d.subVectors(i,e),A.setFromPoints(d,r);let m=l.length(),g=h.length(),f=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,m<yr?g<yr||f<yr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(i)):g<yr?f<yr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):f<yr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(s,e),this.needsUpdate=!1}};Ji.prototype.closestPointToSegment=(function(){let e=new D,t=new D,i=new Tr;return function(r,a=null,n=null){let{start:s,end:o}=r,l=this.points,c,h=1/0;for(let u=0;u<3;u++){let d=(u+1)%3;i.start.copy(l[u]),i.end.copy(l[d]),Kh(i,r,e,t),c=e.distanceToSquared(t),c<h&&(h=c,a&&a.copy(e),n&&n.copy(t))}return this.closestPointToPoint(s,e),c=s.distanceToSquared(e),c<h&&(h=c,a&&a.copy(e),n&&n.copy(s)),this.closestPointToPoint(o,e),c=o.distanceToSquared(e),c<h&&(h=c,a&&a.copy(e),n&&n.copy(o)),Math.sqrt(h)}})();Ji.prototype.intersectsTriangle=(function(){let e=new Ji,t=new Br,i=new Br,r=new D,a=new D,n=new D,s=new D,o=new Tr,l=new Tr,c=new D,h=new Ce,u=new Ce;function d(v,b,_,S){let M=r;!v.isDegenerateIntoPoint&&!v.isDegenerateIntoSegment?M.copy(v.plane.normal):M.copy(b.plane.normal);let E=v.satBounds,y=v.satAxes;for(let B=1;B<4;B++){let N=E[B],P=y[B];if(t.setFromPoints(P,b.points),N.isSeparated(t)||(s.copy(M).cross(P),t.setFromPoints(s,v.points),i.setFromPoints(s,b.points),t.isSeparated(i)))return!1}let R=b.satBounds,T=b.satAxes;for(let B=1;B<4;B++){let N=R[B],P=T[B];if(t.setFromPoints(P,v.points),N.isSeparated(t)||(s.crossVectors(M,P),t.setFromPoints(s,v.points),i.setFromPoints(s,b.points),t.isSeparated(i)))return!1}return _&&(S||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}function A(v,b,_,S,M,E,y,R,T,B,N){let P=y/(y-R);B.x=S+(M-S)*P,N.start.subVectors(b,v).multiplyScalar(P).add(v),P=y/(y-T),B.y=S+(E-S)*P,N.end.subVectors(_,v).multiplyScalar(P).add(v)}function m(v,b,_,S,M,E,y,R,T,B,N){if(M>0)A(v.c,v.a,v.b,S,b,_,T,y,R,B,N);else if(E>0)A(v.b,v.a,v.c,_,b,S,R,y,T,B,N);else if(R*T>0||y!=0)A(v.a,v.b,v.c,b,_,S,y,R,T,B,N);else if(R!=0)A(v.b,v.a,v.c,_,b,S,R,y,T,B,N);else if(T!=0)A(v.c,v.a,v.b,S,b,_,T,y,R,B,N);else return!0;return!1}function g(v,b,_,S){let M=b.degenerateSegment,E=v.plane.distanceToPoint(M.start),y=v.plane.distanceToPoint(M.end);return Ri(E)?Ri(y)?d(v,b,_,S):(_&&(_.start.copy(M.start),_.end.copy(M.start)),v.containsPoint(M.start)):Ri(y)?(_&&(_.start.copy(M.end),_.end.copy(M.end)),v.containsPoint(M.end)):v.plane.intersectLine(M,r)!=null?(_&&(_.start.copy(r),_.end.copy(r)),v.containsPoint(r)):!1}function f(v,b,_){let S=b.a;return Ri(v.plane.distanceToPoint(S))&&v.containsPoint(S)?(_&&(_.start.copy(S),_.end.copy(S)),!0):!1}function p(v,b,_){let S=v.degenerateSegment,M=b.a;return S.closestPointToPoint(M,!0,r),M.distanceToSquared(r)<iA?(_&&(_.start.copy(M),_.end.copy(M)),!0):!1}function x(v,b,_,S){if(v.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){let M=v.degenerateSegment,E=b.degenerateSegment,y=a,R=n;M.delta(y),E.delta(R);let T=r.subVectors(E.start,M.start),B=y.x*R.y-y.y*R.x;if(Ri(B))return!1;let N=(T.x*R.y-T.y*R.x)/B,P=-(y.x*T.y-y.y*T.x)/B;if(N<0||N>1||P<0||P>1)return!1;let Q=M.start.z+y.z*N,j=E.start.z+R.z*P;return Ri(Q-j)?(_&&(_.start.copy(M.start).addScaledVector(y,N),_.end.copy(M.start).addScaledVector(y,N)),!0):!1}else return b.isDegenerateIntoPoint?p(v,b,_):g(b,v,_,S);else{if(v.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(v.a)<iA?(_&&(_.start.copy(v.a),_.end.copy(v.a)),!0):!1:b.isDegenerateIntoSegment?p(b,v,_):f(b,v,_);if(b.isDegenerateIntoPoint)return f(v,b,_);if(b.isDegenerateIntoSegment)return g(v,b,_,S)}}return function(v,b=null,_=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(e.copy(v),e.update(),v=e);let S=x(this,v,b,_);if(S!==void 0)return S;let M=this.plane,E=v.plane,y=E.distanceToPoint(this.a),R=E.distanceToPoint(this.b),T=E.distanceToPoint(this.c);Ri(y)&&(y=0),Ri(R)&&(R=0),Ri(T)&&(T=0);let B=y*R,N=y*T;if(B>0&&N>0)return!1;let P=M.distanceToPoint(v.a),Q=M.distanceToPoint(v.b),j=M.distanceToPoint(v.c);Ri(P)&&(P=0),Ri(Q)&&(Q=0),Ri(j)&&(j=0);let z=P*Q,ne=P*j;if(z>0&&ne>0)return!1;a.copy(M.normal),n.copy(E.normal);let K=a.cross(n),J=0,Y=Math.abs(K.x),_e=Math.abs(K.y);_e>Y&&(Y=_e,J=1),Math.abs(K.z)>Y&&(J=2);let de=$x[J],Ke=this.a[de],Qe=this.b[de],X=this.c[de],re=v.a[de],oe=v.b[de],we=v.c[de];if(m(this,Ke,Qe,X,B,N,y,R,T,h,o))return d(this,v,b,_);if(m(v,re,oe,we,z,ne,P,Q,j,u,l))return d(this,v,b,_);if(h.y<h.x){let Be=h.y;h.y=h.x,h.x=Be,c.copy(o.start),o.start.copy(o.end),o.end.copy(c)}if(u.y<u.x){let Be=u.y;u.y=u.x,u.x=Be,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(b&&(u.x>h.x?b.start.copy(l.start):b.start.copy(o.start),u.y<h.y?b.end.copy(l.end):b.end.copy(o.end)),!0)}})();Ji.prototype.distanceToPoint=(function(){let e=new D;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})();Ji.prototype.distanceToTriangle=(function(){let e=new D,t=new D,i=["a","b","c"],r=new Tr,a=new Tr;return function(n,s=null,o=null){let l=s||o?r:null;if(this.intersectsTriangle(n,l,!0))return(s||o)&&(s&&l.getCenter(s),o&&l.getCenter(o)),0;let c=1/0;for(let h=0;h<3;h++){let u,d=i[h],A=n[d];this.closestPointToPoint(A,e),u=A.distanceToSquared(e),u<c&&(c=u,s&&s.copy(e),o&&o.copy(A));let m=this[d];n.closestPointToPoint(m,e),u=m.distanceToSquared(e),u<c&&(c=u,s&&s.copy(m),o&&o.copy(e))}for(let h=0;h<3;h++){let u=i[h],d=i[(h+1)%3];r.set(this[u],this[d]);for(let A=0;A<3;A++){let m=i[A],g=i[(A+1)%3];a.set(n[m],n[g]),Kh(r,a,e,t);let f=e.distanceToSquared(t);f<c&&(c=f,s&&s.copy(e),o&&o.copy(t))}}return Math.sqrt(c)}})();var pi=class{constructor(e,t,i){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Le,this.invMatrix=new Le,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Br),this.alignedSatBounds=new Array(3).fill().map(()=>new Br),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};pi.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,i=this.max,r=this.points;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){let u=1*l|2*c|4*h,d=r[u];d.x=l?i.x:t.x,d.y=c?i.y:t.y,d.z=h?i.z:t.z,d.applyMatrix4(e)}let a=this.satBounds,n=this.satAxes,s=r[0];for(let l=0;l<3;l++){let c=n[l],h=a[l],u=1<<l,d=r[u];c.subVectors(s,d),h.setFromPoints(c,r)}let o=this.alignedSatBounds;o[0].setFromPointsField(r,"x"),o[1].setFromPointsField(r,"y"),o[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();pi.prototype.intersectsBox=(function(){let e=new Br;return function(t){this.needsUpdate&&this.update();let i=t.min,r=t.max,a=this.satBounds,n=this.satAxes,s=this.alignedSatBounds;if(e.min=i.x,e.max=r.x,s[0].isSeparated(e)||(e.min=i.y,e.max=r.y,s[1].isSeparated(e))||(e.min=i.z,e.max=r.z,s[2].isSeparated(e)))return!1;for(let o=0;o<3;o++){let l=n[o],c=a[o];if(e.setFromBox(l,t),c.isSeparated(e))return!1}return!0}})();pi.prototype.intersectsTriangle=(function(){let e=new Ji,t=new Array(3),i=new Br,r=new Br,a=new D;return function(n){this.needsUpdate&&this.update(),n.isExtendedTriangle?n.needsUpdate&&n.update():(e.copy(n),e.update(),n=e);let s=this.satBounds,o=this.satAxes;t[0]=n.a,t[1]=n.b,t[2]=n.c;for(let u=0;u<3;u++){let d=s[u],A=o[u];if(i.setFromPoints(A,t),d.isSeparated(i))return!1}let l=n.satBounds,c=n.satAxes,h=this.points;for(let u=0;u<3;u++){let d=l[u],A=c[u];if(i.setFromPoints(A,h),d.isSeparated(i))return!1}for(let u=0;u<3;u++){let d=o[u];for(let A=0;A<4;A++){let m=c[A];if(a.crossVectors(d,m),i.setFromPoints(a,t),r.setFromPoints(a,h),i.isSeparated(r))return!1}}return!0}})();pi.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();pi.prototype.distanceToPoint=(function(){let e=new D;return function(t){return this.closestPointToPoint(t,e),t.distanceTo(e)}})();pi.prototype.distanceToBox=(function(){let e=["x","y","z"],t=new Array(12).fill().map(()=>new Tr),i=new Array(12).fill().map(()=>new Tr),r=new D,a=new D;return function(n,s=0,o=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(n))return(o||l)&&(n.getCenter(a),this.closestPointToPoint(a,r),n.closestPointToPoint(r,a),o&&o.copy(r),l&&l.copy(a)),0;let c=s*s,h=n.min,u=n.max,d=this.points,A=1/0;for(let g=0;g<8;g++){let f=d[g];a.copy(f).clamp(h,u);let p=f.distanceToSquared(a);if(p<A&&(A=p,o&&o.copy(f),l&&l.copy(a),p<c))return Math.sqrt(p)}let m=0;for(let g=0;g<3;g++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){let x=(g+1)%3,v=(g+2)%3,b=f<<x|p<<v,_=1<<g|f<<x|p<<v,S=d[b],M=d[_];t[m].set(S,M);let E=e[g],y=e[x],R=e[v],T=i[m],B=T.start,N=T.end;B[E]=h[E],B[y]=f?h[y]:u[y],B[R]=p?h[R]:u[y],N[E]=u[E],N[y]=f?h[y]:u[y],N[R]=p?h[R]:u[y],m++}for(let g=0;g<=1;g++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){a.x=g?u.x:h.x,a.y=f?u.y:h.y,a.z=p?u.z:h.z,this.closestPointToPoint(a,r);let x=a.distanceToSquared(r);if(x<A&&(A=x,o&&o.copy(r),l&&l.copy(a),x<c))return Math.sqrt(x)}for(let g=0;g<12;g++){let f=t[g];for(let p=0;p<12;p++){let x=i[p];Kh(f,x,r,a);let v=r.distanceToSquared(a);if(v<A&&(A=v,o&&o.copy(r),l&&l.copy(a),v<c))return Math.sqrt(v)}}return Math.sqrt(A)}})();var ey=class extends qh{constructor(){super(()=>new Ji)}},Ni=new ey,qn=new D,Bc=new D;function ty(e,t,i={},r=0,a=1/0){let n=r*r,s=a*a,o=1/0,l=null;if(e.shapecast({boundsTraverseOrder:h=>(qn.copy(t).clamp(h.min,h.max),qn.distanceToSquared(t)),intersectsBounds:(h,u,d)=>d<o&&d<s,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,qn);let d=t.distanceToSquared(qn);return d<o&&(Bc.copy(qn),o=d,l=u),d<n}}),o===1/0)return null;let c=Math.sqrt(o);return i.point?i.point.copy(Bc):i.point=Bc.clone(),i.distance=c,i.faceIndex=l,i}var yo=parseInt("186")>=169,iy=parseInt("186")<=161,da=new D,ua=new D,Aa=new D,Co=new Ce,Io=new Ce,So=new Ce,rA=new D,aA=new D,nA=new D,jn=new D;function ry(e,t,i,r,a,n,s,o){let l;if(n===di?l=e.intersectTriangle(r,i,t,!0,a):l=e.intersectTriangle(t,i,r,n!==Nt,a),l===null)return null;let c=e.origin.distanceTo(a);return c<s||c>o?null:{distance:c,point:a.clone()}}function sA(e,t,i,r,a,n,s,o,l,c,h){da.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),Aa.fromBufferAttribute(t,o);let u=ry(e,da,ua,Aa,jn,l,c,h);if(u){if(r){Co.fromBufferAttribute(r,n),Io.fromBufferAttribute(r,s),So.fromBufferAttribute(r,o),u.uv=new Ce;let A=Pi.getInterpolation(jn,da,ua,Aa,Co,Io,So,u.uv);yo||(u.uv=A)}if(a){Co.fromBufferAttribute(a,n),Io.fromBufferAttribute(a,s),So.fromBufferAttribute(a,o),u.uv1=new Ce;let A=Pi.getInterpolation(jn,da,ua,Aa,Co,Io,So,u.uv1);yo||(u.uv1=A),iy&&(u.uv2=u.uv1)}if(i){rA.fromBufferAttribute(i,n),aA.fromBufferAttribute(i,s),nA.fromBufferAttribute(i,o),u.normal=new D;let A=Pi.getInterpolation(jn,da,ua,Aa,rA,aA,nA,u.normal);u.normal.dot(e.direction)>0&&u.normal.multiplyScalar(-1),yo||(u.normal=A)}let d={a:n,b:s,c:o,normal:new D,materialIndex:0};if(Pi.getNormal(da,ua,Aa,d.normal),u.face=d,u.faceIndex=n,yo){let A=new D;Pi.getBarycoord(jn,da,ua,Aa,A),u.barycoord=A}}return u}function oA(e){return e&&e.isMaterial?e.side:e}function _l(e,t,i,r,a,n,s){let o=r*3,l=o+0,c=o+1,h=o+2,{index:u,groups:d}=e;e.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));let{position:A,normal:m,uv:g,uv1:f}=e.attributes;if(Array.isArray(t)){let p=r*3;for(let x=0,v=d.length;x<v;x++){let{start:b,count:_,materialIndex:S}=d[x];if(p>=b&&p<b+_){let M=oA(t[S]),E=sA(i,A,m,g,f,l,c,h,M,n,s);if(E)if(E.faceIndex=r,E.face.materialIndex=S,a)a.push(E);else return E}}}else{let p=oA(t),x=sA(i,A,m,g,f,l,c,h,p,n,s);if(x)if(x.faceIndex=r,x.face.materialIndex=0,a)a.push(x);else return x}return null}function Rt(e,t,i,r){let a=e.a,n=e.b,s=e.c,o=t,l=t+1,c=t+2;i&&(o=i.getX(o),l=i.getX(l),c=i.getX(c)),a.x=r.getX(o),a.y=r.getY(o),a.z=r.getZ(o),n.x=r.getX(l),n.y=r.getY(l),n.z=r.getZ(l),s.x=r.getX(c),s.y=r.getY(c),s.z=r.getZ(c)}function ay(e,t,i,r,a,n,s,o){let{geometry:l,_indirectBuffer:c}=e;for(let h=r,u=r+a;h<u;h++)_l(l,t,i,h,n,s,o)}function ny(e,t,i,r,a,n,s){let{geometry:o,_indirectBuffer:l}=e,c=1/0,h=null;for(let u=r,d=r+a;u<d;u++){let A;A=_l(o,t,i,u,null,n,s),A&&A.distance<c&&(h=A,c=A.distance)}return h}function sy(e,t,i,r,a,n,s){let{geometry:o}=i,{index:l}=o,c=o.attributes.position;for(let h=e,u=t+e;h<u;h++){let d;if(d=h,Rt(s,d*3,l,c),s.needsUpdate=!0,r(s,d,a,n))return!0}return!1}function oy(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let i=e.geometry,r=i.index?i.index.array:null,a=i.attributes.position,n,s,o,l,c=0,h=e._roots;for(let d=0,A=h.length;d<A;d++)n=h[d],s=new Uint32Array(n),o=new Uint16Array(n),l=new Float32Array(n),u(0,c),c+=n.byteLength;function u(d,A,m=!1){let g=d*2;if(St(g,o)){let f=Kt(d,s),p=ni(g,o),x=1/0,v=1/0,b=1/0,_=-1/0,S=-1/0,M=-1/0;for(let E=3*f,y=3*(f+p);E<y;E++){let R=r[E],T=a.getX(R),B=a.getY(R),N=a.getZ(R);T<x&&(x=T),T>_&&(_=T),B<v&&(v=B),B>S&&(S=B),N<b&&(b=N),N>M&&(M=N)}return l[d+0]!==x||l[d+1]!==v||l[d+2]!==b||l[d+3]!==_||l[d+4]!==S||l[d+5]!==M?(l[d+0]=x,l[d+1]=v,l[d+2]=b,l[d+3]=_,l[d+4]=S,l[d+5]=M,!0):!1}else{let f=kt(d),p=Qt(d,s),x=m,v=!1,b=!1;if(t){if(!x){let R=f/8+A/32,T=p/8+A/32;v=t.has(R),b=t.has(T),x=!v&&!b}}else v=!0,b=!0;let _=x||v,S=x||b,M=!1;_&&(M=u(f,A,x));let E=!1;S&&(E=u(p,A,x));let y=M||E;if(y)for(let R=0;R<3;R++){let T=f+R,B=p+R,N=l[T],P=l[T+3],Q=l[B],j=l[B+3];l[d+R]=N<Q?N:Q,l[d+R+3]=P>j?P:j}return y}}}function jr(e,t,i,r,a){let n,s,o,l,c,h,u=1/i.direction.x,d=1/i.direction.y,A=1/i.direction.z,m=i.origin.x,g=i.origin.y,f=i.origin.z,p=t[e],x=t[e+3],v=t[e+1],b=t[e+3+1],_=t[e+2],S=t[e+3+2];return u>=0?(n=(p-m)*u,s=(x-m)*u):(n=(x-m)*u,s=(p-m)*u),d>=0?(o=(v-g)*d,l=(b-g)*d):(o=(b-g)*d,l=(v-g)*d),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),A>=0?(c=(_-f)*A,h=(S-f)*A):(c=(S-f)*A,h=(_-f)*A),n>h||c>s)?!1:((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),n<=a&&s>=r)}function ly(e,t,i,r,a,n,s,o){let{geometry:l,_indirectBuffer:c}=e;for(let h=r,u=r+a;h<u;h++){let d=c?c[h]:h;_l(l,t,i,d,n,s,o)}}function cy(e,t,i,r,a,n,s){let{geometry:o,_indirectBuffer:l}=e,c=1/0,h=null;for(let u=r,d=r+a;u<d;u++){let A;A=_l(o,t,i,l?l[u]:u,null,n,s),A&&A.distance<c&&(h=A,c=A.distance)}return h}function hy(e,t,i,r,a,n,s){let{geometry:o}=i,{index:l}=o,c=o.attributes.position;for(let h=e,u=t+e;h<u;h++){let d;if(d=i.resolveTriangleIndex(h),Rt(s,d*3,l,c),s.needsUpdate=!0,r(s,d,a,n))return!0}return!1}function dy(e,t,i,r,a,n,s){gt.setBuffer(e._roots[t]),fh(0,e,i,r,a,n,s),gt.clearBuffer()}function fh(e,t,i,r,a,n,s){let{float32Array:o,uint16Array:l,uint32Array:c}=gt,h=e*2;if(St(h,l)){let u=Kt(e,c),d=ni(h,l);ay(t,i,r,u,d,a,n,s)}else{let u=kt(e);jr(u,o,r,n,s)&&fh(u,t,i,r,a,n,s);let d=Qt(e,c);jr(d,o,r,n,s)&&fh(d,t,i,r,a,n,s)}}var uy=["x","y","z"];function Ay(e,t,i,r,a,n){gt.setBuffer(e._roots[t]);let s=gh(0,e,i,r,a,n);return gt.clearBuffer(),s}function gh(e,t,i,r,a,n){let{float32Array:s,uint16Array:o,uint32Array:l}=gt,c=e*2;if(St(c,o)){let h=Kt(e,l),u=ni(c,o);return ny(t,i,r,h,u,a,n)}else{let h=Wh(e,l),u=uy[h],d=r.direction[u]>=0,A,m;d?(A=kt(e),m=Qt(e,l)):(A=Qt(e,l),m=kt(e));let g=jr(A,s,r,a,n)?gh(A,t,i,r,a,n):null;if(g){let p=g.point[u];if(d?p<=s[m+h]:p>=s[m+h+3])return g}let f=jr(m,s,r,a,n)?gh(m,t,i,r,a,n):null;return g&&f?g.distance<=f.distance?g:f:g||f||null}}var Mo=new dt,Ka=new Ji,Xa=new Ji,Kn=new Le,lA=new pi,wo=new pi;function py(e,t,i,r){gt.setBuffer(e._roots[t]);let a=mh(0,e,i,r);return gt.clearBuffer(),a}function mh(e,t,i,r,a=null){let{float32Array:n,uint16Array:s,uint32Array:o}=gt,l=e*2;if(a===null&&(i.boundingBox||i.computeBoundingBox(),lA.set(i.boundingBox.min,i.boundingBox.max,r),a=lA),St(l,s)){let c=t.geometry,h=c.index,u=c.attributes.position,d=i.index,A=i.attributes.position,m=Kt(e,o),g=ni(l,s);if(Kn.copy(r).invert(),i.boundsTree)return xt(e,n,wo),wo.matrix.copy(Kn),wo.needsUpdate=!0,i.boundsTree.shapecast({intersectsBounds:f=>wo.intersectsBox(f),intersectsTriangle:f=>{f.a.applyMatrix4(r),f.b.applyMatrix4(r),f.c.applyMatrix4(r),f.needsUpdate=!0;for(let p=m*3,x=(g+m)*3;p<x;p+=3)if(Rt(Xa,p,h,u),Xa.needsUpdate=!0,f.intersectsTriangle(Xa))return!0;return!1}});{let f=bl(i);for(let p=m*3,x=(g+m)*3;p<x;p+=3){Rt(Ka,p,h,u),Ka.a.applyMatrix4(Kn),Ka.b.applyMatrix4(Kn),Ka.c.applyMatrix4(Kn),Ka.needsUpdate=!0;for(let v=0,b=f*3;v<b;v+=3)if(Rt(Xa,v,d,A),Xa.needsUpdate=!0,Ka.intersectsTriangle(Xa))return!0}}}else{let c=kt(e),h=Qt(e,o);return xt(c,n,Mo),!!(a.intersectsBox(Mo)&&mh(c,t,i,r,a)||(xt(h,n,Mo),a.intersectsBox(Mo)&&mh(h,t,i,r,a)))}}var To=new Le,Rc=new pi,Xn=new pi,fy=new D,gy=new D,my=new D,by=new D;function _y(e,t,i,r={},a={},n=0,s=1/0){t.boundingBox||t.computeBoundingBox(),Rc.set(t.boundingBox.min,t.boundingBox.max,i),Rc.needsUpdate=!0;let o=e.geometry,l=o.attributes.position,c=o.index,h=t.attributes.position,u=t.index,d=Ni.getPrimitive(),A=Ni.getPrimitive(),m=fy,g=gy,f=null,p=null;a&&(f=my,p=by);let x=1/0,v=null,b=null;return To.copy(i).invert(),Xn.matrix.copy(To),e.shapecast({boundsTraverseOrder:_=>Rc.distanceToBox(_),intersectsBounds:(_,S,M)=>M<x&&M<s?(S&&(Xn.min.copy(_.min),Xn.max.copy(_.max),Xn.needsUpdate=!0),!0):!1,intersectsRange:(_,S)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:M=>Xn.distanceToBox(M),intersectsBounds:(M,E,y)=>y<x&&y<s,intersectsRange:(M,E)=>{for(let y=M,R=M+E;y<R;y++){Rt(A,3*y,u,h),A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let T=_,B=_+S;T<B;T++){Rt(d,3*T,c,l),d.needsUpdate=!0;let N=d.distanceToTriangle(A,m,f);if(N<x&&(g.copy(m),p&&p.copy(f),x=N,v=T,b=y),N<n)return!0}}}});{let M=bl(t);for(let E=0,y=M;E<y;E++){Rt(A,3*E,u,h),A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let R=_,T=_+S;R<T;R++){Rt(d,3*R,c,l),d.needsUpdate=!0;let B=d.distanceToTriangle(A,m,f);if(B<x&&(g.copy(m),p&&p.copy(f),x=B,v=R,b=E),B<n)return!0}}}}}),Ni.releasePrimitive(d),Ni.releasePrimitive(A),x===1/0?null:(r.point?r.point.copy(g):r.point=g.clone(),r.distance=x,r.faceIndex=v,a&&(a.point?a.point.copy(p):a.point=p.clone(),a.point.applyMatrix4(To),g.applyMatrix4(To),a.distance=g.sub(a.point).length(),a.faceIndex=b),r)}function Ey(e,t=null){t&&Array.isArray(t)&&(t=new Set(t));let i=e.geometry,r=i.index?i.index.array:null,a=i.attributes.position,n,s,o,l,c=0,h=e._roots;for(let d=0,A=h.length;d<A;d++)n=h[d],s=new Uint32Array(n),o=new Uint16Array(n),l=new Float32Array(n),u(0,c),c+=n.byteLength;function u(d,A,m=!1){let g=d*2;if(St(g,o)){let f=Kt(d,s),p=ni(g,o),x=1/0,v=1/0,b=1/0,_=-1/0,S=-1/0,M=-1/0;for(let E=f,y=f+p;E<y;E++){let R=3*e.resolveTriangleIndex(E);for(let T=0;T<3;T++){let B=R+T;B=r?r[B]:B;let N=a.getX(B),P=a.getY(B),Q=a.getZ(B);N<x&&(x=N),N>_&&(_=N),P<v&&(v=P),P>S&&(S=P),Q<b&&(b=Q),Q>M&&(M=Q)}}return l[d+0]!==x||l[d+1]!==v||l[d+2]!==b||l[d+3]!==_||l[d+4]!==S||l[d+5]!==M?(l[d+0]=x,l[d+1]=v,l[d+2]=b,l[d+3]=_,l[d+4]=S,l[d+5]=M,!0):!1}else{let f=kt(d),p=Qt(d,s),x=m,v=!1,b=!1;if(t){if(!x){let R=f/8+A/32,T=p/8+A/32;v=t.has(R),b=t.has(T),x=!v&&!b}}else v=!0,b=!0;let _=x||v,S=x||b,M=!1;_&&(M=u(f,A,x));let E=!1;S&&(E=u(p,A,x));let y=M||E;if(y)for(let R=0;R<3;R++){let T=f+R,B=p+R,N=l[T],P=l[T+3],Q=l[B],j=l[B+3];l[d+R]=N<Q?N:Q,l[d+R+3]=P>j?P:j}return y}}}function vy(e,t,i,r,a,n,s){gt.setBuffer(e._roots[t]),bh(0,e,i,r,a,n,s),gt.clearBuffer()}function bh(e,t,i,r,a,n,s){let{float32Array:o,uint16Array:l,uint32Array:c}=gt,h=e*2;if(St(h,l)){let u=Kt(e,c),d=ni(h,l);ly(t,i,r,u,d,a,n,s)}else{let u=kt(e);jr(u,o,r,n,s)&&bh(u,t,i,r,a,n,s);let d=Qt(e,c);jr(d,o,r,n,s)&&bh(d,t,i,r,a,n,s)}}var xy=["x","y","z"];function yy(e,t,i,r,a,n){gt.setBuffer(e._roots[t]);let s=_h(0,e,i,r,a,n);return gt.clearBuffer(),s}function _h(e,t,i,r,a,n){let{float32Array:s,uint16Array:o,uint32Array:l}=gt,c=e*2;if(St(c,o)){let h=Kt(e,l),u=ni(c,o);return cy(t,i,r,h,u,a,n)}else{let h=Wh(e,l),u=xy[h],d=r.direction[u]>=0,A,m;d?(A=kt(e),m=Qt(e,l)):(A=Qt(e,l),m=kt(e));let g=jr(A,s,r,a,n)?_h(A,t,i,r,a,n):null;if(g){let p=g.point[u];if(d?p<=s[m+h]:p>=s[m+h+3])return g}let f=jr(m,s,r,a,n)?_h(m,t,i,r,a,n):null;return g&&f?g.distance<=f.distance?g:f:g||f||null}}var Bo=new dt,Ya=new Ji,Ja=new Ji,Yn=new Le,cA=new pi,Ro=new pi;function Cy(e,t,i,r){gt.setBuffer(e._roots[t]);let a=Eh(0,e,i,r);return gt.clearBuffer(),a}function Eh(e,t,i,r,a=null){let{float32Array:n,uint16Array:s,uint32Array:o}=gt,l=e*2;if(a===null&&(i.boundingBox||i.computeBoundingBox(),cA.set(i.boundingBox.min,i.boundingBox.max,r),a=cA),St(l,s)){let c=t.geometry,h=c.index,u=c.attributes.position,d=i.index,A=i.attributes.position,m=Kt(e,o),g=ni(l,s);if(Yn.copy(r).invert(),i.boundsTree)return xt(e,n,Ro),Ro.matrix.copy(Yn),Ro.needsUpdate=!0,i.boundsTree.shapecast({intersectsBounds:f=>Ro.intersectsBox(f),intersectsTriangle:f=>{f.a.applyMatrix4(r),f.b.applyMatrix4(r),f.c.applyMatrix4(r),f.needsUpdate=!0;for(let p=m,x=g+m;p<x;p++)if(Rt(Ja,3*t.resolveTriangleIndex(p),h,u),Ja.needsUpdate=!0,f.intersectsTriangle(Ja))return!0;return!1}});{let f=bl(i);for(let p=m,x=g+m;p<x;p++){let v=t.resolveTriangleIndex(p);Rt(Ya,3*v,h,u),Ya.a.applyMatrix4(Yn),Ya.b.applyMatrix4(Yn),Ya.c.applyMatrix4(Yn),Ya.needsUpdate=!0;for(let b=0,_=f*3;b<_;b+=3)if(Rt(Ja,b,d,A),Ja.needsUpdate=!0,Ya.intersectsTriangle(Ja))return!0}}}else{let c=kt(e),h=Qt(e,o);return xt(c,n,Bo),!!(a.intersectsBox(Bo)&&Eh(c,t,i,r,a)||(xt(h,n,Bo),a.intersectsBox(Bo)&&Eh(h,t,i,r,a)))}}var Do=new Le,Dc=new pi,Jn=new pi,Iy=new D,Sy=new D,My=new D,wy=new D;function Ty(e,t,i,r={},a={},n=0,s=1/0){t.boundingBox||t.computeBoundingBox(),Dc.set(t.boundingBox.min,t.boundingBox.max,i),Dc.needsUpdate=!0;let o=e.geometry,l=o.attributes.position,c=o.index,h=t.attributes.position,u=t.index,d=Ni.getPrimitive(),A=Ni.getPrimitive(),m=Iy,g=Sy,f=null,p=null;a&&(f=My,p=wy);let x=1/0,v=null,b=null;return Do.copy(i).invert(),Jn.matrix.copy(Do),e.shapecast({boundsTraverseOrder:_=>Dc.distanceToBox(_),intersectsBounds:(_,S,M)=>M<x&&M<s?(S&&(Jn.min.copy(_.min),Jn.max.copy(_.max),Jn.needsUpdate=!0),!0):!1,intersectsRange:(_,S)=>{if(t.boundsTree){let M=t.boundsTree;return M.shapecast({boundsTraverseOrder:E=>Jn.distanceToBox(E),intersectsBounds:(E,y,R)=>R<x&&R<s,intersectsRange:(E,y)=>{for(let R=E,T=E+y;R<T;R++){let B=M.resolveTriangleIndex(R);Rt(A,3*B,u,h),A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let N=_,P=_+S;N<P;N++){let Q=e.resolveTriangleIndex(N);Rt(d,3*Q,c,l),d.needsUpdate=!0;let j=d.distanceToTriangle(A,m,f);if(j<x&&(g.copy(m),p&&p.copy(f),x=j,v=N,b=R),j<n)return!0}}}})}else{let M=bl(t);for(let E=0,y=M;E<y;E++){Rt(A,3*E,u,h),A.a.applyMatrix4(i),A.b.applyMatrix4(i),A.c.applyMatrix4(i),A.needsUpdate=!0;for(let R=_,T=_+S;R<T;R++){let B=e.resolveTriangleIndex(R);Rt(d,3*B,c,l),d.needsUpdate=!0;let N=d.distanceToTriangle(A,m,f);if(N<x&&(g.copy(m),p&&p.copy(f),x=N,v=R,b=E),N<n)return!0}}}}}),Ni.releasePrimitive(d),Ni.releasePrimitive(A),x===1/0?null:(r.point?r.point.copy(g):r.point=g.clone(),r.distance=x,r.faceIndex=v,a&&(a.point?a.point.copy(p):a.point=p.clone(),a.point.applyMatrix4(Do),g.applyMatrix4(Do),a.distance=g.sub(a.point).length(),a.faceIndex=b),r)}function hA(e,t,i){return e===null?null:(e.point.applyMatrix4(t.matrixWorld),e.distance=e.point.distanceTo(i.ray.origin),e.object=t,e)}var Po=new pi,Lo=new va,dA=new D,uA=new Le,AA=new D,Pc=["getX","getY","getZ"],By=class vh extends Yx{static serialize(t,i={}){i={cloneBuffers:!0,...i};let r=t.geometry,a=t._roots,n=t._indirectBuffer,s=r.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return i.cloneBuffers?(o.roots=a.map(l=>l.slice()),o.index=s?s.array.slice():null,o.indirectBuffer=n?n.slice():null):(o.roots=a,o.index=s?s.array:null,o.indirectBuffer=n),o}static deserialize(t,i,r={}){r={setIndex:!0,indirect:!!t.indirectBuffer,...r};let{index:a,roots:n,indirectBuffer:s}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(n));let o=new vh(i,{...r,[Vh]:!0});if(o._roots=n,o._indirectBuffer=s||null,r.setIndex){let c=i.getIndex();if(c===null){let h=new Xt(t.index,1,!1);i.setIndex(h)}else c.array!==a&&(c.array.set(a),c.needsUpdate=!0)}return o;function l(c){for(let h=0;h<c.length;h++){let u=c[h],d=new Uint32Array(u),A=new Uint16Array(u);for(let m=0,g=u.byteLength/32;m<g;m++){let f=8*m,p=2*f;St(p,A)||(d[f+6]=d[f+6]/8-m)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,i={}){i.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),i={...i,targetLeafSize:i.maxLeafTris}),super(t,i)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,i,r){let a=this.geometry,n=this._indirectBuffer,s=a.attributes.position,o=a.index?a.index.array:null,l=(n?n[t]:t)*3,c=l+0,h=l+1,u=l+2;o&&(c=o[c],h=o[h],u=o[u]);for(let d=0;d<3;d++){let A=s[Pc[d]](c),m=s[Pc[d]](h),g=s[Pc[d]](u),f=A;m<f&&(f=m),g<f&&(f=g);let p=A;m>p&&(p=m),g>p&&(p=g),i[r+d]=f,i[r+d+3]=p}return i}computePrimitiveBounds(t,i,r){let a=this.geometry,n=this._indirectBuffer,s=a.attributes.position,o=a.index?a.index.array:null,l=s.normalized;if(t<0||i+t-r.offset>r.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=s.array,h=s.offset||0,u=3;s.isInterleavedBufferAttribute&&(u=s.data.stride);let d=["getX","getY","getZ"],A=r.offset;for(let m=t,g=t+i;m<g;m++){let f=(n?n[m]:m)*3,p=(m-A)*6,x=f+0,v=f+1,b=f+2;o&&(x=o[x],v=o[v],b=o[b]),l||(x=x*u+h,v=v*u+h,b=b*u+h);for(let _=0;_<3;_++){let S,M,E;l?(S=s[d[_]](x),M=s[d[_]](v),E=s[d[_]](b)):(S=c[x+_],M=c[v+_],E=c[b+_]);let y=S;M<y&&(y=M),E<y&&(y=E);let R=S;M>R&&(R=M),E>R&&(R=E);let T=(R-y)/2,B=_*2;r[p+B+0]=y+T,r[p+B+1]=T+(Math.abs(y)+T)*zo}}return r}raycastObject3D(t,i,r=[]){let{material:a}=t;if(a===void 0)return;uA.copy(t.matrixWorld).invert(),Lo.copy(i.ray).applyMatrix4(uA),AA.setFromMatrixScale(t.matrixWorld),dA.copy(Lo.direction).multiply(AA);let n=dA.length(),s=i.near/n,o=i.far/n;if(i.firstHitOnly===!0){let l=this.raycastFirst(Lo,a,s,o);l=hA(l,t,i),l&&r.push(l)}else{let l=this.raycast(Lo,a,s,o);for(let c=0,h=l.length;c<h;c++){let u=hA(l[c],t,i);u&&r.push(u)}}return r}refit(t=null){return(this.indirect?Ey:oy)(this,t)}raycast(t,i=hr,r=0,a=1/0){let n=this._roots,s=[],o=this.indirect?vy:dy;for(let l=0,c=n.length;l<c;l++)o(this,l,i,t,s,r,a);return s}raycastFirst(t,i=hr,r=0,a=1/0){let n=this._roots,s=null,o=this.indirect?yy:Ay;for(let l=0,c=n.length;l<c;l++){let h=o(this,l,i,t,r,a);h!=null&&(s==null||h.distance<s.distance)&&(s=h)}return s}intersectsGeometry(t,i){let r=!1,a=this._roots,n=this.indirect?Cy:py;for(let s=0,o=a.length;s<o&&(r=n(this,s,t,i),!r);s++);return r}shapecast(t){let i=Ni.getPrimitive(),r=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:i,iterate:this.indirect?hy:sy});return Ni.releasePrimitive(i),r}bvhcast(t,i,r){let{intersectsRanges:a,intersectsTriangles:n}=r,s=Ni.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{let g=this.resolveTriangleIndex(m);Rt(s,g*3,o,l)}:m=>{Rt(s,m*3,o,l)},h=Ni.getPrimitive(),u=t.geometry.index,d=t.geometry.attributes.position,A=t.indirect?m=>{let g=t.resolveTriangleIndex(m);Rt(h,g*3,u,d)}:m=>{Rt(h,m*3,u,d)};if(n){if(!(t instanceof vh))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let m=(g,f,p,x,v,b,_,S)=>{for(let M=p,E=p+x;M<E;M++){A(M),h.a.applyMatrix4(i),h.b.applyMatrix4(i),h.c.applyMatrix4(i),h.needsUpdate=!0;for(let y=g,R=g+f;y<R;y++)if(c(y),s.needsUpdate=!0,n(s,h,y,M,v,b,_,S))return!0}return!1};if(a){let g=a;a=function(f,p,x,v,b,_,S,M){return g(f,p,x,v,b,_,S,M)?!0:m(f,p,x,v,b,_,S,M)}}else a=m}return super.bvhcast(t,i,{intersectsRanges:a})}intersectsBox(t,i){return Po.set(t.min,t.max,i),Po.needsUpdate=!0,this.shapecast({intersectsBounds:r=>Po.intersectsBox(r),intersectsTriangle:r=>Po.intersectsTriangle(r)})}intersectsSphere(t){return this.shapecast({intersectsBounds:i=>t.intersectsBox(i),intersectsTriangle:i=>i.intersectsSphere(t)})}closestPointToGeometry(t,i,r={},a={},n=0,s=1/0){return(this.indirect?Ty:_y)(this,t,i,r,a,n,s)}closestPointToPoint(t,i={},r=0,a=1/0){return ty(this,t,i,r,a)}},CC=parseInt("186")>=166,rn={Mesh:mt.prototype.raycast,Line:Cs.prototype.raycast,LineSegments:xa.prototype.raycast,LineLoop:Ph.prototype.raycast,Points:Lh.prototype.raycast,BatchedMesh:Ng.prototype.raycast},Jt=new mt,Fo=[];function Ry(e,t){if(this.isBatchedMesh)Dy.call(this,e,t);else{let{geometry:i}=this;if(i.boundsTree)i.boundsTree.raycastObject3D(this,e,t);else{let r;if(this instanceof mt)r=rn.Mesh;else if(this instanceof xa)r=rn.LineSegments;else if(this instanceof Ph)r=rn.LineLoop;else if(this instanceof Cs)r=rn.Line;else if(this instanceof Lh)r=rn.Points;else throw new Error("BVH: Fallback raycast function not found.");r.call(this,e,t)}}}function Dy(e,t){if(this.boundsTrees){let i=this.boundsTrees,r=this._drawInfo||this._instanceInfo,a=this._drawRanges||this._geometryInfo,n=this.matrixWorld;Jt.material=this.material,Jt.geometry=this.geometry;let s=Jt.geometry.boundsTree,o=Jt.geometry.drawRange;Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Ot);for(let l=0,c=r.length;l<c;l++){if(!this.getVisibleAt(l))continue;let h=r[l].geometryIndex;if(Jt.geometry.boundsTree=i[h],this.getMatrixAt(l,Jt.matrixWorld).premultiply(n),!Jt.geometry.boundsTree){this.getBoundingBoxAt(h,Jt.geometry.boundingBox),this.getBoundingSphereAt(h,Jt.geometry.boundingSphere);let u=a[h];Jt.geometry.setDrawRange(u.start,u.count)}Jt.raycast(e,Fo);for(let u=0,d=Fo.length;u<d;u++){let A=Fo[u];A.object=this,A.batchId=l,t.push(A)}Fo.length=0}Jt.geometry.boundsTree=s,Jt.geometry.drawRange=o,Jt.material=null,Jt.geometry=null}else rn.BatchedMesh.call(this,e,t)}function Py(e={}){let{type:t=By}=e;return this.boundsTree=new t(this,e),this.boundsTree}function Ly(){this.boundsTree=null}var Ss={pvc:{label:"Sert PVC (uPVC), beyaz",swatch:"#f2f2ee"},pvcCap:{label:"Sert PVC (uPVC), beyaz",swatch:"#f2f2ee"},steel:{label:"Galvaniz \xE7elik sac",swatch:"#aeb4ba"},epdm:{label:"EPDM kau\xE7uk, siyah",swatch:"#1c1c1c"},tpe:{label:"Yumu\u015Fak PVC / TPE (ko-ekstr\xFCzyon), siyah",swatch:"#222222"},glass:{label:"Float cam, 4 mm",swatch:"#bfe1d9"},alu:{label:"Al\xFCminyum ara \xE7\u0131ta",swatch:"#b9bec4"},desic:{label:"Molek\xFCler elek gran\xFCl\xFC",swatch:"#d7c49b"},sealant:{label:"Polis\xFClf\xFCr / butil",swatch:"#2a2a2a"},plastic:{label:"Sert plastik (PP/PE)",swatch:"#5a7da6"},screw:{label:"\xC7inko kapl\u0131 \xE7elik",swatch:"#d3d7db"},cover:{label:"PVC, beyaz",swatch:"#f2f2ee"}},Xh=[{id:"profil",label:"Profiller"},{id:"conta",label:"Contalar"},{id:"takviye",label:"Takviye ve ba\u011Flant\u0131"},{id:"cam",label:"Cam sistemi"},{id:"drenaj",label:"Drenaj"}],fi={v:[0,95,30],t:[.3,.68]},Ms=[{id:"kasa_profili",name:"Kasa profili",group:"profil",mat:"pvc",info:"Supremo 85 kasa profili. Kesitte 14 kapal\u0131 kamara bulunur: ana kamarada galvaniz takviye, d\u0131\u015F tarafta drenaj kamaralar\u0131, \xFCstte kasa d\u0131\u015F contas\u0131 ve orta conta yuvalar\u0131.",dims:[["Sistem derinli\u011Fi","85 mm"],["D\u0131\u015F g\xF6r\xFCn\xFCr y\xFCkseklik","74 mm"],["\u0130\xE7 g\xF6r\xFCn\xFCr y\xFCkseklik","40 mm"],["D\u0131\u015F duvar kal\u0131nl\u0131\u011F\u0131","2,8 mm"],["Kamara say\u0131s\u0131","14"]],assembly:"Referans par\xE7a. K\xF6\u015Feler 45\xB0 kesilip kaynakla birle\u015Ftirilir (PDF s.6, s.14).",source:"PDF s.9 Su tahliye g\xF6r\xFCn\xFCm\xFC \xB7 s.6 Profil kesimi",explode:[]},{id:"kanat_profili",name:"Kanat profili",group:"profil",mat:"pvc",info:"Supremo 85 kanat profili. 11 kamara; cam yuvas\u0131 taban\u0131nda takoz k\xF6pr\xFCs\xFC yeri, d\u0131\u015F cam duda\u011F\u0131nda conta yuvas\u0131, i\xE7 baca\u011F\u0131nda kanat i\xE7 contas\u0131 yuvas\u0131 ve cam \xE7\u0131tas\u0131 klips kanal\u0131 bulunur.",dims:[["Sistem derinli\u011Fi","85 mm (\xE7\u0131ta dahil)"],["Profil y\xFCksekli\u011Fi","84 mm"],["Kasa ile ka\xE7\u0131kl\u0131k","19,5 mm (toplam 104,5 mm)"],["Kamara say\u0131s\u0131","11"]],assembly:"Kasaya kapan\u0131rken d\u0131\u015F, orta ve i\xE7 olmak \xFCzere \xFC\xE7 conta hatt\u0131na basar.",source:"PDF s.9 Su tahliye g\xF6r\xFCn\xFCm\xFC",explode:[fi]},{id:"cam_citasi",name:"Cam \xE7\u0131tas\u0131 (\xFC\xE7l\xFC cam)",group:"profil",mat:"pvc",info:"Kanat profilindeki klips kanal\u0131na i\xE7 taraftan ge\xE7en bo\u015Fluklu \xE7\u0131ta. \u0130ki yumu\u015Fak dudakla \u0131s\u0131cam\u0131 i\xE7ten s\u0131k\u0131\u015Ft\u0131r\u0131r.",dims:[["Derinlik","30 mm"],["Y\xFCkseklik","32,5 mm"],["Cam kal\u0131nl\u0131\u011F\u0131","32 mm (4-10-4-10-4)"]],assembly:"Cam yerle\u015Ftirildikten sonra i\xE7 taraftan klipsle tak\u0131l\u0131r; k\xF6\u015Felerde 45\xB0 kesilir (PDF s.7, no.7).",source:"PDF s.9 \xB7 s.7 \xC7\u0131ta kesimi",explode:[fi,{v:[0,26,72],t:[0,.32]}]},{id:"cam_citasi_contasi",name:"Cam \xE7\u0131tas\u0131 contas\u0131",group:"conta",mat:"tpe",info:"\xC7\u0131taya ortak ekstr\xFCzyonla eklenmi\u015F iki yumu\u015Fak dudak. \xC7izimde \xE7\u0131ta \xFCzerinde taral\u0131 (farkl\u0131 malzeme) g\xF6sterilmi\u015Ftir.",dims:[["Dudak say\u0131s\u0131","2"],["Temas y\xFCzeyi","\u0130\xE7 cam y\xFCzeyi"]],assembly:"\xC7\u0131ta ile birlikte gelir; ayr\u0131 montaj\u0131 yoktur.",source:"PDF s.9",explode:[fi,{v:[0,26,72],t:[0,.32]}]},{id:"kasa_dis_contasi",name:"Kasa d\u0131\u015F contas\u0131",group:"conta",mat:"epdm",info:"Kasan\u0131n d\u0131\u015F duda\u011F\u0131ndaki yuvaya ok \u015Feklindeki aya\u011F\u0131yla ge\xE7er; kanad\u0131n d\u0131\u015F y\xFCz\xFCne basarak birinci s\u0131zd\u0131rmazl\u0131k hatt\u0131n\u0131 olu\u015Fturur. Kanat i\xE7 contas\u0131 ve d\u0131\u015F cam contas\u0131 ile ayn\u0131 kesittedir.",dims:[["Kesit","7,3 \xD7 11,5 mm"],["Bo\u015Fluklu kesit","3 h\xFCcre"]],assembly:"Yuvaya bast\u0131r\u0131larak tak\u0131l\u0131r.",source:"PDF s.9",explode:[{v:[0,12,18],t:[.5,.8]}]},{id:"orta_conta",name:"Orta conta",group:"conta",mat:"epdm",info:"Kasan\u0131n orta yuvas\u0131na tak\u0131lan y\xFCksek kanatl\u0131 merkez conta. Kanat g\xF6vdesine basarak ikinci hatt\u0131 olu\u015Fturur ve d\u0131\u015F drenaj b\xF6lmesini i\xE7 b\xF6lmeden ay\u0131r\u0131r.",dims:[["Kanat y\xFCksekli\u011Fi","\u2248 18 mm"],["Kesit","9 \xD7 17,9 mm"]],assembly:"Kasa yuvas\u0131na aya\u011F\u0131yla bast\u0131r\u0131larak tak\u0131l\u0131r.",source:"PDF s.9",explode:[{v:[0,36,0],t:[.5,.8]}]},{id:"kanat_ic_contasi",name:"Kanat i\xE7 contas\u0131",group:"conta",mat:"epdm",info:"Kanad\u0131n i\xE7 baca\u011F\u0131ndaki yuvaya ge\xE7er ve kasan\u0131n i\xE7 y\xFCz\xFCne basar (\xFC\xE7\xFCnc\xFC hat).",dims:[["Kesit","7,3 \xD7 11,5 mm"]],assembly:"Kanat yuvas\u0131na bast\u0131r\u0131larak tak\u0131l\u0131r.",source:"PDF s.9",explode:[fi,{v:[0,-4,-16],t:[.52,.82]}]},{id:"kanat_dis_cam_contasi",name:"D\u0131\u015F cam contas\u0131",group:"conta",mat:"epdm",info:"Kanad\u0131n d\u0131\u015F cam duda\u011F\u0131ndaki yuvaya ge\xE7er; \u0131s\u0131cam\u0131n d\u0131\u015F y\xFCzeyini s\u0131zd\u0131rmaz hale getirir.",dims:[["Kesit","7,3 \xD7 11,5 mm"]],assembly:"Cam tak\u0131lmadan \xF6nce kanat yuvas\u0131na bast\u0131r\u0131l\u0131r.",source:"PDF s.9",explode:[fi,{v:[0,10,16],t:[.46,.76]}]},{id:"kasa_celik_takviye",name:"Kasa \xE7elik takviyesi",group:"takviye",mat:"steel",info:"Kasa ana kamaras\u0131na boyuna s\xFCr\xFClen galvaniz U profil. Kamaraya 0,5 mm montaj bo\u015Flu\u011Fuyla oturur.",dims:[["Kesit","30 \xD7 27 mm U"],["Et kal\u0131nl\u0131\u011F\u0131","1,5 mm"],["Kesim boyu","Kasa boyu \u2212 153 mm (PDF s.10)"]],assembly:"Profile boyuna s\xFCr\xFCl\xFCr, kasa alt\u0131ndan vidalan\u0131r.",source:"PDF s.9 \xB7 s.10 Kasa ve kay\u0131t haz\u0131rl\u0131\u011F\u0131",explode:[{v:[-190,0,0],t:[.62,1]}]},{id:"kanat_celik_takviye",name:"Kanat \xE7elik takviyesi",group:"takviye",mat:"steel",info:"Kanat ana kamaras\u0131ndaki orta dilin \xFCzerine oturan galvaniz U profil.",dims:[["Kesit","30 \xD7 27 mm U"],["Et kal\u0131nl\u0131\u011F\u0131","1,5 mm"]],assembly:"Profile boyuna s\xFCr\xFCl\xFCr, cam yuvas\u0131 taban\u0131ndan vidalan\u0131r.",source:"PDF s.9 \xB7 s.11",explode:[fi,{v:[190,0,0],t:[.62,1]}]},{id:"kasa_takviye_vidalari",name:"Kasa takviye vidalar\u0131",group:"takviye",mat:"screw",info:"Hav\u015Fa ba\u015Fl\u0131 y\u0131ld\u0131z (YHB) matkap u\xE7lu vida. Kasa alt\u0131ndaki k\u0131lavuz kanal\u0131ndan ge\xE7erek \xE7elik takviyeyi profile ba\u011Flar.",dims:[["\xD6l\xE7\xFC","3,9 \xD7 19 mm"],["Adet (numunede)","2"],["Aral\u0131k (PDF s.10)","U\xE7tan 150 mm, 300\u2013400 mm arayla"]],assembly:"Ba\u015F y\xFCzeyle ayn\u0131 hizada; ucu takviye i\xE7inde kal\u0131r.",source:"PDF s.9 \xB7 s.10",explode:[{v:[0,-36,0],t:[.55,.85]}]},{id:"kanat_takviye_vidalari",name:"Kanat takviye vidalar\u0131",group:"takviye",mat:"screw",info:"Cam yuvas\u0131 taban\u0131ndaki k\u0131lavuz kanal\u0131ndan takviyeye giren 3,9 \xD7 19 mm YHB vida. Ucu, orta dildeki merkezleme \xE7enti\u011Finin hemen \xFCst\xFCnde kal\u0131r.",dims:[["\xD6l\xE7\xFC","3,9 \xD7 19 mm"],["Adet (numunede)","2"]],assembly:"Camlamadan \xF6nce tak\u0131l\u0131r.",source:"PDF s.9 \xB7 s.10",explode:[fi,{v:[0,24,0],t:[.56,.86]}]},{id:"cam_1",name:"Cam \u2014 d\u0131\u015F panel",group:"cam",mat:"glass",info:"\xDC\xE7l\xFC \u0131s\u0131cam \xFCnitesinin d\u0131\u015F paneli.",dims:[["Kal\u0131nl\u0131k","4 mm"],["\xDCnite","4-10-4-10-4 = 32 mm"]],assembly:"Is\u0131cam fabrikada birle\u015Fik gelir; takoz k\xF6pr\xFCs\xFC \xFCzerine oturtulur.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]},{v:[0,0,-16],t:[.36,.64]}]},{id:"cam_2",name:"Cam \u2014 orta panel",group:"cam",mat:"glass",info:"\xDC\xE7l\xFC \u0131s\u0131cam \xFCnitesinin orta paneli.",dims:[["Kal\u0131nl\u0131k","4 mm"]],assembly:"Is\u0131cam \xFCnitesinin par\xE7as\u0131.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]}]},{id:"cam_3",name:"Cam \u2014 i\xE7 panel",group:"cam",mat:"glass",info:"\xDC\xE7l\xFC \u0131s\u0131cam \xFCnitesinin i\xE7 paneli; cam \xE7\u0131tas\u0131 dudaklar\u0131 bu y\xFCze basar.",dims:[["Kal\u0131nl\u0131k","4 mm"]],assembly:"Is\u0131cam \xFCnitesinin par\xE7as\u0131.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]},{v:[0,0,16],t:[.36,.64]}]},{id:"isicam_citasi",name:"Is\u0131cam ara \xE7\u0131tas\u0131",group:"cam",mat:"alu",info:"Panelleri 10 mm aral\u0131kta tutan bo\u015Fluklu ara \xE7\u0131ta (2 adet). \u0130\xE7i nem al\u0131c\u0131 ile doludur.",dims:[["Geni\u015Flik","10 mm"],["Y\xFCkseklik","7 mm"]],assembly:"Is\u0131cam \xFCnitesinin par\xE7as\u0131.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]}]},{id:"nem_alici",name:"Nem al\u0131c\u0131 (desikant)",group:"cam",mat:"desic",info:"Ara \xE7\u0131ta i\xE7indeki gran\xFCl dolgu; panel aras\u0131 bo\u015Fluktaki nemi tutarak bu\u011Fulanmay\u0131 \xF6nler.",dims:[["Kesit","8 \xD7 5 mm (her \xE7\u0131ta)"]],assembly:"Is\u0131cam \xFCnitesinin par\xE7as\u0131.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]}]},{id:"ikincil_sizdirmazlik",name:"\u0130kincil s\u0131zd\u0131rmazl\u0131k",group:"cam",mat:"sealant",info:"Ara \xE7\u0131tan\u0131n alt\u0131ndaki kenar ba\u011F\u0131 dolgusu; panelleri kal\u0131c\u0131 olarak birbirine ba\u011Flar.",dims:[["Y\xFCkseklik","5,1 mm"]],assembly:"Is\u0131cam \xFCnitesinin par\xE7as\u0131.",source:"PDF s.9",explode:[fi,{v:[0,118,0],t:[.12,.48]}]},{id:"cam_takoz_koprusu",name:"Cam takoz k\xF6pr\xFCs\xFC",group:"cam",mat:"plastic",info:"Cam y\xFCk\xFCn\xFC kanat taban\u0131na aktaran k\xF6pr\xFC takozu (2 adet). Alt y\xFCz\xFCndeki kanallar cam yuvas\u0131ndaki suyun drenaja akmas\u0131na izin verir.",dims:[["Kal\u0131nl\u0131k","3,8 mm"],["Geni\u015Flik","57 mm"],["Boy (varsay\u0131m)","100 mm"]],assembly:"Camdan \xF6nce cam yuvas\u0131 taban\u0131na yerle\u015Ftirilir.",source:"PDF s.9",explode:[fi,{v:[0,44,0],t:[.4,.72]}]},{id:"kasa_drenaj_kanallari",name:"Kasa drenaj kanallar\u0131",group:"drenaj",mat:"pvc",info:"Kasada frezelenmi\u015F 32 \xD7 \xD84 mm yar\u0131klar: e\u011Fimli y\xFCzeyden (45\xB0) d\u0131\u015F kamaraya ve 70 mm \xF6tede d\u0131\u015F y\xFCzden d\u0131\u015Far\u0131ya. Su, kamara i\xE7inde labirent yol izler.",dims:[["Yar\u0131k","32 \xD7 4 mm"],["\u0130\xE7\u2013d\u0131\u015F kanal aral\u0131\u011F\u0131","70 mm"],["Adet","C < 500 mm: 1 \xB7 500\u20131000: 2 \xB7 1000\u20132000: 3 \xB7 > 2000: 4 (PDF s.8)"]],assembly:"Profil kesiminden sonra drenaj makinesiyle a\xE7\u0131l\u0131r.",source:"PDF s.8 Su tahliyesi \xB7 s.9",explode:[]},{id:"kanat_drenaj_kanallari",name:"Kanat drenaj kanallar\u0131",group:"drenaj",mat:"pvc",info:"Cam yuvas\u0131ndan kanat d\u0131\u015F kamaras\u0131na 45\xB0 yar\u0131k ve kanat alt\u0131ndan kasa b\xF6lmesine dikey yar\u0131k (32 \xD7 \xD84 mm).",dims:[["Yar\u0131k","32 \xD7 4 mm"]],assembly:"Profil kesiminden sonra a\xE7\u0131l\u0131r.",source:"PDF s.8 \xB7 s.9",explode:[fi]},{id:"drenaj_kapagi",name:"Drenaj kapa\u011F\u0131 (r\xFCzgarl\u0131k)",group:"drenaj",mat:"cover",info:"D\u0131\u015F drenaj yar\u0131\u011F\u0131na iki t\u0131rnakl\u0131 pimle tak\u0131lan, alttan a\xE7\u0131k kapak. Suyu d\u0131\u015Far\u0131 b\u0131rak\u0131rken r\xFCzgar\u0131n yar\u0131\u011Fa girmesini engeller.",dims:[["Boyut (varsay\u0131m)","40 \xD7 11 \xD7 6,5 mm"]],assembly:"Montaj\u0131n sonunda d\u0131\u015F y\xFCzden tak\u0131l\u0131r (PDF s.8, madde 4).",source:"PDF s.4 \xB7 s.8",explode:[{v:[0,0,-32],t:[.6,.9]}]}],bp=[{label:"Vida ekseni",axis:"x",pos:-110},{label:"\u0130\xE7 drenaj yar\u0131\u011F\u0131",axis:"x",pos:-74},{label:"D\u0131\u015F drenaj yar\u0131\u011F\u0131",axis:"x",pos:28},{label:"Orta",axis:"x",pos:0}];var Rr={uClip:{value:new at(1,0,0,1e6)},uClipOn:{value:0},uAoMix:{value:0},uAoStrength:{value:1}},El=e=>new Re().setHex(e,Gt),_p={pvc:{c:14672872,h:10002859,s:1.6,a:1},cover:{c:14672872,h:10002859,s:1.6,a:1},steel:{c:9410205,h:6120555,s:.9,a:-1},epdm:{c:2829099,h:4539717,s:.8,a:1},tpe:{c:3158064,h:4868682,s:.8,a:-1},alu:{c:11120308,h:8225674,s:.7,a:1},desic:{c:13482382,h:11048556,s:.5,a:-1},sealant:{c:2763306,h:2763306,s:1,a:1},plastic:{c:5206939,h:3889788,s:1.1,a:-1},screw:{c:12172995,h:9080982,s:.5,a:1}};function dr(e,t,i={}){let r=_p[t]||_p.pvc;return e.userData.u={uHi:{value:0},uHiColor:{value:El(6080767)},uCapColor:{value:El(r.c)},uCapHatch:{value:El(r.h)},uHatch:{value:new Ce(r.s,r.a)},uTri:{value:i.triplanar?1:0}},e.onBeforeCompile=a=>{Object.assign(a.uniforms,Rr,e.userData.u),i.triplanarMap&&(a.uniforms.uSpangle={value:i.triplanarMap}),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying vec3 vWNrm;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWNrm = normalize(mat3(modelMatrix) * objectNormal);`);let n=a.fragmentShader;n=n.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying vec3 vWNrm;
uniform vec4 uClip; uniform float uClipOn; uniform float uAoMix; uniform float uAoStrength;
uniform float uHi; uniform vec3 uHiColor; uniform vec3 uCapColor; uniform vec3 uCapHatch; uniform vec2 uHatch;
${i.triplanarMap?"uniform sampler2D uSpangle;":""}
float capHatch(vec3 wp){
  vec3 n = abs(uClip.xyz); vec2 p;
  if (n.x >= n.y && n.x >= n.z) p = wp.zy; else if (n.y >= n.z) p = wp.xz; else p = wp.xy;
  p *= 1000.0;
  // ekrandaki piksel boyutuna g\xF6re 2'nin katlar\u0131 halinde aral\u0131k (yak\u0131nla\u015Ft\u0131rmada kaymadan s\u0131kla\u015F\u0131r)
  float mmPerPx = max(fwidth(p.x), fwidth(p.y));
  float spacing = uHatch.x * exp2(max(0.0, ceil(log2(7.0 * mmPerPx / uHatch.x))));
  float s = (p.x + uHatch.y * p.y) / spacing;
  float w = fwidth(s);
  float d = abs(fract(s) - 0.5);
  return 1.0 - smoothstep(0.055 - w, 0.055 + w, 0.5 - d);
}`);let s=Ge.aomap_fragment.replace("float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r",`vec4 aoTexel = texture2D( aoMap, vAoMapUv );
	float ambientOcclusion = ( ( mix( aoTexel.r, aoTexel.a, uAoMix ) * 0.86 + 0.14 )`).replace("float ambientOcclusion = (",`float clipRelief = uClipOn > 0.5 ? smoothstep( 0.0, 0.018, abs( dot( vWPos, uClip.xyz ) + uClip.w ) ) : 1.0;
	float ambientOcclusion = mix( 1.0, (`).replace("* aoMapIntensity + 1.0;","* aoMapIntensity + 1.0, clipRelief * uAoStrength );");n=n.replace("#include <aomap_fragment>",s),i.triplanarMap&&(n=n.replace("#include <color_fragment>",`#include <color_fragment>
      vec3 tw = abs(vWNrm);
      vec3 sp = vWPos * (1000.0 / 56.0);
      vec2 uvA = tw.x > tw.y ? (tw.x > tw.z ? sp.yz : sp.xy) : (tw.y > tw.z ? sp.xz : sp.xy);
      float spg = texture2D(uSpangle, uvA).r;
      diffuseColor.rgb *= 0.86 + 0.2 * spg;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = clamp(roughnessFactor * (1.35 - 0.7 * spg), 0.12, 1.0);`)),n=n.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if ( !gl_FrontFacing ) {
    vec3 cc = mix( uCapColor, uCapHatch, capHatch( vWPos ) );
    cc = mix( cc, uHiColor, uHi * 0.35 );
    gl_FragColor = vec4( cc, 1.0 );
  } else if ( uHi > 0.0 ) {
    vec3 vdir = normalize( vViewPosition );
    float fr = pow( 1.0 - clamp( abs( dot( normalize( normal ), vdir ) ), 0.0, 1.0 ), 2.2 );
    gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * ( 0.08 + 0.5 * fr ) );
  }`),a.fragmentShader=n},e.customProgramCacheKey=()=>"sup85-"+t+(i.triplanarMap?"-tri":""),e}function Fy(e){return e.userData.u={uHi:{value:0},uHiColor:{value:El(6080767)}},e.onBeforeCompile=t=>{Object.assign(t.uniforms,Rr,e.userData.u),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWNrmG;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vWNrmG = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWNrmG;
uniform float uHi; uniform vec3 uHiColor;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  // cam kenarlar\u0131 (kesim y\xFCzleri) ye\u015Filimsi ve daha opak
  float edge = 1.0 - abs( vWNrmG.z );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3( 0.36, 0.55, 0.48 ), edge * 0.75 );
  gl_FragColor.a = mix( gl_FragColor.a, 0.9, edge );
  gl_FragColor.rgb = mix( gl_FragColor.rgb, uHiColor, uHi * 0.35 );
  gl_FragColor.a = max( gl_FragColor.a, uHi * 0.35 );`)},e.customProgramCacheKey=()=>"sup85-glass",e}function Ep(e,t){let i={aoMap:t.ao,aoMapIntensity:1,side:Nt},r;switch(e){case"pvc":case"cover":return r=new Ci({...i,color:15987696,roughness:.34,metalness:0,clearcoat:.35,clearcoatRoughness:.28,specularIntensity:.6}),dr(r,e);case"steel":return r=new yi({...i,color:12765132,roughness:.36,metalness:1}),dr(r,e,{triplanarMap:t.spangle});case"epdm":return r=new yi({...i,color:1513239,roughness:.74,metalness:0}),dr(r,e);case"tpe":return r=new yi({...i,color:1776411,roughness:.58,metalness:0}),dr(r,e);case"alu":return r=new yi({...i,color:12567754,roughness:.42,metalness:1}),dr(r,e);case"desic":return r=new yi({...i,color:14074518,roughness:.95,metalness:0}),dr(r,e);case"sealant":return r=new yi({...i,color:2039583,roughness:.55,metalness:0}),dr(r,e);case"plastic":return r=new yi({...i,color:4943768,roughness:.46,metalness:0}),dr(r,e);case"screw":return r=new yi({...i,color:14278114,roughness:.24,metalness:1}),dr(r,e);case"glass":return r=new Ci({color:15660787,roughness:.03,metalness:0,transparent:!0,opacity:.14,side:Nt,depthWrite:!1,specularIntensity:1,ior:1.52,envMapIntensity:1.4}),r.forceSinglePass=!0,Fy(r);default:return dr(new yi({...i,color:13421772}),"pvc")}}var Ny=`
uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
void main(){
  vec4 s = vec4(0.0);
  s += texture2D(tDiffuse, vUv - 4.0*dir) * 0.051;
  s += texture2D(tDiffuse, vUv - 3.0*dir) * 0.0918;
  s += texture2D(tDiffuse, vUv - 2.0*dir) * 0.12245;
  s += texture2D(tDiffuse, vUv - 1.0*dir) * 0.1531;
  s += texture2D(tDiffuse, vUv) * 0.1633;
  s += texture2D(tDiffuse, vUv + 1.0*dir) * 0.1531;
  s += texture2D(tDiffuse, vUv + 2.0*dir) * 0.12245;
  s += texture2D(tDiffuse, vUv + 3.0*dir) * 0.0918;
  s += texture2D(tDiffuse, vUv + 4.0*dir) * 0.051;
  gl_FragColor = s;
}`,Uy="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",vl=class{constructor(t,{width:i=.62,depth:r=.42,height:a=.16,res:n=512,opacity:s=.62,blur:o=2.2}={}){this.renderer=t,this.group=new xi,this.rtA=new ui(n,n),this.rtA.texture.generateMipmaps=!1,this.rtB=new ui(n,n),this.rtB.texture.generateMipmaps=!1;let l=new Xr(i,r).rotateX(-Math.PI/2);this.plane=new mt(l,new Fi({map:this.rtA.texture,transparent:!0,opacity:s,depthWrite:!1,toneMapped:!1})),this.plane.renderOrder=-1,this.plane.position.y=2e-4,this.plane.material.map.flipY=!1,this.group.add(this.plane),this.cam=new Yr(-i/2,i/2,r/2,-r/2,0,a),this.cam.rotation.x=Math.PI/2,this.group.add(this.cam),this.depthMat=new Al({side:Nt}),this.depthMat.onBeforeCompile=c=>{c.uniforms.darkness={value:1.6},c.fragmentShader=`uniform float darkness;
`+c.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), pow( 1.0 - fragCoordZ, 1.6 ) * darkness );")},this.depthMat.depthTest=!0,this.depthMat.depthWrite=!0,this.blurMat=new wi({uniforms:{tDiffuse:{value:null},dir:{value:new Ce}},vertexShader:Uy,fragmentShader:Ny,depthTest:!1,depthWrite:!1}),this.quad=new mt(new Xr(2,2),this.blurMat),this.quad.frustumCulled=!1,this.quadScene=new ys,this.quadScene.add(this.quad),this.quadCam=new Yr(-1,1,1,-1,0,1),this.res=n,this.blur=o}update(t,i){let r=this.renderer,a=r.getRenderTarget(),n=r.getClearAlpha(),s=r.getClearColor(new Re),o=t.overrideMaterial,l=t.background,c=r.localClippingEnabled,h=[];t.traverse(u=>{u.visible&&u!==t&&!this._isModel(u,i)&&u.type!=="Group"&&u.type!=="Scene"&&(h.push(u),u.visible=!1)}),t.background=null,t.overrideMaterial=this.depthMat,r.localClippingEnabled=!1,r.setClearColor(0,0),r.setRenderTarget(this.rtA),r.clear(),r.render(t,this.cam),t.overrideMaterial=o,t.background=l,r.localClippingEnabled=c,h.forEach(u=>u.visible=!0);for(let u=0;u<2;u++){let d=this.blur*(u+1)/this.res;this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.dir.value.set(d,0),r.setRenderTarget(this.rtB),r.render(this.quadScene,this.quadCam),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.dir.value.set(0,d),r.setRenderTarget(this.rtA),r.render(this.quadScene,this.quadCam)}r.setRenderTarget(a),r.setClearColor(s,n)}_isModel(t,i){let r=t;for(;r;){if(r===i)return!0;r=r.parent}return!1}};var{OrbitControls:ky,GLTFLoader:Qy,KTX2Loader:Oy,MeshoptDecoder:Gy,computeBoundsTree:Hy,disposeBoundsTree:zy,acceleratedRaycast:Vy}=Is;zt.prototype.computeBoundsTree=Hy;zt.prototype.disposeBoundsTree=zy;mt.prototype.raycast=Vy;var ee=e=>document.getElementById(e),ur=.001,wp=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Bn=e=>Math.min(1,Math.max(0,e)),q={selected:null,hovered:null,soloSet:null,explode:0,explodeTarget:0,explodeAnim:null,clip:{on:!1,axis:"x",pos:-74,flip:!1},dims:!1,rotate:!1,needsRender:2,shadowDirty:!0,camAnim:null},pt=new Map;var ed={x:[-150,150],y:[0,200],z:[-58.8,52.3]},tr=ee("scene"),Tp=new URLSearchParams(location.search),Wy=Tp.get("aa")!=="0",ct;try{ct=new Hh({canvas:tr,antialias:Wy,alpha:!0,powerPreference:"high-performance"})}catch(e){throw jy("Taray\u0131c\u0131n\u0131z WebGL 2 desteklemiyor veya grafik h\u0131zland\u0131rma kapal\u0131. L\xFCtfen g\xFCncel bir Chrome, Edge, Firefox ya da Safari ile a\xE7\u0131n."),e}var ad=Math.min(window.devicePixelRatio||1,Number(Tp.get("dpr"))||2),Ar=ad;ct.setPixelRatio(Ar);ct.setSize(window.innerWidth,window.innerHeight,!1);ct.outputColorSpace=Et;ct.toneMapping=xs;ct.toneMappingExposure=1.05;ct.localClippingEnabled=!0;ct.setClearColor(0,0);var er=new ys,et=new Zt(30,window.innerWidth/window.innerHeight,.01,12),Xe=new ky(et,tr);Xe.enableDamping=!0;Xe.dampingFactor=.08;Xe.rotateSpeed=.8;Xe.zoomSpeed=.9;Xe.panSpeed=.8;Xe.minDistance=.09;Xe.maxDistance=5;Xe.screenSpacePanning=!0;Xe.autoRotateSpeed=.9;Xe.addEventListener("change",()=>{q.needsRender=Math.max(q.needsRender,1)});Xe.addEventListener("start",()=>{q.camAnim=null,Qi.active=!1});var nd=new xi;er.add(nd);var AM=new D(0,.095,-.003),Jr=new Ei(new D(1,0,0),1e6),qy=[Jr],ki={items:{},text:ee("loaderText")};function Bs(e,t,i){var s;ki.items[e]={loaded:t,total:i||((s=ki.items[e])==null?void 0:s.total)||1};let r=0,a=0;for(let o in ki.items)r+=Math.min(ki.items[o].loaded,ki.items[o].total),a+=ki.items[o].total;let n=Math.round(r/a*90);ee("progressBar").style.width=n+"%",ee("loaderPct").textContent=n+"%"}var Tn={model:560560,ao:1008947,env:304166,spangle:195010,basis:584862};for(let e in Tn)Bs(e,0,Tn[e]);function jy(e){let t=document.createElement("div");t.className="fatal",t.textContent=e,document.body.appendChild(t)}var Ml=new pl,Bp=new Oy(Ml).setTranscoderPath("vendor/basis/").detectSupport(ct),Ky=new Qy(Ml).setMeshoptDecoder(Gy).setKTX2Loader(Bp);function Yh(e,t){return new Promise((i,r)=>Bp.load(e,i,a=>Bs(t,a.loaded,a.total),r))}async function Xy(){if(location.protocol!=="file:")return;ki.text.textContent="Yerel dosyalar haz\u0131rlan\u0131yor\u2026",await new Promise((i,r)=>{let a=document.createElement("script");a.src="assets/assets-embedded.js",a.onload=i,a.onerror=()=>r(new Error("assets/assets-embedded.js okunamad\u0131")),document.head.appendChild(a)});let e=window.SUPREMO85_EMBEDDED||{},t=Object.keys(e);Ml.setURLModifier(i=>{if(i.startsWith("data:")||i.startsWith("blob:"))return i;let r=i.replace(/^\.\//,"");if(e[r])return e[r];let a=t.find(n=>r.endsWith("/"+n)||r.endsWith(n));return a?e[a]:i})}async function Yy(){await Xy(),ki.text.textContent="Model ve dokular y\xFCkleniyor\u2026",Ml.onProgress=s=>{/basis_transcoder/.test(s)&&Bs("basis",Tn.basis,Tn.basis)};let[e,t,i,r]=await Promise.all([new Promise((s,o)=>Ky.load("assets/supremo85.glb",s,l=>Bs("model",l.loaded,l.total),o)),Yh("assets/ao.ktx2","ao"),Yh("assets/studio.ktx2","env"),Yh("assets/spangle.ktx2","spangle")]);Bs("basis",Tn.basis,Tn.basis),ki.text.textContent="St\xFCdyo ayd\u0131nlatmas\u0131 haz\u0131rlan\u0131yor\u2026",await Jh(),i.mapping=ln,i.colorSpace=Gt,i.minFilter=ht,i.magFilter=ht,i.generateMipmaps=!1;let a=new vs(ct),n=a.fromEquirectangular(i);er.environment=n.texture,er.environmentIntensity=1,i.dispose(),a.dispose(),t.colorSpace=vi,t.channel=0,t.flipY=!1,t.anisotropy=1,r.colorSpace=vi,r.wrapS=r.wrapT=Mr,r.anisotropy=Math.min(2,ct.capabilities.getMaxAnisotropy()),ki.text.textContent="Par\xE7alar olu\u015Fturuluyor\u2026",ee("progressBar").style.width="93%",ee("loaderPct").textContent="93%",await Jh(),Jy(e.scene,{ao:t,spangle:r}),hC(),$y(),eC(),nC(),Np(),Yt.x=Yt.tx,Yt.y=Yt.ty,et.setViewOffset(window.innerWidth,window.innerHeight,-Yt.x,-Yt.y,window.innerWidth,window.innerHeight),Ca("persp",!0),ki.text.textContent="G\xF6lgelendiriciler derleniyor\u2026",ee("progressBar").style.width="97%",ee("loaderPct").textContent="97%",await Jh();for(let s of[!0,!1]){id(s);try{await ct.compileAsync(er,et)}catch{ct.compile(er,et)}}id(q.clip.on),ee("progressBar").style.width="100%",ee("loaderPct").textContent="100%",ki.text.textContent="Haz\u0131r",q.needsRender=3,Gp.start(),await new Promise(s=>setTimeout(s,250)),ee("loader").classList.add("done"),cC()}var Jh=()=>new Promise(e=>requestAnimationFrame(()=>e()));function Jy(e,t){let i=new Map;e.traverse(r=>{r.isMesh&&i.set(r.name,r)});for(let r of Ms){let a=i.get(r.id);if(!a){console.warn("Eksik par\xE7a:",r.id);continue}let n=Ep(r.mat,t);n.clippingPlanes=null,a.material=n,a.userData.partId=r.id,a.matrixAutoUpdate=!0,a.geometry.computeBoundsTree(),a.geometry.attributes.normal||a.geometry.computeVertexNormals(),r.mat==="glass"&&(a.renderOrder=2),nd.add(a),pt.set(r.id,{def:r,mesh:a,mat:n,base:a.position.clone(),hi:0,visible:!0})}ee("partsCount").textContent=`${pt.size} par\xE7a \xB7 ${Rp(Zy())} \xFC\xE7gen`}function Zy(){let e=0;return pt.forEach(t=>{let i=t.mesh.geometry;e+=(i.index?i.index.count:i.attributes.position.count)/3}),e}var Rp=e=>e>=1e3?(e/1e3).toFixed(1).replace(".",",")+"K":String(e);function $y(){let e=new fl(16774892,.55);e.position.set(-.55,.75,.6),er.add(e)}var Rs;function eC(){Rs=new vl(ct,{width:.64,depth:.42,height:.18,res:512,opacity:.7,blur:2.4}),Rs.group.position.set(0,0,-.003),er.add(Rs.group)}var ws=new D,Qi={active:!1,zoom:1,offset:new D,idle:0};function tC(){let e=new dt;return pt.forEach(t=>{t.mesh.visible&&e.expandByObject(t.mesh)}),e.getBoundingSphere(new Ot)}function vp(){let e=tC();if(!Qi.active){let r=et.position.distanceTo(Xe.target);Qi.zoom=r/Ns(e.radius),Qi.offset.copy(Xe.target).sub(e.center),Qi.active=!0}let t=et.position.clone().sub(Xe.target).normalize(),i=e.center.clone().add(Qi.offset);Xe.target.copy(i),et.position.copy(i).add(t.multiplyScalar(Ns(e.radius)*Qi.zoom))}function Zh(){let e=q.explode;pt.forEach(t=>{ws.set(0,0,0);for(let i of t.def.explode){let r=wp(Bn((e-i.t[0])/(i.t[1]-i.t[0])));ws.x+=i.v[0]*r*ur,ws.y+=i.v[1]*r*ur,ws.z+=i.v[2]*r*ur}t.mesh.position.copy(t.base).add(ws)}),q.shadowDirty=!0}function Ds(e,t){e=Bn(e),t?q.explodeAnim={from:q.explode,to:e,t0:performance.now(),dur:900+1500*Math.abs(e-q.explode)}:(q.explodeAnim=null,q.explodeTarget=e),q.needsRender=Math.max(q.needsRender,1)}function $h(e){return e.visible&&(!q.soloSet||q.soloSet.has(e.def.id))}function Zr(){pt.forEach(t=>{t.mesh.visible=$h(t)}),document.querySelectorAll(".part-row").forEach(t=>{let i=pt.get(t.dataset.id);t.classList.toggle("hidden-part",!$h(i)),t.querySelector(".vis").classList.toggle("on",i.visible),t.querySelector(".vis").innerHTML=i.visible?Sl.eye:Sl.eyeOff,t.querySelector(".solo").classList.toggle("on",!!q.soloSet&&q.soloSet.size===1&&q.soloSet.has(i.def.id))}),ee("btnUnsolo").disabled=!q.soloSet,Dp=[...pt.values()].some(t=>!$h(t))?1:0,q.selected&&Pp(),q.shadowDirty=!0,q.needsRender=2}var Dp=0;function Dr(e,{focus:t=!1}={}){if(q.selected===e&&!t)return;q.selected=e,document.querySelectorAll(".part-row").forEach(o=>o.classList.toggle("selected",o.dataset.id===e));let i=ee("infoPanel");if(!e){i.hidden=!0,q.needsRender=2;return}let a=pt.get(e).def;ee("infoGroup").textContent=Xh.find(o=>o.id===a.group).label,ee("infoName").textContent=a.name,ee("infoSwatch").style.background=Ss[a.mat].swatch,ee("infoMat").textContent=Ss[a.mat].label,ee("infoText").textContent=a.info;let n=ee("infoDims");n.innerHTML="";for(let[o,l]of a.dims){let c=document.createElement("dt");c.textContent=o;let h=document.createElement("dd");h.textContent=l,n.append(c,h)}ee("infoAssembly").textContent=a.assembly,ee("infoSource").textContent=a.source,i.hidden=!1,i.style.animation="none",i.offsetWidth,i.style.animation="",Pp();let s=document.querySelector(`.part-row[data-id="${e}"]`);s&&s.scrollIntoView({block:"nearest",behavior:"smooth"}),t&&cd(e),q.needsRender=2}function Pp(){let e=pt.get(q.selected);if(!e)return;ee("btnHide").textContent=e.visible?"Gizle":"G\xF6ster";let t=q.soloSet&&q.soloSet.size===1&&q.soloSet.has(e.def.id);ee("btnSolo").textContent=t?"\u0130zolasyondan \xE7\u0131k":"\u0130zole et"}function yl(e){let t=pt.get(e);t.visible=!t.visible,t.visible&&q.soloSet&&!q.soloSet.has(e)&&q.soloSet.add(e),Zr()}function Cl(e){q.soloSet&&q.soloSet.size===1&&q.soloSet.has(e)?q.soloSet=null:(q.soloSet=new Set([e]),pt.get(e).visible=!0),Zr()}function iC(e){let t=Ms.filter(r=>r.group===e).map(r=>pt.get(r.id)).filter(Boolean),i=t.some(r=>r.visible);t.forEach(r=>r.visible=!i),Zr()}function rC(e){let t=Ms.filter(r=>r.group===e).map(r=>r.id),i=q.soloSet&&q.soloSet.size===t.length&&t.every(r=>q.soloSet.has(r));q.soloSet=i?null:new Set(t),t.forEach(r=>pt.get(r).visible=!0),Zr()}var td=new Gh;td.firstHitOnly=!1;var xp=new Ce;function sd(e,t){let i=tr.getBoundingClientRect();xp.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),td.setFromCamera(xp,et);let r=[];pt.forEach(s=>{s.mesh.visible&&r.push(s.mesh)});let a=td.intersectObjects(r,!1).filter(s=>!q.clip.on||Jr.distanceToPoint(s.point)>=-1e-5);if(!a.length)return null;let n=a[0];if(pt.get(n.object.userData.partId).def.mat==="glass"){let s=a.find(o=>pt.get(o.object.userData.partId).def.mat!=="glass"&&o.distance-n.distance<.12);if(s)return s.object.userData.partId}return n.object.userData.partId}var qt={x:0,y:0,down:null,moved:!1,pending:!1};tr.addEventListener("pointermove",e=>{qt.x=e.clientX,qt.y=e.clientY,qt.down&&Math.hypot(e.clientX-qt.down.x,e.clientY-qt.down.y)>4&&(qt.moved=!0),e.pointerType==="mouse"&&(qt.pending=!0)});tr.addEventListener("pointerleave",()=>Il(null));tr.addEventListener("pointerdown",e=>{qt.down={x:e.clientX,y:e.clientY},qt.moved=!1,ee("viewsPop").hidden=!0,ee("btnViews").setAttribute("aria-pressed","false")});tr.addEventListener("pointerup",e=>{if(qt.down&&!qt.moved&&e.button===0){let t=sd(e.clientX,e.clientY);Dr(t)}qt.down=null});tr.addEventListener("dblclick",e=>{let t=sd(e.clientX,e.clientY);t?Dr(t,{focus:!0}):Ca("persp")});function Il(e){if(q.hovered===e)return;q.hovered=e,tr.classList.toggle("hovering",!!e),document.querySelectorAll(".part-row").forEach(i=>i.classList.toggle("hover",i.dataset.id===e));let t=ee("tooltip");if(e){let i=pt.get(e).def;t.innerHTML="",t.append(i.name);let r=document.createElement("small");r.textContent=Ss[i.mat].label,t.append(r),t.hidden=!1}else t.hidden=!0;q.needsRender=Math.max(q.needsRender,1)}function aC(){if(!qt.pending||(qt.pending=!1,qt.down))return;let e=sd(qt.x,qt.y);Il(e);let t=ee("tooltip");e&&(t.style.left=qt.x+"px",t.style.top=qt.y+"px")}var yp={x:new D(1,0,0),y:new D(0,-1,0),z:new D(0,0,-1)},ei,Ps=0,Cp=!1;function id(e){Cp!==e&&(Cp=e,pt.forEach(t=>{t.mat.clippingPlanes=e?qy:null}))}function $i(){let e=q.clip;if(id(e.on),!e.on)Jr.set(yp.x,1e6),Rr.uClipOn.value=0;else{let i=yp[e.axis].clone().multiplyScalar(e.flip?-1:1),r=new D;r[e.axis]=e.pos*ur,Jr.setFromNormalAndCoplanarPoint(i,r),Rr.uClipOn.value=1}Rr.uClip.value.set(Jr.normal.x,Jr.normal.y,Jr.normal.z,Jr.constant);let t=ed[e.axis];if(ee("clipVal").textContent=`${e.axis==="x"?"X":e.axis==="y"?"Y":"Z"} = ${Math.round(e.pos)} mm`,ee("clipPos").value=Math.round((e.pos-t[0])/(t[1]-t[0])*1e3),Fs(ee("clipPos")),!ei){let i=new Xr(1,1);ei=new xi;let r=new mt(i,new Fi({color:6080767,transparent:!0,opacity:.07,side:Nt,depthWrite:!1,toneMapped:!1})),a=new xa(new Nh(i),new yn({color:6080767,transparent:!0,opacity:.8,toneMapped:!1}));ei.add(r,a),ei.renderOrder=5,er.add(ei)}if(e.on){let i=ed,r=14,a={x:[i.z[1]-i.z[0]+r,i.y[1]+r],y:[i.x[1]-i.x[0]+r,i.z[1]-i.z[0]+r],z:[i.x[1]-i.x[0]+r,i.y[1]+r]}[e.axis];ei.scale.set(a[0]*ur,a[1]*ur,1),ei.position.set(0,.1,(i.z[0]+i.z[1])/2*ur),ei.position[e.axis]=e.pos*ur,ei.rotation.set(0,0,0),e.axis==="x"&&(ei.rotation.y=Math.PI/2),e.axis==="y"&&(ei.rotation.x=-Math.PI/2),Ps=1.6}ei.visible=e.on&&Ps>0,q.needsRender=2}function Fs(e){e.style.setProperty("--fill",e.value/e.max*100+"%")}var Ts,rd=[];function nC(){Ts=new xi,Ts.visible=!1,er.add(Ts);let e=-.1508,t=(c,h)=>new D(e,h*ur,(c-52.25)*ur),i=new yn({color:8377962,transparent:!0,opacity:.95,toneMapped:!1,depthTest:!0}),r=[],a=1.6;function n(c,h,u,d,A,m){r.push(t(c,u),t(h,u)),r.push(t(c,d),t(c,u+a),t(h,A),t(h,u+a)),r.push(t(c-1,u-1),t(c+1,u+1),t(h-1,u-1),t(h+1,u+1)),o(t((c+h)/2,u),m)}function s(c,h,u,d,A,m){r.push(t(c,h),t(c,u)),r.push(t(d,h),t(c+a,h),t(A,u),t(c+a,u)),r.push(t(c-1,h-1),t(c+1,h+1),t(c-1,u-1),t(c+1,u+1)),o(t(c,(h+u)/2),m)}function o(c,h){let u=document.createElement("div");u.className="dim-label",u.textContent=h,ee("dimLabels").appendChild(u),rd.push({pos:c,el:u})}n(0,104.5,162,124,124,"104,5"),n(19.5,104.5,150,124,124,"85"),n(0,85,-12,0,0,"85"),n(39,71,206,200,200,"32"),s(-14,0,124,0,19.5,"124"),s(-6,0,74,0,0,"74"),s(114,40,124,104.5,104.5,"84"),s(114,0,40,85,104.5,"40"),s(124,0,124,104.5,104.5,"124");let l=new zt().setFromPoints(r);Ts.add(new xa(l,i));for(let[c,h]of[[39,43],[53,57],[67,71]])o(t((c+h)/2,214),"4");rd.forEach(c=>c.el.style.opacity=0)}var xl=new D;function sC(){let e=q.dims&&q.explode<.02;Ts.visible=e;let t=tr.clientWidth,i=tr.clientHeight,r=new D;et.getWorldDirection(r);let a=r.x>.15;for(let n of rd){if(!e||!a){n.el.style.opacity=0;continue}if(xl.copy(n.pos).project(et),xl.z>1){n.el.style.opacity=0;continue}n.el.style.opacity=1,n.el.style.left=(xl.x+1)/2*t+"px",n.el.style.top=(1-xl.y)/2*i+"px"}}var Lp={persp:{dir:[-1.18,.58,.9],r:.138,target:[.004,.092,0]},end:{dir:[-1,.06,.03],r:.104,target:[-.15,.1,0],fov:12},dims:{dir:[-1,.04,.02],r:.132,target:[-.15,.1,0],fov:12},interior:{dir:[.08,.18,1],r:.165,target:[0,.094,0]},exterior:{dir:[-.12,.2,-1],r:.165,target:[0,.094,0]},top:{dir:[.001,1,.12],r:.158,target:[0,.09,0]},bottom:{dir:[-.25,-.9,.45],r:.16,target:[0,.07,0]}};function Fp(){let e=window.innerWidth,t=window.innerHeight,i=e<820,r=!i&&!ee("partsPanel").classList.contains("collapsed")?332:0,a=!i&&(!ee("infoPanel").hidden||!ee("sectionPop").hidden)?380:0,n=i?70:84,s=i?170:100;return{x0:r,x1:e-a,y0:n,y1:t-s,W:e,H:t}}function Ns(e,t=et.fov){let i=Fp(),r=Ea.degToRad(t),a=Math.tan(r/2),n=2*Math.atan(a*(i.y1-i.y0)/i.H),s=2*Math.atan(a*et.aspect*(i.x1-i.x0)/i.W);return e/Math.sin(Math.min(n,s)/2)}var Yt={x:0,y:0,tx:0,ty:0};function Np(){let e=Fp();Yt.tx=(e.x0+e.x1)/2-e.W/2,Yt.ty=(e.y0+e.y1)/2-e.H/2}function oC(e){Np();let t=1-Math.exp(-e*10),i=Yt.tx-Yt.x,r=Yt.ty-Yt.y;return Math.abs(i)<.2&&Math.abs(r)<.2&&et.view?!1:(Yt.x+=i*t,Yt.y+=r*t,et.setViewOffset(window.innerWidth,window.innerHeight,-Yt.x,-Yt.y,window.innerWidth,window.innerHeight),!0)}var Up=30;function Ca(e,t=!1){let i=Lp[e],r=i.fov||Up,a=new D(...i.target),n=et.aspect<1?1.2:1,s=new D(...i.dir).normalize().multiplyScalar(Ns(i.r*n*(1+.7*q.explode),r)).add(a);ld(s,a,t?0:950,r)}function od(e){et.fov=e,et.updateProjectionMatrix()}function ld(e,t,i,r=et.fov){if(!i){od(r),et.position.copy(e),Xe.target.copy(t),Xe.update(),q.camAnim=null,q.needsRender=2;return}q.camAnim={p0:et.position.clone(),t0:Xe.target.clone(),p1:e,t1:t,start:performance.now(),dur:i,f0:et.fov,f1:r}}function lC(e){let t=q.camAnim;if(!t)return!1;let i=wp(Bn((e-t.start)/t.dur));t.f0!==t.f1&&od(Ea.lerp(t.f0,t.f1,i));let r=t.t0.clone().lerp(t.t1,i),a=t.p0.clone().sub(t.t0),n=t.p1.clone().sub(t.t1),s=Ea.lerp(a.length(),n.length(),i),o=a.normalize().lerp(n.normalize(),i);return o.lengthSq()<1e-6&&o.set(0,1,0),et.position.copy(r).add(o.normalize().multiplyScalar(s)),Xe.target.copy(r),Xe.update(),i>=1&&(q.camAnim=null),!0}function cd(e){let t=pt.get(e),r=new dt().setFromObject(t.mesh).getBoundingSphere(new Ot),a=et.position.clone().sub(Xe.target).normalize(),n=Math.max(.1,Ns(r.radius*1.15));ld(r.center.clone().add(a.multiplyScalar(n)),r.center.clone(),850)}function cC(){let e=Lp.persp,t=new D(...e.target);od(Up);let i=Ns(e.r*(et.aspect<1?1.2:1)),r=new D(...e.dir).normalize().multiplyScalar(i).add(t),a=new D(-.35,.28,1.05).normalize().multiplyScalar(i*1.35).add(t);et.position.copy(a),Xe.target.copy(t),Xe.update(),ld(r,t,1900)}var Sl={eye:'<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',eyeOff:'<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.6A10 10 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.2 3.9M6.2 6.9C3.9 8.5 2.5 12 2.5 12S6 18.5 12 18.5c1.4 0 2.7-.3 3.8-.9"/><path d="M9.9 9.9a2.8 2.8 0 0 0 4.2 4.2"/></svg>',solo:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>'};function hC(){let e=ee("partsList");e.innerHTML="";for(let a of Xh){let n=document.createElement("div");n.className="parts-group";let s=document.createElement("div");s.className="group-head";let o=document.createElement("span");o.textContent=a.label;let l=document.createElement("span"),c=document.createElement("button");c.textContent="g\xF6ster/gizle",c.title="Grubu g\xF6ster / gizle",c.onclick=()=>iC(a.id);let h=document.createElement("button");h.textContent="izole",h.title="Yaln\u0131zca bu grubu g\xF6ster",h.onclick=()=>rC(a.id),l.append(c,h),s.append(o,l),n.append(s);for(let u of Ms.filter(d=>d.group===a.id)){if(!pt.has(u.id))continue;let d=document.createElement("div");d.className="part-row",d.dataset.id=u.id,d.tabIndex=0,d.setAttribute("role","button");let A=document.createElement("span");A.className="swatch",A.style.background=Ss[u.mat].swatch;let m=document.createElement("span");m.className="part-name",m.textContent=u.name;let g=document.createElement("button");g.className="row-btn vis on",g.title="G\xF6ster / gizle",g.innerHTML=Sl.eye,g.setAttribute("aria-label",u.name+" g\xF6ster/gizle");let f=document.createElement("button");f.className="row-btn solo",f.title="\u0130zole et (yaln\u0131zca bunu g\xF6ster)",f.innerHTML=Sl.solo,f.setAttribute("aria-label",u.name+" izole et"),g.onclick=p=>{p.stopPropagation(),yl(u.id)},f.onclick=p=>{p.stopPropagation(),Cl(u.id)},d.onclick=()=>Dr(q.selected===u.id?null:u.id),d.ondblclick=()=>Dr(u.id,{focus:!0}),d.onkeydown=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),Dr(u.id))},d.onmouseenter=()=>{pt.get(u.id).mesh.visible&&Il(u.id),ee("tooltip").hidden=!0},d.onmouseleave=()=>Il(null),d.append(A,m,g,f),n.append(d)}e.append(n)}ee("btnShowAll").onclick=()=>{pt.forEach(a=>a.visible=!0),q.soloSet=null,Zr()},ee("btnUnsolo").onclick=()=>{q.soloSet=null,Zr()},ee("btnPartsCollapse").onclick=()=>{ee("partsPanel").classList.add("collapsed"),ee("btnPartsOpen").hidden=!1},ee("btnPartsOpen").onclick=()=>{ee("partsPanel").classList.remove("collapsed"),ee("btnPartsOpen").hidden=!0},ee("btnPartsOpen").hidden=!0,window.innerWidth<820&&(ee("partsPanel").classList.add("collapsed"),ee("btnPartsOpen").hidden=!1),ee("btnInfoClose").onclick=()=>Dr(null),ee("btnFocus").onclick=()=>q.selected&&cd(q.selected),ee("btnSolo").onclick=()=>q.selected&&Cl(q.selected),ee("btnHide").onclick=()=>q.selected&&yl(q.selected);let t=ee("explode");t.addEventListener("input",()=>{Ds(t.value/1e3,!1),Fs(t)}),ee("btnExplodePlay").onclick=()=>Ds(q.explodeTarget>.5||q.explode>.5?0:1,!0),ee("btnSection").onclick=()=>{let a=ee("sectionPop"),n=a.hidden;Ls(),q.clip.on?n||(q.clip.on=!1,$i()):(q.clip.on=!0,$i()),a.hidden=!n||!q.clip.on,document.body.classList.toggle("sec-open",!a.hidden),ee("btnSection").setAttribute("aria-pressed",String(q.clip.on))},document.querySelectorAll(".seg-btn").forEach(a=>a.onclick=()=>{document.querySelectorAll(".seg-btn").forEach(s=>{s.classList.toggle("active",s===a),s.setAttribute("aria-checked",String(s===a))});let n=a.dataset.axis;q.clip.axis=n,q.clip.flip=!1,q.clip.pos=n==="x"?-74:n==="y"?60:-8,$i()});let i=ee("clipPos");i.addEventListener("input",()=>{let a=ed[q.clip.axis];q.clip.pos=a[0]+i.value/1e3*(a[1]-a[0]),$i()}),ee("btnClipFlip").onclick=()=>{q.clip.flip=!q.clip.flip,$i()};let r=ee("clipPresets");for(let a of bp){let n=document.createElement("button");n.className="btn small",n.textContent=a.label,n.onclick=()=>{q.clip.axis=a.axis,q.clip.pos=a.pos,q.clip.flip=!1,document.querySelectorAll(".seg-btn").forEach(s=>s.classList.toggle("active",s.dataset.axis===a.axis)),$i(),a.axis==="x"&&Ca("end")},r.append(n)}ee("btnDims").onclick=()=>{q.dims=!q.dims,ee("btnDims").setAttribute("aria-pressed",String(q.dims)),q.dims&&(Ds(0,!0),Ca("dims")),q.needsRender=2},ee("btnViews").onclick=()=>{let a=ee("viewsPop"),n=a.hidden;Ls(),a.hidden=!n,ee("btnViews").setAttribute("aria-pressed",String(n))},document.querySelectorAll("[data-view]").forEach(a=>a.onclick=()=>{Ca(a.dataset.view),Ls()}),ee("btnRotate").onclick=()=>{q.rotate=!q.rotate,Xe.autoRotate=q.rotate,ee("btnRotate").setAttribute("aria-pressed",String(q.rotate))},ee("btnReset").onclick=kp,ee("btnHelp").onclick=()=>ee("helpModal").hidden=!1,ee("btnFull").onclick=()=>{var a,n,s;document.fullscreenElement?(s=document.exitFullscreen)==null||s.call(document):(n=(a=document.documentElement).requestFullscreen)==null||n.call(a)},ee("perfChip").onclick=()=>{Qp(),ee("perfModal").hidden=!1},ee("btnBench").onclick=Op,document.querySelectorAll(".modal").forEach(a=>a.addEventListener("click",n=>{(n.target===a||n.target.closest("[data-close]"))&&(a.hidden=!0)})),window.addEventListener("keydown",dC),$i(),Fs(t)}function Ls(){ee("sectionPop").hidden=!0,ee("viewsPop").hidden=!0,document.body.classList.remove("sec-open"),ee("btnViews").setAttribute("aria-pressed","false")}function kp(){pt.forEach(e=>e.visible=!0),q.soloSet=null,Zr(),Dr(null),q.clip.on=!1,$i(),ee("btnSection").setAttribute("aria-pressed","false"),Ds(0,!0),ee("explode").value=0,Fs(ee("explode")),Ls(),Ca("persp")}function dC(e){if(e.target.tagName==="INPUT"&&e.key!=="Escape")return;let t=e.key.toLowerCase();if(t==="escape"){if(!ee("helpModal").hidden||!ee("perfModal").hidden){ee("helpModal").hidden=!0,ee("perfModal").hidden=!0;return}Ls(),q.selected?Dr(null):q.soloSet&&(q.soloSet=null,Zr())}else t==="h"&&q.selected?yl(q.selected):t==="i"&&q.selected?Cl(q.selected):t==="f"&&q.selected?cd(q.selected):t==="e"?ee("btnExplodePlay").click():t==="c"?ee("btnSection").click():t==="d"?ee("btnDims").click():t==="r"?kp():t==="?"&&(ee("helpModal").hidden=!1)}var qe={frames:[],lastRender:0,gpuExt:null,gpuQueries:[],gpuMs:[],adaptive:!0};qe.gpuExt=ct.getContext().getExtension("EXT_disjoint_timer_query_webgl2");function uC(e){let t=e-qe.lastRender;qe.lastRender=e,t>0&&t<250&&(qe.frames.push(t),qe.frames.length>240&&qe.frames.shift())}function hd(e=qe.frames){if(!e.length)return null;let t=[...e].sort((a,n)=>a-n),i=e.reduce((a,n)=>a+n,0)/e.length,r=t[Math.min(t.length-1,Math.floor(t.length*.99))];return{fps:1e3/i,avgMs:i,low1:1e3/r,n:e.length}}var Ip=0;function Sp(e,t){if(e-Ip<400)return;Ip=e;let i=qe.frames.slice(-60),r=t&&i.length>10?hd(i):null;if(r&&qe.gpuMs.length){let n=qe.gpuMs.slice(-10).reduce((s,o)=>s+o,0)/Math.min(10,qe.gpuMs.length);n>r.avgMs&&(r.avgMs=n,r.fps=1e3/n)}let a=ee("perfDot");r?(ee("perfFps").textContent=`${Math.round(r.fps)} FPS`,ee("perfMs").textContent=`${r.avgMs.toFixed(1)} ms`,a.className="dot "+(r.fps>=50?"live":"slow")):a.className="dot",ee("perfCalls").textContent=`${$r.calls} \xE7a\u011Fr\u0131`,ee("perfTris").textContent=`${Rp($r.tris)} \xFC\xE7gen`,qe.adaptive&&r&&i.length>=60&&r.fps<45&&Ar>1&&(Ar=Math.max(1,Ar-.25),ct.setPixelRatio(Ar),qe.frames.length=0)}var $r={calls:0,tris:0};function Qp(e){let t=e||hd(),i=ct.getContext(),r=i.getExtension("WEBGL_debug_renderer_info"),a=r?i.getParameter(r.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),n=[["Ortalama FPS",t?Math.round(t.fps):"\u2014"],["%1 d\xFC\u015F\xFCk FPS",t?Math.round(t.low1):"\u2014"],["Ortalama kare s\xFCresi",t?t.avgMs.toFixed(2)+" ms":"\u2014"],["GPU s\xFCresi (\xF6l\xE7\xFClebiliyorsa)",qe.gpuMs.length?(qe.gpuMs.reduce((o,l)=>o+l,0)/qe.gpuMs.length).toFixed(2)+" ms":"desteklenmiyor"],["\xC7izim \xE7a\u011Fr\u0131s\u0131 / kare",$r.calls],["\xDC\xE7gen / kare",$r.tris.toLocaleString("tr-TR")],["Piksel oran\u0131",Ar.toFixed(2)+(Ar<ad?" (uyarland\u0131)":"")],["\xC7\xF6z\xFCn\xFCrl\xFCk",`${ct.domElement.width} \xD7 ${ct.domElement.height}`],["Grafik birimi",a]],s=ee("perfStats");s.innerHTML="";for(let[o,l]of n){let c=document.createElement("dt");c.textContent=o;let h=document.createElement("dd");h.textContent=l,s.append(c,h)}}var ti=null;function Op(){if(ti)return;ee("btnBench").disabled=!0,ee("btnBench").textContent="\xD6l\xE7\xFCl\xFCyor\u2026",ee("perfModal").hidden=!0,qe.adaptive=!1;let e={explode:q.explode,clip:{...q.clip},rotate:Xe.autoRotate};return ti={t0:performance.now(),dur:6e3,frames:[],last:0,saved:e},Xe.autoRotate=!0,Xe.autoRotateSpeed=6,q.clip.on=!0,q.clip.axis="x",new Promise(t=>ti.resolve=t)}function AC(e){var i;if(!ti)return!1;let t=(e-ti.t0)/ti.dur;if(ti.last&&ti.frames.push(e-ti.last),ti.last=e,q.explodeAnim=null,q.explodeTarget=q.explode=.5-.5*Math.cos(t*Math.PI*2),q.clip.pos=-150+300*(.5-.5*Math.cos(t*Math.PI*3)),$i(),t>=1){let r=hd(ti.frames.slice(Math.min(5,Math.floor(ti.frames.length/4)))),a=ti;ti=null,Xe.autoRotate=a.saved.rotate,Xe.autoRotateSpeed=.9,Object.assign(q.clip,a.saved.clip),$i(),q.explodeTarget=q.explode=a.saved.explode,qe.adaptive=!0;let n=qe.gpuMs.length?qe.gpuMs.reduce((s,o)=>s+o,0)/qe.gpuMs.length:null;window.__benchResult={...r,calls:$r.calls,tris:$r.tris,dpr:Ar,width:ct.domElement.width,height:ct.domElement.height,gpuMs:n,gpuBoundFps:n?Math.min(r?r.fps:1/0,1e3/n):null},ee("btnBench").disabled=!1,ee("btnBench").textContent="Performans testini tekrarla",Qp(r),ee("perfModal").hidden=!1,ee("perfNote").textContent=r?`Son test: ${r.n} kare, ortalama ${r.fps.toFixed(1)} FPS, %1 d\xFC\u015F\xFCk ${r.low1.toFixed(1)} FPS.`:"Test s\xFCresince yeterli kare \xE7izilemedi (cihaz \xE7ok yava\u015F).",(i=a.resolve)==null||i.call(a,window.__benchResult)}return!0}window.__viewer={runBenchmark:Op,select:Dr,setView:Ca,parts:pt,state:q,setExplodeTarget:Ds,toggleSolo:Cl,toggleVisible:yl,updateClip:$i,renderer:ct,camera:et};var Mp=performance.now(),Gp={start(){requestAnimationFrame(this.tick)},tick:e=>{requestAnimationFrame(Gp.tick);let t=Math.min(.5,(e-Mp)/1e3);Mp=e;let i=!1;if(aC(),oC(t)&&(i=!0),lC(e)&&(i=!0),AC(e)&&(i=!0),q.explodeAnim){let s=q.explodeAnim,o=Bn((e-s.t0)/s.dur);q.explode=s.from+(s.to-s.from)*(o<.5?2*o*o:1-Math.pow(-2*o+2,2)/2),q.explodeTarget=q.explode,ee("explode").value=Math.round(q.explode*1e3),Fs(ee("explode")),o>=1&&(q.explodeAnim=null),Zh(),!q.camAnim&&!ti&&vp(),i=!0,Qi.idle=0}else Math.abs(q.explodeTarget-q.explode)>1e-4?(q.explode+=(q.explodeTarget-q.explode)*(1-Math.exp(-t*14)),Math.abs(q.explodeTarget-q.explode)<1e-4&&(q.explode=q.explodeTarget),Zh(),!q.camAnim&&!ti&&vp(),i=!0,Qi.idle=0):(ti&&Zh(),Qi.active&&(Qi.idle+=t)>.4&&(Qi.active=!1));ee("explodeVal").textContent=Math.round(q.explode*100)+"%";let r=Math.max(Dp,Bn(q.explode*2.2));if(Math.abs(Rr.uAoMix.value-r)>.001&&(Rr.uAoMix.value+=(r-Rr.uAoMix.value)*(1-Math.exp(-t*8)),i=!0),pt.forEach(s=>{let o=s.def.id===q.selected?1:s.def.id===q.hovered?.55:0;Math.abs(s.hi-o)>.001?(s.hi+=(o-s.hi)*(1-Math.exp(-t*16)),i=!0):s.hi=o,s.mat.userData.u.uHi.value=s.hi}),ei&&ei.visible){Ps-=t;let s=Bn(Ps);ei.children[0].material.opacity=.07*s,ei.children[1].material.opacity=.8*s,Ps<=0&&(ei.visible=!1),i=!0}if(Xe.autoRotate&&(i=!0),Xe.update()&&(i=!0),!i&&q.needsRender<=0){Sp(e,!1);return}q.needsRender>0&&q.needsRender--,q.shadowDirty&&Rs&&(Rs.update(er,nd),q.shadowDirty=!1),sC();let a=null,n=ct.getContext();qe.gpuExt&&qe.gpuQueries.length<3&&(a=n.createQuery(),n.beginQuery(qe.gpuExt.TIME_ELAPSED_EXT,a)),ct.render(er,et),a&&(n.endQuery(qe.gpuExt.TIME_ELAPSED_EXT),qe.gpuQueries.push(a)),pC(n),$r.calls=ct.info.render.calls,$r.tris=ct.info.render.triangles,uC(e),Sp(e,!0)}};function pC(e){if(qe.gpuExt)for(;qe.gpuQueries.length;){let t=qe.gpuQueries[0];if(!e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE))break;e.getParameter(qe.gpuExt.GPU_DISJOINT_EXT)||(qe.gpuMs.push(e.getQueryParameter(t,e.QUERY_RESULT)/1e6),qe.gpuMs.length>120&&qe.gpuMs.shift()),e.deleteQuery(t),qe.gpuQueries.shift()}}window.addEventListener("resize",()=>{et.aspect=window.innerWidth/window.innerHeight,et.setViewOffset(window.innerWidth,window.innerHeight,-Yt.x,-Yt.y,window.innerWidth,window.innerHeight),et.updateProjectionMatrix(),Ar=ad,ct.setPixelRatio(Ar),ct.setSize(window.innerWidth,window.innerHeight,!1),q.needsRender=2});document.addEventListener("visibilitychange",()=>{qe.frames.length=0});Yy().catch(e=>{console.error(e),ee("loaderText").textContent="Y\xFCkleme hatas\u0131: "+(e&&e.message?e.message:e),ee("loaderText").style.color="#ff8a80",location.protocol==="file:"&&(ee("loaderText").textContent+=' \u2014 Bu taray\u0131c\u0131 dosyay\u0131 do\u011Frudan a\xE7maya izin vermiyorsa klas\xF6rdeki "ba\u015Flat" dosyas\u0131n\u0131 kullan\u0131n.')});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
