import{I as Wd}from"./B17QCtih.js";const xa="186",Sh=0,Fo=1,yh=2,Tr=1,Ih=2,Yi=3,si=0,Ot=1,Wt=2,Tn=0,Ki=1,Ur=2,No=3,Qo=4,Mh=5,gi=100,wh=101,Bh=102,Th=103,bh=104,Rh=200,Dh=201,Lh=202,Ph=203,Ko=204,Zo=205,Uh=206,Fh=207,Nh=208,Qh=209,Oh=210,Gh=211,kh=212,Hh=213,zh=214,Xs=0,Ys=1,Js=2,ji=3,Ks=4,Zs=5,$s=6,js=7,$o=0,Vh=1,Wh=2,gn=0,jo=1,el=2,tl=3,Ca=4,nl=5,il=6,rl=7,sl=300,Hn=301,Ci=302,Gs=303,ks=304,jr=306,er=1e3,$t=1001,ea=1002,vt=1003,al=1004,Mr=1005,at=1006,Hs=1007,Bn=1008,be=1009,ol=1010,ll=1011,ai=1012,Sa=1013,En=1014,Qt=1015,Bt=1016,ya=1017,Ia=1018,tr=1020,es=35902,ts=35899,cl=1021,nr=1022,St=1023,Dn=1026,ei=1027,ti=1028,Ma=1029,jt=1030,wa=1031,Ba=1033,Ei=33776,ni=33777,br=33778,ii=33779,Fr=35840,ta=35841,Si=35842,ir=35843,Nr=36196,rr=37492,sr=37496,Qr=37488,Or=37489,ar=37490,Gr=37491,ri=37808,na=37809,ia=37810,ra=37811,_i=37812,sa=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,Aa=37821,yi=36492,fa=36494,kr=36495,Hr=36283,zr=36284,or=36285,Vr=36286,qh=3200,Oo=0,Xh=1,dn="",ft="srgb",lr="srgb-linear",Wr="linear",je="srgb",zs=7680,Yh=519,Jh=512,Kh=513,Zh=514,Ta=515,$h=516,jh=517,ba=518,eu=519,hl=35044,Go="300 es",fn=2e3,qr=2001;function qd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tu(){const r=pa("canvas");return r.style.display="block",r}const Yl={};function Xr(...r){const e="THREE."+r.shift();console.log(e,...r)}function nu(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Be(...r){r=nu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=nu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function vi(...r){const e=r.join(" ");e in Yl||(Yl[e]=!0,Be(...r))}function Xd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Yd={[Xs]:Ys,[Js]:$s,[Ks]:js,[ji]:Zs,[Ys]:Xs,[$s]:Js,[js]:Ks,[Zs]:ji};class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Rr=Math.PI/180,Yr=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Le(r,e,t){return Math.max(e,Math.min(t,r))}function ul(r,e){return(r%e+e)%e}function Jd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Kd(r,e,t){return r!==e?(t-r)/(e-r):0}function Dr(r,e,t){return(1-t)*r+t*e}function Zd(r,e,t,n){return Dr(r,e,1-Math.exp(-t*n))}function $d(r,e=1){return e-Math.abs(ul(r,e*2)-e)}function jd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function eA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function tA(r,e){return r+Math.floor(Math.random()*(e-r+1))}function nA(r,e){return r+Math.random()*(e-r)}function iA(r){return r*(.5-Math.random())}function rA(r){r!==void 0&&(Jl=r);let e=Jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sA(r){return r*Rr}function aA(r){return r*Yr}function oA(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function lA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hA(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),d=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*d,l*h,l*u,o*c);break;case"YZY":r.set(l*u,o*d,l*h,o*c);break;case"ZXZ":r.set(l*h,l*u,o*d,o*c);break;case"XZX":r.set(o*d,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*d,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*d,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ne={DEG2RAD:Rr,RAD2DEG:Yr,generateUUID:bn,clamp:Le,euclideanModulo:ul,mapLinear:Jd,inverseLerp:Kd,lerp:Dr,damp:Zd,pingpong:$d,smoothstep:jd,smootherstep:eA,randInt:tA,randFloat:nA,randFloatSpread:iA,seededRandom:rA,degToRad:sA,radToDeg:aA,isPowerOfTwo:oA,ceilPowerOfTwo:lA,floorPowerOfTwo:cA,setQuaternionFromProperEuler:hA,normalize:tt,denormalize:An},Ll=class Ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let pe=Ll;class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==u||c!==f||d!==g){let p=l*u+c*f+d*g+h*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let A=1-o;if(p<.9995){const C=Math.acos(p),I=Math.sin(C);A=Math.sin(A*C)/I,o=Math.sin(o*C)/I,l=l*A+u*o,c=c*A+f*o,d=d*A+g*o,h=h*A+_*o}else{l=l*A+u*o,c=c*A+f*o,d=d*A+g*o,h=h*A+_*o;const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-o*f,e[t+2]=c*g+d*f+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pl=class Pl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=i+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pl.prototype.isVector3=!0;let B=Pl;const Va=new B,Kl=new on,Ul=class Ul{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],A=i[6],C=i[1],I=i[4],v=i[7],S=i[2],y=i[5],T=i[8];return s[0]=a*_+o*C+l*S,s[3]=a*p+o*I+l*y,s[6]=a*A+o*v+l*T,s[1]=c*_+d*C+h*S,s[4]=c*p+d*I+h*y,s[7]=c*A+d*v+h*T,s[2]=u*_+f*C+g*S,s[5]=u*p+f*I+g*y,s[8]=u*A+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,f=c*s-a*l,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-d*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;let Re=Ul;const Wa=new Re,Zl=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$l=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const r={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===dn?Wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[lr]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Zl,fromXYZ:$l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),r}const ke=uA();function kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ti;class iu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=pa("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dA=0;class Ra{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(qa(i[a].image)):s.push(qa(i[a]))}else s=qa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let AA=0;const Xa=new B;class xt extends oi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=$t,i=$t,s=at,a=Bn,o=St,l=be,c=xt.DEFAULT_ANISOTROPY,d=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=bn(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=sl;xt.DEFAULT_ANISOTROPY=1;const Fl=class Fl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],A=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(c+1)/2,v=(f+1)/2,S=(A+1)/2,y=(d+u)/4,T=(h+_)/4,E=(g+p)/4;return I>v&&I>S?I<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(I),i=y/n,s=T/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=y/i,s=E/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=E/s),this.set(n,i,s,t),this}let C=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(h-_)/C,this.z=(u-d)/C,this.w=Math.acos((c+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fl.prototype.isVector4=!0;let rt=Fl;class ru extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:at,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new xt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:at,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dl extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Al extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const va=class va{constructor(e,t,n,i,s,a,o,l,c,d,h,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,h,u,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,d,h,u,f,g,_,p){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=i,A[1]=s,A[5]=a,A[9]=o,A[13]=l,A[2]=c,A[6]=d,A[10]=h,A[14]=u,A[3]=f,A[7]=g,A[11]=_,A[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,_=o*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fA,e,pA)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yn.crossVectors(n,Yt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yn.crossVectors(n,Yt)),Yn.normalize(),os.crossVectors(Yt,Yn),i[0]=Yn.x,i[4]=os.x,i[8]=Yt.x,i[1]=Yn.y,i[5]=os.y,i[9]=Yt.y,i[2]=Yn.z,i[6]=os.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],A=n[14],C=n[3],I=n[7],v=n[11],S=n[15],y=i[0],T=i[4],E=i[8],M=i[12],b=i[1],U=i[5],N=i[9],G=i[13],D=i[2],k=i[6],V=i[10],W=i[14],te=i[3],q=i[7],j=i[11],K=i[15];return s[0]=a*y+o*b+l*D+c*te,s[4]=a*T+o*U+l*k+c*q,s[8]=a*E+o*N+l*V+c*j,s[12]=a*M+o*G+l*W+c*K,s[1]=d*y+h*b+u*D+f*te,s[5]=d*T+h*U+u*k+f*q,s[9]=d*E+h*N+u*V+f*j,s[13]=d*M+h*G+u*W+f*K,s[2]=g*y+_*b+p*D+A*te,s[6]=g*T+_*U+p*k+A*q,s[10]=g*E+_*N+p*V+A*j,s[14]=g*M+_*G+p*W+A*K,s[3]=C*y+I*b+v*D+S*te,s[7]=C*T+I*U+v*k+S*q,s[11]=C*E+I*N+v*V+S*j,s[15]=C*M+I*G+v*W+S*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],A=e[15],C=l*f-c*u,I=o*f-c*h,v=o*u-l*h,S=a*f-c*d,y=a*u-l*d,T=a*h-o*d;return t*(_*C-p*I+A*v)-n*(g*C-p*S+A*y)+i*(g*I-_*S+A*T)-s*(g*v-_*y+p*T)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(s*d-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],A=e[15],C=t*o-n*a,I=t*l-i*a,v=t*c-s*a,S=n*l-i*o,y=n*c-s*o,T=i*c-s*l,E=d*_-h*g,M=d*p-u*g,b=d*A-f*g,U=h*p-u*_,N=h*A-f*_,G=u*A-f*p,D=C*G-I*N+v*U+S*b-y*M+T*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(o*G-l*N+c*U)*k,e[1]=(i*N-n*G-s*U)*k,e[2]=(_*T-p*y+A*S)*k,e[3]=(u*y-h*T-f*S)*k,e[4]=(l*b-a*G-c*M)*k,e[5]=(t*G-i*b+s*M)*k,e[6]=(p*v-g*T-A*I)*k,e[7]=(d*T-u*v+f*I)*k,e[8]=(a*N-o*b+c*E)*k,e[9]=(n*b-t*N-s*E)*k,e[10]=(g*y-_*v+A*C)*k,e[11]=(h*v-d*y-f*C)*k,e[12]=(o*M-a*U-l*E)*k,e[13]=(t*U-n*M+i*E)*k,e[14]=(_*I-g*S-p*C)*k,e[15]=(d*S-h*I+u*C)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,h=o+o,u=s*c,f=s*d,g=s*h,_=a*d,p=a*h,A=o*h,C=l*c,I=l*d,v=l*h,S=n.x,y=n.y,T=n.z;return i[0]=(1-(_+A))*S,i[1]=(f+v)*S,i[2]=(g-I)*S,i[3]=0,i[4]=(f-v)*y,i[5]=(1-(u+A))*y,i[6]=(p+C)*y,i[7]=0,i[8]=(g+I)*T,i[9]=(p-C)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),l=bi.set(i[8],i[9],i[10]).length();s<0&&(a=-a),cn.copy(this);const c=1/a,d=1/o,h=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=fn,l=!1){const c=this.elements,d=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===fn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===qr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=fn,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===fn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===qr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};va.prototype.isMatrix4=!0;let nt=va;const bi=new B,cn=new nt,fA=new B(0,0,0),pA=new B(1,1,1),Yn=new B,os=new B,Yt=new B,jl=new nt,ec=new on;class an{constructor(e=0,t=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gA=0;const tc=new B,Ri=new on,Ln=new nt,ls=new B,pr=new B,mA=new B,EA=new on,nc=new B(1,0,0),ic=new B(0,1,0),rc=new B(0,0,1),sc={type:"added"},_A={type:"removed"},Di={type:"childadded",child:null},Ya={type:"childremoved",child:null};class Lt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new B,t=new an,n=new on,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Re}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(pr,ls,this.up):Ln.lookAt(ls,pr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),Di.child=e,this.dispatchEvent(Di),Di.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_A),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,mA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,EA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new B(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class Vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),A=this._getHandJoint(c,_);p!==null&&(A.matrix.fromArray(p.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=p.radius),A.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=ul(e,1),t=Le(t,0,1),n=Le(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ja(a,s,e+1/3),this.g=Ja(a,s,e),this.b=Ja(a,s,e-1/3)}return ke.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ke.workingToColorSpace(Nt.copy(this),e),Math.round(Le(Nt.r*255,0,255))*65536+Math.round(Le(Nt.g*255,0,255))*256+Math.round(Le(Nt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ft){ke.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(cs);const n=Dr(Jn.h,cs.h,t),i=Dr(Jn.s,cs.s,t),s=Dr(Jn.l,cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Xe;Xe.NAMES=su;class au extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new B,Pn=new B,Ka=new B,Un=new B,Li=new B,Pi=new B,ac=new B,Za=new B,$a=new B,ja=new B,eo=new rt,to=new rt,no=new rt;class Zt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Pn.subVectors(n,t),Ka.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Pn),l=hn.dot(Ka),c=Pn.dot(Pn),d=Pn.dot(Ka),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,g=(a*d-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return eo.setScalar(0),to.setScalar(0),no.setScalar(0),eo.fromBufferAttribute(e,t),to.fromBufferAttribute(e,n),no.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(eo,s.x),a.addScaledVector(to,s.y),a.addScaledVector(no,s.z),a}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Pn.subVectors(e,t),hn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Li.subVectors(i,n),Pi.subVectors(s,n),Za.subVectors(e,n);const l=Li.dot(Za),c=Pi.dot(Za);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const d=Li.dot($a),h=Pi.dot($a);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Li,a);ja.subVectors(e,s);const f=Li.dot(ja),g=Pi.dot(ja);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Pi,o);const p=d*g-f*h;if(p<=0&&h-d>=0&&f-g>=0)return ac.subVectors(s,i),o=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(ac,o);const A=1/(p+_+u);return a=_*A,o=u*A,t.copy(n).addScaledVector(Li,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),us.subVectors(this.max,gr),Ui.subVectors(e.a,gr),Fi.subVectors(e.b,gr),Ni.subVectors(e.c,gr),Kn.subVectors(Fi,Ui),Zn.subVectors(Ni,Fi),hi.subVectors(Ui,Ni);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-hi.y,hi.x,0];return!io(t,Ui,Fi,Ni,us)||(t=[1,0,0,0,1,0,0,0,1],!io(t,Ui,Fi,Ni,us))?!1:(ds.crossVectors(Kn,Zn),t=[ds.x,ds.y,ds.z],io(t,Ui,Fi,Ni,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new B,new B,new B,new B,new B,new B,new B,new B],un=new B,hs=new Vn,Ui=new B,Fi=new B,Ni=new B,Kn=new B,Zn=new B,hi=new B,gr=new B,us=new B,ds=new B,ui=new B;function io(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),d=n.dot(ui);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const _t=new B,As=new pe;let xA=0;class mn extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fl extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const CA=new Vn,mr=new B,ro=new B;class li{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):CA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ro)),this.expandByPoint(mr.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SA=0;const nn=new nt,so=new Lt,Qi=new B,Jt=new Vn,Er=new Vn,wt=new B;class Tt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Re().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,Er.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,Er.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(Er.min),Jt.expandByPoint(Er.max))}Jt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)wt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),wt.add(Qi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new B,l[E]=new B;const c=new B,d=new B,h=new B,u=new pe,f=new pe,g=new pe,_=new B,p=new B;function A(E,M,b){c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),u.fromBufferAttribute(s,E),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(U),p.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(U),o[E].add(_),o[M].add(_),o[b].add(_),l[E].add(p),l[M].add(p),l[b].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,M=C.length;E<M;++E){const b=C[E],U=b.start,N=b.count;for(let G=U,D=U+N;G<D;G+=3)A(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const I=new B,v=new B,S=new B,y=new B;function T(E){S.fromBufferAttribute(i,E),y.copy(S);const M=o[E];I.copy(M),I.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(y,M);const U=v.dot(l[E])<0?-1:1;a.setXYZW(E,I.x,I.y,I.z,U)}for(let E=0,M=C.length;E<M;++E){const b=C[E],U=b.start,N=b.count;for(let G=U,D=U+N;G<D;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,d=new B,h=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let A=0;A<d;A++)u[g++]=c[f++]}return new mn(u,d,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const kt=new B;class pn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ao=new B,yA=new B,IA=new Re;class Gn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ao.subVectors(n,t).cross(yA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ao),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||IA.getNormalMatrix(e),i=this.coplanarPoint(ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let MA=0;class Mi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ki,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ml extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Oi;const _r=new B,Gi=new B,ki=new B,Hi=new pe,vr=new pe,ou=new nt,fs=new B,xr=new B,ps=new B,oc=new pe,oo=new pe,lc=new pe;class ga extends Lt{constructor(e=new ml){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gl(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new pn(n,3,0,!1)),Oi.setAttribute("uv",new pn(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;gs(fs.set(-.5,-.5,0),ki,a,Gi,i,s),gs(xr.set(.5,-.5,0),ki,a,Gi,i,s),gs(ps.set(.5,.5,0),ki,a,Gi,i,s),oc.set(0,0),oo.set(1,0),lc.set(1,1);let o=e.ray.intersectTriangle(fs,xr,ps,!1,_r);if(o===null&&(gs(xr.set(-.5,.5,0),ki,a,Gi,i,s),oo.set(0,1),o=e.ray.intersectTriangle(fs,ps,xr,!1,_r),o===null))return;const l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:Zt.getInterpolation(_r,fs,xr,ps,oc,oo,lc,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gs(r,e,t,n,i,s){Hi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(vr.x=s*Hi.x-i*Hi.y,vr.y=i*Hi.x+s*Hi.y):vr.copy(Hi),r.copy(e),r.x+=vr.x,r.y+=vr.y,r.applyMatrix4(ou)}const Nn=new B,lo=new B,ms=new B,Es=new B;class La{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){lo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(lo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=Es.dot(this.direction),l=-Es.dot(ms),c=Es.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*l-o,u=a*o-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(lo).addScaledVector(ms,u),f}intersectSphere(e,t){if(e.radius<0)return null;Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,A=n.x-a.x,C=n.y-a.y,I=n.z-a.z,v=Math.abs(l),S=Math.abs(c),y=Math.abs(d);let T,E,M,b,U,N,G,D,k,V,W,te;if(v>=S&&v>=y?(M=l,N=h,k=g,te=A,l>=0?(T=c,E=d,b=u,U=f,G=_,D=p,V=C,W=I):(T=d,E=c,b=f,U=u,G=p,D=_,V=I,W=C)):S>=y?(M=c,N=u,k=_,te=C,c>=0?(T=d,E=l,b=f,U=h,G=p,D=g,V=I,W=A):(T=l,E=d,b=h,U=f,G=g,D=p,V=A,W=I)):(M=d,N=f,k=p,te=I,d>=0?(T=l,E=c,b=h,U=u,G=g,D=_,V=A,W=C):(T=c,E=l,b=u,U=h,G=_,D=g,V=C,W=A)),M===0)return null;const q=T/M,j=E/M,K=1/M,ue=b-q*N,ge=U-j*N,Je=G-q*k,We=D-j*k,Ke=V-q*te,Y=W-j*te,ee=Ke*We-Y*Je,ve=ue*Y-ge*Ke,De=Je*ge-We*ue;if(i){if(ee<0||ve<0||De<0)return null}else if((ee<0||ve<0||De<0)&&(ee>0||ve>0||De>0))return null;const Ee=ee+ve+De;if(Ee===0)return null;const Qe=K*(ee*N+ve*k+De*te);return(Ee>0?Qe<0:Qe>0)?null:this.at(Qe/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cc=new nt,di=new La,_s=new li,hc=new B,vs=new B,xs=new B,Cs=new B,co=new B,Ss=new B,uc=new B,ys=new B;class ze extends Lt{constructor(e=new Tt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(co.fromBufferAttribute(h,e),a?Ss.addScaledVector(co,d):Ss.addScaledVector(co.sub(t),d))}t.add(Ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(_s.containsPoint(di.origin)===!1&&(di.intersectSphere(_s,hc)===null||di.origin.distanceToSquared(hc)>(e.far-e.near)**2))&&(cc.copy(s).invert(),di.copy(e.ray).applyMatrix4(cc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],A=a[p.materialIndex],C=Math.max(p.start,f.start),I=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=C,S=I;v<S;v+=3){const y=o.getX(v),T=o.getX(v+1),E=o.getX(v+2);i=Is(this,A,e,n,c,d,h,y,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,A=_;p<A;p+=3){const C=o.getX(p),I=o.getX(p+1),v=o.getX(p+2);i=Is(this,a,e,n,c,d,h,C,I,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],A=a[p.materialIndex],C=Math.max(p.start,f.start),I=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=C,S=I;v<S;v+=3){const y=v,T=v+1,E=v+2;i=Is(this,A,e,n,c,d,h,y,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,A=_;p<A;p+=3){const C=p,I=p+1,v=p+2;i=Is(this,a,e,n,c,d,h,C,I,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function wA(r,e,t,n,i,s,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===si,o),l===null)return null;ys.copy(o),ys.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:r}}function Is(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,vs),r.getVertexPosition(l,xs),r.getVertexPosition(c,Cs);const d=wA(r,e,t,n,vs,xs,Cs,uc);if(d){const h=new B;Zt.getBarycoord(uc,vs,xs,Cs,h),i&&(d.uv=Zt.getInterpolatedAttribute(i,o,l,c,h,new pe)),s&&(d.uv1=Zt.getInterpolatedAttribute(s,o,l,c,h,new pe)),a&&(d.normal=Zt.getInterpolatedAttribute(a,o,l,c,h,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Zt.getNormal(vs,xs,Cs,u.normal),d.face=u,d.barycoord=h}return d}class Pa extends xt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=vt,d=vt,h,u){super(null,a,o,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ai=new li,BA=new pe(.5,.5),Ms=new B;class Ua{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,s=new Gn,a=new Gn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],A=s[11],C=s[12],I=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-a,f-d,A-g,S-C).normalize(),i[1].setComponents(c+a,f+d,A+g,S+C).normalize(),i[2].setComponents(c+o,f+h,A+_,S+I).normalize(),i[3].setComponents(c-o,f-h,A-_,S-I).normalize(),n)i[4].setComponents(l,u,p,v).normalize(),i[5].setComponents(c-l,f-u,A-p,S-v).normalize();else if(i[4].setComponents(c-l,f-u,A-p,S-v).normalize(),t===fn)i[5].setComponents(c+l,f+u,A+p,S+v).normalize();else if(t===qr)i[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=BA.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ms.x=i.normal.x>0?e.max.x:e.min.x,Ms.y=i.normal.y>0?e.max.y:e.min.y,Ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new B,Ea=new B,dc=new nt,Cr=new La,ws=new li,ho=new B,Ac=new B;class cu extends Lt{constructor(e=new Tt,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ma.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(Ea);e.setAttribute("lineDistance",new pt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;dc.copy(i).invert(),Cr.copy(e.ray).applyMatrix4(dc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const A=d.getX(_),C=d.getX(_+1),I=Bs(this,e,Cr,l,A,C,_);I&&t.push(I)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(f),A=Bs(this,e,Cr,l,_,p,g-1);A&&t.push(A)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const A=Bs(this,e,Cr,l,_,_+1,_);A&&t.push(A)}if(this.isLineLoop){const _=Bs(this,e,Cr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bs(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(ma.fromBufferAttribute(o,i),Ea.fromBufferAttribute(o,s),t.distanceSqToSegment(ma,Ea,ho,Ac)>n)return;ho.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ho);if(!(c<e.near||c>e.far))return{distance:c,point:Ac.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class ns extends xt{constructor(e,t,n,i,s,a,o,l,c,d,h,u){super(null,a,o,l,c,d,i,s,h,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class hu extends ns{constructor(e,t,n,i,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=$t,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uu extends ns{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Hn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class El extends xt{constructor(e=[],t=Hn,n,i,s,a,o,l,c,d){super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jr extends xt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends xt{constructor(e,t,n=En,i,s,a,o=vt,l=vt,c,d=Dn,h=1){if(d!==Dn&&d!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class du extends cr{constructor(e,t=En,n=Hn,i,s,a=vt,o=vt,l,c=Dn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _l extends xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends Tt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(h,2));function g(_,p,A,C,I,v,S,y,T,E,M){const b=v/T,U=S/E,N=v/2,G=S/2,D=y/2,k=T+1,V=E+1;let W=0,te=0;const q=new B;for(let j=0;j<V;j++){const K=j*U-G;for(let ue=0;ue<k;ue++){const ge=ue*b-N;q[_]=ge*C,q[p]=K*I,q[A]=D,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[A]=y>0?1:-1,d.push(q.x,q.y,q.z),h.push(ue/T),h.push(1-j/E),W+=1}}for(let j=0;j<E;j++)for(let K=0;K<T;K++){const ue=u+K+k*j,ge=u+K+k*(j+1),Je=u+(K+1)+k*(j+1),We=u+(K+1)+k*j;l.push(ue,ge,We),l.push(ge,Je,We),te+=6}o.addGroup(f,te,M),f+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const d=n[i],u=n[i+1]-d,f=(a-d)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new pe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],s=[],a=[],o=new B,l=new nt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Le(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Le(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fa extends _n{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*d-f*h+this.aX,c=u*h+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Au extends Fa{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,h){let u=(a-s)/c-(o-s)/(c+d)+(o-a)/d,f=(o-a)/d-(l-a)/(d+h)+(l-o)/h;u*=d,f*=d,i(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const fc=new B,pc=new B,uo=new vl,Ao=new vl,fo=new vl;class fu extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=i[(o-1)%s]:(pc.subVectors(i[0],i[1]).add(i[0]),c=pc);const h=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?d=i[(o+2)%s]:(fc.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),uo.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,g,_,p),Ao.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,g,_,p),fo.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,g,_,p)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),Ao.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),fo.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return n.set(uo.calc(l),Ao.calc(l),fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function TA(r,e){const t=1-r;return t*t*e}function bA(r,e){return 2*(1-r)*r*e}function RA(r,e){return r*r*e}function Lr(r,e,t,n){return TA(r,e)+bA(r,t)+RA(r,n)}function DA(r,e){const t=1-r;return t*t*t*e}function LA(r,e){const t=1-r;return 3*t*t*r*e}function PA(r,e){return 3*(1-r)*r*r*e}function UA(r,e){return r*r*r*e}function Pr(r,e,t,n,i){return DA(r,e)+LA(r,t)+PA(r,n)+UA(r,i)}class xl extends _n{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,i.x,s.x,a.x,o.x),Pr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pu extends _n{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Pr(e,i.x,s.x,a.x,o.x),Pr(e,i.y,s.y,a.y,o.y),Pr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cl extends _n{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends _n{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sl extends _n{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,i.x,s.x,a.x),Lr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends _n{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,i.x,s.x,a.x),Lr(e,i.y,s.y,a.y),Lr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yl extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],d=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(gc(o,l.x,c.x,d.x,h.x),gc(o,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var mc=Object.freeze({__proto__:null,ArcCurve:Au,CatmullRomCurve3:fu,CubicBezierCurve:xl,CubicBezierCurve3:pu,EllipseCurve:Fa,LineCurve:Cl,LineCurve3:gu,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:mu,SplineCurve:yl});class Eu extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mc[i.type]().fromJSON(i))}return this}}class ko extends Eu{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cl(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Sl(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new xl(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Fa(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Il extends ko{constructor(e){super(e),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ko().fromJSON(i))}return this}}function FA(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=_u(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=kA(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let d=o,h=l;for(let u=t;u<i;u+=t){const f=r[u],g=r[u+1];f<o&&(o=f),g<l&&(l=g),f>d&&(d=f),g>h&&(h=g)}c=Math.max(d-o,h-l),c=c!==0?32767/c:0}return Kr(s,a,t,o,l,c,0),a}function _u(r,e,t,n,i){let s;if(i===$A(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Ec(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Ec(a/n|0,r[a],r[a+1],s);return s&&hr(s,s.next)&&($r(s),s=s.next),s}function Ii(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(hr(t,t.next)||At(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&qA(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?QA(r,n,i,s):NA(r)){e.push(l.i,r.i,c.i),$r(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=OA(Ii(r),e),Kr(r,e,t,n,i,s,2)):a===2&&GA(r,e,t,n,i,s):Kr(Ii(r),e,t,n,i,s,1);break}}}function NA(r){const e=r.prev,t=r,n=r.next;if(At(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(i,s,a),h=Math.min(o,l,c),u=Math.max(i,s,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=u&&g.y>=h&&g.y<=f&&wr(i,o,s,l,a,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function QA(r,e,t,n){const i=r.prev,s=r,a=r.next;if(At(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,d=i.y,h=s.y,u=a.y,f=Math.min(o,l,c),g=Math.min(d,h,u),_=Math.max(o,l,c),p=Math.max(d,h,u),A=Ho(f,g,e,t,n),C=Ho(_,p,e,t,n);let I=r.prevZ,v=r.nextZ;for(;I&&I.z>=A&&v&&v.z<=C;){if(I.x>=f&&I.x<=_&&I.y>=g&&I.y<=p&&I!==i&&I!==a&&wr(o,d,l,h,c,u,I.x,I.y)&&At(I.prev,I,I.next)>=0||(I=I.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&wr(o,d,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;I&&I.z>=A;){if(I.x>=f&&I.x<=_&&I.y>=g&&I.y<=p&&I!==i&&I!==a&&wr(o,d,l,h,c,u,I.x,I.y)&&At(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;v&&v.z<=C;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==a&&wr(o,d,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function OA(r,e){let t=r;do{const n=t.prev,i=t.next.next;!hr(n,i)&&xu(n,t,t.next,i)&&Zr(n,i)&&Zr(i,n)&&(e.push(n.i,t.i,i.i),$r(t),$r(t.next),t=r=i),t=t.next}while(t!==r);return Ii(t)}function GA(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&JA(a,o)){let l=Cu(a,o);a=Ii(a,a.next),l=Ii(l,l.next),Kr(a,e,t,n,i,s,0),Kr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function kA(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=_u(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(YA(c))}i.sort(HA);for(let s=0;s<i.length;s++)t=zA(i[s],t);return t}function HA(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function zA(r,e){const t=VA(r,e);if(!t)return e;const n=Cu(t,r);return Ii(n,n.next),Ii(t,t.next)}function VA(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(hr(r,t))return t;do{if(hr(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vu(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Zr(t,r)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&WA(a,t)))&&(a=t,d=h)}t=t.next}while(t!==o);return a}function WA(r,e){return At(r.prev,r,e.prev)<0&&At(e.next,r,r.next)<0}function qA(r,e,t,n){let i=r;do i.z===0&&(i.z=Ho(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,XA(i)}function XA(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Ho(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function YA(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function wr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&vu(r,e,t,n,i,s,a,o)}function JA(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!KA(r,e)&&(Zr(r,e)&&Zr(e,r)&&ZA(r,e)&&(At(r.prev,r,e.prev)||At(r,e.prev,e))||hr(r,e)&&At(r.prev,r,r.next)>0&&At(e.prev,e,e.next)>0)}function At(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function hr(r,e){return r.x===e.x&&r.y===e.y}function xu(r,e,t,n){const i=bs(At(r,e,t)),s=bs(At(r,e,n)),a=bs(At(t,n,r)),o=bs(At(t,n,e));return!!(i!==s&&a!==o||i===0&&Ts(r,t,e)||s===0&&Ts(r,n,e)||a===0&&Ts(t,r,n)||o===0&&Ts(t,e,n))}function Ts(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function bs(r){return r>0?1:r<0?-1:0}function KA(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&xu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Zr(r,e){return At(r.prev,r,r.next)<0?At(r,e,r.next)>=0&&At(r,r.prev,e)>=0:At(r,e,r.prev)<0||At(r,r.next,e)<0}function ZA(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Cu(r,e){const t=zo(r.i,r.x,r.y),n=zo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ec(r,e,t,n){const i=zo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $r(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zo(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $A(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class jA{static triangulate(e,t,n=2){return FA(e,t,n)}}class $i{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return $i.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];_c(e),vc(n,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,vc(n,t[l]);const o=jA.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function _c(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function vc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class zn extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,f=[],g=[],_=[],p=[];for(let A=0;A<d;A++){const C=A*u-a;for(let I=0;I<c;I++){const v=I*h-s;g.push(v,-C,0),_.push(0,0,1),p.push(I/o),p.push(1-A/l)}}for(let A=0;A<l;A++)for(let C=0;C<o;C++){const I=C+c*A,v=C+c*(A+1),S=C+1+c*(A+1),y=C+1+c*A;f.push(I,v,y),f.push(v,S,y)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Na extends Tt{constructor(e=new Il([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new pt(i,3)),this.setAttribute("normal",new pt(s,3)),this.setAttribute("uv",new pt(a,2));function c(d){const h=i.length/3,u=d.extractPoints(t);let f=u.shape;const g=u.holes;$i.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,A=g.length;p<A;p++){const C=g[p];$i.isClockWise(C)===!0&&(g[p]=C.reverse())}const _=$i.triangulateShape(f,g);for(let p=0,A=g.length;p<A;p++){const C=g[p];f=f.concat(C)}for(let p=0,A=f.length;p<A;p++){const C=f[p];i.push(C.x,C.y,0),s.push(0,0,1),a.push(C.x,C.y)}for(let p=0,A=_.length;p<A;p++){const C=_[p],I=C[0]+h,v=C[1]+h,S=C[2]+h;n.push(I,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ef(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Na(n,e.curveSegments)}}function ef(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class ur extends Tt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new B,u=new B,f=[],g=[],_=[],p=[];for(let A=0;A<=n;A++){const C=[],I=A/n,v=a+I*o,S=e*Math.cos(v),y=Math.sqrt(e*e-S*S);let T=0;A===0&&a===0?T=.5/t:A===n&&l===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const M=E/t,b=i+M*s;h.x=-y*Math.cos(b),h.y=S,h.z=y*Math.sin(b),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),p.push(M+T,1-I),C.push(c++)}d.push(C)}for(let A=0;A<n;A++)for(let C=0;C<t;C++){const I=d[A][C+1],v=d[A][C],S=d[A+1][C],y=d[A+1][C+1];(A!==0||a>0)&&f.push(I,v,y),(A!==n-1||l<Math.PI)&&f.push(v,S,y)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Su extends Tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new B,s=new B;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],u=h.start,f=h.count;for(let g=u,_=u+f;g<_;g+=3)for(let p=0;p<3;p++){const A=o.getX(g+p),C=o.getX(g+(p+1)%3);i.fromBufferAttribute(a,A),s.fromBufferAttribute(a,C),xc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,h=3*o+(c+1)%3;i.fromBufferAttribute(a,d),s.fromBufferAttribute(a,h),xc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new pt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function xc(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}function dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Cc(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Cc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const n=dr(r[t]);for(const i in n)e[i]=n[i]}return e}function Cc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function tf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Qa={clone:dr,merge:zt};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Iu extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mu extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wu extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Sc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Sc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Sc(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Bu{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Tu=new Bu;class is{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class sf extends Error{constructor(e,t){super(e),this.response=t}}class Ws extends is{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Qn[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const p=new ReadableStream({start(A){C();function C(){h.read().then(({done:I,value:v})=>{if(I)A.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let y=0,T=d.length;y<T;y++){const E=d[y];E.onProgress&&E.onProgress(S)}A.enqueue(v),C()}},I=>{A.error(I)})}}});return new Response(p)}else throw new sf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{mi.add(`file:${e}`,c);const d=Qn[e];delete Qn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Qn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=new B,Ds=new on,Cn=new B;class Ml extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rs,Ds,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ds,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rs,Ds,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ds,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new B,yc=new pe,Ic=new pe;class Kt extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,yc,Ic),t.subVectors(Ic,yc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wl extends Ml{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bu extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const po=new WeakMap;class Ru extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{po.has(a)===!0?(i&&i(po.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),po.set(l,c),mi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zi=-90,Vi=1;class Du extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(zi,Vi,e,t);i.layers=this.layers,this.add(i);const s=new Kt(zi,Vi,e,t);s.layers=this.layers,this.add(s);const a=new Kt(zi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(zi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(zi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(zi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lu extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _a extends gl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Mc=new nt;class Bl{constructor(e,t,n=0,i=1/0){this.ray=new La(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,n=[]){return Vo(e,this,n,t),n.sort(wc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vo(e[i],this,n,t);return n.sort(wc),n}}function wc(r,e){return r.distance-e.distance}function Vo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Vo(s[a],e,t,!0)}}const Nl=class Nl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Nl.prototype.isMatrix2=!0;let Wo=Nl;const Bc=new B,Ls=new B,Wi=new B,qi=new B,go=new B,af=new B,of=new B;class Pu{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bc.subVectors(e,this.start),Ls.subVectors(this.end,this.start);const n=Ls.dot(Ls);if(n===0)return 0;let s=Ls.dot(Bc)/n;return t&&(s=Le(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=af,n=of){const i=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,d=e.end;Wi.subVectors(c,o),qi.subVectors(d,l),go.subVectors(o,l);const h=Wi.dot(Wi),u=qi.dot(qi),f=qi.dot(go);if(h<=i&&u<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(h<=i)s=0,a=f/u,a=Le(a,0,1);else{const g=Wi.dot(go);if(u<=i)a=0,s=Le(-g/h,0,1);else{const _=Wi.dot(qi),p=h*u-_*_;p!==0?s=Le((_*f-g*u)/p,0,1):s=0,a=(_*s+f)/u,a<0?(a=0,s=Le(-g/h,0,1)):a>1&&(a=1,s=Le((_-g)/h,0,1))}}return t.copy(o).addScaledVector(Wi,s),n.copy(l).addScaledVector(qi,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Tc(r,e,t,n){const i=lf(n);switch(t){case cl:return r*e;case ti:return r*e/i.components*i.byteLength;case Ma:return r*e/i.components*i.byteLength;case jt:return r*e*2/i.components*i.byteLength;case wa:return r*e*2/i.components*i.byteLength;case nr:return r*e*3/i.components*i.byteLength;case St:return r*e*4/i.components*i.byteLength;case Ba:return r*e*4/i.components*i.byteLength;case Ei:case ni:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case br:case ii:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ta:case ir:return Math.max(r,16)*Math.max(e,8)/4;case Fr:case Si:return Math.max(r,8)*Math.max(e,8)/2;case Nr:case rr:case Qr:case Or:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sr:case ar:case Gr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ri:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _i:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yi:case fa:case kr:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hr:case zr:return Math.ceil(r/4)*Math.ceil(e/4)*8;case or:case Vr:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(r){switch(r){case be:case ol:return{byteLength:1,components:1};case ai:case ll:case Bt:return{byteLength:2,components:1};case ya:case Ia:return{byteLength:2,components:4};case En:case Sa:case Qt:return{byteLength:4,components:1};case es:case ts:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);function Uu(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cf(r){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:Af,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:gf,aomap_pars_fragment:mf,batching_pars_vertex:Ef,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:xf,bsdfs:Cf,iridescence_fragment:Sf,bumpmap_pars_fragment:yf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Bf,color_fragment:Tf,color_pars_fragment:bf,color_pars_vertex:Rf,color_vertex:Df,common:Lf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Nf,emissivemap_fragment:Qf,emissivemap_pars_fragment:Of,colorspace_fragment:Gf,colorspace_pars_fragment:kf,envmap_fragment:Hf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:np,envmap_vertex:qf,fog_vertex:Xf,fog_pars_vertex:Yf,fog_fragment:Jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:$f,lights_lambert_fragment:jf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:rp,lights_phong_fragment:sp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,lightprobes_pars_fragment:dp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:gp,map_fragment:mp,map_pars_fragment:Ep,map_particle_fragment:_p,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Sp,morphcolor_vertex:yp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Mp,morphtarget_vertex:wp,normal_fragment_begin:Bp,normal_fragment_maps:Tp,normal_pars_fragment:bp,normal_pars_vertex:Rp,normal_vertex:Dp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Np,opaque_fragment:Qp,packing:Op,premultiplied_alpha_fragment:Gp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:zp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Xp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Jp,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:$p,skinnormal_vertex:jp,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:rg,transmission_pars_fragment:sg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:Ag,cube_vert:fg,cube_frag:pg,depth_vert:gg,depth_frag:mg,distance_vert:Eg,distance_frag:_g,equirect_vert:vg,equirect_frag:xg,linedashed_vert:Cg,linedashed_frag:Sg,meshbasic_vert:yg,meshbasic_frag:Ig,meshlambert_vert:Mg,meshlambert_frag:wg,meshmatcap_vert:Bg,meshmatcap_frag:Tg,meshnormal_vert:bg,meshnormal_frag:Rg,meshphong_vert:Dg,meshphong_frag:Lg,meshphysical_vert:Pg,meshphysical_frag:Ug,meshtoon_vert:Fg,meshtoon_frag:Ng,points_vert:Qg,points_frag:Og,shadow_vert:Gg,shadow_frag:kg,sprite_vert:Hg,sprite_frag:zg},re={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Vt={basic:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:zt([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:zt([re.lights,re.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Vt.physical={uniforms:zt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ps={r:0,b:0,g:0},Vg=new nt,Fu=new Re;Fu.set(-1,0,0,0,1,0,0,0,1);function Wg(r,e,t,n,i,s){const a=new Xe(0);let o=i===!0?0:1,l,c,d=null,h=0,u=null;function f(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const v=C.backgroundBlurriness>0;I=e.get(I,v)}return I}function g(C){let I=!1;const v=f(C);v===null?p(a,o):v&&v.isColor&&(p(v,1),I=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(C,I){const v=f(I);v&&(v.isCubeTexture||v.mapping===jr)?(c===void 0&&(c=new ze(new Ar(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:dr(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(I.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fu),c.material.toneMapped=ke.getTransfer(v.colorSpace)!==je,(d!==v||h!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=r.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ze(new zn(2,2),new Xt({name:"BackgroundMaterial",uniforms:dr(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=ke.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=r.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function p(C,I){C.getRGB(Ps,yu(r)),t.buffers.color.setClear(Ps.r,Ps.g,Ps.b,I,s)}function A(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,I=1){a.set(C),o=I,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,p(a,o)},render:g,addToRenderList:_,dispose:A}}function qg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(U,N,G,D,k){let V=!1;const W=h(U,D,G,N);s!==W&&(s=W,c(s.object)),V=f(U,D,G,k),V&&g(U,D,G,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(U,N,G,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(U){return r.bindVertexArray(U)}function d(U){return r.deleteVertexArray(U)}function h(U,N,G,D){const k=D.wireframe===!0;let V=n[N.id];V===void 0&&(V={},n[N.id]=V);const W=U.isInstancedMesh===!0?U.id:0;let te=V[W];te===void 0&&(te={},V[W]=te);let q=te[G.id];q===void 0&&(q={},te[G.id]=q);let j=q[k];return j===void 0&&(j=u(l()),q[k]=j),j}function u(U){const N=[],G=[],D=[];for(let k=0;k<t;k++)N[k]=0,G[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,N,G,D){const k=s.attributes,V=N.attributes;let W=0;const te=G.getAttributes();for(const q in te)if(te[q].location>=0){const K=k[q];let ue=V[q];if(ue===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function g(U,N,G,D){const k={},V=N.attributes;let W=0;const te=G.getAttributes();for(const q in te)if(te[q].location>=0){let K=V[q];K===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),k[q]=ue,W++}s.attributes=k,s.attributesNum=W,s.index=D}function _(){const U=s.newAttributes;for(let N=0,G=U.length;N<G;N++)U[N]=0}function p(U){A(U,0)}function A(U,N){const G=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;G[U]=1,D[U]===0&&(r.enableVertexAttribArray(U),D[U]=1),k[U]!==N&&(r.vertexAttribDivisor(U,N),k[U]=N)}function C(){const U=s.newAttributes,N=s.enabledAttributes;for(let G=0,D=N.length;G<D;G++)N[G]!==U[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function I(U,N,G,D,k,V,W){W===!0?r.vertexAttribIPointer(U,N,G,k,V):r.vertexAttribPointer(U,N,G,D,k,V)}function v(U,N,G,D){_();const k=D.attributes,V=G.getAttributes(),W=N.defaultAttributeValues;for(const te in V){const q=V[te];if(q.location>=0){let j=k[te];if(j===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){const K=j.normalized,ue=j.itemSize,ge=e.get(j);if(ge===void 0)continue;const Je=ge.buffer,We=ge.type,Ke=ge.bytesPerElement,Y=We===r.INT||We===r.UNSIGNED_INT||j.gpuType===Sa;if(j.isInterleavedBufferAttribute){const ee=j.data,ve=ee.stride,De=j.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)A(q.location+Ee,ee.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)p(q.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Ee=0;Ee<q.locationSize;Ee++)I(q.location+Ee,ue/q.locationSize,We,K,ve*Ke,(De+ue/q.locationSize*Ee)*Ke,Y)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)A(q.location+ee,j.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let ee=0;ee<q.locationSize;ee++)I(q.location+ee,ue/q.locationSize,We,K,ue*Ke,ue/q.locationSize*ee*Ke,Y)}}else if(W!==void 0){const K=W[te];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(q.location,K);break;case 3:r.vertexAttrib3fv(q.location,K);break;case 4:r.vertexAttrib4fv(q.location,K);break;default:r.vertexAttrib1fv(q.location,K)}}}}C()}function S(){M();for(const U in n){const N=n[U];for(const G in N){const D=N[G];for(const k in D){const V=D[k];for(const W in V)d(V[W].object),delete V[W];delete D[k]}}delete n[U]}}function y(U){if(n[U.id]===void 0)return;const N=n[U.id];for(const G in N){const D=N[G];for(const k in D){const V=D[k];for(const W in V)d(V[W].object),delete V[W];delete D[k]}}delete n[U.id]}function T(U){for(const N in n){const G=n[N];for(const D in G){const k=G[D];if(k[U.id]===void 0)continue;const V=k[U.id];for(const W in V)d(V[W].object),delete V[W];delete k[U.id]}}}function E(U){for(const N in n){const G=n[N],D=U.isInstancedMesh===!0?U.id:0,k=G[D];if(k!==void 0){for(const V in k){const W=k[V];for(const te in W)d(W[te].object),delete W[te];delete k[V]}delete G[D],Object.keys(G).length===0&&delete n[N]}}}function M(){b(),a=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:C}}function Xg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(r.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==St&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const E=T===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==be&&T!==Qt&&!E&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),y=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:v,maxSamples:S,samples:y}}function Jg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Gn,o=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,A=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?d(null):c();else{const C=s?0:n,I=C*4;let v=A.clippingState||null;l.value=v,v=d(g,u,I,f);for(let S=0;S!==I;++S)v[S]=t[S];A.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const A=f+_*4,C=u.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<A)&&(p=new Float32Array(A));for(let I=0,v=f;I!==_;++I,v+=4)a.copy(h[I]).applyMatrix4(C,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Ji=4,Kg=6,Zg=20,$g=256,Sr=new wl,bc=new Xe;let mo=null,Eo=0,_o=0,vo=!1;const jg=new B,fi=new B;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=jg}=s;mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,Eo,_o),this._renderer.xr.enabled=vo,e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:at,minFilter:at,generateMipmaps:!1,type:Bt,format:St,colorSpace:lr,depthBuffer:!1},i=Rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(s)),this._blurMaterial=nm(s,e,t),this._ggxMaterial=tm(s,e,t)}return i}_compileMaterial(e){const t=new ze(new Tt,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,i,s){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bc),h.toneMapping=gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Ar,new Rn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let A=!1;const C=e.background;C?C.isColor&&(p.color.copy(C),e.background=null,A=!0):(p.color.copy(bc),A=!0);for(let I=0;I<6;I++){const v=I%3;v===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[I],s.y,s.z)):v===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[I]));const S=this._cubeSize;Xi(i,v*S,I>2?S:0,S,S),h.setRenderTarget(i),A&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hn||e.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,f=h*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ji?n-g+Ji:0),A=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Xi(s,p,A,3*_,2*_),i.setRenderTarget(s),i.render(o,Sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Xi(e,p,A,3*_,2*_),i.setRenderTarget(e),i.render(o,Sr)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[i],h=3*d*(i>this._lodMax-Ji?i-this._lodMax+Ji:0),u=4*(this._cubeSize-d);Xi(t,h,u,3*d,2*d),a.setRenderTarget(t),a.render(l,Sr)}}function em(r){const e=[],t=[];let n=r;const i=r-Ji+1+Kg;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,f=3,g=new Float32Array(f*u*h),_=new Float32Array(f*u*h);for(let A=0;A<h;A++){const C=A%3*2/3-1,I=A>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];g.set(v,f*u*A);for(let S=0;S<u;S++){const y=d[S*2]*2-1,T=d[S*2+1]*2-1;A===0?fi.set(1,T,y):A===1?fi.set(-y,1,-T):A===2?fi.set(-y,T,1):A===3?fi.set(-1,T,-y):A===4?fi.set(-y,-1,T):fi.set(y,T,-1),fi.toArray(_,(A*u+S)*f)}}const p=new Tt;p.setAttribute("position",new mn(g,f)),p.setAttribute("outputDirection",new mn(_,f)),t.push(new ze(p,null)),n>Ji&&n--}return{lodMeshes:t,sizeLods:e}}function Rc(r,e,t){const n=new sn(r,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tm(r,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function nm(r,e,t){return new Xt({name:"SphericalGaussianBlur",defines:{SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Dc(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Lc(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Tl extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ar(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Tn});s.uniforms.tEquirect.value=t;const a=new ze(i,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=at),new Du(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function im(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Gs||f===ks)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new Tl(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Gs||f===ks,_=f===Hn||f===Ci;if(g||_){let p=t.get(u);const A=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==A)return n===null&&(n=new qo(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const C=u.image;return g&&C&&C.height>0||_&&C&&l(C)?(n===null&&(n=new qo(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",d),p.texture):null}}}return u}function o(u,f){return f===Gs?u.mapping=Hn:f===ks&&(u.mapping=Ci),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function rm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vi("WebGLRenderer: "+n+" extension not supported."),i}}}function sm(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const C=f.array;_=f.version;for(let I=0,v=C.length;I<v;I+=3){const S=C[I+0],y=C[I+1],T=C[I+2];u.push(S,y,y,T,T,S)}}else{const C=g.array;_=g.version;for(let I=0,v=C.length/3-1;I<v;I+=3){const S=I+0,y=I+1,T=I+2;u.push(S,y,y,T,T,S)}}const p=new(g.count>=65535?pl:fl)(u,1);p.version=_;const A=s.get(h);A&&e.remove(A),s.set(h,p)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function am(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){r.drawElements(n,u,s,h*a),t.update(u,n,1)}function c(h,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function om(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lm(r,e,t){const n=new WeakMap,i=new rt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let I=0;f===!0&&(I=1),g===!0&&(I=2),_===!0&&(I=3);let v=o.attributes.position.count*I,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const y=new Float32Array(v*S*4*h),T=new dl(y,v,S,h);T.type=Qt,T.needsUpdate=!0;const E=I*4;for(let b=0;b<h;b++){const U=p[b],N=A[b],G=C[b],D=v*S*4*b;for(let k=0;k<U.count;k++){const V=k*E;f===!0&&(i.fromBufferAttribute(U,k),y[D+V+0]=i.x,y[D+V+1]=i.y,y[D+V+2]=i.z,y[D+V+3]=0),g===!0&&(i.fromBufferAttribute(N,k),y[D+V+4]=i.x,y[D+V+5]=i.y,y[D+V+6]=i.z,y[D+V+7]=0),_===!0&&(i.fromBufferAttribute(G,k),y[D+V+8]=i.x,y[D+V+9]=i.y,y[D+V+10]=i.z,y[D+V+11]=G.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new pe(v,S)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function cm(r,e,t,n,i){let s=new WeakMap;function a(c){const d=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const hm={[jo]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function um(r,e,t,n,i,s){const a=new sn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Tt;c.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pt([0,2,0,0,2,0],2));const d=new Iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ze(c,d),u=new wl(-1,1,1,-1,0,1);let f=null,g=null,_=!1,p,A=null,C=[],I=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let y=0;y<C.length;y++){const T=C[y];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){C=v,I=C.length>0&&C[0].isRenderPass===!0;const S=a.width,y=a.height;C.length>0&&o===null&&(o=new sn(S,y,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),l=new sn(S,y,{type:Bt,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<C.length;T++){const E=C[T];E.setSize&&E.setSize(S,y)}},this.begin=function(v,S){if(_||v.toneMapping===gn&&C.length===0)return!1;if(A=S,S!==null){const y=S.width,T=S.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return I===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=gn,!0},this.hasRenderPass=function(){return I},this.end=function(v,S){v.toneMapping=p,_=!0;let y=a,T=o;for(let E=0;E<C.length;E++){const M=C[E];M.enabled!==!1&&(M.render(v,T,y,S),M.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,d.defines={},ke.getTransfer(f)===je&&(d.defines.SRGB_TRANSFER="");const E=hm[g];E&&(d.defines[E]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(A),v.render(h,u),A=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Nu=new xt,Xo=new cr(1,1),Qu=new dl,Ou=new Al,Gu=new El,Pc=[],Uc=[],Fc=new Float32Array(16),Nc=new Float32Array(9),Qc=new Float32Array(4);function fr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pc[i];if(s===void 0&&(s=new Float32Array(i),Pc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ga(r,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function gm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(yt(t,n))return;Qc.set(n),r.uniformMatrix2fv(this.addr,!1,Qc),It(t,n)}}function mm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(yt(t,n))return;Nc.set(n),r.uniformMatrix3fv(this.addr,!1,Nc),It(t,n)}}function Em(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(yt(t,n))return;Fc.set(n),r.uniformMatrix4fv(this.addr,!1,Fc),It(t,n)}}function _m(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function Sm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function Im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function Mm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Xo.compareFunction=t.isReversedDepthBuffer()?ba:Ta,s=Xo):s=Nu,t.setTexture2D(e||s,i)}function Bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ou,i)}function Tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gu,i)}function bm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function Rm(r){switch(r){case 5126:return dm;case 35664:return Am;case 35665:return fm;case 35666:return pm;case 35674:return gm;case 35675:return mm;case 35676:return Em;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return Cm;case 5125:return Sm;case 36294:return ym;case 36295:return Im;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return bm}}function Dm(r,e){r.uniform1fv(this.addr,e)}function Lm(r,e){const t=fr(e,this.size,2);r.uniform2fv(this.addr,t)}function Pm(r,e){const t=fr(e,this.size,3);r.uniform3fv(this.addr,t)}function Um(r,e){const t=fr(e,this.size,4);r.uniform4fv(this.addr,t)}function Fm(r,e){const t=fr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nm(r,e){const t=fr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qm(r,e){const t=fr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Om(r,e){r.uniform1iv(this.addr,e)}function Gm(r,e){r.uniform2iv(this.addr,e)}function km(r,e){r.uniform3iv(this.addr,e)}function Hm(r,e){r.uniform4iv(this.addr,e)}function zm(r,e){r.uniform1uiv(this.addr,e)}function Vm(r,e){r.uniform2uiv(this.addr,e)}function Wm(r,e){r.uniform3uiv(this.addr,e)}function qm(r,e){r.uniform4uiv(this.addr,e)}function Xm(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Xo:a=Nu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Ym(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ou,s[a])}function Jm(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Gu,s[a])}function Km(r,e,t){const n=this.cache,i=e.length,s=Ga(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qu,s[a])}function Zm(r){switch(r){case 5126:return Dm;case 35664:return Lm;case 35665:return Pm;case 35666:return Um;case 35674:return Fm;case 35675:return Nm;case 35676:return Qm;case 5124:case 35670:return Om;case 35667:case 35671:return Gm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return zm;case 36294:return Vm;case 36295:return Wm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Km}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rm(t.type)}}class jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Oc(r,e){r.seq.push(e),r.map[e.id]=e}function t0(r,e,t){const n=r.name,i=n.length;for(xo.lastIndex=0;;){const s=xo.exec(n),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Oc(t,c===void 0?new $m(o,r,e):new jm(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new e0(o),Oc(t,h)),t=h}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);t0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const n0=37297;let i0=0;function r0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const kc=new Re;function s0(r){ke._getMatrix(kc,ke.workingColorSpace,r);const e=`mat3( ${kc.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(r)){case Wr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+r0(r.getShaderSource(e),o)}else return s}function a0(r,e){const t=s0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const o0={[jo]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[Ca]:"ACESFilmic",[il]:"AgX",[rl]:"Neutral",[nl]:"Custom"};function l0(r,e){const t=o0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new B;function c0(){ke.getLuminanceCoefficients(Us);const r=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function u0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Br(r){return r!==""}function zc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(A0,p0)}const f0=new Map;function p0(r,e){let t=Ue[e];if(t===void 0){const n=f0.get(e);if(n!==void 0)t=Ue[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Yo(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(r){return r.replace(g0,m0)}function m0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const E0={[Tr]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function _0(r){return E0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v0={[Hn]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function x0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":v0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const C0={[Ci]:"ENVMAP_MODE_REFRACTION"};function S0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y0={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function I0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":y0[r.combine]||"ENVMAP_BLENDING_NONE"}function M0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_0(t),c=x0(t),d=S0(t),h=I0(t),u=M0(t),f=h0(t),g=u0(s),_=i.createProgram();let p,A,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),A.length>0&&(A+=`
`)):(p=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),A=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==gn?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),c0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Yo(a),a=zc(a,t),a=Vc(a,t),o=Yo(o),o=zc(o,t),o=Vc(o,t),a=Wc(a),o=Wc(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const I=C+p+a,v=C+A+o,S=Gc(i,i.VERTEX_SHADER,I),y=Gc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,y),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(U){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(y)||"",k=N.trim(),V=G.trim(),W=D.trim();let te=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,y);else{const j=Hc(i,S,"vertex"),K=Hc(i,y,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+j+`
`+K)}else k!==""?Be("WebGLProgram: Program Info Log:",k):(V===""||W==="")&&(q=!1);q&&(U.diagnostics={runnable:te,programLog:k,vertexShader:{log:V,prefix:p},fragmentShader:{log:W,prefix:A}})}i.deleteShader(S),i.deleteShader(y),E=new qs(i,_),M=d0(i,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,n0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=y,this}let B0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b0(e),t.set(e,n)),n}}class b0{constructor(e){this.id=B0++,this.code=e,this.usedTimes=0}}function R0(r){return r===jt||r===ar||r===or}function D0(r,e,t,n,i,s){const a=new Da,o=new T0,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function _(E,M,b,U,N,G){const D=U.fog,k=N.geometry,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,te=e.get(E.envMap||V,W),q=te&&te.mapping===jr?te.image.height:null,j=f[E.type];E.precision!==null&&(u=n.getMaxPrecision(E.precision),u!==E.precision&&Be("WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ue=K!==void 0?K.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let Je,We,Ke,Y;if(j){const lt=Vt[j];Je=lt.vertexShader,We=lt.fragmentShader}else{Je=E.vertexShader,We=E.fragmentShader;const lt=o.getVertexShaderStage(E),Ze=o.getFragmentShaderStage(E);o.update(E,lt,Ze),Ke=lt.id,Y=Ze.id}const ee=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Qe=!!E.map,Ct=!!E.matcap,Oe=!!te,Ye=!!E.aoMap,ot=!!E.lightMap,He=!!E.bumpMap&&E.wireframe===!1,ut=!!E.normalMap,Mt=!!E.displacementMap,qt=!!E.emissiveMap,dt=!!E.metalnessMap,mt=!!E.roughnessMap,P=E.anisotropy>0,Pt=E.clearcoat>0,et=E.dispersion>0,w=E.retroreflectivity>0,m=E.iridescence>0,F=E.sheen>0,H=E.transmission>0,X=P&&!!E.anisotropyMap,ie=Pt&&!!E.clearcoatMap,se=Pt&&!!E.clearcoatNormalMap,J=Pt&&!!E.clearcoatRoughnessMap,$=m&&!!E.iridescenceMap,ae=m&&!!E.iridescenceThicknessMap,Ie=F&&!!E.sheenColorMap,he=F&&!!E.sheenRoughnessMap,oe=!!E.specularMap,Me=!!E.specularColorMap,Te=!!E.specularIntensityMap,Pe=H&&!!E.transmissionMap,L=H&&!!E.thicknessMap,le=!!E.gradientMap,Z=!!E.alphaMap,ce=E.alphaTest>0,fe=!!E.alphaHash,ne=!!E.extensions;let we=gn;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(we=r.toneMapping);const Se={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:We,defines:E.defines,customVertexShaderID:Ke,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:Ct,envMap:Oe,envMapMode:Oe&&te.mapping,envMapCubeUVHeight:q,aoMap:Ye,lightMap:ot,bumpMap:He,normalMap:ut,displacementMap:Mt,emissiveMap:qt,normalMapObjectSpace:ut&&E.normalMapType===Xh,normalMapTangentSpace:ut&&E.normalMapType===Oo,packedNormalMap:ut&&E.normalMapType===Oo&&R0(E.normalMap.format),metalnessMap:dt,roughnessMap:mt,anisotropy:P,anisotropyMap:X,clearcoat:Pt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:J,dispersion:et,retroreflection:w,iridescence:m,iridescenceMap:$,iridescenceThicknessMap:ae,sheen:F,sheenColorMap:Ie,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Me,specularIntensityMap:Te,transmission:H,transmissionMap:Pe,thicknessMap:L,gradientMap:le,opaque:E.transparent===!1&&E.blending===Ki&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:fe,combine:E.combine,mapUv:Qe&&g(E.map.channel),aoMapUv:Ye&&g(E.aoMap.channel),lightMapUv:ot&&g(E.lightMap.channel),bumpMapUv:He&&g(E.bumpMap.channel),normalMapUv:ut&&g(E.normalMap.channel),displacementMapUv:Mt&&g(E.displacementMap.channel),emissiveMapUv:qt&&g(E.emissiveMap.channel),metalnessMapUv:dt&&g(E.metalnessMap.channel),roughnessMapUv:mt&&g(E.roughnessMap.channel),anisotropyMapUv:X&&g(E.anisotropyMap.channel),clearcoatMapUv:ie&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(E.sheenRoughnessMap.channel),specularMapUv:oe&&g(E.specularMap.channel),specularColorMapUv:Me&&g(E.specularColorMap.channel),specularIntensityMapUv:Te&&g(E.specularIntensityMap.channel),transmissionMapUv:Pe&&g(E.transmissionMap.channel),thicknessMapUv:L&&g(E.thicknessMap.channel),alphaMapUv:Z&&g(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ut||P),vertexNormals:!!k.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Qe||Z),fog:!!D,useFog:E.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||k.attributes.normal===void 0&&ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ge,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&ke.getTransfer(E.map.colorSpace)===je,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&ke.getTransfer(E.emissiveMap.colorSpace)===je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wt,flipSided:E.side===Ot,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ne&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&E.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)M.push(b),M.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(A(M,E),C(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function A(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numSunLights),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numSunLightShadows),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function C(E,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function I(E){const M=f[E.type];let b;if(M){const U=Vt[M];b=Qa.clone(U.uniforms)}else b=E.uniforms;return b}function v(E,M){let b=d.get(M);return b!==void 0?++b.usedTimes:(b=new w0(r,M,E,i),c.push(b),d.set(M,b)),b}function S(E){if(--E.usedTimes===0){const M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),d.delete(E.cacheKey),E.destroy()}}function y(E){o.remove(E)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:I,acquireProgram:v,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:T}}function L0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function P0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Xc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,A){let C=r[e];return C===void 0?(C={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:A},r[e]=C):(C.id=u.id,C.object=u,C.geometry=f,C.material=g,C.materialVariant=a(u),C.groupOrder=_,C.renderOrder=u.renderOrder,C.z=p,C.group=A),e++,C}function l(u,f,g,_,p,A,C){C.reversedDepth===!0&&(p=-p);const I=o(u,f,g,_,p,A);g.transmission>0?n.push(I):g.transparent===!0?i.push(I):t.push(I)}function c(u,f,g,_,p,A){const C=o(u,f,g,_,p,A);g.transmission>0?n.unshift(C):g.transparent===!0?i.unshift(C):t.unshift(C)}function d(u,f){t.length>1&&t.sort(u||P0),n.length>1&&n.sort(f||Xc),i.length>1&&i.sort(f||Xc)}function h(){for(let u=e,f=r.length;u<f;u++){const g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:d}}function U0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Yc,r.set(n,[a])):i>=s.length?(a=new Yc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function F0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function N0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Q0=0;function O0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function G0(r){const e=new F0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new nt,a=new nt;function o(c){let d=0,h=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,_=0,p=0,A=0,C=0,I=0,v=0,S=0,y=0,T=0,E=0,M=0,b=0;c.sort(O0);for(let N=0,G=c.length;N<G;N++){const D=c[N],k=D.color,V=D.intensity,W=D.distance;let te=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===jt?te=D.shadow.map.texture:te=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=k.r*V,h+=k.g*V,u+=k.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],V);b++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,K=t.get(D);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=te;const ue=j.getViewportCount();for(let ge=0;ge<ue;ge++)n.sunShadowMatrix[_+ge]=j.getMatrix(ge),n.sunShadowCascade[_+ge]=j._cascadeData[ge];_+=ue,g++}n.sun[f]=q,f++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,K=t.get(D);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=q,p++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar(V),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[C]=q;const j=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,j.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[C]=j.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[C]=K,n.spotShadowMap[C]=te,T++}C++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(k).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=q,I++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const j=D.shadow,K=t.get(D);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[A]=K,n.pointShadowMap[A]=te,n.pointShadowMatrix[A]=D.shadow.matrix,y++}n.point[A]=q,A++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[v]=q,v++}}I>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==A||U.spotLength!==C||U.rectAreaLength!==I||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==y||U.numSpotShadows!==T||U.numSpotMaps!==E||U.numLightProbes!==b)&&(n.sun.length=f,n.directional.length=p,n.spot.length=C,n.rectArea.length=I,n.point.length=A,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+E-M,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,U.sunLength=f,U.directionalLength=p,U.pointLength=A,U.spotLength=C,U.rectAreaLength=I,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=y,U.numSpotShadows=T,U.numSpotMaps=E,U.numLightProbes=b,n.version=Q0++)}function l(c,d){let h=0,u=0,f=0,g=0,_=0,p=0;const A=d.matrixWorldInverse;for(let C=0,I=c.length;C<I;C++){const v=c[C];if(v.isSunLight){const S=n.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(A),h++}else if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(A),u++}else if(v.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(A),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(A),g++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(A),a.identity(),s.copy(v.matrixWorld),s.premultiply(A),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(A),f++}else if(v.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(A),p++}}}return{setup:o,setupView:l,state:n}}function Jc(r){const e=new G0(r),t=[],n=[],i=[];function s(u){h.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function k0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Jc(r),e.set(i,[o])):s>=a.length?(o=new Jc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`,V0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],W0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Kc=new nt,yr=new B,Co=new B;function q0(r,e,t){let n=new Ua;const i=new pe,s=new pe,a=new rt,o=new Mu,l=new wu,c={},d=t.maxTextureSize,h={[si]:Ot,[Ot]:si,[Wt]:Wt},u=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:H0,fragmentShader:z0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let A=this.type;this.render=function(y,T,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===Ih&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);const M=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Tn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=A!==this.type;G&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=y.length;D<k;D++){const V=y[D],W=V.shadow;if(W===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const te=W.getFrameExtents();i.multiply(te),s.copy(W.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/te.x),i.x=s.x*te.x,W.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/te.y),i.y=s.y*te.y,W.mapSize.y=s.y));const q=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Yi){if(V.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new sn(i.x,i.y,{format:jt,type:Bt,minFilter:at,magFilter:at,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new cr(i.x,i.y,Qt),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Dn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vt,W.map.depthTexture.magFilter=vt}else V.isPointLight?(W.map=new Tl(i.x),W.map.depthTexture=new du(i.x,En)):(W.map=new sn(i.x,i.y),W.map.depthTexture=new cr(i.x,i.y,En)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Dn,this.type===Tr?(W.map.depthTexture.compareFunction=q?ba:Ta,W.map.depthTexture.minFilter=at,W.map.depthTexture.magFilter=at):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=vt,W.map.depthTexture.magFilter=vt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,E);for(let K=0;K<j;K++){const ue=W.getCamera(K);if(V.isPointLight){const ge=W.camera,Je=W.matrix,We=V.distance||ge.far;We!==ge.far&&(ge.far=We,ge.updateProjectionMatrix()),yr.setFromMatrixPosition(V.matrixWorld),ge.position.copy(yr),Co.copy(ge.position),Co.add(V0[K]),ge.up.copy(W0[K]),ge.lookAt(Co),ge.updateMatrixWorld(),Je.makeTranslation(-yr.x,-yr.y,-yr.z),Kc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Kc,ge.coordinateSystem,ge.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,K),r.clear();else{K===0&&(r.setRenderTarget(W.map),r.clear());const ge=W.getViewport(K);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(a)}n=W.getFrustum(K),v(T,E,ue,V,this.type)}W.isPointLightShadow!==!0&&this.type===Yi&&C(W,E),W.needsUpdate=!1}A=this.type,p.needsUpdate=!1,r.setRenderTarget(M,b,U)};function C(y,T){const E=e.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new sn(i.x,i.y,{format:jt,type:Bt}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(T,null,E,u,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(T,null,E,f,_,null)}function I(y,T,E,M){let b=null;const U=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0)b=U;else if(b=E.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=b.uuid,G=T.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let k=D[G];k===void 0&&(k=b.clone(),D[G]=k,T.addEventListener("dispose",S)),b=k}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Yi?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=r.properties.get(b);N.light=E}return b}function v(y,T,E,M,b){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Yi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const G=e.update(y),D=y.material;if(Array.isArray(D)){const k=G.groups;for(let V=0,W=k.length;V<W;V++){const te=k[V],q=D[te.materialIndex];if(q&&q.visible){const j=I(y,q,M,b);y.onBeforeShadow(r,y,T,E,G,j,te),r.renderBufferDirect(E,null,G,j,y,te),y.onAfterShadow(r,y,T,E,G,j,te)}}}else if(D.visible){const k=I(y,D,M,b);y.onBeforeShadow(r,y,T,E,G,k,null),r.renderBufferDirect(E,null,G,k,y,null),y.onAfterShadow(r,y,T,E,G,k,null)}}const N=y.children;for(let G=0,D=N.length;G<D;G++)v(N[G],T,E,M,b)}function S(y){y.target.removeEventListener("dispose",S);for(const E in c){const M=c[E],b=y.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function X0(r,e){function t(){let L=!1;const le=new rt;let Z=null;const ce=new rt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!L&&(r.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ne,we,Se,lt){lt===!0&&(fe*=Se,ne*=Se,we*=Se),le.set(fe,ne,we,Se),ce.equals(le)===!1&&(r.clearColor(fe,ne,we,Se),ce.copy(le))},reset:function(){L=!1,Z=null,ce.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,Z=null,ce=null,fe=null;return{setReversed:function(ne){if(le!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const Se=fe;fe=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(ne){ne?ee(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(ne){Z!==ne&&!L&&(r.depthMask(ne),Z=ne)},setFunc:function(ne){if(le&&(ne=Yd[ne]),ce!==ne){switch(ne){case Xs:r.depthFunc(r.NEVER);break;case Ys:r.depthFunc(r.ALWAYS);break;case Js:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case Ks:r.depthFunc(r.EQUAL);break;case Zs:r.depthFunc(r.GEQUAL);break;case $s:r.depthFunc(r.GREATER);break;case js:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=ne}},setLocked:function(ne){L=ne},setClear:function(ne){fe!==ne&&(fe=ne,le&&(ne=1-ne),r.clearDepth(ne))},reset:function(){L=!1,Z=null,ce=null,fe=null,le=!1}}}function i(){let L=!1,le=null,Z=null,ce=null,fe=null,ne=null,we=null,Se=null,lt=null;return{setTest:function(Ze){L||(Ze?ee(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(Ze){le!==Ze&&!L&&(r.stencilMask(Ze),le=Ze)},setFunc:function(Ze,ln,vn){(Z!==Ze||ce!==ln||fe!==vn)&&(r.stencilFunc(Ze,ln,vn),Z=Ze,ce=ln,fe=vn)},setOp:function(Ze,ln,vn){(ne!==Ze||we!==ln||Se!==vn)&&(r.stencilOp(Ze,ln,vn),ne=Ze,we=ln,Se=vn)},setLocked:function(Ze){L=Ze},setClear:function(Ze){lt!==Ze&&(r.clearStencil(Ze),lt=Ze)},reset:function(){L=!1,le=null,Z=null,ce=null,fe=null,ne=null,we=null,Se=null,lt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],_=null,p=!1,A=null,C=null,I=null,v=null,S=null,y=null,T=null,E=new Xe(0,0,0),M=0,b=!1,U=null,N=null,G=null,D=null,k=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=te>=2);let j=null,K={};const ue=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),Je=new rt().fromArray(ue),We=new rt().fromArray(ge);function Ke(L,le,Z,ce){const fe=new Uint8Array(4),ne=r.createTexture();r.bindTexture(L,ne),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Z;we++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(le+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ne}const Y={};Y[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(ji),He(!1),ut(Fo),ee(r.CULL_FACE),Ye(Tn);function ee(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function ve(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function De(L,le){return u[L]!==le?(r.bindFramebuffer(L,le),u[L]=le,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(L,le){let Z=g,ce=!1;if(L){Z=f.get(le),Z===void 0&&(Z=[],f.set(le,Z));const fe=L.textures;if(Z.length!==fe.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,we=fe.length;ne<we;ne++)Z[ne]=r.COLOR_ATTACHMENT0+ne;Z.length=fe.length,ce=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,ce=!0);ce&&r.drawBuffers(Z)}function Qe(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const Ct={[gi]:r.FUNC_ADD,[wh]:r.FUNC_SUBTRACT,[Bh]:r.FUNC_REVERSE_SUBTRACT};Ct[Th]=r.MIN,Ct[bh]=r.MAX;const Oe={[Rh]:r.ZERO,[Dh]:r.ONE,[Lh]:r.SRC_COLOR,[Ko]:r.SRC_ALPHA,[Oh]:r.SRC_ALPHA_SATURATE,[Nh]:r.DST_COLOR,[Uh]:r.DST_ALPHA,[Ph]:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,[Qh]:r.ONE_MINUS_DST_COLOR,[Fh]:r.ONE_MINUS_DST_ALPHA,[Gh]:r.CONSTANT_COLOR,[kh]:r.ONE_MINUS_CONSTANT_COLOR,[Hh]:r.CONSTANT_ALPHA,[zh]:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,le,Z,ce,fe,ne,we,Se,lt,Ze){if(L===Tn){p===!0&&(ve(r.BLEND),p=!1);return}if(p===!1&&(ee(r.BLEND),p=!0),L!==Mh){if(L!==A||Ze!==b){if((C!==gi||S!==gi)&&(r.blendEquation(r.FUNC_ADD),C=gi,S=gi),Ze)switch(L){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ur:r.blendFunc(r.ONE,r.ONE);break;case No:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qo:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case No:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}I=null,v=null,y=null,T=null,E.set(0,0,0),M=0,A=L,b=Ze}return}fe=fe||le,ne=ne||Z,we=we||ce,(le!==C||fe!==S)&&(r.blendEquationSeparate(Ct[le],Ct[fe]),C=le,S=fe),(Z!==I||ce!==v||ne!==y||we!==T)&&(r.blendFuncSeparate(Oe[Z],Oe[ce],Oe[ne],Oe[we]),I=Z,v=ce,y=ne,T=we),(Se.equals(E)===!1||lt!==M)&&(r.blendColor(Se.r,Se.g,Se.b,lt),E.copy(Se),M=lt),A=L,b=!1}function ot(L,le){L.side===Wt?ve(r.CULL_FACE):ee(r.CULL_FACE);let Z=L.side===Ot;le&&(Z=!Z),He(Z),L.blending===Ki&&L.transparent===!1?Ye(Tn):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){U!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),U=L)}function ut(L){L!==Sh?(ee(r.CULL_FACE),L!==N&&(L===Fo?r.cullFace(r.BACK):L===yh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),N=L}function Mt(L){L!==G&&(W&&r.lineWidth(L),G=L)}function qt(L,le,Z){L?(ee(r.POLYGON_OFFSET_FILL),(D!==le||k!==Z)&&(D=le,k=Z,a.getReversed()&&(le=-le),r.polygonOffset(le,Z))):ve(r.POLYGON_OFFSET_FILL)}function dt(L){L?ee(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function mt(L){L===void 0&&(L=r.TEXTURE0+V-1),j!==L&&(r.activeTexture(L),j=L)}function P(L,le,Z){Z===void 0&&(j===null?Z=r.TEXTURE0+V-1:Z=j);let ce=K[Z];ce===void 0&&(ce={type:void 0,texture:void 0},K[Z]=ce),(ce.type!==L||ce.texture!==le)&&(j!==Z&&(r.activeTexture(Z),j=Z),r.bindTexture(L,le||Y[L]),ce.type=L,ce.texture=le)}function Pt(){const L=K[j];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function et(){try{r.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function m(){try{r.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function F(){try{r.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function X(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ie(){try{r.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function se(){try{r.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function J(){try{r.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function $(){try{r.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ae(L){return h[L]!==void 0?h[L]:r.getParameter(L)}function Ie(L,le){h[L]!==le&&(r.pixelStorei(L,le),h[L]=le)}function he(L){Je.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function oe(L){We.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Me(L,le){let Z=c.get(le);Z===void 0&&(Z=new WeakMap,c.set(le,Z));let ce=Z.get(L);ce===void 0&&(ce=r.getUniformBlockIndex(le,L.name),Z.set(L,ce))}function Te(L,le){const ce=c.get(le).get(L);l.get(le)!==ce&&(r.uniformBlockBinding(le,ce,L.__bindingPointIndex),l.set(le,ce))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),d={},h={},j=null,K={},u={},f=new WeakMap,g=[],_=null,p=!1,A=null,C=null,I=null,v=null,S=null,y=null,T=null,E=new Xe(0,0,0),M=0,b=!1,U=null,N=null,G=null,D=null,k=null,Je.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:De,drawBuffers:Ee,useProgram:Qe,setBlending:Ye,setMaterial:ot,setFlipSided:He,setCullFace:ut,setLineWidth:Mt,setPolygonOffset:qt,setScissorTest:dt,activeTexture:mt,bindTexture:P,unbindTexture:Pt,compressedTexImage2D:et,compressedTexImage3D:w,texImage2D:J,texImage3D:$,pixelStorei:Ie,getParameter:ae,updateUBOMapping:Me,uniformBlockBinding:Te,texStorage2D:ie,texStorage3D:se,texSubImage2D:m,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:he,viewport:oe,reset:Pe}}function Y0(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,m){return g?new OffscreenCanvas(w,m):pa("canvas")}function p(w,m,F){let H=1;const X=et(w);if((X.width>F||X.height>F)&&(H=F/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(H*X.width),se=Math.floor(H*X.height);u===void 0&&(u=_(ie,se));const J=m?_(ie,se):u;return J.width=ie,J.height=se,J.getContext("2d").drawImage(w,0,0,ie,se),Be("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ie+"x"+se+")."),J}else return"data"in w&&Be("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),w;return w}function A(w){return w.generateMipmaps}function C(w){r.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(w,m,F,H,X,ie=!1){if(w!==null){if(r[w]!==void 0)return r[w];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se;H&&(se=e.get("EXT_texture_norm16"),se||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=m;if(m===r.RED&&(F===r.FLOAT&&(J=r.R32F),F===r.HALF_FLOAT&&(J=r.R16F),F===r.UNSIGNED_BYTE&&(J=r.R8),F===r.UNSIGNED_SHORT&&se&&(J=se.R16_EXT),F===r.SHORT&&se&&(J=se.R16_SNORM_EXT)),m===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.R8UI),F===r.UNSIGNED_SHORT&&(J=r.R16UI),F===r.UNSIGNED_INT&&(J=r.R32UI),F===r.BYTE&&(J=r.R8I),F===r.SHORT&&(J=r.R16I),F===r.INT&&(J=r.R32I)),m===r.RG&&(F===r.FLOAT&&(J=r.RG32F),F===r.HALF_FLOAT&&(J=r.RG16F),F===r.UNSIGNED_BYTE&&(J=r.RG8),F===r.UNSIGNED_SHORT&&se&&(J=se.RG16_EXT),F===r.SHORT&&se&&(J=se.RG16_SNORM_EXT)),m===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.RG8UI),F===r.UNSIGNED_SHORT&&(J=r.RG16UI),F===r.UNSIGNED_INT&&(J=r.RG32UI),F===r.BYTE&&(J=r.RG8I),F===r.SHORT&&(J=r.RG16I),F===r.INT&&(J=r.RG32I)),m===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.RGB8UI),F===r.UNSIGNED_SHORT&&(J=r.RGB16UI),F===r.UNSIGNED_INT&&(J=r.RGB32UI),F===r.BYTE&&(J=r.RGB8I),F===r.SHORT&&(J=r.RGB16I),F===r.INT&&(J=r.RGB32I)),m===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),F===r.UNSIGNED_INT&&(J=r.RGBA32UI),F===r.BYTE&&(J=r.RGBA8I),F===r.SHORT&&(J=r.RGBA16I),F===r.INT&&(J=r.RGBA32I)),m===r.RGB&&(F===r.UNSIGNED_SHORT&&se&&(J=se.RGB16_EXT),F===r.SHORT&&se&&(J=se.RGB16_SNORM_EXT),F===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),m===r.RGBA){const $=ie?Wr:ke.getTransfer(X);F===r.FLOAT&&(J=r.RGBA32F),F===r.HALF_FLOAT&&(J=r.RGBA16F),F===r.UNSIGNED_BYTE&&(J=$===je?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT&&se&&(J=se.RGBA16_EXT),F===r.SHORT&&se&&(J=se.RGBA16_SNORM_EXT),F===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(w,m){let F;return w?m===null||m===En||m===tr?F=r.DEPTH24_STENCIL8:m===Qt?F=r.DEPTH32F_STENCIL8:m===ai&&(F=r.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===En||m===tr?F=r.DEPTH_COMPONENT24:m===Qt?F=r.DEPTH_COMPONENT32F:m===ai&&(F=r.DEPTH_COMPONENT16),F}function y(w,m){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==vt&&w.minFilter!==at?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function T(w){const m=w.target;m.removeEventListener("dispose",T),M(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&h.delete(m)}function E(w){const m=w.target;m.removeEventListener("dispose",E),U(m)}function M(w){const m=n.get(w);if(m.__webglInit===void 0)return;const F=w.source,H=f.get(F);if(H){const X=H[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(w),Object.keys(H).length===0&&f.delete(F)}n.remove(w)}function b(w){const m=n.get(w);r.deleteTexture(m.__webglTexture);const F=w.source,H=f.get(F);delete H[m.__cacheKey],a.memory.textures--}function U(w){const m=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(m.__webglFramebuffer[H]))for(let X=0;X<m.__webglFramebuffer[H].length;X++)r.deleteFramebuffer(m.__webglFramebuffer[H][X]);else r.deleteFramebuffer(m.__webglFramebuffer[H]);m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer[H])}else{if(Array.isArray(m.__webglFramebuffer))for(let H=0;H<m.__webglFramebuffer.length;H++)r.deleteFramebuffer(m.__webglFramebuffer[H]);else r.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&r.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let H=0;H<m.__webglColorRenderbuffer.length;H++)m.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(m.__webglColorRenderbuffer[H]);m.__webglDepthRenderbuffer&&r.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const F=w.textures;for(let H=0,X=F.length;H<X;H++){const ie=n.get(F[H]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(w)}let N=0;function G(){N=0}function D(){return N}function k(w){N=w}function V(){const w=N;return w>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function W(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function te(w,m){const F=n.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const H=w.image;if(H===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(F,w,m);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+m)}function q(w,m){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ve(F,w,m);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+m)}function j(w,m){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){ve(F,w,m);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+m)}function K(w,m){const F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){De(F,w,m);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+m)}const ue={[er]:r.REPEAT,[$t]:r.CLAMP_TO_EDGE,[ea]:r.MIRRORED_REPEAT},ge={[vt]:r.NEAREST,[al]:r.NEAREST_MIPMAP_NEAREST,[Mr]:r.NEAREST_MIPMAP_LINEAR,[at]:r.LINEAR,[Hs]:r.LINEAR_MIPMAP_NEAREST,[Bn]:r.LINEAR_MIPMAP_LINEAR},Je={[Jh]:r.NEVER,[eu]:r.ALWAYS,[Kh]:r.LESS,[Ta]:r.LEQUAL,[Zh]:r.EQUAL,[ba]:r.GEQUAL,[$h]:r.GREATER,[jh]:r.NOTEQUAL};function We(w,m){if(m.type===Qt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===at||m.magFilter===Hs||m.magFilter===Mr||m.magFilter===Bn||m.minFilter===at||m.minFilter===Hs||m.minFilter===Mr||m.minFilter===Bn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,ue[m.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ue[m.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ue[m.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ge[m.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ge[m.minFilter]),m.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Je[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===vt||m.minFilter!==Mr&&m.minFilter!==Bn||m.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,i.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ke(w,m){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",T));const H=m.source;let X=f.get(H);X===void 0&&(X={},f.set(H,X));const ie=W(m);if(ie!==w.__cacheKey){X[ie]===void 0&&(X[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[ie].usedTimes++;const se=X[w.__cacheKey];se!==void 0&&(X[w.__cacheKey].usedTimes--,se.usedTimes===0&&b(m)),w.__cacheKey=ie,w.__webglTexture=X[ie].texture}return F}function Y(w,m,F){return Math.floor(Math.floor(w/F)/m)}function ee(w,m,F,H){const ie=w.updateRanges;if(ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,m.width,m.height,F,H,m.data);else{ie.sort((Ie,he)=>Ie.start-he.start);let se=0;for(let Ie=1;Ie<ie.length;Ie++){const he=ie[se],oe=ie[Ie],Me=he.start+he.count,Te=Y(oe.start,m.width,4),Pe=Y(he.start,m.width,4);oe.start<=Me+1&&Te===Pe&&Y(oe.start+oe.count-1,m.width,4)===Te?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++se,ie[se]=oe)}ie.length=se+1;const J=t.getParameter(r.UNPACK_ROW_LENGTH),$=t.getParameter(r.UNPACK_SKIP_PIXELS),ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,m.width);for(let Ie=0,he=ie.length;Ie<he;Ie++){const oe=ie[Ie],Me=Math.floor(oe.start/4),Te=Math.ceil(oe.count/4),Pe=Me%m.width,L=Math.floor(Me/m.width),le=Te,Z=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Pe,L,le,Z,F,H,m.data)}w.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,J),t.pixelStorei(r.UNPACK_SKIP_PIXELS,$),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function ve(w,m,F){let H=r.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),m.isData3DTexture&&(H=r.TEXTURE_3D);const X=Ke(w,m),ie=m.source;t.bindTexture(H,w.__webglTexture,r.TEXTURE0+F);const se=n.get(ie);if(ie.version!==se.__version||X===!0){if(t.activeTexture(r.TEXTURE0+F),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const Z=ke.getPrimaries(ke.workingColorSpace),ce=m.colorSpace===dn?null:ke.getPrimaries(m.colorSpace),fe=m.colorSpace===dn||Z===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment);let $=p(m.image,!1,i.maxTextureSize);$=Pt(m,$);const ae=s.convert(m.format,m.colorSpace),Ie=s.convert(m.type);let he=v(m.internalFormat,ae,Ie,m.normalized,m.colorSpace,m.isVideoTexture);We(H,m);let oe;const Me=m.mipmaps,Te=m.isVideoTexture!==!0,Pe=se.__version===void 0||X===!0,L=ie.dataReady,le=y(m,$);if(m.isDepthTexture)he=S(m.format===ei,m.type),Pe&&(Te?t.texStorage2D(r.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,he,$.width,$.height,0,ae,Ie,null));else if(m.isDataTexture)if(Me.length>0){Te&&Pe&&t.texStorage2D(r.TEXTURE_2D,le,he,Me[0].width,Me[0].height);for(let Z=0,ce=Me.length;Z<ce;Z++)oe=Me[Z],Te?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,ae,Ie,oe.data):t.texImage2D(r.TEXTURE_2D,Z,he,oe.width,oe.height,0,ae,Ie,oe.data);m.generateMipmaps=!1}else Te?(Pe&&t.texStorage2D(r.TEXTURE_2D,le,he,$.width,$.height),L&&ee(m,$,ae,Ie)):t.texImage2D(r.TEXTURE_2D,0,he,$.width,$.height,0,ae,Ie,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Te&&Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,he,Me[0].width,Me[0].height,$.depth);for(let Z=0,ce=Me.length;Z<ce;Z++)if(oe=Me[Z],m.format!==St)if(ae!==null)if(Te){if(L)if(m.layerUpdates.size>0){const fe=Tc(oe.width,oe.height,m.format,m.type);for(const ne of m.layerUpdates){const we=oe.data.subarray(ne*fe/oe.data.BYTES_PER_ELEMENT,(ne+1)*fe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,ne,oe.width,oe.height,1,ae,we)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,$.depth,ae,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,he,oe.width,oe.height,$.depth,0,oe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,oe.width,oe.height,$.depth,ae,Ie,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,he,oe.width,oe.height,$.depth,0,ae,Ie,oe.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Te&&Pe&&t.texStorage2D(r.TEXTURE_2D,le,he,Me[0].width,Me[0].height);for(let Z=0,ce=Me.length;Z<ce;Z++)oe=Me[Z],m.format!==St?ae!==null?Te?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,he,oe.width,oe.height,0,oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,oe.width,oe.height,ae,Ie,oe.data):t.texImage2D(r.TEXTURE_2D,Z,he,oe.width,oe.height,0,ae,Ie,oe.data)}else if(m.isDataArrayTexture)if(Te){if(Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,he,$.width,$.height,$.depth),L)if(m.layerUpdates.size>0){const Z=Tc($.width,$.height,m.format,m.type);for(const ce of m.layerUpdates){const fe=$.data.subarray(ce*Z/$.data.BYTES_PER_ELEMENT,(ce+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,$.width,$.height,1,ae,Ie,fe)}m.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ae,Ie,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,ae,Ie,$.data);else if(m.isData3DTexture)Te?(Pe&&t.texStorage3D(r.TEXTURE_3D,le,he,$.width,$.height,$.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ae,Ie,$.data)):t.texImage3D(r.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,ae,Ie,$.data);else if(m.isFramebufferTexture){if(Pe)if(Te)t.texStorage2D(r.TEXTURE_2D,le,he,$.width,$.height);else{let Z=$.width,ce=$.height;for(let fe=0;fe<le;fe++)t.texImage2D(r.TEXTURE_2D,fe,he,Z,ce,0,ae,Ie,null),Z>>=1,ce>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in r){const Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),h.add(m),Z.onpaint=ce=>{const fe=ce.changedElements;for(const ne of h)fe.includes(ne.image)&&(ne.needsUpdate=!0)},Z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,$);else{const fe=r.RGBA,ne=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,fe,ne,we,$)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Te&&Pe){const Z=et(Me[0]);t.texStorage2D(r.TEXTURE_2D,le,he,Z.width,Z.height)}for(let Z=0,ce=Me.length;Z<ce;Z++)oe=Me[Z],Te?L&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ae,Ie,oe):t.texImage2D(r.TEXTURE_2D,Z,he,ae,Ie,oe);m.generateMipmaps=!1}else if(Te){if(Pe){const Z=et($);t.texStorage2D(r.TEXTURE_2D,le,he,Z.width,Z.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ie,$)}else t.texImage2D(r.TEXTURE_2D,0,he,ae,Ie,$);A(m)&&C(H),se.__version=ie.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function De(w,m,F){if(m.image.length!==6)return;const H=Ke(w,m),X=m.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+F);const ie=n.get(X);if(X.version!==ie.__version||H===!0){t.activeTexture(r.TEXTURE0+F);const se=ke.getPrimaries(ke.workingColorSpace),J=m.colorSpace===dn?null:ke.getPrimaries(m.colorSpace),$=m.colorSpace===dn||se===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ae=m.isCompressedTexture||m.image[0].isCompressedTexture,Ie=m.image[0]&&m.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!ae&&!Ie?he[ne]=p(m.image[ne],!0,i.maxCubemapSize):he[ne]=Ie?m.image[ne].image:m.image[ne],he[ne]=Pt(m,he[ne]);const oe=he[0],Me=s.convert(m.format,m.colorSpace),Te=s.convert(m.type),Pe=v(m.internalFormat,Me,Te,m.normalized,m.colorSpace),L=m.isVideoTexture!==!0,le=ie.__version===void 0||H===!0,Z=X.dataReady;let ce=y(m,oe);We(r.TEXTURE_CUBE_MAP,m);let fe;if(ae){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Pe,oe.width,oe.height);for(let ne=0;ne<6;ne++){fe=he[ne].mipmaps;for(let we=0;we<fe.length;we++){const Se=fe[we];m.format!==St?Me!==null?L?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Pe,Se.width,Se.height,0,Se.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Se.width,Se.height,Me,Te,Se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Pe,Se.width,Se.height,0,Me,Te,Se.data)}}}else{if(fe=m.mipmaps,L&&le){fe.length>0&&ce++;const ne=et(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Pe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ie){L?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Me,Te,he[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Pe,he[ne].width,he[ne].height,0,Me,Te,he[ne].data);for(let we=0;we<fe.length;we++){const lt=fe[we].image[ne].image;L?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,lt.width,lt.height,Me,Te,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Pe,lt.width,lt.height,0,Me,Te,lt.data)}}else{L?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me,Te,he[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Pe,Me,Te,he[ne]);for(let we=0;we<fe.length;we++){const Se=fe[we];L?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Me,Te,Se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Pe,Me,Te,Se.image[ne])}}}A(m)&&C(r.TEXTURE_CUBE_MAP),ie.__version=X.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function Ee(w,m,F,H,X,ie){const se=s.convert(F.format,F.colorSpace),J=s.convert(F.type),$=v(F.internalFormat,se,J,F.normalized,F.colorSpace),ae=n.get(m),Ie=n.get(F);if(Ie.__renderTarget=m,!ae.__hasExternalTextures){const he=Math.max(1,m.width>>ie),oe=Math.max(1,m.height>>ie);X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?t.texImage3D(X,ie,$,he,oe,m.depth,0,se,J,null):t.texImage2D(X,ie,$,he,oe,0,se,J,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),mt(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,X,Ie.__webglTexture,0,dt(m)):(X===r.TEXTURE_2D||X>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,X,Ie.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(w,m,F){if(r.bindRenderbuffer(r.RENDERBUFFER,w),m.depthBuffer){const H=m.depthTexture,X=H&&H.isDepthTexture?H.type:null,ie=S(m.stencilBuffer,X),se=m.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt(m),ie,m.width,m.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt(m),ie,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,ie,m.width,m.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,w)}else{const H=m.textures;for(let X=0;X<H.length;X++){const ie=H[X],se=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),$=v(ie.internalFormat,se,J,ie.normalized,ie.colorSpace);mt(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt(m),$,m.width,m.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt(m),$,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,$,m.width,m.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(w,m,F){const H=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(m.depthTexture);if(X.__renderTarget=m,(!X.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,m.depthTexture.addEventListener("dispose",T)),X.__webglTexture===void 0){X.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),We(r.TEXTURE_CUBE_MAP,m.depthTexture);const ae=s.convert(m.depthTexture.format),Ie=s.convert(m.depthTexture.type);let he;m.depthTexture.format===Dn?he=r.DEPTH_COMPONENT24:m.depthTexture.format===ei&&(he=r.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,m.width,m.height,0,ae,Ie,null)}}else te(m.depthTexture,0);const ie=X.__webglTexture,se=dt(m),J=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,$=m.depthTexture.format===ei?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(m.depthTexture.format===Dn)mt(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,J,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,$,J,ie,0);else if(m.depthTexture.format===ei)mt(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,J,ie,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,$,J,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(w){const m=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),H){const X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=H}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)Ct(m.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?Ct(m.__webglFramebuffer[0],w,0):Ct(m.__webglFramebuffer,w,0)}else if(F){m.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[H]),m.__webglDepthbuffer[H]===void 0)m.__webglDepthbuffer[H]=r.createRenderbuffer(),Qe(m.__webglDepthbuffer[H],w,!1);else{const X=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,X,r.RENDERBUFFER,ie)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=r.createRenderbuffer(),Qe(m.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,X,r.RENDERBUFFER,ie)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(w,m,F){const H=n.get(w);m!==void 0&&Ee(H.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Oe(w)}function ot(w){const m=w.texture,F=n.get(w),H=n.get(m);w.addEventListener("dispose",E);const X=w.textures,ie=w.isWebGLCubeRenderTarget===!0,se=X.length>1;if(se||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=m.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let $=0;$<m.mipmaps.length;$++)F.__webglFramebuffer[J][$]=r.createFramebuffer()}else F.__webglFramebuffer[J]=r.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)F.__webglFramebuffer[J]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(se)for(let J=0,$=X.length;J<$;J++){const ae=n.get(X[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&mt(w)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<X.length;J++){const $=X[J];F.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const ae=s.convert($.format,$.colorSpace),Ie=s.convert($.type),he=v($.internalFormat,ae,Ie,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),oe=dt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,he,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,F.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),We(r.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)Ee(F.__webglFramebuffer[J][$],w,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else Ee(F.__webglFramebuffer[J],w,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);A(m)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let J=0,$=X.length;J<$;J++){const ae=X[J],Ie=n.get(ae);let he=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,Ie.__webglTexture),We(he,ae),Ee(F.__webglFramebuffer,w,ae,r.COLOR_ATTACHMENT0+J,he,0),A(ae)&&C(he)}t.unbindTexture()}else{let J=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(J,H.__webglTexture),We(J,m),m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)Ee(F.__webglFramebuffer[$],w,m,r.COLOR_ATTACHMENT0,J,$);else Ee(F.__webglFramebuffer,w,m,r.COLOR_ATTACHMENT0,J,0);A(m)&&C(J),t.unbindTexture()}w.depthBuffer&&Oe(w)}function He(w){const m=w.textures;for(let F=0,H=m.length;F<H;F++){const X=m[F];if(A(X)){const ie=I(w),se=n.get(X).__webglTexture;t.bindTexture(ie,se),C(ie),t.unbindTexture()}}}const ut=[],Mt=[];function qt(w){if(w.samples>0){if(mt(w)===!1){const m=w.textures,F=w.width,H=w.height;let X=r.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(w),J=m.length>1;if(J)for(let ae=0;ae<m.length;ae++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const $=w.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<m.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(X|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(X|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ie=n.get(m[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ie,0)}r.blitFramebuffer(0,0,F,H,0,0,F,H,X,r.NEAREST),l===!0&&(ut.length=0,Mt.length=0,ut.push(r.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ut.push(ie),Mt.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<m.length;ae++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ie=n.get(m[ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const m=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[m])}}}function dt(w){return Math.min(i.maxSamples,w.samples)}function mt(w){const m=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function P(w){const m=a.render.frame;d.get(w)!==m&&(d.set(w,m),w.update())}function Pt(w,m){const F=w.colorSpace,H=w.format,X=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==lr&&F!==dn&&(ke.getTransfer(F)===je?(H!==St||X!==be)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",F)),m}function et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ye,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ku(r,e){function t(n,i=dn){let s;const a=ke.getTransfer(i);if(n===be)return r.UNSIGNED_BYTE;if(n===ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return r.UNSIGNED_SHORT_5_5_5_1;if(n===es)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ts)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ol)return r.BYTE;if(n===ll)return r.SHORT;if(n===ai)return r.UNSIGNED_SHORT;if(n===Sa)return r.INT;if(n===En)return r.UNSIGNED_INT;if(n===Qt)return r.FLOAT;if(n===Bt)return r.HALF_FLOAT;if(n===cl)return r.ALPHA;if(n===nr)return r.RGB;if(n===St)return r.RGBA;if(n===Dn)return r.DEPTH_COMPONENT;if(n===ei)return r.DEPTH_STENCIL;if(n===ti)return r.RED;if(n===Ma)return r.RED_INTEGER;if(n===jt)return r.RG;if(n===wa)return r.RG_INTEGER;if(n===Ba)return r.RGBA_INTEGER;if(n===Ei||n===ni||n===br||n===ii)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ei)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ni)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ii)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ei)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ni)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ii)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===ta||n===Si||n===ir)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Si)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ir)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===rr||n===sr||n===Qr||n===Or||n===ar||n===Gr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nr||n===rr)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sr)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qr)return s.COMPRESSED_R11_EAC;if(n===Or)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return s.COMPRESSED_RG11_EAC;if(n===Gr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ri||n===na||n===ia||n===ra||n===_i||n===sa||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===Aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ri)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_i)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yi||n===fa||n===kr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yi)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hr||n===zr||n===or||n===Vr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`;class Z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:J0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends oi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Z0,A={},C=t.getContextAttributes();let I=null,v=null;const S=[],y=[],T=new pe;let E=null,M=null;const b=new Kt;b.viewport=new rt;const U=new Kt;U.viewport=new rt;const N=[b,U],G=new Lu;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Vs,S[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Vs,S[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=S[Y];return ee===void 0&&(ee=new Vs,S[Y]=ee),ee.getHandSpace()};function V(Y){const ee=y.indexOf(Y.inputSource);if(ee===-1)return;const ve=S[ee];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",te);for(let Y=0;Y<S.length;Y++){const ee=y[Y];ee!==null&&(y[Y]=null,S[Y].disconnect(ee))}D=null,k=null,p.reset();for(const Y in A)delete A[Y];if(e.setRenderTarget(I),f=null,u=null,h=null,i=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),M!==null){const Y=M.camera;Y.fov=M.fov,Y.zoom=M.zoom,Y.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(I=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",W),i.addEventListener("inputsourceschange",te),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,De=null,Ee=null;C.depth&&(Ee=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=C.stencil?ei:Dn,De=C.stencil?tr:En);const Qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Qe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new sn(u.textureWidth,u.textureHeight,{format:St,type:be,depthTexture:new cr(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new sn(f.framebufferWidth,f.framebufferHeight,{format:St,type:be,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Y){for(let ee=0;ee<Y.removed.length;ee++){const ve=Y.removed[ee],De=y.indexOf(ve);De>=0&&(y[De]=null,S[De].disconnect(ve))}for(let ee=0;ee<Y.added.length;ee++){const ve=Y.added[ee];let De=y.indexOf(ve);if(De===-1){for(let Qe=0;Qe<S.length;Qe++)if(Qe>=y.length){y.push(ve),De=Qe;break}else if(y[Qe]===null){y[Qe]=ve,De=Qe;break}if(De===-1)break}const Ee=S[De];Ee&&Ee.connect(ve)}}const q=new B,j=new B;function K(Y,ee,ve){q.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const De=q.distanceTo(j),Ee=ee.projectionMatrix.elements,Qe=ve.projectionMatrix.elements,Ct=Ee[14]/(Ee[10]-1),Oe=Ee[14]/(Ee[10]+1),Ye=(Ee[9]+1)/Ee[5],ot=(Ee[9]-1)/Ee[5],He=(Ee[8]-1)/Ee[0],ut=(Qe[8]+1)/Qe[0],Mt=Ct*He,qt=Ct*ut,dt=De/(-He+ut),mt=dt*-He;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const P=Ct+dt,Pt=Oe+dt,et=Mt-mt,w=qt+(De-mt),m=Ye*Oe/Pt*P,F=ot*Oe/Pt*P;Y.projectionMatrix.makePerspective(et,w,m,F,P,Pt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ee=Y.near,ve=Y.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),G.near=U.near=b.near=ee,G.far=U.far=b.far=ve,(D!==G.near||k!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,k=G.far),G.layers.mask=Y.layers.mask|6,b.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;const De=Y.parent,Ee=G.cameras;ue(G,De);for(let Qe=0;Qe<Ee.length;Qe++)ue(Ee[Qe],De);Ee.length===2?K(G,b,U):G.projectionMatrix.copy(b.projectionMatrix),M===null&&Y.isPerspectiveCamera&&(M={camera:Y,fov:Y.fov,zoom:Y.zoom}),ge(Y,G,De)};function ge(Y,ee,ve){ve===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Y){return A[Y]};let Je=null;function We(Y,ee){if(d=ee.getViewerPose(c||a),g=ee,d!==null){const ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let De=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let Oe=0;Oe<ve.length;Oe++){const Ye=ve[Oe];let ot=null;if(f!==null)ot=f.getViewport(Ye);else{const ut=h.getViewSubImage(u,Ye);ot=ut.viewport,Oe===0&&(e.setRenderTargetTextures(v,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(v))}let He=N[Oe];He===void 0&&(He=new Kt,He.layers.enable(Oe),He.viewport=new rt,N[Oe]=He),He.matrix.fromArray(Ye.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ye.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ot.x,ot.y,ot.width,ot.height),Oe===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(He)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Oe=h.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&p.init(Oe,i.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){const Ye=ve[Oe].camera;if(Ye){let ot=A[Ye];ot||(ot=new _l,A[Ye]=ot);const He=h.getCameraImage(Ye);ot.sourceTexture=He}}}}for(let ve=0;ve<S.length;ve++){const De=y[ve],Ee=S[ve];De!==null&&Ee!==void 0&&Ee.update(De,ee,c||a)}Je&&Je(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ke=new Uu;Ke.setAnimationLoop(We),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}}const j0=new nt,Hu=new Re;Hu.set(-1,0,0,0,1,0,0,0,1);function eE(r,e){function t(p,A){p.matrixAutoUpdate===!0&&p.updateMatrix(),A.value.copy(p.matrix)}function n(p,A){A.color.getRGB(p.fogColor.value,yu(r)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function i(p,A,C,I,v){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?s(p,A):A.isMeshLambertMaterial?(s(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(s(p,A),h(p,A)):A.isMeshPhongMaterial?(s(p,A),d(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(s(p,A),u(p,A),A.isMeshPhysicalMaterial&&f(p,A,v)):A.isMeshMatcapMaterial?(s(p,A),g(p,A)):A.isMeshDepthMaterial?s(p,A):A.isMeshDistanceMaterial?(s(p,A),_(p,A)):A.isMeshNormalMaterial?s(p,A):A.isLineBasicMaterial?(a(p,A),A.isLineDashedMaterial&&o(p,A)):A.isPointsMaterial?l(p,A,C,I):A.isSpriteMaterial?c(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function s(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.bumpMap&&(p.bumpMap.value=A.bumpMap,t(A.bumpMap,p.bumpMapTransform),p.bumpScale.value=A.bumpScale,A.side===Ot&&(p.bumpScale.value*=-1)),A.normalMap&&(p.normalMap.value=A.normalMap,t(A.normalMap,p.normalMapTransform),p.normalScale.value.copy(A.normalScale),A.side===Ot&&p.normalScale.value.negate()),A.displacementMap&&(p.displacementMap.value=A.displacementMap,t(A.displacementMap,p.displacementMapTransform),p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,p.emissiveMapTransform)),A.specularMap&&(p.specularMap.value=A.specularMap,t(A.specularMap,p.specularMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const C=e.get(A),I=C.envMap,v=C.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(v)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hu),p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap&&(p.lightMap.value=A.lightMap,p.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,p.lightMapTransform)),A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,p.aoMapTransform))}function a(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform))}function o(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function l(p,A,C,I){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*C,p.scale.value=I*.5,A.map&&(p.map.value=A.map,t(A.map,p.uvTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function c(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function d(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function h(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function u(p,A){p.metalness.value=A.metalness,A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,p.metalnessMapTransform)),p.roughness.value=A.roughness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,p.roughnessMapTransform)),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function f(p,A,C){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,p.sheenColorMapTransform)),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,p.sheenRoughnessMapTransform))),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,p.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(p.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Ot&&p.clearcoatNormalScale.value.negate())),A.dispersion>0&&(p.dispersion.value=A.dispersion),A.retroreflectivity>0&&(p.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,p.iridescenceMapTransform)),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,p.transmissionMapTransform)),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(p.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(p.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,p.specularColorMapTransform)),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,A){A.matcap&&(p.matcap.value=A.matcap)}function _(p,A){const C=e.get(A).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tE(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function c(v,S){let y=i[v.id];y===void 0&&(p(v),y=d(v),i[v.id]=y,v.addEventListener("dispose",C));const T=S.program;n.updateUBOMapping(v,T);const E=e.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function d(v){const S=h();v.__bindingPointIndex=S;const y=r.createBuffer(),T=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,M=y.length;E<M;E++){const b=y[E];if(Array.isArray(b))for(let U=0,N=b.length;U<N;U++)f(b[U],E,U,T);else f(b,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,y,T){if(_(v,S,y,T)===!0){const E=v.__offset,M=v.value;if(Array.isArray(M)){let b=0;for(let U=0;U<M.length;U++){const N=M[U],G=A(N);g(N,v.__data,b),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(b+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function g(v,S,y){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,y)}function _(v,S,y,T){const E=v.value,M=S+"_"+y;if(T[M]===void 0)return typeof E=="number"||typeof E=="boolean"?T[M]=E:ArrayBuffer.isView(E)?T[M]=E.slice():T[M]=E.clone(),!0;{const b=T[M];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return T[M]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(b.equals(E)===!1)return b.copy(E),!0}}return!1}function p(v){const S=v.uniforms;let y=0;const T=16;for(let M=0,b=S.length;M<b;M++){const U=Array.isArray(S[M])?S[M]:[S[M]];for(let N=0,G=U.length;N<G;N++){const D=U[N],k=Array.isArray(D.value)?D.value:[D.value];for(let V=0,W=k.length;V<W;V++){const te=k[V],q=A(te),j=y%T,K=j%q.boundary,ue=j+K;y+=K,ue!==0&&T-ue<q.storage&&(y+=T-ue),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=q.storage}}}const E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function A(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",v),S}function C(v){const S=v.target;S.removeEventListener("dispose",C);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function I(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:I}}const nE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function iE(){return Sn===null&&(Sn=new Pa(nE,16,16,jt,Bt),Sn.name="DFG_LUT",Sn.minFilter=at,Sn.magFilter=at,Sn.wrapS=$t,Sn.wrapT=$t,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class zu{constructor(e={}){const{canvas:t=tu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=be}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([Ba,wa,Ma]),A=new Set([be,En,ai,tr,ya,Ia]),C=new Uint32Array(4),I=new Int32Array(4),v=new B;let S=null,y=null;const T=[],E=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1,N=null,G=null,D=null,k=null;this._outputColorSpace=ft;let V=0,W=0,te=null,q=-1,j=null;const K=new rt,ue=new rt;let ge=null;const Je=new Xe(0);let We=0,Ke=t.width,Y=t.height,ee=1,ve=null,De=null;const Ee=new rt(0,0,Ke,Y),Qe=new rt(0,0,Ke,Y);let Ct=!1;const Oe=new Ua;let Ye=!1,ot=!1;const He=new nt,ut=new B,Mt=new rt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function mt(){return te===null?ee:1}let P=n;function Pt(x,R){return t.getContext(x,R)}let et,w,m,F,H,X,ie,se,J,$,ae,Ie,he,oe,Me,Te,Pe,L,le,Z,ce,fe,ne;try{const x={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",ln,!1),P===null){const R="webgl2";if(P=Pt(R,x),P===null)throw Pt(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(x){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),Ve("WebGLRenderer: "+x.message),x}function we(){et=new rm(P),et.init(),ce=new ku(P,et),w=new Yg(P,et,e,ce),m=new X0(P,et),w.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),G=P.createFramebuffer(),D=P.createFramebuffer(),k=P.createFramebuffer(),F=new om(P),H=new L0,X=new Y0(P,et,m,H,w,ce,F),ie=new im(b),se=new cf(P),fe=new qg(P,se),J=new sm(P,se,F,fe),$=new cm(P,J,se,fe,F),L=new lm(P,w,X),Me=new Jg(H),ae=new D0(b,ie,et,w,fe,Me),Ie=new eE(b,H),he=new U0,oe=new k0(et),Pe=new Wg(b,ie,m,$,g,l),Te=new q0(b,$,w),ne=new tE(P,F,w,m),le=new Xg(P,et,F),Z=new am(P,et,F),F.programs=ae.programs,b.capabilities=w,b.extensions=et,b.properties=H,b.renderLists=he,b.shadowMap=Te,b.state=m,b.info=F}_!==be&&(M=new um(_,t.width,t.height,o,i,s));const Se=new $0(b,P);this.xr=Se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(Ke,Y,!1))},this.getSize=function(x){return x.set(Ke,Y)},this.setSize=function(x,R,z=!0){if(Se.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=x,Y=R,t.width=Math.floor(x*ee),t.height=Math.floor(R*ee),z===!0&&(t.style.width=x+"px",t.style.height=R+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(Ke*ee,Y*ee).floor()},this.setDrawingBufferSize=function(x,R,z){Ke=x,Y=R,ee=z,t.width=Math.floor(x*z),t.height=Math.floor(R*z),this.setViewport(0,0,x,R)},this.setEffects=function(x){if(_===be){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let R=0;R<x.length;R++)if(x[R].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(K)},this.getViewport=function(x){return x.copy(Ee)},this.setViewport=function(x,R,z,Q){x.isVector4?Ee.set(x.x,x.y,x.z,x.w):Ee.set(x,R,z,Q),m.viewport(K.copy(Ee).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(Qe)},this.setScissor=function(x,R,z,Q){x.isVector4?Qe.set(x.x,x.y,x.z,x.w):Qe.set(x,R,z,Q),m.scissor(ue.copy(Qe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(x){m.setScissorTest(Ct=x)},this.setOpaqueSort=function(x){ve=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(x=!0,R=!0,z=!0){let Q=0;if(x){let O=!1;if(te!==null){const Ae=te.texture.format;O=p.has(Ae)}if(O){const Ae=te.texture.type,_e=A.has(Ae),de=Pe.getClearColor(),xe=Pe.getClearAlpha(),ye=de.r,Fe=de.g,Ge=de.b;_e?(C[0]=ye,C[1]=Fe,C[2]=Ge,C[3]=xe,P.clearBufferuiv(P.COLOR,0,C)):(I[0]=ye,I[1]=Fe,I[2]=Ge,I[3]=xe,P.clearBufferiv(P.COLOR,0,I))}else Q|=P.COLOR_BUFFER_BIT}R&&(Q|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),Pe.dispose(),he.dispose(),oe.dispose(),H.dispose(),ie.dispose(),$.dispose(),fe.dispose(),ne.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ol),Se.removeEventListener("sessionend",Gl),ci.stop()};function lt(x){x.preventDefault(),Xr("WebGLRenderer: Context Lost."),U=!0}function Ze(){Xr("WebGLRenderer: Context Restored."),U=!1;const x=F.autoReset,R=Te.enabled,z=Te.autoUpdate,Q=Te.needsUpdate,O=Te.type;we(),F.autoReset=x,Te.enabled=R,Te.autoUpdate=z,Te.needsUpdate=Q,Te.type=O}function ln(x){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function vn(x){const R=x.target;R.removeEventListener("dispose",vn),Qd(R)}function Qd(x){Od(x),H.remove(x)}function Od(x){const R=H.get(x).programs;R!==void 0&&(R.forEach(function(z){ae.releaseProgram(z)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,z,Q,O,Ae){R===null&&(R=qt);const _e=O.isMesh&&O.matrixWorld.determinantAffine()<0,de=Hd(x,R,z,Q,O);m.setMaterial(Q,_e);let xe=z.index,ye=1;if(Q.wireframe===!0){if(xe=J.getWireframeAttribute(z),xe===void 0)return;ye=2}const Fe=z.drawRange,Ge=z.attributes.position;let Ce=Fe.start*ye,$e=(Fe.start+Fe.count)*ye;Ae!==null&&(Ce=Math.max(Ce,Ae.start*ye),$e=Math.min($e,(Ae.start+Ae.count)*ye)),xe!==null?(Ce=Math.max(Ce,0),$e=Math.min($e,xe.count)):Ge!=null&&(Ce=Math.max(Ce,0),$e=Math.min($e,Ge.count));const Et=$e-Ce;if(Et<0||Et===1/0)return;fe.setup(O,Q,de,z,xe);let ht,st=le;if(xe!==null&&(ht=se.get(xe),st=Z,st.setIndex(ht)),O.isMesh)Q.wireframe===!0?(m.setLineWidth(Q.wireframeLinewidth*mt()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(O.isLine){let Ut=Q.linewidth;Ut===void 0&&(Ut=1),m.setLineWidth(Ut*mt()),O.isLineSegments?st.setMode(P.LINES):O.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else O.isPoints?st.setMode(P.POINTS):O.isSprite&&st.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(et.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ut=O._multiDrawStarts,me=O._multiDrawCounts,Gt=O._multiDrawCount,qe=xe?se.get(xe).bytesPerElement:1,tn=H.get(Q).currentProgram.getUniforms();for(let xn=0;xn<Gt;xn++)tn.setValue(P,"_gl_DrawID",xn),st.render(Ut[xn]/qe,me[xn])}else if(O.isInstancedMesh)st.renderInstances(Ce,Et,O.count);else if(z.isInstancedBufferGeometry){const Ut=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,me=Math.min(z.instanceCount,Ut);st.renderInstances(Ce,Et,me)}else st.render(Ce,Et)};function Ql(x,R,z,Q){N!==null&&x.isNodeMaterial&&N.setObject(Q,x),Ye===!0&&Me.setState(x,z,!1),x.transparent===!0&&x.side===Wt&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,as(x,R,Q),x.side=si,x.needsUpdate=!0,as(x,R,Q),x.side=Wt):as(x,R,Q)}this.compile=function(x,R,z=null){z===null&&(z=x),N!==null&&N.renderStart(x,R,z),y=oe.get(z),y.init(R),E.push(y),z.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),x!==z&&x.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights(),N!==null&&N.updateLights(y.state.lightsArray),ot=this.localClippingEnabled,Ye=Me.init(this.clippingPlanes,ot),Ye===!0&&Me.setGlobalState(this.clippingPlanes,R),N!==null&&Te.render(y.state.shadowsArray,z,R);const Q=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Ae=O.material;if(Ae)if(Array.isArray(Ae))for(let _e=0;_e<Ae.length;_e++){const de=Ae[_e];Ql(de,z,R,O),Q.add(de)}else Ql(Ae,z,R,O),Q.add(Ae)}),y=E.pop(),N!==null&&N.renderEnd(),Q},this.compileAsync=function(x,R,z=null){const Q=this.compile(x,R,z);return new Promise(O=>{function Ae(){if(Q.forEach(function(_e){const xe=H.get(_e).currentProgram;(xe===void 0||xe.isReady())&&Q.delete(_e)}),Q.size===0){O(x);return}setTimeout(Ae,10)}et.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ha=null;function Gd(x){Ha&&Ha(x)}function Ol(){ci.stop()}function Gl(){ci.start()}const ci=new Uu;ci.setAnimationLoop(Gd),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(x){Ha=x,Se.setAnimationLoop(x),x===null?ci.stop():ci.start()},Se.addEventListener("sessionstart",Ol),Se.addEventListener("sessionend",Gl),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;N!==null&&N.renderStart(x,R);const z=Se.enabled===!0&&Se.isPresenting===!0,Q=M!==null&&(te===null||z)&&M.begin(b,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(R),R=Se.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,R,te),y=oe.get(x,E.length),y.init(R),y.state.textureUnits=X.getTextureUnits(),E.push(y),He.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Oe.setFromProjectionMatrix(He,fn,R.reversedDepth),ot=this.localClippingEnabled,Ye=Me.init(this.clippingPlanes,ot),S=he.get(x,T.length),S.init(),T.push(S),Se.enabled===!0&&Se.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&za(_e,R,-1/0,b.sortObjects)}za(x,R,0,b.sortObjects),S.finish(),N!==null&&N.updateLights(y.state.lightsArray),b.sortObjects===!0&&S.sort(ve,De),dt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,dt&&Pe.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Me.beginShadows();const O=y.state.shadowsArray;if(Te.render(O,x,R),Ye===!0&&Me.endShadows(),(Q&&M.hasRenderPass())===!1){const _e=S.opaque,de=S.transmissive;if(y.setupLights(),R.isArrayCamera){const xe=R.cameras;if(de.length>0)for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye];Hl(_e,de,x,Ge)}dt&&Pe.render(x);for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye];kl(S,x,Ge,Ge.viewport)}}else de.length>0&&Hl(_e,de,x,R),dt&&Pe.render(x),kl(S,x,R)}te!==null&&W===0&&(X.updateMultisampleRenderTarget(te),X.updateRenderTargetMipmap(te)),Q&&M.end(b),x.isScene===!0&&x.onAfterRender(b,x,R),fe.resetDefaultState(),q=-1,j=null,E.pop(),E.length>0?(y=E[E.length-1],X.setTextureUnits(y.state.textureUnits),Ye===!0&&Me.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,N!==null&&N.renderEnd()};function za(x,R,z,Q){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Oe)){Q&&Mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(He);const _e=$.update(x),de=x.material;de.visible&&S.push(x,_e,de,z,Mt.z,null,R)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Oe))){const _e=$.update(x),de=x.material;if(Q&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Mt.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Mt.copy(_e.boundingSphere.center)),Mt.applyMatrix4(x.matrixWorld).applyMatrix4(He)),Array.isArray(de)){const xe=_e.groups;for(let ye=0,Fe=xe.length;ye<Fe;ye++){const Ge=xe[ye],Ce=de[Ge.materialIndex];Ce&&Ce.visible&&S.push(x,_e,Ce,z,Mt.z,Ge,R)}}else de.visible&&S.push(x,_e,de,z,Mt.z,null,R)}}const Ae=x.children;for(let _e=0,de=Ae.length;_e<de;_e++)za(Ae[_e],R,z,Q)}function kl(x,R,z,Q){const{opaque:O,transmissive:Ae,transparent:_e}=x;y.setupLightsView(z),Ye===!0&&Me.setGlobalState(b.clippingPlanes,z),Q&&m.viewport(K.copy(Q)),O.length>0&&ss(O,R,z),Ae.length>0&&ss(Ae,R,z),_e.length>0&&ss(_e,R,z),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Hl(x,R,z,Q){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[Q.id]===void 0){const Ce=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[Q.id]=new sn(1,1,{generateMipmaps:!0,type:Ce?Bt:be,minFilter:Bn,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Ae=y.state.transmissionRenderTarget[Q.id],_e=Q.viewport||K;Ae.setSize(_e.z*b.transmissionResolutionScale,_e.w*b.transmissionResolutionScale);const de=b.getRenderTarget(),xe=b.getActiveCubeFace(),ye=b.getActiveMipmapLevel();b.setRenderTarget(Ae),b.getClearColor(Je),We=b.getClearAlpha(),We<1&&b.setClearColor(16777215,.5),b.clear(),dt&&Pe.render(z);const Fe=b.toneMapping;b.toneMapping=gn;const Ge=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),y.setupLightsView(Q),Ye===!0&&Me.setGlobalState(b.clippingPlanes,Q),ss(x,z,Q),X.updateMultisampleRenderTarget(Ae),X.updateRenderTargetMipmap(Ae),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let $e=0,Et=R.length;$e<Et;$e++){const ht=R[$e],{object:st,geometry:Ut,material:me,group:Gt}=ht;if(me.side===Wt&&st.layers.test(Q.layers)){const qe=me.side;me.side=Ot,me.needsUpdate=!0,zl(st,z,Q,Ut,me,Gt),me.side=qe,me.needsUpdate=!0,Ce=!0}}Ce===!0&&(X.updateMultisampleRenderTarget(Ae),X.updateRenderTargetMipmap(Ae))}b.setRenderTarget(de,xe,ye),b.setClearColor(Je,We),Ge!==void 0&&(Q.viewport=Ge),b.toneMapping=Fe}function ss(x,R,z){const Q=R.isScene===!0?R.overrideMaterial:null;for(let O=0,Ae=x.length;O<Ae;O++){const _e=x[O],{object:de,geometry:xe,group:ye}=_e;let Fe=_e.material;Fe.allowOverride===!0&&Q!==null&&(Fe=Q),de.layers.test(z.layers)&&zl(de,R,z,xe,Fe,ye)}}function zl(x,R,z,Q,O,Ae){N!==null&&O.isNodeMaterial&&N.setObject(x,O),x.onBeforeRender(b,R,z,Q,O,Ae),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(b,R,z,Q,x,Ae),O.transparent===!0&&O.side===Wt&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,b.renderBufferDirect(z,R,Q,O,x,Ae),O.side=si,O.needsUpdate=!0,b.renderBufferDirect(z,R,Q,O,x,Ae),O.side=Wt):b.renderBufferDirect(z,R,Q,O,x,Ae),x.onAfterRender(b,R,z,Q,O,Ae)}function as(x,R,z){R.isScene!==!0&&(R=qt);const Q=H.get(x),O=y.state.lights,Ae=y.state.shadowsArray,_e=O.state.version,de=ae.getParameters(x,O.state,Ae,R,z,y.state.lightProbeGridArray),xe=ae.getProgramCacheKey(de);let ye=Q.programs;Q.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,Q.fog=R.fog;const Fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;Q.envMap=ie.get(x.envMap||Q.environment,Fe),Q.envMapRotation=Q.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",vn),ye=new Map,Q.programs=ye);let Ge=ye.get(xe);if(Ge!==void 0){if(Q.currentProgram===Ge&&Q.lightsStateVersion===_e)return Wl(x,de),Ge}else de.uniforms=ae.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,z,de),x.onBeforeCompile(de,b),Ge=ae.acquireProgram(de,xe),ye.set(xe,Ge),Q.uniforms=de.uniforms;const Ce=Q.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=Me.uniform),Wl(x,de),Q.needsLights=Vd(x),Q.lightsStateVersion=_e,Q.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.sunLights.value=O.state.sun,Ce.sunLightShadows.value=O.state.sunShadow,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.sunShadowMatrix.value=O.state.sunShadowMatrix,Ce.sunShadowCascade.value=O.state.sunShadowCascade,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),Q.lightProbeGrid=y.state.lightProbeGridArray.length>0,Q.currentProgram=Ge,Q.uniformsList=null,Ge}function Vl(x){if(x.uniformsList===null){const R=x.currentProgram.getUniforms();x.uniformsList=qs.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function Wl(x,R){const z=H.get(x);z.outputColorSpace=R.outputColorSpace,z.batching=R.batching,z.batchingColor=R.batchingColor,z.instancing=R.instancing,z.instancingColor=R.instancingColor,z.instancingMorph=R.instancingMorph,z.skinning=R.skinning,z.morphTargets=R.morphTargets,z.morphNormals=R.morphNormals,z.morphColors=R.morphColors,z.morphTargetsCount=R.morphTargetsCount,z.numClippingPlanes=R.numClippingPlanes,z.numIntersection=R.numClipIntersection,z.vertexAlphas=R.vertexAlphas,z.vertexTangents=R.vertexTangents,z.toneMapping=R.toneMapping}function kd(x,R){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;v.setFromMatrixPosition(R.matrixWorld);for(let z=0,Q=x.length;z<Q;z++){const O=x[z];if(O.texture!==null&&O.boundingBox.containsPoint(v))return O}return null}function Hd(x,R,z,Q,O){R.isScene!==!0&&(R=qt),X.resetTextureUnits();const Ae=R.fog,_e=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?R.environment:null,de=te===null?b.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ke.workingColorSpace,xe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ye=ie.get(Q.envMap||_e,xe),Fe=Q.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ce=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,Et=!!z.morphAttributes.color;let ht=gn;Q.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=b.toneMapping);const st=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ut=st!==void 0?st.length:0,me=H.get(Q),Gt=y.state.lights;if(Ye===!0&&(ot===!0||x!==j)){const ct=x===j&&Q.id===q;Me.setState(Q,x,ct)}let qe=!1;Q.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Gt.state.version||me.outputColorSpace!==de||O.isBatchedMesh&&me.batching===!1||!O.isBatchedMesh&&me.batching===!0||O.isBatchedMesh&&me.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&me.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&me.instancing===!1||!O.isInstancedMesh&&me.instancing===!0||O.isSkinnedMesh&&me.skinning===!1||!O.isSkinnedMesh&&me.skinning===!0||O.isInstancedMesh&&me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&me.instancingMorph===!1&&O.morphTexture!==null||me.envMap!==ye||Q.fog===!0&&me.fog!==Ae||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Me.numPlanes||me.numIntersection!==Me.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==Ge||me.morphTargets!==Ce||me.morphNormals!==$e||me.morphColors!==Et||me.toneMapping!==ht||me.morphTargetsCount!==Ut||!!me.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,me.__version=Q.version);let tn=me.currentProgram;qe===!0&&(tn=as(Q,R,O),N&&Q.isNodeMaterial&&N.onUpdateProgram(Q,tn,me));let xn=!1,Wn=!1,wi=!1;const it=tn.getUniforms(),gt=me.uniforms;if(m.useProgram(tn.program)&&(xn=!0,Wn=!0,wi=!0),Q.id!==q&&(q=Q.id,Wn=!0),me.needsLights){const ct=kd(y.state.lightProbeGridArray,O);me.lightProbeGrid!==ct&&(me.lightProbeGrid=ct,Wn=!0)}if(xn||j!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(P,"projectionMatrix",x.projectionMatrix),it.setValue(P,"viewMatrix",x.matrixWorldInverse);const Xn=it.map.cameraPosition;Xn!==void 0&&Xn.setValue(P,ut.setFromMatrixPosition(x.matrixWorld)),w.logarithmicDepthBuffer&&it.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&it.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,Wn=!0,wi=!0)}if(me.needsLights&&(Gt.state.sunShadowMap.length>0&&it.setValue(P,"sunShadowMap",Gt.state.sunShadowMap,X),Gt.state.directionalShadowMap.length>0&&it.setValue(P,"directionalShadowMap",Gt.state.directionalShadowMap,X),Gt.state.spotShadowMap.length>0&&it.setValue(P,"spotShadowMap",Gt.state.spotShadowMap,X),Gt.state.pointShadowMap.length>0&&it.setValue(P,"pointShadowMap",Gt.state.pointShadowMap,X)),O.isSkinnedMesh){it.setOptional(P,O,"bindMatrix"),it.setOptional(P,O,"bindMatrixInverse");const ct=O.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),it.setValue(P,"boneTexture",ct.boneTexture,X))}O.isBatchedMesh&&(it.setOptional(P,O,"batchingTexture"),it.setValue(P,"batchingTexture",O._matricesTexture,X),it.setOptional(P,O,"batchingIdTexture"),it.setValue(P,"batchingIdTexture",O._indirectTexture,X),it.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&it.setValue(P,"batchingColorTexture",O._colorsTexture,X));const qn=z.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&L.update(O,z,tn),(Wn||me.receiveShadow!==O.receiveShadow)&&(me.receiveShadow=O.receiveShadow,it.setValue(P,"receiveShadow",O.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&R.environment!==null&&(gt.envMapIntensity.value=R.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=iE()),Wn){if(it.setValue(P,"toneMappingExposure",b.toneMappingExposure),me.needsLights&&zd(gt,wi),Ae&&Q.fog===!0&&Ie.refreshFogUniforms(gt,Ae),Ie.refreshMaterialUniforms(gt,Q,ee,Y,y.state.transmissionRenderTarget[x.id]),me.needsLights&&me.lightProbeGrid){const ct=me.lightProbeGrid;gt.probesSH.value=ct.texture,gt.probesMin.value.copy(ct.boundingBox.min),gt.probesMax.value.copy(ct.boundingBox.max),gt.probesResolution.value.copy(ct.resolution)}qs.upload(P,Vl(me),gt,X)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qs.upload(P,Vl(me),gt,X),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&it.setValue(P,"center",O.center),it.setValue(P,"modelViewMatrix",O.modelViewMatrix),it.setValue(P,"normalMatrix",O.normalMatrix),it.setValue(P,"modelMatrix",O.matrixWorld),Q.uniformsGroups!==void 0){const ct=Q.uniformsGroups;for(let Xn=0,Bi=ct.length;Xn<Bi;Xn++){const Xl=ct[Xn];ne.update(Xl,tn),ne.bind(Xl,tn)}}return tn}function zd(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.sunLights.needsUpdate=R,x.sunLightShadows.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function Vd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,R,z){const Q=H.get(x);Q.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=R,H.get(x.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,R){const z=H.get(x);z.__webglFramebuffer=R,z.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,z=0){te=x,V=R,W=z;let Q=null,O=!1,Ae=!1;if(x){const de=H.get(x);if(de.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),K.copy(x.viewport),ue.copy(x.scissor),ge=x.scissorTest,m.viewport(K),m.scissor(ue),m.setScissorTest(ge),q=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(de.__hasExternalTextures)X.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&H.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(Ae=!0);const ye=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[R])?Q=ye[R][z]:Q=ye[R],O=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?Q=H.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?Q=ye[z]:Q=ye,K.copy(x.viewport),ue.copy(x.scissor),ge=x.scissorTest}else K.copy(Ee).multiplyScalar(ee).floor(),ue.copy(Qe).multiplyScalar(ee).floor(),ge=Ct;if(z!==0&&(Q=G),m.bindFramebuffer(P.FRAMEBUFFER,Q)&&m.drawBuffers(x,Q),m.viewport(K),m.scissor(ue),m.setScissorTest(ge),O){const de=H.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,de.__webglTexture,z)}else if(Ae){const de=R;for(let xe=0;xe<x.textures.length;xe++){const ye=H.get(x.textures[xe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xe,ye.__webglTexture,z,de)}}else if(x!==null&&z!==0){const de=H.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,z)}q=-1};function ql(x){const R=H.get(x);return(R.__readFormat!==x.format||R.__readType!==x.type)&&(R.__readFormat=x.format,R.__readType=x.type,R.__formatReadable=w.textureFormatReadable(x.format),R.__typeReadable=w.textureTypeReadable(x.type)),R}this.readRenderTargetPixels=function(x,R,z,Q,O,Ae,_e,de=0){if(!(x&&x.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){m.bindFramebuffer(P.FRAMEBUFFER,xe);try{const ye=x.textures[de],Fe=ye.format,Ge=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de);const Ce=ql(ye);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-Q&&z>=0&&z<=x.height-O&&P.readPixels(R,z,Q,O,ce.convert(Fe),ce.convert(Ge),Ae)}finally{const ye=te!==null?H.get(te).__webglFramebuffer:null;m.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,R,z,Q,O,Ae,_e,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(R>=0&&R<=x.width-Q&&z>=0&&z<=x.height-O){m.bindFramebuffer(P.FRAMEBUFFER,xe);const ye=x.textures[de],Fe=ye.format,Ge=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de);const Ce=ql(ye);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.bufferData(P.PIXEL_PACK_BUFFER,Ae.byteLength,P.STREAM_READ),P.readPixels(R,z,Q,O,ce.convert(Fe),ce.convert(Ge),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Et=te!==null?H.get(te).__webglFramebuffer:null;m.bindFramebuffer(P.FRAMEBUFFER,Et);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xd(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ae),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer($e),P.deleteSync(ht),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,R=null,z=0){const Q=Math.pow(2,-z),O=Math.floor(x.image.width*Q),Ae=Math.floor(x.image.height*Q),_e=R!==null?R.x:0,de=R!==null?R.y:0;X.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,_e,de,O,Ae),m.unbindTexture()},this.copyTextureToTexture=function(x,R,z=null,Q=null,O=0,Ae=0){let _e,de,xe,ye,Fe,Ge,Ce,$e,Et;const ht=x.isCompressedTexture?x.mipmaps[Ae]:x.image;if(z!==null)_e=z.max.x-z.min.x,de=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,Fe=z.min.y,Ge=z.isBox3?z.min.z:0;else{const gt=Math.pow(2,-O);_e=Math.floor(ht.width*gt),de=Math.floor(ht.height*gt),x.isDataArrayTexture?xe=ht.depth:x.isData3DTexture?xe=Math.floor(ht.depth*gt):xe=1,ye=0,Fe=0,Ge=0}Q!==null?(Ce=Q.x,$e=Q.y,Et=Q.z):(Ce=0,$e=0,Et=0);const st=ce.convert(R.format),Ut=ce.convert(R.type);let me;R.isData3DTexture?(X.setTexture3D(R,0),me=P.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(X.setTexture2DArray(R,0),me=P.TEXTURE_2D_ARRAY):(X.setTexture2D(R,0),me=P.TEXTURE_2D),m.activeTexture(P.TEXTURE0),m.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,R.flipY),m.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),m.pixelStorei(P.UNPACK_ALIGNMENT,R.unpackAlignment);const Gt=m.getParameter(P.UNPACK_ROW_LENGTH),qe=m.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=m.getParameter(P.UNPACK_SKIP_PIXELS),xn=m.getParameter(P.UNPACK_SKIP_ROWS),Wn=m.getParameter(P.UNPACK_SKIP_IMAGES);m.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),m.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),m.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),m.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),m.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);const wi=x.isDataArrayTexture||x.isData3DTexture,it=R.isDataArrayTexture||R.isData3DTexture;if(x.isDepthTexture){const gt=H.get(x),qn=H.get(R),ct=H.get(gt.__renderTarget),Xn=H.get(qn.__renderTarget);m.bindFramebuffer(P.READ_FRAMEBUFFER,ct.__webglFramebuffer),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Bi=0;Bi<xe;Bi++)wi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(x).__webglTexture,O,Ge+Bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(R).__webglTexture,Ae,Et+Bi)),P.blitFramebuffer(ye,Fe,_e,de,Ce,$e,_e,de,P.DEPTH_BUFFER_BIT,P.NEAREST);m.bindFramebuffer(P.READ_FRAMEBUFFER,null),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||H.has(x)){const gt=H.get(x),qn=H.get(R);m.bindFramebuffer(P.READ_FRAMEBUFFER,D),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let ct=0;ct<xe;ct++)wi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gt.__webglTexture,O,Ge+ct):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gt.__webglTexture,O),it?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qn.__webglTexture,Ae,Et+ct):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qn.__webglTexture,Ae),O!==0?P.blitFramebuffer(ye,Fe,_e,de,Ce,$e,_e,de,P.COLOR_BUFFER_BIT,P.NEAREST):it?P.copyTexSubImage3D(me,Ae,Ce,$e,Et+ct,ye,Fe,_e,de):P.copyTexSubImage2D(me,Ae,Ce,$e,ye,Fe,_e,de);m.bindFramebuffer(P.READ_FRAMEBUFFER,null),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(me,Ae,Ce,$e,Et,_e,de,xe,st,Ut,ht.data):R.isCompressedArrayTexture?P.compressedTexSubImage3D(me,Ae,Ce,$e,Et,_e,de,xe,st,ht.data):P.texSubImage3D(me,Ae,Ce,$e,Et,_e,de,xe,st,Ut,ht):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ae,Ce,$e,_e,de,st,Ut,ht.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ae,Ce,$e,ht.width,ht.height,st,ht.data):P.texSubImage2D(P.TEXTURE_2D,Ae,Ce,$e,_e,de,st,Ut,ht);m.pixelStorei(P.UNPACK_ROW_LENGTH,Gt),m.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),m.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),m.pixelStorei(P.UNPACK_SKIP_ROWS,xn),m.pixelStorei(P.UNPACK_SKIP_IMAGES,Wn),Ae===0&&R.generateMipmaps&&P.generateMipmap(me),m.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){V=0,W=0,te=null,m.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const rE=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ca,AddEquation:gi,AddOperation:Wh,AdditiveBlending:Ur,AgXToneMapping:il,AlphaFormat:cl,AlwaysCompare:eu,AlwaysDepth:Ys,AlwaysStencilFunc:Yh,ArcCurve:Au,ArrayCamera:Lu,BackSide:Ot,BasicDepthPacking:qh,Box3:Vn,BoxGeometry:Ar,BufferAttribute:mn,BufferGeometry:Tt,ByteType:ol,Cache:mi,Camera:Ml,CanvasTexture:Jr,CatmullRomCurve3:fu,CineonToneMapping:tl,ClampToEdgeWrapping:$t,Color:Xe,ColorManagement:ke,CompressedArrayTexture:hu,CompressedCubeTexture:uu,CompressedTexture:ns,ConstantAlphaFactor:Hh,ConstantColorFactor:Gh,CubeCamera:Du,CubeDepthTexture:du,CubeReflectionMapping:Hn,CubeRefractionMapping:Ci,CubeTexture:El,CubeUVReflectionMapping:jr,CubicBezierCurve:xl,CubicBezierCurve3:pu,CullFaceBack:Fo,CullFaceFront:yh,CullFaceNone:Sh,Curve:_n,CurvePath:Eu,CustomBlending:Mh,CustomToneMapping:nl,Data3DTexture:Al,DataArrayTexture:dl,DataTexture:Pa,DefaultLoadingManager:Tu,DepthFormat:Dn,DepthStencilFormat:ei,DepthTexture:cr,DoubleSide:Wt,DstAlphaFactor:Uh,DstColorFactor:Nh,EllipseCurve:Fa,EqualCompare:Zh,EqualDepth:Ks,EquirectangularReflectionMapping:Gs,EquirectangularRefractionMapping:ks,Euler:an,EventDispatcher:oi,ExternalTexture:_l,FileLoader:Ws,Float32BufferAttribute:pt,FloatType:Qt,FrontSide:si,Frustum:Ua,GLSL3:Go,GreaterCompare:$h,GreaterDepth:$s,GreaterEqualCompare:ba,GreaterEqualDepth:Zs,Group:en,HalfFloatType:Bt,ImageBitmapLoader:Ru,ImageUtils:iu,InstancedBufferGeometry:bu,InstancedInterleavedBuffer:_a,IntType:Sa,InterleavedBuffer:gl,InterleavedBufferAttribute:pn,KeepStencilOp:zs,Layers:Da,LessCompare:Kh,LessDepth:Js,LessEqualCompare:Ta,LessEqualDepth:ji,Line:cu,Line3:Pu,LineBasicMaterial:lu,LineCurve:Cl,LineCurve3:gu,LinearFilter:at,LinearMipmapLinearFilter:Bn,LinearMipmapNearestFilter:Hs,LinearSRGBColorSpace:lr,LinearToneMapping:jo,LinearTransfer:Wr,Loader:is,LoadingManager:Bu,Material:Mi,MathUtils:Ne,Matrix2:Wo,Matrix3:Re,Matrix4:nt,MaxEquation:bh,Mesh:ze,MeshBasicMaterial:Rn,MeshDepthMaterial:Mu,MeshDistanceMaterial:wu,MinEquation:Th,MirroredRepeatWrapping:ea,MixOperation:Vh,MultiplyBlending:Qo,MultiplyOperation:$o,NearestFilter:vt,NearestMipmapLinearFilter:Mr,NearestMipmapNearestFilter:al,NeutralToneMapping:rl,NeverCompare:Jh,NeverDepth:Xs,NoBlending:Tn,NoColorSpace:dn,NoToneMapping:gn,NormalBlending:Ki,NotEqualCompare:jh,NotEqualDepth:js,Object3D:Lt,ObjectSpaceNormalMap:Xh,OneFactor:Dh,OneMinusConstantAlphaFactor:zh,OneMinusConstantColorFactor:kh,OneMinusDstAlphaFactor:Fh,OneMinusDstColorFactor:Qh,OneMinusSrcAlphaFactor:Zo,OneMinusSrcColorFactor:Ph,OrthographicCamera:wl,PCFShadowMap:Tr,PCFSoftShadowMap:Ih,PMREMGenerator:qo,Path:ko,PerspectiveCamera:Kt,Plane:Gn,PlaneGeometry:zn,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:mu,Quaternion:on,R11_EAC_Format:Qr,RED_GREEN_RGTC2_Format:or,RED_RGTC1_Format:Hr,REVISION:xa,RG11_EAC_Format:ar,RGBAFormat:St,RGBAIntegerFormat:Ba,RGBA_ASTC_10x10_Format:ua,RGBA_ASTC_10x5_Format:la,RGBA_ASTC_10x6_Format:ca,RGBA_ASTC_10x8_Format:ha,RGBA_ASTC_12x10_Format:da,RGBA_ASTC_12x12_Format:Aa,RGBA_ASTC_4x4_Format:ri,RGBA_ASTC_5x4_Format:na,RGBA_ASTC_5x5_Format:ia,RGBA_ASTC_6x5_Format:ra,RGBA_ASTC_6x6_Format:_i,RGBA_ASTC_8x5_Format:sa,RGBA_ASTC_8x6_Format:aa,RGBA_ASTC_8x8_Format:oa,RGBA_BPTC_Format:yi,RGBA_ETC2_EAC_Format:sr,RGBA_PVRTC_2BPPV1_Format:ir,RGBA_PVRTC_4BPPV1_Format:Si,RGBA_S3TC_DXT1_Format:ni,RGBA_S3TC_DXT3_Format:br,RGBA_S3TC_DXT5_Format:ii,RGBFormat:nr,RGB_BPTC_SIGNED_Format:fa,RGB_BPTC_UNSIGNED_Format:kr,RGB_ETC1_Format:Nr,RGB_ETC2_Format:rr,RGB_PVRTC_2BPPV1_Format:ta,RGB_PVRTC_4BPPV1_Format:Fr,RGB_S3TC_DXT1_Format:Ei,RGFormat:jt,RGIntegerFormat:wa,RawShaderMaterial:Iu,Ray:La,Raycaster:Bl,RedFormat:ti,RedIntegerFormat:Ma,ReinhardToneMapping:el,RenderTarget:ru,RepeatWrapping:er,ReverseSubtractEquation:Bh,SIGNED_R11_EAC_Format:Or,SIGNED_RED_GREEN_RGTC2_Format:Vr,SIGNED_RED_RGTC1_Format:zr,SIGNED_RG11_EAC_Format:Gr,SRGBColorSpace:ft,SRGBTransfer:je,Scene:au,ShaderChunk:Ue,ShaderLib:Vt,ShaderMaterial:Xt,Shape:Il,ShapeGeometry:Na,ShapeUtils:$i,ShortType:ll,Sphere:li,SphereGeometry:ur,SplineCurve:yl,Sprite:ga,SpriteMaterial:ml,SrcAlphaFactor:Ko,SrcAlphaSaturateFactor:Oh,SrcColorFactor:Lh,StaticDrawUsage:hl,SubtractEquation:wh,SubtractiveBlending:No,TangentSpaceNormalMap:Oo,Texture:xt,TextureSource:Ra,Triangle:Zt,UVMapping:sl,Uint16BufferAttribute:fl,Uint32BufferAttribute:pl,UniformsLib:re,UniformsUtils:Qa,UnsignedByteType:be,UnsignedInt101111Type:ts,UnsignedInt248Type:tr,UnsignedInt5999Type:es,UnsignedIntType:En,UnsignedShort4444Type:ya,UnsignedShort5551Type:Ia,UnsignedShortType:ai,VSMShadowMap:Yi,Vector2:pe,Vector3:B,Vector4:rt,WebGLCoordinateSystem:fn,WebGLCubeRenderTarget:Tl,WebGLRenderTarget:sn,WebGLRenderer:zu,WebGLUtils:ku,WebGPUCoordinateSystem:qr,WebXRController:Vs,WireframeGeometry:Su,ZeroFactor:Rh,createCanvasElement:tu,error:Ve,log:Xr,warn:Be,warnOnce:vi},Symbol.toStringTag,{value:"Module"}));class sE{listeners=new Map;on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.off(e,t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,...t){this.listeners.get(e)?.forEach(n=>n(...t))}once(e,t){const n=this.on(e,((...i)=>{t(...i),n()}))}clear(){this.listeners.clear()}}class aE{camera;yaw=0;pitch=0;fov;targetYaw=0;targetPitch=0;targetFov;minFov;maxFov;damping;pitchLimit;dragSensitivity;usesDefaultDragSensitivity;zoomSensitivity;isPointerDown=!1;activePointerId=null;touchPointers=new Map;pinchStartDistance=null;pinchStartFov=0;pointerStartX=0;pointerStartY=0;startYaw=0;startPitch=0;bus;container;domElement;disposers=[];inputLocked=!1;constructor(e,t,n,i={}){this.container=e,this.domElement=t,this.bus=n;const s=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight;this.fov=i.fov??75,this.targetFov=this.fov,this.minFov=i.minFov??30,this.maxFov=i.maxFov??150,this.damping=i.dampingFactor??.12,this.pitchLimit=i.pitchLimit??Math.PI/2.2,this.usesDefaultDragSensitivity=i.dragSensitivity===void 0,this.dragSensitivity=i.dragSensitivity??.003,this.zoomSensitivity=i.zoomSensitivity??.04,this.camera=new Kt(this.fov,s/a,.1,3e3),this.camera.position.set(0,0,0),this.bindPointerEvents(),this.disposers.push(n.on("interaction:lock",()=>{this.inputLocked=!0}),n.on("interaction:unlock",()=>{this.inputLocked=!1}))}setOrientation(e,t,n){this.yaw=e,this.pitch=t,this.targetYaw=e,this.targetPitch=t,n!==void 0&&(this.fov=n,this.targetFov=n,this.camera.fov=n,this.camera.updateProjectionMatrix()),this.applyRotation()}setTarget(e,t,n){this.targetYaw=e,this.targetPitch=Math.max(-this.pitchLimit,Math.min(this.pitchLimit,t)),n!==void 0&&(this.targetFov=Math.max(this.minFov,Math.min(this.maxFov,n)))}setRaw(e,t,n){this.yaw=e,this.pitch=t,this.targetYaw=e,this.targetPitch=t,n!==void 0&&(this.fov=n,this.camera.fov=n,this.camera.updateProjectionMatrix()),this.applyRotation()}getYaw(){return this.yaw}getPitch(){return this.pitch}getFov(){return this.fov}getTargetYaw(){return this.targetYaw}getTargetPitch(){return this.targetPitch}update(){let e=!1;const t=this.targetYaw-this.yaw,n=this.targetPitch-this.pitch;(Math.abs(t)>1e-4||Math.abs(n)>1e-4)&&(this.yaw+=t*this.damping,this.pitch+=n*this.damping,this.applyRotation(),e=!0),Math.abs(this.targetFov-this.fov)>.05&&(this.fov+=(this.targetFov-this.fov)*this.damping,this.camera.fov=this.fov,this.camera.updateProjectionMatrix(),e=!0),e&&this.bus.emit("camera:move",{yaw:this.yaw,pitch:this.pitch})}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}dispose(){this.disposers.forEach(e=>e()),this.disposers=[]}applyRotation(){const e=new an(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(e)}bindPointerEvents(){const e=this.domElement;e.style.touchAction="none",e.style.userSelect="none",e.style.webkitUserSelect="none";const t=a=>{if(!this.inputLocked&&a.target===e&&!(a.pointerType==="mouse"&&a.button!==0)){if(a.pointerType==="touch"){if(this.touchPointers.size>=2)return;if(this.touchPointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.setPointerCapture(a.pointerId),this.touchPointers.size===2){const o=[...this.touchPointers.values()],l=o[0],c=o[1];this.pinchStartDistance=Math.hypot(c.x-l.x,c.y-l.y),this.pinchStartFov=this.targetFov,this.isPointerDown=!1,a.preventDefault();return}}this.activePointerId===null&&(a.preventDefault(),this.isPointerDown=!0,this.activePointerId=a.pointerId,this.pointerStartX=a.clientX,this.pointerStartY=a.clientY,this.startYaw=this.targetYaw,this.startPitch=this.targetPitch,e.setPointerCapture(a.pointerId),this.bus.emit("interaction:dragstart",{x:a.clientX,y:a.clientY}))}},n=a=>{if(a.pointerType==="touch"&&this.touchPointers.has(a.pointerId)&&(this.touchPointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.touchPointers.size>=2&&this.pinchStartDistance)){a.preventDefault();const _=[...this.touchPointers.values()],p=_[0],A=_[1],C=Math.max(1,Math.hypot(A.x-p.x,A.y-p.y));this.targetFov=Ne.clamp(this.pinchStartFov*(this.pinchStartDistance/C),this.minFov,this.maxFov),this.bus.emit("camera:fov",{fov:this.targetFov});return}if(!this.isPointerDown||this.inputLocked||a.pointerId!==this.activePointerId)return;a.preventDefault();const o=a.clientX-this.pointerStartX,l=a.clientY-this.pointerStartY,c=a.pointerType==="touch"||a.pointerType==="pen",d=Math.max(320,this.container.clientWidth||window.innerWidth),h=Math.max(320,this.container.clientHeight||window.innerHeight),u=Ne.clamp(this.targetFov/75,.45,1.35),f=this.usesDefaultDragSensitivity&&c?Math.PI/d*.72*u:this.dragSensitivity,g=this.usesDefaultDragSensitivity&&c?Math.PI/h*.62*u:this.dragSensitivity;this.targetYaw=this.startYaw+o*f,this.targetPitch=Math.max(-this.pitchLimit,Math.min(this.pitchLimit,this.startPitch+l*g))},i=a=>{if(a.pointerType==="touch"&&(this.touchPointers.delete(a.pointerId),this.pinchStartDistance!==null)){if(this.pinchStartDistance=null,this.touchPointers.size===1){const[o,l]=[...this.touchPointers.entries()][0];this.activePointerId=o,this.isPointerDown=!0,this.pointerStartX=l.x,this.pointerStartY=l.y,this.startYaw=this.targetYaw,this.startPitch=this.targetPitch}else this.activePointerId=null,this.isPointerDown=!1,this.bus.emit("interaction:dragend");e.hasPointerCapture(a.pointerId)&&e.releasePointerCapture(a.pointerId);return}!this.isPointerDown||a.pointerId!==this.activePointerId||(this.isPointerDown=!1,this.activePointerId=null,e.hasPointerCapture(a.pointerId)&&e.releasePointerCapture(a.pointerId),this.bus.emit("interaction:dragend"))},s=a=>{this.inputLocked||(a.preventDefault(),this.targetFov=Math.max(this.minFov,Math.min(this.maxFov,this.targetFov+a.deltaY*this.zoomSensitivity)),this.bus.emit("camera:fov",{fov:this.targetFov}))};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",n),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("lostpointercapture",i),e.addEventListener("wheel",s,{passive:!1}),this.disposers.push(()=>e.removeEventListener("pointerdown",t),()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerup",i),()=>e.removeEventListener("pointercancel",i),()=>e.removeEventListener("lostpointercapture",i),()=>e.removeEventListener("wheel",s))}}class oE{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:s,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(s,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const lE=0,Zc=2,cE=1,$c=2,hE=0,uE=1,dE=10,AE=0,Vu=9,Wu=15,qu=16,Xu=22,Yu=37,Ju=43,Ku=76,Zu=83,bl=91,$u=97,ju=100,ed=103,td=109,nd=122,id=123,rd=131,sd=132,ad=133,od=134,ld=137,cd=138,hd=139,ud=140,dd=141,Ad=142,fd=145,pd=146,gd=148,md=152,Ed=153,_d=154,vd=155,xd=156,Cd=157,Sd=158,yd=165,Id=166,Md=1000054e3,wd=1000054001,Bd=1000054004,Td=1000054005,Rl=1000066e3,bd=1000066004;class Ir{constructor(e,t,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const Ht=[171,75,84,88,32,50,48,187,13,10,26,10];function jc(r){return new TextDecoder().decode(r)}function fE(r){const e=new Uint8Array(r.buffer,r.byteOffset,Ht.length);if(e[0]!==Ht[0]||e[1]!==Ht[1]||e[2]!==Ht[2]||e[3]!==Ht[3]||e[4]!==Ht[4]||e[5]!==Ht[5]||e[6]!==Ht[6]||e[7]!==Ht[7]||e[8]!==Ht[8]||e[9]!==Ht[9]||e[10]!==Ht[10]||e[11]!==Ht[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,i=new Ir(r,Ht.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32(),t.levelCount=i._nextUint32(),t.supercompressionScheme=i._nextUint32();const s=i._nextUint32(),a=i._nextUint32(),o=i._nextUint32(),l=i._nextUint32(),c=i._nextUint64(),d=i._nextUint64(),h=3*Math.max(t.levelCount,1)*8,u=new Ir(r,Ht.length+n,h,!0);for(let K=0,ue=Math.max(t.levelCount,1);K<ue;K++)t.levels.push({levelData:new Uint8Array(r.buffer,r.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});const f=new Ir(r,s,a,!0);f._skip(4);const g=f._nextUint16(),_=f._nextUint16(),p=f._nextUint16(),A=f._nextUint16(),C={vendorId:g,descriptorType:_,versionNumber:p,colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},I=(A/4-6)/4;for(let K=0;K<I;K++){const ue={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&ue.channelType?(ue.sampleLower=f._nextInt32(),ue.sampleUpper=f._nextInt32()):(ue.sampleLower=f._nextUint32(),ue.sampleUpper=f._nextUint32()),C.samples[K]=ue}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(C);const v=new Ir(r,o,l,!0);for(;v._offset<l;){const K=v._nextUint32(),ue=v._scan(K),ge=jc(ue);if(t.keyValue[ge]=v._nextUint8Array(K-ue.byteLength-1),ge.match(/^ktx/i)){const Je=jc(t.keyValue[ge]);t.keyValue[ge]=Je.substring(0,Je.lastIndexOf("\0"))}v._skip(K%4?4-K%4:0)}if(d<=0)return t;const S=new Ir(r,c,d,!0),y=S._nextUint16(),T=S._nextUint16(),E=S._nextUint32(),M=S._nextUint32(),b=S._nextUint32(),U=S._nextUint32(),N=[];for(let K=0,ue=Math.max(t.levelCount,1);K<ue;K++)N.push({imageFlags:S._nextUint32(),rgbSliceByteOffset:S._nextUint32(),rgbSliceByteLength:S._nextUint32(),alphaSliceByteOffset:S._nextUint32(),alphaSliceByteLength:S._nextUint32()});const G=c+S._offset,D=G+E,k=D+M,V=k+b,W=new Uint8Array(r.buffer,r.byteOffset+G,E),te=new Uint8Array(r.buffer,r.byteOffset+D,M),q=new Uint8Array(r.buffer,r.byteOffset+k,b),j=new Uint8Array(r.buffer,r.byteOffset+V,U);return t.globalData={endpointCount:y,selectorCount:T,imageDescs:N,endpointsData:W,selectorsData:te,tablesData:q,extendedData:j},t}let So,On,Jo;const yo={env:{emscripten_notify_memory_growth:function(r){Jo=new Uint8Array(On.exports.memory.buffer)}}};class pE{init(){return So||(So=typeof fetch<"u"?fetch("data:application/wasm;base64,"+eh).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,yo)).then(this._init):WebAssembly.instantiate(Buffer.from(eh,"base64"),yo).then(this._init),So)}_init(e){On=e.instance,yo.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!On)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=On.exports.malloc(n);Jo.set(e,i),t=t||Number(On.exports.ZSTD_findDecompressedSize(i,n));const s=On.exports.malloc(t),a=On.exports.ZSTD_decompress(s,t,i,n),o=Jo.slice(s,s+a);return On.exports.free(i),On.exports.free(s),o}}const eh="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",gE="display-p3",mE="display-p3-linear";({...ke.spaces[ft]});const EE=new URL(""+new URL("basis_transcoder.VXdx5NbI.wasm",import.meta.url).href,import.meta.url).toString(),_E=new URL(""+new URL("basis_transcoder.o4Hde_L7.js",import.meta.url).href,import.meta.url).toString(),Io=new WeakMap;let Mo=0,wo;class rn extends is{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new oE,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new Ws(this.manager);e.setWithCredentials(this.withCredentials);const t=new Ws(this.manager);t.setWithCredentials(this.withCredentials),t.setResponseType("arraybuffer");let n,i;this.transcoderPath===""?(n=e.loadAsync(_E),i=t.loadAsync(EE)):(e.setPath(this.transcoderPath),n=e.loadAsync("basis_transcoder.js"),t.setPath(this.transcoderPath),i=t.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([n,i]).then(([s,a])=>{const o=rn.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(rn.EngineFormat),"let _EngineType = "+JSON.stringify(rn.EngineType),"let _TranscoderFormat = "+JSON.stringify(rn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(rn.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),d=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:d},[d]),c})}),Mo>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Mo++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new Ws(this.manager);s.setPath(this.path),s.setCrossOrigin(this.crossOrigin),s.setWithCredentials(this.withCredentials),s.setRequestHeader(this.requestHeader),s.setResponseType("arraybuffer"),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Io.has(e))return Io.get(e).promise.then(t).catch(n);this._createTexture(e).then(i=>t?t(i):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:i,data:{faces:s,width:a,height:o,format:l,type:c,dfdFlags:d}}=e;if(n==="error")return Promise.reject(i);let h;if(t.faceCount===6)h=new uu(s,l,c);else{const u=s[0].mipmaps;h=t.layerCount>1?new hu(u,a,o,t.layerCount,l,c):new ns(u,a,o,l,c)}return h.minFilter=s[0].mipmaps.length===1?at:Bn,h.magFilter=at,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=Rd(t),h.premultiplyAlpha=!!(d&cE),h}async _createTexture(e,t={}){const n=fE(new Uint8Array(e)),i=n.vkFormat===Rl&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===AE||i&&!this.workerConfig.astcHDRSupported))return CE(n);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(l=>this._createTextureFrom(l.data,n));return Io.set(e,{promise:o}),o}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Mo--}}rn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};rn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};rn.EngineFormat={RGBAFormat:St,RGBA_ASTC_4x4_Format:ri,RGB_BPTC_UNSIGNED_Format:kr,RGBA_BPTC_Format:yi,RGBA_ETC2_EAC_Format:sr,RGBA_PVRTC_4BPPV1_Format:Si,RGBA_S3TC_DXT5_Format:ii,RGB_ETC1_Format:Nr,RGB_ETC2_Format:rr,RGB_PVRTC_4BPPV1_Format:Fr,RGBA_S3TC_DXT1_Format:ni};rn.EngineType={UnsignedByteType:be,HalfFloatType:Bt,FloatType:Qt};rn.BasisWorker=function(){let r,e,t;const n=_EngineFormat,i=_EngineType,s=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(g){const _=g.data;switch(_.type){case"init":r=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:A,width:C,height:I,hasAlpha:v,format:S,type:y,dfdFlags:T}=l(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:C,height:I,hasAlpha:v,format:S,type:y,dfdFlags:T}},A)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(g){e=new Promise(_=>{t={wasmBinary:g,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(g){const _=new t.KTX2File(new Uint8Array(g));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(_.isUASTC())A=a.UASTC;else if(_.isETC1S())A=a.ETC1S;else if(_.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const C=_.getWidth(),I=_.getHeight(),v=_.getLayers()||1,S=_.getLevels(),y=_.getFaces(),T=_.getHasAlpha(),E=_.getDFDFlags(),{transcoderFormat:M,engineFormat:b,engineType:U}=h(A,C,I,T);if(!C||!I||!S)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const N=[],G=[];for(let D=0;D<y;D++){const k=[];for(let V=0;V<S;V++){const W=[];let te,q;for(let K=0;K<v;K++){const ue=_.getImageLevelInfo(V,K,D);D===0&&V===0&&K===0&&(ue.origWidth%4!==0||ue.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),S>1?(te=ue.origWidth,q=ue.origHeight):(te=ue.width,q=ue.height);let ge=new Uint8Array(_.getImageTranscodedSizeInBytes(V,K,0,M));const Je=_.transcodeImage(ge,V,K,D,M,0,-1,-1);if(U===i.HalfFloatType&&(ge=new Uint16Array(ge.buffer,ge.byteOffset,ge.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!Je)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");W.push(ge)}const j=f(W);k.push({data:j,width:te,height:q}),G.push(j.buffer)}N.push({mipmaps:k,width:C,height:I,format:b,type:U})}return p(),{faces:N,buffers:G,width:C,height:I,hasAlpha:T,dfdFlags:E,format:b,type:U}}const c=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[s.ASTC_4x4,s.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.BC7_M5,s.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.BC1,s.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.ETC1,s.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.PVRTC1_4_RGB,s.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[s.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.RGBA32,s.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[s.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],d={[a.ETC1S]:c.filter(g=>g.basisFormat.includes(a.ETC1S)).sort((g,_)=>g.priorityETC1S-_.priorityETC1S),[a.UASTC]:c.filter(g=>g.basisFormat.includes(a.UASTC)).sort((g,_)=>g.priorityUASTC-_.priorityUASTC),[a.UASTC_HDR]:c.filter(g=>g.basisFormat.includes(a.UASTC_HDR)).sort((g,_)=>g.priorityHDR-_.priorityHDR)};function h(g,_,p,A){const C=d[g];for(let I=0;I<C.length;I++){const v=C[I];if(v.if&&!r[v.if]||!v.basisFormat.includes(g)||A&&v.transcoderFormat.length<2||v.needsPowerOfTwo&&!(u(_)&&u(p)))continue;const S=v.transcoderFormat[A?1:0],y=v.engineFormat[A?1:0],T=v.engineType[0];return{transcoderFormat:S,engineFormat:y,engineType:T}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(g){return g<=2?!0:(g&g-1)===0&&g!==0}function f(g){if(g.length===1)return g[0];let _=0;for(let C=0;C<g.length;C++){const I=g[C];_+=I.byteLength}const p=new Uint8Array(_);let A=0;for(let C=0;C<g.length;C++){const I=g[C];p.set(I,A),A+=I.byteLength}return p}};const vE=new Set([St,nr,jt,ti]),xE=new Set([bl]),Bo={[td]:St,[ed]:jt,[ju]:ti,[$u]:St,[Zu]:jt,[Ku]:ti,[bl]:St,[Ju]:St,[Yu]:St,[Xu]:jt,[qu]:jt,[Wu]:ti,[Vu]:ti,[id]:nr,[nd]:nr,[md]:sr,[gd]:rr,[Ed]:Qr,[_d]:Or,[vd]:ar,[xd]:Gr,[Rl]:ri,[Sd]:ri,[Cd]:ri,[bd]:_i,[Id]:_i,[yd]:_i,[od]:ni,[ad]:ni,[sd]:Ei,[rd]:Ei,[cd]:ii,[ld]:ii,[ud]:zr,[hd]:Hr,[Ad]:Vr,[dd]:or,[pd]:yi,[fd]:yi,[Td]:Si,[wd]:Si,[Bd]:ir,[Md]:ir},pi={[td]:Qt,[ed]:Qt,[ju]:Qt,[$u]:Bt,[Zu]:Bt,[Ku]:Bt,[bl]:ai,[Ju]:be,[Yu]:be,[Xu]:be,[qu]:be,[Wu]:be,[Vu]:be,[id]:es,[nd]:ts,[md]:be,[gd]:be,[Ed]:be,[_d]:be,[vd]:be,[xd]:be,[Rl]:Bt,[Sd]:be,[Cd]:be,[bd]:Bt,[Id]:be,[yd]:be,[od]:be,[ad]:be,[sd]:be,[rd]:be,[cd]:be,[ld]:be,[ud]:be,[hd]:be,[Ad]:be,[dd]:be,[pd]:be,[fd]:be,[Td]:be,[wd]:be,[Bd]:be,[Md]:be};async function CE(r){const{vkFormat:e}=r;if(Bo[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);pi[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;r.supercompressionScheme===Zc&&(wo||(wo=new Promise(async a=>{const o=new pE;await o.init(),a(o)})),t=await wo);const n=[];for(let a=0;a<r.levels.length;a++){const o=Math.max(1,r.pixelWidth>>a),l=Math.max(1,r.pixelHeight>>a),c=r.pixelDepth?Math.max(1,r.pixelDepth>>a):0,d=r.levels[a];let h;if(r.supercompressionScheme===lE)h=d.levelData;else if(r.supercompressionScheme===Zc)h=t.decode(d.levelData,d.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;pi[e]===Qt?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):pi[e]===Bt||pi[e]===ai?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):pi[e]===es||pi[e]===ts?u=new Uint32Array(h.buffer,h.byteOffset,h.byteLength/Uint32Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:o,height:l,depth:c})}const i=r.levelCount===0||n.length>1;let s;if(vE.has(Bo[e]))s=r.pixelDepth===0?new Pa(n[0].data,r.pixelWidth,r.pixelHeight):new Al(n[0].data,r.pixelWidth,r.pixelHeight,r.pixelDepth),s.minFilter=i?al:vt,s.magFilter=vt,s.generateMipmaps=r.levelCount===0,s.normalized=xE.has(e);else{if(r.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new ns(n,r.pixelWidth,r.pixelHeight),s.minFilter=i?Bn:at,s.magFilter=at}return s.mipmaps=n,s.type=pi[e],s.format=Bo[e],s.colorSpace=Rd(r),s.needsUpdate=!0,Promise.resolve(s)}function Rd(r){const e=r.dataFormatDescriptor[0];return e.colorPrimaries===uE?e.transferFunction===$c?ft:lr:e.colorPrimaries===dE?e.transferFunction===$c?gE:mE:(e.colorPrimaries===hE||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),dn)}class SE{items=new Map;usedBytes=0;get size(){return this.items.size}get totalBytes(){return this.usedBytes}has(e){return this.items.has(e)}get(e){return this.items.get(e)}values(){return this.items.values()}entries(){return this.items.entries()}forEach(e){this.items.forEach(e)}set(e,t){const n=this.items.get(e);n&&(this.usedBytes-=n.bytes),this.items.delete(e),this.items.set(e,t),this.usedBytes+=t.bytes}touch(e,t){const n=this.items.get(e);if(n)return n.lastUsedAt=t,this.items.delete(e),this.items.set(e,n),n}delete(e){const t=this.items.get(e);if(t)return this.items.delete(e),this.usedBytes=Math.max(0,this.usedBytes-t.bytes),t}clear(){const e=[...this.items.values()];return this.items.clear(),this.usedBytes=0,e}}const yE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,IE=`
  varying vec2 vUv;
  uniform sampler2D map;
  uniform float brightness;
  uniform float highlightCompression;

  void main() {
    gl_FragColor = texture2D(map, vUv);
    gl_FragColor.rgb *= brightness;
    float luminance = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    const float highlightStart = 0.55;
    float excess = max(luminance - highlightStart, 0.0);
    float compressedLuminance = highlightStart
      + excess / (1.0 + highlightCompression * excess * 5.0);
    if (luminance > highlightStart) {
      gl_FragColor.rgb *= compressedLuminance / luminance;
    }
    #include <colorspace_fragment>
  }
`,ME={maxConcurrentRequests:4,maxUploadsPerFrame:2,maxCacheBytes:160*1024*1024,updateIntervalMs:90,evictionGraceMs:1400,resolutionScale:1.08};class wE{group=new en;config=null;renderer;sphereRadius;options;records=new SE;queued=new Map;loading=new Map;decoded=[];desired=new Set;failedUntil=new Map;generation=0;lastSelectionAt=-1/0;brightness=1.25;highlightCompression=0;currentLevel=0;onContextLost=e=>{e.preventDefault(),this.generation++,this.cancelAllJobs(),this.clearRecords(),this.group.visible=!1};onContextRestored=()=>{const e=this.config;e&&this.configure(e,this.group.rotation.y)};get diagnostics(){return{enabled:!!this.config,level:this.currentLevel,loadedTiles:this.records.size,pendingTiles:this.queued.size+this.loading.size+this.decoded.length,queuedTiles:this.queued.size,decodedTiles:this.decoded.length,cacheBytes:this.records.totalBytes,cacheBudgetBytes:this.options.maxCacheBytes,sourceWidth:this.config?.sourceWidth??0,sourceHeight:this.config?.sourceHeight??Math.round((this.config?.sourceWidth??0)/2)}}constructor(e,t,n,i={}){this.renderer=t,this.sphereRadius=n,this.options={...ME,...i},this.group.renderOrder=2,this.group.visible=!1,e.add(this.group),t.domElement.addEventListener("webglcontextlost",this.onContextLost),t.domElement.addEventListener("webglcontextrestored",this.onContextRestored)}configure(e,t){this.generation++,this.cancelAllJobs(),this.clearRecords(),this.config=e?.enabled&&e.sourceWidth>=8192?e:null,this.currentLevel=0,this.lastSelectionAt=-1/0,this.group.rotation.y=t,this.group.visible=!!this.config,this.group.updateMatrixWorld(!0)}setRotation(e){this.group.rotation.y=e,this.group.updateMatrixWorld(!0),this.lastSelectionAt=-1/0}setBrightness(e){this.brightness=e,this.records.forEach(({mesh:t})=>{t.material.uniforms.brightness.value=e})}setHighlightCompression(e){this.highlightCompression=e,this.records.forEach(({mesh:t})=>{t.material.uniforms.highlightCompression.value=e})}update(e,t=performance.now()){this.config&&(t-this.lastSelectionAt>=this.options.updateIntervalMs&&(this.lastSelectionAt=t,this.refreshDesiredTiles(e,t)),this.uploadDecodedTiles(t),this.evictTiles(t),this.pumpQueue())}dispose(){this.generation++,this.cancelAllJobs(),this.clearRecords(),this.renderer.domElement.removeEventListener("webglcontextlost",this.onContextLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.onContextRestored),this.group.removeFromParent()}refreshDesiredTiles(e,t){const n=this.config;if(!n)return;const i=this.selectLevel(e,n);this.currentLevel=i;const s=this.visibleTiles(e,i,n),a=new Map;for(const l of s)if(a.set(l.key,l),!this.records.has(l.key)&&i>this.minimumStreamingLevel(n)){const c=this.parentAddress(l,n);c&&!a.has(c.key)&&a.set(c.key,c)}this.desired=new Set(a.keys());for(const l of a.values()){if(this.records.get(l.key)){this.records.touch(l.key,t);continue}const d=this.queued.get(l.key);if(d){d.priority=l.priority;continue}const h=this.loading.get(l.key);if(h){h.priority=l.priority;continue}this.decoded.some(u=>u.address.key===l.key)||(this.failedUntil.get(l.key)??0)>t||this.enqueue(l)}for(const[l,c]of this.queued)this.desired.has(l)?c.priority=a.get(l)?.priority??c.priority:this.queued.delete(l);for(const[l,c]of this.loading)this.desired.has(l)||c.controller.abort();const o=[];for(const l of this.decoded)this.desired.has(l.address.key)&&l.generation===this.generation?o.push(l):this.releaseImage(l.image);this.decoded=o}selectLevel(e,t){const n=this.renderer.getDrawingBufferSize(new pe),i=Ne.degToRad(e.fov),s=Math.min(Math.PI*1.98,2*Math.atan(Math.tan(i/2)*e.aspect)),a=n.x*(Math.PI*2/Math.max(s,.01))*this.options.resolutionScale,o=this.minimumStreamingLevel(t);let l=t.maxLevel;for(let c=o;c<=t.maxLevel;c++)if(this.levelDimensions(c,t).width>=a){l=c;break}if(this.currentLevel<o)return l;if(l>this.currentLevel){const c=this.levelDimensions(this.currentLevel,t).width;return a>c*1.08?l:this.currentLevel}if(l<this.currentLevel){const c=this.levelDimensions(l,t).width;return a<c*.78?l:this.currentLevel}return l}visibleTiles(e,t,n){const i=this.levelDimensions(t,n),s=n.tileSize??1024,a=Math.ceil(i.width/s),o=Math.ceil(i.height/s),l=[];e.updateMatrixWorld(),this.group.updateMatrixWorld(!0);const c=new nt().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d=new Ua().setFromProjectionMatrix(c),h=new B;e.getWorldDirection(h).normalize();for(let u=0;u<o;u++)for(let f=0;f<a;f++){const g=this.tileBounds(f,u,i.width,i.height,s),p=this.pointOnSphere((g.u0+g.u1)/2,(g.vTop+g.vBottom)/2,this.radiusForLevel(t,n)).clone().applyMatrix4(this.group.matrixWorld);let A=0;for(const[v,S]of[[g.u0,g.vTop],[g.u1,g.vTop],[g.u0,g.vBottom],[g.u1,g.vBottom]]){const y=this.pointOnSphere(v,S,this.radiusForLevel(t,n)).applyMatrix4(this.group.matrixWorld);A=Math.max(A,p.distanceTo(y))}if(!d.intersectsSphere(new li(p,A*1.08)))continue;const C=p.clone().sub(e.position).normalize(),I=Math.acos(Ne.clamp(h.dot(C),-1,1));l.push({key:this.tileKey(t,f,u),level:t,x:f,y:u,cols:a,rows:o,levelWidth:i.width,levelHeight:i.height,priority:I*1e3})}return l}parentAddress(e,t){const n=e.level-1;if(n<this.minimumStreamingLevel(t))return null;const i=this.levelDimensions(n,t),s=t.tileSize??1024,a=Math.floor(e.x/2),o=Math.floor(e.y/2);return{key:this.tileKey(n,a,o),level:n,x:a,y:o,cols:Math.ceil(i.width/s),rows:Math.ceil(i.height/s),levelWidth:i.width,levelHeight:i.height,priority:e.priority-1e4}}enqueue(e){const t={...e,generation:this.generation,controller:new AbortController};this.queued.set(e.key,t)}pumpQueue(){if(this.config)for(;this.loading.size<this.options.maxConcurrentRequests&&this.queued.size;){const e=[...this.queued.values()].sort((t,n)=>t.priority-n.priority)[0];if(!e)return;this.queued.delete(e.key),!(!this.desired.has(e.key)||e.generation!==this.generation)&&(this.loading.set(e.key,e),this.loadJob(e))}}async loadJob(e){const t=this.config;if(!t)return;const n=t.urlTemplate.replace("{level}",String(e.level)).replace("{x}",String(e.x)).replace("{y}",String(e.y));try{const i=await fetch(n,{signal:e.controller.signal,cache:"force-cache",credentials:"same-origin"});if(!i.ok)throw new Error(`Tile HTTP ${i.status}: ${n}`);const s=await this.decode(await i.blob());if(e.controller.signal.aborted||e.generation!==this.generation||!this.desired.has(e.key)){this.releaseImage(s);return}this.decoded.push({address:e,generation:e.generation,image:s})}catch(i){e.controller.signal.aborted||(this.failedUntil.set(e.key,performance.now()+1e4),console.warn("[EquirectangularTilesAdapter] Không tải được tile",n,i))}finally{this.loading.delete(e.key),this.pumpQueue()}}async decode(e){if(typeof createImageBitmap=="function")try{return await createImageBitmap(e,{imageOrientation:"flipY",premultiplyAlpha:"none"})}catch{}const t=URL.createObjectURL(e);try{return await new Promise((n,i)=>{const s=new Image;s.decoding="async",s.onload=()=>n(s),s.onerror=()=>i(new Error("Không thể decode tile panorama.")),s.src=t})}finally{URL.revokeObjectURL(t)}}uploadDecodedTiles(e){const t=this.config;if(!t)return;let n=0;for(;n<this.options.maxUploadsPerFrame&&this.decoded.length;){const i=this.decoded.shift();if(i.generation!==this.generation||!this.desired.has(i.address.key)){this.releaseImage(i.image);continue}if(this.records.has(i.address.key)){this.releaseImage(i.image);continue}const s=new xt(i.image);s.flipY=!(typeof ImageBitmap<"u"&&i.image instanceof ImageBitmap),s.colorSpace=ft,s.minFilter=at,s.magFilter=at,s.generateMipmaps=!1,s.needsUpdate=!0;const a=this.makeTileGeometry(i.address,i.image,t),o=new Xt({uniforms:{map:{value:s},brightness:{value:this.brightness},highlightCompression:{value:this.highlightCompression}},vertexShader:yE,fragmentShader:IE,side:Wt,depthTest:!0,depthWrite:!0,toneMapped:!1}),l=new ze(a,o);l.renderOrder=2+i.address.level/100,this.group.add(l),this.renderer.initTexture(s);const c=this.imageWidth(i.image),d=this.imageHeight(i.image),h=c*d*4;this.releaseImage(i.image),s.image=null,this.records.set(i.address.key,{address:i.address,mesh:l,texture:s,bytes:h,lastUsedAt:e}),n++}}evictTiles(e){const t=[...this.records.entries()].filter(([n])=>!this.desired.has(n)).sort(([,n],[,i])=>n.lastUsedAt-i.lastUsedAt);for(const[n,i]of t){const s=this.records.totalBytes>this.options.maxCacheBytes,a=e-i.lastUsedAt>=this.options.evictionGraceMs;!s&&!a||this.disposeRecord(n,i)}}makeTileGeometry(e,t,n){const i=n.tileSize??1024,s=this.tileBounds(e.x,e.y,e.levelWidth,e.levelHeight,i),a=Math.max(0,n.overlap??0),o=this.imageWidth(t),l=this.imageHeight(t),c=e.x>0?a:0,d=e.x<e.cols-1?a:0,h=e.y>0?a:0,u=e.y<e.rows-1?a:0,f=c/o,g=1-d/o,_=1-h/l,p=u/l,A=12,C=8,I=[],v=[],S=[],y=this.radiusForLevel(e.level,n);for(let M=0;M<=C;M++){const b=M/C,U=Ne.lerp(s.vTop,s.vBottom,b),N=Ne.lerp(_,p,b);for(let G=0;G<=A;G++){const D=G/A,k=Ne.lerp(s.u0,s.u1,D),V=this.pointOnSphere(k,U,y);I.push(V.x,V.y,V.z),v.push(Ne.lerp(f,g,D),N)}}const T=A+1;for(let M=0;M<C;M++)for(let b=0;b<A;b++){const U=M*T+b,N=U+1,G=U+T,D=G+1;S.push(U,G,N,N,G,D)}const E=new Tt;return E.setAttribute("position",new pt(I,3)),E.setAttribute("uv",new pt(v,2)),E.setIndex(S),E.computeBoundingSphere(),E}tileBounds(e,t,n,i,s){const a=Math.min(s,n-e*s),o=Math.min(s,i-t*s),l=e*s/n,c=(e*s+a)/n,d=t*s/i,h=(t*s+o)/i;return{u0:l,u1:c,vTop:1-d,vBottom:1-h}}pointOnSphere(e,t,n){const i=(e-.5)*Math.PI*2,s=(t-.5)*Math.PI,a=Math.cos(s);return new B(-Math.sin(i)*a*n,Math.sin(s)*n,Math.cos(i)*a*n)}radiusForLevel(e,t){const n=this.minimumStreamingLevel(t),i=Math.max(1,t.maxLevel-n),s=Ne.clamp((e-n)/i,0,1);return this.sphereRadius-.22-s*.22}minimumStreamingLevel(e){return Ne.clamp(e.minLevel??Math.ceil(Math.log2(2048))+1,1,e.maxLevel)}levelDimensions(e,t){const n=2**(t.maxLevel-e),i=t.sourceHeight??Math.round(t.sourceWidth/2);return{width:Math.max(1,Math.ceil(t.sourceWidth/n)),height:Math.max(1,Math.ceil(i/n))}}tileKey(e,t,n){return`${e}/${t}/${n}`}imageWidth(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}imageHeight(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}cancelAllJobs(){this.queued.clear();for(const e of this.loading.values())e.controller.abort();this.loading.clear();for(const e of this.decoded)this.releaseImage(e.image);this.decoded=[],this.desired.clear(),this.failedUntil.clear()}clearRecords(){for(const[e,t]of this.records.entries())this.disposeRecord(e,t);this.records.clear()}disposeRecord(e,t){this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.texture.dispose(),this.releaseImage(t.texture.image),t.texture.image=null,this.records.delete(e)}releaseImage(e){e&&(typeof ImageBitmap<"u"&&e instanceof ImageBitmap?e.close():typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement&&(e.src=""))}}const BE=`
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
`,TE=`
  varying vec3 vLocalPos;
  varying vec3 vLocalCam;
  uniform sampler2D map;
  uniform float opacity;
  uniform float radius;
  uniform float brightness;
  uniform float highlightCompression;
  uniform float cameraFov;
  uniform float cameraAspect;
  uniform mat3 localToWorldRotation;

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

    // Apply only a restrained hybrid correction at extreme FOV. A full linear
    // angular (cylindrical) remap reduces edge stretching but makes horizontal
    // architecture visibly bow, which feels more curved instead of flatter.
    // Keeping 82% of the original perspective preserves the spherical/3D feel.
    float flatten = smoothstep(125.0, 150.0, cameraFov) * 0.18;
    // Offset-camera transition effects need the physical sphere ray unchanged.
    flatten *= 1.0 - smoothstep(0.01, 1.0, length(vLocalCam));
    if (flatten > 0.0001) {
      vec3 worldDir = normalize(localToWorldRotation * dir);
      vec3 cameraDir = normalize(mat3(viewMatrix) * worldDir);
      float verticalHalfFov = radians(min(cameraFov, 175.0)) * 0.5;
      float horizontalHalfFov = atan(tan(verticalHalfFov) * cameraAspect);
      horizontalHalfFov = min(horizontalHalfFov, radians(89.0));

      float rayYaw = atan(cameraDir.x, -cameraDir.z);
      float ndcX = clamp(
        tan(rayYaw) / max(tan(horizontalHalfFov), 0.0001),
        -1.0,
        1.0
      );
      // Blend slightly towards a linear angular distribution. This softens
      // only the extreme side stretch without turning the panorama into a
      // visibly cylindrical or flat 2D projection.
      float flattenedYaw = ndcX * horizontalHalfFov;
      float targetYaw = mix(rayYaw, flattenedYaw, flatten);
      float pitch = asin(clamp(cameraDir.y, -1.0, 1.0));
      vec3 flattenedCameraDir = normalize(vec3(
        sin(targetYaw) * cos(pitch),
        sin(pitch),
        -cos(targetYaw) * cos(pitch)
      ));

      // For orthonormal camera/model rotations, row-vector multiplication is
      // the inverse transform and remains compatible with WebGL 1 GLSL.
      vec3 flattenedWorldDir = flattenedCameraDir * mat3(viewMatrix);
      vec3 flattenedLocalDir = flattenedWorldDir * localToWorldRotation;
      dir = normalize(flattenedLocalDir);
    }

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
`;class jn{scene;renderer;imageBitmapLoader;ktx2Loader;panoramaAdapter;sphereA;sphereB;radius;transitionDuration;defaultTransition;isTransitioning=!1;immediateLoadGeneration=0;textureCache=new Map;pendingTextures=new Map;maxCachedTextures;lastTextureInfo=null;get textureInfo(){return this.lastTextureInfo}get tileInfo(){return this.panoramaAdapter.diagnostics}static blankTex=(()=>{const e=new Pa(new Uint8Array([0,0,0,0]),1,1);return e.needsUpdate=!0,e})();makeShaderMat(e){return new Xt({uniforms:{map:{value:jn.blankTex},opacity:{value:e},radius:{value:this.radius},brightness:{value:1.25},highlightCompression:{value:0},cameraFov:{value:75},cameraAspect:{value:1},localToWorldRotation:{value:new Re}},vertexShader:BE,fragmentShader:TE,side:Ot,transparent:!0,depthWrite:!1,toneMapped:!1})}constructor(e,t,n={}){this.scene=e,this.renderer=t,this.imageBitmapLoader=new Ru,this.imageBitmapLoader.setOptions({imageOrientation:"flipY",premultiplyAlpha:"none"}),this.ktx2Loader=new rn().setTranscoderPath("/basis/").setWorkerLimit(1).detectSupport(t),this.radius=n.radius??600,this.transitionDuration=n.transitionDuration??700,this.defaultTransition=n.defaultTransition??"crossfade",this.maxCachedTextures=Math.max(0,Math.floor(n.maxCachedTextures??2));const i=n.segments??128,s=Math.round(i*.75),a=new ur(this.radius,i,s);this.sphereA=new ze(a,this.makeShaderMat(1)),this.sphereB=new ze(a.clone(),this.makeShaderMat(0)),this.sphereA.renderOrder=0,this.sphereB.renderOrder=1,this.sphereB.visible=!1,this.scene.add(this.sphereA),this.scene.add(this.sphereB),this.panoramaAdapter=new wE(this.scene,this.renderer,this.radius,n.tileStreaming)}get busy(){return this.isTransitioning}get transitionStyle(){return this.defaultTransition}setBrightness(e){const t=Math.max(.5,Math.min(2,e));this.sphereA.material.uniforms.brightness.value=t,this.sphereB.material.uniforms.brightness.value=t,this.panoramaAdapter.setBrightness(t)}setHighlightCompression(e){const t=Math.max(0,Math.min(1,e));this.sphereA.material.uniforms.highlightCompression.value=t,this.sphereB.material.uniforms.highlightCompression.value=t,this.panoramaAdapter.setHighlightCompression(t)}setWideView(e,t){for(const n of[this.sphereA,this.sphereB])n.updateMatrixWorld(),n.material.uniforms.cameraFov.value=e,n.material.uniforms.cameraAspect.value=t,n.material.uniforms.localToWorldRotation.value.setFromMatrix4(n.matrixWorld)}setRotation(e){this.sphereA.rotation.y=e,this.panoramaAdapter.setRotation(e)}setMultiResolution(e,t=0){this.panoramaAdapter.configure(e,t)}updateTiles(e,t){this.panoramaAdapter.update(e,t)}async preload(e){if(this.maxCachedTextures===0)return this.loadTexture(e);if(this.textureCache.has(e)){const i=this.textureCache.get(e);return this.textureCache.delete(e),this.textureCache.set(e,i),i}const t=this.pendingTextures.get(e);if(t)return t;const n=this.loadTexture(e);this.pendingTextures.set(e,n);try{return await n}finally{this.pendingTextures.delete(e)}}async setImmediate(e,t=0){const n=++this.immediateLoadGeneration,i=await this.preload(e);if(n!==this.immediateLoadGeneration)return this.maxCachedTextures===0&&this.disposeTexture(i),!1;const s=this.sphereA.material.uniforms.map.value;return this.sphereA.material.uniforms.map.value=i,this.sphereA.material.uniforms.opacity.value=1,this.sphereA.position.set(0,0,0),this.sphereA.rotation.y=t,this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=jn.blankTex,this.maxCachedTextures===0?s!==i&&s!==jn.blankTex&&this.disposeTexture(s):this.trimTextureCache(),!0}setFisheye(e,t){if(e<=0){t.position.set(0,0,0);return}const n=new B(0,0,-1).applyQuaternion(t.quaternion),i=e/2*this.radius;t.position.copy(n).multiplyScalar(-i)}async transition(e,t=this.defaultTransition,n,i,s=0){if(this.isTransitioning)return;this.isTransitioning=!0;const a=await this.preload(e);switch(this.sphereB.rotation.y=s,t){case"forward":await this.doForward(a,n,i);break;case"fly-through":await this.doFlyThrough(a,n,i);break;case"crossfade-pan":await this.doCrossfade(a,i);break;default:await this.doCrossfade(a,i);break}this.isTransitioning=!1}dispose(){const e=new Set(this.textureCache.values());e.add(this.sphereA.material.uniforms.map.value),e.add(this.sphereB.material.uniforms.map.value),e.delete(jn.blankTex),e.forEach(t=>this.disposeTexture(t)),this.textureCache.clear(),this.pendingTextures.clear(),this.ktx2Loader.dispose(),this.panoramaAdapter.dispose(),this.sphereA.geometry.dispose(),this.sphereA.material.dispose(),this.sphereB.geometry.dispose(),this.sphereB.material.dispose()}loadTexture(e){return this.isKtx2Url(e)?this.loadKtx2Texture(e):this.loadBitmapTexture(e)}loadBitmapTexture(e){const t=performance.now();return new Promise((n,i)=>{this.imageBitmapLoader.load(e,s=>{const a=new xt(s);a.flipY=!1,a.colorSpace=ft,a.wrapS=er,a.wrapT=$t,a.minFilter=at,a.magFilter=at,a.generateMipmaps=!1,a.anisotropy=1,a.needsUpdate=!0,this.renderer.initTexture(a),this.maxCachedTextures>0&&(this.textureCache.set(e,a),this.trimTextureCache(a));const o=a.image;o&&(this.lastTextureInfo={url:e,format:"bitmap",width:"naturalWidth"in o?o.naturalWidth:o.width,height:"naturalHeight"in o?o.naturalHeight:o.height,durationMs:performance.now()-t,transferBytes:this.getTransferBytes(e),gpuCompressed:!1}),n(a)},void 0,i)})}async loadKtx2Texture(e){const t=performance.now(),n=await this.ktx2Loader.loadAsync(e);n.colorSpace=ft,n.wrapS=er,n.wrapT=$t,n.minFilter=at,n.magFilter=at,n.anisotropy=1,n.needsUpdate=!0,this.renderer.initTexture(n),this.maxCachedTextures>0&&(this.textureCache.set(e,n),this.trimTextureCache(n));const i=n.image,s=n.mipmaps?.[0];return this.lastTextureInfo={url:e,format:"ktx2",width:i?.width??s?.width??0,height:i?.height??s?.height??0,durationMs:performance.now()-t,transferBytes:this.getTransferBytes(e),gpuCompressed:n.isCompressedTexture===!0},n}async benchmarkKtx2(e,t){const n=this.lastTextureInfo,i=`ktx-bench=${Date.now()}`,s=_=>`${_}${_.includes("?")?"&":"?"}${i}`,a=s(e),o=await this.loadBitmapTexture(a),l={...this.lastTextureInfo};this.textureCache.delete(a),this.disposeTexture(o);const c=s(t),d=await this.loadKtx2Texture(c),h={...this.lastTextureInfo};this.textureCache.delete(c),this.disposeTexture(d),this.lastTextureInfo=n;const u=l.transferBytes>0?(l.transferBytes-h.transferBytes)/l.transferBytes*100:0,f=l.durationMs>0?(l.durationMs-h.durationMs)/l.durationMs*100:0,g=h.gpuCompressed&&u>=-10&&f>=-20;return{bitmap:l,ktx2:h,transferSavingPercent:u,timeSavingPercent:f,recommended:g,reason:g?"KTX2 giảm áp lực GPU mà không làm tải mạng/chờ hiển thị tệ đáng kể.":"Giữ WebP: mẫu KTX2 hiện tại tốn băng thông hoặc thời gian tải nhiều hơn lợi ích GPU."}}isKtx2Url(e){try{return new URL(e,window.location.href).pathname.toLowerCase().endsWith(".ktx2")}catch{return e.split("?")[0]?.toLowerCase().endsWith(".ktx2")??!1}}getTransferBytes(e){const t=new URL(e,window.location.href).href,i=performance.getEntriesByName(t,"resource").at(-1);return i?.encodedBodySize||i?.transferSize||0}useTexture(e){this.sphereA.material.uniforms.map.value=e,this.sphereA.material.uniforms.opacity.value=1,this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=jn.blankTex,this.sphereB.material.uniforms.opacity.value=0,this.trimTextureCache()}trimTextureCache(e){if(this.maxCachedTextures===0||this.textureCache.size<=this.maxCachedTextures)return;const t=new Set([this.sphereA.material.uniforms.map.value,this.sphereB.material.uniforms.map.value]);e&&t.add(e);for(const[n,i]of this.textureCache){if(this.textureCache.size<=this.maxCachedTextures)break;t.has(i)||(this.textureCache.delete(n),this.disposeTexture(i))}}disposeTexture(e){e.dispose();const t=e.image;if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap){t.close();return}typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement&&(t.src=""),e.image=null}doCrossfade(e,t){this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.set(0,0,0),this.sphereB.visible=!0;const n=this.transitionDuration,i=performance.now();return new Promise(s=>{const a=o=>{const l=Math.min((o-i)/n,1),c=l<.5?2*l*l:-1+(4-2*l)*l;this.sphereA.material.uniforms.opacity.value=1-c,this.sphereB.material.uniforms.opacity.value=c,t?.(l),l<1?requestAnimationFrame(a):(this.promoteSphereB(e),s())};requestAnimationFrame(a)})}doForward(e,t,n){this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0;const i=(t?.clone().normalize()??new B(0,0,-1)).multiplyScalar(this.radius*.28);this.sphereB.position.copy(i),this.sphereB.visible=!0;const s=this.transitionDuration,a=performance.now(),o=(l,c,d)=>{const h=Ne.clamp((d-l)/(c-l),0,1);return h*h*h*(h*(h*6-15)+10)};return new Promise(l=>{const c=d=>{const h=Math.min((d-a)/s,1),u=o(.28,.78,h);this.sphereA.material.uniforms.opacity.value=1,this.sphereB.material.uniforms.opacity.value=u,n?.(h),h<1?requestAnimationFrame(c):(this.promoteSphereB(e),l())};requestAnimationFrame(c)})}doFlyThrough(e,t,n){const i=this.radius*.85,a=(t?.clone().normalize()??new B(0,0,-1)).multiplyScalar(i);this.sphereB.material.uniforms.map.value=e,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.copy(a),this.sphereB.visible=!0;const o=this.transitionDuration,l=performance.now();return new Promise(c=>{const d=h=>{const u=Math.min((h-l)/o,1),f=u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2;this.sphereA.material.uniforms.opacity.value=1-f,this.sphereB.material.uniforms.opacity.value=f,n?.(u),u<1?requestAnimationFrame(d):(this.promoteSphereB(e),c())};requestAnimationFrame(d)})}promoteSphereB(e){this.sphereA.material.uniforms.map.value=e,this.sphereA.material.uniforms.opacity.value=1,this.sphereA.position.set(0,0,0),this.sphereA.rotation.y=this.sphereB.rotation.y,this.panoramaAdapter.setRotation(this.sphereB.rotation.y),this.sphereB.visible=!1,this.sphereB.material.uniforms.map.value=jn.blankTex,this.sphereB.material.uniforms.opacity.value=0,this.sphereB.position.set(0,0,0),this.trimTextureCache()}}class Dd{ctx;_initialized=!1;_init(e){this.ctx=e,this._initialized=!0,this.onInit()}_update(e){this._initialized&&this.onUpdate(e)}_destroy(){this.onDestroy(),this._initialized=!1}onInit(){}onUpdate(e){}onDestroy(){}}class Ld{bus;camera;pano;scene;renderer;container;plugins=new Map;rafId=null;lastTime=null;currentScene=null;isTransitioning=!1;introDelay;_introCountdownTimer=null;resizeObserver=null;lastContainerSize={width:0,height:0};enableTiling;constructor(e){this.container=e.container,this.enableTiling=e.enableTiling??!0,this.scene=new au,this.bus=new sE;const t=e.container.clientWidth||window.innerWidth,n=e.container.clientHeight||window.innerHeight;this.renderer=new zu({antialias:e.antialias??!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(e.pixelRatio??Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ca,this.renderer.toneMappingExposure=e.toneMappingExposure??1,this.container.appendChild(this.renderer.domElement),this.camera=new aE(this.container,this.renderer.domElement,this.bus,e.camera??{}),this.pano=new jn(this.scene,this.renderer,e.pano??{}),window.addEventListener("resize",this.onResize),"ResizeObserver"in window&&(this.resizeObserver=new ResizeObserver(i=>{const s=i[0];if(!s)return;const a=Math.round(s.contentRect.width),o=Math.round(s.contentRect.height);a<=0||o<=0||this.resizeTo(a,o)}),this.resizeObserver.observe(this.container)),this.introDelay=e.introDelay??0,this.rafId=requestAnimationFrame(this.loop)}use(e){return this.plugins.has(e.id)?(console.warn(`[View360Engine] Plugin "${e.id}" already registered.`),this):(this.plugins.set(e.id,e),e._init({scene:this.scene,camera:this.camera,renderer:this.renderer,bus:this.bus,container:this.container}),this)}getPlugin(e){return this.plugins.get(e)}async loadScene(e,t=!0){this._introCountdownTimer!==null&&(clearTimeout(this._introCountdownTimer),this._introCountdownTimer=null);const n=this.camera.getYaw(),i=this.camera.getPitch(),s=e.defaultCameraEnabled===!0,a=e.defaultZoomEnabled??s;this.currentScene=e,this.notifyPluginsSceneLoad(e),this.pano.setBrightness(e.brightness??1.25),this.pano.setHighlightCompression(e.highlightCompression??0),this.pano.setMultiResolution(null);const o=e.previewPanorama??e.panorama;if(await this.pano.setImmediate(o,e.panoramaRotation??0)){if(t){const c=s?e.initialYaw??0:n,d=s?e.initialPitch??0:i,h=a?e.initialFov??75:this.camera.getFov();this.camera.setRaw(-Math.PI/2,-Math.PI/2,130),this.introDelay>0&&(this.bus.emit("interaction:lock"),this.bus.emit("intro:countdown:start",{delayMs:this.introDelay}),await new Promise(u=>{const f=this.renderer.domElement,g=_=>{clearTimeout(this._introCountdownTimer),this._introCountdownTimer=null,f.removeEventListener("click",g);const p=f.getBoundingClientRect(),A=(_.clientX-p.left)/p.width*2-1,C=-((_.clientY-p.top)/p.height)*2+1,I=130*Math.PI/180/2,v=c+A*I*(p.width/p.height),S=d-C*I;this.bus.emit("intro:countdown:skip",{yaw:v,pitch:S}),u()};f.addEventListener("click",g),this._introCountdownTimer=setTimeout(()=>{f.removeEventListener("click",g),this._introCountdownTimer=null,u()},this.introDelay)}),this.bus.emit("interaction:unlock")),await this.playLittlePlanetIntro(c,d,h)}else this.camera.setOrientation(s?e.initialYaw??0:n,s?e.initialPitch??0:i,a?e.initialFov??75:this.camera.getFov());this.pano.setMultiResolution(this.enableTiling?e.multiRes??null:null,e.panoramaRotation??0),this.bus.emit("scene:loaded",{scene:e}),this.notifyPluginsSceneReady(e)}}setSceneRotation(e){const t=Number.isFinite(e)?e:0;this.currentScene&&(this.currentScene.panoramaRotation=t),this.pano.setRotation(t),this.bus.emit("scene:rotation",{rotation:t})}async navigateTo(e,t,n,i){if(this.isTransitioning)return;this.isTransitioning=!0;const s=this.currentScene;this.bus.emit("scene:transition:start",{from:s,to:e}),this.notifyPluginsSceneLoad(e),this.pano.setBrightness(e.brightness??1.25),this.pano.setHighlightCompression(e.highlightCompression??0),this.pano.setMultiResolution(null);const a=n??this.camera.getYaw(),o=i??this.camera.getPitch(),l=new(await Wd(async()=>{const{Vector3:T}=await Promise.resolve().then(()=>rE);return{Vector3:T}},void 0,import.meta.url)).Vector3(-Math.sin(a)*Math.cos(o),Math.sin(o),-Math.cos(a)*Math.cos(o)),c=this.camera.camera.position.clone(),d=l.clone().multiplyScalar(this.pano.radius*.85),h=this.camera.getYaw(),u=this.camera.getPitch(),f=e.defaultCameraEnabled===!0,g=e.defaultZoomEnabled??f,_=f?e.initialYaw??0:h,p=f?e.initialPitch??0:u,A=g?e.initialFov??75:this.camera.getFov(),C=Math.atan2(Math.sin(_-h),Math.cos(_-h)),I=this.camera.getFov(),v=this.pano.radius*.28,S=t??this.pano.transitionStyle,y=e.previewPanorama??e.panorama;await this.pano.transition(y,S,l,T=>{const E=T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2;if((f||g)&&this.camera.setRaw(h+C*E,u+(p-u)*E,I+(A-I)*E),S==="forward"){this.camera.camera.position.copy(l).multiplyScalar(v*E);return}if(S!=="fly-through")return;this.camera.camera.position.lerpVectors(c,d,E*.88);const M=I+Math.sin(T*Math.PI)*20;this.camera.camera.fov=M,this.camera.camera.updateProjectionMatrix()},e.panoramaRotation??0),this.camera.camera.position.set(0,0,0),this.camera.camera.fov=I,this.camera.camera.updateProjectionMatrix(),this.camera.setOrientation(_,p,A),this.currentScene=e,this.pano.setMultiResolution(this.enableTiling?e.multiRes??null:null,e.panoramaRotation??0),this.isTransitioning=!1,this.bus.emit("scene:transition:end",{scene:e}),this.notifyPluginsSceneReady(e)}async upgradeCurrentPanorama(e,t){if(!t||this.currentScene?.id!==e||this.isTransitioning)return!1;const n=await this.pano.preload(t);return this.currentScene?.id!==e||this.isTransitioning?!1:(this.pano.useTexture(n),!0)}async playLittlePlanetIntro(e=0,t=0,n=75){const s=Ne.clamp(n,30,120),a=-Math.PI/2,o=e+Math.PI/2,l=2,c=2500,d=performance.now(),h=u=>u<.5?2*u*u:-1+(4-2*u)*u;return this.camera.setRaw(o,a,130),this.pano.setFisheye(l,this.camera.camera),new Promise(u=>{const f=g=>{const _=Math.min((g-d)/c,1),p=h(_),A=130+(s-130)*p,C=o+(e-o)*p,I=a+(t-a)*p,v=l*(1-p);this.camera.setRaw(C,I,A),this.pano.setFisheye(v,this.camera.camera),_<1?requestAnimationFrame(f):(this.camera.camera.position.set(0,0,0),this.camera.setOrientation(e,t,s),this.bus.emit("intro:end"),u())};requestAnimationFrame(f)})}getCurrentScene(){return this.currentScene}benchmarkKtx2(e,t){return this.pano.benchmarkKtx2(e,t)}static QUALITY_DPR={performance:1,balanced:1.5,quality:2,native:1/0};setQualityMode(e){const t=Ld.QUALITY_DPR[e]??2,n=t===1/0?window.devicePixelRatio:Math.min(window.devicePixelRatio,t);this.renderer.setPixelRatio(n);const i=this.container.clientWidth||window.innerWidth,s=this.container.clientHeight||window.innerHeight;this.renderer.setSize(i,s)}getDiagnostics(){const e=this.renderer.getContext(),t=this.renderer.capabilities,n=this.renderer.domElement,i=this.pano.textureInfo,s=this.pano.tileInfo,a=t.maxTextureSize,o=s.enabled?s.sourceWidth:i?.width??0,l=s.enabled?s.sourceHeight:i?.height??0,c=this.renderer.getPixelRatio(),d=s.enabled?o:Math.min(o,a),h=s.enabled?l:Math.min(l,a),u=this.camera.getFov()*Math.PI/180,f=n.width,p=(s.enabled?s.sourceWidth:o)*(u/(2*Math.PI))/f;return{srcWidth:o,srcHeight:l,gpuWidth:d,gpuHeight:h,maxTexSize:a,isCapped:!s.enabled&&(o>a||l>a),canvasCssW:n.clientWidth,canvasCssH:n.clientHeight,canvasGlW:n.width,canvasGlH:n.height,dpr:c,deviceDpr:window.devicePixelRatio,fov:this.camera.getFov(),pixelDensity:+p.toFixed(2),textureUrl:i?.url??"",textureFormat:i?.format??"bitmap",textureLoadMs:i?.durationMs??0,textureTransferBytes:i?.transferBytes??0,gpuCompressed:i?.gpuCompressed??!1,tilingEnabled:s.enabled,tileLevel:s.level,loadedTiles:s.loadedTiles,pendingTiles:s.pendingTiles,queuedTiles:s.queuedTiles,decodedTiles:s.decodedTiles,tileCacheBytes:s.cacheBytes,tileCacheBudgetBytes:s.cacheBudgetBytes,vendor:e.getParameter(e.VENDOR),renderer:e.getParameter(e.RENDERER)}}destroy(){this.rafId!==null&&cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),this.resizeObserver?.disconnect(),this.resizeObserver=null,this.plugins.forEach(e=>e._destroy()),this.plugins.clear(),this.camera.dispose(),this.pano.dispose(),this.bus.emit("destroy"),this.bus.clear(),this.renderer.dispose(),this.renderer.domElement.remove()}loop=e=>{this.rafId=requestAnimationFrame(this.loop);const t=this.lastTime!==null?(e-this.lastTime)/1e3:0;this.lastTime=e,this.isTransitioning||this.camera.update(),this.plugins.forEach(n=>n._update(t)),this.pano.setWideView(this.camera.getFov(),this.camera.camera.aspect),this.pano.updateTiles(this.camera.camera,e),this.renderer.render(this.scene,this.camera.camera)};onResize=()=>{const e=this.container.getBoundingClientRect();this.resizeTo(Math.round(e.width)||window.innerWidth,Math.round(e.height)||window.innerHeight)};resizeTo(e,t){e===this.lastContainerSize.width&&t===this.lastContainerSize.height||(this.lastContainerSize={width:e,height:t},this.camera.onResize(e,t),this.renderer.setSize(e,t,!0))}notifyPluginsSceneLoad(e){this.plugins.forEach(t=>t.onSceneLoad?.(e))}notifyPluginsSceneReady(e){this.plugins.forEach(t=>t.onSceneReady?.(e))}}const th=new B,bE=new on,nh=new B;class RE extends Lt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const yn=new nt,DE=new nt;class LE{constructor(e={}){const t=this;let n,i,s,a;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const d=document.createElement("div");d.style.transformStyle="preserve-3d",c.appendChild(d),this.getSize=function(){return{width:n,height:i}},this.render=function(p,A){const C=A.projectionMatrix.elements[5]*a;A.view&&A.view.enabled?(c.style.transform=`translate( ${-A.view.offsetX*(n/A.view.width)}px, ${-A.view.offsetY*(i/A.view.height)}px )`,c.style.transform+=`scale( ${A.view.fullWidth/A.view.width}, ${A.view.fullHeight/A.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld();let I,v;A.isOrthographicCamera&&(I=-(A.right+A.left)/2,v=(A.top+A.bottom)/2);const S=A.view&&A.view.enabled?A.view.height/A.view.fullHeight:1,y=A.isOrthographicCamera?`scale( ${S} )scale(`+C+")translate("+h(I)+"px,"+h(v)+"px)"+u(A.matrixWorldInverse):`scale( ${S} )translateZ(`+C+"px)"+u(A.matrixWorldInverse),E=(A.isPerspectiveCamera?"perspective("+C+"px) ":"")+y+"translate("+s+"px,"+a+"px)";o.camera.style!==E&&(d.style.transform=E,o.camera.style=E),_(p,p,A)},this.setSize=function(p,A){n=p,i=A,s=n/2,a=i/2,l.style.width=p+"px",l.style.height=A+"px",c.style.width=p+"px",c.style.height=A+"px",d.style.width=p+"px",d.style.height=A+"px"};function h(p){return Math.abs(p)<1e-10?0:p}function u(p){const A=p.elements;return"matrix3d("+h(A[0])+","+h(-A[1])+","+h(A[2])+","+h(A[3])+","+h(A[4])+","+h(-A[5])+","+h(A[6])+","+h(A[7])+","+h(A[8])+","+h(-A[9])+","+h(A[10])+","+h(A[11])+","+h(A[12])+","+h(-A[13])+","+h(A[14])+","+h(A[15])+")"}function f(p){const A=p.elements;return"translate(-50%,-50%)"+("matrix3d("+h(A[0])+","+h(A[1])+","+h(A[2])+","+h(A[3])+","+h(-A[4])+","+h(-A[5])+","+h(-A[6])+","+h(-A[7])+","+h(A[8])+","+h(A[9])+","+h(A[10])+","+h(A[11])+","+h(A[12])+","+h(A[13])+","+h(A[14])+","+h(A[15])+")")}function g(p){p.isCSS3DObject&&(p.element.style.display="none");for(let A=0,C=p.children.length;A<C;A++)g(p.children[A])}function _(p,A,C,I){if(p.visible===!1){g(p);return}if(p.isCSS3DObject){const v=p.layers.test(C.layers)===!0,S=p.element;if(S.style.display=v===!0?"":"none",v===!0){p.onBeforeRender(t,A,C);let y;p.isCSS3DSprite?(yn.copy(C.matrixWorldInverse),yn.transpose(),p.rotation2D!==0&&yn.multiply(DE.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(th,bE,nh),yn.setPosition(th),yn.scale(nh),yn.elements[3]=0,yn.elements[7]=0,yn.elements[11]=0,yn.elements[15]=1,y=f(yn)):y=f(p.matrixWorld);const T=o.objects.get(p);if(T===void 0||T.style!==y){S.style.transform=y;const E={style:y};o.objects.set(p,E)}S.parentNode!==d&&d.appendChild(S),p.onAfterRender(t,A,C)}}for(let v=0,S=p.children.length;v<S;v++)_(p.children[v],A,C)}}}const PE=520,UE=120,FE=580,ih=256,Fs=52;class Pd{supports(e){return e.plugin===this.markerType}createObject(e){const t=document.createElement("canvas");t.width=ih,t.height=ih;const n=t.getContext("2d");this.drawSprite(n,e.label||this.style.label);const i=new Jr(t);i.colorSpace=ft;const s=new ml({map:i,depthTest:!1,transparent:!0,opacity:0}),a=new ga(s);return this.repositionObject(a,e.yaw,e.pitch),a.scale.set(Fs,Fs,1),a.renderOrder=999,a.userData={marker:e,baseScale:Fs,markerType:this},a}updateObject(e,t,n,i,s,a){const l=(e.userData.baseScale??Fs)*(n?s:1)*i;e.scale.set(l,l,1)}repositionObject(e,t,n){this.positionOnSphere(e,t,n)}positionOnSphere(e,t,n,i){const s=Ne.clamp(Number.isFinite(i)?i:PE,UE,FE);e.position.set(-s*Math.sin(t)*Math.cos(n),s*Math.sin(n),-s*Math.cos(t)*Math.cos(n))}updateProjection(e,t){}playActivationAnimation(e){return Promise.resolve()}disposeObject(e){e instanceof ga&&(e.material.map?.dispose(),e.material.dispose())}drawSprite(e,t){e.save(),e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=14,e.shadowOffsetY=5,e.beginPath(),e.arc(128,88,50,0,Math.PI*2),e.fillStyle=this.style.color,e.fill(),e.shadowColor="transparent",e.lineWidth=5,e.strokeStyle="rgba(255,255,255,0.9)",e.stroke(),e.restore(),e.save(),e.fillStyle="#fff",e.font='900 36px "Outfit", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(this.style.icon,128,88),e.restore(),e.save(),e.font='600 20px "Be Vietnam Pro", sans-serif';const n=Math.max(110,e.measureText(t).width+28),i=34,s=128-n/2,a=170-i/2,o=8;e.beginPath(),e.moveTo(s+o,a),e.arcTo(s+n,a,s+n,a+i,o),e.arcTo(s+n,a+i,s,a+i,o),e.arcTo(s,a+i,s,a,o),e.arcTo(s,a,s+n,a,o),e.closePath(),e.fillStyle="rgba(12,12,12,0.88)",e.fill(),e.lineWidth=1.5,e.strokeStyle="rgba(255,255,255,0.2)",e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(t,128,170),e.restore()}}const To=new on,rh=new on;class NE extends Pd{repositionObject(e,t,n){const i=e.userData.marker;this.positionOnSphere(e,t,n,i?.sphereRadius),e.lookAt(0,0,0),i&&this.applyRotation(e,i)}applyRotation(e,t){const n=this.getRotation(t);n.z&&e.rotateZ(n.z),n.x&&e.rotateX(n.x),n.y&&e.rotateY(n.y)}faceCamera(e,t){t.getWorldQuaternion(To),e.parent?(e.parent.getWorldQuaternion(rh),e.quaternion.copy(rh).invert().multiply(To)):e.quaternion.copy(To)}getRotation(e){return new an(e.rotX??0,e.rotY??0,e.rotZ??0,"ZXY")}getScale(e){return new B(this.normalizeScale(e.scaleX),this.normalizeScale(e.scaleY),this.normalizeScale(e.scaleZ))}normalizeScale(e){return Ne.clamp(Number.isFinite(e)?e:1,.1,10)}applyHoverScale(e,t,n,i,s){e.scale.copy(t).multiply(this.getScale(n)),i&&e.scale.multiplyScalar(s)}}class Ud extends NE{getScale(e){return new B(this.normalizeScale(e.scaleX),this.normalizeScale(e.scaleY),1)}}const bo=new B,sh=new B;class ka extends Ud{markerType="navigation";style={color:"#1d6fa8",icon:"↑",label:"Điểm đến"};meshes=new Map;imageCache=new Map;fixedMode;variants;showLeaderLine;navigationColor="#2388e8";titleFontSize=86;iconHitMargin=5;canvasWidth=256;canvasHeight=256;defaultIconWidth=62;defaultIconHeight=65;constructor(e,t=!0,n=[]){super(),this.fixedMode=e,this.showLeaderLine=t,this.variants=n}createObject(e){if(this.variants.length)return(this.variants.find(g=>g.supports(e))??this.variants[0]).createObject(e);const t=this.resolveMode(e),n=document.createElement("canvas");n.width=this.canvasWidth,n.height=this.canvasHeight;const i=n.getContext("2d"),s=new Jr(n);s.colorSpace=ft;const a=this.resolveColor(e),o=e.label??e.name??"",l=this.resolveLabelFont(e.labelFont),c=e.iconSize??this.defaultIconHeight,d=e.iconSize??this.defaultIconWidth;this.drawIcon(i,n,a,0,!1);const h=new zn(d,c),u=new ze(h,new Rn({map:s,transparent:!0,depthTest:!1,side:Wt,opacity:0}));u.renderOrder=999,u.userData={marker:e,markerType:this},this.restrictRaycastToIcon(u,n),this.showLeaderLine&&o.trim()&&u.add(this.createTitleObject(e,o,l,d,c)),this.repositionObject(u,e.yaw,e.pitch);const f={canvas:n,context:i,texture:s,time:0,baseQuaternion:u.quaternion.clone(),basePosition:u.position.clone(),mode:t,label:o};return this.meshes.set(u,f),u}createTitleObject(e,t,n,i,s){const a=document.createElement("canvas");a.width=1600,a.height=300;const o=a.getContext("2d");this.drawLeaderLabel(o,t,n,18,238,this.navigationColor);const l=new Jr(a);l.colorSpace=ft;const c=this.getScale(e),d=s,h=d*a.width/a.height,u=new ze(new zn(h/c.x,d/c.y),new Rn({map:l,transparent:!0,depthTest:!1,side:Wt,opacity:0}));return u.position.set(i/2+h/(2*c.x)-22/c.x,0,1),u.renderOrder=1e3,u.userData.navigationTitle=!0,u.raycast=()=>{},u}restrictRaycastToIcon(e,t){const n=this.getIconHitBounds();if(!n)return;const i=e.raycast.bind(e);e.raycast=(s,a)=>{const o=[];i(s,o);for(const l of o){if(!l.uv)continue;const c=Math.floor(l.uv.x*t.width),d=Math.floor((1-l.uv.y)*t.height);!(c<n.left-this.iconHitMargin||c>n.right+this.iconHitMargin||d<n.top-this.iconHitMargin||d>n.bottom+this.iconHitMargin)&&a.push(l)}}}getIconHitBounds(){return null}resolveColor(e){return e.pinColor??"#171717"}drawIcon(e,t,n,i,s){}updateProjection(e,t){e.getWorldPosition(bo),sh.copy(bo).applyMatrix4(t.matrixWorldInverse);const n=bo.distanceTo(t.position);if(n<=0)return;const i=Ne.clamp(-sh.z/n,.2,1);e.scale.multiplyScalar(i)}updateObject(e,t,n,i,s,a){if(!(e instanceof ze))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker,c=this.resolveColor(l);this.syncTitleOpacity(e),this.drawIcon(o.context,o.canvas,c,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new B(1,1,1),l,!1,s)}syncTitleOpacity(e){const t=e.material.opacity;for(const n of e.children)n instanceof ze&&n.userData.navigationTitle&&(n.material.opacity=t)}repositionObject(e,t,n){if(super.repositionObject(e,t,n),e instanceof ze){const i=this.meshes.get(e);i?.baseQuaternion.copy(e.quaternion),i?.basePosition.copy(e.position)}}getRotation(e){const t=this.resolveMode(e)==="arrow";return new an(e.rotX??(t?Math.PI/3:0),e.rotY??0,e.rotZ??e.rotation??0,"ZXY")}getScale(e){const t=this.resolveMode(e)==="arrow";return new B(this.normalizeScale(e.scaleX??(t?1.6:1)),this.normalizeScale(e.scaleY??1),1)}disposeObject(e){e instanceof ze&&(e.traverse(t=>{if(!(t instanceof ze))return;const n=t.material;n.map?.dispose(),n.dispose(),t.geometry.dispose()}),this.meshes.delete(e))}resolveMode(e){if(this.fixedMode)return this.fixedMode;const t=e.icon;return t==="local"||t==="location-1"||t==="pin"?"location-1":t==="drone"||t==="location-2"||t==="pin-top"||t==="anchor"?"location-2":"arrow"}drawLeaderLabel(e,t,n,i,s,a){const o=t.trim()||"Điểm đến";e.font=`700 ${this.titleFontSize}px ${n}`;const l=Math.min(e.measureText(o).width,1250),c=145,d=Ne.degToRad(65),h=i+Math.abs(s-c)/Math.tan(d),u=h+28,f=c-18;e.strokeStyle=a,e.fillStyle=a,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.arc(i,s,9,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(i+7,s-5),e.lineTo(h,c),e.lineTo(u+l,c),e.stroke(),e.save(),e.shadowColor="rgba(0,0,0,.75)",e.shadowBlur=7,e.fillStyle="#fff",e.textAlign="left",e.textBaseline="alphabetic",e.font=`700 ${this.titleFontSize}px ${n}`,e.fillText(o,u,f,1250),e.restore()}resolveLabelFont(e){switch(e){case"outfit":return'"Outfit", system-ui, sans-serif';case"montserrat":return'"Montserrat", "Be Vietnam Pro", sans-serif';case"serif":return'Georgia, "Times New Roman", serif';default:return'"Be Vietnam Pro", system-ui, sans-serif'}}drawLocation2Path(e,t,n,i,s){e.beginPath(),e.moveTo(t,n-i),e.bezierCurveTo(t+i*.9,n-i,t+i,n-4,t+i*.72,n+30),e.bezierCurveTo(t+i*.38,n+67,t+13,n+75,t,s),e.bezierCurveTo(t-13,n+75,t-i*.38,n+67,t-i*.72,n+30),e.bezierCurveTo(t-i,n-4,t-i*.9,n-i,t,n-i),e.closePath()}drawPinTop(e,t,n,i,s,a,o){const l=t.width,c=t.height;e.clearRect(0,0,l,c);const d=l/2,h=36,u=4,f=8,g=130,_=150,p=d-g/2,A=u+h+f,C=A+_+30;if(i){e.save();const U=22;e.font=`bold ${U}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,e.textAlign="center",e.textBaseline="middle";const N=e.measureText(i),G=18,D=l-12,k=Math.min(N.width+G*2,D),V=d-k/2,W=u;this.roundRect(e,V,W,k,h,9),e.fillStyle=a?"rgba(70, 90, 110, 0.98)":"rgba(90, 110, 130, 0.88)",e.fill(),e.fillStyle="#ffffff",e.fillText(i,d,W+h/2+1,k-G*2),e.restore()}const I=1+Math.sin(s*3)*.015,v=d,S=A+_/2;e.save(),e.translate(v,S),e.scale(I,I),e.translate(-v,-S),e.save(),e.shadowColor="rgba(0,0,0,0.35)",e.shadowBlur=14,e.shadowOffsetY=5,this.drawOvalPinPath(e,p,A,g,_,C),e.fillStyle="#ffffff",e.fill(),e.restore(),a&&(e.save(),e.shadowColor="rgba(255,255,255,0.7)",e.shadowBlur=22,this.drawOvalPinPath(e,p,A,g,_,C),e.fillStyle="#ffffff",e.fill(),e.restore()),this.drawOvalPinPath(e,p,A,g,_,C),e.fillStyle="#ffffff",e.fill(),this.drawOvalPinPath(e,p,A,g,_,C),e.strokeStyle=a?"rgba(170, 195, 220, 1)":"rgba(200, 210, 220, 0.9)",e.lineWidth=a?3:2,e.stroke();const y=8,T=p+y,E=A+y,M=g-y*2,b=_-y*2;if(e.save(),this.ovalPath(e,T,E,M,b),e.clip(),o&&o.complete&&o.naturalWidth>0)this.drawCoverImage(e,o,T+M/2,E+b/2,M,b);else{const U=e.createLinearGradient(T,E,T,E+b);U.addColorStop(0,"#4a90c4"),U.addColorStop(.55,"#7fb8dd"),U.addColorStop(1,"#2a5a7a"),e.fillStyle=U,e.fillRect(T,E,M,b)}e.restore(),e.restore()}drawOvalPinPath(e,t,n,i,s,a){const o=t+i/2,l=n+s/2,c=i/2,d=s/2,h=16,u=n+s-6;e.beginPath();const f=Math.PI/2-Math.asin(Math.min(h/c,1)),g=Math.PI/2+Math.asin(Math.min(h/c,1));e.ellipse(o,l,c,d,0,f,g,!1),e.lineTo(o,a),e.lineTo(o+c*Math.sin(Math.asin(Math.min(h/c,1))),u),e.closePath()}ovalPath(e,t,n,i,s){e.beginPath(),e.ellipse(t+i/2,n+s/2,i/2,s/2,0,0,Math.PI*2),e.closePath()}roundRect(e,t,n,i,s,a){const o=Math.min(a,i/2,s/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+i,n,t+i,n+s,o),e.arcTo(t+i,n+s,t,n+s,o),e.arcTo(t,n+s,t,n,o),e.arcTo(t,n,t+i,n,o),e.closePath()}drawCoverImage(e,t,n,i,s,a){const o=t.naturalWidth/t.naturalHeight,l=s/a;let c,d;o>l?(d=a,c=d*o):(c=s,d=c/o),e.drawImage(t,n-c/2,i-d/2,c,d)}async loadIcon(e){const t=this.imageCache.get(e);return t||new Promise(n=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{this.imageCache.set(e,i),n(i)},i.onerror=()=>{const s=new Image;s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",s.onload=()=>n(s)},i.src=e})}}class QE extends ka{canvasWidth=256;canvasHeight=256;defaultIconWidth=62;defaultIconHeight=65;titleFontSize=124;titleOffsetY=70;arrowAnchor=new B(0,0,0);depthTravelPerVerticalUnit=.22;constructor(e=!0){super("arrow",e)}createObject(e){const t=super.createObject(e);if(!(t instanceof ze))return t;const n=t.children.find(a=>a.userData.navigationTitle);n&&t.remove(n);const i=new en;i.position.copy(t.position),i.quaternion.copy(t.quaternion),i.userData={...t.userData,arrowIcon:t,navigationTitle:n},t.position.copy(this.arrowAnchor),t.quaternion.identity(),i.add(t),n&&i.add(n);const s=n?.userData.fixedLocalPosition;if(s instanceof B){const a=Math.max(0,s.y-this.arrowAnchor.y);i.userData.animationAmplitude=a*this.depthTravelPerVerticalUnit}else i.userData.animationAmplitude=0;return i}getScale(e){return new B(this.normalizeScale(e.scaleX??1.6),this.normalizeScale(e.scaleY??1),1)}drawIcon(e,t,n,i,s){e.clearRect(0,0,t.width,t.height),e.save(),e.lineWidth=s?42:40,e.lineCap="round",e.lineJoin="round",e.strokeStyle="#fff",e.shadowColor=s?"rgba(220,240,255,.95)":"rgba(220,240,255,.78)",e.shadowBlur=s?22:17,e.beginPath(),e.moveTo(37,173),e.lineTo(128,106),e.lineTo(219,173),e.stroke(),e.restore()}createTitleObject(e,t,n,i,s){const a=document.createElement("canvas");a.width=1200,a.height=220;const o=a.getContext("2d"),l=t.trim()||"Điểm đến";o.font=`700 ${this.titleFontSize}px ${n}`,o.textAlign="center",o.textBaseline="middle",o.shadowColor="rgba(0,0,0,.82)",o.shadowBlur=10,o.fillStyle="#fff",o.fillText(l,a.width/2,a.height/2,a.width-40);const c=new Jr(a);c.colorSpace=ft;const d=this.getScale(e),h=28,u=h*a.width/a.height,f=new ze(new zn(u/d.x,h/d.y),new Rn({map:c,transparent:!0,depthTest:!1,side:Wt,opacity:0})),g=new B(this.arrowAnchor.x,this.arrowAnchor.y+s/2+this.titleOffsetY/d.y,1);return f.position.copy(g),f.renderOrder=1e3,f.userData.navigationTitle=!0,f.userData.fixedLocalPosition=g.clone(),f.raycast=()=>{},f}updateObject(e,t,n,i,s,a){const o=e.userData.arrowIcon;if(!(o instanceof ze))return;const l=this.meshes.get(o);if(!l)return;l.time+=t;const c=e.userData.marker;this.drawIcon(l.context,l.canvas,this.resolveColor(c),l.time,n),l.texture.needsUpdate=!0,e.scale.set(1,1,1),this.applyHoverScale(o,new B(1,1,1),c,!1,s);const d=o.material.opacity,h=e.userData.navigationTitle;h instanceof ze&&(h.material.opacity=d,this.faceCamera(h,a));const u=l.time*.72%1,f=u*u*(3-2*u),g=Number(e.userData.animationAmplitude)||0,_=f*g;o.position.copy(this.arrowAnchor),o.position.z-=_,o.quaternion.identity()}disposeObject(e){const t=e.userData.arrowIcon;e.traverse(n=>{if(!(n instanceof ze))return;const i=n.material;i.map?.dispose(),i.dispose(),n.geometry.dispose()}),t instanceof ze&&this.meshes.delete(t)}supports(e){return e.plugin==="navigation"&&!["local","drone","location-1","location-2","pin","pin-top","anchor"].includes(e.icon??"arrow")}}const ah=new B,oh=new on;class OE extends ka{canvasWidth=300;canvasHeight=300;defaultIconWidth=65;defaultIconHeight=65;navigationColor="#2388e8";titleFontSize=64;exitDuration=280;exitDistance=46;exitAnimations=new WeakMap;constructor(e=!0){super("location-1",e)}getScale(e){return new B(this.normalizeScale(e.scaleX??1),this.normalizeScale(e.scaleY??.8),1)}resolveColor(){return this.navigationColor}getIconHitBounds(){return{left:86,top:32,right:214,bottom:252}}drawIcon(e,t,n,i,s){e.clearRect(0,0,t.width,t.height);const a=1+Math.sin(i*3)*.018;e.save(),e.translate(150,132),e.scale(a,a),e.translate(-150,-132),e.fillStyle=n,e.shadowColor=s?"rgba(255,255,255,.75)":"rgba(0,0,0,.45)",e.shadowBlur=s?24:12,e.beginPath(),e.moveTo(150,250),e.bezierCurveTo(130,215,86,167,86,98),e.arc(150,98,64,Math.PI,0),e.bezierCurveTo(214,167,170,215,150,250),e.fill(),e.shadowColor="transparent",e.beginPath(),e.arc(150,98,27,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.restore()}playActivationAnimation(e){const t=this.exitAnimations.get(e);if(t)return t.promise;const n=e.children.find(o=>o.userData.navigationTitle);let i;const s=new Promise(o=>{i=o}),a={startedAt:performance.now(),duration:this.exitDuration,titlePosition:n?.position.clone(),promise:s};return this.exitAnimations.set(e,a),window.setTimeout(i,this.exitDuration),s}updateObject(e,t,n,i,s,a){if(!(e instanceof ze))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker;this.drawIcon(o.context,o.canvas,this.navigationColor,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new B(1,1,1),l,!1,1),this.faceCamera(e,a),this.syncTitleOpacity(e);const c=this.exitAnimations.get(e);if(!c)return;const d=Ne.clamp((performance.now()-c.startedAt)/c.duration,0,1),h=1-Math.pow(1-d,3),u=this.exitDistance*h;a.getWorldQuaternion(oh),ah.set(1,0,0).applyQuaternion(oh).normalize(),e.position.copy(o.basePosition).addScaledVector(ah,-u);const f=e.children.find(g=>g.userData.navigationTitle);f&&c.titlePosition&&(f.position.copy(c.titlePosition),f.position.x+=u*2/this.getScale(l).x)}supports(e){return e.plugin==="navigation"&&["local","location-1","pin"].includes(e.icon??"")}}const lh=new B,ch=new on;class GE extends ka{canvasWidth=300;canvasHeight=300;defaultIconWidth=65;defaultIconHeight=65;navigationColor="#2388e8";titleFontSize=64;exitDuration=280;exitDistance=46;exitAnimations=new WeakMap;constructor(e=!0){super("location-2",e)}resolveColor(){return this.navigationColor}getIconHitBounds(){return{left:38,top:22,right:278,bottom:202}}drawIcon(e,t,n,i,s){e.clearRect(0,0,t.width,t.height);const a=1+Math.sin(i*3)*.015;e.save(),e.translate(150,90),e.scale(a,a),e.translate(-150,-90),e.strokeStyle=n,e.fillStyle=n,e.lineCap="round",e.lineJoin="round",e.shadowColor=s?"rgba(255,255,255,.7)":"rgba(0,0,0,.4)",e.shadowBlur=s?22:10,e.lineWidth=17,e.beginPath(),e.moveTo(116,100),e.lineTo(66,75),e.moveTo(184,100),e.lineTo(234,75),e.stroke(),e.lineWidth=10,e.beginPath(),e.moveTo(66,75),e.lineTo(66,42),e.moveTo(234,75),e.lineTo(234,42),e.stroke(),e.beginPath(),e.ellipse(66,37,43,10,0,0,Math.PI*2),e.ellipse(234,37,43,10,0,0,Math.PI*2),e.fill(),this.drawDroneRoundRect(e,108,68,84,70,18),e.fill(),e.beginPath(),e.arc(150,105,20,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(150,105,13,0,Math.PI*2),e.fillStyle=n,e.fill(),e.strokeStyle=n,e.lineWidth=13,e.beginPath(),e.moveTo(129,134),e.lineTo(102,190),e.moveTo(171,134),e.lineTo(198,190),e.stroke(),e.restore()}playActivationAnimation(e){const t=this.exitAnimations.get(e);if(t)return t.promise;const n=e.children.find(o=>o.userData.navigationTitle);let i;const s=new Promise(o=>{i=o}),a={startedAt:performance.now(),duration:this.exitDuration,titlePosition:n?.position.clone(),promise:s};return this.exitAnimations.set(e,a),window.setTimeout(i,this.exitDuration),s}updateObject(e,t,n,i,s,a){if(!(e instanceof ze))return;const o=this.meshes.get(e);if(!o)return;o.time+=t;const l=e.userData.marker;this.drawIcon(o.context,o.canvas,this.navigationColor,o.time,n),o.texture.needsUpdate=!0,this.applyHoverScale(e,new B(1,1,1),l,!1,1),this.faceCamera(e,a),this.syncTitleOpacity(e);const c=this.exitAnimations.get(e);if(!c)return;const d=Ne.clamp((performance.now()-c.startedAt)/c.duration,0,1),h=1-Math.pow(1-d,3),u=this.exitDistance*h;a.getWorldQuaternion(ch),lh.set(1,0,0).applyQuaternion(ch).normalize(),e.position.copy(o.basePosition).addScaledVector(lh,-u);const f=e.children.find(g=>g.userData.navigationTitle);f&&c.titlePosition&&(f.position.copy(c.titlePosition),f.position.x+=u*2/this.getScale(l).x)}drawDroneRoundRect(e,t,n,i,s,a){const o=Math.min(a,i/2,s/2);e.beginPath(),e.moveTo(t+o,n),e.arcTo(t+i,n,t+i,n+s,o),e.arcTo(t+i,n+s,t,n+s,o),e.arcTo(t,n+s,t,n,o),e.arcTo(t,n,t+i,n,o),e.closePath()}supports(e){return e.plugin==="navigation"&&["drone","location-2","pin-top","anchor"].includes(e.icon??"")}}const hh=640,kE=360,HE=150,uh=new B,dh=new B;class zE extends Ud{markerType="video";style={color:"#dc2626",icon:"▶",label:"Video"};objects=new Map;createObject(e){if(!e.src.trim())return super.createObject(e);const t=HE/hh,n=Math.max(1,Math.round((e.width??hh)*t*this.normalizeScale(e.scaleX))),i=Math.max(1,Math.round((e.height??kE)*t*this.normalizeScale(e.scaleY))),s=this.createMediaElement(e,n,i),a=document.createElement("div");a.className="view360-video-marker",a.style.width=`${n}px`,a.style.height=`${i}px`,a.style.background="#000",a.style.overflow="hidden",a.style.borderRadius="8px",a.style.boxShadow="0 12px 38px rgba(0,0,0,.42)",a.style.pointerEvents="auto",a.style.touchAction="auto",a.style.userSelect="auto";const o=f=>f.stopPropagation();["pointerdown","pointerup","click","dblclick","touchstart","touchend","wheel"].forEach(f=>{a.addEventListener(f,o,{passive:f==="wheel"})});const c=document.createElement("div");c.textContent="Đang tải video…",c.style.cssText="position:absolute;inset:0;display:grid;place-items:center;background:#080808;color:#aaa;font:500 14px sans-serif;pointer-events:none",a.style.position="relative",a.appendChild(c),a.appendChild(s),s.addEventListener("load",()=>c.remove(),{once:!0}),s.addEventListener("loadeddata",()=>c.remove(),{once:!0}),s.addEventListener("error",()=>{c.textContent="Không thể tải video",c.style.color="#fca5a5"},{once:!0});const d=new RE(a),h=new ze(new zn(n,i),new Rn({transparent:!0,opacity:0,depthWrite:!1}));h.userData={marker:e,markerType:this};const u=new en;return u.add(d,h),u.userData={marker:e,markerType:this,isCss3dVideo:!0},u.renderOrder=998,this.repositionObject(u,e.yaw,e.pitch),this.objects.set(u,{element:s,cssObject:d,baseScale:new B(1,1,1)}),u}updateObject(e,t,n,i,s,a){if(!(e instanceof en)||!this.objects.has(e)){super.updateObject(e,t,n,i,s,a);return}const o=this.objects.get(e),l=e.userData.marker;this.applyHoverScale(e,o.baseScale,l,n,s),a.getWorldDirection(uh),dh.copy(e.position).sub(a.position).normalize(),e.visible=uh.dot(dh)>0}repositionObject(e,t,n){e.userData.isCss3dVideo?super.repositionObject(e,t,n):this.positionOnSphere(e,t,n)}getRotation(e){return new an(e.rotX??0,e.rotY??(e.rotationYaw?-e.rotationYaw:0),e.rotZ??0,"ZXY")}getScale(e){return new B(1,1,1)}disposeObject(e){if(!(e instanceof en)){super.disposeObject(e);return}const t=this.objects.get(e);t&&(t.element instanceof HTMLVideoElement?(t.element.pause(),t.element.removeAttribute("src"),t.element.load()):t.element.src="about:blank",e.traverse(n=>{n instanceof ze&&(n.geometry.dispose(),n.material.dispose())}),t.cssObject.element.remove(),this.objects.delete(e))}createMediaElement(e,t,n){if(this.isDirectVideo(e.src)){const s=document.createElement("video");return s.src=e.src,s.controls=!0,s.playsInline=!0,s.preload="metadata",s.tabIndex=0,s.style.width="100%",s.style.height="100%",s.style.display="block",s.style.pointerEvents="auto",s.style.touchAction="auto",s}const i=document.createElement("iframe");return i.src=this.toEmbedUrl(e.src),i.width=String(t),i.height=String(n),i.title=e.label||"Video",i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.referrerPolicy="strict-origin-when-cross-origin",i.tabIndex=0,i.style.width="100%",i.style.height="100%",i.style.display="block",i.style.border="0",i.style.pointerEvents="auto",i.style.touchAction="auto",i}isDirectVideo(e){return/\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(e.trim())}toEmbedUrl(e){const t=e.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/))([^?&/]+)/i);if(t){const i=typeof window<"u"&&/^https?:/.test(window.location.origin)?`&origin=${encodeURIComponent(window.location.origin)}`:"";return`https://www.youtube.com/embed/${t[1]}?feature=oembed&playsinline=1&rel=0${i}`}const n=e.match(/vimeo\.com\/(?:video\/)?(\d+)/i);return n?`https://player.vimeo.com/video/${n[1]}`:e}}class rs{supports(e){return e.type===this.blockType}disposeElement(e){}}class VE extends rs{blockType="text";activeSpeech;createElement(e,t){this.ensureScrollbarStyle();const n=e.presentation??"text-only",i=n!=="audio-only",s=n!=="text-only",a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;gap:16px;min-width:0";let o;if(s&&(o=this.createSpeechControl(e)),i){const l=document.createElement("p");if(l.className="panel-content view360-text-block-content",l.style.cssText='max-height:180px;overflow-y:auto;scrollbar-width:none;margin:0;padding-right:4px;color:#ccc;font:400 13px/1.65 Inter,"Be Vietnam Pro",sans-serif;white-space:pre-wrap;text-align:left;mask-image:linear-gradient(to bottom,#000 76%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,#000 76%,transparent 100%)',t?.isFirst){const c=document.createElement("strong");c.textContent=`${t.panelLabel||"Thông tin"} `,c.style.cssText="color:#e67e22;font-weight:600;text-transform:uppercase;letter-spacing:1px",l.appendChild(c)}l.append(document.createTextNode(e.content?.trim()||"Thông tin chưa được cập nhật.")),a.appendChild(l)}else if(t?.isFirst){const l=document.createElement("p");l.textContent=t.panelLabel||"Thông tin",l.style.cssText='margin:0;color:#e67e22;font:600 13px/1.4 Inter,"Be Vietnam Pro",sans-serif;text-transform:uppercase;letter-spacing:1px',a.appendChild(l)}return o&&a.appendChild(o.footer),a}disposeElement(e){this.activeSpeech&&e.contains(this.activeSpeech.button)&&this.stopSpeech(),e.querySelectorAll("audio[data-text-narration]").forEach(t=>{t.pause(),t.removeAttribute("src"),t.load()})}createSpeechControl(e){return e.speech?.src?.trim()?this.createRecordedSpeechControl(e.speech.src.trim()):this.createBrowserSpeechControl(e)}createRecordedSpeechControl(e){const{button:t,footer:n,track:i,fill:s,status:a}=this.createPlayerShell(),o=document.createElement("audio");o.dataset.textNarration="true",o.src=e,o.preload="metadata",o.style.display="none",n.appendChild(o);const l=()=>{const h=Number.isFinite(o.duration)&&o.duration>0?o.currentTime/o.duration:0;s.style.width=`${Ne.clamp(h,0,1)*100}%`,i.setAttribute("aria-valuenow",String(Math.round(h*100)))},c=h=>{t.textContent=h?"Ⅱ":"▶",t.setAttribute("aria-label",h?"Tạm dừng bản đọc":"Phát bản đọc"),a.textContent=h?"Đang đọc...":"",a.style.display=h?"":"none"};t.addEventListener("click",async()=>{if(o.paused)try{await o.play()}catch{a.textContent="Không phát được file",a.style.display=""}else o.pause()}),o.addEventListener("play",()=>c(!0)),o.addEventListener("pause",()=>c(!1)),o.addEventListener("timeupdate",l),o.addEventListener("durationchange",l),o.addEventListener("ended",()=>{c(!1),s.style.width="100%"}),o.addEventListener("error",()=>{c(!1),a.textContent="Lỗi tải bản đọc",a.style.display=""});const d=h=>{!Number.isFinite(o.duration)||o.duration<=0||(o.currentTime=Ne.clamp(h,0,1)*o.duration,l())};return i.addEventListener("click",h=>{const u=i.getBoundingClientRect();d((h.clientX-u.left)/u.width)}),i.addEventListener("keydown",h=>{if(h.key!=="ArrowLeft"&&h.key!=="ArrowRight")return;h.preventDefault();const u=o.duration>0?o.currentTime/o.duration:0;d(u+(h.key==="ArrowRight"?.05:-.05))}),{button:t,footer:n}}createPlayerShell(){const e=document.createElement("button");e.type="button",e.textContent="▶",e.setAttribute("aria-label","Đọc văn bản"),e.style.cssText="display:flex;align-items:center;justify-content:center;flex:0 0 28px;width:28px;height:28px;margin-top:1px;padding:0;border:0;border-radius:50%;cursor:pointer;color:#fff;background:#e67e22;font-size:11px;box-shadow:0 2px 8px rgba(230,126,34,.28);transition:transform .2s ease,background .2s ease",e.addEventListener("mouseenter",()=>{e.style.transform="scale(1.06)",e.style.background="#d35400"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.background="#e67e22"});const t=document.createElement("div");t.className="audio-control",t.style.cssText="display:flex;align-items:center;gap:12px";const n=document.createElement("div");n.className="progress-container",n.setAttribute("role","slider"),n.setAttribute("aria-label","Chọn vị trí bắt đầu đọc"),n.tabIndex=0,n.style.cssText="position:relative;flex:1;height:8px;overflow:hidden;border-radius:4px;background:#333;cursor:pointer";const i=document.createElement("div");i.style.cssText="width:0;height:100%;border-radius:2px;background:#e67e22",n.appendChild(i);const s=document.createElement("span");return s.className="status-text",s.textContent="",s.style.cssText='display:none;color:#888;font:500 12px/1.3 Inter,"Be Vietnam Pro",sans-serif;white-space:nowrap',t.append(e,n,s),{button:e,footer:t,track:n,fill:i,status:s}}createBrowserSpeechControl(e){const{button:t,footer:n,track:i,fill:s,status:a}=this.createPlayerShell();if(!("speechSynthesis"in window))return t.disabled=!0,t.style.opacity=".45",t.style.cursor="not-allowed",a.textContent="Không hỗ trợ",a.style.display="",{button:t,footer:n};t.addEventListener("click",()=>{if(this.activeSpeech?.button===t){this.stopSpeech();return}const l=e.content?.trim();if(!l){a.textContent="Chưa có nội dung",a.style.display="";return}this.stopSpeech(),this.startSpeech(e,l,0,t,a,s)});const o=l=>{const c=e.content?.trim();if(!c||!("speechSynthesis"in window))return;const d=i.getBoundingClientRect(),h=Ne.clamp((l-d.left)/d.width,0,1);let u=Math.min(c.length-1,Math.floor(h*c.length));for(;u>0&&!/\s/.test(c[u-1]??"");)u--;this.stopSpeech(),s.style.width=`${u/c.length*100}%`,this.startSpeech(e,c,u,t,a,s)};return i.addEventListener("click",l=>o(l.clientX)),i.addEventListener("keydown",l=>{if(l.key!=="ArrowLeft"&&l.key!=="ArrowRight")return;l.preventDefault();const c=Number.parseFloat(s.style.width)||0,d=Ne.clamp(c+(l.key==="ArrowRight"?5:-5),0,100),h=i.getBoundingClientRect();o(h.left+d/100*h.width)}),{button:t,footer:n}}startSpeech(e,t,n,i,s,a){const o=t.slice(n),l=new SpeechSynthesisUtterance(o);l.lang=e.speech?.lang||"vi-VN",l.rate=Ne.clamp(e.speech?.rate??1,.5,2),l.pitch=Ne.clamp(e.speech?.pitch??1,.5,2);const c=l.lang.toLowerCase(),d=window.speechSynthesis.getVoices();l.voice=d.find(f=>f.lang.toLowerCase()===c)??d.find(f=>f.lang.toLowerCase().startsWith(c.split("-")[0]))??null,i.textContent="■",i.setAttribute("aria-label","Dừng đọc văn bản"),s.textContent="Đang đọc...",s.style.display="",a.style.width=`${n/t.length*100}%`,l.addEventListener("boundary",f=>{const g=Math.min(t.length,n+f.charIndex),_=g/t.length*100,p=Number.parseFloat(a.style.width)||0;a.style.width=`${Math.max(p,_)}%`,Ah(a,g,t.length)});const h=()=>{this.activeSpeech?.utterance===l&&(a.style.width="100%",this.resetControl(this.activeSpeech),this.activeSpeech=void 0)};l.addEventListener("end",h),l.addEventListener("error",h);const u={utterance:l,button:i,status:s,fill:a,fullText:t,startIndex:n,durationMs:this.estimateSpeechDuration(o,l.rate),startedAt:0,animationFrame:0};l.addEventListener("start",()=>{this.activeSpeech===u&&(u.startedAt=performance.now(),this.updateEstimatedProgress(u))}),this.activeSpeech=u,window.speechSynthesis.speak(l)}stopSpeech(){if(!this.activeSpeech||!("speechSynthesis"in window))return;const e=this.activeSpeech;this.activeSpeech=void 0,window.speechSynthesis.cancel(),this.resetControl(e)}resetControl(e){cancelAnimationFrame(e.animationFrame),e.button.textContent="▶",e.button.setAttribute("aria-label","Đọc văn bản"),e.status.textContent="",e.status.style.display="none"}updateEstimatedProgress(e){if(this.activeSpeech!==e||e.startedAt===0)return;const t=Ne.clamp((performance.now()-e.startedAt)/e.durationMs,0,1),n=e.startIndex+t*(e.fullText.length-e.startIndex),i=Math.min(98,n/e.fullText.length*100),s=Number.parseFloat(e.fill.style.width)||0;e.fill.style.width=`${Math.max(s,i)}%`,Ah(e.fill,n,e.fullText.length),e.animationFrame=requestAnimationFrame(()=>this.updateEstimatedProgress(e))}estimateSpeechDuration(e,t){const n=e.trim().split(/\s+/u).filter(Boolean).length,i=(e.match(/[,.!?;:\n]/gu)??[]).length,s=n/(165*t)*6e4,a=i*110/t;return Math.max(800,s+a)}ensureScrollbarStyle(){if(document.getElementById("view360-text-block-scrollbar-style"))return;const e=document.createElement("style");e.id="view360-text-block-scrollbar-style",e.textContent=".view360-text-block-content::-webkit-scrollbar{display:none;width:0;height:0}",document.head.appendChild(e)}}function Ah(r,e,t){r.parentElement?.setAttribute("aria-valuenow",String(Math.round(e/t*100)))}class WE extends rs{blockType="audio";createElement(e,t){const n=document.createElement("div");if(n.style.cssText="display:flex;flex-direction:column;gap:12px;min-width:0",t?.isFirst){const u=document.createElement("p");u.textContent=t.panelLabel||"Âm thanh",u.style.cssText='margin:0;color:#e67e22;font:600 13px/1.35 Inter,"Be Vietnam Pro",sans-serif;text-transform:uppercase;letter-spacing:1px',n.appendChild(u)}const i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:12px;min-width:0";const s=document.createElement("div");s.className="panel-header-row",s.style.cssText="display:flex;align-items:center;gap:12px";const a=document.createElement("button");a.type="button",a.textContent="▶",a.setAttribute("aria-label","Phát âm thanh"),a.style.cssText="display:flex;align-items:center;justify-content:center;flex:0 0 28px;width:28px;height:28px;padding:0;border:0;border-radius:50%;cursor:pointer;color:#fff;background:#e67e22;font-size:11px;box-shadow:0 2px 8px rgba(230,126,34,.28);transition:transform .2s ease";const o=document.createElement("span");o.textContent=e.src?"Bản ghi âm":"Chưa có tệp âm thanh",o.style.cssText='overflow:hidden;color:#ccc;font:500 13px/1.4 Inter,"Be Vietnam Pro",sans-serif;white-space:nowrap;text-overflow:ellipsis',s.append(a,o);const l=document.createElement("div");l.className="audio-control",l.style.cssText="display:flex;align-items:center;gap:12px";const c=document.createElement("input");c.className="progress-container",c.type="range",c.min="0",c.max="1000",c.value="0",c.setAttribute("aria-label","Vị trí phát âm thanh"),c.style.cssText="flex:1;height:4px;margin:0;cursor:pointer;accent-color:#e67e22";const d=document.createElement("span");d.className="status-text",d.textContent="0:00",d.style.cssText='min-width:34px;color:#888;font:500 12px/1.3 Inter,"Be Vietnam Pro",sans-serif;text-align:right;white-space:nowrap',l.append(c,d);const h=document.createElement("audio");return h.src=e.src,h.preload="metadata",h.style.display="none",i.append(s,l,h),n.appendChild(i),a.disabled=!e.src,e.src||(a.style.opacity=".45",a.style.cursor="not-allowed"),a.addEventListener("mouseenter",()=>{a.disabled||(a.style.transform="scale(1.06)")}),a.addEventListener("mouseleave",()=>{a.style.transform=""}),a.addEventListener("click",()=>{h.paused?h.play():h.pause()}),h.addEventListener("play",()=>{a.textContent="Ⅱ",a.setAttribute("aria-label","Tạm dừng âm thanh"),o.textContent="Đang phát..."}),h.addEventListener("pause",()=>{a.textContent="▶",a.setAttribute("aria-label","Phát âm thanh"),o.textContent=h.ended?"Đã phát xong":"Bản ghi âm"}),h.addEventListener("timeupdate",()=>{const u=Number.isFinite(h.duration)?h.duration:0;c.value=u?String(Math.round(h.currentTime/u*1e3)):"0",d.textContent=this.formatTime(h.currentTime)}),h.addEventListener("loadedmetadata",()=>{d.textContent=this.formatTime(h.duration)}),h.addEventListener("error",()=>{o.textContent="Không tải được âm thanh"}),c.addEventListener("input",()=>{Number.isFinite(h.duration)&&(h.currentTime=Number(c.value)/1e3*h.duration)}),n}disposeElement(e){e.querySelectorAll("audio").forEach(t=>{t.pause(),t.removeAttribute("src"),t.load()})}formatTime(e){if(!Number.isFinite(e))return"0:00";const t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}}class qE extends rs{blockType="image";createElement(e){const t=document.createElement("figure");if(t.style.cssText="margin:0;display:flex;flex-direction:column;gap:8px;min-width:0",e.src){const n=document.createElement("img");n.src=e.src,n.alt=e.alt?.trim()||e.caption?.trim()||"Ảnh minh họa",n.loading="lazy",n.decoding="async",n.style.cssText="display:block;width:100%;height:auto;max-height:55vh;object-fit:contain;border-radius:10px;background:#111",t.appendChild(n)}if(e.caption){const n=document.createElement("figcaption");n.textContent=e.caption,n.style.cssText='color:rgba(255,255,255,.65);font:400 12px/1.5 "Be Vietnam Pro",sans-serif',t.appendChild(n)}return t}}class XE extends rs{blockType="image3d";createElement(e){const t=document.createElement("figure");if(t.style.cssText="margin:0;display:flex;flex-direction:column;gap:8px",e.image){const n=document.createElement("img");n.src=e.image,n.alt=e.caption||"Ảnh vật thể",n.style.cssText="display:block;width:100%;max-height:55vh;object-fit:contain;border-radius:10px;background:#050505",t.appendChild(n)}if(e.caption){const n=document.createElement("figcaption");n.textContent=e.caption,n.style.cssText='color:rgba(255,255,255,.65);font:400 12px/1.5 "Be Vietnam Pro",sans-serif',t.appendChild(n)}return t}}class YE extends rs{blockType="ai-chat";createElement(e){const t=document.createElement("div");return t.textContent=e.context?.trim()||"Trợ lý AI cho nội dung này đang được phát triển.",t.style.cssText='padding:10px 12px;border:1px solid rgba(168,85,247,.3);border-radius:9px;color:#d8b4fe;background:rgba(168,85,247,.1);font:400 13px/1.6 "Be Vietnam Pro",sans-serif',t}}const fh=220,ph=380,gh="view360-marker-panel-responsive-style";class Ro extends Pd{markerType="panel";style={color:"#b85c2e",icon:"i",label:"Thông tin"};blockTypes=new Map;panels=new Map;projectedPosition=new B;constructor(e=[new VE,new qE,new XE,new WE,new YE]){super(),e.forEach(t=>this.blockTypes.set(t.blockType,t))}supports(e){return["panel","info","audio","model3d","ai-chat"].includes(e.plugin)}togglePanel(e,t,n,i){if(this.panels.has(t)){this.hidePanel(t);return}this.ensureResponsiveStyle();const s=document.createElement("section");if(s.className="view360-marker-panel",s.setAttribute("role","dialog"),s.setAttribute("aria-label",e.label||"Nội dung điểm tương tác"),s.style.cssText=["position:absolute","left:0","top:0","z-index:40","width:max-content",`min-width:min(${fh}px,calc(100% - 32px))`,`max-width:min(${ph}px,calc(100% - 32px))`,"height:auto","max-height:none","overflow:visible","display:flex","flex-direction:column","gap:12px","pointer-events:auto","padding:16px","box-sizing:border-box","color:#e0e0e0","background:rgba(32,32,32,.96)","border:1px solid rgba(255,255,255,.08)","border-radius:12px","box-shadow:0 10px 30px rgba(0,0,0,.6)","backdrop-filter:blur(14px)","transform:translate(-50%,calc(-100% - 18px))","transform-origin:bottom center","transition:opacity .16s ease,transform .16s ease"].join(";"),this.appendBlocks(e,s)===0)return;const o=document.createElement("span");o.dataset.markerPanelArrow="",o.style.cssText="position:absolute;left:50%;bottom:-7px;width:14px;height:14px;background:rgba(32,32,32,.96);border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);transform:translateX(-50%) rotate(45deg);pointer-events:none",s.appendChild(o),["pointerdown","pointerup","click","wheel"].forEach(l=>{s.addEventListener(l,c=>c.stopPropagation())}),n.appendChild(s),this.panels.set(t,{element:s,container:n}),this.updatePanels(i)}hidePanel(e){const t=this.panels.get(e)?.element;t&&this.blockTypes.forEach(n=>n.disposeElement(t)),t?.remove(),this.panels.delete(e)}hideAllPanels(){this.panels.forEach(({element:e})=>{this.blockTypes.forEach(t=>t.disposeElement(e)),e.remove()}),this.panels.clear()}updatePanels(e){[...this.panels.entries()].forEach(([t,{element:n,container:i}])=>{t.getWorldPosition(this.projectedPosition),this.projectedPosition.project(e);const{x:s,y:a,z:o}=this.projectedPosition;if(o<-1||o>1||Math.abs(s)>1||Math.abs(a)>1){this.hidePanel(t);return}const l=i.clientWidth,c=i.clientHeight,d=n.offsetWidth,h=n.offsetHeight,u=(s*.5+.5)*l,f=(-a*.5+.5)*c,g=t.userData.marker;if(l<=640){n.style.left="50%",n.style.right="auto",n.style.top="auto",n.style.bottom="max(12px, env(safe-area-inset-bottom, 0px))",n.style.width="calc(100% - 24px)",n.style.minWidth="0",n.style.maxWidth="360px",n.style.maxHeight="55dvh",n.style.overflowY="auto",n.style.padding="12px",n.style.borderRadius="14px",n.style.transform="translateX(-50%)",n.style.transformOrigin="bottom center";const v=n.querySelector("[data-marker-panel-arrow]");v&&(v.style.display="none");return}n.style.right="auto",n.style.bottom="auto",n.style.width="max-content",n.style.minWidth=`min(${fh}px,calc(100% - 32px))`,n.style.maxWidth=`min(${ph}px,calc(100% - 32px))`,n.style.maxHeight="none",n.style.overflowY="visible",n.style.padding="16px",n.style.paddingBottom="16px",n.style.borderRadius="12px";const p=(g?.plugin==="panel"?g.placement??"vertical":"vertical")==="horizontal"?u+d+28<=l?"right":"left":f<h+28?"bottom":"top";let A=u,C=f;p==="top"||p==="bottom"?A=Ne.clamp(u,d/2+10,l-d/2-10):(C=Ne.clamp(f,h/2+10,c-h/2-10),A=p==="left"?Math.max(u,d+28):Math.min(u,l-d-28)),n.style.left=`${A}px`,n.style.top=`${C}px`,n.style.transform=p==="bottom"?"translate(-50%, 18px)":p==="left"?"translate(calc(-100% - 18px), -50%)":p==="right"?"translate(18px, -50%)":"translate(-50%, calc(-100% - 18px))",n.style.transformOrigin=p==="bottom"?"top center":p==="left"?"center right":p==="right"?"center left":"bottom center";const I=n.querySelector("[data-marker-panel-arrow]");I&&(I.style.display="",I.style.left=p==="right"?"-7px":p==="left"?"auto":"50%",I.style.right=p==="left"?"-7px":"auto",I.style.top=p==="bottom"?"-7px":p==="left"||p==="right"?"50%":"auto",I.style.bottom=p==="top"?"-7px":"auto",I.style.transform=p==="left"?"translateY(-50%) rotate(-45deg)":p==="right"?"translateY(-50%) rotate(135deg)":`translateX(-50%) rotate(${p==="bottom"?"225deg":"45deg"})`)})}ensureResponsiveStyle(){if(document.getElementById(gh))return;const e=document.createElement("style");e.id=gh,e.textContent=`
      @media (max-width:640px) {
        .view360-marker-panel {
          overscroll-behavior:contain;
          scrollbar-width:thin;
        }
        .view360-marker-panel img {
          max-height:32dvh !important;
        }
      }
      @media (max-width:900px) and (orientation:landscape) {
        .view360-marker-panel { max-height:60dvh !important; }
      }
    `,document.head.appendChild(e)}appendBlocks(e,t){let n=0;return this.getBlocks(e).forEach(i=>{const s=this.blockTypes.get(i.type);s?.supports(i)&&(t.appendChild(s.createElement(i,{panelLabel:e.label||"Điểm tương tác",isFirst:n===0})),n++)}),n}getBlocks(e){if(e.plugin==="panel")return e.contents??[];if(e.plugin==="info")return[{id:`${e.id}-text`,type:"text",content:e.content}];if(e.plugin==="audio")return[{id:`${e.id}-audio`,type:"audio",src:e.src}];if(e.plugin==="model3d"){const t=[{id:`${e.id}-image`,type:"image3d",image:e.image}];return e.content&&t.push({id:`${e.id}-text`,type:"text",content:e.content}),t}return e.plugin==="ai-chat"?[{id:`${e.id}-ai`,type:"ai-chat",context:e.context}]:[]}}class r_ extends Dd{id="marker";name="Marker Plugin";group=new en;cssContainer=document.createElement("div");cssRenderer=new LE({element:this.cssContainer});raycaster=new Bl;pointer=new pe;markerTypes=new Map;unsubs=[];hovered=null;draggingObject=null;dragStarted=!1;pointerDown={x:0,y:0};navigationPending=!1;pulseSpeed;pulseAmplitude;hoverScale;draggable;constructor(e={}){super(),this.pulseSpeed=e.pulseSpeed??.004,this.pulseAmplitude=e.pulseAmplitude??.06,this.hoverScale=e.hoverScale??1.15,this.draggable=e.draggable??!1;const t=new Ro;[new ka(void 0,!0,[new QE(!0),new OE(!0),new GE(!0)]),t,new zE].forEach(i=>{this.registerMarkerType(i)}),["info","audio","model3d","ai-chat"].forEach(i=>{this.markerTypes.set(i,t)}),(e.markerTypes??[]).forEach(i=>{this.registerMarkerType(i)})}onInit(){const e=this.cssContainer;e.style.position="absolute",e.style.inset="0",e.style.overflow="hidden",e.style.pointerEvents="none",e.style.zIndex="2";const t=e.children[0];t&&(t.style.pointerEvents="inherit"),this.ctx.container.appendChild(e),this.ctx.scene.add(this.group),this.unsubs.push(this.ctx.bus.on("scene:rotation",({rotation:n})=>{this.applySceneRotation(n)})),this.bindPointerEvents()}onUpdate(e){const t=1+Math.sin(performance.now()*this.pulseSpeed)*this.pulseAmplitude;this.group.children.forEach(a=>{const o=this.markerTypeForObject(a);o?.updateObject(a,e,a===this.hovered,t,this.hoverScale,this.ctx.camera.camera),o?.updateProjection(a,this.ctx.camera.camera)});const n=this.ctx.container.clientWidth,i=this.ctx.container.clientHeight,s=this.cssRenderer.getSize();(s.width!==n||s.height!==i)&&this.cssRenderer.setSize(n,i),this.cssRenderer.render(this.ctx.scene,this.ctx.camera.camera),this.panelMarkerTypes().forEach(a=>a.updatePanels(this.ctx.camera.camera))}onDestroy(){this.unsubs.forEach(e=>e()),this.clearMarkers(),this.ctx.scene.remove(this.group),this.closeAllPanels(),this.cssRenderer.domElement.remove()}onSceneLoad(e){this.fadeAll(0,200)}onSceneReady(e){this.clearMarkers(),this.applySceneRotation(e.panoramaRotation??0);for(const t of e.markers??[]){const n=this.markerTypes.get(t.plugin);if(!n?.supports(t)){console.warn(`[MarkerPlugin] No MarkerBase registered for type "${t.plugin}".`);continue}this.group.add(n.createObject(t))}this.fadeAll(1,350)}markerTypeForObject(e){return e.userData.markerType}setPointer(e){const t=this.ctx.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}hitTest(e){this.setPointer(e),this.raycaster.setFromCamera(this.pointer,this.ctx.camera.camera);const t=this.raycaster.intersectObjects(this.group.children,!0)[0]?.object??null;if(!t)return null;let n=t;for(;n.parent&&n.parent!==this.group;)n=n.parent;return n.parent===this.group?n:null}bindPointerEvents(){const e=this.ctx.renderer.domElement,t=a=>{a!==this.hovered&&(this.hovered=a,this.ctx.container.style.cursor=a?this.draggable?"grab":"pointer":"grab",this.ctx.bus.emit("marker:hover",{marker:a?.userData.marker??null}))},n=a=>{this.draggingObject||t(this.hitTest(a))},i=()=>t(null),s=async a=>{if(this.draggingObject||this.dragStarted)return;const o=this.hitTest(a),l=o?.userData.marker;if(!(!l||!o)&&!this.navigationPending)if(this.ctx.bus.emit("marker:click",{marker:l}),l.plugin==="navigation"&&l.targetScene){this.closeAllPanels(),this.navigationPending=!0,this.ctx.bus.emit("interaction:lock");try{const c=this.markerTypeForObject(o)?.playActivationAnimation(o)??Promise.resolve();this.ctx.bus.emit("navigate",{sceneId:l.targetScene,yaw:l.yaw+this.group.rotation.y,pitch:l.pitch}),await c}finally{this.navigationPending=!1,this.ctx.bus.emit("interaction:unlock")}}else this.openPanel(l,o)};e.addEventListener("pointermove",n,{passive:!0}),e.addEventListener("pointerleave",i),e.addEventListener("click",s),this.unsubs.push(()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerleave",i),()=>e.removeEventListener("click",s)),this.draggable&&this.bindDragEvents()}openPanel(e,t){const n=this.markerTypes.get(e.plugin);n instanceof Ro&&n.togglePanel(e,t,this.ctx.container,this.ctx.camera.camera)}panelMarkerTypes(){return[...new Set(this.markerTypes.values())].filter(e=>e instanceof Ro)}closeAllPanels(){this.panelMarkerTypes().forEach(e=>e.hideAllPanels())}registerMarkerType(e){this.markerTypes.set(e.markerType,e)}applySceneRotation(e){this.group.rotation.y=e,this.group.updateMatrixWorld(!0)}addMarkerObject(e){this.group.add(e)}bindDragEvents(){const e=this.ctx.renderer.domElement,t=s=>{const a=this.hitTest(s);a&&(this.draggingObject=a,this.pointerDown={x:s.clientX,y:s.clientY},this.dragStarted=!1,e.setPointerCapture(s.pointerId))},n=s=>{if(!this.draggingObject)return;const a=Math.hypot(s.clientX-this.pointerDown.x,s.clientY-this.pointerDown.y);if(!this.dragStarted&&a>4&&(this.dragStarted=!0,this.ctx.bus.emit("interaction:lock"),this.ctx.container.style.cursor="grabbing"),!this.dragStarted)return;this.setPointer(s),this.raycaster.setFromCamera(this.pointer,this.ctx.camera.camera);const o=this.raycaster.ray.direction.clone().normalize();o.applyQuaternion(this.group.quaternion.clone().invert());const l=Math.atan2(-o.x,-o.z),c=Math.asin(Ne.clamp(o.y,-1,1));this.markerTypeForObject(this.draggingObject)?.repositionObject(this.draggingObject,l,c),this.draggingObject.userData.dragYaw=l,this.draggingObject.userData.dragPitch=c},i=()=>{const s=this.draggingObject;if(s){if(this.dragStarted){const a=s.userData.marker,o=s.userData.dragYaw,l=s.userData.dragPitch;a&&o!==void 0&&l!==void 0&&this.ctx.bus.emit("marker:moved",{markerId:a.id,yaw:+o.toFixed(4),pitch:+l.toFixed(4)}),this.ctx.bus.emit("interaction:unlock"),this.ctx.container.style.cursor="grab"}this.draggingObject=null,requestAnimationFrame(()=>{this.dragStarted=!1})}};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",n),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),this.unsubs.push(()=>e.removeEventListener("pointerdown",t),()=>e.removeEventListener("pointermove",n),()=>e.removeEventListener("pointerup",i),()=>e.removeEventListener("pointercancel",i))}fadeAll(e,t){const n=performance.now(),i=this.group.children.map(a=>this.materialOf(a)?.opacity??0),s=a=>{const o=Math.min((a-n)/t,1);this.group.children.forEach((l,c)=>{const d=this.materialOf(l);d&&(d.opacity=(i[c]??0)+(e-(i[c]??0))*o)}),o<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}materialOf(e){if(e instanceof ga||e instanceof ze)return e.material;for(const t of e.children){const n=this.materialOf(t);if(n)return n}return null}clearMarkers(){for(this.closeAllPanels();this.group.children.length;){const e=this.group.children[0];this.group.remove(e),this.markerTypeForObject(e)?.disposeObject(e)}this.hovered=null,this.draggingObject=null}}const mh=new Vn,Ns=new B;class Fd extends bu{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pt(e,3)),this.setAttribute("uv",new pt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new _a(t,6,1);return this.setAttribute("instanceStart",new pn(n,3,0)),this.setAttribute("instanceEnd",new pn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new _a(t,6,1);return this.setAttribute("instanceColorStart",new pn(n,3,0)),this.setAttribute("instanceColorEnd",new pn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Su(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),mh.setFromBufferAttribute(t),this.boundingBox.union(mh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ns.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ns)),Ns.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ns));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vt.line={uniforms:Qa.merge([re.common,re.fog,re.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Dl extends Xt{constructor(e){super({type:"LineMaterial",uniforms:Qa.clone(Vt.line.uniforms),vertexShader:Vt.line.vertexShader,fragmentShader:Vt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Do=new rt,Eh=new B,_h=new B,bt=new rt,Rt=new rt,In=new rt,Lo=new B,Po=new nt,Dt=new Pu,vh=new B,Qs=new Vn,Os=new li,Mn=new rt;let wn,xi;function xh(r,e,t){return Mn.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=xi/t.width,Mn.y=xi/t.height,Mn.applyMatrix4(r.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function JE(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,l=a;o<l;o++){Dt.start.fromBufferAttribute(i,o),Dt.end.fromBufferAttribute(s,o),Dt.applyMatrix4(t);const c=new B,d=new B;wn.distanceSqToSegment(Dt.start,Dt.end,d,c),d.distanceTo(c)<xi*.5&&e.push({point:d,pointOnLine:c,distance:wn.origin.distanceTo(d),object:r,face:null,faceIndex:o,uv:null,uv1:null})}}function KE(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,o=r.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),h=-e.near;wn.at(1,In),In.w=1,In.applyMatrix4(e.matrixWorldInverse),In.applyMatrix4(n),In.multiplyScalar(1/In.w),In.x*=s.x/2,In.y*=s.y/2,In.z=0,Lo.copy(In),Po.multiplyMatrices(e.matrixWorldInverse,a);for(let u=0,f=d;u<f;u++){if(bt.fromBufferAttribute(l,u),Rt.fromBufferAttribute(c,u),bt.w=1,Rt.w=1,bt.applyMatrix4(Po),Rt.applyMatrix4(Po),bt.z>h&&Rt.z>h)continue;if(bt.z>h){const I=bt.z-Rt.z,v=(bt.z-h)/I;bt.lerp(Rt,v)}else if(Rt.z>h){const I=Rt.z-bt.z,v=(Rt.z-h)/I;Rt.lerp(bt,v)}bt.applyMatrix4(n),Rt.applyMatrix4(n),bt.multiplyScalar(1/bt.w),Rt.multiplyScalar(1/Rt.w),bt.x*=s.x/2,bt.y*=s.y/2,Rt.x*=s.x/2,Rt.y*=s.y/2,Dt.start.copy(bt),Dt.start.z=0,Dt.end.copy(Rt),Dt.end.z=0;const _=Dt.closestPointToPointParameter(Lo,!0);Dt.at(_,vh);const p=Ne.lerp(bt.z,Rt.z,_),A=p>=-1&&p<=1,C=Lo.distanceTo(vh)<xi*.5;if(A&&C){Dt.start.fromBufferAttribute(l,u),Dt.end.fromBufferAttribute(c,u),Dt.start.applyMatrix4(a),Dt.end.applyMatrix4(a);const I=new B,v=new B;wn.distanceSqToSegment(Dt.start,Dt.end,v,I),t.push({point:v,pointOnLine:I,distance:wn.origin.distanceTo(v),object:r,face:null,faceIndex:u,uv:null,uv1:null})}}}class ZE extends ze{constructor(e=new Fd,t=new Dl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Eh.fromBufferAttribute(t,a),_h.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Eh.distanceTo(_h);const s=new _a(i,2,1);return e.setAttribute("instanceDistanceStart",new pn(s,1,0)),e.setAttribute("instanceDistanceEnd",new pn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;if(i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;wn=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;xi=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Os.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=xi*.5;else{const h=Math.max(i.near,Os.distanceToPoint(wn.origin));c=xh(i,h,l.resolution)}if(Os.radius+=c,wn.intersectsSphere(Os)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Qs.copy(o.boundingBox).applyMatrix4(a);let d;if(n)d=xi*.5;else{const h=Math.max(i.near,Qs.distanceToPoint(wn.origin));d=xh(i,h,l.resolution)}Qs.expandByScalar(d),wn.intersectsBox(Qs)!==!1&&(n?JE(this,t):KE(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Do),this.material.uniforms.resolution.value.set(Do.z,Do.w))}}class Nd extends Fd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class $E extends ZE{constructor(e=new Nd,t=new Dl({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const jE=585,Uo=100,e_=1100,t_=3e3,Ch=14,n_=22;class s_ extends Dd{id="area-highlight";name="Area Highlight Plugin";root=new en;visuals=[];preview;unsubscribeRotation;pointer=new pe;raycaster=new Bl;currentAreas=[];editingEnabled=!1;selectedPoint=null;draggingVertex=null;pointerCleanups=[];constructor(e={}){super(),this.preview=e.preview??!1}onInit(){this.root.renderOrder=Uo,this.ctx.scene.add(this.root),this.unsubscribeRotation=this.ctx.bus.on("scene:rotation",({rotation:e})=>{this.root.rotation.y=e,this.root.updateMatrixWorld(!0)}),this.preview&&this.bindVertexDragging()}onSceneLoad(){this.clear()}onSceneReady(e){this.setAreas(e.areaHighlights??[],e.panoramaRotation??0)}setAreas(e,t=this.root.rotation.y){this.currentAreas=e,this.clear(),this.root.rotation.y=t;for(const n of e){const i=this.createArea(n);i&&(this.visuals.push(i),this.root.add(i.object))}}setEditingEnabled(e){this.editingEnabled=e,e||(this.draggingVertex=null)}selectPoint(e,t){this.selectedPoint=e!==null&&t!==null?{areaId:e,pointIndex:t}:null,this.currentAreas.length&&this.setAreas(this.currentAreas,this.root.rotation.y)}onUpdate(e){if(!this.preview)for(const t of this.visuals){t.elapsedMs+=e*1e3;const n=t.elapsedMs-t.delayMs;if(n<0){t.object.visible=!1;continue}const i=t.traceDurationMs+t.fillDurationMs;if(n>=i){t.object.visible=!1;continue}if(t.object.visible=!0,n<t.traceDurationMs){const d=Ne.clamp(n/t.traceDurationMs,0,1),h=Math.max(1,Math.ceil(d*t.outlineSegmentCount));t.line.visible=!0,t.lineGeometry.instanceCount=h,t.outline.opacity=Math.min(1,t.maxOpacity+.5),t.fill.opacity=0;continue}const s=n-t.traceDurationMs,a=Ne.clamp(s/t.fillDurationMs,0,1),o=Ne.smoothstep(a,0,.06),l=1-Ne.smoothstep(a,.92,1),c=o*l;t.lineGeometry.instanceCount=t.outlineSegmentCount,t.line.visible=t.mode!=="fill",t.outline.opacity=Math.min(1,t.maxOpacity+.38)*c,t.fill.opacity=t.mode==="outline"?0:t.maxOpacity*c}}onDestroy(){this.unsubscribeRotation?.(),this.pointerCleanups.forEach(e=>e()),this.pointerCleanups=[],this.clear(),this.ctx.scene.remove(this.root)}createArea(e){if(!e.points||e.points.length<(this.preview?1:3))return null;const t=Ne.clamp(e.radius??jE,100,595),n=this.unwrapYaw(e.points),i=new Il;i.moveTo(n[0].yaw,n[0].pitch);for(let p=1;p<n.length;p+=1)i.lineTo(n[p].yaw,n[p].pitch);n.length>=3&&i.closePath();const s=n.length>=3?new Na(i):new Tt,a=s.getAttribute("position");if(a){for(let p=0;p<a.count;p+=1){const A=this.sphericalPosition(a.getX(p),a.getY(p),t);a.setXYZ(p,A.x,A.y,A.z)}a.needsUpdate=!0,s.computeVertexNormals(),s.computeBoundingSphere()}const o=Ne.clamp(e.opacity??.34,.05,.9),l=new Rn({color:e.color??"#22c55e",transparent:!0,opacity:this.preview?o:0,depthTest:!1,depthWrite:!1,side:Wt,blending:Ur}),c=new ze(s,l);c.renderOrder=Uo,c.visible=(e.mode??"fill-outline")!=="outline";const d=this.createOutlinePoints(n,t+.4,n.length>=3),h=new Nd;h.setPositions(d.flatMap(p=>[p.x,p.y,p.z]));const u=new Dl({color:e.outlineColor??"#ffffff",transparent:!0,opacity:this.preview?Math.min(1,o+.38):0,depthTest:!1,depthWrite:!1,linewidth:Ne.clamp(e.lineWidth??5,1,24),worldUnits:!1,blending:Ur}),f=this.ctx.renderer.domElement;u.resolution.set(f.clientWidth||1,f.clientHeight||1);const g=new $E(h,u);g.computeLineDistances(),g.renderOrder=Uo+1,g.visible=(e.mode??"fill-outline")!=="fill";const _=new en;return _.name=`area-highlight:${e.id}`,_.add(c,g),this.preview&&n.forEach((p,A)=>{const C=this.selectedPoint?.areaId===e.id&&this.selectedPoint.pointIndex===A,I=new ze(new ur(C?Ch*1.35:Ch,20,14),new Rn({color:C?"#ff8a00":e.outlineColor??"#ffffff",depthTest:!1,depthWrite:!1}));I.position.copy(this.sphericalPosition(p.yaw,p.pitch,t+1)),I.renderOrder=e_,I.userData.areaVertex=!0,I.userData.areaVertexVisual=!0,I.userData.areaId=e.id,I.userData.pointIndex=A,_.add(I);const v=new ze(new ur(n_,12,8),new Rn({transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}));v.position.copy(I.position),v.userData.areaVertex=!0,v.userData.areaId=e.id,v.userData.pointIndex=A,_.add(v)}),_.visible=this.preview,{object:_,line:g,lineGeometry:h,fill:l,outline:u,outlineSegmentCount:Math.max(1,d.length-1),mode:e.mode??"fill-outline",elapsedMs:0,delayMs:Math.max(0,e.delayMs??120),traceDurationMs:Math.max(250,e.durationMs??1400),fillDurationMs:t_,maxOpacity:o}}unwrapYaw(e){const t=[{...e[0]}];for(let n=1;n<e.length;n+=1){let i=e[n].yaw;const s=t[n-1].yaw;for(;i-s>Math.PI;)i-=Math.PI*2;for(;i-s<-Math.PI;)i+=Math.PI*2;t.push({yaw:i,pitch:e[n].pitch})}return t}createOutlinePoints(e,t,n){const i=[],s=n?e.length:Math.max(0,e.length-1);for(let a=0;a<s;a+=1){const o=e[a],l=e[(a+1)%e.length];let c=l.yaw;for(;c-o.yaw>Math.PI;)c-=Math.PI*2;for(;c-o.yaw<-Math.PI;)c+=Math.PI*2;const d=Math.max(2,Math.ceil(Math.hypot(c-o.yaw,l.pitch-o.pitch)/.025));for(let h=0;h<d;h+=1){const u=h/d;i.push(this.sphericalPosition(Ne.lerp(o.yaw,c,u),Ne.lerp(o.pitch,l.pitch,u),t))}}return n&&e.length>0&&i.push(this.sphericalPosition(e[0].yaw,e[0].pitch,t)),i}sphericalPosition(e,t,n){return new B(-n*Math.sin(e)*Math.cos(t),n*Math.sin(t),-n*Math.cos(e)*Math.cos(t))}bindVertexDragging(){const e=this.ctx.renderer.domElement,t=o=>{const l=e.getBoundingClientRect();this.pointer.set((o.clientX-l.left)/l.width*2-1,-((o.clientY-l.top)/l.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.ctx.camera.camera)},n=o=>{const l=e.getBoundingClientRect(),c=this.ctx.camera.camera;c.updateMatrixWorld(!0),this.root.updateMatrixWorld(!0);const d=new B,h=new B;let u=null,f=44;return this.root.traverse(g=>{if(!g.userData.areaVertexVisual||(g.getWorldPosition(d),h.copy(d).project(c),h.z<-1||h.z>1))return;const _=l.left+(h.x+1)*l.width*.5,p=l.top+(1-h.y)*l.height*.5,A=Math.hypot(o.clientX-_,o.clientY-p);A<f&&(f=A,u=g)}),u},i=o=>{if(!this.editingEnabled)return;t(o);const c=n(o)??this.raycaster.intersectObjects(this.root.children,!0).find(d=>d.object.userData.areaVertex)?.object;c&&(o.preventDefault(),o.stopImmediatePropagation(),this.draggingVertex={areaId:String(c.userData.areaId),pointIndex:Number(c.userData.pointIndex),pointerId:o.pointerId},this.selectPoint(this.draggingVertex.areaId,this.draggingVertex.pointIndex),e.setPointerCapture(o.pointerId),e.style.cursor="grabbing",this.ctx.bus.emit("area:selected",{areaId:this.draggingVertex.areaId}),this.ctx.bus.emit("area:point-selected",{areaId:this.draggingVertex.areaId,pointIndex:this.draggingVertex.pointIndex}))},s=o=>{if(!this.draggingVertex||o.pointerId!==this.draggingVertex.pointerId)return;o.preventDefault(),o.stopImmediatePropagation(),t(o);const l=this.raycaster.ray.direction.clone().normalize();l.applyQuaternion(this.root.quaternion.clone().invert());const c=Math.atan2(-l.x,-l.z),d=Math.asin(Ne.clamp(l.y,-1,1)),h=this.currentAreas.find(_=>_.id===this.draggingVertex.areaId),u=h?.points[this.draggingVertex.pointIndex];if(!h||!u)return;u.yaw=c,u.pitch=d;const f=this.root.rotation.y,g={...this.draggingVertex};this.setAreas(this.currentAreas,f),this.ctx.bus.emit("area:point-moved",{areaId:g.areaId,pointIndex:g.pointIndex,yaw:c,pitch:d})},a=o=>{!this.draggingVertex||o.pointerId!==this.draggingVertex.pointerId||(o.preventDefault(),o.stopImmediatePropagation(),this.draggingVertex=null,e.style.cursor="grab")};e.addEventListener("pointerdown",i,!0),e.addEventListener("pointermove",s,!0),e.addEventListener("pointerup",a,!0),e.addEventListener("pointercancel",a,!0),this.pointerCleanups.push(()=>e.removeEventListener("pointerdown",i,!0),()=>e.removeEventListener("pointermove",s,!0),()=>e.removeEventListener("pointerup",a,!0),()=>e.removeEventListener("pointercancel",a,!0))}clear(){for(const e of this.visuals)e.object.traverse(t=>{(t instanceof ze||t instanceof cu)&&(t.geometry.dispose(),t.material.dispose())}),this.root.remove(e.object);this.visuals.length=0}}export{s_ as A,r_ as M,Ro as P,ga as S,Ld as V,Dd as a,rE as t};
