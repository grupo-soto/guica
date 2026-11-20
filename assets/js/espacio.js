(()=>{var mf=0,qh=1,gf=2;var Ho=1,Fc=2,Aa=3,Kr=0,Rn=1,Pn=2,sn=0,Qr=1,jh=2,Yh=3,Zh=4,Nc=5;var wi=100,xf=101,_f=102,vf=103,yf=104,Rs=200,bf=201,Sf=202,Ef=203,$h=204,Jh=205,Go=206,Tf=207,Wo=208,wf=209,Af=210,Cf=211,Mf=212,Rf=213,Pf=214,ic=0,rc=1,sc=2,da=3,ac=4,oc=5,cc=6,lc=7,Uc=0,If=1,Df=2,Xi=0,Xo=1,qo=2,jo=3,Yo=4,Zo=5,$o=6,Ps=7;var Kh=300,es=301,Is=302,Bc=303,kc=304,Jo=306,Qi=1e3,Ki=1001,hc=1002,kt=1003,zf=1004;var Ko=1005;var Cn=1006,Vc=1007;var ts=1008;var kn=1009,Qh=1010,eu=1011,Ca=1012,Hc=1013,qi=1014,Ai=1015,yn=1016,Gc=1017,Wc=1018,ns=1020,tu=35902,nu=35899,iu=1021,ru=1022,ti=1023,er=1026,rr=1027,Xc=1028,qc=1029,is=1030,jc=1031;var Yc=1033,Qo=33776,e0=33777,t0=33778,n0=33779,Zc=35840,$c=35841,Jc=35842,Kc=35843,Qc=36196,el=37492,tl=37496,nl=37488,il=37489,i0=37490,rl=37491,sl=37808,al=37809,ol=37810,cl=37811,ll=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,_l=37821,vl=36492,yl=36494,bl=36495,Sl=36283,El=36284,r0=36285,Tl=36286;var uo=2300,uc=2301,tc=2302,Lh=2303,Oh=2400,Fh=2401,Nh=2402;var Lf=3200;var Ma=0,Of=1,Er="",ui="srgb",Es="srgb-linear",fo="linear",Et="srgb";var nc=7680;var Ff=519,Nf=512,Uf=513,Bf=514,wl=515,kf=516,Vf=517,Al=518,Hf=519,Gf=35044;var su="300 es",Gi=2e3,fa=2001;function Km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wf(){let n=po("canvas");return n.style.display="block",n}var Fd={},pa=null;function au(...n){let e="THREE."+n.shift();pa?pa("log",e,...n):console.log(e,...n)}function Xf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=Xf(n);let e="THREE."+n.shift();if(pa)pa("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=Xf(n);let e="THREE."+n.shift();if(pa)pa("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ss(...n){let e=n.join(" ");e in Fd||(Fd[e]=!0,Qe(...n))}function qf(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var jf={[ic]:rc,[sc]:cc,[ac]:lc,[da]:oc,[rc]:ic,[cc]:sc,[lc]:ac,[oc]:da},tr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,oo=Math.PI/180,ma=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function e1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function t1(n,e,t){return n!==e?(t-n)/(e-n):0}function co(n,e,t){return(1-t)*n+t*e}function n1(n,e,t,i){return co(n,e,1-Math.exp(-t*i))}function i1(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function r1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function o1(n,e){return n+Math.random()*(e-n)}function c1(n){return n*(.5-Math.random())}function l1(n){n!==void 0&&(Nd=n);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h1(n){return n*oo}function u1(n){return n*ma}function d1(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function f1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function p1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m1(n,e,t,i,r){let a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),u=a((e+i)/2),m=s((e+i)/2),E=a((e-i)/2),y=s((e-i)/2),T=a((i-e)/2),v=s((i-e)/2);switch(r){case"XYX":n.set(o*m,c*E,c*y,o*u);break;case"YZY":n.set(c*y,o*m,c*E,o*u);break;case"ZXZ":n.set(c*E,c*y,o*m,o*u);break;case"XZX":n.set(o*m,c*v,c*T,o*u);break;case"YXY":n.set(c*T,o*m,c*v,o*u);break;case"ZYZ":n.set(c*v,c*T,o*m,o*u);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ha(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zs={DEG2RAD:oo,RAD2DEG:ma,generateUUID:Ds,clamp:pt,euclideanModulo:ou,mapLinear:e1,inverseLerp:t1,lerp:co,damp:n1,pingpong:i1,smoothstep:r1,smootherstep:s1,randInt:a1,randFloat:o1,randFloatSpread:c1,seededRandom:l1,degToRad:h1,radToDeg:u1,isPowerOfTwo:d1,ceilPowerOfTwo:f1,floorPowerOfTwo:p1,setQuaternionFromProperEuler:m1,normalize:qn,denormalize:ha},fu=class fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;var ye=fu,fn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let c=i[r+0],u=i[r+1],m=i[r+2],E=i[r+3],y=a[s+0],T=a[s+1],v=a[s+2],R=a[s+3];if(E!==R||c!==y||u!==T||m!==v){let C=c*y+u*T+m*v+E*R;C<0&&(y=-y,T=-T,v=-v,R=-R,C=-C);let M=1-o;if(C<.9995){let D=Math.acos(C),O=Math.sin(D);M=Math.sin(M*D)/O,o=Math.sin(o*D)/O,c=c*M+y*o,u=u*M+T*o,m=m*M+v*o,E=E*M+R*o}else{c=c*M+y*o,u=u*M+T*o,m=m*M+v*o,E=E*M+R*o;let D=1/Math.sqrt(c*c+u*u+m*m+E*E);c*=D,u*=D,m*=D,E*=D}}e[t]=c,e[t+1]=u,e[t+2]=m,e[t+3]=E}static multiplyQuaternionsFlat(e,t,i,r,a,s){let o=i[r],c=i[r+1],u=i[r+2],m=i[r+3],E=a[s],y=a[s+1],T=a[s+2],v=a[s+3];return e[t]=o*v+m*E+c*T-u*y,e[t+1]=c*v+m*y+u*E-o*T,e[t+2]=u*v+m*T+o*y-c*E,e[t+3]=m*v-o*E-c*y-u*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,u=o(i/2),m=o(r/2),E=o(a/2),y=c(i/2),T=c(r/2),v=c(a/2);switch(s){case"XYZ":this._x=y*m*E+u*T*v,this._y=u*T*E-y*m*v,this._z=u*m*v+y*T*E,this._w=u*m*E-y*T*v;break;case"YXZ":this._x=y*m*E+u*T*v,this._y=u*T*E-y*m*v,this._z=u*m*v-y*T*E,this._w=u*m*E+y*T*v;break;case"ZXY":this._x=y*m*E-u*T*v,this._y=u*T*E+y*m*v,this._z=u*m*v+y*T*E,this._w=u*m*E-y*T*v;break;case"ZYX":this._x=y*m*E-u*T*v,this._y=u*T*E+y*m*v,this._z=u*m*v-y*T*E,this._w=u*m*E+y*T*v;break;case"YZX":this._x=y*m*E+u*T*v,this._y=u*T*E+y*m*v,this._z=u*m*v-y*T*E,this._w=u*m*E-y*T*v;break;case"XZY":this._x=y*m*E-u*T*v,this._y=u*T*E-y*m*v,this._z=u*m*v+y*T*E,this._w=u*m*E+y*T*v;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],u=t[2],m=t[6],E=t[10],y=i+o+E;if(y>0){let T=.5/Math.sqrt(y+1);this._w=.25/T,this._x=(m-c)*T,this._y=(a-u)*T,this._z=(s-r)*T}else if(i>o&&i>E){let T=2*Math.sqrt(1+i-o-E);this._w=(m-c)/T,this._x=.25*T,this._y=(r+s)/T,this._z=(a+u)/T}else if(o>E){let T=2*Math.sqrt(1+o-i-E);this._w=(a-u)/T,this._x=(r+s)/T,this._y=.25*T,this._z=(c+m)/T}else{let T=2*Math.sqrt(1+E-i-o);this._w=(s-r)/T,this._x=(a+u)/T,this._y=(c+m)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,u=t._z,m=t._w;return this._x=i*m+s*o+r*u-a*c,this._y=r*m+s*c+a*o-i*u,this._z=a*m+s*u+i*c-r*o,this._w=s*m-i*o-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),m=Math.sin(u);c=Math.sin(c*u)/m,t=Math.sin(t*u)/m,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,u=2*(s*r-o*i),m=2*(o*t-a*r),E=2*(a*i-s*t);return this.x=t+c*u+s*E-o*m,this.y=i+c*m+o*u-a*E,this.z=r+c*E+a*m-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var W=pu,hh=new W,Ud=new fn,mu=class mu{constructor(e,t,i,r,a,s,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,u)}set(e,t,i,r,a,s,o,c,u){let m=this.elements;return m[0]=e,m[1]=r,m[2]=o,m[3]=t,m[4]=a,m[5]=c,m[6]=i,m[7]=s,m[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],u=i[1],m=i[4],E=i[7],y=i[2],T=i[5],v=i[8],R=r[0],C=r[3],M=r[6],D=r[1],O=r[4],p=r[7],x=r[2],w=r[5],A=r[8];return a[0]=s*R+o*D+c*x,a[3]=s*C+o*O+c*w,a[6]=s*M+o*p+c*A,a[1]=u*R+m*D+E*x,a[4]=u*C+m*O+E*w,a[7]=u*M+m*p+E*A,a[2]=y*R+T*D+v*x,a[5]=y*C+T*O+v*w,a[8]=y*M+T*p+v*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],m=e[8];return t*s*m-t*o*u-i*a*m+i*o*c+r*a*u-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],m=e[8],E=m*s-o*u,y=o*c-m*a,T=u*a-s*c,v=t*E+i*y+r*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/v;return e[0]=E*R,e[1]=(r*u-m*i)*R,e[2]=(o*i-r*s)*R,e[3]=y*R,e[4]=(m*t-r*c)*R,e[5]=(r*a-o*t)*R,e[6]=T*R,e[7]=(i*c-u*t)*R,e[8]=(s*t-i*a)*R,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){let c=Math.cos(a),u=Math.sin(a);return this.set(i*c,i*u,-i*(c*s+u*o)+s+e,-r*u,r*c,-r*(-u*s+c*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uh.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var st=mu,uh=new st,Bd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g1(){let n={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Et&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Et&&(r.r=ua(r.r),r.g=ua(r.g),r.b=ua(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Es]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),n}var ft=g1();function br(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $s,dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$s===void 0&&($s=po("canvas")),$s.width=e.width,$s.height=e.height;let r=$s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=br(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(br(t[i]/255)*255):t[i]=br(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},x1=0,ga=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(dh(r[s].image)):a.push(dh(r[s]))}else a=dh(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function dh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var _1=0,fh=new W,Qn=class n extends tr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ki,r=Ki,a=Cn,s=ts,o=ti,c=kn,u=n.DEFAULT_ANISOTROPY,m=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Ds(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Kh;Qn.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,c=e.elements,u=c[0],m=c[4],E=c[8],y=c[1],T=c[5],v=c[9],R=c[2],C=c[6],M=c[10];if(Math.abs(m-y)<.01&&Math.abs(E-R)<.01&&Math.abs(v-C)<.01){if(Math.abs(m+y)<.1&&Math.abs(E+R)<.1&&Math.abs(v+C)<.1&&Math.abs(u+T+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let O=(u+1)/2,p=(T+1)/2,x=(M+1)/2,w=(m+y)/4,A=(E+R)/4,b=(v+C)/4;return O>p&&O>x?O<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(O),r=w/i,a=A/i):p>x?p<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(p),i=w/r,a=b/r):x<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(x),i=A/a,r=b/a),this.set(i,r,a,t),this}let D=Math.sqrt((C-v)*(C-v)+(E-R)*(E-R)+(y-m)*(y-m));return Math.abs(D)<.001&&(D=1),this.x=(C-v)/D,this.y=(E-R)/D,this.z=(y-m)/D,this.w=Math.acos((u+T+M-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Vt=gu,fc=class extends tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Qn(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends fc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mo=class extends Qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pc=class extends Qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oc=class Oc{constructor(e,t,i,r,a,s,o,c,u,m,E,y,T,v,R,C){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,u,m,E,y,T,v,R,C)}set(e,t,i,r,a,s,o,c,u,m,E,y,T,v,R,C){let M=this.elements;return M[0]=e,M[4]=t,M[8]=i,M[12]=r,M[1]=a,M[5]=s,M[9]=o,M[13]=c,M[2]=u,M[6]=m,M[10]=E,M[14]=y,M[3]=T,M[7]=v,M[11]=R,M[15]=C,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Js.setFromMatrixColumn(e,0).length(),a=1/Js.setFromMatrixColumn(e,1).length(),s=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),m=Math.cos(a),E=Math.sin(a);if(e.order==="XYZ"){let y=s*m,T=s*E,v=o*m,R=o*E;t[0]=c*m,t[4]=-c*E,t[8]=u,t[1]=T+v*u,t[5]=y-R*u,t[9]=-o*c,t[2]=R-y*u,t[6]=v+T*u,t[10]=s*c}else if(e.order==="YXZ"){let y=c*m,T=c*E,v=u*m,R=u*E;t[0]=y+R*o,t[4]=v*o-T,t[8]=s*u,t[1]=s*E,t[5]=s*m,t[9]=-o,t[2]=T*o-v,t[6]=R+y*o,t[10]=s*c}else if(e.order==="ZXY"){let y=c*m,T=c*E,v=u*m,R=u*E;t[0]=y-R*o,t[4]=-s*E,t[8]=v+T*o,t[1]=T+v*o,t[5]=s*m,t[9]=R-y*o,t[2]=-s*u,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let y=s*m,T=s*E,v=o*m,R=o*E;t[0]=c*m,t[4]=v*u-T,t[8]=y*u+R,t[1]=c*E,t[5]=R*u+y,t[9]=T*u-v,t[2]=-u,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let y=s*c,T=s*u,v=o*c,R=o*u;t[0]=c*m,t[4]=R-y*E,t[8]=v*E+T,t[1]=E,t[5]=s*m,t[9]=-o*m,t[2]=-u*m,t[6]=T*E+v,t[10]=y-R*E}else if(e.order==="XZY"){let y=s*c,T=s*u,v=o*c,R=o*u;t[0]=c*m,t[4]=-E,t[8]=u*m,t[1]=y*E+R,t[5]=s*m,t[9]=T*E-v,t[2]=v*E-T,t[6]=o*m,t[10]=R*E+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,y1)}lookAt(e,t,i){let r=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Vr.crossVectors(i,li),Vr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Vr.crossVectors(i,li)),Vr.normalize(),z0.crossVectors(li,Vr),r[0]=Vr.x,r[4]=z0.x,r[8]=li.x,r[1]=Vr.y,r[5]=z0.y,r[9]=li.y,r[2]=Vr.z,r[6]=z0.z,r[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],u=i[12],m=i[1],E=i[5],y=i[9],T=i[13],v=i[2],R=i[6],C=i[10],M=i[14],D=i[3],O=i[7],p=i[11],x=i[15],w=r[0],A=r[4],b=r[8],P=r[12],h=r[1],l=r[5],d=r[9],_=r[13],g=r[2],f=r[6],S=r[10],I=r[14],L=r[3],z=r[7],F=r[11],N=r[15];return a[0]=s*w+o*h+c*g+u*L,a[4]=s*A+o*l+c*f+u*z,a[8]=s*b+o*d+c*S+u*F,a[12]=s*P+o*_+c*I+u*N,a[1]=m*w+E*h+y*g+T*L,a[5]=m*A+E*l+y*f+T*z,a[9]=m*b+E*d+y*S+T*F,a[13]=m*P+E*_+y*I+T*N,a[2]=v*w+R*h+C*g+M*L,a[6]=v*A+R*l+C*f+M*z,a[10]=v*b+R*d+C*S+M*F,a[14]=v*P+R*_+C*I+M*N,a[3]=D*w+O*h+p*g+x*L,a[7]=D*A+O*l+p*f+x*z,a[11]=D*b+O*d+p*S+x*F,a[15]=D*P+O*_+p*I+x*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],u=e[13],m=e[2],E=e[6],y=e[10],T=e[14],v=e[3],R=e[7],C=e[11],M=e[15],D=c*T-u*y,O=o*T-u*E,p=o*y-c*E,x=s*T-u*m,w=s*y-c*m,A=s*E-o*m;return t*(R*D-C*O+M*p)-i*(v*D-C*x+M*w)+r*(v*O-R*x+M*A)-a*(v*p-R*w+C*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[1],s=e[5],o=e[9],c=e[2],u=e[6],m=e[10];return t*(s*m-o*u)-i*(a*m-o*c)+r*(a*u-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],m=e[8],E=e[9],y=e[10],T=e[11],v=e[12],R=e[13],C=e[14],M=e[15],D=t*o-i*s,O=t*c-r*s,p=t*u-a*s,x=i*c-r*o,w=i*u-a*o,A=r*u-a*c,b=m*R-E*v,P=m*C-y*v,h=m*M-T*v,l=E*C-y*R,d=E*M-T*R,_=y*M-T*C,g=D*_-O*d+p*l+x*h-w*P+A*b;if(g===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/g;return e[0]=(o*_-c*d+u*l)*f,e[1]=(r*d-i*_-a*l)*f,e[2]=(R*A-C*w+M*x)*f,e[3]=(y*w-E*A-T*x)*f,e[4]=(c*h-s*_-u*P)*f,e[5]=(t*_-r*h+a*P)*f,e[6]=(C*p-v*A-M*O)*f,e[7]=(m*A-y*p+T*O)*f,e[8]=(s*d-o*h+u*b)*f,e[9]=(i*h-t*d-a*b)*f,e[10]=(v*w-R*p+M*D)*f,e[11]=(E*p-m*w-T*D)*f,e[12]=(o*P-s*l-c*b)*f,e[13]=(t*l-i*P+r*b)*f,e[14]=(R*O-v*x-C*D)*f,e[15]=(m*x-E*O+y*D)*f,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,u=a*s,m=a*o;return this.set(u*s+i,u*o-r*c,u*c+r*o,0,u*o+r*c,m*o+i,m*c-r*s,0,u*c-r*o,m*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,u=a+a,m=s+s,E=o+o,y=a*u,T=a*m,v=a*E,R=s*m,C=s*E,M=o*E,D=c*u,O=c*m,p=c*E,x=i.x,w=i.y,A=i.z;return r[0]=(1-(R+M))*x,r[1]=(T+p)*x,r[2]=(v-O)*x,r[3]=0,r[4]=(T-p)*w,r[5]=(1-(y+M))*w,r[6]=(C+D)*w,r[7]=0,r[8]=(v+O)*A,r[9]=(C-D)*A,r[10]=(1-(y+R))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let s=Js.set(r[0],r[1],r[2]).length(),o=Js.set(r[4],r[5],r[6]).length(),c=Js.set(r[8],r[9],r[10]).length();a<0&&(s=-s),Bi.copy(this);let u=1/s,m=1/o,E=1/c;return Bi.elements[0]*=u,Bi.elements[1]*=u,Bi.elements[2]*=u,Bi.elements[4]*=m,Bi.elements[5]*=m,Bi.elements[6]*=m,Bi.elements[8]*=E,Bi.elements[9]*=E,Bi.elements[10]*=E,t.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=c,this}makePerspective(e,t,i,r,a,s,o=Gi,c=!1){let u=this.elements,m=2*a/(t-e),E=2*a/(i-r),y=(t+e)/(t-e),T=(i+r)/(i-r),v,R;if(c)v=a/(s-a),R=s*a/(s-a);else if(o===Gi)v=-(s+a)/(s-a),R=-2*s*a/(s-a);else if(o===fa)v=-s/(s-a),R=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=m,u[4]=0,u[8]=y,u[12]=0,u[1]=0,u[5]=E,u[9]=T,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=R,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=Gi,c=!1){let u=this.elements,m=2/(t-e),E=2/(i-r),y=-(t+e)/(t-e),T=-(i+r)/(i-r),v,R;if(c)v=1/(s-a),R=s/(s-a);else if(o===Gi)v=-2/(s-a),R=-(s+a)/(s-a);else if(o===fa)v=-1/(s-a),R=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=m,u[4]=0,u[8]=0,u[12]=y,u[1]=0,u[5]=E,u[9]=0,u[13]=T,u[2]=0,u[6]=0,u[10]=v,u[14]=R,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Oc.prototype.isMatrix4=!0;var Le=Oc,Js=new W,Bi=new Le,v1=new W(0,0,0),y1=new W(1,1,1),Vr=new W,z0=new W,li=new W,Vd=new Le,Hd=new fn,Nn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],u=r[5],m=r[9],E=r[2],y=r[6],T=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,T),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(y,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,T),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-E,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-E,T),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-pt(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(y,T),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,u),this._y=Math.atan2(-E,a)):(this._x=0,this._y=Math.atan2(o,T));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(y,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-m,T),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b1=0,Gd=new W,Ks=new fn,gr=new Le,L0=new W,eo=new W,S1=new W,E1=new fn,Wd=new W(1,0,0),Xd=new W(0,1,0),qd=new W(0,0,1),jd={type:"added"},T1={type:"removed"},Qs={type:"childadded",child:null},ph={type:"childremoved",child:null},vn=class n extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new Nn,i=new fn,r=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new st}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?L0.copy(e):L0.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(eo,L0,this.up):gr.lookAt(L0,eo,this.up),this.quaternion.setFromRotationMatrix(gr),r&&(gr.extractRotation(r.matrixWorld),Ks.setFromRotationMatrix(gr),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T1),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,E1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,m=c.length;u<m;u++){let E=c[u];a(e.shapes,E)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),u=s(e.textures),m=s(e.images),E=s(e.shapes),y=s(e.skeletons),T=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),m.length>0&&(i.images=m),E.length>0&&(i.shapes=E),y.length>0&&(i.skeletons=y),T.length>0&&(i.animations=T),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){let c=[];for(let u in o){let m=o[u];delete m.metadata,c.push(m)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new W(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w1={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(let R of e.hand.values()){let C=t.getJointPose(R,i),M=this._getHandJoint(u,R);C!==null&&(M.matrix.fromArray(C.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=C.radius),M.visible=C!==null}let m=u.joints["index-finger-tip"],E=u.joints["thumb-tip"],y=m.position.distanceTo(E.position),T=.02,v=.005;u.inputState.pinching&&y>T+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&y<=T-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},O0={h:0,s:0,l:0};function mh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ft.workingColorSpace){if(e=ou(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=mh(s,a,e+1/3),this.g=mh(s,a,e),this.b=mh(s,a,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,t=ui){function i(a){a!==void 0&&parseFloat(a)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){let i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return ft.workingToColorSpace(Fn.copy(this),e),Math.round(pt(Fn.r*255,0,255))*65536+Math.round(pt(Fn.g*255,0,255))*256+Math.round(pt(Fn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Fn.copy(this),t);let i=Fn.r,r=Fn.g,a=Fn.b,s=Math.max(i,r,a),o=Math.min(i,r,a),c,u,m=(o+s)/2;if(o===s)c=0,u=0;else{let E=s-o;switch(u=m<=.5?E/(s+o):E/(2-s-o),s){case i:c=(r-a)/E+(r<a?6:0);break;case r:c=(a-i)/E+2;break;case a:c=(i-r)/E+4;break}c/=6}return e.h=c,e.s=u,e.l=m,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ui){ft.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,i=Fn.g,r=Fn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(O0);let i=co(Hr.h,O0.h,t),r=co(Hr.s,O0.s,t),a=co(Hr.l,O0.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Be;Be.NAMES=Yf;var Ts=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ki=new W,xr=new W,gh=new W,_r=new W,ea=new W,ta=new W,Yd=new W,xh=new W,_h=new W,vh=new W,yh=new Vt,bh=new Vt,Sh=new Vt,qr=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ki.subVectors(e,t),r.cross(ki);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){ki.subVectors(r,t),xr.subVectors(i,t),gh.subVectors(e,t);let s=ki.dot(ki),o=ki.dot(xr),c=ki.dot(gh),u=xr.dot(xr),m=xr.dot(gh),E=s*u-o*o;if(E===0)return a.set(0,0,0),null;let y=1/E,T=(u*c-o*m)*y,v=(s*m-o*c)*y;return a.set(1-T-v,v,T)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,r,a,s,o,c){return this.getBarycoord(e,t,i,r,_r)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,_r.x),c.addScaledVector(s,_r.y),c.addScaledVector(o,_r.z),c)}static getInterpolatedAttribute(e,t,i,r,a,s){return yh.setScalar(0),bh.setScalar(0),Sh.setScalar(0),yh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(yh,a.x),s.addScaledVector(bh,a.y),s.addScaledVector(Sh,a.z),s}static isFrontFacing(e,t,i,r){return ki.subVectors(i,t),xr.subVectors(e,t),ki.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),ki.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,a=this.c,s,o;ea.subVectors(r,i),ta.subVectors(a,i),xh.subVectors(e,i);let c=ea.dot(xh),u=ta.dot(xh);if(c<=0&&u<=0)return t.copy(i);_h.subVectors(e,r);let m=ea.dot(_h),E=ta.dot(_h);if(m>=0&&E<=m)return t.copy(r);let y=c*E-m*u;if(y<=0&&c>=0&&m<=0)return s=c/(c-m),t.copy(i).addScaledVector(ea,s);vh.subVectors(e,a);let T=ea.dot(vh),v=ta.dot(vh);if(v>=0&&T<=v)return t.copy(a);let R=T*u-c*v;if(R<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(i).addScaledVector(ta,o);let C=m*v-T*E;if(C<=0&&E-m>=0&&T-v>=0)return Yd.subVectors(a,r),o=(E-m)/(E-m+(T-v)),t.copy(r).addScaledVector(Yd,o);let M=1/(C+R+y);return s=R*M,o=y*M,t.copy(i).addScaledVector(ea,s).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ti=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vi):Vi.fromBufferAttribute(a,s),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),F0.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),F0.copy(i.boundingBox)),F0.applyMatrix4(e.matrixWorld),this.union(F0)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),N0.subVectors(this.max,to),na.subVectors(e.a,to),ia.subVectors(e.b,to),ra.subVectors(e.c,to),Gr.subVectors(ia,na),Wr.subVectors(ra,ia),xs.subVectors(na,ra);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-xs.z,xs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,xs.z,0,-xs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-xs.y,xs.x,0];return!Eh(t,na,ia,ra,N0)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,na,ia,ra,N0))?!1:(U0.crossVectors(Gr,Wr),t=[U0.x,U0.y,U0.z],Eh(t,na,ia,ra,N0))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vr=[new W,new W,new W,new W,new W,new W,new W,new W],Vi=new W,F0=new Ti,na=new W,ia=new W,ra=new W,Gr=new W,Wr=new W,xs=new W,to=new W,N0=new W,U0=new W,_s=new W;function Eh(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){_s.fromArray(n,a);let o=r.x*Math.abs(_s.x)+r.y*Math.abs(_s.y)+r.z*Math.abs(_s.z),c=e.dot(_s),u=t.dot(_s),m=i.dot(_s);if(Math.max(-Math.max(c,u,m),Math.min(c,u,m))>o)return!1}return!0}var hn=new W,B0=new ye,A1=0,jn=class extends tr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gf,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)B0.fromBufferAttribute(this,t),B0.applyMatrix3(e),this.setXY(t,B0.x,B0.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var go=class extends jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xo=class extends jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var wt=class extends jn{constructor(e,t,i){super(new Float32Array(e),t,i)}},C1=new Ti,no=new W,Th=new W,jr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):C1.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Th)),this.expandByPoint(no.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M1=0,Ei=new Le,wh=new vn,sa=new W,hi=new Ti,io=new Ti,_n=new W,pn=class n extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?xo:go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new st().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,a=e.length;r<a;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new wt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let a=t[i];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];io.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(hi.min,io.min),hi.expandByPoint(_n),_n.addVectors(hi.max,io.max),hi.expandByPoint(_n)):(hi.expandByPoint(io.min),hi.expandByPoint(io.max))}hi.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)_n.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(_n));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],c=this.morphTargetsRelative;for(let u=0,m=o.count;u<m;u++)_n.fromBufferAttribute(o,u),c&&(sa.fromBufferAttribute(e,u),_n.add(sa)),r=Math.max(r,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,a=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let o=[],c=[];for(let b=0;b<i.count;b++)o[b]=new W,c[b]=new W;let u=new W,m=new W,E=new W,y=new ye,T=new ye,v=new ye,R=new W,C=new W;function M(b,P,h){u.fromBufferAttribute(i,b),m.fromBufferAttribute(i,P),E.fromBufferAttribute(i,h),y.fromBufferAttribute(a,b),T.fromBufferAttribute(a,P),v.fromBufferAttribute(a,h),m.sub(u),E.sub(u),T.sub(y),v.sub(y);let l=1/(T.x*v.y-v.x*T.y);isFinite(l)&&(R.copy(m).multiplyScalar(v.y).addScaledVector(E,-T.y).multiplyScalar(l),C.copy(E).multiplyScalar(T.x).addScaledVector(m,-v.x).multiplyScalar(l),o[b].add(R),o[P].add(R),o[h].add(R),c[b].add(C),c[P].add(C),c[h].add(C))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let b=0,P=D.length;b<P;++b){let h=D[b],l=h.start,d=h.count;for(let _=l,g=l+d;_<g;_+=3)M(e.getX(_+0),e.getX(_+1),e.getX(_+2))}let O=new W,p=new W,x=new W,w=new W;function A(b){x.fromBufferAttribute(r,b),w.copy(x);let P=o[b];O.copy(P),O.sub(x.multiplyScalar(x.dot(P))).normalize(),p.crossVectors(w,P);let l=p.dot(c[b])<0?-1:1;s.setXYZW(b,O.x,O.y,O.z,l)}for(let b=0,P=D.length;b<P;++b){let h=D[b],l=h.start,d=h.count;for(let _=l,g=l+d;_<g;_+=3)A(e.getX(_+0)),A(e.getX(_+1)),A(e.getX(_+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let y=0,T=i.count;y<T;y++)i.setXYZ(y,0,0,0);let r=new W,a=new W,s=new W,o=new W,c=new W,u=new W,m=new W,E=new W;if(e)for(let y=0,T=e.count;y<T;y+=3){let v=e.getX(y+0),R=e.getX(y+1),C=e.getX(y+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,R),s.fromBufferAttribute(t,C),m.subVectors(s,a),E.subVectors(r,a),m.cross(E),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),o.add(m),c.add(m),u.add(m),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(R,c.x,c.y,c.z),i.setXYZ(C,u.x,u.y,u.z)}else for(let y=0,T=t.count;y<T;y+=3)r.fromBufferAttribute(t,y+0),a.fromBufferAttribute(t,y+1),s.fromBufferAttribute(t,y+2),m.subVectors(s,a),E.subVectors(r,a),m.cross(E),i.setXYZ(y+0,m.x,m.y,m.z),i.setXYZ(y+1,m.x,m.y,m.z),i.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){let u=o.array,m=o.itemSize,E=o.normalized,y=new u.constructor(c.length*m),T=0,v=0;for(let R=0,C=c.length;R<C;R++){o.isInterleavedBufferAttribute?T=c[R]*o.data.stride+o.offset:T=c[R]*m;for(let M=0;M<m;M++)y[v++]=u[T++]}return new jn(y,m,E)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,i);t.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let c=[],u=a[o];for(let m=0,E=u.length;m<E;m++){let y=u[m],T=e(y,i);c.push(T)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let u=s[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let u=i[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},a=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],m=[];for(let E=0,y=u.length;E<y;E++){let T=u[E];m.push(T.toJSON(e.data))}m.length>0&&(r[c]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let u in r){let m=r[u];this.setAttribute(u,m.clone(t))}let a=e.morphAttributes;for(let u in a){let m=[],E=a[u];for(let y=0,T=E.length;y<T;y++)m.push(E[y].clone(t));this.morphAttributes[u]=m}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let u=0,m=s.length;u<m;u++){let E=s[u];this.addGroup(E.start,E.count,E.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ah=new W,R1=new W,P1=new st,Hi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ah.subVectors(i,t).cross(R1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Ah),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||P1.getNormalMatrix(e),r=this.coplanarPoint(Ah).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},I1=0,Wi=class extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Qr,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Jh,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nc,this.stencilZFail=nc,this.stencilZPass=nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let s=[];for(let o in a){let c=a[o];delete c.metadata,s.push(c)}return s}if(t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var yr=new W,Ch=new W,k0=new W,V0=new W,_o=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ch.copy(e).add(t).multiplyScalar(.5),k0.copy(t).sub(e).normalize(),V0.copy(this.origin).sub(Ch);let a=e.distanceTo(t)*.5,s=-this.direction.dot(k0),o=V0.dot(this.direction),c=-V0.dot(k0),u=V0.lengthSq(),m=Math.abs(1-s*s),E,y,T,v;if(m>0)if(E=s*c-o,y=s*o-c,v=a*m,E>=0)if(y>=-v)if(y<=v){let R=1/m;E*=R,y*=R,T=E*(E+s*y+2*o)+y*(s*E+y+2*c)+u}else y=a,E=Math.max(0,-(s*y+o)),T=-E*E+y*(y+2*c)+u;else y=-a,E=Math.max(0,-(s*y+o)),T=-E*E+y*(y+2*c)+u;else y<=-v?(E=Math.max(0,-(-s*a+o)),y=E>0?-a:Math.min(Math.max(-a,-c),a),T=-E*E+y*(y+2*c)+u):y<=v?(E=0,y=Math.min(Math.max(-a,-c),a),T=y*(y+2*c)+u):(E=Math.max(0,-(s*a+o)),y=E>0?a:Math.min(Math.max(-a,-c),a),T=-E*E+y*(y+2*c)+u);else y=s>0?-a:a,E=Math.max(0,-(s*y+o)),T=-E*E+y*(y+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,E),r&&r.copy(Ch).addScaledVector(k0,y),T}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);let i=yr.dot(this.direction),r=yr.dot(yr)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,c,u=1/this.direction.x,m=1/this.direction.y,E=1/this.direction.z,y=this.origin;return u>=0?(i=(e.min.x-y.x)*u,r=(e.max.x-y.x)*u):(i=(e.max.x-y.x)*u,r=(e.min.x-y.x)*u),m>=0?(a=(e.min.y-y.y)*m,s=(e.max.y-y.y)*m):(a=(e.max.y-y.y)*m,s=(e.min.y-y.y)*m),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),E>=0?(o=(e.min.z-y.z)*E,c=(e.max.z-y.z)*E):(o=(e.max.z-y.z)*E,c=(e.min.z-y.z)*E),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,a){let s=this.origin,o=this.direction,c=o.x,u=o.y,m=o.z,E=e.x-s.x,y=e.y-s.y,T=e.z-s.z,v=t.x-s.x,R=t.y-s.y,C=t.z-s.z,M=i.x-s.x,D=i.y-s.y,O=i.z-s.z,p=Math.abs(c),x=Math.abs(u),w=Math.abs(m),A,b,P,h,l,d,_,g,f,S,I,L;if(p>=x&&p>=w?(P=c,d=E,f=v,L=M,c>=0?(A=u,b=m,h=y,l=T,_=R,g=C,S=D,I=O):(A=m,b=u,h=T,l=y,_=C,g=R,S=O,I=D)):x>=w?(P=u,d=y,f=R,L=D,u>=0?(A=m,b=c,h=T,l=E,_=C,g=v,S=O,I=M):(A=c,b=m,h=E,l=T,_=v,g=C,S=M,I=O)):(P=m,d=T,f=C,L=O,m>=0?(A=c,b=u,h=E,l=y,_=v,g=R,S=M,I=D):(A=u,b=c,h=y,l=E,_=R,g=v,S=D,I=M)),P===0)return null;let z=A/P,F=b/P,N=1/P,B=h-z*d,V=l-F*d,X=_-z*f,Z=g-F*f,se=S-z*L,G=I-F*L,j=se*Z-G*X,re=B*G-V*se,ce=X*V-Z*B;if(r){if(j<0||re<0||ce<0)return null}else if((j<0||re<0||ce<0)&&(j>0||re>0||ce>0))return null;let J=j+re+ce;if(J===0)return null;let ge=N*(j*d+re*f+ce*L);return(J>0?ge<0:ge>0)?null:this.at(ge/J,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ws=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zd=new Le,vs=new _o,H0=new jr,$d=new W,G0=new W,W0=new W,X0=new W,Mh=new W,q0=new W,Jd=new W,j0=new W,$e=class extends vn{constructor(e=new pn,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){let o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){q0.set(0,0,0);for(let c=0,u=a.length;c<u;c++){let m=o[c],E=a[c];m!==0&&(Mh.fromBufferAttribute(E,e),s?q0.addScaledVector(Mh,m):q0.addScaledVector(Mh.sub(t),m))}t.add(q0)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),H0.copy(i.boundingSphere),H0.applyMatrix4(a),vs.copy(e.ray).recast(e.near),!(H0.containsPoint(vs.origin)===!1&&(vs.intersectSphere(H0,$d)===null||vs.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Zd.copy(a).invert(),vs.copy(e.ray).applyMatrix4(Zd),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,u=a.attributes.uv,m=a.attributes.uv1,E=a.attributes.normal,y=a.groups,T=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,R=y.length;v<R;v++){let C=y[v],M=s[C.materialIndex],D=Math.max(C.start,T.start),O=Math.min(o.count,Math.min(C.start+C.count,T.start+T.count));for(let p=D,x=O;p<x;p+=3){let w=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);r=Y0(this,M,e,i,u,m,E,w,A,b),r&&(r.faceIndex=Math.floor(p/3),r.face.materialIndex=C.materialIndex,t.push(r))}}else{let v=Math.max(0,T.start),R=Math.min(o.count,T.start+T.count);for(let C=v,M=R;C<M;C+=3){let D=o.getX(C),O=o.getX(C+1),p=o.getX(C+2);r=Y0(this,s,e,i,u,m,E,D,O,p),r&&(r.faceIndex=Math.floor(C/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,R=y.length;v<R;v++){let C=y[v],M=s[C.materialIndex],D=Math.max(C.start,T.start),O=Math.min(c.count,Math.min(C.start+C.count,T.start+T.count));for(let p=D,x=O;p<x;p+=3){let w=p,A=p+1,b=p+2;r=Y0(this,M,e,i,u,m,E,w,A,b),r&&(r.faceIndex=Math.floor(p/3),r.face.materialIndex=C.materialIndex,t.push(r))}}else{let v=Math.max(0,T.start),R=Math.min(c.count,T.start+T.count);for(let C=v,M=R;C<M;C+=3){let D=C,O=C+1,p=C+2;r=Y0(this,s,e,i,u,m,E,D,O,p),r&&(r.faceIndex=Math.floor(C/3),t.push(r))}}}};function D1(n,e,t,i,r,a,s,o){let c;if(e.side===Rn?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side===Kr,o),c===null)return null;j0.copy(o),j0.applyMatrix4(n.matrixWorld);let u=t.ray.origin.distanceTo(j0);return u<t.near||u>t.far?null:{distance:u,point:j0.clone(),object:n}}function Y0(n,e,t,i,r,a,s,o,c,u){n.getVertexPosition(o,G0),n.getVertexPosition(c,W0),n.getVertexPosition(u,X0);let m=D1(n,e,t,i,G0,W0,X0,Jd);if(m){let E=new W;qr.getBarycoord(Jd,G0,W0,X0,E),r&&(m.uv=qr.getInterpolatedAttribute(r,o,c,u,E,new ye)),a&&(m.uv1=qr.getInterpolatedAttribute(a,o,c,u,E,new ye)),s&&(m.normal=qr.getInterpolatedAttribute(s,o,c,u,E,new W),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let y={a:o,b:c,c:u,normal:new W,materialIndex:0};qr.getNormal(G0,W0,X0,y.normal),m.face=y,m.barycoord=E}return m}var Sr=class extends Qn{constructor(e=null,t=1,i=1,r,a,s,o,c,u=kt,m=kt,E,y){super(null,s,o,c,u,m,r,a,E,y),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=class extends jn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},aa=new Le,Kd=new Le,Z0=[],Qd=new Ti,z1=new Le,ro=new $e,so=new jr,ut=class extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new va(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,z1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),Qd.copy(e.boundingBox).applyMatrix4(aa),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),so.copy(e.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,s=e*a+1;for(let o=0;o<i.length;o++)i[o]=r[s+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,aa),Kd.multiplyMatrices(i,aa),ro.matrixWorld=Kd,ro.raycast(e,Z0);for(let s=0,o=Z0.length;s<o;s++){let c=Z0[s];c.instanceId=a,c.object=this,t.push(c)}Z0.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(r*this.count),r,this.count,Xc,Ai));let a=this.morphTexture.source.data.data,s=0;for(let u=0;u<i.length;u++)s+=i[u];let o=this.geometry.morphTargetsRelative?1:1-s,c=r*e;return a[c]=o,a.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new jr,L1=new ye(.5,.5),$0=new W,ya=class{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,a=new Hi,s=new Hi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi,i=!1){let r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],u=a[3],m=a[4],E=a[5],y=a[6],T=a[7],v=a[8],R=a[9],C=a[10],M=a[11],D=a[12],O=a[13],p=a[14],x=a[15];if(r[0].setComponents(u-s,T-m,M-v,x-D).normalize(),r[1].setComponents(u+s,T+m,M+v,x+D).normalize(),r[2].setComponents(u+o,T+E,M+R,x+O).normalize(),r[3].setComponents(u-o,T-E,M-R,x-O).normalize(),i)r[4].setComponents(c,y,C,p).normalize(),r[5].setComponents(u-c,T-y,M-C,x-p).normalize();else if(r[4].setComponents(u-c,T-y,M-C,x-p).normalize(),t===Gi)r[5].setComponents(u+c,T+y,M+C,x+p).normalize();else if(t===fa)r[5].setComponents(c,y,C,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=L1.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if($0.x=r.normal.x>0?e.max.x:e.min.x,$0.y=r.normal.y>0?e.max.y:e.min.y,$0.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($0)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vo=class extends Qn{constructor(e=[],t=es,i,r,a,s,o,c,u,m){super(e,t,i,r,a,s,o,c,u,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var nr=class extends Qn{constructor(e,t,i=qi,r,a,s,o=kt,c=kt,u,m=er,E=1){if(m!==er&&m!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let y={width:e,height:t,depth:E};super(y,r,a,s,o,c,m,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mc=class extends nr{constructor(e,t=qi,i=es,r,a,s=kt,o=kt,c,u=er){let m={width:e,height:e,depth:1},E=[m,m,m,m,m,m];super(e,e,t,i,r,a,s,o,c,u),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yo=class extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Un=class n extends pn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let c=[],u=[],m=[],E=[],y=0,T=0;v("z","y","x",-1,-1,i,t,e,s,a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(E,2));function v(R,C,M,D,O,p,x,w,A,b,P){let h=p/A,l=x/b,d=p/2,_=x/2,g=w/2,f=A+1,S=b+1,I=0,L=0,z=new W;for(let F=0;F<S;F++){let N=F*l-_;for(let B=0;B<f;B++){let V=B*h-d;z[R]=V*D,z[C]=N*O,z[M]=g,u.push(z.x,z.y,z.z),z[R]=0,z[C]=0,z[M]=w>0?1:-1,m.push(z.x,z.y,z.z),E.push(B/A),E.push(1-F/b),I+=1}}for(let F=0;F<b;F++)for(let N=0;N<A;N++){let B=y+N+f*F,V=y+N+f*(F+1),X=y+(N+1)+f*(F+1),Z=y+(N+1)+f*F;c.push(B,V,Z),c.push(V,X,Z),L+=6}o.addGroup(T,L,P),T+=L,y+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ei=class n extends pn{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),a=Math.floor(a);let m=[],E=[],y=[],T=[],v=0,R=[],C=i/2,M=0;D(),s===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(m),this.setAttribute("position",new wt(E,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(T,2));function D(){let p=new W,x=new W,w=0,A=(t-e)/i;for(let b=0;b<=a;b++){let P=[],h=b/a,l=h*(t-e)+e;for(let d=0;d<=r;d++){let _=d/r,g=_*c+o,f=Math.sin(g),S=Math.cos(g);x.x=l*f,x.y=-h*i+C,x.z=l*S,E.push(x.x,x.y,x.z),p.set(f,A,S).normalize(),y.push(p.x,p.y,p.z),T.push(_,1-h),P.push(v++)}R.push(P)}for(let b=0;b<r;b++)for(let P=0;P<a;P++){let h=R[P][b],l=R[P+1][b],d=R[P+1][b+1],_=R[P][b+1];(e>0||P!==0)&&(m.push(h,l,_),w+=3),(t>0||P!==a-1)&&(m.push(l,d,_),w+=3)}u.addGroup(M,w,0),M+=w}function O(p){let x=v,w=new ye,A=new W,b=0,P=p===!0?e:t,h=p===!0?1:-1;for(let d=1;d<=r;d++)E.push(0,C*h,0),y.push(0,h,0),T.push(.5,.5),v++;let l=v;for(let d=0;d<=r;d++){let g=d/r*c+o,f=Math.cos(g),S=Math.sin(g);A.x=P*S,A.y=C*h,A.z=P*f,E.push(A.x,A.y,A.z),y.push(0,h,0),w.x=f*.5+.5,w.y=S*.5*h+.5,T.push(w.x,w.y),v++}for(let d=0;d<r;d++){let _=x+d,g=l+d;p===!0?m.push(g,g+1,_):m.push(g+1,g,_),b+=3}u.addGroup(M,b,p===!0?1:2),M+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bo=class n extends ei{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,s;t?s=t:s=e*i[a-1];let o=0,c=a-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=i[r]-s,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(a-1);let m=i[r],y=i[r+1]-m,T=(s-m)/y;return(r+T)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new ye:new W);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,r=[],a=[],s=[],o=new W,c=new Le;for(let T=0;T<=e;T++){let v=T/e;r[T]=this.getTangentAt(v,new W)}a[0]=new W,s[0]=new W;let u=Number.MAX_VALUE,m=Math.abs(r[0].x),E=Math.abs(r[0].y),y=Math.abs(r[0].z);m<=u&&(u=m,i.set(1,0,0)),E<=u&&(u=E,i.set(0,1,0)),y<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let T=1;T<=e;T++){if(a[T]=a[T-1].clone(),s[T]=s[T-1].clone(),o.crossVectors(r[T-1],r[T]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(pt(r[T-1].dot(r[T]),-1,1));a[T].applyMatrix4(c.makeRotationAxis(o,v))}s[T].crossVectors(r[T],a[T])}if(t===!0){let T=Math.acos(pt(a[0].dot(a[e]),-1,1));T/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(T=-T);for(let v=1;v<=e;v++)a[v].applyMatrix4(c.makeRotationAxis(r[v],T*v)),s[v].crossVectors(r[v],a[v])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ba=class extends di{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ye){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);let o=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let m=Math.cos(this.aRotation),E=Math.sin(this.aRotation),y=c-this.aX,T=u-this.aY;c=y*m-T*E+this.aX,u=y*E+T*m+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gc=class extends ba{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let n=0,e=0,t=0,i=0;function r(a,s,o,c){n=a,e=o,t=-3*a+3*s-2*o-c,i=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,u){r(s,o,u*(o-a),u*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,u,m,E){let y=(s-a)/u-(o-a)/(u+m)+(o-s)/m,T=(o-s)/m-(c-s)/(m+E)+(c-o)/E;y*=m,T*=m,r(s,o,y,T)},calc:function(a){let s=a*a,o=s*a;return n+e*a+t*s+i*o}}}var ef=new W,tf=new W,Rh=new cu,Ph=new cu,Ih=new cu,Sa=class extends di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let u,m;this.closed||o>0?u=r[(o-1)%a]:(tf.subVectors(r[0],r[1]).add(r[0]),u=tf);let E=r[o%a],y=r[(o+1)%a];if(this.closed||o+2<a?m=r[(o+2)%a]:(ef.subVectors(r[a-1],r[a-2]).add(r[a-1]),m=ef),this.curveType==="centripetal"||this.curveType==="chordal"){let T=this.curveType==="chordal"?.5:.25,v=Math.pow(u.distanceToSquared(E),T),R=Math.pow(E.distanceToSquared(y),T),C=Math.pow(y.distanceToSquared(m),T);R<1e-4&&(R=1),v<1e-4&&(v=R),C<1e-4&&(C=R),Rh.initNonuniformCatmullRom(u.x,E.x,y.x,m.x,v,R,C),Ph.initNonuniformCatmullRom(u.y,E.y,y.y,m.y,v,R,C),Ih.initNonuniformCatmullRom(u.z,E.z,y.z,m.z,v,R,C)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(u.x,E.x,y.x,m.x,this.tension),Ph.initCatmullRom(u.y,E.y,y.y,m.y,this.tension),Ih.initCatmullRom(u.z,E.z,y.z,m.z,this.tension));return i.set(Rh.calc(c),Ph.calc(c),Ih.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nf(n,e,t,i,r){let a=(i-e)*.5,s=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+s)*c+(-3*t+3*i-2*a-s)*o+a*n+t}function O1(n,e){let t=1-n;return t*t*e}function F1(n,e){return 2*(1-n)*n*e}function N1(n,e){return n*n*e}function lo(n,e,t,i){return O1(n,e)+F1(n,t)+N1(n,i)}function U1(n,e){let t=1-n;return t*t*t*e}function B1(n,e){let t=1-n;return 3*t*t*n*e}function k1(n,e){return 3*(1-n)*n*n*e}function V1(n,e){return n*n*n*e}function ho(n,e,t,i,r){return U1(n,e)+B1(n,t)+k1(n,i)+V1(n,r)}var So=class extends di{constructor(e=new ye,t=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ye){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ho(e,r.x,a.x,s.x,o.x),ho(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends di{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(ho(e,r.x,a.x,s.x,o.x),ho(e,r.y,a.y,s.y,o.y),ho(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends di{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends di{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends di{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(lo(e,r.x,a.x,s.x),lo(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends di{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(lo(e,r.x,a.x,s.x),lo(e,r.y,a.y,s.y),lo(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],u=r[s],m=r[s>r.length-2?r.length-1:s+1],E=r[s>r.length-3?r.length-1:s+2];return i.set(nf(o,c.x,u.x,m.x,E.x),nf(o,c.y,u.y,m.y,E.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ye().fromArray(r))}return this}},vc=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:Sa,CubicBezierCurve:So,CubicBezierCurve3:xc,EllipseCurve:ba,LineCurve:Eo,LineCurve3:_c,QuadraticBezierCurve:To,QuadraticBezierCurve3:wo,SplineCurve:Ao}),yc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,o=this.curves[a],c=o.getLength(),u=c===0?0:1-s/c;return o.getPointAt(u,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let u=0;u<c.length;u++){let m=c[u];i&&i.equals(m)||(t.push(m),i=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new vc[r.type]().fromJSON(r))}return this}},Co=class extends yc{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Eo(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new To(this.currentPoint.clone(),new ye(e,t),new ye(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let o=new So(this.currentPoint.clone(),new ye(e,t),new ye(i,r),new ye(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ao(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,c){let u=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+u,t+m,i,r,a,s,o,c),this}absellipse(e,t,i,r,a,s,o,c){let u=new ba(e,t,i,r,a,s,o,c);if(this.curves.length>0){let E=u.getPoint(0);E.equals(this.currentPoint)||this.lineTo(E.x,E.y)}this.curves.push(u);let m=u.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mn=class extends Co{constructor(e){super(e),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Co().fromJSON(r))}return this}};function H1(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,a=Zf(n,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,c,u;if(i&&(a=j1(n,e,a,t)),n.length>80*t){o=n[0],c=n[1];let m=o,E=c;for(let y=t;y<r;y+=t){let T=n[y],v=n[y+1];T<o&&(o=T),v<c&&(c=v),T>m&&(m=T),v>E&&(E=v)}u=Math.max(m-o,E-c),u=u!==0?32767/u:0}return Mo(a,s,t,o,c,u,0),s}function Zf(n,e,t,i,r){let a;if(r===rg(n,e,t,i)>0)for(let s=e;s<t;s+=i)a=rf(s/i|0,n[s],n[s+1],a);else for(let s=t-i;s>=e;s-=i)a=rf(s/i|0,n[s],n[s+1],a);return a&&Ea(a,a.next)&&(Po(a),a=a.next),a}function As(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ea(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Po(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Mo(n,e,t,i,r,a,s){if(!n)return;!s&&a&&K1(n,i,r,a);let o=n;for(;n.prev!==n.next;){let c=n.prev,u=n.next;if(a?W1(n,i,r,a):G1(n)){e.push(c.i,n.i,u.i),Po(n),n=u.next,o=u.next;continue}if(n=u,n===o){s?s===1?(n=X1(As(n),e),Mo(n,e,t,i,r,a,2)):s===2&&q1(n,e,t,i,r,a):Mo(As(n),e,t,i,r,a,1);break}}}function G1(n){let e=n.prev,t=n,i=n.next;if(Xt(e,t,i)>=0)return!1;let r=e.x,a=t.x,s=i.x,o=e.y,c=t.y,u=i.y,m=Math.min(r,a,s),E=Math.min(o,c,u),y=Math.max(r,a,s),T=Math.max(o,c,u),v=i.next;for(;v!==e;){if(v.x>=m&&v.x<=y&&v.y>=E&&v.y<=T&&ao(r,o,a,c,s,u,v.x,v.y)&&Xt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function W1(n,e,t,i){let r=n.prev,a=n,s=n.next;if(Xt(r,a,s)>=0)return!1;let o=r.x,c=a.x,u=s.x,m=r.y,E=a.y,y=s.y,T=Math.min(o,c,u),v=Math.min(m,E,y),R=Math.max(o,c,u),C=Math.max(m,E,y),M=Uh(T,v,e,t,i),D=Uh(R,C,e,t,i),O=n.prevZ,p=n.nextZ;for(;O&&O.z>=M&&p&&p.z<=D;){if(O.x>=T&&O.x<=R&&O.y>=v&&O.y<=C&&O!==r&&O!==s&&ao(o,m,c,E,u,y,O.x,O.y)&&Xt(O.prev,O,O.next)>=0||(O=O.prevZ,p.x>=T&&p.x<=R&&p.y>=v&&p.y<=C&&p!==r&&p!==s&&ao(o,m,c,E,u,y,p.x,p.y)&&Xt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;O&&O.z>=M;){if(O.x>=T&&O.x<=R&&O.y>=v&&O.y<=C&&O!==r&&O!==s&&ao(o,m,c,E,u,y,O.x,O.y)&&Xt(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;p&&p.z<=D;){if(p.x>=T&&p.x<=R&&p.y>=v&&p.y<=C&&p!==r&&p!==s&&ao(o,m,c,E,u,y,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function X1(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Ea(i,r)&&Jf(i,t,t.next,r)&&Ro(i,r)&&Ro(r,i)&&(e.push(i.i,t.i,r.i),Po(t),Po(t.next),t=n=r),t=t.next}while(t!==n);return As(t)}function q1(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&tg(s,o)){let c=Kf(s,o);s=As(s,s.next),c=As(c,c.next),Mo(s,e,t,i,r,a,0),Mo(c,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function j1(n,e,t,i){let r=[];for(let a=0,s=e.length;a<s;a++){let o=e[a]*i,c=a<s-1?e[a+1]*i:n.length,u=Zf(n,o,c,i,!1);u===u.next&&(u.steiner=!0),r.push(eg(u))}r.sort(Y1);for(let a=0;a<r.length;a++)t=Z1(r[a],t);return t}function Y1(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Z1(n,e){let t=$1(n,e);if(!t)return e;let i=Kf(t,n);return As(i,i.next),As(t,t.next)}function $1(n,e){let t=e,i=n.x,r=n.y,a=-1/0,s;if(Ea(n,t))return t;do{if(Ea(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let E=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(E<=i&&E>a&&(a=E,s=t.x<t.next.x?t:t.next,E===i))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,u=s.y,m=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&$f(r<u?i:a,r,c,u,r<u?a:i,r,t.x,t.y)){let E=Math.abs(r-t.y)/(i-t.x);Ro(t,n)&&(E<m||E===m&&(t.x>s.x||t.x===s.x&&J1(s,t)))&&(s=t,m=E)}t=t.next}while(t!==o);return s}function J1(n,e){return Xt(n.prev,n,e.prev)<0&&Xt(e.next,n,n.next)<0}function K1(n,e,t,i){let r=n;do r.z===0&&(r.z=Uh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Q1(r)}function Q1(n){let e,t=1;do{let i=n,r;n=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let u=0;u<t&&(o++,s=s.nextZ,!!s);u++);let c=t;for(;o>0||c>0&&s;)o!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,c--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,t*=2}while(e>1);return n}function Uh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $f(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function ao(n,e,t,i,r,a,s,o){return!(n===s&&e===o)&&$f(n,e,t,i,r,a,s,o)}function tg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ng(n,e)&&(Ro(n,e)&&Ro(e,n)&&ig(n,e)&&(Xt(n.prev,n,e.prev)||Xt(n,e.prev,e))||Ea(n,e)&&Xt(n.prev,n,n.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ea(n,e){return n.x===e.x&&n.y===e.y}function Jf(n,e,t,i){let r=K0(Xt(n,e,t)),a=K0(Xt(n,e,i)),s=K0(Xt(t,i,n)),o=K0(Xt(t,i,e));return!!(r!==a&&s!==o||r===0&&J0(n,t,e)||a===0&&J0(n,i,e)||s===0&&J0(t,n,i)||o===0&&J0(t,e,i))}function J0(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function K0(n){return n>0?1:n<0?-1:0}function ng(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ro(n,e){return Xt(n.prev,n,n.next)<0?Xt(n,e,n.next)>=0&&Xt(n,n.prev,e)>=0:Xt(n,e,n.prev)<0||Xt(n,n.next,e)<0}function ig(n,e){let t=n,i=!1,r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kf(n,e){let t=Bh(n.i,n.x,n.y),i=Bh(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function rf(n,e,t,i){let r=Bh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rg(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}var kh=class{static triangulate(e,t,i=2){return H1(e,t,i)}},bs=class n{static area(e){let t=e.length,i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],a=[];sf(e),af(i,e);let s=e.length;t.forEach(sf);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,af(i,t[c]);let o=kh.triangulate(i,r);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}};function sf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function af(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Bn=class n extends pn{constructor(e=new Mn([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],a=[];for(let o=0,c=e.length;o<c;o++){let u=e[o];s(u)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(a,2)),this.computeVertexNormals();function s(o){let c=[],u=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,E=t.depth!==void 0?t.depth:1,y=t.bevelEnabled!==void 0?t.bevelEnabled:!0,T=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:T-.1,R=t.bevelOffset!==void 0?t.bevelOffset:0,C=t.bevelSegments!==void 0?t.bevelSegments:3,M=t.extrudePath,D=t.UVGenerator!==void 0?t.UVGenerator:sg,O,p=!1,x,w,A,b;if(M){O=M.getSpacedPoints(m),p=!0,y=!1;let le=M.isCatmullRomCurve3?M.closed:!1;x=M.computeFrenetFrames(m,le),w=new W,A=new W,b=new W}y||(C=0,T=0,v=0,R=0);let P=o.extractPoints(u),h=P.shape,l=P.holes;if(!bs.isClockWise(h)){h=h.reverse();for(let le=0,Q=l.length;le<Q;le++){let oe=l[le];bs.isClockWise(oe)&&(l[le]=oe.reverse())}}function _(le){let oe=10000000000000001e-36,te=le[0];for(let ue=1;ue<=le.length;ue++){let ve=ue%le.length,Ae=le[ve],Ue=Ae.x-te.x,Je=Ae.y-te.y,q=Ue*Ue+Je*Je,lt=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(te.x),Math.abs(te.y)),et=oe*lt*lt;if(q<=et){le.splice(ve,1),ue--;continue}te=Ae}}_(h),l.forEach(_);let g=l.length,f=h;for(let le=0;le<g;le++){let Q=l[le];h=h.concat(Q)}function S(le,Q,oe){return Q||tt("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(Q,oe)}let I=h.length;function L(le,Q,oe){let te,ue,ve,Ae=le.x-Q.x,Ue=le.y-Q.y,Je=oe.x-le.x,q=oe.y-le.y,lt=Ae*Ae+Ue*Ue,et=Ae*q-Ue*Je;if(Math.abs(et)>Number.EPSILON){let H=Math.sqrt(lt),U=Math.sqrt(Je*Je+q*q),K=Q.x-Ue/H,ne=Q.y+Ae/H,de=oe.x-q/U,_e=oe.y+Je/U,Se=((de-K)*q-(_e-ne)*Je)/(Ae*q-Ue*Je);te=K+Ae*Se-le.x,ue=ne+Ue*Se-le.y;let fe=te*te+ue*ue;if(fe<=2)return new ye(te,ue);ve=Math.sqrt(fe/2)}else{let H=!1;Ae>Number.EPSILON?Je>Number.EPSILON&&(H=!0):Ae<-Number.EPSILON?Je<-Number.EPSILON&&(H=!0):Math.sign(Ue)===Math.sign(q)&&(H=!0),H?(te=-Ue,ue=Ae,ve=Math.sqrt(lt)):(te=Ae,ue=Ue,ve=Math.sqrt(lt/2))}return new ye(te/ve,ue/ve)}let z=[];for(let le=0,Q=f.length,oe=Q-1,te=le+1;le<Q;le++,oe++,te++)oe===Q&&(oe=0),te===Q&&(te=0),z[le]=L(f[le],f[oe],f[te]);let F=[],N,B=z.concat();for(let le=0,Q=g;le<Q;le++){let oe=l[le];N=[];for(let te=0,ue=oe.length,ve=ue-1,Ae=te+1;te<ue;te++,ve++,Ae++)ve===ue&&(ve=0),Ae===ue&&(Ae=0),N[te]=L(oe[te],oe[ve],oe[Ae]);F.push(N),B=B.concat(N)}let V;if(C===0)V=bs.triangulateShape(f,l);else{let le=[],Q=[];for(let oe=0;oe<C;oe++){let te=oe/C,ue=T*Math.cos(te*Math.PI/2),ve=v*Math.sin(te*Math.PI/2)+R;for(let Ae=0,Ue=f.length;Ae<Ue;Ae++){let Je=S(f[Ae],z[Ae],ve);re(Je.x,Je.y,-ue),te===0&&le.push(Je)}for(let Ae=0,Ue=g;Ae<Ue;Ae++){let Je=l[Ae];N=F[Ae];let q=[];for(let lt=0,et=Je.length;lt<et;lt++){let H=S(Je[lt],N[lt],ve);re(H.x,H.y,-ue),te===0&&q.push(H)}te===0&&Q.push(q)}}V=bs.triangulateShape(le,Q)}let X=V.length,Z=v+R;for(let le=0;le<I;le++){let Q=y?S(h[le],B[le],Z):h[le];p?(A.copy(x.normals[0]).multiplyScalar(Q.x),w.copy(x.binormals[0]).multiplyScalar(Q.y),b.copy(O[0]).add(A).add(w),re(b.x,b.y,b.z)):re(Q.x,Q.y,0)}for(let le=1;le<=m;le++)for(let Q=0;Q<I;Q++){let oe=y?S(h[Q],B[Q],Z):h[Q];p?(A.copy(x.normals[le]).multiplyScalar(oe.x),w.copy(x.binormals[le]).multiplyScalar(oe.y),b.copy(O[le]).add(A).add(w),re(b.x,b.y,b.z)):re(oe.x,oe.y,E/m*le)}for(let le=C-1;le>=0;le--){let Q=le/C,oe=T*Math.cos(Q*Math.PI/2),te=v*Math.sin(Q*Math.PI/2)+R;for(let ue=0,ve=f.length;ue<ve;ue++){let Ae=S(f[ue],z[ue],te);re(Ae.x,Ae.y,E+oe)}for(let ue=0,ve=l.length;ue<ve;ue++){let Ae=l[ue];N=F[ue];for(let Ue=0,Je=Ae.length;Ue<Je;Ue++){let q=S(Ae[Ue],N[Ue],te);p?re(q.x,q.y+O[m-1].y,O[m-1].x+oe):re(q.x,q.y,E+oe)}}}se(),G();function se(){let le=r.length/3;if(y){let Q=0,oe=I*Q;for(let te=0;te<X;te++){let ue=V[te];ce(ue[2]+oe,ue[1]+oe,ue[0]+oe)}Q=m+C*2,oe=I*Q;for(let te=0;te<X;te++){let ue=V[te];ce(ue[0]+oe,ue[1]+oe,ue[2]+oe)}}else{for(let Q=0;Q<X;Q++){let oe=V[Q];ce(oe[2],oe[1],oe[0])}for(let Q=0;Q<X;Q++){let oe=V[Q];ce(oe[0]+I*m,oe[1]+I*m,oe[2]+I*m)}}i.addGroup(le,r.length/3-le,0)}function G(){let le=r.length/3,Q=0;j(f,Q),Q+=f.length;for(let oe=0,te=l.length;oe<te;oe++){let ue=l[oe];j(ue,Q),Q+=ue.length}i.addGroup(le,r.length/3-le,1)}function j(le,Q){let oe=le.length;for(;--oe>=0;){let te=oe,ue=oe-1;ue<0&&(ue=le.length-1);for(let ve=0,Ae=m+C*2;ve<Ae;ve++){let Ue=I*ve,Je=I*(ve+1),q=Q+te+Ue,lt=Q+ue+Ue,et=Q+ue+Je,H=Q+te+Je;J(q,lt,et,H)}}}function re(le,Q,oe){c.push(le),c.push(Q),c.push(oe)}function ce(le,Q,oe){ge(le),ge(Q),ge(oe);let te=r.length/3,ue=D.generateTopUV(i,r,te-3,te-2,te-1);Oe(ue[0]),Oe(ue[1]),Oe(ue[2])}function J(le,Q,oe,te){ge(le),ge(Q),ge(te),ge(Q),ge(oe),ge(te);let ue=r.length/3,ve=D.generateSideWallUV(i,r,ue-6,ue-3,ue-2,ue-1);Oe(ve[0]),Oe(ve[1]),Oe(ve[3]),Oe(ve[1]),Oe(ve[2]),Oe(ve[3])}function ge(le){r.push(c[le*3+0]),r.push(c[le*3+1]),r.push(c[le*3+2])}function Oe(le){a.push(le.x),a.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ag(t,i,e)}static fromJSON(e,t){let i=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vc[r.type]().fromJSON(r)),new n(i,e.options)}},sg={generateTopUV:function(n,e,t,i,r){let a=e[t*3],s=e[t*3+1],o=e[i*3],c=e[i*3+1],u=e[r*3],m=e[r*3+1];return[new ye(a,s),new ye(o,c),new ye(u,m)]},generateSideWallUV:function(n,e,t,i,r,a){let s=e[t*3],o=e[t*3+1],c=e[t*3+2],u=e[i*3],m=e[i*3+1],E=e[i*3+2],y=e[r*3],T=e[r*3+1],v=e[r*3+2],R=e[a*3],C=e[a*3+1],M=e[a*3+2];return Math.abs(o-m)<Math.abs(s-u)?[new ye(s,1-c),new ye(u,1-E),new ye(y,1-v),new ye(R,1-M)]:[new ye(o,1-c),new ye(m,1-E),new ye(T,1-v),new ye(C,1-M)]}};function ag(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Cs=class n extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(r),u=o+1,m=c+1,E=e/o,y=t/c,T=[],v=[],R=[],C=[];for(let M=0;M<m;M++){let D=M*y-s;for(let O=0;O<u;O++){let p=O*E-a;v.push(p,-D,0),R.push(0,0,1),C.push(O/o),C.push(1-M/c)}}for(let M=0;M<c;M++)for(let D=0;D<o;D++){let O=D+u*M,p=D+u*(M+1),x=D+1+u*(M+1),w=D+1+u*M;T.push(O,p,w),T.push(p,x,w)}this.setIndex(T),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(R,3)),this.setAttribute("uv",new wt(C,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var fi=class n extends pn{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+o,Math.PI),u=0,m=[],E=new W,y=new W,T=[],v=[],R=[],C=[];for(let M=0;M<=i;M++){let D=[],O=M/i,p=s+O*o,x=e*Math.cos(p),w=Math.sqrt(e*e-x*x),A=0;M===0&&s===0?A=.5/t:M===i&&c===Math.PI&&(A=-.5/t);for(let b=0;b<=t;b++){let P=b/t,h=r+P*a;E.x=-w*Math.cos(h),E.y=x,E.z=w*Math.sin(h),v.push(E.x,E.y,E.z),y.copy(E).normalize(),R.push(y.x,y.y,y.z),C.push(P+A,1-O),D.push(u++)}m.push(D)}for(let M=0;M<i;M++)for(let D=0;D<t;D++){let O=m[M][D+1],p=m[M][D],x=m[M+1][D],w=m[M+1][D+1];(M!==0||s>0)&&T.push(O,p,w),(M!==i-1||c<Math.PI)&&T.push(p,x,w)}this.setIndex(T),this.setAttribute("position",new wt(v,3)),this.setAttribute("normal",new wt(R,3)),this.setAttribute("uv",new wt(C,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ir=class n extends pn{constructor(e=1,t=.4,i=12,r=48,a=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a,thetaStart:s,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let c=[],u=[],m=[],E=[],y=new W,T=new W,v=new W;for(let R=0;R<=i;R++){let C=s+R/i*o;for(let M=0;M<=r;M++){let D=M/r*a;T.x=(e+t*Math.cos(C))*Math.cos(D),T.y=(e+t*Math.cos(C))*Math.sin(D),T.z=t*Math.sin(C),u.push(T.x,T.y,T.z),y.x=e*Math.cos(D),y.y=e*Math.sin(D),v.subVectors(T,y).normalize(),m.push(v.x,v.y,v.z),E.push(M/r),E.push(R/i)}}for(let R=1;R<=i;R++)for(let C=1;C<=r;C++){let M=(r+1)*R+C-1,D=(r+1)*(R-1)+C-1,O=(r+1)*(R-1)+C,p=(r+1)*R+C;c.push(M,D,p),c.push(D,O,p)}this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(m,3)),this.setAttribute("uv",new wt(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Io=class n extends pn{constructor(e=new wo(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new W,c=new W,u=new ye,m=new W,E=[],y=[],T=[],v=[];R(),this.setIndex(v),this.setAttribute("position",new wt(E,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(T,2));function R(){for(let O=0;O<t;O++)C(O);C(a===!1?t:0),D(),M()}function C(O){m=e.getPointAt(O/t,m);let p=s.normals[O],x=s.binormals[O];for(let w=0;w<=r;w++){let A=w/r*Math.PI*2,b=Math.sin(A),P=-Math.cos(A);c.x=P*p.x+b*x.x,c.y=P*p.y+b*x.y,c.z=P*p.z+b*x.z,c.normalize(),y.push(c.x,c.y,c.z),o.x=m.x+i*c.x,o.y=m.y+i*c.y,o.z=m.z+i*c.z,E.push(o.x,o.y,o.z)}}function M(){for(let O=1;O<=t;O++)for(let p=1;p<=r;p++){let x=(r+1)*(O-1)+(p-1),w=(r+1)*O+(p-1),A=(r+1)*O+p,b=(r+1)*(O-1)+p;v.push(x,w,b),v.push(w,A,b)}}function D(){for(let O=0;O<=t;O++)for(let p=0;p<=r;p++)u.x=O/t,u.y=p/r,T.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Do=class extends Wi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(of(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(of(r[0])){let a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][i]=a}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Vn(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let r in i)e[r]=i[r]}return e}function of(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function og(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Ci={clone:Ls,merge:Vn},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(r.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new st().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ta=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zo=class extends Wi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Lo=class extends Wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Uc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bc=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Yr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];n:{e:{let s;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break n}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ec=class extends Yr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],c=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Fh:a=e,o=2*t-i;break;case Nh:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Fh:s=e,c=2*i-t;break;case Nh:s=1,c=i+r[1]-r[0];break;default:s=e-1,c=t}let u=(i-t)*.5,m=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-i),this._offsetPrev=a*m,this._offsetNext=s*m}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,m=this._offsetPrev,E=this._offsetNext,y=this._weightPrev,T=this._weightNext,v=(i-t)/(r-t),R=v*v,C=R*v,M=-y*C+2*y*R-y*v,D=(1+y)*C+(-1.5-2*y)*R+(-.5+y)*v+1,O=(-1-T)*C+(1.5+T)*R+.5*v,p=T*C-T*R;for(let x=0;x!==o;++x)a[x]=M*s[m+x]+D*s[u+x]+O*s[c+x]+p*s[E+x];return a}},Tc=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,m=(i-t)/(r-t),E=1-m;for(let y=0;y!==o;++y)a[y]=s[u+y]*E+s[c+y]*m;return a}},wc=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends Yr{interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,m=this.inTangents,E=this.outTangents;if(!m||!E){let v=(i-t)/(r-t),R=1-v;for(let C=0;C!==o;++C)a[C]=s[u+C]*R+s[c+C]*v;return a}let y=o*2,T=e-1;for(let v=0;v!==o;++v){let R=s[u+v],C=s[c+v],M=T*y+v*2,D=E[M],O=E[M+1],p=e*y+v*2,x=m[p],w=m[p+1],A=ug(i,t,D,x,r);a[v]=Qf(A,R,O,w,C)}return a}};function Qf(n,e,t,i,r){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*r}function hg(n,e,t,i,r){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(r-i)}function ug(n,e,t,i,r){let a=(n-e)/(r-e);for(let s=0;s<8;s++){let o=Qf(a,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;let c=hg(a,e,t,i,r);if(Math.abs(c)<1e-10)break;a=Math.max(0,Math.min(1,a-o/c))}return a}var pi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Dh(e.settings)&&(i.settings={inTangents:oa(e.settings.inTangents,Array),outTangents:oa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case uo:t=this.InterpolantFactoryMethodDiscrete;break;case uc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case Lh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Dh(this.settings)&&(cf(this.settings.inTangents,e),cf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){tt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){tt("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(r!==void 0&&Qm(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){tt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===tc,a=e.length-1,s=1;for(let o=1;o<a;++o){let c=!1,u=e[o],m=e[o+1];if(u!==m&&(o!==1||u!==e[0]))if(r)c=!0;else{let E=o*i,y=E-i,T=E+i;for(let v=0;v!==i;++v){let R=t[E+v];if(R!==t[y+v]||R!==t[T+v]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let E=o*i,y=s*i;for(let T=0;T!==i;++T)t[y+T]=t[E+T]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,c=s*i,u=0;u!==i;++u)t[c+u]=t[o+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Dh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function cf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=uc;var Zr=class extends pi{constructor(e,t,i){super(e,t,i)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=uo;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}};Cc.prototype.ValueTypeName="color";var Mc=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}};Mc.prototype.ValueTypeName="number";var Rc=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),u=e*o;for(let m=u+o;u!==m;u+=4)fn.slerpFlat(a,0,s,u-o,s,u,c);return a}},Oo=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends pi{constructor(e,t,i){super(e,t,i)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=uo;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends pi{constructor(e,t,i,r){super(e,t,i,r)}};Pc.prototype.ValueTypeName="vector";var Ic=class{constructor(e,t,i){let r=this,a=!1,s=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){o++,a===!1&&r.onStart!==void 0&&r.onStart(m,s,o),a=!0},this.itemEnd=function(m){s++,r.onProgress!==void 0&&r.onProgress(m,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),c?c(m):m},this.setURLModifier=function(m){return c=m,this},this.addHandler=function(m,E){return u.push(m,E),this},this.removeHandler=function(m){let E=u.indexOf(m);return E!==-1&&u.splice(E,2),this},this.getHandler=function(m){for(let E=0,y=u.length;E<y;E+=2){let T=u[E],v=u[E+1];if(T.global&&(T.lastIndex=0),T.test(m))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new Ic,Dc=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fo=class extends wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zh=new Le,lf=new W,hf=new W,No=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,s=r?r.z/a.x:1,o=r?r.w/a.y:1,c=r?r.x/a.x:0,u=r?r.y/a.y:0;e.coordinateSystem===fa||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Q0=new W,ec=new fn,Ji=new W,Uo=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Q0,ec,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Q0,ec,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Q0,ec,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Q0,ec,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xr=new W,uf=new ye,df=new ye,An=class extends Uo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,uf,df),t.subVectors(df,uf)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*i/u,r*=s.width/c,i*=s.height/u}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vh=class extends No{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},Bo=class extends wa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Jr=class extends Uo{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=m*this.view.offsetY,c=o-m*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hh=class extends No{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ca=-90,la=1,zc=class extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new An(ca,la,e,t);r.layers=this.layers,this.add(r);let a=new An(ca,la,e,t);a.layers=this.layers,this.add(a);let s=new An(ca,la,e,t);s.layers=this.layers,this.add(s);let o=new An(ca,la,e,t);o.layers=this.layers,this.add(o);let c=new An(ca,la,e,t);c.layers=this.layers,this.add(c);let u=new An(ca,la,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,c]=t;for(let u of t)this.remove(u);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,c,u,m]=this.children,E=e.getRenderTarget(),y=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let R=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let C=!1;e.isWebGLRenderer===!0?C=e.state.buffers.depth.getReversed():C=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=R,e.setRenderTarget(i,5,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(E,y,T),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Lc=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ko=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=dg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function dg(){this._document.hidden===!1&&this.reset()}var hu="\\[\\]\\.:\\/",fg=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",pg="[^"+hu.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",uu),gg=/(WCOD+)?/.source.replace("WCOD",pg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),vg=new RegExp("^"+mg+gg+xg+_g+"$"),yg=["material","materials","bones","map"],Gh=class{constructor(e,t,i){let r=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(e){let t=vg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);yg.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===u){u=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let s=e[r];if(s===void 0){let u=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Gh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w3=new Float32Array(1);var ff=new Le,Vo=class{constructor(e,t,i=0,r=1/0){this.ray=new _o(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(e,t=!0,i=[]){return Wh(e,this,i,t),i.sort(pf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Wh(e[r],this,i,t);return i.sort(pf),i}};function pf(n,e){return n.distance-e.distance}function Wh(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let a=n.children;for(let s=0,o=a.length;s<o;s++)Wh(a[s],e,t,!0)}}var xu=class xu{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}};xu.prototype.isMatrix2=!0;var Xh=xu;function du(n,e,t,i){let r=bg(i);switch(t){case iu:return n*e;case Xc:return n*e/r.components*r.byteLength;case qc:return n*e/r.components*r.byteLength;case is:return n*e*2/r.components*r.byteLength;case jc:return n*e*2/r.components*r.byteLength;case ru:return n*e*3/r.components*r.byteLength;case ti:return n*e*4/r.components*r.byteLength;case Yc:return n*e*4/r.components*r.byteLength;case Qo:case e0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case t0:case n0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:case Kc:return Math.max(n,16)*Math.max(e,8)/4;case Zc:case Jc:return Math.max(n,8)*Math.max(e,8)/2;case Qc:case el:case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tl:case i0:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vl:case yl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*8;case r0:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(n){switch(n){case kn:case Qh:return{byteLength:1,components:1};case Ca:case eu:case yn:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case qi:case Hc:case Ai:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sp(){let n=null,e=!1,t=null,i=null;function r(a,s){i=n.requestAnimationFrame(r),t(a,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Mg(n){let e=new WeakMap;function t(o,c){let u=o.array,m=o.usage,E=u.byteLength,y=n.createBuffer();n.bindBuffer(c,y),n.bufferData(c,u,m),o.onUploadCallback();let T;if(u instanceof Float32Array)T=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)T=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?T=n.HALF_FLOAT:T=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)T=n.SHORT;else if(u instanceof Uint32Array)T=n.UNSIGNED_INT;else if(u instanceof Int32Array)T=n.INT;else if(u instanceof Int8Array)T=n.BYTE;else if(u instanceof Uint8Array)T=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)T=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:T,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:E}}function i(o,c,u){let m=c.array,E=c.updateRanges;if(n.bindBuffer(u,o),E.length===0)n.bufferSubData(u,0,m);else{E.sort((T,v)=>T.start-v.start);let y=0;for(let T=1;T<E.length;T++){let v=E[y],R=E[T];R.start<=v.start+v.count+1?v.count=Math.max(v.count,R.start+R.count-v.start):(++y,E[y]=R)}E.length=y+1;for(let T=0,v=E.length;T<v;T++){let R=E[T];n.bufferSubData(u,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let m=e.get(o);(!m||m.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:a,update:s}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kg=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e2=`vec3 transformedNormal = objectNormal;
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
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s2="gl_FragColor = linearToOutputTexel( gl_FragColor );",a2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
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
#endif`,h2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g2=`#ifdef USE_GRADIENTMAP
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
}`,x2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b2=`#ifdef USE_ENVMAP
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
#endif`,S2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A2=`PhysicalMaterial material;
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
#endif`,C2=`uniform sampler2D dfgLUT;
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
}`,M2=`
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
#endif`,R2=`#if defined( RE_IndirectDiffuse )
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
#endif`,P2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B2=`#if defined( USE_POINTS_UV )
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
#endif`,k2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
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
#endif`,q2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K2=`#ifdef USE_NORMALMAP
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
#endif`,Q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,px=`float getShadowMask() {
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
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Fx=`#if DEPTH_PACKING == 3200
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,Zx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,Qx=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,a_=`uniform vec3 color;
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
}`,o_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Rg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Dg,alphatest_fragment:zg,alphatest_pars_fragment:Lg,aomap_fragment:Og,aomap_pars_fragment:Fg,batching_pars_vertex:Ng,batching_vertex:Ug,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:Vg,iridescence_fragment:Hg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:jg,color_fragment:Yg,color_pars_fragment:Zg,color_pars_vertex:$g,color_vertex:Jg,common:Kg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:e2,displacementmap_pars_vertex:t2,displacementmap_vertex:n2,emissivemap_fragment:i2,emissivemap_pars_fragment:r2,colorspace_fragment:s2,colorspace_pars_fragment:a2,envmap_fragment:o2,envmap_common_pars_fragment:c2,envmap_pars_fragment:l2,envmap_pars_vertex:h2,envmap_physical_pars_fragment:b2,envmap_vertex:u2,fog_vertex:d2,fog_pars_vertex:f2,fog_fragment:p2,fog_pars_fragment:m2,gradientmap_pars_fragment:g2,lightmap_pars_fragment:x2,lights_lambert_fragment:_2,lights_lambert_pars_fragment:v2,lights_pars_begin:y2,lights_toon_fragment:S2,lights_toon_pars_fragment:E2,lights_phong_fragment:T2,lights_phong_pars_fragment:w2,lights_physical_fragment:A2,lights_physical_pars_fragment:C2,lights_fragment_begin:M2,lights_fragment_maps:R2,lights_fragment_end:P2,lightprobes_pars_fragment:I2,logdepthbuf_fragment:D2,logdepthbuf_pars_fragment:z2,logdepthbuf_pars_vertex:L2,logdepthbuf_vertex:O2,map_fragment:F2,map_pars_fragment:N2,map_particle_fragment:U2,map_particle_pars_fragment:B2,metalnessmap_fragment:k2,metalnessmap_pars_fragment:V2,morphinstance_vertex:H2,morphcolor_vertex:G2,morphnormal_vertex:W2,morphtarget_pars_vertex:X2,morphtarget_vertex:q2,normal_fragment_begin:j2,normal_fragment_maps:Y2,normal_pars_fragment:Z2,normal_pars_vertex:$2,normal_vertex:J2,normalmap_pars_fragment:K2,clearcoat_normal_fragment_begin:Q2,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:tx,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:rx,premultiplied_alpha_fragment:sx,project_vertex:ax,dithering_fragment:ox,dithering_pars_fragment:cx,roughnessmap_fragment:lx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:dx,shadowmap_vertex:fx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:yx,tonemapping_fragment:bx,tonemapping_pars_fragment:Sx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:wx,uv_pars_vertex:Ax,uv_vertex:Cx,worldpos_vertex:Mx,background_vert:Rx,background_frag:Px,backgroundCube_vert:Ix,backgroundCube_frag:Dx,cube_vert:zx,cube_frag:Lx,depth_vert:Ox,depth_frag:Fx,distance_vert:Nx,distance_frag:Ux,equirect_vert:Bx,equirect_frag:kx,linedashed_vert:Vx,linedashed_frag:Hx,meshbasic_vert:Gx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:qx,meshmatcap_vert:jx,meshmatcap_frag:Yx,meshnormal_vert:Zx,meshnormal_frag:$x,meshphong_vert:Jx,meshphong_frag:Kx,meshphysical_vert:Qx,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:r_,shadow_vert:s_,shadow_frag:a_,sprite_vert:o_,sprite_frag:c_},ze={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ar={basic:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Vn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Vn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Be(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Vn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Vn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Vn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Vn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Vn([ze.common,ze.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Vn([ze.lights,ze.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ar.physical={uniforms:Vn([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Cl={r:0,b:0,g:0},l_=new Le,Ep=new st;Ep.set(-1,0,0,0,1,0,0,0,1);function h_(n,e,t,i,r,a){let s=new Be(0),o=r===!0?0:1,c,u,m=null,E=0,y=null;function T(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){let p=D.backgroundBlurriness>0;O=e.get(O,p)}return O}function v(D){let O=!1,p=T(D);p===null?C(s,o):p&&p.isColor&&(C(p,1),O=!0);let x=n.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function R(D,O){let p=T(O);p&&(p.isCubeTexture||p.mapping===Jo)?(u===void 0&&(u=new $e(new Un(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ls(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=p,u.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(O.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ep),u.material.toneMapped=ft.getTransfer(p.colorSpace)!==Et,(m!==p||E!==p.version||y!==n.toneMapping)&&(u.material.needsUpdate=!0,m=p,E=p.version,y=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new $e(new Cs(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ls(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,c.material.toneMapped=ft.getTransfer(p.colorSpace)!==Et,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(m!==p||E!==p.version||y!==n.toneMapping)&&(c.material.needsUpdate=!0,m=p,E=p.version,y=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function C(D,O){D.getRGB(Cl,lu(n)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,O,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(D,O=1){s.set(D),o=O,C(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,C(s,o)},render:v,addToRenderList:R,dispose:M}}function u_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=y(null),a=r,s=!1;function o(l,d,_,g,f){let S=!1,I=E(l,g,_,d);a!==I&&(a=I,u(a.object)),S=T(l,g,_,f),S&&v(l,g,_,f),f!==null&&e.update(f,n.ELEMENT_ARRAY_BUFFER),(S||s)&&(s=!1,p(l,d,_,g),f!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(f).buffer))}function c(){return n.createVertexArray()}function u(l){return n.bindVertexArray(l)}function m(l){return n.deleteVertexArray(l)}function E(l,d,_,g){let f=g.wireframe===!0,S=i[d.id];S===void 0&&(S={},i[d.id]=S);let I=l.isInstancedMesh===!0?l.id:0,L=S[I];L===void 0&&(L={},S[I]=L);let z=L[_.id];z===void 0&&(z={},L[_.id]=z);let F=z[f];return F===void 0&&(F=y(c()),z[f]=F),F}function y(l){let d=[],_=[],g=[];for(let f=0;f<t;f++)d[f]=0,_[f]=0,g[f]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:d,enabledAttributes:_,attributeDivisors:g,object:l,attributes:{},index:null}}function T(l,d,_,g){let f=a.attributes,S=d.attributes,I=0,L=_.getAttributes();for(let z in L)if(L[z].location>=0){let N=f[z],B=S[z];if(B===void 0&&(z==="instanceMatrix"&&l.instanceMatrix&&(B=l.instanceMatrix),z==="instanceColor"&&l.instanceColor&&(B=l.instanceColor)),N===void 0||N.attribute!==B||B&&N.data!==B.data)return!0;I++}return a.attributesNum!==I||a.index!==g}function v(l,d,_,g){let f={},S=d.attributes,I=0,L=_.getAttributes();for(let z in L)if(L[z].location>=0){let N=S[z];N===void 0&&(z==="instanceMatrix"&&l.instanceMatrix&&(N=l.instanceMatrix),z==="instanceColor"&&l.instanceColor&&(N=l.instanceColor));let B={};B.attribute=N,N&&N.data&&(B.data=N.data),f[z]=B,I++}a.attributes=f,a.attributesNum=I,a.index=g}function R(){let l=a.newAttributes;for(let d=0,_=l.length;d<_;d++)l[d]=0}function C(l){M(l,0)}function M(l,d){let _=a.newAttributes,g=a.enabledAttributes,f=a.attributeDivisors;_[l]=1,g[l]===0&&(n.enableVertexAttribArray(l),g[l]=1),f[l]!==d&&(n.vertexAttribDivisor(l,d),f[l]=d)}function D(){let l=a.newAttributes,d=a.enabledAttributes;for(let _=0,g=d.length;_<g;_++)d[_]!==l[_]&&(n.disableVertexAttribArray(_),d[_]=0)}function O(l,d,_,g,f,S,I){I===!0?n.vertexAttribIPointer(l,d,_,f,S):n.vertexAttribPointer(l,d,_,g,f,S)}function p(l,d,_,g){R();let f=g.attributes,S=_.getAttributes(),I=d.defaultAttributeValues;for(let L in S){let z=S[L];if(z.location>=0){let F=f[L];if(F===void 0&&(L==="instanceMatrix"&&l.instanceMatrix&&(F=l.instanceMatrix),L==="instanceColor"&&l.instanceColor&&(F=l.instanceColor)),F!==void 0){let N=F.normalized,B=F.itemSize,V=e.get(F);if(V===void 0)continue;let X=V.buffer,Z=V.type,se=V.bytesPerElement,G=Z===n.INT||Z===n.UNSIGNED_INT||F.gpuType===Hc;if(F.isInterleavedBufferAttribute){let j=F.data,re=j.stride,ce=F.offset;if(j.isInstancedInterleavedBuffer){for(let J=0;J<z.locationSize;J++)M(z.location+J,j.meshPerAttribute);l.isInstancedMesh!==!0&&g._maxInstanceCount===void 0&&(g._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<z.locationSize;J++)C(z.location+J);n.bindBuffer(n.ARRAY_BUFFER,X);for(let J=0;J<z.locationSize;J++)O(z.location+J,B/z.locationSize,Z,N,re*se,(ce+B/z.locationSize*J)*se,G)}else{if(F.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)M(z.location+j,F.meshPerAttribute);l.isInstancedMesh!==!0&&g._maxInstanceCount===void 0&&(g._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let j=0;j<z.locationSize;j++)C(z.location+j);n.bindBuffer(n.ARRAY_BUFFER,X);for(let j=0;j<z.locationSize;j++)O(z.location+j,B/z.locationSize,Z,N,B*se,B/z.locationSize*j*se,G)}}else if(I!==void 0){let N=I[L];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(z.location,N);break;case 3:n.vertexAttrib3fv(z.location,N);break;case 4:n.vertexAttrib4fv(z.location,N);break;default:n.vertexAttrib1fv(z.location,N)}}}}D()}function x(){P();for(let l in i){let d=i[l];for(let _ in d){let g=d[_];for(let f in g){let S=g[f];for(let I in S)m(S[I].object),delete S[I];delete g[f]}}delete i[l]}}function w(l){if(i[l.id]===void 0)return;let d=i[l.id];for(let _ in d){let g=d[_];for(let f in g){let S=g[f];for(let I in S)m(S[I].object),delete S[I];delete g[f]}}delete i[l.id]}function A(l){for(let d in i){let _=i[d];for(let g in _){let f=_[g];if(f[l.id]===void 0)continue;let S=f[l.id];for(let I in S)m(S[I].object),delete S[I];delete f[l.id]}}}function b(l){for(let d in i){let _=i[d],g=l.isInstancedMesh===!0?l.id:0,f=_[g];if(f!==void 0){for(let S in f){let I=f[S];for(let L in I)m(I[L].object),delete I[L];delete f[S]}delete _[g],Object.keys(_).length===0&&delete i[d]}}}function P(){h(),s=!0,a!==r&&(a=r,u(a.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:h,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:R,enableAttribute:C,disableUnusedAttributes:D}}function d_(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,m){m!==0&&(n.drawArraysInstanced(i,c,u,m),t.update(u,i,m))}function o(c,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,m);let y=0;for(let T=0;T<m;T++)y+=u[T];t.update(y,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function f_(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ti&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let b=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==kn&&A!==Ai&&!b&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp",m=c(u);m!==u&&(Qe("WebGLRenderer:",u,"not supported, using",m,"instead."),u=m);let E=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&y===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let T=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),C=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),M=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),O=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:E,reversedDepthBuffer:y,maxTextures:T,maxVertexTextures:v,maxTextureSize:R,maxCubemapSize:C,maxAttributes:M,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:p,maxSamples:x,samples:w}}function p_(n){let e=this,t=null,i=0,r=!1,a=!1,s=new Hi,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(E,y){let T=E.length!==0||y||i!==0||r;return r=y,i=E.length,T},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(E,y){t=m(E,y,0)},this.setState=function(E,y,T){let v=E.clippingPlanes,R=E.clipIntersection,C=E.clipShadows,M=n.get(E);if(!r||v===null||v.length===0||a&&!C)a?m(null):u();else{let D=a?0:i,O=D*4,p=M.clippingState||null;c.value=p,p=m(v,y,O,T);for(let x=0;x!==O;++x)p[x]=t[x];M.clippingState=p,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(E,y,T,v){let R=E!==null?E.length:0,C=null;if(R!==0){if(C=c.value,v!==!0||C===null){let M=T+R*4,D=y.matrixWorldInverse;o.getNormalMatrix(D),(C===null||C.length<M)&&(C=new Float32Array(M));for(let O=0,p=T;O!==R;++O,p+=4)s.copy(E[O]).applyMatrix4(D,o),s.normal.toArray(C,p),C[p+3]=s.constant}c.value=C,c.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,C}}var Pa=4,m_=6,g_=20,x_=256,s0=new Jr,tp=new Be,_u=null,vu=0,yu=0,bu=!1,__=new W,Os=new W,Da=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:s=256,position:o=__}=a;_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_u,vu,yu),this._renderer.xr.enabled=bu,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:yn,format:ti,colorSpace:Es,depthBuffer:!1},r=np(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(a)),this._blurMaterial=b_(a,e,t),this._ggxMaterial=y_(a,e,t)}return r}_compileMaterial(e){let t=new $e(new pn,e);this._renderer.compile(t,s0)}_sceneToCubeUV(e,t,i,r,a){let c=new An(90,1,t,i),u=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],E=this._renderer,y=E.autoClear,T=E.toneMapping;E.getClearColor(tp),E.toneMapping=Xi,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(r),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Un,new ws({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let R=this._backgroundBox,C=R.material,M=!1,D=e.background;D?D.isColor&&(C.color.copy(D),e.background=null,M=!0):(C.color.copy(tp),M=!0);for(let O=0;O<6;O++){let p=O%3;p===0?(c.up.set(0,u[O],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+m[O],a.y,a.z)):p===1?(c.up.set(0,0,u[O]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+m[O],a.z)):(c.up.set(0,u[O],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+m[O]));let x=this._cubeSize;Ra(r,p*x,O>2?x:0,x,x),E.setRenderTarget(r),M&&E.render(R,c),E.render(e,c)}E.toneMapping=T,E.autoClear=y,e.background=D}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===es||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;let o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;Ra(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,s0)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;let c=s.uniforms,u=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),E=Math.sqrt(u*u-m*m),y=u*1.25,T=E*y,{_lodMax:v}=this,R=this._sizeLods[i],C=3*R*(i>v-Pa?i-v+Pa:0),M=4*(this._cubeSize-R);c.envMap.value=e.texture,c.roughness.value=T,c.mipInt.value=v-t,Ra(a,C,M,3*R,2*R),r.setRenderTarget(a),r.render(o,s0),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=v-i,Ra(e,C,M,3*R,2*R),r.setRenderTarget(e),r.render(o,s0)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,s),this._blurPass(a,e,i,i,s)}_blurPass(e,t,i,r,a){let s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=a,u.mipInt.value=this._lodMax-i;let m=this._sizeLods[r],E=3*m*(r>this._lodMax-Pa?r-this._lodMax+Pa:0),y=4*(this._cubeSize-m);Ra(t,E,y,3*m,2*m),s.setRenderTarget(t),s.render(c,s0)}};function v_(n){let e=[],t=[],i=n,r=n-Pa+1+m_;for(let a=0;a<r;a++){let s=Math.pow(2,i);e.push(s);let o=1/(s-2),c=-o,u=1+o,m=[c,c,u,c,u,u,c,c,u,u,c,u],E=6,y=6,T=3,v=new Float32Array(T*y*E),R=new Float32Array(T*y*E);for(let M=0;M<E;M++){let D=M%3*2/3-1,O=M>2?0:-1,p=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];v.set(p,T*y*M);for(let x=0;x<y;x++){let w=m[x*2]*2-1,A=m[x*2+1]*2-1;M===0?Os.set(1,A,w):M===1?Os.set(-w,1,-A):M===2?Os.set(-w,A,1):M===3?Os.set(-1,A,-w):M===4?Os.set(-w,-1,A):Os.set(w,A,-1),Os.toArray(R,(M*y+x)*T)}}let C=new pn;C.setAttribute("position",new jn(v,T)),C.setAttribute("outputDirection",new jn(R,T)),t.push(new $e(C,null)),i>Pa&&i--}return{lodMeshes:t,sizeLods:e}}function np(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function y_(n,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function b_(n,e,t){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ip(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:sn,depthTest:!1,depthWrite:!1})}function rp(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),a=new Ht({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:sn});a.uniforms.tEquirect.value=t;let s=new $e(r,a),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=Cn),new zc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}};function S_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(y,T=!1){return y==null?null:T?s(y):a(y)}function a(y){if(y&&y.isTexture){let T=y.mapping;if(T===Bc||T===kc)if(e.has(y)){let v=e.get(y).texture;return o(v,y.mapping)}else{let v=y.image;if(v&&v.height>0){let R=new Rl(v.height);return R.fromEquirectangularTexture(n,y),e.set(y,R),y.addEventListener("dispose",u),o(R.texture,y.mapping)}else return null}}return y}function s(y){if(y&&y.isTexture){let T=y.mapping,v=T===Bc||T===kc,R=T===es||T===Is;if(v||R){let C=t.get(y),M=C!==void 0?C.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==M)return i===null&&(i=new Da(n)),C=v?i.fromEquirectangular(y,C):i.fromCubemap(y,C),C.texture.pmremVersion=y.pmremVersion,t.set(y,C),C.texture;if(C!==void 0)return C.texture;{let D=y.image;return v&&D&&D.height>0||R&&D&&c(D)?(i===null&&(i=new Da(n)),C=v?i.fromEquirectangular(y):i.fromCubemap(y),C.texture.pmremVersion=y.pmremVersion,t.set(y,C),y.addEventListener("dispose",m),C.texture):null}}}return y}function o(y,T){return T===Bc?y.mapping=es:T===kc&&(y.mapping=Is),y}function c(y){let T=0,v=6;for(let R=0;R<v;R++)y[R]!==void 0&&T++;return T===v}function u(y){let T=y.target;T.removeEventListener("dispose",u);let v=e.get(T);v!==void 0&&(e.delete(T),v.dispose())}function m(y){let T=y.target;T.removeEventListener("dispose",m);let v=t.get(T);v!==void 0&&(t.delete(T),v.dispose())}function E(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:E}}function E_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ss("WebGLRenderer: "+i+" extension not supported."),r}}}function T_(n,e,t,i){let r={},a=new WeakMap;function s(E){let y=E.target;y.index!==null&&e.remove(y.index);for(let v in y.attributes)e.remove(y.attributes[v]);y.removeEventListener("dispose",s),delete r[y.id];let T=a.get(y);T&&(e.remove(T),a.delete(y)),i.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function o(E,y){return r[y.id]===!0||(y.addEventListener("dispose",s),r[y.id]=!0,t.memory.geometries++),y}function c(E){let y=E.attributes;for(let T in y)e.update(y[T],n.ARRAY_BUFFER)}function u(E){let y=[],T=E.index,v=E.attributes.position,R=0;if(v===void 0)return;if(T!==null){let D=T.array;R=T.version;for(let O=0,p=D.length;O<p;O+=3){let x=D[O+0],w=D[O+1],A=D[O+2];y.push(x,w,w,A,A,x)}}else{let D=v.array;R=v.version;for(let O=0,p=D.length/3-1;O<p;O+=3){let x=O+0,w=O+1,A=O+2;y.push(x,w,w,A,A,x)}}let C=new(v.count>=65535?xo:go)(y,1);C.version=R;let M=a.get(E);M&&e.remove(M),a.set(E,C)}function m(E){let y=a.get(E);if(y){let T=E.index;T!==null&&y.version<T.version&&u(E)}else u(E);return a.get(E)}return{get:o,update:c,getWireframeAttribute:m}}function w_(n,e,t){let i;function r(E){i=E}let a,s;function o(E){a=E.type,s=E.bytesPerElement}function c(E,y){n.drawElements(i,y,a,E*s),t.update(y,i,1)}function u(E,y,T){T!==0&&(n.drawElementsInstanced(i,y,a,E*s,T),t.update(y,i,T))}function m(E,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,E,0,T);let R=0;for(let C=0;C<T;C++)R+=y[C];t.update(R,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=m}function A_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:tt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function C_(n,e,t){let i=new WeakMap,r=new Vt;function a(s,o,c){let u=s.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,E=m!==void 0?m.length:0,y=i.get(o);if(y===void 0||y.count!==E){let P=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let T=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,R=o.morphAttributes.color!==void 0,C=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],D=o.morphAttributes.color||[],O=0;T===!0&&(O=1),v===!0&&(O=2),R===!0&&(O=3);let p=o.attributes.position.count*O,x=1;p>e.maxTextureSize&&(x=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize);let w=new Float32Array(p*x*4*E),A=new mo(w,p,x,E);A.type=Ai,A.needsUpdate=!0;let b=O*4;for(let h=0;h<E;h++){let l=C[h],d=M[h],_=D[h],g=p*x*4*h;for(let f=0;f<l.count;f++){let S=f*b;T===!0&&(r.fromBufferAttribute(l,f),w[g+S+0]=r.x,w[g+S+1]=r.y,w[g+S+2]=r.z,w[g+S+3]=0),v===!0&&(r.fromBufferAttribute(d,f),w[g+S+4]=r.x,w[g+S+5]=r.y,w[g+S+6]=r.z,w[g+S+7]=0),R===!0&&(r.fromBufferAttribute(_,f),w[g+S+8]=r.x,w[g+S+9]=r.y,w[g+S+10]=r.z,w[g+S+11]=_.itemSize===4?r.w:1)}}y={count:E,texture:A,size:new ye(p,x)},i.set(o,y),o.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let T=0;for(let R=0;R<u.length;R++)T+=u[R];let v=o.morphTargetsRelative?1:1-T;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}return{update:a}}function M_(n,e,t,i,r){let a=new WeakMap;function s(u){let m=r.render.frame,E=u.geometry,y=e.get(u,E);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),a.get(u)!==m&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),a.set(u,m))),u.isSkinnedMesh){let T=u.skeleton;a.get(T)!==m&&(T.update(),a.set(T,m))}return y}function o(){a=new WeakMap}function c(u){let m=u.target;m.removeEventListener("dispose",c),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:s,dispose:o}}var R_={[Xo]:"LINEAR_TONE_MAPPING",[qo]:"REINHARD_TONE_MAPPING",[jo]:"CINEON_TONE_MAPPING",[Yo]:"ACES_FILMIC_TONE_MAPPING",[$o]:"AGX_TONE_MAPPING",[Ps]:"NEUTRAL_TONE_MAPPING",[Zo]:"CUSTOM_TONE_MAPPING"};function P_(n,e,t,i,r,a){let s=new qt(e,t,{type:n,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=new pn;u.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new wt([0,2,0,0,2,0],2));let m=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new $e(u,m),y=new Jr(-1,1,1,-1,0,1),T=null,v=null,R=!1,C,M=null,D=[],O=!1;this.setSize=function(p,x){s.setSize(p,x),o!==null&&o.setSize(p,x),c!==null&&c.setSize(p,x);for(let w=0;w<D.length;w++){let A=D[w];A.setSize&&A.setSize(p,x)}},this.setEffects=function(p){D=p,O=D.length>0&&D[0].isRenderPass===!0;let x=s.width,w=s.height;D.length>0&&o===null&&(o=new qt(x,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}),c=new qt(x,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<D.length;A++){let b=D[A];b.setSize&&b.setSize(x,w)}},this.begin=function(p,x){if(R||p.toneMapping===Xi&&D.length===0)return!1;if(M=x,x!==null){let w=x.width,A=x.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return O===!1&&p.setRenderTarget(s),C=p.toneMapping,p.toneMapping=Xi,!0},this.hasRenderPass=function(){return O},this.end=function(p,x){p.toneMapping=C,R=!0;let w=s,A=o;for(let b=0;b<D.length;b++){let P=D[b];P.enabled!==!1&&(P.render(p,A,w,x),P.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(T!==p.outputColorSpace||v!==p.toneMapping){T=p.outputColorSpace,v=p.toneMapping,m.defines={},ft.getTransfer(T)===Et&&(m.defines.SRGB_TRANSFER="");let b=R_[v];b&&(m.defines[b]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,p.setRenderTarget(M),p.render(E,y),M=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),m.dispose()}}var Tp=new Qn,Tu=new nr(1,1),wp=new mo,Ap=new pc,Cp=new vo,sp=[],ap=[],op=new Float32Array(16),cp=new Float32Array(9),lp=new Float32Array(4);function za(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,a=sp[r];if(a===void 0&&(a=new Float32Array(r),sp[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dl(n,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function O_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;lp.set(i),n.uniformMatrix2fv(this.addr,!1,lp),gn(t,i)}}function F_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;cp.set(i),n.uniformMatrix3fv(this.addr,!1,cp),gn(t,i)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;op.set(i),n.uniformMatrix4fv(this.addr,!1,op),gn(t,i)}}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function H_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function q_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=t.isReversedDepthBuffer()?Al:wl,a=Tu):a=Tp,t.setTexture2D(e||a,r)}function j_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ap,r)}function Y_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cp,r)}function Z_(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wp,r)}function $_(n){switch(n){case 5126:return I_;case 35664:return D_;case 35665:return z_;case 35666:return L_;case 35674:return O_;case 35675:return F_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(n,e){n.uniform1fv(this.addr,e)}function K_(n,e){let t=za(e,this.size,2);n.uniform2fv(this.addr,t)}function Q_(n,e){let t=za(e,this.size,3);n.uniform3fv(this.addr,t)}function ev(n,e){let t=za(e,this.size,4);n.uniform4fv(this.addr,t)}function tv(n,e){let t=za(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nv(n,e){let t=za(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iv(n,e){let t=za(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rv(n,e){n.uniform1iv(this.addr,e)}function sv(n,e){n.uniform2iv(this.addr,e)}function av(n,e){n.uniform3iv(this.addr,e)}function ov(n,e){n.uniform4iv(this.addr,e)}function cv(n,e){n.uniform1uiv(this.addr,e)}function lv(n,e){n.uniform2uiv(this.addr,e)}function hv(n,e){n.uniform3uiv(this.addr,e)}function uv(n,e){n.uniform4uiv(this.addr,e)}function dv(n,e,t){let i=this.cache,r=e.length,a=Dl(t,r);mn(i,a)||(n.uniform1iv(this.addr,a),gn(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=Tu:s=Tp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function fv(n,e,t){let i=this.cache,r=e.length,a=Dl(t,r);mn(i,a)||(n.uniform1iv(this.addr,a),gn(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ap,a[s])}function pv(n,e,t){let i=this.cache,r=e.length,a=Dl(t,r);mn(i,a)||(n.uniform1iv(this.addr,a),gn(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cp,a[s])}function mv(n,e,t){let i=this.cache,r=e.length,a=Dl(t,r);mn(i,a)||(n.uniform1iv(this.addr,a),gn(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||wp,a[s])}function gv(n){switch(n){case 5126:return J_;case 35664:return K_;case 35665:return Q_;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return cv;case 36294:return lv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}var wu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},Au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},Su=/(\w+)(\])?(\[|\.)?/g;function hp(n,e){n.seq.push(e),n.map[e.id]=e}function xv(n,e,t){let i=n.name,r=i.length;for(Su.lastIndex=0;;){let a=Su.exec(i),s=Su.lastIndex,o=a[1],c=a[2]==="]",u=a[3];if(c&&(o=o|0),u===void 0||u==="["&&s+2===r){hp(t,u===void 0?new wu(o,n,e):new Au(o,n,e));break}else{let E=t.map[o];E===void 0&&(E=new Cu(o),hp(t,E)),t=E}}}var Ia=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);xv(o,c,this)}let r=[],a=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function up(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _v=37297,vv=0;function yv(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){let o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}var dp=new st;function bv(n){ft._getMatrix(dp,ft.workingColorSpace,n);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case fo:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let s=/ERROR: 0:(\d+)/.exec(a);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+yv(n.getShaderSource(e),o)}else return a}function Sv(n,e){let t=bv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ev={[Xo]:"Linear",[qo]:"Reinhard",[jo]:"Cineon",[Yo]:"ACESFilmic",[$o]:"AgX",[Ps]:"Neutral",[Zo]:"Custom"};function Tv(n,e){let t=Ev[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ml=new W;function wv(){ft.getLuminanceCoefficients(Ml);let n=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(o0).join(`
`)}function Cv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=n.getActiveAttrib(e,r),s=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function o0(n){return n!==""}function pp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(Rv,Iv)}var Pv=new Map;function Iv(n,e){let t=dt[e];if(t===void 0){let i=Pv.get(e);if(i!==void 0)t=dt[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(n){return n.replace(Dv,zv)}function zv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function xp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Lv={[Ho]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function Ov(n){return Lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fv={[es]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function Nv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Fv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uv={[Is]:"ENVMAP_MODE_REFRACTION"};function Bv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kv={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function Vv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kv[n.combine]||"ENVMAP_BLENDING_NONE"}function Hv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gv(n,e,t,i){let r=n.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,c=Ov(t),u=Nv(t),m=Bv(t),E=Vv(t),y=Hv(t),T=Av(t),v=Cv(a),R=r.createProgram(),C,M,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(o0).join(`
`),C.length>0&&(C+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(o0).join(`
`),M.length>0&&(M+=`
`)):(C=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(o0).join(`
`),M=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMap?"#define "+E:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(o0).join(`
`)),s=Mu(s),s=pp(s,t),s=mp(s,t),o=Mu(o),o=pp(o,t),o=mp(o,t),s=gp(s),o=gp(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,C=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,M=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let O=D+C+s,p=D+M+o,x=up(r,r.VERTEX_SHADER,O),w=up(r,r.FRAGMENT_SHADER,p);r.attachShader(R,x),r.attachShader(R,w),t.index0AttributeName!==void 0?r.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function A(l){if(n.debug.checkShaderErrors){let d=r.getProgramInfoLog(R)||"",_=r.getShaderInfoLog(x)||"",g=r.getShaderInfoLog(w)||"",f=d.trim(),S=_.trim(),I=g.trim(),L=!0,z=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,R,x,w);else{let F=fp(r,x,"vertex"),N=fp(r,w,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+l.name+`
Material Type: `+l.type+`

Program Info Log: `+f+`
`+F+`
`+N)}else f!==""?Qe("WebGLProgram: Program Info Log:",f):(S===""||I==="")&&(z=!1);z&&(l.diagnostics={runnable:L,programLog:f,vertexShader:{log:S,prefix:C},fragmentShader:{log:I,prefix:M}})}r.deleteShader(x),r.deleteShader(w),b=new Ia(r,R),P=Mv(r,R)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let h=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return h===!1&&(h=r.getProgramParameter(R,_v)),h},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=x,this.fragmentShader=w,this}var Wv=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pu(e),t.set(e,i)),i}},Pu=class{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}};function Xv(n){return n===is||n===i0||n===r0}function qv(n,e,t,i,r,a){let s=new xa,o=new Ru,c=new Set,u=[],m=new Map,E=i.logarithmicDepthBuffer,y=i.precision,T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function R(b,P,h,l,d,_){let g=l.fog,f=d.geometry,S=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?l.environment:null,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,L=e.get(b.envMap||S,I),z=L&&L.mapping===Jo?L.image.height:null,F=T[b.type];b.precision!==null&&(y=i.getMaxPrecision(b.precision),y!==b.precision&&Qe("WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));let N=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,B=N!==void 0?N.length:0,V=0;f.morphAttributes.position!==void 0&&(V=1),f.morphAttributes.normal!==void 0&&(V=2),f.morphAttributes.color!==void 0&&(V=3);let X,Z,se,G;if(F){let Ct=ar[F];X=Ct.vertexShader,Z=Ct.fragmentShader}else{X=b.vertexShader,Z=b.fragmentShader;let Ct=o.getVertexShaderStage(b),yt=o.getFragmentShaderStage(b);o.update(b,Ct,yt),se=Ct.id,G=yt.id}let j=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ce=d.isInstancedMesh===!0,J=d.isBatchedMesh===!0,ge=!!b.map,Oe=!!b.matcap,le=!!L,Q=!!b.aoMap,oe=!!b.lightMap,te=!!b.bumpMap&&b.wireframe===!1,ue=!!b.normalMap,ve=!!b.displacementMap,Ae=!!b.emissiveMap,Ue=!!b.metalnessMap,Je=!!b.roughnessMap,q=b.anisotropy>0,lt=b.clearcoat>0,et=b.dispersion>0,H=b.retroreflectivity>0,U=b.iridescence>0,K=b.sheen>0,ne=b.transmission>0,de=q&&!!b.anisotropyMap,_e=lt&&!!b.clearcoatMap,Se=lt&&!!b.clearcoatNormalMap,fe=lt&&!!b.clearcoatRoughnessMap,pe=U&&!!b.iridescenceMap,Te=U&&!!b.iridescenceThicknessMap,je=K&&!!b.sheenColorMap,Ee=K&&!!b.sheenRoughnessMap,be=!!b.specularMap,Ne=!!b.specularColorMap,Ye=!!b.specularIntensityMap,Ke=ne&&!!b.transmissionMap,$=ne&&!!b.thicknessMap,Ce=!!b.gradientMap,me=!!b.alphaMap,Me=b.alphaTest>0,De=!!b.alphaHash,xe=!!b.extensions,Ze=Xi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let He={shaderID:F,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:Z,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:J,batchingColor:J&&d._colorsTexture!==null,instancing:ce,instancingColor:ce&&d.instanceColor!==null,instancingMorph:ce&&d.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:Oe,envMap:le,envMapMode:le&&L.mapping,envMapCubeUVHeight:z,aoMap:Q,lightMap:oe,bumpMap:te,normalMap:ue,displacementMap:ve,emissiveMap:Ae,normalMapObjectSpace:ue&&b.normalMapType===Of,normalMapTangentSpace:ue&&b.normalMapType===Ma,packedNormalMap:ue&&b.normalMapType===Ma&&Xv(b.normalMap.format),metalnessMap:Ue,roughnessMap:Je,anisotropy:q,anisotropyMap:de,clearcoat:lt,clearcoatMap:_e,clearcoatNormalMap:Se,clearcoatRoughnessMap:fe,dispersion:et,retroreflection:H,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:Te,sheen:K,sheenColorMap:je,sheenRoughnessMap:Ee,specularMap:be,specularColorMap:Ne,specularIntensityMap:Ye,transmission:ne,transmissionMap:Ke,thicknessMap:$,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===Qr&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:Me,alphaHash:De,combine:b.combine,mapUv:ge&&v(b.map.channel),aoMapUv:Q&&v(b.aoMap.channel),lightMapUv:oe&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:ue&&v(b.normalMap.channel),displacementMapUv:ve&&v(b.displacementMap.channel),emissiveMapUv:Ae&&v(b.emissiveMap.channel),metalnessMapUv:Ue&&v(b.metalnessMap.channel),roughnessMapUv:Je&&v(b.roughnessMap.channel),anisotropyMapUv:de&&v(b.anisotropyMap.channel),clearcoatMapUv:_e&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(b.sheenRoughnessMap.channel),specularMapUv:be&&v(b.specularMap.channel),specularColorMapUv:Ne&&v(b.specularColorMap.channel),specularIntensityMapUv:Ye&&v(b.specularIntensityMap.channel),transmissionMapUv:Ke&&v(b.transmissionMap.channel),thicknessMapUv:$&&v(b.thicknessMap.channel),alphaMapUv:me&&v(b.alphaMap.channel),vertexTangents:!!f.attributes.tangent&&(ue||q),vertexNormals:!!f.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!f.attributes.uv&&(ge||me),fog:!!g,useFog:b.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||f.attributes.normal===void 0&&ue===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:re,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:f.attributes.position!==void 0,morphTargets:f.morphAttributes.position!==void 0,morphNormals:f.morphAttributes.normal!==void 0,morphColors:f.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&h.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&ft.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pn,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function C(b){let P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(let h in b.defines)P.push(h),P.push(b.defines[h]);return b.isRawShaderMaterial===!1&&(M(P,b),D(P,b),P.push(n.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function M(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numSunLights),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numSunLightShadows),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){s.disableAll(),P.instancing&&s.enable(0),P.instancingColor&&s.enable(1),P.instancingMorph&&s.enable(2),P.matcap&&s.enable(3),P.envMap&&s.enable(4),P.normalMapObjectSpace&&s.enable(5),P.normalMapTangentSpace&&s.enable(6),P.clearcoat&&s.enable(7),P.iridescence&&s.enable(8),P.alphaTest&&s.enable(9),P.vertexColors&&s.enable(10),P.vertexAlphas&&s.enable(11),P.vertexUv1s&&s.enable(12),P.vertexUv2s&&s.enable(13),P.vertexUv3s&&s.enable(14),P.vertexTangents&&s.enable(15),P.anisotropy&&s.enable(16),P.alphaHash&&s.enable(17),P.batching&&s.enable(18),P.dispersion&&s.enable(19),P.retroreflection&&s.enable(24),P.batchingColor&&s.enable(20),P.gradientMap&&s.enable(21),P.packedNormalMap&&s.enable(22),P.vertexNormals&&s.enable(23),b.push(s.mask),s.disableAll(),P.fog&&s.enable(0),P.useFog&&s.enable(1),P.flatShading&&s.enable(2),P.logarithmicDepthBuffer&&s.enable(3),P.reversedDepthBuffer&&s.enable(4),P.skinning&&s.enable(5),P.morphTargets&&s.enable(6),P.morphNormals&&s.enable(7),P.morphColors&&s.enable(8),P.premultipliedAlpha&&s.enable(9),P.shadowMapEnabled&&s.enable(10),P.doubleSided&&s.enable(11),P.flipSided&&s.enable(12),P.useDepthPacking&&s.enable(13),P.dithering&&s.enable(14),P.transmission&&s.enable(15),P.sheen&&s.enable(16),P.opaque&&s.enable(17),P.pointsUvs&&s.enable(18),P.decodeVideoTexture&&s.enable(19),P.decodeVideoTextureEmissive&&s.enable(20),P.alphaToCoverage&&s.enable(21),P.numLightProbeGrids>0&&s.enable(22),P.hasPositionAttribute&&s.enable(23),b.push(s.mask)}function O(b){let P=T[b.type],h;if(P){let l=ar[P];h=Ci.clone(l.uniforms)}else h=b.uniforms;return h}function p(b,P){let h=m.get(P);return h!==void 0?++h.usedTimes:(h=new Gv(n,P,b,r),u.push(h),m.set(P,h)),h}function x(b){if(--b.usedTimes===0){let P=u.indexOf(b);u[P]=u[u.length-1],u.pop(),m.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function A(){o.dispose()}return{getParameters:R,getProgramCacheKey:C,getUniforms:O,acquireProgram:p,releaseProgram:x,releaseShaderCache:w,programs:u,dispose:A}}function jv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,c){n.get(s)[o]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function Yv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _p(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vp(){let n=[],e=0,t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(y){let T=0;return y.isInstancedMesh&&(T+=2),y.isSkinnedMesh&&(T+=1),T}function o(y,T,v,R,C,M){let D=n[e];return D===void 0?(D={id:y.id,object:y,geometry:T,material:v,materialVariant:s(y),groupOrder:R,renderOrder:y.renderOrder,z:C,group:M},n[e]=D):(D.id=y.id,D.object=y,D.geometry=T,D.material=v,D.materialVariant=s(y),D.groupOrder=R,D.renderOrder=y.renderOrder,D.z=C,D.group=M),e++,D}function c(y,T,v,R,C,M,D){D.reversedDepth===!0&&(C=-C);let O=o(y,T,v,R,C,M);v.transmission>0?i.push(O):v.transparent===!0?r.push(O):t.push(O)}function u(y,T,v,R,C,M){let D=o(y,T,v,R,C,M);v.transmission>0?i.unshift(D):v.transparent===!0?r.unshift(D):t.unshift(D)}function m(y,T){t.length>1&&t.sort(y||Yv),i.length>1&&i.sort(T||_p),r.length>1&&r.sort(T||_p)}function E(){for(let y=e,T=n.length;y<T;y++){let v=n[y];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:c,unshift:u,finish:E,sort:m}}function Zv(){let n=new WeakMap;function e(i,r){let a=n.get(i),s;return a===void 0?(s=new vp,n.set(i,[s])):r>=a.length?(s=new vp,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function $v(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Jv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Kv=0;function Qv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ey(n){let e=new $v,t=Jv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);let r=new W,a=new Le,s=new Le;function o(u){let m=0,E=0,y=0;for(let d=0;d<9;d++)i.probe[d].set(0,0,0);let T=0,v=0,R=0,C=0,M=0,D=0,O=0,p=0,x=0,w=0,A=0,b=0,P=0,h=0;u.sort(Qv);for(let d=0,_=u.length;d<_;d++){let g=u[d],f=g.color,S=g.intensity,I=g.distance,L=null;if(g.shadow&&g.shadow.map&&(g.shadow.map.texture.format===is?L=g.shadow.map.texture:L=g.shadow.map.depthTexture||g.shadow.map.texture),g.isAmbientLight)m+=f.r*S,E+=f.g*S,y+=f.b*S;else if(g.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(g.sh.coefficients[z],S);h++}else if(g.isSunLight){let z=e.get(g);if(z.color.copy(g.color).multiplyScalar(g.intensity),g.castShadow){let F=g.shadow,N=t.get(g);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),i.sunShadow[v]=N,i.sunShadowMap[v]=L;let B=F.getViewportCount();for(let V=0;V<B;V++)i.sunShadowMatrix[R+V]=F.getMatrix(V),i.sunShadowCascade[R+V]=F._cascadeData[V];R+=B,v++}i.sun[T]=z,T++}else if(g.isDirectionalLight){let z=e.get(g);if(z.color.copy(g.color).multiplyScalar(g.intensity),g.castShadow){let F=g.shadow,N=t.get(g);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,i.directionalShadow[C]=N,i.directionalShadowMap[C]=L,i.directionalShadowMatrix[C]=g.shadow.matrix,x++}i.directional[C]=z,C++}else if(g.isSpotLight){let z=e.get(g);z.position.setFromMatrixPosition(g.matrixWorld),z.color.copy(f).multiplyScalar(S),z.distance=I,z.coneCos=Math.cos(g.angle),z.penumbraCos=Math.cos(g.angle*(1-g.penumbra)),z.decay=g.decay,i.spot[D]=z;let F=g.shadow;if(g.map&&(i.spotLightMap[b]=g.map,b++,F.updateMatrices(g),g.castShadow&&P++),i.spotLightMatrix[D]=F.matrix,g.castShadow){let N=t.get(g);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,i.spotShadow[D]=N,i.spotShadowMap[D]=L,A++}D++}else if(g.isRectAreaLight){let z=e.get(g);z.color.copy(f).multiplyScalar(S),z.halfWidth.set(g.width*.5,0,0),z.halfHeight.set(0,g.height*.5,0),i.rectArea[O]=z,O++}else if(g.isPointLight){let z=e.get(g);if(z.color.copy(g.color).multiplyScalar(g.intensity),z.distance=g.distance,z.decay=g.decay,g.castShadow){let F=g.shadow,N=t.get(g);N.shadowIntensity=F.intensity,N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,i.pointShadow[M]=N,i.pointShadowMap[M]=L,i.pointShadowMatrix[M]=g.shadow.matrix,w++}i.point[M]=z,M++}else if(g.isHemisphereLight){let z=e.get(g);z.skyColor.copy(g.color).multiplyScalar(S),z.groundColor.copy(g.groundColor).multiplyScalar(S),i.hemi[p]=z,p++}}O>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=E,i.ambient[2]=y;let l=i.hash;(l.sunLength!==T||l.directionalLength!==C||l.pointLength!==M||l.spotLength!==D||l.rectAreaLength!==O||l.hemiLength!==p||l.numSunShadows!==v||l.numDirectionalShadows!==x||l.numPointShadows!==w||l.numSpotShadows!==A||l.numSpotMaps!==b||l.numLightProbes!==h)&&(i.sun.length=T,i.directional.length=C,i.spot.length=D,i.rectArea.length=O,i.point.length=M,i.hemi.length=p,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=R,i.sunShadowCascade.length=R,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=h,l.sunLength=T,l.directionalLength=C,l.pointLength=M,l.spotLength=D,l.rectAreaLength=O,l.hemiLength=p,l.numSunShadows=v,l.numDirectionalShadows=x,l.numPointShadows=w,l.numSpotShadows=A,l.numSpotMaps=b,l.numLightProbes=h,i.version=Kv++)}function c(u,m){let E=0,y=0,T=0,v=0,R=0,C=0,M=m.matrixWorldInverse;for(let D=0,O=u.length;D<O;D++){let p=u[D];if(p.isSunLight){let x=i.sun[E];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(M),E++}else if(p.isDirectionalLight){let x=i.directional[y];x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(M),y++}else if(p.isSpotLight){let x=i.spot[v];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(M),x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(M),v++}else if(p.isRectAreaLight){let x=i.rectArea[R];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(M),s.identity(),a.copy(p.matrixWorld),a.premultiply(M),s.extractRotation(a),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),R++}else if(p.isPointLight){let x=i.point[T];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(M),T++}else if(p.isHemisphereLight){let x=i.hemi[C];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(M),C++}}}return{setup:o,setupView:c,state:i}}function yp(n){let e=new ey(n),t=[],i=[],r=[];function a(y){E.camera=y,t.length=0,i.length=0,r.length=0}function s(y){t.push(y)}function o(y){i.push(y)}function c(y){r.push(y)}function u(){e.setup(t)}function m(y){e.setupView(t,y)}let E={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:E,setupLights:u,setupLightsView:m,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function ty(n){let e=new WeakMap;function t(r,a=0){let s=e.get(r),o;return s===void 0?(o=new yp(n),e.set(r,[o])):a>=s.length?(o=new yp(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`,ry=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],sy=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bp=new Le,a0=new W,Eu=new W;function ay(n,e,t){let i=new ya,r=new ye,a=new ye,s=new Vt,o=new bc,c=new Sc,u={},m=t.maxTextureSize,E={[Kr]:Rn,[Rn]:Kr,[Pn]:Pn},y=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),T=y.clone();T.defines.HORIZONTAL_PASS=1;let v=new pn;v.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new $e(v,y),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let M=this.type;this.render=function(w,A,b){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||w.length===0)return;this.type===Fc&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ho);let P=n.getRenderTarget(),h=n.getActiveCubeFace(),l=n.getActiveMipmapLevel(),d=n.state;d.setBlending(sn),d.buffers.depth.getReversed()===!0?d.buffers.color.setClear(0,0,0,0):d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1);let _=M!==this.type;_&&A.traverse(function(g){g.material&&(Array.isArray(g.material)?g.material.forEach(f=>f.needsUpdate=!0):g.material.needsUpdate=!0)});for(let g=0,f=w.length;g<f;g++){let S=w[g],I=S.shadow;if(I===void 0){Qe("WebGLShadowMap:",S,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let L=I.getFrameExtents();r.multiply(L),a.copy(I.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/L.x),r.x=a.x*L.x,I.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/L.y),r.y=a.y*L.y,I.mapSize.y=a.y));let z=n.state.buffers.depth.getReversed();if(I.camera._reversedDepth=z,I.map===null||_===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Aa){if(S.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qt(r.x,r.y,{format:is,type:yn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),I.map.texture.name=S.name+".shadowMap",I.map.depthTexture=new nr(r.x,r.y,Ai),I.map.depthTexture.name=S.name+".shadowMapDepth",I.map.depthTexture.format=er,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=kt,I.map.depthTexture.magFilter=kt}else S.isPointLight?(I.map=new Rl(r.x),I.map.depthTexture=new mc(r.x,qi)):(I.map=new qt(r.x,r.y),I.map.depthTexture=new nr(r.x,r.y,qi)),I.map.depthTexture.name=S.name+".shadowMap",I.map.depthTexture.format=er,this.type===Ho?(I.map.depthTexture.compareFunction=z?Al:wl,I.map.depthTexture.minFilter=Cn,I.map.depthTexture.magFilter=Cn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=kt,I.map.depthTexture.magFilter=kt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==r.x||I.map.height!==r.y)&&I.map.setSize(r.x,r.y);let F=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();S.isPointLight!==!0&&I.updateMatrices(S,b);for(let N=0;N<F;N++){let B=I.getCamera(N);if(S.isPointLight){let V=I.camera,X=I.matrix,Z=S.distance||V.far;Z!==V.far&&(V.far=Z,V.updateProjectionMatrix()),a0.setFromMatrixPosition(S.matrixWorld),V.position.copy(a0),Eu.copy(V.position),Eu.add(ry[N]),V.up.copy(sy[N]),V.lookAt(Eu),V.updateMatrixWorld(),X.makeTranslation(-a0.x,-a0.y,-a0.z),bp.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),I._frustum.setFromProjectionMatrix(bp,V.coordinateSystem,V.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,N),n.clear();else{N===0&&(n.setRenderTarget(I.map),n.clear());let V=I.getViewport(N);s.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),d.viewport(s)}i=I.getFrustum(N),p(A,b,B,S,this.type)}I.isPointLightShadow!==!0&&this.type===Aa&&D(I,b),I.needsUpdate=!1}M=this.type,C.needsUpdate=!1,n.setRenderTarget(P,h,l)};function D(w,A){let b=e.update(R);y.defines.VSM_SAMPLES!==w.blurSamples&&(y.defines.VSM_SAMPLES=w.blurSamples,T.defines.VSM_SAMPLES=w.blurSamples,y.needsUpdate=!0,T.needsUpdate=!0),w.mapPass===null?w.mapPass=new qt(r.x,r.y,{format:is,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),y.uniforms.shadow_pass.value=w.map.depthTexture,y.uniforms.resolution.value.set(w.map.width,w.map.height),y.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,b,y,R,null),T.uniforms.shadow_pass.value=w.mapPass.texture,T.uniforms.resolution.value.set(w.map.width,w.map.height),T.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,b,T,R,null)}function O(w,A,b,P){let h=null,l=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(l!==void 0)h=l;else if(h=b.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let d=h.uuid,_=A.uuid,g=u[d];g===void 0&&(g={},u[d]=g);let f=g[_];f===void 0&&(f=h.clone(),g[_]=f,A.addEventListener("dispose",x)),h=f}if(h.visible=A.visible,h.wireframe=A.wireframe,P===Aa?h.side=A.shadowSide!==null?A.shadowSide:A.side:h.side=A.shadowSide!==null?A.shadowSide:E[A.side],h.alphaMap=A.alphaMap,h.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,h.map=A.map,h.clipShadows=A.clipShadows,h.clippingPlanes=A.clippingPlanes,h.clipIntersection=A.clipIntersection,h.displacementMap=A.displacementMap,h.displacementScale=A.displacementScale,h.displacementBias=A.displacementBias,h.wireframeLinewidth=A.wireframeLinewidth,h.linewidth=A.linewidth,b.isPointLight===!0&&h.isMeshDistanceMaterial===!0){let d=n.properties.get(h);d.light=b}return h}function p(w,A,b,P,h){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&h===Aa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let _=e.update(w),g=w.material;if(Array.isArray(g)){let f=_.groups;for(let S=0,I=f.length;S<I;S++){let L=f[S],z=g[L.materialIndex];if(z&&z.visible){let F=O(w,z,P,h);w.onBeforeShadow(n,w,A,b,_,F,L),n.renderBufferDirect(b,null,_,F,w,L),w.onAfterShadow(n,w,A,b,_,F,L)}}}else if(g.visible){let f=O(w,g,P,h);w.onBeforeShadow(n,w,A,b,_,f,null),n.renderBufferDirect(b,null,_,f,w,null),w.onAfterShadow(n,w,A,b,_,f,null)}}let d=w.children;for(let _=0,g=d.length;_<g;_++)p(d[_],A,b,P,h)}function x(w){w.target.removeEventListener("dispose",x);for(let b in u){let P=u[b],h=w.target.uuid;h in P&&(P[h].dispose(),delete P[h])}}}function oy(n,e){function t(){let $=!1,Ce=new Vt,me=null,Me=new Vt(0,0,0,0);return{setMask:function(De){me!==De&&!$&&(n.colorMask(De,De,De,De),me=De)},setLocked:function(De){$=De},setClear:function(De,xe,Ze,He,Ct){Ct===!0&&(De*=He,xe*=He,Ze*=He),Ce.set(De,xe,Ze,He),Me.equals(Ce)===!1&&(n.clearColor(De,xe,Ze,He),Me.copy(Ce))},reset:function(){$=!1,me=null,Me.set(-1,0,0,0)}}}function i(){let $=!1,Ce=!1,me=null,Me=null,De=null;return{setReversed:function(xe){if(Ce!==xe){let Ze=e.get("EXT_clip_control");xe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ce=xe;let He=De;De=null,this.setClear(He)}},getReversed:function(){return Ce},setTest:function(xe){xe?j(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(xe){me!==xe&&!$&&(n.depthMask(xe),me=xe)},setFunc:function(xe){if(Ce&&(xe=jf[xe]),Me!==xe){switch(xe){case ic:n.depthFunc(n.NEVER);break;case rc:n.depthFunc(n.ALWAYS);break;case sc:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case ac:n.depthFunc(n.EQUAL);break;case oc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=xe}},setLocked:function(xe){$=xe},setClear:function(xe){De!==xe&&(De=xe,Ce&&(xe=1-xe),n.clearDepth(xe))},reset:function(){$=!1,me=null,Me=null,De=null,Ce=!1}}}function r(){let $=!1,Ce=null,me=null,Me=null,De=null,xe=null,Ze=null,He=null,Ct=null;return{setTest:function(yt){$||(yt?j(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!$&&(n.stencilMask(yt),Ce=yt)},setFunc:function(yt,Qt,Kn){(me!==yt||Me!==Qt||De!==Kn)&&(n.stencilFunc(yt,Qt,Kn),me=yt,Me=Qt,De=Kn)},setOp:function(yt,Qt,Kn){(xe!==yt||Ze!==Qt||He!==Kn)&&(n.stencilOp(yt,Qt,Kn),xe=yt,Ze=Qt,He=Kn)},setLocked:function(yt){$=yt},setClear:function(yt){Ct!==yt&&(n.clearStencil(yt),Ct=yt)},reset:function(){$=!1,Ce=null,me=null,Me=null,De=null,xe=null,Ze=null,He=null,Ct=null}}}let a=new t,s=new i,o=new r,c=new WeakMap,u=new WeakMap,m={},E={},y={},T=new WeakMap,v=[],R=null,C=!1,M=null,D=null,O=null,p=null,x=null,w=null,A=null,b=new Be(0,0,0),P=0,h=!1,l=null,d=null,_=null,g=null,f=null,S=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,L=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=L>=1):z.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=L>=2);let F=null,N={},B=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),X=new Vt().fromArray(B),Z=new Vt().fromArray(V);function se($,Ce,me,Me){let De=new Uint8Array(4),xe=n.createTexture();n.bindTexture($,xe),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<me;Ze++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ce+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return xe}let G={};G[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),j(n.DEPTH_TEST),s.setFunc(da),te(!1),ue(qh),j(n.CULL_FACE),Q(sn);function j($){m[$]!==!0&&(n.enable($),m[$]=!0)}function re($){m[$]!==!1&&(n.disable($),m[$]=!1)}function ce($,Ce){return y[$]!==Ce?(n.bindFramebuffer($,Ce),y[$]=Ce,$===n.DRAW_FRAMEBUFFER&&(y[n.FRAMEBUFFER]=Ce),$===n.FRAMEBUFFER&&(y[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function J($,Ce){let me=v,Me=!1;if($){me=T.get(Ce),me===void 0&&(me=[],T.set(Ce,me));let De=$.textures;if(me.length!==De.length||me[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ze=De.length;xe<Ze;xe++)me[xe]=n.COLOR_ATTACHMENT0+xe;me.length=De.length,Me=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Me=!0);Me&&n.drawBuffers(me)}function ge($){return R!==$?(n.useProgram($),R=$,!0):!1}let Oe={[wi]:n.FUNC_ADD,[xf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};Oe[vf]=n.MIN,Oe[yf]=n.MAX;let le={[Rs]:n.ZERO,[bf]:n.ONE,[Sf]:n.SRC_COLOR,[$h]:n.SRC_ALPHA,[Af]:n.SRC_ALPHA_SATURATE,[Wo]:n.DST_COLOR,[Go]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[Jh]:n.ONE_MINUS_SRC_ALPHA,[wf]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Mf]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Pf]:n.ONE_MINUS_CONSTANT_ALPHA};function Q($,Ce,me,Me,De,xe,Ze,He,Ct,yt){if($===sn){C===!0&&(re(n.BLEND),C=!1);return}if(C===!1&&(j(n.BLEND),C=!0),$!==Nc){if($!==M||yt!==h){if((D!==wi||x!==wi)&&(n.blendEquation(n.FUNC_ADD),D=wi,x=wi),yt)switch($){case Qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",$);break}else switch($){case Qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",$);break}O=null,p=null,w=null,A=null,b.set(0,0,0),P=0,M=$,h=yt}return}De=De||Ce,xe=xe||me,Ze=Ze||Me,(Ce!==D||De!==x)&&(n.blendEquationSeparate(Oe[Ce],Oe[De]),D=Ce,x=De),(me!==O||Me!==p||xe!==w||Ze!==A)&&(n.blendFuncSeparate(le[me],le[Me],le[xe],le[Ze]),O=me,p=Me,w=xe,A=Ze),(He.equals(b)===!1||Ct!==P)&&(n.blendColor(He.r,He.g,He.b,Ct),b.copy(He),P=Ct),M=$,h=!1}function oe($,Ce){$.side===Pn?re(n.CULL_FACE):j(n.CULL_FACE);let me=$.side===Rn;Ce&&(me=!me),te(me),$.blending===Qr&&$.transparent===!1?Q(sn):Q($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),a.setMask($.colorWrite);let Me=$.stencilWrite;o.setTest(Me),Me&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ae($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te($){l!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),l=$)}function ue($){$!==mf?(j(n.CULL_FACE),$!==d&&($===qh?n.cullFace(n.BACK):$===gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),d=$}function ve($){$!==_&&(I&&n.lineWidth($),_=$)}function Ae($,Ce,me){$?(j(n.POLYGON_OFFSET_FILL),(g!==Ce||f!==me)&&(g=Ce,f=me,s.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):re(n.POLYGON_OFFSET_FILL)}function Ue($){$?j(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function Je($){$===void 0&&($=n.TEXTURE0+S-1),F!==$&&(n.activeTexture($),F=$)}function q($,Ce,me){me===void 0&&(F===null?me=n.TEXTURE0+S-1:me=F);let Me=N[me];Me===void 0&&(Me={type:void 0,texture:void 0},N[me]=Me),(Me.type!==$||Me.texture!==Ce)&&(F!==me&&(n.activeTexture(me),F=me),n.bindTexture($,Ce||G[$]),Me.type=$,Me.texture=Ce)}function lt(){let $=N[F];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function et(){try{n.compressedTexImage2D(...arguments)}catch($){tt("WebGLState:",$)}}function H(){try{n.compressedTexImage3D(...arguments)}catch($){tt("WebGLState:",$)}}function U(){try{n.texSubImage2D(...arguments)}catch($){tt("WebGLState:",$)}}function K(){try{n.texSubImage3D(...arguments)}catch($){tt("WebGLState:",$)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch($){tt("WebGLState:",$)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch($){tt("WebGLState:",$)}}function _e(){try{n.texStorage2D(...arguments)}catch($){tt("WebGLState:",$)}}function Se(){try{n.texStorage3D(...arguments)}catch($){tt("WebGLState:",$)}}function fe(){try{n.texImage2D(...arguments)}catch($){tt("WebGLState:",$)}}function pe(){try{n.texImage3D(...arguments)}catch($){tt("WebGLState:",$)}}function Te($){return E[$]!==void 0?E[$]:n.getParameter($)}function je($,Ce){E[$]!==Ce&&(n.pixelStorei($,Ce),E[$]=Ce)}function Ee($){X.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),X.copy($))}function be($){Z.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),Z.copy($))}function Ne($,Ce){let me=u.get(Ce);me===void 0&&(me=new WeakMap,u.set(Ce,me));let Me=me.get($);Me===void 0&&(Me=n.getUniformBlockIndex(Ce,$.name),me.set($,Me))}function Ye($,Ce){let Me=u.get(Ce).get($);c.get(Ce)!==Me&&(n.uniformBlockBinding(Ce,Me,$.__bindingPointIndex),c.set(Ce,Me))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},E={},F=null,N={},y={},T=new WeakMap,v=[],R=null,C=!1,M=null,D=null,O=null,p=null,x=null,w=null,A=null,b=new Be(0,0,0),P=0,h=!1,l=null,d=null,_=null,g=null,f=null,X.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:j,disable:re,bindFramebuffer:ce,drawBuffers:J,useProgram:ge,setBlending:Q,setMaterial:oe,setFlipSided:te,setCullFace:ue,setLineWidth:ve,setPolygonOffset:Ae,setScissorTest:Ue,activeTexture:Je,bindTexture:q,unbindTexture:lt,compressedTexImage2D:et,compressedTexImage3D:H,texImage2D:fe,texImage3D:pe,pixelStorei:je,getParameter:Te,updateUBOMapping:Ne,uniformBlockBinding:Ye,texStorage2D:_e,texStorage3D:Se,texSubImage2D:U,texSubImage3D:K,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:Ee,viewport:be,reset:Ke}}function cy(n,e,t,i,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ye,m=new WeakMap,E=new Set,y,T=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(H,U){return v?new OffscreenCanvas(H,U):po("canvas")}function C(H,U,K){let ne=1,de=et(H);if((de.width>K||de.height>K)&&(ne=K/Math.max(de.width,de.height)),ne<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let _e=Math.floor(ne*de.width),Se=Math.floor(ne*de.height);y===void 0&&(y=R(_e,Se));let fe=U?R(_e,Se):y;return fe.width=_e,fe.height=Se,fe.getContext("2d").drawImage(H,0,0,_e,Se),Qe("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+_e+"x"+Se+")."),fe}else return"data"in H&&Qe("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),H;return H}function M(H){return H.generateMipmaps}function D(H){n.generateMipmap(H)}function O(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function p(H,U,K,ne,de,_e=!1){if(H!==null){if(n[H]!==void 0)return n[H];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Se;ne&&(Se=e.get("EXT_texture_norm16"),Se||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=U;if(U===n.RED&&(K===n.FLOAT&&(fe=n.R32F),K===n.HALF_FLOAT&&(fe=n.R16F),K===n.UNSIGNED_BYTE&&(fe=n.R8),K===n.UNSIGNED_SHORT&&Se&&(fe=Se.R16_EXT),K===n.SHORT&&Se&&(fe=Se.R16_SNORM_EXT)),U===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.R8UI),K===n.UNSIGNED_SHORT&&(fe=n.R16UI),K===n.UNSIGNED_INT&&(fe=n.R32UI),K===n.BYTE&&(fe=n.R8I),K===n.SHORT&&(fe=n.R16I),K===n.INT&&(fe=n.R32I)),U===n.RG&&(K===n.FLOAT&&(fe=n.RG32F),K===n.HALF_FLOAT&&(fe=n.RG16F),K===n.UNSIGNED_BYTE&&(fe=n.RG8),K===n.UNSIGNED_SHORT&&Se&&(fe=Se.RG16_EXT),K===n.SHORT&&Se&&(fe=Se.RG16_SNORM_EXT)),U===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RG8UI),K===n.UNSIGNED_SHORT&&(fe=n.RG16UI),K===n.UNSIGNED_INT&&(fe=n.RG32UI),K===n.BYTE&&(fe=n.RG8I),K===n.SHORT&&(fe=n.RG16I),K===n.INT&&(fe=n.RG32I)),U===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),K===n.UNSIGNED_INT&&(fe=n.RGB32UI),K===n.BYTE&&(fe=n.RGB8I),K===n.SHORT&&(fe=n.RGB16I),K===n.INT&&(fe=n.RGB32I)),U===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),K===n.UNSIGNED_INT&&(fe=n.RGBA32UI),K===n.BYTE&&(fe=n.RGBA8I),K===n.SHORT&&(fe=n.RGBA16I),K===n.INT&&(fe=n.RGBA32I)),U===n.RGB&&(K===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGB16_EXT),K===n.SHORT&&Se&&(fe=Se.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),U===n.RGBA){let pe=_e?fo:ft.getTransfer(de);K===n.FLOAT&&(fe=n.RGBA32F),K===n.HALF_FLOAT&&(fe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(fe=pe===Et?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGBA16_EXT),K===n.SHORT&&Se&&(fe=Se.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(H,U){let K;return H?U===null||U===qi||U===ns?K=n.DEPTH24_STENCIL8:U===Ai?K=n.DEPTH32F_STENCIL8:U===Ca&&(K=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===qi||U===ns?K=n.DEPTH_COMPONENT24:U===Ai?K=n.DEPTH_COMPONENT32F:U===Ca&&(K=n.DEPTH_COMPONENT16),K}function w(H,U){return M(H)===!0||H.isFramebufferTexture&&H.minFilter!==kt&&H.minFilter!==Cn?Math.log2(Math.max(U.width,U.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?U.mipmaps.length:1}function A(H){let U=H.target;U.removeEventListener("dispose",A),P(U),U.isVideoTexture&&m.delete(U),U.isHTMLTexture&&E.delete(U)}function b(H){let U=H.target;U.removeEventListener("dispose",b),l(U)}function P(H){let U=i.get(H);if(U.__webglInit===void 0)return;let K=H.source,ne=T.get(K);if(ne){let de=ne[U.__cacheKey];de.usedTimes--,de.usedTimes===0&&h(H),Object.keys(ne).length===0&&T.delete(K)}i.remove(H)}function h(H){let U=i.get(H);n.deleteTexture(U.__webglTexture);let K=H.source,ne=T.get(K);delete ne[U.__cacheKey],s.memory.textures--}function l(H){let U=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(U.__webglFramebuffer[ne]))for(let de=0;de<U.__webglFramebuffer[ne].length;de++)n.deleteFramebuffer(U.__webglFramebuffer[ne][de]);else n.deleteFramebuffer(U.__webglFramebuffer[ne]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[ne])}else{if(Array.isArray(U.__webglFramebuffer))for(let ne=0;ne<U.__webglFramebuffer.length;ne++)n.deleteFramebuffer(U.__webglFramebuffer[ne]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ne=0;ne<U.__webglColorRenderbuffer.length;ne++)U.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[ne]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let K=H.textures;for(let ne=0,de=K.length;ne<de;ne++){let _e=i.get(K[ne]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(K[ne])}i.remove(H)}let d=0;function _(){d=0}function g(){return d}function f(H){d=H}function S(){let H=d;return H>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),d+=1,H}function I(H){let U=[];return U.push(H.wrapS),U.push(H.wrapT),U.push(H.wrapR||0),U.push(H.magFilter),U.push(H.minFilter),U.push(H.anisotropy),U.push(H.internalFormat),U.push(H.format),U.push(H.type),U.push(H.generateMipmaps),U.push(H.premultiplyAlpha),U.push(H.flipY),U.push(H.unpackAlignment),U.push(H.colorSpace),U.join()}function L(H,U){let K=i.get(H);if(H.isVideoTexture&&q(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&K.__version!==H.version){let ne=H.image;if(ne===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{re(K,H,U);return}}else H.isExternalTexture&&(K.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+U)}function z(H,U){let K=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&K.__version!==H.version){re(K,H,U);return}else H.isExternalTexture&&(K.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+U)}function F(H,U){let K=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&K.__version!==H.version){re(K,H,U);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+U)}function N(H,U){let K=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&K.__version!==H.version){ce(K,H,U);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+U)}let B={[Qi]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},V={[kt]:n.NEAREST,[zf]:n.NEAREST_MIPMAP_NEAREST,[Ko]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},X={[Nf]:n.NEVER,[Hf]:n.ALWAYS,[Uf]:n.LESS,[wl]:n.LEQUAL,[Bf]:n.EQUAL,[Al]:n.GEQUAL,[kf]:n.GREATER,[Vf]:n.NOTEQUAL};function Z(H,U){if(U.type===Ai&&e.has("OES_texture_float_linear")===!1&&(U.magFilter===Cn||U.magFilter===Vc||U.magFilter===Ko||U.magFilter===ts||U.minFilter===Cn||U.minFilter===Vc||U.minFilter===Ko||U.minFilter===ts)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,B[U.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,B[U.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,B[U.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,V[U.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,V[U.minFilter]),U.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,X[U.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===kt||U.minFilter!==Ko&&U.minFilter!==ts||U.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||i.get(U).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(H,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,r.getMaxAnisotropy())),i.get(U).__currentAnisotropy=U.anisotropy}}}function se(H,U){let K=!1;H.__webglInit===void 0&&(H.__webglInit=!0,U.addEventListener("dispose",A));let ne=U.source,de=T.get(ne);de===void 0&&(de={},T.set(ne,de));let _e=I(U);if(_e!==H.__cacheKey){de[_e]===void 0&&(de[_e]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,K=!0),de[_e].usedTimes++;let Se=de[H.__cacheKey];Se!==void 0&&(de[H.__cacheKey].usedTimes--,Se.usedTimes===0&&h(U)),H.__cacheKey=_e,H.__webglTexture=de[_e].texture}return K}function G(H,U,K){return Math.floor(Math.floor(H/K)/U)}function j(H,U,K,ne){let _e=H.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,U.width,U.height,K,ne,U.data);else{_e.sort((je,Ee)=>je.start-Ee.start);let Se=0;for(let je=1;je<_e.length;je++){let Ee=_e[Se],be=_e[je],Ne=Ee.start+Ee.count,Ye=G(be.start,U.width,4),Ke=G(Ee.start,U.width,4);be.start<=Ne+1&&Ye===Ke&&G(be.start+be.count-1,U.width,4)===Ye?Ee.count=Math.max(Ee.count,be.start+be.count-Ee.start):(++Se,_e[Se]=be)}_e.length=Se+1;let fe=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Te=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,U.width);for(let je=0,Ee=_e.length;je<Ee;je++){let be=_e[je],Ne=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),Ke=Ne%U.width,$=Math.floor(Ne/U.width),Ce=Ye,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,$),t.texSubImage2D(n.TEXTURE_2D,0,Ke,$,Ce,me,K,ne,U.data)}H.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function re(H,U,K){let ne=n.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),U.isData3DTexture&&(ne=n.TEXTURE_3D);let de=se(H,U),_e=U.source;t.bindTexture(ne,H.__webglTexture,n.TEXTURE0+K);let Se=i.get(_e);if(_e.version!==Se.__version||de===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&U.image instanceof ImageBitmap)===!1){let me=ft.getPrimaries(ft.workingColorSpace),Me=U.colorSpace===Er?null:ft.getPrimaries(U.colorSpace),De=U.colorSpace===Er||me===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,U.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(n.UNPACK_ALIGNMENT,U.unpackAlignment);let pe=C(U.image,!1,r.maxTextureSize);pe=lt(U,pe);let Te=a.convert(U.format,U.colorSpace),je=a.convert(U.type),Ee=p(U.internalFormat,Te,je,U.normalized,U.colorSpace,U.isVideoTexture);Z(ne,U);let be,Ne=U.mipmaps,Ye=U.isVideoTexture!==!0,Ke=Se.__version===void 0||de===!0,$=_e.dataReady,Ce=w(U,pe);if(U.isDepthTexture)Ee=x(U.format===rr,U.type),Ke&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Ee,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ee,pe.width,pe.height,0,Te,je,null));else if(U.isDataTexture)if(Ne.length>0){Ye&&Ke&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Ne[0].width,Ne[0].height);for(let me=0,Me=Ne.length;me<Me;me++)be=Ne[me],Ye?$&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Te,je,be.data):t.texImage2D(n.TEXTURE_2D,me,Ee,be.width,be.height,0,Te,je,be.data);U.generateMipmaps=!1}else Ye?(Ke&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,pe.width,pe.height),$&&j(U,pe,Te,je)):t.texImage2D(n.TEXTURE_2D,0,Ee,pe.width,pe.height,0,Te,je,pe.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){Ye&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,Ne[0].width,Ne[0].height,pe.depth);for(let me=0,Me=Ne.length;me<Me;me++)if(be=Ne[me],U.format!==ti)if(Te!==null)if(Ye){if($)if(U.layerUpdates.size>0){let De=du(be.width,be.height,U.format,U.type);for(let xe of U.layerUpdates){let Ze=be.data.subarray(xe*De/be.data.BYTES_PER_ELEMENT,(xe+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,xe,be.width,be.height,1,Te,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,pe.depth,Te,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ee,be.width,be.height,pe.depth,0,be.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,pe.depth,Te,je,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ee,be.width,be.height,pe.depth,0,Te,je,be.data);U.layerUpdates.size>0&&U.clearLayerUpdates()}else{Ye&&Ke&&t.texStorage2D(n.TEXTURE_2D,Ce,Ee,Ne[0].width,Ne[0].height);for(let me=0,Me=Ne.length;me<Me;me++)be=Ne[me],U.format!==ti?Te!==null?Ye?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ee,be.width,be.height,0,be.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?$&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,Te,je,be.data):t.texImage2D(n.TEXTURE_2D,me,Ee,be.width,be.height,0,Te,je,be.data)}else if(U.isDataArrayTexture)if(Ye){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ee,pe.width,pe.height,pe.depth),$)if(U.layerUpdates.size>0){let me=du(pe.width,pe.height,U.format,U.type);for(let Me of U.layerUpdates){let De=pe.data.subarray(Me*me/pe.data.BYTES_PER_ELEMENT,(Me+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,pe.width,pe.height,1,Te,je,De)}U.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Te,je,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,pe.width,pe.height,pe.depth,0,Te,je,pe.data);else if(U.isData3DTexture)Ye?(Ke&&t.texStorage3D(n.TEXTURE_3D,Ce,Ee,pe.width,pe.height,pe.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Te,je,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,pe.width,pe.height,pe.depth,0,Te,je,pe.data);else if(U.isFramebufferTexture){if(Ke)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ce,Ee,pe.width,pe.height);else{let me=pe.width,Me=pe.height;for(let De=0;De<Ce;De++)t.texImage2D(n.TEXTURE_2D,De,Ee,me,Me,0,Te,je,null),me>>=1,Me>>=1}}else if(U.isHTMLTexture){if("texElementImage2D"in n){let me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),E.add(U),me.onpaint=Me=>{let De=Me.changedElements;for(let xe of E)De.includes(xe.image)&&(xe.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{let De=n.RGBA,xe=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,De,xe,Ze,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ye&&Ke){let me=et(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,me.width,me.height)}for(let me=0,Me=Ne.length;me<Me;me++)be=Ne[me],Ye?$&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Te,je,be):t.texImage2D(n.TEXTURE_2D,me,Ee,Te,je,be);U.generateMipmaps=!1}else if(Ye){if(Ke){let me=et(pe);t.texStorage2D(n.TEXTURE_2D,Ce,Ee,me.width,me.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,je,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ee,Te,je,pe);M(U)&&D(ne),Se.__version=_e.version,U.onUpdate&&U.onUpdate(U)}H.__version=U.version}function ce(H,U,K){if(U.image.length!==6)return;let ne=se(H,U),de=U.source;t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+K);let _e=i.get(de);if(de.version!==_e.__version||ne===!0){t.activeTexture(n.TEXTURE0+K);let Se=ft.getPrimaries(ft.workingColorSpace),fe=U.colorSpace===Er?null:ft.getPrimaries(U.colorSpace),pe=U.colorSpace===Er||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,U.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,U.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=U.isCompressedTexture||U.image[0].isCompressedTexture,je=U.image[0]&&U.image[0].isDataTexture,Ee=[];for(let xe=0;xe<6;xe++)!Te&&!je?Ee[xe]=C(U.image[xe],!0,r.maxCubemapSize):Ee[xe]=je?U.image[xe].image:U.image[xe],Ee[xe]=lt(U,Ee[xe]);let be=Ee[0],Ne=a.convert(U.format,U.colorSpace),Ye=a.convert(U.type),Ke=p(U.internalFormat,Ne,Ye,U.normalized,U.colorSpace),$=U.isVideoTexture!==!0,Ce=_e.__version===void 0||ne===!0,me=de.dataReady,Me=w(U,be);Z(n.TEXTURE_CUBE_MAP,U);let De;if(Te){$&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,be.width,be.height);for(let xe=0;xe<6;xe++){De=Ee[xe].mipmaps;for(let Ze=0;Ze<De.length;Ze++){let He=De[Ze];U.format!==ti?Ne!==null?$?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,0,0,He.width,He.height,Ne,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,Ke,He.width,He.height,0,He.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,0,0,He.width,He.height,Ne,Ye,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze,Ke,He.width,He.height,0,Ne,Ye,He.data)}}}else{if(De=U.mipmaps,$&&Ce){De.length>0&&Me++;let xe=et(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ke,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(je){$?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee[xe].width,Ee[xe].height,Ne,Ye,Ee[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ke,Ee[xe].width,Ee[xe].height,0,Ne,Ye,Ee[xe].data);for(let Ze=0;Ze<De.length;Ze++){let Ct=De[Ze].image[xe].image;$?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,0,0,Ct.width,Ct.height,Ne,Ye,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,Ke,Ct.width,Ct.height,0,Ne,Ye,Ct.data)}}else{$?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne,Ye,Ee[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ke,Ne,Ye,Ee[xe]);for(let Ze=0;Ze<De.length;Ze++){let He=De[Ze];$?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,0,0,Ne,Ye,He.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ze+1,Ke,Ne,Ye,He.image[xe])}}}M(U)&&D(n.TEXTURE_CUBE_MAP),_e.__version=de.version,U.onUpdate&&U.onUpdate(U)}H.__version=U.version}function J(H,U,K,ne,de,_e){let Se=a.convert(K.format,K.colorSpace),fe=a.convert(K.type),pe=p(K.internalFormat,Se,fe,K.normalized,K.colorSpace),Te=i.get(U),je=i.get(K);if(je.__renderTarget=U,!Te.__hasExternalTextures){let Ee=Math.max(1,U.width>>_e),be=Math.max(1,U.height>>_e);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,pe,Ee,be,U.depth,0,Se,fe,null):t.texImage2D(de,_e,pe,Ee,be,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,H),Je(U)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,de,je.__webglTexture,0,Ue(U)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,de,je.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(H,U,K){if(n.bindRenderbuffer(n.RENDERBUFFER,H),U.depthBuffer){let ne=U.depthTexture,de=ne&&ne.isDepthTexture?ne.type:null,_e=x(U.stencilBuffer,de),Se=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(U)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(U),_e,U.width,U.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(U),_e,U.width,U.height):n.renderbufferStorage(n.RENDERBUFFER,_e,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,H)}else{let ne=U.textures;for(let de=0;de<ne.length;de++){let _e=ne[de],Se=a.convert(_e.format,_e.colorSpace),fe=a.convert(_e.type),pe=p(_e.internalFormat,Se,fe,_e.normalized,_e.colorSpace);Je(U)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(U),pe,U.width,U.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(U),pe,U.width,U.height):n.renderbufferStorage(n.RENDERBUFFER,pe,U.width,U.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(H,U,K){let ne=U.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,H),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=i.get(U.depthTexture);if(de.__renderTarget=U,(!de.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),ne){if(de.__webglInit===void 0&&(de.__webglInit=!0,U.depthTexture.addEventListener("dispose",A)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),Z(n.TEXTURE_CUBE_MAP,U.depthTexture);let Te=a.convert(U.depthTexture.format),je=a.convert(U.depthTexture.type),Ee;U.depthTexture.format===er?Ee=n.DEPTH_COMPONENT24:U.depthTexture.format===rr&&(Ee=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ee,U.width,U.height,0,Te,je,null)}}else L(U.depthTexture,0);let _e=de.__webglTexture,Se=Ue(U),fe=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,pe=U.depthTexture.format===rr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(U.depthTexture.format===er)Je(U)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,_e,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,_e,0);else if(U.depthTexture.format===rr)Je(U)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,_e,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(H){let U=i.get(H),K=H.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==H.depthTexture){let ne=H.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),ne){let de=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,ne.removeEventListener("dispose",de)};ne.addEventListener("dispose",de),U.__depthDisposeCallback=de}U.__boundDepthTexture=ne}if(H.depthTexture&&!U.__autoAllocateDepthBuffer)if(K)for(let ne=0;ne<6;ne++)Oe(U.__webglFramebuffer[ne],H,ne);else{let ne=H.texture.mipmaps;ne&&ne.length>0?Oe(U.__webglFramebuffer[0],H,0):Oe(U.__webglFramebuffer,H,0)}else if(K){U.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer[ne]),U.__webglDepthbuffer[ne]===void 0)U.__webglDepthbuffer[ne]=n.createRenderbuffer(),ge(U.__webglDepthbuffer[ne],H,!1);else{let de=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=U.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,_e)}}else{let ne=H.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=n.createRenderbuffer(),ge(U.__webglDepthbuffer,H,!1);else{let de=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=U.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(H,U,K){let ne=i.get(H);U!==void 0&&J(ne.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&le(H)}function oe(H){let U=H.texture,K=i.get(H),ne=i.get(U);H.addEventListener("dispose",b);let de=H.textures,_e=H.isWebGLCubeRenderTarget===!0,Se=de.length>1;if(Se||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=U.version,s.memory.textures++),_e){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(U.mipmaps&&U.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let pe=0;pe<U.mipmaps.length;pe++)K.__webglFramebuffer[fe][pe]=n.createFramebuffer()}else K.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<U.mipmaps.length;fe++)K.__webglFramebuffer[fe]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,pe=de.length;fe<pe;fe++){let Te=i.get(de[fe]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),s.memory.textures++)}if(H.samples>0&&Je(H)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){let pe=de[fe];K.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);let Te=a.convert(pe.format,pe.colorSpace),je=a.convert(pe.type),Ee=p(pe.internalFormat,Te,je,pe.normalized,pe.colorSpace,H.isXRRenderTarget===!0),be=Ue(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Ee,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(K.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Z(n.TEXTURE_CUBE_MAP,U);for(let fe=0;fe<6;fe++)if(U.mipmaps&&U.mipmaps.length>0)for(let pe=0;pe<U.mipmaps.length;pe++)J(K.__webglFramebuffer[fe][pe],H,U,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else J(K.__webglFramebuffer[fe],H,U,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);M(U)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,pe=de.length;fe<pe;fe++){let Te=de[fe],je=i.get(Te),Ee=n.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ee=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,je.__webglTexture),Z(Ee,Te),J(K.__webglFramebuffer,H,Te,n.COLOR_ATTACHMENT0+fe,Ee,0),M(Te)&&D(Ee)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(fe=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),Z(fe,U),U.mipmaps&&U.mipmaps.length>0)for(let pe=0;pe<U.mipmaps.length;pe++)J(K.__webglFramebuffer[pe],H,U,n.COLOR_ATTACHMENT0,fe,pe);else J(K.__webglFramebuffer,H,U,n.COLOR_ATTACHMENT0,fe,0);M(U)&&D(fe),t.unbindTexture()}H.depthBuffer&&le(H)}function te(H){let U=H.textures;for(let K=0,ne=U.length;K<ne;K++){let de=U[K];if(M(de)){let _e=O(H),Se=i.get(de).__webglTexture;t.bindTexture(_e,Se),D(_e),t.unbindTexture()}}}let ue=[],ve=[];function Ae(H){if(H.samples>0){if(Je(H)===!1){let U=H.textures,K=H.width,ne=H.height,de=n.COLOR_BUFFER_BIT,_e=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(H),fe=U.length>1;if(fe)for(let Te=0;Te<U.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let pe=H.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<U.length;Te++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let je=i.get(U[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,K,ne,0,0,K,ne,de,n.NEAREST),c===!0&&(ue.length=0,ve.length=0,ue.push(n.COLOR_ATTACHMENT0+Te),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(ue.push(_e),ve.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<U.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let je=i.get(U[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let U=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[U])}}}function Ue(H){return Math.min(r.maxSamples,H.samples)}function Je(H){let U=i.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function q(H){let U=s.render.frame;m.get(H)!==U&&(m.set(H,U),H.update())}function lt(H,U){let K=H.colorSpace,ne=H.format,de=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||K!==Es&&K!==Er&&(ft.getTransfer(K)===Et?(ne!==ti||de!==kn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",K)),U}function et(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(u.width=H.naturalWidth||H.width,u.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(u.width=H.displayWidth,u.height=H.displayHeight):(u.width=H.width,u.height=H.height),u}this.allocateTextureUnit=S,this.resetTextureUnits=_,this.getTextureUnits=g,this.setTextureUnits=f,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=N,this.rebindTextures=Q,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ly(n,e){function t(i,r=Er){let a,s=ft.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===eu)return n.SHORT;if(i===Ca)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===yn)return n.HALF_FLOAT;if(i===iu)return n.ALPHA;if(i===ru)return n.RGB;if(i===ti)return n.RGBA;if(i===er)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===Xc)return n.RED;if(i===qc)return n.RED_INTEGER;if(i===is)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===Qo||i===e0||i===t0||i===n0)if(s===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===e0)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===t0)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===n0)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===e0)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===t0)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===n0)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===$c||i===Jc||i===Kc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Zc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===el||i===tl||i===nl||i===il||i===i0||i===rl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Qc||i===el)return s===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===tl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===nl)return a.COMPRESSED_R11_EAC;if(i===il)return a.COMPRESSED_SIGNED_R11_EAC;if(i===i0)return a.COMPRESSED_RG11_EAC;if(i===rl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sl||i===al||i===ol||i===cl||i===ll||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===_l)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===sl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_l)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===yl||i===bl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===vl)return s===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===El||i===r0||i===Tl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Sl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===El)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===r0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ht({vertexShader:hy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends tr{constructor(e,t){super();let i=this,r=null,a=1,s=null,o="local-floor",c=1,u=null,m=null,E=null,y=null,T=null,v=null,R=typeof XRWebGLBinding<"u",C=new Iu,M={},D=t.getContextAttributes(),O=null,p=null,x=[],w=[],A=new ye,b=null,P=null,h=new An;h.viewport=new Vt;let l=new An;l.viewport=new Vt;let d=[h,l],_=new Lc,g=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=x[G];return j===void 0&&(j=new _a,x[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=x[G];return j===void 0&&(j=new _a,x[G]=j),j.getGripSpace()},this.getHand=function(G){let j=x[G];return j===void 0&&(j=new _a,x[G]=j),j.getHandSpace()};function S(G){let j=w.indexOf(G.inputSource);if(j===-1)return;let re=x[j];re!==void 0&&(re.update(G.inputSource,G.frame,u||s),re.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",L);for(let G=0;G<x.length;G++){let j=w[G];j!==null&&(w[G]=null,x[G].disconnect(j))}g=null,f=null,C.reset();for(let G in M)delete M[G];if(e.setRenderTarget(O),T=null,y=null,E=null,r=null,p=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),P!==null){let G=P.camera;G.fov=P.fov,G.zoom=P.zoom,G.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return y!==null?y:T},this.getBinding=function(){return E===null&&R&&(E=new XRWebGLBinding(r,t)),E},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(O=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",I),r.addEventListener("inputsourceschange",L),D.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ce=null,J=null;D.depth&&(J=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=D.stencil?rr:er,ce=D.stencil?ns:qi);let ge={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:a};E=this.getBinding(),y=E.createProjectionLayer(ge),r.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),p=new qt(y.textureWidth,y.textureHeight,{format:ti,type:kn,depthTexture:new nr(y.textureWidth,y.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{let re={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};T=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),p=new qt(T.framebufferWidth,T.framebufferHeight,{format:ti,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function L(G){for(let j=0;j<G.removed.length;j++){let re=G.removed[j],ce=w.indexOf(re);ce>=0&&(w[ce]=null,x[ce].disconnect(re))}for(let j=0;j<G.added.length;j++){let re=G.added[j],ce=w.indexOf(re);if(ce===-1){for(let ge=0;ge<x.length;ge++)if(ge>=w.length){w.push(re),ce=ge;break}else if(w[ge]===null){w[ge]=re,ce=ge;break}if(ce===-1)break}let J=x[ce];J&&J.connect(re)}}let z=new W,F=new W;function N(G,j,re){z.setFromMatrixPosition(j.matrixWorld),F.setFromMatrixPosition(re.matrixWorld);let ce=z.distanceTo(F),J=j.projectionMatrix.elements,ge=re.projectionMatrix.elements,Oe=J[14]/(J[10]-1),le=J[14]/(J[10]+1),Q=(J[9]+1)/J[5],oe=(J[9]-1)/J[5],te=(J[8]-1)/J[0],ue=(ge[8]+1)/ge[0],ve=Oe*te,Ae=Oe*ue,Ue=ce/(-te+ue),Je=Ue*-te;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Je),G.translateZ(Ue),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),J[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let q=Oe+Ue,lt=le+Ue,et=ve-Je,H=Ae+(ce-Je),U=Q*le/lt*q,K=oe*le/lt*q;G.projectionMatrix.makePerspective(et,H,U,K,q,lt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function B(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let j=G.near,re=G.far;C.texture!==null&&(C.depthNear>0&&(j=C.depthNear),C.depthFar>0&&(re=C.depthFar)),_.near=l.near=h.near=j,_.far=l.far=h.far=re,(g!==_.near||f!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),g=_.near,f=_.far),_.layers.mask=G.layers.mask|6,h.layers.mask=_.layers.mask&-5,l.layers.mask=_.layers.mask&-3;let ce=G.parent,J=_.cameras;B(_,ce);for(let ge=0;ge<J.length;ge++)B(J[ge],ce);J.length===2?N(_,h,l):_.projectionMatrix.copy(h.projectionMatrix),P===null&&G.isPerspectiveCamera&&(P={camera:G,fov:G.fov,zoom:G.zoom}),V(G,_,ce)};function V(G,j,re){re===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ma*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(y===null&&T===null))return c},this.setFoveation=function(G){c=G,y!==null&&(y.fixedFoveation=G),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=G)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(_)},this.getCameraTexture=function(G){return M[G]};let X=null;function Z(G,j){if(m=j.getViewerPose(u||s),v=j,m!==null){let re=m.views;T!==null&&(e.setRenderTargetFramebuffer(p,T.framebuffer),e.setRenderTarget(p));let ce=!1;re.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let le=0;le<re.length;le++){let Q=re[le],oe=null;if(T!==null)oe=T.getViewport(Q);else{let ue=E.getViewSubImage(y,Q);oe=ue.viewport,le===0&&(e.setRenderTargetTextures(p,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(p))}let te=d[le];te===void 0&&(te=new An,te.layers.enable(le),te.viewport=new Vt,d[le]=te),te.matrix.fromArray(Q.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Q.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(oe.x,oe.y,oe.width,oe.height),le===0&&(_.matrix.copy(te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(te)}let J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&R){E=i.getBinding();let le=E.getDepthInformation(re[0]);le&&le.isValid&&le.texture&&C.init(le,r.renderState)}if(J&&J.includes("camera-access")&&R){e.state.unbindTexture(),E=i.getBinding();for(let le=0;le<re.length;le++){let Q=re[le].camera;if(Q){let oe=M[Q];oe||(oe=new yo,M[Q]=oe);let te=E.getCameraImage(Q);oe.sourceTexture=te}}}}for(let re=0;re<x.length;re++){let ce=w[re],J=x[re];ce!==null&&J!==void 0&&J.update(ce,j,u||s)}X&&X(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}let se=new Sp;se.setAnimationLoop(Z),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}},dy=new Le,Mp=new st;Mp.set(-1,0,0,0,1,0,0,0,1);function fy(n,e){function t(C,M){C.matrixAutoUpdate===!0&&C.updateMatrix(),M.value.copy(C.matrix)}function i(C,M){M.color.getRGB(C.fogColor.value,lu(n)),M.isFog?(C.fogNear.value=M.near,C.fogFar.value=M.far):M.isFogExp2&&(C.fogDensity.value=M.density)}function r(C,M,D,O,p){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?a(C,M):M.isMeshLambertMaterial?(a(C,M),M.envMap&&(C.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(a(C,M),E(C,M)):M.isMeshPhongMaterial?(a(C,M),m(C,M),M.envMap&&(C.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(a(C,M),y(C,M),M.isMeshPhysicalMaterial&&T(C,M,p)):M.isMeshMatcapMaterial?(a(C,M),v(C,M)):M.isMeshDepthMaterial?a(C,M):M.isMeshDistanceMaterial?(a(C,M),R(C,M)):M.isMeshNormalMaterial?a(C,M):M.isLineBasicMaterial?(s(C,M),M.isLineDashedMaterial&&o(C,M)):M.isPointsMaterial?c(C,M,D,O):M.isSpriteMaterial?u(C,M):M.isShadowMaterial?(C.color.value.copy(M.color),C.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function a(C,M){C.opacity.value=M.opacity,M.color&&C.diffuse.value.copy(M.color),M.emissive&&C.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(C.map.value=M.map,t(M.map,C.mapTransform)),M.alphaMap&&(C.alphaMap.value=M.alphaMap,t(M.alphaMap,C.alphaMapTransform)),M.bumpMap&&(C.bumpMap.value=M.bumpMap,t(M.bumpMap,C.bumpMapTransform),C.bumpScale.value=M.bumpScale,M.side===Rn&&(C.bumpScale.value*=-1)),M.normalMap&&(C.normalMap.value=M.normalMap,t(M.normalMap,C.normalMapTransform),C.normalScale.value.copy(M.normalScale),M.side===Rn&&C.normalScale.value.negate()),M.displacementMap&&(C.displacementMap.value=M.displacementMap,t(M.displacementMap,C.displacementMapTransform),C.displacementScale.value=M.displacementScale,C.displacementBias.value=M.displacementBias),M.emissiveMap&&(C.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,C.emissiveMapTransform)),M.specularMap&&(C.specularMap.value=M.specularMap,t(M.specularMap,C.specularMapTransform)),M.alphaTest>0&&(C.alphaTest.value=M.alphaTest);let D=e.get(M),O=D.envMap,p=D.envMapRotation;O&&(C.envMap.value=O,C.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(p)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&C.envMapRotation.value.premultiply(Mp),C.reflectivity.value=M.reflectivity,C.ior.value=M.ior,C.refractionRatio.value=M.refractionRatio),M.lightMap&&(C.lightMap.value=M.lightMap,C.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,C.lightMapTransform)),M.aoMap&&(C.aoMap.value=M.aoMap,C.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,C.aoMapTransform))}function s(C,M){C.diffuse.value.copy(M.color),C.opacity.value=M.opacity,M.map&&(C.map.value=M.map,t(M.map,C.mapTransform))}function o(C,M){C.dashSize.value=M.dashSize,C.totalSize.value=M.dashSize+M.gapSize,C.scale.value=M.scale}function c(C,M,D,O){C.diffuse.value.copy(M.color),C.opacity.value=M.opacity,C.size.value=M.size*D,C.scale.value=O*.5,M.map&&(C.map.value=M.map,t(M.map,C.uvTransform)),M.alphaMap&&(C.alphaMap.value=M.alphaMap,t(M.alphaMap,C.alphaMapTransform)),M.alphaTest>0&&(C.alphaTest.value=M.alphaTest)}function u(C,M){C.diffuse.value.copy(M.color),C.opacity.value=M.opacity,C.rotation.value=M.rotation,M.map&&(C.map.value=M.map,t(M.map,C.mapTransform)),M.alphaMap&&(C.alphaMap.value=M.alphaMap,t(M.alphaMap,C.alphaMapTransform)),M.alphaTest>0&&(C.alphaTest.value=M.alphaTest)}function m(C,M){C.specular.value.copy(M.specular),C.shininess.value=Math.max(M.shininess,1e-4)}function E(C,M){M.gradientMap&&(C.gradientMap.value=M.gradientMap)}function y(C,M){C.metalness.value=M.metalness,M.metalnessMap&&(C.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,C.metalnessMapTransform)),C.roughness.value=M.roughness,M.roughnessMap&&(C.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,C.roughnessMapTransform)),M.envMap&&(C.envMapIntensity.value=M.envMapIntensity)}function T(C,M,D){C.ior.value=M.ior,M.sheen>0&&(C.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),C.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(C.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,C.sheenColorMapTransform)),M.sheenRoughnessMap&&(C.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,C.sheenRoughnessMapTransform))),M.clearcoat>0&&(C.clearcoat.value=M.clearcoat,C.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(C.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,C.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(C.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,C.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(C.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,C.clearcoatNormalMapTransform),C.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Rn&&C.clearcoatNormalScale.value.negate())),M.dispersion>0&&(C.dispersion.value=M.dispersion),M.retroreflectivity>0&&(C.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(C.iridescence.value=M.iridescence,C.iridescenceIOR.value=M.iridescenceIOR,C.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],C.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(C.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,C.iridescenceMapTransform)),M.iridescenceThicknessMap&&(C.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,C.iridescenceThicknessMapTransform))),M.transmission>0&&(C.transmission.value=M.transmission,C.transmissionSamplerMap.value=D.texture,C.transmissionSamplerSize.value.set(D.width,D.height),M.transmissionMap&&(C.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,C.transmissionMapTransform)),C.thickness.value=M.thickness,M.thicknessMap&&(C.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,C.thicknessMapTransform)),C.attenuationDistance.value=M.attenuationDistance,C.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(C.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(C.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,C.anisotropyMapTransform))),C.specularIntensity.value=M.specularIntensity,C.specularColor.value.copy(M.specularColor),M.specularColorMap&&(C.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,C.specularColorMapTransform)),M.specularIntensityMap&&(C.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,C.specularIntensityMapTransform))}function v(C,M){M.matcap&&(C.matcap.value=M.matcap)}function R(C,M){let D=e.get(M).light;C.referencePosition.value.setFromMatrixPosition(D.matrixWorld),C.nearDistance.value=D.shadow.camera.near,C.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function py(n,e,t,i){let r={},a={},s=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(p,x){let w=x.program;i.uniformBlockBinding(p,w)}function u(p,x){let w=r[p.id];w===void 0&&(C(p),w=m(p),r[p.id]=w,p.addEventListener("dispose",D));let A=x.program;i.updateUBOMapping(p,A);let b=e.render.frame;a[p.id]!==b&&(y(p),a[p.id]=b)}function m(p){let x=E();p.__bindingPointIndex=x;let w=n.createBuffer(),A=p.__size,b=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function E(){for(let p=0;p<o;p++)if(s.indexOf(p)===-1)return s.push(p),p;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(p){let x=r[p.id],w=p.uniforms,A=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,P=w.length;b<P;b++){let h=w[b];if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++)T(h[l],b,l,A);else T(h,b,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function T(p,x,w,A){if(R(p,x,w,A)===!0){let b=p.__offset,P=p.value;if(Array.isArray(P)){let h=0;for(let l=0;l<P.length;l++){let d=P[l],_=M(d);v(d,p.__data,h),typeof d!="number"&&typeof d!="boolean"&&!d.isMatrix3&&!ArrayBuffer.isView(d)&&(h+=_.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(P,p.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,p.__data)}}function v(p,x,w){typeof p=="number"||typeof p=="boolean"?x[0]=p:p.isMatrix3?(x[0]=p.elements[0],x[1]=p.elements[1],x[2]=p.elements[2],x[3]=0,x[4]=p.elements[3],x[5]=p.elements[4],x[6]=p.elements[5],x[7]=0,x[8]=p.elements[6],x[9]=p.elements[7],x[10]=p.elements[8],x[11]=0):ArrayBuffer.isView(p)?x.set(new p.constructor(p.buffer,p.byteOffset,x.length)):p.toArray(x,w)}function R(p,x,w,A){let b=p.value,P=x+"_"+w;if(A[P]===void 0)return typeof b=="number"||typeof b=="boolean"?A[P]=b:ArrayBuffer.isView(b)?A[P]=b.slice():A[P]=b.clone(),!0;{let h=A[P];if(typeof b=="number"||typeof b=="boolean"){if(h!==b)return A[P]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(h.equals(b)===!1)return h.copy(b),!0}}return!1}function C(p){let x=p.uniforms,w=0,A=16;for(let P=0,h=x.length;P<h;P++){let l=Array.isArray(x[P])?x[P]:[x[P]];for(let d=0,_=l.length;d<_;d++){let g=l[d],f=Array.isArray(g.value)?g.value:[g.value];for(let S=0,I=f.length;S<I;S++){let L=f[S],z=M(L),F=w%A,N=F%z.boundary,B=F+N;w+=N,B!==0&&A-B<z.storage&&(w+=A-B),g.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=w,w+=z.storage}}}let b=w%A;return b>0&&(w+=A-b),p.__size=w,p.__cache={},this}function M(p){let x={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(x.boundary=4,x.storage=4):p.isVector2?(x.boundary=8,x.storage=8):p.isVector3||p.isColor?(x.boundary=16,x.storage=12):p.isVector4?(x.boundary=16,x.storage=16):p.isMatrix3?(x.boundary=48,x.storage=48):p.isMatrix4?(x.boundary=64,x.storage=64):p.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(x.boundary=16,x.storage=p.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",p),x}function D(p){let x=p.target;x.removeEventListener("dispose",D);let w=s.indexOf(x.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function O(){for(let p in r)n.deleteBuffer(r[p]);s=[],r={},a={}}return{bind:c,update:u,dispose:O}}var my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sr=null;function gy(){return sr===null&&(sr=new Sr(my,16,16,is,yn),sr.name="DFG_LUT",sr.minFilter=Cn,sr.magFilter=Cn,sr.wrapS=Ki,sr.wrapT=Ki,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}var Pl=class{constructor(e={}){let{canvas:t=Wf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:y=!1,outputBufferType:T=kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;let R=T,C=new Set([Yc,jc,qc]),M=new Set([kn,qi,Ca,ns,Gc,Wc]),D=new Uint32Array(4),O=new Int32Array(4),p=new W,x=null,w=null,A=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let h=this,l=!1,d=null,_=null,g=null,f=null;this._outputColorSpace=ui;let S=0,I=0,L=null,z=-1,F=null,N=new Vt,B=new Vt,V=null,X=new Be(0),Z=0,se=t.width,G=t.height,j=1,re=null,ce=null,J=new Vt(0,0,se,G),ge=new Vt(0,0,se,G),Oe=!1,le=new ya,Q=!1,oe=!1,te=new Le,ue=new W,ve=new Vt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Je(){return L===null?j:1}let q=i;function lt(k,Y){return t.getContext(k,Y)}let et,H,U,K,ne,de,_e,Se,fe,pe,Te,je,Ee,be,Ne,Ye,Ke,$,Ce,me,Me,De,xe;try{let k={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:m,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Qt,!1),q===null){let Y="webgl2";if(q=lt(Y,k),q===null)throw lt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(k){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),tt("WebGLRenderer: "+k.message),k}function Ze(){et=new E_(q),et.init(),Me=new ly(q,et),H=new f_(q,et,e,Me),U=new oy(q,et),H.reversedDepthBuffer&&y&&U.buffers.depth.setReversed(!0),_=q.createFramebuffer(),g=q.createFramebuffer(),f=q.createFramebuffer(),K=new A_(q),ne=new jv,de=new cy(q,et,U,ne,H,Me,K),_e=new S_(h),Se=new Mg(q),De=new u_(q,Se),fe=new T_(q,Se,K,De),pe=new M_(q,fe,Se,De,K),$=new C_(q,H,de),Ne=new p_(ne),Te=new qv(h,_e,et,H,De,Ne),je=new fy(h,ne),Ee=new Zv,be=new ty(et),Ke=new h_(h,_e,U,pe,v,c),Ye=new ay(h,pe,H),xe=new py(q,K,H,U),Ce=new d_(q,et,K),me=new w_(q,et,K),K.programs=Te.programs,h.capabilities=H,h.extensions=et,h.properties=ne,h.renderLists=Ee,h.shadowMap=Ye,h.state=U,h.info=K}R!==kn&&(P=new P_(R,t.width,t.height,o,r,a));let He=new Du(h,q);this.xr=He,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let k=et.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=et.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(k){k!==void 0&&(j=k,this.setSize(se,G,!1))},this.getSize=function(k){return k.set(se,G)},this.setSize=function(k,Y,ae=!0){if(He.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}se=k,G=Y,t.width=Math.floor(k*j),t.height=Math.floor(Y*j),ae===!0&&(t.style.width=k+"px",t.style.height=Y+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,k,Y)},this.getDrawingBufferSize=function(k){return k.set(se*j,G*j).floor()},this.setDrawingBufferSize=function(k,Y,ae){se=k,G=Y,j=ae,t.width=Math.floor(k*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,k,Y)},this.setEffects=function(k){if(R===kn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let Y=0;Y<k.length;Y++)if(k[Y].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(N)},this.getViewport=function(k){return k.copy(J)},this.setViewport=function(k,Y,ae,ee){k.isVector4?J.set(k.x,k.y,k.z,k.w):J.set(k,Y,ae,ee),U.viewport(N.copy(J).multiplyScalar(j).round())},this.getScissor=function(k){return k.copy(ge)},this.setScissor=function(k,Y,ae,ee){k.isVector4?ge.set(k.x,k.y,k.z,k.w):ge.set(k,Y,ae,ee),U.scissor(B.copy(ge).multiplyScalar(j).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(k){U.setScissorTest(Oe=k)},this.setOpaqueSort=function(k){re=k},this.setTransparentSort=function(k){ce=k},this.getClearColor=function(k){return k.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(k=!0,Y=!0,ae=!0){let ee=0;if(k){let ie=!1;if(L!==null){let Pe=L.texture.format;ie=C.has(Pe)}if(ie){let Pe=L.texture.type,Fe=M.has(Pe),Ie=Ke.getClearColor(),Ge=Ke.getClearAlpha(),We=Ie.r,ct=Ie.g,ht=Ie.b;Fe?(D[0]=We,D[1]=ct,D[2]=ht,D[3]=Ge,q.clearBufferuiv(q.COLOR,0,D)):(O[0]=We,O[1]=ct,O[2]=ht,O[3]=Ge,q.clearBufferiv(q.COLOR,0,O))}else ee|=q.COLOR_BUFFER_BIT}Y&&(ee|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ee|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&q.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),d=k},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Qt,!1),Ke.dispose(),Ee.dispose(),be.dispose(),ne.dispose(),_e.dispose(),pe.dispose(),De.dispose(),xe.dispose(),Te.dispose(),He.dispose(),He.removeEventListener("sessionstart",$a),He.removeEventListener("sessionend",Ja),Zi.stop()};function Ct(k){k.preventDefault(),au("WebGLRenderer: Context Lost."),l=!0}function yt(){au("WebGLRenderer: Context Restored."),l=!1;let k=K.autoReset,Y=Ye.enabled,ae=Ye.autoUpdate,ee=Ye.needsUpdate,ie=Ye.type;Ze(),K.autoReset=k,Ye.enabled=Y,Ye.autoUpdate=ae,Ye.needsUpdate=ee,Ye.type=ie}function Qt(k){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Kn(k){let Y=k.target;Y.removeEventListener("dispose",Kn),Za(Y)}function Za(k){oh(k),ne.remove(k)}function oh(k){let Y=ne.get(k).programs;Y!==void 0&&(Y.forEach(function(ae){Te.releaseProgram(ae)}),k.isShaderMaterial&&Te.releaseShaderCache(k))}this.renderBufferDirect=function(k,Y,ae,ee,ie,Pe){Y===null&&(Y=Ae);let Fe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ie=he(k,Y,ae,ee,ie);U.setMaterial(ee,Fe);let Ge=ae.index,We=1;if(ee.wireframe===!0){if(Ge=fe.getWireframeAttribute(ae),Ge===void 0)return;We=2}let ct=ae.drawRange,ht=ae.attributes.position,Xe=ct.start*We,Tt=(ct.start+ct.count)*We;Pe!==null&&(Xe=Math.max(Xe,Pe.start*We),Tt=Math.min(Tt,(Pe.start+Pe.count)*We)),Ge!==null?(Xe=Math.max(Xe,0),Tt=Math.min(Tt,Ge.count)):ht!=null&&(Xe=Math.max(Xe,0),Tt=Math.min(Tt,ht.count));let ln=Tt-Xe;if(ln<0||ln===1/0)return;De.setup(ie,ee,Ie,ae,Ge);let Ut,Dt=Ce;if(Ge!==null&&(Ut=Se.get(Ge),Dt=me,Dt.setIndex(Ut)),ie.isMesh)ee.wireframe===!0?(U.setLineWidth(ee.wireframeLinewidth*Je()),Dt.setMode(q.LINES)):Dt.setMode(q.TRIANGLES);else if(ie.isLine){let Ln=ee.linewidth;Ln===void 0&&(Ln=1),U.setLineWidth(Ln*Je()),ie.isLineSegments?Dt.setMode(q.LINES):ie.isLineLoop?Dt.setMode(q.LINE_LOOP):Dt.setMode(q.LINE_STRIP)}else ie.isPoints?Dt.setMode(q.POINTS):ie.isSprite&&Dt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let Ln=ie._multiDrawStarts,ke=ie._multiDrawCounts,Xn=ie._multiDrawCount,bt=Ge?Se.get(Ge).bytesPerElement:1,Si=ne.get(ee).currentProgram.getUniforms();for(let $i=0;$i<Xn;$i++)Si.setValue(q,"_gl_DrawID",$i),Dt.render(Ln[$i]/bt,ke[$i])}else if(ie.isInstancedMesh)Dt.renderInstances(Xe,ln,ie.count);else if(ae.isInstancedBufferGeometry){let Ln=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,Ln);Dt.renderInstances(Xe,ln,ke)}else Dt.render(Xe,ln)};function ci(k,Y,ae,ee){d!==null&&k.isNodeMaterial&&d.setObject(ee,k),Q===!0&&Ne.setState(k,ae,!1),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=Rn,k.needsUpdate=!0,js(k,Y,ee),k.side=Kr,k.needsUpdate=!0,js(k,Y,ee),k.side=Pn):js(k,Y,ee)}this.compile=function(k,Y,ae=null){ae===null&&(ae=k),d!==null&&d.renderStart(k,Y,ae),w=be.get(ae),w.init(Y),b.push(w),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(w.pushLight(ie),ie.castShadow&&w.pushShadow(ie))}),k!==ae&&k.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(w.pushLight(ie),ie.castShadow&&w.pushShadow(ie))}),w.setupLights(),d!==null&&d.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,oe),Q===!0&&Ne.setGlobalState(this.clippingPlanes,Y),d!==null&&Ye.render(w.state.shadowsArray,ae,Y);let ee=new Set;return k.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){let Ie=Pe[Fe];ci(Ie,ae,Y,ie),ee.add(Ie)}else ci(Pe,ae,Y,ie),ee.add(Pe)}),w=b.pop(),d!==null&&d.renderEnd(),ee},this.compileAsync=function(k,Y,ae=null){let ee=this.compile(k,Y,ae);return new Promise(ie=>{function Pe(){if(ee.forEach(function(Fe){let Ge=ne.get(Fe).currentProgram;(Ge===void 0||Ge.isReady())&&ee.delete(Fe)}),ee.size===0){ie(k);return}setTimeout(Pe,10)}et.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let mr=null;function ch(k){mr&&mr(k)}function $a(){Zi.stop()}function Ja(){Zi.start()}let Zi=new Sp;Zi.setAnimationLoop(ch),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(k){mr=k,He.setAnimationLoop(k),k===null?Zi.stop():Zi.start()},He.addEventListener("sessionstart",$a),He.addEventListener("sessionend",Ja),this.render=function(k,Y){if(Y!==void 0&&Y.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;d!==null&&d.renderStart(k,Y);let ae=He.enabled===!0&&He.isPresenting===!0,ee=P!==null&&(L===null||ae)&&P.begin(h,L);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(Y),Y=He.getCamera()),k.isScene===!0&&k.onBeforeRender(h,k,Y,L),w=be.get(k,b.length),w.init(Y),w.state.textureUnits=de.getTextureUnits(),b.push(w),te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),le.setFromProjectionMatrix(te,Gi,Y.reversedDepth),oe=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,oe),x=Ee.get(k,A.length),x.init(),A.push(x),He.enabled===!0&&He.isPresenting===!0){let Fe=h.xr.getDepthSensingMesh();Fe!==null&&qs(Fe,Y,-1/0,h.sortObjects)}qs(k,Y,0,h.sortObjects),x.finish(),d!==null&&d.updateLights(w.state.lightsArray),h.sortObjects===!0&&x.sort(re,ce),Ue=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Ue&&Ke.addToRenderList(x,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Ne.beginShadows();let ie=w.state.shadowsArray;if(Ye.render(ie,k,Y),Q===!0&&Ne.endShadows(),(ee&&P.hasRenderPass())===!1){let Fe=x.opaque,Ie=x.transmissive;if(w.setupLights(),Y.isArrayCamera){let Ge=Y.cameras;if(Ie.length>0)for(let We=0,ct=Ge.length;We<ct;We++){let ht=Ge[We];I0(Fe,Ie,k,ht)}Ue&&Ke.render(k);for(let We=0,ct=Ge.length;We<ct;We++){let ht=Ge[We];Ka(x,k,ht,ht.viewport)}}else Ie.length>0&&I0(Fe,Ie,k,Y),Ue&&Ke.render(k),Ka(x,k,Y)}L!==null&&I===0&&(de.updateMultisampleRenderTarget(L),de.updateRenderTargetMipmap(L)),ee&&P.end(h),k.isScene===!0&&k.onAfterRender(h,k,Y),De.resetDefaultState(),z=-1,F=null,b.pop(),b.length>0?(w=b[b.length-1],de.setTextureUnits(w.state.textureUnits),Q===!0&&Ne.setGlobalState(h.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?x=A[A.length-1]:x=null,d!==null&&d.renderEnd()};function qs(k,Y,ae,ee){if(k.visible===!1)return;if(k.layers.test(Y.layers)){if(k.isGroup)ae=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(Y);else if(k.isLightProbeGrid)w.pushLightProbeGrid(k);else if(k.isLight)w.pushLight(k),k.castShadow&&w.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(le)){ee&&ve.setFromMatrixPosition(k.matrixWorld).applyMatrix4(te);let Fe=pe.update(k),Ie=k.material;Ie.visible&&x.push(k,Fe,Ie,ae,ve.z,null,Y)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(le))){let Fe=pe.update(k),Ie=k.material;if(ee&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),ve.copy(k.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ve.copy(Fe.boundingSphere.center)),ve.applyMatrix4(k.matrixWorld).applyMatrix4(te)),Array.isArray(Ie)){let Ge=Fe.groups;for(let We=0,ct=Ge.length;We<ct;We++){let ht=Ge[We],Xe=Ie[ht.materialIndex];Xe&&Xe.visible&&x.push(k,Fe,Xe,ae,ve.z,ht,Y)}}else Ie.visible&&x.push(k,Fe,Ie,ae,ve.z,null,Y)}}let Pe=k.children;for(let Fe=0,Ie=Pe.length;Fe<Ie;Fe++)qs(Pe[Fe],Y,ae,ee)}function Ka(k,Y,ae,ee){let{opaque:ie,transmissive:Pe,transparent:Fe}=k;w.setupLightsView(ae),Q===!0&&Ne.setGlobalState(h.clippingPlanes,ae),ee&&U.viewport(N.copy(ee)),ie.length>0&&Fr(ie,Y,ae),Pe.length>0&&Fr(Pe,Y,ae),Fe.length>0&&Fr(Fe,Y,ae),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function I0(k,Y,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ee.id]===void 0){let Xe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ee.id]=new qt(1,1,{generateMipmaps:!0,type:Xe?yn:kn,minFilter:ts,samples:Math.max(4,H.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Pe=w.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||N;Pe.setSize(Fe.z*h.transmissionResolutionScale,Fe.w*h.transmissionResolutionScale);let Ie=h.getRenderTarget(),Ge=h.getActiveCubeFace(),We=h.getActiveMipmapLevel();h.setRenderTarget(Pe),h.getClearColor(X),Z=h.getClearAlpha(),Z<1&&h.setClearColor(16777215,.5),h.clear(),Ue&&Ke.render(ae);let ct=h.toneMapping;h.toneMapping=Xi;let ht=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),Q===!0&&Ne.setGlobalState(h.clippingPlanes,ee),Fr(k,ae,ee),de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Tt=0,ln=Y.length;Tt<ln;Tt++){let Ut=Y[Tt],{object:Dt,geometry:Ln,material:ke,group:Xn}=Ut;if(ke.side===Pn&&Dt.layers.test(ee.layers)){let bt=ke.side;ke.side=Rn,ke.needsUpdate=!0,Qa(Dt,ae,ee,Ln,ke,Xn),ke.side=bt,ke.needsUpdate=!0,Xe=!0}}Xe===!0&&(de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe))}h.setRenderTarget(Ie,Ge,We),h.setClearColor(X,Z),ht!==void 0&&(ee.viewport=ht),h.toneMapping=ct}function Fr(k,Y,ae){let ee=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Pe=k.length;ie<Pe;ie++){let Fe=k[ie],{object:Ie,geometry:Ge,group:We}=Fe,ct=Fe.material;ct.allowOverride===!0&&ee!==null&&(ct=ee),Ie.layers.test(ae.layers)&&Qa(Ie,Y,ae,Ge,ct,We)}}function Qa(k,Y,ae,ee,ie,Pe){d!==null&&ie.isNodeMaterial&&d.setObject(k,ie),k.onBeforeRender(h,Y,ae,ee,ie,Pe),k.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),ie.onBeforeRender(h,Y,ae,ee,k,Pe),ie.transparent===!0&&ie.side===Pn&&ie.forceSinglePass===!1?(ie.side=Rn,ie.needsUpdate=!0,h.renderBufferDirect(ae,Y,ee,ie,k,Pe),ie.side=Kr,ie.needsUpdate=!0,h.renderBufferDirect(ae,Y,ee,ie,k,Pe),ie.side=Pn):h.renderBufferDirect(ae,Y,ee,ie,k,Pe),k.onAfterRender(h,Y,ae,ee,ie,Pe)}function js(k,Y,ae){Y.isScene!==!0&&(Y=Ae);let ee=ne.get(k),ie=w.state.lights,Pe=w.state.shadowsArray,Fe=ie.state.version,Ie=Te.getParameters(k,ie.state,Pe,Y,ae,w.state.lightProbeGridArray),Ge=Te.getProgramCacheKey(Ie),We=ee.programs;ee.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;let ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;ee.envMap=_e.get(k.envMap||ee.environment,ct),ee.envMapRotation=ee.environment!==null&&k.envMap===null?Y.environmentRotation:k.envMapRotation,We===void 0&&(k.addEventListener("dispose",Kn),We=new Map,ee.programs=We);let ht=We.get(Ge);if(ht!==void 0){if(ee.currentProgram===ht&&ee.lightsStateVersion===Fe)return Nr(k,Ie),ht}else Ie.uniforms=Te.getUniforms(k),d!==null&&k.isNodeMaterial&&d.build(k,ae,Ie),k.onBeforeCompile(Ie,h),ht=Te.acquireProgram(Ie,Ge),We.set(Ge,ht),ee.uniforms=Ie.uniforms;let Xe=ee.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Xe.clippingPlanes=Ne.uniform),Nr(k,Ie),ee.needsLights=Re(k),ee.lightsStateVersion=Fe,ee.needsLights&&(Xe.ambientLightColor.value=ie.state.ambient,Xe.lightProbe.value=ie.state.probe,Xe.sunLights.value=ie.state.sun,Xe.sunLightShadows.value=ie.state.sunShadow,Xe.directionalLights.value=ie.state.directional,Xe.directionalLightShadows.value=ie.state.directionalShadow,Xe.spotLights.value=ie.state.spot,Xe.spotLightShadows.value=ie.state.spotShadow,Xe.rectAreaLights.value=ie.state.rectArea,Xe.ltc_1.value=ie.state.rectAreaLTC1,Xe.ltc_2.value=ie.state.rectAreaLTC2,Xe.pointLights.value=ie.state.point,Xe.pointLightShadows.value=ie.state.pointShadow,Xe.hemisphereLights.value=ie.state.hemi,Xe.sunShadowMatrix.value=ie.state.sunShadowMatrix,Xe.sunShadowCascade.value=ie.state.sunShadowCascade,Xe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ie.state.spotLightMatrix,Xe.spotLightMap.value=ie.state.spotLightMap,Xe.pointShadowMatrix.value=ie.state.pointShadowMatrix),ee.lightProbeGrid=w.state.lightProbeGridArray.length>0,ee.currentProgram=ht,ee.uniformsList=null,ht}function D0(k){if(k.uniformsList===null){let Y=k.currentProgram.getUniforms();k.uniformsList=Ia.seqWithValue(Y.seq,k.uniforms)}return k.uniformsList}function Nr(k,Y){let ae=ne.get(k);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function lh(k,Y){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;p.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,ee=k.length;ae<ee;ae++){let ie=k[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(p))return ie}return null}function he(k,Y,ae,ee,ie){Y.isScene!==!0&&(Y=Ae),de.resetTextureUnits();let Pe=Y.fog,Fe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Ie=L===null?h.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ft.workingColorSpace,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,We=_e.get(ee.envMap||Fe,Ge),ct=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ht=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,ln=!!ae.morphAttributes.color,Ut=Xi;ee.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=h.toneMapping);let Dt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ln=Dt!==void 0?Dt.length:0,ke=ne.get(ee),Xn=w.state.lights;if(Q===!0&&(oe===!0||k!==F)){let Ft=k===F&&ee.id===z;Ne.setState(ee,k,Ft)}let bt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Xn.state.version||ke.outputColorSpace!==Ie||ie.isBatchedMesh&&ke.batching===!1||!ie.isBatchedMesh&&ke.batching===!0||ie.isBatchedMesh&&ke.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&ke.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&ke.instancing===!1||!ie.isInstancedMesh&&ke.instancing===!0||ie.isSkinnedMesh&&ke.skinning===!1||!ie.isSkinnedMesh&&ke.skinning===!0||ie.isInstancedMesh&&ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ke.instancingMorph===!1&&ie.morphTexture!==null||ke.envMap!==We||ee.fog===!0&&ke.fog!==Pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ne.numPlanes||ke.numIntersection!==Ne.numIntersection)||ke.vertexAlphas!==ct||ke.vertexTangents!==ht||ke.morphTargets!==Xe||ke.morphNormals!==Tt||ke.morphColors!==ln||ke.toneMapping!==Ut||ke.morphTargetsCount!==Ln||!!ke.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,ke.__version=ee.version);let Si=ke.currentProgram;bt===!0&&(Si=js(ee,Y,ie),d&&ee.isNodeMaterial&&d.onUpdateProgram(ee,Si,ke));let $i=!1,Ur=!1,Ys=!1,Pt=Si.getUniforms(),rn=ke.uniforms;if(U.useProgram(Si.program)&&($i=!0,Ur=!0,Ys=!0),ee.id!==z&&(z=ee.id,Ur=!0),ke.needsLights){let Ft=lh(w.state.lightProbeGridArray,ie);ke.lightProbeGrid!==Ft&&(ke.lightProbeGrid=Ft,Ur=!0)}if($i||F!==k){U.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Pt.setValue(q,"projectionMatrix",k.projectionMatrix),Pt.setValue(q,"viewMatrix",k.matrixWorldInverse);let kr=Pt.map.cameraPosition;kr!==void 0&&kr.setValue(q,ue.setFromMatrixPosition(k.matrixWorld)),H.logarithmicDepthBuffer&&Pt.setValue(q,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(q,"isOrthographic",k.isOrthographicCamera===!0),F!==k&&(F=k,Ur=!0,Ys=!0)}if(ke.needsLights&&(Xn.state.sunShadowMap.length>0&&Pt.setValue(q,"sunShadowMap",Xn.state.sunShadowMap,de),Xn.state.directionalShadowMap.length>0&&Pt.setValue(q,"directionalShadowMap",Xn.state.directionalShadowMap,de),Xn.state.spotShadowMap.length>0&&Pt.setValue(q,"spotShadowMap",Xn.state.spotShadowMap,de),Xn.state.pointShadowMap.length>0&&Pt.setValue(q,"pointShadowMap",Xn.state.pointShadowMap,de)),ie.isSkinnedMesh){Pt.setOptional(q,ie,"bindMatrix"),Pt.setOptional(q,ie,"bindMatrixInverse");let Ft=ie.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Pt.setValue(q,"boneTexture",Ft.boneTexture,de))}ie.isBatchedMesh&&(Pt.setOptional(q,ie,"batchingTexture"),Pt.setValue(q,"batchingTexture",ie._matricesTexture,de),Pt.setOptional(q,ie,"batchingIdTexture"),Pt.setValue(q,"batchingIdTexture",ie._indirectTexture,de),Pt.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(q,"batchingColorTexture",ie._colorsTexture,de));let Br=ae.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&$.update(ie,ae,Si),(Ur||ke.receiveShadow!==ie.receiveShadow)&&(ke.receiveShadow=ie.receiveShadow,Pt.setValue(q,"receiveShadow",ie.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(rn.envMapIntensity.value=Y.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=gy()),Ur){if(Pt.setValue(q,"toneMappingExposure",h.toneMappingExposure),ke.needsLights&&we(rn,Ys),Pe&&ee.fog===!0&&je.refreshFogUniforms(rn,Pe),je.refreshMaterialUniforms(rn,ee,j,G,w.state.transmissionRenderTarget[k.id]),ke.needsLights&&ke.lightProbeGrid){let Ft=ke.lightProbeGrid;rn.probesSH.value=Ft.texture,rn.probesMin.value.copy(Ft.boundingBox.min),rn.probesMax.value.copy(Ft.boundingBox.max),rn.probesResolution.value.copy(Ft.resolution)}Ia.upload(q,D0(ke),rn,de)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ia.upload(q,D0(ke),rn,de),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(q,"center",ie.center),Pt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(q,"normalMatrix",ie.normalMatrix),Pt.setValue(q,"modelMatrix",ie.matrixWorld),ee.uniformsGroups!==void 0){let Ft=ee.uniformsGroups;for(let kr=0,Zs=Ft.length;kr<Zs;kr++){let Od=Ft[kr];xe.update(Od,Si),xe.bind(Od,Si)}}return Si}function we(k,Y){k.ambientLightColor.needsUpdate=Y,k.lightProbe.needsUpdate=Y,k.sunLights.needsUpdate=Y,k.sunLightShadows.needsUpdate=Y,k.directionalLights.needsUpdate=Y,k.directionalLightShadows.needsUpdate=Y,k.pointLights.needsUpdate=Y,k.pointLightShadows.needsUpdate=Y,k.spotLights.needsUpdate=Y,k.spotLightShadows.needsUpdate=Y,k.rectAreaLights.needsUpdate=Y,k.hemisphereLights.needsUpdate=Y}function Re(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(k,Y,ae){let ee=ne.get(k);ee.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ne.get(k.texture).__webglTexture=Y,ne.get(k.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,Y){let ae=ne.get(k);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(k,Y=0,ae=0){L=k,S=Y,I=ae;let ee=null,ie=!1,Pe=!1;if(k){let Ie=ne.get(k);if(Ie.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(q.FRAMEBUFFER,Ie.__webglFramebuffer),N.copy(k.viewport),B.copy(k.scissor),V=k.scissorTest,U.viewport(N),U.scissor(B),U.setScissorTest(V),z=-1;return}else if(Ie.__webglFramebuffer===void 0)de.setupRenderTarget(k);else if(Ie.__hasExternalTextures)de.rebindTextures(k,ne.get(k.texture).__webglTexture,ne.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let ct=k.depthTexture;if(Ie.__boundDepthTexture!==ct){if(ct!==null&&ne.has(ct)&&(k.width!==ct.image.width||k.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(k)}}let Ge=k.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);let We=ne.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ee=We[Y][ae]:ee=We[Y],ie=!0):k.samples>0&&de.useMultisampledRTT(k)===!1?ee=ne.get(k).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[ae]:ee=We,N.copy(k.viewport),B.copy(k.scissor),V=k.scissorTest}else N.copy(J).multiplyScalar(j).floor(),B.copy(ge).multiplyScalar(j).floor(),V=Oe;if(ae!==0&&(ee=_),U.bindFramebuffer(q.FRAMEBUFFER,ee)&&U.drawBuffers(k,ee),U.viewport(N),U.scissor(B),U.setScissorTest(V),ie){let Ie=ne.get(k.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,ae)}else if(Pe){let Ie=Y;for(let Ge=0;Ge<k.textures.length;Ge++){let We=ne.get(k.textures[Ge]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ge,We.__webglTexture,ae,Ie)}}else if(k!==null&&ae!==0){let Ie=ne.get(k.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,ae)}z=-1};function it(k){let Y=ne.get(k);return(Y.__readFormat!==k.format||Y.__readType!==k.type)&&(Y.__readFormat=k.format,Y.__readType=k.type,Y.__formatReadable=H.textureFormatReadable(k.format),Y.__typeReadable=H.textureTypeReadable(k.type)),Y}this.readRenderTargetPixels=function(k,Y,ae,ee,ie,Pe,Fe,Ie=0){if(!(k&&k.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ne.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){U.bindFramebuffer(q.FRAMEBUFFER,Ge);try{let We=k.textures[Ie],ct=We.format,ht=We.type;k.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie);let Xe=it(We);if(Xe.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=k.width-ee&&ae>=0&&ae<=k.height-ie&&q.readPixels(Y,ae,ee,ie,Me.convert(ct),Me.convert(ht),Pe)}finally{let We=L!==null?ne.get(L).__webglFramebuffer:null;U.bindFramebuffer(q.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(k,Y,ae,ee,ie,Pe,Fe,Ie=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ne.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(Y>=0&&Y<=k.width-ee&&ae>=0&&ae<=k.height-ie){U.bindFramebuffer(q.FRAMEBUFFER,Ge);let We=k.textures[Ie],ct=We.format,ht=We.type;k.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie);let Xe=it(We);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Tt),q.bufferData(q.PIXEL_PACK_BUFFER,Pe.byteLength,q.STREAM_READ),q.readPixels(Y,ae,ee,ie,Me.convert(ct),Me.convert(ht),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let ln=L!==null?ne.get(L).__webglFramebuffer:null;U.bindFramebuffer(q.FRAMEBUFFER,ln);let Ut=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await qf(q,Ut,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Tt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Pe),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Tt),q.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,Y=null,ae=0){let ee=Math.pow(2,-ae),ie=Math.floor(k.image.width*ee),Pe=Math.floor(k.image.height*ee),Fe=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;de.setTexture2D(k,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,Fe,Ie,ie,Pe),U.unbindTexture()},this.copyTextureToTexture=function(k,Y,ae=null,ee=null,ie=0,Pe=0){let Fe,Ie,Ge,We,ct,ht,Xe,Tt,ln,Ut=k.isCompressedTexture?k.mipmaps[Pe]:k.image;if(ae!==null)Fe=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,We=ae.min.x,ct=ae.min.y,ht=ae.isBox3?ae.min.z:0;else{let rn=Math.pow(2,-ie);Fe=Math.floor(Ut.width*rn),Ie=Math.floor(Ut.height*rn),k.isDataArrayTexture?Ge=Ut.depth:k.isData3DTexture?Ge=Math.floor(Ut.depth*rn):Ge=1,We=0,ct=0,ht=0}ee!==null?(Xe=ee.x,Tt=ee.y,ln=ee.z):(Xe=0,Tt=0,ln=0);let Dt=Me.convert(Y.format),Ln=Me.convert(Y.type),ke;Y.isData3DTexture?(de.setTexture3D(Y,0),ke=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(de.setTexture2DArray(Y,0),ke=q.TEXTURE_2D_ARRAY):(de.setTexture2D(Y,0),ke=q.TEXTURE_2D),U.activeTexture(q.TEXTURE0),U.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);let Xn=U.getParameter(q.UNPACK_ROW_LENGTH),bt=U.getParameter(q.UNPACK_IMAGE_HEIGHT),Si=U.getParameter(q.UNPACK_SKIP_PIXELS),$i=U.getParameter(q.UNPACK_SKIP_ROWS),Ur=U.getParameter(q.UNPACK_SKIP_IMAGES);U.pixelStorei(q.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(q.UNPACK_SKIP_PIXELS,We),U.pixelStorei(q.UNPACK_SKIP_ROWS,ct),U.pixelStorei(q.UNPACK_SKIP_IMAGES,ht);let Ys=k.isDataArrayTexture||k.isData3DTexture,Pt=Y.isDataArrayTexture||Y.isData3DTexture;if(k.isDepthTexture){let rn=ne.get(k),Br=ne.get(Y),Ft=ne.get(rn.__renderTarget),kr=ne.get(Br.__renderTarget);U.bindFramebuffer(q.READ_FRAMEBUFFER,Ft.__webglFramebuffer),U.bindFramebuffer(q.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Zs=0;Zs<Ge;Zs++)Ys&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ne.get(k).__webglTexture,ie,ht+Zs),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ne.get(Y).__webglTexture,Pe,ln+Zs)),q.blitFramebuffer(We,ct,Fe,Ie,Xe,Tt,Fe,Ie,q.DEPTH_BUFFER_BIT,q.NEAREST);U.bindFramebuffer(q.READ_FRAMEBUFFER,null),U.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||k.isRenderTargetTexture||ne.has(k)){let rn=ne.get(k),Br=ne.get(Y);U.bindFramebuffer(q.READ_FRAMEBUFFER,g),U.bindFramebuffer(q.DRAW_FRAMEBUFFER,f);for(let Ft=0;Ft<Ge;Ft++)Ys?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,rn.__webglTexture,ie,ht+Ft):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rn.__webglTexture,ie),Pt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Br.__webglTexture,Pe,ln+Ft):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Br.__webglTexture,Pe),ie!==0?q.blitFramebuffer(We,ct,Fe,Ie,Xe,Tt,Fe,Ie,q.COLOR_BUFFER_BIT,q.NEAREST):Pt?q.copyTexSubImage3D(ke,Pe,Xe,Tt,ln+Ft,We,ct,Fe,Ie):q.copyTexSubImage2D(ke,Pe,Xe,Tt,We,ct,Fe,Ie);U.bindFramebuffer(q.READ_FRAMEBUFFER,null),U.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Pt?k.isDataTexture||k.isData3DTexture?q.texSubImage3D(ke,Pe,Xe,Tt,ln,Fe,Ie,Ge,Dt,Ln,Ut.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(ke,Pe,Xe,Tt,ln,Fe,Ie,Ge,Dt,Ut.data):q.texSubImage3D(ke,Pe,Xe,Tt,ln,Fe,Ie,Ge,Dt,Ln,Ut):k.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Pe,Xe,Tt,Fe,Ie,Dt,Ln,Ut.data):k.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Pe,Xe,Tt,Ut.width,Ut.height,Dt,Ut.data):q.texSubImage2D(q.TEXTURE_2D,Pe,Xe,Tt,Fe,Ie,Dt,Ln,Ut);U.pixelStorei(q.UNPACK_ROW_LENGTH,Xn),U.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt),U.pixelStorei(q.UNPACK_SKIP_PIXELS,Si),U.pixelStorei(q.UNPACK_SKIP_ROWS,$i),U.pixelStorei(q.UNPACK_SKIP_IMAGES,Ur),Pe===0&&Y.generateMipmaps&&q.generateMipmap(ke),U.unbindTexture()},this.initRenderTarget=function(k){ne.get(k).__webglFramebuffer===void 0&&de.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?de.setTextureCube(k,0):k.isData3DTexture?de.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?de.setTexture2DArray(k,0):de.setTexture2D(k,0),U.unbindTexture()},this.resetState=function(){S=0,I=0,L=null,U.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var zl=class extends Ts{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Un;e.deleteAttribute("uv");let t=new Gt({side:Rn}),i=new Gt,r=new Bo(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let a=new $e(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let s=new ut(e,i,6),o=new vn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let c=new $e(e,La(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let u=new $e(e,La(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let m=new $e(e,La(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let E=new $e(e,La(43));E.position.set(-.462,8.89,14.52),E.scale.set(4.38,5.441,.088),this.add(E);let y=new $e(e,La(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let T=new $e(e,La(100));T.position.set(0,20,0),T.scale.set(1,.1,1),this.add(T)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function La(n){return new Lo({color:0,emissive:16777215,emissiveIntensity:n})}var Oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xy=new Jr(-1,1,1,-1,0,1),zu=class extends pn{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},_y=new zu,or=class{constructor(e){this._mesh=new $e(_y,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ll=class extends Yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ci.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new or(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var c0=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}},Ol=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ye);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ll(Oa),this.copyPass.material.blending=sn,this.timer=new ko}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,a=this.passes.length;r<a;r++){let s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}c0!==void 0&&(s instanceof c0?i=!0:s instanceof Ol&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nl=class extends Yn{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}};var l0={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new W(-1,-1,-1)},sceneBoxMax:{value:new W(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},h0={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ul={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Rp(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=vy(e),i=t.length,r=new Uint8Array(i*4);for(let s=0;s<i;++s){let o=t[s],c=2*Math.PI*o/i,u=new W(Math.cos(c),Math.sin(c),0).normalize();r[s*4]=(u.x*.5+.5)*255,r[s*4+1]=(u.y*.5+.5)*255,r[s*4+2]=127,r[s*4+3]=255}let a=new Sr(r,e,e);return a.wrapS=Qi,a.wrapT=Qi,a.needsUpdate=!0,a}function vy(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),r=Math.floor(e/2),a=e-1;for(let s=1;s<=t;){if(r===-1&&a===e?(a=e-2,r=0):(a===e&&(a=0),r<0&&(r=e-1)),i[r*e+a]!==0){a-=2,r++;continue}else i[r*e+a]=s++;a++,r--}return i}var u0={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Lu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Lu(n,e,t){let i=yy(n,e,t),r="vec3[SAMPLES](";for(let a=0;a<n;a++){let s=i[a];r+=`vec3(${s.x}, ${s.y}, ${s.z})${a<n-1?",":")"}`}return r}function yy(n,e,t){let i=[];for(let r=0;r<n;r++){let a=2*Math.PI*e*r/n,s=Math.pow(r/(n-1),t);i.push(new W(Math.cos(a),Math.sin(a),s))}return i}var Bl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,r,a,s=.5*(Math.sqrt(3)-1),o=(e+t)*s,c=Math.floor(e+o),u=Math.floor(t+o),m=(3-Math.sqrt(3))/6,E=(c+u)*m,y=c-E,T=u-E,v=e-y,R=t-T,C,M;v>R?(C=1,M=0):(C=0,M=1);let D=v-C+m,O=R-M+m,p=v-1+2*m,x=R-1+2*m,w=c&255,A=u&255,b=this.perm[w+this.perm[A]]%12,P=this.perm[w+C+this.perm[A+M]]%12,h=this.perm[w+1+this.perm[A+1]]%12,l=.5-v*v-R*R;l<0?i=0:(l*=l,i=l*l*this._dot(this.grad3[b],v,R));let d=.5-D*D-O*O;d<0?r=0:(d*=d,r=d*d*this._dot(this.grad3[P],D,O));let _=.5-p*p-x*x;return _<0?a=0:(_*=_,a=_*_*this._dot(this.grad3[h],p,x)),70*(i+r+a)}noise3d(e,t,i){let r,a,s,o,u=(e+t+i)*.3333333333333333,m=Math.floor(e+u),E=Math.floor(t+u),y=Math.floor(i+u),T=1/6,v=(m+E+y)*T,R=m-v,C=E-v,M=y-v,D=e-R,O=t-C,p=i-M,x,w,A,b,P,h;D>=O?O>=p?(x=1,w=0,A=0,b=1,P=1,h=0):D>=p?(x=1,w=0,A=0,b=1,P=0,h=1):(x=0,w=0,A=1,b=1,P=0,h=1):O<p?(x=0,w=0,A=1,b=0,P=1,h=1):D<p?(x=0,w=1,A=0,b=0,P=1,h=1):(x=0,w=1,A=0,b=1,P=1,h=0);let l=D-x+T,d=O-w+T,_=p-A+T,g=D-b+2*T,f=O-P+2*T,S=p-h+2*T,I=D-1+3*T,L=O-1+3*T,z=p-1+3*T,F=m&255,N=E&255,B=y&255,V=this.perm[F+this.perm[N+this.perm[B]]]%12,X=this.perm[F+x+this.perm[N+w+this.perm[B+A]]]%12,Z=this.perm[F+b+this.perm[N+P+this.perm[B+h]]]%12,se=this.perm[F+1+this.perm[N+1+this.perm[B+1]]]%12,G=.6-D*D-O*O-p*p;G<0?r=0:(G*=G,r=G*G*this._dot3(this.grad3[V],D,O,p));let j=.6-l*l-d*d-_*_;j<0?a=0:(j*=j,a=j*j*this._dot3(this.grad3[X],l,d,_));let re=.6-g*g-f*f-S*S;re<0?s=0:(re*=re,s=re*re*this._dot3(this.grad3[Z],g,f,S));let ce=.6-I*I-L*L-z*z;return ce<0?o=0:(ce*=ce,o=ce*ce*this._dot3(this.grad3[se],I,L,z)),32*(r+a+s+o)}noise4d(e,t,i,r){let a=this.grad4,s=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20,m,E,y,T,v,R=(e+t+i+r)*c,C=Math.floor(e+R),M=Math.floor(t+R),D=Math.floor(i+R),O=Math.floor(r+R),p=(C+M+D+O)*u,x=C-p,w=M-p,A=D-p,b=O-p,P=e-x,h=t-w,l=i-A,d=r-b,_=P>h?32:0,g=P>l?16:0,f=h>l?8:0,S=P>d?4:0,I=h>d?2:0,L=l>d?1:0,z=_+g+f+S+I+L,F=s[z][0]>=3?1:0,N=s[z][1]>=3?1:0,B=s[z][2]>=3?1:0,V=s[z][3]>=3?1:0,X=s[z][0]>=2?1:0,Z=s[z][1]>=2?1:0,se=s[z][2]>=2?1:0,G=s[z][3]>=2?1:0,j=s[z][0]>=1?1:0,re=s[z][1]>=1?1:0,ce=s[z][2]>=1?1:0,J=s[z][3]>=1?1:0,ge=P-F+u,Oe=h-N+u,le=l-B+u,Q=d-V+u,oe=P-X+2*u,te=h-Z+2*u,ue=l-se+2*u,ve=d-G+2*u,Ae=P-j+3*u,Ue=h-re+3*u,Je=l-ce+3*u,q=d-J+3*u,lt=P-1+4*u,et=h-1+4*u,H=l-1+4*u,U=d-1+4*u,K=C&255,ne=M&255,de=D&255,_e=O&255,Se=o[K+o[ne+o[de+o[_e]]]]%32,fe=o[K+F+o[ne+N+o[de+B+o[_e+V]]]]%32,pe=o[K+X+o[ne+Z+o[de+se+o[_e+G]]]]%32,Te=o[K+j+o[ne+re+o[de+ce+o[_e+J]]]]%32,je=o[K+1+o[ne+1+o[de+1+o[_e+1]]]]%32,Ee=.6-P*P-h*h-l*l-d*d;Ee<0?m=0:(Ee*=Ee,m=Ee*Ee*this._dot4(a[Se],P,h,l,d));let be=.6-ge*ge-Oe*Oe-le*le-Q*Q;be<0?E=0:(be*=be,E=be*be*this._dot4(a[fe],ge,Oe,le,Q));let Ne=.6-oe*oe-te*te-ue*ue-ve*ve;Ne<0?y=0:(Ne*=Ne,y=Ne*Ne*this._dot4(a[pe],oe,te,ue,ve));let Ye=.6-Ae*Ae-Ue*Ue-Je*Je-q*q;Ye<0?T=0:(Ye*=Ye,T=Ye*Ye*this._dot4(a[Te],Ae,Ue,Je,q));let Ke=.6-lt*lt-et*et-H*H-U*U;return Ke<0?v=0:(Ke*=Ke,v=Ke*Ke*this._dot4(a[je],lt,et,H,U)),27*(m+E+y+T+v)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}_dot4(e,t,i,r,a){return e[0]*t+e[1]*i+e[2]*r+e[3]*a}};var d0=class n extends Yn{constructor(e,t,i=512,r=512,a,s,o){super(),this.width=i,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Rp(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:yn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ht({defines:Object.assign({},l0.defines),uniforms:Ci.clone(l0.uniforms),vertexShader:l0.vertexShader,fragmentShader:l0.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zo,this.normalMaterial.blending=sn,this.pdMaterial=new Ht({defines:Object.assign({},u0.defines),uniforms:Ci.clone(u0.uniforms),vertexShader:u0.vertexShader,fragmentShader:u0.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ht({defines:Object.assign({},h0.defines),uniforms:Ci.clone(h0.uniforms),vertexShader:h0.vertexShader,fragmentShader:h0.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ht({uniforms:Ci.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Wo,blendDst:Rs,blendEquation:wi,blendSrcAlpha:Go,blendDstAlpha:Rs,blendEquationAlpha:wi}),this.blendMaterial=new Ht({uniforms:Ci.clone(Ul.uniforms),vertexShader:Ul.vertexShader,fragmentShader:Ul.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Nc,blendSrc:Wo,blendDst:Rs,blendEquation:wi,blendSrcAlpha:Go,blendDstAlpha:Rs,blendEquationAlpha:wi}),this._fsQuad=new or(null),this._originalClearColor=new Be,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new nr,this.depthTexture.format=rr,this.depthTexture.type=ns,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:kt,magFilter:kt,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Lu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,r,a){e.getClearColor(this._originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_renderOverride(e,t,i,r,a){e.getClearColor(this._originalClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,a=t.clearAlpha||a,r!=null&&(e.setClearColor(r),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Bl,i=e*e*4,r=new Uint8Array(i);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let c=s,u=o;r[(s*e+o)*4]=(t.noise(c,u)*.5+.5)*255,r[(s*e+o)*4+1]=(t.noise(c+e,u)*.5+.5)*255,r[(s*e+o)*4+2]=(t.noise(c,u+e)*.5+.5)*255,r[(s*e+o)*4+3]=(t.noise(c+e,u+e)*.5+.5)*255}let a=new Sr(r,e,e,ti,kn);return a.wrapS=Qi,a.wrapT=Qi,a.needsUpdate=!0,a}};d0.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var f0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kl=class extends Yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ci.clone(f0.uniforms),this.material=new Ta({name:f0.name,uniforms:this.uniforms,vertexShader:f0.vertexShader,fragmentShader:f0.fragmentShader}),this._fsQuad=new or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ps?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Tr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Up(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},v0={duration:.5,overwrite:!1,delay:0},Ku,In,Wt,Pi=1e8,Ot=1/Pi,Hu=Math.PI*2,by=Hu/4,Sy=0,Bp=Math.sqrt,Ey=Math.cos,Ty=Math.sin,xn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},$l=function(e){return typeof e>"u"},hr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Qu=function(){return typeof window<"u"},Vl=function(e){return en(e)||xn(e)},kp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,wy=/random\([^)]+\)/g,Ay=/,\s*/g,Pp=/(?:-?\.?\d|\.)+/gi,ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,Cy=/[^,'"\[\]\s]+/gi,My=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,cr,Gu,nd,gi={},Xl={},Vp,Hp=function(e){return(Xl=Na(e,gi))&&Wn},Jl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},y0=function(e,t){return!t&&console.warn(e)},Gp=function(e,t){return e&&(gi[e]=t)&&Xl&&(Xl[e]=t)||gi},b0=function(){return 0},Ry={suppressEvents:!0,isStart:!0,kill:!1},Hl={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},id={},ss=[],Wu={},Wp,ni={},Fu={},Ip=30,Gl=[],rd="",sd=function(e){var t=e[0],i,r;if(hr(t)||en(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Gl.length;r--&&!Gl[r].targetTest(t););i=Gl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ld(e[r],i)))||e.splice(r,1);return e},as=function(e){return e._gsap||sd(Ii(e))[0]._gsap},ad=function(e,t,i){return(i=e[t])&&en(i)?e[t]():$l(i)&&e.getAttribute&&e.getAttribute(t)||i},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Iy=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ql=function(){var e=ss.length,t=ss.slice(0),i,r;for(Wu={},ss.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},od=function(e){return!!(e._initted||e._startAt||e.add)},Xp=function(e,t,i,r){ss.length&&!In&&ql(),e.render(t,i,r||!!(In&&t<0&&od(e))),ss.length&&!In&&ql()},qp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cy).length<2?t:xn(e)?e.trim():e},jp=function(e){return e},xi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Dy=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Na=function(e,t){for(var i in t)e[i]=t[i];return e},Dp=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=hr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},jl=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},g0=function(e){var t=e.parent||Yt,i=e.keyframes?Dy(Gn(e.keyframes)):xi;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},zy=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Yp=function(e,t,i,r,a){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e[r],o;if(a)for(o=t[a];s&&s[a]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Kl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=t._prev,s=t._next;a?a._next=s:e[i]===t&&(e[i]=s),s?s._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ly=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xu=function(e,t,i,r){return e._startAt&&(In?e._startAt.revert(Hl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Oy=function n(e){return!e||e._ts&&n(e.parent)},zp=function(e){return e._repeat?Ua(e._tTime,e=e.duration()+e._rDelay)*e:0},Ua=function(e,t){var i=Math.floor(e=jt(e/t));return e&&i===e?i-1:i},Yl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ql=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},eh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ql(e),i._dirty||Fs(i,e)),e},Zp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Yl(e.rawTime(),t),(!t._dur||T0(0,t.totalDuration(),i)-t._tTime>Ot)&&t.render(i,!0)),Fs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ot}},lr=function(e,t,i,r){return t.parent&&os(t),t._start=jt((Ar(i)?i:i||e!==Yt?Ri(e,i,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yp(e,t,"_first","_last",e._sort?"_start":0),qu(t)||(e._recent=t),r||Zp(e,t),e._ts<0&&eh(e,e._tTime),e},$p=function(e,t){return(gi.ScrollTrigger||Jl("scrollTrigger",t))&&gi.ScrollTrigger.create(t,e)},Jp=function(e,t,i,r,a){if(dd(e,t,a),!e._initted)return 1;if(!i&&e._pt&&!In&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wp!==ii.frame)return ss.push(e),e._lazy=[a,r],1},Fy=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},qu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ny=function(e,t,i,r){var a=e.ratio,s=t<0||!t&&(!e._start&&Fy(e)&&!(!e._initted&&qu(e))||(e._ts<0||e._dp._ts<0)&&!qu(e))?0:1,o=e._rDelay,c=0,u,m,E;if(o&&e._repeat&&(c=T0(0,e._tDur,t),m=Ua(c,o),e._yoyo&&m&1&&(s=1-s),m!==Ua(e._tTime,o)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||In||r||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&Jp(e,t,r,i,c))return;for(E=e._zTime,e._zTime=t||(i?Ot:0),i||(i=t&&!E),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,u=e._pt;u;)u.r(s,u.d),u=u._next;t<0&&Xu(e,t,i,!0),e._onUpdate&&!i&&mi(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&os(e,1),!i&&!In&&(mi(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Uy=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ba=function(e,t,i,r){var a=e._repeat,s=jt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:jt(s*(a+1)+e._rDelay*a):s,o>0&&!r&&eh(e,e._tTime=e._tDur*o),e.parent&&Ql(e),i||Fs(e.parent,e),e},Lp=function(e){return e instanceof Hn?Fs(e):Ba(e,e._dur)},By={_start:0,endTime:b0,totalDuration:b0},Ri=function n(e,t,i){var r=e.labels,a=e._recent||By,s=e.duration()>=Pi?a.endTime(!1):e._dur,o,c,u;return xn(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?a:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=s),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(c=c/100*(Gn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+c:s+c)):t==null?s:+t},x0=function(e,t,i){var r=Ar(t[1]),a=(r?2:1)+(e<2?0:1),s=t[a],o,c;if(r&&(s.duration=t[1]),s.parent=i,e){for(o=s,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ri(c.vars.inherit)&&c.parent;s.immediateRender=ri(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new an(t[0],s,t[a+1])},cs=function(e,t){return e||e===0?t(e):t},T0=function(e,t,i){return i<e?e:i>t?t:i},Dn=function(e,t){return!xn(e)||!(t=My.exec(e))?"":t[1]},ky=function(e,t,i){return cs(i,function(r){return T0(e,t,r)})},ju=[].slice,Kp=function(e,t){return e&&hr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hr(e[0]))&&!e.nodeType&&e!==cr},Vy=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var a;return xn(r)&&!t||Kp(r,1)?(a=i).push.apply(a,Ii(r)):i.push(r)})||i},Ii=function(e,t,i){return Wt&&!t&&Wt.selector?Wt.selector(e):xn(e)&&!i&&(Gu||!ka())?ju.call((t||nd).querySelectorAll(e),0):Gn(e)?Vy(e,i):Kp(e)?ju.call(e,0):e?[e]:[]},Yu=function(e){return e=Ii(e)[0]||y0("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ii(t,i.querySelectorAll?i:i===e?y0("Invalid scope")||nd.createElement("div"):e)}},Qp=function(e){return e.sort(function(){return .5-Math.random()})},em=function(e){if(en(e))return e;var t=hr(e)?e:{each:e},i=Ns(t.ease),r=t.from||0,a=parseFloat(t.base)||0,s={},o=r>0&&r<1,c=isNaN(r)||o,u=t.axis,m=r,E=r;return xn(r)?m=E={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(m=r[0],E=r[1]),function(y,T,v){var R=(v||t).length,C=s[R],M,D,O,p,x,w,A,b,P;if(!C){if(P=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!P){for(A=-Pi;A<(A=v[P++].getBoundingClientRect().left)&&P<R;);P<R&&P--}for(C=s[R]=[],M=c?Math.min(P,R)*m-.5:r%P,D=P===Pi?0:c?R*E/P-.5:r/P|0,A=0,b=Pi,w=0;w<R;w++)O=w%P-M,p=D-(w/P|0),C[w]=x=u?Math.abs(u==="y"?p:O):Bp(O*O+p*p),x>A&&(A=x),x<b&&(b=x);r==="random"&&Qp(C),C.max=A-b,C.min=b,C.v=R=(parseFloat(t.amount)||parseFloat(t.each)*(P>R?R-1:u?u==="y"?R/P:P:Math.max(P,R/P))||0)*(r==="edges"?-1:1),C.b=R<0?a-R:a,C.u=Dn(t.amount||t.each)||0,i=i&&R<0?eb(i):i}return R=(C[y]-C.min)/C.max||0,jt(C.b+(i?i(R):R)*C.v)+C.u}},Zu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ar(i)?0:Dn(i))}},tm=function(e,t){var i=Gn(e),r,a;return!i&&hr(e)&&(r=i=e.radius||Pi,e.values?(e=Ii(e.values),(a=!Ar(e[0]))&&(r*=r)):e=Zu(e.increment)),cs(t,i?en(e)?function(s){return a=e(s),Math.abs(a-s)<=r?a:s}:function(s){for(var o=parseFloat(a?s.x:s),c=parseFloat(a?s.y:0),u=Pi,m=0,E=e.length,y,T;E--;)a?(y=e[E].x-o,T=e[E].y-c,y=y*y+T*T):y=Math.abs(e[E]-o),y<u&&(u=y,m=E);return m=!r||u<=r?e[m]:s,a||m===s||Ar(s)?m:m+Dn(s)}:Zu(e))},nm=function(e,t,i,r){return cs(Gn(e)?!t:i===!0?!!(i=0):!r,function(){return Gn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Hy=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(a,s){return s(a)},r)}},Gy=function(e,t){return function(i){return e(parseFloat(i))+(t||Dn(i))}},Wy=function(e,t,i){return rm(e,t,0,1,i)},im=function(e,t,i){return cs(i,function(r){return e[~~t(r)]})},Xy=function n(e,t,i){var r=t-e;return Gn(e)?im(e,n(0,e.length),t):cs(i,function(a){return(r+(a-e)%r)%r+e})},qy=function n(e,t,i){var r=t-e,a=r*2;return Gn(e)?im(e,n(0,e.length-1),t):cs(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>r?a-s:s)})},Va=function(e){return e.replace(wy,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Ay);return nm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},rm=function(e,t,i,r,a){var s=t-e,o=r-i;return cs(a,function(c){return i+((c-e)/s*o||0)})},jy=function n(e,t,i,r){var a=isNaN(e+t)?0:function(T){return(1-T)*e+T*t};if(!a){var s=xn(e),o={},c,u,m,E,y;if(i===!0&&(r=1)&&(i=null),s)e={p:e},t={p:t};else if(Gn(e)&&!Gn(t)){for(m=[],E=e.length,y=E-2,u=1;u<E;u++)m.push(n(e[u-1],e[u]));E--,a=function(v){v*=E;var R=Math.min(y,~~v);return m[R](v-R)},i=t}else r||(e=Na(Gn(e)?[]:{},e));if(!m){for(c in t)hd.call(o,e,c,"get",t[c]);a=function(v){return md(v,o)||(s?e.p:e)}}}return cs(i,a)},Op=function(e,t,i){var r=e.labels,a=Pi,s,o,c;for(s in r)o=r[s]-t,o<0==!!i&&o&&a>(o=Math.abs(o))&&(c=s,a=o);return c},mi=function(e,t,i){var r=e.vars,a=r[t],s=Wt,o=e._ctx,c,u,m;if(a)return c=r[t+"Params"],u=r.callbackScope||e,i&&ss.length&&ql(),o&&(Wt=o),m=c?a.apply(u,c):a.call(u),Wt=s,m},p0=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!In),e.progress()<1&&mi(e,"onInterrupt"),e},Fa,sm=[],am=function(e){if(e)if(e=!e.name&&e.default||e,Qu()||e.headless){var t=e.name,i=en(e),r=t&&!i&&e.init?function(){this._props=[]}:e,a={init:b0,render:md,add:hd,kill:hb,modifier:lb,rawVars:0},s={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(ka(),e!==r){if(ni[t])return;xi(r,xi(jl(e,a),s)),Na(r.prototype,Na(a,jl(e,s))),ni[r.prop=t]=r,e.targetTest&&(Gl.push(r),id[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gp(t,r),e.register&&e.register(Wn,r,$n)}else sm.push(e)},Lt=255,m0={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Nu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Lt+.5|0},om=function(e,t,i){var r=e?Ar(e)?[e>>16,e>>8&Lt,e&Lt]:0:m0.black,a,s,o,c,u,m,E,y,T,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),m0[e])r=m0[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+a+a+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Lt,r&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Pp),!t)c=+r[0]%360/360,u=+r[1]/100,m=+r[2]/100,s=m<=.5?m*(u+1):m+u-m*u,a=m*2-s,r.length>3&&(r[3]*=1),r[0]=Nu(c+1/3,a,s),r[1]=Nu(c,a,s),r[2]=Nu(c-1/3,a,s);else if(~e.indexOf("="))return r=e.match(ed),i&&r.length<4&&(r[3]=1),r}else r=e.match(Pp)||m0.transparent;r=r.map(Number)}return t&&!v&&(a=r[0]/Lt,s=r[1]/Lt,o=r[2]/Lt,E=Math.max(a,s,o),y=Math.min(a,s,o),m=(E+y)/2,E===y?c=u=0:(T=E-y,u=m>.5?T/(2-E-y):T/(E+y),c=E===a?(s-o)/T+(s<o?6:0):E===s?(o-a)/T+2:(a-s)/T+4,c*=60),r[0]=~~(c+.5),r[1]=~~(u*100+.5),r[2]=~~(m*100+.5)),i&&r.length<4&&(r[3]=1),r},cm=function(e){var t=[],i=[],r=-1;return e.split(wr).forEach(function(a){var s=a.match(Bs)||[];t.push.apply(t,s),i.push(r+=s.length+1)}),t.c=i,t},Fp=function(e,t,i){var r="",a=(e+r).match(wr),s=t?"hsla(":"rgba(",o=0,c,u,m,E;if(!a)return e;if(a=a.map(function(y){return(y=om(y,t,1))&&s+(t?y[0]+","+y[1]+"%,"+y[2]+"%,"+y[3]:y.join(","))+")"}),i&&(m=cm(e),c=i.c,c.join(r)!==m.c.join(r)))for(u=e.replace(wr,"1").split(Bs),E=u.length-1;o<E;o++)r+=u[o]+(~c.indexOf(o)?a.shift()||s+"0,0,0,0)":(m.length?m:a.length?a:i).shift());if(!u)for(u=e.split(wr),E=u.length-1;o<E;o++)r+=u[o]+a[o];return r+u[E]},wr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in m0)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),Yy=/hsl[a]?\(/,cd=function(e){var t=e.join(" "),i;if(wr.lastIndex=0,wr.test(t))return i=Yy.test(t),e[1]=Fp(e[1],i),e[0]=Fp(e[0],i,cm(e[1])),!0},S0,ii=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,a=1e3/240,s=a,o=[],c,u,m,E,y,T,v=function R(C){var M=n()-r,D=C===!0,O,p,x,w;if((M>e||M<0)&&(i+=M-t),r+=M,x=r-i,O=x-s,(O>0||D)&&(w=++E.frame,y=x-E.time*1e3,E.time=x=x/1e3,s+=O+(O>=a?4:a-O),p=1),D||(c=u(R)),p)for(T=0;T<o.length;T++)o[T](x,y,w,C)};return E={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(C){return y/(1e3/(C||60))},wake:function(){Vp&&(!Gu&&Qu()&&(cr=Gu=window,nd=cr.document||{},gi.gsap=Wn,(cr.gsapVersions||(cr.gsapVersions=[])).push(Wn.version),Hp(Xl||cr.GreenSockGlobals||!cr.gsap&&cr||{}),sm.forEach(am)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&E.sleep(),u=m||function(C){return setTimeout(C,s-E.time*1e3+1|0)},S0=1,v(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(c),S0=0,u=b0},lagSmoothing:function(C,M){e=C||1/0,t=Math.min(M||33,e)},fps:function(C){a=1e3/(C||240),s=E.time*1e3+a},add:function(C,M,D){var O=M?function(p,x,w,A){C(p,x,w,A),E.remove(O)}:C;return E.remove(C),o[D?"unshift":"push"](O),ka(),O},remove:function(C,M){~(M=o.indexOf(C))&&o.splice(M,1)&&T>=M&&T--},_listeners:o},E})(),ka=function(){return!S0&&ii.wake()},xt={},Zy=/^[\d.\-M][\d.\-,\s]/,$y=/["']/g,Jy=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],a=1,s=i.length,o,c,u;a<s;a++)c=i[a],o=a!==s-1?c.lastIndexOf(","):c.length,u=c.substr(0,o),t[r]=isNaN(u)?u.replace($y,"").trim():+u,r=c.substr(o+1).trim();return t},Ky=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Qy=function(e){var t=(e+"").split("("),i=xt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Jy(t[1])]:Ky(e).split(",").map(qp)):xt._CE&&Zy.test(e)?xt._CE("",e):i},eb=function(e){return function(t){return 1-e(1-t)}},Ns=function(e,t){return e&&(en(e)?e:xt[e]||Qy(e))||t},Vs=function(e,t,i,r){i===void 0&&(i=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var a={easeIn:t,easeOut:i,easeInOut:r},s;return Zn(e,function(o){xt[o]=gi[o]=a,xt[s=o.toLowerCase()]=i;for(var c in a)xt[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=xt[o+"."+c]=a[c]}),a},lm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uu=function n(e,t,i){var r=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),s=a/Hu*(Math.asin(1/r)||0),o=function(m){return m===1?1:r*Math.pow(2,-10*m)*Ty((m-s)*a)+1},c=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:lm(o);return a=Hu/a,c.config=function(u,m){return n(e,u,m)},c},Bu=function n(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:lm(i);return r.config=function(a){return n(e,a)},r};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Vs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Vs("Elastic",Uu("in"),Uu("out"),Uu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,a=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Vs("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);Vs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Vs("Circ",function(n){return-(Bp(1-n*n)-1)});Vs("Sine",function(n){return n===1?1:-Ey(n*by)+1});Vs("Back",Bu("in"),Bu("out"),Bu());xt.SteppedEase=xt.steps=gi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),a=t?1:0,s=1-Ot;return function(o){return((r*T0(0,s,o)|0)+a)*i}}};v0.ease=xt["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return rd+=n+","+n+"Params,"});var ld=function(e,t){this.id=Sy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ad,this.set=t?t.getSetter:th},E0=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),S0||ii.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ka(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(eh(this,i),!a._dp||a.parent||Zp(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Xp(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+zp(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+zp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,r):this._repeat?Ua(this._tTime,a)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?Yl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ot?0:this._rts,this.totalTime(T0(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Ql(this),Ly(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=jt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&lr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yl(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Py);var r=In;return In=i,od(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),In=r,this},e.globalTime=function(i){for(var r=this,a=arguments.length?i:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Lp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ri(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Ot),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=r&&a<this.endTime(!0)-Ot)},e.eventCallback=function(i,r,a){var s=this.vars;return arguments.length>1?(r?(s[i]=r,a&&(s[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},e.then=function(i){var r=this,a=r._prom;return new Promise(function(s){var o=en(i)?i:jp,c=function(){var m=r.then;r.then=null,a&&a(),en(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=m),s(o),r.then=m};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){p0(this)},n})();xi(E0.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var Hn=(function(n){Up(e,n);function e(i,r){var a;return i===void 0&&(i={}),a=n.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=ri(i.sortChildren),Yt&&lr(i.parent||Yt,Tr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&$p(Tr(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,s){return x0(0,arguments,this),this},t.from=function(r,a,s){return x0(1,arguments,this),this},t.fromTo=function(r,a,s,o){return x0(2,arguments,this),this},t.set=function(r,a,s){return a.duration=0,a.parent=this,g0(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new an(r,a,Ri(this,s),1),this},t.call=function(r,a,s){return lr(this,an.delayedCall(0,r,a),s)},t.staggerTo=function(r,a,s,o,c,u,m){return s.duration=a,s.stagger=s.stagger||o,s.onComplete=u,s.onCompleteParams=m,s.parent=this,new an(r,s,Ri(this,c)),this},t.staggerFrom=function(r,a,s,o,c,u,m){return s.runBackwards=1,g0(s).immediateRender=ri(s.immediateRender),this.staggerTo(r,a,s,o,c,u,m)},t.staggerFromTo=function(r,a,s,o,c,u,m,E){return o.startAt=s,g0(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,a,o,c,u,m,E)},t.render=function(r,a,s){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,m=r<=0?0:jt(r),E=this._zTime<0!=r<0&&(this._initted||!u),y,T,v,R,C,M,D,O,p,x,w,A;if(this!==Yt&&m>c&&r>=0&&(m=c),m!==this._tTime||s||E){if(o!==this._time&&u&&(m+=this._time-o,r+=this._time-o),y=m,p=this._start,O=this._ts,M=!O,E&&(u||(o=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,C=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(C*100+r,a,s);if(y=jt(m%C),m===c?(R=this._repeat,y=u):(x=jt(m/C),R=~~x,R&&R===x&&(y=u,R--),y>u&&(y=u)),x=Ua(this._tTime,C),!o&&this._tTime&&x!==R&&this._tTime-x*C-this._dur<=0&&(x=R),w&&R&1&&(y=u-y,A=1),R!==x&&!this._lock){var b=w&&x&1,P=b===(w&&R&1);if(R<x&&(b=!b),o=b?0:m%u?u:m,this._lock=1,this.render(o||(A?0:jt(R*C)),a,!u)._lock=0,this._tTime=m,!a&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,x=R),o&&o!==this._time||M!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,P&&(this._lock=2,o=b?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!M)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=Uy(this,jt(o),jt(y)),D&&(m-=y-(y=D._start))),this._tTime=m,this._time=y,this._act=!!O,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&m&&u&&!a&&!x&&(mi(this,"onStart"),this._tTime!==m))return this;if(y>=o&&r>=0)for(T=this._first;T;){if(v=T._next,(T._act||y>=T._start)&&T._ts&&D!==T){if(T.parent!==this)return this.render(r,a,s);if(T.render(T._ts>0?(y-T._start)*T._ts:(T._dirty?T.totalDuration():T._tDur)+(y-T._start)*T._ts,a,s),y!==this._time||!this._ts&&!M){D=0,v&&(m+=this._zTime=-Ot);break}}T=v}else{T=this._last;for(var h=r<0?r:y;T;){if(v=T._prev,(T._act||h<=T._end)&&T._ts&&D!==T){if(T.parent!==this)return this.render(r,a,s);if(T.render(T._ts>0?(h-T._start)*T._ts:(T._dirty?T.totalDuration():T._tDur)+(h-T._start)*T._ts,a,s||In&&od(T)),y!==this._time||!this._ts&&!M){D=0,v&&(m+=this._zTime=h?-Ot:Ot);break}}T=v}}if(D&&!a&&(this.pause(),D.render(y>=o?0:-Ot)._zTime=y>=o?1:-1,this._ts))return this._start=p,Ql(this),this.render(r,a,s);this._onUpdate&&!a&&mi(this,"onUpdate",!0),(m===c&&this._tTime>=this.totalDuration()||!m&&o)&&(p===this._start||Math.abs(O)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(m===c&&this._ts>0||!m&&this._ts<0)&&os(this,1),!a&&!(r<0&&!o)&&(m||o||!c)&&(mi(this,m===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var s=this;if(Ar(a)||(a=Ri(this,a,r)),!(r instanceof E0)){if(Gn(r))return r.forEach(function(o){return s.add(o,a)}),this;if(xn(r))return this.addLabel(r,a);if(en(r))r=an.delayedCall(0,r);else return this}return this!==r?lr(this,r,a):this},t.getChildren=function(r,a,s,o){r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),o===void 0&&(o=-Pi);for(var c=[],u=this._first;u;)u._start>=o&&(u instanceof an?a&&c.push(u):(s&&c.push(u),r&&c.push.apply(c,u.getChildren(!0,a,s)))),u=u._next;return c},t.getById=function(r){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===r)return a[s]},t.remove=function(r){return xn(r)?this.removeLabel(r):en(r)?this.killTweensOf(r):(r.parent===this&&Kl(this,r),r===this._recent&&(this._recent=this._last),Fs(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Ri(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,s){var o=an.delayedCall(0,a||b0,s);return o.data="isPause",this._hasPause=1,lr(this,o,Ri(this,r))},t.removePause=function(r){var a=this._first;for(r=Ri(this,r);a;)a._start===r&&a.data==="isPause"&&os(a),a=a._next},t.killTweensOf=function(r,a,s){for(var o=this.getTweensOf(r,s),c=o.length;c--;)rs!==o[c]&&o[c].kill(r,a);return this},t.getTweensOf=function(r,a){for(var s=[],o=Ii(r),c=this._first,u=Ar(a),m;c;)c instanceof an?Iy(c._targets,o)&&(u?(!rs||c._initted&&c._ts)&&c.globalTime(0)<=a&&c.globalTime(c.totalDuration())>a:!a||c.isActive())&&s.push(c):(m=c.getTweensOf(o,a)).length&&s.push.apply(s,m),c=c._next;return s},t.tweenTo=function(r,a){a=a||{};var s=this,o=Ri(s,r),c=a,u=c.startAt,m=c.onStart,E=c.onStartParams,y=c.immediateRender,T,v=an.to(s,xi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(u&&"time"in u?u.time:s._time))/s.timeScale())||Ot,onStart:function(){if(s.pause(),!T){var C=a.duration||Math.abs((o-(u&&"time"in u?u.time:s._time))/s.timeScale());v._dur!==C&&Ba(v,C,0,1).render(v._time,!0,!0),T=1}m&&m.apply(v,E||[])}},a));return y?v.render(0):v},t.tweenFromTo=function(r,a,s){return this.tweenTo(a,xi({startAt:{time:Ri(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Op(this,Ri(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Op(this,Ri(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(r,a,s){s===void 0&&(s=0);var o=this._first,c=this.labels,u;for(r=jt(r);o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(a)for(u in c)c[u]>=s&&(c[u]+=r);return Fs(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Fs(this)},t.totalDuration=function(r){var a=0,s=this,o=s._last,c=Pi,u,m,E;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(E=s.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),m=o._start,m>c&&s._sort&&o._ts&&!s._lock?(s._lock=1,lr(s,o,m-o._delay,1)._lock=0):c=m,m<0&&o._ts&&(a-=m,(!E&&!s._dp||E&&E.smoothChildTiming)&&(s._start+=jt(m/s._ts),s._time-=m,s._tTime-=m),s.shiftChildren(-m,!1,-1/0),c=0),o._end>a&&o._ts&&(a=o._end),o=u;Ba(s,s===Yt&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Yt._ts&&(Xp(Yt,Yl(r,Yt)),Wp=ii.frame),ii.frame>=Ip){Ip+=si.autoSleep||120;var a=Yt._first;if((!a||!a._ts)&&si.autoSleep&&ii._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ii.sleep()}}},e})(E0);xi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tb=function(e,t,i,r,a,s,o){var c=new $n(this._pt,e,t,0,1,pd,null,a),u=0,m=0,E,y,T,v,R,C,M,D;for(c.b=i,c.e=r,i+="",r+="",(M=~r.indexOf("random("))&&(r=Va(r)),s&&(D=[i,r],s(D,e,t),i=D[0],r=D[1]),y=i.match(Ou)||[];E=Ou.exec(r);)v=E[0],R=r.substring(u,E.index),T?T=(T+1)%5:R.substr(-5)==="rgba("&&(T=1),v!==y[m++]&&(C=parseFloat(y[m-1])||0,c._pt={_next:c._pt,p:R||m===1?R:",",s:C,c:v.charAt(1)==="="?ks(C,v)-C:parseFloat(v)-C,m:T&&T<4?Math.round:0},u=Ou.lastIndex);return c.c=u<r.length?r.substring(u,r.length):"",c.fp=o,(td.test(r)||M)&&(c.e=0),this._pt=c,c},hd=function(e,t,i,r,a,s,o,c,u,m){en(r)&&(r=r(a||0,e,s));var E=e[t],y=i!=="get"?i:en(E)?u?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():E,T=en(E)?u?ab:dm:fd,v;if(xn(r)&&(~r.indexOf("random(")&&(r=Va(r)),r.charAt(1)==="="&&(v=ks(y,r)+(Dn(y)||0),(v||v===0)&&(r=v))),!m||y!==r||$u)return!isNaN(y*r)&&r!==""?(v=new $n(this._pt,e,t,+y||0,r-(y||0),typeof E=="boolean"?cb:fm,0,T),u&&(v.fp=u),o&&v.modifier(o,this,e),this._pt=v):(!E&&!(t in e)&&Jl(t,r),tb.call(this,e,t,y,r,T,c||si.stringFilter,u))},nb=function(e,t,i,r,a){if(en(e)&&(e=_0(e,a,t,i,r)),!hr(e)||e.style&&e.nodeType||Gn(e)||kp(e))return xn(e)?_0(e,a,t,i,r):e;var s={},o;for(o in e)s[o]=_0(e[o],a,t,i,r);return s},ud=function(e,t,i,r,a,s){var o,c,u,m;if(ni[e]&&(o=new ni[e]).init(a,o.rawVars?t[e]:nb(t[e],r,a,s,i),i,r,s)!==!1&&(i._pt=c=new $n(i._pt,a,e,0,1,o.render,o,0,o.priority),i!==Fa))for(u=i._ptLookup[i._targets.indexOf(a)],m=o._props.length;m--;)u[o._props[m]]=c;return o},rs,$u,dd=function n(e,t,i){var r=e.vars,a=r.ease,s=r.startAt,o=r.immediateRender,c=r.lazy,u=r.onUpdate,m=r.runBackwards,E=r.yoyoEase,y=r.keyframes,T=r.autoRevert,v=e._dur,R=e._startAt,C=e._targets,M=e.parent,D=M&&M.data==="nested"?M.vars.targets:C,O=e._overwrite==="auto"&&!Ku,p=e.timeline,x=r.easeReverse||E,w,A,b,P,h,l,d,_,g,f,S,I,L;if(p&&(!y||!a)&&(a="none"),e._ease=Ns(a,v0.ease),e._rEase=x&&(Ns(x)||e._ease),e._from=!p&&!!r.runBackwards,e._from&&(e.ratio=1),!p||y&&!r.stagger){if(_=C[0]?as(C[0]).harness:0,I=_&&r[_.prop],w=jl(r,id),R&&(R._zTime<0&&R.progress(1),t<0&&m&&o&&!T?R.render(-1,!0):R.revert(m&&v?Hl:Ry),R._lazy=0),s){if(os(e._startAt=an.set(C,xi({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!R&&ri(c),startAt:null,delay:0,onUpdate:u&&function(){return mi(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In||!o&&!T)&&e._startAt.revert(Hl),o&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(m&&v&&!R){if(t&&(o=!1),b=xi({overwrite:!1,data:"isFromStart",lazy:o&&!R&&ri(c),immediateRender:o,stagger:0,parent:M},w),I&&(b[_.prop]=I),os(e._startAt=an.set(C,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(In?e._startAt.revert(Hl):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,c=v&&ri(c)||c&&!v,A=0;A<C.length;A++){if(h=C[A],d=h._gsap||sd(C)[A]._gsap,e._ptLookup[A]=f={},Wu[d.id]&&ss.length&&ql(),S=D===C?A:D.indexOf(h),_&&(g=new _).init(h,I||w,e,S,D)!==!1&&(e._pt=P=new $n(e._pt,h,g.name,0,1,g.render,g,0,g.priority),g._props.forEach(function(z){f[z]=P}),g.priority&&(l=1)),!_||I)for(b in w)ni[b]&&(g=ud(b,w,e,S,h,D))?g.priority&&(l=1):f[b]=P=hd.call(e,h,b,"get",w[b],S,D,0,r.stringFilter);e._op&&e._op[A]&&e.kill(h,e._op[A]),O&&e._pt&&(rs=e,Yt.killTweensOf(h,f,e.globalTime(t)),L=!e.parent,rs=0),e._pt&&c&&(Wu[d.id]=1)}l&&gd(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!L,y&&t<=0&&p.render(Pi,!0,!0)},ib=function(e,t,i,r,a,s,o,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,E,y,T;if(!u)for(u=e._ptCache[t]=[],y=e._ptLookup,T=e._targets.length;T--;){if(m=y[T][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return $u=1,e.vars[t]="+=0",dd(e,o),$u=0,c?y0(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(m)}for(T=u.length;T--;)E=u[T],m=E._pt||E,m.s=(r||r===0)&&!a?r:m.s+(r||0)+s*m.c,m.c=i-m.s,E.e&&(E.e=tn(i)+Dn(E.e)),E.b&&(E.b=m.s+Dn(E.b))},rb=function(e,t){var i=e[0]?as(e[0]).harness:0,r=i&&i.aliases,a,s,o,c;if(!r)return t;a=Na({},t);for(s in r)if(s in a)for(c=r[s].split(","),o=c.length;o--;)a[c[o]]=a[s];return a},sb=function(e,t,i,r){var a=t.ease||r||"power1.inOut",s,o;if(Gn(t))o=i[e]||(i[e]=[]),t.forEach(function(c,u){return o.push({t:u/(t.length-1)*100,v:c,e:a})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:a})},_0=function(e,t,i,r,a){return en(e)?e.call(t,i,r,a):xn(e)&&~e.indexOf("random(")?Va(e):e},hm=rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",um={};Zn(hm+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return um[n]=1});var an=(function(n){Up(e,n);function e(i,r,a,s){var o;typeof r=="number"&&(a.duration=r,r=a,a=null),o=n.call(this,s?r:g0(r))||this;var c=o.vars,u=c.duration,m=c.delay,E=c.immediateRender,y=c.stagger,T=c.overwrite,v=c.keyframes,R=c.defaults,C=c.scrollTrigger,M=r.parent||Yt,D=(Gn(i)||kp(i)?Ar(i[0]):"length"in r)?[i]:Ii(i),O,p,x,w,A,b,P,h;if(o._targets=D.length?sd(D):y0("GSAP target "+i+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=T,v||y||Vl(u)||Vl(m)){r=o.vars;var l=r.easeReverse||r.yoyoEase;if(O=o.timeline=new Hn({data:"nested",defaults:R||{},targets:M&&M.data==="nested"?M.vars.targets:D}),O.kill(),O.parent=O._dp=Tr(o),O._start=0,y||Vl(u)||Vl(m)){if(w=D.length,P=y&&em(y),hr(y))for(A in y)~hm.indexOf(A)&&(h||(h={}),h[A]=y[A]);for(p=0;p<w;p++)x=jl(r,um),x.stagger=0,l&&(x.easeReverse=l),h&&Na(x,h),b=D[p],x.duration=+_0(u,Tr(o),p,b,D),x.delay=(+_0(m,Tr(o),p,b,D)||0)-o._delay,!y&&w===1&&x.delay&&(o._delay=m=x.delay,o._start+=m,x.delay=0),O.to(b,x,P?P(p,b,D):0),O._ease=xt.none;O.duration()?u=m=0:o.timeline=0}else if(v){g0(xi(O.vars.defaults,{ease:"none"})),O._ease=Ns(v.ease||r.ease||"none");var d=0,_,g,f;if(Gn(v))v.forEach(function(S){return O.to(D,S,">")}),O.duration();else{x={};for(A in v)A==="ease"||A==="easeEach"||sb(A,v[A],x,v.easeEach);for(A in x)for(_=x[A].sort(function(S,I){return S.t-I.t}),d=0,p=0;p<_.length;p++)g=_[p],f={ease:g.e,duration:(g.t-(p?_[p-1].t:0))/100*u},f[A]=g.v,O.to(D,f,d),d+=f.duration;O.duration()<u&&O.to({},{duration:u-O.duration()})}}u||o.duration(u=O.duration())}else o.timeline=0;return T===!0&&!Ku&&(rs=Tr(o),Yt.killTweensOf(D),rs=0),lr(M,Tr(o),a),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(E||!u&&!v&&o._start===jt(M._time)&&ri(E)&&Oy(Tr(o))&&M.data!=="nested")&&(o._tTime=-Ot,o.render(Math.max(0,-m)||0)),C&&$p(Tr(o),C),o}var t=e.prototype;return t.render=function(r,a,s){var o=this._time,c=this._tDur,u=this._dur,m=r<0,E=r>c-Ot&&!m?c:r<Ot?0:r,y,T,v,R,C,M,D,O;if(!u)Ny(this,r,a,s);else if(E!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(y=E,O=this.timeline,this._repeat){if(R=u+this._rDelay,this._repeat<-1&&m)return this.totalTime(R*100+r,a,s);if(y=jt(E%R),E===c?(v=this._repeat,y=u):(C=jt(E/R),v=~~C,v&&v===C?(y=u,v--):y>u&&(y=u)),M=this._yoyo&&v&1,M&&(y=u-y),C=Ua(this._tTime,R),y===o&&!s&&this._initted&&v===C)return this._tTime=E,this;v!==C&&this.vars.repeatRefresh&&!M&&!this._lock&&y!==R&&this._initted&&(this._lock=s=1,this.render(jt(R*v),!0).invalidate()._lock=0)}if(!this._initted){if(Jp(this,m?r:y,s,a,E))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&v!==C))return this;if(u!==this._dur)return this.render(r,a,s)}if(this._rEase){var p=y<o;if(p!==this._inv){var x=p?o:u-o;this._inv=p,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=x?(p?-1:1)/x:0,this._invScale=p?-this.ratio:1-this.ratio,this._invEase=p?this._rEase:this._ease}this.ratio=D=this._invRatio+this._invScale*this._invEase((y-this._invTime)*this._invRecip)}else this.ratio=D=this._ease(y/u);if(this._from&&(this.ratio=D=1-D),this._tTime=E,this._time=y,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&E&&!a&&!C&&(mi(this,"onStart"),this._tTime!==E))return this;for(T=this._pt;T;)T.r(D,T.d),T=T._next;O&&O.render(r<0?r:O._dur*O._ease(y/this._dur),a,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(m&&Xu(this,r,a,s),mi(this,"onUpdate")),this._repeat&&v!==C&&this.vars.onRepeat&&!a&&this.parent&&mi(this,"onRepeat"),(E===this._tDur||!E)&&this._tTime===E&&(m&&!this._onUpdate&&Xu(this,r,!0,!0),(r||!u)&&(E===this._tDur&&this._ts>0||!E&&this._ts<0)&&os(this,1),!a&&!(m&&!o)&&(E||o||M)&&(mi(this,E===c?"onComplete":"onReverseComplete",!0),this._prom&&!(E<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,s,o,c){S0||ii.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||dd(this,u),m=this._ease(u/this._dur),ib(this,r,a,s,o,m,u,c)?this.resetTo(r,a,s,o,1):(eh(this,0),this.parent||Yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?p0(this):this.scrollTrigger&&this.scrollTrigger.kill(!!In),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,rs&&rs.vars.overwrite!==!0)._first||p0(this),this.parent&&s!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,c=r?Ii(r):o,u=this._ptLookup,m=this._pt,E,y,T,v,R,C,M;if((!a||a==="all")&&zy(o,c))return a==="all"&&(this._pt=0),p0(this);for(E=this._op=this._op||[],a!=="all"&&(xn(a)&&(R={},Zn(a,function(D){return R[D]=1}),a=R),a=rb(o,a)),M=o.length;M--;)if(~c.indexOf(o[M])){y=u[M],a==="all"?(E[M]=a,v=y,T={}):(T=E[M]=E[M]||{},v=a);for(R in v)C=y&&y[R],C&&((!("kill"in C.d)||C.d.kill(R)===!0)&&Kl(this,C,"_pt"),delete y[R]),T!=="all"&&(T[R]=1)}return this._initted&&!this._pt&&m&&p0(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return x0(1,arguments)},e.delayedCall=function(r,a,s,o){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(r,a,s){return x0(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,s){return Yt.killTweensOf(r,a,s)},e})(E0);xi(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(n){an[n]=function(){var e=new Hn,t=ju.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var fd=function(e,t,i){return e[t]=i},dm=function(e,t,i){return e[t](i)},ab=function(e,t,i,r){return e[t](r.fp,i)},ob=function(e,t,i){return e.setAttribute(t,i)},th=function(e,t){return en(e[t])?dm:$l(e[t])&&e.setAttribute?ob:fd},fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pd=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},md=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lb=function(e,t,i,r){for(var a=this._pt,s;a;)s=a._next,a.p===r&&a.modifier(e,t,i),a=s},hb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Kl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},ub=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gd=function(e){for(var t=e._pt,i,r,a,s;t;){for(i=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:s=t,t=i}e._pt=a},$n=(function(){function n(t,i,r,a,s,o,c,u,m){this.t=i,this.s=a,this.c=s,this.p=r,this.r=o||fm,this.d=c||this,this.set=u||fd,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,a){this.mSet=this.mSet||this.set,this.set=ub,this.m=i,this.mt=a,this.tween=r},n})();Zn(rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return id[n]=1});gi.TweenMax=gi.TweenLite=an;gi.TimelineLite=gi.TimelineMax=Hn;Yt=new Hn({sortChildren:!1,defaults:v0,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=cd;var Us=[],Wl={},db=[],Np=0,fb=0,ku=function(e){return(Wl[e]||db).map(function(t){return t()})},Ju=function(){var e=Date.now(),t=[];e-Np>2&&(ku("matchMediaInit"),Us.forEach(function(i){var r=i.queries,a=i.conditions,s,o,c,u;for(o in r)s=cr.matchMedia(r[o]).matches,s&&(c=1),s!==a[o]&&(a[o]=s,u=1);u&&(i.revert(),c&&t.push(i))}),ku("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Np=e,ku("matchMedia"))},pm=(function(){function n(t,i){this.selector=i&&Yu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=fb++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,a){en(i)&&(a=r,r=i,i=en);var s=this,o=function(){var u=Wt,m=s.selector,E;return u&&u!==s&&u.data.push(s),a&&(s.selector=Yu(a)),Wt=s,E=r.apply(s,arguments),en(E)&&s._r.push(E),Wt=u,s.selector=m,s.isReverted=!1,E};return s.last=o,i===en?o(s,function(c){return s.add(null,c)}):i?s[i]=o:o},e.ignore=function(i){var r=Wt;Wt=null,i(this),Wt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof an&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var a=this;if(i?(function(){for(var o=a.getTweens(),c=a.data.length,u;c--;)u=a.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(m){return o.splice(o.indexOf(m),1)}));for(o.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,E){return E.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),c=a.data.length;c--;)u=a.data[c],u instanceof Hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof an)&&u.revert&&u.revert(i);a._r.forEach(function(m){return m(i,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=Us.length;s--;)Us[s].id===this.id&&Us.splice(s,1)},e.revert=function(i){this.kill(i||{})},n})(),pb=(function(){function n(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=n.prototype;return e.add=function(i,r,a){hr(i)||(i={matches:i});var s=new pm(0,a||this.scope),o=s.conditions={},c,u,m;Wt&&!s.selector&&(s.selector=Wt.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(u in i)u==="all"?m=1:(c=cr.matchMedia(i[u]),c&&(Us.indexOf(s)<0&&Us.push(s),(o[u]=c.matches)&&(m=1),c.addListener?c.addListener(Ju):c.addEventListener("change",Ju)));return m&&r(s,function(E){return s.add(null,E)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Zl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return am(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){xn(e)&&(e=Ii(e)[0]);var a=as(e||{}).get,s=i?jp:qp;return i==="native"&&(i=""),e&&(t?s((ni[t]&&ni[t].get||a)(e,t,i,r)):function(o,c,u){return s((ni[o]&&ni[o].get||a)(e,o,c,u))})},quickSetter:function(e,t,i){if(e=Ii(e),e.length>1){var r=e.map(function(m){return Wn.quickSetter(m,t,i)}),a=r.length;return function(m){for(var E=a;E--;)r[E](m)}}e=e[0]||{};var s=ni[t],o=as(e),c=o.harness&&(o.harness.aliases||{})[t]||t,u=s?function(m){var E=new s;Fa._pt=0,E.init(e,i?m+i:m,Fa,0,[e]),E.render(1,E),Fa._pt&&md(1,Fa)}:o.set(e,c);return s?u:function(m){return u(e,c,i?m+i:m,o,1)}},quickTo:function(e,t,i){var r,a=Wn.to(e,xi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),s=function(c,u,m){return a.resetTo(t,c,u,m)};return s.tween=a,s},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ns(e.ease,v0.ease)),Dp(v0,e||{})},config:function(e){return Dp(si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,a=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ni[o]&&!gi[o]&&y0(t+" effect requires "+o+" plugin.")}),Fu[t]=function(o,c,u){return i(Ii(o),xi(c||{},a),u)},s&&(Hn.prototype[t]=function(o,c,u){return this.add(Fu[t](o,hr(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){xt[e]=Ns(t)},parseEase:function(e,t){return arguments.length?Ns(e,t):xt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Hn(e),r,a;for(i.smoothChildTiming=ri(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)a=r._next,(t||!(!r._dur&&r instanceof an&&r.vars.onComplete===r._targets[0]))&&lr(i,r,r._start-r._delay),r=a;return lr(Yt,i,0),i},context:function(e,t){return e?new pm(e,t):Wt},matchMedia:function(e){return new pb(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ju()},addEventListener:function(e,t){var i=Wl[e]||(Wl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Wl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Xy,wrapYoyo:qy,distribute:em,random:nm,snap:tm,normalize:Wy,getUnit:Dn,clamp:ky,splitColor:om,toArray:Ii,selector:Yu,mapRange:rm,pipe:Hy,unitize:Gy,interpolate:jy,shuffle:Qp},install:Hp,effects:Fu,ticker:ii,updateRoot:Hn.updateRoot,plugins:ni,globalTimeline:Yt,core:{PropTween:$n,globals:Gp,Tween:an,Timeline:Hn,Animation:E0,getCache:as,_removeLinkedListItem:Kl,reverting:function(){return In},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Ku=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zl[n]=an[n]});ii.add(Hn.updateRoot);Fa=Zl.to({},{duration:0});var mb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},gb=function(e,t){var i=e._targets,r,a,s;for(r in t)for(a=i.length;a--;)s=e._ptLookup[a][r],s&&(s=s.d)&&(s._pt&&(s=mb(s,r)),s&&s.modifier&&s.modifier(t[r],e,i[a],r))},Vu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,s){s._onInit=function(o){var c,u;if(xn(a)&&(c={},Zn(a,function(m){return c[m]=1}),a=c),t){c={};for(u in a)c[u]=t(a[u]);a=c}gb(o,a)}}}},Wn=Zl.registerPlugin({name:"attr",init:function(e,t,i,r,a){var s,o,c;this.tween=i;for(s in t)c=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(c||0)+"",t[s],r,a,0,0,s),o.op=s,o.b=c,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)In?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Vu("roundProps",Zu),Vu("modifiers"),Vu("snap",tm))||Zl;an.version=Hn.version=Wn.version="3.15.0";Vp=1;Qu()&&ka();var xb=xt.Power0,_b=xt.Power1,vb=xt.Power2,yb=xt.Power3,bb=xt.Power4,Sb=xt.Linear,Eb=xt.Quad,Tb=xt.Cubic,wb=xt.Quart,Ab=xt.Quint,Cb=xt.Strong,Mb=xt.Elastic,Rb=xt.Back,Pb=xt.SteppedEase,Ib=xt.Bounce,Db=xt.Sine,zb=xt.Expo,Lb=xt.Circ;var mm,ls,Ga,Sd,Xs,Ob,gm,Ed,Fb=function(){return typeof window<"u"},Mr={},Ws=180/Math.PI,Wa=Math.PI/180,Ha=Math.atan2,xm=1e8,Td=/([A-Z])/g,Nb=/(left|right|width|margin|padding|x)/i,Ub=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_d=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Am=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gb=function(e,t,i){return e.style[t]=i},Wb=function(e,t,i){return e.style.setProperty(t,i)},Xb=function(e,t,i){return e._gsap[t]=i},qb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},jb=function(e,t,i,r,a){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(a,s)},Yb=function(e,t,i,r,a){var s=e._gsap;s[t]=i,s.renderTransform(a,s)},Zt="transform",ai=Zt+"Origin",Zb=function n(e,t){var i=this,r=this.target,a=r.style,s=r._gsap;if(e in Mr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=ur[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Cr(r,o)}):this.tfm[e]=s.x?s[e]:Cr(r,e),e===ai&&(this.tfm.zOrigin=s.zOrigin);else return ur.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Zt)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Zt}(a||t)&&this.props.push(e,t,a[e])},Cm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$b=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?i[e[a]]=e[a+2]:i.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Td,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Ed(),(!a||!a.isStart)&&!i[Zt]&&(Cm(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Mm=function(e,t){var i={target:e,props:[],revert:$b,save:Zb};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Rm,vd=function(e,t){var i=ls.createElementNS?ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ls.createElement(e);return i&&i.style?i:ls.createElement(e)},_i=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Td,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Xa(t)||t,1)||""},_m="O,Moz,ms,Ms,Webkit".split(","),Xa=function(e,t,i){var r=t||Xs,a=r.style,s=5;if(e in a&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(_m[s]+e in a););return s<0?null:(s===3?"ms":s>=0?_m[s]:"")+e},yd=function(){Fb()&&window.document&&(mm=window,ls=mm.document,Ga=ls.documentElement,Xs=vd("div")||{style:{}},Ob=vd("div"),Zt=Xa(Zt),ai=Zt+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rm=!!Xa("perspective"),Ed=Wn.core.reverting,Sd=1)},vm=function(e){var t=e.ownerSVGElement,i=vd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",i.appendChild(r),Ga.appendChild(i);try{a=r.getBBox()}catch{}return i.removeChild(r),Ga.removeChild(i),a},ym=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Pm=function(e){var t,i;try{t=e.getBBox()}catch{t=vm(e),i=1}return t&&(t.width||t.height)||i||(t=vm(e)),t&&!t.width&&!t.x&&!t.y?{x:+ym(e,["x","cx","x1"])||0,y:+ym(e,["y","cy","y1"])||0,width:0,height:0}:t},Im=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pm(e))},us=function(e,t){if(t){var i=e.style,r;t in Mr&&t!==ai&&(t=Zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Td,"-$1").toLowerCase())):i.removeAttribute(t)}},hs=function(e,t,i,r,a,s){var o=new $n(e._pt,t,i,0,1,s?Am:wm);return e._pt=o,o.b=r,o.e=a,e._props.push(i),o},bm={deg:1,rad:1,turn:1},Jb={grid:1,flex:1},ds=function n(e,t,i,r){var a=parseFloat(i)||0,s=(i+"").trim().substr((a+"").length)||"px",o=Xs.style,c=Nb.test(t),u=e.tagName.toLowerCase()==="svg",m=(u?"client":"offset")+(c?"Width":"Height"),E=100,y=r==="px",T=r==="%",v,R,C,M;if(r===s||!a||bm[r]||bm[s])return a;if(s!=="px"&&!y&&(a=n(e,t,i,"px")),M=e.getCTM&&Im(e),(T||s==="%")&&(Mr[t]||~t.indexOf("adius")))return v=M?e.getBBox()[c?"width":"height"]:e[m],tn(T?a/v*E:a/100*v);if(o[c?"width":"height"]=E+(y?s:r),R=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,M&&(R=(e.ownerSVGElement||{}).parentNode),(!R||R===ls||!R.appendChild)&&(R=ls.body),C=R._gsap,C&&T&&C.width&&c&&C.time===ii.time&&!C.uncache)return tn(a/C.width*E);if(T&&(t==="height"||t==="width")){var D=e.style[t];e.style[t]=E+r,v=e[m],D?e.style[t]=D:us(e,t)}else(T||s==="%")&&!Jb[_i(R,"display")]&&(o.position=_i(e,"position")),R===e&&(o.position="static"),R.appendChild(Xs),v=Xs[m],R.removeChild(Xs),o.position="absolute";return c&&T&&(C=as(R),C.time=ii.time,C.width=R[m]),tn(y?v*a/E:v&&a?E/v*a:0)},Cr=function(e,t,i,r){var a;return Sd||yd(),t in ur&&t!=="transform"&&(t=ur[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mr[t]&&t!=="transform"?(a=C0(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:ih(_i(e,ai))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=nh[t]&&nh[t](e,t,i)||_i(e,t)||ad(e,t)||(t==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?ds(e,t,a,i)+i:a},Kb=function(e,t,i,r){if(!i||i==="none"){var a=Xa(t,e,1),s=a&&_i(e,a,1);s&&s!==i?(t=a,i=s):t==="borderColor"&&(i=_i(e,"borderTopColor"))}var o=new $n(this._pt,e.style,t,0,1,pd),c=0,u=0,m,E,y,T,v,R,C,M,D,O,p,x;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=_i(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(R=e.style[t],e.style[t]=r,r=_i(e,t)||r,R?e.style[t]=R:us(e,t)),m=[i,r],cd(m),i=m[0],r=m[1],y=i.match(Bs)||[],x=r.match(Bs)||[],x.length){for(;E=Bs.exec(r);)C=E[0],D=r.substring(c,E.index),v?v=(v+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(v=1),C!==(R=y[u++]||"")&&(T=parseFloat(R)||0,p=R.substr((T+"").length),C.charAt(1)==="="&&(C=ks(T,C)+p),M=parseFloat(C),O=C.substr((M+"").length),c=Bs.lastIndex-O.length,O||(O=O||si.units[t]||p,c===r.length&&(r+=O,o.e+=O)),p!==O&&(T=ds(e,t,R,O)||0),o._pt={_next:o._pt,p:D||u===1?D:",",s:T,c:M-T,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Am:wm;return td.test(r)&&(o.e=0),this._pt=o,o},Sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Sm[i]||i,t[1]=Sm[r]||r,t.join(" ")},e3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,a=t.u,s=i._gsap,o,c,u;if(a==="all"||a===!0)r.cssText="",c=1;else for(a=a.split(","),u=a.length;--u>-1;)o=a[u],Mr[o]&&(c=1,o=o==="transformOrigin"?ai:Zt),us(i,o);c&&(us(i,Zt),s&&(s.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",C0(i,1),s.uncache=1,Cm(r)))}},nh={clearProps:function(e,t,i,r,a){if(a.data!=="isFromStart"){var s=e._pt=new $n(e._pt,t,i,0,0,e3);return s.u=r,s.pr=-10,s.tween=a,e._props.push(i),1}}},A0=[1,0,0,1,0,0],Dm={},zm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Em=function(e){var t=_i(e,Zt);return zm(t)?A0:t.substr(7).match(ed).map(tn)},wd=function(e,t){var i=e._gsap||as(e),r=e.style,a=Em(e),s,o,c,u;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,a=[c.a,c.b,c.c,c.d,c.e,c.f],a.join(",")==="1,0,0,1,0,0"?A0:a):(a===A0&&!e.offsetParent&&e!==Ga&&!i.svg&&(c=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Ga.appendChild(e)),a=Em(e),c?r.display=c:us(e,"display"),u&&(o?s.insertBefore(e,o):s?s.appendChild(e):Ga.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},bd=function(e,t,i,r,a,s){var o=e._gsap,c=a||wd(e,!0),u=o.xOrigin||0,m=o.yOrigin||0,E=o.xOffset||0,y=o.yOffset||0,T=c[0],v=c[1],R=c[2],C=c[3],M=c[4],D=c[5],O=t.split(" "),p=parseFloat(O[0])||0,x=parseFloat(O[1])||0,w,A,b,P;i?c!==A0&&(A=T*C-v*R)&&(b=p*(C/A)+x*(-R/A)+(R*D-C*M)/A,P=p*(-v/A)+x*(T/A)-(T*D-v*M)/A,p=b,x=P):(w=Pm(e),p=w.x+(~O[0].indexOf("%")?p/100*w.width:p),x=w.y+(~(O[1]||O[0]).indexOf("%")?x/100*w.height:x)),r||r!==!1&&o.smooth?(M=p-u,D=x-m,o.xOffset=E+(M*T+D*R)-M,o.yOffset=y+(M*v+D*C)-D):o.xOffset=o.yOffset=0,o.xOrigin=p,o.yOrigin=x,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[ai]="0px 0px",s&&(hs(s,o,"xOrigin",u,p),hs(s,o,"yOrigin",m,x),hs(s,o,"xOffset",E,o.xOffset),hs(s,o,"yOffset",y,o.yOffset)),e.setAttribute("data-svg-origin",p+" "+x)},C0=function(e,t){var i=e._gsap||new ld(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,a=i.scaleX<0,s="px",o="deg",c=getComputedStyle(e),u=_i(e,ai)||"0",m,E,y,T,v,R,C,M,D,O,p,x,w,A,b,P,h,l,d,_,g,f,S,I,L,z,F,N,B,V,X,Z;return m=E=y=R=C=M=D=O=p=0,T=v=1,i.svg=!!(e.getCTM&&Im(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Zt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Zt]!=="none"?c[Zt]:"")),r.scale=r.rotate=r.translate="none"),A=wd(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),bd(e,I||u,!!I||i.originIsAbsolute,i.smooth!==!1,A)),x=i.xOrigin||0,w=i.yOrigin||0,A!==A0&&(l=A[0],d=A[1],_=A[2],g=A[3],m=f=A[4],E=S=A[5],A.length===6?(T=Math.sqrt(l*l+d*d),v=Math.sqrt(g*g+_*_),R=l||d?Ha(d,l)*Ws:0,D=_||g?Ha(_,g)*Ws+R:0,D&&(v*=Math.abs(Math.cos(D*Wa))),i.svg&&(m-=x-(x*l+w*_),E-=w-(x*d+w*g))):(Z=A[6],V=A[7],F=A[8],N=A[9],B=A[10],X=A[11],m=A[12],E=A[13],y=A[14],b=Ha(Z,B),C=b*Ws,b&&(P=Math.cos(-b),h=Math.sin(-b),I=f*P+F*h,L=S*P+N*h,z=Z*P+B*h,F=f*-h+F*P,N=S*-h+N*P,B=Z*-h+B*P,X=V*-h+X*P,f=I,S=L,Z=z),b=Ha(-_,B),M=b*Ws,b&&(P=Math.cos(-b),h=Math.sin(-b),I=l*P-F*h,L=d*P-N*h,z=_*P-B*h,X=g*h+X*P,l=I,d=L,_=z),b=Ha(d,l),R=b*Ws,b&&(P=Math.cos(b),h=Math.sin(b),I=l*P+d*h,L=f*P+S*h,d=d*P-l*h,S=S*P-f*h,l=I,f=L),C&&Math.abs(C)+Math.abs(R)>359.9&&(C=R=0,M=180-M),T=tn(Math.sqrt(l*l+d*d+_*_)),v=tn(Math.sqrt(S*S+Z*Z)),b=Ha(f,S),D=Math.abs(b)>2e-4?b*Ws:0,p=X?1/(X<0?-X:X):0),i.svg&&(I=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zm(_i(e,Zt)),I&&e.setAttribute("transform",I))),Math.abs(D)>90&&Math.abs(D)<270&&(a?(T*=-1,D+=R<=0?180:-180,R+=R<=0?180:-180):(v*=-1,D+=D<=0?180:-180)),t=t||i.uncache,i.x=m-((i.xPercent=m&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=E-((i.yPercent=E&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-E)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=y+s,i.scaleX=tn(T),i.scaleY=tn(v),i.rotation=tn(R)+o,i.rotationX=tn(C)+o,i.rotationY=tn(M)+o,i.skewX=D+o,i.skewY=O+o,i.transformPerspective=p+s,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=ih(u)),i.xOffset=i.yOffset=0,i.force3D=si.force3D,i.renderTransform=i.svg?n3:Rm?Lm:t3,i.uncache=0,i},ih=function(e){return(e=e.split(" "))[0]+" "+e[1]},xd=function(e,t,i){var r=Dn(t);return tn(parseFloat(t)+parseFloat(ds(e,"x",i+"px",r)))+r},t3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lm(e,t)},Hs="0deg",w0="0px",Gs=") ",Lm=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.z,u=i.rotation,m=i.rotationY,E=i.rotationX,y=i.skewX,T=i.skewY,v=i.scaleX,R=i.scaleY,C=i.transformPerspective,M=i.force3D,D=i.target,O=i.zOrigin,p="",x=M==="auto"&&e&&e!==1||M===!0;if(O&&(E!==Hs||m!==Hs)){var w=parseFloat(m)*Wa,A=Math.sin(w),b=Math.cos(w),P;w=parseFloat(E)*Wa,P=Math.cos(w),s=xd(D,s,A*P*-O),o=xd(D,o,-Math.sin(w)*-O),c=xd(D,c,b*P*-O+O)}C!==w0&&(p+="perspective("+C+Gs),(r||a)&&(p+="translate("+r+"%, "+a+"%) "),(x||s!==w0||o!==w0||c!==w0)&&(p+=c!==w0||x?"translate3d("+s+", "+o+", "+c+") ":"translate("+s+", "+o+Gs),u!==Hs&&(p+="rotate("+u+Gs),m!==Hs&&(p+="rotateY("+m+Gs),E!==Hs&&(p+="rotateX("+E+Gs),(y!==Hs||T!==Hs)&&(p+="skew("+y+", "+T+Gs),(v!==1||R!==1)&&(p+="scale("+v+", "+R+Gs),D.style[Zt]=p||"translate(0, 0)"},n3=function(e,t){var i=t||this,r=i.xPercent,a=i.yPercent,s=i.x,o=i.y,c=i.rotation,u=i.skewX,m=i.skewY,E=i.scaleX,y=i.scaleY,T=i.target,v=i.xOrigin,R=i.yOrigin,C=i.xOffset,M=i.yOffset,D=i.forceCSS,O=parseFloat(s),p=parseFloat(o),x,w,A,b,P;c=parseFloat(c),u=parseFloat(u),m=parseFloat(m),m&&(m=parseFloat(m),u+=m,c+=m),c||u?(c*=Wa,u*=Wa,x=Math.cos(c)*E,w=Math.sin(c)*E,A=Math.sin(c-u)*-y,b=Math.cos(c-u)*y,u&&(m*=Wa,P=Math.tan(u-m),P=Math.sqrt(1+P*P),A*=P,b*=P,m&&(P=Math.tan(m),P=Math.sqrt(1+P*P),x*=P,w*=P)),x=tn(x),w=tn(w),A=tn(A),b=tn(b)):(x=E,b=y,w=A=0),(O&&!~(s+"").indexOf("px")||p&&!~(o+"").indexOf("px"))&&(O=ds(T,"x",s,"px"),p=ds(T,"y",o,"px")),(v||R||C||M)&&(O=tn(O+v-(v*x+R*A)+C),p=tn(p+R-(v*w+R*b)+M)),(r||a)&&(P=T.getBBox(),O=tn(O+r/100*P.width),p=tn(p+a/100*P.height)),P="matrix("+x+","+w+","+A+","+b+","+O+","+p+")",T.setAttribute("transform",P),D&&(T.style[Zt]=P)},i3=function(e,t,i,r,a){var s=360,o=xn(a),c=parseFloat(a)*(o&&~a.indexOf("rad")?Ws:1),u=c-r,m=r+u+"deg",E,y;return o&&(E=a.split("_")[1],E==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),E==="cw"&&u<0?u=(u+s*xm)%s-~~(u/s)*s:E==="ccw"&&u>0&&(u=(u-s*xm)%s-~~(u/s)*s)),e._pt=y=new $n(e._pt,t,i,r,u,Bb),y.e=m,y.u="deg",e._props.push(i),y},Tm=function(e,t){for(var i in t)e[i]=t[i];return e},r3=function(e,t,i){var r=Tm({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,c,u,m,E,y,T,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),s[Zt]=t,o=C0(i,1),us(i,Zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Zt],s[Zt]=t,o=C0(i,1),s[Zt]=u);for(c in Mr)u=r[c],m=o[c],u!==m&&a.indexOf(c)<0&&(T=Dn(u),v=Dn(m),E=T!==v?ds(i,c,u,v):parseFloat(u),y=parseFloat(m),e._pt=new $n(e._pt,o,c,E,y-E,_d),e._pt.u=v||0,e._props.push(c));Tm(o,r)};Zn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",a="Left",s=(e<3?[t,i,r,a]:[t+a,t+i,r+i,r+a]).map(function(o){return e<2?n+o:"border"+o+n});nh[e>1?"border"+n:n]=function(o,c,u,m,E){var y,T;if(arguments.length<4)return y=s.map(function(v){return Cr(o,v,u)}),T=y.join(" "),T.split(y[0]).length===5?y[0]:T;y=(m+"").split(" "),T={},s.forEach(function(v,R){return T[v]=y[R]=y[R]||y[(R-1)/2|0]}),o.init(c,T,E)}});var Ad={name:"css",register:yd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,a){var s=this._props,o=e.style,c=i.vars.startAt,u,m,E,y,T,v,R,C,M,D,O,p,x,w,A,b,P;Sd||yd(),this.styles=this.styles||Mm(e),b=this.styles.props,this.tween=i;for(R in t)if(R!=="autoRound"&&(m=t[R],!(ni[R]&&ud(R,t,i,r,e,a)))){if(T=typeof m,v=nh[R],T==="function"&&(m=m.call(i,r,e,a),T=typeof m),T==="string"&&~m.indexOf("random(")&&(m=Va(m)),v)v(this,e,R,m,i)&&(A=1);else if(R.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(R)+"").trim(),m+="",wr.lastIndex=0,wr.test(u)||(C=Dn(u),M=Dn(m),M?C!==M&&(u=ds(e,R,u,M)+M):C&&(m+=C)),this.add(o,"setProperty",u,m,r,a,0,0,R),s.push(R),b.push(R,0,o[R]);else if(T!=="undefined"){if(c&&R in c?(u=typeof c[R]=="function"?c[R].call(i,r,e,a):c[R],xn(u)&&~u.indexOf("random(")&&(u=Va(u)),Dn(u+"")||u==="auto"||(u+=si.units[R]||Dn(Cr(e,R))||""),(u+"").charAt(1)==="="&&(u=Cr(e,R))):u=Cr(e,R),y=parseFloat(u),D=T==="string"&&m.charAt(1)==="="&&m.substr(0,2),D&&(m=m.substr(2)),E=parseFloat(m),R in ur&&(R==="autoAlpha"&&(y===1&&Cr(e,"visibility")==="hidden"&&E&&(y=0),b.push("visibility",0,o.visibility),hs(this,o,"visibility",y?"inherit":"hidden",E?"inherit":"hidden",!E)),R!=="scale"&&R!=="transform"&&(R=ur[R],~R.indexOf(",")&&(R=R.split(",")[0]))),O=R in Mr,O){if(this.styles.save(R),P=m,T==="string"&&m.substring(0,6)==="var(--"){if(m=_i(e,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var h=e.style.perspective;e.style.perspective=m,m=_i(e,"perspective"),h?e.style.perspective=h:us(e,"perspective")}E=parseFloat(m)}if(p||(x=e._gsap,x.renderTransform&&!t.parseTransform||C0(e,t.parseTransform),w=t.smoothOrigin!==!1&&x.smooth,p=this._pt=new $n(this._pt,o,Zt,0,1,x.renderTransform,x,0,-1),p.dep=1),R==="scale")this._pt=new $n(this._pt,x,"scaleY",x.scaleY,(D?ks(x.scaleY,D+E):E)-x.scaleY||0,_d),this._pt.u=0,s.push("scaleY",R),R+="X";else if(R==="transformOrigin"){b.push(ai,0,o[ai]),m=Qb(m),x.svg?bd(e,m,0,w,0,this):(M=parseFloat(m.split(" ")[2])||0,M!==x.zOrigin&&hs(this,x,"zOrigin",x.zOrigin,M),hs(this,o,R,ih(u),ih(m)));continue}else if(R==="svgOrigin"){bd(e,m,1,w,0,this);continue}else if(R in Dm){i3(this,x,R,y,D?ks(y,D+m):m);continue}else if(R==="smoothOrigin"){hs(this,x,"smooth",x.smooth,m);continue}else if(R==="force3D"){x[R]=m;continue}else if(R==="transform"){r3(this,m,e);continue}}else R in o||(R=Xa(R)||R);if(O||(E||E===0)&&(y||y===0)&&!Ub.test(m)&&R in o)C=(u+"").substr((y+"").length),E||(E=0),M=Dn(m)||(R in si.units?si.units[R]:C),C!==M&&(y=ds(e,R,u,M)),this._pt=new $n(this._pt,O?x:o,R,y,(D?ks(y,D+E):E)-y,!O&&(M==="px"||R==="zIndex")&&t.autoRound!==!1?Hb:_d),this._pt.u=M||0,O&&P!==m?(this._pt.b=u,this._pt.e=P,this._pt.r=Vb):C!==M&&M!=="%"&&(this._pt.b=u,this._pt.r=kb);else if(R in o)Kb.call(this,e,R,u,D?D+m:m);else if(R in e)this.add(e,R,u||e[R],D?D+m:m,r,a);else if(R!=="parseTransform"){Jl(R,m);continue}O||(R in o?b.push(R,0,o[R]):typeof e[R]=="function"?b.push(R,2,e[R]()):b.push(R,1,u||e[R])),s.push(R)}}A&&gd(this)},render:function(e,t){if(t.tween._time||!Ed())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Cr,aliases:ur,getSetter:function(e,t,i){var r=ur[t];return r&&r.indexOf(",")<0&&(t=r),t in Mr&&t!==ai&&(e._gsap.x||Cr(e,"x"))?i&&gm===i?t==="scale"?qb:Xb:(gm=i||{})&&(t==="scale"?jb:Yb):e.style&&!$l(e.style[t])?Gb:~t.indexOf("-")?Wb:th(e,t)},core:{_removeProperty:us,_getMatrix:wd}};Wn.utils.checkPrefix=Xa;Wn.core.getStyleSaver=Mm;(function(n,e,t,i){var r=Zn(n+","+e+","+t,function(a){Mr[a]=1});Zn(e,function(a){si.units[a]="deg",Dm[a]=1}),ur[r[13]]=n+","+e,Zn(i,function(a){var s=a.split(":");ur[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){si.units[n]="px"});Wn.registerPlugin(Ad);var nn=Wn.registerPlugin(Ad)||Wn,_T=nn.core.Tween;var M0=new W;function Di(n,e,t,i,r,a){let s=2*Math.PI*r/4,o=Math.max(a-2*r,0),c=Math.PI/4;M0.copy(e),M0[i]=0,M0.normalize();let u=.5*s/(s+o),m=1-M0.angleTo(n)/c;return Math.sign(M0[t])===1?m*u:o/(s+o)+u+u*(1-m)}var rh=class n extends Un{constructor(e=1,t=1,i=1,r=2,a=.1){let s=r*2+1;if(a=Math.min(e/2,t/2,i/2,a),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:a},s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new W,u=new W,m=new W(e,t,i).divideScalar(2).subScalar(a),E=this.attributes.position.array,y=this.attributes.normal.array,T=this.attributes.uv.array,v=E.length/6,R=new W,C=.5/s;for(let M=0,D=0;M<E.length;M+=3,D+=2)switch(c.fromArray(E,M),u.copy(c),u.x-=Math.sign(u.x)*C,u.y-=Math.sign(u.y)*C,u.z-=Math.sign(u.z)*C,u.normalize(),E[M+0]=m.x*Math.sign(c.x)+u.x*a,E[M+1]=m.y*Math.sign(c.y)+u.y*a,E[M+2]=m.z*Math.sign(c.z)+u.z*a,y[M+0]=u.x,y[M+1]=u.y,y[M+2]=u.z,Math.floor(M/v)){case 0:R.set(1,0,0),T[D+0]=Di(R,u,"z","y",a,i),T[D+1]=1-Di(R,u,"y","z",a,t);break;case 1:R.set(-1,0,0),T[D+0]=1-Di(R,u,"z","y",a,i),T[D+1]=1-Di(R,u,"y","z",a,t);break;case 2:R.set(0,1,0),T[D+0]=1-Di(R,u,"x","z",a,e),T[D+1]=Di(R,u,"z","x",a,i);break;case 3:R.set(0,-1,0),T[D+0]=1-Di(R,u,"x","z",a,e),T[D+1]=1-Di(R,u,"z","x",a,i);break;case 4:R.set(0,0,1),T[D+0]=1-Di(R,u,"x","y",a,e),T[D+1]=1-Di(R,u,"y","x",a,t);break;case 5:R.set(0,0,-1),T[D+0]=Di(R,u,"x","y",a,e),T[D+1]=1-Di(R,u,"y","x",a,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function bn(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var qa=new Map;function St(n,e,t,i=.015,r=2){i=Math.max(5e-4,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4));let a=`b${n.toFixed(4)}|${e.toFixed(4)}|${t.toFixed(4)}|${i.toFixed(4)}|${r}`;return qa.has(a)||qa.set(a,new rh(n,e,t,r,i)),qa.get(a)}function Om(n,e,t,i=24,r=!1){let a=`c${n}|${e}|${t}|${i}|${r}`;return qa.has(a)||qa.set(a,new ei(n,e,t,i,1,r)),qa.get(a)}var At=(n,e={})=>new Gt({color:n,roughness:.6,metalness:0,...e});function Fm(){return{inox:At("#C4CDD3",{metalness:.62,roughness:.3}),inoxCl:At("#D3DADF",{metalness:.55,roughness:.26}),inoxOsc:At("#8F9BA3",{metalness:.6,roughness:.38}),hierro:At("#3A4046",{metalness:.45,roughness:.5}),negro:At("#262C31",{roughness:.55}),goma:At("#30363B",{roughness:.85}),vidrioOsc:At("#1E2B35",{metalness:.3,roughness:.08}),vidrio:At("#CFE6F4",{metalness:.05,roughness:.04,transparent:!0,opacity:.22,depthWrite:!1}),aceite:At("#C98E33",{roughness:.1,metalness:.1}),blanco:At("#F3F6F8",{roughness:.45}),loza:At("#F7F8F6",{roughness:.3}),azul:At("#1D93D1",{roughness:.42}),azulOsc:At("#0B4F7C",{roughness:.55}),pantalla:At("#0D3550",{roughness:.2,emissive:"#1D93D1",emissiveIntensity:.55}),pared:At("#F2F5F7",{roughness:.92}),azulejo:At("#FBFCFC",{roughness:.28}),juntaPared:At("#D3DCE2",{roughness:.95}),baldosa:At("#D9DEE1",{roughness:.72}),juntaSuelo:At("#AAB5BC",{roughness:.95}),corte:At("#0B4F7C",{roughness:.7}),gris:At("#66737C",{roughness:.6}),tabla:At("#F1F1EA",{roughness:.7}),tomate:At("#DD4A31",{roughness:.35}),hoja:At("#7DB24A",{roughness:.6}),zanahoria:At("#EC8A2C",{roughness:.5}),carne:At("#6E4631",{roughness:.7}),pan:At("#E1B36F",{roughness:.75}),sopa:At("#D9A15A",{roughness:.2}),madera:At("#B98B5E",{roughness:.7}),uv:At("#BFE6FF",{emissive:"#5CC4FF",emissiveIntensity:1.2,roughness:.3})}}function Sn(n){let e=i=>(i.castShadow=!0,i.receiveShadow=!0,i),t=i=>i||n;return{caja(i,r,a,s,o,c,u,{r:m=.012,ry:E=0,rx:y=0,rz:T=0,padre:v,s:R=2}={}){let C=e(new $e(St(i,r,a,m,R),s));return C.position.set(o,c+r/2,u),C.rotation.set(y,E,T),t(v).add(C),C},cil(i,r,a,s,o,c,{rb:u=i,seg:m=24,rx:E=0,rz:y=0,ry:T=0,padre:v,abierto:R=!1}={}){let C=e(new $e(Om(i,u,r,m,R),a));return C.position.set(s,o+r/2,c),C.rotation.set(E,T,y),t(v).add(C),C},barra(i,r,a,s,{seg:o=12,padre:c}={}){let u=new W(...r),m=new W(...a),E=u.distanceTo(m),y=e(new $e(Om(i,i,E,o),s));return y.position.copy(u).add(m).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new W(0,1,0),m.clone().sub(u).normalize()),t(c).add(y),y},esfera(i,r,a,s,o,{sy:c=1,padre:u}={}){let m=e(new $e(new fi(i,20,14),r));return m.position.set(a,s,o),m.scale.y=c,t(u).add(m),m},toro(i,r,a,s,o,c,{rx:u=Math.PI/2,ry:m=0,arco:E=Math.PI*2,padre:y}={}){let T=e(new $e(new ir(i,r,8,28,E),a));return T.position.set(s,o,c),T.rotation.set(u,m,0),t(y).add(T),T},grupo(i,r){let a=new zt;return a.name=i||"",t(r).add(a),a}}}function Ve(n,e,t,i,r,{ry:a=0,padre:s,escala:o=1}={}){let c=n.grupo("garrafa",s);return c.position.set(t,i,r),c.rotation.y=a,c.scale.setScalar(o),n.caja(.19,.25,.13,e.blanco,0,0,0,{r:.03,padre:c,s:3}),n.caja(.07,.035,.11,e.blanco,-.05,.245,0,{r:.014,padre:c}),n.toro(.035,.011,e.blanco,.035,.25,0,{rx:0,arco:Math.PI,padre:c}),n.cil(.022,.03,e.blanco,-.05,.27,0,{padre:c}),n.cil(.026,.028,e.azul,-.05,.295,0,{padre:c,seg:18}),n.caja(.15,.13,.004,e.azul,0,.055,.066,{r:.002,padre:c}),n.caja(.11,.035,.004,e.blanco,0,.12,.068,{r:.002,padre:c}),c}function It(n,e,t,i,r,{ry:a=0,padre:s,cuerpo:o}={}){let c=n.grupo("pulverizador",s);return c.position.set(t,i,r),c.rotation.y=a,n.cil(.04,.17,o||e.blanco,0,0,0,{rb:.045,padre:c,seg:20}),n.cil(.018,.03,e.blanco,0,.17,0,{padre:c,seg:12}),n.caja(.035,.045,.1,e.azul,0,.19,.025,{r:.012,padre:c}),n.caja(.016,.05,.022,e.azul,0,.15,.05,{r:.007,padre:c,rx:.25}),n.caja(.08,.06,.004,e.azul,0,.05,.043,{r:.002,padre:c}),c}var dr=2.85,$t=.16,at=.9;function Nm(n){let e=new zt,t=Sn(e),i=bn(7),r={},a=(D,O={})=>{let p=t.grupo(D);return r[D]={grupo:p,...O},p};t.caja(6+$t+.04,.24,5+$t+.04,n.corte,-$t/2,-.25,-$t/2,{r:.03}),t.caja(6,.012,5,n.juntaSuelo,0,-.012,0,{r:.002});{let O=[15,12.5],p=St(.4-.012,.014,.4-.012,.004,1),x=new ut(p,n.baldosa,195),w=new Le,A=new Be,b=0;for(let P=0;P<15;P++)for(let h=0;h<13;h++){let l=-2.8+P*.4,d=-2.5+.4/2+h*.4;if(d>2.5)continue;w.makeTranslation(l,.003,d),x.setMatrixAt(b,w);let _=.97+i()*.05;x.setColorAt(b,A.set("#D9DEE1").multiplyScalar(_)),b++}x.count=b,x.receiveShadow=!0,e.add(x)}let s=-2.45,o=-1.45,c=1.62,u=2.45,m=-2.5-$t/2,E=(D,O,p,x,w,A)=>t.caja(D,O,p,n.pared,x,w,A,{r:.002,s:1});E(s-(-3-$t),dr,$t,(-3-$t+s)/2,0,m),E(3-o,dr,$t,(o+3)/2,0,m),E(o-s,c,$t,(s+o)/2,0,m),E(o-s,dr-u,$t,(s+o)/2,u,m),E($t,dr,5,-3-$t/2,0,0),t.caja(6+$t,.025,$t,n.corte,(0-$t)/2,dr,m,{r:.004}),t.caja($t,.025,5,n.corte,-3-$t/2,dr,0,{r:.004}),t.caja(.012,dr,$t,n.corte,3.006,0,m,{r:.002}),t.caja($t,dr,.012,n.corte,-3-$t/2,0,2.506,{r:.002});{let x=St(.194,.094,.012,.004,1),w=new ut(x,n.azulejo,990),A=new Le,b=new Le().makeRotationY(Math.PI/2),P=0;for(let h=0;h<1.5/.1;h++){let l=.05+h*.1,d=h%2?.2/2:0;for(let _=-3+.2/2-d;_<3;_+=.2)_<-3+.05||(A.makeTranslation(_,l,-2.5+.006),w.setMatrixAt(P++,A));for(let _=-2.5+.2/2-d;_<2.5;_+=.2)_<-2.5+.05||(A.copy(b).setPosition(-3+.006,l,_),w.setMatrixAt(P++,A))}w.count=P,w.receiveShadow=!0,e.add(w),t.caja(6,1.5,.004,n.juntaPared,0,0,-2.5+.002,{r:.001,s:1}),t.caja(.004,1.5,5,n.juntaPared,-3+.002,0,0,{r:.001,s:1}),t.caja(6,.018,.02,n.inoxCl,0,1.5,-2.5+.01,{r:.005}),t.caja(.02,.018,5,n.inoxCl,-3+.01,1.5,0,{r:.005})}let y=(D,O,{padre:p,puertas:x=2,alto:w=.86,fondo:A=.8,encimera:b=!0}={})=>{let P=O-D,h=(D+O)/2,l=-2.5,d=l+A/2;t.caja(P-.01,w-.12,A-.04,n.inox,h,.12,d-.01,{padre:p,r:.01}),b&&t.caja(P,.04,A,n.inoxCl,h,w,d,{padre:p,r:.01});for(let[g,f]of[[D+.05,l+.06],[O-.05,l+.06],[D+.05,l+A-.08],[O-.05,l+A-.08]])t.cil(.022,.12,n.inoxOsc,g,0,f,{padre:p,seg:12});let _=l+A-.03;for(let g=0;g<x;g++){let f=(P-.06)/x,S=D+.03+f*(g+.5);t.caja(f-.012,w-.22,.014,n.inoxCl,S,.16,_,{padre:p,r:.004}),t.barra(.009,[S-f*.28,w-.12,_+.03],[S+f*.28,w-.12,_+.03],n.inoxOsc,{padre:p})}},T=(D,O,p,x)=>D.forEach(w=>{t.cil(.022,.03,n.negro,w,O,p,{rx:Math.PI/2,padre:x,seg:16}),t.caja(.006,.026,.008,n.blanco,w,O+.001-.013+.01,p+.018,{padre:x,r:.002})}),v=(D,O,p,x,{padre:w,balda:A=!0,peto:b=null}={})=>{let P=O-D,h=x-p,l=(D+O)/2,d=(p+x)/2;t.caja(P,.04,h,n.inoxCl,l,at-.04,d,{padre:w,r:.012}),t.caja(P-.04,.06,h-.04,n.inox,l,at-.1,d,{padre:w,r:.008});let _=P>1.6?[D+.06,l,O-.06]:[D+.06,O-.06];for(let g of _)for(let f of[p+.06,x-.06])t.caja(.04,at-.1,.04,n.inox,g,0,f,{padre:w,r:.008}),t.cil(.026,.02,n.goma,g,0,f,{padre:w,seg:12});A&&t.caja(P-.06,.025,h-.06,n.inox,l,.2,d,{padre:w,r:.008}),b==="fondo"&&t.caja(P,.12,.02,n.inoxCl,l,at-.005,p+.01,{padre:w,r:.006}),b==="izq"&&t.caja(.02,.12,h,n.inoxCl,D+.01,at-.005,d,{padre:w,r:.006})},R=(D,O,p,x,w=.12,A)=>{for(let b=0;b<D;b++)t.cil(w-(b===D-1?0:.002),.012,n.loza,O,p+b*.014,x,{padre:A,rb:w-.025,seg:28})},C=(D,O,p,x,w=n.inoxCl,A)=>t.cil(x,x*.55,w,D,O,p,{rb:x*.55,padre:A,seg:24,abierto:!1}),M=(D,O,p,x,w,A,b)=>{t.caja(D,O,p,n.inoxCl,x,w,A,{padre:b,r:.01}),t.caja(D+.02,.008,p+.02,n.inoxCl,x,w+O-.006,A,{padre:b,r:.003})};v(-2.25,-1.05,-2.5,-1.75,{peto:"fondo"}),Ve(t,n,-2,.225,-2.12,{ry:.15}),Ve(t,n,-1.75,.225,-2.1,{ry:-.1}),Ve(t,n,-1.38,.225,-2.12,{ry:.05}),C(-1.95,at,-2.1,.14),C(-1.95,at+.06,-2.1,.12),M(.32,.1,.26,-1.48,at,-2.12),t.caja(.3,.012,.24,n.inoxOsc,-1.48,at+.1,-2.12,{r:.004});{let D=a("cristales",{frente:[0,0,1],alto:.15,lado:.3,zoom:1.1}),O=-2.5-$t/2,p=o-s,x=u-c,w=(s+o)/2;t.caja(p,.03,$t+.08,n.inoxCl,w,c-.03,O+.04,{padre:D,r:.008});for(let[A,b,P,h]of[[p,.05,w,c],[p,.05,w,u-.05],[.05,x,s+.025,c],[.05,x,o-.025,c],[.035,x,w,c]])t.caja(A,b,.07,n.blanco,P,h,O,{padre:D,r:.008});t.caja(p-.08,x-.08,.012,n.vidrio,w,c+.04,O,{padre:D,r:.003}),t.caja(.012,.11,.02,n.gris,s+.42,c+.32,O+.04,{padre:D,r:.004})}{let D=a("horno",{frente:[0,0,1],alto:.3,lado:.15,zoom:1}),O=-.97,p=-.07,x=(O+p)/2,w=-2.48,A=-1.76;for(let l of[O+.04,p-.04])for(let d of[w+.04,A-.04])t.caja(.04,.7,.04,n.inox,l,0,d,{padre:D,r:.008});t.caja(p-O,.025,A-w,n.inox,x,.12,(w+A)/2,{padre:D,r:.006});for(let l=0;l<4;l++)t.caja(.6,.012,.42,n.inoxCl,x,.36+l*.075,-2.1,{padre:D,r:.004});M(.5,.1,.32,x,.145,-2.12,D),t.caja(p-O,.03,A-w,n.inox,x,.67,(w+A)/2,{padre:D,r:.008});let b=.7,P=.84,h=A+.01;t.caja(p-O,P,A-w,n.inox,x,b,(w+A)/2,{padre:D,r:.025,s:3}),t.caja(.6,.66,.03,n.inoxCl,O+.34,b+.09,h,{padre:D,r:.02}),t.caja(.5,.54,.012,n.vidrioOsc,O+.34,b+.15,h+.018,{padre:D,r:.012}),t.barra(.014,[O+.6,b+.22,h+.06],[O+.6,b+.62,h+.06],n.inoxOsc,{padre:D});for(let l of[b+.22,b+.62])t.barra(.01,[O+.6,l,h+.015],[O+.6,l,h+.06],n.inoxOsc,{padre:D});t.caja(.2,.74,.02,n.inoxOsc,p-.12,b+.05,h,{padre:D,r:.01}),t.caja(.13,.17,.012,n.pantalla,p-.12,b+.53,h+.012,{padre:D,r:.008}),t.cil(.038,.03,n.negro,p-.12,b+.36,h+.012,{rx:Math.PI/2,padre:D,seg:20});for(let l=0;l<3;l++)t.cil(.012,.012,n.blanco,p-.16+l*.04,b+.24,h+.008,{rx:Math.PI/2,padre:D,seg:10});t.caja(.16,.02,.1,n.inoxOsc,x-.15,b+P,w+.12,{padre:D,r:.006});for(let l of[O+.05,p-.05])t.cil(.02,.03,n.goma,l,b-.005,h-.05,{padre:D,seg:10})}{let D=a("plancha",{frente:[0,.2,1],alto:.55,lado:.1,zoom:.95}),O=-.05,p=.77,x=(O+p)/2;y(O,p,{padre:D,encimera:!1}),t.caja(p-O,.1,.8,n.inoxCl,x,.82,-2.1,{padre:D,r:.012}),t.caja(p-O-.02,.07,.02,n.inox,x,.835,-1.7,{padre:D,r:.006}),T([x-.22,x+.22],.87,-1.69,D),t.caja(.72,.028,.6,n.hierro,x,.92,-2.16,{padre:D,r:.006}),t.caja(.7,.012,.06,n.negro,x,.915,-1.79,{padre:D,r:.004}),t.caja(.76,.12,.02,n.inoxCl,x,.92,-2.47,{padre:D,r:.006});for(let w of[O+.01,p-.01])t.caja(.02,.12,.62,n.inoxCl,w,.92,-2.17,{padre:D,r:.006});for(let[w,A]of[[x-.18,-2.25],[x-.04,-2.08],[x-.2,-1.98]])t.cil(.055,.02,n.carne,w,.948,A,{padre:D,seg:20});for(let[w,A]of[[x+.16,-2.24],[x+.2,-2.04]])t.cil(.06,.018,n.pan,w,.948,A,{padre:D,seg:20});t.caja(.11,.004,.09,n.inoxCl,x+.03,.952,-1.94,{padre:D,r:.002,ry:.4}),t.caja(.025,.018,.14,n.negro,x+.09,.952,-1.84,{padre:D,r:.006,ry:.4})}{let D=a("freidora",{frente:[0,.3,1],alto:.6,lado:.12,zoom:.85}),O=.77,p=1.33,x=(O+p)/2;y(O,p,{padre:D,puertas:1,encimera:!1}),t.caja(p-O,.06,.8,n.inoxCl,x,.86,-2.1,{padre:D,r:.012}),T([x-.12,x+.12],.8,-1.69,D);for(let w of[x-.125,x+.125]){t.caja(.2,.006,.4,n.aceite,w,.915,-2.08,{padre:D,r:.003});for(let[b,P,h,l]of[[.22,.014,0,-.205],[.22,.014,0,.205],[.014,.42,-.107,0],[.014,.42,.107,0]])t.caja(b,.016,P,n.inox,w+h,.91,-2.08+l,{padre:D,r:.004});let A=t.grupo("cesta",D);A.position.set(w,1.02,-2.17),A.rotation.x=.35,t.caja(.17,.006,.2,n.inoxOsc,0,0,0,{padre:A,r:.002});for(let[b,P,h,l]of[[.17,.006,0,-.1],[.17,.006,0,.1],[.006,.2,-.085,0],[.006,.2,.085,0]])t.caja(b,.1,P,n.inoxOsc,h,0,l,{padre:A,r:.002});for(let b=1;b<5;b++)t.caja(.17,.004,.004,n.inoxOsc,0,.1*b/5,.1,{padre:A,r:.001});t.barra(.008,[0,.08,.1],[0,.2,.3],n.inoxOsc,{padre:A}),t.barra(.016,[0,.19,.28],[0,.24,.37],n.negro,{padre:A})}t.barra(.01,[O+.03,1.12,-2.36],[p-.03,1.12,-2.36],n.inoxOsc,{padre:D}),t.caja(.4,.2,.08,n.inox,x,.88,-2.45,{padre:D,r:.01}),t.caja(.36,.01,.05,n.negro,x,1.075,-2.45,{padre:D,r:.003})}{y(1.33,2.15,{encimera:!1}),t.caja(2.15-1.33,.06,.8,n.inoxCl,1.74,.86,-2.1,{r:.012}),T([1.74-.27,1.74-.09,1.74+.09,1.74+.27],.8,-1.69);for(let A of[-.2,.2])for(let b of[-.2,.15]){let P=1.74+A,h=-2.1+b;t.cil(.065,.02,n.hierro,P,.915,h,{seg:20}),t.toro(.075,.008,n.negro,P,.935,h),t.caja(.34,.016,.016,n.negro,P,.935,h,{r:.004}),t.caja(.016,.016,.34,n.negro,P,.935,h,{r:.004})}let x=1.74-.2,w=-2.3;t.cil(.17,.26,n.inoxCl,x,.95,w,{seg:32,abierto:!0}),t.cil(.165,.01,n.inox,x,.95,w,{seg:32}),t.cil(.162,.01,n.sopa,x,1.16,w,{seg:32}),t.toro(.17,.008,n.inoxCl,x,1.21,w);for(let A of[-1,1])t.caja(.06,.02,.03,n.inoxOsc,x+A*.19,1.15,w,{r:.008});t.cil(.13,.05,n.negro,1.74+.2,.95,-1.95,{rb:.11,seg:28}),t.cil(.11,.004,n.hierro,1.74+.2,.996,-1.95,{seg:28}),t.caja(.26,.022,.03,n.negro,1.74+.39,.98,-1.84,{r:.01,ry:-.6})}{t.caja(3-2.15,at-.1,.78,n.inox,2.575,.1,-2.11,{r:.012}),t.caja(3-2.15,.04,.8,n.inoxCl,2.575,at-.04,-2.1,{r:.01});for(let x=0;x<2;x++){let w=.15+x*.33;t.caja(3-2.15-.06,.3,.02,n.inoxCl,2.575,w,-1.71,{r:.008}),t.barra(.009,[2.575-.25,w+.25,-1.68],[2.575+.25,w+.25,-1.68],n.inoxOsc)}t.caja(3-2.15,.08,.04,n.goma,2.575,.02,-1.75,{r:.01}),t.cil(.06,.16,n.inoxCl,2.575-.2,at,-2.25,{seg:20});for(let[x,w]of[[.02,.05],[-.02,-.03],[0,.02]])t.barra(.006,[2.575-.2+x,at+.12,-2.25+w],[2.575-.2+x*3,at+.34,-2.25+w*3],n.negro);M(.26,.08,.2,2.575+.12,at,-2.2),It(t,n,2.575-.02,at,-1.92,{ry:-.3})}{let D=a("campana",{frente:[0,0,1],alto:.12,lado:.15,zoom:.78,mira:[0,-.25,0]}),O=new Mn;O.moveTo(0,0),O.lineTo(1.08,0),O.lineTo(1.08,.16),O.lineTo(.72,.55),O.lineTo(0,.55),O.closePath();let p=new Bn(O,{depth:3.2,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2}),x=new $e(p,n.inox);x.castShadow=x.receiveShadow=!0,x.rotation.y=-Math.PI/2,x.position.set(2.15,2.02,-2.5),D.add(x),t.caja(3.18,.012,.012,n.inoxOsc,.55,2.11,-1.4,{padre:D,r:.004}),t.caja(.22,.08,.02,n.inoxOsc,1.85,2.06,-1.41,{padre:D,r:.006});for(let w=0;w<3;w++)t.cil(.012,.012,w?n.blanco:n.azul,1.78+w*.07,2.1,-1.395,{rx:Math.PI/2,padre:D,seg:10});for(let w=0;w<6;w++)t.caja(.46,.012,.36,n.inoxOsc,-.75+w*.5,2,-1.75,{padre:D,r:.004});t.caja(.55,dr-2.57,.34,n.inox,.6,2.57,-2.31,{padre:D,r:.01}),t.caja(.55,.025,.34,n.corte,.6,dr,-2.31,{padre:D,r:.004})}{let D=a("fregadero",{frente:[1,0,0],alto:.75,lado:1.1,zoom:.95}),O=-3,p=-2.25,x=-2.5,w=-1.3;for(let _ of[O+.06,p-.06])for(let g of[x+.06,w-.06])t.caja(.04,at-.04,.04,n.inox,_,0,g,{padre:D,r:.008});t.caja(p-O-.06,.025,w-x-.06,n.inox,(O+p)/2,.2,(x+w)/2,{padre:D,r:.008}),Ve(t,n,-2.6,.225,-2.15,{ry:Math.PI/2,padre:D}),t.cil(.13,.26,n.azul,-2.62,.225,-1.62,{rb:.11,padre:D,seg:24});let A=-2.82,b=-2.38,P=[[-2.39,-1.95],[-1.85,-1.41]],h=at-.04;t.caja(A-O,.04,w-x,n.inoxCl,(O+A)/2,h,(x+w)/2,{padre:D,r:.006}),t.caja(p-b,.04,w-x,n.inoxCl,(b+p)/2,h,(x+w)/2,{padre:D,r:.006});for(let[_,g]of[[x,P[0][0]],[P[0][1],P[1][0]],[P[1][1],w]])t.caja(b-A,.04,g-_,n.inoxCl,(A+b)/2,h,(_+g)/2,{padre:D,r:.006});for(let[_,g]of P){let f=(_+g)/2,S=b-A,I=g-_,L=at-.26;t.caja(S,.012,I,n.inoxOsc,(A+b)/2,L,f,{padre:D,r:.004}),t.caja(S,.24,.01,n.inox,(A+b)/2,L,_+.005,{padre:D,r:.003}),t.caja(S,.24,.01,n.inox,(A+b)/2,L,g-.005,{padre:D,r:.003}),t.caja(.01,.24,I,n.inox,A+.005,L,f,{padre:D,r:.003}),t.caja(.01,.24,I,n.inox,b-.005,L,f,{padre:D,r:.003}),t.cil(.03,.006,n.hierro,(A+b)/2,L+.012,f,{padre:D,seg:16})}t.cil(.14,.16,n.inoxCl,-2.6,at-.25,-2.17,{seg:28,abierto:!0,padre:D}),t.cil(.135,.008,n.inox,-2.6,at-.25,-2.17,{seg:28,padre:D}),t.caja(.32,.02,.24,n.inoxCl,-2.6,at-.22,-1.63,{padre:D,r:.006,rx:.5}),t.caja(.02,.15,w-x,n.inoxCl,O+.01,at-.005,(x+w)/2,{padre:D,r:.006});let l=-2.93,d=-1.9;t.cil(.016,.85,n.inoxCl,l,at,d,{padre:D,seg:14}),t.barra(.014,[l,1.74,d],[l+.24,1.74,d],n.inoxCl,{padre:D}),t.caja(.04,.05,.05,n.inoxCl,l-.02,1.4,d,{padre:D,r:.01});for(let _=0;_<9;_++)t.toro(.028,.006,n.inoxCl,l+.24,1.72-_*.032,d,{rx:Math.PI/2,padre:D});t.barra(.008,[l+.24,1.43,d],[l+.24,1.3,d],n.inoxCl,{padre:D}),t.cil(.02,.13,n.inoxOsc,l+.24,1.17,d,{padre:D,seg:14}),t.cil(.026,.03,n.azul,l+.24,1.17,d,{padre:D,seg:14}),t.barra(.012,[l,1.08,d],[l+.18,1.08,d+.02],n.inoxCl,{padre:D}),It(t,n,-2.32,at,-1.37,{ry:-1.2,padre:D})}{let D=a("lavavajillas",{frente:[1,0,0],alto:.4,lado:.35,zoom:.95}),O=-2.98,p=-2.32,x=-1.28,w=-.66,A=(x+w)/2,b=(O+p)/2;t.caja(p-O,.76,w-x,n.inox,b,.1,A,{padre:D,r:.012}),t.caja(.014,.6,w-x-.06,n.inoxCl,p+.004,.16,A,{padre:D,r:.004});for(let P of[x+.06,w-.06])for(let h of[O+.06,p-.06])t.cil(.022,.1,n.inoxOsc,h,0,P,{padre:D,seg:10});t.caja(p-O+.02,.03,w-x+.02,n.inoxCl,b,.86,A,{padre:D,r:.008}),t.caja(p-O,.66,w-x,n.inoxCl,b,.89,A,{padre:D,r:.02,s:3});for(let P of[x+.16,A,w-.16])t.caja(.006,.6,.01,n.inox,p+.002,.92,P,{padre:D,r:.002});t.barra(.014,[p+.06,1.47,x+.06],[p+.06,1.47,w-.06],n.inoxOsc,{padre:D});for(let P of[x+.06,w-.06])t.barra(.01,[p,1.47,P],[p+.06,1.47,P],n.inoxOsc,{padre:D});t.caja(.28,.12,.2,n.inox,O+.16,1.55,A,{padre:D,r:.02}),t.caja(.012,.06,.1,n.pantalla,O+.3,1.58,A,{padre:D,r:.004}),t.cil(.014,.02,n.azul,O+.3,1.58,A+.07,{rz:Math.PI/2,padre:D,seg:10}),Ve(t,n,-2.72,0,-.52,{ry:Math.PI/2,padre:D,escala:1.15}),t.barra(.006,[-2.72,.33,-.52],[-2.86,.33,-.7],n.azul,{padre:D}),t.barra(.006,[-2.86,.33,-.7],[-2.9,.35,-.78],n.azul,{padre:D})}{v(-3,-2.25,-.64,.42,{peto:"izq"});let D=-2.62,O=-.32;t.caja(.5,.008,.5,n.inoxOsc,D,at,O,{r:.003});for(let[p,x,w,A]of[[.5,.008,0,-.25],[.5,.008,0,.25],[.008,.5,-.25,0],[.008,.5,.25,0]])t.caja(p,.08,x,n.inoxOsc,D+w,at,O+A,{r:.002});for(let p=0;p<8;p++)t.cil(.11,.01,n.loza,D,at+.12,O-.19+p*.054,{rx:Math.PI/2,seg:28});R(9,-2.6,at,.16,.12);for(let p=0;p<6;p++){let x=-2.82+p%3*.09,w=.08+Math.floor(p/3)*.09;t.cil(.032,.11,n.vidrio,x,at,w,{rb:.026,seg:16,abierto:!0})}t.caja(.32,.03,2.7,n.inoxCl,-2.84,1.78,-1.05,{r:.008});for(let p of[-2.2,-1.05,.1])t.caja(.26,.12,.02,n.inox,-2.86,1.66,p,{r:.006});R(7,-2.83,1.81,-2.15,.12),R(5,-2.83,1.81,-1.86,.1);for(let p=0;p<4;p++)C(-2.83,1.81+p*.04,-1.5,.1,n.loza);for(let p=0;p<8;p++)t.cil(.03,.1,n.vidrio,-2.9+p%2*.08,1.81,-1.15+Math.floor(p/2)*.08,{rb:.024,seg:14,abierto:!0});M(.26,.12,.3,-2.84,1.81,-.62),M(.26,.12,.3,-2.84,1.81,-.25),t.barra(.008,[-2.97,1.42,-.55],[-2.97,1.42,.35],n.inoxCl);for(let p=0;p<5;p++){let x=-.45+p*.18;t.barra(.006,[-2.95,1.42,x],[-2.95,1.13,x],p%2?n.negro:n.inoxCl),p%2?t.caja(.02,.1,.07,n.negro,-2.95,1.04,x,{r:.008}):t.esfera(.045,n.inoxCl,-2.93,1.11,x,{sy:.6})}}{t.caja(.36,.2,.42,n.inoxCl,-2.82,.7,1,{r:.02}),t.caja(.32,.03,.36,n.inoxOsc,-2.82,.88,1,{r:.01}),t.barra(.012,[-2.98,1.05,1],[-2.84,1.05,1],n.inoxCl),t.barra(.01,[-2.84,1.05,1],[-2.84,.98,1],n.inoxCl),t.caja(.06,.3,.22,n.inox,-2.97,.36,1,{r:.01}),t.caja(.1,.2,.12,n.blanco,-2.95,1.2,1-.2,{r:.02}),t.caja(.004,.06,.06,n.azul,-2.9,1.3,1-.2,{r:.002}),t.caja(.12,.3,.3,n.blanco,-2.94,1.15,1+.17,{r:.025}),t.caja(.004,.08,.2,n.azul,-2.88,1.36,1+.17,{r:.002}),t.caja(.004,.03,.14,n.blanco,-2.875,1.17,1+.17,{r:.002});let O=a("aire",{frente:[1,0,0],alto:.05,lado:.5,zoom:1.1}),p=1.9,x=2.12;t.caja(.09,.24,.13,n.blanco,-2.955,x,p,{padre:O,r:.02}),t.caja(.004,.09,.08,n.azul,-2.908,x+.06,p,{padre:O,r:.002}),t.cil(.006,.006,n.pantalla,-2.906,x+.03,p,{rz:Math.PI/2,padre:O,seg:10}),t.cil(.012,.02,n.gris,-2.93,x+.24,p,{padre:O,seg:10});let w=1.35,A=2.12,b=-3;t.caja(.07,.26,.56,n.blanco,b+.035,A,w,{padre:O,r:.02});for(let P of[-.27,.27])t.caja(.13,.26,.03,n.blanco,b+.065,A,w+P,{padre:O,r:.01});for(let P=0;P<2;P++)t.cil(.017,.5,n.uv,b+.09,A+.08+P*.09,w,{rx:Math.PI/2,padre:O,seg:12});for(let P=0;P<9;P++)t.caja(.008,.24,.008,n.gris,b+.125,A+.01,w-.24+P*.06,{padre:O,r:.002});t.caja(.14,.03,.56,n.gris,b+.07,A-.02,w,{padre:O,r:.006})}{let D=a("mesa",{frente:[.15,.2,1],alto:.75,lado:.2,zoom:.85});v(-.35,1.75,-.55,.25,{padre:D}),M(.5,.06,.3,.15,.225,-.15,D),M(.5,.06,.3,.15,.29,-.15,D),Ve(t,n,1.15,.225,-.2,{padre:D,ry:-.2}),Ve(t,n,1.4,.225,-.25,{padre:D,ry:.15}),t.caja(.5,.025,.34,n.tabla,.25,at,-.12,{padre:D,r:.008}),t.caja(.2,.004,.035,n.inoxCl,.3,at+.026,-.02,{padre:D,r:.002,ry:.35}),t.caja(.11,.02,.024,n.negro,.43,at+.026,-.065,{padre:D,r:.008,ry:.35});for(let[A,b,P]of[[.1,-.2,.045],[.19,-.24,.04],[.06,-.08,.042]])t.esfera(P,n.tomate,A,at+.025+P*.85,b,{padre:D,sy:.85}),t.cil(.008,.012,n.hoja,A,at+.025+P*1.6,b,{padre:D,seg:6});for(let[A,b]of[[.2,-.13],[.24,-.11],[.28,-.14]])t.cil(.03,.008,n.tomate,A,at+.026,b,{padre:D,seg:16});for(let[A,b,P]of[[0,0,.09],[.06,.03,.07],[-.05,.04,.075],[.02,-.05,.07]])t.esfera(P,n.hoja,-.12+A,at+P*.75,-.25+b,{padre:D,sy:.75});C(.75,at,-.25,.13,n.inoxCl,D),t.cil(.11,.01,n.sopa,.75,at+.06,-.25,{padre:D,seg:24}),M(.3,.07,.24,1.05,at,-.2,D);for(let A=0;A<7;A++)t.barra(.014,[.95+A*.03,at+.075,-.28],[.96+A*.03,at+.075,-.12],n.zanahoria,{padre:D,seg:8});It(t,n,1.4,at,-.05,{padre:D,ry:-.5}),R(4,1.55,at,-.3,.12,D)}{let D=a("suelo",{frente:[.2,0,1],alto:.7,lado:.4,zoom:1.3,marco:"carro"}),O=-1.48,p=-.95,x=2.1;t.caja(x-p,.006,.16,n.hierro,(p+x)/2,.012,O,{padre:D,r:.002});{let A=Math.round((x-p)/.03),b=new ut(St(.012,.012,.14,.003,1),n.inoxCl,A),P=new Le;for(let h=0;h<A;h++)P.makeTranslation(p+.015+h*.03,.022,O),b.setMatrixAt(h,P);b.castShadow=b.receiveShadow=!0,D.add(b)}for(let A of[-.08,.08])t.caja(x-p,.016,.014,n.inoxCl,(p+x)/2,.012,O+A,{padre:D,r:.004});t.cil(.12,.012,n.inoxCl,-1.7,.012,-.9,{padre:D,seg:28});for(let A=-3;A<=3;A++)t.caja(.18-Math.abs(A)*.02,.008,.012,n.hierro,-1.7,.02,-.9+A*.026,{padre:D,r:.002});let w=t.grupo("carro",D);w.position.set(-1.45,0,1.25),w.rotation.y=.5,t.caja(.74,.04,.42,n.gris,0,.06,0,{padre:w,r:.015});for(let[A,b]of[[-.32,-.17],[.32,-.17],[-.32,.17],[.32,.17]])t.cil(.03,.025,n.goma,A,.012,b,{rz:Math.PI/2,padre:w,seg:14}),t.caja(.03,.04,.03,n.gris,A,.03,b,{padre:w,r:.006});t.caja(.34,.3,.38,n.azul,-.18,.1,0,{padre:w,r:.04,s:3}),t.caja(.28,.27,.34,n.azulOsc,.19,.1,0,{padre:w,r:.04,s:3}),t.caja(.3,.01,.34,n.aceite,-.18,.38,0,{padre:w,r:.004}).material=n.vidrio,t.caja(.22,.16,.3,n.gris,-.18,.4,0,{padre:w,r:.03}),t.barra(.014,[-.1,.56,0],[.12,.95,0],n.gris,{padre:w}),t.cil(.022,.08,n.negro,.12,.92,0,{padre:w,seg:12,rz:-.5}),t.barra(.013,[-.18,.45,.02],[-.06,1.45,-.18],n.azul,{padre:w});for(let A=0;A<10;A++){let b=A/10*Math.PI*2;t.barra(.012,[-.18,.47,.02],[-.18+Math.cos(b)*.06,.38,.02+Math.sin(b)*.06],n.blanco,{padre:w,seg:6})}Ve(t,n,-.95,0,1.55,{padre:D,ry:-.6})}{let D=a("cubo",{frente:[.3,.2,1],alto:.5,lado:.15,zoom:1.4}),O=2.35,p=.85;t.caja(.46,.72,.52,n.azulOsc,O,.06,p,{padre:D,r:.05,s:3}),t.caja(.5,.05,.56,n.negro,O,.8,p+.01,{padre:D,r:.02}),t.caja(.52,.045,.6,n.azulOsc,O,.835,p+.01,{padre:D,r:.02}),t.caja(.4,.035,.04,n.gris,O,.82,p+.32,{padre:D,r:.012});for(let x of[O-.2,O+.2])t.cil(.06,.04,n.goma,x,.06,p-.24,{rz:Math.PI/2,padre:D,seg:18});t.caja(.2,.025,.08,n.gris,O,.03,p+.29,{padre:D,r:.008}),t.caja(.3,.018,.004,n.blanco,O,.6,p+.262,{padre:D,r:.002})}return{raiz:e,puntos:r}}var Rr=6.5,fr=5,fs=2.85,Jt=.16,zi=-Rr/2,R0=Rr/2,Li=-fr/2,Cd=fr/2,s3=.25,Um=.3,a3=.016;function o3(n){let e=new zt,t=Sn(e),i=bn(31),r={},a=(_,g={})=>{let f=t.grupo(_);return r[_]={grupo:f,...g},f},s=(_,g={})=>new Gt({color:_,roughness:.6,metalness:0,...g}),o={pintura:s("#B3262E",{roughness:.26,metalness:.35}),pinturaOsc:s("#7E1A20",{roughness:.4,metalness:.25}),faro:s("#EFF3F5",{roughness:.15,emissive:"#FFFFFF",emissiveIntensity:.12}),piloto:s("#C4161C",{roughness:.2,emissive:"#C4161C",emissiveIntensity:.25}),neum:s("#1F2428",{roughness:.9}),amarillo:s("#E5B422",{roughness:.4}),refrig:s("#E2557A",{roughness:.2}),tapiz:s("#39424A",{roughness:.85}),tapizCl:s("#8C98A1",{roughness:.85}),alfombra:s("#2B3035",{roughness:.95}),consola:s("#4A545B",{roughness:.5}),aislante:s("#A9B1B6",{roughness:.95}),insecto:s("#3C2E22",{roughness:.8}),espuma:s("#FFFFFF",{roughness:.95}),hormigon:s("#BCC3C6",{roughness:.92}),hormigonOsc:s("#9AA3A8",{roughness:.95}),mancha:s("#3B342E",{roughness:.1,metalness:.3}),luna:s("#5B7A8E",{metalness:.35,roughness:.12}),saco:s("#D8C7A0",{roughness:.9}),grano:s("#C9B88E",{roughness:.95}),dado:s("#A9BFCD",{roughness:.6}),rojoExt:s("#C9261E",{roughness:.4}),caucho:s("#262B30",{roughness:.92}),cono:s("#E8641C",{roughness:.55}),carton:s("#B88E5E",{roughness:.85}),papel:s("#F4F1E8",{roughness:.9}),sponge:s("#E5C84A",{roughness:.95}),charco:s("#CFE6F4",{metalness:.2,roughness:.04,transparent:!0,opacity:.35,depthWrite:!1})},c=(_,g,f,S,I,L,z,F={})=>t.caja(_,g,f,S,I,L-g/2,z,F),u=(_,g,f,S,I,L,z={})=>t.cil(_,g,f,S,I-g/2,L,{rx:Math.PI/2,...z}),m=(_,g,f,S,I,L,z={})=>t.cil(_,g,f,S,I-g/2,L,{rz:Math.PI/2,...z}),E=(_,g,f,{padre:S,x:I=0,y:L=0,z=0,bisel:F=0}={})=>{let N=new Mn;_.forEach(([X,Z],se)=>se?N.lineTo(X,Z):N.moveTo(X,Z)),N.closePath();let B=new Bn(N,{depth:g,bevelEnabled:F>0,bevelThickness:F,bevelSize:F,bevelSegments:2,curveSegments:1});B.translate(0,0,-g/2);let V=new $e(B,f);return V.castShadow=V.receiveShadow=!0,V.position.set(I,L,z),(S||e).add(V),V},y=(_,g,f,S)=>{let I=new ut(_,g,f.length);return f.forEach((L,z)=>I.setMatrixAt(z,L)),I.castShadow=I.receiveShadow=!0,(S||e).add(I),I},T=new W,v=new W,R=new fn,C=new Nn,M=(_,g,f,S,I,L,z=0)=>(T.set(_,g,f),v.set(S,I,L),R.setFromEuler(C.set(0,z,0)),new Le().compose(T,R,v));t.caja(Rr+Jt+.04,.24,fr+Jt+.04,n.corte,-Jt/2,-.25,-Jt/2,{r:.03}),t.caja(Rr,.012,fr,n.juntaSuelo,0,-.012,0,{r:.002});{let f=Rr/6,S=fr/5,I=St(f-.016,.014,S-.016,.004,1),L=new ut(I,o.hormigon,30),z=new Le,F=new Be,N=0;for(let B=0;B<6;B++)for(let V=0;V<5;V++)z.makeTranslation(zi+f/2+B*f,.003,Li+S/2+V*S),L.setMatrixAt(N,z),L.setColorAt(N,F.set("#FFFFFF").multiplyScalar(.93+i()*.09)),N++;L.receiveShadow=!0,e.add(L),t.caja(Rr-.3,.004,.07,o.amarillo,0,.016,Cd-.18,{r:.001}),t.caja(.07,.004,fr-.5,o.amarillo,R0-.18,.016,-.1,{r:.001});for(let[B,V,X,Z]of[[1.2,-1.1,.5,.25],[-1.9,.9,.4,.3],[2.7,.7,.3,.45],[-.4,1.9,.35,.2]]){let se=t.cil(1,.003,o.charco,B,.017,V,{seg:28});se.scale.set(X,1,Z),se.castShadow=!1}}let D=1.95,O=3.05,p=1.55,x=2.45,w=Li-Jt/2,A=(_,g,f,S,I,L)=>t.caja(_,g,f,n.pared,S,I,L,{r:.002,s:1});A(D-(zi-Jt),fs,Jt,(zi-Jt+D)/2,0,w),A(R0-O,fs,Jt,(O+R0)/2,0,w),A(O-D,p,Jt,(D+O)/2,0,w),A(O-D,fs-x,Jt,(D+O)/2,x,w),A(Jt,fs,fr,zi-Jt/2,0,0),t.caja(Rr+Jt,.025,Jt,n.corte,-Jt/2,fs,w,{r:.004}),t.caja(Jt,.025,fr,n.corte,zi-Jt/2,fs,0,{r:.004}),t.caja(.012,fs,Jt,n.corte,R0+.006,0,w,{r:.002}),t.caja(Jt,fs,.012,n.corte,zi-Jt/2,0,Cd+.006,{r:.002});{t.caja(Rr,1.15,.02,o.dado,0,0,Li+.01,{r:.004,s:1}),t.caja(.02,1.15,fr,o.dado,zi+.01,0,0,{r:.004,s:1}),t.caja(Rr,.02,.03,n.inoxCl,0,1.15,Li+.015,{r:.006}),t.caja(.03,.02,fr,n.inoxCl,zi+.015,1.15,0,{r:.006});let g=[];for(let z=zi+.65;z<R0-.2;z+=.65)g.push(M(z,1.15/2,Li+.021,1,1,1));for(let z=Li+.65;z<Cd-.2;z+=.65)g.push(M(zi+.021,1.15/2,z,1,1,1,Math.PI/2));y(St(.006,1.15-.04,.004,.001,1),n.juntaPared,g);for(let z of[-1.9,.2])t.caja(1.2,.05,.09,n.blanco,z,2.55,Li+.06,{r:.02});t.caja(.09,.05,1.2,n.blanco,zi+.06,2.55,-.4,{r:.02});let f=Li-Jt/2,S=O-D,I=x-p,L=(D+O)/2;t.caja(S,.03,Jt+.08,n.inoxCl,L,p-.03,f+.04,{r:.008});for(let[z,F,N,B]of[[S,.05,L,p],[S,.05,L,x-.05],[.05,I,D+.025,p],[.05,I,O-.025,p],[.035,I,L,p]])t.caja(z,F,.07,n.blanco,N,B,f,{r:.008});t.caja(S-.08,I-.08,.012,n.vidrio,L,p+.04,f,{r:.003})}{let _=Um,g=-2.7,f=2.95;t.caja(f-g,.006,.26,n.hierro,(g+f)/2,.012,_,{r:.002});let S=Math.round((f-g)/.04),I=[];for(let L=0;L<S;L++)I.push(M(g+.02+L*.04,.02,_,1,1,1));y(St(.016,.014,.2,.003,1),n.inoxCl,I);for(let L of[-.115,.115])t.caja(f-g,.018,.02,n.inoxCl,(g+f)/2,.012,_+L,{r:.005});t.cil(.13,.012,n.inoxCl,g-0,.014,_,{seg:28}),t.cil(.1,.004,n.hierro,g,.026,_,{seg:28})}{let f=Li+.02,S=Li+.5,I=(-2.55+-.95)/2,L=(f+S)/2;for(let N of[-2.55+.03,-.95-.03])for(let B of[f+.03,S-.03])t.caja(.05,1.95,.05,n.azulOsc,N,0,B,{r:.008});for(let N of[.1,.6,1.1,1.6])t.caja(-.95- -2.55,.03,S-f,n.inoxOsc,I,N,L,{r:.008}),t.caja(-.95- -2.55,.05,.02,n.azulOsc,I,N-.02,S,{r:.006});t.caja(-.95- -2.55,.02,.02,n.azulOsc,I,1.92,S-.03,{r:.006});let z=(N,B,V=[])=>B.forEach((X,Z)=>Ve(t,n,X,N+.03,L+.02,{ry:V[Z]??(i()-.5)*.3}));z(.1,[-2.4,-2.15,-1.9,-1.6]),z(.6,[-2.4,-2.12,-1.8]),It(t,n,-1.5,.63,L+.05,{ry:.2}),It(t,n,-1.3,.63,L+.05,{ry:-.15}),z(1.1,[-2.38,-2.1]),c(.4,.28,.3,o.carton,-1.55,1.1+.03+.14,L,{r:.012}),c(.4,.24,.3,o.carton,-1.2,1.1+.03+.12,L,{r:.012}),c(.4,.3,.3,o.carton,-2.3,1.6+.03+.15,L,{r:.012}),c(.4,.3,.3,o.carton,-1.9,1.6+.03+.15,L,{r:.012}),Ve(t,n,-1.35,1.63,L+.02,{ry:.1}),Ve(t,n,-1.1,1.63,L+.02,{ry:-.1});let F=(N,B,V,X)=>{t.cil(V,X,n.azul,N,0,B,{seg:28}),t.cil(V+.006,.03,n.azulOsc,N,X*.3,B,{seg:28}),t.cil(V+.006,.03,n.azulOsc,N,X*.7,B,{seg:28}),t.cil(V*.92,.03,n.azulOsc,N,X,B,{seg:28}),t.cil(.035,.025,n.negro,N+V*.45,X+.03,B,{seg:14}),t.cil(.025,.02,n.blanco,N-V*.4,X+.03,B+V*.2,{seg:12})};F(-.7,Li+.3,.2,.58),F(-.7,Li+.72,.15,.4)}{t.caja(.76,.1,.3,n.gris,.5,0,-2.33,{r:.015}),t.caja(.8,1.55,.32,n.blanco,.5,.1,-2.33,{r:.03,s:3}),t.caja(.84,.05,.36,n.azul,.5,1.65,-2.33,{r:.015}),t.caja(.64,.5,.02,n.azulOsc,.5,1.08,-2.165,{r:.008}),u(.095,.04,n.inoxCl,.5,1.3,-2.145,{seg:28}),u(.03,.05,n.negro,.5,1.3,-2.14,{seg:16}),t.caja(.012,.075,.02,n.blanco,.5+.04,1.3-.005,-2.12,{r:.003,rz:-.8});for(let z=0;z<6;z++){let F=Math.PI*1.1-z*.42;u(.013,.012,z%2?n.blanco:n.pantalla,.5+Math.cos(F)*.16,1.3+Math.sin(F)*.16,-2.158,{seg:10})}t.caja(.22,.09,.012,n.pantalla,.5-.12,1.5,-2.156,{r:.006}),t.caja(.12,.26,.04,n.negro,.5+.2,1.15,-2.15,{r:.01}),t.caja(.02,.08,.044,n.inoxCl,.5+.2,1.25,-2.13,{r:.004}),u(.02,.012,n.amarillo,.5+.2,1.1,-2.125,{seg:12});for(let z of[.5-.19,.5+.19])t.caja(.37,.84,.014,n.loza,z,.18,-2.168,{r:.006}),t.barra(.009,[z+(z<.5?.14:-.14),.4,-2.145],[z+(z<.5?.14:-.14),.7,-2.145],n.inoxOsc);Ve(t,n,1,0,-2.3,{ry:.3}),t.barra(.007,[.98,.3,-2.3],[.9,.3,-2.2],n.azul),t.barra(.007,[.9,.3,-2.2],[.88,.6,-2.165],n.azul);let g=1.5,f=1.25;t.caja(.78,.78,.04,n.inoxOsc,g,f-.39,-2.48,{r:.015}),u(.34,.015,n.azulOsc,g,f,-2.4,{seg:36}),u(.34,.015,n.azulOsc,g,f,-2.22,{seg:36}),u(.27,.15,n.azulOsc,g,f,-2.31,{seg:36});for(let z=0;z<5;z++)u(.272,.012,n.negro,g,f,-2.375+z*.037,{seg:36});u(.07,.07,n.inoxCl,g,f,-2.19,{seg:20}),t.barra(.01,[g,f,-2.19],[g+.14,f-.1,-2.17],n.inoxCl),t.cil(.02,.05,n.negro,g+.15,f-.13,-2.17,{seg:10});let S=[[g-.2,f-.3,-2.18],[g-.2,.55,-2.1],[g+.1,.45,-2],[g+.45,.62,-2.05],[g+.62,.95,-2.2],[g+.66,1.4,-2.34]];for(let z=0;z<S.length-1;z++)t.barra(.016,S[z],S[z+1],n.azulOsc,{seg:10});for(let z of S.slice(1,-1))t.esfera(.017,n.azulOsc,...z);let I=g+.66;t.caja(.2,.05,.05,n.inoxOsc,I,1.05,-2.45,{r:.01}),t.caja(.2,.05,.05,n.inoxOsc,I,.62,-2.45,{r:.01}),t.barra(.012,[I,.5,-2.4],[I,1.38,-2.4],n.inoxCl),t.caja(.045,.16,.11,n.azul,I,1.36,-2.37,{r:.015}),t.caja(.02,.07,.025,n.negro,I,1.34,-2.31,{r:.008,rx:.4}),t.cil(.017,.07,n.inox,I,.44,-2.4,{seg:10});let L=2.3;t.barra(.016,[L,.12,-2.38],[L+.05,1.5,-2.43],n.inoxOsc),t.cil(.11,.1,n.blanco,L,0,-2.36,{seg:24}),t.toro(.1,.014,n.gris,L,.06,-2.36),t.cil(.075,.1,n.azul,L,.1,-2.36,{seg:20}),t.barra(.014,[L+.04,1.2,-2.42],[L-.3,1,-2.3],n.azulOsc),t.barra(.014,[L-.3,1,-2.3],[.5+.45,.85,-2.2],n.azulOsc)}{t.caja(.2,.04,.03,n.inoxOsc,2.65,.6,-2.46,{r:.008}),t.cil(.075,.46,o.rojoExt,2.65,.18,-2.4,{seg:24}),t.esfera(.075,o.rojoExt,2.65,.64,-2.4,{sy:.7}),t.cil(.022,.05,n.negro,2.65,.7,-2.4,{seg:12}),t.caja(.07,.016,.02,n.negro,2.65+.025,.76,-2.4,{r:.006}),t.barra(.008,[2.65+.05,.68,-2.4],[2.65+.1,.5,-2.32],n.negro),t.cil(.014,.01,n.blanco,2.65,.52,-2.325,{rx:Math.PI/2,seg:12}),t.caja(.1,.1,.004,n.blanco,2.65,.95,-2.49,{r:.002}),t.caja(.09,.09,.004,o.rojoExt,2.65,.955,-2.488,{r:.002}),t.caja(.3,.025,.3,n.negro,2.9,0,1.75,{r:.01}),t.cil(.04,.5,o.cono,2.9,.025,1.75,{rb:.125,seg:20}),t.cil(.075,.07,n.blanco,2.9,.25,1.75,{rb:.092,seg:20}),t.cil(.05,.05,n.blanco,2.9,.36,1.75,{rb:.065,seg:20}),t.cil(.035,.02,o.cono,2.9,.52,1.75,{seg:12});{for(let S of[-1,1])t.caja(.4,.55,.012,o.amarillo,-2.65,0,2.25+S*.1,{r:.006,rx:S*-.28});t.caja(.4,.014,.1,o.amarillo,-2.65,.54,2.25,{r:.006}),t.caja(.2,.2,.004,n.negro,-2.65,.2,2.25+.145,{r:.002,rx:-.28})}t.cil(.14,.27,n.azul,2.15,0,-1.2,{rb:.11,seg:24}),t.toro(.14,.01,n.azulOsc,2.15,.27,-1.2),t.barra(.008,[2.15-.14,.27,-1.2],[2.15+.14,.27,-1.2],n.inoxOsc),c(.14,.06,.1,o.sponge,2.15-.02,.29,-1.2+.01,{r:.02,ry:.5}),c(.1,.05,.08,o.sponge,2.15+.06,.04,-1.2+.28,{r:.02,ry:-.3}),It(t,n,2.15+.35,0,-1.2+.1,{ry:-.6}),It(t,n,2.15+.52,0,-1.2-.02,{ry:.5});for(let g=0;g<4;g++)t.toro(.22,.095,o.neum,-2.8,.095+g*.185,-1.4+g%2*.02),t.cil(.15,.01,n.gris,-2.8,.01+g*.185,-1.4,{seg:20});t.toro(.22,.095,o.neum,-2.78,.31,-.85,{rx:0,ry:.3}),t.toro(.2,.012,n.inoxOsc,-2.78,.31,-.85,{rx:0,ry:.3})}let b=a("carroceria",{frente:[.1,0,1],alto:.55,lado:.45,zoom:.82}),P=a("llantas",{frente:[.4,0,1],alto:.2,lado:.5,zoom:1,marco:"rueda-del"}),h=a("parabrisas",{frente:[1,0,.1],alto:1.2,lado:.3,zoom:1.1}),l=a("motor",{frente:[1,0,.1],alto:.75,lado:.5,zoom:.92}),d=a("interior",{frente:[.15,0,1],alto:1.05,lado:.25,zoom:.95});for(let _ of[b,P,h,l,d])_.position.set(s3,a3,Um);{let g=[[-2.15,.84],[-2.08,.95],[-1.75,.99],[-.5,.98],[.72,.99],[1.8,.97],[2.05,.88],[2.15,.62]],f=z=>{if(z<=g[0][0])return g[0][1];for(let F=1;F<g.length;F++)if(z<=g[F][0]){let[N,B]=g[F-1],[V,X]=g[F];return B+(X-B)*(z-N)/(V-N)}return g[g.length-1][1]},S=z=>{let F=.26;for(let N of[1.3,-1.3]){let B=Math.abs(z-N);B<.42&&(F=Math.max(F,.31+Math.sqrt(.42*.42-B*B)))}return F},I=(z,F,N)=>{let B=[],V=Math.ceil((F-z)/.03);for(let X=0;X<=V;X++){let Z=z+(F-z)*X/V;B.push([Z,S(Z)])}for(let X=V;X>=0;X--){let Z=z+(F-z)*X/V;B.push([Z,f(Z)])}E(B,.2,o.pintura,{padre:b,z:N,bisel:.012})};I(-2.15,2.15,-.79),I(.72,2.15,.79),I(-2.15,-.45,.79),c(4.24,.08,1.4,n.hierro,0,.3,0,{padre:b,r:.01}),c(1.17,.14,.2,o.pinturaOsc,.135,.33,.79,{padre:b,r:.02}),c(.55,.55,1.36,n.hierro,-1.82,.62,0,{padre:b}),c(.52,.05,1.42,o.pintura,-1.88,.965,0,{padre:b,r:.02}),c(.025,.012,.8,n.inoxCl,-2.15,.9,0,{padre:b,r:.004}),c(.3,.04,1.38,n.negro,-1.47,.96,0,{padre:b}),c(.2,.3,1.72,o.pintura,2.07,.42,0,{padre:b,r:.06,s:3}),c(.1,.34,1.4,o.pintura,2.07,.75,0,{padre:b,r:.03}),c(.02,.15,.8,n.negro,2.145,.7,0,{padre:b,r:.006});for(let z=0;z<4;z++)c(.014,.012,.76,n.inoxCl,2.155,.65+z*.037,0,{padre:b,r:.004});c(.02,.1,1.1,n.negro,2.185,.4,0,{padre:b,r:.006});for(let z of[-1,1])c(.08,.14,.34,o.faro,2.11,.79,z*.56,{padre:b,r:.03,rz:-.12}),c(.012,.025,.3,n.azul,2.155,.7,z*.56,{padre:b,r:.005}),u(.035,.02,o.faro,2.2,.42,z*.65,{padre:b,seg:14});c(.2,.3,1.72,o.pintura,-2.07,.42,0,{padre:b,r:.06,s:3}),c(.02,.1,1,n.negro,-2.18,.34,0,{padre:b,r:.006});for(let z of[-1,1])c(.06,.14,.34,o.piloto,-2.13,.8,z*.58,{padre:b,r:.025});c(.02,.03,.5,o.piloto,-2.15,.83,0,{padre:b,r:.008}),c(.012,.12,.42,n.blanco,-2.19,.58,0,{padre:b,r:.004}),t.barra(.028,[-2.14,.3,.5],[-2.26,.3,.5],n.inoxCl,{padre:b}),c(.78,.02,1.3,o.luna,-1.31,1.215,0,{padre:b,rz:.6485,r:.004});let L=(z,F)=>E(z,.02,o.luna,{padre:b,z:F});L([[.72,1],[.1,1.425],[-.45,1.425],[-.45,1]],-.7),L([[-.56,1],[-.56,1.425],[-1,1.425],[-1.56,1]],-.7),L([[-.56,1],[-.56,1.425],[-1,1.425],[-1.56,1]],.7);for(let z of[-1,1])c(.885,.07,.08,o.pintura,.425,1.215,z*.69,{padre:b,rz:-.559,r:.012}),c(.09,.47,.08,o.pintura,-.5,1.215,z*.7,{padre:b,r:.012}),c(.78,.07,.08,o.pintura,-1.31,1.22,z*.69,{padre:b,rz:.6485,r:.012}),c(1.08,.05,.08,o.pintura,-.475,1.425,z*.69,{padre:b,r:.012}),c(1.1,.012,.025,n.negro,-.475,1.455,z*.55,{padre:b,r:.004});c(.1,.05,1.46,o.pintura,.04,1.425,0,{padre:b,r:.015}),c(.52,.05,1.46,o.pintura,-.76,1.425,0,{padre:b,r:.02}),c(.46,.015,1.08,o.luna,-.8,1.465,0,{padre:b,r:.005}),c(.04,.03,1.1,n.negro,-.5,1.46,0,{padre:b,r:.006}),c(.22,.05,.07,n.negro,-.95,1.5,0,{padre:b,r:.02,rz:-.12}),c(2.28,.018,.012,n.inoxCl,-.43,.995,-.905,{padre:b}),c(1.1,.018,.012,n.inoxCl,-1,.995,.905,{padre:b});for(let z of[.72,-.47,-1.57])c(.008,.62,.01,n.negro,z,.66,-.903,{padre:b});c(.008,.62,.01,n.negro,-1.57,.66,.903,{padre:b}),c(.008,.62,.01,n.negro,-.47,.66,.903,{padre:b});for(let z of[-.25,-.95])c(.16,.022,.03,n.inoxCl,z,.86,-.915,{padre:b,r:.008});c(.16,.022,.03,n.inoxCl,-.95,.86,.915,{padre:b,r:.008});for(let z of[-1,1])c(1.2,.07,.014,n.negro,z>0?-1:-.3,.38,z*.9,{padre:b,r:.006});u(.05,.012,o.pintura,-1.78,.84,.9,{padre:b,seg:20}),u(.035,.014,n.inoxCl,-1.78,.84,.906,{padre:b,seg:14}),t.barra(.01,[.66,1,-.88],[.62,1.04,-.97],n.negro,{padre:b}),c(.11,.09,.06,o.pintura,.6,1.06,-1,{padre:b,r:.03}),c(.01,.07,.05,o.luna,.64,1.06,-1,{padre:b,r:.003});for(let z of[1.3,-1.3])for(let F of[-1,1]){let N=new $e(new ir(.43,.018,8,40,Math.PI),n.negro);N.position.set(z,.31,F*.905),N.castShadow=!0,b.add(N)}{let N=G=>Math.min(f(G)-.06,.8+.07*Math.sin(G*9.3)+.04*Math.sin(G*23.1+1.3)),B=[];for(let G=0;G<=48;G++){let j=-2.05+1.4299999999999997*G/48;B.push([j,S(j)+.035])}for(let G=48;G>=0;G--){let j=-2.05+1.4299999999999997*G/48;B.push([j,N(j)])}E(B,.03,o.espuma,{padre:b,z:.905,bisel:.012});let X=[],Z=[];for(let G=-2.05+.02;G<-.62;G+=.034){let j=.032+i()*.026;X.push(M(G+(i()-.5)*.02,N(G)-j*.25,.92,j,j,j*.6))}for(let G=0;G<26;G++){let j=-1.9899999999999998+i()*1.3099999999999996,re=S(j)+.08+i()*Math.max(.02,N(j)-S(j)-.16),ce=.03+i()*.03;X.push(M(j,re,.925,ce,ce,ce*.35))}for(let G=0;G<9;G++){let j=-1.9699999999999998+i()*1.2699999999999998;Z.push(M(j,S(j)+.01-i()*.03,.915,.018,.05+i()*.05,.012))}c(.42,.025,1.18,o.espuma,-1.9,.998,0,{padre:b,r:.012});for(let G=-.58;G<=.58;G+=.05)X.push(M(-1.69+(i()-.5)*.03,1,G,.03+i()*.02,.022,.03+i()*.02));let se=new fi(1,10,8);y(se,o.espuma,X,b),y(se,o.espuma,Z,b)}}{let _=(g,f,S,I,L)=>{let z=I<0,F=t.grupo(g,P);F.position.set(f,.31,S),F.rotation.y=(I<0?Math.PI:0)+L*I;let N=new $e(new ir(.24,.07,16,48),o.neum);N.scale.z=1.4,N.castShadow=N.receiveShadow=!0,F.add(N),u(.215,.18,n.inoxOsc,0,0,0,{padre:F,seg:32}),t.toro(.215,.014,n.inoxCl,0,0,.095,{rx:0,padre:F}),u(.17,.03,n.inox,0,0,.025,{padre:F,seg:32}),u(.075,.045,n.hierro,0,0,.04,{padre:F,seg:20});for(let B=0;B<5;B++){let V=B/5*Math.PI*2+.3;if(z){B<3&&c(.3,.05,.028,n.inoxCl,Math.cos(V)*.16,Math.sin(V)*.16,.078,{padre:F,rz:V,r:.01});continue}c(.17,.045,.028,n.inoxCl,Math.cos(V)*.125,Math.sin(V)*.125,.078,{padre:F,rz:V,r:.01}),c(.07,.05,.03,n.inoxCl,Math.cos(V)*.205,Math.sin(V)*.205,.08,{padre:F,rz:V,r:.01})}u(.058,.03,n.inox,0,0,.09,{padre:F,seg:20});for(let B=0;!z&&B<5;B++){let V=B/5*Math.PI*2;u(.011,.014,n.hierro,Math.cos(V)*.036,Math.sin(V)*.036,.108,{padre:F,seg:8})}return z||c(.065,.15,.055,o.amarillo,.09,.115,.045,{padre:F,rz:-.55,r:.016}),F};_("rueda-del",1.3,.77,1,.3),_("rueda",-1.3,.77,1,0),_("rueda",1.3,-.77,-1,.3),_("rueda",-1.3,-.77,-1,0)}{let _=t.grupo("luna",h);_.position.set(.8,.98,0),_.rotation.z=Math.PI-.559;let g=.889;c(g,.02,1.36,o.luna,g/2,0,0,{padre:_,r:.004});for(let[f,S,I,L,z]of[[g,.03,.04,g/2,.68],[g,.03,.04,g/2,-.68],[.04,.03,1.36,.02,0],[.05,.03,1.36,g-.025,0]])c(f,S,I,n.negro,L,-.005,z,{padre:_,r:.006});c(.1,.05,1.3,n.negro,-.02,-.02,0,{padre:_,r:.01});for(let[f,S]of[[-.22,-.7],[.3,-.05]])c(.02,.012,.62,n.negro,.07,-.025,(f+S)/2,{padre:_,r:.004}),t.barra(.006,[.02,-.025,f],[.075,-.03,(f+S)/2],n.inoxOsc,{padre:_}),c(.035,.02,.035,n.negro,.02,-.025,f,{padre:_,r:.008});{let f=[];for(let S=0;S<26;S++){let I=.12+i()*.7,L=(i()-.5)*1.2,z=.008+i()*.014;f.push(M(I,-.012,L,z*(1+i()*.6),z*.3,z*(1+i()*.6)))}y(new fi(1,8,6),o.insecto,f,_)}c(.04,.06,.2,n.negro,.3,1.3,0,{padre:h,r:.012}),u(.012,.05,n.negro,.33,1.34,0,{padre:h,seg:8})}{c(.06,.62,1.38,n.gris,.83,.65,0,{padre:l,r:.01}),c(.12,.04,1.38,n.negro,.8,.97,0,{padre:l,r:.01});for(let _ of[-1,1])c(1.1,.48,.12,n.hierro,1.45,.58,_*.63,{padre:l,r:.01}),t.cil(.1,.07,n.inoxOsc,1.25,.8,_*.56,{padre:l,seg:18}),t.cil(.03,.04,n.inoxCl,1.25,.87,_*.56,{padre:l,seg:8});c(.07,.5,1.36,n.negro,1.99,.62,0,{padre:l,r:.01}),c(.04,.4,1.1,n.hierro,1.93,.58,0,{padre:l,r:.006}),m(.2,.025,n.negro,1.88,.58,0,{padre:l,seg:28}),t.toro(.2,.015,n.negro,1.88,.58,0,{rx:0,ry:Math.PI/2,padre:l});for(let _=0;_<5;_++){let g=_/5*Math.PI*2;c(.012,.16,.06,n.hierro,1.87,.58+Math.sin(g)*.09,Math.cos(g)*.09,{padre:l,rx:-g+Math.PI/2,r:.004})}m(.035,.05,n.inox,1.87,.58,0,{padre:l,seg:12}),t.barra(.025,[1.95,.8,.5],[1.55,.7,.3],n.negro,{padre:l}),c(.5,.34,.86,n.inoxOsc,1.45,.54,0,{padre:l,r:.03}),c(.4,.1,.76,n.negro,1.45,.76,0,{padre:l,r:.03}),c(.36,.03,.66,n.gris,1.45,.83,0,{padre:l,r:.01}),c(.26,.006,.06,n.azul,1.45,.848,-.1,{padre:l,r:.002}),t.cil(.03,.025,o.amarillo,1.58,.85,.24,{padre:l,seg:14});for(let _=0;_<4;_++)c(.045,.07,.045,n.negro,1.64,.88,-.26+_*.17,{padre:l,r:.01});t.cil(.012,.18,n.negro,1.3,.83,.12,{padre:l,seg:6,rx:1.2}),u(.1,.03,n.inoxOsc,1.55,.5,.47,{padre:l,seg:20}),u(.07,.03,n.inoxOsc,1.33,.64,.47,{padre:l,seg:16}),u(.055,.03,n.inoxOsc,1.62,.7,.47,{padre:l,seg:14}),t.toro(.105,.009,n.negro,1.55,.5,.488,{rx:0,padre:l}),t.toro(.075,.009,n.negro,1.33,.64,.488,{rx:0,padre:l}),t.barra(.009,[1.45,.58,.488],[1.27,.7,.488],n.negro,{padre:l}),t.barra(.009,[1.64,.595,.488],[1.4,.7,.488],n.negro,{padre:l}),c(.34,.16,.22,n.negro,1.72,.42,-.4,{padre:l,r:.03});for(let _ of[-.07,.07])c(.03,.05,.03,n.inoxOsc,1.72,.51,-.4+_,{padre:l,r:.008});t.barra(.04,[1.55,.44,-.4],[1.3,.72,-.35],n.negro,{padre:l}),t.barra(.04,[1.88,.42,-.4],[1.99,.42,-.2],n.negro,{padre:l}),c(.2,.2,.32,n.negro,1.9,.44,.47,{padre:l,r:.012}),c(.2,.02,.32,n.gris,1.9,.55,.47,{padre:l,r:.006}),t.cil(.017,.035,n.tomate,1.86,.55,.58,{padre:l,seg:10}),t.cil(.017,.035,n.negro,1.86,.55,.36,{padre:l,seg:10}),t.barra(.01,[1.86,.58,.58],[1.72,.56,.62],n.tomate,{padre:l}),c(.14,.2,.28,n.vidrio,1.02,.44,.38,{padre:l,r:.015}),c(.12,.11,.26,o.refrig,1.02,.395,.38,{padre:l,r:.01}),t.cil(.04,.03,o.amarillo,1.02,.54,.38,{padre:l,seg:16}),t.barra(.014,[1.08,.4,.3],[1.3,.5,.2],n.negro,{padre:l}),c(.12,.2,.3,n.vidrio,1.04,.44,-.4,{padre:l,r:.015}),c(.1,.12,.28,n.azul,1.04,.4,-.4,{padre:l,r:.01}),t.cil(.04,.03,n.azul,1.04,.54,-.4,{padre:l,seg:16}),t.cil(.012,.012,n.blanco,1.04,.575,-.4,{padre:l,seg:8}),m(.14,.12,n.negro,.93,.7,-.32,{padre:l,seg:24}),c(.14,.08,.1,n.hierro,.9,.82,-.18,{padre:l,r:.015}),t.cil(.03,.04,n.negro,.9,.86,-.18,{padre:l,seg:10});{let S=t.grupo("capo",l);S.position.set(.88,.995,0),S.rotation.z=1,c(1.28,.035,1.46,o.pintura,.64,.0175,0,{padre:S,r:.016});for(let z of[-.32,.32])c(.9,.01,.1,o.pintura,.7,.04,z,{padre:S,r:.004});c(1.24,.03,1.4,o.pinturaOsc,.64,-.015,0,{padre:S,r:.01}),c(.9,.012,.95,o.aislante,.6,-.037,0,{padre:S,r:.004});for(let z=0;z<4;z++)c(.04,.045,1.32,n.hierro,.12+z*.36,-.045,0,{padre:S,r:.008});for(let z of[-.66,.66])c(1.2,.045,.04,n.hierro,.64,-.045,z,{padre:S,r:.008});let L=((z,F,N)=>[.88+z*Math.cos(1)-F*Math.sin(1),.995+z*Math.sin(1)+F*Math.cos(1),N])(1,-.06,.55);t.barra(.014,[1.98,.9,.64],L,n.inoxCl,{padre:l}),t.barra(.02,[1.98,.9,.64],[1.9,1.08,.62],n.inoxOsc,{padre:l}),t.esfera(.02,n.negro,...L,{padre:l})}}{c(2.2,.015,1.34,o.alfombra,-.4,.348,0,{padre:d,r:.004}),c(.4,.24,1.38,n.negro,.6,.8,0,{padre:d,r:.045}),c(.3,.26,1.3,o.tapiz,.62,.47,0,{padre:d,r:.03}),c(.02,.12,.4,o.consola,.4,.66,.34,{padre:d,r:.006});for(let f of[-.62,-.1,.18,.62])c(.014,.04,.11,n.gris,.4,.84,f,{padre:d,r:.006});c(.02,.13,.2,n.pantalla,.4,.76,.02,{padre:d,r:.008}),c(.26,.09,.56,n.negro,.5,.98,-.36,{padre:d,r:.03});for(let f of[-.5,-.3])m(.065,.012,n.pantalla,.37,.9,f,{padre:d,seg:16});t.barra(.025,[.42,.74,-.36],[.26,.9,-.36],n.negro,{padre:d});let _=t.grupo("volante",d);_.position.set(.24,.94,-.36),_.rotation.z=-.4,t.toro(.16,.022,n.negro,0,0,0,{rx:0,ry:Math.PI/2,padre:_}),c(.022,.022,.31,n.negro,0,0,0,{padre:_,r:.006}),c(.022,.15,.025,n.negro,0,-.075,0,{padre:_,r:.006}),m(.05,.05,o.consola,.01,0,0,{padre:_,seg:18});for(let f of[-.36,.36])c(.46,.06,.3,n.hierro,-.05,.4,f,{padre:d,r:.01}),c(.5,.12,.46,o.tapiz,-.05,.47,f,{padre:d,r:.04}),c(.12,.6,.46,o.tapiz,-.34,.8,f,{padre:d,rz:.2,r:.04}),c(.02,.36,.3,o.tapizCl,-.265,.82,f,{padre:d,rz:.2,r:.006}),c(.1,.18,.28,o.tapiz,-.4,1.2,f,{padre:d,rz:.2,r:.03});c(.5,.12,1.3,o.tapiz,-1.05,.47,0,{padre:d,r:.04}),c(.12,.55,1.3,o.tapiz,-1.35,.78,0,{padre:d,rz:.15,r:.04});for(let f of[-.4,0,.4])c(.08,.15,.2,o.tapiz,-1.39,1.12,f,{padre:d,rz:.15,r:.025});c(.8,.17,.22,o.consola,0,.43,0,{padre:d,r:.04}),t.barra(.012,[.12,.51,0],[.1,.68,0],n.negro,{padre:d}),t.esfera(.03,n.negro,.1,.7,0,{padre:d}),t.barra(.012,[-.26,.5,.03],[-.32,.6,.03],n.negro,{padre:d});for(let f of[-.04,.04])t.cil(.03,.006,n.negro,.3,.51,f,{padre:d,seg:16});for(let f=0;f<3;f++)c(.03,.01,.025,n.blanco,.05,.515,-.05+f*.05,{padre:d,r:.003});c(2.2,.5,.03,o.tapiz,-.4,.62,-.665,{padre:d,r:.01}),c(.95,.5,.03,o.tapiz,-1,.62,.665,{padre:d,r:.01});let g=t.grupo("puerta",d);g.position.set(.72,0,.86),g.rotation.y=1.25,c(1.17,.7,.1,o.pintura,-.585,.63,0,{padre:g,r:.03,s:3}),c(1.1,.5,.03,o.tapiz,-.6,.62,-.07,{padre:g,r:.01}),c(.45,.05,.08,o.tapizCl,-.6,.9,-.11,{padre:g,r:.02}),u(.07,.02,n.negro,-.3,.62,-.09,{padre:g,seg:20});for(let f=0;f<3;f++)c(.04,.012,.03,n.blanco,-.75+f*.05,.9,-.1,{padre:g,r:.003});c(1,.07,.014,n.negro,-.585,.38,.055,{padre:g,r:.006}),c(.16,.022,.03,n.inoxCl,-.95,.86,.065,{padre:g,r:.008}),c(1.1,.025,.07,n.negro,-.585,.985,0,{padre:g,r:.008}),c(.7,.04,.06,n.negro,-.31,1.2,0,{padre:g,rz:-.67,r:.01}),c(.56,.04,.06,n.negro,-.86,1.42,0,{padre:g,r:.01}),c(.04,.46,.06,n.negro,-1.13,1.2,0,{padre:g,r:.01}),t.barra(.01,[-.06,1,.04],[-.06,1.05,.14],n.negro,{padre:g}),c(.06,.09,.12,o.pintura,-.06,1.08,.2,{padre:g,r:.03}),c(.062,.07,.1,o.luna,-.026,1.08,.2,{padre:g,r:.003})}{let _=a("suelo",{frente:[.1,0,1],alto:.85,lado:.4,zoom:1,marco:"fregadora"});for(let[f,S,I,L]of[[-.95,1.75,.34,.8],[-.7,1.6,.25,1],[-1.2,1.9,.22,.9],[-.85,2,.18,1],[-1.15,1.58,.14,1],[-.55,1.88,.12,1]]){let z=t.cil(I*.6,.003,o.mancha,-.95+(f+.95)*.6,.012,1.75+(S-1.75)*.6,{padre:_,seg:28});z.scale.set(1,1,L),z.castShadow=!1}{let f=[];for(let S=0;S<60;S++){let I=i()*6.28,L=Math.sqrt(i())*.17;f.push(M(-.8+Math.cos(I)*L,.018,1.76+Math.sin(I)*L*.8,.012,.008,.012))}y(new fi(1,6,5),o.grano,f,_)}c(.58,.14,.34,o.saco,-.28,.07+.015,2.1,{padre:_,r:.05,s:3,ry:.2}),c(.3,.145,.2,n.azul,-.28,.07+.015,2.1,{padre:_,r:.02,ry:.2}),c(.1,.1,.3,o.saco,.04,.07+.015,2.06,{padre:_,r:.04,ry:.2}),c(.1,.1,.3,o.saco,-.6,.07+.015,2.14,{padre:_,r:.04,ry:.2}),c(.34,.5,.15,o.saco,.22,.25+.015,2.28,{padre:_,r:.05,s:3,ry:.25}),c(.22,.2,.155,n.azul,.22,.28+.015,2.28,{padre:_,r:.02,ry:.25}),c(.3,.05,.12,o.saco,.22,.52+.015,2.28,{padre:_,r:.02,ry:.25});let g=t.grupo("fregadora",_);g.position.set(-2.2,.016,1.55),g.rotation.y=.55,t.caja(.7,.07,.46,n.gris,0,.07,0,{padre:g,r:.02}),t.caja(.58,.3,.46,n.blanco,-.05,.14,0,{padre:g,r:.05,s:3}),t.caja(.5,.2,.44,n.azul,-.05,.44,0,{padre:g,r:.05,s:3}),t.caja(.42,.03,.34,n.azulOsc,-.05,.64,0,{padre:g,r:.012}),t.caja(.035,.14,.12,n.negro,.3,.14,0,{padre:g,r:.01}),t.caja(.34,.1,.6,n.negro,.42,.05,0,{padre:g,r:.03}),t.cil(.23,.04,n.azulOsc,.42,0,0,{padre:g,seg:28}),t.toro(.22,.02,n.negro,.42,.03,0,{padre:g}),t.caja(.05,.05,.62,n.inoxOsc,-.42,.04,0,{padre:g,r:.01}),t.caja(.025,.045,.64,n.goma,-.455,.02,0,{padre:g,r:.006});for(let f of[-.26,.26])u(.08,.05,n.goma,-.26,.08,f,{padre:g,seg:18});t.barra(.018,[-.3,.5,0],[-.58,1,0],n.gris,{padre:g}),t.barra(.018,[-.58,1,-.22],[-.58,1,.22],n.gris,{padre:g});for(let f of[-.26,.26])t.cil(.02,.1,n.negro,-.58,.95,f,{padre:g,seg:10,rx:Math.PI/2});t.caja(.14,.05,.22,n.negro,-.55,1.02,0,{padre:g,r:.012}),t.caja(.04,.02,.08,n.pantalla,-.55,1.07,0,{padre:g,r:.004});for(let f of[-.07,.07])t.cil(.015,.012,f>0?o.amarillo:n.tomate,-.52,1.07,f,{padre:g,seg:10});t.barra(.01,[-.38,.15,.2],[-.46,.06,.28],n.negro,{padre:g}),Ve(t,n,-1.55,0,1.95,{padre:_,ry:-.5})}{let _=a("manos",{frente:[1,0,-.1],alto:1,lado:.1,zoom:.9}),g=.95,f=zi;c(.52,.04,.84,n.inoxCl,f+.27,.88,g,{padre:_,r:.012});for(let[L,z,F,N]of[[.52,.02,f+.27,g-.41],[.52,.02,f+.27,g+.41],[.02,.84,f+.51,g]])c(L,.2,z,n.inox,F,.78,N,{padre:_,r:.006});c(.48,.02,.78,n.inoxOsc,f+.27,.68,g,{padre:_,r:.006}),c(.04,.2,.9,n.inoxCl,f+.03,1.02,g,{padre:_,r:.01}),t.cil(.04,.012,n.hierro,f+.3,.69,g,{padre:_,seg:20});for(let L of[g-.38,g+.38])t.cil(.02,.88,n.inoxOsc,f+.5,0,L,{padre:_,seg:12});c(.04,.04,.8,n.inoxOsc,f+.5,.34,g,{padre:_,r:.01}),t.barra(.014,[f+.3,.68,g],[f+.3,.5,g],n.inoxOsc,{padre:_}),t.barra(.014,[f+.3,.5,g],[f+.1,.5,g],n.inoxOsc,{padre:_}),t.cil(.022,.3,n.inoxCl,f+.14,.9,g,{padre:_,seg:14}),t.barra(.016,[f+.14,1.2,g],[f+.3,1.24,g],n.inoxCl,{padre:_}),t.barra(.014,[f+.3,1.24,g],[f+.3,1.1,g],n.inoxCl,{padre:_});for(let L of[-1,1])t.barra(.012,[f+.14,.99,g+L*.07],[f+.14,1.08,g+L*.14],n.inoxCl,{padre:_}),t.cil(.026,.014,L>0?n.azul:n.tomate,f+.14,1.08,g+L*.14,{padre:_,seg:12});let S=.3;c(.04,.55,.28,n.blanco,f+.03,1.35,S,{padre:_,r:.012}),c(.14,.14,.2,n.blanco,f+.11,1.12,S,{padre:_,r:.03}),t.barra(.01,[f+.17,1.17,S],[f+.27,1.07,S],n.azul,{padre:_}),t.cil(.014,.06,n.blanco,f+.14,1,S,{padre:_,seg:10}),t.cil(.125,.22,n.blanco,f+.15,1.2,S,{padre:_,rb:.1,seg:28}),t.cil(.128,.09,n.azul,f+.15,1.3,S,{padre:_,seg:28}),t.cil(.1,.03,n.azulOsc,f+.15,1.19,S,{padre:_,seg:24}),t.caja(.2,.014,.2,n.inoxCl,f+.2,.9,S,{padre:_,r:.004});let I=1.7;c(.1,.4,.46,n.blanco,f+.06,1.2,I,{padre:_,r:.02});for(let L of[-.23,.23])c(.26,.4,.03,n.blanco,f+.17,1.2,I+L,{padre:_,r:.014});u(.17,.4,o.papel,f+.17,1.2,I,{padre:_,seg:32}),u(.07,.42,n.tabla,f+.17,1.2,I,{padre:_,seg:16}),t.barra(.008,[f+.17,1.2,I-.24],[f+.17,1.2,I+.24],n.inoxOsc,{padre:_});for(let L=0;L<5;L++)u(.172,.006,n.juntaPared,f+.17,1.2,I-.15+L*.075,{padre:_,seg:32});c(.004,.3,.3,o.papel,f+.34,.99,I,{padre:_,r:.001}),t.cil(.17,.56,n.inoxCl,f+.23,0,2.15,{padre:_,rb:.15,seg:28}),t.cil(.175,.04,n.negro,f+.23,.56,2.15,{padre:_,seg:28}),t.cil(.03,.02,n.inoxOsc,f+.23,.6,2.15,{padre:_,seg:12}),t.caja(.12,.02,.07,n.negro,f+.4,0,2.15,{padre:_,r:.006}),t.cil(.04,.17,n.sopa,f+.4,.9,g-.3,{padre:_,seg:16}),t.cil(.012,.05,n.blanco,f+.4,1.07,g-.3,{padre:_,seg:8}),t.barra(.008,[f+.4,1.12,g-.3],[f+.35,1.12,g-.3],n.blanco,{padre:_})}return{raiz:e,puntos:r}}var Bm={crear:o3,mira:[.1,.8,-.1],az:.62,el:.62,radio:4.7};function vi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),a={},s={},o=n[0].morphTargetsRelative,c=new pn,u=0;for(let m=0;m<n.length;++m){let E=n[m],y=0;if(t!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let T in E.attributes){if(!i.has(T))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+T+'" attribute exists among all geometries, or in none of them.'),null;a[T]===void 0&&(a[T]=[]),a[T].push(E.attributes[T]),y++}if(y!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(o!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let T in E.morphAttributes){if(!r.has(T))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;s[T]===void 0&&(s[T]=[]),s[T].push(E.morphAttributes[T])}if(e){let T;if(t)T=E.index.count;else if(E.attributes.position!==void 0)T=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,T,m),u+=T}}if(t){let m=0,E=[];for(let y=0;y<n.length;++y){let T=n[y].index;for(let v=0;v<T.count;++v)E.push(T.getX(v)+m);m+=n[y].attributes.position.count}c.setIndex(E)}for(let m in a){let E=km(a[m]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;c.setAttribute(m,E)}for(let m in s){let E=s[m][0].length;if(E!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[m]=[];for(let y=0;y<E;++y){let T=[];for(let R=0;R<s[m].length;++R)T.push(s[m][R][y]);let v=km(T);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;c.morphAttributes[m].push(v)}}}return c}function km(n){let e,t,i,r=-1,a=0;for(let u=0;u<n.length;++u){let m=n[u];if(e===void 0&&(e=m.array.constructor),e!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=m.normalized),i!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=m.count*t}let s=new e(a),o=new jn(s,t,i),c=0;for(let u=0;u<n.length;++u){let m=n[u];if(m.isInterleavedBufferAttribute){let E=c/t;for(let y=0,T=m.count;y<T;y++)for(let v=0;v<t;v++){let R=m.getComponent(y,v);o.setComponent(y+E,v,R)}}else s.set(m.array,c);c+=m.count*t}return r!==void 0&&(o.gpuType=r),o}var qe=Math.PI,Yi=6.5,Oi=5,ji=3.2,un=.16,Mt=-Yi/2,Md=Yi/2,ot=-Oi/2,c3=Oi/2,rt=(n,e={})=>new Gt({color:n,roughness:.6,metalness:0,...e});function l3(n){let e=new zt,t=Sn(e),i=bn(11),r={},a=(p,x={})=>{let w=t.grupo(p);return w.userData.unidad=!0,r[p]={grupo:w,...x},w},s={hormigon:rt("#B3B9BD",{roughness:.5,metalness:.04}),hormigon2:rt("#AAB1B6",{roughness:.5,metalness:.04}),hormigon3:rt("#B9BFC2",{roughness:.5,metalness:.04}),juntaH:rt("#7E898F",{roughness:.9}),amarillo:rt("#F2C21B",{roughness:.55}),mancha:rt("#1D2226",{roughness:.1,metalness:.15}),zocalo:rt("#B7C3CB",{roughness:.8}),chapa:rt("#D3DADF",{roughness:.5,metalness:.25}),policarb:rt("#E1F0F7",{roughness:.3,emissive:"#BEE0F1",emissiveIntensity:.4}),verde:rt("#5E9C8F",{roughness:.5}),verdeOsc:rt("#3E6F66",{roughness:.55}),crema:rt("#E9E5D6",{roughness:.5}),lav:rt("#E3E8EB",{roughness:.45}),lavAzul:rt("#2F78B0",{roughness:.42}),intAzul:rt("#2A6FB5",{roughness:.45}),cuadro:rt("#B8C0C5",{roughness:.5}),placa:rt("#E7A53A",{roughness:.55,metalness:.2}),rojo:rt("#C23B2E",{roughness:.45}),rojoOsc:rt("#8E261D",{roughness:.5}),tela:rt("#D9D4C6",{roughness:.95}),carton:rt("#C9A777",{roughness:.85}),luz:rt("#FFF6DA",{roughness:.4,emissive:"#FFE7A0",emissiveIntensity:1.1}),agua:rt("#9ED2EA",{roughness:.05,transparent:!0,opacity:.55,depthWrite:!1}),persiana:rt("#CDD3D7",{roughness:.5,metalness:.2}),persianaJ:rt("#8E999F",{roughness:.7}),naranja:rt("#F08A2B",{roughness:.45}),verdeB:rt("#3DA45A",{roughness:.45}),papel:rt("#F6F7F4",{roughness:.9}),cobre:rt("#C28142",{metalness:.7,roughness:.35}),alu:rt("#C9D1D6",{metalness:.75,roughness:.3}),viruta:rt("#AEB7BD",{metalness:.8,roughness:.3}),cable:[rt("#1F2428"),rt("#2E5FA3"),rt("#7A4A2A"),rt("#8A9298"),rt("#C9B21D"),rt("#2E8B57")]},o=p=>({bx:(x,w,A,b,P,h,l,d={})=>t.caja(x,w,A,b,P,h,l,{padre:p,s:1,...d}),cy:(x,w,A,b,P,h,l={})=>t.cil(x,w,A,b,P,h,{padre:p,seg:16,...l}),br:(x,w,A,b,P={})=>t.barra(x,w,A,b,{padre:p,seg:10,...P}),es:(x,w,A,b,P,h={})=>t.esfera(x,w,A,b,P,{padre:p,...h}),tr:(x,w,A,b,P,h,l={})=>t.toro(x,w,A,b,P,h,{padre:p,...l})}),c=(p,x,w,A,b,P,h,l=n.negro)=>{t.toro(b,b*.09,h,x,w,A,{rx:0,ry:P==="x"?qe/2:0,padre:p});for(let f=0;f<3;f++){let S=f*2*qe/3+.5,I=Math.cos(S)*b,L=Math.sin(S)*b;t.barra(b*.07,[x,w,A],P==="x"?[x,w+L,A+I]:[x+I,w+L,A],h,{padre:p,seg:6})}let d=P==="x"?[x+.03,w,A]:[x,w,A+.03];t.barra(b*.2,[x,w,A],d,l,{padre:p,seg:10});let _=Math.cos(.5)*b,g=Math.sin(.5)*b;P==="x"?t.barra(b*.1,[x,w+g,A+_],[x+.045,w+g,A+_],l,{padre:p,seg:8}):t.barra(b*.1,[x+_,w+g,A],[x+_,w+g,A+.045],l,{padre:p,seg:8})},u=(p,x,w,A,b=.04)=>{t.barra(b,[x,w,A],[x,w,A+.03],n.inoxOsc,{padre:p,seg:18}),t.barra(b*.82,[x,w,A+.03],[x,w,A+.034],n.blanco,{padre:p,seg:18}),t.caja(.004,b*.7,.003,n.rojo??s.rojo,x+.004,w,A+.0365,{padre:p,r:.001,s:1,rz:-.6})},m=(p,x,w,A,b,P=.075)=>{let h=b==="x"?[x-.012,w,A]:[x,w,A-.012],l=b==="x"?[x+.012,w,A]:[x,w,A+.012];t.barra(P,h,l,n.inoxOsc,{padre:p,seg:18});for(let d=0;d<6;d++){let _=d*qe/3,g=Math.sin(_)*P*.78,f=Math.cos(_)*P*.78;b==="x"?t.barra(.01,[x-.02,w+g,A+f],[x+.02,w+g,A+f],n.negro,{padre:p,seg:6}):t.barra(.01,[x+f,w+g,A-.02],[x+f,w+g,A+.02],n.negro,{padre:p,seg:6})}},E=(p,x,w,A,b,P,h,l,d)=>{t.cil(b,P,h,x,w,A,{padre:p,seg:18}),d&&t.cil(b*1.02,P*.45,d,x,w+P*.28,A,{padre:p,seg:18}),t.cil(b*.72,P*.14,l,x,w+P,A,{padre:p,seg:14})},y=(p,x,w,A,{padre:b,h:P=.85,balda:h=!0}={})=>{let l=x-p,d=A-w,_=(p+x)/2,g=(w+A)/2;t.caja(l,.04,d,n.inoxCl,_,P-.04,g,{padre:b,r:.01,s:1}),t.caja(l-.04,.07,d-.04,n.inox,_,P-.11,g,{padre:b,r:.008,s:1});for(let f of[p+.05,x-.05])for(let S of[w+.05,A-.05])t.caja(.04,P-.11,.04,n.inox,f,.02,S,{padre:b,r:.006,s:1}),t.cil(.028,.02,n.goma,f,0,S,{padre:b,seg:10});h&&t.caja(l-.06,.025,d-.06,n.inox,_,.2,g,{padre:b,r:.006,s:1})};t.caja(Yi+un+.04,.24,Oi+un+.04,n.corte,-un/2,-.25,-un/2,{r:.03}),t.caja(Yi,.012,Oi,s.juntaH,0,-.012,0,{r:.002,s:1});{let p=Yi/3,x=Oi/2,w=[s.hormigon,s.hormigon2,s.hormigon3];for(let A=0;A<3;A++)for(let b=0;b<2;b++)t.caja(p-.016,.014,x-.016,w[(A+b*2)%3],Mt+p*(A+.5),-.012,ot+x*(b+.5),{r:.002,s:1})}let T=ot-un/2,v=(p,x,w,A,b,P)=>t.caja(p,x,w,n.pared,A,b,P,{r:.002,s:1}),R=1.85,C=3.12,M=2.55;v(R-(Mt-un),ji,un,(Mt-un+R)/2,0,T),v(Md-C,ji,un,(C+Md)/2,0,T),v(C-R,ji-M,un,(R+C)/2,M,T),v(un,ji,Oi,Mt-un/2,0,0),t.caja(Yi+un,.025,un,n.corte,-un/2,ji,T,{r:.004,s:1}),t.caja(un,.025,Oi,n.corte,Mt-un/2,ji,0,{r:.004,s:1}),t.caja(.012,ji,un,n.corte,Md+.006,0,T,{r:.002,s:1}),t.caja(un,ji,.012,n.corte,Mt-un/2,0,c3+.006,{r:.002,s:1});{t.caja(R-Mt,1.3,.01,s.zocalo,(Mt+R)/2,0,ot+.005,{r:.002,s:1}),t.caja(.01,1.3,Oi,s.zocalo,Mt+.005,0,0,{r:.002,s:1}),t.caja(R-Mt,.025,.02,n.inoxOsc,(Mt+R)/2,1.3,ot+.01,{r:.006,s:1}),t.caja(.02,.025,Oi,n.inoxOsc,Mt+.01,1.3,0,{r:.006,s:1}),t.caja(R-Mt,.06,.014,n.negro,(Mt+R)/2,0,ot+.007,{r:.003,s:1}),t.caja(.014,.06,Oi,n.negro,Mt+.007,0,0,{r:.003,s:1});let x=St(.05,ji-1.3-.1,.012,.004,1),w=Math.floor((R-Mt)/.14),A=Math.floor(Oi/.14),b=new ut(x,s.chapa,w+A),P=new Le,h=new Le().makeRotationY(qe/2),l=0;for(let _=0;_<w;_++)P.makeTranslation(Mt+.1+_*.14,1.3+.06+(ji-1.3-.1)/2,ot+.006),b.setMatrixAt(l++,P);for(let _=0;_<A;_++)P.copy(h).setPosition(Mt+.006,1.3+.06+(ji-1.3-.1)/2,ot+.1+_*.14),b.setMatrixAt(l++,P);b.count=l,b.castShadow=!1,b.receiveShadow=!0,e.add(b);let d=(_,g,f,S)=>{let I=Math.round(_/.78);for(let L=0;L<I;L++){let z=_/I,F=g?f+z*(L+.5):f,N=g?S:S+z*(L+.5);t.caja(g?z-.04:.02,.62,g?.02:z-.04,s.policarb,F,2.2,N,{r:.004,s:1})}t.caja(g?_:.026,.03,g?.026:_,n.hierro,g?f+_/2:f,2.16,g?S:S+_/2,{r:.005,s:1}),t.caja(g?_:.026,.03,g?.026:_,n.hierro,g?f+_/2:f,2.85,g?S:S+_/2,{r:.005,s:1})};d(R-Mt-.3,!0,Mt+.15,ot+.016),d(Oi-.3,!1,Mt+.016,ot+.15)}for(let p of[-2,-.3,1.3])t.barra(.014,[p,3.1,ot+.02],[p,3.1,ot+.62],n.hierro),t.barra(.008,[p,3.1,ot+.62],[p,2.82,ot+.62],n.negro,{seg:6}),t.cil(.05,.08,n.hierro,p,2.76,ot+.62,{seg:14}),t.cil(.06,.15,n.blanco,p,2.63,ot+.62,{rb:.2,seg:28,abierto:!0}),t.cil(.06,.012,s.luz,p,2.62,ot+.62,{rb:.17,seg:24}),t.toro(.2,.01,n.inoxOsc,p,2.63,ot+.62,{rx:qe/2});{let p=a("suelo",{frente:[.25,0,1],alto:.55,lado:.45,zoom:1.15,marco:"fregadora"}),{bx:x,cy:w,br:A,es:b,tr:P}=o(p),h=(g,f,S,I)=>x(Math.abs(S-g)+.1,.004,Math.abs(I-f)+.1,s.amarillo,(g+S)/2,0,(f+I)/2,{r:.001});h(-2.1,.55,2.1,.55),h(2.1,-1.4,2.1,.55),h(-.9,-1.4,1.75,-1.4),h(-.9,-.05,1.75,-.05),h(-.9,-1.4,-.9,-.05),h(1.75,-1.4,1.75,-.05);{let g=St(.1,.004,.1,.001,1),f=new ut(g,s.amarillo,32),S=new ut(g,n.negro,32),I=new Le,L=0,z=0,F=(B,V,X)=>{I.makeTranslation(B,.002,V),X%2?S.setMatrixAt(z++,I):f.setMatrixAt(L++,I)},N=0;for(let B=-1.9;B<=-1.04;B+=.1)F(-2.4,B,N++);for(let B=-3.2;B<=-2.45;B+=.1)F(B,-1,N++),F(B,-1.95,N++);f.count=L,S.count=z;for(let B of[f,S])B.receiveShadow=!0,p.add(B)}x(.5,.012,.22,n.hierro,.9,0,.9,{r:.003});for(let g=0;g<9;g++)x(.012,.014,.2,n.inoxOsc,.7+g*.05,0,.9,{r:.002});let l=(g,f,S,I=1,L=1)=>{let z=w(S,.003,s.mancha,g,0,f,{seg:24});z.scale.set(I,1,L),z.receiveShadow=!0,z.castShadow=!1};l(.25,.12,.26,1.35,.85),l(.5,.28,.17,1.2,.9),l(0,0,.13),l(-.6,.35,.1),l(.95,-.2,.08),l(.2,.4,.05),l(1.2,-1.15,.12,1.5,.8);let d=t.grupo("fregadora",p);d.userData.unidad=!0,d.position.set(1.15,0,1.3),d.rotation.y=-.45;let _=o(d);_.bx(1,.07,.52,n.negro,-.04,.07,0,{r:.02}),_.bx(.62,.52,.52,s.amarillo,-.1,.14,0,{r:.06,s:2}),_.bx(.36,.3,.5,s.amarillo,.3,.1,0,{r:.05,s:2}),_.bx(.4,.045,.56,n.goma,.34,.02,0,{r:.015}),_.bx(.56,.05,.46,n.gris,-.1,.65,0,{r:.02}),_.cy(.045,.035,n.azul,.04,.7,.1),_.bx(.34,.03,.06,n.negro,-.12,.7,-.12,{r:.012}),_.bx(.004,.2,.34,n.azul,-.1+.002,.3,.261-.261,{}),_.bx(.34,.2,.004,n.azul,-.1,.3,.262,{r:.002}),_.bx(.2,.05,.005,n.blanco,-.1,.4,.265,{r:.002}),_.bx(.3,.06,.005,n.negro,.3,.2,.256,{r:.002});for(let g of[-1,1])_.cy(.12,.06,n.goma,-.38,0,g*.3,{rx:qe/2,seg:20}),_.cy(.045,.07,n.inoxOsc,-.38,0,g*.3,{rx:qe/2,seg:12}),_.cy(.04,.03,n.goma,.42,0,g*.27,{rx:qe/2,seg:12});_.cy(.12,.02,n.negro,-.38,.12,0,{rz:qe/2,seg:8}).visible=!1,_.bx(.05,.07,.66,n.goma,-.62,.02,0,{r:.015}),_.bx(.04,.05,.66,n.gris,-.57,.08,0,{r:.01}),_.br(.012,[-.57,.1,-.2],[-.35,.28,-.15],n.inoxOsc),_.br(.012,[-.57,.1,.2],[-.35,.28,.15],n.inoxOsc);for(let g=0;g<6;g++)_.tr(.04,.008,n.negro,-.5+g*.02,.2+g*.025,-.22+g*.03,{rx:0,ry:.3});_.br(.016,[-.38,.5,-.2],[-.78,.98,-.2],n.inoxOsc),_.br(.016,[-.38,.5,.2],[-.78,.98,.2],n.inoxOsc),_.br(.018,[-.78,.98,-.3],[-.78,.98,.3],n.negro),_.bx(.2,.09,.2,n.negro,-.72,.95,0,{r:.02,rz:.4}),_.es(.016,n.verdeB,-.7,1.05,-.06),_.es(.016,s.rojo,-.7,1.05,.06),_.bx(.1,.03,.06,n.pantalla,-.745,1,0,{r:.006,rz:.4}),_.br(.012,[-.78,.98,0],[-.62,.88,0],n.azul),_.bx(.2,.012,.012,n.negro,-.78,.8,0,{r:.002}).visible=!1}{let p=a("pared",{frente:[.1,.1,1],alto:.18,lado:.12,zoom:1,mira:[0,.05,0]}),{bx:x,cy:w,br:A}=o(p),b=1.95,P=3.07,h=P-b,l=ot+.02;x(.07,M,.1,n.hierro,b-.035,0,ot-.02,{r:.008}),x(.07,M,.1,n.hierro,P+.035,0,ot-.02,{r:.008}),x(h+.2,.2,.14,n.inoxOsc,(b+P)/2,M-.02,ot-.04,{r:.015});let d=7,_=(M-.1)/d;for(let Q=0;Q<d;Q++)x(h,_-.012,.05,s.persiana,(b+P)/2,.06+Q*_,ot-0,{r:.006}),x(h,.012,.056,s.persianaJ,(b+P)/2,.06+Q*_+_-.012,ot-0,{r:.003});x(h,.06,.06,n.negro,(b+P)/2,0,ot-0,{r:.01}),x(.22,.03,.03,n.hierro,(b+P)/2,.3,ot+.04,{r:.01}),w(.02,.012,n.inoxOsc,P-.12,.55,ot+.03,{rx:qe/2});let g=ot+.031,f={mag:rt("#E6317D",{roughness:.7}),ama:rt("#FFC61A",{roughness:.7}),cia:rt("#19B4D8",{roughness:.7}),ver:rt("#5BC24B",{roughness:.7}),nar:rt("#F4742B",{roughness:.7}),bla:rt("#F7F7F2",{roughness:.7}),neg:rt("#1B1F23",{roughness:.7}),vio:rt("#6E48C9",{roughness:.75})},S=new Map,I=new Le,L=new fn,z=new Nn,F=new W,N=new W,B=.0042,V=.005,X=(Q,oe,te,ue,ve,Ae,Ue,Je,q)=>{F.set(b+te,ue,g+ve*B),L.setFromEuler(z.set(0,0,Ae)),N.set(Ue,Je,q);let lt=oe.clone().applyMatrix4(I.compose(F,L,N));S.has(Q)||S.set(Q,[]),S.get(Q).push(lt)},Z=new Un(1,1,1),se=new fi(.5,8,6),G=new bo(.5,1,3),j=(Q,oe,te,ue,ve,Ae=1)=>X(Q,se,oe,te,ve,0,2*ue,2*ue*Ae,V/.5*.5),re=(Q,oe,te,ue,ve,Ae,Ue,Je=!0)=>{let q=Math.hypot(ue-oe,ve-te),lt=Math.atan2(ve-te,ue-oe);X(Q,Z,(oe+ue)/2,(te+ve)/2,Ue,lt,q,Ae,V),Je&&(j(Q,oe,te,Ae/2,Ue),j(Q,ue,ve,Ae/2,Ue))},ce=(Q,oe,te,ue,ve,Ae,Ue,Je,q=!0)=>{let lt=new ir(ue,Ue/2,6,Math.max(6,Math.round((Ae-ve)*6)),Ae-ve);X(Q,lt,oe,te,Je,ve,1,1,V/Ue),q&&(j(Q,oe+Math.cos(ve)*ue,te+Math.sin(ve)*ue,Ue/2,Je),j(Q,oe+Math.cos(Ae)*ue,te+Math.sin(Ae)*ue,Ue/2,Je))},J=Q=>Q*qe/180,ge=[{c:f.mag,f:(Q,oe,te,ue,ve,Ae)=>{ce(Q,.27+ue,1.54+ve,.12,J(30),J(270),oe,te,Ae),ce(Q,.27+ue,1.3+ve,.12,J(-160),J(90),oe,te,Ae)}},{c:f.ama,f:(Q,oe,te,ue,ve,Ae)=>{ce(Q,.62+ue,1.52+ve,.19,0,qe,oe,te,!1),ce(Q,.62+ue,1.32+ve,.19,qe,2*qe,oe,te,!1),re(Q,.43+ue,1.32+ve,.43+ue,1.52+ve,oe,te,!1),re(Q,.81+ue,1.32+ve,.81+ue,1.52+ve,oe,te,!1)}},{c:f.cia,f:(Q,oe,te,ue,ve,Ae)=>{re(Q,.99+ue,1.72+ve,.99+ue,1.1+ve,oe,te,Ae),re(Q,.99+ue,1.1+ve,1.2+ue,1.1+ve,oe,te,Ae)}}];j(f.vio,.62,1.4,.58,0,.78),j(f.cia,.34,1.12,.34,1,.7),j(f.mag,.98,1.64,.3,1,.8),j(f.ver,.18,1.78,.2,1),j(f.ama,1.04,1.04,.2,1);for(let Q=0;Q<14;Q++){let oe=Q*2*qe/14+.1,te=Q%2?f.nar:f.ama;re(te,.62+Math.cos(oe)*.3,2+Math.sin(oe)*.3,.62+Math.cos(oe)*(Q%2?.43:.5),2+Math.sin(oe)*(Q%2?.43:.5),.045,2)}j(f.neg,.62,2,.27,2),j(f.bla,.62,2,.25,3),j(f.nar,.62,2,.21,4),j(f.ama,.58,2.04,.1,5),ce(f.neg,.62,2,.13,J(200),J(340),.025,6);for(let Q of ge)Q.f(f.neg,.16,7,.035,-.035,!0);for(let Q of ge)Q.f(f.bla,.16,8,0,0,!0);for(let Q of ge)Q.f(Q.c,.1,9,0,0,!0);ce(f.bla,.27,1.54,.12,J(110),J(170),.018,10),re(f.bla,.99,1.68,.99,1.4,.018,10),ce(f.bla,.62,1.52,.19,J(120),J(165),.018,10),ce(f.neg,.62,1.7,.74,J(246),J(294),.075,7),ce(f.bla,.62,1.7,.74,J(246),J(294),.065,8),ce(f.mag,.62,1.7,.74,J(246),J(294),.04,9);for(let[Q,oe,te,ue]of[[.22,1.13,.19,f.mag],[.34,1.11,.11,f.mag],[.55,1.08,.22,f.ama],[.7,1.08,.12,f.ama],[1,1.04,.2,f.cia],[1.15,1.04,.1,f.cia]])re(f.neg,Q+.01,oe,Q+.01,oe-te,.034,10),re(ue,Q,oe,Q,oe-te,.022,11),j(ue,Q,oe-te-.006,.019,11);let Oe=(Q,oe,te,ue,ve)=>{re(Q,oe-ue,te,oe+ue,te,ue*.22,ve,!1),re(Q,oe,te-ue,oe,te+ue,ue*.22,ve,!1),re(Q,oe-ue*.55,te-ue*.55,oe+ue*.55,te+ue*.55,ue*.14,ve,!1),re(Q,oe-ue*.55,te+ue*.55,oe+ue*.55,te-ue*.55,ue*.14,ve,!1)};Oe(f.neg,.14,2.27,.1,6),Oe(f.bla,.14,2.27,.088,7),Oe(f.ama,1.04,2.2,.075,7),Oe(f.bla,.2,1.95,.05,11),Oe(f.bla,1.07,1.88,.05,11),ce(f.neg,.62,.62,.42,J(25),J(150),.075,7),ce(f.cia,.62,.62,.42,J(25),J(150),.045,9),X(f.neg,G,.62+Math.cos(J(150))*.42-.02,.62+Math.sin(J(150))*.42-.03,7,J(150)-qe/2+.2,.17,.2,V/.5),X(f.cia,G,.62+Math.cos(J(150))*.42-.02,.62+Math.sin(J(150))*.42-.03,9,J(150)-qe/2+.2,.12,.15,V/.5);for(let Q=0;Q<6;Q++){let oe=Q%2?-1:1;ce(f.neg,.3+Q*.1,.4,.05,oe>0?0:qe,oe>0?qe:2*qe,.026,12,!1)}let le=[f.mag,f.ama,f.cia,f.ver,f.nar,f.vio];for(let Q=0;Q<40;Q++){let oe=i()*2*qe,te=.45+i()*.3;j(le[Q%6],.62+Math.cos(oe)*te*1,1.4+Math.sin(oe)*te*.9,.006+i()*.012,12)}for(let[Q,oe]of S){let te=new $e(vi(oe),Q);te.receiveShadow=!0,p.add(te)}A(.03,[P+.14,.05,ot+.04],[P+.14,2.9,ot+.04],n.inoxOsc)}{let p=a("ultrasonidos",{frente:[.15,.1,1],alto:.5,lado:.2,zoom:1.02}),{bx:x,cy:w,br:A,es:b}=o(p);y(-2.45,-1.45,-2.5,-1.8,{padre:p});let P=t.grupo("cuba",p);P.userData.unidad=!0;let h=o(P),l=-1.95,d=-2.16,_=.85;h.bx(.72,.3,.42,n.inox,l,_,d,{r:.02,s:2}),h.bx(.74,.02,.44,n.inoxCl,l,_+.3,d,{r:.008}),h.bx(.64,.002,.34,n.inoxOsc,l,_+.32,d,{r:.001});for(let[S,I,L,z]of[[.66,.02,0,-.18],[.66,.02,0,.18],[.02,.36,-.32,0],[.02,.36,.32,0]])h.bx(S,.08,I,n.inoxCl,l+L,_+.32,d+z,{r:.004});h.bx(.62,.004,.32,s.agua,l,_+.37,d,{r:.002}),h.bx(.4,.008,.22,n.inoxOsc,l-.04,_+.345,d,{r:.002});for(let[S,I,L,z]of[[.4,.008,0,-.11],[.4,.008,0,.11],[.008,.22,-.2,0],[.008,.22,.2,0]])h.bx(S,.11,I,n.inoxCl,l-.04+L,_+.345,d+z,{r:.002});for(let S=1;S<5;S++)h.bx(.4,.006,.006,n.inoxOsc,l-.04,_+.345+.11*S/5,d+.11,{r:.001});h.br(.008,[l-.24,_+.46,d-.05],[l+.16,_+.46,d-.05],n.inoxOsc);for(let[S,I,L]of[[-.14,.03,.055],[.04,-.04,.045],[-.02,.06,.035]]){h.cy(L,.018,n.inoxOsc,l+S,_+.36,d+I,{seg:16});for(let z=0;z<9;z++){let F=z*2*qe/9;h.bx(.014,.018,.012,n.inoxOsc,l+S+Math.cos(F)*L,_+.36,d+I+Math.sin(F)*L,{ry:-F,r:.002})}h.cy(L*.3,.02,n.negro,l+S,_+.363,d+I,{seg:8})}h.tr(.04,.012,n.inoxCl,l+.12,_+.385,d+.02,{rx:qe/2});for(let[S,I,L]of[[.1,-.06,.4],[.15,.06,1.2],[-.2,-.04,2.1]])h.br(.007,[l+S,_+.37,d+I],[l+S+Math.cos(L)*.07,_+.37,d+I+Math.sin(L)*.07],n.inoxOsc,{seg:6}),h.cy(.013,.01,n.inoxOsc,l+S,_+.365,d+I,{seg:6});h.bx(.62,.15,.02,n.negro,l,_+.07,d+.211,{r:.008}),h.bx(.16,.06,.008,n.pantalla,l-.17,_+.11,d+.225,{r:.004}),h.bx(.1,.02,.006,n.blanco,l-.17,_+.07,d+.225,{r:.003});for(let[S,I]of[[.04,n.inoxCl],[.15,n.inoxCl]])h.cy(.03,.025,I,l+S,_+.095,d+.225,{rx:qe/2,seg:18}),h.bx(.006,.026,.006,n.negro,l+S,_+.098,d+.252,{r:.002});h.cy(.016,.014,n.verdeB,l+.25,_+.12,d+.225,{rx:qe/2,seg:12}),h.cy(.016,.014,s.rojo,l+.25,_+.07,d+.225,{rx:qe/2,seg:12}),h.br(.012,[l+.22,_+.02,d+.2],[l+.22,_+.02,d+.27],n.inoxOsc),h.bx(.012,.05,.012,n.azul,l+.22,_+.02,d+.27,{r:.003});let g=t.grupo("tapa",P);g.position.set(l,_+.4,d-.21),g.rotation.x=-1.62;let f=o(g);f.bx(.74,.016,.42,n.inoxCl,0,0,.21,{r:.008}),f.bx(.62,.012,.32,n.inoxOsc,0,.016,.21,{r:.004}),f.bx(.3,.025,.02,n.negro,0,.02,.4,{r:.008});for(let S of[-.3,.3])f.cy(.014,.05,n.inoxOsc,S,0,0,{rz:qe/2,seg:10});Ve(t,n,-1.6,.2+.025,-2.22,{padre:p,ry:qe/2,escala:.75}),Ve(t,n,-1.62,.225,-2.05-.1,{padre:p,ry:.4,escala:.75}),x(.32,.02,.2,n.inoxCl,-2.28,.225,-2.1,{r:.004});for(let[S,I]of[[-2.34,-2.14],[-2.28,-2.05],[-2.2,-2.12]])w(.03,.012,n.inoxOsc,S,.245,I,{seg:12});It(t,n,-1.52,.85,-1.95,{padre:p,ry:.5}),x(.26,.012,.18,n.inoxCl,-2.32,.85,-2.3,{r:.004});for(let[S,I]of[[-2.38,-2.33],[-2.3,-2.27],[-2.25,-2.34]])w(.022,.016,n.inoxOsc,S,.862,I,{seg:10}),w(.008,.018,n.negro,S,.866,I,{seg:6})}{let p=a("lavadora",{frente:[.1,.1,1],alto:.66,lado:.25,zoom:1.08}),{bx:x,cy:w,br:A,tr:b}=o(p),P=-1.35,h=-.45,l=-2.45,d=-1.55,_=(P+h)/2,g=(l+d)/2;x(h-P,.1,d-l,n.hierro,_,0,g,{r:.015}),x(h-P-.02,1,d-l-.02,s.lav,_,.1,g,{r:.03,s:2}),x(.8,.5,.01,s.lavAzul,_,.2,d+.004,{r:.012}),x(.7,.4,.012,s.lav,_,.25,d+.012,{r:.012}),x(.12,.03,.03,n.inoxCl,_+.2,.55,d+.03,{r:.012}),x(.5,.012,.012,n.negro,_,.7,d+.004,{r:.002}),x(.7,.09,.01,s.lavAzul,_,.88,d+.005,{r:.005}),x(.84,.16,.12,s.lavAzul,_,.86,d-.12,{r:.02,rx:-.2}),x(.2,.07,.01,n.pantalla,_-.2,.9,d+.005,{r:.004,rx:-.2}),w(.03,.03,n.inoxCl,_+.05,.89,d+.005,{rx:qe/2-.2,seg:18}),w(.03,.03,n.inoxCl,_+.14,.89,d+.005,{rx:qe/2-.2,seg:18}),w(.02,.025,n.verdeB,_+.23,.9,d+.005,{rx:qe/2-.2,seg:12}),w(.036,.04,s.rojo,_+.33,.9,d+.01,{rx:qe/2-.2,seg:18});let f=1.1;for(let[F,N,B,V]of[[h-P,.05,0,(l-d)/2+.025+0],[h-P,.05,0,(d-l)/2-.025],[.05,d-l,(P-h)/2+.025,0],[.05,d-l,(h-P)/2-.025,0]])x(F,.06,N,n.inoxCl,_+B,f,g+V,{r:.01});x(h-P-.1,.01,d-l-.1,n.hierro,_,f-.03,g,{r:.002}),x(h-P-.1,.03,d-l-.1,n.inoxOsc,_,f-.12,g,{r:.002}).visible=!1,w(.3,.03,n.inoxCl,_,f-.1,g+.02,{seg:36}),w(.04,.1,n.inoxOsc,_,f-.1,g+.02,{seg:14});for(let F=0;F<14;F++){let N=F*2*qe/14;w(.018,.004,n.negro,_+Math.cos(N)*.22,f-.068,g+.02+Math.sin(N)*.22,{seg:8})}b(.27,.008,n.inoxCl,_,f+.07,g+.02,{rx:qe/2}),b(.27,.008,n.inoxCl,_,f-.06,g+.02,{rx:qe/2});for(let F=0;F<12;F++){let N=F*2*qe/12;A(.005,[_+Math.cos(N)*.27,f-.06,g+.02+Math.sin(N)*.27],[_+Math.cos(N)*.27,f+.07,g+.02+Math.sin(N)*.27],n.inoxCl,{seg:5})}w(.07,.1,n.hierro,_-.08,f-.06,g-.02,{seg:18}),w(.03,.05,n.inoxOsc,_-.08,f+.04,g-.02,{seg:12}),x(.16,.06,.1,n.inoxOsc,_+.1,f-.06,g+.08,{r:.01});for(let[F,N,B]of[[.14,-.1,.05],[-.14,.12,.045]]){w(B,.02,n.inoxOsc,_+F,f-.06,g+N,{seg:14});for(let V=0;V<8;V++){let X=V*qe/4;x(.014,.02,.012,n.inoxOsc,_+F+Math.cos(X)*B,f-.06,g+N+Math.sin(X)*B,{ry:-X,r:.002})}}A(.012,[_-.3,f+.02,g-.3],[_+.3,f+.02,g-.3],n.inoxOsc);let S=t.grupo("tapa",p);S.position.set(_,f+.04,l+.05),S.rotation.x=-1.6;let I=o(S);I.bx(h-P,.016,d-l-.02,n.inoxCl,0,0,.45,{r:.01}),I.bx(h-P,.03,d-l-.02,s.lavAzul,0,.016,.45,{r:.012}),I.bx(.4,.04,.03,n.negro,0,.04,.8,{r:.012}),I.bx(h-P-.12,.004,d-l-.14,n.gris,0,-.002,.45,{r:.002});for(let F of[-.4,.4])I.cy(.016,.06,n.inoxOsc,F,0,0,{rz:qe/2,seg:10});A(.012,[h-.02,.95,l+.12],[h-.02,1.4,l+.1],n.inoxOsc),A(.014,[h+.002,.3,g+.2],[h+.002,.8,g+.2],n.vidrio??n.blanco),A(.008,[h+.004,.3,g+.2],[h+.004,.62,g+.2],n.azul),x(.12,.16,.14,n.gris,h+.06,.4,g-.25,{r:.015}),w(.02,.04,n.negro,h+.06,.56,g-.25);let L=-2.18,z=-.25;x(.3,.46,.26,n.azul,z,0,L,{r:.05,s:2}),x(.32,.025,.27,n.azulOsc,z,.43,L,{r:.012}),x(.2,.2,.004,n.blanco,z,.12,L+.132,{r:.002}),x(.2,.05,.005,n.azulOsc,z,.22,L+.134,{r:.002}),w(.03,.04,n.azulOsc,z-.07,.46,L-.04),t.toro(.05,.012,n.azul,z+.07,.48,L-.06,{rx:0,padre:p,arco:qe}),w(.012,.05,n.inoxOsc,z+.16,.08,L+0,{rz:qe/2}),A(.007,[z-.07,.5,L-.04],[z-.07,.64,L-.04],n.azul),A(.007,[z-.07,.64,L-.04],[h+.04,.64,g-.25],n.azul),A(.007,[h+.04,.64,g-.25],[h+.06,.58,g-.25],n.azul)}{let p=a("intercambiador",{frente:[.1,.2,1],alto:.66,lado:.25,zoom:1.08}),{bx:x,cy:w,br:A,es:b,tr:P}=o(p),h=.45,l=1.68,d=-2.075,_=.46;x(.09,1.3,_,s.intAzul,h,.1,d,{r:.02}),x(.09,1.3,_,s.intAzul,1.5,.1,d,{r:.02}),x(.08,1.45,.3,s.intAzul,l-.04,0,d,{r:.02}),x(.4,.05,_+.04,n.hierro,h+.12,0,d,{r:.01}),x(.3,.05,_+.04,n.hierro,l-.12,0,d,{r:.01});{let I=St(.011,1.04,_-.06,.003,1),L=new ut(I,n.inoxCl,34),z=new Le,F=new Be;for(let N=0;N<34;N++)z.makeTranslation(h+.075+N*.0275+.013,.76,d),L.setMatrixAt(N,z),L.setColorAt(N,F.set("#E4E9EC").multiplyScalar(N%2?.8:1));L.castShadow=L.receiveShadow=!0,p.add(L),x(1.5-h-.09-.01,.012,_-.02,n.negro,(h+.09+1.5)/2,.24,d,{r:.003}),x(1.5-h-.09-.01,.012,_-.02,n.negro,(h+.09+1.5)/2,1.28,d,{r:.003})}A(.02,[h,1.34,d],[l,1.34,d],n.inoxOsc),A(.02,[h,.17,d],[l,.17,d],n.inoxOsc);for(let[S,I]of[[1.2,d-.2],[1.2,d+.2],[.3,d-.2],[.3,d+.2]]){A(.014,[h-.03,S,I],[l-.05,S,I],n.inoxOsc,{seg:8});for(let L of[h-.03,1.5+.045+0])w(.026,.026,n.inox,L-0,S-.013,I,{rx:qe/2,seg:6}).rotation.set(0,0,qe/2)}x(.006,.1,.16,n.blanco,1.5+.047,.9,d,{r:.002}),x(.006,.03,.12,s.rojo,1.5+.049,.97,d,{r:.002});let g=(S,I,L,z,F)=>{A(.055,[S,I,L],[S,I,ot+.02],s.alu,{seg:16}),A(.075,[S,I,ot+0],[S,I,ot+.03],n.inoxOsc,{seg:16});for(let N of[L-.08,(L+ot)/2+.03])N>ot+.06&&A(.059,[S,I,N],[S,I,N-.035],F,{seg:16})},f=(S,I,L,z,F)=>{A(.04,[h,S,I],[h-.1,S,I],n.inoxOsc,{seg:14}),m(p,h-.1,S,I,"x",.075),A(.04,[h-.1,S,I],[L,S,I],n.inoxOsc,{seg:14}),b(.052,n.inoxOsc,L,S,I);let N=h-.17;w(.05,.08,n.inox,N,S-.04,I,{seg:16}),A(.012,[N,S,I],[N,S+.1,I],n.inoxOsc,{seg:8}),x(.14,.014,.03,z,N-.02,S+.1,I-.015,{r:.005}),g(L,S,I,s.alu,z),F&&(A(.01,[h-.22,S+.05,I],[h-.22,S+.12,I],n.inoxOsc),u(p,h-.22,S+.17,I))};f(1.2,d-.17,h-.34,s.rojo,!1),f(1.2,d+.17,h-.46,s.rojo,!0),f(.3,d-.17,h-.34,s.azul??n.azul,!1),f(.3,d+.17,h-.46,n.azul,!1),A(.01,[1.45,1.4,d],[1.45,1.5,d],n.inoxOsc),b(.026,s.rojo,1.45,1.52,d)}{let p=a("torno",{frente:[.1,.18,1],alto:.45,lado:.2,zoom:.9}),{bx:x,cy:w,br:A,es:b,tr:P}=o(p),h=-.55,l=1.45,d=-.72,_=.78,g=1.24;x(.46,_,.56,s.verde,h,0,d,{r:.02,s:2}),x(.4,.3,.012,s.verdeOsc,h+.23,.2,d+.28,{r:.004}).visible=!1,x(.34,.5,.012,s.verdeOsc,h+.23,.18,d+.286,{r:.006}),x(.22,.03,.02,n.inoxCl,h+.23,.55,d+.3,{r:.008});for(let N=0;N<4;N++)x(.26,.006,.006,n.negro,h+.23,.12+N*.025,d+.294,{r:.002});x(.36,_,.46,s.verde,l-.36,0,d,{r:.02,s:2}),x(.24,.5,.012,s.verdeOsc,l-.18,.12,d+.236,{r:.006}),x(l-h-.82,.14,.52,n.inox,(h+.46+l-.36)/2,.12,d,{r:.012}),x(l-h-.86,.104,.46,n.hierro,(h+.46+l-.36)/2,.16,d,{r:.01});for(let N=0;N<26;N++){let B=t.toro(.012+i()*.02,.004,s.viruta,h+.55+i()*.6,.27+i()*.05,d+(i()-.5)*.36,{padre:p,rx:i()*qe,ry:i()*qe,arco:qe*(1.2+i())})}for(let N=0;N<4;N++)b(.05+i()*.02,s.viruta,h+.65+N*.17,.28,d+(i()-.5)*.2,{sy:.45});x(l-h,.2,.46,s.verde,(h+l)/2,_,d,{r:.02,s:2}),x(l-h-.1,.04,.08,n.inoxCl,(h+l)/2+.02,_+.2,d-.12,{r:.008}),x(l-h-.1,.04,.08,n.inoxCl,(h+l)/2+.02,_+.2,d+.12,{r:.008}),A(.016,[0,_+.1,d+.245],[l-.1,_+.1,d+.245],n.inoxOsc),A(.011,[0,_+.15,d+.245],[l-.1,_+.15,d+.245],n.inoxOsc,{seg:8});let f=_+.24;x(.58,.46,.56,s.verde,h,f,d,{r:.03,s:2}),x(.5,.04,.5,s.verdeOsc,h+.03,f+.46,d,{r:.01}),x(.26,.15,.006,n.blanco,h+.22,f+.24,d+.284,{r:.002});for(let N=0;N<4;N++)x(.2,.004,.003,n.negro,h+.22,f+.27+N*.025-.02,d+.288,{r:.001});for(let[N,B]of[[.1,.12],[.34,.12]])A(.01,[h+N,f+B,d+.28],[h+N,f+B,d+.35],n.inoxOsc,{seg:8}),b(.022,n.negro,h+N,f+B,d+.35);w(.034,.03,n.inoxCl,h+.45,f+.17,d+.28,{rx:qe/2,seg:16}),w(.034,.03,n.rojo??s.rojo,h+.5,f+.38,d+.28,{rx:qe/2,seg:16});let S=h+.29;A(.075,[S,g,d],[S+.12,g,d],n.inoxOsc,{seg:30}),A(.15,[S+.12,g,d],[S+.2,g,d],n.hierro,{seg:32}),A(.045,[S+.2,g,d],[S+.205,g,d],n.inoxCl,{seg:20});for(let N=0;N<3;N++){let B=qe/2+N*2*qe/3;x(.07,.05,.05,n.inoxCl,S+.205,g+Math.sin(B)*.085-.025,d+Math.cos(B)*.085-0,{r:.006}),b(.011,n.negro,S+.17,g+Math.sin(B)*.13,d+Math.cos(B)*.13)}A(.035,[S+.27,g,d],[1,g,d],n.inoxCl,{seg:20}),A(.032,[.7,g,d],[.82,g,d],n.inoxOsc,{seg:20}),x(.3,.12,.38,s.verde,1,_+.2,d,{r:.015}),x(.26,.26,.3,s.verde,1.02,_+.32,d,{r:.04,s:2}),A(.032,[.84,g,d],[1.04,g,d],n.inoxCl,{seg:16}),t.cil(.003,.05,n.inoxCl,.8,g-0,d,{padre:p,rb:.022,rz:qe/2}).position.set(.815,g,d),c(p,1.19,g,d,.07,"x",n.inoxCl),A(.013,[1.17,g,d],[1.04,g,d],n.inoxOsc,{seg:8}),x(.04,.05,.04,n.negro,1,_+.58,d+.05,{r:.01}).visible=!1;let I=.32;x(.42,.06,.54,s.verde,I,_+.2,d-0,{r:.015}),x(.3,.05,.34,s.verdeOsc,I,_+.26,d+.04,{r:.012}),x(.26,.035,.2,n.inoxCl,I,_+.31,d+.04,{r:.008}),x(.1,.06,.1,n.hierro,I+.03,_+.345,d-.05,{r:.01}),x(.07,.03,.03,n.inoxCl,I+.07,_+.37,d-.11,{r:.004,ry:.2}),x(.4,.34,.07,s.verde,I,_-.12,d+.27,{r:.015}),c(p,I-.05,_-.02,d+.33,.085,"z",n.inoxCl),c(p,I+.12,_-.1,d+.33,.045,"z",n.inoxCl),A(.011,[I+.08,_+.31,d+.15],[I+.08,_+.31,d+.3],n.inoxOsc,{seg:8}),b(.02,n.negro,I+.08,_+.31,d+.31),w(.012,.09,n.negro,I+.17,_+.28,d+.04,{seg:6}),A(.009,[h+.45,f+.5,d-.2],[h+.45,f+.78,d-.2],n.negro,{seg:6}),A(.009,[h+.45,f+.78,d-.2],[h+.6,f+.82,d-.03],n.negro,{seg:6}),t.cil(.03,.06,n.blanco,h+.6,f+.8,d-.03,{padre:p,rb:.055,seg:14}),t.cil(.03,.012,s.luz,h+.6,f+.79,d-.03,{padre:p,rb:.05,seg:14});let L=-1.05,z=-.62;x(.58,.8,.42,s.rojo,L,.1,z,{r:.02,s:2}),x(.62,.035,.46,s.rojoOsc,L,.9,z,{r:.012});for(let N=0;N<5;N++)x(.5,.115,.006,s.rojoOsc,L,.15+N*.145,z+.212,{r:.004}),x(.22,.014,.022,n.inoxCl,L,.2+N*.145,z+.225,{r:.006});for(let[N,B]of[[L-.24,z-.16],[L+.24,z-.16],[L-.24,z+.16],[L+.24,z+.16]])w(.05,.035,n.goma,N,0,B,{rz:qe/2,seg:14}),x(.04,.06,.05,n.hierro,N,.04,B,{r:.008});A(.012,[L+.3,.55,z+.12],[L+.38,.55,z+.12],n.inoxOsc),A(.012,[L+.3,.55,z-.1],[L+.38,.55,z-.1],n.inoxOsc),A(.012,[L+.38,.55,z-.1],[L+.38,.55,z+.12],n.inoxOsc);let F=(N,B,V,X)=>{E(p,N,.935,B,.034,.2,V,n.negro,X),w(.012,.025,n.blanco,N,1.165,B,{seg:8}),x(.03,.012,.02,n.blanco,N+.012,1.18,B,{r:.003})};F(L-.08,z+.12,n.azulOsc,n.blanco),F(L+0,z+.14,s.naranja,n.blanco),w(.04,.12,n.inoxCl,L+.15,.935,z-.05,{seg:14}),x(.1,.022,.026,n.inoxOsc,L-.16,.935,z-.08,{r:.006,ry:.4}),x(.14,.012,.06,s.tela,L+.1,.935,z+.05,{r:.005,ry:.3})}{let p=a("cuadro",{frente:[1,.1,.35],alto:.5,lado:.5,zoom:.85,marco:"armario"}),x=t.grupo("armario",p);x.userData.unidad=!0;let{bx:w,cy:A,br:b,es:P}=o(x),h=-1.95,l=-1.15,d=1.05,_=2.15,g=.25,f=Mt,S=f+g,I=(h+l)/2;w(.02,_-d,l-h,s.cuadro,f+.01,d,I,{r:.005}),w(g,.025,l-h,s.cuadro,f+g/2,d,I,{r:.006}),w(g,.025,l-h,s.cuadro,f+g/2,_-.025,I,{r:.006}),w(g,_-d,.022,s.cuadro,f+g/2,d,h+.011,{r:.005}),w(g,_-d,.022,s.cuadro,f+g/2,d,l-.011,{r:.005}),w(.012,_-d-.1,l-h-.1,s.placa,f+.03,d+.05,I,{r:.003});let L=f+.036,z=[1.9,1.62,1.34];for(let se of z)w(.012,.035,l-h-.14,n.inoxOsc,L,se-0,I,{r:.002});for(let se of[1.75,1.47,1.17]){w(.05,.05,l-h-.12,n.blanco,L+.02,se-.025,I,{r:.004});for(let G=0;G<22;G++)w(.052,.04,.006,n.gris,L+.02,se-.023,h+.1+G*.034,{r:.001})}{let j=St(.0175,.09,.06,.003,1),re=St(.0195-.008,.02,.014,.002,1),ce=new ut(j,n.blanco,14),J=new ut(re,n.negro,14),ge=new Le,Oe=new Be;for(let te=0;te<14;te++){let ue=h+.2+te*.0195;ge.makeTranslation(L+.036,z[0]+0,ue),ce.setMatrixAt(te,ge),ge.makeTranslation(L+.072,z[0]+.005+(te%3===0?.015:0),ue),J.setMatrixAt(te,ge),ce.setColorAt(te,Oe.set(te%5===4?"#D5DCE0":"#F3F6F8"))}for(let te of[ce,J])te.castShadow=te.receiveShadow=!0,x.add(te);w(.07,.11,.1,n.negro,L+.035,z[0]-.045,l-.2,{r:.008}),A(.035,.03,s.amarillo??n.amarillo,l-.2-0,0,0,{seg:1}).visible=!1,t.cil(.035,.035,s.amarillo,L+.08,z[0]-.045-0,l-.2,{padre:x,rz:qe/2,seg:20}).position.set(L+.09,z[0]+.01,l-.2),t.cil(.02,.05,s.rojo,L+.11,z[0]-0,l-.2,{padre:x,rz:qe/2,seg:14}).position.set(L+.13,z[0]+.01,l-.2);for(let te=0;te<4;te++){let ue=h+.2+te*.058;w(.05,.1,.06,n.gris,L+.04,z[1]-.045,ue,{r:.006}),w(.052,.025,.056,n.azul,L+.04,z[1]+.055,ue,{r:.004}),P(.008,n.negro,L+.075,z[1]+0,ue)}for(let te=0;te<5;te++)w(.06,.07,.022,n.inoxOsc,L+.04,z[1]-.03,l-.55+te*.026,{r:.004}),w(.062,.012,.018,s.verdeB,L+.04,z[1]+.045,l-.55+te*.026,{r:.002});let le=St(.044,.05,.009,.002,1),Q=new ut(le,n.gris,30),oe=["#7B8890","#2E5FA3","#C9B21D","#2E8B57","#7B8890"];for(let te=0;te<30;te++)ge.makeTranslation(L+.022,z[2]-.02,h+.15+te*.0145),Q.setMatrixAt(te,ge),Q.setColorAt(te,Oe.set(oe[te%5]));Q.castShadow=Q.receiveShadow=!0,x.add(Q)}for(let se=0;se<18;se++){let G=h+.12+se*.038+i()*.01,j=s.cable[se%s.cable.length];b(.0045,[L+.03,1.77,G],[L+.05,1.86,G],j,{seg:5}),b(.0045,[L+.03,1.5,G+.01],[L+.05,1.58,G+.012],s.cable[(se+2)%s.cable.length],{seg:5})}for(let se of[I-.22,I,I+.22])A(.022,.03,n.negro,f+.1,d-.03,se,{seg:10});for(let se of[I-.22,I+.22])b(.018,[f+.1,d-.03,se],[f+.1,.05,se],n.negro,{seg:8});let F=t.grupo("puerta",x);F.position.set(S,0,h),F.rotation.y=1.62;let N=o(F);N.bx(.025,_-d-.01,l-h-.02,s.cuadro,0,d+.005,(l-h)/2,{r:.006}),N.bx(.01,.4,.3,n.blanco,-.012,1.55,.4,{r:.002});for(let se=0;se<6;se++)N.bx(.011,.004,.2,n.gris,-.013,1.65+se*.045-.15,.4,{r:.001});N.bx(.012,.1,.1,s.amarillo,-.012,1.95,.12,{r:.003}),N.bx(.04,.06,.03,n.negro,.02,1.58,.74,{r:.008});for(let se of[d+.1,_-.1])N.cy(.012,.06,n.inoxOsc,-.008,se-.03,0,{seg:8});{let se=new Mn;se.moveTo(0,.28),se.lineTo(-.16,0),se.lineTo(.16,0),se.closePath();let G=new Bn(se,{depth:.01,bevelEnabled:!0,bevelThickness:.004,bevelSize:.008,bevelSegments:1}),j=new $e(G,s.amarillo);j.rotation.y=qe/2,j.position.set(f+.012,1.55,l+.22),j.castShadow=j.receiveShadow=!0,x.add(j);let re=new Mn;re.moveTo(0,.2),re.lineTo(-.07,.02),re.lineTo(-.01,.02),re.lineTo(-.04,0),re.lineTo(.07,.08),re.lineTo(.015,.1),re.lineTo(.05,.2),re.closePath();let ce=new $e(new Bn(re,{depth:.004,bevelEnabled:!1}),n.negro);ce.rotation.y=qe/2,ce.position.set(f+.026,1.58,l+.22+.01),ce.scale.set(1,.8,1),x.add(ce)}let B=t.grupo("bandeja",p),V=o(B),X=I;V.bx(.012,.8,.3,n.inoxCl,f+.012,_,X,{r:.003}),V.bx(.06,.8,.012,n.inoxCl,f+.04,_,X-.15,{r:.003}),V.bx(.06,.8,.012,n.inoxCl,f+.04,_,X+.15,{r:.003});for(let se=0;se<8;se++)V.bx(.012,.012,.3,n.inoxOsc,f+.022,_+.05+se*.1,X,{r:.002});for(let se=0;se<7;se++)V.br(.008,[f+.03,_-0,X-.12+se*.04],[f+.03,_+.8,X-.12+se*.04],s.cable[se%6],{seg:6});let Z=_+.8;V.bx(.3,.012,X-ot-0,n.inoxCl,f,Z,(X+ot)/2,{r:.003}),V.bx(.012,.06,X-ot,n.inoxCl,f+.3,Z,(X+ot)/2,{r:.003}),V.bx(Yi*.58,.012,.3,n.inoxCl,f+Yi*.29,Z,ot+.15,{r:.003}),V.bx(Yi*.58,.06,.012,n.inoxCl,f+Yi*.29,Z,ot+.3,{r:.003});for(let se=0;se<6;se++)V.br(.008,[f+.06+se*.03,Z+.02,X-.02],[f+.06+se*.03,Z+.02,ot+.1+se*.01],s.cable[se%6],{seg:6});for(let se=0;se<6;se++)V.br(.008,[f+.06,Z+.02+se%3*0,ot+.06+se*.04],[f+Yi*.55,Z+.02,ot+.06+se*.04],s.cable[(se+1)%6],{seg:6});for(let se of[f+.6,f+1.8,f+3])V.bx(.02,.2,.02,n.inoxOsc,se,Z-.2,ot+.15,{r:.004})}{let p=a("banco",{frente:[1,.2,.15],alto:.4,lado:.1,zoom:.85}),{bx:x,cy:w,br:A,es:b,tr:P}=o(p),h=-.9,l=.5,d=(h+l)/2,_=-2.52,g=Mt,f=.92,S=(g+_)/2;x(_-g-.03,.05,l-h,n.madera,S+.015,f-.05,d,{r:.012}),x(.015,.1,l-h,s.verde??n.gris,_,f-.12,d,{r:.004}).visible=!1,x(_-g-.06,.08,l-h-.04,n.inoxOsc,S,f-.13,d,{r:.01});for(let I of[h+.06,l-.06])for(let L of[g+.06,_-.06])x(.06,f-.13,.06,n.azulOsc,L,.02,I,{r:.008});x(_-g-.12,.03,l-h-.1,n.inox,S,.22,d,{r:.006}),x(.5,.65,.5,n.azulOsc,S+.02,.04,h+.3,{r:.015,s:2}).visible=!1;for(let I=0;I<3;I++)x(.02,.17,.4,n.azul,_-0,.3+I*.18-.2,h+.3,{r:.006}).visible=!1;Ve(t,n,-2.95,.2+.03,h+.3,{padre:p,ry:.15}),Ve(t,n,-2.95,.2+.03,h+.58,{padre:p,ry:-.1}),Ve(t,n,-2.95,.2+.03,d+.2,{padre:p,ry:.05,escala:.8}),E(p,-2.7,.25,d+.35,.07,.18,n.inoxCl,n.azul,s.rojo),E(p,-2.7,.25,d+.15,.06,.15,n.inoxCl,n.negro,n.blanco),E(p,-2.78,f,h+.2,.06,.15,n.inoxCl,n.negro,s.rojo),E(p,-2.78,f,h+.34,.055,.13,n.inoxCl,n.negro,n.azul),w(.05,.2,n.blanco,-2.7,f,h+.46,{seg:14}),w(.02,.04,n.azul,-2.7,f+.2,h+.46,{seg:10}),x(.12,.008,.08,n.azul,-2.65,f+.08,h+.46,{r:.002}).visible=!1,b(.08,s.tela,-2.98,f+.05,d+.15,{sy:.55}),b(.06,s.tela,-2.92,f+.04,d+.26,{sy:.5}),x(.2,.01,.12,s.tela,-2.62,f,d+.08,{r:.005,ry:.4}),x(.12,.2,.01,s.tela,_+.01,f-.2,d+.35,{r:.004}),x(.2,.07,.16,n.gris,-2.8,f,d+.05,{r:.012}),x(.12,.012,.09,n.negro,-2.8,f+.07,d+.05,{r:.004}),x(.2,.05,.16,n.gris,-2.8,f+.09+0,d-.18,{r:.012,ry:.3}),w(.035,.05,s.naranja,-2.65,f,d-.12,{seg:14}),w(.012,.052,n.negro,-2.65,f,d-.12,{seg:8}),It(t,n,-2.7,f,d+.05,{padre:p,ry:.6,cuerpo:n.blanco});{let I=l-.12,L=-2.78;x(.2,.05,.22,n.hierro,L,f,I,{r:.008}),x(.16,.12,.03,n.azulOsc,L,f+.05,I-.07,{r:.006}),x(.16,.1,.03,n.azulOsc,L,f+.05,I+.04,{r:.006}),x(.14,.012,.03,n.inoxOsc,L,f+.15,I-.07,{r:.002}),A(.014,[L,f+.08,I+.055],[L,f+.08,I+.26],n.inoxOsc),A(.011,[L-.07,f+.08,I+.22],[L+.07,f+.08,I+.22],n.negro,{seg:8}),b(.016,n.negro,L-.07,f+.08,I+.22),b(.016,n.negro,L+.07,f+.08,I+.22),w(.025,.1,n.inoxCl,L,f+.05,I-.02,{seg:12})}A(.012,[-3.1,f,h+.12],[-3.1,f+.55,h+.12],n.negro,{seg:6}),A(.01,[-3.1,f+.55,h+.12],[-2.85,f+.75,h+.3],n.negro,{seg:6}),t.cil(.03,.07,n.blanco,-2.85,f+.7,h+.3,{padre:p,rb:.07,seg:16,rz:.4}),w(.07,.04,n.inox,-3.1,f,h+.12,{seg:12});{let z=h+.03,F=l-.03,N=F-z,B=(z+F)/2;x(.014,.86,N,rt("#CFD6DA",{roughness:.6}),g+.007,1.12,B,{r:.004});let V=new ei(.007,.007,.004,8);V.rotateZ(qe/2);let X=Math.floor(N/.05),Z=Math.floor(.86/.05),se=new ut(V,n.gris,X*Z),G=new Le,j=0;for(let J=0;J<Z;J++)for(let ge=0;ge<X;ge++)G.makeTranslation(g+.0145,1.12+.03+J*.05,z+.03+ge*.05),se.setMatrixAt(j++,G);se.count=j,p.add(se);let re=g+.026,ce=(J,ge,Oe,le)=>{x(.008,Oe,.02,le,re,ge-Oe,J,{r:.003}),t.toro(.022,.007,le,re,ge-Oe,J,{padre:p,rx:0,ry:qe/2}),t.toro(.022,.007,le,re,ge,J,{padre:p,rx:0,ry:qe/2})};[[0,1.9,.26],[.07,1.9,.22],[.14,1.9,.19],[.21,1.9,.16],[.28,1.9,.14]].forEach(([J,ge,Oe],le)=>ce(z+.1+J,ge,Oe,le%2?n.inoxCl:n.inox));for(let[J,ge,Oe]of[[.5,s.amarillo,.16],[.56,s.rojo,.2],[.62,n.azul,.14]])A(.004,[re,1.9,z+J],[re,1.9-Oe,z+J],n.inoxCl,{seg:5}),w(.011,.08,ge,re,1.9-Oe-.08,z+J,{seg:8});A(.007,[re,1.9,z+.85],[re,1.72,z+.82],s.rojo,{seg:6}),A(.007,[re,1.9,z+.8],[re,1.72,z+.83],s.rojo,{seg:6}),A(.007,[re,1.9,z+1],[re,1.62,z+1],n.madera,{seg:6}),x(.025,.04,.1,n.hierro,re,1.62,z+.95,{r:.006}),x(.04,.06,.06,s.amarillo,re,1.5,z+.16,{r:.012}),P(.035,.012,n.negro,re+0,1.55,z+.5,{rx:0,ry:qe/2}),x(.02,.1,.1,n.negro,re,1.3,z+.7,{r:.008,rx:.3}),x(.02,.012,.35,n.hierro,re,1.18,z+.9,{r:.003}).visible=!1}}{let p=a("manos",{frente:[1,.15,.1],alto:.3,lado:.1,zoom:.8}),{bx:x,cy:w,br:A,es:b}=o(p),P=1.38,h=Mt;x(.12,.3,.6,n.inoxCl,h,1,P,{r:.008}).visible=!1,x(.04,.3,.58,n.inoxCl,h+.02,.98,P,{r:.006}),x(.42,.16,.58,n.inox,h+.21,.78,P,{r:.03,s:2}),x(.42,.02,.6,n.inoxCl,h+.21,.94,P,{r:.008});for(let[_,g,f,S]of[[.42,.03,0,-.285],[.42,.03,0,.285],[.03,.6,.195,0]])x(_,.05,g,n.inoxCl,h+.21+f,.94,P+S,{r:.006});x(.34,.004,.46,n.inoxOsc,h+.2,.95,P,{r:.002}),w(.03,.006,n.hierro,h+.2,.952,P,{seg:14}),A(.015,[h+.1,.96,P],[h+.1,1.2,P],n.inoxCl),A(.015,[h+.1,1.2,P],[h+.26,1.2,P],n.inoxCl),A(.013,[h+.26,1.2,P],[h+.26,1.13,P],n.inoxCl),w(.022,.03,n.inoxOsc,h+.26,1.1,P,{seg:12}),A(.01,[h+.06,1,P+.16],[h+.06,1.12,P+.16],n.inoxOsc),b(.02,s.rojo,h+.06,1.14,P+.16),A(.016,[h+.1,.78,P],[h+.1,.5,P],n.inoxOsc),x(.16,.025,.1,n.inoxCl,h+.34,0,P,{r:.01,rz:.12}),A(.01,[h+.28,.03,P],[h+.1,.45,P],n.inoxOsc);let l=(_,g,f)=>{x(.12,.26,.12,n.blanco,h+.06,1.2,_,{r:.02,s:2}),x(.006,.12,.1,g,h+.123,1.28,_,{r:.002}),x(.006,.03,.07,f,h+.125,1.33,_,{r:.002}),x(.006,.08,.08,n.vidrioOsc,h+.123,1.22,_,{r:.002}).visible=!1,w(.024,.05,g,h+.1,1.15,_,{seg:12}),A(.01,[h+.1,1.2,_],[h+.16,1.28,_],n.inoxCl),A(.01,[h+.16,1.28,_],[h+.16,1.36,_],n.inoxCl,{seg:6})};l(P-.2,n.azul,n.blanco),l(P+.16,s.naranja,n.blanco),b(1e-4,n.blanco,h,0,0).visible=!1;let d=P+.64;x(.24,.34,.3,n.gris,h,1.12,d,{r:.03,s:2}),x(.01,.2,.2,n.blanco,h+.245,1.19,d,{r:.004}).visible=!1,A(.12,[h+.16,1.32,d-.07],[h+.16,1.32,d+.07],s.papel,{seg:28}),A(.045,[h+.16,1.32,d-.07],[h+.16,1.32,d+.075],n.inoxOsc,{seg:12}),x(.01,.25,.18,s.papel,h+.15,1,d,{r:.002}),x(.14,.014,.14,n.azul,h+.21,1.06,d,{r:.004}),x(.14,.03,.3,n.hierro,h+.06,1,d,{r:.006}).visible=!1,w(.14,.4,n.azulOsc,h+.2,0,d,{rb:.12,seg:20}),w(.145,.025,n.negro,h+.2,.4,d,{seg:20})}{let p=t.grupo("extintor"),{bx:x,cy:w,br:A,es:b}=o(p),P=.78,h=Mt+.1;x(.01,.2,.2,s.rojo,Mt+.006,1.55,P,{r:.002}),x(.012,.1,.09,n.blanco,Mt+.012,1.6,P,{r:.002}),w(.075,.45,s.rojo,h,.28,P,{seg:20,rb:.075}),b(.075,s.rojo,h,.73,P,{sy:.5}),w(.02,.06,n.negro,h,.77,P,{seg:10}),x(.1,.012,.03,n.negro,h-0,.83,P,{r:.004}),A(.01,[h,.78,P],[h+.08,.5,P+.1],n.negro,{seg:6}),x(.012,.06,.12,n.blanco,h+.074,.55,P,{r:.002}),x(.14,.012,.03,n.hierro,Mt+.07,.62,P,{r:.003});let l=Mt+.02,d=l+.46,_=1.95,g=2.46;for(let I of[l+.02,d-.02])for(let L of[_+.02,g-.02])x(.04,1.75,.04,n.azulOsc,I,0,L,{r:.006});for(let I=0;I<4;I++){let L=.2+I*.5;if(x(d-l,.025,g-_,n.inoxCl,(l+d)/2,L,(_+g)/2,{r:.005}),I<3)for(let z=0;z<2;z++)Ve(t,n,(l+d)/2+0,L+.025,_+.13+z*.24,{padre:p,ry:qe/2+(z?.08:-.05),escala:1})}x(.3,.16,.22,s.carton,(l+d)/2,1.725,_+.12,{r:.006}),x(.3,.12,.22,s.carton,(l+d)/2,1.725,_+.36,{r:.006});let f=2.65,S=1.5;for(let I=0;I<3;I++)x(1,.09,.1,n.madera,f,0,S-.35+I*.35,{r:.006});for(let I=0;I<5;I++)x(.14,.02,.95,n.madera,f-.43+I*.215,.09,S,{r:.004});x(.44,.32,.36,s.carton,f-.22,.11,S-.15,{r:.01}),x(.44,.32,.36,s.carton,f+.26,.11,S-.15,{r:.01}),x(.44,.32,.36,s.carton,f-.22,.47,S-.15,{r:.01,ry:.06}),x(.2,.18,.004,n.azul,f-.22,.2,S+.056,{r:.002}),x(.2,.18,.004,n.azul,f+.26,.2,S+.056,{r:.002}),x(.2,.18,.004,n.azul,f-.22,.56,S+.056,{r:.002}).position.z+=0;for(let[I,L]of[[2.6,.5],[2.62,1.1]]){w(.28,.88,n.azulOsc,I,0,L,{seg:28});for(let F of[.12,.44,.74])t.toro(.282,.014,n.azul,I,F,L,{padre:p,rx:qe/2});w(.27,.012,n.inoxOsc,I,.88,L,{seg:28}),w(.03,.025,n.negro,I+.1,.892,L,{seg:10}),w(.022,.02,n.negro,I-.12,.892,L+.06,{seg:10}),x(.2,.26,.004,n.blanco,I,.3,L+.283,{r:.002,ry:0}).visible=!1}}{let p=t.grupo("atrezo-delante"),{bx:x,cy:w,es:A}=o(p);x(.8,.42,.55,s.verdeOsc,-1.2,.1,2.1,{r:.02}),x(.72,.04,.47,n.negro,-1.2,.5,2.1,{r:.01});for(let b=0;b<8;b++)A(.05+i()*.03,s.viruta,-1.4+i()*.4,.53+i()*.03,1.95+i()*.25,{sy:.5});for(let b of[-1.5,-.9])for(let P of[1.9,2.3])w(.045,.1,n.goma,b,0,P,{rz:qe/2,seg:10});x(.9,.12,.7,s.amarillo,-.1,0,2.05,{r:.015}),x(.8,.02,.6,n.hierro,-.1,.12,2.05,{r:.004});for(let[b,P]of[[-.2,-.12],[.1,-.12],[-.2,.14],[.1,.14]])Ve(t,n,-.1+b,.14,2.05+P,{padre:p,ry:.2*(b+P)})}let D=p=>{p.updateMatrixWorld(!0);let x=p.matrixWorld.clone().invert(),w=new Map,A=[],b=P=>{for(let h of P.children)if(!h.userData.unidad&&!h.isInstancedMesh)if(h.isMesh){if(A.push(h),!h.visible)continue;let l=h.geometry.clone();for(let _ of Object.keys(l.attributes))["position","normal","uv"].includes(_)||l.deleteAttribute(_);l.clearGroups(),l.applyMatrix4(new Le().multiplyMatrices(x,h.matrixWorld));let d=`${h.material.uuid}|${!!l.index}|${h.castShadow}|${h.receiveShadow}`;w.has(d)||w.set(d,{mat:h.material,cast:h.castShadow,recibe:h.receiveShadow,lista:[]}),w.get(d).lista.push(l)}else b(h)};b(p);for(let P of A)P.parent.remove(P);for(let{mat:P,cast:h,recibe:l,lista:d}of w.values()){let _=new $e(vi(d),P);_.castShadow=h,_.receiveShadow=l,p.add(_)}},O=[];return e.traverse(p=>{p.userData.unidad&&O.push(p)}),O.reverse().forEach(D),D(e),{raiz:e,puntos:r}}var Vm={crear:l3,mira:[0,.95,-.3],az:.62,el:.5,radio:4.3};var oi=2.85,Nt=.16,yi=2.05;function h3(n){let e=new zt,t=Sn(e),i=bn(19),r={},a=(h,l={})=>{let d=t.grupo(h);return r[h]={grupo:d,...l},d},s=(h,l={})=>new Gt({color:h,roughness:.6,metalness:0,...l}),o={resina:s("#9AA5AB",{roughness:.5}),resinaCl:s("#FFFFFF",{roughness:.5}),lama:s("#7CC9BC",{roughness:.2,transparent:!0,opacity:.8,depthWrite:!1}),leche:s("#F7F5EA",{roughness:.12}),suero:s("#CDBB5E",{roughness:.1}),cuajada:s("#FFFCEE",{roughness:.55}),charco:s("#E9DE9E",{roughness:.04,transparent:!0,opacity:.6,depthWrite:!1}),queso:s("#F6F2E3",{roughness:.6}),corteza:s("#E3C987",{roughness:.6}),quesoCur:s("#D9B25F",{roughness:.65}),molde:s("#CFE3EE",{roughness:.35}),agujero:s("#566F7D",{roughness:.6}),caja:s("#7C97A6",{roughness:.55}),cajaOsc:s("#4A5E6A",{roughness:.7}),manguera:s("#4C7184",{roughness:.5}),cobre:s("#C5762F",{metalness:.7,roughness:.3}),rojo:s("#CE3A2C",{roughness:.4}),verde:s("#5DB34F",{roughness:.4,emissive:"#3C9A36",emissiveIntensity:.4}),delantal:s("#CFE3F0",{roughness:.85}),sello:s("#E9EEF0",{roughness:.9})},c=(h,l,d,_,g,f,S,I={})=>t.caja(h,l,d,_,g,f-l/2,S,I),u=(h,l,d,_,g,f,S={})=>t.cil(h,l,d,_,g-l/2,f,{rx:Math.PI/2,...S}),m=(h,l,d,_,g,f,S={})=>t.cil(h,l,d,_,g-l/2,f,{rz:Math.PI/2,...S}),E=(h,l,d,_,g=!0)=>{let f=new ut(h,l,d.length);return d.forEach((S,I)=>f.setMatrixAt(I,S)),f.castShadow=g,f.receiveShadow=!0,(_||e).add(f),f},y=new W,T=new W,v=new fn,R=new Nn,C=(h,l,d,_=1,g=1,f=1,S=0)=>(y.set(h,l,d),T.set(_,g,f),v.setFromEuler(R.set(0,S,0)),new Le().compose(y,v,T)),M=(h,l,d,_=n.inoxCl)=>{for(let g=0;g<h.length-1;g++)t.barra(l,h[g],h[g+1],_,{padre:d,seg:14});for(let g=1;g<h.length-1;g++)t.esfera(l*1.18,_,h[g][0],h[g][1],h[g][2],{padre:d})},D=(h,l,d,_,g,f=.036)=>{let S=_==="x"?{rz:Math.PI/2}:_==="z"?{rx:Math.PI/2}:{};t.cil(f,.014,n.inox,h,l-.007,d,{padre:g,seg:14,...S})},O=(h,l,d,_,g="x")=>{let f=g==="x"?{rz:Math.PI/2}:g==="z"?{rx:Math.PI/2}:{};t.cil(.042,.075,n.inoxOsc,l,d-.0375,_,{padre:h,seg:16,...f});let S=.05;g==="x"&&(D(l-S,d,_,"x",h,.036),D(l+S,d,_,"x",h,.036)),g==="z"&&(D(l,d,_-S,"z",h,.036),D(l,d,_+S,"z",h,.036)),g==="y"&&(t.cil(.036,.014,n.inox,l,d-S-.007,_,{padre:h,seg:14}),t.cil(.036,.014,n.inox,l,d+S-.007,_,{padre:h,seg:14})),g==="y"?(t.barra(.011,[l,d,_],[l+.06,d,_],n.inoxOsc,{padre:h}),c(.1,.02,.02,n.azul,l+.1,d,_,{padre:h,r:.008})):(t.cil(.012,.06,n.inoxOsc,l,d+.03,_,{padre:h,seg:10}),g==="x"?c(.13,.02,.022,n.azul,l,d+.1,_,{padre:h,r:.008}):c(.022,.02,.13,n.azul,l,d+.1,_,{padre:h,r:.008}))},p=(h,l,d,_,g,f="z",S=.7)=>{let I=f==="z"?{rx:Math.PI/2}:{rz:Math.PI/2};t.cil(g,.03,n.inox,l,d-.015,_,{padre:h,seg:22,...I});let L=f==="z"?.016:0,z=f==="x"?.016:0;t.cil(g*.82,.006,n.blanco,l+z,d-.003,_+L,{padre:h,seg:22,...I});let F=[Math.sin(S)*g*.62,Math.cos(S)*g*.62];f==="z"?t.barra(.0035,[l,d,_+.022],[l+F[0],d+F[1],_+.022],n.rojo,{padre:h,seg:6}):t.barra(.0035,[l+.022,d,_],[l+.022,d+F[1],_+F[0]],n.rojo,{padre:h,seg:6})};t.caja(6+Nt+.04,.24,5+Nt+.04,n.corte,-Nt/2,-.25,-Nt/2,{r:.03}),t.caja(6,.024,5,o.resina,0,-.012,0,{r:.002});{let h=["#8C969B","#D9DFE1","#A3AEB3","#E8ECED"],d=new ut(St(.014,.002,.014,5e-4,1),o.resinaCl,340),_=new Le,g=new Be;for(let f=0;f<340;f++)_.makeTranslation(-2.95+i()*5.9,.0125,-2.45+i()*4.9),d.setMatrixAt(f,_),d.setColorAt(f,g.set(h[Math.floor(i()*h.length)]));d.receiveShadow=!0,e.add(d)}{let l=new Mn;l.moveTo(0,0),l.lineTo(.1,0),l.absarc(.1,.1,.1,-Math.PI/2,-Math.PI,!0),l.closePath();let d=L=>new Bn(l,{depth:L,bevelEnabled:!1,curveSegments:10}),_=d(5.1-0);_.rotateY(-Math.PI/2);let g=new $e(_,o.resina);g.position.set(2.1,.012,-2.5);let f=d(.05);f.rotateY(-Math.PI/2);let S=new $e(f,o.resina);S.position.set(3,.012,-2.5);let I=new $e(d(5),o.resina);I.position.set(-3,.012,-2.5);for(let L of[g,S,I])L.castShadow=L.receiveShadow=!0,e.add(L)}let x=2.1,w=2.95,A=2.2,b=-2.5-Nt/2,P=(h,l,d,_,g,f)=>t.caja(h,l,d,n.pared,_,g,f,{r:.002,s:1});P(x-(-3-Nt),oi,Nt,(-3-Nt+x)/2,0,b),P(3-w,oi,Nt,(w+3)/2,0,b),P(w-x,oi-A,Nt,(x+w)/2,A,b),P(Nt,oi,5,-3-Nt/2,0,0),t.caja(6+Nt,.025,Nt,n.corte,(0-Nt)/2,oi,b,{r:.004}),t.caja(Nt,.025,5,n.corte,-3-Nt/2,oi,0,{r:.004}),t.caja(.012,oi,Nt,n.corte,3.006,0,b,{r:.002}),t.caja(Nt,oi,.012,n.corte,-3-Nt/2,0,2.506,{r:.002});{let h=[];for(let l of[-2,-1,0,1])h.push(C(l,oi/2,-2.5+.002));for(let l of[-1.5,-.5,.5,1.5])h.push(C(-3+.002,oi/2,l,1,1,1,Math.PI/2));E(St(.008,oi-.12,.005,.001,1),n.juntaPared,h,null,!1),t.caja(5.1,.02,.03,n.inoxCl,-.45,oi-.1,-2.5+.015,{r:.006}),t.caja(.03,.02,5,n.inoxCl,-3+.015,oi-.1,0,{r:.006}),t.caja(1.2,.05,.09,n.blanco,-1.7,2.62,-2.5+.06,{r:.02}),t.caja(1.2,.05,.09,n.blanco,.5,2.62,-2.5+.06,{r:.02}),t.caja(.09,.05,1.2,n.blanco,-3+.06,2.62,.4,{r:.02})}{let h=-2.5-Nt/2,l=w-x,d=(x+w)/2;t.caja(.05,A,Nt+.04,n.inoxCl,x+.025,0,h,{r:.01}),t.caja(.05,A,Nt+.04,n.inoxCl,w-.025,0,h,{r:.01}),t.caja(l,.05,Nt+.04,n.inoxCl,d,A-.05,h,{r:.01}),t.caja(l,.02,Nt,n.inoxCl,d,.012,h,{r:.006}),t.caja(l,A,.02,n.juntaSuelo,d,0,h-Nt/2-.05,{r:.004,s:1}),t.barra(.014,[x+.05,A-.075,h+.04],[w-.05,A-.075,h+.04],n.inoxOsc);let _=[],g=9,f=(l-.1)/g;for(let I=0;I<g;I++)_.push(C(x+.05+f*(I+.5),1.05,h+.04+(I%2?.008:-.008),1.14,1,1));E(St(f,2.06,.008,.002,1),o.lama,_,null,!1);let S=[];for(let I=0;I<g;I++)S.push(C(x+.05+f*(I+.5),1.3,h+.047+(I%2?.008:-.008),1.14,1,1));E(St(f,.012,.003,.001,1),n.blanco,S,null,!1)}{for(let S of[-.95+.03,-.4-.03])for(let I of[-2.5+.04,-2.5+.38-.04])t.caja(.04,1.6,.04,n.inox,S,0,I,{r:.008});for(let S of[.22,.62,1.02,1.42])t.caja(-.4- -.95,.03,.38,n.inoxCl,-.675,S,-2.31,{r:.008});Ve(t,n,-.675-.13,.65,-2.31,{ry:.1}),Ve(t,n,-.675+.13,.65,-2.31,{ry:-.08}),Ve(t,n,-.675-.13,.25,-2.31,{ry:-.05}),Ve(t,n,-.675+.13,.25,-2.31,{ry:.06}),Ve(t,n,-.675-.13,1.05,-2.31,{ry:.08}),It(t,n,-.675+.15,1.05,-2.31+.02,{ry:-.4}),It(t,n,-.675+.03,1.05,-2.31+.07,{ry:.3}),t.cil(.1,.2,n.azul,-.675,0,-2.31+.25,{rb:.08,seg:20})}{let h=(l,d)=>{t.cil(.15,.5,n.inoxCl,l,0,d,{rb:.16,seg:28}),t.cil(.17,.03,n.inox,l,.5,d,{seg:28}),t.cil(.09,.06,n.inoxCl,l,.53,d,{seg:22}),t.cil(.1,.025,n.inox,l,.59,d,{seg:22}),t.esfera(.035,n.inox,l,.63,d),t.toro(.16,.012,n.inox,l,.18,d,{rx:Math.PI/2}),t.toro(.04,.008,n.inoxOsc,l-.15,.4,d,{rx:0,arco:Math.PI}),t.toro(.04,.008,n.inoxOsc,l+.15,.4,d,{rx:0,arco:Math.PI})};h(2.3,-2.05),h(2.68,-2.05),h(2.5,-1.7),t.caja(.2,.26,.012,n.blanco,1.99,1.35,-2.5+.007,{r:.003}),t.caja(.12,.012,.004,n.azul,1.99,1.52,-2.5+.015,{r:.002})}{let h=a("circuito",{frente:[.45,.3,1],alto:.4,lado:.45,zoom:1.25,mira:[.15,0,0]}),l=-2.17,d=.26,_=[-2.5,-1.9,-1.3],g=[n.azul,n.aceite,n.blanco];_.forEach((S,I)=>{for(let[z,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.cil(.022,.44,n.inoxOsc,S+z*d*.68,0,l+F*d*.68,{padre:h,seg:10}),t.cil(.032,.014,n.goma,S+z*d*.68,0,l+F*d*.68,{padre:h,seg:10});t.caja(d*1.9,.03,.03,n.inoxOsc,S,.22,l+d*.68,{padre:h,r:.008}),t.cil(d,.16,n.inox,S,.43,l,{padre:h,rb:.05,seg:32}),t.cil(d,.9,n.inoxCl,S,.59,l,{padre:h,seg:32});for(let z of[.59,1.04,1.49])t.toro(d,.006,n.inoxOsc,S,z,l,{padre:h});t.cil(d+.004,.07,g[I],S,.86,l,{padre:h,seg:32});let L=t.esfera(d,n.inoxCl,S,1.49,l,{padre:h});L.scale.y=.35,t.cil(.085,.04,n.inox,S,1.55,l,{padre:h,seg:20}),t.cil(.092,.016,n.inoxOsc,S,1.585,l,{padre:h,seg:20}),t.cil(.012,.04,n.inoxOsc,S,1.6,l,{padre:h,seg:8}),t.cil(.01,.62,n.vidrio,S+d*.78,.7,l+d*.62,{padre:h,seg:8}),t.cil(.016,.02,n.inoxOsc,S+d*.78,.68,l+d*.62,{padre:h,seg:8}),t.cil(.016,.02,n.inoxOsc,S+d*.78,1.3,l+d*.62,{padre:h,seg:8}),t.cil(.0075,.52,n.azul,S+d*.78,.74,l+d*.62,{padre:h,seg:8}),t.caja(.12,.05,.006,n.blanco,S,.99,l+d+.002,{padre:h,r:.002}),t.caja(.07,.014,.002,g[I],S,1,l+d+.008,{padre:h,r:.001}),M([[S,.43,l],[S,.3,l],[S,.3,-1.85]],.024,h),O(h,S,.3,-2,"z"),M([[S,yi,-2.42],[S,yi,l],[S,1.66,l]],.024,h),O(h,S,1.78,l,"y"),D(S,1.66,l,"y",h,.034)}),M([[-2.5,.3,-1.85],[-1.3,.3,-1.85]],.026,h),M([[-2.5,.3,-1.85],[-2.45,.3,-1.45]],.026,h),t.caja(.7,.03,.34,n.inoxOsc,-2.45,0,-1.45,{padre:h,r:.008}),m(.12,.06,n.inox,-2.45,.27,-1.45,{padre:h,seg:28}),t.cil(.06,.08,n.inox,-2.45,.27,-1.45,{padre:h,seg:20}),m(.1,.34,n.azulOsc,-2.15,.24,-1.45,{padre:h,seg:28});for(let S=0;S<5;S++)m(.103,.01,n.hierro,-2.27+S*.05,.24,-1.45,{padre:h,seg:28});c(.1,.1,.12,n.negro,-2.1,.4,-1.45,{padre:h,r:.02}),M([[-2.45,.33,-1.45],[-2.45,.62,-1.45],[-2.93,.62,-1.45],[-2.93,yi,-1.45],[-2.93,yi,-2.42],[-.98,yi,-2.42]],.026,h),O(h,-2.45,.46,-1.45,"y"),O(h,-2.93,1.2,-1.45,"y"),p(h,-2.7,.62+.02,-1.45+.02,.04,"z",.8);for(let S of[-2.7,-2.1,-1.5,-1.2])D(S,yi,-2.42,"x",h,.034);O(h,-.78,yi,-2.42,"x"),t.cil(.03,.014,n.inox,-.98,yi-.007,-2.42,{padre:h,rz:Math.PI/2,seg:14}),M([[-.9,yi,-2.42],[-.65,yi,-2.42]],.026,h),M([[-.65,yi,-2.42],[-.65,1.7,-2.42]],.026,h),p(h,-.65+.09,1.9,-2.42+.03,.04,"z",.9);for(let S of[-2.9,-2.3,-1.75,-1.1,-.75])c(.05,.05,.04,n.inoxOsc,S,yi,-2.46,{padre:h,r:.01});for(let S of[.6,1.4])c(.04,.05,.05,n.inoxOsc,-2.97,S,-1.45,{padre:h,r:.01});for(let S of[-1.5,-2])c(.05,.05,.04,n.inoxOsc,-2.97,yi,S,{padre:h,r:.01});for(let S=0;S<4;S++)t.toro(.1-S*.004,.014,o.manguera,-.65,1+S*.03,-2.42+.02,{padre:h,rx:0,ry:0});let f=-.96;c(.2,.74,.5,n.inoxCl,-2.9,1.4,f,{padre:h,r:.014}),c(.012,.66,.42,n.inox,-2.795,1.4,f,{padre:h,r:.006}),c(.012,.26,.2,n.pantalla,-2.787,1.52,f-.06,{padre:h,r:.006});for(let S=0;S<3;S++)m(.016,.012,[o.verde,n.aceite,o.rojo][S],-2.784,1.28,f-.14+S*.07,{padre:h,seg:12});m(.03,.025,o.rojo,-2.78,1.2,f+.12,{padre:h,seg:16}),m(.045,.01,n.amarillo||n.aceite,-2.79,1.2,f+.12,{padre:h,seg:16}),m(.02,.014,n.negro,-2.78,1.46,f+.12,{padre:h,seg:12}),t.caja(.01,.07,.02,n.negro,-2.77,1.48,f+.12,{padre:h,r:.003}),c(.012,.05,.3,n.blanco,-2.789,1.1,f-.02,{padre:h,r:.004}),t.cil(.016,oi-1.77,n.inoxOsc,-2.93,1.77,f,{padre:h,seg:10})}{let h=a("enfriador",{frente:[.1,.25,1],alto:.7,lado:.2,zoom:1,mira:[.15,0,0]}),l=-.05,d=1.05,_=(l+d)/2,g=-1.95,f=.45,S=1.02;for(let Z of[l+.1,d-.1])for(let se of[g-.24,g+.24])t.cil(.035,.5,n.inoxOsc,Z,0,se,{padre:h,seg:12}),t.cil(.05,.014,n.goma,Z,0,se,{padre:h,seg:12});for(let Z of[g-.24,g+.24])c(d-l,.05,.05,n.inoxOsc,_,.52,Z,{padre:h,r:.012});for(let Z of[l+.1,d-.1])c(.06,.1,.56,n.inox,Z,.57,g,{padre:h,r:.012});m(f,d-l,n.inoxCl,_,S,g,{padre:h,seg:48});for(let Z of[l,d])t.esfera(f,n.inoxCl,Z,S,g,{padre:h}).scale.set(.5,1,1),t.toro(f,.008,n.inox,Z,S,g,{padre:h,rx:0,ry:Math.PI/2});for(let Z of[l+.28,_,d-.28])t.toro(f+.002,.005,n.inoxOsc,Z,S,g,{padre:h,rx:0,ry:Math.PI/2});t.cil(.19,.04,n.inox,.42,S+f-.025,g,{padre:h,seg:28});let I=t.grupo("tapa",h);I.position.set(.42-.19,S+f+.02,g),I.rotation.z=.28,t.cil(.2,.035,n.inoxCl,.19,0,0,{padre:I,seg:28}),t.cil(.05,.03,n.inox,.19,.035,0,{padre:I,seg:16}),t.caja(.05,.05,.1,n.negro,.39,0,0,{padre:I,r:.015}),t.cil(.014,.05,n.inoxOsc,0,-.04,.05,{padre:I,seg:8}),t.cil(.014,.05,n.inoxOsc,0,-.04,-.05,{padre:I,seg:8}),c(.2,.17,.2,n.azulOsc,.75,S+f+.1,g,{padre:h,r:.03}),t.cil(.07,.07,n.azulOsc,.75,S+f+.12,g,{padre:h,seg:20}),t.cil(.09,.03,n.inox,.75,S+f-.02,g,{padre:h,seg:20});let L=g+f-.005;c(.4,.34,.06,n.inox,.33,S+.12,L+.04,{padre:h,r:.014}),c(.36,.3,.012,n.inoxCl,.33,S+.12,L+.073,{padre:h,r:.008}),c(.19,.1,.012,n.pantalla,.28,S+.2,L+.082,{padre:h,r:.006}),t.caja(.05,.03,.003,n.blanco,.25,S+.18,L+.09,{padre:h,r:.001}),t.caja(.07,.04,.003,n.blanco,.32,S+.205,L+.09,{padre:h,r:.001});for(let Z=0;Z<3;Z++)u(.022,.02,Z?n.negro:o.rojo,.2+Z*.07,S+.07,L+.085,{padre:h,seg:14});p(h,.46,S+.18,L+.085,.06,"z",.5),t.barra(.01,[.46,S-.08,L+.06],[.46,S-.12,L+.12],n.inoxOsc,{padre:h}),M([[l-.06,S-.2,g+.1],[l-.2,S-.2,g+.1],[l-.2,.12,g+.1]],.025,h),O(h,l-.2,.6,g+.1,"y");let z=1.4,F=1.95,N=-2.45,B=-1.8,V=(z+F)/2,X=(N+B)/2;c(F-z,.7,B-N,n.blanco,V,.4,X,{padre:h,r:.03,s:3}),c(F-z+.02,.04,B-N+.02,n.inoxOsc,V,.07,X,{padre:h,r:.01}),u(.2,.02,n.negro,V,.45,B+.012,{padre:h,seg:30}),t.toro(.2,.012,n.inox,V,.45,B+.016,{padre:h,rx:0});for(let Z=0;Z<5;Z++)t.barra(.004,[V-.19,.45+(Z-2)*.07,B+.03],[V+.19,.45+(Z-2)*.07,B+.03],n.inoxOsc,{padre:h,seg:6});for(let Z=0;Z<4;Z++)t.barra(.005,[V+(Z-1.5)*.09,.27,B+.03],[V+(Z-1.5)*.09,.63,B+.03],n.inoxOsc,{padre:h,seg:6});t.cil(.03,.025,n.negro,V,.45,B+.034,{padre:h,rx:Math.PI/2,seg:14});for(let Z=0;Z<6;Z++)t.caja(.12,.012,.012,n.inoxOsc,V-.14+Z%2*.28,.2+Math.floor(Z/2)*.01,B+.012,{padre:h,r:.003});t.caja(.22,.08,.004,n.blanco,V,.18,B+.012,{padre:h,r:.002}),t.caja(.12,.012,.003,n.azul,V,.2,B+.016,{padre:h,r:.001}),M([[z,.78,X+.05],[1.28,.78,X+.05],[1.28,.9,g+.15]],.016,h,o.cobre),M([[z,.7,X+.12],[1.22,.7,X+.12],[1.22,.85,g+.1]],.02,h,n.negro)}{let h=a("cuba",{frente:[.25,.3,1],alto:.85,lado:.3,zoom:1,mira:[0,0,0]}),l=-.2,d=-.55,_=2,g=.9,f=.32,S=1,I=l-_/2,L=l+_/2,z=d-g/2,F=d+g/2;for(let G of[I+.12,L-.12])for(let j of[z+.1,F-.1])t.cil(.04,f,n.inoxOsc,G,0,j,{padre:h,seg:14}),t.cil(.065,.016,n.goma,G,0,j,{padre:h,seg:14});for(let G of[z+.1,F-.1])c(_-.2,.04,.04,n.inoxOsc,l,.22,G,{padre:h,r:.01});c(.04,.04,g-.2,n.inoxOsc,I+.12,.22,d,{padre:h,r:.01}),c(.04,.04,g-.2,n.inoxOsc,L-.12,.22,d,{padre:h,r:.01}),t.caja(_,.58,g,n.inoxCl,l,f,d,{padre:h,r:.09,s:3}),t.caja(_+.02,.05,g+.02,n.inox,l,f+.28,d,{padre:h,r:.02}),t.caja(_+.02,.025,g+.02,n.inoxOsc,l,f+.48,d,{padre:h,r:.01});let N=.9;t.caja(_,.1,.07,n.inox,l,N,z+.035,{padre:h,r:.025}),t.caja(_,.1,.07,n.inox,l,N,F-.035,{padre:h,r:.025}),t.caja(.07,.1,g-.12,n.inox,I+.035,N,d,{padre:h,r:.025}),t.caja(.07,.1,g-.12,n.inox,L-.035,N,d,{padre:h,r:.025}),t.caja(_-.12,.04,g-.12,o.suero,l,.88,d,{padre:h,r:.006});{let G=[];for(let J=0;J<12;J++)for(let ge=0;ge<6;ge++){let Oe=I+.17+J*.1*1,le=d-5*.1*.5+ge*.1;G.push(C(Oe,.915,le,1+i()*.06,.8+i()*.5,1+i()*.06,i()*.2))}E(St(.088,.06,.088,.016,1),o.cuajada,G,h)}M([[L,.74,d-.28],[L+.2,.74,d-.28],[L+.2,.74,d-.08]],.022,h),O(h,L+.2,.74,d-.17,"z"),M([[L,.42,d-.28],[L+.2,.42,d-.28],[L+.2,.42,d-.08]],.022,h),O(h,L+.2,.42,d-.17,"z"),p(h,L+.02,.58,d+.3,.055,"x",.9),t.barra(.008,[L,.58,d+.3],[L+.01,.58,d+.3],n.inoxOsc,{padre:h}),M([[L,.5,d+.2],[L+.32,.5,d+.2],[L+.32,.08,d+.2]],.034,h),O(h,L+.18,.5,d+.2,"x"),t.cil(.05,.02,n.inox,L+.32,0,d+.2,{padre:h,seg:16});let B=l-.45;c(.12,.08,g+.1,n.inox,B,1.08,d,{padre:h,r:.02});for(let G of[-1,1])c(.16,.06,.12,n.inoxOsc,B,1.03,d+G*(g/2-.02),{padre:h,r:.015});c(.3,.22,.22,n.azulOsc,B,1.29,d,{padre:h,r:.04}),t.cil(.1,.1,n.azulOsc,B,1.28,d,{padre:h,seg:22}),t.cil(.04,.1,n.inox,B,1,d,{padre:h,seg:14}),t.cil(.016,.08,n.inoxOsc,B,1.09,d,{padre:h,seg:8});let V=.89,X=1.22,Z=.37;t.barra(.012,[B-.03,V,d-Z],[B-.03,X,d-Z],n.inox,{padre:h}),t.barra(.012,[B-.03,V,d+Z],[B-.03,X,d+Z],n.inox,{padre:h}),t.barra(.012,[B-.03,X,d-Z],[B-.03,X,d+Z],n.inox,{padre:h}),t.barra(.012,[B-.03,V,d-Z],[B-.03,V,d+Z],n.inox,{padre:h});{let G=[];for(let j=1;j<12;j++)G.push(C(B-.03,(V+X)/2,d-Z+j/12*2*Z));E(new ei(.0035,.0035,X-V,5),n.inoxCl,G,h,!1)}t.barra(.012,[B,1.09,d-.2],[B-.03,X-.03,d-.3],n.inoxOsc,{padre:h});let se=L-.12;t.cil(.02,.88,n.inoxOsc,se,.08,F+.12,{padre:h,seg:10}),t.cil(.07,.016,n.inox,se,0,F+.12,{padre:h,seg:16}),c(.26,.32,.1,n.inoxCl,se,1.28,F+.12,{padre:h,r:.014}),c(.2,.1,.012,n.pantalla,se,1.36,F+.18,{padre:h,r:.006}),t.caja(.08,.03,.003,n.blanco,se-.02,1.34,F+.19,{padre:h,r:.001});for(let G=0;G<3;G++)u(.02,.02,G?n.negro:o.verde,se-.07+G*.07,1.17,F+.185,{padre:h,seg:12});t.barra(.006,[se-.06,1.12,F+.12],[se-.28,1,F-.1],n.negro,{padre:h,seg:6}),t.barra(.007,[se-.28,1,F-.1],[se-.3,.86,F-.25],n.inoxOsc,{padre:h,seg:8}),c(.9,.2,.36,n.inox,l-.5,.26,F+.32,{padre:h,r:.014}),c(.92,.012,.38,n.inoxCl,l-.5,.27,F+.32,{padre:h,r:.004});for(let G=0;G<8;G++)t.caja(.012,.006,.3,n.inoxOsc,l-.88+G*.1,.27,F+.32,{padre:h,r:.002});for(let G of[l-.88,l-.12])for(let j of[F+.17,F+.47])t.cil(.03,.12,n.goma,G,0,j,{padre:h,seg:10});t.barra(.01,[I+.2,.05,F+.06],[I+.2,.7,F+.04],n.inox,{padre:h})}{let h=a("mesa",{frente:[.1,.35,1],alto:.55,lado:.2,zoom:.92}),l=.95,d=2.75,_=.2,g=1.1,f=(l+d)/2,S=(_+g)/2,I=.9;c(d-l,.04,g-_,n.inoxCl,f,I-.02,S,{padre:h,r:.012}),c(d-l-.04,.07,g-_-.04,n.inox,f,I-.075,S,{padre:h,r:.01}),t.caja(d-l,.04,.025,n.inoxCl,f,I,_+.0125,{padre:h,r:.008}),t.caja(d-l,.04,.025,n.inoxCl,f,I,g-.0125,{padre:h,r:.008}),t.caja(.025,.04,g-_-.05,n.inoxCl,l+.0125,I,S,{padre:h,r:.008}),t.caja(.025,.04,g-_-.05,n.inoxCl,d-.0125,I,S,{padre:h,r:.008}),t.caja(.2,.006,.12,n.inoxOsc,d-.14,I,S,{padre:h,r:.002});for(let ce=0;ce<3;ce++)t.caja(.2,.01,.008,n.inox,d-.14,I,S-.04+ce*.04,{padre:h,r:.002});t.cil(.02,.22,n.inoxOsc,d-.14,.64,S,{padre:h,seg:10}),t.cil(.14,.26,n.azul,d-.14,0,S,{padre:h,rb:.12,seg:24}),t.cil(.138,.01,o.suero,d-.14,.22,S,{padre:h,seg:24});let L=[l+.06,f,d-.06];for(let ce of L)for(let J of[_+.06,g-.06])t.caja(.04,.82,.04,n.inox,ce,0,J,{padre:h,r:.008}),t.cil(.026,.02,n.goma,ce,0,J,{padre:h,seg:12});t.caja(d-l-.12,.025,g-_-.12,n.inox,f,.2,S,{padre:h,r:.008});for(let ce=0;ce<3;ce++)t.caja(.4,.12,.28,o.caja,l+.35+ce*.01,.225+ce*.12,S+.02,{padre:h,r:.02,s:2});let z=.056,F=.16,N=[];for(let ce=0;ce<2;ce++)for(let J=0;J<6;J++)N.push([1.12+J*.145,.44+ce*.165]);for(let ce=0;ce<2;ce++)for(let J=0;J<3;J++)N.push([2.03+J*.145,.44+ce*.165]);let B=new ei(z,z*.94,F,20,1,!0),V=new ut(B,o.molde,N.length);V.material=o.molde.clone(),V.material.side=Pn;let X=new ei(z*.93,z*.93,.13,20),Z=new ut(X,o.queso,N.length),se=new Un(.011,.011,.004),G=24,j=new ut(se,o.agujero,N.length*G),re=0;N.forEach(([ce,J],ge)=>{V.setMatrixAt(ge,C(ce,I+.04+F/2,J));let Oe=ge<12?.04:0;Z.setMatrixAt(ge,C(ce,I+.04+.065+Oe,J,1,1,1));for(let le=0;le<2;le++)for(let Q=0;Q<12;Q++){let oe=Q/12*Math.PI*2+le*.26;y.set(ce+Math.cos(oe)*(z+.001),I+.07+le*.06,J+Math.sin(oe)*(z+.001)),v.setFromEuler(R.set(0,-oe+Math.PI/2,0)),j.setMatrixAt(re++,new Le().compose(y,v,new W(1,1,1)))}});for(let ce of[V,Z,j])ce.castShadow=!0,ce.receiveShadow=!0,h.add(ce);t.caja(.5,.025,.4,n.inoxOsc,2.175,I+.2+.04,.525,{padre:h,r:.008});for(let[ce,J]of[[2.07,.5],[2.27,.5]])t.cil(.075,.1,n.inox,ce,I+.2+.065,J,{padre:h,seg:20});t.cil(.075,.1,n.inox,2.17,I+.2+.065,.62,{padre:h,seg:20}),c(.56,.035,.3,n.inoxCl,1.45,I+.035,.97,{padre:h,r:.008}),t.caja(.5,.008,.24,o.molde,1.45,I+.035,.97,{padre:h,r:.003});for(let[ce,J]of[[1.28,.93],[1.4,.99],[1.52,.93],[1.64,.99]]){t.cil(.055,.062,o.queso,ce,I+.043,J,{padre:h,seg:20});let ge=t.esfera(.055,o.queso,ce,I+.105,J,{padre:h});ge.scale.y=.3}t.caja(.26,.012,.18,n.blanco,1.95,I+.04,.99,{padre:h,r:.004,ry:.15}),t.cil(.05,.03,n.inoxCl,2.35,I+.04,.93,{padre:h,seg:18,rb:.04}),t.barra(.007,[2.35,I+.065,.93],[2.5,I+.12,1],n.inoxCl,{padre:h})}{let h=a("lavadora",{frente:[1,.3,.25],alto:.5,lado:.45,zoom:1.15}),l=-3,d=-2.1,_=-.55,g=.55,f=0,S=(l+d)/2;for(let B of[l+.08,d-.08])for(let V of[_+.08,g-.08])t.cil(.03,.1,n.inoxOsc,B,0,V,{padre:h,seg:10});c(d-l-.05,.76,g-_,n.inoxCl,S+.025,.48,f,{padre:h,r:.014}),c(.012,.6,.9,n.inox,d+0,.5,f,{padre:h,r:.004}),c(d-l-.02,.62,g-_-.04,n.inox,S,1.2,f,{padre:h,r:.03,s:3}),c(.012,.36,.7,n.vidrioOsc,d+0,1.22,f,{padre:h,r:.006}),t.barra(.014,[d+.05,1.49,_+.1],[d+.05,1.49,g-.1],n.inoxOsc,{padre:h});for(let B of[_+.1,g-.1])t.barra(.01,[d,1.49,B],[d+.05,1.49,B],n.inoxOsc,{padre:h});for(let B of[_,g])c(.7,.28,.01,n.hierro,S,.96,B,{padre:h,r:.004});c(.06,.28,.3,n.inox,d+.03,.78,g-.28,{padre:h,r:.012}),c(.012,.1,.18,n.pantalla,d+.065,.86,g-.28,{padre:h,r:.004});for(let B=0;B<3;B++)m(.016,.014,B?n.negro:o.verde,d+.065,.74,g-.37+B*.07,{padre:h,seg:12});m(.03,.02,o.rojo,d+.065,.66,g-.2,{padre:h,seg:14}),c(.16,.26,.2,n.blanco,d+.09,.4,_+.15,{padre:h,r:.02}),c(.17,.05,.21,n.azul,d+.09,.28,_+.15,{padre:h,r:.02}),m(.02,.02,n.negro,d+.18,.34,_+.15,{padre:h,seg:12}),Ve(t,n,d+.2,0,_-.18,{padre:h,ry:Math.PI/2}),t.barra(.006,[d+.2,.27,_-.18],[d+.1,.45,_+.1],n.azul,{padre:h});let I=(B,V)=>{let X=(B+V)/2;for(let G of[S-.38,S+.38]){c(.04,.05,V-B,n.inox,G,.76,X,{padre:h,r:.01});for(let j of[B+.05,V-.05])t.caja(.04,.74,.04,n.inox,G,0,j,{padre:h,r:.008})}c(.76,.03,.03,n.inoxOsc,S,.3,X,{padre:h,r:.008});let Z=[];for(let G=0;G<Math.round((V-B)/.07);G++)Z.push(C(S,.8,B+.04+G*.07,1,1,1));let se=new ei(.014,.014,.72,8);se.rotateZ(Math.PI/2),E(se,n.inoxCl,Z,h)};I(g,1.3),I(-1.2,_);let L=4;for(let B=0;B<L;B++)t.caja(.4,.14,.6,o.caja,S,.82+B*.145,.88,{padre:h,r:.02,s:2,ry:B%2*.03}),t.caja(.42,.018,.62,o.cajaOsc,S,.82+B*.145+.125,.88,{padre:h,r:.006,ry:B%2*.03});t.caja(.34,.01,.54,o.cajaOsc,S,.82+L*.145+.002,.88,{padre:h,r:.003}),t.caja(.4,.14,.6,o.caja,S,.82,-.88,{padre:h,r:.02}),t.caja(.36,.01,.56,o.cajaOsc,S,.955,-.88,{padre:h,r:.003});let z=new ei(.056,.052,.16,18,1,!0),F=[];for(let B=0;B<3;B++)for(let V=0;V<4;V++)F.push(C(S-.1+B*.1,.95+.08,-.88-.18+V*.12));for(let B=0;B<2;B++)for(let V=0;V<3;V++)F.push(C(S-.05+B*.1,.95+.08+.15,-.88-.12+V*.12));let N=E(z,o.molde.clone(),F,h);N.material.side=Pn}{c(.34,.03,.9,n.inoxCl,-2.83,1.62,1,{r:.008});for(let g of[.6,1.4])c(.03,.12,.03,n.inox,-2.97,1.62-.06,g,{r:.006}),t.barra(.01,[-2.98,1.62-.2,g],[-2.7,1.62-.015,g],n.inoxOsc);let l=[[-2.9,.75],[-2.9,1],[-2.9,1.25],[-2.74,.85],[-2.74,1.12]];for(let[g,f]of l){t.cil(.085,.075,o.corteza,g,1.62+.015,f,{seg:24});let S=t.esfera(.085,o.quesoCur,g,1.62+.09,f);S.scale.y=.12,t.cil(.087,.012,o.queso,g,1.62+.035,f,{seg:24})}t.caja(.004,.05,.1,n.blanco,-2.992,1.62+.1,1,{r:.001});let d=0,_=1.95;m(.09,.03,n.blanco,-2.985,_,d,{seg:28}),m(.078,.008,n.sello,-2.968,_,d,{seg:28}),t.barra(.004,[-2.96,_,d],[-2.96,_+.05,d+.04],o.rojo,{seg:6})}{let h=a("suelo",{frente:[.15,.4,1],alto:.75,lado:.4,zoom:1,marco:"sumidero",mira:[.2,0,0]}),l=t.grupo("sumidero",h),d=.2,_=.95;t.caja(.4,.016,.4,n.inoxCl,d,.0125,_,{padre:l,r:.006}),t.caja(.34,.008,.34,n.negro,d,.026,_,{padre:l,r:.002});for(let f=0;f<9;f++)t.caja(.014,.014,.33,n.inox,d-.14+f*.035,.028,_,{padre:l,r:.004});for(let f of[-.165,.165])t.caja(.34,.016,.014,n.inoxCl,d,.026,_+f,{padre:l,r:.004});for(let[f,S,I,L]of[[d,_,.42,.34],[d+.28,_+.12,.26,.18],[d-.18,_-.34,.18,.22]]){let z=t.cil(1,.003,o.charco,f,.0135,S,{padre:l,seg:28});z.scale.set(I,1,L),z.castShadow=!1}for(let[f,S,I]of[[d+.08,_+.22,.03],[d+.13,_+.25,.022],[d-.1,_+.27,.026],[d+.3,_+.05,.02]]){let L=t.esfera(I,n.blanco,f,.02,S,{padre:l});L.scale.y=.5}for(let[f,S]of[[d+.25,_+.28],[d-.25,_+.1],[d+0,_-.28]])t.caja(.025,.018,.022,o.cuajada,f,.0135,S,{padre:l,r:.006,ry:f*5});let g=t.grupo("escobilla",h);t.caja(.55,.04,.05,n.azul,.55,.012,1.18,{padre:g,r:.014,ry:.15}),t.caja(.55,.012,.012,n.negro,.55,0,1.2,{padre:g,r:.003,ry:.15}),t.barra(.015,[.55,.05,1.18],[.99,1.35,1.04],n.azul,{padre:g}),t.cil(.02,.1,n.negro,.98,1.3,1.045,{padre:g,seg:10,rz:-.3,rx:-.1});for(let f=0;f<4;f++)t.toro(.15-f*.004,.022,o.manguera,-.75,.04+f*.044,.85,{padre:h});t.barra(.018,[-.62,.04,.85],[-.45,.04,1],o.manguera,{padre:h}),t.cil(.022,.1,n.inoxCl,-.45,.02,1,{padre:h,seg:10,rx:Math.PI/2})}{let h=a("manos",{frente:[1,.15,.1],alto:.2,lado:.4,zoom:.88}),l=1.72;c(.46,.22,.5,n.inoxCl,-2.76,1.04,l,{padre:h,r:.03,s:3}),c(.36,.04,.4,n.inoxOsc,-2.74,1,l,{padre:h,r:.012}),t.cil(.03,.01,n.hierro,-2.74,.985,l,{padre:h,seg:14}),c(.04,.2,.5,n.inox,-2.98,1.3,l,{padre:h,r:.012}),t.cil(.02,.28,n.inoxOsc,-2.8,.7,l,{padre:h,seg:10}),t.barra(.02,[-2.8,.74,l],[-2.97,.74,l],n.inoxOsc,{padre:h}),t.cil(.02,.1,n.inoxCl,-2.9,1.06,l,{padre:h,seg:12}),t.toro(.08,.014,n.inoxCl,-2.82,1.16,l,{padre:h,rx:0,arco:Math.PI}),t.barra(.014,[-2.74,1.16,l],[-2.74,1.1,l],n.inoxCl,{padre:h}),t.barra(.014,[-2.9,1.1,l],[-2.9,1.16,l],n.inoxCl,{padre:h}),t.barra(.012,[-2.97,.78,l],[-2.97,.62,l],n.inoxOsc,{padre:h}),t.barra(.018,[-2.97,.62,l],[-2.68,.62,l],n.inoxCl,{padre:h}),c(.08,.1,.16,n.azul,-2.62,.68,l,{padre:h,r:.03}),c(.2,.02,.14,n.inoxOsc,-2.7,.05,l+0,{padre:h,r:.006}),t.barra(.008,[-2.75,.03,l],[-2.95,.45,l],n.inoxOsc,{padre:h}),c(.1,.22,.12,n.blanco,-2.94,1.5,l-.38,{padre:h,r:.025}),c(.04,.04,.08,n.azul,-2.86,1.34,l-.38,{padre:h,r:.012}),t.barra(.01,[-2.88,1.37,l-.38],[-2.86,1.4,l-.38],n.azul,{padre:h}),t.cil(.014,.05,n.azul,-2.86,1.285,l-.38,{padre:h,seg:10}),c(.1,.3,.3,n.blanco,-2.94,1.5,l+.45,{padre:h,r:.03}),u(.07,.24,n.sello,-2.9,1.52,l+.45,{padre:h,seg:20}),c(.004,.14,.14,n.sello,-2.86,1.3,l+.45,{padre:h,r:.001}),c(.012,.5,.5,n.vidrio,-2.99,1.95,l,{padre:h,r:.004}),c(.01,.46,.4,n.azul,-2.985,1.95,l,{padre:h,r:.004});for(let d=0;d<4;d++)c(.003,.012,.05+d%2*.1,n.blanco,-2.979,1.84+d*.045,l+(d%2,0),{padre:h,r:.001});for(let d=0;d<3;d++)c(.003,.09,.016,n.blanco,-2.979,2.04,l-.07+d*.07,{padre:h,r:.004});c(.003,.04,.2,n.blanco,-2.979,1.99,l,{padre:h,r:.001}),t.cil(.1,.34,n.inoxCl,-2.5,0,l+.36,{padre:h,rb:.09,seg:20}),t.cil(.102,.025,n.negro,-2.5,.34,l+.36,{padre:h,seg:20})}{t.barra(.01,[-2.97,1.8,2.15],[-2.97,1.8,2.45],n.inoxOsc);for(let h of[2.2,2.4])t.barra(.009,[-2.97,1.8,h],[-2.92,1.8,h],n.inoxOsc),t.esfera(.014,n.inoxOsc,-2.915,1.8,h);c(.012,.74,.34,o.delantal,-2.915,1.4,2.4,{r:.004}),c(.016,.16,.2,o.delantal,-2.915,1.25,2.4,{r:.006}),t.barra(.006,[-2.92,1.77,2.4],[-2.92,1.85,2.4],n.blanco);for(let h of[-.07,.07])t.cil(.04,.2,o.delantal,-2.6,0,2.3+h,{rb:.05,seg:14});for(let[h,l,d]of[[-2.6,2.3,.2],[-2.78,2.28,-.15]])t.cil(.055,.3,n.blanco,h,.03,l,{seg:16}),t.caja(.12,.09,.25,n.blanco,h,.03,l+.07,{r:.04,ry:d}),t.caja(.13,.03,.26,n.negro,h,0,l+.07,{r:.012,ry:d})}return{raiz:e,puntos:r}}var Hm={crear:h3,mira:[-.1,.85,-.4],az:.62,el:.52,radio:4.1};var Pr=2.85,En=.16,_t=Math.PI;function u3(n){let e=new zt,t=Sn(e),i=bn(53),r={},a=(p,x={})=>{let w=t.grupo(p);return w.userData.unidad=!0,r[p]={grupo:w,...x},w},s=t.caja,o=t.cil,c=t.barra,u=t.esfera,m=t.toro,E=(p,x={})=>new Gt({color:p,roughness:.6,metalness:0,...x}),y={resina:E("#D3D9DC",{roughness:.55}),zocalo:E("#B7C2C9",{roughness:.7}),dado:E("#E3E9ED",{roughness:.85}),bancada:E("#8C979E",{roughness:.8}),rojo:E("#C8372D",{roughness:.4}),pvc:E("#B9C1C6",{roughness:.5}),tela:E("#F8F8F5",{roughness:.95}),tela2:E("#E4EAEE",{roughness:.95}),crudo:E("#EBE5D3",{roughness:.95}),chaqueta:E("#F0F3F4",{roughness:.9}),marino:E("#2E4A63",{roughness:.9}),cuadros:E("#C25446",{roughness:.95}),azulTrapo:E("#6B8CA6",{roughness:.95}),mancha:E("#684626",{roughness:.85}),manchaClara:E("#9B7640",{roughness:.85}),toalla1:E("#BFDDF0",{roughness:.98}),toalla2:E("#EFE2C8",{roughness:.98}),toalla3:E("#86A3B8",{roughness:.98}),rodillo:E("#E9E2D0",{roughness:.95}),lonaGris:E("#6D7A83",{roughness:.92}),lonaBlanca:E("#E8EDF0",{roughness:.92}),cesto:E("#3E8FC6",{roughness:.5}),saco:E("#E5DCC4",{roughness:.9}),laminado:E("#E7ECEF",{roughness:.4}),tuboA:E("#1D93D1",{roughness:.35}),tuboB:E("#E3BE3F",{roughness:.35}),tuboC:E("#7DB24A",{roughness:.35}),tuboD:E("#F3F6F8",{roughness:.35})};s(6+En+.04,.24,5+En+.04,n.corte,-En/2,-.25,-En/2,{r:.03}),s(6,.012,5,n.juntaSuelo,0,-.012,0,{r:.002}),s(5.98,.014,4.98,y.resina,0,-.004,0,{r:.003}).receiveShadow=!0;for(let p of[-2,0,2])s(.012,.004,5,n.juntaSuelo,p,.008,0,{r:.001,s:1});for(let p of[-.5,1.5])s(6,.004,.012,n.juntaSuelo,0,.008,p,{r:.001,s:1});let T=-2.5-En/2,v=(p,x,w,A,b,P)=>s(p,x,w,n.pared,A,b,P,{r:.002,s:1});v(6+En,Pr,En,-En/2,0,T),v(En,Pr,5,-3-En/2,0,0),s(6+En,.025,En,n.corte,-En/2,Pr,T,{r:.004}),s(En,.025,5,n.corte,-3-En/2,Pr,0,{r:.004}),s(.012,Pr,En,n.corte,3.006,0,T,{r:.002}),s(En,Pr,.012,n.corte,-3-En/2,0,2.506,{r:.002}),s(6,.14,.02,y.zocalo,0,0,-2.5+.01,{r:.005}),s(.02,.14,5,y.zocalo,-3+.01,0,0,{r:.005}),s(6,.03,.014,n.juntaPared,0,1,-2.5+.007,{r:.004}),s(.014,.03,5,n.juntaPared,-3+.007,1,0,{r:.004});{let p=a("dosificador",{frente:[.15,.1,1],alto:.95,lado:.45,zoom:1.05});s(.95,.08,.64,n.azulOsc,-2.5,0,-2.18,{padre:p,r:.015}),s(.87,.012,.56,n.hierro,-2.5,.075,-2.18,{padre:p,r:.004});let x=[y.tuboA,y.tuboB,y.tuboC,y.tuboD];for(let A=0;A<4;A++){let b=-2.85+A*.22;Ve(t,n,b,.085,-2.3,{padre:p,ry:.04*(A-1.5)});let P=-2.8+A*.22;c(.008,[b-.05,.4,-2.3],[P,.5,-2.43],x[A],{padre:p}),c(.008,[P,.5,-2.43],[P,2.2,-2.43],x[A],{padre:p})}Ve(t,n,-2.8,.085,-2.02,{padre:p,ry:.3}),Ve(t,n,-2.58,.085,-2,{padre:p,ry:-.2}),Ve(t,n,-2.36,.085,-2.02,{padre:p,ry:.1}),o(.12,.34,n.azul,-2,.085,-2.03,{padre:p,rb:.105,seg:22}),o(.08,.03,n.blanco,-2,.42,-2.03,{padre:p,seg:20}),s(4,.62,.03,n.blanco,-.95,1.95,-2.5+.015,{r:.012}),s(4,.02,.05,n.inoxCl,-.95,1.93,-2.5+.025,{r:.006});for(let A=0;A<4;A++){let b=-2.8+A*.22;s(.16,.34,.12,n.azulOsc,b,2.05,-2.5+.09,{padre:p,r:.02}),o(.062,.05,n.vidrio,b,2.17,-2.5+.155,{padre:p,rx:_t/2,seg:20}),o(.026,.05,n.inoxCl,b,2.17,-2.5+.18,{padre:p,rx:_t/2,seg:14}),s(.06,.02,.01,n.pantalla,b,2.3,-2.5+.151,{padre:p,r:.003}),o(.008,.012,x[A],b,2.2,-2.43,{padre:p,seg:8})}let w=[-2.45,-2.425,-2.4,-2.375];for(let A=0;A<4;A++)c(.008,[-2.8+A*.22,2.05,-2.43],[-2.8+A*.22,1.76,w[A]],x[A]),c(.008,[-2.8+A*.22,1.76,w[A]],[.7,1.76,w[A]],x[A]);for(let A=-2.6;A<.8;A+=.5)s(.03,.05,.1,n.inoxOsc,A,1.735,-2.4,{r:.008})}let R=(p,x,{pantallaGrande:w=!1}={})=>{let A=x,b=.96,P=-2.46,h=.98,l=P+h,d=.8;s(b+.1,.2,h+.06,y.bancada,p,0,P+h/2-.01,{padre:A,r:.02}),s(b,1.36,h,n.inox,p,.2,P+h/2,{padre:A,r:.035,s:3}),s(b-.02,.1,.014,n.inoxOsc,p,.22,l+.002,{padre:A,r:.004}),s(b-.07,.95,.024,n.inoxCl,p,.34,l+.002,{padre:A,r:.012}),s(b-.04,.2,.06,n.azulOsc,p,1.34,l-.005,{padre:A,r:.022}),s(w?.26:.2,.11,.012,n.pantalla,p-.2,1.385,l+.027,{padre:A,r:.006});for(let g=0;g<4;g++)o(.017,.016,n.blanco,p+.04+g*.06,1.435,l+.026,{padre:A,rx:_t/2,seg:12});o(.028,.03,y.rojo,p+.34,1.425,l+.026,{padre:A,rx:_t/2,seg:16}),o(.036,.008,y.tuboB,p+.34,1.425,l+.022,{padre:A,rx:_t/2,seg:16}),o(.315,.04,n.inoxOsc,p,d-.02,l+.012,{padre:A,rx:_t/2,seg:36}),m(.295,.04,n.inoxCl,p,d,l+.04,{padre:A,rx:0}),o(.245,.02,n.vidrioOsc,p,d-.01,l+.045,{padre:A,rx:_t/2,seg:32}),o(.21,.016,n.hierro,p,d-.008,l+.053,{padre:A,rx:_t/2,seg:28}),u(.13,y.tela,p-.05,d-.08,l+.085,{padre:A,sy:.75}),u(.09,y.tela2,p+.06,d+.07,l+.075,{padre:A,sy:.7}),o(.255,.012,n.vidrio,p,d-.006,l+.075,{padre:A,rx:_t/2,seg:32}),s(.035,.22,.05,n.negro,p+.38,d-.12,l+.045,{padre:A,r:.012});for(let g of[-.2,.2])s(.05,.08,.04,n.inoxOsc,p-.37,d+g,l+.02,{padre:A,r:.01});o(.036,.1,n.inoxOsc,p+.32,.25,l+.05,{padre:A,rx:_t/2,seg:14}),o(.05,.03,n.negro,p+.32,.25,l+.1,{padre:A,rx:_t/2,seg:14}),s(.42,.08,.22,n.blanco,p+.1,1.56,P+.14,{padre:A,r:.014});for(let g=0;g<4;g++)o(.012,.03,n.azulOsc,p-.04+g*.07,1.64,P+.14,{padre:A,seg:8});let _=[y.tuboA,y.tuboB,y.tuboC,y.tuboD];for(let g=0;g<4;g++){let f=p-.04+g*.07,S=[-2.45,-2.425,-2.4,-2.375][g];c(.008,[f,1.76,S],[f,1.72,P+.14],_[g],{padre:A}),c(.008,[f,1.72,P+.14],[f,1.65,P+.14],_[g],{padre:A})}};R(-1.35,t.grupo("lavadora-1")),R(-.4,t.grupo("lavadora-2"));{let p=a("lavadora",{frente:[.12,.12,1],alto:.3,lado:.2,zoom:1.3});R(.55,p,{pantallaGrande:!0}),Ve(t,n,1.12,0,-1.6,{padre:p,ry:-.7})}{let p=t.grupo("secadora"),x=1.95,w=1.1,A=-2.47,b=1.05,P=A+b,h=.88;s(w+.08,.12,b+.05,y.bancada,x,0,A+b/2-.01,{padre:p,r:.02}),s(w,1.74,b,n.inoxCl,x,.12,A+b/2,{padre:p,r:.04,s:3}),s(w-.08,1,.024,n.inox,x,.3,P+.002,{padre:p,r:.012}),s(w-.04,.24,.06,n.azulOsc,x,1.55,P-.005,{padre:p,r:.022}),s(.24,.12,.012,n.pantalla,x-.25,1.61,P+.027,{padre:p,r:.006});for(let l=0;l<4;l++)o(.018,.016,n.blanco,x+.04+l*.07,1.64,P+.026,{padre:p,rx:_t/2,seg:12});o(.03,.03,y.rojo,x+.42,1.64,P+.026,{padre:p,rx:_t/2,seg:16}),o(.36,.04,n.inoxOsc,x,h-.02,P+.012,{padre:p,rx:_t/2,seg:40}),m(.34,.045,n.inoxCl,x,h,P+.04,{padre:p,rx:0}),o(.285,.02,n.vidrioOsc,x,h-.01,P+.045,{padre:p,rx:_t/2,seg:36}),o(.24,.016,n.hierro,x,h-.008,P+.053,{padre:p,rx:_t/2,seg:32}),u(.14,y.toalla1,x-.04,h-.1,P+.085,{padre:p,sy:.7}),u(.1,y.toalla2,x+.08,h+.06,P+.075,{padre:p,sy:.7}),o(.295,.012,n.vidrio,x,h-.006,P+.075,{padre:p,rx:_t/2,seg:36}),s(.04,.26,.05,n.negro,x+.45,h-.13,P+.045,{padre:p,r:.012}),s(.6,.1,.02,n.inoxOsc,x,.17,P+.012,{padre:p,r:.008}),s(.14,.02,.025,n.negro,x,.2,P+.026,{padre:p,r:.006}),o(.1,.9,n.inox,x+.2,1.86,-2.3,{padre:p,seg:22});for(let l of[1.95,2.3,2.7])o(.108,.025,n.inoxOsc,x+.2,l,-2.3,{padre:p,seg:22});o(.1,.1,n.corte,x+.2,Pr-.02,-2.3,{padre:p,seg:22}),o(.17,.03,n.blanco,2.65,2.25,-2.5+.02,{rx:_t/2,seg:32}),m(.17,.01,n.inoxOsc,2.65,2.265,-2.5+.035,{rx:0}),c(.006,[2.65,2.265,-2.455],[2.65,2.37,-2.455],n.negro),c(.006,[2.65,2.265,-2.455],[2.73,2.23,-2.455],n.negro)}{s(1.1- -1.85,.006,.16,n.hierro,(-1.85+1.1)/2,.012,-1.2,{r:.002});let A=Math.round((1.1- -1.85)/.04),b=new ut(St(.016,.012,.14,.003,1),n.inoxCl,A),P=new Le;for(let h=0;h<A;h++)P.makeTranslation(-1.85+.02+h*.04,.022,-1.2),b.setMatrixAt(h,P);b.castShadow=b.receiveShadow=!0,e.add(b);for(let h of[-.08,.08])s(1.1- -1.85,.016,.014,n.inoxCl,(-1.85+1.1)/2,.012,-1.2+h,{r:.004});o(.13,.012,n.inoxCl,1.9,.012,-.55,{seg:28});for(let h=-3;h<=3;h++)s(.2-Math.abs(h)*.02,.008,.012,n.hierro,1.9,.02,-.55+h*.028,{r:.002})}{let p=a("calandra",{frente:[1,.05,.1],alto:.5,lado:.5,zoom:.95,mira:[0,.05,0]}),x=-2.95,w=-2.23,A=-1.4,b=.8,P=(A+b)/2,h=b-A;s(w-x,.12,h+.04,y.bancada,(x+w)/2,0,P,{padre:p,r:.02}),s(w-x-.04,.72,h,n.inox,(x+w)/2,.12,P,{padre:p,r:.03,s:3});for(let d of[A+.5,P,b-.5])s(.006,.6,.012,n.inoxOsc,w-.02,.18,d,{padre:p,r:.002});s(w-x-.1,.26,h-.1,n.inoxOsc,(x+w)/2-.02,.84,P,{padre:p,r:.02}),o(.21,h-.2,y.rodillo,w-.32,.88-(h-.2)/2,P,{padre:p,rx:_t/2,seg:32}),o(.04,h-.02,n.inoxOsc,w-.32,.88-(h-.02)/2,P,{padre:p,rx:_t/2,seg:14}),s(w-x-.02,.34,h+.02,n.inoxCl,(x+w)/2,1.1,P,{padre:p,r:.05,s:3}),s(.014,.05,h-.1,n.inoxOsc,w-.005,1.1,P,{padre:p,r:.004});for(let d of[A+.06,b-.06])s(.05,.4,.05,n.inox,w-.04,.75,d,{padre:p,r:.012});let l=w+.7;s(l-w,.03,h-.1,n.inoxCl,(w+l)/2,.8,P,{padre:p,r:.01});for(let d of[A+.15,b-.15])s(.04,.8,.04,n.inox,l-.04,0,d,{padre:p,r:.008}),s(.03,.03,.03,n.goma,l-.04,0,d,{padre:p,r:.008});s(.04,.04,h-.18,n.inox,l-.04,.36,P,{padre:p,r:.01}),s(l-w-.04,.012,h-.45,y.tela,(w+l)/2+.05,.832,P,{padre:p,r:.005}),s(.012,.2,h-.45,y.tela,l-.02,.64,P,{padre:p,r:.005}),s(.3,.014,h-.45,y.tela2,w+.15,.846,P,{padre:p,r:.006}),s(.5,.02,h-.5,n.inoxCl,w-.38,1.5,P,{padre:p,r:.006,rz:-.12}),s(.014,.08,h-.5,n.inoxCl,w-.12,1.48,P,{padre:p,r:.004}),s(.34,.03,h-.6,y.tela,w-.4,1.53,P,{padre:p,r:.012,rz:-.12}),s(.3,.03,h-.65,y.tela2,w-.4,1.56,P,{padre:p,r:.012,rz:-.12}),s(.26,.03,h-.7,y.tela,w-.4,1.59,P,{padre:p,r:.012,rz:-.12}),s(.07,.24,.46,n.azulOsc,w-.03,1.12,b-.32,{padre:p,r:.018}),s(.014,.1,.18,n.pantalla,w+.012,1.2,b-.32,{padre:p,r:.004});for(let d=0;d<3;d++)o(.016,.016,n.blanco,w+.012,1.14,b-.4+d*.07,{padre:p,rz:_t/2,seg:10});o(.026,.026,y.rojo,w+.012,1.14,b-.18,{padre:p,rz:_t/2,seg:14}),s(.3,Pr-1.44,.3,n.inox,x+.06,1.44,P-.1,{padre:p,r:.012}),s(.3,.025,.3,n.corte,x+.06,Pr,P-.1,{padre:p,r:.004})}{let p=a("suavizado",{frente:[.1,.12,1],alto:.55,lado:.2,zoom:.95}),x=1.2,w=2.85,A=.35,b=1.15,P=(x+w)/2,h=(A+b)/2,l=.9;s(w-x,.04,b-A,y.laminado,P,l-.04,h,{padre:p,r:.014}),s(w-x+.02,.012,b-A+.02,n.inoxCl,P,l-.052,h,{padre:p,r:.005}),s(w-x-.06,.07,b-A-.06,n.inox,P,l-.12,h,{padre:p,r:.01});for(let g of[x+.06,P,w-.06])for(let f of[A+.06,b-.06])s(.045,l-.12,.045,n.inox,g,0,f,{padre:p,r:.008}),o(.028,.02,n.goma,g,0,f,{padre:p,seg:12});s(w-x-.08,.025,b-A-.08,n.inox,P,.2,h,{padre:p,r:.008}),s(.55,.3,.4,y.cesto,x+.5,.225,h,{padre:p,r:.03}),u(.14,y.toalla2,x+.42,.52,h-.02,{padre:p,sy:.7}),u(.12,y.toalla1,x+.62,.5,h+.04,{padre:p,sy:.7});for(let g=0;g<4;g++)s(.5,.05,.36,g%2?y.tela2:y.tela,P+.5,.225+g*.052,h,{padre:p,r:.014});let d=[y.toalla1,y.toalla2,y.toalla3,y.tela],_=(g,f,S,I,L,z=0)=>{for(let F=0;F<S;F++){let N=F%3===2?L:I;s(.4,.035,.3,N,g+(i()-.5)*.012,l+F*.035,f+(i()-.5)*.012,{padre:p,r:.012,ry:z+(i()-.5)*.04})}};_(x+.28,A+.22,9,d[0],d[3]),_(x+.76,A+.22,7,d[1],d[3],.04),_(x+1.24,A+.2,10,d[2],d[0],-.03),s(.62,.02,.34,d[0],x+.5,l,A+.62,{padre:p,r:.008,ry:.06}),s(.3,.02,.34,d[0],x+.66,l+.02,A+.62,{padre:p,r:.008,ry:.06});for(let g=0;g<5;g++)o(.05,.34,d[(g+1)%3],x+1.2+g%3*.1,l+(g<3?.05:.135)-.17,A+.6,{padre:p,rx:_t/2,ry:0,seg:16});s(.18,.012,.12,n.blanco,w-.3,l,b-.2,{padre:p,r:.004,ry:.2}),o(.04,.1,n.negro,w-.08,l,A+.1,{padre:p,seg:14})}let C=(p,x,w,A,b,P)=>{let h=t.grupo(p,x);h.position.set(w,0,A),h.rotation.y=b;let l=.9,d=.62;s(l,.04,d,n.inoxCl,0,.13,0,{padre:h,r:.012});for(let _ of[-1,1])for(let g of[-1,1]){let f=_*(l/2-.03),S=g*(d/2-.03);o(.032,.03,n.goma,f,0,S,{padre:h,rz:_t/2,seg:14}),s(.04,.1,.04,n.gris,f,.04,S,{padre:h,r:.008}),o(.011,.9,n.inoxCl,f,.15,S,{padre:h,seg:8})}s(l-.04,.62,.014,P,0,.17,d/2-.03,{padre:h,r:.005}),s(l-.04,.62,.014,P,0,.17,-d/2+.03,{padre:h,r:.005}),s(.014,.62,d-.06,P,l/2-.03,.17,0,{padre:h,r:.005}),s(.014,.62,d-.06,P,-l/2+.03,.17,0,{padre:h,r:.005});for(let[_,g,f,S]of[[-1,-1,1,-1],[-1,1,1,1],[-1,-1,-1,1],[1,-1,1,1]])c(.011,[_*(l/2-.03),1.05,g*(d/2-.03)],[f*(l/2-.03),1.05,S*(d/2-.03)],n.inoxCl,{padre:h});return c(.012,[-(l/2-.03),1.05,-.16],[-(l/2+.09),1.05,-.16],n.inoxCl,{padre:h}),c(.012,[-(l/2-.03),1.05,.16],[-(l/2+.09),1.05,.16],n.inoxCl,{padre:h}),c(.014,[-(l/2+.09),1.05,-.16],[-(l/2+.09),1.05,.16],n.negro,{padre:h}),h},M=(p,x,w,A,b,P=y.mancha,h=!1)=>{let l=o(b,.006,P,x,h?w-.003:w,A,{padre:p,seg:10,rx:h?_t/2:0});return l.scale.x=.55+i()*.9,l.scale.z=.6+i()*.6,h||(l.rotation.y=i()*_t),l};{let p=a("grasa",{frente:[.1,.2,1],alto:.75,lado:.2,zoom:1}),x=C("carro-grasa",p,.05,1,.35,y.lonaGris),w=[y.crudo,y.chaqueta,y.azulTrapo,y.cuadros,y.crudo,y.marino,y.chaqueta];for(let b=0;b<12;b++){let P=(i()-.5)*.6,h=(i()-.5)*.3,l=.55+i()*.3,d=.12+i()*.07;u(d,w[b%w.length],P,l,h,{padre:x,sy:.7})}let A=(b,P,h,l,d)=>{let _=t.grupo("delantal",x);_.position.set(b,0,P),_.rotation.y=d,s(.3,.4,.012,l,0,.64,0,{padre:_,r:.005}),s(.17,.1,.012,l,0,1.04,0,{padre:_,r:.005}),s(.17,.012,.1,l,0,1.1,-.045,{padre:_,r:.004}),M(_,-.06,.86,.0075,.04,y.mancha,!0),M(_,.07,.74,.0075,.03,y.manchaClara,!0),M(_,-.04,.7,.0075,.024,y.mancha,!0)};A(-.18,.325,1,y.crudo,0),A(.2,.325,1,y.chaqueta,.03);for(let[b,P]of[[0,y.cuadros],[-.34,y.azulTrapo]])s(.26,.34,.012,P,b,.58,.341,{padre:x,r:.005}),s(.26,.02,.014,y.tela,b,.72,.342,{padre:x,r:.004}),s(.02,.34,.014,y.tela,b+.06,.58,.342,{padre:x,r:.004}),M(x,b-.03,.66,.348,.045,y.mancha,!0);for(let[b,P,h,l]of[[-.2,.9,-.02,.05],[.12,.92,.06,.045],[.3,.82,-.08,.035],[-.38,.8,.07,.04]])M(x,b,P,h,l),M(x,b+.05,P-.01,h+.04,l*.45,y.manchaClara);s(.3,.36,.05,y.chaqueta,-.58,.8,0,{padre:x,r:.015,ry:_t/2}),M(x,-.557,1,0,.05,y.mancha,!0).rotation.z=_t/2}{let p=a("blanco",{frente:[.1,.2,1],alto:.75,lado:.2,zoom:1}),x=C("carro-blanco",p,-1.9,1.95,-.3,y.lonaBlanca);for(let A=0;A<4;A++)s(.78,.07,.52,A%2?y.tela2:y.tela,0,.19+A*.075,0,{padre:x,r:.025});let w=[y.tela,y.tela2,y.chaqueta];for(let A=0;A<10;A++){let b=(i()-.5)*.62,P=(i()-.5)*.3,h=.62+i()*.3;u(.14+i()*.07,w[A%3],b,h,P,{padre:x,sy:.65})}s(.5,.14,.34,y.tela,.1,.82,0,{padre:x,r:.04,ry:.1}),s(.5,.14,.34,y.tela2,.1,.96,0,{padre:x,r:.04,ry:-.05}),s(.42,.36,.012,y.tela,.12,.6,.325,{padre:x,r:.005}),s(.012,.3,.34,y.tela2,.44,.65,.03,{padre:x,r:.005});for(let A=0;A<5;A++)s(.46,.04,.34,A%2?y.tela:y.chaqueta,-1.2,0+A*.045,2.2,{padre:p,r:.012,ry:.15+.03*A})}{s(.8,.07,.7,n.inoxCl,2.45,.04,-.55,{r:.012}),s(.7,.012,.6,n.inoxOsc,2.45,.11,-.55,{r:.004});for(let w of[-1,1])for(let A of[-1,1])o(.02,.04,n.goma,2.45+w*.34,0,-.55+A*.29,{seg:10});s(.05,1,.05,n.inox,2.45+.34,.1,-.55-.35,{r:.01}),s(.28,.17,.08,n.inoxOsc,2.45+.34,1,-.55-.35,{r:.02}),s(.2,.08,.012,n.pantalla,2.45+.34,1.045,-.55-.304,{r:.004}),s(.5,.28,.4,y.cesto,2.45-.02,.12,-.55+.02,{r:.04}),u(.17,y.toalla1,2.45-.1,.43,-.55,{sy:.7}),u(.14,y.tela2,2.45+.08,.42,-.55+.05,{sy:.7})}{c(.012,[-2.9,1.82,.95],[-2.9,1.82,1.5],n.inoxCl);for(let l of[.97,1.48])c(.01,[-2.9,1.82,l],[-3,1.82,l],n.inoxOsc);let x=[y.chaqueta,y.marino,y.chaqueta,y.marino];for(let l=0;l<4;l++){let d=1.04+l*.13;c(.005,[-2.9,1.82,d],[-2.9,1.82-.05,d],n.inoxCl),s(.07,.62,.11,x[l],-2.93,1.82-.66,d,{r:.025}),s(.06,.1,.1,x[l],-2.93,1.82-.08,d,{r:.025})}let w=-3,A=-2.5,b=1.5,P=2.45,h=(b+P)/2;for(let l of[w+.03,A-.03])for(let d of[b+.03,P-.03])s(.04,1.95,.04,n.inoxOsc,l-.02,0,d-.02,{r:.008});for(let l of[.08,.7,1.32,1.92])s(A-w-.02,.03,P-b-.02,n.inox,(w+A)/2+.005,l,h,{r:.008});Ve(t,n,-2.75,.11,1.68,{ry:_t/2}),Ve(t,n,-2.75,.11,1.9,{ry:_t/2+.1}),Ve(t,n,-2.75,.11,2.12,{ry:_t/2}),o(.12,.34,n.azul,-2.74,.11,2.34,{rb:.105,seg:22});for(let l=0;l<3;l++)s(.34,.13,.26,y.saco,-2.74,.73,1.64+l*.28,{r:.045,s:3}),s(.005,.07,.17,n.azul,-2.563,.76,1.64+l*.28,{r:.002});s(.32,.12,.24,y.saco,-2.74,.86,1.78,{r:.04,s:3,ry:.1}),s(.005,.06,.15,n.azul,-2.576,.89,1.78,{r:.002}),Ve(t,n,-2.75,1.35,1.66,{ry:_t/2}),Ve(t,n,-2.75,1.35,1.88,{ry:_t/2-.1}),It(t,n,-2.75,1.35,2.1,{ry:_t/2}),s(.3,.2,.22,n.madera,-2.74,1.35,2.3,{r:.012}),s(.5,.3,.38,y.cesto,-2.62,0,.5,{r:.04,ry:.15}),u(.16,y.tela,-2.62,.34,.5,{sy:.7})}let D=p=>{p.updateMatrixWorld(!0);let x=p.matrixWorld.clone().invert(),w=new Map,A=[],b=P=>{for(let h of P.children)if(!h.userData.unidad&&!h.isInstancedMesh)if(h.isMesh){if(A.push(h),!h.visible)continue;let l=h.geometry.clone();for(let _ of Object.keys(l.attributes))["position","normal","uv"].includes(_)||l.deleteAttribute(_);l.clearGroups(),l.applyMatrix4(new Le().multiplyMatrices(x,h.matrixWorld));let d=`${h.material.uuid}|${!!l.index}|${h.castShadow}|${h.receiveShadow}`;w.has(d)||w.set(d,{mat:h.material,cast:h.castShadow,recibe:h.receiveShadow,lista:[]}),w.get(d).lista.push(l)}else b(h)};b(p);for(let P of A)P.parent.remove(P);for(let{mat:P,cast:h,recibe:l,lista:d}of w.values()){let _=new $e(vi(d),P);_.castShadow=h,_.receiveShadow=l,p.add(_)}},O=[];return e.traverse(p=>{p.userData.unidad&&O.push(p)}),O.reverse().forEach(D),D(e),{raiz:e,puntos:r}}var Gm={crear:u3,mira:[-.1,.95,-.2],az:.62,el:.5,radio:4};var ps=2.85,Kt=.16,Ir=Math.PI,Fi=-2.985,zn=-2.485;function d3(n){let e=new zt,t=Sn(e),i=bn(31),r={},a=(f,S={})=>{let I=t.grupo(f);return I.userData.unidad=!0,r[f]={grupo:I,...S},I},s=t.caja,o=t.cil,c=t.barra,u=t.esfera,m=t.toro,E=(f,S={})=>new Gt({color:f,roughness:.6,metalness:0,...S}),y={gres:E("#B9C3C8",{roughness:.82}),azulejo:E("#FFFFFF",{roughness:.3}),taq:E("#6E96AF",{roughness:.45,metalness:.25}),taqOsc:E("#4F7389",{roughness:.5,metalness:.25}),taqInt:E("#CBD7DE",{roughness:.6}),espejo:E("#D6E7F0",{roughness:.08,metalness:.2,emissive:"#6FA9C8",emissiveIntensity:.3}),reflejo:E("#FFFFFF",{roughness:.2,transparent:!0,opacity:.4,depthWrite:!1}),cortina:E("#9AD0EC",{roughness:.85}),clara:E("#E0BF8E",{roughness:.7}),amarillo:E("#F2C230",{roughness:.5}),fl\u00FAor:E("#D5E04A",{roughness:.85}),marino:E("#2E4A63",{roughness:.9}),toalla:E("#7BB6DC",{roughness:.95}),alfombra:E("#4E6A7A",{roughness:.9}),crema:E("#7DB24A",{roughness:.4}),colonia:E("#8FD3EE",{roughness:.1,transparent:!0,opacity:.8}),papel:E("#FBFBF7",{roughness:.95}),carton:E("#C9A877",{roughness:.8})},T=(f,S,I,L,z,F,N,B={})=>o(S,I,L,z,F-I/2,N,{rx:Ir/2,padre:f,...B}),v=(f,S,I,L,z,F,N,B={})=>o(S,I,L,z-0,F-I/2,N,{rz:Ir/2,padre:f,...B}),R=(f,S,I,L,z)=>{let F=t.grupo("",f);return F.position.set(S,I,L),F.rotation.y=z,F};s(6+Kt+.04,.24,5+Kt+.04,n.corte,-Kt/2,-.25,-Kt/2,{r:.03}),s(6,.012,5,n.juntaSuelo,0,-.012,0,{r:.002});{let S=new ut(St(.24,.014,.24,.003,1),y.gres,480),I=new Le,L=new Be,z=0;for(let F=0;F<24;F++)for(let N=0;N<20;N++)I.makeTranslation(-3+.25/2+F*.25,.003,-2.5+.25/2+N*.25),S.setMatrixAt(z,I),S.setColorAt(z,L.set("#FFFFFF").multiplyScalar(.93+i()*.07)),z++;S.count=z,S.receiveShadow=!0,e.add(S)}let C=-2.7,M=-1.3,D=2.2,O=2.68,p=-2.5-Kt/2,x=(f,S,I,L,z,F)=>s(f,S,I,n.pared,L,z,F,{r:.002,s:1});x(C-(-3-Kt),ps,Kt,(-3-Kt+C)/2,0,p),x(3-M,ps,Kt,(M+3)/2,0,p),x(M-C,D,Kt,(C+M)/2,0,p),x(M-C,ps-O,Kt,(C+M)/2,O,p),x(Kt,ps,5,-3-Kt/2,0,0),s(6+Kt,.025,Kt,n.corte,(0-Kt)/2,ps,p,{r:.004}),s(Kt,.025,5,n.corte,-3-Kt/2,ps,0,{r:.004}),s(.012,ps,Kt,n.corte,3.006,0,p,{r:.002}),s(Kt,ps,.012,n.corte,-3-Kt/2,0,2.506,{r:.002});{let I=new ut(St(.194,.194,.012,.004,1),y.azulejo,550),L=new Le,z=new Le().makeRotationY(Ir/2),F=new Be,N=0,B=V=>V===0?F.set("#9DB3C1"):V===9?F.set("#55ADDD"):F.set("#F4F8FA").multiplyScalar(.985+i()*.015);for(let V=0;V<10;V++){let X=.1+V*.2;for(let Z=0;Z<30;Z++)L.makeTranslation(-3+.2/2+Z*.2,X,-2.5+.006),I.setMatrixAt(N,L),I.setColorAt(N,B(V)),N++;for(let Z=0;Z<25;Z++)L.copy(z).setPosition(-3+.006,X,-2.5+.2/2+Z*.2),I.setMatrixAt(N,L),I.setColorAt(N,B(V)),N++}I.count=N,I.receiveShadow=!0,e.add(I),s(6,2,.004,n.juntaPared,0,0,-2.5+.002,{r:.001,s:1}),s(.004,2,5,n.juntaPared,-3+.002,0,0,{r:.001,s:1}),s(6,.018,.02,n.inoxCl,0,2,-2.5+.01,{r:.005}),s(.02,.018,5,n.inoxCl,-3+.01,2,0,{r:.005})}{let f=-2.5-Kt/2,S=M-C,I=O-D,L=(C+M)/2;s(S,.036,Kt+.08,n.inoxCl,L,D-.03,f+.04,{r:.008});for(let[z,F,N,B]of[[S,.05,L,D],[S,.05,L,O-.05],[.05,I,C+.025,D],[.05,I,M-.025,D],[.035,I,L,D]])s(z,F,.07,n.blanco,N,B,f,{r:.008});s(S-.08,I-.08,.012,n.vidrio,L,D+.04,f,{r:.003}),s(.012,.1,.02,n.gris,L+.12,D+.2,f+.04,{r:.004})}let w=(f,S,I,L,z,{etiqueta:F=n.azul,escala:N=1}={})=>{let B=R(f,S,I,L,z);return B.scale.setScalar(N),s(.09,.26,.012,n.blanco,0,0,.006,{padre:B,r:.004}),s(.085,.2,.08,n.blanco,0,.045,.05,{padre:B,r:.02,s:3}),s(.07,.07,.006,F,0,.12,.093,{padre:B,r:.002}),s(.02,.1,.004,n.vidrio,.026,.06,.092,{padre:B,r:.001}),s(.07,.016,.07,n.blanco,0,.02,.07,{padre:B,r:.006}),s(.025,.016,.06,n.azul,0,.005,.09,{padre:B,r:.006}),o(.007,.03,n.inoxCl,0,-.025,.115,{padre:B,seg:10}),B},A=(f,S,I,L,z,F,{alto:N=.16,r:B=.03}={})=>{o(B,N,z,S,I,L,{rb:B*1.08,padre:f,seg:20}),o(B*.6,.025,n.blanco,S,I+N,L,{padre:f,seg:14}),o(B*.2,.02,n.blanco,S,I+N+.025,L,{padre:f,seg:8}),o(B*1.03,N*.45,F,S,I+N*.2,L,{rb:B*1.07,padre:f,seg:20})},b=(f,S,I,L,z,F,{bandas:N=!1}={})=>{let B=t.grupo("",f);B.position.set(S,I,L),B.rotation.y=z,s(.32,.5,.1,F,0,0,0,{padre:B,r:.03,s:3});for(let V of[-1,1])s(.09,.46,.09,F,V*.2,.02,0,{padre:B,r:.03,s:3,rz:-V*.08});if(s(.2,.05,.11,F,0,.47,0,{padre:B,r:.02}),s(.008,.46,.103,n.hierro,0,.02,0,{padre:B,r:.002}),N)for(let V of[.12,.26])s(.325,.035,.104,n.blanco,0,V,0,{padre:B,r:.002});return c(.006,[0,.52,0],[0,.58,0],n.inoxOsc,{padre:B,seg:6}),B},P=(f,S,I,L,z,F=1)=>{let N=t.grupo("neceser",f);return N.position.set(S,I,L),N.rotation.y=z,N.scale.setScalar(F),s(.24,.12,.12,y.marino,0,0,0,{padre:N,r:.04,s:3}),s(.236,.006,.124,n.blanco,0,.1,0,{padre:N,r:.002}),s(.07,.025,.03,n.hierro,0,.12,0,{padre:N,r:.012}),s(.05,.03,.004,n.azul,-.07,.04,.062,{padre:N,r:.002}),o(.03,.15,n.blanco,.17,0,.09,{rb:.032,padre:N,seg:20}),o(.031,.07,n.azul,.17,.04,.09,{rb:.033,padre:N,seg:20}),o(.02,.03,n.azulOsc,.17,.15,.09,{padre:N,seg:14}),s(.055,.1,.04,y.colonia,.07,0,.14,{padre:N,r:.012}),s(.04,.04,.003,n.blanco,.07,.03,.162,{padre:N,r:.001}),o(.016,.04,n.negro,.07,.1,.14,{padre:N,seg:12}),N},h=(f,S,I,L,z)=>{let F=t.grupo("",f);F.position.set(S,I,L),s(.3,.4,.09,z,0,.45,0,{padre:F,r:.03,s:3});for(let N of[-1,1])s(.14,.5,.085,z,N*.075,0,0,{padre:F,r:.03,s:3}),s(.09,.42,.085,z,N*.2,.44,0,{padre:F,r:.03,s:3,rz:-N*.07});for(let N of[.1,.22])s(.31,.03,.094,n.blanco,0,N+.04,0,{padre:F,r:.002});return F},l=(f,S,I,L,z)=>{let F=t.grupo("",f);return F.position.set(S,I,L),F.rotation.y=z,s(.1,.03,.27,n.goma,0,0,0,{padre:F,r:.012}),s(.09,.07,.24,n.carne,0,.03,0,{padre:F,r:.03}),s(.085,.18,.1,n.carne,0,.06,-.06,{padre:F,r:.03}),s(.09,.03,.06,n.hierro,0,.1,.1,{padre:F,r:.012}),F};{let f=a("lavabo",{frente:[1,.05,.1],alto:.5,lado:.5,zoom:.95,mira:[0,.05,0]}),S=[-.9,-.3,.3],I=-1.35,L=.75,z=(I+L)/2,F=L-I;s(.46,.1,F-.06,n.negro,-2.74,0,z,{padre:f,r:.006}),s(.495,.6,F-.04,n.blanco,-2.7375,.1,z,{padre:f,r:.008}),s(.03,.15,F,n.blanco,-2.485,.7,z,{padre:f,r:.006}),S.forEach(B=>{s(.016,.52,.56,n.blanco,-2.482,.14,B,{padre:f,r:.006}),c(.007,[-2.468,.54,B-.15],[-2.468,.54,B+.15],n.inoxCl,{padre:f,seg:8})}),s(.08,.04,F,n.inoxCl,-2.95,.85,z,{padre:f,r:.006}),s(.08,.04,F,n.inoxCl,-2.49,.85,z,{padre:f,r:.006});let N=[[I,S[0]-.21],[S[0]+.21,S[1]-.21],[S[1]+.21,S[2]-.21],[S[2]+.21,L]];for(let[B,V]of N)s(.38,.04,V-B,n.inoxCl,-2.72,.85,(B+V)/2,{padre:f,r:.006});S.forEach(B=>{s(.36,.012,.4,n.loza,-2.72,.74,B,{padre:f,r:.004});for(let V of[-1,1])s(.012,.158,.42,n.loza,-2.72+V*.184,.74,B,{padre:f,r:.004}),s(.38,.158,.012,n.loza,-2.72,.74,B+V*.204,{padre:f,r:.004});o(.025,.004,n.inoxCl,-2.72,.752,B,{padre:f,seg:16}),o(.026,.025,n.inoxCl,-2.95,.89,B,{padre:f,seg:16}),o(.013,.17,n.inoxCl,-2.95,.915,B,{padre:f,seg:14}),c(.011,[-2.95,1.085,B],[-2.8,1.085,B],n.inoxCl,{padre:f}),o(.014,.05,n.inoxCl,-2.8,1.035,B,{padre:f,seg:12}),s(.09,.016,.02,n.inoxCl,-2.91,.99,B,{padre:f,r:.006})}),s(.012,.62,F-.1,y.espejo,Fi-.006,1.13,z,{padre:f,r:.002}),s(.02,.025,F-.08,n.inoxCl,Fi-.002,1.745,z,{padre:f,r:.006}),s(.02,.025,F-.08,n.inoxCl,Fi-.002,1.105,z,{padre:f,r:.006});for(let[B,V]of[[-.75,.55],[.15,.55],[.5,.55]])s(.003,.5,.05,y.reflejo,Fi+.001,1.18,B,{padre:f,r:.001,rx:-V});[-.6,0,.6].forEach((B,V)=>w(f,Fi,.93,B,Ir/2,{etiqueta:V===1?n.azulOsc:n.azul}));{let B=R(f,Fi,1.1,1.05,Ir/2);s(.3,.4,.012,n.blanco,0,0,.006,{padre:B,r:.004}),s(.28,.36,.1,n.blanco,0,.02,.06,{padre:B,r:.03,s:3}),s(.2,.02,.08,n.hierro,0,0,.08,{padre:B,r:.006}),s(.12,.06,.006,n.azul,0,.26,.113,{padre:B,r:.002}),s(.16,.08,.004,n.papel,0,-.07,.07,{padre:B,r:.001}),s(.02,.05,.008,n.gris,.1,.12,.112,{padre:B,r:.004}),o(.14,.42,n.gris,-2.75,0,1.05,{rb:.115,padre:f,seg:24}),o(.145,.025,n.negro,-2.75,.42,1.05,{padre:f,seg:24}),s(.1,.012,.03,n.negro,-2.6,.02,1.05,{padre:f,r:.005})}}{let f=a("taller",{frente:[1,.08,.1],alto:.45,lado:.55,zoom:.9,mira:[0,.2,0]}),S=1.8,I=1.45,L=2.15;for(let z of[-2.95,-2.43])for(let F of[I+.03,L-.03])s(.04,.88,.04,n.inox,z,0,F,{padre:f,r:.008});s(.52,.025,.64,n.inoxOsc,-2.69,.25,S,{padre:f,r:.008}),s(.14,.12,.2,n.hierro,-2.62,.275,S-.15,{padre:f,r:.02}),o(.1,.16,n.negro,-2.8,.275,S+.16,{rb:.085,padre:f,seg:20}),s(.5,.012,.62,n.inoxOsc,-2.69,.6,S,{padre:f,r:.004});for(let z of[-1,1])s(.014,.3,.62,n.inox,-2.69+z*.243,.6,S,{padre:f,r:.004}),s(.5,.3,.014,n.inox,-2.69,.6,S+z*.303,{padre:f,r:.004});o(.035,.004,n.hierro,-2.69,.612,S,{padre:f,seg:16}),s(.07,.04,.7,n.inoxCl,-2.43,.88,S,{padre:f,r:.008}),s(.07,.04,.7,n.inoxCl,-2.955,.88,S,{padre:f,r:.008});for(let z of[-1,1])s(.55,.04,.07,n.inoxCl,-2.69,.88,S+z*.315,{padre:f,r:.008});s(.02,.22,.7,n.inoxCl,Fi-.003+.01,.92,S,{padre:f,r:.006}),o(.03,.03,n.inoxCl,-2.945,.92,S,{padre:f,seg:16}),o(.016,.3,n.inoxCl,-2.945,.95,S,{padre:f,seg:14}),s(.08,.07,.1,n.inoxCl,-2.945,1.02,S,{padre:f,r:.02}),c(.013,[-2.945,1.25,S],[-2.72,1.25,S],n.inoxCl,{padre:f}),o(.016,.1,n.inoxCl,-2.72,1.15,S,{padre:f,seg:12}),c(.009,[-2.9,1.05,S-.04],[-2.74,1.13,S-.24],n.inoxCl,{padre:f}),c(.009,[-2.9,1.05,S+.04],[-2.74,1.13,S+.24],n.inoxCl,{padre:f});for(let z of[-1,1])s(.04,.02,.05,n.azul,-2.735,1.13,S+z*.255,{padre:f,r:.008});{let z=R(f,Fi,1.1,S,Ir/2);s(.34,.5,.012,n.blanco,0,.1,.006,{padre:z,r:.004}),s(.3,.025,.2,n.blanco,0,0,.1,{padre:z,r:.01}),s(.012,.3,.2,n.blanco,-.15,.025,.1,{padre:z,r:.004}),s(.012,.3,.2,n.blanco,.15,.025,.1,{padre:z,r:.004}),o(.12,.3,n.crema,0,.03,.1,{padre:z,seg:28}),o(.122,.12,n.blanco,0,.12,.1,{padre:z,seg:28}),o(.125,.025,n.azul,0,.35,.1,{padre:z,seg:28}),o(.12,.012,n.blanco,0,.375,.1,{padre:z,seg:28}),c(.01,[-.05,.38,.1],[.05,.38,.1],n.gris,{padre:z,seg:8}),s(.1,.04,.12,n.blanco,0,-.04,.12,{padre:z,r:.012}),s(.06,.016,.16,n.azul,0,-.07,.2,{padre:z,r:.008,rx:.2}),o(.01,.05,n.inoxCl,0,-.09,.12,{padre:z,seg:10})}{let z=R(f,Fi,1.05,2.33,Ir/2);s(.2,.34,.012,n.blanco,0,0,.006,{padre:z,r:.004}),o(.12,.2,n.papel,0,.05,.14,{padre:z,seg:28}),o(.03,.202,n.carton,0,.05,.14,{padre:z,seg:14}),s(.04,.2,.012,n.blanco,0,.05,.026,{padre:z,r:.004}),s(.15,.22,.004,n.papel,0,-.17,.14,{padre:z,r:.001,rx:.05})}s(.004,.2,.2,n.azul,Fi+.001,1.58,1.85,{padre:f,r:.002}),s(.006,.12,.05,n.blanco,Fi+.003,1.62,1.85,{padre:f,r:.002}),s(.006,.05,.1,n.blanco,Fi+.003,1.59,1.85,{padre:f,r:.002})}let d=(f,S,I)=>{let L=zn,z=-1.6,F=(S+I)/2,N=(L+z)/2;s(I-S,.08,z-L,n.loza,F,0,N,{padre:f,r:.02});for(let B=0;B<6;B++)s(I-S-.1,.004,.012,n.juntaPared,F,.08,L+.12+B*.13,{padre:f,r:.001});o(.05,.006,n.inoxCl,F,.08,N+.1,{padre:f,seg:20});{let B=R(f,F,1.08,zn,0);T(B,.05,.03,n.inoxCl,0,0,.015,{padre:B,seg:20}),s(.1,.02,.04,n.inoxCl,0,-.01,.055,{padre:B,r:.008}),T(B,.012,.05,n.inoxCl,0,-.015,.035,{padre:B,seg:10}),c(.01,[0,.92,.02],[0,.92,.3],n.inoxCl,{padre:B}),T(B,.03,.01,n.inoxCl,0,.92,.012,{padre:B,seg:16});let V=t.grupo("",B);V.position.set(0,.9,.32),V.rotation.x=-.35,o(.095,.022,n.inoxCl,0,0,0,{padre:V,seg:28}),o(.082,.004,n.hierro,0,-.004,0,{padre:V,seg:24})}s(.26,.015,.1,n.inoxCl,F+.25,1.32,zn+.05,{padre:f,r:.005}),s(.26,.05,.012,n.inoxCl,F+.25,1.335,zn+.097,{padre:f,r:.004});for(let B of[-1,1])s(.012,.07,.09,n.inoxOsc,F+.25+B*.1,1.25,zn+.05,{padre:f,r:.004});return A(f,F+.19,1.335,zn+.055,n.azul,n.blanco),A(f,F+.3,1.335,zn+.055,n.blanco,n.azulOsc,{alto:.13,r:.027}),w(f,F-.3,1.08,zn,0,{etiqueta:n.azulOsc}),{cx:F,z0:L,z1:z}};{d(void 0,-2.98,-2.07),c(.008,[-2.98,1.98,-1.6-.02],[-2.07,1.98,-1.6-.02],n.inoxCl,{});for(let L=0;L<9;L++){let z=-2.92+L*.062,F=-1.6-.02+(L%2?.025:-.005);s(.066,1.8,.014,y.cortina,z,.14,F,{r:.004}),m(.016,.003,n.inoxCl,z,1.97,-1.6-.02,{rx:0,ry:Ir/2})}s(.012,1.92,-1.6-zn,n.vidrio,-2.05,.08,(zn+-1.6)/2,{r:.002}),s(.025,2,.025,n.inoxCl,-2.05,0,-1.6,{r:.006}),s(.02,.025,-1.6-zn,n.inoxCl,-2.05,1.99,(zn+-1.6)/2,{r:.006})}{let f=a("ducha",{frente:[.3,.1,1],alto:.4,lado:.35,zoom:.9,mira:[0,.1,0]}),S=-2.03,I=-1.13,L=-1.6;d(f,S,I);let z=(zn+L)/2;s(.012,1.92,L-zn,n.vidrio,I,.08,z,{padre:f,r:.002}),s(.025,2,.025,n.inoxCl,I,0,L,{padre:f,r:.006}),s(.02,.025,L-zn,n.inoxCl,I,1.99,z,{padre:f,r:.006}),s(.02,.02,L-zn,n.inoxCl,I,.075,z,{padre:f,r:.006}),s(.5,1.92,.012,n.vidrio,S+.27,.08,L,{padre:f,r:.002}),s(I-S,.025,.025,n.inoxCl,(S+I)/2,1.99,L,{padre:f,r:.006}),s(.5,.02,.02,n.inoxCl,S+.27,.075,L,{padre:f,r:.006}),s(.025,2,.025,n.inoxCl,S+.015,0,L,{padre:f,r:.006}),s(.025,2,.025,n.inoxCl,S+.52,0,L,{padre:f,r:.006});let F=t.grupo("",f);F.position.set(S+.53,.08,L),F.rotation.y=-1.15,s(.38,1.92,.01,n.vidrio,.2,0,0,{padre:F,r:.002}),s(.02,1.95,.02,n.inoxCl,.01,0,0,{padre:F,r:.006}),s(.02,1.95,.02,n.inoxCl,.39,0,0,{padre:F,r:.006}),c(.01,[.33,.85,.03],[.33,1.15,.03],n.inoxCl,{padre:F}),s(.3,.55,.05,y.toalla,S+.27,1.43,L+.04,{padre:f,r:.02,s:3}),s(.31,.04,.09,y.toalla,S+.27,1.96,L+.01,{padre:f,r:.012}),s(.2,.04,.052,n.blanco,S+.27,1.62,L+.041,{padre:f,r:.002})}{let I=-.42500000000000004,L=-2.035,z=zn,F=(L+z)/2;s(.75,.06,.45,n.inoxOsc,I,0,F,{r:.006});for(let N of[-.8+.01,-.05-.01])s(.02,1.9,.45,n.blanco,N,.06,F,{r:.004});s(.73,1.9,.012,n.pared,I,.06,z+.006,{r:.002}),s(.75,.025,.45,n.blanco,I,1.95,F,{r:.006});for(let N of[.06,.5,.95,1.4])s(.73,.02,.44,n.blanco,I,N,F,{r:.003});Ve(t,n,-.67,.08,-2.3,{ry:.1}),Ve(t,n,-.43,.08,-2.3,{ry:-.08}),Ve(t,n,-.2,.08,-2.3,{ry:.05}),Ve(t,n,-.55,.08,-2.15,{ry:.2,escala:.9}),It(t,n,-.7,.52,-2.25,{ry:.3}),It(t,n,-.57,.52,-2.25,{ry:-.2}),It(t,n,-.44,.52,-2.25,{ry:.1}),s(.22,.18,.3,y.carton,-.2,.52,-2.28,{r:.012});for(let N=0;N<4;N++)o(.075,.2,n.papel,-.7+N%2*.16,.97+Math.floor(N/2)*0,-2.28+Math.floor(N/2)*0,{seg:20});s(.3,.1,.3,y.toalla,-.28,.97,-2.28,{r:.03,s:3}),s(.28,.08,.28,n.blanco,-.28,1.07,-2.28,{r:.03,s:3}),s(.3,.22,.32,y.carton,-.65,1.42,-2.28,{r:.012}),s(.25,.16,.3,y.carton,-.3,1.42,-2.28,{r:.012,ry:.15});for(let[N,B,V]of[[-.8,-1.7,1],[-.05,1.7,-1]]){let X=t.grupo("",void 0);X.position.set(N,.06,L+.01),X.rotation.y=B,s(.375,1.84,.018,n.inoxCl,V*.19,0,0,{padre:X,r:.005}),s(.2,.12,.004,y.amarillo,V*.19,1.2,-.011,{padre:X,r:.002}),s(.2,.012,.012,n.inoxOsc,V*.19,.9,-.02,{padre:X,r:.004}),c(.006,[V*.28,1,.01],[V*.28,1.25,.01],n.inoxOsc,{padre:X,seg:8})}}{let f=a("taquillas",{frente:[.1,.25,1],alto:.5,lado:.2,zoom:.95,mira:[0,.1,0]}),S=.38,I=.3,L=-2.485,z=-2,F=7,N=.12,B=1.83,V=F*S,X=I+V/2,Z=(L+z)/2;s(V-.1,.12,.44,n.negro,X,0,Z,{padre:f,r:.006}),s(V+.04,.02,.5,n.inoxCl,X,N+B,Z,{padre:f,r:.006});let se={2:-1.7,4:-.95};for(let G=0;G<F;G++){let j=I+G*S,re=j+S/2;if(se[G]===void 0)s(S-.004,B,z-L,y.taqOsc,re,N,Z,{padre:f,r:.004});else{s(S-.004,B,.01,y.taqInt,re,N,L+.005,{padre:f,r:.002});for(let ge of[0,1])s(.012,B,z-L,y.taqOsc,j+.004+ge*(S-.016),N,Z,{padre:f,r:.002});s(S-.004,.012,z-L,y.taqOsc,re,N,Z,{padre:f,r:.002}),s(S-.03,.014,z-L-.02,y.taqInt,re,1.55,Z,{padre:f,r:.002}),c(.007,[j+.02,1.45,Z],[j+S-.02,1.45,Z],n.inoxCl,{padre:f,seg:8})}let ce=t.grupo("",f);ce.position.set(j+.002,N,z+.007),ce.rotation.y=se[G]??0;let J=S-.008;s(J,B,.014,y.taq,J/2,0,0,{padre:ce,r:.004});for(let ge=0;ge<5;ge++)s(J-.1,.012,.01,n.hierro,J/2,B-.25+ge*.026,.009,{padre:ce,r:.002});for(let ge=0;ge<3;ge++)s(J-.1,.012,.01,n.hierro,J/2,.14+ge*.026,.009,{padre:ce,r:.002});s(.05,.12,.012,n.inoxCl,J-.07,.95,.01,{padre:ce,r:.004}),T(ce,.011,.014,n.hierro,J-.07,1,.021,{seg:12}),s(.06,.035,.006,n.blanco,J/2,B-.42,.01,{padre:ce,r:.002}),s(.034,.012,.004,n.hierro,J/2,B-.41,.014,{padre:ce,r:.001})}{let G=I+2*S,j=G+S/2;h(f,j,.58,Z,y.marino),l(f,G+.1,N+.012,Z+.05,.2),l(f,G+.27,N+.012,Z+.06,-.15),P(f,j,1.564,Z+.06,.1,.9)}{let G=I+4*S,j=G+S/2;b(f,j,.9,Z,0,y.fl\u00FAor,{bandas:!0}),u(.09,n.amarillo,j,1.564+.05,Z+.04,{padre:f,sy:.8}),l(f,j-.05,N+.012,Z+.05,.1)}{for(let J=-1;J<=1;J++)s(2.75-.5,.04,.12,y.clara,1.625,.43,-1.58+J*.135,{padre:f,r:.01});for(let J of[.5+.1,1.625,2.75-.1]){for(let ge of[-1.58-.17,-1.58+.17])s(.04,.43,.04,n.inox,J,0,ge,{padre:f,r:.008});s(.04,.03,.38,n.inox,J,.39,-1.58,{padre:f,r:.008})}for(let J of[-1,1])s(2.75-.5-.1,.02,.13,y.clara,1.625,.14,-1.58+J*.08,{padre:f,r:.006});s(.32,.05,.24,y.toalla,.8,.47,-1.58,{padre:f,r:.02,s:3,ry:.1}),s(.3,.04,.22,n.blanco,.8,.52,-1.58,{padre:f,r:.02,s:3,ry:.1}),P(f,1.6,.47,-1.58,-.15);for(let[J,ge,Oe]of[[1.2,-1.58+0,.1],[1.33,-1.58+.02,-.05]])s(.1,.018,.26,n.azul,J,.16,ge,{padre:f,r:.01,ry:Oe}),s(.09,.02,.05,n.blanco,J,.178,ge+.02,{padre:f,r:.008,ry:Oe});l(f,2.3,0,-1.58+0,.3),l(f,2.45,0,-1.58+.02,.1)}}{s(.8,.012,.42,y.alfombra,-1.58,.01,-1.3,{r:.004});for(let f=0;f<7;f++)s(.7,.006,.02,n.goma,-1.58,.022,-1.45+f*.05,{r:.002});o(.12,.012,n.inoxCl,0,.011,.2,{seg:28});for(let f=-3;f<=3;f++)s(.18-Math.abs(f)*.02,.008,.012,n.hierro,0,.021,.2+f*.026,{r:.002});{let f=a("fregona",{frente:[.45,.2,1],alto:.35,lado:.3,zoom:1.1,mira:[0,-.15,0]});f.position.set(-.4,0,-1.2),o(.17,.28,y.amarillo,0,0,0,{rb:.13,padre:f,seg:24}),m(.165,.007,n.gris,0,.28,0,{padre:f}),s(.14,.07,.2,n.gris,0,.28,.2,{padre:f,r:.02}),c(.012,[0,.3,0],[.12,1.2,-.12],n.madera,{padre:f});for(let S=0;S<10;S++){let I=S/10*Ir*2;c(.011,[0,.3,0],[Math.cos(I)*.07,.16,Math.sin(I)*.07],n.blanco,{padre:f,seg:6})}}{let f=t.grupo("",void 0);f.position.set(-.55,0,-.75),f.rotation.y=.6;for(let S of[-1,1]){let I=t.grupo("",f);if(I.position.set(0,.29,S*.13),I.rotation.x=-S*.2,s(.3,.58,.012,y.amarillo,0,-.29,0,{padre:I,r:.005}),S===1){let L=(z,F,N,B,V)=>{let X=new Mn;X.moveTo(-z/2,0),X.lineTo(z/2,0),X.lineTo(0,F),X.closePath();let Z=new $e(new Bn(X,{depth:.004,bevelEnabled:!1}),N);Z.position.set(0,B,V),Z.castShadow=!0,Z.receiveShadow=!0,I.add(Z)};L(.22,.19,n.negro,-.2,.0065),L(.15,.12,y.amarillo,-.18,.0105),s(.016,.06,.004,n.negro,0,-.145,.0145,{padre:I,r:.001}),s(.016,.016,.004,n.negro,0,-.165,.0145,{padre:I,r:.001}),s(.22,.03,.004,n.negro,0,-.27,.0065,{padre:I,r:.001})}}v(f,.01,.12,n.gris,0,.58,0)}{let L=.8999999999999999;for(let z=-1;z<=1;z++)s(1.9- -.1,.04,.12,y.clara,L,.43,.75+z*.135,{r:.01});for(let z of[-.1+.1,L,1.9-.1]){for(let F of[.75-.17,.75+.17])s(.04,.43,.04,n.inox,z,0,F,{r:.008});s(.04,.03,.38,n.inox,z,.39,.75,{r:.008})}s(.5,.26,.26,y.marino,1.35,.47,.75-.02,{r:.08,s:3,ry:.15}),c(.015,[1.17,.75,.75-.04],[1.53,.75,.75+.02],n.negro),s(.34,.06,.26,y.toalla,.25,.47,.75+.03,{r:.025,s:3,ry:-.2}),o(.035,.2,n.azul,.62,.47,.75-.05,{seg:16})}{let f=t.grupo("",void 0);f.position.set(2.7,0,1),o(.18,.03,n.negro,0,0,0,{padre:f,seg:24}),o(.018,1.75,n.negro,0,.03,0,{padre:f,seg:12});for(let S of[0,1.57,3.14,4.71])c(.01,[0,1.7,0],[Math.cos(S)*.18,1.78,Math.sin(S)*.18],n.negro,{padre:f,seg:8});b(f,.17,1.12,0,0,y.fl\u00FAor,{bandas:!0}),b(f,0,1.1,.18,0,y.marino),l(f,-.12,.03,.12,.4)}}let _=f=>{f.updateMatrixWorld(!0);let S=f.matrixWorld.clone().invert(),I=new Map,L=[],z=F=>{for(let N of F.children)if(!N.userData.unidad&&!N.isInstancedMesh)if(N.isMesh){if(L.push(N),!N.visible)continue;let B=N.geometry.clone();for(let X of Object.keys(B.attributes))["position","normal","uv"].includes(X)||B.deleteAttribute(X);B.clearGroups(),B.applyMatrix4(new Le().multiplyMatrices(S,N.matrixWorld));let V=`${N.material.uuid}|${!!B.index}|${N.castShadow}|${N.receiveShadow}`;I.has(V)||I.set(V,{mat:N.material,cast:N.castShadow,recibe:N.receiveShadow,lista:[]}),I.get(V).lista.push(B)}else z(N)};z(f);for(let F of L)F.parent.remove(F);for(let{mat:F,cast:N,recibe:B,lista:V}of I.values()){let X=new $e(vi(V),F);X.castShadow=N,X.receiveShadow=B,f.add(X)}},g=[];return e.traverse(f=>{f.userData.unidad&&g.push(f)}),g.reverse().forEach(_),_(e),{raiz:e,puntos:r}}var Wm={crear:d3,mira:[-.1,.9,-.3],az:.62,el:.5,radio:4};var Rt=Math.PI,Dr=6.5,gs=5,ms=3.2,Tn=.16,gt=-Dr/2,Xm=Dr/2,bi=-gs/2,qm=gs/2,mt=(n,e={})=>new Gt({color:n,roughness:.6,metalness:0,...e});function f3(n){let e=new zt,t=Sn(e),i=bn(31),r={},a=(v,R={})=>{let C=t.grupo(v);return C.userData.unidad=!0,r[v]={grupo:C,...R},C},s={suelo1:mt("#A8A298",{roughness:.62}),suelo2:mt("#A09A90",{roughness:.62}),suelo3:mt("#AEA89E",{roughness:.62}),juntaS:mt("#8A857D",{roughness:.95}),bloque:mt("#C6C8C6",{roughness:.9}),juntaB:mt("#8D908E",{roughness:.95}),pieza:mt("#BDBEB9",{roughness:.92}),piezaT:mt("#7F8588",{roughness:.16,metalness:.08}),piezaH:mt("#979B9C",{roughness:.55}),mortero:mt("#E6E3DA",{roughness:.95}),morteroH:mt("#9A9C9A",{roughness:.4}),sacoP:mt("#CBBFA9",{roughness:.9}),sacoAz:mt("#2F78B0",{roughness:.5}),molde:mt("#7A8E9B",{metalness:.5,roughness:.42}),moldeOsc:mt("#4B5A64",{metalness:.5,roughness:.45}),moldeAceite:mt("#1F272C",{metalness:.45,roughness:.1}),mesaAc:mt("#7C878E",{metalness:.5,roughness:.38}),maq:mt("#C7452D",{roughness:.5}),maqOsc:mt("#8E2E20",{roughness:.55}),palet:mt("#C79F6B",{roughness:.85}),paletOsc:mt("#A07B4E",{roughness:.85}),oxido:mt("#A5532A",{roughness:.9,metalness:.25}),oxidoOsc:mt("#6F3418",{roughness:.9,metalness:.2}),cobre:mt("#C28142",{metalness:.7,roughness:.35}),caldera:mt("#F1F3F2",{roughness:.4}),amarillo:mt("#F2C21B",{roughness:.55}),rojo:mt("#C23B2E",{roughness:.45}),rojoOsc:mt("#8E261D",{roughness:.5}),verde:mt("#3DA45A",{roughness:.45}),azulM:mt("#2F78B0",{roughness:.45}),policarb:mt("#E1F0F7",{roughness:.3,emissive:"#BEE0F1",emissiveIntensity:.4}),madera:mt("#C9A46A",{roughness:.75}),maderaOsc:mt("#8A6A44",{roughness:.8}),cartel:mt("#2F8F5B",{roughness:.5}),hormD:mt("#B3B5B1",{roughness:.9,side:Pn}),hormDi:mt("#7F8280",{roughness:.9,side:Pn}),cubaM:mt("#C7452D",{roughness:.5,side:Pn}),cinta:mt("#E9E6DC",{roughness:.95})},o=v=>({bx:(R,C,M,D,O,p,x,w={})=>t.caja(R,C,M,D,O,p,x,{padre:v,s:1,...w}),cy:(R,C,M,D,O,p,x={})=>t.cil(R,C,M,D,O,p,{padre:v,seg:16,...x}),br:(R,C,M,D,O={})=>t.barra(R,C,M,D,{padre:v,seg:10,...O}),es:(R,C,M,D,O,p={})=>t.esfera(R,C,M,D,O,{padre:v,...p}),tr:(R,C,M,D,O,p,x={})=>t.toro(R,C,M,D,O,p,{padre:v,...x})}),c=(v,R,C,M,D,O,p,x,w=18)=>t.cil(C,M,D,O,p-M/2,x,{padre:v,seg:w,...R==="x"?{rz:Rt/2}:{rx:Rt/2}}),u=(v,R,C,M=0,D=1.2,O=.8)=>{let p=t.grupo("palet",v);p.position.set(R,0,C),p.rotation.y=M;let x=o(p);for(let w of[-1,0,1])x.bx(D,.07,.09,s.paletOsc,0,.02,w*(O/2-.045),{r:.006});for(let w of[-1,0,1])x.bx(.12,.02,O,s.palet,w*(D/2-.06),0,0,{r:.004});for(let w=0;w<5;w++)x.bx(.14,.02,O,s.palet,-D/2+.07+w*(D-.14)/4,.09,0,{r:.004});return p};t.caja(Dr+Tn+.04,.24,gs+Tn+.04,n.corte,-Tn/2,-.25,-Tn/2,{r:.03}),t.caja(Dr,.012,gs,s.juntaS,0,-.012,0,{r:.002,s:1});{let C=Dr/4,M=gs/3,D=[s.suelo1,s.suelo2,s.suelo3];for(let O=0;O<4;O++)for(let p=0;p<3;p++)t.caja(C-.016,.014,M-.016,D[(O*2+p)%3],gt+C*(O+.5),-.012,bi+M*(p+.5),{r:.002,s:1})}{let v=[[-2.3,-1.3,.1],[-1.9,-1.45,.05],[-.3,-1,.09],[.4,-1.55,.12],[.75,-1.3,.05],[1.6,-.85,.08],[1.9,-.7,.04],[.2,.5,.07],[-1,.9,.1],[-.8,1.05,.04],[-2,.55,.08],[2.2,1.7,.06],[-.3,2,.09],[1.2,1.75,.05]];for(let[R,C,M]of v){let D=t.cil(M,.004,s.mortero,R,0,C,{seg:12});D.scale.set(1+i()*.7,1,.7+i()*.5),D.rotation.y=i()*Rt,D.castShadow=!1}}let m=bi-Tn/2;t.caja(Dr+Tn,ms,Tn,s.juntaB,-Tn/2,0,m,{r:.002,s:1}),t.caja(Tn,ms,gs,s.juntaB,gt-Tn/2,0,0,{r:.002,s:1});{let R=new Un(1,.188,.016),C=new ut(R,s.bloque,560),M=new Le,D=new fn,O=new fn().setFromAxisAngle(new W(0,1,0),-Rt/2),p=new W,x=new W,w=new Be,A=0,b=(d,_,g,f,S)=>{p.set(d,_,g),x.set(f-.012,1,1),M.compose(p,S?O:D.identity(),x),C.setMatrixAt(A,M),C.setColorAt(A,w.set("#ffffff").multiplyScalar(.9+i()*.12)),A++},P=16,h=Dr/P;for(let d=0;d<ms/.2;d++){let _=.1+d*.2;if(d%2===0)for(let g=0;g<P;g++)b(gt+h*(g+.5),_,bi+.004,h,!1);else{b(gt+h/4,_,bi+.004,h/2,!1),b(Xm-h/4,_,bi+.004,h/2,!1);for(let g=1;g<P;g++)b(gt+h*g,_,bi+.004,h,!1)}}let l=.4;for(let d=0;d<ms/.2;d++){let _=.1+d*.2;if(d%2===0){for(let g=0;g<12;g++)b(gt+.004,_,bi+l*(g+.5),l,!0);b(gt+.004,_,qm-l/4,l/2,!0)}else{b(gt+.004,_,bi+l/4,l/2,!0);for(let g=0;g<12;g++)b(gt+.004,_,bi+l/2+l*(g+.5),l,!0)}}C.count=A,C.receiveShadow=!0,C.castShadow=!1,e.add(C)}t.caja(Dr+Tn,.025,Tn,n.corte,-Tn/2,ms,m,{r:.004,s:1}),t.caja(Tn,.025,gs,n.corte,gt-Tn/2,ms,0,{r:.004,s:1}),t.caja(.012,ms,Tn,n.corte,Xm+.006,0,m,{r:.002,s:1}),t.caja(Tn,ms,.012,n.corte,gt-Tn/2,0,qm+.006,{r:.002,s:1}),t.caja(Dr,.14,.006,s.amarillo,0,0,bi+.0125+0,{r:.002,s:1}),t.caja(.006,.14,gs,s.amarillo,gt+.0125,0,0,{r:.002,s:1});{let v=(R,C,M)=>{let p=R?C:gt+.02,x=R?bi+.02:C,w=R?M:.03,A=R?.03:M;t.caja(w,.62,A,n.hierro,p,2.4,x,{r:.006,s:1});let b=R?M-.1:.012,P=R?.012:M-.1;t.caja(b,.52,P,s.policarb,p,2.4499999999999997,x+(R?.012:0),{r:.003,s:1}).position.x+=R?0:.012;let h=Math.round(M/.45);for(let l=1;l<h;l++){let d=-M/2+M*l/h;t.caja(R?.024:.026,.54,R?.026:.024,n.hierro,R?p+d:p+.002,2.44,R?x+.002:x+d,{r:.004,s:1})}};v(!0,-2.05,1.6),v(!0,.15,1.6),v(!0,2.2,1.6),v(!1,-1.2,1.5),v(!1,1,1.5)}{let v=(R,C,M,D)=>t.caja(Math.abs(M-R)+.08,.004,Math.abs(D-C)+.08,s.amarillo,(R+M)/2,.002,(C+D)/2,{r:.001,s:1}).castShadow=!1;v(-1.6,-1,-1.6,2.2),v(-1.6,-1,3.1,-1),v(-1.6,2.2,-.2,2.2)}{let v=a("moldes",{frente:[.1,.2,1],alto:.55,lado:.2,zoom:1.1,mira:[0,.05,0]}),{bx:R,cy:C,br:M,es:D,tr:O}=o(v),p=-3.18,x=-1.25,w=bi+.04,A=-1.62,b=.85,P=(p+x)/2,h=(w+A)/2;R(x-p,.05,A-w,s.mesaAc,P,b-.05,h,{r:.008}),R(x-p-.06,.1,A-w-.06,s.moldeOsc,P,b-.15,h,{r:.008});for(let d of[p+.07,P,x-.07])for(let _ of[w+.07,A-.07])R(.08,b-.15,.08,s.moldeOsc,d,.02,_,{r:.008}),R(.14,.02,.14,s.mesaAc,d,0,_,{r:.006});R(x-p-.14,.03,A-w-.14,s.mesaAc,P,.22,h,{r:.006}),c(v,"x",.07,.3,s.maq,P+.1,.62,h,20);for(let d=0;d<6;d++)O(.073,.006,s.maqOsc,P-.02+d*.045,.62,h,{rx:0,ry:Rt/2});R(.07,.06,.08,s.moldeOsc,P+.22,.6,h,{r:.01});let l=(d,_,g,f,S,{relleno:I=!1,aceite:L=!1,ry:z=0}={})=>{let F=t.grupo("molde",v);F.position.set(d,b,_),F.rotation.y=z;let N=o(F);N.bx(g,.02,f,s.molde,0,0,0,{r:.004}),N.bx(g,S,.02,s.molde,0,0,-f/2+.01,{r:.004}),N.bx(g,S,.02,s.molde,0,0,f/2-.01,{r:.004}),N.bx(.02,S,f-.04,s.molde,-g/2+.01,0,0,{r:.004}),N.bx(.02,S,f-.04,s.molde,g/2-.01,0,0,{r:.004});for(let B of[-1,1])for(let V of[-1,1])N.bx(.05,S+.012,.05,s.moldeOsc,B*(g/2-.02),0,V*(f/2-.02),{r:.006});for(let B of[-1,1])for(let V of[-.28,0,.28])N.bx(.035,.03,.03,s.moldeOsc,V*g,S*.55,B*(f/2+.012),{r:.005}),N.cy(.008,.026,s.molde,V*g,S*.55+.002,B*(f/2+.034),{seg:8,rx:Rt/2});return I?N.bx(g-.044,.004,f-.044,s.morteroH,0,S-.026,0,{r:.002}):L&&N.bx(g-.044,.004,f-.044,s.moldeAceite,0,.016,0,{r:.002}),F};l(-2.7,-2.22,.9,.24,.2,{relleno:!0}),l(-2.7,-1.88,.9,.24,.2,{aceite:!0});{let d=t.grupo("molde-bloque",v);d.position.set(-1.78,b,-2.15),d.rotation.y=0;let _=o(d);_.bx(.86,.02,.26,s.molde,0,0,0,{r:.004});for(let[g,f,S,I]of[[.86,.02,0,-.12],[.86,.02,0,.12],[.02,.26,-.42,0],[.02,.26,.42,0],[.02,.26,0,0]])_.bx(g,.21,f,s.molde,S,0,I,{r:.004});for(let g of[-1,1])for(let f of[-1,1])_.bx(.05,.222,.05,s.moldeOsc,g*.41,0,f*.115,{r:.006});_.bx(.4,.004,.22,s.moldeAceite,-.21,.016,0,{r:.002}),_.bx(.4,.004,.22,s.morteroH,.21,.184,0,{r:.002}),_.bx(.28,.02,.03,s.moldeOsc,0,.21,.15,{r:.006})}R(.7,.03,.42,s.maderaOsc,-1.78,b,-1.8,{r:.006}),R(.4,.2,.2,s.piezaH,-1.95,b+.03,-1.8,{r:.012,s:2}),R(.12,.003,.07,s.moldeAceite,-1.95,b+.233,-1.84,{r:.001}),R(.12,.003,.07,s.moldeAceite,-1.95,b+.233,-1.76,{r:.001}),R(.35,.15,.16,s.pieza,-1.55,b+.03,-1.8,{r:.02,s:2,ry:.15}),R(.24,.006,.07,n.inoxCl,-3,b,-1.68,{r:.002,ry:.4}),R(.1,.02,.025,n.negro,-3.12,b,-1.66,{r:.008,ry:.4}),R(.28,.03,.06,s.madera,-2.45,b,-1.7,{r:.008,ry:-.2});for(let d=0;d<8;d++)R(.022,.03,.05,n.negro,-2.55+d*.03,b+.03,-1.7,{r:.002,ry:-.2}).position.z+=0;Ve(t,n,-2.03,b,-2.38,{padre:v,ry:.2}),Ve(t,n,-2.38,.25,-2.1,{padre:v,ry:-.1}),Ve(t,n,-2.95,.25,-2.2,{padre:v,ry:.3});{let d=t.grupo("mochila",v);d.position.set(-1,0,-1.9),d.rotation.y=-.5;let _=o(d);_.bx(.3,.46,.17,n.blanco,0,0,0,{r:.05,s:2}),_.bx(.22,.2,.004,n.azul,0,.14,.088,{r:.002}),_.bx(.14,.035,.005,n.blanco,0,.3,.09,{r:.002}),_.cy(.06,.04,n.negro,0,.46,0,{seg:18}),_.cy(.05,.03,n.azul,0,.5,0,{seg:18});for(let g of[-.09,.09])_.bx(.035,.38,.015,n.negro,g,.04,-.09,{r:.006});_.bx(.03,.1,.1,n.gris,.17,.2,0,{r:.012}),_.br(.008,[.17,.3,0],[.34,.5,.06],n.gris),_.br(.006,[.16,.12,.05],[.12,0,.2],n.negro);for(let g=0;g<4;g++)_.tr(.04,.005,n.negro,.08,.04+g*.012,.22+g*.01,{rx:Rt/2});_.br(.008,[.1,.05,.24],[.1,.62,.34],n.inoxCl),_.bx(.03,.06,.04,n.azul,.1,.16,.26,{r:.012}),_.cy(.014,.025,n.azulOsc,.1,.62,.34,{seg:10,rx:.6})}}{let v=a("caldera",{frente:[.05,.1,1],alto:.12,lado:.2,zoom:1.05,mira:[0,0,0]}),{bx:R,cy:C,br:M,tr:D}=o(v),O=-.78,p=bi+.012;R(.46,.78,.26,s.caldera,O,1.08,p+.13,{r:.05,s:2}),R(.3,.1,.012,n.negro,O,1.62,p+.262,{r:.012}),R(.12,.04,.006,n.pantalla,O-.06,1.65,p+.27,{r:.004});for(let[d,_]of[[.08,n.inoxCl],[.15,n.azul]])C(.022,.03,_,O+d,1.605,p+.268,{rx:Rt/2,seg:16});C(.012,.014,s.verde,O+.15,1.5,p+.268,{rx:Rt/2,seg:10});for(let d of[-.1,.02])c(v,"z",.04,.03,n.inoxOsc,O+d,1.33,p+.27,18),c(v,"z",.033,.006,n.blanco,O+d,1.33,p+.287,18),R(.004,.028,.003,s.rojo,O+d+.004,1.32,p+.292,{r:.001,rz:-.6});R(.4,.05,.22,n.hierro,O,1.03,p+.12,{r:.012});let x=p+.06;C(.014,.12,s.amarillo,O-.15,.93,x,{seg:12}),C(.014,.12,s.cobre,O-.02,.93,x,{seg:12}),C(.014,.12,s.cobre,O+.11,.93,x,{seg:12}),M(.013,[O-.15,.93,x],[O-.15,0,x],s.amarillo),C(.06,.2,n.inoxCl,O,1.86,p+.1,{seg:20}),C(.068,.025,n.inoxOsc,O,1.86,p+.1,{seg:20}),t.esfera(.06,n.inoxCl,O,2.06,p+.1,{padre:v}),M(.06,[O,2.06,p+.1],[O,2.06,p+.02],n.inoxCl,{seg:20}),D(.085,.012,n.inoxOsc,O,2.06,p+.016,{rx:0}),C(.1,.3,s.rojo,O+.42,1.2,p+.13,{seg:20}),t.esfera(.1,s.rojo,O+.42,1.5,p+.13,{padre:v,sy:.55}),M(.012,[O+.42,1.2,p+.13],[O+.42,1.1,p+.13],s.cobre);let w=-.02,A=.64,b=.32,P=.62,h=.99,l=.25;M(.014,[O+.11,.93,x],[O+.11,h,x],s.cobre),M(.014,[O+.11,h,x],[A-.03,h,x],s.cobre),M(.014,[A-.03,h,x],[A-.03,b+P+.02,x],s.cobre),M(.014,[O-.02,.93,x],[O-.02,l,x],s.cobre),M(.014,[O-.02,l,x],[w+.03,l,x],s.cobre),M(.014,[w+.03,l,x],[w+.03,b-.02,x],s.cobre);for(let[d,_]of[[O+.11,h],[A-.03,h],[O-.02,l],[w+.03,l]])t.esfera(.02,s.cobre,d,_,x,{padre:v});{let _=(A-w)/9;for(let g=0;g<9;g++)R(_-.012,P,.07,n.blanco,w+(g+.5)*_,b,p+.04,{r:.016});C(.022,.04,n.inoxCl,A-.03,b+P,x,{seg:12}),C(.022,.04,n.inoxCl,w+.03,b-.04,x,{seg:12}),D(.022,.006,s.rojo,A-.03,b+P+.045,x,{rx:Rt/2})}}{let v=a("amasadora",{frente:[.1,.25,1],alto:.45,lado:.2,zoom:1.4,mira:[.2,0,0]}),{bx:R,cy:C,br:M,es:D,tr:O}=o(v),p=1.7,x=-1.78,w=.55,A=.55;for(let[b,P]of[[-1,-1],[1,-1],[-1,1],[1,1]])R(.08,A,.08,s.maqOsc,p+b*.42,.02,x+P*.42,{r:.008}),R(.16,.02,.16,n.hierro,p+b*.42,0,x+P*.42,{r:.006});C(w+.02,.04,s.maqOsc,p,A-.04,x,{seg:32}),C(w,.4,s.cubaM,p,A,x,{seg:40,abierto:!0}),C(w-.01,.01,n.hierro,p,A+.01,x,{seg:36}),C(w-.04,.02,s.morteroH,p,A+.02,x,{seg:36});for(let[b,P,h]of[[.2,.1,.08],[-.15,.25,.06],[.05,-.28,.07]])D(h,s.morteroH,p+b,A+.05,x+P,{sy:.4});O(w,.016,s.maqOsc,p,A+.4,x,{rx:Rt/2}),C(.06,.4,n.inoxOsc,p,A+.03,x,{seg:16}),C(.1,.06,s.maqOsc,p,A+.03,x,{seg:16});for(let b=0;b<3;b++){let P=b*2*Rt/3+.4,h=Math.cos(P)*.42,l=Math.sin(P)*.42;M(.018,[p,A+.14,x],[p+h,A+.14,x+l],n.hierro),R(.08,.14,.03,n.inoxOsc,p+h*.95-.04,A+.06,x+l*.95-.015,{r:.006,ry:-P})}for(let b of[-1,1])R(.1,1.15,.1,s.maq,p+b*.5,.02,x-.62,{r:.012}),R(.18,.02,.18,n.hierro,p+b*.5,0,x-.62,{r:.006});R(1.2,.14,.12,s.maq,p,1.06,x-.62,{r:.012}),R(.18,.12,.62,s.maq,p,1.08,x-.62+.31,{r:.012}),R(.34,.3,.34,n.hierro,p,.98,x,{r:.03,s:2}),C(.1,.12,s.maqOsc,p,.9,x,{seg:20}),c(v,"x",.13,.36,s.maq,p+.34,1.19,x-.62+0,24);for(let b=0;b<7;b++)O(.133,.008,s.maqOsc,p+.2+b*.054,1.19,x-.62,{rx:0,ry:Rt/2});R(.14,.12,.12,n.negro,p+.56,1.13,x-.62,{r:.015}),R(.2,.28,.09,n.gris,p-.5,.55,x-.52,{r:.012}),C(.026,.02,s.rojo,p-.5,.72,x-.465,{rx:Rt/2,seg:14}),C(.016,.014,s.verde,p-.55,.62,x-.465,{rx:Rt/2,seg:10}),C(.016,.014,n.negro,p-.45,.62,x-.465,{rx:Rt/2,seg:10}),M(.008,[p-.5,.83,x-.56],[p-.5,1.06,x-.6],n.negro),R(.26,.16,.16,s.maq,p,.44,x+w-.04,{r:.02,s:2}),R(.22,.12,.12,s.maqOsc,p,.34,x+w+.08,{r:.015}),M(.009,[p+.12,.52,x+w+.06],[p+.3,.62,x+w+.08],n.inoxOsc),D(.02,s.rojo,p+.31,.63,x+w+.08),C(.17,.34,n.goma,p,0,x+w+.2,{rb:.13,seg:24,abierto:!0}),C(.13,.01,s.morteroH,p,.02,x+w+.2,{seg:24}),O(.17,.012,n.negro,p,.34,x+w+.2,{rx:Rt/2});{C(.2,.62,n.azul,.88,0,-2.12,{seg:28});for(let h of[.1,.31,.52])O(.202,.012,n.azulOsc,.88,h,-2.12,{rx:Rt/2});C(.19,.012,n.azulOsc,.88,.62,-2.12,{seg:28}),C(.03,.04,n.negro,.88-.08,.63,-2.12-.05),R(.12,.2,.004,n.blanco,.88,.2,-2.12+.2,{r:.002}),R(.12,.05,.005,n.azulOsc,.88,.28,-2.12+.202,{r:.002}),R(.1,.12,.1,s.caldera,.88+.07,.64,-2.12+0,{r:.015}),C(.015,.04,n.azul,.88+.07,.76,-2.12,{seg:10}),M(.007,[.88+.07,.8,-2.12],[.88+.07,1.12,-2.12],n.azul),M(.007,[.88+.07,1.12,-2.12],[p-.5,1.12,-2.12+.1],n.azul),M(.007,[p-.5,1.12,-2.12+.1],[p-.38,.99,x-.2],n.azul)}{u(v,2.8,-1.7,0,.8,1.2);let b=o(v);for(let P=0;P<5;P++)for(let h=0;h<2;h++)for(let l=0;l<4;l++){let d=(i()-.5)*.015,_=(i()-.5)*.015,g=2.8-.2+h*.4+d,f=-1.7-.45+l*.3+0+_;b.bx(.39,.115,.29,s.sacoP,g,.11+P*.115,f,{r:.04,s:1}),h===1&&b.bx(.004,.04,.22,s.sacoAz,g+.196,.11+P*.115+.04,f,{r:.001}),l===3&&b.bx(.22,.04,.004,s.sacoAz,g,.11+P*.115+.04,f+.146,{r:.001})}b.bx(.38,.09,.28,s.sacoP,2.8,.11+5*.115,-1.7,{r:.03,rx:.08}),b.es(.13,s.mortero,2.8,.11+5*.115+.08,-1.7,{sy:.35}),b.es(.06,s.mortero,2.62,.11+5*.115+.02,-1.55,{sy:.4})}}{let v=a("piezas",{frente:[0,.2,1],alto:.5,lado:.2,zoom:1.45,mira:[.55,-.2,.45]}),{bx:R,cy:C,br:M,es:D,tr:O}=o(v),p=.95,x=.55;u(v,p,x,0,1.2,.8);for(let d=0;d<4;d++)for(let _=0;_<3;_++)for(let g=0;g<4;g++){let f=p-.4+_*.4,S=x-.3+g*.2,I=.11+d*.2;if(R(.396,.196,.196,s.pieza,f,I,S,{r:.012,s:1}),d===3)for(let L of[-.09,.09])R(.1,.003,.09,s.moldeAceite,f+L,I+.198,S,{r:.001})}for(let d of[-.3,.3])R(.02,.8,.012,n.negro,p+d,.11,x+.4+0,{r:.002});let w=2.55,A=.6;u(v,w,A,0,1.2,.8);for(let d=0;d<3;d++)for(let _=0;_<4;_++){let g=A-.3+_*.2,f=.11+d*.25;R(1.1,.25,.17,s.piezaT,w,f,g,{r:.028,s:2})}for(let d of[-.3,.3])R(.02,.75,.012,n.negro,w+d,.11,A+.39,{r:.002});R(.5,.01,.6,s.cinta,w+.1,.11+.75+0,A,{r:.003,ry:.1});let b=1.2,P=1.6;C(.19,.55,s.rojoOsc,b,0,P,{seg:28});for(let d of[.08,.27,.46])O(.192,.012,s.rojo,b,d,P,{rx:Rt/2});C(.18,.012,s.rojo,b,.55,P,{seg:28}),C(.03,.04,n.negro,b-.06,.562,P-.04),R(.12,.2,.004,n.blanco,b,.18,P+.19,{r:.002}),R(.12,.04,.005,s.rojo,b,.28,P+.192,{r:.002});let h=t.grupo("rodillo",v);h.position.set(1.75,0,1.5),h.rotation.y=Rt+.4;let l=o(h);l.bx(.3,.04,.34,n.gris,0,0,0,{r:.01,rx:0});for(let[d,_,g,f,S]of[[.3,.012,0,-.17,.05],[.012,.34,-.15,0,.05],[.012,.34,.15,0,.05]])l.bx(d,S,_,n.gris,g,.03,f,{r:.004});l.bx(.24,.004,.2,s.rojo,0,.04,0,{r:.002}),c(h,"x",.045,.22,n.blanco,0,.1,0,16),l.br(.006,[.13,.1,0],[.13,.1,.1],n.inoxOsc),l.br(.01,[.13,.1,.1],[.4,.62,.4],s.madera),l.bx(.03,.03,.1,n.negro,.4,.62,.4,{r:.01}),It(t,n,1.55,0,2,{padre:v,ry:.4});{let d=(_,g,f)=>{let z=t.grupo("tubo",v);z.position.set(_,g,f);let F=o(z);return c(z,"x",.28,.9,s.hormD,0,0,0,36),c(z,"x",.2,.906,s.hormDi,0,0,0,36),F.tr(.28300000000000003,.014,n.negro,.25,0,0,{rx:0,ry:Rt/2}),F.tr(.281,.008,s.piezaH,-.3,0,0,{rx:0,ry:Rt/2}),z};d(2.62,.28,1.58),d(2.62,.28,2.14),Ve(t,n,1.95,0,2.2,{padre:v,ry:.4}),C(.07,.13,n.azul,1.9,0,1.85,{rb:.06,seg:16,abierto:!0}),M(.007,[1.91,.1,1.85],[1.95,.2,1.87],s.madera),R(.07,.025,.012,n.negro,1.91,.12,1.85,{r:.004})}}{let v=a("herramientas",{frente:[1,.05,.15],alto:.35,lado:.85,zoom:1.15,mira:[0,-.1,.3]}),{bx:R,cy:C,br:M,es:D}=o(v),O=gt+.027;R(.03,1.3,2,s.madera,O+0,.9,.2,{r:.006}),R(.034,.03,2.04,s.maderaOsc,O+.002,.89,.2,{r:.006}),R(.034,.04,2.04,s.maderaOsc,O+.002,2.17,.2,{r:.006});let p=O+.02;for(let[A,b,P]of[[-.62,1.02,0],[-.38,1,0],[1,1.05,0]])M(.014,[p+.005,b+.28,A],[p+.005,b+1.08,A],s.madera),M(.013,[p+.005,b+1.06,A-.07],[p+.005,b+1.06,A+.07],s.madera),R(.012,.3,.2,n.inoxOsc,p+0,b,A,{r:.006}),R(.014,.12,.14,s.mortero,p+0,b+.02,A,{r:.004}),R(.014,.05,.08,s.mortero,p+0,b+.16,A+.02,{r:.004});for(let[A,b]of[[-.14,1.4],[.04,1.45],[.2,1.4]])R(.01,.17,.1,n.inoxCl,p+0,b,A,{r:.005}),R(.012,.05,.07,s.mortero,p+0,b+.02,A,{r:.004}),M(.009,[p+.01,b+.17,A],[p+.04,b+.24,A],n.inoxOsc),C(.018,.1,s.maderaOsc,p+.04,b+.23,A,{seg:10});for(let[A,b]of[[.52,1.5],[.88,1.5]])R(.008,.12,.3,n.inoxCl,p+0,b,A,{r:.004}),R(.01,.05,.12,s.mortero,p+0,b+.03,A+.05,{r:.003}),R(.05,.03,.12,s.maderaOsc,p+.03,b+.14,A,{r:.01});R(.012,.16,.1,n.inoxOsc,p,1.22,.62,{r:.004}),M(.01,[p+.01,1.38,.62],[p+.01,1.78,.62],s.madera),R(.04,.05,.28,s.madera,p+.01,1.95,.55,{r:.012});for(let A=0;A<9;A++)R(.03,.04,.015,n.negro,p+.012,1.91,.42+A*.03,{r:.002});let x=-.7,w=.95;R(.62,.05,w-x,s.madera,gt+.34,.8,(x+w)/2,{r:.01}),R(.56,.1,w-x-.06,s.maderaOsc,gt+.34,.7,(x+w)/2,{r:.01});for(let A of[x+.06,w-.06])for(let b of[gt+.07,gt+.6])R(.06,.7,.06,s.maderaOsc,b,0,A,{r:.008});R(.5,.025,w-x-.12,s.maderaOsc,gt+.34,.25,(x+w)/2,{r:.006}),Ve(t,n,gt+.35,.85,-.45,{padre:v,ry:Rt/2+.1}),Ve(t,n,gt+.33,.85,-.2,{padre:v,ry:Rt/2-.1}),It(t,n,gt+.45,.85,.02,{padre:v,ry:1.2}),C(.12,.24,n.goma,gt+.35,.85,.5,{rb:.1,seg:22,abierto:!0}),C(.115,.01,s.mortero,gt+.35,1,.5,{seg:22}),D(.04,s.mortero,gt+.28,1.09,.5,{sy:.5}),T(v,gt+.35,1.09,.5,.12),R(.4,.02,.26,s.oxido,gt+.4,.85,.82,{r:.006,ry:.4}),R(.12,.003,.08,s.oxidoOsc,gt+.36,.87,.8,{r:.001,ry:.5}),R(.08,.003,.06,s.oxidoOsc,gt+.5,.87,.86,{r:.001,ry:.2}),M(.012,[gt+.28,.86,.74],[gt+.5,.86,.96],s.oxidoOsc);{let A=t.grupo("carretilla",v);A.position.set(-2.05,0,.55),A.rotation.y=Rt/2-.25;let b=o(A);b.bx(.62,.02,.42,s.azulM,0,.3,0,{r:.005});for(let P of[-1,1])b.bx(.62,.18,.02,s.azulM,0,.31,P*.2,{r:.006,rx:P*-.28});b.bx(.02,.18,.42,s.azulM,-.3,.31,0,{r:.006,rz:-.28}),b.bx(.02,.18,.42,s.azulM,.31,.31,0,{r:.006,rz:.4}),b.bx(.4,.004,.26,s.mortero,0,.322,0,{r:.002}),b.bx(.2,.01,.16,s.mortero,0,.322,.02,{r:.004});for(let P of[-1,1])b.br(.014,[.28,.3,P*.18],[-.8,.56,P*.28],n.hierro),b.cy(.02,.2,n.negro,-.88,.58,P*.285,{rz:Rt/2-.2,seg:10}),b.br(.013,[-.25,.3,P*.2],[-.3,0,P*.24],n.hierro),b.bx(.07,.02,.04,n.goma,-.32,0,P*.24,{r:.008}),b.br(.012,[.42,.3,P*.12],[.5,.17,P*.12],n.hierro);c(A,"z",.17,.06,n.goma,.5,.17,0,24),c(A,"z",.08,.075,n.inoxOsc,.5,.17,0,14),b.br(.008,[.5,.17,-.12],[.5,.17,.12],n.hierro)}C(.062,.36,s.rojo,gt+.1,1,1.55,{seg:18}),C(.03,.06,n.negro,gt+.1,1.36,1.55,{seg:10}),R(.04,.03,.06,n.negro,gt+.1,1.37,1.6,{r:.008}),R(.012,.04,.16,n.hierro,gt+.028,1.2,1.55,{r:.004})}{let v=t.grupo("atrezo"),{bx:R,cy:C,br:M}=o(v),D=gt+.3,O=1.72,p=2.4;for(let x of[O+.03,p-.03])for(let w of[D-.2,D+.2])R(.04,1.5,.04,n.hierro,w,0,x,{r:.006});for(let x of[.15,.62,1.1])R(.46,.03,p-O,n.inox,D,x,(O+p)/2,{r:.006});for(let[x,w]of[[.18,[1.86,2.1,2.3]],[.65,[1.85,2.08,2.3]]])w.forEach((A,b)=>Ve(t,n,D,x,A,{padre:v,ry:Rt/2+(b-1)*.1}));R(.34,.2,.28,s.cartel,D,1.13,1.9,{r:.02}),R(.3,.16,.2,n.azul,D,1.13,2.2,{r:.02});{let x=t.grupo("transpale",v);x.position.set(.05,0,1.2),x.rotation.y=.35;let w=o(x);for(let A of[-.28,.28])w.bx(.17,.06,1.05,s.rojo,A,0,.1,{r:.012}),w.cy(.035,.06,n.goma,A,0,.58,{rz:Rt/2,seg:14});w.bx(.7,.18,.14,s.rojo,0,.04,-.52,{r:.03,s:2}),w.br(.014,[0,.2,-.55],[0,.95,-.95],n.hierro),w.bx(.4,.06,.05,n.negro,0,.93,-.95,{r:.016,rx:-.5})}}let E=v=>{v.updateMatrixWorld(!0);let R=v.matrixWorld.clone().invert(),C=new Map,M=[],D=O=>{for(let p of O.children)if(!p.userData.unidad&&!p.isInstancedMesh)if(p.isMesh){if(M.push(p),!p.visible)continue;let x=p.geometry.clone();for(let A of Object.keys(x.attributes))["position","normal","uv"].includes(A)||x.deleteAttribute(A);x.clearGroups(),x.applyMatrix4(new Le().multiplyMatrices(R,p.matrixWorld));let w=`${p.material.uuid}|${!!x.index}|${p.castShadow}|${p.receiveShadow}`;C.has(w)||C.set(w,{mat:p.material,cast:p.castShadow,recibe:p.receiveShadow,lista:[]}),C.get(w).lista.push(x)}else D(p)};D(v);for(let O of M)O.parent.remove(O);for(let{mat:O,cast:p,recibe:x,lista:w}of C.values()){let A=new $e(vi(w),O);A.castShadow=p,A.receiveShadow=x,v.add(A)}},y=[];return e.traverse(v=>{v.userData.unidad&&y.push(v)}),y.reverse().forEach(E),E(e),{raiz:e,puntos:r};function T(v,R,C,M,D){t.toro(D,.008,n.negro,R,C,M,{padre:v,rx:Rt/2})}}var jm={crear:f3,mira:[0,.95,-.3],az:.62,el:.5,radio:4.3};var zr=2.85,on=.16,nt=Math.PI,cn=1.2,Pd=.04,Lr=Pd+.01,pr=-2.38,Jn=-2.92,ja=.61,Rd=new Map,p3=n=>{let e=n.toFixed(4);return Rd.has(e)||Rd.set(e,new fi(n,12,8)),Rd.get(e)};function m3(n){let e=new zt,t=Sn(e),i=bn(53),r={},a=(l,d={})=>{let _=t.grupo(l);return _.userData.unidad=!0,r[l]={grupo:_,...d},_},s=(l,d,_,g,f,S,I,L={})=>t.caja(l,d,_,g,f,S,I,{s:1,...L}),o=(l,d,_,g,f,S,I={})=>t.cil(l,d,_,g,f,S,{seg:l>.12?28:l>.04?16:10,...I}),c=t.barra,u=t.toro,m=(l,d,_)=>[l[0]+(d[0]-l[0])*_,l[1]+(d[1]-l[1])*_,l[2]+(d[2]-l[2])*_],E=(l,d,_,g,f,S)=>{let I=new $e(p3(l),d);return I.position.set(_,g,f),I.castShadow=I.receiveShadow=!0,(S||e).add(I),I},y=(l,d)=>{let _=t.grupo(l,d);return _.userData.unidad=!0,_},T=(l,d={})=>new Gt({color:l,roughness:.6,metalness:0,...d}),v={suelo:T("#AFB9B4",{roughness:.82}),sueloJunta:T("#86928D",{roughness:.95}),azotea:T("#CDD0CD",{roughness:.9}),azoteaJunta:T("#9BA3A1",{roughness:.95}),zocalo:T("#C9D8E0",{roughness:.85}),cobre:T("#C47A4C",{metalness:.7,roughness:.34}),galva:T("#AEB8BE",{metalness:.65,roughness:.36}),pvc:T("#A4ADB2",{roughness:.5}),laton:T("#D2A24C",{metalness:.6,roughness:.35}),zinc:T("#8E989E",{metalness:.5,roughness:.45}),coq:T("#3A4247",{roughness:.92}),azAF:T("#1F7BC7",{roughness:.45}),rojoAC:T("#D83A30",{roughness:.45}),verdeSol:T("#2E9E57",{roughness:.45}),gas:T("#E9B72A",{roughness:.45}),resina:T("#2F7FBD",{roughness:.38}),resinaOsc:T("#1E5F8C",{roughness:.5}),salmuera:T("#2B6C9E",{roughness:.55}),cabezal:T("#E4E9EC",{roughness:.42}),sal:T("#F8F8F3",{roughness:.92}),saco:T("#EDEBE2",{roughness:.88}),palet:T("#C4986A",{roughness:.8}),aljibe:T("#93BCD4",{roughness:.55}),aljNervio:T("#7CA7C0",{roughness:.55}),tapa:T("#E9F0F3",{roughness:.45}),caldera:T("#B53A2D",{roughness:.42}),calderaOsc:T("#6E241D",{roughness:.5}),quemador:T("#3F5361",{roughness:.5,metalness:.2}),interacum:T("#F5F7F8",{roughness:.4}),alu:T("#AEB7BD",{metalness:.6,roughness:.35}),vidrioSol:T("#10263A",{metalness:.3,roughness:.14}),lineaSol:T("#2A5784",{metalness:.2,roughness:.3}),bancada:T("#7A858B",{metalness:.4,roughness:.55}),hormigon:T("#B3B7B5",{roughness:.92}),vaso:T("#CC3A2E",{roughness:.4}),bomba:T("#2D6FA8",{roughness:.4}),fundicion:T("#454D53",{metalness:.35,roughness:.55}),epp:T("#3A4248",{roughness:.9}),estante:T("#3E7AAD",{roughness:.5,metalness:.2}),extintor:T("#C9271D",{roughness:.38}),amarillo:T("#F0C020",{roughness:.5}),cuadro:T("#9FAAB1",{roughness:.5,metalness:.2}),ledV:T("#5BE08A",{emissive:"#2FE06A",emissiveIntensity:.9,roughness:.3}),ledR:T("#FF6A5A",{emissive:"#FF3A2A",emissiveIntensity:.8,roughness:.3}),nivel:T("#2B8FD6",{roughness:.2}),cubo:T("#F6F7F7",{roughness:.42})},R=(l,d,_,g,f,S=.8)=>{let I=new W(...d),L=new W(..._),z=I.distanceTo(L);if(z<.2)return;let F=L.clone().sub(I).normalize(),N=Math.max(1,Math.round(z/S));for(let B=0;B<N;B++){let V=I.clone().lerp(L,(B+.5)/N);f==="f"?(c(.006,[V.x,V.y,-2.496],[V.x,V.y,V.z],v.zinc,{padre:l,seg:6}),s(.045,.045,.012,v.zinc,V.x,V.y-.0225,-2.494,{padre:l,r:.003})):(c(.006,[-2.996,V.y,V.z],[V.x,V.y,V.z],v.zinc,{padre:l,seg:6}),s(.012,.045,.045,v.zinc,-2.994,V.y-.0225,V.z,{padre:l,r:.003})),u(g+.007,.006,v.zinc,V.x,V.y,V.z,{rx:0,padre:l}).quaternion.setFromUnitVectors(new W(0,0,1),F)}},C=(l,d,_,g,{coq:f=null,banda:S=null,cada:I=.5,codos:L=!0}={})=>{let z=f?_*1.75:_;for(let F=0;F<d.length-1;F++){let N=d[F],B=d[F+1],V=Math.hypot(B[0]-N[0],B[1]-N[1],B[2]-N[2]);if(!(V<1e-4)&&(c(_,N,B,g,{padre:l,seg:10}),f&&c(z,N,B,f,{padre:l,seg:12}),S&&V>.12)){let X=Math.max(1,Math.floor(V/I)),Z=Math.min(.025/V,.4);for(let se=0;se<X;se++){let G=(se+.5)/X;c(z+.004,m(N,B,G-Z),m(N,B,G+Z),S,{padre:l,seg:12})}}}if(L)for(let F=1;F<d.length-1;F++)E(z*1.12,f||g,d[F][0],d[F][1],d[F][2],l)},M=(l,d,_,g,f,S,I=v.rojoAC)=>{let L=f==="x"?{rz:nt/2}:f==="z"?{rx:nt/2}:{};o(S*1.5,.07,v.laton,d,_-.035,g,{padre:l,seg:14,...L});for(let z of[-1,1]){let F=f==="x"?[z*.04,0,0]:f==="z"?[0,0,z*.04]:[0,z*.04,0];o(S*1.25,.018,v.laton,d+F[0],_+F[1]-.009,g+F[2],{padre:l,seg:10,...L})}f==="y"?s(.07,.012,.016,I,d,_+.045,g,{padre:l,r:.004}):(o(.008,.035,v.zinc,d,_+S*1.5,g,{padre:l,seg:8}),s(f==="x"?.075:.016,.012,f==="x"?.016:.075,I,d,_+S*1.5+.035,g,{padre:l,r:.004}))},D=(l,d,_,g,f=0,{r:S=.045,aguja:I=v.coq,zona:L=v.verdeSol}={})=>{let z=t.grupo("",l);z.position.set(d,_,g),z.rotation.y=f,o(S,.03,v.zinc,0,-.015,0,{padre:z,rx:nt/2,seg:20}),o(.011,.045,v.zinc,0,-.012,-.035,{padre:z,rx:nt/2,seg:8}),u(S,.006,n.inoxCl,0,0,.015,{rx:0,padre:z}),o(S-.004,.004,n.blanco,0,-.002,.016,{padre:z,rx:nt/2,seg:20}),s(.008,.008,.003,L,S*.35,S*.2,.0205,{padre:z,r:.001});let F=s(.004,S*.8,.002,I,0,0,.0212,{padre:z,r:.001});return F.rotation.z=-.9,o(.006,.004,v.coq,0,-.002,.0225,{padre:z,rx:nt/2,seg:8}),z},O=(l,d,_,g,f=v.bomba)=>{o(.06,.1,v.fundicion,d,_-.05,g,{padre:l,seg:16});for(let S of[-.06,.06])o(.07,.016,v.fundicion,d,_+S-.008,g,{padre:l,seg:16});o(.052,.16,f,d,_-.052,g+.1,{padre:l,rx:nt/2,seg:16}),o(.058,.012,v.fundicion,d,_-.058,g+.045,{padre:l,rx:nt/2,seg:16}),s(.07,.05,.05,v.coq,d,_+.04,g+.12,{padre:l,r:.008});for(let S=0;S<3;S++)u(.053,.004,f,d,_,g+.12+S*.03,{rx:0,padre:l})},p=(l,d,_,g,f)=>{o(f*2.1,.012,v.zinc,d,_-.006,g+.007,{padre:l,rx:nt/2,seg:14})},x=(l,d,_,g,f)=>{o(f*2.1,.012,v.zinc,d+.007,_-.006,g,{padre:l,rz:nt/2,seg:14})};s(6+on+.04,.24,5+on+.04,n.corte,-on/2,-.25,-on/2,{r:.03}),s(cn+3,.012,5,v.sueloJunta,(cn-3)/2,-.012,0,{r:.002}),s(3-cn,Pd+.012,5,v.azoteaJunta,(cn+3)/2,-.012,0,{r:.003});{let _=new ut(St(.586,.014,.611,.004,1),v.suelo,56),g=new Le,f=new Be,S=0;for(let L=0;L<7;L++)for(let z=0;z<8;z++)g.makeTranslation(-3+.6/2+L*.6,.003,-2.5+.625/2+z*.625),_.setMatrixAt(S,g),_.setColorAt(S,f.set("#FFFFFF").multiplyScalar(.94+i()*.08)),S++;_.receiveShadow=!0,e.add(_);let I=new ut(St(.45-.014,.014,.5-.014,.004,1),v.azotea,40);S=0;for(let L=0;L<4;L++)for(let z=0;z<10;z++)g.makeTranslation(cn+.225+L*.45,Pd+.003,-2.5+.25+z*.5),I.setMatrixAt(S,g),I.setColorAt(S,f.set("#FFFFFF").multiplyScalar(.92+i()*.1)),S++;I.receiveShadow=!0,e.add(I)}s(1.2,.004,.07,v.amarillo,-.425,0,-1.3,{r:.001}),s(.07,.016,5,v.hormigon,cn-.035,0,0,{r:.004});let w=-2.5-on/2,A=(l,d,_,g,f,S)=>s(l,d,_,n.pared,g,f,S,{r:.002});A(cn+3+on,zr,on,(cn-3-on)/2,0,w),A(3-cn,1,on,(cn+3)/2,0,w),A(on,zr,5,-3-on/2,0,0),s(cn+3+on,.025,on,n.corte,(cn-3-on)/2,zr,w,{r:.004}),s(on,.025,5,n.corte,-3-on/2,zr,0,{r:.004}),s(3-cn,.025,on,n.corte,(cn+3)/2,1,w,{r:.004}),s(.012,zr-1,on,n.corte,cn+.006,1,w,{r:.002}),s(.012,1,on,n.corte,3.006,0,w,{r:.002}),s(on,zr,.012,n.corte,-3-on/2,0,2.506,{r:.002}),s(cn+3,1.1,.006,v.zocalo,(cn-3)/2,0,-2.5+.003,{r:.001}),s(.006,1.1,5,v.zocalo,-3+.003,0,0,{r:.001}),s(cn+3,.022,.012,n.azulOsc,(cn-3)/2,1.1,-2.5+.006,{r:.002}),s(.012,.022,5,n.azulOsc,-3+.006,1.1,0,{r:.002});{s(.014,.34,.6,n.blanco,-3+.007,1.95,-1.45,{r:.004});for(let _=0;_<7;_++)s(.03,.012,.52,v.zinc,-3+.02,1.95+.04+_*.04,-1.45,{r:.002,rz:-.5})}let b=(l,d)=>{o(.1,.012,v.zinc,l,0,d,{seg:20});for(let _=-2;_<=2;_++)s(.17-Math.abs(_)*.02,.008,.012,v.coq,l,.012,d+_*.03,{r:.002})};b(-1.5,-.62),b(-.1,1);{let d=[[Jn,2.4,2.45],[Jn,2.4,pr],[-.97,2.4,pr],[-.97,1.1,pr],[-.97,1.1,-2.1],[-.86,1.1,-2.1]];C(e,d,.028,v.galva,{banda:v.azAF,cada:.45}),R(e,d[0],d[1],.028,"i",.8),R(e,d[1],d[2],.028,"f",.8),R(e,d[2],d[3],.028,"f",.8),M(e,-.97,1.6,pr,"y",.028),M(e,Jn,2.4,1.7,"z",.028,v.azAF),D(e,Jn+.03,2.3,.9,nt/2),M(e,-.97,1.1,-2.24,"z",.028,v.azAF),C(e,[[-2.3,2.4,pr],[-2.3,1.85,pr],[-2.3,1.85,-1.9],[-2.3,1.66,-1.9]],.028,v.galva,{banda:v.azAF,cada:.4}),E(.028*1.5,v.galva,-2.3,2.4,pr),R(e,[-2.3,1.85,pr],[-2.3,2.4,pr],.028,"f",.6),M(e,-2.3,2.1,pr,"y",.028),x(e,-3,1.55,1.6,.028)}{let l=a("descalcificador",{frente:[1,0,0],alto:.5,lado:.45,zoom:1.05}),d=-2.6;{let f=[[-2.7,.4,-.9],[-2.7,.4,-.65],[Jn,.4,-.65],[Jn,1.4,-.65],[Jn,1.4,.5]];C(l,f,.028,v.galva,{banda:v.azAF,cada:.45}),R(l,f[2],f[3],.028,"i",.5),R(l,f[3],f[4],.028,"i",.6),M(l,Jn,.8,-.65,"y",.028,v.azAF),M(l,-2.7,.4,-.78,"z",.028,v.azAF),D(l,Jn+.03,1.25,-.65,nt/2,{r:.04});let S=[[Jn,1.55,-.12],[Jn,1.55,1.6],[-3,1.55,1.6]];C(l,S,.028,v.pvc,{banda:v.azAF,cada:.5}),R(l,S[0],S[1],.028,"i",.8),M(l,Jn,1.55,1.2,"z",.028,v.azAF),D(l,Jn+.03,1.68,.75,nt/2,{r:.04})}let _=g=>{o(.2,.05,v.fundicion,d,0,g,{padre:l,seg:28}),o(.17,1.12,v.resina,d,.05,g,{padre:l,seg:28}),u(.172,.01,v.resinaOsc,d,.55,g,{padre:l}),u(.172,.01,v.resinaOsc,d,1,g,{padre:l}),t.esfera(.17,v.resina,d,1.17,g,{padre:l,sy:.5}),o(.07,.08,v.cabezal,d,1.24,g,{padre:l,seg:14}),s(.22,.3,.24,v.cabezal,d,1.3,g,{padre:l,r:.03,s:2}),s(.16,.1,.03,v.coq,d+.115,1.45,g,{padre:l,r:.008}),s(.1,.05,.012,n.pantalla,d+.135,1.475,g,{padre:l,r:.004});for(let f=0;f<3;f++)o(.01,.012,n.blanco,d+.132,1.42,g-.04+f*.04,{padre:l,rz:nt/2,seg:8});o(.045,.06,n.azul,d,1.6,g,{padre:l,seg:16}),o(.012,.03,v.coq,d+.03,1.66,g,{padre:l,seg:8});for(let[f,S,I]of[[1.4,-.05,v.azAF],[1.55,.05,v.azAF]])C(l,[[d-.1,f,g+S],[Jn,f,g+S]],.02,v.pvc,{codos:!1}),M(l,d-.22,f,g+S,"x",.02,I),E(.034,v.pvc,Jn,f,g+S,l);s(.004,.18,.1,n.blanco,d+.172,.55,g,{padre:l,r:.002}),s(.005,.03,.1,n.azul,d+.172,.63,g,{padre:l,r:.002})};_(-.1),_(.45),c(.02,[d-.1,1.4,-.15],[d-.1,1.4,.4],v.pvc,{padre:l,seg:8});{s(.55,.88,.55,v.salmuera,-2.55,0,1.1,{padre:l,r:.06,s:2}),s(.5,.012,.5,v.sal,-2.55,.8,1.1,{padre:l,r:.004});for(let I=0;I<16;I++){let L=i()*nt*2,z=.04+i()*.17;t.esfera(.03+i()*.015,v.sal,-2.55+Math.cos(L)*z,.82,1.1+Math.sin(L)*z,{padre:l,sy:.7})}o(.035,.7,v.pvc,-2.55+.18,.2,1.1-.17,{padre:l,seg:10}),o(.045,.03,v.coq,-2.55+.18,.9,1.1-.17,{padre:l,seg:12});let S=t.grupo("",l);S.position.set(-2.55-.275,.9,1.1),S.rotation.z=1.15,s(.56,.035,.57,v.salmuera,.28,0,0,{padre:S,r:.015}),s(.5,.02,.1,v.resinaOsc,.3,.035,0,{padre:S,r:.006}),s(.04,.1,.06,v.cabezal,-2.55+.285,.45,1.1-.12,{padre:l,r:.01}),C(l,[[-2.55+.3,.5,1.1-.12],[-2.4,.5,.72],[-2.4,1.35,.72],[-2.45,1.35,.6]],.011,v.nivel,{codos:!1})}{s(.8,.02,1.2,v.palet,-1.75,.12,1.15,{padre:l,r:.004});for(let I of[-.35,0,.35])s(.09,.12,1.2,v.palet,-1.75+I,0,1.15,{padre:l,r:.004});for(let I=0;I<4;I++){let L=I===3?2:3;for(let z=0;z<L;z++){let F=.7899999999999999+z*.36+(I===3?.18:0),N=(i()-.5)*.12;s(.55,.12,.34,v.saco,-1.75+(i()-.5)*.04,.14+I*.12,F,{padre:l,r:.04,s:2,ry:N}),s(.4,.045,.004,n.azul,-1.75,.19+I*.12,F+.172,{padre:l,r:.002,ry:N})}}let S=t.grupo("",l);S.position.set(-1.75+.05,.62,1.15-.05),S.rotation.set(-.5,.4,0),s(.55,.12,.34,v.saco,0,0,0,{padre:S,r:.04,s:2}),s(.5,.012,.3,v.sal,0,.115,0,{padre:S,r:.004});for(let I=0;I<9;I++)t.esfera(.03+i()*.012,v.sal,-1.75+.18+i()*.2,.62+i()*.03,1.15+.12+i()*.2,{padre:l,sy:.6})}}{let l=a("aljibe",{frente:[.4,0,1],alto:.45,lado:.5,zoom:1.35}),d=-2.2,_=-1.6,g=1.2,f=1.3,S=.14,I=1.46,L=S+I;for(let V of[-.42,.42])s(.12,.14,f+.1,v.fundicion,d+V,0,_,{padre:l,r:.01});s(g,I,f,v.aljibe,d,S,_,{padre:l,r:.025,s:2});let z=_+f/2,F=d+g/2;for(let V of[.5,1]){s(g+.02,.05,.022,v.aljNervio,d,S+V,z,{padre:l,r:.004}),s(.022,.05,f+.02,v.aljNervio,F,S+V,_,{padre:l,r:.004});for(let X=0;X<11;X++)o(.009,.014,v.zinc,d-g/2+.07+X*.106,S+V+.025-0,z+.011,{padre:l,rx:nt/2,seg:8});for(let X=0;X<12;X++)o(.009,.014,v.zinc,F+.011,S+V+.025,_-f/2+.07+X*.108,{padre:l,rz:nt/2,seg:8})}for(let V of[-.3,.3])s(.05,I,.022,v.aljNervio,d+V,S,z,{padre:l,r:.004});for(let V of[-.33,.33])s(.022,I,.05,v.aljNervio,F,S,_+V,{padre:l,r:.004});s(g-.04,.03,f-.04,v.tapa,d,L,_,{padre:l,r:.01});let N=d+.2,B=_-.1;o(.24,.035,v.tapa,N,L+.03,B,{padre:l,seg:28}),u(.235,.014,v.zinc,N,L+.068,B,{padre:l});for(let V=0;V<8;V++){let X=V/8*nt*2;o(.011,.014,v.coq,N+Math.cos(X)*.19,L+.066,B+Math.sin(X)*.19,{padre:l,seg:6})}u(.05,.007,v.zinc,N,L+.1,B,{padre:l,rx:nt/2,arco:nt,ry:0}),o(.032,.18,v.pvc,d-.4,L+.03,_+.4,{padre:l,seg:10}),c(.032,[d-.4,L+.21,_+.4],[d-.4,L+.27,_+.4],v.pvc,{padre:l}),t.esfera(.06,v.pvc,d-.4,L+.29,_+.4,{padre:l,sy:.55});{let V=_-.45;for(let X of[-.14,.14])c(.012,[F+.07,.15,V+X],[F+.07,L+.18,V+X],v.zinc,{padre:l,seg:6});for(let X=0;X<9;X++)c(.008,[F+.07,.3+X*.16,V-.14],[F+.07,.3+X*.16,V+.14],v.zinc,{padre:l,seg:6});for(let X of[.5,1.2])for(let Z of[-.14,.14])c(.006,[F,X,V+Z],[F+.07,X,V+Z],v.zinc,{padre:l,seg:5})}{let V=d+.4,X=z+.045;s(.06,1.2,.012,n.blanco,V,S+.12,z+.011,{padre:l,r:.003});for(let Z=0;Z<=10;Z++)s(Z%5===0?.04:.026,.004,.003,v.coq,V+.02,S+.14+Z*.108,z+.018,{padre:l,r:.001});o(.02,1.15,n.vidrio,V-.005,S+.14,X+.01,{padre:l,seg:10}),o(.012,.7,v.nivel,V-.005,S+.14,X+.01,{padre:l,seg:8}),t.esfera(.016,n.blanco,V-.005,S+.84,X+.01,{padre:l});for(let Z of[.16,1.26])c(.01,[V-.005,S+Z,X+.01],[V-.005,S+Z,z],v.pvc,{padre:l,seg:6})}{M(l,-2.7,.4,-.93,"z",.028,v.azAF),o(.045,.04,v.pvc,-2.7,.355,z,{padre:l,rx:nt/2,seg:12}),D(l,-2.55,.62,z+.04,0,{r:.04}),c(.01,[-2.55,.4,z+0],[-2.55,.62,z+.02],v.zinc,{padre:l,seg:6});let X=[[F,S+1.3,_+.55],[F+.1,S+1.3,_+.55],[F+.1,.07,_+.55],[F+.1,.07,-.62]];C(l,X,.032,v.pvc,{});for(let Z of[.6,1])u(.04,.006,v.zinc,F+.1,Z,_+.55,{padre:l});o(.05,.03,v.pvc,F+.1,.07,-.62,{padre:l,seg:12})}{s(.36,.5,.36,v.cuadro,-1.4,0,-1.55,{padre:l,r:.012}),s(.3,.012,.3,v.zinc,-1.4,.5,-1.55,{padre:l,r:.004}),o(.1,.48,v.cubo,-1.4,.51,-1.55,{padre:l,seg:20}),o(.108,.04,n.azul,-1.4,.99,-1.55,{padre:l,seg:20}),o(.03,.03,v.coq,-1.4,1.03,-1.55,{padre:l,seg:10});for(let G=0;G<4;G++)u(.1,.004,v.pvc,-1.4,.58+G*.1,-1.55,{padre:l});s(.2,.05,.06,n.blanco,-1.4,.34,-1.55+.185,{padre:l,r:.008}),o(.012,.03,v.azAF,-1.4,.36,-1.55+.225,{padre:l,rx:nt/2,seg:8}),C(l,[[-1.4-.1,.8,-1.55],[-1.4-.2,.8,-1.55],[-1.4-.2,.7,-1.55-.2],[-1.6,.7,-1.55-.2]],.012,v.nivel,{codos:!1}),C(l,[[-1.4,1.06,-1.55],[-1.4,1.25,-1.55],[-1.8,1.25,-1.55+.15],[-1.8,L-.05,-1.55+.15],[-1.8,L+.04,_]],.012,v.nivel,{codos:!1});let Z=-1.4,se=-.95;o(.12,.3,v.cubo,Z,0,se,{padre:l,rb:.1,seg:22}),o(.125,.04,n.azul,Z,.3,se,{padre:l,seg:22}),s(.14,.1,.004,n.azul,Z,.1,se+.113,{padre:l,r:.002,ry:0}),c(.01,[Z-.1,.34,se],[Z+.1,.34,se],v.coq,{padre:l});for(let G=0;G<6;G++)o(.022,.012,n.blanco,-1.15+i()*.15,0,-.75+i()*.15,{padre:l,seg:10})}}{let l=a("caldera",{frente:[0,0,1],alto:.3,lado:.25,zoom:1.3,mira:[0,.2,0]}),d=-.425,_=-1.865,g=.85,f=.83;s(.95,.08,.93,v.hormigon,d,0,_,{padre:l,r:.012}),s(g,1.3,f,v.caldera,d,.08,_,{padre:l,r:.035,s:2}),s(g-.04,.04,f-.04,v.calderaOsc,d,1.38,_,{padre:l,r:.012});let S=_+f/2;s(g+.01,.05,f+.01,v.calderaOsc,d,.08,_,{padre:l,r:.01});for(let I of[-.28,.28])s(.008,1.15,.01,v.calderaOsc,d+I,.18,S+.002,{padre:l,r:.002});s(.62,.7,.025,v.calderaOsc,d,.3,S,{padre:l,r:.012});for(let I of[.4,.88])o(.012,.07,v.zinc,d-.33,I,S+.008,{padre:l,seg:8});o(.13,.03,v.fundicion,d,.58,S+.012,{padre:l,rx:nt/2,seg:24});for(let I=0;I<6;I++){let L=I/6*nt*2+.2;o(.01,.014,v.zinc,d+Math.cos(L)*.1,.62+Math.sin(L)*.1-.04,S+.034,{padre:l,rx:nt/2,seg:6})}o(.075,.2,v.quemador,d,.54,S+.04,{padre:l,rx:nt/2,seg:18}),s(.3,.3,.24,v.quemador,d,.43,S+.2,{padre:l,r:.05,s:2}),o(.105,.1,v.coq,d,.58-.05,S+.37,{padre:l,rx:nt/2,seg:20}),o(.115,.012,v.fundicion,d,.53,S+.33,{padre:l,rx:nt/2,seg:20}),o(.09,.12,v.fundicion,d+.16,.57,S+.2,{padre:l,rz:nt/2,seg:16}),s(.1,.1,.08,v.coq,d-.2,.58,S+.2,{padre:l,r:.012});{let I=[[d-.5,0,S+.2],[d-.5,.62,S+.2],[d-.23,.62,S+.2]];C(l,I,.022,v.gas,{}),M(l,d-.5,.3,S+.2,"y",.022,v.amarillo),s(.1,.1,.1,v.fundicion,d-.38,.57,S+.15,{padre:l,r:.02}),o(.04,.05,v.zinc,d-.38,.67,S+.15,{padre:l,seg:12}),D(l,d-.5,.78,S+.22,0,{r:.035}),o(.01,.1,v.zinc,d-.5,.62,S+.2,{padre:l,seg:6})}{let I=d+.18,L=1,z=S+.01;s(.3,.26,.07,v.coq,I,L,z,{padre:l,r:.015}),s(.14,.07,.01,n.pantalla,I-.04,L+.15,z+.038,{padre:l,r:.004});for(let F=0;F<3;F++)o(.02,.025,v.cabezal,I-.09+F*.07,L+.07,z+.045,{padre:l,rx:nt/2,seg:12});o(.01,.012,v.ledV,I+.1,L+.18,z+.04,{padre:l,rx:nt/2,seg:8}),o(.01,.012,v.ledR,I+.1,L+.14,z+.04,{padre:l,rx:nt/2,seg:8}),s(.2,.012,.012,n.blanco,I-.02,L+.04,z+.04,{padre:l,r:.002})}o(.012,.1,v.zinc,d-.2,1.4,_+.2,{padre:l,seg:8}),D(l,d-.2,1.56,_+.22,0,{r:.05,aguja:v.rojoAC}),o(.012,.1,v.zinc,d-.04,1.4,_+.2,{padre:l,seg:8}),D(l,d-.04,1.56,_+.22,0,{r:.05});{s(.34,.1,.24,v.fundicion,-.42,1.38,-2.3,{padre:l,r:.02}),o(.1,zr-1.48,n.inox,-.42,1.48,-2.3,{padre:l,seg:24});for(let z of[1.7,2.1,2.5])o(.108,.04,n.inoxCl,-.42,z,-2.3,{padre:l,seg:24});for(let z of[1.95,2.35])s(.05,.05,.1,v.zinc,-.42,z,-2.5+0,{padre:l,r:.004}),s(.22,.03,.03,v.zinc,-.42,z,-2.3-.1,{padre:l,r:.004});o(.1,.025,n.corte,-.42,zr,-2.3,{padre:l,seg:24}),o(.07,.01,v.coq,-.42,zr+.025,-2.3,{padre:l,seg:20}),o(.025,.04,v.coq,-.42+.1,1.9,-2.3,{padre:l,rz:nt/2,seg:10})}{s(.16,.46,.09,n.inoxCl,.16,.42,-2.4,{padre:l,r:.006});for(let F=0;F<13;F++)s(.162,.455,.002,v.zinc,.16,.42,-2.4-.04+F*.0066,{padre:l,r:5e-4});s(.2,.5,.018,v.bomba,.16,.4,-2.4+.054,{padre:l,r:.006}),s(.2,.5,.018,v.bomba,.16,.4,-2.4-.054,{padre:l,r:.006});for(let[F,N]of[[-.07,.4],[.07,.4],[-.07,-.08],[.07,-.08]])c(.006,[.16+F,.4+N+.2,-2.4-.05],[.16+F,.4+N+.2,-2.4+.06],v.zinc,{padre:l,seg:6});for(let[F,N]of[[-.07,.8],[.07,.8],[-.07,.42],[.07,.42]])o(.022,.03,v.zinc,.16+F,N,-2.4+.063,{padre:l,rx:nt/2,seg:10});let z=.02;C(l,[[0,.8,-2.15],[.16-.07,.8,-2.15],[.16-.07,.8,-2.4+.075]],z,v.cobre,{coq:v.coq,banda:v.rojoAC,cada:.2}),C(l,[[0,.42,-2.15],[.16-.07,.42,-2.15],[.16-.07,.42,-2.4+.075]],z,v.cobre,{coq:v.coq,banda:v.azAF,cada:.2}),C(l,[[.16+.07,.8,-2.4+.075],[.16+.07,.8,-2.1],[.4,.8,-2.1]],z,v.cobre,{coq:v.coq,banda:v.rojoAC,cada:.2}),C(l,[[.16+.07,.42,-2.4+.075],[.16+.07,.42,-2.1],[.4,.42,-2.1]],z,v.cobre,{coq:v.coq,banda:v.azAF,cada:.2})}{let L=[[-.12,1.4,-2.1],[-.12,2,-2.1],[-.12,2,-2.3],[.32,2,-2.3]],z=[[.04,1.4,-2.1],[.04,1.74,-2.1],[.04,1.74,-2.3],[.32,1.74,-2.3],[-.28,1.74,-2.3]];C(l,L,.026,v.cobre,{coq:v.coq,banda:v.rojoAC,cada:.3}),C(l,z,.026,v.cobre,{coq:v.coq,banda:v.azAF,cada:.3}),O(l,-.12,1.62,-2.1),M(l,-.12,1.85,-2.1,"y",.026);for(let[F,N]of[[.28,2],[.28,1.74],[-.24,1.74]])c(.026,[F,N,-2.3],[F,N,-2.495],v.cobre,{padre:l,seg:10}),c(.026*1.75,[F,N,-2.3],[F,N,-2.45],v.coq,{padre:l,seg:12}),p(l,F,N,-2.5,.026);D(l,0,2.12,-2.25,0,{r:.04}),o(.01,.08,v.zinc,0,2,-2.27,{padre:l,seg:6})}}{let l=a("solar",{frente:[.2,0,1],alto:.4,lado:.4,zoom:1.1,mira:[.2,0,.1]}),d=y("captadores",l);{o(.27-.02,.12,v.fundicion,.6,0,-1.95,{padre:l,seg:28}),o(.27,1.5,v.interacum,.6,.12,-1.95,{padre:l,seg:36}),t.esfera(.27,v.interacum,.6,1.62,-1.95,{padre:l,sy:.32}),u(.27+.003,.008,v.zinc,.6,.45,-1.95,{padre:l}),u(.27+.003,.008,v.zinc,.6,1.3,-1.95,{padre:l}),u(.27+.003,.012,n.azul,.6,.12,-1.95,{padre:l}),o(.05,.04,v.coq,.6,1.7,-1.95,{padre:l,seg:12}),o(.032,.04,v.laton,.6,1.74,-1.95,{padre:l,seg:6}),s(.14,.1,.004,n.blanco,.6+.12,.95,-1.95+.265,{padre:l,r:.002,ry:.4}),D(l,.6-.08,1.35,-1.95+.27+.02,0,{r:.04,aguja:v.rojoAC}),D(l,.6+.08,1.35,-1.95+.27+.02,0,{r:.04});for(let Z of[-.08,.08])o(.012,.03,v.zinc,.6+Z,1.33,-1.95+.27-.005,{padre:l,rx:nt/2,seg:6});o(.012,.08,v.coq,.6-.2,1.1,-1.95+.19,{padre:l,rx:nt/2,seg:6});let B=.024,V=[[.95,.3,-2.5],[.95,.3,-1.95],[.6+.27-.03,.3,-1.95]];C(l,V,B,v.galva,{banda:v.azAF,cada:.25}),p(l,.95,.3,-2.5,B),M(l,.95,.3,-2.2,"z",B,v.azAF),C(l,[[.6,1.76,-1.95],[.6,2.05,-1.95],[.6,2.05,-2.495]],B,v.cobre,{coq:v.coq,banda:v.rojoAC,cada:.3}),p(l,.6,2.05,-2.5,B),M(l,.6,1.9,-1.95,"y",B),C(l,[[.6+.27-.03,.98,-1.95],[1.09,.98,-1.95],[1.09,.98,-2.34]],B,v.cobre,{coq:v.coq,banda:v.verdeSol,cada:.2}),C(l,[[.6+.27-.03,.62,-1.95],[.95,.62,-1.95],[.95,.62,-2.34]],B,v.cobre,{coq:v.coq,banda:v.verdeSol,cada:.2})}{s(.3,.76,.1,v.epp,1.02,.38,-2.45,{padre:l,r:.02});let F=.02;for(let[N,B]of[[.95,v.azAF],[1.09,v.rojoAC]])c(F,[N,.5,-2.36],[N,1.12,-2.36],v.cobre,{padre:l,seg:10}),c(F*1.75,[N,.5,-2.36],[N,1.1,-2.36],v.coq,{padre:l,seg:12}),o(.026,.1,B,N,.5,-2.36,{padre:l,seg:12});M(l,.95,.88,-2.36,"y",F,v.azAF),M(l,1.09,.7,-2.36,"y",F,v.rojoAC),O(l,.95,.68,-2.36,v.bomba),o(.022,.2,n.vidrio,1.09,.88,-2.3,{padre:l,seg:10}),t.esfera(.012,n.blanco,1.09,.98,-2.3,{padre:l}),o(.026,.02,v.laton,1.09,.86,-2.3,{padre:l,seg:10}),o(.026,.02,v.laton,1.09,1.08,-2.3,{padre:l,seg:10}),D(l,.95,1.2,-2.39,0,{r:.04,aguja:v.rojoAC}),D(l,1.09,1.2,-2.39,0,{r:.04,aguja:v.rojoAC}),D(l,1.02,.5,-2.39,0,{r:.04}),o(.02,.07,v.laton,1.02,.56,-2.38,{padre:l,seg:8})}{o(.1,.36,v.vaso,1,1.52,-2.39,{padre:l,seg:20}),t.esfera(.1,v.vaso,1,1.88,-2.39,{padre:l,sy:.5}),t.esfera(.1,v.vaso,1,1.52,-2.39,{padre:l,sy:.5}),u(.102,.006,n.blanco,1,1.7,-2.39,{padre:l}),c(.012,[1,1.47,-2.39],[1,1.4,-2.3],v.laton,{padre:l,seg:6});for(let F of[1.5,1.8])s(.24,.02,.03,v.zinc,1,F,-2.46,{padre:l,r:.004})}let _=-2.36,g=-2.22,f=1.4,S=-1.38,I=.34,L=.02;{let F=[[1.09,1.12,_],[1.09,1.38,_],[1.52,1.38,_],[1.52,f,S]],N=[[.95,1.12,_],[.95,1.18,_],[.95,1.18,g],[1.5,1.18,g],[1.5,1.18,L],[1.5,I,L]];C(l,F,.022,v.cobre,{coq:n.inoxCl,banda:v.rojoAC,cada:.35}),C(l,N,.022,v.cobre,{coq:n.inoxCl,banda:v.azAF,cada:.35}),R(l,F[1],F[2],.022*1.75,"f",.8);for(let B of[1,1.14])c(.007,[B,1.18,-2.496],[B,1.18,g],v.zinc,{padre:l,seg:6}),s(.045,.045,.012,v.zinc,B,1.18-.0225,-2.494,{padre:l,r:.003});for(let B of[-1.9,-1.1,-.35])c(.012,[1.5,Lr,B],[1.5,1.16,B],v.bancada,{padre:l,seg:6}),s(.12,.02,.12,v.bancada,1.5,Lr,B,{padre:l,r:.004}),u(.04,.006,v.zinc,1.5,1.18,B,{padre:l});M(l,1.35,1.18,g,"x",.022,v.azAF),M(l,1.3,1.38,_,"x",.022,v.rojoAC),D(l,1.16,1.3,_+.03,0,{r:.035,aguja:v.rojoAC})}{let V=[0,Math.sin(ja),-Math.cos(ja)],X=[0,Math.cos(ja),Math.sin(ja)],Z=.36+V[1]*1.65/2,se=0+V[2]*1.65/2,G=[1.64,2.33];for(let re of G){let ce=y("captador",d);ce.position.set(re,Z+X[1]*0,se+X[2]*0),ce.rotation.x=ja;let J=.08;s(.66,.02,1.65,v.alu,0,-J/2,0,{padre:ce,r:.006});for(let ge of[-1,1])s(.045,J,1.65,v.alu,ge*(.66/2-.0225),-J/2,0,{padre:ce,r:.01}),s(.66-.09,J,.045,v.alu,0,-J/2,ge*(1.65/2-.0225),{padre:ce,r:.01});s(.66-.09,.012,1.65-.09,v.vidrioSol,0,.012,0,{padre:ce,r:.003});for(let ge=0;ge<9;ge++)s(.004,.003,1.65-.14,v.lineaSol,-.66/2+.06+ge*((.66-.12)/8),.0245,0,{padre:ce,r:.001});for(let ge=0;ge<2;ge++)s(.66-.12,.003,.012,v.lineaSol,0,.0245,-.3+ge*.6,{padre:ce,r:.001});s(.05,.002,.3,n.blanco,-.66/2+.11,.0245,-1.65/2+.3,{padre:ce,r:5e-4}).rotation.y=0}for(let re of G)for(let ce of[-1,1]){let J=re+ce*.2,ge=[J,.36-.07+0,0+.02],Oe=[J,.36+V[1]*1.65-.07,0+V[2]*1.65];c(.016,ge,Oe,v.bancada,{padre:d,seg:8}),c(.014,[J,Lr,0-.02],[J,ge[1],0-.02],v.bancada,{padre:d,seg:8}),c(.014,[J,Lr,Oe[2]+.05],[J,Oe[1],Oe[2]+.05],v.bancada,{padre:d,seg:8}),c(.01,[J,Lr+.02,Oe[2]+.45],[J,Oe[1]-.45*Math.tan(ja)-.1,Oe[2]+.05+0],v.bancada,{padre:d,seg:6}),s(.2,.1,.34,v.hormigon,J-.1,Lr,0-.35,{padre:d,r:.012}),s(.2,.1,.34,v.hormigon,J-.1,Lr,Oe[2]-.18,{padre:d,r:.012}),s(.12,.02,.12,v.bancada,J-.06,Lr,0-.08,{padre:d,r:.004})}let j=.022;C(d,[[1.5+.02,f,S],[2.95,f,S]],j,v.cobre,{coq:n.inoxCl,banda:v.rojoAC,cada:.45,codos:!1}),C(d,[[1.5+.02,I,L],[2.95,I,L]],j,v.cobre,{coq:n.inoxCl,banda:v.azAF,cada:.45,codos:!1});for(let re of G)for(let[ce,J]of[[f,S],[I,L]])c(.012,[re-.1,ce,J],[re-.1,ce-.04,J+0],v.cobre,{padre:d,seg:6});o(.02,.06,v.laton,2.9,f,S,{padre:d,seg:8}),o(.03,.012,v.rojoAC,2.9,f+.06,S,{padre:d,seg:8}),E(.034,n.inoxCl,2.95,f,S,d),E(.034,n.inoxCl,2.95,I,L,d),o(.012,.1,v.coq,2.78,f+.01,S+0,{padre:d,rz:nt/2,seg:6})}}{let S=2.1500000000000004;for(let[I,L]of[[.02,1.85],[.4-.02,1.85],[.02,2.45],[.4-.02,2.45]])s(.04,1.78,.04,v.estante,-2.99+I-.02,0,L-(L===2.45?.04:0),{r:.005});for(let I of[.1,.62,1.1,1.52])s(.4,.025,2.45-1.85,v.zinc,-2.79,I,S,{r:.004});s(.4,.025,2.45-1.85,v.estante,-2.79,1.76,S,{r:.004}),Ve(t,n,-2.79,1.545,1.99,{ry:nt/2}),Ve(t,n,-2.79,1.545,2.19,{ry:nt/2}),It(t,n,-2.79,1.545,2.38,{ry:nt/2}),Ve(t,n,-2.79,1.125,2.02,{ry:nt/2}),Ve(t,n,-2.79,1.125,2.22,{ry:nt/2}),Ve(t,n,-2.79,1.37,2.12,{ry:nt/2}),s(.3,.14,.26,n.madera,-2.79,.645,2,{r:.012}),s(.3,.12,.22,n.azul,-2.79,.645,2.32,{r:.012}),Ve(t,n,-2.79,.135,2,{ry:nt/2}),Ve(t,n,-2.79,.135,2.2,{ry:nt/2}),Ve(t,n,-2.79,.135,2.38,{ry:nt/2}),o(.13,.3,n.azul,-2.28,0,2.2,{rb:.105,seg:22}),u(.13,.008,n.azulOsc,-2.28,.3,2.2,{rx:nt/2}),c(.007,[-2.38,.3,2.2],[-2.18,.3,2.2],v.zinc,{seg:6}),Ve(t,n,-2.36,0,1.78,{ry:-.5}),o(.02,.2,v.zinc,-2.4,.32,1.765,{seg:10}),s(.12,.014,.02,v.coq,-2.4,.5,1.765,{r:.006}),c(.01,[-2.4,.4,1.765],[-2.28,.4,1.8],v.zinc,{seg:6}),o(.012,.05,v.coq,-2.28,.355,1.8,{seg:6})}s(.014,.08,.05,v.zinc,-3+.007,.9,1.62,{r:.003}),o(.065,.42,v.extintor,-2.9,.5,1.62,{seg:18}),t.esfera(.065,v.extintor,-2.9,.92,1.62,{sy:.55}),o(.02,.05,v.coq,-2.9,.96,1.62,{seg:8}),s(.02,.014,.1,v.coq,-2.9,1,1.62,{r:.004}),c(.008,[-2.9,.9,1.62+.05],[-2.84,.7,1.62+.1],v.coq,{seg:6}),o(.015,.05,v.coq,-2.84,.66,1.62+.1,{seg:8}),s(.004,.2,.2,v.extintor,-3+.004,1.2,1.62,{r:.002}),s(.006,.12,.02,n.blanco,-3+.006,1.24,1.62,{r:.002});{let l=new Mn;l.moveTo(-.11,-.08),l.lineTo(.11,-.08),l.lineTo(0,.11),l.closePath();let d=new Bn(l,{depth:.01,bevelEnabled:!1}),_=new $e(d,v.amarillo);_.position.set(-.68,2.12,-2.5+.004),_.castShadow=!0,e.add(_),s(.012,.07,.006,v.coq,-.68,2.1,-2.5+.014,{r:.002}),t.esfera(.008,v.coq,-.68,2.09,-2.5+.017,{}),s(.24,.1,.01,n.blanco,-.68,1.9,-2.5+.005,{r:.003}),s(.22,.012,.006,n.azul,-.68,1.97,-2.5+.011,{r:.001}),s(.12,.012,.006,n.azul,-.72,1.93,-2.5+.011,{r:.001}),s(.06,.012,.006,n.azul,-.72,1.91,-2.5+.011,{r:.001})}{s(.34,.46,.14,v.cuadro,-1.85,1.85,-2.5+0,{r:.012,s:1}).position.z=-2.43,s(.3,.42,.012,v.cuadro,-1.85,1.85+.02,-2.355,{r:.006}),s(.14,.06,.006,n.pantalla,-1.85-.04,1.85+.34,-2.347,{r:.002});for(let _=0;_<3;_++)o(.015,.014,v.coq,-1.85-.09+_*.07,1.85+.22,-2.345,{rx:nt/2,seg:10});o(.01,.01,v.ledV,-1.85+.1,1.85+.36,-2.347,{rx:nt/2,seg:8}),o(.01,.01,v.ledR,-1.85+.1,1.85+.32,-2.347,{rx:nt/2,seg:8}),s(.08,.012,.012,n.blanco,-1.85,1.85+.1,-2.347,{r:.002}),c(.012,[-1.85+.1,1.85+.46,-2.43],[-1.85+.1,2.62,-2.43],v.cuadro,{seg:8}),c(.012,[-1.85-.1,1.85+.46,-2.43],[-1.85-.1,2.62,-2.43],v.cuadro,{seg:8}),s(1.2,.04,.12,v.zinc,-1.85+.55,2.62,-2.44,{r:.004}),s(1.2,.02,.012,v.zinc,-1.85+.55,2.68,-2.38,{r:.002})}{let l=Lr,d=(g,f)=>c(.016,[g,l,f],[g,l+1,f],n.inoxCl,{seg:8}),_=[];for(let g=2.45;g>=-2.4;g-=1.6)_.push([2.96,g]);for(let g=2.96;g>=cn+.15;g-=.55)_.push([g,2.45]);_.forEach(([g,f])=>d(g,f));for(let g of[l+.5,l+1])c(.014,[2.96,g,2.45],[2.96,g,-2.4],n.inoxCl,{seg:8}),c(.014,[2.96,g,2.45],[cn+.15,g,2.45],n.inoxCl,{seg:8}),E(.02,n.inoxCl,2.96,g,2.45);s(.9,.4,.9,v.hormigon,2.2,l,1.55,{r:.02}),s(.96,.05,.96,n.pared,2.2,l+.4,1.55,{r:.015}),s(.08,.012,.2,v.zinc,2.2,l+.455,1.9,{r:.004}),c(.01,[1.82,l+.455,1.12],[1.82,l+.3,1.12],v.zinc,{seg:6}),o(.08,.4,v.pvc,1.55,l,.8,{seg:14}),o(.14,.04,v.pvc,1.55,l+.42,.8,{rb:.06,seg:16}),t.esfera(.12,v.pvc,1.55,l+.5,.8,{sy:.4}),s(.4,.14,.2,v.hormigon,1.75,l,1.15,{r:.012}),s(.4,.14,.2,v.hormigon,1.75,l+.14,1.15,{r:.012})}let P=l=>{l.updateMatrixWorld(!0);let d=l.matrixWorld.clone().invert(),_=new Map,g=[],f=S=>{for(let I of S.children)if(!I.userData.unidad&&!I.isInstancedMesh)if(I.isMesh){if(g.push(I),!I.visible)continue;let L=I.geometry.clone();for(let F of Object.keys(L.attributes))["position","normal","uv"].includes(F)||L.deleteAttribute(F);L.clearGroups(),L.applyMatrix4(new Le().multiplyMatrices(d,I.matrixWorld));let z=`${I.material.uuid}|${!!L.index}|${I.castShadow}|${I.receiveShadow}`;_.has(z)||_.set(z,{mat:I.material,cast:I.castShadow,recibe:I.receiveShadow,lista:[]}),_.get(z).lista.push(L)}else f(I)};f(l);for(let S of g)S.parent.remove(S);for(let{mat:S,cast:I,recibe:L,lista:z}of _.values()){let F=new $e(vi(z),S);F.castShadow=I,F.receiveShadow=L,l.add(F)}},h=[];return e.traverse(l=>{l.userData.unidad&&h.push(l)}),h.reverse().forEach(P),P(e),{raiz:e,puntos:r}}var Ym={crear:m3,mira:[.4,.85,-.1],az:.62,el:.5,radio:4.7};var Ya=2.6,wn=.16,vt=.9,dn=Math.PI,Id=-1.99,g3=-1.74;function x3(n){let e=new zt,t=Sn(e),i=bn(53),r={},a=(h,l={})=>{let d=t.grupo(h);return d.userData.unidad=!0,r[h]={grupo:d,...l},d},s=t.caja,o=t.cil,c=t.barra,u=t.esfera,m=t.toro,E=(h,l={})=>new Gt({color:h,roughness:.6,metalness:0,...l}),y={carcasa:E("#E9EEF1",{roughness:.38}),tablero:E("#D5DCE1",{roughness:.6}),det:E("#1D93D1",{roughness:.4}),detOsc:E("#0B4F7C",{roughness:.5}),abri:E("#23AE94",{roughness:.4}),abriOsc:E("#13705F",{roughness:.5}),tuboDet:E("#2E8FE0",{roughness:.25}),tuboAbri:E("#3CC98F",{roughness:.25}),laton:E("#C9A24A",{metalness:.6,roughness:.35}),ledV:E("#8CF0A6",{emissive:"#3FD36B",emissiveIntensity:1.1,roughness:.3}),ledR:E("#FF8C7A",{emissive:"#E5533D",emissiveIntensity:1,roughness:.3}),cesta:E("#8FB3C9",{roughness:.55}),cestaOsc:E("#5F8299",{roughness:.55}),marino:E("#2E4A63",{roughness:.9}),amarillo:E("#F2C230",{roughness:.5}),carton:E("#C9A877",{roughness:.8}),papel:E("#FBFBF7",{roughness:.95}),rojo:E("#D9483B",{roughness:.5})},T=(h,l,d,_,g,f,S,I={})=>o(l,d,_,g,f-d/2,S,{rx:dn/2,padre:h,...I}),v=(h,l,d,_,g,f,S,I={})=>o(l,d,_,g,f-d/2,S,{rz:dn/2,padre:h,...I}),R=(h,l,d,_,g)=>{let f=t.grupo("",h);return f.position.set(l,d,_),f.rotation.y=g,f},C=(h,l,d,_=.0065)=>{let g=new Sa(l.map(S=>new W(...S)),!1,"catmullrom",.5),f=new $e(new Io(g,Math.max(24,l.length*12),_,8,!1),d);return f.castShadow=f.receiveShadow=!0,(h||e).add(f),f};s(4+wn+.04,.24,3.5+wn+.04,n.corte,-wn/2,-.25,-wn/2,{r:.03}),s(4,.012,3.5,n.juntaSuelo,0,-.012,0,{r:.002});{let l=St(.24,.014,.24,.004,1),d=new ut(l,n.baldosa,224),_=new Le,g=new Be,f=0;for(let S=0;S<16;S++)for(let I=0;I<14;I++)_.makeTranslation(-2+.25/2+S*.25,.003,-1.75+.25/2+I*.25),d.setMatrixAt(f,_),d.setColorAt(f,g.set("#D9DEE1").multiplyScalar(.97+i()*.05)),f++;d.count=f,d.receiveShadow=!0,e.add(d)}let M=-1.75-wn/2;s(4+wn,Ya,wn,n.pared,-wn/2,0,M,{r:.002,s:1}),s(wn,Ya,3.5,n.pared,-2-wn/2,0,0,{r:.002,s:1}),s(4+wn,.025,wn,n.corte,-wn/2,Ya,M,{r:.004}),s(wn,.025,3.5,n.corte,-2-wn/2,Ya,0,{r:.004}),s(.012,Ya,wn,n.corte,2.006,0,M,{r:.002}),s(wn,Ya,.012,n.corte,-2-wn/2,0,1.756,{r:.002});{let _=St(.194,.094,.012,.004,1),g=new ut(_,n.azulejo,924),f=new Le,S=new Le().makeRotationY(dn/2),I=0;for(let L=0;L<2.1/.1;L++){let z=.05+L*.1,F=L%2?.2/2:0;for(let N=-2+.2/2-F;N<2;N+=.2)N<-2+.05||(f.makeTranslation(N,z,-1.75+.006),g.setMatrixAt(I++,f));for(let N=-1.75+.2/2-F;N<1.75;N+=.2)N<-1.75+.05||(f.copy(S).setPosition(-2+.006,z,N),g.setMatrixAt(I++,f))}g.count=I,g.receiveShadow=!0,e.add(g),s(4,2.1,.004,n.juntaPared,0,0,-1.75+.002,{r:.001,s:1}),s(.004,2.1,3.5,n.juntaPared,-2+.002,0,0,{r:.001,s:1}),s(4,.018,.02,n.inoxCl,0,2.1,-1.75+.01,{r:.005}),s(.02,.018,3.5,n.inoxCl,-2+.01,2.1,0,{r:.005}),s(4,.03,.004,n.azul,0,1.2,-1.75+.014,{r:.001,s:1}),s(.004,.03,3.5,n.azul,-2+.014,1.2,0,{r:.001,s:1})}{o(.11,.008,n.inoxCl,-.05,.008,-.45,{seg:28});for(let h=-3;h<=3;h++)s(.17-Math.abs(h)*.016,.004,.012,n.hierro,-.05,.0145,-.45+h*.026,{r:.002});s(.9,.014,.55,n.goma,-.45,.012,-.62,{r:.006});for(let h=0;h<6;h++)s(.86,.004,.012,n.negro,-.45,.025,-.84+h*.1,{r:.002})}let D=(h,l,d,_,{padre:g,balda:f=!0,hueco:S=null}={})=>{let I=l-h,L=_-d,z=(h+l)/2,F=(d+_)/2;if(!S)s(I,.04,L,n.inoxCl,z,vt-.04,F,{padre:g,r:.012});else{let[N,B,V,X]=S;s(N-h,.04,L,n.inoxCl,(h+N)/2,vt-.04,F,{padre:g,r:.008}),s(l-B,.04,L,n.inoxCl,(B+l)/2,vt-.04,F,{padre:g,r:.008}),s(B-N,.04,V-d,n.inoxCl,(N+B)/2,vt-.04,(d+V)/2,{padre:g,r:.008}),s(B-N,.04,_-X,n.inoxCl,(N+B)/2,vt-.04,(X+_)/2,{padre:g,r:.008})}S?(s(I-.04,.06,.03,n.inox,z,vt-.1,d+.03,{padre:g,r:.008}),s(I-.04,.06,.03,n.inox,z,vt-.1,_-.03,{padre:g,r:.008}),s(.03,.06,L-.04,n.inox,h+.03,vt-.1,F,{padre:g,r:.008}),s(.03,.06,L-.04,n.inox,l-.03,vt-.1,F,{padre:g,r:.008})):s(I-.04,.06,L-.04,n.inox,z,vt-.1,F,{padre:g,r:.008});for(let N of[h+.06,l-.06])for(let B of[d+.06,_-.06])s(.04,vt-.1,.04,n.inox,N,0,B,{padre:g,r:.008}),o(.026,.02,n.goma,N,0,B,{padre:g,seg:12});f&&s(I-.06,.025,L-.06,n.inox,z,.2,F,{padre:g,r:.008})},O=(h,l,d,_,g=.12,f)=>{for(let S=0;S<h;S++)o(g-(S===h-1?0:.002),.012,n.loza,l,d+S*.014,_,{padre:f,rb:g-.025,seg:28})},p=(h,l,d,{contenido:_="",padre:g}={})=>{s(.5,.012,.5,y.cesta,h,l,d,{padre:g,r:.004});for(let[S,I,L,z]of[[.5,.012,0,-.5/2+.006],[.5,.012,0,.5/2-.006],[.012,.5,-.5/2+.006,0],[.012,.5,.5/2-.006,0]])s(S,.1,I,y.cesta,h+L,l,d+z,{padre:g,r:.004});for(let S=1;S<5;S++)s(.5-.02,.008,.008,y.cestaOsc,h,l+.012,d-.5/2+S*(.5/5),{padre:g,r:.002});for(let S=1;S<5;S++)s(.008,.008,.5-.02,y.cestaOsc,h-.5/2+S*(.5/5),l+.012,d,{padre:g,r:.002});if(_==="platos")for(let S=0;S<7;S++)o(.11,.01,n.loza,h,l+.13,d-.18+S*.06,{padre:g,rx:dn/2,seg:24,rb:.11});else if(_==="vasos")for(let S=0;S<4;S++)for(let I=0;I<4;I++)o(.033,.11,n.vidrio,h-.15+S*.1,l+.012,d-.15+I*.1,{padre:g,rb:.027,seg:14,abierto:!0})};{D(-1.95,-.86,-1.66,-.92,{hueco:[-1.88,-1.42,-1.58,-1.08]});let L=vt-.28,z=-1.42- -1.88,F=-1.08- -1.58,N=(-1.88+-1.42)/2,B=(-1.58+-1.08)/2;s(z,.012,F,n.inoxOsc,N,L,B,{r:.004}),s(z,.26,.01,n.inox,N,L,-1.58+.005,{r:.003}),s(z,.26,.01,n.inox,N,L,-1.08-.005,{r:.003}),s(.01,.26,F,n.inox,-1.88+.005,L,B,{r:.003}),s(.01,.26,F,n.inox,-1.42-.005,L,B,{r:.003}),o(.035,.006,n.hierro,N,L+.012,B,{seg:16}),s(-.86- -1.95,.1,.02,n.inoxCl,(-1.95+-.86)/2,vt-.005,-1.66+.01,{r:.006}),s(.02,.1,-.92- -1.66,n.inoxCl,-1.95+.01,vt-.005,(-1.66+-.92)/2,{r:.006});let V=N,X=-1.64;o(.017,.7,n.inoxCl,V,vt,X,{seg:14}),u(.017,n.inoxCl,V,vt+.7,X),c(.014,[V,vt+.7,X],[V,1.72,X+.16],n.inoxCl);for(let Z=0;Z<9;Z++)m(.026,.0055,n.inoxCl,V,1.68-Z*.03,X+.16,{rx:dn/2});c(.008,[V,1.41,X+.16],[V,1.32,X+.16],n.inoxCl),o(.018,.12,n.inoxOsc,V,1.2,X+.16,{seg:14}),o(.025,.03,n.azul,V,1.2,X+.16,{seg:14}),s(.45,.012,.03,n.inoxCl,-1.12,vt,-1.5,{r:.004}),s(.45,.012,.03,n.inoxCl,-1.12,vt,-1.08,{r:.004}),p(-1.15,vt+.012,-1.29,{contenido:"platos"}),O(6,-1.65,vt,-.99,.11)}{D(-.1,1,-1.66,-.92),s(1- -.1,.1,.02,n.inoxCl,(-.1+1)/2,vt-.005,-1.66+.01,{r:.006}),s(.45,.012,.03,n.inoxCl,.2,vt,-1.5,{r:.004}),s(.45,.012,.03,n.inoxCl,.2,vt,-1.08,{r:.004}),p(.17,vt+.012,-1.29,{contenido:"vasos"});let g=.76,f=-1.3;s(.4,.02,.3,n.inoxOsc,g,vt,f,{r:.006});for(let S=0;S<7;S++)o(.1,.008,n.loza,g,vt+.1,f-.108+S*.036,{rx:dn/2,seg:24});for(let S of[-.19,.19])s(.008,.12,.3,n.inoxOsc,g+S,vt,f,{r:.002});for(let S of[-.14,.14])s(.4,.04,.008,n.inoxOsc,g,vt+.02,f+S,{r:.002});O(5,.52,vt,-1.02,.12),s(.18,.09,.14,n.inoxCl,.74,vt,-1,{r:.012});for(let S=0;S<6;S++)c(.004,[.69+S*.02,vt+.08,-1],[.7+S*.02,vt+.2,-1.01],n.inoxCl);s(.1,.012,.1,n.azul,.92,vt,-1.02,{r:.005,ry:.3})}{let h=R(e,.5,1.28,g3,0);s(.5,.64,.014,n.inoxCl,0,0,.007,{padre:h,r:.006}),s(.46,.6,.004,n.papel,0,.02,.016,{padre:h,r:.002}),s(.46,.09,.004,y.detOsc,0,.53,.019,{padre:h,r:.002});for(let[l,d,_,g]of[[.38,y.det,y.detOsc,.26],[.2,y.abri,y.abriOsc,.13]])u(.026,d,-.155,l+.04,.026,{padre:h,sy:1.2}),s(.3,.014,.004,n.juntaPared,.04,l+.02,.019,{padre:h,r:.002}),s(g,.014,.004,_,.04-(.3-g)/2,l+.02,.0215,{padre:h,r:.002}),s(.12,.012,.004,n.gris,0,l-.04,.019,{padre:h,r:.002});s(.014,.1,.004,n.juntaPared,.19,.08,.019,{padre:h,r:.002}),s(.014,.065,.004,y.rojo,.19,.08,.0215,{padre:h,r:.002}),u(.017,y.rojo,.19,.075,.0225,{padre:h})}{for(let f of[1.1+.03,1.95-.03])for(let S of[-1.7+.03,-1.25-.03])s(.035,1.8,.035,n.inox,f,0,S,{r:.006});let g=[.1,.62,1.12,1.62];for(let f of g)s(1.95-1.1,.025,-1.25- -1.7,n.inoxCl,(1.1+1.95)/2,f,(-1.7+-1.25)/2,{r:.006});for(let[f,S]of[[1.28,.34],[1.68,.36]])s(S,.26,.38,y.carton,f,.125,-1.48,{r:.012}),s(S-.04,.012,.4,y.carton,f,.385,-1.48,{r:.004});for(let[f,S]of[[1.22,.1],[1.42,-.1],[1.62,.05],[1.82,.2]])Ve(t,n,f,.645,-1.48,{ry:S});for(let[f,S]of[[1.28,.2],[1.5,-.15],[1.72,.1]])Ve(t,n,f,1.145,-1.48,{ry:S});It(t,n,1.9,1.145,-1.4,{ry:.4});for(let f=0;f<3;f++)o(.06,.12,n.papel,1.3+f*.14,1.645,-1.5,{seg:20});s(.24,.1,.3,y.carton,1.82,1.645,-1.5,{r:.01})}{T(e,.15,.03,n.inoxCl,1.5,2.28,-1.745+.015),T(e,.13,.02,n.hierro,1.5,2.28,-1.745+.04);for(let _=-4;_<=4;_++)s(.24-Math.abs(_)*.012,.012,.012,n.inoxCl,1.5,2.28+_*.027,-1.745+.052,{r:.002});m(.15,.008,n.inoxCl,1.5,2.28,-1.745+.032,{rx:0})}{let h=a("maquina",{frente:[0,0,1],alto:.35,lado:.3,zoom:.95,mira:[0,.1,0]}),l=-.85,d=-.1,_=-1.66,g=-.92,f=(l+d)/2,S=(_+g)/2;for(let I of[l+.05,d-.05])for(let L of[_+.05,g-.05])o(.022,.12,n.inoxOsc,I,0,L,{padre:h,seg:12});s(d-l,.74,g-_,n.inox,f,.12,S,{padre:h,r:.014}),s(d-l-.1,.6,.012,n.inoxCl,f,.18,g+.002,{padre:h,r:.004}),s(.006,.6,.012,n.inoxOsc,f,.18,g+.008,{padre:h,r:.002}),s(.26,.012,.02,n.inoxOsc,f,.22,g+.012,{padre:h,r:.004}),s(d-l+.02,.03,g-_+.02,n.inoxCl,f,.86,S,{padre:h,r:.008}),s(d-l,.58,g-_,n.inoxCl,f,.89,S,{padre:h,r:.02,s:3});for(let I of[f-.25,f+.25])s(.01,.4,.008,n.inox,I,.95,g+.003,{padre:h,r:.002});c(.014,[f-.25,1,g+.07],[f+.25,1,g+.07],n.inoxOsc,{padre:h});for(let I of[f-.25,f+.25])c(.01,[I,1,g],[I,1,g+.07],n.inoxOsc,{padre:h});s(.5,.17,.035,n.inox,f,1.22,g,{padre:h,r:.012}),s(.14,.07,.008,n.pantalla,f-.13,1.28,g+.0215,{padre:h,r:.004});for(let I=0;I<3;I++)s(.02,.026,.004,n.blanco,f-.17+I*.035,1.302,g+.0275,{padre:h,r:.001});T(h,.03,.02,n.negro,f+.1,1.31,g+.0275),s(.006,.026,.004,n.blanco,f+.1-.007,1.315,g+.0395,{padre:h,r:.001});for(let[I,L]of[[0,y.ledV],[1,y.ledR],[2,n.blanco]])T(h,.009,.008,L,f-.19+I*.05,1.25,g+.0215);T(h,.012,.012,y.ledV,f+.2,1.25,g+.0235),s(.24,.09,.14,n.inox,-.56,1.47,-1.57,{padre:h,r:.01}),s(.2,.02,.1,n.inoxOsc,-.56,1.56,-1.57,{padre:h,r:.006}),c(.02,[d,.35,-1.5],[d+.12,.2,-1.55],n.negro,{padre:h}),s(.1,.05,.004,n.blanco,l+.12,.75,g+.008,{padre:h,r:.002}),s(.22,.012,.01,n.inoxOsc,f,.12,g+.004,{padre:h,r:.003})}let x=(h,l,d,{escala:_=1,banda:g,tapa:f,cuello:S=0,rombo:I=!1}={})=>{let L=t.grupo("bidon",h);return L.position.set(l,.01,d),L.rotation.y=dn/2,L.scale.setScalar(_),s(.3,.36,.2,n.blanco,0,0,0,{padre:L,r:.04,s:3}),s(.25,.05,.17,n.blanco,0,.33,0,{padre:L,r:.02}),s(.22,.012,.012,n.blanco,0,.12,.101,{padre:L,r:.004}),m(.05,.012,n.blanco,-.1,.39,0,{rx:0,arco:dn,padre:L}),o(.032,.05,n.blanco,S,.375,0,{padre:L,seg:20}),o(.038,.032,f,S,.42,0,{padre:L,seg:20}),o(.012,.13,n.inoxCl,S,.45,0,{padre:L,seg:12}),o(.02,.022,n.inoxOsc,S,.57,0,{padre:L,seg:12}),s(.25,.2,.004,n.azul,0,.07,.102,{padre:L,r:.002}),s(.25,.045,.004,g,0,.225,.1025,{padre:L,r:.002}),s(.17,.05,.004,n.blanco,0,.12,.1055,{padre:L,r:.002}),s(.17,.03,.004,n.blanco,0,.065,.1055,{padre:L,r:.002}),I&&(s(.05,.05,.003,n.blanco,-.085,.01,.1055,{padre:L,r:.001,rz:dn/4}),s(.034,.034,.003,y.rojo,-.085,.015,.108,{padre:L,r:.001,rz:dn/4})),L},w=1.93;{let d=1.5299999999999998,_=(-1.93-.4)/2;s(.06,.012,2.3,n.blanco,-1.96,w,-.53,{r:.003}),s(.012,.05,2.3,n.blanco,-1.984,w,-.53,{r:.003}),s(.012,.02,2.3,n.blanco,-1.936,w,-.53,{r:.003}),s(.06,.012,.06,n.blanco,-1.96,w,-1.71,{r:.003}),s(.012,.05,.06,n.blanco,-1.984,w,-1.71,{r:.003}),s(d,.012,.06,n.blanco,_,w,-1.71,{r:.003}),s(d,.05,.012,n.blanco,_,w,-1.734,{r:.003}),s(d,.02,.012,n.blanco,_,w,-1.686,{r:.003}),s(.06,.05,.012,n.blanco,-1.96,w,-1.734,{r:.003}),s(.06,.05,.012,n.blanco,-1.96,w,.614,{r:.003}),s(.012,.05,.06,n.blanco,-.406,w,-1.71,{r:.003}),s(.06,.006,2.3+.06,n.vidrio,-1.96,w+.052,-.53-.03,{r:.002}),s(d,.006,.06,n.vidrio,_+0,w+.052,-1.71,{r:.002});for(let g=.4;g>-1.6;g-=.5)s(.07,.012,.03,n.blanco,-1.96,w+.059,g,{r:.004});for(let g=-1.7;g<-.5;g+=.5)s(.03,.012,.07,n.blanco,g,w+.059,-1.71,{r:.004})}let A=(h,l)=>{let d=a(h,l.encuadre),_=t.grupo(`conj-${h}`,d);_.userData.unidad=!0;let g=Id+.012,{Zp:f,Y0:S}=l,I=l.S,L=R(_,g,S,f,dn/2);L.scale.setScalar(I);let z=(j,re,ce)=>[g+ce*I,S+re*I,f-j*I];s(l.ancho,l.alto,.012,y.tablero,0,0,-.012,{padre:L,r:.004}),s(l.ancho,.05,.004,l.color,0,l.alto-.05,.002,{padre:L,r:.001});for(let[j,re]of[[-1,.04],[1,.04],[-1,l.alto-.08],[1,l.alto-.08]])T(L,.009,.006,n.inoxOsc,j*(l.ancho/2-.025),re,.004,{seg:10});let F=-(l.ancho/2+.09);s(.08,.08,.014,n.blanco,F,.04,-.005,{padre:L,r:.01});for(let j of[-.012,.012])T(L,.004,.003,n.negro,F+j,.08,.0035,{seg:8});s(.05,.05,.03,n.negro,F,.055,.016,{padre:L,r:.01}),l.bomba(L,z,F);let N=z(...l.entradaL),B=z(...l.salidaL),V=N[2]+l.cuello*l.escala;x(_,l.garrafaX,V,{escala:l.escala,banda:l.colorOsc,tapa:l.color,cuello:l.cuello,rombo:l.rombo});let X=.01+.59*l.escala,Z=N[2];C(_,[N,[N[0],N[1]-.1,N[2]],[N[0]+.02,N[1]-.28,N[2]],[l.garrafaX-.06,X+.12,Z],[l.garrafaX,X+.03,Z],[l.garrafaX,X-.012,Z]],l.tubo,.0065),C(d,[B,[B[0],B[1]+.12,B[2]],...l.subida,...l.ruta],l.tubo,.0065);let[se,G]=l.inyector;return o(.016,.014,n.inoxOsc,se,1.58,G,{padre:d,seg:6}),o(.005,.03,n.laton,se,1.594,G,{padre:d,seg:12}),o(.0085,.012,l.color,se,1.597,G,{padre:d,seg:12}),d};A("abrillantador",{encuadre:{frente:[1,0,0],alto:.25,lado:.5,zoom:.92,marco:"conj-abrillantador"},Zp:-.25,Y0:.9,ancho:.3,alto:.66,color:y.abri,colorOsc:y.abriOsc,tubo:y.tuboAbri,S:1.25,garrafaX:-1.72,cuello:0,escala:.95,rombo:!1,entradaL:[0,.185,.18],salidaL:[0,.395,.18],subida:[[-1.82,1.75,-.25],[-1.95,1.86,-.25],[-1.952,1.935,-.26],[-1.952,1.949,-.31],[-1.952,1.949,-1.6],[-1.948,1.949,-1.676],[-1.93,1.949,-1.7],[-1.9,1.949,-1.704]],ruta:[[-.6,1.949,-1.704],[-.53,1.949,-1.704],[-.5,1.9,-1.69],[-.5,1.78,-1.64],[-.5,1.7,-1.595],[-.5,1.612,-1.58]],inyector:[-.5,-1.58],bomba(h,l,d){s(.22,.3,.12,y.carcasa,0,.2,.062,{padre:h,r:.025,s:3}),s(.2,.05,.006,y.abri,0,.42,.125,{padre:h,r:.002}),T(h,.03,.026,n.negro,.045,.45,.123+.013),s(.006,.02,.004,n.blanco,.045-.0066,.4505+0,.151,{padre:h,r:.001,rz:.6});for(let _=0;_<5;_++){let g=(-110+_*55)*dn/180;s(.004,.008,.003,n.blanco,.045+Math.sin(g)*.043,.45+Math.cos(g)*.043-.004,.1305,{padre:h,r:.001,rz:-g})}T(h,.008,.006,y.ledV,-.07,.465,.131),T(h,.008,.006,y.ledR,-.07,.43,.131),T(h,.066,.02,n.hierro,0,.29,.122+.01),T(h,.058,.014,n.blanco,0,.29,.142+.007,{seg:28}),T(h,.036,.05,n.blanco,0,.29,.156+.025,{rb:.052,seg:28}),T(h,.036,.008,y.abri,0,.29,.206+.004,{seg:20});for(let[_,g]of[[-1,-1],[1,-1],[-1,1],[1,1]])T(h,.008,.012,n.inoxOsc,_*.043,.29+g*.043,.142+.006,{seg:6});o(.008,.026,y.abriOsc,-.035,.338,.18,{padre:h,seg:12}),o(.012,.04,n.laton,0,.195,.18,{padre:h,seg:12}),o(.005,.03,n.laton,0,.17,.18,{padre:h,seg:8}),o(.012,.04,n.laton,0,.34,.18,{padre:h,seg:12}),o(.005,.03,n.laton,0,.375,.18,{padre:h,seg:8}),C(h.parent,[[d,.07,.025],[d+.04,.03,.05],[-.14,.05,.07],[-.1,.2,.07]].map(([_,g,f])=>l(_,g,f)),n.negro,.004)}}),A("detergente",{encuadre:{frente:[1,0,0],alto:.25,lado:.5,zoom:.85,marco:"conj-detergente"},Zp:.55,Y0:.88,ancho:.36,alto:.74,color:y.det,colorOsc:y.detOsc,tubo:y.tuboDet,S:1.25,garrafaX:-1.68,cuello:-.08,escala:1.15,rombo:!0,entradaL:[-.07,.115,.07],salidaL:[.07,.6,.07],subida:[[-1.9,1.84,.46],[-1.968,1.9,.44],[-1.968,1.949,.38],[-1.968,1.949,-1.6],[-1.966,1.949,-1.692],[-1.958,1.949,-1.715],[-1.935,1.949,-1.72]],ruta:[[-.75,1.949,-1.72],[-.66,1.949,-1.72],[-.62,1.9,-1.7],[-.62,1.78,-1.64],[-.62,1.7,-1.595],[-.62,1.612,-1.58]],inyector:[-.62,-1.58],bomba(h,l,d){s(.28,.4,.14,y.carcasa,0,.17,.072,{padre:h,r:.03,s:3}),s(.25,.15,.006,y.det,0,.19,.144,{padre:h,r:.003}),s(.09,.04,.006,n.pantalla,-.06,.235,.15,{padre:h,r:.003});for(let _=0;_<3;_++)s(.012,.02,.004,n.blanco,-.085+_*.025,.245,.155,{padre:h,r:.001});T(h,.03,.03,n.negro,.07,.255,.147+.015),s(.006,.022,.004,n.blanco,.07-.007,.2575,.179,{padre:h,r:.001,rz:.6});for(let _=0;_<5;_++){let g=(-110+_*55)*dn/180;s(.004,.008,.003,n.blanco,.07+Math.sin(g)*.043,.255+Math.cos(g)*.043-.004,.1495,{padre:h,r:.001,rz:-g})}T(h,.008,.006,y.ledV,-.09,.32,.147+.003),T(h,.008,.006,y.ledR,-.06,.32,.147+.003),T(h,.088,.012,n.negro,0,.45,.142+.006,{seg:32}),T(h,.04,.03,n.inoxOsc,0,.45,.154+.015,{seg:20});for(let _=0;_<3;_++){let g=.5+_*2*dn/3;T(h,.013,.03,n.inox,Math.cos(g)*.052,.45+Math.sin(g)*.052,.154+.015,{seg:12})}m(.062,.0075,y.tuboDet,0,.45,.17,{rx:0,ry:0,arco:1.7*dn,padre:h}),T(h,.092,.05,n.vidrio,0,.45,.142+.025,{seg:32}),m(.092,.006,n.inoxOsc,0,.45,.193,{rx:0,padre:h});for(let _=0;_<4;_++){let g=dn/4+_*dn/2;T(h,.006,.01,n.inoxOsc,Math.cos(g)*.098,.45+Math.sin(g)*.098,.195,{seg:6})}o(.011,.02,n.laton,-.07,.15,.07,{padre:h,seg:12}),o(.005,.05,n.laton,-.07,.1,.07,{padre:h,seg:8}),o(.011,.02,n.laton,.07,.57,.07,{padre:h,seg:12}),o(.005,.05,n.laton,.07,.57,.07,{padre:h,seg:8}),C(h.parent,[[d,.07,.025],[d+.03,.03,.05],[-.18,.05,.07],[-.12,.17,.07]].map(([_,g,f])=>l(_,g,f)),n.negro,.004)}});{let h=R(e,Id,0,1.4,dn/2);s(.34,.045,.02,n.inoxCl,0,1.55,.01,{padre:h,r:.008});for(let g of[-.1,.1])T(h,.008,.045,n.inoxOsc,g,1.572,.04),u(.013,n.inoxOsc,g,1.572,.063,{padre:h});s(.24,.3,.012,y.marino,0,1.26,.07,{padre:h,r:.005}),s(.34,.34,.012,y.marino,0,.93,.082,{padre:h,r:.005}),s(.2,.09,.014,y.det,0,1,.095,{padre:h,r:.005});for(let g of[-.1,.1])c(.006,[g,1.56,.06],[g*.7,1.46,.07],y.marino,{padre:h});let l=R(e,Id,0,1.64,dn/2);s(.12,.03,.02,n.inoxCl,0,1.55,.01,{padre:l,r:.008}),T(l,.008,.04,n.inoxOsc,0,1.55,.04);for(let g of[-.035,.035]){s(.07,.11,.025,y.amarillo,g,1.4,.06,{padre:l,r:.012});for(let f=0;f<4;f++)s(.014,.07,.02,y.amarillo,g-.026+f*.0175,1.34,.06,{padre:l,r:.006});s(.07,.04,.03,y.amarillo,g,1.495,.06,{padre:l,r:.012})}let d=1.55,_=-.7;o(.17,.3,y.amarillo,d,.01,_,{rb:.14,seg:24}),o(.158,.008,n.vidrio,d,.3,_,{seg:24}),s(.22,.1,.3,n.gris,d,.31,_,{r:.03}),c(.013,[d+.08,.4,_],[d+.2,1.45,_-.05],y.det,{padre:e});for(let g=0;g<10;g++){let f=g/10*dn*2;c(.011,[d+.08,.41,_],[d+.08+Math.cos(f)*.06,.32,_+Math.sin(f)*.06],n.blanco,{seg:6})}for(let g=0;g<4;g++)p(.75,.01+g*.14,-.35+g%2*.01);o(.18,.62,n.gris,1.7,.01,.55,{rb:.15,seg:24}),o(.19,.04,n.negro,1.7,.63,.55,{seg:24}),s(.14,.02,.07,n.negro,1.7,.01,.73,{r:.008})}let b=h=>{h.updateMatrixWorld(!0);let l=h.matrixWorld.clone().invert(),d=new Map,_=[],g=f=>{for(let S of f.children)if(!S.userData.unidad&&!S.isInstancedMesh)if(S.isMesh){if(_.push(S),!S.visible)continue;let I=S.geometry.clone();for(let z of Object.keys(I.attributes))["position","normal","uv"].includes(z)||I.deleteAttribute(z);I.clearGroups(),I.applyMatrix4(new Le().multiplyMatrices(l,S.matrixWorld));let L=`${S.material.uuid}|${!!I.index}|${S.castShadow}|${S.receiveShadow}`;d.has(L)||d.set(L,{mat:S.material,cast:S.castShadow,recibe:S.receiveShadow,lista:[]}),d.get(L).lista.push(I)}else g(S)};g(h);for(let f of _)f.parent.remove(f);for(let{mat:f,cast:S,recibe:I,lista:L}of d.values()){let z=new $e(vi(L),f);z.castShadow=S,z.receiveShadow=I,h.add(z)}},P=[];return e.traverse(h=>{h.userData.unidad&&P.push(h)}),P.reverse().forEach(b),b(e),{raiz:e,puntos:r}}var Zm={crear:x3,mira:[-.25,.9,-.45],az:.62,el:.5,radio:2.85};var Dd={hosteleria:{crear:Nm,mira:[-.15,.85,-.45],az:.62,el:.5,radio:3.9},"automocion-y-transporte":Bm,industria:Vm,agroalimentaria:Hm,lavanderia:Gm,higiene:Wm,construccion:jm,"tratamiento-de-aguas":Ym,"sistemas-de-dosificacion":Zm};var _3=`
  uniform sampler2D tId;
  uniform vec2 px;
  uniform float activo, k, pasivo, ola, wP, wA, rH;
  uniform vec3 cP, cA, cF;
  varying vec2 vUv;
  float idEn(vec2 o) { return floor(texture2D(tId, vUv + o * px).r * 255.0 + 0.5); }
  vec4 sobre(vec4 d, vec4 s) { float a = s.a + d.a * (1.0 - s.a); return vec4((s.rgb * s.a + d.rgb * d.a * (1.0 - s.a)) / max(a, 1e-4), a); }
  void main() {
    float c = idEn(vec2(0.0));
    bool hay = activo > 0.0;
    bool esA = hay && c == activo;
    float bP = 0.0, bA = 0.0, h = 0.0;
    for (int i = 0; i < 8; i++) {
      float an = float(i) * 0.7853982;
      vec2 d = vec2(cos(an), sin(an));
      if (c > 0.0 && idEn(d * wP) != c) bP += 1.0;            // borde de cada objeto, por dentro
      if (hay && ((idEn(d * wA) == activo) != esA)) bA += 1.0; // borde del marcado, a los dos lados
    }
    if (hay && !esA) {                                         // halo: cu\xE1nto del marcado hay alrededor
      for (int i = 0; i < 12; i++) {
        float an = float(i) * 0.5235988 + 0.26;
        vec2 d = vec2(cos(an), sin(an));
        if (idEn(d * rH) == activo) h += 1.0;
        if (idEn(d * rH * 0.5) == activo) h += 1.0;
      }
      h /= 24.0;
    }
    // al entrar se iluminan todos a la vez (cada uno 0,08 s despu\xE9s del anterior, en el orden del carrusel):
    // suben en 0,5 s, se quedan encendidos ~1,2 s y se apagan en 0,8 s. \xABola\xBB es el tiempo en segundos.
    float t = ola - (c - 1.0) * 0.08;
    float e = (c > 0.0 && ola >= 0.0) ? smoothstep(0.0, 0.5, t) * (1.0 - smoothstep(1.7, 2.5, t)) : 0.0;
    vec4 o = vec4(0.0);
    if (esA) o = sobre(o, vec4(cF, 0.17 * k));
    if (e > 0.0) o = sobre(o, vec4(cF, 0.32 * e));
    o = sobre(o, vec4(cF, h * 0.85 * k));
    if (!esA) o = sobre(o, vec4(cP, clamp(bP / 3.0, 0.0, 1.0) * min(1.0, pasivo + e)));
    o = sobre(o, vec4(cA, clamp(bA / 3.0, 0.0, 1.0) * k));
    gl_FragColor = o;
  }`,sh=class extends Yn{constructor(e,t,i,r){super(),this.needsSwap=!1,this.scene=e,this.camera=t,this.rt=new qt(1,1,{minFilter:kt,magFilter:kt,generateMipmaps:!1});let a=new Map,s=o=>(a.has(o)||a.set(o,new ws({color:new Be().setRGB(o/255,0,0,Es)})),a.get(o));this.mats=a,this.mallas=[],e.traverse(o=>{if(!o.isMesh)return;let c=i[o.userData.punto]||0,u=[].concat(o.material).some(m=>m.transparent);this.mallas.push({o,m:c||!u?s(c):null,orig:null})}),this.quad=new or(new Ht({uniforms:{tId:{value:this.rt.texture},px:{value:new ye(1,1)},activo:{value:0},k:{value:0},pasivo:{value:0},ola:{value:-1},wP:{value:1},wA:{value:1.3},rH:{value:8},cP:{value:new Be(r.pasivo)},cA:{value:new Be(r.linea)},cF:{value:new Be(r.relleno)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:_3,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qr})),this._c=new Be}poner({activo:e,k:t,pasivo:i,ola:r=-1}){let a=this.quad.material.uniforms;a.activo.value=e,a.k.value=t,a.pasivo.value=i,a.ola.value=r}anchos(e){let t=this.quad.material.uniforms;t.wP.value=Math.max(1,1.25*e),t.wA.value=1.3*e,t.rH.value=10*e}setSize(e,t){this.rt.setSize(e,t),this.quad.material.uniforms.px.value.set(1/e,1/t)}render(e,t,i){let r=this.quad.material.uniforms;if(r.pasivo.value<=0&&r.ola.value<0&&(r.activo.value===0||r.k.value<=0))return;let a=[];for(let c of this.mallas)c.orig=c.o.material,c.m?c.o.material=c.m:c.o.visible&&(c.o.visible=!1,a.push(c.o));e.getClearColor(this._c);let s=e.getClearAlpha(),o=e.autoClear;e.setClearColor(0,0),e.setRenderTarget(this.rt),e.clear(),e.render(this.scene,this.camera);for(let c of this.mallas)c.o.material=c.orig;for(let c of a)c.visible=!0;e.setClearColor(this._c,s),e.autoClear=!1,e.setRenderTarget(this.renderToScreen?null:i),this.quad.render(e),e.autoClear=o}dispose(){this.rt.dispose(),this.mats.forEach(e=>e.dispose()),this.quad.material.dispose(),this.quad.dispose()}};var Jm=window.GUICA_ESPACIO||{},v3={pasivo:"#3FA9E0",linea:"#0B4F7C",relleno:"#1D93D1"},$m={solo:1,conMarca:.75},Ni=matchMedia("(prefers-reduced-motion: reduce)").matches;nn.ticker.lagSmoothing(0);var Ui=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),zd=n=>{let e=n.replace(/^(el|la|los|las)\s+/i,"");return e.charAt(0).toUpperCase()+e.slice(1)},ah=n=>String(n).padStart(2,"0"),Or=(n,e="")=>`<svg class="ico ${e}" aria-hidden="true"><use href="#${n}"/></svg>`,y3='<svg viewBox="0 0 40 56" aria-hidden="true"><path d="M8 14h24a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z M10 14V9h8v5 M22 14v-3a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',b3=.84,Ld=.4,S3=28;function E3(){try{let n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}var P0=null;function T3(n,e){let t=Dd[n],i=Jm[n],r=document.createElement("div");r.className="esp",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label",`${i.nombre}: ${i.lugar.toLowerCase()} en 3D`),r.setAttribute("data-lenis-prevent",""),r.dataset.revPagina=`Recorrido 3D \xB7 ${i.nombre}`,r.dataset.revUrl=`espacio=${n}`;let a=i.puntos;r.innerHTML=`
    <div class="esp__tapa" aria-hidden="true"></div>
    <div class="esp__lienzo"></div>
    <div class="esp__marca" aria-hidden="true">
      <span class="esp__marca-linea"></span>
      <span class="esp__marca-pos"><button type="button" class="esp__marca-etq" tabindex="-1"><span class="esp__marca-n"></span><span class="esp__marca-t"></span>${Or("i-arrow","ico--sm esp__marca-ir")}</button></span>
    </div>
    <header class="esp__cab">
      <div class="esp__tit"><p class="esp__kicker">${Ui(i.nombre)} <i>\xB7</i> recorrido\xA03D</p><h2>${Ui(i.lugar)}</h2></div>
      <button class="esp__cerrar" type="button" aria-label="Salir del recorrido">${Or("i-close")}</button>
    </header>
    <div class="esp__guia">
      <p class="esp__pista" aria-live="polite"><span class="esp__pista-r">Todo lo que se ilumina se puede tocar.</span><span class="esp__pista-m">Desliza para ir de una zona a otra y toca la que quieras ver.</span><span class="esp__pista-e">Toca lo que se ilumina y te ense\xF1amos qu\xE9 usar.</span></p>
      <nav class="esp__zonas" aria-label="Zonas de ${Ui(i.lugar.toLowerCase())}">
        ${a.map((he,we)=>{let Re=he.productos.length;return`<button type="button" class="esp__zona" data-id="${he.id}"><span class="esp__num">${ah(we+1)}</span><span class="esp__zn">${Ui(zd(he.titulo))}</span><span class="esp__zc"><b>${Re}</b><span class="esp__zp"> ${Re===1?"producto":"productos"}</span></span>${Or("i-arrow","ico--sm esp__zi")}</button>`}).join("")}
      </nav>
      <a class="esp__todos" href="catalogo/${n}.html">Ver los ${i.total} productos de ${Ui(i.nombre.toLowerCase())} ${Or("i-arrow","ico--sm")}</a>
    </div>
    <aside class="esp__panel" aria-label="Productos" tabindex="-1">
      <div class="esp__panel-cab">
        <button class="esp__volver" type="button">${Or("i-arrow","ico--sm esp__izq")}<span>${Ui(zd(i.lugar.replace(/^una?\s+/i,"La ")))}</span></button>
        <span class="esp__paso"><b data-paso>01</b> / ${ah(a.length)}</span>
        <button class="esp__flecha" type="button" data-ant aria-label="Anterior">${Or("i-arrow","ico--sm esp__izq")}</button>
        <button class="esp__flecha" type="button" data-sig aria-label="Siguiente">${Or("i-arrow","ico--sm")}</button>
      </div>
      <div class="esp__panel-cuerpo" data-lenis-prevent></div>
    </aside>`,document.body.appendChild(r);let s=he=>r.querySelector(he),o=s(".esp__lienzo"),c=s(".esp__panel"),u=s(".esp__panel-cuerpo"),m=s(".esp__zonas"),E=[...m.children],y=e.carga||null,T=y||s(".esp__tapa");y&&s(".esp__tapa").remove();let v=()=>{y?y.remove():nn.set(T,{autoAlpha:0})},R=new Pl({antialias:!0,alpha:!0,powerPreference:"high-performance"});R.setClearColor(0,0),R.toneMapping=Ps,R.toneMappingExposure=1.02,R.shadowMap.enabled=!0,R.shadowMap.type=Fc,R.shadowMap.autoUpdate=!1,R.shadowMap.needsUpdate=!0,o.appendChild(R.domElement);let C=new Ts,M=new Da(R);C.environment=M.fromScene(new zl,.04).texture,C.environmentIntensity=.7;let D=new An(28,1,.1,100);C.add(new Fo("#F4F8FF","#C9C2B6",.75));let O=new Ms("#FFF1DE",2.3);O.position.set(6,10,7),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),Object.assign(O.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:30}),O.shadow.bias=-4e-4,O.shadow.normalBias=.02,O.shadow.radius=3,C.add(O);let p=new Ms("#DDE9FF",.55);p.position.set(-5,4,8),C.add(p);let x=new Ms("#FFFFFF",.35);x.position.set(2,6,-8),C.add(x);let w=Fm(),{raiz:A,puntos:b}=t.crear(w);C.add(A);let P=new $e(new Cs(30,30),new Do({color:"#0B3A5C",opacity:.16}));P.rotation.x=-Math.PI/2,P.position.y=-.252,P.receiveShadow=!0,C.add(P);let h=a.map((he,we)=>{let Re=b[he.id],it=new Ti().setFromObject(Re.marco&&Re.grupo.getObjectByName(Re.marco)||Re.grupo),k=it.getCenter(new W),Y=it.getSize(new W),ae=new W(k.x,it.max.y,k.z);return Re.grupo.traverse(ee=>{ee.isMesh&&(ee.userData.punto=he.id)}),{...he,i:we,...Re,caja:it,centro:k,tam:Y,ancla:ae}}),l=Object.fromEntries(h.map(he=>[he.id,he])),d=new Fl(R,new qt(1,1,{type:yn,samples:4}));d.addPass(new Nl(C,D));let _=null;window.innerWidth>=900&&!Ni&&(_=new d0(C,D,1,1),_.blendIntensity=.85,_.updateGtaoMaterial({radius:.35,distanceExponent:1.4,thickness:1,scale:1,samples:16}),_.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:16}),d.addPass(_));let f=new sh(C,D,Object.fromEntries(h.map(he=>[he.id,he.i+1])),v3);d.addPass(f);let S={k:0},I={v:-1},L=null,z=()=>{if(!r.classList.contains("is-revela"))return;let he=r.querySelector(".esp__pista");if(Ni){r.classList.remove("is-revela");return}nn.to(he,{autoAlpha:0,duration:.25,onComplete:()=>{r.classList.remove("is-revela"),nn.to(he,{autoAlpha:1,duration:.4})}})},F=()=>{L?.kill(),L=null,I.v=-1,r.classList.remove("is-revela")},N=0;d.addPass(new kl);let B={mx:t.mira[0],my:t.mira[1],mz:t.mira[2],az:t.az,el:t.el,d:12,off:0},V={az:0,el:0,taz:0,tel:0},X="entrando",Z=null,se=null,G=null,j=1,re=1,ce=80,J=0,ge=2,Oe=!1,le=()=>j<760,Q=()=>Math.min(460,j*.42),oe=()=>Math.round(re*.56),te=(he=j,we=re)=>{let Re=zs.degToRad(D.fov),it=2*Math.atan(Math.tan(Re/2)*(he/we));return Math.min(Re*(we/re),it)},ue=()=>t.radio*(le()?1.04:1)/Math.tan(te()/2),ve=()=>le()?t.el+.2:t.el,Ae=he=>{let Re=new W(...he.frente||[0,0,1]).normalize().clone().addScaledVector(new W(Math.sin(t.az),0,Math.cos(t.az)),he.lado??.2);Re.y=0,Re.normalize(),Re.y=he.alto??.4,Re.normalize();let it=le()?j:j-Q(),k=le()?re-oe():re,ae=(Math.max(he.tam.x,he.tam.y*.9,he.tam.z)*.5+.12)/Math.tan(te(it,k)/2)*(he.zoom??1)*1.35,ee=he.centro.clone().add(new W(...he.mira||[0,0,0]));return{mx:ee.x,my:ee.y,mz:ee.z,az:Math.atan2(Re.x,Re.z),el:Math.asin(Re.y),d:ae}},Ue=()=>{let he={mx:t.mira[0],my:t.mira[1],mz:t.mira[2],az:t.az,el:ve(),d:ue()},we=le()&&l[G];return we?{...he,mx:he.mx+(we.centro.x-he.mx)*Ld,my:he.my+(we.centro.y-he.my)*Ld*.5,mz:he.mz+(we.centro.z-he.mz)*Ld,d:he.d*b3}:he},Je=()=>{let he=B.az+V.az,we=zs.clamp(B.el+V.el,.12,1.25);D.position.set(B.mx+Math.sin(he)*Math.cos(we)*B.d,B.my+Math.sin(we)*B.d,B.mz+Math.cos(he)*Math.cos(we)*B.d),D.lookAt(B.mx,B.my,B.mz),D.updateMatrixWorld();let Re=le()?0:-140*(1-B.off)+Q()/2*B.off,it=le()?re*.1*(1-B.off)+oe()/2*B.off:0;D.setViewOffset(j,re,Re,it,j,re)},q=s(".esp__marca"),lt=s(".esp__marca-pos"),et=s(".esp__marca-etq"),H=s(".esp__marca-linea"),U=null,K=0,ne=0,de=()=>le()?30:40,_e=new W,Se=()=>{if(!U)return;_e.copy(l[U].ancla).project(D);let he=(_e.x*.5+.5)*j,we=(-_e.y*.5+.5)*re,Re=de(),it=we-Re-ne<ce,k=zs.clamp(he-K/2,12,j-12-K)-he;q.style.transform=`translate3d(${he.toFixed(1)}px, ${we.toFixed(1)}px, 0)`,lt.style.transform=`translate3d(${k.toFixed(1)}px, ${it?Re:-(Re+ne)}px, 0)`,q.classList.toggle("is-abajo",it)},fe=he=>{if(he===U)return;if(U=he,J++,nn.killTweensOf([S,H,et]),!he){S.k=0,q.classList.remove("is-on");return}let we=l[he];if(s(".esp__marca-n").textContent=ah(we.i+1),s(".esp__marca-t").textContent=zd(we.titulo),et.setAttribute("aria-label",`Ver los productos para ${we.titulo.toLowerCase()}`),q.classList.add("is-on"),K=et.offsetWidth,ne=et.offsetHeight,Se(),Ni){S.k=1;return}nn.fromTo(S,{k:.2},{k:1,duration:.6,ease:"power2.out"}),nn.fromTo(H,{scaleY:0},{scaleY:1,duration:.45,ease:"expo.out"}),nn.fromTo(et,{autoAlpha:0,y:q.classList.contains("is-abajo")?-6:6},{autoAlpha:1,y:0,duration:.45,ease:"expo.out",delay:.1})},pe=()=>fe(X==="foco"?se:se||G),Te=()=>{j=r.clientWidth,re=r.clientHeight,R.setPixelRatio(Math.min(window.devicePixelRatio||1,j<760?1.6:1.75)),R.setSize(j,re,!1),d.setPixelRatio(R.getPixelRatio()),d.setSize(j,re),f.anchos(R.getPixelRatio()),D.aspect=j/re,D.updateProjectionMatrix(),ce=s(".esp__tit").getBoundingClientRect().bottom+10,q.style.setProperty("--l",`${de()}px`),U&&(K=et.offsetWidth,ne=et.offsetHeight),X==="vista"&&Object.assign(B,Ue()),X==="foco"&&Z&&Object.assign(B,Ae(Z),{off:1}),J++,ge=2},je="assets/img/productos/sm/",Ee=he=>{s("[data-paso]").textContent=ah(he.i+1);let we=he.productos.length;u.innerHTML=`
      <p class="esp__cuantos"><b>${we}</b> ${we===1?"producto":"productos"} para ${Ui(he.titulo.toLowerCase())}</p>
      <h3 class="esp__titulo">${Ui(he.titulo)}</h3>
      <p class="esp__frase">${Ui(he.frase)}</p>
      <ul class="esp__prods">
        ${he.productos.map(Re=>`<li><a class="esp__prod" href="producto/${Re.s}.html">
          <span class="esp__ph">${Re.i?`<img src="${je}${Re.i}" alt="" loading="lazy" decoding="async">`:y3}</span>
          <span class="esp__pt"><b>${Ui(Re.n)}</b>${Re.r?`<small>${Ui(Re.r)}</small>`:""}${Re.f.length?`<span class="esp__fmts">${Re.f.map(it=>`<i>${Ui(it)}</i>`).join("")}</span>`:""}</span>
          ${Or("i-arrow","ico--sm esp__ir")}</a></li>`).join("")}
      </ul>
      <a class="btn btn--primary esp__cat" href="catalogo/${he.sector||n}.html${he.uso?`?uso=${encodeURIComponent(he.uso)}`:""}">Verlos en el cat\xE1logo ${Or("i-arrow","ico--sm")}</a>
      <button class="esp__asesor" type="button" data-asesor>\xBFDudas con la dosis? Te asesoramos</button>`,u.scrollTop=0,Ni||nn.fromTo(u.children,{y:14,autoAlpha:0},{y:0,autoAlpha:1,duration:.55,stagger:.04,ease:"expo.out",delay:.1})},be=null,Ne=0,Ye=0,Ke=(he,we=!0)=>{let Re=E.find(it=>it.dataset.id===he);!Re||!le()||(be=he,clearTimeout(Ne),Ne=setTimeout(()=>{be=null},700),m.scrollTo({left:Re.offsetLeft-(m.clientWidth-Re.offsetWidth)/2,behavior:we&&!Ni?"smooth":"auto"}))};m.addEventListener("scroll",()=>{Ye||!le()||(Ye=requestAnimationFrame(()=>{if(Ye=0,be){clearTimeout(Ne),Ne=setTimeout(()=>{be=null},160);return}if(X!=="vista")return;let he=m.scrollLeft+m.clientWidth/2,we=null,Re=1/0;for(let it of E){let k=Math.abs(it.offsetLeft+it.offsetWidth/2-he);k<Re&&(Re=k,we=it)}we&&De(we.dataset.id)}))},{passive:!0});let $=Ni?0:1.25,Ce=null,me=null,Me=(he,we=$,Re="expo.inOut")=>{me?.kill(),Ce?.kill(),Ce=nn.to(B,{...he,duration:we,ease:Re}),V.taz=0,V.tel=0},De=(he,{desplazar:we=!1}={})=>{if(!l[he])return;let Re=he!==G;G=he,E.forEach(it=>it.classList.toggle("is-activa",it.dataset.id===he)),we&&Ke(he),X==="vista"&&(pe(),Re&&le()&&Me({...Ue(),off:0},Ni?0:1,"power2.out"))},xe=he=>{let we=l[he];if(!we)return;let Re=X==="foco";X="foco",Z=we,se=null,De(he),Ke(he,!1),r.classList.add("is-foco"),r.dataset.revSeccion=we.titulo,r.dataset.revUrl=`espacio=${n}&punto=${we.id}`,F(),N=0,J++,fe(null),Ee(we),Me({...Ae(we),off:1},Re?$*.85:$),Re||nn.fromTo(c,le()?{yPercent:104,xPercent:0}:{xPercent:104,yPercent:0},{xPercent:0,yPercent:0,duration:Ni?0:.8,ease:"expo.out",delay:Ni?0:.15}),E.forEach(it=>it.classList.toggle("is-on",it.dataset.id===he)),setTimeout(()=>c.focus({preventScroll:!0}),60)},Ze=()=>{X==="foco"&&(X="vista",Z=null,r.classList.remove("is-foco"),r.dataset.revSeccion="",r.dataset.revUrl=`espacio=${n}`,N=1,J++,nn.to(c,{...le()?{yPercent:104}:{xPercent:104},duration:Ni?0:.5,ease:"power3.in"}),Me({...Ue(),off:0}),E.forEach(he=>he.classList.remove("is-on")),pe())},He=he=>{Z&&xe(h[(Z.i+he+h.length)%h.length].id)},Ct=new Vo,yt=new ye,Qt=R.domElement,Kn=he=>{let we=Qt.getBoundingClientRect();return yt.set((he.clientX-we.left)/we.width*2-1,-((he.clientY-we.top)/we.height)*2+1),Ct.setFromCamera(yt,D),Ct.intersectObject(A,!0).find(it=>it.object.visible)?.object.userData.punto||null},Za=new W,oh=he=>{let we=Qt.getBoundingClientRect(),Re=he.clientX-we.left,it=he.clientY-we.top,k=null,Y=S3;for(let ae of h){let ee=1/0,ie=1/0,Pe=-1/0,Fe=-1/0;for(let We=0;We<8;We++){Za.set(We&1?ae.caja.max.x:ae.caja.min.x,We&2?ae.caja.max.y:ae.caja.min.y,We&4?ae.caja.max.z:ae.caja.min.z).project(D);let ct=(Za.x*.5+.5)*j,ht=(-Za.y*.5+.5)*re;ee=Math.min(ee,ct),Pe=Math.max(Pe,ct),ie=Math.min(ie,ht),Fe=Math.max(Fe,ht)}let Ie=Math.hypot(Math.max(ee-Re,0,Re-Pe),Math.max(ie-it,0,it-Fe)),Ge=Ie>0?Ie:-100+Math.hypot(Re-(ee+Pe)/2,it-(ie+Fe)/2)/10;Ge<Y&&(Y=Ge,k=ae.id)}return k},ci=null,mr=!1;Qt.style.touchAction="none",Qt.addEventListener("pointerdown",he=>{ci={x:he.clientX,y:he.clientY,az:V.taz,el:V.tel},mr=!1,Qt.setPointerCapture(he.pointerId)}),Qt.addEventListener("pointermove",he=>{if(ci){let it=he.clientX-ci.x,k=he.clientY-ci.y;if(!mr&&Math.hypot(it,k)>7&&(mr=!0),mr&&X!=="entrando"){let Y=X==="foco"?.25:.5;V.taz=zs.clamp(ci.az-it*.004,-Y,Y),V.tel=zs.clamp(ci.el+k*.003,-.25,.35)}return}if(he.pointerType!=="mouse"||X==="entrando")return;let we=Kn(he),Re=we&&(!Z||Z.id!==we)?we:null;Re!==se&&(se=Re,pe(),Qt.style.cursor=se?"pointer":"grab")});let ch=he=>{if(!ci)return;let we=mr;if(ci=null,we||X==="entrando")return;let Re=he.pointerType==="mouse";if(X==="foco"){let k=Kn(he);return k?xe(k):Ze()}let it=Kn(he)||(Re?null:oh(he));it&&(Re||it===G?xe(it):De(it,{desplazar:!0}))};Qt.addEventListener("pointerup",ch),Qt.addEventListener("pointercancel",()=>{ci=null}),Qt.addEventListener("pointerleave",()=>{!ci&&se&&(se=null,pe())}),et.addEventListener("click",()=>{U&&X==="vista"&&xe(U)}),E.forEach(he=>{he.addEventListener("click",()=>xe(he.dataset.id));let we=()=>{X==="vista"&&!le()&&(se=he.dataset.id,pe())},Re=()=>{X==="vista"&&!le()&&(se=null,pe())};he.addEventListener("mouseenter",we),he.addEventListener("mouseleave",Re),he.addEventListener("focus",we),he.addEventListener("blur",Re)}),s(".esp__volver").addEventListener("click",Ze),s("[data-ant]").addEventListener("click",()=>He(-1)),s("[data-sig]").addEventListener("click",()=>He(1)),s(".esp__cerrar").addEventListener("click",()=>Nr()),u.addEventListener("click",he=>{he.target.closest("[data-asesor]")&&Nr(()=>e.onAsesor?.(i.nombre))});let $a=he=>{he.key==="Escape"&&(he.preventDefault(),X==="foco"?Ze():Nr()),X==="foco"&&he.key==="ArrowRight"&&He(1),X==="foco"&&he.key==="ArrowLeft"&&He(-1)};document.addEventListener("keydown",$a);let Ja=()=>Te();window.addEventListener("resize",Ja);let Zi=0,qs=[],Ka=0,I0=()=>[B.mx,B.my,B.mz,B.az,B.el,B.d,B.off,V.az,V.el,S.k,I.v,J],Fr=()=>{Zi=requestAnimationFrame(Fr),V.az+=(V.taz-V.az)*.08,V.el+=(V.tel-V.el)*.08,Math.abs(V.taz-V.az)<1e-4&&(V.az=V.taz),Math.abs(V.tel-V.el)<1e-4&&(V.el=V.tel);let he=I0(),we=ge>0;for(let Re=0;!we&&Re<he.length;Re++)we=Math.abs(he[Re]-qs[Re])>1e-6;we&&(ge>0&&ge--,qs=he,f.poner({activo:U?l[U].i+1:0,k:S.k,pasivo:N*(U?$m.conMarca:$m.solo),ola:I.v}),Je(),Se(),d.render(),Ka++)},Qa=he=>{if(!he)return"inset(0% 0% 0% 0% round 0px)";let we=he.getBoundingClientRect(),Re=window.innerWidth,it=window.innerHeight;return`inset(${Math.max(0,we.top)}px ${Math.max(0,Re-we.right)}px ${Math.max(0,it-we.bottom)}px ${Math.max(0,we.left)}px round 6px)`},js=()=>{if(!R.compileAsync)return Promise.resolve();R.setRenderTarget(d.readBuffer);let he=R.compileAsync(C,D).catch(()=>{});return R.setRenderTarget(null),Promise.race([he,new Promise(we=>setTimeout(we,1500))])},D0=()=>{window.innerWidth<760&&(G=h[0].id),Te(),E.forEach(Re=>Re.classList.toggle("is-activa",Re.dataset.id===G));let he=Ue();if(Object.assign(B,he,{az:t.az+.7,el:1.05,d:he.d*1.45}),N=1,J++,Ni){Object.assign(B,he),nn.set(r,{clipPath:"none"}),v(),r.classList.add("is-listo"),X="vista",Fr(),pe();return}let we=performance.now();r.classList.add("is-revela"),y||nn.fromTo(r,{clipPath:Qa(e.desde)},{clipPath:"inset(0px 0px 0px 0px round 0px)",duration:.75,ease:"expo.inOut",clearProps:"clipPath"}),js().then(()=>{if(Oe)return;Fr();let Re=(performance.now()-we)/1e3;me=nn.to(B,{...he,duration:2.1,ease:"expo.out"}),nn.timeline({delay:Math.max(0,(y?.9:.45)-Re)}).add(me,0).to(T,{autoAlpha:0,duration:.6,ease:"power2.out",onComplete:()=>y?.remove()},.1).add(()=>{r.classList.add("is-listo")},.75).add(()=>{X==="entrando"&&(X="vista",l[e.punto]&&xe(e.punto))},1.15).add(()=>{X==="vista"&&(L=nn.fromTo(I,{v:0},{v:3.4,duration:3.4,ease:"none",onComplete:()=>{I.v=-1,L=null}}))},1.2).add(()=>{X==="vista"&&(z(),pe())},3.8)})},Nr=he=>{if(!P0||Oe)return;P0=null,Oe=!0,document.removeEventListener("keydown",$a),window.removeEventListener("resize",Ja),Ce?.kill(),me?.kill(),clearTimeout(Ne);let we=()=>{cancelAnimationFrame(Zi),d.dispose?.(),f.dispose(),R.dispose(),M.dispose(),r.remove(),e.onCerrar?.(),he?.()};if(y?.isConnected&&nn.to(y,{autoAlpha:0,duration:.25,onComplete:()=>y.remove()}),Ni)return we();nn.timeline({onComplete:we}).fromTo(r,{clipPath:"inset(0px 0px 0px 0px round 0px)"},{clipPath:Qa(e.desde),duration:.6,ease:"expo.inOut"},0).to(r,{autoAlpha:0,duration:.3,ease:"power1.in"},.35)};nn.set(c,window.innerWidth<760?{yPercent:104}:{xPercent:104}),D0(),setTimeout(()=>s(".esp__cerrar").focus({preventScroll:!0}),80);let lh=()=>{Je(),d.render();let he=R.getContext(),we=he.drawingBufferWidth,Re=he.drawingBufferHeight,it=new Uint8Array(we*Re*4);return he.readPixels(0,0,we,Re,he.RGBA,he.UNSIGNED_BYTE,it),{w:we,h:Re,px:it}};return window.__espacio={enfocar:xe,volver:Ze,cerrar:Nr,activar:De,cam:B,camera:D,renderer:R,escena:C,lista:h,cuadros:()=>Ka,ola:he=>{I.v=he},fotograma:lh},{cerrar:Nr,enfocar:xe}}window.GuicaEspacio={hay:n=>!!Dd[n]&&!!Jm[n]&&E3(),abrir(n,e={}){return P0||!this.hay(n)?!1:(P0=T3(n,e),!0)},cerrar:()=>P0?.cerrar()};window.dispatchEvent(new Event("guica-espacio"));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
