import{I as Jc}from"./DJgzI1fH.js";const As="186",Dl=0,ya=1,Il=2,Vi=1,Ul=2,_i=3,Bn=0,Rt=1,Ot=2,mn=0,xi=1,Ea=2,ba=3,Ta=4,Nl=5,Zn=100,Fl=101,Ol=102,Bl=103,zl=104,Hl=200,Gl=201,Vl=202,kl=203,Ia=204,Ua=205,Wl=206,Xl=207,Yl=208,ql=209,Zl=210,Kl=211,$l=212,Jl=213,Ql=214,zr=0,Hr=1,Gr=2,Mi=3,Vr=4,kr=5,Wr=6,Xr=7,Na=0,jl=1,ec=2,sn=0,Fa=1,Oa=2,Ba=3,ws=4,za=5,Ha=6,Ga=7,Va=300,zn=301,$n=302,Ir=303,Ur=304,sr=306,Ki=1e3,tn=1001,Yr=1002,yt=1003,tc=1004,zi=1005,gt=1006,Nr=1007,Fn=1008,Bt=1009,ka=1010,Wa=1011,yi=1012,Rs=1013,on=1014,nn=1015,ln=1016,Cs=1017,Ps=1018,Ei=1020,Xa=35902,Ya=35899,qa=1021,Za=1022,kt=1023,gn=1026,On=1027,Ka=1028,Ls=1029,Hn=1030,Ds=1031,Is=1033,ki=33776,Wi=33777,Xi=33778,Yi=33779,qr=35840,Zr=35841,Kr=35842,$r=35843,Jr=36196,Qr=37492,jr=37496,es=37488,ts=37489,$i=37490,ns=37491,is=37808,rs=37809,ss=37810,as=37811,os=37812,ls=37813,cs=37814,hs=37815,us=37816,ds=37817,fs=37818,ps=37819,ms=37820,gs=37821,_s=36492,vs=36494,xs=36495,Ss=36283,Ms=36284,Ji=36285,ys=36286,nc=3200,Aa=0,ic=1,En="",Mt="srgb",Qi="srgb-linear",ji="linear",Ke="srgb",Fr=7680,rc=519,sc=512,ac=513,oc=514,Us=515,lc=516,cc=517,Ns=518,hc=519,$a=35044,wa="300 es",rn=2e3,er=2001;function Qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uc(){const i=Es("canvas");return i.style.display="block",i}const wo={};function tr(...i){const e="THREE."+i.shift();console.log(e,...i)}function dc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=dc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=dc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kn(...i){const e=i.join(" ");e in wo||(wo[e]=!0,Re(...i))}function jc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const eh={[zr]:Hr,[Gr]:Wr,[Vr]:Xr,[Mi]:kr,[Hr]:zr,[Wr]:Gr,[Xr]:Vr,[kr]:Mi};class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ro=1234567;const qi=Math.PI/180,nr=180/Math.PI;function bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Ja(i,e){return(i%e+e)%e}function th(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nh(i,e,t){return i!==e?(t-i)/(e-i):0}function Zi(i,e,t){return(1-t)*i+t*e}function ih(i,e,t,n){return Zi(i,e,1-Math.exp(-t*n))}function rh(i,e=1){return e-Math.abs(Ja(i,e*2)-e)}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ah(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function oh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lh(i,e){return i+Math.random()*(e-i)}function ch(i){return i*(.5-Math.random())}function hh(i){i!==void 0&&(Ro=i);let e=Ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uh(i){return i*qi}function dh(i){return i*nr}function fh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ph(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),u=s((e-n)/2),h=a((e-n)/2),m=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*f,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*f,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*f,o*c);break;case"XZX":i.set(o*f,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*f,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*f,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mt={DEG2RAD:qi,RAD2DEG:nr,generateUUID:bn,clamp:He,euclideanModulo:Ja,mapLinear:th,inverseLerp:nh,lerp:Zi,damp:ih,pingpong:rh,smoothstep:sh,smootherstep:ah,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:uh,radToDeg:dh,isPowerOfTwo:fh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:Qe,denormalize:en},uo=class uo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uo.prototype.isVector2=!0;let Ue=uo;class qt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3],h=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(u!==M||l!==h||c!==m||f!==v){let p=l*h+c*m+f*v+u*M;p<0&&(h=-h,m=-m,v=-v,M=-M,p=-p);let d=1-o;if(p<.9995){const b=Math.acos(p),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,l=l*d+h*o,c=c*d+m*o,f=f*d+v*o,u=u*d+M*o}else{l=l*d+h*o,c=c*d+m*o,f=f*d+v*o,u=u*d+M*o;const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+f*u+l*m-c*h,e[t+1]=l*v+f*h+c*u-o*m,e[t+2]=c*v+f*m+o*h-l*u,e[t+3]=f*v-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(r/2),u=o(s/2),h=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*m*v,this._y=c*m*u-h*f*v,this._z=c*f*v+h*m*u,this._w=c*f*u-h*m*v;break;case"YXZ":this._x=h*f*u+c*m*v,this._y=c*m*u-h*f*v,this._z=c*f*v-h*m*u,this._w=c*f*u+h*m*v;break;case"ZXY":this._x=h*f*u-c*m*v,this._y=c*m*u+h*f*v,this._z=c*f*v+h*m*u,this._w=c*f*u-h*m*v;break;case"ZYX":this._x=h*f*u-c*m*v,this._y=c*m*u+h*f*v,this._z=c*f*v-h*m*u,this._w=c*f*u+h*m*v;break;case"YZX":this._x=h*f*u+c*m*v,this._y=c*m*u+h*f*v,this._z=c*f*v-h*m*u,this._w=c*f*u-h*m*v;break;case"XZY":this._x=h*f*u-c*m*v,this._y=c*m*u-h*f*v,this._z=c*f*v+h*m*u,this._w=c*f*u+h*m*v;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-r*o,this._w=a*f-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fo=class fo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*f,this.y=n+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fo.prototype.isVector3=!0;let U=fo;const Ys=new U,Co=new qt,po=class po{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],m=n[5],v=n[8],M=r[0],p=r[3],d=r[6],b=r[1],R=r[4],S=r[7],E=r[2],y=r[5],w=r[8];return s[0]=a*M+o*b+l*E,s[3]=a*p+o*R+l*y,s[6]=a*d+o*S+l*w,s[1]=c*M+f*b+u*E,s[4]=c*p+f*R+u*y,s[7]=c*d+f*S+u*w,s[2]=h*M+m*b+v*E,s[5]=h*p+m*R+v*y,s[8]=h*d+m*S+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*s,m=c*s-a*l,v=t*u+n*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=u*M,e[1]=(r*c-f*n)*M,e[2]=(o*n-r*a)*M,e[3]=h*M,e[4]=(f*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Kn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,t)),this}rotate(e){return Kn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return Kn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};po.prototype.isMatrix3=!0;let Ce=po;const qs=new Ce,Po=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ke&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===En?ji:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:ji,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const ze=_h();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class fc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=Es("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vh=0;class Fs{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zs(r[a].image)):s.push(Zs(r[a]))}else s=Zs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let xh=0;const Ks=new U;class Et extends Gn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=tn,r=tn,s=gt,a=Fn,o=kt,l=Bt,c=Et.DEFAULT_ANISOTROPY,f=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=bn(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Va;Et.DEFAULT_ANISOTROPY=1;const mo=class mo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],m=l[5],v=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(m+1)/2,E=(d+1)/2,y=(f+h)/4,w=(u+M)/4,_=(v+p)/4;return R>S&&R>E?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=y/n,s=w/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=y/r,s=_/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=_/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(u-M)*(u-M)+(h-f)*(h-f));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(u-M)/b,this.z=(h-f)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mo.prototype.isVector4=!0;let ct=mo;class pc extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Et(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qa extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mc extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ts=class Ts{constructor(e,t,n,r,s,a,o,l,c,f,u,h,m,v,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,f,u,h,m,v,M,p)}set(e,t,n,r,s,a,o,l,c,f,u,h,m,v,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ts().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),a=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,m=a*u,v=o*f,M=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,m=l*u,v=c*f,M=c*u;t[0]=h+M*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=m*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,m=l*u,v=c*f,M=c*u;t[0]=h-M*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*f,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,m=a*u,v=o*f,M=o*u;t[0]=l*f,t[4]=v*c-m,t[8]=h*c+M,t[1]=l*u,t[5]=M*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*f,t[4]=M-h*u,t[8]=v*u+m,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*u+v,t[10]=h-M*u}else if(e.order==="XZY"){const h=a*l,m=a*c,v=o*l,M=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+M,t[5]=a*f,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*f,t[10]=M*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sh,e,Mh)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(n,Ut),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(n,Ut)),Pn.normalize(),lr.crossVectors(Ut,Pn),r[0]=Pn.x,r[4]=lr.x,r[8]=Ut.x,r[1]=Pn.y,r[5]=lr.y,r[9]=Ut.y,r[2]=Pn.z,r[6]=lr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],m=n[13],v=n[2],M=n[6],p=n[10],d=n[14],b=n[3],R=n[7],S=n[11],E=n[15],y=r[0],w=r[4],_=r[8],A=r[12],L=r[1],N=r[5],z=r[9],k=r[13],I=r[2],G=r[6],K=r[10],X=r[14],ne=r[3],Y=r[7],j=r[11],te=r[15];return s[0]=a*y+o*L+l*I+c*ne,s[4]=a*w+o*N+l*G+c*Y,s[8]=a*_+o*z+l*K+c*j,s[12]=a*A+o*k+l*X+c*te,s[1]=f*y+u*L+h*I+m*ne,s[5]=f*w+u*N+h*G+m*Y,s[9]=f*_+u*z+h*K+m*j,s[13]=f*A+u*k+h*X+m*te,s[2]=v*y+M*L+p*I+d*ne,s[6]=v*w+M*N+p*G+d*Y,s[10]=v*_+M*z+p*K+d*j,s[14]=v*A+M*k+p*X+d*te,s[3]=b*y+R*L+S*I+E*ne,s[7]=b*w+R*N+S*G+E*Y,s[11]=b*_+R*z+S*K+E*j,s[15]=b*A+R*k+S*X+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],m=e[14],v=e[3],M=e[7],p=e[11],d=e[15],b=l*m-c*h,R=o*m-c*u,S=o*h-l*u,E=a*m-c*f,y=a*h-l*f,w=a*u-o*f;return t*(M*b-p*R+d*S)-n*(v*b-p*E+d*y)+r*(v*R-M*E+d*w)-s*(v*S-M*y+p*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],m=e[11],v=e[12],M=e[13],p=e[14],d=e[15],b=t*o-n*a,R=t*l-r*a,S=t*c-s*a,E=n*l-r*o,y=n*c-s*o,w=r*c-s*l,_=f*M-u*v,A=f*p-h*v,L=f*d-m*v,N=u*p-h*M,z=u*d-m*M,k=h*d-m*p,I=b*k-R*z+S*N+E*L-y*A+w*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*k-l*z+c*N)*G,e[1]=(r*z-n*k-s*N)*G,e[2]=(M*w-p*y+d*E)*G,e[3]=(h*y-u*w-m*E)*G,e[4]=(l*L-a*k-c*A)*G,e[5]=(t*k-r*L+s*A)*G,e[6]=(p*S-v*w-d*R)*G,e[7]=(f*w-h*S+m*R)*G,e[8]=(a*z-o*L+c*_)*G,e[9]=(n*L-t*z-s*_)*G,e[10]=(v*y-M*S+d*b)*G,e[11]=(u*S-f*y-m*b)*G,e[12]=(o*A-a*N-l*_)*G,e[13]=(t*N-n*A+r*_)*G,e[14]=(M*R-v*E-p*b)*G,e[15]=(f*E-u*R+h*b)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+n,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,h=s*c,m=s*f,v=s*u,M=a*f,p=a*u,d=o*u,b=l*c,R=l*f,S=l*u,E=n.x,y=n.y,w=n.z;return r[0]=(1-(M+d))*E,r[1]=(m+S)*E,r[2]=(v-R)*E,r[3]=0,r[4]=(m-S)*y,r[5]=(1-(h+d))*y,r[6]=(p+b)*y,r[7]=0,r[8]=(v+R)*w,r[9]=(p-b)*w,r[10]=(1-(h+M))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),l=ti.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$t.copy(this);const c=1/a,f=1/o,u=1/l;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=f,$t.elements[5]*=f,$t.elements[6]*=f,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=rn,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===rn)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===er)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=rn,l=!1){const c=this.elements,f=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===rn)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===er)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ts.prototype.isMatrix4=!0;let at=Ts;const ti=new U,$t=new at,Sh=new U(0,0,0),Mh=new U(1,1,1),Pn=new U,lr=new U,Ut=new U,Do=new at,Io=new qt;class Xt{constructor(e=0,t=0,n=0,r=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class Os{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yh=0;const Uo=new U,ni=new qt,_n=new at,cr=new U,Pi=new U,Eh=new U,bh=new qt,No=new U(1,0,0),Fo=new U(0,1,0),Oo=new U(0,0,1),Bo={type:"added"},Th={type:"removed"},ii={type:"childadded",child:null},$s={type:"childremoved",child:null};class Ct extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new U,t=new Xt,n=new qt,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ce}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Pi,cr,this.up):_n.lookAt(cr,Pi,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(_n),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bo),ii.child=e,this.dispatchEvent(ii),ii.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Th),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Eh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ah={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ah)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ze.workingColorSpace){if(e=Ja(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Js(a,s,e+1/3),this.g=Js(a,s,e),this.b=Js(a,s,e-1/3)}return ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return ze.workingToColorSpace(wt.copy(this),e),Math.round(He(wt.r*255,0,255))*65536+Math.round(He(wt.g*255,0,255))*256+Math.round(He(wt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Mt){ze.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(hr);const n=Zi(Ln.h,hr.h,t),r=Zi(Ln.s,hr.s,t),s=Zi(Ln.l,hr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Xe;Xe.NAMES=gc;class _c extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jt=new U,vn=new U,Qs=new U,xn=new U,ri=new U,si=new U,zo=new U,js=new U,ea=new U,ta=new U,na=new ct,ia=new ct,ra=new ct;class zt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Jt.subVectors(r,t),vn.subVectors(n,t),Qs.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(vn),l=Jt.dot(Qs),c=vn.dot(vn),f=vn.dot(Qs),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*f)*h,v=(a*f-o*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(na,s.x),a.addScaledVector(ia,s.y),a.addScaledVector(ra,s.z),a}static isFrontFacing(e,t,n,r){return Jt.subVectors(n,t),vn.subVectors(e,t),Jt.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ri.subVectors(r,n),si.subVectors(s,n),js.subVectors(e,n);const l=ri.dot(js),c=si.dot(js);if(l<=0&&c<=0)return t.copy(n);ea.subVectors(e,r);const f=ri.dot(ea),u=si.dot(ea);if(f>=0&&u<=f)return t.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(ri,a);ta.subVectors(e,s);const m=ri.dot(ta),v=si.dot(ta);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(si,o);const p=f*v-m*u;if(p<=0&&u-f>=0&&m-v>=0)return zo.subVectors(s,r),o=(u-f)/(u-f+(m-v)),t.copy(r).addScaledVector(zo,o);const d=1/(p+M+h);return a=M*d,o=h*d,t.copy(n).addScaledVector(ri,a).addScaledVector(si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ai{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),dr.subVectors(this.max,Li),ai.subVectors(e.a,Li),oi.subVectors(e.b,Li),li.subVectors(e.c,Li),Dn.subVectors(oi,ai),In.subVectors(li,oi),kn.subVectors(ai,li);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-kn.z,kn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,kn.z,0,-kn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-kn.y,kn.x,0];return!sa(t,ai,oi,li,dr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ai,oi,li,dr))?!1:(fr.crossVectors(Dn,In),t=[fr.x,fr.y,fr.z],sa(t,ai,oi,li,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new U,new U,new U,new U,new U,new U,new U,new U],Qt=new U,ur=new Ai,ai=new U,oi=new U,li=new U,Dn=new U,In=new U,kn=new U,Li=new U,dr=new U,fr=new U,Wn=new U;function sa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wn.fromArray(i,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),f=n.dot(Wn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const ft=new U,pr=new Ue;let wh=0;class an extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eo extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rh=new Ai,Di=new U,aa=new U;class Bs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Di,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(aa)),this.expandByPoint(Di.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ch=0;const Vt=new at,oa=new Ct,ci=new U,Nt=new Ai,Ii=new Ai,St=new U;class Zt extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?eo:ja)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Nt.min,Ii.min),Nt.expandByPoint(St),St.addVectors(Nt.max,Ii.max),Nt.expandByPoint(St)):(Nt.expandByPoint(Ii.min),Nt.expandByPoint(Ii.max))}Nt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)St.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),St.add(ci)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new U,l[_]=new U;const c=new U,f=new U,u=new U,h=new Ue,m=new Ue,v=new Ue,M=new U,p=new U;function d(_,A,L){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),h.fromBufferAttribute(s,_),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,L),f.sub(c),u.sub(c),m.sub(h),v.sub(h);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(N),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(N),o[_].add(M),o[A].add(M),o[L].add(M),l[_].add(p),l[A].add(p),l[L].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,A=b.length;_<A;++_){const L=b[_],N=L.start,z=L.count;for(let k=N,I=N+z;k<I;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const R=new U,S=new U,E=new U,y=new U;function w(_){E.fromBufferAttribute(r,_),y.copy(E);const A=o[_];R.copy(A),R.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(y,A);const N=S.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,N)}for(let _=0,A=b.length;_<A;++_){const L=b[_],N=L.start,z=L.count;for(let k=N,I=N+z;k<I;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,f=new U,u=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),M=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(f),l.add(f),c.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*f;for(let d=0;d<f;d++)h[v++]=c[m++]}return new an(h,f,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Lt=new U;class ir{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const la=new U,Ph=new U,Lh=new Ce;class yn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=la.subVectors(n,t).cross(Ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(la),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lh.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dh=0;class wi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=xi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class to extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hi;const Ui=new U,ui=new U,di=new U,fi=new Ue,Ni=new Ue,xc=new at,mr=new U,Fi=new U,gr=new U,Ho=new Ue,ca=new Ue,Go=new Ue;class bs extends Ct{constructor(e=new to){if(super(),this.isSprite=!0,this.type="Sprite",hi===void 0){hi=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vc(t,5);hi.setIndex([0,1,2,0,2,3]),hi.setAttribute("position",new ir(n,3,0,!1)),hi.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=hi,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ui.setFromMatrixScale(this.matrixWorld),xc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ui.multiplyScalar(-di.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;_r(mr.set(-.5,-.5,0),di,a,ui,r,s),_r(Fi.set(.5,-.5,0),di,a,ui,r,s),_r(gr.set(.5,.5,0),di,a,ui,r,s),Ho.set(0,0),ca.set(1,0),Go.set(1,1);let o=e.ray.intersectTriangle(mr,Fi,gr,!1,Ui);if(o===null&&(_r(Fi.set(-.5,.5,0),di,a,ui,r,s),ca.set(0,1),o=e.ray.intersectTriangle(mr,gr,Fi,!1,Ui),o===null))return;const l=e.ray.origin.distanceTo(Ui);l<e.near||l>e.far||t.push({distance:l,point:Ui.clone(),uv:zt.getInterpolation(Ui,mr,Fi,gr,Ho,ca,Go,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _r(i,e,t,n,r,s){fi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ni.x=s*fi.x-r*fi.y,Ni.y=r*fi.x+s*fi.y):Ni.copy(fi),i.copy(e),i.x+=Ni.x,i.y+=Ni.y,i.applyMatrix4(xc)}const Mn=new U,ha=new U,vr=new U,xr=new U;class no{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=xr.dot(this.direction),l=-xr.dot(vr),c=xr.lengthSq(),f=Math.abs(1-a*a);let u,h,m,v;if(f>0)if(u=a*l-o,h=a*o-l,v=s*f,u>=0)if(h>=-v)if(h<=v){const M=1/f;u*=M,h*=M,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-v?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=v?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ha).addScaledVector(vr,h),m}intersectSphere(e,t){if(e.radius<0)return null;Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,u=e.x-a.x,h=e.y-a.y,m=e.z-a.z,v=t.x-a.x,M=t.y-a.y,p=t.z-a.z,d=n.x-a.x,b=n.y-a.y,R=n.z-a.z,S=Math.abs(l),E=Math.abs(c),y=Math.abs(f);let w,_,A,L,N,z,k,I,G,K,X,ne;if(S>=E&&S>=y?(A=l,z=u,G=v,ne=d,l>=0?(w=c,_=f,L=h,N=m,k=M,I=p,K=b,X=R):(w=f,_=c,L=m,N=h,k=p,I=M,K=R,X=b)):E>=y?(A=c,z=h,G=M,ne=b,c>=0?(w=f,_=l,L=m,N=u,k=p,I=v,K=R,X=d):(w=l,_=f,L=u,N=m,k=v,I=p,K=d,X=R)):(A=f,z=m,G=p,ne=R,f>=0?(w=l,_=c,L=u,N=h,k=v,I=M,K=d,X=b):(w=c,_=l,L=h,N=u,k=M,I=v,K=b,X=d)),A===0)return null;const Y=w/A,j=_/A,te=1/A,Ae=L-Y*z,be=N-j*z,tt=k-Y*G,Ve=I-j*G,Ye=K-Y*ne,q=X-j*ne,Q=Ye*Ve-q*tt,_e=Ae*q-be*Ye,Pe=tt*be-Ve*Ae;if(r){if(Q<0||_e<0||Pe<0)return null}else if((Q<0||_e<0||Pe<0)&&(Q>0||_e>0||Pe>0))return null;const me=Q+_e+Pe;if(me===0)return null;const Ne=te*(Q*z+_e*G+Pe*ne);return(me>0?Ne<0:Ne>0)?null:this.at(Ne/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jn extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vo=new at,Xn=new no,Sr=new Bs,ko=new U,Mr=new U,yr=new U,Er=new U,ua=new U,br=new U,Wo=new U,Tr=new U;class $e extends Ct{constructor(e=new Zt,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(ua.fromBufferAttribute(u,e),a?br.addScaledVector(ua,f):br.addScaledVector(ua.sub(t),f))}t.add(br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Sr,ko)===null||Xn.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(Vo.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=a[p.materialIndex],b=Math.max(p.start,m.start),R=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,E=R;S<E;S+=3){const y=o.getX(S),w=o.getX(S+1),_=o.getX(S+2);r=Ar(this,d,e,n,c,f,u,y,w,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=o.getX(p),R=o.getX(p+1),S=o.getX(p+2);r=Ar(this,a,e,n,c,f,u,b,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const p=h[v],d=a[p.materialIndex],b=Math.max(p.start,m.start),R=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,E=R;S<E;S+=3){const y=S,w=S+1,_=S+2;r=Ar(this,d,e,n,c,f,u,y,w,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const b=p,R=p+1,S=p+2;r=Ar(this,a,e,n,c,f,u,b,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ih(i,e,t,n,r,s,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Bn,o),l===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Tr);return c<t.near||c>t.far?null:{distance:c,point:Tr.clone(),object:i}}function Ar(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Mr),i.getVertexPosition(l,yr),i.getVertexPosition(c,Er);const f=Ih(i,e,t,n,Mr,yr,Er,Wo);if(f){const u=new U;zt.getBarycoord(Wo,Mr,yr,Er,u),r&&(f.uv=zt.getInterpolatedAttribute(r,o,l,c,u,new Ue)),s&&(f.uv1=zt.getInterpolatedAttribute(s,o,l,c,u,new Ue)),a&&(f.normal=zt.getInterpolatedAttribute(a,o,l,c,u,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};zt.getNormal(Mr,yr,Er,h.normal),f.face=h,f.barycoord=u}return f}class io extends Et{constructor(e=null,t=1,n=1,r,s,a,o,l,c=yt,f=yt,u,h){super(null,a,o,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yn=new Bs,Uh=new Ue(.5,.5),wr=new U;class ro{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],m=s[7],v=s[8],M=s[9],p=s[10],d=s[11],b=s[12],R=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,m-f,d-v,E-b).normalize(),r[1].setComponents(c+a,m+f,d+v,E+b).normalize(),r[2].setComponents(c+o,m+u,d+M,E+R).normalize(),r[3].setComponents(c-o,m-u,d-M,E-R).normalize(),n)r[4].setComponents(l,h,p,S).normalize(),r[5].setComponents(c-l,m-h,d-p,E-S).normalize();else if(r[4].setComponents(c-l,m-h,d-p,E-S).normalize(),t===rn)r[5].setComponents(c+l,m+h,d+p,E+S).normalize();else if(t===er)r[5].setComponents(l,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=Uh.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wr.x=r.normal.x>0?e.max.x:e.min.x,wr.y=r.normal.y>0?e.max.y:e.min.y,wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class so extends Et{constructor(e=[],t=zn,n,r,s,a,o,l,c,f){super(e,t,n,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rr extends Et{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi extends Et{constructor(e,t,n=on,r,s,a,o=yt,l=yt,c,f=gn,u=1){if(f!==gn&&f!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Sc extends bi{constructor(e,t=on,n=zn,r,s,a=yt,o=yt,l,c=gn){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ao extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends Zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(u,2));function v(M,p,d,b,R,S,E,y,w,_,A){const L=S/w,N=E/_,z=S/2,k=E/2,I=y/2,G=w+1,K=_+1;let X=0,ne=0;const Y=new U;for(let j=0;j<K;j++){const te=j*N-k;for(let Ae=0;Ae<G;Ae++){const be=Ae*L-z;Y[M]=be*b,Y[p]=te*R,Y[d]=I,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[p]=0,Y[d]=y>0?1:-1,f.push(Y.x,Y.y,Y.z),u.push(Ae/w),u.push(1-j/_),X+=1}}for(let j=0;j<_;j++)for(let te=0;te<w;te++){const Ae=h+te+G*j,be=h+te+G*(j+1),tt=h+(te+1)+G*(j+1),Ve=h+(te+1)+G*j;l.push(Ae,be,Ve),l.push(be,tt,Ve),ne+=6}o.addGroup(m,ne,A),m+=ne,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class An extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,f=l+1,u=e/o,h=t/l,m=[],v=[],M=[],p=[];for(let d=0;d<f;d++){const b=d*h-a;for(let R=0;R<c;R++){const S=R*u-s;v.push(S,-b,0),M.push(0,0,1),p.push(R/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const R=b+c*d,S=b+c*(d+1),E=b+1+c*(d+1),y=b+1+c*d;m.push(R,S,y),m.push(S,E,y)}this.setIndex(m),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class zs extends Zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],u=new U,h=new U,m=[],v=[],M=[],p=[];for(let d=0;d<=n;d++){const b=[],R=d/n,S=a+R*o,E=e*Math.cos(S),y=Math.sqrt(e*e-E*E);let w=0;d===0&&a===0?w=.5/t:d===n&&l===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const A=_/t,L=r+A*s;u.x=-y*Math.cos(L),u.y=E,u.z=y*Math.sin(L),v.push(u.x,u.y,u.z),h.copy(u).normalize(),M.push(h.x,h.y,h.z),p.push(A+w,1-R),b.push(c++)}f.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const R=f[d][b+1],S=f[d][b],E=f[d+1][b],y=f[d+1][b+1];(d!==0||a>0)&&m.push(R,S,y),(d!==n-1||l<Math.PI)&&m.push(S,E,y)}this.setIndex(m),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Xo(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Xo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const r in n)e[r]=n[r]}return e}function Xo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const yc={clone:Ti,merge:Dt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(r.value);break;case"m4":this.uniforms[n].value=new at().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ec extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bc extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tc extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ac{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wc=new Ac;class oo{constructor(e){this.manager=e!==void 0?e:wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr=new U,Cr=new qt,un=new U;class lo extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Cr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rr,Cr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Un=new U,qo=new Ue,Zo=new Ue;class Ft extends lo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,qo,Zo),t.subVectors(Zo,qo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class co extends lo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const da=new WeakMap;class Rc extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Hi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{da.has(a)===!0?(r&&r(da.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),da.set(l,c),Hi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const pi=-90,mi=1;class Cc extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Ft(pi,mi,e,t);s.layers=this.layers,this.add(s);const a=new Ft(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Ft(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Ft(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Ft(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Pc extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ko=new at;class Lc{constructor(e,t,n=0,r=1/0){this.ray=new no(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ko.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ko),this}intersectObject(e,t=!0,n=[]){return Ra(e,this,n,t),n.sort($o),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ra(e[r],this,n,t);return n.sort($o),n}}function $o(i,e){return i.distance-e.distance}function Ra(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ra(s[a],e,t,!0)}}const go=class go{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};go.prototype.isMatrix2=!0;let Ca=go;function Jo(i,e,t,n){const r=Bh(n);switch(t){case qa:return i*e;case Ka:return i*e/r.components*r.byteLength;case Ls:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case Ds:return i*e*2/r.components*r.byteLength;case Za:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case Is:return i*e*4/r.components*r.byteLength;case ki:case Wi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xi:case Yi:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:case $r:return Math.max(i,16)*Math.max(e,8)/4;case qr:case Kr:return Math.max(i,8)*Math.max(e,8)/2;case Jr:case Qr:case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case $i:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ss:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case as:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case os:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ls:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case us:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ds:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ps:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ms:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _s:case vs:case xs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ss:case Ms:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ji:case ys:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bh(i){switch(i){case Bt:case ka:return{byteLength:1,components:1};case yi:case Wa:case ln:return{byteLength:2,components:1};case Cs:case Ps:return{byteLength:2,components:4};case on:case Rs:case nn:return{byteLength:4,components:1};case Xa:case Ya:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);function Dc(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zh(i){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const f=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,f);else{u.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<u.length;m++){const v=u[h],M=u[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,u[h]=M)}u.length=h+1;for(let m=0,v=u.length;m<v;m++){const M=u[m];i.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
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
#endif`,Vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
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
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`#ifdef USE_BATCHING
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
#endif`,Kh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Du=`#ifdef USE_ENVMAP
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
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
#endif`,Bu=`uniform sampler2D dfgLUT;
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
}`,zu=`
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`#if defined( USE_POINTS_UV )
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
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
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
#endif`,id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
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
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,qd=`#if DEPTH_PACKING == 3200
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
}`,Zd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,tf=`uniform vec3 diffuse;
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
}`,nf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
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
}`,sf=`#define MATCAP
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
}`,af=`#define MATCAP
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
}`,of=`#define NORMAL
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
}`,lf=`#define NORMAL
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
}`,cf=`#define PHONG
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
}`,hf=`#define PHONG
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
}`,uf=`#define STANDARD
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
}`,df=`#define STANDARD
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
}`,ff=`#define TOON
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
}`,pf=`#define TOON
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
}`,mf=`uniform float size;
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,vf=`uniform vec3 color;
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
}`,xf=`uniform float rotation;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Hh,alphahash_pars_fragment:Gh,alphamap_fragment:Vh,alphamap_pars_fragment:kh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:Yh,aomap_pars_fragment:qh,batching_pars_vertex:Zh,batching_vertex:Kh,begin_vertex:$h,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:jh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:ru,color_fragment:su,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:uu,displacementmap_pars_vertex:du,displacementmap_vertex:fu,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:vu,envmap_common_pars_fragment:xu,envmap_pars_fragment:Su,envmap_pars_vertex:Mu,envmap_physical_pars_fragment:Du,envmap_vertex:yu,fog_vertex:Eu,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:Au,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Lu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Uu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Fu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Bu,lights_fragment_begin:zu,lights_fragment_maps:Hu,lights_fragment_end:Gu,lightprobes_pars_fragment:Vu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:Xu,logdepthbuf_vertex:Yu,map_fragment:qu,map_pars_fragment:Zu,map_particle_fragment:Ku,map_particle_pars_fragment:$u,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:Qu,morphinstance_vertex:ju,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:sd,normal_pars_fragment:ad,normal_pars_vertex:od,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:dd,iridescence_pars_fragment:fd,opaque_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:_d,dithering_fragment:vd,dithering_pars_fragment:xd,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:Ed,shadowmap_vertex:bd,shadowmask_pars_fragment:Td,skinbase_vertex:Ad,skinning_pars_vertex:wd,skinning_vertex:Rd,skinnormal_vertex:Cd,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Id,transmission_fragment:Ud,transmission_pars_fragment:Nd,uv_pars_fragment:Fd,uv_pars_vertex:Od,uv_vertex:Bd,worldpos_vertex:zd,background_vert:Hd,background_frag:Gd,backgroundCube_vert:Vd,backgroundCube_frag:kd,cube_vert:Wd,cube_frag:Xd,depth_vert:Yd,depth_frag:qd,distance_vert:Zd,distance_frag:Kd,equirect_vert:$d,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:jd,meshbasic_vert:ef,meshbasic_frag:tf,meshlambert_vert:nf,meshlambert_frag:rf,meshmatcap_vert:sf,meshmatcap_frag:af,meshnormal_vert:of,meshnormal_frag:lf,meshphong_vert:cf,meshphong_frag:hf,meshphysical_vert:uf,meshphysical_frag:df,meshtoon_vert:ff,meshtoon_frag:pf,points_vert:mf,points_frag:gf,shadow_vert:_f,shadow_frag:vf,sprite_vert:xf,sprite_frag:Sf},ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},jt={basic:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Dt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Dt([ce.lights,ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};jt.physical={uniforms:Dt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Pr={r:0,b:0,g:0},Mf=new at,Ic=new Ce;Ic.set(-1,0,0,0,1,0,0,0,1);function yf(i,e,t,n,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,f=null,u=0,h=null;function m(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const S=b.backgroundBlurriness>0;R=e.get(R,S)}return R}function v(b){let R=!1;const S=m(b);S===null?p(a,o):S&&S.isColor&&(p(S,1),R=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,R){const S=m(R);S&&(S.isCubeTexture||S.mapping===sr)?(c===void 0&&(c=new $e(new Ri(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Ti(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mf.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ic),c.material.toneMapped=ze.getTransfer(S.colorSpace)!==Ke,(f!==S||u!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new An(2,2),new Yt({name:"BackgroundMaterial",uniforms:Ti(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ze.getTransfer(S.colorSpace)!==Ke,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,u=S.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,R){b.getRGB(Pr,Mc(i)),t.buffers.color.setClear(Pr.r,Pr.g,Pr.b,R,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:v,addToRenderList:M,dispose:d}}function Ef(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(N,z,k,I,G){let K=!1;const X=u(N,I,k,z);s!==X&&(s=X,c(s.object)),K=m(N,I,k,G),K&&v(N,I,k,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(N,z,k,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function f(N){return i.deleteVertexArray(N)}function u(N,z,k,I){const G=I.wireframe===!0;let K=n[z.id];K===void 0&&(K={},n[z.id]=K);const X=N.isInstancedMesh===!0?N.id:0;let ne=K[X];ne===void 0&&(ne={},K[X]=ne);let Y=ne[k.id];Y===void 0&&(Y={},ne[k.id]=Y);let j=Y[G];return j===void 0&&(j=h(l()),Y[G]=j),j}function h(N){const z=[],k=[],I=[];for(let G=0;G<t;G++)z[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function m(N,z,k,I){const G=s.attributes,K=z.attributes;let X=0;const ne=k.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const te=G[Y];let Ae=K[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;X++}return s.attributesNum!==X||s.index!==I}function v(N,z,k,I){const G={},K=z.attributes;let X=0;const ne=k.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let te=K[Y];te===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),G[Y]=Ae,X++}s.attributes=G,s.attributesNum=X,s.index=I}function M(){const N=s.newAttributes;for(let z=0,k=N.length;z<k;z++)N[z]=0}function p(N){d(N,0)}function d(N,z){const k=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;k[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),G[N]!==z&&(i.vertexAttribDivisor(N,z),G[N]=z)}function b(){const N=s.newAttributes,z=s.enabledAttributes;for(let k=0,I=z.length;k<I;k++)z[k]!==N[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function R(N,z,k,I,G,K,X){X===!0?i.vertexAttribIPointer(N,z,k,G,K):i.vertexAttribPointer(N,z,k,I,G,K)}function S(N,z,k,I){M();const G=I.attributes,K=k.getAttributes(),X=z.defaultAttributeValues;for(const ne in K){const Y=K[ne];if(Y.location>=0){let j=G[ne];if(j===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const te=j.normalized,Ae=j.itemSize,be=e.get(j);if(be===void 0)continue;const tt=be.buffer,Ve=be.type,Ye=be.bytesPerElement,q=Ve===i.INT||Ve===i.UNSIGNED_INT||j.gpuType===Rs;if(j.isInterleavedBufferAttribute){const Q=j.data,_e=Q.stride,Pe=j.offset;if(Q.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)d(Y.location+me,Q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<Y.locationSize;me++)p(Y.location+me);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let me=0;me<Y.locationSize;me++)R(Y.location+me,Ae/Y.locationSize,Ve,te,_e*Ye,(Pe+Ae/Y.locationSize*me)*Ye,q)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)d(Y.location+Q,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Q=0;Q<Y.locationSize;Q++)R(Y.location+Q,Ae/Y.locationSize,Ve,te,Ae*Ye,Ae/Y.locationSize*Q*Ye,q)}}else if(X!==void 0){const te=X[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Y.location,te);break;case 3:i.vertexAttrib3fv(Y.location,te);break;case 4:i.vertexAttrib4fv(Y.location,te);break;default:i.vertexAttrib1fv(Y.location,te)}}}}b()}function E(){A();for(const N in n){const z=n[N];for(const k in z){const I=z[k];for(const G in I){const K=I[G];for(const X in K)f(K[X].object),delete K[X];delete I[G]}}delete n[N]}}function y(N){if(n[N.id]===void 0)return;const z=n[N.id];for(const k in z){const I=z[k];for(const G in I){const K=I[G];for(const X in K)f(K[X].object),delete K[X];delete I[G]}}delete n[N.id]}function w(N){for(const z in n){const k=n[z];for(const I in k){const G=k[I];if(G[N.id]===void 0)continue;const K=G[N.id];for(const X in K)f(K[X].object),delete K[X];delete G[N.id]}}}function _(N){for(const z in n){const k=n[z],I=N.isInstancedMesh===!0?N.id:0,G=k[I];if(G!==void 0){for(const K in G){const X=G[K];for(const ne in X)f(X[ne].object),delete X[ne];delete G[K]}delete k[I],Object.keys(k).length===0&&delete n[z]}}}function A(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function bf(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Tf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==kt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bt&&w!==nn&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Re("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:S,maxSamples:E,samples:y}}function Af(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new yn,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,m){const v=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const b=s?0:n,R=b*4;let S=d.clippingState||null;l.value=S,S=f(v,h,R,m);for(let E=0;E!==R;++E)S[E]=t[E];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,m,v){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const d=m+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let R=0,S=m;R!==M;++R,S+=4)a.copy(u[R]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}const vi=4,wf=6,Rf=20,Cf=256,Oi=new co,Qo=new Xe;let fa=null,pa=0,ma=0,ga=!1;const Pf=new U,qn=new U;class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Pf}=s;fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,e.scissorTest=!1,gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:ln,format:kt,colorSpace:Qi,depthBuffer:!1},r=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lf(s)),this._blurMaterial=If(s,e,t),this._ggxMaterial=Df(s,e,t)}return r}_compileMaterial(e){const t=new $e(new Zt,e);this._renderer.compile(t,Oi)}_sceneToCubeUV(e,t,n,r,s){const l=new Ft(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Qo),u.toneMapping=sn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Ri,new Jn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,p=M.material;let d=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,d=!0):(p.color.copy(Qo),d=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[R],s.y,s.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[R]));const E=this._cubeSize;gi(r,S*E,R>2?E:0,E,E),u.setRenderTarget(r),d&&u.render(M,l),u.render(e,l)}u.toneMapping=m,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zn||e.mapping===$n;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Oi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,m=u*h,{_lodMax:v}=this,M=this._sizeLods[n],p=3*M*(n>v-vi?n-v+vi:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,gi(s,p,d,3*M,2*M),r.setRenderTarget(s),r.render(o,Oi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,gi(e,p,d,3*M,2*M),r.setRenderTarget(e),r.render(o,Oi)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[r],u=3*f*(r>this._lodMax-vi?r-this._lodMax+vi:0),h=4*(this._cubeSize-f);gi(t,u,h,3*f,2*f),a.setRenderTarget(t),a.render(l,Oi)}}function Lf(i){const e=[],t=[];let n=i;const r=i-vi+1+wf;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,m=3,v=new Float32Array(m*h*u),M=new Float32Array(m*h*u);for(let d=0;d<u;d++){const b=d%3*2/3-1,R=d>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(S,m*h*d);for(let E=0;E<h;E++){const y=f[E*2]*2-1,w=f[E*2+1]*2-1;d===0?qn.set(1,w,y):d===1?qn.set(-y,1,-w):d===2?qn.set(-y,w,1):d===3?qn.set(-1,w,-y):d===4?qn.set(-y,-1,w):qn.set(y,w,-1),qn.toArray(M,(d*h+E)*m)}}const p=new Zt;p.setAttribute("position",new an(v,m)),p.setAttribute("outputDirection",new an(M,m)),t.push(new $e(p,null)),n>vi&&n--}return{lodMeshes:t,sizeLods:e}}function jo(i,e,t){const n=new Wt(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Df(i,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function If(i,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:Rf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function el(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function tl(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ho extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new so(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ri(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:mn});s.uniforms.tEquirect.value=t;const a=new $e(r,s),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=gt),new Cc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Uf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Ir||m===Ur)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const M=new ho(v.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,v=m===Ir||m===Ur,M=m===zn||m===$n;if(v||M){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new Pa(i)),p=v?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const b=h.image;return v&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Pa(i)),p=v?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function o(h,m){return m===Ir?h.mapping=zn:m===Ur&&(h.mapping=$n),h}function l(h){let m=0;const v=6;for(let M=0;M<v;M++)h[M]!==void 0&&m++;return m===v}function c(h){const m=h.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Nf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Kn("WebGLRenderer: "+n+" extension not supported."),r}}}function Ff(i,e,t,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,v=u.attributes.position;let M=0;if(v===void 0)return;if(m!==null){const b=m.array;M=m.version;for(let R=0,S=b.length;R<S;R+=3){const E=b[R+0],y=b[R+1],w=b[R+2];h.push(E,y,y,w,w,E)}}else{const b=v.array;M=v.version;for(let R=0,S=b.length/3-1;R<S;R+=3){const E=R+0,y=R+1,w=R+2;h.push(E,y,y,w,w,E)}}const p=new(v.count>=65535?eo:ja)(h,1);p.version=M;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function Of(i,e,t){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*a),t.update(h,n,1)}function c(u,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,u*a,m),t.update(h,n,m))}function f(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,m);let M=0;for(let p=0;p<m;p++)M+=h[p];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Bf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zf(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let A=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let S=o.attributes.position.count*R,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const y=new Float32Array(S*E*4*u),w=new Qa(y,S,E,u);w.type=nn,w.needsUpdate=!0;const _=R*4;for(let L=0;L<u;L++){const N=p[L],z=d[L],k=b[L],I=S*E*4*L;for(let G=0;G<N.count;G++){const K=G*_;m===!0&&(r.fromBufferAttribute(N,G),y[I+K+0]=r.x,y[I+K+1]=r.y,y[I+K+2]=r.z,y[I+K+3]=0),v===!0&&(r.fromBufferAttribute(z,G),y[I+K+4]=r.x,y[I+K+5]=r.y,y[I+K+6]=r.z,y[I+K+7]=0),M===!0&&(r.fromBufferAttribute(k,G),y[I+K+8]=r.x,y[I+K+9]=r.y,y[I+K+10]=r.z,y[I+K+11]=k.itemSize===4?r.w:1)}}h={count:u,texture:w,size:new Ue(S,E)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Hf(i,e,t,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Gf={[Fa]:"LINEAR_TONE_MAPPING",[Oa]:"REINHARD_TONE_MAPPING",[Ba]:"CINEON_TONE_MAPPING",[ws]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function Vf(i,e,t,n,r,s){const a=new Wt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Zt;c.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const f=new Ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new $e(c,f),h=new co(-1,1,1,-1,0,1);let m=null,v=null,M=!1,p,d=null,b=[],R=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let y=0;y<b.length;y++){const w=b[y];w.setSize&&w.setSize(S,E)}},this.setEffects=function(S){b=S,R=b.length>0&&b[0].isRenderPass===!0;const E=a.width,y=a.height;b.length>0&&o===null&&(o=new Wt(E,y,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(E,y,{type:ln,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){const _=b[w];_.setSize&&_.setSize(E,y)}},this.begin=function(S,E){if(M||S.toneMapping===sn&&b.length===0)return!1;if(d=E,E!==null){const y=E.width,w=E.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return R===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=sn,!0},this.hasRenderPass=function(){return R},this.end=function(S,E){S.toneMapping=p,M=!0;let y=a,w=o;for(let _=0;_<b.length;_++){const A=b[_];A.enabled!==!1&&(A.render(S,w,y,E),A.needsSwap!==!1&&(y=w,w=w===o?l:o))}if(m!==S.outputColorSpace||v!==S.toneMapping){m=S.outputColorSpace,v=S.toneMapping,f.defines={},ze.getTransfer(m)===Ke&&(f.defines.SRGB_TRANSFER="");const _=Gf[v];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(d),S.render(u,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const Uc=new Et,La=new bi(1,1),Nc=new Qa,Fc=new mc,Oc=new so,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),al=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nl[r];if(s===void 0&&(s=new Float32Array(r),nl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),vt(t,n)}}function Zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),vt(t,n)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;rl.set(n),i.uniformMatrix4fv(this.addr,!1,rl),vt(t,n)}}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(La.compareFunction=t.isReversedDepthBuffer()?Ns:Us,s=La):s=Uc,t.setTexture2D(e||s,r)}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fc,r)}function ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Oc,r)}function op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nc,r)}function lp(i){switch(i){case 5126:return kf;case 35664:return Wf;case 35665:return Xf;case 35666:return Yf;case 35674:return qf;case 35675:return Zf;case 35676:return Kf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return jf;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}function cp(i,e){i.uniform1fv(this.addr,e)}function hp(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function up(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function dp(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function fp(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pp(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mp(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gp(i,e){i.uniform1iv(this.addr,e)}function _p(i,e){i.uniform2iv(this.addr,e)}function vp(i,e){i.uniform3iv(this.addr,e)}function xp(i,e){i.uniform4iv(this.addr,e)}function Sp(i,e){i.uniform1uiv(this.addr,e)}function Mp(i,e){i.uniform2uiv(this.addr,e)}function yp(i,e){i.uniform3uiv(this.addr,e)}function Ep(i,e){i.uniform4uiv(this.addr,e)}function bp(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=La:a=Uc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Tp(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Fc,s[a])}function Ap(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Oc,s[a])}function wp(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Nc,s[a])}function Rp(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return Sp;case 36294:return Mp;case 36295:return yp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return wp}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lp(t.type)}}class Pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rp(t.type)}}class Lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function ol(i,e){i.seq.push(e),i.map[e.id]=e}function Dp(i,e,t){const n=i.name,r=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),a=_a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ol(t,c===void 0?new Cp(o,i,e):new Pp(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Lp(o),ol(t,u)),t=u}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dp(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ip=37297;let Up=0;function Np(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cl=new Ce;function Fp(i){ze._getMatrix(cl,ze.workingColorSpace,i);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case ji:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Np(i.getShaderSource(e),o)}else return s}function Op(i,e){const t=Fp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bp={[Fa]:"Linear",[Oa]:"Reinhard",[Ba]:"Cineon",[ws]:"ACESFilmic",[Ha]:"AgX",[Ga]:"Neutral",[za]:"Custom"};function zp(i,e){const t=Bp[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new U;function Hp(){ze.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function Vp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gi(i){return i!==""}function ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(Wp,Yp)}const Xp=new Map;function Yp(i,e){let t=De[e];if(t===void 0){const n=Xp.get(e);if(n!==void 0)t=De[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Da(t)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(qp,Zp)}function Zp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kp={[Vi]:"SHADOWMAP_TYPE_PCF",[_i]:"SHADOWMAP_TYPE_VSM"};function $p(i){return Kp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jp={[zn]:"ENVMAP_TYPE_CUBE",[$n]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function Qp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const jp={[$n]:"ENVMAP_MODE_REFRACTION"};function em(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tm={[Na]:"ENVMAP_BLENDING_MULTIPLY",[jl]:"ENVMAP_BLENDING_MIX",[ec]:"ENVMAP_BLENDING_ADD"};function nm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tm[i.combine]||"ENVMAP_BLENDING_NONE"}function im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$p(t),c=Qp(t),f=em(t),u=nm(t),h=im(t),m=Gp(t),v=Vp(s),M=r.createProgram();let p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(p=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?De.tonemapping_pars_fragment:"",t.toneMapping!==sn?zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Op("linearToOutputTexel",t.outputColorSpace),Hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Da(a),a=ul(a,t),a=dl(a,t),o=Da(o),o=ul(o,t),o=dl(o,t),a=fl(a),o=fl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=b+p+a,S=b+d+o,E=ll(r,r.VERTEX_SHADER,R),y=ll(r,r.FRAGMENT_SHADER,S);r.attachShader(M,E),r.attachShader(M,y),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function w(N){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(M)||"",k=r.getShaderInfoLog(E)||"",I=r.getShaderInfoLog(y)||"",G=z.trim(),K=k.trim(),X=I.trim();let ne=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,E,y);else{const j=hl(r,E,"vertex"),te=hl(r,y,"fragment");Ge("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+j+`
`+te)}else G!==""?Re("WebGLProgram: Program Info Log:",G):(K===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:ne,programLog:G,vertexShader:{log:K,prefix:p},fragmentShader:{log:X,prefix:d}})}r.deleteShader(E),r.deleteShader(y),_=new Br(r,M),A=kp(r,M)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,Ip)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Up++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=y,this}let sm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}}class om{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}}function lm(i){return i===Hn||i===$i||i===Ji}function cm(i,e,t,n,r,s){const a=new Os,o=new am,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,L,N,z,k){const I=N.fog,G=z.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||K,X),Y=ne&&ne.mapping===sr?ne.image.height:null,j=m[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=te!==void 0?te.length:0;let be=0;G.morphAttributes.position!==void 0&&(be=1),G.morphAttributes.normal!==void 0&&(be=2),G.morphAttributes.color!==void 0&&(be=3);let tt,Ve,Ye,q;if(j){const it=jt[j];tt=it.vertexShader,Ve=it.fragmentShader}else{tt=_.vertexShader,Ve=_.fragmentShader;const it=o.getVertexShaderStage(_),qe=o.getFragmentShaderStage(_);o.update(_,it,qe),Ye=it.id,q=qe.id}const Q=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,Ne=!!_.map,pt=!!_.matcap,Fe=!!ne,We=!!_.aoMap,nt=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,xt=!!_.displacementMap,It=!!_.emissiveMap,lt=!!_.metalnessMap,ut=!!_.roughnessMap,D=_.anisotropy>0,bt=_.clearcoat>0,Je=_.dispersion>0,T=_.retroreflectivity>0,g=_.iridescence>0,F=_.sheen>0,H=_.transmission>0,W=D&&!!_.anisotropyMap,ie=bt&&!!_.clearcoatMap,re=bt&&!!_.clearcoatNormalMap,Z=bt&&!!_.clearcoatRoughnessMap,J=g&&!!_.iridescenceMap,se=g&&!!_.iridescenceThicknessMap,ye=F&&!!_.sheenColorMap,he=F&&!!_.sheenRoughnessMap,ae=!!_.specularMap,Ee=!!_.specularColorMap,we=!!_.specularIntensityMap,Le=H&&!!_.transmissionMap,P=H&&!!_.thicknessMap,oe=!!_.gradientMap,$=!!_.alphaMap,le=_.alphaTest>0,fe=!!_.alphaHash,ee=!!_.extensions;let Te=sn;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Se={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:Ve,defines:_.defines,customVertexShaderID:Ye,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ne,matcap:pt,envMap:Fe,envMapMode:Fe&&ne.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:nt,bumpMap:Be,normalMap:ot,displacementMap:xt,emissiveMap:It,normalMapObjectSpace:ot&&_.normalMapType===ic,normalMapTangentSpace:ot&&_.normalMapType===Aa,packedNormalMap:ot&&_.normalMapType===Aa&&lm(_.normalMap.format),metalnessMap:lt,roughnessMap:ut,anisotropy:D,anisotropyMap:W,clearcoat:bt,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:Z,dispersion:Je,retroreflection:T,iridescence:g,iridescenceMap:J,iridescenceThicknessMap:se,sheen:F,sheenColorMap:ye,sheenRoughnessMap:he,specularMap:ae,specularColorMap:Ee,specularIntensityMap:we,transmission:H,transmissionMap:Le,thicknessMap:P,gradientMap:oe,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:fe,combine:_.combine,mapUv:Ne&&v(_.map.channel),aoMapUv:We&&v(_.aoMap.channel),lightMapUv:nt&&v(_.lightMap.channel),bumpMapUv:Be&&v(_.bumpMap.channel),normalMapUv:ot&&v(_.normalMap.channel),displacementMapUv:xt&&v(_.displacementMap.channel),emissiveMapUv:It&&v(_.emissiveMap.channel),metalnessMapUv:lt&&v(_.metalnessMap.channel),roughnessMapUv:ut&&v(_.roughnessMap.channel),anisotropyMapUv:W&&v(_.anisotropyMap.channel),clearcoatMapUv:ie&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(_.sheenRoughnessMap.channel),specularMapUv:ae&&v(_.specularMap.channel),specularColorMapUv:Ee&&v(_.specularColorMap.channel),specularIntensityMapUv:we&&v(_.specularIntensityMap.channel),transmissionMapUv:Le&&v(_.transmissionMap.channel),thicknessMapUv:P&&v(_.thicknessMap.channel),alphaMapUv:$&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ot||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Ne||$),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:be,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ne&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===Ke,decodeVideoTextureEmissive:It&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===Ke,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ot,flipSided:_.side===Rt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)A.push(L),A.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(d(A,_),b(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function d(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const A=m[_.type];let L;if(A){const N=jt[A];L=yc.clone(N.uniforms)}else L=_.uniforms;return L}function S(_,A){let L=f.get(A);return L!==void 0?++L.usedTimes:(L=new rm(i,A,_,r),c.push(L),f.set(A,L)),L}function E(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:R,acquireProgram:S,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:w}}function hm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,v,M,p,d){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:m,material:v,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:d},i[e]=b):(b.id=h.id,b.object=h,b.geometry=m,b.material=v,b.materialVariant=a(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=p,b.group=d),e++,b}function l(h,m,v,M,p,d,b){b.reversedDepth===!0&&(p=-p);const R=o(h,m,v,M,p,d);v.transmission>0?n.push(R):v.transparent===!0?r.push(R):t.push(R)}function c(h,m,v,M,p,d){const b=o(h,m,v,M,p,d);v.transmission>0?n.unshift(b):v.transparent===!0?r.unshift(b):t.unshift(b)}function f(h,m){t.length>1&&t.sort(h||um),n.length>1&&n.sort(m||ml),r.length>1&&r.sort(m||ml)}function u(){for(let h=e,m=i.length;h<m;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function dm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gl,i.set(n,[a])):r>=s.length?(a=new gl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function pm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mm=0;function gm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _m(i){const e=new fm,t=pm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new at,a=new at;function o(c){let f=0,u=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,v=0,M=0,p=0,d=0,b=0,R=0,S=0,E=0,y=0,w=0,_=0,A=0,L=0;c.sort(gm);for(let z=0,k=c.length;z<k;z++){const I=c[z],G=I.color,K=I.intensity,X=I.distance;let ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hn?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=G.r*K,u+=G.g*K,h+=G.b*K;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],K);L++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[v]=te,n.sunShadowMap[v]=ne;const Ae=j.getViewportCount();for(let be=0;be<Ae;be++)n.sunShadowMatrix[M+be]=j.getMatrix(be),n.sunShadowCascade[M+be]=j._cascadeData[be];M+=Ae,v++}n.sun[m]=Y,m++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[p]=te,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=Y,p++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(G).multiplyScalar(K),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[b]=Y;const j=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,j.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[b]=j.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=ne,w++}b++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(G).multiplyScalar(K),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=Y,R++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=ne,n.pointShadowMatrix[d]=I.shadow.matrix,y++}n.point[d]=Y,d++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(K),Y.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[S]=Y,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==b||N.rectAreaLength!==R||N.hemiLength!==S||N.numSunShadows!==v||N.numDirectionalShadows!==E||N.numPointShadows!==y||N.numSpotShadows!==w||N.numSpotMaps!==_||N.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=b,n.rectArea.length=R,n.point.length=d,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=b,N.rectAreaLength=R,N.hemiLength=S,N.numSunShadows=v,N.numDirectionalShadows=E,N.numPointShadows=y,N.numSpotShadows=w,N.numSpotMaps=_,N.numLightProbes=L,n.version=mm++)}function l(c,f){let u=0,h=0,m=0,v=0,M=0,p=0;const d=f.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){const S=c[b];if(S.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),u++}else if(S.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(S.isSpotLight){const E=n.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),v++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function _l(i){const e=new _m(i),t=[],n=[],r=[];function s(h){u.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function f(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _l(i),e.set(r,[o])):s>=a.length?(o=new _l(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`,Mm=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ym=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vl=new at,Bi=new U,va=new U;function Em(i,e,t){let n=new ro;const r=new Ue,s=new Ue,a=new ct,o=new bc,l=new Tc,c={},f=t.maxTextureSize,u={[Bn]:Rt,[Rt]:Bn,[Ot]:Ot},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:xm,fragmentShader:Sm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $e(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let d=this.type;this.render=function(y,w,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Ul&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vi);const A=i.getRenderTarget(),L=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(mn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==this.type;k&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=y.length;I<G;I++){const K=y[I],X=K.shadow;if(X===void 0){Re("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ne=X.getFrameExtents();r.multiply(ne),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ne.x),r.x=s.x*ne.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ne.y),r.y=s.y*ne.y,X.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===_i){if(K.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Wt(r.x,r.y,{format:Hn,type:ln,minFilter:gt,magFilter:gt,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new bi(r.x,r.y,nn),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=gn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=yt,X.map.depthTexture.magFilter=yt}else K.isPointLight?(X.map=new ho(r.x),X.map.depthTexture=new Sc(r.x,on)):(X.map=new Wt(r.x,r.y),X.map.depthTexture=new bi(r.x,r.y,on)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=gn,this.type===Vi?(X.map.depthTexture.compareFunction=Y?Ns:Us,X.map.depthTexture.minFilter=gt,X.map.depthTexture.magFilter=gt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=yt,X.map.depthTexture.magFilter=yt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,_);for(let te=0;te<j;te++){const Ae=X.getCamera(te);if(K.isPointLight){const be=X.camera,tt=X.matrix,Ve=K.distance||be.far;Ve!==be.far&&(be.far=Ve,be.updateProjectionMatrix()),Bi.setFromMatrixPosition(K.matrixWorld),be.position.copy(Bi),va.copy(be.position),va.add(Mm[te]),be.up.copy(ym[te]),be.lookAt(va),be.updateMatrixWorld(),tt.makeTranslation(-Bi.x,-Bi.y,-Bi.z),vl.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(vl,be.coordinateSystem,be.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,te),i.clear();else{te===0&&(i.setRenderTarget(X.map),i.clear());const be=X.getViewport(te);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),z.viewport(a)}n=X.getFrustum(te),S(w,_,Ae,K,this.type)}X.isPointLightShadow!==!0&&this.type===_i&&b(X,_),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(A,L,N)};function b(y,w){const _=e.update(M);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new Wt(r.x,r.y,{format:Hn,type:ln}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,_,h,M,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,_,m,M,null)}function R(y,w,_,A){let L=null;const N=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0)L=N;else if(L=_.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const z=L.uuid,k=w.uuid;let I=c[z];I===void 0&&(I={},c[z]=I);let G=I[k];G===void 0&&(G=L.clone(),I[k]=G,w.addEventListener("dispose",E)),L=G}if(L.visible=w.visible,L.wireframe=w.wireframe,A===_i?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:u[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=i.properties.get(L);z.light=_}return L}function S(y,w,_,A,L){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===_i)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const k=e.update(y),I=y.material;if(Array.isArray(I)){const G=k.groups;for(let K=0,X=G.length;K<X;K++){const ne=G[K],Y=I[ne.materialIndex];if(Y&&Y.visible){const j=R(y,Y,A,L);y.onBeforeShadow(i,y,w,_,k,j,ne),i.renderBufferDirect(_,null,k,j,y,ne),y.onAfterShadow(i,y,w,_,k,j,ne)}}}else if(I.visible){const G=R(y,I,A,L);y.onBeforeShadow(i,y,w,_,k,G,null),i.renderBufferDirect(_,null,k,G,y,null),y.onAfterShadow(i,y,w,_,k,G,null)}}const z=y.children;for(let k=0,I=z.length;k<I;k++)S(z[k],w,_,A,L)}function E(y){y.target.removeEventListener("dispose",E);for(const _ in c){const A=c[_],L=y.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function bm(i,e){function t(){let P=!1;const oe=new ct;let $=null;const le=new ct(0,0,0,0);return{setMask:function(fe){$!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ee,Te,Se,it){it===!0&&(fe*=Se,ee*=Se,Te*=Se),oe.set(fe,ee,Te,Se),le.equals(oe)===!1&&(i.clearColor(fe,ee,Te,Se),le.copy(oe))},reset:function(){P=!1,$=null,le.set(-1,0,0,0)}}}function n(){let P=!1,oe=!1,$=null,le=null,fe=null;return{setReversed:function(ee){if(oe!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return oe},setTest:function(ee){ee?Q(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ee){$!==ee&&!P&&(i.depthMask(ee),$=ee)},setFunc:function(ee){if(oe&&(ee=eh[ee]),le!==ee){switch(ee){case zr:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Xr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ee}},setLocked:function(ee){P=ee},setClear:function(ee){fe!==ee&&(fe=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){P=!1,$=null,le=null,fe=null,oe=!1}}}function r(){let P=!1,oe=null,$=null,le=null,fe=null,ee=null,Te=null,Se=null,it=null;return{setTest:function(qe){P||(qe?Q(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(qe){oe!==qe&&!P&&(i.stencilMask(qe),oe=qe)},setFunc:function(qe,Kt,cn){($!==qe||le!==Kt||fe!==cn)&&(i.stencilFunc(qe,Kt,cn),$=qe,le=Kt,fe=cn)},setOp:function(qe,Kt,cn){(ee!==qe||Te!==Kt||Se!==cn)&&(i.stencilOp(qe,Kt,cn),ee=qe,Te=Kt,Se=cn)},setLocked:function(qe){P=qe},setClear:function(qe){it!==qe&&(i.clearStencil(qe),it=qe)},reset:function(){P=!1,oe=null,$=null,le=null,fe=null,ee=null,Te=null,Se=null,it=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h={},m=new WeakMap,v=[],M=null,p=!1,d=null,b=null,R=null,S=null,E=null,y=null,w=null,_=new Xe(0,0,0),A=0,L=!1,N=null,z=null,k=null,I=null,G=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=ne>=2);let j=null,te={};const Ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),tt=new ct().fromArray(Ae),Ve=new ct().fromArray(be);function Ye(P,oe,$,le){const fe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(P,ee),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<$;Te++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ee}const q={};q[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Mi),Be(!1),ot(ya),Q(i.CULL_FACE),We(mn);function Q(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function _e(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Pe(P,oe){return h[P]!==oe?(i.bindFramebuffer(P,oe),h[P]=oe,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function me(P,oe){let $=v,le=!1;if(P){$=m.get(oe),$===void 0&&($=[],m.set(oe,$));const fe=P.textures;if($.length!==fe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=fe.length;ee<Te;ee++)$[ee]=i.COLOR_ATTACHMENT0+ee;$.length=fe.length,le=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,le=!0);le&&i.drawBuffers($)}function Ne(P){return M!==P?(i.useProgram(P),M=P,!0):!1}const pt={[Zn]:i.FUNC_ADD,[Fl]:i.FUNC_SUBTRACT,[Ol]:i.FUNC_REVERSE_SUBTRACT};pt[Bl]=i.MIN,pt[zl]=i.MAX;const Fe={[Hl]:i.ZERO,[Gl]:i.ONE,[Vl]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Zl]:i.SRC_ALPHA_SATURATE,[Yl]:i.DST_COLOR,[Wl]:i.DST_ALPHA,[kl]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[ql]:i.ONE_MINUS_DST_COLOR,[Xl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Jl]:i.CONSTANT_ALPHA,[Ql]:i.ONE_MINUS_CONSTANT_ALPHA};function We(P,oe,$,le,fe,ee,Te,Se,it,qe){if(P===mn){p===!0&&(_e(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),P!==Nl){if(P!==d||qe!==L){if((b!==Zn||E!==Zn)&&(i.blendEquation(i.FUNC_ADD),b=Zn,E=Zn),qe)switch(P){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",P);break}else switch(P){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ba:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ta:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",P);break}R=null,S=null,y=null,w=null,_.set(0,0,0),A=0,d=P,L=qe}return}fe=fe||oe,ee=ee||$,Te=Te||le,(oe!==b||fe!==E)&&(i.blendEquationSeparate(pt[oe],pt[fe]),b=oe,E=fe),($!==R||le!==S||ee!==y||Te!==w)&&(i.blendFuncSeparate(Fe[$],Fe[le],Fe[ee],Fe[Te]),R=$,S=le,y=ee,w=Te),(Se.equals(_)===!1||it!==A)&&(i.blendColor(Se.r,Se.g,Se.b,it),_.copy(Se),A=it),d=P,L=!1}function nt(P,oe){P.side===Ot?_e(i.CULL_FACE):Q(i.CULL_FACE);let $=P.side===Rt;oe&&($=!$),Be($),P.blending===xi&&P.transparent===!1?We(mn):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),It(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){N!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),N=P)}function ot(P){P!==Dl?(Q(i.CULL_FACE),P!==z&&(P===ya?i.cullFace(i.BACK):P===Il?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),z=P}function xt(P){P!==k&&(X&&i.lineWidth(P),k=P)}function It(P,oe,$){P?(Q(i.POLYGON_OFFSET_FILL),(I!==oe||G!==$)&&(I=oe,G=$,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,$))):_e(i.POLYGON_OFFSET_FILL)}function lt(P){P?Q(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ut(P){P===void 0&&(P=i.TEXTURE0+K-1),j!==P&&(i.activeTexture(P),j=P)}function D(P,oe,$){$===void 0&&(j===null?$=i.TEXTURE0+K-1:$=j);let le=te[$];le===void 0&&(le={type:void 0,texture:void 0},te[$]=le),(le.type!==P||le.texture!==oe)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(P,oe||q[P]),le.type=P,le.texture=oe)}function bt(){const P=te[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function F(){try{i.texSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ie(){try{i.texStorage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function re(){try{i.texStorage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Z(){try{i.texImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function J(){try{i.texImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function se(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function ye(P,oe){u[P]!==oe&&(i.pixelStorei(P,oe),u[P]=oe)}function he(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function ae(P){Ve.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ve.copy(P))}function Ee(P,oe){let $=c.get(oe);$===void 0&&($=new WeakMap,c.set(oe,$));let le=$.get(P);le===void 0&&(le=i.getUniformBlockIndex(oe,P.name),$.set(P,le))}function we(P,oe){const le=c.get(oe).get(P);l.get(oe)!==le&&(i.uniformBlockBinding(oe,le,P.__bindingPointIndex),l.set(oe,le))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},j=null,te={},h={},m=new WeakMap,v=[],M=null,p=!1,d=null,b=null,R=null,S=null,E=null,y=null,w=null,_=new Xe(0,0,0),A=0,L=!1,N=null,z=null,k=null,I=null,G=null,tt.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:_e,bindFramebuffer:Pe,drawBuffers:me,useProgram:Ne,setBlending:We,setMaterial:nt,setFlipSided:Be,setCullFace:ot,setLineWidth:xt,setPolygonOffset:It,setScissorTest:lt,activeTexture:ut,bindTexture:D,unbindTexture:bt,compressedTexImage2D:Je,compressedTexImage3D:T,texImage2D:Z,texImage3D:J,pixelStorei:ye,getParameter:se,updateUBOMapping:Ee,uniformBlockBinding:we,texStorage2D:ie,texStorage3D:re,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:he,viewport:ae,reset:Le}}function Tm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,f=new WeakMap,u=new Set;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,g){return v?new OffscreenCanvas(T,g):Es("canvas")}function p(T,g,F){let H=1;const W=Je(T);if((W.width>F||W.height>F)&&(H=F/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ie=Math.floor(H*W.width),re=Math.floor(H*W.height);h===void 0&&(h=M(ie,re));const Z=g?M(ie,re):h;return Z.width=ie,Z.height=re,Z.getContext("2d").drawImage(T,0,0,ie,re),Re("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ie+"x"+re+")."),Z}else return"data"in T&&Re("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function d(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,g,F,H,W,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;H&&(re=e.get("EXT_texture_norm16"),re||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),F===i.SHORT&&re&&(Z=re.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),F===i.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),F===i.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const J=ie?ji:ze.getTransfer(W);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=J===Ke?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),F===i.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(T,g){let F;return T?g===null||g===on||g===Ei?F=i.DEPTH24_STENCIL8:g===nn?F=i.DEPTH32F_STENCIL8:g===yi&&(F=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===on||g===Ei?F=i.DEPTH_COMPONENT24:g===nn?F=i.DEPTH_COMPONENT32F:g===yi&&(F=i.DEPTH_COMPONENT16),F}function y(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==yt&&T.minFilter!==gt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),A(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&u.delete(g)}function _(T){const g=T.target;g.removeEventListener("dispose",_),N(g)}function A(T){const g=n.get(T);if(g.__webglInit===void 0)return;const F=T.source,H=m.get(F);if(H){const W=H[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&L(T),Object.keys(H).length===0&&m.delete(F)}n.remove(T)}function L(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const F=T.source,H=m.get(F);delete H[g.__cacheKey],a.memory.textures--}function N(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let W=0;W<g.__webglFramebuffer[H].length;W++)i.deleteFramebuffer(g.__webglFramebuffer[H][W]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let H=0,W=F.length;H<W;H++){const ie=n.get(F[H]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(T)}let z=0;function k(){z=0}function I(){return z}function G(T){z=T}function K(){const T=z;return T>=r.maxTextures&&Re("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,T}function X(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ne(T,g){const F=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const H=T.image;if(H===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,T,g);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){_e(F,T,g);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function j(T,g){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){_e(F,T,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function te(T,g){const F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Pe(F,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const Ae={[Ki]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},be={[yt]:i.NEAREST,[tc]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[gt]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},tt={[sc]:i.NEVER,[hc]:i.ALWAYS,[ac]:i.LESS,[Us]:i.LEQUAL,[oc]:i.EQUAL,[Ns]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function Ve(T,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===gt||g.magFilter===Nr||g.magFilter===zi||g.magFilter===Fn||g.minFilter===gt||g.minFilter===Nr||g.minFilter===zi||g.minFilter===Fn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ae[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ae[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ae[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,be[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,be[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,tt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yt||g.minFilter!==zi&&g.minFilter!==Fn||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const H=g.source;let W=m.get(H);W===void 0&&(W={},m.set(H,W));const ie=X(g);if(ie!==T.__cacheKey){W[ie]===void 0&&(W[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[ie].usedTimes++;const re=W[T.__cacheKey];re!==void 0&&(W[T.__cacheKey].usedTimes--,re.usedTimes===0&&L(g)),T.__cacheKey=ie,T.__webglTexture=W[ie].texture}return F}function q(T,g,F){return Math.floor(Math.floor(T/F)/g)}function Q(T,g,F,H){const ie=T.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,H,g.data);else{ie.sort((ye,he)=>ye.start-he.start);let re=0;for(let ye=1;ye<ie.length;ye++){const he=ie[re],ae=ie[ye],Ee=he.start+he.count,we=q(ae.start,g.width,4),Le=q(he.start,g.width,4);ae.start<=Ee+1&&we===Le&&q(ae.start+ae.count-1,g.width,4)===we?he.count=Math.max(he.count,ae.start+ae.count-he.start):(++re,ie[re]=ae)}ie.length=re+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ye=0,he=ie.length;ye<he;ye++){const ae=ie[ye],Ee=Math.floor(ae.start/4),we=Math.ceil(ae.count/4),Le=Ee%g.width,P=Math.floor(Ee/g.width),oe=we,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Le,P,oe,$,F,H,g.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function _e(T,g,F){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const W=Ye(T,g),ie=g.source;t.bindTexture(H,T.__webglTexture,i.TEXTURE0+F);const re=n.get(ie);if(ie.version!==re.__version||W===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const $=ze.getPrimaries(ze.workingColorSpace),le=g.colorSpace===En?null:ze.getPrimaries(g.colorSpace),fe=g.colorSpace===En||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let J=p(g.image,!1,r.maxTextureSize);J=bt(g,J);const se=s.convert(g.format,g.colorSpace),ye=s.convert(g.type);let he=S(g.internalFormat,se,ye,g.normalized,g.colorSpace,g.isVideoTexture);Ve(H,g);let ae;const Ee=g.mipmaps,we=g.isVideoTexture!==!0,Le=re.__version===void 0||W===!0,P=ie.dataReady,oe=y(g,J);if(g.isDepthTexture)he=E(g.format===On,g.type),Le&&(we?t.texStorage2D(i.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,he,J.width,J.height,0,se,ye,null));else if(g.isDataTexture)if(Ee.length>0){we&&Le&&t.texStorage2D(i.TEXTURE_2D,oe,he,Ee[0].width,Ee[0].height);for(let $=0,le=Ee.length;$<le;$++)ae=Ee[$],we?P&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,se,ye,ae.data):t.texImage2D(i.TEXTURE_2D,$,he,ae.width,ae.height,0,se,ye,ae.data);g.generateMipmaps=!1}else we?(Le&&t.texStorage2D(i.TEXTURE_2D,oe,he,J.width,J.height),P&&Q(g,J,se,ye)):t.texImage2D(i.TEXTURE_2D,0,he,J.width,J.height,0,se,ye,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,he,Ee[0].width,Ee[0].height,J.depth);for(let $=0,le=Ee.length;$<le;$++)if(ae=Ee[$],g.format!==kt)if(se!==null)if(we){if(P)if(g.layerUpdates.size>0){const fe=Jo(ae.width,ae.height,g.format,g.type);for(const ee of g.layerUpdates){const Te=ae.data.subarray(ee*fe/ae.data.BYTES_PER_ELEMENT,(ee+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ee,ae.width,ae.height,1,se,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,J.depth,se,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,he,ae.width,ae.height,J.depth,0,ae.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,J.depth,se,ye,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,he,ae.width,ae.height,J.depth,0,se,ye,ae.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{we&&Le&&t.texStorage2D(i.TEXTURE_2D,oe,he,Ee[0].width,Ee[0].height);for(let $=0,le=Ee.length;$<le;$++)ae=Ee[$],g.format!==kt?se!==null?we?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,se,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,$,he,ae.width,ae.height,0,ae.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?P&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ae.width,ae.height,se,ye,ae.data):t.texImage2D(i.TEXTURE_2D,$,he,ae.width,ae.height,0,se,ye,ae.data)}else if(g.isDataArrayTexture)if(we){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,he,J.width,J.height,J.depth),P)if(g.layerUpdates.size>0){const $=Jo(J.width,J.height,g.format,g.type);for(const le of g.layerUpdates){const fe=J.data.subarray(le*$/J.data.BYTES_PER_ELEMENT,(le+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,se,ye,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,se,ye,J.data);else if(g.isData3DTexture)we?(Le&&t.texStorage3D(i.TEXTURE_3D,oe,he,J.width,J.height,J.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)):t.texImage3D(i.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,se,ye,J.data);else if(g.isFramebufferTexture){if(Le)if(we)t.texStorage2D(i.TEXTURE_2D,oe,he,J.width,J.height);else{let $=J.width,le=J.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,he,$,le,0,se,ye,null),$>>=1,le>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),u.add(g),$.onpaint=le=>{const fe=le.changedElements;for(const ee of u)fe.includes(ee.image)&&(ee.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const fe=i.RGBA,ee=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ee,Te,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(we&&Le){const $=Je(Ee[0]);t.texStorage2D(i.TEXTURE_2D,oe,he,$.width,$.height)}for(let $=0,le=Ee.length;$<le;$++)ae=Ee[$],we?P&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,se,ye,ae):t.texImage2D(i.TEXTURE_2D,$,he,se,ye,ae);g.generateMipmaps=!1}else if(we){if(Le){const $=Je(J);t.texStorage2D(i.TEXTURE_2D,oe,he,$.width,$.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,ye,J)}else t.texImage2D(i.TEXTURE_2D,0,he,se,ye,J);d(g)&&b(H),re.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Pe(T,g,F){if(g.image.length!==6)return;const H=Ye(T,g),W=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const ie=n.get(W);if(W.version!==ie.__version||H===!0){t.activeTexture(i.TEXTURE0+F);const re=ze.getPrimaries(ze.workingColorSpace),Z=g.colorSpace===En?null:ze.getPrimaries(g.colorSpace),J=g.colorSpace===En||re===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const se=g.isCompressedTexture||g.image[0].isCompressedTexture,ye=g.image[0]&&g.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!se&&!ye?he[ee]=p(g.image[ee],!0,r.maxCubemapSize):he[ee]=ye?g.image[ee].image:g.image[ee],he[ee]=bt(g,he[ee]);const ae=he[0],Ee=s.convert(g.format,g.colorSpace),we=s.convert(g.type),Le=S(g.internalFormat,Ee,we,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,oe=ie.__version===void 0||H===!0,$=W.dataReady;let le=y(g,ae);Ve(i.TEXTURE_CUBE_MAP,g);let fe;if(se){P&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Le,ae.width,ae.height);for(let ee=0;ee<6;ee++){fe=he[ee].mipmaps;for(let Te=0;Te<fe.length;Te++){const Se=fe[Te];g.format!==kt?Ee!==null?P?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Le,Se.width,Se.height,0,Se.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Se.width,Se.height,Ee,we,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Le,Se.width,Se.height,0,Ee,we,Se.data)}}}else{if(fe=g.mipmaps,P&&oe){fe.length>0&&le++;const ee=Je(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Le,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ye){P?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Ee,we,he[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,he[ee].width,he[ee].height,0,Ee,we,he[ee].data);for(let Te=0;Te<fe.length;Te++){const it=fe[Te].image[ee].image;P?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,it.width,it.height,Ee,we,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Le,it.width,it.height,0,Ee,we,it.data)}}else{P?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee,we,he[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,Ee,we,he[ee]);for(let Te=0;Te<fe.length;Te++){const Se=fe[Te];P?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Ee,we,Se.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Le,Ee,we,Se.image[ee])}}}d(g)&&b(i.TEXTURE_CUBE_MAP),ie.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function me(T,g,F,H,W,ie){const re=s.convert(F.format,F.colorSpace),Z=s.convert(F.type),J=S(F.internalFormat,re,Z,F.normalized,F.colorSpace),se=n.get(g),ye=n.get(F);if(ye.__renderTarget=g,!se.__hasExternalTextures){const he=Math.max(1,g.width>>ie),ae=Math.max(1,g.height>>ie);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ie,J,he,ae,g.depth,0,re,Z,null):t.texImage2D(W,ie,J,he,ae,0,re,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,W,ye.__webglTexture,0,lt(g)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,W,ye.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const H=g.depthTexture,W=H&&H.isDepthTexture?H.type:null,ie=E(g.stencilBuffer,W),re=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(g),ie,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(g),ie,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ie,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,T)}else{const H=g.textures;for(let W=0;W<H.length;W++){const ie=H[W],re=s.convert(ie.format,ie.colorSpace),Z=s.convert(ie.type),J=S(ie.internalFormat,re,Z,ie.normalized,ie.colorSpace);ut(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(g),J,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(T,g,F){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(g.depthTexture);if(W.__renderTarget=g,(!W.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g.depthTexture);const se=s.convert(g.depthTexture.format),ye=s.convert(g.depthTexture.type);let he;g.depthTexture.format===gn?he=i.DEPTH_COMPONENT24:g.depthTexture.format===On&&(he=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,he,g.width,g.height,0,se,ye,null)}}else ne(g.depthTexture,0);const ie=W.__webglTexture,re=lt(g),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,J=g.depthTexture.format===On?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===gn)ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else if(g.depthTexture.format===On)ut(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Z,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(T){const g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const W=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),g.__depthDisposeCallback=W}g.__boundDepthTexture=H}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)pt(g.__webglFramebuffer[H],T,H);else{const H=T.texture.mipmaps;H&&H.length>0?pt(g.__webglFramebuffer[0],T,0):pt(g.__webglFramebuffer,T,0)}else if(F){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ne(g.__webglDepthbuffer[H],T,!1);else{const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}else{const H=T.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ne(g.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(T,g,F){const H=n.get(T);g!==void 0&&me(H.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Fe(T)}function nt(T){const g=T.texture,F=n.get(T),H=n.get(g);T.addEventListener("dispose",_);const W=T.textures,ie=T.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let J=0;J<g.mipmaps.length;J++)F.__webglFramebuffer[Z][J]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(re)for(let Z=0,J=W.length;Z<J;Z++){const se=n.get(W[Z]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){const J=W[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const se=s.convert(J.format,J.colorSpace),ye=s.convert(J.type),he=S(J.internalFormat,se,ye,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),ae=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[Z][J],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else me(F.__webglFramebuffer[Z],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(g)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,J=W.length;Z<J;Z++){const se=W[Z],ye=n.get(se);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ye.__webglTexture),Ve(he,se),me(F.__webglFramebuffer,T,se,i.COLOR_ATTACHMENT0+Z,he,0),d(se)&&b(he)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,H.__webglTexture),Ve(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)me(F.__webglFramebuffer[J],T,g,i.COLOR_ATTACHMENT0,Z,J);else me(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,Z,0);d(g)&&b(Z),t.unbindTexture()}T.depthBuffer&&Fe(T)}function Be(T){const g=T.textures;for(let F=0,H=g.length;F<H;F++){const W=g[F];if(d(W)){const ie=R(T),re=n.get(W).__webglTexture;t.bindTexture(ie,re),b(ie),t.unbindTexture()}}}const ot=[],xt=[];function It(T){if(T.samples>0){if(ut(T)===!1){const g=T.textures,F=T.width,H=T.height;let W=i.COLOR_BUFFER_BIT;const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),Z=g.length>1;if(Z)for(let se=0;se<g.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<g.length;se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const ye=n.get(g[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,W,i.NEAREST),l===!0&&(ot.length=0,xt.length=0,ot.push(i.COLOR_ATTACHMENT0+se),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ot.push(ie),xt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let se=0;se<g.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);const ye=n.get(g[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function lt(T){return Math.min(r.maxSamples,T.samples)}function ut(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(T){const g=a.render.frame;f.get(T)!==g&&(f.set(T,g),T.update())}function bt(T,g){const F=T.colorSpace,H=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Qi&&F!==En&&(ze.getTransfer(F)===Ke?(H!==kt||W!==Bt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",F)),g}function Je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bc(i,e){function t(n,r=En){let s;const a=ze.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===Cs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ps)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ya)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ka)return i.BYTE;if(n===Wa)return i.SHORT;if(n===yi)return i.UNSIGNED_SHORT;if(n===Rs)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===qa)return i.ALPHA;if(n===Za)return i.RGB;if(n===kt)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===Ls)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===Ds)return i.RG_INTEGER;if(n===Is)return i.RGBA_INTEGER;if(n===ki||n===Wi||n===Xi||n===Yi)if(a===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ki)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yi)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ki)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wi)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xi)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yi)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Zr||n===Kr||n===$r)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===jr||n===es||n===ts||n===$i||n===ns)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jr||n===Qr)return a===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jr)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===es)return s.COMPRESSED_R11_EAC;if(n===ts)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$i)return s.COMPRESSED_RG11_EAC;if(n===ns)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===is||n===rs||n===ss||n===as||n===os||n===ls||n===cs||n===hs||n===us||n===ds||n===fs||n===ps||n===ms||n===gs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===is)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ss)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===as)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===os)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ls)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===us)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ds)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ps)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ms)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gs)return a===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===vs||n===xs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_s)return a===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ss||n===Ms||n===Ji||n===ys)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ss)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ms)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ji)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ys)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
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

}`;class Rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yt({vertexShader:Am,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cm extends Gn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",p=new Rm,d={},b=t.getContextAttributes();let R=null,S=null;const E=[],y=[],w=new Ue;let _=null,A=null;const L=new Ft;L.viewport=new ct;const N=new Ft;N.viewport=new ct;const z=[L,N],k=new Pc;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=E[q];return Q===void 0&&(Q=new Or,E[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=E[q];return Q===void 0&&(Q=new Or,E[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=E[q];return Q===void 0&&(Q=new Or,E[q]=Q),Q.getHandSpace()};function K(q){const Q=y.indexOf(q.inputSource);if(Q===-1)return;const _e=E[Q];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ne);for(let q=0;q<E.length;q++){const Q=y[q];Q!==null&&(y[q]=null,E[q].disconnect(Q))}I=null,G=null,p.reset();for(const q in d)delete d[q];if(e.setRenderTarget(R),m=null,h=null,u=null,r=null,S=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),A!==null){const q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?On:gn,Pe=b.stencil?Ei:on);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Wt(h.textureWidth,h.textureHeight,{format:kt,type:Bt,depthTexture:new bi(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Wt(m.framebufferWidth,m.framebufferHeight,{format:kt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(q){for(let Q=0;Q<q.removed.length;Q++){const _e=q.removed[Q],Pe=y.indexOf(_e);Pe>=0&&(y[Pe]=null,E[Pe].disconnect(_e))}for(let Q=0;Q<q.added.length;Q++){const _e=q.added[Q];let Pe=y.indexOf(_e);if(Pe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=y.length){y.push(_e),Pe=Ne;break}else if(y[Ne]===null){y[Ne]=_e,Pe=Ne;break}if(Pe===-1)break}const me=E[Pe];me&&me.connect(_e)}}const Y=new U,j=new U;function te(q,Q,_e){Y.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const Pe=Y.distanceTo(j),me=Q.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,pt=me[14]/(me[10]-1),Fe=me[14]/(me[10]+1),We=(me[9]+1)/me[5],nt=(me[9]-1)/me[5],Be=(me[8]-1)/me[0],ot=(Ne[8]+1)/Ne[0],xt=pt*Be,It=pt*ot,lt=Pe/(-Be+ot),ut=lt*-Be;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ut),q.translateZ(lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const D=pt+lt,bt=Fe+lt,Je=xt-ut,T=It+(Pe-ut),g=We*Fe/bt*D,F=nt*Fe/bt*D;q.projectionMatrix.makePerspective(Je,T,g,F,D,bt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ae(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Q=q.near,_e=q.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),k.near=N.near=L.near=Q,k.far=N.far=L.far=_e,(I!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=q.layers.mask|6,L.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const Pe=q.parent,me=k.cameras;Ae(k,Pe);for(let Ne=0;Ne<me.length;Ne++)Ae(me[Ne],Pe);me.length===2?te(k,L,N):k.projectionMatrix.copy(L.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),be(q,k,Pe)};function be(q,Q,_e){_e===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let tt=null;function Ve(q,Q){if(f=Q.getViewerPose(c||a),v=Q,f!==null){const _e=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Pe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let Fe=0;Fe<_e.length;Fe++){const We=_e[Fe];let nt=null;if(m!==null)nt=m.getViewport(We);else{const ot=u.getViewSubImage(h,We);nt=ot.viewport,Fe===0&&(e.setRenderTargetTextures(S,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(S))}let Be=z[Fe];Be===void 0&&(Be=new Ft,Be.layers.enable(Fe),Be.viewport=new ct,z[Fe]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(nt.x,nt.y,nt.width,nt.height),Fe===0&&(k.matrix.copy(Be.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(Be)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const Fe=u.getDepthInformation(_e[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,r.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<_e.length;Fe++){const We=_e[Fe].camera;if(We){let nt=d[We];nt||(nt=new ao,d[We]=nt);const Be=u.getCameraImage(We);nt.sourceTexture=Be}}}}for(let _e=0;_e<E.length;_e++){const Pe=y[_e],me=E[_e];Pe!==null&&me!==void 0&&me.update(Pe,Q,c||a)}tt&&tt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Ye=new Dc;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}}const Pm=new at,zc=new Ce;zc.set(-1,0,0,0,1,0,0,0,1);function Lm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Mc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,R,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,R):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Rt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Rt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=e.get(d),R=b.envMap,S=b.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(zc),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,R){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=R*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Dm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=r[S.id];y===void 0&&(p(S),y=f(S),r[S.id]=y,S.addEventListener("dispose",b));const w=E.program;n.updateUBOMapping(S,w);const _=e.render.frame;s[S.id]!==_&&(h(S),s[S.id]=_)}function f(S){const E=u();S.__bindingPointIndex=E;const y=i.createBuffer(),w=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=r[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,A=y.length;_<A;_++){const L=y[_];if(Array.isArray(L))for(let N=0,z=L.length;N<z;N++)m(L[N],_,N,w);else m(L,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,E,y,w){if(M(S,E,y,w)===!0){const _=S.__offset,A=S.value;if(Array.isArray(A)){let L=0;for(let N=0;N<A.length;N++){const z=A[N],k=d(z);v(z,S.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function v(S,E,y){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,y)}function M(S,E,y,w){const _=S.value,A=E+"_"+y;if(w[A]===void 0)return typeof _=="number"||typeof _=="boolean"?w[A]=_:ArrayBuffer.isView(_)?w[A]=_.slice():w[A]=_.clone(),!0;{const L=w[A];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return w[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function p(S){const E=S.uniforms;let y=0;const w=16;for(let A=0,L=E.length;A<L;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let z=0,k=N.length;z<k;z++){const I=N[z],G=Array.isArray(I.value)?I.value:[I.value];for(let K=0,X=G.length;K<X;K++){const ne=G[K],Y=d(ne),j=y%w,te=j%Y.boundary,Ae=j+te;y+=te,Ae!==0&&w-Ae<Y.storage&&(y+=w-Ae),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Y.storage}}}const _=y%w;return _>0&&(y+=w-_),S.__size=y,S.__cache={},this}function d(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",S),E}function b(S){const E=S.target;E.removeEventListener("dispose",b);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function R(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const Im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Um(){return dn===null&&(dn=new io(Im,16,16,Hn,ln),dn.name="DFG_LUT",dn.minFilter=gt,dn.magFilter=gt,dn.wrapS=tn,dn.wrapT=tn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Hc{constructor(e={}){const{canvas:t=uc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Bt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=m,p=new Set([Is,Ds,Ls]),d=new Set([Bt,on,yi,Ei,Cs,Ps]),b=new Uint32Array(4),R=new Int32Array(4),S=new U;let E=null,y=null;const w=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1,z=null,k=null,I=null,G=null;this._outputColorSpace=Mt;let K=0,X=0,ne=null,Y=-1,j=null;const te=new ct,Ae=new ct;let be=null;const tt=new Xe(0);let Ve=0,Ye=t.width,q=t.height,Q=1,_e=null,Pe=null;const me=new ct(0,0,Ye,q),Ne=new ct(0,0,Ye,q);let pt=!1;const Fe=new ro;let We=!1,nt=!1;const Be=new at,ot=new U,xt=new ct,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ut(){return ne===null?Q:1}let D=n;function bt(x,C){return t.getContext(x,C)}let Je,T,g,F,H,W,ie,re,Z,J,se,ye,he,ae,Ee,we,Le,P,oe,$,le,fe,ee;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),D===null){const C="webgl2";if(D=bt(C,x),D===null)throw bt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(x){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),Ge("WebGLRenderer: "+x.message),x}function Te(){Je=new Nf(D),Je.init(),le=new Bc(D,Je),T=new Tf(D,Je,e,le),g=new bm(D,Je),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),k=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),F=new Bf(D),H=new hm,W=new Tm(D,Je,g,H,T,le,F),ie=new Uf(L),re=new zh(D),fe=new Ef(D,re),Z=new Ff(D,re,F,fe),J=new Hf(D,Z,re,fe,F),P=new zf(D,T,W),Ee=new Af(H),se=new cm(L,ie,Je,T,fe,Ee),ye=new Lm(L,H),he=new dm,ae=new vm(Je),Le=new yf(L,ie,g,J,v,l),we=new Em(L,J,T),ee=new Dm(D,F,T,g),oe=new bf(D,Je,F),$=new Of(D,Je,F),F.programs=se.programs,L.capabilities=T,L.extensions=Je,L.properties=H,L.renderLists=he,L.shadowMap=we,L.state=g,L.info=F}M!==Bt&&(A=new Vf(M,t.width,t.height,o,r,s));const Se=new Cm(L,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(Ye,q,!1))},this.getSize=function(x){return x.set(Ye,q)},this.setSize=function(x,C,V=!0){if(Se.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=x,q=C,t.width=Math.floor(x*Q),t.height=Math.floor(C*Q),V===!0&&(t.style.width=x+"px",t.style.height=C+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Ye*Q,q*Q).floor()},this.setDrawingBufferSize=function(x,C,V){Ye=x,q=C,Q=V,t.width=Math.floor(x*V),t.height=Math.floor(C*V),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(M===Bt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(me)},this.setViewport=function(x,C,V,O){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,C,V,O),g.viewport(te.copy(me).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,C,V,O){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,C,V,O),g.scissor(Ae.copy(Ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(x){g.setScissorTest(pt=x)},this.setOpaqueSort=function(x){_e=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,V=!0){let O=0;if(x){let B=!1;if(ne!==null){const de=ne.texture.format;B=p.has(de)}if(B){const de=ne.texture.type,ge=d.has(de),ue=Le.getClearColor(),ve=Le.getClearAlpha(),Me=ue.r,Ie=ue.g,Oe=ue.b;ge?(b[0]=Me,b[1]=Ie,b[2]=Oe,b[3]=ve,D.clearBufferuiv(D.COLOR,0,b)):(R[0]=Me,R[1]=Ie,R[2]=Oe,R[3]=ve,D.clearBufferiv(D.COLOR,0,R))}else O|=D.COLOR_BUFFER_BIT}C&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),Le.dispose(),he.dispose(),ae.dispose(),H.dispose(),ie.dispose(),J.dispose(),fe.dispose(),ee.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",vo),Se.removeEventListener("sessionend",xo),Vn.stop()};function it(x){x.preventDefault(),tr("WebGLRenderer: Context Lost."),N=!0}function qe(){tr("WebGLRenderer: Context Restored."),N=!1;const x=F.autoReset,C=we.enabled,V=we.autoUpdate,O=we.needsUpdate,B=we.type;Te(),F.autoReset=x,we.enabled=C,we.autoUpdate=V,we.needsUpdate=O,we.type=B}function Kt(x){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function cn(x){const C=x.target;C.removeEventListener("dispose",cn),Wc(C)}function Wc(x){Xc(x),H.remove(x)}function Xc(x){const C=H.get(x).programs;C!==void 0&&(C.forEach(function(V){se.releaseProgram(V)}),x.isShaderMaterial&&se.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,V,O,B,de){C===null&&(C=It);const ge=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=Zc(x,C,V,O,B);g.setMaterial(O,ge);let ve=V.index,Me=1;if(O.wireframe===!0){if(ve=Z.getWireframeAttribute(V),ve===void 0)return;Me=2}const Ie=V.drawRange,Oe=V.attributes.position;let xe=Ie.start*Me,Ze=(Ie.start+Ie.count)*Me;de!==null&&(xe=Math.max(xe,de.start*Me),Ze=Math.min(Ze,(de.start+de.count)*Me)),ve!==null?(xe=Math.max(xe,0),Ze=Math.min(Ze,ve.count)):Oe!=null&&(xe=Math.max(xe,0),Ze=Math.min(Ze,Oe.count));const dt=Ze-xe;if(dt<0||dt===1/0)return;fe.setup(B,O,ue,V,ve);let st,et=oe;if(ve!==null&&(st=re.get(ve),et=$,et.setIndex(st)),B.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*ut()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(B.isLine){let Tt=O.linewidth;Tt===void 0&&(Tt=1),g.setLineWidth(Tt*ut()),B.isLineSegments?et.setMode(D.LINES):B.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else B.isPoints?et.setMode(D.POINTS):B.isSprite&&et.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Tt=B._multiDrawStarts,pe=B._multiDrawCounts,Pt=B._multiDrawCount,ke=ve?re.get(ve).bytesPerElement:1,Gt=H.get(O).currentProgram.getUniforms();for(let hn=0;hn<Pt;hn++)Gt.setValue(D,"_gl_DrawID",hn),et.render(Tt[hn]/ke,pe[hn])}else if(B.isInstancedMesh)et.renderInstances(xe,dt,B.count);else if(V.isInstancedBufferGeometry){const Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,Tt);et.renderInstances(xe,dt,pe)}else et.render(xe,dt)};function _o(x,C,V,O){z!==null&&x.isNodeMaterial&&z.setObject(O,x),We===!0&&Ee.setState(x,V,!1),x.transparent===!0&&x.side===Ot&&x.forceSinglePass===!1?(x.side=Rt,x.needsUpdate=!0,or(x,C,O),x.side=Bn,x.needsUpdate=!0,or(x,C,O),x.side=Ot):or(x,C,O)}this.compile=function(x,C,V=null){V===null&&(V=x),z!==null&&z.renderStart(x,C,V),y=ae.get(V),y.init(C),_.push(y),V.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),x!==V&&x.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(y.pushLight(B),B.castShadow&&y.pushShadow(B))}),y.setupLights(),z!==null&&z.updateLights(y.state.lightsArray),nt=this.localClippingEnabled,We=Ee.init(this.clippingPlanes,nt),We===!0&&Ee.setGlobalState(this.clippingPlanes,C),z!==null&&we.render(y.state.shadowsArray,V,C);const O=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const ue=de[ge];_o(ue,V,C,B),O.add(ue)}else _o(de,V,C,B),O.add(de)}),y=_.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(x,C,V=null){const O=this.compile(x,C,V);return new Promise(B=>{function de(){if(O.forEach(function(ge){const ve=H.get(ge).currentProgram;(ve===void 0||ve.isReady())&&O.delete(ge)}),O.size===0){B(x);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ws=null;function Yc(x){Ws&&Ws(x)}function vo(){Vn.stop()}function xo(){Vn.start()}const Vn=new Dc;Vn.setAnimationLoop(Yc),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(x){Ws=x,Se.setAnimationLoop(x),x===null?Vn.stop():Vn.start()},Se.addEventListener("sessionstart",vo),Se.addEventListener("sessionend",xo),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(x,C);const V=Se.enabled===!0&&Se.isPresenting===!0,O=A!==null&&(ne===null||V)&&A.begin(L,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(C),C=Se.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,C,ne),y=ae.get(x,_.length),y.init(C),y.state.textureUnits=W.getTextureUnits(),_.push(y),Be.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Fe.setFromProjectionMatrix(Be,rn,C.reversedDepth),nt=this.localClippingEnabled,We=Ee.init(this.clippingPlanes,nt),E=he.get(x,w.length),E.init(),w.push(E),Se.enabled===!0&&Se.isPresenting===!0){const ge=L.xr.getDepthSensingMesh();ge!==null&&Xs(ge,C,-1/0,L.sortObjects)}Xs(x,C,0,L.sortObjects),E.finish(),z!==null&&z.updateLights(y.state.lightsArray),L.sortObjects===!0&&E.sort(_e,Pe),lt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,lt&&Le.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Ee.beginShadows();const B=y.state.shadowsArray;if(we.render(B,x,C),We===!0&&Ee.endShadows(),(O&&A.hasRenderPass())===!1){const ge=E.opaque,ue=E.transmissive;if(y.setupLights(),C.isArrayCamera){const ve=C.cameras;if(ue.length>0)for(let Me=0,Ie=ve.length;Me<Ie;Me++){const Oe=ve[Me];Mo(ge,ue,x,Oe)}lt&&Le.render(x);for(let Me=0,Ie=ve.length;Me<Ie;Me++){const Oe=ve[Me];So(E,x,Oe,Oe.viewport)}}else ue.length>0&&Mo(ge,ue,x,C),lt&&Le.render(x),So(E,x,C)}ne!==null&&X===0&&(W.updateMultisampleRenderTarget(ne),W.updateRenderTargetMipmap(ne)),O&&A.end(L),x.isScene===!0&&x.onAfterRender(L,x,C),fe.resetDefaultState(),Y=-1,j=null,_.pop(),_.length>0?(y=_[_.length-1],W.setTextureUnits(y.state.textureUnits),We===!0&&Ee.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,z!==null&&z.renderEnd()};function Xs(x,C,V,O){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Fe)){O&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Be);const ge=J.update(x),ue=x.material;ue.visible&&E.push(x,ge,ue,V,xt.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Fe))){const ge=J.update(x),ue=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),xt.copy(ge.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(Be)),Array.isArray(ue)){const ve=ge.groups;for(let Me=0,Ie=ve.length;Me<Ie;Me++){const Oe=ve[Me],xe=ue[Oe.materialIndex];xe&&xe.visible&&E.push(x,ge,xe,V,xt.z,Oe,C)}}else ue.visible&&E.push(x,ge,ue,V,xt.z,null,C)}}const de=x.children;for(let ge=0,ue=de.length;ge<ue;ge++)Xs(de[ge],C,V,O)}function So(x,C,V,O){const{opaque:B,transmissive:de,transparent:ge}=x;y.setupLightsView(V),We===!0&&Ee.setGlobalState(L.clippingPlanes,V),O&&g.viewport(te.copy(O)),B.length>0&&ar(B,C,V),de.length>0&&ar(de,C,V),ge.length>0&&ar(ge,C,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Mo(x,C,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[O.id]===void 0){const xe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[O.id]=new Wt(1,1,{generateMipmaps:!0,type:xe?ln:Bt,minFilter:Fn,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const de=y.state.transmissionRenderTarget[O.id],ge=O.viewport||te;de.setSize(ge.z*L.transmissionResolutionScale,ge.w*L.transmissionResolutionScale);const ue=L.getRenderTarget(),ve=L.getActiveCubeFace(),Me=L.getActiveMipmapLevel();L.setRenderTarget(de),L.getClearColor(tt),Ve=L.getClearAlpha(),Ve<1&&L.setClearColor(16777215,.5),L.clear(),lt&&Le.render(V);const Ie=L.toneMapping;L.toneMapping=sn;const Oe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),y.setupLightsView(O),We===!0&&Ee.setGlobalState(L.clippingPlanes,O),ar(x,V,O),W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ze=0,dt=C.length;Ze<dt;Ze++){const st=C[Ze],{object:et,geometry:Tt,material:pe,group:Pt}=st;if(pe.side===Ot&&et.layers.test(O.layers)){const ke=pe.side;pe.side=Rt,pe.needsUpdate=!0,yo(et,V,O,Tt,pe,Pt),pe.side=ke,pe.needsUpdate=!0,xe=!0}}xe===!0&&(W.updateMultisampleRenderTarget(de),W.updateRenderTargetMipmap(de))}L.setRenderTarget(ue,ve,Me),L.setClearColor(tt,Ve),Oe!==void 0&&(O.viewport=Oe),L.toneMapping=Ie}function ar(x,C,V){const O=C.isScene===!0?C.overrideMaterial:null;for(let B=0,de=x.length;B<de;B++){const ge=x[B],{object:ue,geometry:ve,group:Me}=ge;let Ie=ge.material;Ie.allowOverride===!0&&O!==null&&(Ie=O),ue.layers.test(V.layers)&&yo(ue,C,V,ve,Ie,Me)}}function yo(x,C,V,O,B,de){z!==null&&B.isNodeMaterial&&z.setObject(x,B),x.onBeforeRender(L,C,V,O,B,de),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(L,C,V,O,x,de),B.transparent===!0&&B.side===Ot&&B.forceSinglePass===!1?(B.side=Rt,B.needsUpdate=!0,L.renderBufferDirect(V,C,O,B,x,de),B.side=Bn,B.needsUpdate=!0,L.renderBufferDirect(V,C,O,B,x,de),B.side=Ot):L.renderBufferDirect(V,C,O,B,x,de),x.onAfterRender(L,C,V,O,B,de)}function or(x,C,V){C.isScene!==!0&&(C=It);const O=H.get(x),B=y.state.lights,de=y.state.shadowsArray,ge=B.state.version,ue=se.getParameters(x,B.state,de,C,V,y.state.lightProbeGridArray),ve=se.getProgramCacheKey(ue);let Me=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,O.fog=C.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=ie.get(x.envMap||O.environment,Ie),O.envMapRotation=O.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Me===void 0&&(x.addEventListener("dispose",cn),Me=new Map,O.programs=Me);let Oe=Me.get(ve);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===ge)return bo(x,ue),Oe}else ue.uniforms=se.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,V,ue),x.onBeforeCompile(ue,L),Oe=se.acquireProgram(ue,ve),Me.set(ve,Oe),O.uniforms=ue.uniforms;const xe=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Ee.uniform),bo(x,ue),O.needsLights=$c(x),O.lightsStateVersion=ge,O.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.sunLights.value=B.state.sun,xe.sunLightShadows.value=B.state.sunShadow,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.sunShadowMatrix.value=B.state.sunShadowMatrix,xe.sunShadowCascade.value=B.state.sunShadowCascade,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=y.state.lightProbeGridArray.length>0,O.currentProgram=Oe,O.uniformsList=null,Oe}function Eo(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Br.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function bo(x,C){const V=H.get(x);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function qc(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(C.matrixWorld);for(let V=0,O=x.length;V<O;V++){const B=x[V];if(B.texture!==null&&B.boundingBox.containsPoint(S))return B}return null}function Zc(x,C,V,O,B){C.isScene!==!0&&(C=It),W.resetTextureUnits();const de=C.fog,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?C.environment:null,ue=ne===null?L.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ze.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Me=ie.get(O.envMap||ge,ve),Ie=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xe=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let st=sn;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(st=L.toneMapping);const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=et!==void 0?et.length:0,pe=H.get(O),Pt=y.state.lights;if(We===!0&&(nt===!0||x!==j)){const rt=x===j&&O.id===Y;Ee.setState(O,x,rt)}let ke=!1;O.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Pt.state.version||pe.outputColorSpace!==ue||B.isBatchedMesh&&pe.batching===!1||!B.isBatchedMesh&&pe.batching===!0||B.isBatchedMesh&&pe.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&pe.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&pe.instancing===!1||!B.isInstancedMesh&&pe.instancing===!0||B.isSkinnedMesh&&pe.skinning===!1||!B.isSkinnedMesh&&pe.skinning===!0||B.isInstancedMesh&&pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&pe.instancingMorph===!1&&B.morphTexture!==null||pe.envMap!==Me||O.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Ee.numPlanes||pe.numIntersection!==Ee.numIntersection)||pe.vertexAlphas!==Ie||pe.vertexTangents!==Oe||pe.morphTargets!==xe||pe.morphNormals!==Ze||pe.morphColors!==dt||pe.toneMapping!==st||pe.morphTargetsCount!==Tt||!!pe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,pe.__version=O.version);let Gt=pe.currentProgram;ke===!0&&(Gt=or(O,C,B),z&&O.isNodeMaterial&&z.onUpdateProgram(O,Gt,pe));let hn=!1,wn=!1,Qn=!1;const je=Gt.getUniforms(),ht=pe.uniforms;if(g.useProgram(Gt.program)&&(hn=!0,wn=!0,Qn=!0),O.id!==Y&&(Y=O.id,wn=!0),pe.needsLights){const rt=qc(y.state.lightProbeGridArray,B);pe.lightProbeGrid!==rt&&(pe.lightProbeGrid=rt,wn=!0)}if(hn||j!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),je.setValue(D,"projectionMatrix",x.projectionMatrix),je.setValue(D,"viewMatrix",x.matrixWorldInverse);const Cn=je.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,ot.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&je.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,wn=!0,Qn=!0)}if(pe.needsLights&&(Pt.state.sunShadowMap.length>0&&je.setValue(D,"sunShadowMap",Pt.state.sunShadowMap,W),Pt.state.directionalShadowMap.length>0&&je.setValue(D,"directionalShadowMap",Pt.state.directionalShadowMap,W),Pt.state.spotShadowMap.length>0&&je.setValue(D,"spotShadowMap",Pt.state.spotShadowMap,W),Pt.state.pointShadowMap.length>0&&je.setValue(D,"pointShadowMap",Pt.state.pointShadowMap,W)),B.isSkinnedMesh){je.setOptional(D,B,"bindMatrix"),je.setOptional(D,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),je.setValue(D,"boneTexture",rt.boneTexture,W))}B.isBatchedMesh&&(je.setOptional(D,B,"batchingTexture"),je.setValue(D,"batchingTexture",B._matricesTexture,W),je.setOptional(D,B,"batchingIdTexture"),je.setValue(D,"batchingIdTexture",B._indirectTexture,W),je.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&je.setValue(D,"batchingColorTexture",B._colorsTexture,W));const Rn=V.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&P.update(B,V,Gt),(wn||pe.receiveShadow!==B.receiveShadow)&&(pe.receiveShadow=B.receiveShadow,je.setValue(D,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&C.environment!==null&&(ht.envMapIntensity.value=C.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=Um()),wn){if(je.setValue(D,"toneMappingExposure",L.toneMappingExposure),pe.needsLights&&Kc(ht,Qn),de&&O.fog===!0&&ye.refreshFogUniforms(ht,de),ye.refreshMaterialUniforms(ht,O,Q,q,y.state.transmissionRenderTarget[x.id]),pe.needsLights&&pe.lightProbeGrid){const rt=pe.lightProbeGrid;ht.probesSH.value=rt.texture,ht.probesMin.value.copy(rt.boundingBox.min),ht.probesMax.value.copy(rt.boundingBox.max),ht.probesResolution.value.copy(rt.resolution)}Br.upload(D,Eo(pe),ht,W)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Br.upload(D,Eo(pe),ht,W),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(D,"center",B.center),je.setValue(D,"modelViewMatrix",B.modelViewMatrix),je.setValue(D,"normalMatrix",B.normalMatrix),je.setValue(D,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const rt=O.uniformsGroups;for(let Cn=0,jn=rt.length;Cn<jn;Cn++){const Ao=rt[Cn];ee.update(Ao,Gt),ee.bind(Ao,Gt)}}return Gt}function Kc(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function $c(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,C,V){const O=H.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=C,H.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const V=H.get(x);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,V=0){ne=x,K=C,X=V;let O=null,B=!1,de=!1;if(x){const ue=H.get(x);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(x.viewport),Ae.copy(x.scissor),be=x.scissorTest,g.viewport(te),g.scissor(Ae),g.setScissorTest(be),Y=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(x);else if(ue.__hasExternalTextures)W.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(ue.__boundDepthTexture!==Ie){if(Ie!==null&&H.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(x)}}const ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);const Me=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Me[C])?O=Me[C][V]:O=Me[C],B=!0):x.samples>0&&W.useMultisampledRTT(x)===!1?O=H.get(x).__webglMultisampledFramebuffer:Array.isArray(Me)?O=Me[V]:O=Me,te.copy(x.viewport),Ae.copy(x.scissor),be=x.scissorTest}else te.copy(me).multiplyScalar(Q).floor(),Ae.copy(Ne).multiplyScalar(Q).floor(),be=pt;if(V!==0&&(O=k),g.bindFramebuffer(D.FRAMEBUFFER,O)&&g.drawBuffers(x,O),g.viewport(te),g.scissor(Ae),g.setScissorTest(be),B){const ue=H.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,ue.__webglTexture,V)}else if(de){const ue=C;for(let ve=0;ve<x.textures.length;ve++){const Me=H.get(x.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Me.__webglTexture,V,ue)}}else if(x!==null&&V!==0){const ue=H.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,V)}Y=-1};function To(x){const C=H.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=T.textureFormatReadable(x.format),C.__typeReadable=T.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,V,O,B,de,ge,ue=0){if(!(x&&x.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){g.bindFramebuffer(D.FRAMEBUFFER,ve);try{const Me=x.textures[ue],Ie=Me.format,Oe=Me.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const xe=To(Me);if(xe.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-O&&V>=0&&V<=x.height-B&&D.readPixels(C,V,O,B,le.convert(Ie),le.convert(Oe),de)}finally{const Me=ne!==null?H.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(x,C,V,O,B,de,ge,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(C>=0&&C<=x.width-O&&V>=0&&V<=x.height-B){g.bindFramebuffer(D.FRAMEBUFFER,ve);const Me=x.textures[ue],Ie=Me.format,Oe=Me.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const xe=To(Me);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(C,V,O,B,le.convert(Ie),le.convert(Oe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const dt=ne!==null?H.get(ne).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,dt);const st=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jc(D,st,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ze),D.deleteSync(st),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,V=0){const O=Math.pow(2,-V),B=Math.floor(x.image.width*O),de=Math.floor(x.image.height*O),ge=C!==null?C.x:0,ue=C!==null?C.y:0;W.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ge,ue,B,de),g.unbindTexture()},this.copyTextureToTexture=function(x,C,V=null,O=null,B=0,de=0){let ge,ue,ve,Me,Ie,Oe,xe,Ze,dt;const st=x.isCompressedTexture?x.mipmaps[de]:x.image;if(V!==null)ge=V.max.x-V.min.x,ue=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Me=V.min.x,Ie=V.min.y,Oe=V.isBox3?V.min.z:0;else{const ht=Math.pow(2,-B);ge=Math.floor(st.width*ht),ue=Math.floor(st.height*ht),x.isDataArrayTexture?ve=st.depth:x.isData3DTexture?ve=Math.floor(st.depth*ht):ve=1,Me=0,Ie=0,Oe=0}O!==null?(xe=O.x,Ze=O.y,dt=O.z):(xe=0,Ze=0,dt=0);const et=le.convert(C.format),Tt=le.convert(C.type);let pe;C.isData3DTexture?(W.setTexture3D(C,0),pe=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(W.setTexture2DArray(C,0),pe=D.TEXTURE_2D_ARRAY):(W.setTexture2D(C,0),pe=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Pt=g.getParameter(D.UNPACK_ROW_LENGTH),ke=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Gt=g.getParameter(D.UNPACK_SKIP_PIXELS),hn=g.getParameter(D.UNPACK_SKIP_ROWS),wn=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe);const Qn=x.isDataArrayTexture||x.isData3DTexture,je=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const ht=H.get(x),Rn=H.get(C),rt=H.get(ht.__renderTarget),Cn=H.get(Rn.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let jn=0;jn<ve;jn++)Qn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(x).__webglTexture,B,Oe+jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(C).__webglTexture,de,dt+jn)),D.blitFramebuffer(Me,Ie,ge,ue,xe,Ze,ge,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||H.has(x)){const ht=H.get(x),Rn=H.get(C);g.bindFramebuffer(D.READ_FRAMEBUFFER,I),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let rt=0;rt<ve;rt++)Qn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,B,Oe+rt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,B),je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rn.__webglTexture,de,dt+rt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rn.__webglTexture,de),B!==0?D.blitFramebuffer(Me,Ie,ge,ue,xe,Ze,ge,ue,D.COLOR_BUFFER_BIT,D.NEAREST):je?D.copyTexSubImage3D(pe,de,xe,Ze,dt+rt,Me,Ie,ge,ue):D.copyTexSubImage2D(pe,de,xe,Ze,Me,Ie,ge,ue);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else je?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(pe,de,xe,Ze,dt,ge,ue,ve,et,Tt,st.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(pe,de,xe,Ze,dt,ge,ue,ve,et,st.data):D.texSubImage3D(pe,de,xe,Ze,dt,ge,ue,ve,et,Tt,st):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,xe,Ze,ge,ue,et,Tt,st.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,xe,Ze,st.width,st.height,et,st.data):D.texSubImage2D(D.TEXTURE_2D,de,xe,Ze,ge,ue,et,Tt,st);g.pixelStorei(D.UNPACK_ROW_LENGTH,Pt),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ke),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),g.pixelStorei(D.UNPACK_SKIP_ROWS,hn),g.pixelStorei(D.UNPACK_SKIP_IMAGES,wn),de===0&&C.generateMipmaps&&D.generateMipmap(pe),g.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&W.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?W.setTextureCube(x,0):x.isData3DTexture?W.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?W.setTexture2DArray(x,0):W.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){K=0,X=0,ne=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}const Nm=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ws,AddEquation:Zn,AddOperation:ec,AdditiveBlending:Ea,AgXToneMapping:Ha,AlphaFormat:qa,AlwaysCompare:hc,AlwaysDepth:Hr,AlwaysStencilFunc:rc,ArrayCamera:Pc,BackSide:Rt,BasicDepthPacking:nc,Box3:Ai,BoxGeometry:Ri,BufferAttribute:an,BufferGeometry:Zt,ByteType:ka,Cache:Hi,Camera:lo,CanvasTexture:rr,CineonToneMapping:Ba,ClampToEdgeWrapping:tn,Color:Xe,ColorManagement:ze,ConstantAlphaFactor:Jl,ConstantColorFactor:Kl,CubeCamera:Cc,CubeDepthTexture:Sc,CubeReflectionMapping:zn,CubeRefractionMapping:$n,CubeTexture:so,CubeUVReflectionMapping:sr,CullFaceBack:ya,CullFaceFront:Il,CullFaceNone:Dl,CustomBlending:Nl,CustomToneMapping:za,Data3DTexture:mc,DataArrayTexture:Qa,DataTexture:io,DefaultLoadingManager:wc,DepthFormat:gn,DepthStencilFormat:On,DepthTexture:bi,DoubleSide:Ot,DstAlphaFactor:Wl,DstColorFactor:Yl,EqualCompare:oc,EqualDepth:Vr,EquirectangularReflectionMapping:Ir,EquirectangularRefractionMapping:Ur,Euler:Xt,EventDispatcher:Gn,ExternalTexture:ao,Float32BufferAttribute:Ht,FloatType:nn,FrontSide:Bn,Frustum:ro,GLSL3:wa,GreaterCompare:lc,GreaterDepth:Wr,GreaterEqualCompare:Ns,GreaterEqualDepth:kr,Group:pn,HalfFloatType:ln,ImageBitmapLoader:Rc,ImageUtils:fc,IntType:Rs,InterleavedBuffer:vc,InterleavedBufferAttribute:ir,KeepStencilOp:Fr,Layers:Os,LessCompare:ac,LessDepth:Gr,LessEqualCompare:Us,LessEqualDepth:Mi,LinearFilter:gt,LinearMipmapLinearFilter:Fn,LinearMipmapNearestFilter:Nr,LinearSRGBColorSpace:Qi,LinearToneMapping:Fa,LinearTransfer:ji,Loader:oo,LoadingManager:Ac,Material:wi,MathUtils:mt,Matrix2:Ca,Matrix3:Ce,Matrix4:at,MaxEquation:zl,Mesh:$e,MeshBasicMaterial:Jn,MeshDepthMaterial:bc,MeshDistanceMaterial:Tc,MinEquation:Bl,MirroredRepeatWrapping:Yr,MixOperation:jl,MultiplyBlending:Ta,MultiplyOperation:Na,NearestFilter:yt,NearestMipmapLinearFilter:zi,NearestMipmapNearestFilter:tc,NeutralToneMapping:Ga,NeverCompare:sc,NeverDepth:zr,NoBlending:mn,NoColorSpace:En,NoToneMapping:sn,NormalBlending:xi,NotEqualCompare:cc,NotEqualDepth:Xr,Object3D:Ct,ObjectSpaceNormalMap:ic,OneFactor:Gl,OneMinusConstantAlphaFactor:Ql,OneMinusConstantColorFactor:$l,OneMinusDstAlphaFactor:Xl,OneMinusDstColorFactor:ql,OneMinusSrcAlphaFactor:Ua,OneMinusSrcColorFactor:kl,OrthographicCamera:co,PCFShadowMap:Vi,PCFSoftShadowMap:Ul,PMREMGenerator:Pa,PerspectiveCamera:Ft,Plane:yn,PlaneGeometry:An,Quaternion:qt,R11_EAC_Format:es,RED_GREEN_RGTC2_Format:Ji,RED_RGTC1_Format:Ss,REVISION:As,RG11_EAC_Format:$i,RGBAFormat:kt,RGBAIntegerFormat:Is,RGBA_ASTC_10x10_Format:ps,RGBA_ASTC_10x5_Format:us,RGBA_ASTC_10x6_Format:ds,RGBA_ASTC_10x8_Format:fs,RGBA_ASTC_12x10_Format:ms,RGBA_ASTC_12x12_Format:gs,RGBA_ASTC_4x4_Format:is,RGBA_ASTC_5x4_Format:rs,RGBA_ASTC_5x5_Format:ss,RGBA_ASTC_6x5_Format:as,RGBA_ASTC_6x6_Format:os,RGBA_ASTC_8x5_Format:ls,RGBA_ASTC_8x6_Format:cs,RGBA_ASTC_8x8_Format:hs,RGBA_BPTC_Format:_s,RGBA_ETC2_EAC_Format:jr,RGBA_PVRTC_2BPPV1_Format:$r,RGBA_PVRTC_4BPPV1_Format:Kr,RGBA_S3TC_DXT1_Format:Wi,RGBA_S3TC_DXT3_Format:Xi,RGBA_S3TC_DXT5_Format:Yi,RGBFormat:Za,RGB_BPTC_SIGNED_Format:vs,RGB_BPTC_UNSIGNED_Format:xs,RGB_ETC1_Format:Jr,RGB_ETC2_Format:Qr,RGB_PVRTC_2BPPV1_Format:Zr,RGB_PVRTC_4BPPV1_Format:qr,RGB_S3TC_DXT1_Format:ki,RGFormat:Hn,RGIntegerFormat:Ds,RawShaderMaterial:Ec,Ray:no,Raycaster:Lc,RedFormat:Ka,RedIntegerFormat:Ls,ReinhardToneMapping:Oa,RenderTarget:pc,RepeatWrapping:Ki,ReverseSubtractEquation:Ol,SIGNED_R11_EAC_Format:ts,SIGNED_RED_GREEN_RGTC2_Format:ys,SIGNED_RED_RGTC1_Format:Ms,SIGNED_RG11_EAC_Format:ns,SRGBColorSpace:Mt,SRGBTransfer:Ke,Scene:_c,ShaderChunk:De,ShaderLib:jt,ShaderMaterial:Yt,ShortType:Wa,Sphere:Bs,SphereGeometry:zs,Sprite:bs,SpriteMaterial:to,SrcAlphaFactor:Ia,SrcAlphaSaturateFactor:Zl,SrcColorFactor:Vl,StaticDrawUsage:$a,SubtractEquation:Fl,SubtractiveBlending:ba,TangentSpaceNormalMap:Aa,Texture:Et,TextureSource:Fs,Triangle:zt,UVMapping:Va,Uint16BufferAttribute:ja,Uint32BufferAttribute:eo,UniformsLib:ce,UniformsUtils:yc,UnsignedByteType:Bt,UnsignedInt101111Type:Ya,UnsignedInt248Type:Ei,UnsignedInt5999Type:Xa,UnsignedIntType:on,UnsignedShort4444Type:Cs,UnsignedShort5551Type:Ps,UnsignedShortType:yi,VSMShadowMap:_i,Vector2:Ue,Vector3:U,Vector4:ct,WebGLCoordinateSystem:rn,WebGLCubeRenderTarget:ho,WebGLRenderTarget:Wt,WebGLRenderer:Hc,WebGLUtils:Bc,WebGPUCoordinateSystem:er,WebXRController:Or,ZeroFactor:Hl,createCanvasElement:uc,error:Ge,log:tr,warn:Re,warnOnce:Kn},Symbol.toStringTag,{value:"Module"}));class Fm{listeners=new Map;on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.off(e,t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,...t){this.listeners.get(e)?.forEach(n=>n(...t))}once(e,t){const n=this.on(e,((...r)=>{t(...r),n()}))}clear(){this.listeners.clear()}}class Om{camera;yaw=0;pitch=0;fov;targetYaw=0;targetPitch=0;targetFov;minFov;maxFov;damping;pitchLimit;dragSensitivity;zoomSensitivity;isPointerDown=!1;pointerStartX=0;pointerStartY=0;startYaw=0;startPitch=0;bus;container;domElement;disposers=[];inputLocked=!1;constructor(e,t,n,r={}){this.container=e,this.domElement=t,this.bus=n;const s=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight;this.fov=r.fov??75,this.targetFov=this.fov,this.minFov=r.minFov??30,this.maxFov=r.maxFov??100,this.damping=r.dampingFactor??.12,this.pitchLimit=r.pitchLimit??Math.PI/2.2,this.dragSensitivity=r.dragSensitivity??.003,this.zoomSensitivity=r.zoomSensitivity??.04,this.camera=new Ft(this.fov,s/a,.1,3e3),this.camera.position.set(0,0,0),this.bindPointerEvents(),this.disposers.push(n.on("interaction:lock",()=>{this.inputLocked=!0}),n.on("interaction:unlock",()=>{this.inputLocked=!1}))}setOrientation(e,t,n){this.yaw=e,this.pitch=t,this.targetYaw=e,this.targetPitch=t,n!==void 0&&(this.fov=n,this.targetFov=n,this.camera.fov=n,this.camera.updateProjectionMatrix()),this.applyRotation()}setTarget(e,t,n){this.targetYaw=e,this.targetPitch=Math.max(-this.pitchLimit,Math.min(this.pitchLimit,t)),n!==void 0&&(this.targetFov=Math.max(this.minFov,Math.min(this.maxFov,n)))}setRaw(e,t,n){this.yaw=e,this.pitch=t,this.targetYaw=e,this.targetPitch=t,n!==void 0&&(this.fov=n,this.camera.fov=n,this.camera.updateProjectionMatrix()),this.applyRotation()}getYaw(){return this.yaw}getPitch(){return this.pitch}getFov(){return this.fov}getTargetYaw(){return this.targetYaw}getTargetPitch(){return this.targetPitch}update(){let e=!1;const t=this.targetYaw-this.yaw,n=this.targetPitch-this.pitch;(Math.abs(t)>1e-4||Math.abs(n)>1e-4)&&(this.yaw+=t*this.damping,this.pitch+=n*this.damping,this.applyRotation(),e=!0),Math.abs(this.targetFov-this.fov)>.05&&(this.fov+=(this.targetFov-this.fov)*this.damping,this.camera.fov=this.fov,this.camera.updateProjectionMatrix(),e=!0),e&&this.bus.emit("camera:move",{yaw:this.yaw,pitch:this.pitch})}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){this.disposers.forEach(e=>e()),this.disposers=[]}applyRotation(){const e=new Xt(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(e)}bindPointerEvents(){const e=this.domElement,t=a=>{this.inputLocked||a.target===e&&(this.isPointerDown=!0,this.pointerStartX=a.clientX,this.pointerStartY=a.clientY,this.startYaw=this.targetYaw,this.startPitch=this.targetPitch,e.setPointerCapture(a.pointerId),this.bus.emit("interaction:dragstart",{x:a.clientX,y:a.clientY}))},n=a=>{if(!this.isPointerDown||this.inputLocked)return;const o=a.clientX-this.pointerStartX,l=a.clientY-this.pointerStartY;this.targetYaw=this.startYaw+o*this.dragSensitivity,this.targetPitch=Math.max(-this.pitchLimit,Math.min(this.pitchLimit,this.startPitch+l*this.dragSensitivity))},r=()=>{this.isPointerDown&&(this.isPointerDown=!1,this.bus.emit("interaction:dragend"))},s=a=>{this.inputLocked||(a.preventDefault(),this.targetFov=Math.max(this.minFov,Math.min(this.maxFov,this.targetFov+a.deltaY*this.zoomSensitivity)),this.bus.emit("camera:fov",{fov:this.targetFov}))};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",n),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("wheel",s,{passive:!1}),this.disposers.push(()=>e.removeEventListener("pointerdown",t),()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerup",r),()=>e.removeEventListener("pointercancel",r),()=>e.removeEventListener("wheel",s))}}const Bm=`
  varying vec3 vLocalPos;
  varying vec3 vLocalCam;

  void main() {
    vLocalPos = position;
    // Convert the world-space camera into this sphere's local coordinates.
    // Subtracting the model translation is essential during a walk transition:
    // the incoming panorama has its own centre in front of the current one.
    // With Three's orthonormal rotation matrix, row-vector multiplication by R
    // is equivalent to applying inverse(R) to the world-space displacement.
    vec3 sphereWorldCentre = modelMatrix[3].xyz;
    vLocalCam = (cameraPosition - sphereWorldCentre) * mat3(modelMatrix);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,zm=`
  varying vec3 vLocalPos;
  varying vec3 vLocalCam;
  uniform sampler2D map;
  uniform float opacity;
  uniform float radius;
  uniform float brightness;
  uniform float highlightCompression;

  const float PI = 3.14159265358979323846;

  void main() {
    // Raycast from camera (possibly offset for fisheye) through polygon
    // surface to the true sphere surface.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = normalize(vLocalCam + t * rayDir);

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;

    gl_FragColor = texture2D(map, vec2(u, v));
    gl_FragColor.rgb *= brightness;

    // Roll off only harsh highlights while preserving normal mid-tones.
    float luminance = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    const float highlightStart = 0.55;
    float excess = max(luminance - highlightStart, 0.0);
    float compressedLuminance = highlightStart
      + excess / (1.0 + highlightCompression * excess * 5.0);
    if (luminance > highlightStart) {
      gl_FragColor.rgb *= compressedLuminance / luminance;
    }
    gl_FragColor.a *= opacity;
    // Texture sampling is performed in linear space. Convert the final colour
    // back to the renderer output colour space; without this, mid-tones appear
    // much darker and more contrasty than the original sRGB panorama.
    #include <colorspace_fragment>
  }
`;class Nn{scene;renderer;imageBitmapLoader;sphereA;sphereB;radius;transitionDuration;defaultTransition;isTransitioning=!1;immediateLoadGeneration=0;textureCache=new Map;pendingTextures=new Map;maxCachedTextures;lastTextureInfo=null;get textureInfo(){return this.lastTextureInfo}static blankTex=(()=>{const e=new io(new Uint8Array([0,0,0,0]),1,1);return e.needsUpdate=!0,e})();makeShaderMat(e){return new Yt({uniforms:{map:{value:Nn.blankTex},opacity:{value:e},radius:{value:this.radius},brightness:{value:1.25},highlightCompression:{value:0}},vertexShader:Bm,fragmentShader:zm,side:Rt,transparent:!0,depthWrite:!1,toneMapped:!1})}constructor(e,t,n={}){this.scene=e,this.renderer=t,this.imageBitmapLoader=new Rc,this.imageBitmapLoader.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),this.radius=n.radius??600,this.transitionDuration=n.transitionDuration??700,this.defaultTransition=n.defaultTransition??"crossfade",this.maxCachedTextures=Math.max(0,Math.floor(n.maxCachedTextures??2));const r=n.segments??128,s=Math.round(r*.75),a=new zs(this.radius,r,s);this.sphereA=new $e(a,this.makeShaderMat(1)),this.sphereB=new $e(a.clone(),this.makeShaderMat(0)),this.sphereA.renderOrder=0,this.sphereB.renderOrder=1,this.sphereB.visible=!1,this.scene.add(this.sphereA),this.scene.add(this.sphereB)}get busy(){return this.isTransitioning}get transitionStyle(){return this.defaultTransition}setBrightness(e){const t=Math.max(.5,Math.min(2,e));this.sphereA.material.uniforms.brightness.value=t,this.sphereB.material.uniforms.brightness.value=t}setHighlightCompression(e){const t=Math.max(0,Math.min(1,e));this.sphereA.material.uniforms.highlightCompression.value=t,this.sphereB.material.uniforms.highlightCompression.value=t}setRotation(e){this.sphereA.rotation.y=e}async preload(e){if(this.maxCachedTextures===0)return this.loadTexture(e);if(this.textureCache.has(e)){const r=this.textureCache.get(e);return this.textureCache.delete(e),this.textureCache.set(e,r),r}const t=this.pendingTextures.get(e);if(t)return t;const n=this.loadTexture(e);this.pendingTextures.set(e,n);try{return await n}finally{this.pendingTextures.delete(e)}}async setImmediate(e,t=0){const n=++this.immediateLoadGeneration,r=await this.preload(e);if(n!==this.immediateLoadGeneration)return this.maxCachedTextures===0&&this.disposeTexture(r),!1;const s=this.sphereA.material.uniforms.map.value;return this.sphereA.material.uniforms.map.value=r,this.sphereA.material.uniforms.opacity.value=1,this.sphereA.position.set(0,0,0),this.sphereA.rotation.y=t,this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=Nn.blankTex,this.maxCachedTextures===0?s!==r&&s!==Nn.blankTex&&this.disposeTexture(s):this.trimTextureCache(),!0}setFisheye(e,t){if(e<=0){t.position.set(0,0,0);return}const n=new U(0,0,-1).applyQuaternion(t.quaternion),r=e/2*this.radius;t.position.copy(n).multiplyScalar(-r)}async transition(e,t=this.defaultTransition,n,r,s=0){if(this.isTransitioning)return;this.isTransitioning=!0;const a=await this.preload(e);switch(this.sphereB.rotation.y=s,t){case"forward":await this.doForward(a,n,r);break;case"fly-through":await this.doFlyThrough(a,n,r);break;case"crossfade-pan":await this.doCrossfade(a,r);break;default:await this.doCrossfade(a,r);break}this.isTransitioning=!1}dispose(){const e=new Set(this.textureCache.values());e.add(this.sphereA.material.uniforms.map.value),e.add(this.sphereB.material.uniforms.map.value),e.delete(Nn.blankTex),e.forEach(t=>this.disposeTexture(t)),this.textureCache.clear(),this.pendingTextures.clear(),this.sphereA.geometry.dispose(),this.sphereA.material.dispose(),this.sphereB.geometry.dispose(),this.sphereB.material.dispose()}loadTexture(e){return new Promise((t,n)=>{this.imageBitmapLoader.load(e,r=>{const s=new Et(r);s.flipY=!1,s.colorSpace=Mt,s.wrapS=Ki,s.wrapT=tn,s.minFilter=gt,s.magFilter=gt,s.generateMipmaps=!1,s.anisotropy=1,s.needsUpdate=!0,this.renderer.initTexture(s),this.maxCachedTextures>0&&(this.textureCache.set(e,s),this.trimTextureCache(s));const a=s.image;a&&(this.lastTextureInfo={url:e,srcWidth:"naturalWidth"in a?a.naturalWidth:a.width,srcHeight:"naturalHeight"in a?a.naturalHeight:a.height}),t(s)},void 0,n)})}useTexture(e){this.sphereA.material.uniforms.map.value=e,this.sphereA.material.uniforms.opacity.value=1,this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=Nn.blankTex,this.sphereB.material.uniforms.opacity.value=0,this.trimTextureCache()}trimTextureCache(e){if(this.maxCachedTextures===0||this.textureCache.size<=this.maxCachedTextures)return;const t=new Set([this.sphereA.material.uniforms.map.value,this.sphereB.material.uniforms.map.value]);e&&t.add(e);for(const[n,r]of this.textureCache){if(this.textureCache.size<=this.maxCachedTextures)break;t.has(r)||(this.textureCache.delete(n),this.disposeTexture(r))}}disposeTexture(e){e.dispose();const t=e.image;if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap){t.close();return}typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement&&(t.src=""),e.image=null}doCrossfade(e,t){this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.set(0,0,0),this.sphereB.visible=!0;const n=this.transitionDuration,r=performance.now();return new Promise(s=>{const a=o=>{const l=Math.min((o-r)/n,1),c=l<.5?2*l*l:-1+(4-2*l)*l;this.sphereA.material.uniforms.opacity.value=1-c,this.sphereB.material.uniforms.opacity.value=c,t?.(l),l<1?requestAnimationFrame(a):(this.promoteSphereB(e),s())};requestAnimationFrame(a)})}doForward(e,t,n){this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0;const r=(t?.clone().normalize()??new U(0,0,-1)).multiplyScalar(this.radius*.28);this.sphereB.position.copy(r),this.sphereB.visible=!0;const s=this.transitionDuration,a=performance.now(),o=(l,c,f)=>{const u=mt.clamp((f-l)/(c-l),0,1);return u*u*u*(u*(u*6-15)+10)};return new Promise(l=>{const c=f=>{const u=Math.min((f-a)/s,1),h=o(.28,.78,u);this.sphereA.material.uniforms.opacity.value=1,this.sphereB.material.uniforms.opacity.value=h,n?.(u),u<1?requestAnimationFrame(c):(this.promoteSphereB(e),l())};requestAnimationFrame(c)})}doFlyThrough(e,t,n){const r=this.radius*.85,a=(t?.clone().normalize()??new U(0,0,-1)).multiplyScalar(r);this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.copy(a),this.sphereB.visible=!0;const o=this.transitionDuration,l=performance.now();return new Promise(c=>{const f=u=>{const h=Math.min((u-l)/o,1),m=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;this.sphereA.material.uniforms.opacity.value=1-m,this.sphereB.material.uniforms.opacity.value=m,n?.(h),h<1?requestAnimationFrame(f):(this.promoteSphereB(e),c())};requestAnimationFrame(f)})}promoteSphereB(e){this.sphereA.material.uniforms.map.value=e,this.sphereA.material.uniforms.opacity.value=1,this.sphereA.position.set(0,0,0),this.sphereA.rotation.y=this.sphereB.rotation.y,this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=Nn.blankTex,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.set(0,0,0),this.trimTextureCache()}}class Hm{ctx;_initialized=!1;_init(e){this.ctx=e,this._initialized=!0,this.onInit()}_update(e){this._initialized&&this.onUpdate(e)}_destroy(){this.onDestroy(),this._initialized=!1}onInit(){}onUpdate(e){}onDestroy(){}}class Gc{bus;camera;pano;scene;renderer;container;plugins=new Map;rafId=null;lastTime=null;currentScene=null;isTransitioning=!1;introDelay;_introCountdownTimer=null;resizeObserver=null;lastContainerSize={width:0,height:0};constructor(e){this.container=e.container,this.scene=new _c,this.bus=new Fm;const t=e.container.clientWidth||window.innerWidth,n=e.container.clientHeight||window.innerHeight;this.renderer=new Hc({antialias:e.antialias??!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(e.pixelRatio??Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=ws,this.renderer.toneMappingExposure=e.toneMappingExposure??1,this.container.appendChild(this.renderer.domElement),this.camera=new Om(this.container,this.renderer.domElement,this.bus,e.camera??{}),this.pano=new Nn(this.scene,this.renderer,e.pano??{}),window.addEventListener("resize",this.onResize),"ResizeObserver"in window&&(this.resizeObserver=new ResizeObserver(r=>{const s=r[0];if(!s)return;const a=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);a<=0||o<=0||this.resizeTo(a,o)}),this.resizeObserver.observe(this.container)),this.introDelay=e.introDelay??0,this.rafId=requestAnimationFrame(this.loop)}use(e){return this.plugins.has(e.id)?(console.warn(`[View360Engine] Plugin "${e.id}" already registered.`),this):(this.plugins.set(e.id,e),e._init({scene:this.scene,camera:this.camera,renderer:this.renderer,bus:this.bus,container:this.container}),this)}getPlugin(e){return this.plugins.get(e)}async loadScene(e,t=!0){this._introCountdownTimer!==null&&(clearTimeout(this._introCountdownTimer),this._introCountdownTimer=null);const n=this.camera.getYaw(),r=this.camera.getPitch(),s=e.defaultCameraEnabled===!0;this.currentScene=e,this.notifyPluginsSceneLoad(e),this.pano.setBrightness(e.brightness??1.25),this.pano.setHighlightCompression(e.highlightCompression??0);const a=e.previewPanorama??e.panorama;if(await this.pano.setImmediate(a,e.panoramaRotation??0)){if(t){const l=s?e.initialYaw??0:n,c=s?e.initialPitch??0:r,f=s?e.initialFov??75:this.camera.getFov();this.camera.setRaw(-Math.PI/2,-Math.PI/2,130),this.introDelay>0&&(this.bus.emit("interaction:lock"),this.bus.emit("intro:countdown:start",{delayMs:this.introDelay}),await new Promise(u=>{const h=this.renderer.domElement,m=v=>{clearTimeout(this._introCountdownTimer),this._introCountdownTimer=null,h.removeEventListener("click",m);const M=h.getBoundingClientRect(),p=(v.clientX-M.left)/M.width*2-1,d=-((v.clientY-M.top)/M.height)*2+1,b=130*Math.PI/180/2,R=l+p*b*(M.width/M.height),S=c-d*b;this.bus.emit("intro:countdown:skip",{yaw:R,pitch:S}),u()};h.addEventListener("click",m),this._introCountdownTimer=setTimeout(()=>{h.removeEventListener("click",m),this._introCountdownTimer=null,u()},this.introDelay)}),this.bus.emit("interaction:unlock")),await this.playLittlePlanetIntro(l,c,f)}else s?this.camera.setOrientation(e.initialYaw??0,e.initialPitch??0,e.initialFov??75):this.camera.setOrientation(n,r);this.bus.emit("scene:loaded",{scene:e}),this.notifyPluginsSceneReady(e)}}setSceneRotation(e){const t=Number.isFinite(e)?e:0;this.currentScene&&(this.currentScene.panoramaRotation=t),this.pano.setRotation(t),this.bus.emit("scene:rotation",{rotation:t})}async navigateTo(e,t,n,r){if(this.isTransitioning)return;this.isTransitioning=!0;const s=this.currentScene;this.bus.emit("scene:transition:start",{from:s,to:e}),this.notifyPluginsSceneLoad(e),this.pano.setBrightness(e.brightness??1.25),this.pano.setHighlightCompression(e.highlightCompression??0);const a=n??this.camera.getYaw(),o=r??this.camera.getPitch(),l=new(await Jc(async()=>{const{Vector3:y}=await Promise.resolve().then(()=>Nm);return{Vector3:y}},void 0,import.meta.url)).Vector3(-Math.sin(a)*Math.cos(o),Math.sin(o),-Math.cos(a)*Math.cos(o)),c=this.camera.camera.position.clone(),f=l.clone().multiplyScalar(this.pano.radius*.85),u=this.camera.getYaw(),h=this.camera.getPitch(),m=e.defaultCameraEnabled===!0,v=m?e.initialYaw??0:u,M=m?e.initialPitch??0:h,p=m?e.initialFov??75:this.camera.getFov(),d=Math.atan2(Math.sin(v-u),Math.cos(v-u)),b=this.camera.getFov(),R=this.pano.radius*.28,S=t??this.pano.transitionStyle,E=e.previewPanorama??e.panorama;await this.pano.transition(E,S,l,y=>{const w=y<.5?4*y*y*y:1-Math.pow(-2*y+2,3)/2;if(m&&this.camera.setRaw(u+d*w,h+(M-h)*w,b+(p-b)*w),S==="forward"){this.camera.camera.position.copy(l).multiplyScalar(R*w);return}if(S!=="fly-through")return;this.camera.camera.position.lerpVectors(c,f,w*.88);const _=b+Math.sin(y*Math.PI)*20;this.camera.camera.fov=_,this.camera.camera.updateProjectionMatrix()},e.panoramaRotation??0),this.camera.camera.position.set(0,0,0),this.camera.camera.fov=b,this.camera.camera.updateProjectionMatrix(),this.camera.setOrientation(v,M,p),this.currentScene=e,this.isTransitioning=!1,this.bus.emit("scene:transition:end",{scene:e}),this.notifyPluginsSceneReady(e)}async upgradeCurrentPanorama(e,t){if(!t||this.currentScene?.id!==e||this.isTransitioning)return!1;const n=await this.pano.preload(t);return this.currentScene?.id!==e||this.isTransitioning?!1:(this.pano.useTexture(n),!0)}async playLittlePlanetIntro(e=0,t=0,n=75){const s=mt.clamp(n,30,120),a=-Math.PI/2,o=e+Math.PI/2,l=2,c=2500,f=performance.now(),u=h=>h<.5?2*h*h:-1+(4-2*h)*h;return this.camera.setRaw(o,a,130),this.pano.setFisheye(l,this.camera.camera),new Promise(h=>{const m=v=>{const M=Math.min((v-f)/c,1),p=u(M),d=130+(s-130)*p,b=o+(e-o)*p,R=a+(t-a)*p,S=l*(1-p);this.camera.setRaw(b,R,d),this.pano.setFisheye(S,this.camera.camera),M<1?requestAnimationFrame(m):(this.camera.camera.position.set(0,0,0),this.camera.setOrientation(e,t,s),this.bus.emit("intro:end"),h())};requestAnimationFrame(m)})}getCurrentScene(){return this.currentScene}static QUALITY_DPR={performance:1,balanced:1.5,quality:2,native:1/0};setQualityMode(e){const t=Gc.QUALITY_DPR[e]??2,n=t===1/0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t);this.renderer.setPixelRatio(n);const r=this.container.clientWidth||window.innerWidth,s=this.container.clientHeight||window.innerHeight;this.renderer.setSize(r,s)}getDiagnostics(){const e=this.renderer.getContext(),t=this.renderer.capabilities,n=this.renderer.domElement,r=this.pano.textureInfo,s=t.maxTextureSize,a=r?.srcWidth??0,o=r?.srcHeight??0,l=this.renderer.getPixelRatio(),c=Math.min(a,s),f=Math.min(o,s),u=this.camera.getFov()*Math.PI/180,h=n.width,M=a*(u/(2*Math.PI))/h;return{srcWidth:a,srcHeight:o,gpuWidth:c,gpuHeight:f,maxTexSize:s,isCapped:a>s||o>s,canvasCssW:n.clientWidth,canvasCssH:n.clientHeight,canvasGlW:n.width,canvasGlH:n.height,dpr:l,deviceDpr:window.devicePixelRatio,fov:this.camera.getFov(),pixelDensity:+M.toFixed(2),textureUrl:r?.url??"",vendor:e.getParameter(e.VENDOR),renderer:e.getParameter(e.RENDERER)}}destroy(){this.rafId!==null&&cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.plugins.forEach(e=>e._destroy()),this.plugins.clear(),this.camera.dispose(),this.pano.dispose(),this.bus.emit("destroy"),this.bus.clear(),this.renderer.dispose(),this.renderer.domElement.remove()}loop=e=>{this.rafId=requestAnimationFrame(this.loop);const t=this.lastTime!==null?(e-this.lastTime)/1e3:0;this.lastTime=e,this.isTransitioning||this.camera.update(),this.plugins.forEach(n=>n._update(t)),this.renderer.render(this.scene,this.camera.camera)};onResize=()=>{const e=this.container.getBoundingClientRect();this.resizeTo(Math.round(e.width)||window.innerWidth,Math.round(e.height)||window.innerHeight)};resizeTo(e,t){e===this.lastContainerSize.width&&t===this.lastContainerSize.height||(this.lastContainerSize={width:e,height:t},this.camera.onResize(e,t),this.renderer.setSize(e,t,!0))}notifyPluginsSceneLoad(e){this.plugins.forEach(t=>t.onSceneLoad?.(e))}notifyPluginsSceneReady(e){this.plugins.forEach(t=>t.onSceneReady?.(e))}}const xl=new U,Gm=new qt,Sl=new U;class Vm extends Ct{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const fn=new at,km=new at;class Wm{constructor(e={}){const t=this;let n,r,s,a;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:n,height:r}},this.render=function(p,d){const b=d.projectionMatrix.elements[5]*a;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(r/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let R,S;d.isOrthographicCamera&&(R=-(d.right+d.left)/2,S=(d.top+d.bottom)/2);const E=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,y=d.isOrthographicCamera?`scale( ${E} )scale(`+b+")translate("+u(R)+"px,"+u(S)+"px)"+h(d.matrixWorldInverse):`scale( ${E} )translateZ(`+b+"px)"+h(d.matrixWorldInverse),_=(d.isPerspectiveCamera?"perspective("+b+"px) ":"")+y+"translate("+s+"px,"+a+"px)";o.camera.style!==_&&(f.style.transform=_,o.camera.style=_),M(p,p,d)},this.setSize=function(p,d){n=p,r=d,s=n/2,a=r/2,l.style.width=p+"px",l.style.height=d+"px",c.style.width=p+"px",c.style.height=d+"px",f.style.width=p+"px",f.style.height=d+"px"};function u(p){return Math.abs(p)<1e-10?0:p}function h(p){const d=p.elements;return"matrix3d("+u(d[0])+","+u(-d[1])+","+u(d[2])+","+u(d[3])+","+u(d[4])+","+u(-d[5])+","+u(d[6])+","+u(d[7])+","+u(d[8])+","+u(-d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(-d[13])+","+u(d[14])+","+u(d[15])+")"}function m(p){const d=p.elements;return"translate(-50%,-50%)"+("matrix3d("+u(d[0])+","+u(d[1])+","+u(d[2])+","+u(d[3])+","+u(-d[4])+","+u(-d[5])+","+u(-d[6])+","+u(-d[7])+","+u(d[8])+","+u(d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(d[13])+","+u(d[14])+","+u(d[15])+")")}function v(p){p.isCSS3DObject&&(p.element.style.display="none");for(let d=0,b=p.children.length;d<b;d++)v(p.children[d])}function M(p,d,b,R){if(p.visible===!1){v(p);return}if(p.isCSS3DObject){const S=p.layers.test(b.layers)===!0,E=p.element;if(E.style.display=S===!0?"":"none",S===!0){p.onBeforeRender(t,d,b);let y;p.isCSS3DSprite?(fn.copy(b.matrixWorldInverse),fn.transpose(),p.rotation2D!==0&&fn.multiply(km.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(xl,Gm,Sl),fn.setPosition(xl),fn.scale(Sl),fn.elements[3]=0,fn.elements[7]=0,fn.elements[11]=0,fn.elements[15]=1,y=m(fn)):y=m(p.matrixWorld);const w=o.objects.get(p);if(w===void 0||w.style!==y){E.style.transform=y;const _={style:y};o.objects.set(p,_)}E.parentNode!==f&&f.appendChild(E),p.onAfterRender(t,d,b)}}for(let S=0,E=p.children.length;S<E;S++)M(p.children[S],d,b)}}}const Xm=520,Ym=120,qm=580,Ml=256,Dr=52;class Vc{supports(e){return e.plugin===this.markerType}createObject(e){const t=document.createElement("canvas");t.width=Ml,t.height=Ml;const n=t.getContext("2d");this.drawSprite(n,e.label||this.style.label);const r=new rr(t);r.colorSpace=Mt;const s=new to({map:r,depthTest:!1,transparent:!0,opacity:0}),a=new bs(s);return this.repositionObject(a,e.yaw,e.pitch),a.scale.set(Dr,Dr,1),a.renderOrder=999,a.userData={marker:e,baseScale:Dr,markerType:this},a}updateObject(e,t,n,r,s,a){const l=(e.userData.baseScale??Dr)*(n?s:1)*r;e.scale.set(l,l,1)}repositionObject(e,t,n){this.positionOnSphere(e,t,n)}positionOnSphere(e,t,n,r){const s=mt.clamp(Number.isFinite(r)?r:Xm,Ym,qm);e.position.set(-s*Math.sin(t)*Math.cos(n),s*Math.sin(n),-s*Math.cos(t)*Math.cos(n))}updateProjection(e,t){}playActivationAnimation(e){return Promise.resolve()}disposeObject(e){e instanceof bs&&(e.material.map?.dispose(),e.material.dispose())}drawSprite(e,t){e.save(),e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=14,e.shadowOffsetY=5,e.beginPath(),e.arc(128,88,50,0,Math.PI*2),e.fillStyle=this.style.color,e.fill(),e.shadowColor="transparent",e.lineWidth=5,e.strokeStyle="rgba(255,255,255,0.9)",e.stroke(),e.restore(),e.save(),e.fillStyle="#fff",e.font='900 36px "Outfit", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(this.style.icon,128,88),e.restore(),e.save(),e.font='600 20px "Be Vietnam Pro", sans-serif';const n=Math.max(110,e.measureText(t).width+28),r=34,s=128-n/2,a=170-r/2,o=8;e.beginPath(),e.moveTo(s+o,a),e.arcTo(s+n,a,s+n,a+r,o),e.arcTo(s+n,a+r,s,a+r,o),e.arcTo(s,a+r,s,a,o),e.arcTo(s,a,s+n,a,o),e.closePath(),e.fillStyle="rgba(12,12,12,0.88)",e.fill(),e.lineWidth=1.5,e.strokeStyle="rgba(255,255,255,0.2)",e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(t,128,170),e.restore()}}const xa=new qt,yl=new qt;class Zm extends Vc{repositionObject(e,t,n){const r=e.userData.marker;this.positionOnSphere(e,t,n,r?.sphereRadius),e.lookAt(0,0,0),r&&this.applyRotation(e,r)}applyRotation(e,t){const n=this.getRotation(t);n.z&&e.rotateZ(n.z),n.x&&e.rotateX(n.x),n.y&&e.rotateY(n.y)}faceCamera(e,t){t.getWorldQuaternion(xa),e.parent?(e.parent.getWorldQuaternion(yl),e.quaternion.copy(yl).invert().multiply(xa)):e.quaternion.copy(xa)}getRotation(e){return new Xt(e.rotX??0,e.rotY??0,e.rotZ??0,"ZXY")}getScale(e){return new U(this.normalizeScale(e.scaleX),this.normalizeScale(e.scaleY),this.normalizeScale(e.scaleZ))}normalizeScale(e){return mt.clamp(Number.isFinite(e)?e:1,.1,10)}applyHoverScale(e,t,n,r,s){e.scale.copy(t).multiply(this.getScale(n)),r&&e.scale.multiplyScalar(s)}}class kc extends Zm{getScale(e){return new U(this.normalizeScale(e.scaleX),this.normalizeScale(e.scaleY),1)}}const Sa=new U,El=new U;class Vs extends kc{markerType="navigation";style={color:"#1d6fa8",icon:"↑",label:"Điểm đến"};meshes=new Map;imageCache=new Map;fixedMode;variants;showLeaderLine;navigationColor="#2388e8";titleFontSize=86;iconHitMargin=5;canvasWidth=256;canvasHeight=256;defaultIconWidth=62;defaultIconHeight=65;constructor(e,t=!0,n=[]){super(),this.fixedMode=e,this.showLeaderLine=t,this.variants=n}createObject(e){if(this.variants.length)return(this.variants.find(v=>v.supports(e))??this.variants[0]).createObject(e);const t=this.resolveMode(e),n=document.createElement("canvas");n.width=this.canvasWidth,n.height=this.canvasHeight;const r=n.getContext("2d"),s=new rr(n);s.colorSpace=Mt;const a=this.resolveColor(e),o=e.label??e.name??"",l=this.resolveLabelFont(e.labelFont),c=e.iconSize??this.defaultIconHeight,f=e.iconSize??this.defaultIconWidth;this.drawIcon(r,n,a,0,!1);const u=new An(f,c),h=new $e(u,new Jn({map:s,transparent:!0,depthTest:!1,side:Ot,opacity:0}));h.renderOrder=999,h.userData={marker:e,markerType:this},this.restrictRaycastToIcon(h,n),this.showLeaderLine&&o.trim()&&h.add(this.createTitleObject(e,o,l,f,c)),this.repositionObject(h,e.yaw,e.pitch);const m={canvas:n,context:r,texture:s,time:0,baseQuaternion:h.quaternion.clone(),basePosition:h.position.clone(),mode:t,label:o};return this.meshes.set(h,m),h}createTitleObject(e,t,n,r,s){const a=document.createElement("canvas");a.width=1600,a.height=300;const o=a.getContext("2d");this.drawLeaderLabel(o,t,n,18,238,this.navigationColor);const l=new rr(a);l.colorSpace=Mt;const c=this.getScale(e),f=s,u=f*a.width/a.height,h=new $e(new An(u/c.x,f/c.y),new Jn({map:l,transparent:!0,depthTest:!1,side:Ot,opacity:0}));return h.position.set(r/2+u/(2*c.x)-22/c.x,0,1),h.renderOrder=1e3,h.userData.navigationTitle=!0,h.raycast=()=>{},h}restrictRaycastToIcon(e,t){const n=this.getIconHitBounds();if(!n)return;const r=e.raycast.bind(e);e.raycast=(s,a)=>{const o=[];r(s,o);for(const l of o){if(!l.uv)continue;const c=Math.floor(l.uv.x*t.width),f=Math.floor((1-l.uv.y)*t.height);!(c<n.left-this.iconHitMargin||c>n.right+this.iconHitMargin||f<n.top-this.iconHitMargin||f>n.bottom+this.iconHitMargin)&&a.push(l)}}}getIconHitBounds(){return null}resolveColor(e){return e.pinColor??"#171717"}drawIcon(e,t,n,r,s){}updateProjection(e,t){e.getWorldPosition(Sa),El.copy(Sa).applyMatrix4(t.matrixWorldInverse);const n=Sa.distanceTo(t.position);if(n<=0)return;const r=mt.clamp(-El.z/n,.2,1);e.scale.multiplyScalar(r)}updateObject(e,t,n,r,s,a){if(!(e instanceof $e))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker,c=this.resolveColor(l);this.syncTitleOpacity(e),this.drawIcon(o.context,o.canvas,c,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new U(1,1,1),l,!1,s)}syncTitleOpacity(e){const t=e.material.opacity;for(const n of e.children)n instanceof $e&&n.userData.navigationTitle&&(n.material.opacity=t)}repositionObject(e,t,n){if(super.repositionObject(e,t,n),e instanceof $e){const r=this.meshes.get(e);r?.baseQuaternion.copy(e.quaternion),r?.basePosition.copy(e.position)}}getRotation(e){const t=this.resolveMode(e)==="arrow";return new Xt(e.rotX??(t?Math.PI/3:0),e.rotY??0,e.rotZ??e.rotation??0,"ZXY")}getScale(e){const t=this.resolveMode(e)==="arrow";return new U(this.normalizeScale(e.scaleX??(t?1.6:1)),this.normalizeScale(e.scaleY??1),1)}disposeObject(e){e instanceof $e&&(e.traverse(t=>{if(!(t instanceof $e))return;const n=t.material;n.map?.dispose(),n.dispose(),t.geometry.dispose()}),this.meshes.delete(e))}resolveMode(e){if(this.fixedMode)return this.fixedMode;const t=e.icon;return t==="local"||t==="location-1"||t==="pin"?"location-1":t==="drone"||t==="location-2"||t==="pin-top"||t==="anchor"?"location-2":"arrow"}drawLeaderLabel(e,t,n,r,s,a){const o=t.trim()||"Điểm đến";e.font=`700 ${this.titleFontSize}px ${n}`;const l=Math.min(e.measureText(o).width,1250),c=145,f=mt.degToRad(65),u=r+Math.abs(s-c)/Math.tan(f),h=u+28,m=c-18;e.strokeStyle=a,e.fillStyle=a,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.arc(r,s,9,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(r+7,s-5),e.lineTo(u,c),e.lineTo(h+l,c),e.stroke(),e.save(),e.shadowColor="rgba(0,0,0,.75)",e.shadowBlur=7,e.fillStyle="#fff",e.textAlign="left",e.textBaseline="alphabetic",e.font=`700 ${this.titleFontSize}px ${n}`,e.fillText(o,h,m,1250),e.restore()}resolveLabelFont(e){switch(e){case"outfit":return'"Outfit", system-ui, sans-serif';case"montserrat":return'"Montserrat", "Be Vietnam Pro", sans-serif';case"serif":return'Georgia, "Times New Roman", serif';default:return'"Be Vietnam Pro", system-ui, sans-serif'}}drawLocation2Path(e,t,n,r,s){e.beginPath(),e.moveTo(t,n-r),e.bezierCurveTo(t+r*.9,n-r,t+r,n-4,t+r*.72,n+30),e.bezierCurveTo(t+r*.38,n+67,t+13,n+75,t,s),e.bezierCurveTo(t-13,n+75,t-r*.38,n+67,t-r*.72,n+30),e.bezierCurveTo(t-r,n-4,t-r*.9,n-r,t,n-r),e.closePath()}drawPinTop(e,t,n,r,s,a,o){const l=t.width,c=t.height;e.clearRect(0,0,l,c);const f=l/2,u=36,h=4,m=8,v=130,M=150,p=f-v/2,d=h+u+m,b=d+M+30;if(r){e.save();const N=22;e.font=`bold ${N}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle";const z=e.measureText(r),k=18,I=l-12,G=Math.min(z.width+k*2,I),K=f-G/2,X=h;this.roundRect(e,K,X,G,u,9),e.fillStyle=a?"rgba(70, 90, 110, 0.98)":"rgba(90, 110, 130, 0.88)",e.fill(),e.fillStyle="#ffffff",e.fillText(r,f,X+u/2+1,G-k*2),e.restore()}const R=1+Math.sin(s*3)*.015,S=f,E=d+M/2;e.save(),e.translate(S,E),e.scale(R,R),e.translate(-S,-E),e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=14,e.shadowOffsetY=5,this.drawOvalPinPath(e,p,d,v,M,b),e.fillStyle="#ffffff",e.fill(),e.restore(),a&&(e.save(),e.shadowColor="rgba(255,255,255,0.7)",e.shadowBlur=22,this.drawOvalPinPath(e,p,d,v,M,b),e.fillStyle="#ffffff",e.fill(),e.restore()),this.drawOvalPinPath(e,p,d,v,M,b),e.fillStyle="#ffffff",e.fill(),this.drawOvalPinPath(e,p,d,v,M,b),e.strokeStyle=a?"rgba(170, 195, 220, 1)":"rgba(200, 210, 220, 0.9)",e.lineWidth=a?3:2,e.stroke();const y=8,w=p+y,_=d+y,A=v-y*2,L=M-y*2;if(e.save(),this.ovalPath(e,w,_,A,L),e.clip(),o&&o.complete&&o.naturalWidth>0)this.drawCoverImage(e,o,w+A/2,_+L/2,A,L);else{const N=e.createLinearGradient(w,_,w,_+L);N.addColorStop(0,"#4a90c4"),N.addColorStop(.55,"#7fb8dd"),N.addColorStop(1,"#2a5a7a"),e.fillStyle=N,e.fillRect(w,_,A,L)}e.restore(),e.restore()}drawOvalPinPath(e,t,n,r,s,a){const o=t+r/2,l=n+s/2,c=r/2,f=s/2,u=16,h=n+s-6;e.beginPath();const m=Math.PI/2-Math.asin(Math.min(u/c,1)),v=Math.PI/2+Math.asin(Math.min(u/c,1));e.ellipse(o,l,c,f,0,m,v,!1),e.lineTo(o,a),e.lineTo(o+c*Math.sin(Math.asin(Math.min(u/c,1))),h),e.closePath()}ovalPath(e,t,n,r,s){e.beginPath(),e.ellipse(t+r/2,n+s/2,r/2,s/2,0,0,Math.PI*2),e.closePath()}roundRect(e,t,n,r,s,a){const o=Math.min(a,r/2,s/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+s,o),e.arcTo(t+r,n+s,t,n+s,o),e.arcTo(t,n+s,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}drawCoverImage(e,t,n,r,s,a){const o=t.naturalWidth/t.naturalHeight,l=s/a;let c,f;o>l?(f=a,c=f*o):(c=s,f=c/o),e.drawImage(t,n-c/2,r-f/2,c,f)}async loadIcon(e){const t=this.imageCache.get(e);return t||new Promise(n=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{this.imageCache.set(e,r),n(r)},r.onerror=()=>{const s=new Image;s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",s.onload=()=>n(s)},r.src=e})}}class Km extends Vs{canvasWidth=256;canvasHeight=256;defaultIconWidth=62;defaultIconHeight=65;titleFontSize=124;titleOffsetY=70;arrowAnchor=new U(0,0,0);depthTravelPerVerticalUnit=.22;constructor(e=!0){super("arrow",e)}createObject(e){const t=super.createObject(e);if(!(t instanceof $e))return t;const n=t.children.find(a=>a.userData.navigationTitle);n&&t.remove(n);const r=new pn;r.position.copy(t.position),r.quaternion.copy(t.quaternion),r.userData={...t.userData,arrowIcon:t,navigationTitle:n},t.position.copy(this.arrowAnchor),t.quaternion.identity(),r.add(t),n&&r.add(n);const s=n?.userData.fixedLocalPosition;if(s instanceof U){const a=Math.max(0,s.y-this.arrowAnchor.y);r.userData.animationAmplitude=a*this.depthTravelPerVerticalUnit}else r.userData.animationAmplitude=0;return r}getScale(e){return new U(this.normalizeScale(e.scaleX??1.6),this.normalizeScale(e.scaleY??1),1)}drawIcon(e,t,n,r,s){e.clearRect(0,0,t.width,t.height),e.save(),e.lineWidth=s?42:40,e.lineCap="round",e.lineJoin="round",e.strokeStyle="#fff",e.shadowColor=s?"rgba(220,240,255,.95)":"rgba(220,240,255,.78)",e.shadowBlur=s?22:17,e.beginPath(),e.moveTo(37,173),e.lineTo(128,106),e.lineTo(219,173),e.stroke(),e.restore()}createTitleObject(e,t,n,r,s){const a=document.createElement("canvas");a.width=1200,a.height=220;const o=a.getContext("2d"),l=t.trim()||"Điểm đến";o.font=`700 ${this.titleFontSize}px ${n}`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="rgba(0,0,0,.82)",o.shadowBlur=10,o.fillStyle="#fff",o.fillText(l,a.width/2,a.height/2,a.width-40);const c=new rr(a);c.colorSpace=Mt;const f=this.getScale(e),u=28,h=u*a.width/a.height,m=new $e(new An(h/f.x,u/f.y),new Jn({map:c,transparent:!0,depthTest:!1,side:Ot,opacity:0})),v=new U(this.arrowAnchor.x,this.arrowAnchor.y+s/2+this.titleOffsetY/f.y,1);return m.position.copy(v),m.renderOrder=1e3,m.userData.navigationTitle=!0,m.userData.fixedLocalPosition=v.clone(),m.raycast=()=>{},m}updateObject(e,t,n,r,s,a){const o=e.userData.arrowIcon;if(!(o instanceof $e))return;const l=this.meshes.get(o);if(!l)return;l.time+=t;const c=e.userData.marker;this.drawIcon(l.context,l.canvas,this.resolveColor(c),l.time,n),l.texture.needsUpdate=!0,e.scale.set(1,1,1),this.applyHoverScale(o,new U(1,1,1),c,!1,s);const f=o.material.opacity,u=e.userData.navigationTitle;u instanceof $e&&(u.material.opacity=f,this.faceCamera(u,a));const h=l.time*.72%1,m=h*h*(3-2*h),v=Number(e.userData.animationAmplitude)||0,M=m*v;o.position.copy(this.arrowAnchor),o.position.z-=M,o.quaternion.identity()}disposeObject(e){const t=e.userData.arrowIcon;e.traverse(n=>{if(!(n instanceof $e))return;const r=n.material;r.map?.dispose(),r.dispose(),n.geometry.dispose()}),t instanceof $e&&this.meshes.delete(t)}supports(e){return e.plugin==="navigation"&&!["local","drone","location-1","location-2","pin","pin-top","anchor"].includes(e.icon??"arrow")}}const bl=new U,Tl=new qt;class $m extends Vs{canvasWidth=300;canvasHeight=300;defaultIconWidth=65;defaultIconHeight=65;navigationColor="#2388e8";titleFontSize=64;exitDuration=280;exitDistance=46;exitAnimations=new WeakMap;constructor(e=!0){super("location-1",e)}getScale(e){return new U(this.normalizeScale(e.scaleX??1),this.normalizeScale(e.scaleY??.8),1)}resolveColor(){return this.navigationColor}getIconHitBounds(){return{left:86,top:32,right:214,bottom:252}}drawIcon(e,t,n,r,s){e.clearRect(0,0,t.width,t.height);const a=1+Math.sin(r*3)*.018;e.save(),e.translate(150,132),e.scale(a,a),e.translate(-150,-132),e.fillStyle=n,e.shadowColor=s?"rgba(255,255,255,.75)":"rgba(0,0,0,.45)",e.shadowBlur=s?24:12,e.beginPath(),e.moveTo(150,250),e.bezierCurveTo(130,215,86,167,86,98),e.arc(150,98,64,Math.PI,0),e.bezierCurveTo(214,167,170,215,150,250),e.fill(),e.shadowColor="transparent",e.beginPath(),e.arc(150,98,27,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.restore()}playActivationAnimation(e){const t=this.exitAnimations.get(e);if(t)return t.promise;const n=e.children.find(o=>o.userData.navigationTitle);let r;const s=new Promise(o=>{r=o}),a={startedAt:performance.now(),duration:this.exitDuration,titlePosition:n?.position.clone(),promise:s};return this.exitAnimations.set(e,a),window.setTimeout(r,this.exitDuration),s}updateObject(e,t,n,r,s,a){if(!(e instanceof $e))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker;this.drawIcon(o.context,o.canvas,this.navigationColor,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new U(1,1,1),l,!1,1),this.faceCamera(e,a),this.syncTitleOpacity(e);const c=this.exitAnimations.get(e);if(!c)return;const f=mt.clamp((performance.now()-c.startedAt)/c.duration,0,1),u=1-Math.pow(1-f,3),h=this.exitDistance*u;a.getWorldQuaternion(Tl),bl.set(1,0,0).applyQuaternion(Tl).normalize(),e.position.copy(o.basePosition).addScaledVector(bl,-h);const m=e.children.find(v=>v.userData.navigationTitle);m&&c.titlePosition&&(m.position.copy(c.titlePosition),m.position.x+=h*2/this.getScale(l).x)}supports(e){return e.plugin==="navigation"&&["local","location-1","pin"].includes(e.icon??"")}}const Al=new U,wl=new qt;class Jm extends Vs{canvasWidth=300;canvasHeight=300;defaultIconWidth=65;defaultIconHeight=65;navigationColor="#2388e8";titleFontSize=64;exitDuration=280;exitDistance=46;exitAnimations=new WeakMap;constructor(e=!0){super("location-2",e)}resolveColor(){return this.navigationColor}getIconHitBounds(){return{left:38,top:22,right:278,bottom:202}}drawIcon(e,t,n,r,s){e.clearRect(0,0,t.width,t.height);const a=1+Math.sin(r*3)*.015;e.save(),e.translate(150,90),e.scale(a,a),e.translate(-150,-90),e.strokeStyle=n,e.fillStyle=n,e.lineCap="round",e.lineJoin="round",e.shadowColor=s?"rgba(255,255,255,.7)":"rgba(0,0,0,.4)",e.shadowBlur=s?22:10,e.lineWidth=17,e.beginPath(),e.moveTo(116,100),e.lineTo(66,75),e.moveTo(184,100),e.lineTo(234,75),e.stroke(),e.lineWidth=10,e.beginPath(),e.moveTo(66,75),e.lineTo(66,42),e.moveTo(234,75),e.lineTo(234,42),e.stroke(),e.beginPath(),e.ellipse(66,37,43,10,0,0,Math.PI*2),e.ellipse(234,37,43,10,0,0,Math.PI*2),e.fill(),this.drawDroneRoundRect(e,108,68,84,70,18),e.fill(),e.beginPath(),e.arc(150,105,20,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(150,105,13,0,Math.PI*2),e.fillStyle=n,e.fill(),e.strokeStyle=n,e.lineWidth=13,e.beginPath(),e.moveTo(129,134),e.lineTo(102,190),e.moveTo(171,134),e.lineTo(198,190),e.stroke(),e.restore()}playActivationAnimation(e){const t=this.exitAnimations.get(e);if(t)return t.promise;const n=e.children.find(o=>o.userData.navigationTitle);let r;const s=new Promise(o=>{r=o}),a={startedAt:performance.now(),duration:this.exitDuration,titlePosition:n?.position.clone(),promise:s};return this.exitAnimations.set(e,a),window.setTimeout(r,this.exitDuration),s}updateObject(e,t,n,r,s,a){if(!(e instanceof $e))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker;this.drawIcon(o.context,o.canvas,this.navigationColor,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new U(1,1,1),l,!1,1),this.faceCamera(e,a),this.syncTitleOpacity(e);const c=this.exitAnimations.get(e);if(!c)return;const f=mt.clamp((performance.now()-c.startedAt)/c.duration,0,1),u=1-Math.pow(1-f,3),h=this.exitDistance*u;a.getWorldQuaternion(wl),Al.set(1,0,0).applyQuaternion(wl).normalize(),e.position.copy(o.basePosition).addScaledVector(Al,-h);const m=e.children.find(v=>v.userData.navigationTitle);m&&c.titlePosition&&(m.position.copy(c.titlePosition),m.position.x+=h*2/this.getScale(l).x)}drawDroneRoundRect(e,t,n,r,s,a){const o=Math.min(a,r/2,s/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+r,n,t+r,n+s,o),e.arcTo(t+r,n+s,t,n+s,o),e.arcTo(t,n+s,t,n,o),e.arcTo(t,n,t+r,n,o),e.closePath()}supports(e){return e.plugin==="navigation"&&["drone","location-2","pin-top","anchor"].includes(e.icon??"")}}const Rl=640,Qm=360,jm=150,Cl=new U,Pl=new U;class eg extends kc{markerType="video";style={color:"#dc2626",icon:"▶",label:"Video"};objects=new Map;createObject(e){if(!e.src.trim())return super.createObject(e);const t=jm/Rl,n=Math.max(1,Math.round((e.width??Rl)*t*this.normalizeScale(e.scaleX))),r=Math.max(1,Math.round((e.height??Qm)*t*this.normalizeScale(e.scaleY))),s=this.createMediaElement(e,n,r),a=document.createElement("div");a.className="view360-video-marker",a.style.width=`${n}px`,a.style.height=`${r}px`,a.style.background="#000",a.style.overflow="hidden",a.style.borderRadius="8px",a.style.boxShadow="0 12px 38px rgba(0,0,0,.42)",a.style.pointerEvents="auto",a.style.touchAction="auto",a.style.userSelect="auto";const o=m=>m.stopPropagation();["pointerdown","pointerup","click","dblclick","touchstart","touchend","wheel"].forEach(m=>{a.addEventListener(m,o,{passive:m==="wheel"})});const c=document.createElement("div");c.textContent="Đang tải video…",c.style.cssText="position:absolute;inset:0;display:grid;place-items:center;background:#080808;color:#aaa;font:500 14px sans-serif;pointer-events:none",a.style.position="relative",a.appendChild(c),a.appendChild(s),s.addEventListener("load",()=>c.remove(),{once:!0}),s.addEventListener("loadeddata",()=>c.remove(),{once:!0}),s.addEventListener("error",()=>{c.textContent="Không thể tải video",c.style.color="#fca5a5"},{once:!0});const f=new Vm(a),u=new $e(new An(n,r),new Jn({transparent:!0,opacity:0,depthWrite:!1}));u.userData={marker:e,markerType:this};const h=new pn;return h.add(f,u),h.userData={marker:e,markerType:this,isCss3dVideo:!0},h.renderOrder=998,this.repositionObject(h,e.yaw,e.pitch),this.objects.set(h,{element:s,cssObject:f,baseScale:new U(1,1,1)}),h}updateObject(e,t,n,r,s,a){if(!(e instanceof pn)||!this.objects.has(e)){super.updateObject(e,t,n,r,s,a);return}const o=this.objects.get(e),l=e.userData.marker;this.applyHoverScale(e,o.baseScale,l,n,s),a.getWorldDirection(Cl),Pl.copy(e.position).sub(a.position).normalize(),e.visible=Cl.dot(Pl)>0}repositionObject(e,t,n){e.userData.isCss3dVideo?super.repositionObject(e,t,n):this.positionOnSphere(e,t,n)}getRotation(e){return new Xt(e.rotX??0,e.rotY??(e.rotationYaw?-e.rotationYaw:0),e.rotZ??0,"ZXY")}getScale(e){return new U(1,1,1)}disposeObject(e){if(!(e instanceof pn)){super.disposeObject(e);return}const t=this.objects.get(e);t&&(t.element instanceof HTMLVideoElement?(t.element.pause(),t.element.removeAttribute("src"),t.element.load()):t.element.src="about:blank",e.traverse(n=>{n instanceof $e&&(n.geometry.dispose(),n.material.dispose())}),t.cssObject.element.remove(),this.objects.delete(e))}createMediaElement(e,t,n){if(this.isDirectVideo(e.src)){const s=document.createElement("video");return s.src=e.src,s.controls=!0,s.playsInline=!0,s.preload="metadata",s.tabIndex=0,s.style.width="100%",s.style.height="100%",s.style.display="block",s.style.pointerEvents="auto",s.style.touchAction="auto",s}const r=document.createElement("iframe");return r.src=this.toEmbedUrl(e.src),r.width=String(t),r.height=String(n),r.title=e.label||"Video",r.allow="autoplay; fullscreen; picture-in-picture",r.allowFullscreen=!0,r.referrerPolicy="strict-origin-when-cross-origin",r.tabIndex=0,r.style.width="100%",r.style.height="100%",r.style.display="block",r.style.border="0",r.style.pointerEvents="auto",r.style.touchAction="auto",r}isDirectVideo(e){return/\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(e.trim())}toEmbedUrl(e){const t=e.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/))([^?&/]+)/i);if(t){const r=typeof window<"u"&&/^https?:/.test(window.location.origin)?`&origin=${encodeURIComponent(window.location.origin)}`:"";return`https://www.youtube.com/embed/${t[1]}?feature=oembed&playsinline=1&rel=0${r}`}const n=e.match(/vimeo\.com\/(?:video\/)?(\d+)/i);return n?`https://player.vimeo.com/video/${n[1]}`:e}}class ks{supports(e){return e.type===this.blockType}disposeElement(e){}}class tg extends ks{blockType="text";activeSpeech;createElement(e,t){this.ensureScrollbarStyle();const n=e.presentation??"text-only",r=n!=="audio-only",s=n!=="text-only",a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:16px;min-width:0";let o;if(s&&(o=this.createSpeechControl(e)),r){const l=document.createElement("p");if(l.className="panel-content view360-text-block-content",l.style.cssText='max-height:180px;overflow-y:auto;scrollbar-width:none;margin:0;padding-right:4px;color:#ccc;font:400 13px/1.65 Inter,"Be Vietnam Pro",sans-serif;white-space:pre-wrap;text-align:left;mask-image:linear-gradient(to bottom,#000 76%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,#000 76%,transparent 100%)',t?.isFirst){const c=document.createElement("strong");c.textContent=`${t.panelLabel||"Thông tin"} `,c.style.cssText="color:#e67e22;font-weight:600;text-transform:uppercase;letter-spacing:1px",l.appendChild(c)}l.append(document.createTextNode(e.content?.trim()||"Thông tin chưa được cập nhật.")),a.appendChild(l)}else if(t?.isFirst){const l=document.createElement("p");l.textContent=t.panelLabel||"Thông tin",l.style.cssText='margin:0;color:#e67e22;font:600 13px/1.4 Inter,"Be Vietnam Pro",sans-serif;text-transform:uppercase;letter-spacing:1px',a.appendChild(l)}return o&&a.appendChild(o.footer),a}disposeElement(e){this.activeSpeech&&e.contains(this.activeSpeech.button)&&this.stopSpeech(),e.querySelectorAll("audio[data-text-narration]").forEach(t=>{t.pause(),t.removeAttribute("src"),t.load()})}createSpeechControl(e){return e.speech?.src?.trim()?this.createRecordedSpeechControl(e.speech.src.trim()):this.createBrowserSpeechControl(e)}createRecordedSpeechControl(e){const{button:t,footer:n,track:r,fill:s,status:a}=this.createPlayerShell(),o=document.createElement("audio");o.dataset.textNarration="true",o.src=e,o.preload="metadata",o.style.display="none",n.appendChild(o);const l=()=>{const u=Number.isFinite(o.duration)&&o.duration>0?o.currentTime/o.duration:0;s.style.width=`${mt.clamp(u,0,1)*100}%`,r.setAttribute("aria-valuenow",String(Math.round(u*100)))},c=u=>{t.textContent=u?"Ⅱ":"▶",t.setAttribute("aria-label",u?"Tạm dừng bản đọc":"Phát bản đọc"),a.textContent=u?"Đang đọc...":"",a.style.display=u?"":"none"};t.addEventListener("click",async()=>{if(o.paused)try{await o.play()}catch{a.textContent="Không phát được file",a.style.display=""}else o.pause()}),o.addEventListener("play",()=>c(!0)),o.addEventListener("pause",()=>c(!1)),o.addEventListener("timeupdate",l),o.addEventListener("durationchange",l),o.addEventListener("ended",()=>{c(!1),s.style.width="100%"}),o.addEventListener("error",()=>{c(!1),a.textContent="Lỗi tải bản đọc",a.style.display=""});const f=u=>{!Number.isFinite(o.duration)||o.duration<=0||(o.currentTime=mt.clamp(u,0,1)*o.duration,l())};return r.addEventListener("click",u=>{const h=r.getBoundingClientRect();f((u.clientX-h.left)/h.width)}),r.addEventListener("keydown",u=>{if(u.key!=="ArrowLeft"&&u.key!=="ArrowRight")return;u.preventDefault();const h=o.duration>0?o.currentTime/o.duration:0;f(h+(u.key==="ArrowRight"?.05:-.05))}),{button:t,footer:n}}createPlayerShell(){const e=document.createElement("button");e.type="button",e.textContent="▶",e.setAttribute("aria-label","Đọc văn bản"),e.style.cssText="display:flex;align-items:center;justify-content:center;flex:0 0 28px;width:28px;height:28px;margin-top:1px;padding:0;border:0;border-radius:50%;cursor:pointer;color:#fff;background:#e67e22;font-size:11px;box-shadow:0 2px 8px rgba(230,126,34,.28);transition:transform .2s ease,background .2s ease",e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.06)",e.style.background="#d35400"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.background="#e67e22"});const t=document.createElement("div");t.className="audio-control",t.style.cssText="display:flex;align-items:center;gap:12px";const n=document.createElement("div");n.className="progress-container",n.setAttribute("role","slider"),n.setAttribute("aria-label","Chọn vị trí bắt đầu đọc"),n.tabIndex=0,n.style.cssText="position:relative;flex:1;height:8px;overflow:hidden;border-radius:4px;background:#333;cursor:pointer";const r=document.createElement("div");r.style.cssText="width:0;height:100%;border-radius:2px;background:#e67e22",n.appendChild(r);const s=document.createElement("span");return s.className="status-text",s.textContent="",s.style.cssText='display:none;color:#888;font:500 12px/1.3 Inter,"Be Vietnam Pro",sans-serif;white-space:nowrap',t.append(e,n,s),{button:e,footer:t,track:n,fill:r,status:s}}createBrowserSpeechControl(e){const{button:t,footer:n,track:r,fill:s,status:a}=this.createPlayerShell();if(!("speechSynthesis"in window))return t.disabled=!0,t.style.opacity=".45",t.style.cursor="not-allowed",a.textContent="Không hỗ trợ",a.style.display="",{button:t,footer:n};t.addEventListener("click",()=>{if(this.activeSpeech?.button===t){this.stopSpeech();return}const l=e.content?.trim();if(!l){a.textContent="Chưa có nội dung",a.style.display="";return}this.stopSpeech(),this.startSpeech(e,l,0,t,a,s)});const o=l=>{const c=e.content?.trim();if(!c||!("speechSynthesis"in window))return;const f=r.getBoundingClientRect(),u=mt.clamp((l-f.left)/f.width,0,1);let h=Math.min(c.length-1,Math.floor(u*c.length));for(;h>0&&!/\s/.test(c[h-1]??"");)h--;this.stopSpeech(),s.style.width=`${h/c.length*100}%`,this.startSpeech(e,c,h,t,a,s)};return r.addEventListener("click",l=>o(l.clientX)),r.addEventListener("keydown",l=>{if(l.key!=="ArrowLeft"&&l.key!=="ArrowRight")return;l.preventDefault();const c=Number.parseFloat(s.style.width)||0,f=mt.clamp(c+(l.key==="ArrowRight"?5:-5),0,100),u=r.getBoundingClientRect();o(u.left+f/100*u.width)}),{button:t,footer:n}}startSpeech(e,t,n,r,s,a){const o=t.slice(n),l=new SpeechSynthesisUtterance(o);l.lang=e.speech?.lang||"vi-VN",l.rate=mt.clamp(e.speech?.rate??1,.5,2),l.pitch=mt.clamp(e.speech?.pitch??1,.5,2);const c=l.lang.toLowerCase(),f=window.speechSynthesis.getVoices();l.voice=f.find(m=>m.lang.toLowerCase()===c)??f.find(m=>m.lang.toLowerCase().startsWith(c.split("-")[0]))??null,r.textContent="■",r.setAttribute("aria-label","Dừng đọc văn bản"),s.textContent="Đang đọc...",s.style.display="",a.style.width=`${n/t.length*100}%`,l.addEventListener("boundary",m=>{const v=Math.min(t.length,n+m.charIndex),M=v/t.length*100,p=Number.parseFloat(a.style.width)||0;a.style.width=`${Math.max(p,M)}%`,Ll(a,v,t.length)});const u=()=>{this.activeSpeech?.utterance===l&&(a.style.width="100%",this.resetControl(this.activeSpeech),this.activeSpeech=void 0)};l.addEventListener("end",u),l.addEventListener("error",u);const h={utterance:l,button:r,status:s,fill:a,fullText:t,startIndex:n,durationMs:this.estimateSpeechDuration(o,l.rate),startedAt:0,animationFrame:0};l.addEventListener("start",()=>{this.activeSpeech===h&&(h.startedAt=performance.now(),this.updateEstimatedProgress(h))}),this.activeSpeech=h,window.speechSynthesis.speak(l)}stopSpeech(){if(!this.activeSpeech||!("speechSynthesis"in window))return;const e=this.activeSpeech;this.activeSpeech=void 0,window.speechSynthesis.cancel(),this.resetControl(e)}resetControl(e){cancelAnimationFrame(e.animationFrame),e.button.textContent="▶",e.button.setAttribute("aria-label","Đọc văn bản"),e.status.textContent="",e.status.style.display="none"}updateEstimatedProgress(e){if(this.activeSpeech!==e||e.startedAt===0)return;const t=mt.clamp((performance.now()-e.startedAt)/e.durationMs,0,1),n=e.startIndex+t*(e.fullText.length-e.startIndex),r=Math.min(98,n/e.fullText.length*100),s=Number.parseFloat(e.fill.style.width)||0;e.fill.style.width=`${Math.max(s,r)}%`,Ll(e.fill,n,e.fullText.length),e.animationFrame=requestAnimationFrame(()=>this.updateEstimatedProgress(e))}estimateSpeechDuration(e,t){const n=e.trim().split(/\s+/u).filter(Boolean).length,r=(e.match(/[,.!?;:\n]/gu)??[]).length,s=n/(165*t)*6e4,a=r*110/t;return Math.max(800,s+a)}ensureScrollbarStyle(){if(document.getElementById("view360-text-block-scrollbar-style"))return;const e=document.createElement("style");e.id="view360-text-block-scrollbar-style",e.textContent=".view360-text-block-content::-webkit-scrollbar{display:none;width:0;height:0}",document.head.appendChild(e)}}function Ll(i,e,t){i.parentElement?.setAttribute("aria-valuenow",String(Math.round(e/t*100)))}class ng extends ks{blockType="audio";createElement(e,t){const n=document.createElement("div");if(n.style.cssText="display:flex;flex-direction:column;gap:12px;min-width:0",t?.isFirst){const h=document.createElement("p");h.textContent=t.panelLabel||"Âm thanh",h.style.cssText='margin:0;color:#e67e22;font:600 13px/1.35 Inter,"Be Vietnam Pro",sans-serif;text-transform:uppercase;letter-spacing:1px',n.appendChild(h)}const r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;gap:12px;min-width:0";const s=document.createElement("div");s.className="panel-header-row",s.style.cssText="display:flex;align-items:center;gap:12px";const a=document.createElement("button");a.type="button",a.textContent="▶",a.setAttribute("aria-label","Phát âm thanh"),a.style.cssText="display:flex;align-items:center;justify-content:center;flex:0 0 28px;width:28px;height:28px;padding:0;border:0;border-radius:50%;cursor:pointer;color:#fff;background:#e67e22;font-size:11px;box-shadow:0 2px 8px rgba(230,126,34,.28);transition:transform .2s ease";const o=document.createElement("span");o.textContent=e.src?"Bản ghi âm":"Chưa có tệp âm thanh",o.style.cssText='overflow:hidden;color:#ccc;font:500 13px/1.4 Inter,"Be Vietnam Pro",sans-serif;white-space:nowrap;text-overflow:ellipsis',s.append(a,o);const l=document.createElement("div");l.className="audio-control",l.style.cssText="display:flex;align-items:center;gap:12px";const c=document.createElement("input");c.className="progress-container",c.type="range",c.min="0",c.max="1000",c.value="0",c.setAttribute("aria-label","Vị trí phát âm thanh"),c.style.cssText="flex:1;height:4px;margin:0;cursor:pointer;accent-color:#e67e22";const f=document.createElement("span");f.className="status-text",f.textContent="0:00",f.style.cssText='min-width:34px;color:#888;font:500 12px/1.3 Inter,"Be Vietnam Pro",sans-serif;text-align:right;white-space:nowrap',l.append(c,f);const u=document.createElement("audio");return u.src=e.src,u.preload="metadata",u.style.display="none",r.append(s,l,u),n.appendChild(r),a.disabled=!e.src,e.src||(a.style.opacity=".45",a.style.cursor="not-allowed"),a.addEventListener("mouseenter",()=>{a.disabled||(a.style.transform="scale(1.06)")}),a.addEventListener("mouseleave",()=>{a.style.transform=""}),a.addEventListener("click",()=>{u.paused?u.play():u.pause()}),u.addEventListener("play",()=>{a.textContent="Ⅱ",a.setAttribute("aria-label","Tạm dừng âm thanh"),o.textContent="Đang phát..."}),u.addEventListener("pause",()=>{a.textContent="▶",a.setAttribute("aria-label","Phát âm thanh"),o.textContent=u.ended?"Đã phát xong":"Bản ghi âm"}),u.addEventListener("timeupdate",()=>{const h=Number.isFinite(u.duration)?u.duration:0;c.value=h?String(Math.round(u.currentTime/h*1e3)):"0",f.textContent=this.formatTime(u.currentTime)}),u.addEventListener("loadedmetadata",()=>{f.textContent=this.formatTime(u.duration)}),u.addEventListener("error",()=>{o.textContent="Không tải được âm thanh"}),c.addEventListener("input",()=>{Number.isFinite(u.duration)&&(u.currentTime=Number(c.value)/1e3*u.duration)}),n}disposeElement(e){e.querySelectorAll("audio").forEach(t=>{t.pause(),t.removeAttribute("src"),t.load()})}formatTime(e){if(!Number.isFinite(e))return"0:00";const t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}}class ig extends ks{blockType="image3d";createElement(e){const t=document.createElement("figure");if(t.style.cssText="margin:0;display:flex;flex-direction:column;gap:8px",e.image){const n=document.createElement("img");n.src=e.image,n.alt=e.caption||"Ảnh vật thể",n.style.cssText="display:block;width:100%;max-height:55vh;object-fit:contain;border-radius:10px;background:#050505",t.appendChild(n)}if(e.caption){const n=document.createElement("figcaption");n.textContent=e.caption,n.style.cssText='color:rgba(255,255,255,.65);font:400 12px/1.5 "Be Vietnam Pro",sans-serif',t.appendChild(n)}return t}}class rg extends ks{blockType="ai-chat";createElement(e){const t=document.createElement("div");return t.textContent=e.context?.trim()||"Trợ lý AI cho nội dung này đang được phát triển.",t.style.cssText='padding:10px 12px;border:1px solid rgba(168,85,247,.3);border-radius:9px;color:#d8b4fe;background:rgba(168,85,247,.1);font:400 13px/1.6 "Be Vietnam Pro",sans-serif',t}}const sg=220,ag=380;class Ma extends Vc{markerType="panel";style={color:"#b85c2e",icon:"i",label:"Thông tin"};blockTypes=new Map;panels=new Map;projectedPosition=new U;constructor(e=[new tg,new ig,new ng,new rg]){super(),e.forEach(t=>this.blockTypes.set(t.blockType,t))}supports(e){return["panel","info","audio","model3d","ai-chat"].includes(e.plugin)}togglePanel(e,t,n,r){if(this.panels.has(t)){this.hidePanel(t);return}const s=document.createElement("section");if(s.className="view360-marker-panel",s.setAttribute("role","dialog"),s.setAttribute("aria-label",e.label||"Nội dung điểm tương tác"),s.style.cssText=["position:absolute","left:0","top:0","z-index:40","width:max-content",`min-width:min(${sg}px,calc(100% - 32px))`,`max-width:min(${ag}px,calc(100% - 32px))`,"height:auto","max-height:none","overflow:visible","display:flex","flex-direction:column","gap:12px","pointer-events:auto","padding:16px","box-sizing:border-box","color:#e0e0e0","background:rgba(32,32,32,.96)","border:1px solid rgba(255,255,255,.08)","border-radius:12px","box-shadow:0 10px 30px rgba(0,0,0,.6)","backdrop-filter:blur(14px)","transform:translate(-50%,calc(-100% - 18px))","transform-origin:bottom center","transition:opacity .16s ease,transform .16s ease"].join(";"),this.appendBlocks(e,s)===0)return;const o=document.createElement("span");o.dataset.markerPanelArrow="",o.style.cssText="position:absolute;left:50%;bottom:-7px;width:14px;height:14px;background:rgba(32,32,32,.96);border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);transform:translateX(-50%) rotate(45deg);pointer-events:none",s.appendChild(o),["pointerdown","pointerup","click","wheel"].forEach(l=>{s.addEventListener(l,c=>c.stopPropagation())}),n.appendChild(s),this.panels.set(t,{element:s,container:n}),this.updatePanels(r)}hidePanel(e){const t=this.panels.get(e)?.element;t&&this.blockTypes.forEach(n=>n.disposeElement(t)),t?.remove(),this.panels.delete(e)}hideAllPanels(){this.panels.forEach(({element:e})=>{this.blockTypes.forEach(t=>t.disposeElement(e)),e.remove()}),this.panels.clear()}updatePanels(e){[...this.panels.entries()].forEach(([t,{element:n,container:r}])=>{t.getWorldPosition(this.projectedPosition),this.projectedPosition.project(e);const{x:s,y:a,z:o}=this.projectedPosition;if(o<-1||o>1||Math.abs(s)>1||Math.abs(a)>1){this.hidePanel(t);return}const l=r.clientWidth,c=r.clientHeight,f=n.offsetWidth,u=n.offsetHeight,h=(s*.5+.5)*l,m=(-a*.5+.5)*c,v=t.userData.marker,p=(v?.plugin==="panel"?v.placement??"vertical":"vertical")==="horizontal"?h+f+28<=l?"right":"left":m<u+28?"bottom":"top";let d=h,b=m;p==="top"||p==="bottom"?d=mt.clamp(h,f/2+10,l-f/2-10):(b=mt.clamp(m,u/2+10,c-u/2-10),d=p==="left"?Math.max(h,f+28):Math.min(h,l-f-28)),n.style.left=`${d}px`,n.style.top=`${b}px`,n.style.transform=p==="bottom"?"translate(-50%, 18px)":p==="left"?"translate(calc(-100% - 18px), -50%)":p==="right"?"translate(18px, -50%)":"translate(-50%, calc(-100% - 18px))",n.style.transformOrigin=p==="bottom"?"top center":p==="left"?"center right":p==="right"?"center left":"bottom center";const R=n.querySelector("[data-marker-panel-arrow]");R&&(R.style.left=p==="right"?"-7px":p==="left"?"auto":"50%",R.style.right=p==="left"?"-7px":"auto",R.style.top=p==="bottom"?"-7px":p==="left"||p==="right"?"50%":"auto",R.style.bottom=p==="top"?"-7px":"auto",R.style.transform=p==="left"?"translateY(-50%) rotate(-45deg)":p==="right"?"translateY(-50%) rotate(135deg)":`translateX(-50%) rotate(${p==="bottom"?"225deg":"45deg"})`)})}appendBlocks(e,t){let n=0;return this.getBlocks(e).forEach(r=>{const s=this.blockTypes.get(r.type);s?.supports(r)&&(t.appendChild(s.createElement(r,{panelLabel:e.label||"Điểm tương tác",isFirst:n===0})),n++)}),n}getBlocks(e){if(e.plugin==="panel")return e.contents??[];if(e.plugin==="info")return[{id:`${e.id}-text`,type:"text",content:e.content}];if(e.plugin==="audio")return[{id:`${e.id}-audio`,type:"audio",src:e.src}];if(e.plugin==="model3d"){const t=[{id:`${e.id}-image`,type:"image3d",image:e.image}];return e.content&&t.push({id:`${e.id}-text`,type:"text",content:e.content}),t}return e.plugin==="ai-chat"?[{id:`${e.id}-ai`,type:"ai-chat",context:e.context}]:[]}}class lg extends Hm{id="marker";name="Marker Plugin";group=new pn;cssContainer=document.createElement("div");cssRenderer=new Wm({element:this.cssContainer});raycaster=new Lc;pointer=new Ue;markerTypes=new Map;unsubs=[];hovered=null;draggingObject=null;dragStarted=!1;pointerDown={x:0,y:0};navigationPending=!1;pulseSpeed;pulseAmplitude;hoverScale;draggable;constructor(e={}){super(),this.pulseSpeed=e.pulseSpeed??.004,this.pulseAmplitude=e.pulseAmplitude??.06,this.hoverScale=e.hoverScale??1.15,this.draggable=e.draggable??!1;const t=new Ma;[new Vs(void 0,!0,[new Km(!0),new $m(!0),new Jm(!0)]),t,new eg].forEach(r=>{this.registerMarkerType(r)}),["info","audio","model3d","ai-chat"].forEach(r=>{this.markerTypes.set(r,t)}),(e.markerTypes??[]).forEach(r=>{this.registerMarkerType(r)})}onInit(){const e=this.cssContainer;e.style.position="absolute",e.style.inset="0",e.style.overflow="hidden",e.style.pointerEvents="none",e.style.zIndex="2";const t=e.children[0];t&&(t.style.pointerEvents="inherit"),this.ctx.container.appendChild(e),this.ctx.scene.add(this.group),this.unsubs.push(this.ctx.bus.on("scene:rotation",({rotation:n})=>{this.applySceneRotation(n)})),this.bindPointerEvents()}onUpdate(e){const t=1+Math.sin(performance.now()*this.pulseSpeed)*this.pulseAmplitude;this.group.children.forEach(a=>{const o=this.markerTypeForObject(a);o?.updateObject(a,e,a===this.hovered,t,this.hoverScale,this.ctx.camera.camera),o?.updateProjection(a,this.ctx.camera.camera)});const n=this.ctx.container.clientWidth,r=this.ctx.container.clientHeight,s=this.cssRenderer.getSize();(s.width!==n||s.height!==r)&&this.cssRenderer.setSize(n,r),this.cssRenderer.render(this.ctx.scene,this.ctx.camera.camera),this.panelMarkerTypes().forEach(a=>a.updatePanels(this.ctx.camera.camera))}onDestroy(){this.unsubs.forEach(e=>e()),this.clearMarkers(),this.ctx.scene.remove(this.group),this.closeAllPanels(),this.cssRenderer.domElement.remove()}onSceneLoad(e){this.fadeAll(0,200)}onSceneReady(e){this.clearMarkers(),this.applySceneRotation(e.panoramaRotation??0);for(const t of e.markers??[]){const n=this.markerTypes.get(t.plugin);if(!n?.supports(t)){console.warn(`[MarkerPlugin] No MarkerBase registered for type "${t.plugin}".`);continue}this.group.add(n.createObject(t))}this.fadeAll(1,350)}markerTypeForObject(e){return e.userData.markerType}setPointer(e){const t=this.ctx.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}hitTest(e){this.setPointer(e),this.raycaster.setFromCamera(this.pointer,this.ctx.camera.camera);const t=this.raycaster.intersectObjects(this.group.children,!0)[0]?.object??null;if(!t)return null;let n=t;for(;n.parent&&n.parent!==this.group;)n=n.parent;return n.parent===this.group?n:null}bindPointerEvents(){const e=this.ctx.renderer.domElement,t=a=>{a!==this.hovered&&(this.hovered=a,this.ctx.container.style.cursor=a?this.draggable?"grab":"pointer":"grab",this.ctx.bus.emit("marker:hover",{marker:a?.userData.marker??null}))},n=a=>{this.draggingObject||t(this.hitTest(a))},r=()=>t(null),s=async a=>{if(this.draggingObject||this.dragStarted)return;const o=this.hitTest(a),l=o?.userData.marker;if(!(!l||!o)&&!this.navigationPending)if(this.ctx.bus.emit("marker:click",{marker:l}),l.plugin==="navigation"&&l.targetScene){this.closeAllPanels(),this.navigationPending=!0,this.ctx.bus.emit("interaction:lock");try{const c=this.markerTypeForObject(o)?.playActivationAnimation(o)??Promise.resolve();this.ctx.bus.emit("navigate",{sceneId:l.targetScene,yaw:l.yaw+this.group.rotation.y,pitch:l.pitch}),await c}finally{this.navigationPending=!1,this.ctx.bus.emit("interaction:unlock")}}else this.openPanel(l,o)};e.addEventListener("pointermove",n,{passive:!0}),e.addEventListener("pointerleave",r),e.addEventListener("click",s),this.unsubs.push(()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerleave",r),()=>e.removeEventListener("click",s)),this.draggable&&this.bindDragEvents()}openPanel(e,t){const n=this.markerTypes.get(e.plugin);n instanceof Ma&&n.togglePanel(e,t,this.ctx.container,this.ctx.camera.camera)}panelMarkerTypes(){return[...new Set(this.markerTypes.values())].filter(e=>e instanceof Ma)}closeAllPanels(){this.panelMarkerTypes().forEach(e=>e.hideAllPanels())}registerMarkerType(e){this.markerTypes.set(e.markerType,e)}applySceneRotation(e){this.group.rotation.y=e,this.group.updateMatrixWorld(!0)}addMarkerObject(e){this.group.add(e)}bindDragEvents(){const e=this.ctx.renderer.domElement,t=s=>{const a=this.hitTest(s);a&&(this.draggingObject=a,this.pointerDown={x:s.clientX,y:s.clientY},this.dragStarted=!1,e.setPointerCapture(s.pointerId))},n=s=>{if(!this.draggingObject)return;const a=Math.hypot(s.clientX-this.pointerDown.x,s.clientY-this.pointerDown.y);if(!this.dragStarted&&a>4&&(this.dragStarted=!0,this.ctx.bus.emit("interaction:lock"),this.ctx.container.style.cursor="grabbing"),!this.dragStarted)return;this.setPointer(s),this.raycaster.setFromCamera(this.pointer,this.ctx.camera.camera);const o=this.raycaster.ray.direction.clone().normalize();o.applyQuaternion(this.group.quaternion.clone().invert());const l=Math.atan2(-o.x,-o.z),c=Math.asin(mt.clamp(o.y,-1,1));this.markerTypeForObject(this.draggingObject)?.repositionObject(this.draggingObject,l,c),this.draggingObject.userData.dragYaw=l,this.draggingObject.userData.dragPitch=c},r=()=>{const s=this.draggingObject;if(s){if(this.dragStarted){const a=s.userData.marker,o=s.userData.dragYaw,l=s.userData.dragPitch;a&&o!==void 0&&l!==void 0&&this.ctx.bus.emit("marker:moved",{markerId:a.id,yaw:+o.toFixed(4),pitch:+l.toFixed(4)}),this.ctx.bus.emit("interaction:unlock"),this.ctx.container.style.cursor="grab"}this.draggingObject=null,requestAnimationFrame(()=>{this.dragStarted=!1})}};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",n),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),this.unsubs.push(()=>e.removeEventListener("pointerdown",t),()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerup",r),()=>e.removeEventListener("pointercancel",r))}fadeAll(e,t){const n=performance.now(),r=this.group.children.map(a=>this.materialOf(a)?.opacity??0),s=a=>{const o=Math.min((a-n)/t,1);this.group.children.forEach((l,c)=>{const f=this.materialOf(l);f&&(f.opacity=(r[c]??0)+(e-(r[c]??0))*o)}),o<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}materialOf(e){if(e instanceof bs||e instanceof $e)return e.material;for(const t of e.children){const n=this.materialOf(t);if(n)return n}return null}clearMarkers(){for(this.closeAllPanels();this.group.children.length;){const e=this.group.children[0];this.group.remove(e),this.markerTypeForObject(e)?.disposeObject(e)}this.hovered=null,this.draggingObject=null}}export{lg as M,Ma as P,bs as S,Gc as V,Hm as a,Nm as t};
