(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="148",_s={ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wd=0,Cc=1,Xd=2,Yu=1,ju=2,Pr=3,Di=0,Mn=1,Kt=2,ao=3,Ci=0,Gs=1,Ut=2,Pc=3,Lc=4,qd=5,Ns=100,Yd=101,jd=102,Rc=103,Ic=104,Kd=200,Zd=201,Jd=202,$d=203,Ku=204,Zu=205,Qd=206,ep=207,tp=208,np=209,ip=210,sp=0,rp=1,op=2,hl=3,ap=4,lp=5,cp=6,hp=7,Ju=0,up=1,fp=2,pi=0,dp=1,pp=2,mp=3,$u=4,gp=5,Qu=300,Ks=301,Zs=302,ul=303,fl=304,sa=306,Oi=1e3,on=1001,qo=1002,zt=1003,dl=1004,Bo=1005,Lt=1006,ef=1007,Jn=1008,is=1009,_p=1010,xp=1011,tf=1012,vp=1013,ji=1014,wi=1015,Ur=1016,yp=1017,Mp=1018,Vs=1020,bp=1021,Sp=1022,_n=1023,wp=1024,Tp=1025,Ji=1026,Js=1027,Ep=1028,Ap=1029,Cp=1030,Pp=1031,Lp=1033,pa=33776,ma=33777,ga=33778,_a=33779,Dc=35840,Oc=35841,Nc=35842,Fc=35843,Rp=36196,kc=37492,zc=37496,Bc=37808,Uc=37809,Gc=37810,Vc=37811,Hc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,jc=37817,Kc=37818,Zc=37819,Jc=37820,$c=37821,Qc=36492,Gr=2300,$s=2301,xa=2302,eh=2400,th=2401,nh=2402,Ip=2500,Dp=1,nf=2,ss=3e3,st=3001,Op=3200,Np=3201,sf=0,Fp=1,mn="srgb",Vr="srgb-linear",va=7680,kp=519,pl=35044,ih="300 es",ml=1035;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sh=1234567;const Dr=Math.PI/180,Hr=180/Math.PI;function Nn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[a&255]+qt[a>>8&255]+qt[a>>16&255]+qt[a>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Bt(a,e,t){return Math.max(e,Math.min(t,a))}function Vl(a,e){return(a%e+e)%e}function zp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Bp(a,e,t){return a!==e?(t-a)/(e-a):0}function Or(a,e,t){return(1-t)*a+t*e}function Up(a,e,t,n){return Or(a,e,1-Math.exp(-t*n))}function Gp(a,e=1){return e-Math.abs(Vl(a,e*2)-e)}function Vp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Hp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Wp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Xp(a,e){return a+Math.random()*(e-a)}function qp(a){return a*(.5-Math.random())}function Yp(a){a!==void 0&&(sh=a);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(a){return a*Dr}function Kp(a){return a*Hr}function gl(a){return(a&a-1)===0&&a!==0}function rf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Yo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Zp(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),f=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*u,l*f,o*c);break;case"YZY":a.set(l*f,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*f,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ht(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var lt=Object.freeze({__proto__:null,DEG2RAD:Dr,RAD2DEG:Hr,generateUUID:Nn,clamp:Bt,euclideanModulo:Vl,mapLinear:zp,inverseLerp:Bp,lerp:Or,damp:Up,pingpong:Gp,smoothstep:Vp,smootherstep:Hp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:jp,radToDeg:Kp,isPowerOfTwo:gl,ceilPowerOfTwo:rf,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:Zp,normalize:ht,denormalize:fi});class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],b=i[1],x=i[4],v=i[7],M=i[2],T=i[5],C=i[8];return s[0]=r*p+o*b+l*M,s[3]=r*m+o*x+l*T,s[6]=r*_+o*v+l*C,s[1]=c*p+h*b+u*M,s[4]=c*m+h*x+u*T,s[7]=c*_+h*v+u*C,s[2]=f*p+d*b+g*M,s[5]=f*m+d*x+g*T,s[8]=f*_+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,f=o*l-h*s,d=c*s-r*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(o*n-i*r)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new yn;function of(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Wr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function $i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Uo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Ma={[mn]:{[Vr]:$i},[Vr]:{[mn]:Uo}},Qt={legacyMode:!0,get workingColorSpace(){return Vr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Ma[e]&&Ma[e][t]!==void 0){const n=Ma[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={r:0,g:0,b:0},Un={h:0,s:0,l:0},lo={h:0,s:0,l:0};function ba(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function co(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=Vl(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ba(r,s,e+1/3),this.g=ba(r,s,e),this.b=ba(r,s,e-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Qt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Qt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Qt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Qt.fromWorkingColorSpace(co(this,Dt),e),Bt(Dt.r*255,0,255)<<16^Bt(Dt.g*255,0,255)<<8^Bt(Dt.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.fromWorkingColorSpace(co(this,Dt),t);const n=Dt.r,i=Dt.g,s=Dt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(co(this,Dt),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=mn){return Qt.fromWorkingColorSpace(co(this,Dt),e),e!==mn?`color(${e} ${Dt.r} ${Dt.g} ${Dt.b})`:`rgb(${Dt.r*255|0},${Dt.g*255|0},${Dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Un),Un.h+=e,Un.s+=t,Un.l+=n,this.setHSL(Un.h,Un.s,Un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(lo);const n=Or(Un.h,lo.h,t),i=Or(Un.s,lo.s,t),s=Or(Un.l,lo.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=af;let vs;class lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Wr("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=$i(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cf{constructor(e=null){this.isSource=!0,this.uuid=Nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Sa(i[r].image)):s.push(Sa(i[r]))}else s=Sa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Sa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lf.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class Gt extends cs{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=on,i=on,s=Lt,r=Jn,o=_n,l=is,c=Gt.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Nn(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Qu;Gt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,M=(_+1)/2,T=(h+f)/4,C=(u+p)/4,y=(g+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=C/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=y/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=y/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-p)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wn extends cs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hf extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $p extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[r+0],d=s[r+1],g=s[r+2],p=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==g){let m=1-o;const _=l*f+c*d+h*g+u*p,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),T=Math.atan2(M,_*b);m=Math.sin(m*T)/M,o=Math.sin(o*T)/M}const v=o*b;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+p*v,m===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+h*-o-u*-r,this.y=h*l+f*-r+u*-s-c*-o,this.z=u*l+f*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new E,rh=new ln;class hr{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>r&&(r=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>r&&(r=u),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Bi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox),Ta.applyMatrix4(e.matrixWorld),this.union(Ta);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ho.subVectors(this.max,_r),ys.subVectors(e.a,_r),Ms.subVectors(e.b,_r),bs.subVectors(e.c,_r),_i.subVectors(Ms,ys),xi.subVectors(bs,Ms),Ui.subVectors(ys,bs);let t=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!Ea(t,ys,Ms,bs,ho)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,ys,Ms,bs,ho))?!1:(uo.crossVectors(_i,xi),t=[uo.x,uo.y,uo.z],Ea(t,ys,Ms,bs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new E,new E,new E,new E,new E,new E,new E,new E],Bi=new E,Ta=new hr,ys=new E,Ms=new E,bs=new E,_i=new E,xi=new E,Ui=new E,_r=new E,ho=new E,uo=new E,Gi=new E;function Ea(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Gi.fromArray(a,s);const o=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qp=new hr,xr=new E,Aa=new E;class ur{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Aa)),this.expandByPoint(xr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new E,Ca=new E,fo=new E,vi=new E,Pa=new E,po=new E,La=new E;class ra{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.direction).multiplyScalar(t).add(this.origin),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ca.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,r=-this.direction.dot(fo),o=vi.dot(this.direction),l=-vi.dot(fo),c=vi.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*l-o,f=r*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,d=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(fo).multiplyScalar(f).add(Ca),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,s){Pa.subVectors(t,e),po.subVectors(n,e),La.crossVectors(Pa,po);let r=this.direction.dot(La),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;vi.subVectors(this.origin,e);const l=o*this.direction.dot(po.crossVectors(vi,po));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(vi));if(c<0||l+c>r)return null;const h=-o*vi.dot(La);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,h,u,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),r=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=r*h,d=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f+p*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=p+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f-p*o,t[4]=-r*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=p-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,d=r*u,g=o*h,p=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,d=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=p-f*u,t[8]=g*u+d,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-p*u}else if(e.order==="XZY"){const f=r*l,d=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=r*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(n,fn),yi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(n,fn)),yi.normalize(),mo.crossVectors(fn,yi),i[0]=yi.x,i[4]=mo.x,i[8]=fn.x,i[1]=yi.y,i[5]=mo.y,i[9]=fn.y,i[2]=yi.z,i[6]=mo.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],b=n[3],x=n[7],v=n[11],M=n[15],T=i[0],C=i[4],y=i[8],S=i[12],R=i[1],N=i[5],q=i[9],D=i[13],I=i[2],z=i[6],X=i[10],Y=i[14],G=i[3],ee=i[7],Q=i[11],U=i[15];return s[0]=r*T+o*R+l*I+c*G,s[4]=r*C+o*N+l*z+c*ee,s[8]=r*y+o*q+l*X+c*Q,s[12]=r*S+o*D+l*Y+c*U,s[1]=h*T+u*R+f*I+d*G,s[5]=h*C+u*N+f*z+d*ee,s[9]=h*y+u*q+f*X+d*Q,s[13]=h*S+u*D+f*Y+d*U,s[2]=g*T+p*R+m*I+_*G,s[6]=g*C+p*N+m*z+_*ee,s[10]=g*y+p*q+m*X+_*Q,s[14]=g*S+p*D+m*Y+_*U,s[3]=b*T+x*R+v*I+M*G,s[7]=b*C+x*N+v*z+M*ee,s[11]=b*y+x*q+v*X+M*Q,s[15]=b*S+x*D+v*Y+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+p*(+t*l*d-t*c*f+s*r*f-i*r*d+i*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*r*u+n*r*d+s*o*h-n*c*h)+_*(-i*o*h-t*l*u+t*o*f+i*r*u-n*r*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],b=u*m*c-p*f*c+p*l*d-o*m*d-u*l*_+o*f*_,x=g*f*c-h*m*c-g*l*d+r*m*d+h*l*_-r*f*_,v=h*p*c-g*u*c+g*o*d-r*p*d-h*o*_+r*u*_,M=g*u*l-h*p*l-g*o*f+r*p*f+h*o*m-r*u*m,T=t*b+n*x+i*v+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=b*C,e[1]=(p*f*s-u*m*s-p*i*d+n*m*d+u*i*_-n*f*_)*C,e[2]=(o*m*s-p*l*s+p*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*C,e[4]=x*C,e[5]=(h*m*s-g*f*s+g*i*d-t*m*d-h*i*_+t*f*_)*C,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*_-t*l*_)*C,e[7]=(r*f*s-h*l*s+h*i*c-t*f*c-r*i*d+t*l*d)*C,e[8]=v*C,e[9]=(g*u*s-h*p*s-g*n*d+t*p*d+h*n*_-t*u*_)*C,e[10]=(r*p*s-g*o*s+g*n*c-t*p*c-r*n*_+t*o*_)*C,e[11]=(h*o*s-r*u*s-h*n*c+t*u*c+r*n*d-t*o*d)*C,e[12]=M*C,e[13]=(h*p*i-g*u*i+g*n*f-t*p*f-h*n*m+t*u*m)*C,e[14]=(g*o*i-r*p*i-g*n*l+t*p*l+r*n*m-t*o*m)*C,e[15]=(r*u*i-h*o*i+h*n*l-t*u*l-r*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,f=s*c,d=s*h,g=s*u,p=r*h,m=r*u,_=o*u,b=l*c,x=l*h,v=l*u,M=n.x,T=n.y,C=n.z;return i[0]=(1-(p+_))*M,i[1]=(d+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+_))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+x)*C,i[9]=(m-b)*C,i[10]=(1-(f+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ss.set(i[0],i[1],i[2]).length();const r=Ss.set(i[4],i[5],i[6]).length(),o=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const c=1/s,h=1/r,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,f=(n+i)*c,d=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new E,Gn=new Xe,em=new E(0,0,0),tm=new E(1,1,1),yi=new E,mo=new E,fn=new E,oh=new Xe,ah=new ln;class rs{constructor(e=0,t=0,n=0,i=rs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}rs.DefaultOrder="XYZ";rs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nm=0;const lh=new E,ws=new ln,ri=new Xe,go=new E,vr=new E,im=new E,sm=new ln,ch=new E(1,0,0),hh=new E(0,1,0),uh=new E(0,0,1),rm={type:"added"},fh={type:"removed"};class gt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DefaultUp.clone();const e=new E,t=new rs,n=new ln,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new yn}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DefaultMatrixWorldAutoUpdate,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(vr,go,this.up):ri.lookAt(go,vr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ri),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DefaultUp=new E(0,1,0);gt.DefaultMatrixAutoUpdate=!0;gt.DefaultMatrixWorldAutoUpdate=!0;const Vn=new E,oi=new E,Ra=new E,ai=new E,Ts=new E,Es=new E,dh=new E,Ia=new E,Da=new E,Oa=new E;class ui{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vn.subVectors(i,t),oi.subVectors(n,t),Ra.subVectors(e,t);const r=Vn.dot(Vn),o=Vn.dot(oi),l=Vn.dot(Ra),c=oi.dot(oi),h=oi.dot(Ra),u=r*c-o*o;if(u===0)return s.set(-2,-1,-1);const f=1/u,d=(c*l-o*h)*f,g=(r*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,ai),l.set(0,0),l.addScaledVector(s,ai.x),l.addScaledVector(r,ai.y),l.addScaledVector(o,ai.z),l}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),oi.subVectors(e,t),Vn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Vn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ui.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Ts.subVectors(i,n),Es.subVectors(s,n),Ia.subVectors(e,n);const l=Ts.dot(Ia),c=Es.dot(Ia);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,i);const h=Ts.dot(Da),u=Es.dot(Da);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Ts,r);Oa.subVectors(e,s);const d=Ts.dot(Oa),g=Es.dot(Oa);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Es,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(s,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(dh,o);const _=1/(m+p+f);return r=p*_,o=f*_,t.copy(n).addScaledVector(Ts,r).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let om=0;class Kn extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Gs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rn extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new E,_o=new ie;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class uf extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ff extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let am=0;const Cn=new Xe,Na=new gt,As=new E,dn=new hr,yr=new hr,kt=new E;class _t extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?ff:uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(dn.min,yr.min),dn.expandByPoint(kt),kt.addVectors(dn.max,yr.max),dn.expandByPoint(kt)):(dn.expandByPoint(yr.min),dn.expandByPoint(yr.max))}dn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),kt.add(As)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new E,h[R]=new E;const u=new E,f=new E,d=new E,g=new ie,p=new ie,m=new ie,_=new E,b=new E;function x(R,N,q){u.fromArray(i,R*3),f.fromArray(i,N*3),d.fromArray(i,q*3),g.fromArray(r,R*2),p.fromArray(r,N*2),m.fromArray(r,q*2),f.sub(u),d.sub(u),p.sub(g),m.sub(g);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(D),b.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(D),c[R].add(_),c[N].add(_),c[q].add(_),h[R].add(b),h[N].add(b),h[q].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,N=v.length;R<N;++R){const q=v[R],D=q.start,I=q.count;for(let z=D,X=D+I;z<X;z+=3)x(n[z+0],n[z+1],n[z+2])}const M=new E,T=new E,C=new E,y=new E;function S(R){C.fromArray(s,R*3),y.copy(C);const N=c[R];M.copy(N),M.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(y,N);const D=T.dot(h[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=D}for(let R=0,N=v.length;R<N;++R){const q=v[R],D=q.start,I=q.count;for(let z=D,X=D+I;z<X;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new E,s=new E,r=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[d++]}return new pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new Xe,Cs=new ra,Fa=new ur,Mr=new E,br=new E,Sr=new E,ka=new E,xo=new E,vo=new ie,yo=new ie,Mo=new ie,za=new E,bo=new E;class Be extends gt{constructor(e=new _t,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ka.fromBufferAttribute(u,e),r?xo.addScaledVector(ka,h):xo.addScaledVector(ka.sub(t),h))}t.add(xo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),e.ray.intersectsSphere(Fa)===!1)||(ph.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(ph),n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const p=u[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,v=b;x<v;x+=3){const M=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);r=So(this,m,e,Cs,c,h,M,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const d=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=o.getX(p),b=o.getX(p+1),x=o.getX(p+2);r=So(this,i,e,Cs,c,h,_,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const p=u[d],m=i[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,v=b;x<v;x+=3){const M=x,T=x+1,C=x+2;r=So(this,m,e,Cs,c,h,M,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,b=p+1,x=p+2;r=So(this,i,e,Cs,c,h,_,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function lm(a,e,t,n,i,s,r,o){let l;if(e.side===Mn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Di,o),l===null)return null;bo.copy(o),bo.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:a}}function So(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,Mr),a.getVertexPosition(o,br),a.getVertexPosition(l,Sr);const c=lm(a,e,t,n,Mr,br,Sr,za);if(c){i&&(vo.fromBufferAttribute(i,r),yo.fromBufferAttribute(i,o),Mo.fromBufferAttribute(i,l),c.uv=ui.getUV(za,Mr,br,Sr,vo,yo,Mo,new ie)),s&&(vo.fromBufferAttribute(s,r),yo.fromBufferAttribute(s,o),Mo.fromBufferAttribute(s,l),c.uv2=ui.getUV(za,Mr,br,Sr,vo,yo,Mo,new ie));const h={a:r,b:o,c:l,normal:new E,materialIndex:0};ui.getNormal(Mr,br,Sr,h.normal),c.face=h}return c}class Pi extends _t{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(p,m,_,b,x,v,M,T,C,y,S){const R=v/C,N=M/y,q=v/2,D=M/2,I=T/2,z=C+1,X=y+1;let Y=0,G=0;const ee=new E;for(let Q=0;Q<X;Q++){const U=Q*N-D;for(let W=0;W<z;W++){const ne=W*R-q;ee[p]=ne*b,ee[m]=U*x,ee[_]=I,c.push(ee.x,ee.y,ee.z),ee[p]=0,ee[m]=0,ee[_]=T>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(W/C),u.push(1-Q/y),Y+=1}}for(let Q=0;Q<y;Q++)for(let U=0;U<C;U++){const W=f+U+z*Q,ne=f+U+z*(Q+1),se=f+(U+1)+z*(Q+1),he=f+(U+1)+z*Q;l.push(W,ne,he),l.push(ne,se,he),G+=6}o.addGroup(d,G,S),d+=G,f+=Y}}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(a){const e={};for(let t=0;t<a.length;t++){const n=Qs(a[t]);for(const i in n)e[i]=n[i]}return e}function cm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function df(a){return a.getRenderTarget()===null&&a.outputEncoding===st?mn:Vr}const jo={clone:Qs,merge:nn};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pf extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends pf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ls=1;class mf extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new sn(Ps,Ls,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new sn(Ps,Ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new sn(Ps,Ls,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new sn(Ps,Ls,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new sn(Ps,Ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(Ps,Ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=pi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class gf extends Gt{constructor(e,t,n,i,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),s=new mt({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ci});s.uniforms.tEquirect.value=t;const r=new Be(i,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Lt),new mf(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ba=new E,fm=new E,dm=new yn;class Wi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dm.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new ur,wo=new E;class Wl{constructor(e=new Wi,t=new Wi,n=new Wi,i=new Wi,s=new Wi,r=new Wi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(o-i,u-l,p-f,x-m).normalize(),t[1].setComponents(o+i,u+l,p+f,x+m).normalize(),t[2].setComponents(o+s,u+c,p+d,x+_).normalize(),t[3].setComponents(o-s,u-c,p-d,x-_).normalize(),t[4].setComponents(o-r,u-h,p-g,x-b).normalize(),t[5].setComponents(o+r,u+h,p+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xf(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function pm(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(h,d),a.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,d=h.updateRange;a.bindBuffer(u,c),d.count===-1?a.bufferSubData(u,0,f):(t?a.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:o,update:l}}class bn extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const b=_*f-r;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-b,0),p.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){const x=b+c*_,v=b+c*(_+1),M=b+1+c*(_+1),T=b+1+c*_;d.push(x,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(m,2))}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm="vec3 transformed = vec3( position );",bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,wm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,s0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,E0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,P0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
	vec4 texelSpecular = texture2D( specularMap, vUv );
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
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,og=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ag=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ug=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,yg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ig=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:ym,begin_vertex:Mm,beginnormal_vertex:bm,bsdfs:Sm,iridescence_fragment:wm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Lm,color_pars_fragment:Rm,color_pars_vertex:Im,color_vertex:Dm,common:Om,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Fm,displacementmap_pars_vertex:km,displacementmap_vertex:zm,emissivemap_fragment:Bm,emissivemap_pars_fragment:Um,encodings_fragment:Gm,encodings_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:s0,envmap_vertex:Ym,fog_vertex:jm,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:$m,lightmap_fragment:Qm,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:f0,lights_fragment_end:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:x0,map_pars_fragment:v0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:S0,morphcolor_vertex:w0,morphnormal_vertex:T0,morphtarget_pars_vertex:E0,morphtarget_vertex:A0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:R0,normal_vertex:I0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:k0,output_fragment:z0,packing:B0,premultiplied_alpha_fragment:U0,project_vertex:G0,dithering_fragment:V0,dithering_pars_fragment:H0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:j0,shadowmask_pars_fragment:K0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:$0,skinnormal_vertex:Q0,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,uv2_pars_fragment:cg,uv2_pars_vertex:hg,uv2_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:_g,cube_frag:xg,depth_vert:vg,depth_frag:yg,distanceRGBA_vert:Mg,distanceRGBA_frag:bg,equirect_vert:Sg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Eg,meshbasic_vert:Ag,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Lg,meshmatcap_vert:Rg,meshmatcap_frag:Ig,meshnormal_vert:Dg,meshnormal_frag:Og,meshphong_vert:Ng,meshphong_frag:Fg,meshphysical_vert:kg,meshphysical_frag:zg,meshtoon_vert:Bg,meshtoon_frag:Ug,points_vert:Gg,points_frag:Vg,shadow_vert:Hg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:qg},ge={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},Yn={basic:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([ge.points,ge.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([ge.common,ge.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([ge.sprite,ge.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:nn([ge.common,ge.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:nn([ge.lights,ge.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yn.physical={uniforms:nn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const To={r:0,b:0,g:0};function Yg(a,e,t,n,i,s,r){const o=new Pe(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=a.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sa)?(h===void 0&&(h=new Be(new Pi(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Qs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==st,(u!==x||f!==x.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Be(new bn(2,2),new mt({name:"BackgroundMaterial",uniforms:Qs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(To,df(a)),n.buffers.color.setClear(To.r,To.g,To.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function jg(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function u(I,z,X,Y,G){let ee=!1;if(r){const Q=p(Y,X,z);c!==Q&&(c=Q,d(c.object)),ee=_(I,Y,X,G),ee&&b(I,Y,X,G)}else{const Q=z.wireframe===!0;(c.geometry!==Y.id||c.program!==X.id||c.wireframe!==Q)&&(c.geometry=Y.id,c.program=X.id,c.wireframe=Q,ee=!0)}G!==null&&t.update(G,34963),(ee||h)&&(h=!1,y(I,z,X,Y),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function d(I){return n.isWebGL2?a.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?a.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,z,X){const Y=X.wireframe===!0;let G=o[I.id];G===void 0&&(G={},o[I.id]=G);let ee=G[z.id];ee===void 0&&(ee={},G[z.id]=ee);let Q=ee[Y];return Q===void 0&&(Q=m(f()),ee[Y]=Q),Q}function m(I){const z=[],X=[],Y=[];for(let G=0;G<i;G++)z[G]=0,X[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:Y,object:I,attributes:{},index:null}}function _(I,z,X,Y){const G=c.attributes,ee=z.attributes;let Q=0;const U=X.getAttributes();for(const W in U)if(U[W].location>=0){const se=G[W];let he=ee[W];if(he===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Y}function b(I,z,X,Y){const G={},ee=z.attributes;let Q=0;const U=X.getAttributes();for(const W in U)if(U[W].location>=0){let se=ee[W];se===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),G[W]=he,Q++}c.attributes=G,c.attributesNum=Q,c.index=Y}function x(){const I=c.newAttributes;for(let z=0,X=I.length;z<X;z++)I[z]=0}function v(I){M(I,0)}function M(I,z){const X=c.newAttributes,Y=c.enabledAttributes,G=c.attributeDivisors;X[I]=1,Y[I]===0&&(a.enableVertexAttribArray(I),Y[I]=1),G[I]!==z&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),G[I]=z)}function T(){const I=c.newAttributes,z=c.enabledAttributes;for(let X=0,Y=z.length;X<Y;X++)z[X]!==I[X]&&(a.disableVertexAttribArray(X),z[X]=0)}function C(I,z,X,Y,G,ee){n.isWebGL2===!0&&(X===5124||X===5125)?a.vertexAttribIPointer(I,z,X,G,ee):a.vertexAttribPointer(I,z,X,Y,G,ee)}function y(I,z,X,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=Y.attributes,ee=X.getAttributes(),Q=z.defaultAttributeValues;for(const U in ee){const W=ee[U];if(W.location>=0){let ne=G[U];if(ne===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const se=ne.normalized,he=ne.itemSize,H=t.get(ne);if(H===void 0)continue;const Se=H.buffer,xe=H.type,ue=H.bytesPerElement;if(ne.isInterleavedBufferAttribute){const fe=ne.data,Ne=fe.stride,Z=ne.offset;if(fe.isInstancedInterleavedBuffer){for(let $=0;$<W.locationSize;$++)M(W.location+$,fe.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let $=0;$<W.locationSize;$++)v(W.location+$);a.bindBuffer(34962,Se);for(let $=0;$<W.locationSize;$++)C(W.location+$,he/W.locationSize,xe,se,Ne*ue,(Z+he/W.locationSize*$)*ue)}else{if(ne.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)M(W.location+fe,ne.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let fe=0;fe<W.locationSize;fe++)v(W.location+fe);a.bindBuffer(34962,Se);for(let fe=0;fe<W.locationSize;fe++)C(W.location+fe,he/W.locationSize,xe,se,he*ue,he/W.locationSize*fe*ue)}}else if(Q!==void 0){const se=Q[U];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(W.location,se);break;case 3:a.vertexAttrib3fv(W.location,se);break;case 4:a.vertexAttrib4fv(W.location,se);break;default:a.vertexAttrib1fv(W.location,se)}}}}T()}function S(){q();for(const I in o){const z=o[I];for(const X in z){const Y=z[X];for(const G in Y)g(Y[G].object),delete Y[G];delete z[X]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;const z=o[I.id];for(const X in z){const Y=z[X];for(const G in Y)g(Y[G].object),delete Y[G];delete z[X]}delete o[I.id]}function N(I){for(const z in o){const X=o[z];if(X[I.id]===void 0)continue;const Y=X[I.id];for(const G in Y)g(Y[G].object),delete Y[G];delete X[I.id]}}function q(){D(),h=!0,c!==l&&(c=l,d(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function Kg(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=l}function Zg(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),b=a.getParameter(36349),x=f>0,v=r||e.has("OES_texture_float"),M=x&&v,T=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:T}}function Jg(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Wi,o=new yn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const g=u.length!==0||f||n!==0||i;return i=f,t=h(u,d,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,d){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,_=a.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,x=b*4;let v=_.clippingState||null;l.value=v,v=h(g,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,v=d;x!==p;++x,v+=4)r.copy(u[x]).applyMatrix4(b,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function $g(a){let e=new WeakMap;function t(r,o){return o===ul?r.mapping=Ks:o===fl&&(r.mapping=Zs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===ul||o===fl)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new _f(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class oa extends pf{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,mh=[.125,.215,.35,.446,.526,.582],Yi=20,Ua=new oa,gh=new Pe;let Ga=null;const Xi=(1+Math.sqrt(5))/2,Is=1/Xi,_h=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Xi,Is),new E(0,Xi,-Is),new E(Is,0,Xi),new E(-Is,0,Xi),new E(Xi,Is,0),new E(-Xi,Is,0)];class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ur,format:_n,encoding:ss,depthBuffer:!1},i=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(s)),this._blurMaterial=e_(s,e,t)}return i}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,i){const o=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gh),h.toneMapping=pi,h.autoClear=!1;const d=new rn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Be(new Pi,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(gh),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):b===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Eo(i,b*x,_>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ks||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=_h[(i-1)%_h.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):Yi;m>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const _=[];let b=0;for(let C=0;C<Yi;++C){const y=C/p,S=Math.exp(-y*y/2);_.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-Fs?i-x+Fs:0),T=4*(this._cubeSize-v);Eo(t,M,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Ua)}}function Qg(a){const e=[],t=[],n=[];let i=a;const s=a-Fs+1+mh.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-Fs?l=mh[r-a+Fs-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,p=3,m=2,_=1,b=new Float32Array(p*g*d),x=new Float32Array(m*g*d),v=new Float32Array(_*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,y=T>2?0:-1,S=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(S,p*g*T),x.set(f,m*g*T);const R=[T,T,T,T,T,T];v.set(R,_*g*T)}const M=new _t;M.setAttribute("position",new pt(b,p)),M.setAttribute("uv",new pt(x,m)),M.setAttribute("faceIndex",new pt(v,_)),e.push(M),i>Fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vh(a,e,t){const n=new Wn(a,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function e_(a,e,t){const n=new Float32Array(Yi),i=new E(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function yh(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Mh(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ul||l===fl,h=l===Ks||l===Zs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new xh(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new xh(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function n_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i_(a,e,t,n){const i={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const d=u.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let x=0,v=b.length;x<v;x+=3){const M=b[x+0],T=b[x+1],C=b[x+2];f.push(M,T,T,C,C,M)}}else{const b=g.array;p=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const M=x+0,T=x+1,C=x+2;f.push(M,T,T,C,C,M)}}const m=new(of(f)?ff:uf)(f,1);m.version=p;const _=s.get(u);_&&e.remove(_),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function s_(a,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,d){a.drawElements(s,d,o,f*l),t.update(d,s,1)}function u(f,d,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function r_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function o_(a,e){return a[0]-e[0]}function a_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function l_(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==m){let X=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let R=0;v===!0&&(R=1),M===!0&&(R=2),T===!0&&(R=3);let N=h.attributes.position.count*R,q=1;N>e.maxTextureSize&&(q=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*q*4*m),I=new hf(D,N,q,m);I.type=wi,I.needsUpdate=!0;const z=R*4;for(let Y=0;Y<m;Y++){const G=C[Y],ee=y[Y],Q=S[Y],U=N*q*4*Y;for(let W=0;W<G.count;W++){const ne=W*z;v===!0&&(r.fromBufferAttribute(G,W),D[U+ne+0]=r.x,D[U+ne+1]=r.y,D[U+ne+2]=r.z,D[U+ne+3]=0),M===!0&&(r.fromBufferAttribute(ee,W),D[U+ne+4]=r.x,D[U+ne+5]=r.y,D[U+ne+6]=r.z,D[U+ne+7]=0),T===!0&&(r.fromBufferAttribute(Q,W),D[U+ne+8]=r.x,D[U+ne+9]=r.y,D[U+ne+10]=r.z,D[U+ne+11]=Q.itemSize===4?r.w:1)}}_={count:m,texture:I,size:new ie(N,q)},s.set(h,_),h.addEventListener("dispose",X)}let b=0;for(let v=0;v<d.length;v++)b+=d[v];const x=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",d),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];n[h.id]=m}for(let M=0;M<p;M++){const T=m[M];T[0]=M,T[1]=d[M]}m.sort(a_);for(let M=0;M<8;M++)M<p&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(o_);const _=h.morphAttributes.position,b=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const T=o[M],C=T[0],y=T[1];C!==Number.MAX_SAFE_INTEGER&&y?(_&&h.getAttribute("morphTarget"+M)!==_[C]&&h.setAttribute("morphTarget"+M,_[C]),b&&h.getAttribute("morphNormal"+M)!==b[C]&&h.setAttribute("morphNormal"+M,b[C]),i[M]=y,x+=y):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),b&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function c_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const vf=new Gt,yf=new hf,Mf=new $p,bf=new gf,bh=[],Sh=[],wh=new Float32Array(16),Th=new Float32Array(9),Eh=new Float32Array(4);function fr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=bh[i];if(s===void 0&&(s=new Float32Array(i),bh[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Nt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ft(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function aa(a,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function h_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function u_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2fv(this.addr,e),Ft(t,e)}}function f_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;a.uniform3fv(this.addr,e),Ft(t,e)}}function d_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4fv(this.addr,e),Ft(t,e)}}function p_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Eh.set(n),a.uniformMatrix2fv(this.addr,!1,Eh),Ft(t,n)}}function m_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Th.set(n),a.uniformMatrix3fv(this.addr,!1,Th),Ft(t,n)}}function g_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;wh.set(n),a.uniformMatrix4fv(this.addr,!1,wh),Ft(t,n)}}function __(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function x_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2iv(this.addr,e),Ft(t,e)}}function v_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;a.uniform3iv(this.addr,e),Ft(t,e)}}function y_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4iv(this.addr,e),Ft(t,e)}}function M_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function b_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;a.uniform2uiv(this.addr,e),Ft(t,e)}}function S_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;a.uniform3uiv(this.addr,e),Ft(t,e)}}function w_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;a.uniform4uiv(this.addr,e),Ft(t,e)}}function T_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||vf,i)}function E_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mf,i)}function A_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bf,i)}function C_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yf,i)}function P_(a){switch(a){case 5126:return h_;case 35664:return u_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return b_;case 36295:return S_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}function L_(a,e){a.uniform1fv(this.addr,e)}function R_(a,e){const t=fr(e,this.size,2);a.uniform2fv(this.addr,t)}function I_(a,e){const t=fr(e,this.size,3);a.uniform3fv(this.addr,t)}function D_(a,e){const t=fr(e,this.size,4);a.uniform4fv(this.addr,t)}function O_(a,e){const t=fr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function N_(a,e){const t=fr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function F_(a,e){const t=fr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function k_(a,e){a.uniform1iv(this.addr,e)}function z_(a,e){a.uniform2iv(this.addr,e)}function B_(a,e){a.uniform3iv(this.addr,e)}function U_(a,e){a.uniform4iv(this.addr,e)}function G_(a,e){a.uniform1uiv(this.addr,e)}function V_(a,e){a.uniform2uiv(this.addr,e)}function H_(a,e){a.uniform3uiv(this.addr,e)}function W_(a,e){a.uniform4uiv(this.addr,e)}function X_(a,e,t){const n=this.cache,i=e.length,s=aa(t,i);Nt(n,s)||(a.uniform1iv(this.addr,s),Ft(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||vf,s[r])}function q_(a,e,t){const n=this.cache,i=e.length,s=aa(t,i);Nt(n,s)||(a.uniform1iv(this.addr,s),Ft(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Mf,s[r])}function Y_(a,e,t){const n=this.cache,i=e.length,s=aa(t,i);Nt(n,s)||(a.uniform1iv(this.addr,s),Ft(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||bf,s[r])}function j_(a,e,t){const n=this.cache,i=e.length,s=aa(t,i);Nt(n,s)||(a.uniform1iv(this.addr,s),Ft(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||yf,s[r])}function K_(a){switch(a){case 5126:return L_;case 35664:return R_;case 35665:return I_;case 35666:return D_;case 35674:return O_;case 35675:return N_;case 35676:return F_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return B_;case 35669:case 35673:return U_;case 5125:return G_;case 36294:return V_;case 36295:return H_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return j_}}class Z_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=P_(t.type)}}class J_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=K_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Ah(a,e){a.seq.push(e),a.map[e.id]=e}function Q_(a,e,t){const n=a.name,i=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),r=Va.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ah(t,c===void 0?new Z_(o,a,e):new J_(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new $_(o),Ah(t,u)),t=u}}}class Go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Q_(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ch(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let ex=0;function tx(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function nx(a){switch(a){case ss:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ph(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+tx(a.getShaderSource(e),r)}else return i}function ix(a,e){const t=nx(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sx(a,e){let t;switch(e){case dp:t="Linear";break;case pp:t="Reinhard";break;case mp:t="OptimizedCineon";break;case $u:t="ACESFilmic";break;case gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rx(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function ox(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Lr(a){return a!==""}function Lh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(a){return a.replace(lx,cx)}function cx(a,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _l(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(a){return a.replace(hx,ux)}function ux(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Dh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ju:e="ENVMAP_BLENDING_MULTIPLY";break;case up:e="ENVMAP_BLENDING_MIX";break;case fp:e="ENVMAP_BLENDING_ADD";break}return e}function gx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _x(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=fx(t),c=dx(t),h=px(t),u=mx(t),f=gx(t),d=t.isWebGL2?"":rx(t),g=ox(s),p=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(Lr).join(`
`),_.length>0&&(_+=`
`)):(m=[Dh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),_=[d,Dh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?He.tonemapping_pars_fragment:"",t.toneMapping!==pi?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,ix("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),r=_l(r),r=Lh(r,t),r=Rh(r,t),o=_l(o),o=Lh(o,t),o=Rh(o,t),r=Ih(r),o=Ih(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+r,v=b+_+o,M=Ch(i,35633,x),T=Ch(i,35632,v);if(i.attachShader(p,M),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(T).trim();let q=!0,D=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const I=Ph(i,M,"vertex"),z=Ph(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+I+`
`+z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(M),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new Go(i,p)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=ax(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}}function Mx(a,e,t,n,i,s,r){const o=new Hl,l=new vx,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,S,R,N,q){const D=N.fog,I=q.geometry,z=y.isMeshStandardMaterial?N.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),Y=X&&X.mapping===sa?X.image.height:null,G=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=ee!==void 0?ee.length:0;let U=0;I.morphAttributes.position!==void 0&&(U=1),I.morphAttributes.normal!==void 0&&(U=2),I.morphAttributes.color!==void 0&&(U=3);let W,ne,se,he;if(G){const Ne=Yn[G];W=Ne.vertexShader,ne=Ne.fragmentShader}else W=y.vertexShader,ne=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const H=a.getRenderTarget(),Se=y.alphaTest>0,xe=y.clearcoat>0,ue=y.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:y.type,vertexShader:W,fragmentShader:ne,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:ss,map:!!y.map,matcap:!!y.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Y,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Fp,tangentSpaceNormalMap:y.normalMapType===sf,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===st,clearcoat:xe,clearcoatMap:xe&&!!y.clearcoatMap,clearcoatRoughnessMap:xe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!y.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!y.iridescenceMap,iridescenceThicknessMap:ue&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Gs,alphaMap:!!y.alphaMap,alphaTest:Se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:U,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:pi,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===Mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(_(S,y),b(S,y),S.push(a.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),y.push(o.mask)}function x(y){const S=g[y.type];let R;if(S){const N=Yn[S];R=jo.clone(N.uniforms)}else R=y.uniforms;return R}function v(y,S){let R;for(let N=0,q=c.length;N<q;N++){const D=c[N];if(D.cacheKey===S){R=D,++R.usedTimes;break}}return R===void 0&&(R=new _x(a,S,y,s),c.push(R)),R}function M(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function bx(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Oh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Nh(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,f,d,g,p,m){let _=a[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},a[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=m),e++,_}function o(u,f,d,g,p,m){const _=r(u,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(u,f,d,g,p,m){const _=r(u,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,f){t.length>1&&t.sort(u||Sx),n.length>1&&n.sort(f||Oh),i.length>1&&i.sort(f||Oh)}function h(){for(let u=e,f=a.length;u<f;u++){const d=a[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function wx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Nh,a.set(n,[r])):i>=s.length?(r=new Nh,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Tx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Pe};break;case"SpotLight":t={position:new E,direction:new E,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new E,halfWidth:new E,halfHeight:new E};break}return a[e.id]=t,t}}}function Ex(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Ax=0;function Cx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Px(a,e){const t=new Tx,n=Ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new E);const s=new E,r=new Xe,o=new Xe;function l(h,u){let f=0,d=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,m=0,_=0,b=0,x=0,v=0,M=0,T=0,C=0,y=0;h.sort(Cx);const S=u!==!0?Math.PI:1;for(let N=0,q=h.length;N<q;N++){const D=h[N],I=D.color,z=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*z*S,d+=I.g*z*S,g+=I.b*z*S;else if(D.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],z);else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const ee=D.shadow,Q=n.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(I).multiplyScalar(z*S),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[_]=G;const ee=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,ee.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[_]=ee.matrix,D.castShadow){const Q=n.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=Y,T++}_++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=G,b++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity*S),G.distance=D.distance,G.decay=D.decay,D.castShadow){const ee=D.shadow,Q=n.get(D);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=G,m++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(z*S),G.groundColor.copy(D.groundColor).multiplyScalar(z*S),i.hemi[x]=G,x++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==T||R.numSpotMaps!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=T,R.numSpotMaps=C,i.version=Ax++)}function c(h,u){let f=0,d=0,g=0,p=0,m=0;const _=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const v=h[b];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),f++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),r.copy(v.matrixWorld),r.premultiply(_),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Fh(a,e){const t=new Px(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Lx(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Fh(a,e),t.set(s,[l])):r>=o.length?(l=new Fh(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Rx extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nx(a,e,t){let n=new Wl;const i=new ie,s=new ie,r=new ft,o=new Rx({depthPacking:Np}),l=new Ix,c={},h=t.maxTextureSize,u={0:Mn,1:Di,2:Kt},f=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Dx,fragmentShader:Ox}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu,this.render=function(v,M,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const C=a.getRenderTarget(),y=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),R=a.state;R.setBlending(Ci),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let N=0,q=v.length;N<q;N++){const D=v[N],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const z=I.getFrameExtents();if(i.multiply(z),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,I.mapSize.y=s.y)),I.map===null){const Y=this.type!==Pr?{minFilter:zt,magFilter:zt}:{};I.map=new Wn(i.x,i.y,Y),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const X=I.getViewportCount();for(let Y=0;Y<X;Y++){const G=I.getViewport(Y);r.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),R.viewport(r),I.updateMatrices(D,Y),n=I.getFrustum(),x(M,T,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===Pr&&_(I,T),I.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(C,y,S)};function _(v,M){const T=e.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Wn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(M,null,T,f,p,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(M,null,T,d,p,null)}function b(v,M,T,C,y,S){let R=null;const N=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)R=N;else if(R=T.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const q=R.uuid,D=M.uuid;let I=c[q];I===void 0&&(I={},c[q]=I);let z=I[D];z===void 0&&(z=R.clone(),I[D]=z),R=z}return R.visible=M.visible,R.wireframe=M.wireframe,S===Pr?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:u[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=C,R.farDistance=y),R}function x(v,M,T,C,y){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Pr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const N=e.update(v),q=v.material;if(Array.isArray(q)){const D=N.groups;for(let I=0,z=D.length;I<z;I++){const X=D[I],Y=q[X.materialIndex];if(Y&&Y.visible){const G=b(v,Y,C,T.near,T.far,y);a.renderBufferDirect(T,null,N,G,v,X)}}}else if(q.visible){const D=b(v,q,C,T.near,T.far,y);a.renderBufferDirect(T,null,N,D,v,null)}}const R=v.children;for(let N=0,q=R.length;N<q;N++)x(R[N],M,T,C,y)}}function Fx(a,e,t){const n=t.isWebGL2;function i(){let O=!1;const j=new ft;let oe=null;const Me=new ft(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!O&&(a.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,$e,St,It,qn){qn===!0&&(Ce*=It,$e*=It,St*=It),j.set(Ce,$e,St,It),Me.equals(j)===!1&&(a.clearColor(Ce,$e,St,It),Me.copy(j))},reset:function(){O=!1,oe=null,Me.set(-1,0,0,0)}}}function s(){let O=!1,j=null,oe=null,Me=null;return{setTest:function(Ce){Ce?Se(2929):xe(2929)},setMask:function(Ce){j!==Ce&&!O&&(a.depthMask(Ce),j=Ce)},setFunc:function(Ce){if(oe!==Ce){switch(Ce){case sp:a.depthFunc(512);break;case rp:a.depthFunc(519);break;case op:a.depthFunc(513);break;case hl:a.depthFunc(515);break;case ap:a.depthFunc(514);break;case lp:a.depthFunc(518);break;case cp:a.depthFunc(516);break;case hp:a.depthFunc(517);break;default:a.depthFunc(515)}oe=Ce}},setLocked:function(Ce){O=Ce},setClear:function(Ce){Me!==Ce&&(a.clearDepth(Ce),Me=Ce)},reset:function(){O=!1,j=null,oe=null,Me=null}}}function r(){let O=!1,j=null,oe=null,Me=null,Ce=null,$e=null,St=null,It=null,qn=null;return{setTest:function(at){O||(at?Se(2960):xe(2960))},setMask:function(at){j!==at&&!O&&(a.stencilMask(at),j=at)},setFunc:function(at,En,$t){(oe!==at||Me!==En||Ce!==$t)&&(a.stencilFunc(at,En,$t),oe=at,Me=En,Ce=$t)},setOp:function(at,En,$t){($e!==at||St!==En||It!==$t)&&(a.stencilOp(at,En,$t),$e=at,St=En,It=$t)},setLocked:function(at){O=at},setClear:function(at){qn!==at&&(a.clearStencil(at),qn=at)},reset:function(){O=!1,j=null,oe=null,Me=null,Ce=null,$e=null,St=null,It=null,qn=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,x=null,v=null,M=null,T=null,C=null,y=null,S=!1,R=null,N=null,q=null,D=null,I=null;const z=a.getParameter(35661);let X=!1,Y=0;const G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Y>=2);let ee=null,Q={};const U=a.getParameter(3088),W=a.getParameter(2978),ne=new ft().fromArray(U),se=new ft().fromArray(W);function he(O,j,oe){const Me=new Uint8Array(4),Ce=a.createTexture();a.bindTexture(O,Ce),a.texParameteri(O,10241,9728),a.texParameteri(O,10240,9728);for(let $e=0;$e<oe;$e++)a.texImage2D(j+$e,0,6408,1,1,0,6408,5121,Me);return Ce}const H={};H[3553]=he(3553,3553,1),H[34067]=he(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(hl),de(!1),ke(Cc),Se(2884),ce(Ci);function Se(O){f[O]!==!0&&(a.enable(O),f[O]=!0)}function xe(O){f[O]!==!1&&(a.disable(O),f[O]=!1)}function ue(O,j){return d[O]!==j?(a.bindFramebuffer(O,j),d[O]=j,n&&(O===36009&&(d[36160]=j),O===36160&&(d[36009]=j)),!0):!1}function fe(O,j){let oe=p,Me=!1;if(O)if(oe=g.get(j),oe===void 0&&(oe=[],g.set(j,oe)),O.isWebGLMultipleRenderTargets){const Ce=O.texture;if(oe.length!==Ce.length||oe[0]!==36064){for(let $e=0,St=Ce.length;$e<St;$e++)oe[$e]=36064+$e;oe.length=Ce.length,Me=!0}}else oe[0]!==36064&&(oe[0]=36064,Me=!0);else oe[0]!==1029&&(oe[0]=1029,Me=!0);Me&&(t.isWebGL2?a.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ne(O){return m!==O?(a.useProgram(O),m=O,!0):!1}const Z={[Ns]:32774,[Yd]:32778,[jd]:32779};if(n)Z[Rc]=32775,Z[Ic]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Z[Rc]=O.MIN_EXT,Z[Ic]=O.MAX_EXT)}const $={[Kd]:0,[Zd]:1,[Jd]:768,[Ku]:770,[ip]:776,[tp]:774,[Qd]:772,[$d]:769,[Zu]:771,[np]:775,[ep]:773};function ce(O,j,oe,Me,Ce,$e,St,It){if(O===Ci){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(Se(3042),_=!0),O!==qd){if(O!==b||It!==S){if((x!==Ns||T!==Ns)&&(a.blendEquation(32774),x=Ns,T=Ns),It)switch(O){case Gs:a.blendFuncSeparate(1,771,1,771);break;case Ut:a.blendFunc(1,1);break;case Pc:a.blendFuncSeparate(0,769,0,1);break;case Lc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:a.blendFuncSeparate(770,771,1,771);break;case Ut:a.blendFunc(770,1);break;case Pc:a.blendFuncSeparate(0,769,0,1);break;case Lc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,M=null,C=null,y=null,b=O,S=It}return}Ce=Ce||j,$e=$e||oe,St=St||Me,(j!==x||Ce!==T)&&(a.blendEquationSeparate(Z[j],Z[Ce]),x=j,T=Ce),(oe!==v||Me!==M||$e!==C||St!==y)&&(a.blendFuncSeparate($[oe],$[Me],$[$e],$[St]),v=oe,M=Me,C=$e,y=St),b=O,S=!1}function we(O,j){O.side===Kt?xe(2884):Se(2884);let oe=O.side===Mn;j&&(oe=!oe),de(oe),O.blending===Gs&&O.transparent===!1?ce(Ci):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Me=O.stencilWrite;c.setTest(Me),Me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(32926):xe(32926)}function de(O){R!==O&&(O?a.frontFace(2304):a.frontFace(2305),R=O)}function ke(O){O!==Wd?(Se(2884),O!==N&&(O===Cc?a.cullFace(1029):O===Xd?a.cullFace(1028):a.cullFace(1032))):xe(2884),N=O}function De(O){O!==q&&(X&&a.lineWidth(O),q=O)}function Ie(O,j,oe){O?(Se(32823),(D!==j||I!==oe)&&(a.polygonOffset(j,oe),D=j,I=oe)):xe(32823)}function tt(O){O?Se(3089):xe(3089)}function Ke(O){O===void 0&&(O=33984+z-1),ee!==O&&(a.activeTexture(O),ee=O)}function P(O,j,oe){oe===void 0&&(ee===null?oe=33984+z-1:oe=ee);let Me=Q[oe];Me===void 0&&(Me={type:void 0,texture:void 0},Q[oe]=Me),(Me.type!==O||Me.texture!==j)&&(ee!==oe&&(a.activeTexture(oe),ee=oe),a.bindTexture(O,j||H[O]),Me.type=O,Me.texture=j)}function w(){const O=Q[ee];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{a.compressedTexImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{a.texSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{a.texSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{a.texStorage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{a.texStorage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{a.texImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{a.texImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){ne.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Ae(O){se.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function We(O,j){let oe=u.get(j);oe===void 0&&(oe=new WeakMap,u.set(j,oe));let Me=oe.get(O);Me===void 0&&(Me=a.getUniformBlockIndex(j,O.name),oe.set(O,Me))}function Ge(O,j){const Me=u.get(j).get(O);h.get(j)!==Me&&(a.uniformBlockBinding(j,Me,O.__bindingPointIndex),h.set(j,Me))}function nt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ee=null,Q={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,x=null,v=null,M=null,T=null,C=null,y=null,S=!1,R=null,N=null,q=null,D=null,I=null,ne.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:xe,bindFramebuffer:ue,drawBuffers:fe,useProgram:Ne,setBlending:ce,setMaterial:we,setFlipSided:de,setCullFace:ke,setLineWidth:De,setPolygonOffset:Ie,setScissorTest:tt,activeTexture:Ke,bindTexture:P,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:ae,texImage2D:be,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:Ge,texStorage2D:F,texStorage3D:_e,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:Oe,compressedTexSubImage3D:L,scissor:Le,viewport:Ae,reset:nt}}function kx(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,w){return _?new OffscreenCanvas(P,w):Wr("canvas")}function x(P,w,V,ae){let le=1;if((P.width>ae||P.height>ae)&&(le=ae/Math.max(P.width,P.height)),le<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const pe=w?Yo:Math.floor,Oe=pe(le*P.width),L=pe(le*P.height);p===void 0&&(p=b(Oe,L));const F=V?b(Oe,L):p;return F.width=Oe,F.height=L,F.getContext("2d").drawImage(P,0,0,Oe,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Oe+"x"+L+")."),F}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return gl(P.width)&&gl(P.height)}function M(P){return o?!1:P.wrapS!==on||P.wrapT!==on||P.minFilter!==zt&&P.minFilter!==Lt}function T(P,w){return P.generateMipmaps&&w&&P.minFilter!==zt&&P.minFilter!==Lt}function C(P){a.generateMipmap(P)}function y(P,w,V,ae,le=!1){if(o===!1)return w;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=w;return w===6403&&(V===5126&&(pe=33326),V===5131&&(pe=33325),V===5121&&(pe=33321)),w===33319&&(V===5126&&(pe=33328),V===5131&&(pe=33327),V===5121&&(pe=33323)),w===6408&&(V===5126&&(pe=34836),V===5131&&(pe=34842),V===5121&&(pe=ae===st&&le===!1?35907:32856),V===32819&&(pe=32854),V===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function S(P,w,V){return T(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){return P===zt||P===dl||P===Bo?9728:9729}function N(P){const w=P.target;w.removeEventListener("dispose",N),D(w),w.isVideoTexture&&g.delete(w)}function q(P){const w=P.target;w.removeEventListener("dispose",q),z(w)}function D(P){const w=n.get(P);if(w.__webglInit===void 0)return;const V=P.source,ae=m.get(V);if(ae){const le=ae[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(P),Object.keys(ae).length===0&&m.delete(V)}n.remove(P)}function I(P){const w=n.get(P);a.deleteTexture(w.__webglTexture);const V=P.source,ae=m.get(V);delete ae[w.__cacheKey],r.memory.textures--}function z(P){const w=P.texture,V=n.get(P),ae=n.get(w);if(ae.__webglTexture!==void 0&&(a.deleteTexture(ae.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)a.deleteFramebuffer(V.__webglFramebuffer[le]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[le]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let le=0;le<V.__webglColorRenderbuffer.length;le++)V.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[le]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,pe=w.length;le<pe;le++){const Oe=n.get(w[le]);Oe.__webglTexture&&(a.deleteTexture(Oe.__webglTexture),r.memory.textures--),n.remove(w[le])}n.remove(w),n.remove(P)}let X=0;function Y(){X=0}function G(){const P=X;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),X+=1,P}function ee(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function Q(P,w){const V=n.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,P,w);return}}t.bindTexture(3553,V.__webglTexture,33984+w)}function U(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){xe(V,P,w);return}t.bindTexture(35866,V.__webglTexture,33984+w)}function W(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){xe(V,P,w);return}t.bindTexture(32879,V.__webglTexture,33984+w)}function ne(P,w){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ue(V,P,w);return}t.bindTexture(34067,V.__webglTexture,33984+w)}const se={[Oi]:10497,[on]:33071,[qo]:33648},he={[zt]:9728,[dl]:9984,[Bo]:9986,[Lt]:9729,[ef]:9985,[Jn]:9987};function H(P,w,V){if(V?(a.texParameteri(P,10242,se[w.wrapS]),a.texParameteri(P,10243,se[w.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,se[w.wrapR]),a.texParameteri(P,10240,he[w.magFilter]),a.texParameteri(P,10241,he[w.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(w.wrapS!==on||w.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,R(w.magFilter)),a.texParameteri(P,10241,R(w.minFilter)),w.minFilter!==zt&&w.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zt||w.minFilter!==Bo&&w.minFilter!==Jn||w.type===wi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ur&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(P,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Se(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N));const ae=w.source;let le=m.get(ae);le===void 0&&(le={},m.set(ae,le));const pe=ee(w);if(pe!==P.__cacheKey){le[pe]===void 0&&(le[pe]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,V=!0),le[pe].usedTimes++;const Oe=le[P.__cacheKey];Oe!==void 0&&(le[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&I(w)),P.__cacheKey=pe,P.__webglTexture=le[pe].texture}return V}function xe(P,w,V){let ae=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=35866),w.isData3DTexture&&(ae=32879);const le=Se(P,w),pe=w.source;t.bindTexture(ae,P.__webglTexture,33984+V);const Oe=n.get(pe);if(pe.version!==Oe.__version||le===!0){t.activeTexture(33984+V),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const L=M(w)&&v(w.image)===!1;let F=x(w.image,L,!1,h);F=Ke(w,F);const _e=v(F)||o,be=s.convert(w.format,w.encoding);let ye=s.convert(w.type),Le=y(w.internalFormat,be,ye,w.encoding,w.isVideoTexture);H(ae,w,_e);let Ae;const We=w.mipmaps,Ge=o&&w.isVideoTexture!==!0,nt=Oe.__version===void 0||le===!0,O=S(w,F,_e);if(w.isDepthTexture)Le=6402,o?w.type===wi?Le=36012:w.type===ji?Le=33190:w.type===Vs?Le=35056:Le=33189:w.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ji&&Le===6402&&w.type!==tf&&w.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ji,ye=s.convert(w.type)),w.format===Js&&Le===6402&&(Le=34041,w.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Vs,ye=s.convert(w.type))),nt&&(Ge?t.texStorage2D(3553,1,Le,F.width,F.height):t.texImage2D(3553,0,Le,F.width,F.height,0,be,ye,null));else if(w.isDataTexture)if(We.length>0&&_e){Ge&&nt&&t.texStorage2D(3553,O,Le,We[0].width,We[0].height);for(let j=0,oe=We.length;j<oe;j++)Ae=We[j],Ge?t.texSubImage2D(3553,j,0,0,Ae.width,Ae.height,be,ye,Ae.data):t.texImage2D(3553,j,Le,Ae.width,Ae.height,0,be,ye,Ae.data);w.generateMipmaps=!1}else Ge?(nt&&t.texStorage2D(3553,O,Le,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,be,ye,F.data)):t.texImage2D(3553,0,Le,F.width,F.height,0,be,ye,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&nt&&t.texStorage3D(35866,O,Le,We[0].width,We[0].height,F.depth);for(let j=0,oe=We.length;j<oe;j++)Ae=We[j],w.format!==_n?be!==null?Ge?t.compressedTexSubImage3D(35866,j,0,0,0,Ae.width,Ae.height,F.depth,be,Ae.data,0,0):t.compressedTexImage3D(35866,j,Le,Ae.width,Ae.height,F.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,j,0,0,0,Ae.width,Ae.height,F.depth,be,ye,Ae.data):t.texImage3D(35866,j,Le,Ae.width,Ae.height,F.depth,0,be,ye,Ae.data)}else{Ge&&nt&&t.texStorage2D(3553,O,Le,We[0].width,We[0].height);for(let j=0,oe=We.length;j<oe;j++)Ae=We[j],w.format!==_n?be!==null?Ge?t.compressedTexSubImage2D(3553,j,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(3553,j,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,j,0,0,Ae.width,Ae.height,be,ye,Ae.data):t.texImage2D(3553,j,Le,Ae.width,Ae.height,0,be,ye,Ae.data)}else if(w.isDataArrayTexture)Ge?(nt&&t.texStorage3D(35866,O,Le,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,be,ye,F.data)):t.texImage3D(35866,0,Le,F.width,F.height,F.depth,0,be,ye,F.data);else if(w.isData3DTexture)Ge?(nt&&t.texStorage3D(32879,O,Le,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,be,ye,F.data)):t.texImage3D(32879,0,Le,F.width,F.height,F.depth,0,be,ye,F.data);else if(w.isFramebufferTexture){if(nt)if(Ge)t.texStorage2D(3553,O,Le,F.width,F.height);else{let j=F.width,oe=F.height;for(let Me=0;Me<O;Me++)t.texImage2D(3553,Me,Le,j,oe,0,be,ye,null),j>>=1,oe>>=1}}else if(We.length>0&&_e){Ge&&nt&&t.texStorage2D(3553,O,Le,We[0].width,We[0].height);for(let j=0,oe=We.length;j<oe;j++)Ae=We[j],Ge?t.texSubImage2D(3553,j,0,0,be,ye,Ae):t.texImage2D(3553,j,Le,be,ye,Ae);w.generateMipmaps=!1}else Ge?(nt&&t.texStorage2D(3553,O,Le,F.width,F.height),t.texSubImage2D(3553,0,0,0,be,ye,F)):t.texImage2D(3553,0,Le,be,ye,F);T(w,_e)&&C(ae),Oe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,V){if(w.image.length!==6)return;const ae=Se(P,w),le=w.source;t.bindTexture(34067,P.__webglTexture,33984+V);const pe=n.get(le);if(le.version!==pe.__version||ae===!0){t.activeTexture(33984+V),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Oe=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,F=[];for(let j=0;j<6;j++)!Oe&&!L?F[j]=x(w.image[j],!1,!0,c):F[j]=L?w.image[j].image:w.image[j],F[j]=Ke(w,F[j]);const _e=F[0],be=v(_e)||o,ye=s.convert(w.format,w.encoding),Le=s.convert(w.type),Ae=y(w.internalFormat,ye,Le,w.encoding),We=o&&w.isVideoTexture!==!0,Ge=pe.__version===void 0||ae===!0;let nt=S(w,_e,be);H(34067,w,be);let O;if(Oe){We&&Ge&&t.texStorage2D(34067,nt,Ae,_e.width,_e.height);for(let j=0;j<6;j++){O=F[j].mipmaps;for(let oe=0;oe<O.length;oe++){const Me=O[oe];w.format!==_n?ye!==null?We?t.compressedTexSubImage2D(34069+j,oe,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(34069+j,oe,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+j,oe,0,0,Me.width,Me.height,ye,Le,Me.data):t.texImage2D(34069+j,oe,Ae,Me.width,Me.height,0,ye,Le,Me.data)}}}else{O=w.mipmaps,We&&Ge&&(O.length>0&&nt++,t.texStorage2D(34067,nt,Ae,F[0].width,F[0].height));for(let j=0;j<6;j++)if(L){We?t.texSubImage2D(34069+j,0,0,0,F[j].width,F[j].height,ye,Le,F[j].data):t.texImage2D(34069+j,0,Ae,F[j].width,F[j].height,0,ye,Le,F[j].data);for(let oe=0;oe<O.length;oe++){const Ce=O[oe].image[j].image;We?t.texSubImage2D(34069+j,oe+1,0,0,Ce.width,Ce.height,ye,Le,Ce.data):t.texImage2D(34069+j,oe+1,Ae,Ce.width,Ce.height,0,ye,Le,Ce.data)}}else{We?t.texSubImage2D(34069+j,0,0,0,ye,Le,F[j]):t.texImage2D(34069+j,0,Ae,ye,Le,F[j]);for(let oe=0;oe<O.length;oe++){const Me=O[oe];We?t.texSubImage2D(34069+j,oe+1,0,0,ye,Le,Me.image[j]):t.texImage2D(34069+j,oe+1,Ae,ye,Le,Me.image[j])}}}T(w,be)&&C(34067),pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,V,ae,le){const pe=s.convert(V.format,V.encoding),Oe=s.convert(V.type),L=y(V.internalFormat,pe,Oe,V.encoding);n.get(w).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,L,w.width,w.height,w.depth,0,pe,Oe,null):t.texImage2D(le,0,L,w.width,w.height,0,pe,Oe,null)),t.bindFramebuffer(36160,P),Ie(w)?f.framebufferTexture2DMultisampleEXT(36160,ae,le,n.get(V).__webglTexture,0,De(w)):(le===3553||le>=34069&&le<=34074)&&a.framebufferTexture2D(36160,ae,le,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(P,w,V){if(a.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ae=33189;if(V||Ie(w)){const le=w.depthTexture;le&&le.isDepthTexture&&(le.type===wi?ae=36012:le.type===ji&&(ae=33190));const pe=De(w);Ie(w)?f.renderbufferStorageMultisampleEXT(36161,pe,ae,w.width,w.height):a.renderbufferStorageMultisample(36161,pe,ae,w.width,w.height)}else a.renderbufferStorage(36161,ae,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ae=De(w);V&&Ie(w)===!1?a.renderbufferStorageMultisample(36161,ae,35056,w.width,w.height):Ie(w)?f.renderbufferStorageMultisampleEXT(36161,ae,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const ae=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0;le<ae.length;le++){const pe=ae[le],Oe=s.convert(pe.format,pe.encoding),L=s.convert(pe.type),F=y(pe.internalFormat,Oe,L,pe.encoding),_e=De(w);V&&Ie(w)===!1?a.renderbufferStorageMultisample(36161,_e,F,w.width,w.height):Ie(w)?f.renderbufferStorageMultisampleEXT(36161,_e,F,w.width,w.height):a.renderbufferStorage(36161,F,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function Z(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ae=n.get(w.depthTexture).__webglTexture,le=De(w);if(w.depthTexture.format===Ji)Ie(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,le):a.framebufferTexture2D(36160,36096,3553,ae,0);else if(w.depthTexture.format===Js)Ie(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,le):a.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function $(P){const w=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=a.createRenderbuffer(),Ne(w.__webglDepthbuffer[ae],P,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),Ne(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ce(P,w,V){const ae=n.get(P);w!==void 0&&fe(ae.__webglFramebuffer,P,P.texture,36064,3553),V!==void 0&&$(P)}function we(P){const w=P.texture,V=n.get(P),ae=n.get(w);P.addEventListener("dispose",q),P.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=w.version,r.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,pe=P.isWebGLMultipleRenderTargets===!0,Oe=v(P)||o;if(le){V.__webglFramebuffer=[];for(let L=0;L<6;L++)V.__webglFramebuffer[L]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),pe)if(i.drawBuffers){const L=P.texture;for(let F=0,_e=L.length;F<_e;F++){const be=n.get(L[F]);be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ie(P)===!1){const L=pe?w:[w];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){const _e=L[F];V.__webglColorRenderbuffer[F]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const be=s.convert(_e.format,_e.encoding),ye=s.convert(_e.type),Le=y(_e.internalFormat,be,ye,_e.encoding,P.isXRRenderTarget===!0),Ae=De(P);a.renderbufferStorageMultisample(36161,Ae,Le,P.width,P.height),a.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,ae.__webglTexture),H(34067,w,Oe);for(let L=0;L<6;L++)fe(V.__webglFramebuffer[L],P,w,36064,34069+L);T(w,Oe)&&C(34067),t.unbindTexture()}else if(pe){const L=P.texture;for(let F=0,_e=L.length;F<_e;F++){const be=L[F],ye=n.get(be);t.bindTexture(3553,ye.__webglTexture),H(3553,be,Oe),fe(V.__webglFramebuffer,P,be,36064+F,3553),T(be,Oe)&&C(3553)}t.unbindTexture()}else{let L=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?L=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ae.__webglTexture),H(L,w,Oe),fe(V.__webglFramebuffer,P,w,36064,L),T(w,Oe)&&C(L),t.unbindTexture()}P.depthBuffer&&$(P)}function de(P){const w=v(P)||o,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0,le=V.length;ae<le;ae++){const pe=V[ae];if(T(pe,w)){const Oe=P.isWebGLCubeRenderTarget?34067:3553,L=n.get(pe).__webglTexture;t.bindTexture(Oe,L),C(Oe),t.unbindTexture()}}}function ke(P){if(o&&P.samples>0&&Ie(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,ae=P.height;let le=16384;const pe=[],Oe=P.stencilBuffer?33306:36096,L=n.get(P),F=P.isWebGLMultipleRenderTargets===!0;if(F)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){pe.push(36064+_e),P.depthBuffer&&pe.push(Oe);const be=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(be===!1&&(P.depthBuffer&&(le|=256),P.stencilBuffer&&(le|=1024)),F&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[_e]),be===!0&&(a.invalidateFramebuffer(36008,[Oe]),a.invalidateFramebuffer(36009,[Oe])),F){const ye=n.get(w[_e]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ye,0)}a.blitFramebuffer(0,0,V,ae,0,0,V,ae,le,9728),d&&a.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+_e,36161,L.__webglColorRenderbuffer[_e]);const be=n.get(w[_e]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+_e,3553,be,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function De(P){return Math.min(u,P.samples)}function Ie(P){const w=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(P){const w=r.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Ke(P,w){const V=P.encoding,ae=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ml||V!==ss&&(V===st?o===!1?e.has("EXT_sRGB")===!0&&ae===_n?(P.format=ml,P.minFilter=Lt,P.generateMipmaps=!1):w=lf.sRGBToLinear(w):(ae!==_n||le!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ie}function zx(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===is)return 5121;if(s===yp)return 32819;if(s===Mp)return 32820;if(s===_p)return 5120;if(s===xp)return 5122;if(s===tf)return 5123;if(s===vp)return 5124;if(s===ji)return 5125;if(s===wi)return 5126;if(s===Ur)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===bp)return 6406;if(s===_n)return 6408;if(s===wp)return 6409;if(s===Tp)return 6410;if(s===Ji)return 6402;if(s===Js)return 34041;if(s===Sp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Ep)return 6403;if(s===Ap)return 36244;if(s===Cp)return 33319;if(s===Pp)return 33320;if(s===Lp)return 36249;if(s===pa||s===ma||s===ga||s===_a)if(r===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dc||s===Oc||s===Nc||s===Fc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Dc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kc||s===zc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kc)return r===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bc||s===Uc||s===Gc||s===Vc||s===Hc||s===Wc||s===Xc||s===qc||s===Yc||s===jc||s===Kc||s===Zc||s===Jc||s===$c)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Bc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jc)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$c)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qc)return r===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Vs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Bx extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ct extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gx extends Gt{constructor(e,t,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=ji),n===void 0&&h===Js&&(n=Vs),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class Vx extends cs{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,h=null,u=null,f=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],b=[],x=new Set,v=new Map,M=new sn;M.layers.enable(1),M.viewport=new ft;const T=new sn;T.layers.enable(2),T.viewport=new ft;const C=[M,T],y=new Bx;y.layers.enable(1),y.layers.enable(2);let S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=_[U];return W===void 0&&(W=new Ha,_[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=_[U];return W===void 0&&(W=new Ha,_[U]=W),W.getGripSpace()},this.getHand=function(U){let W=_[U];return W===void 0&&(W=new Ha,_[U]=W),W.getHandSpace()};function N(U){const W=b.indexOf(U.inputSource);if(W===-1)return;const ne=_[W];ne!==void 0&&ne.dispatchEvent({type:U.type,data:U.inputSource})}function q(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",D);for(let U=0;U<_.length;U++){const W=b[U];W!==null&&(b[U]=null,_[U].disconnect(W))}S=null,R=null,e.setRenderTarget(p),f=null,u=null,h=null,i=null,m=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",q),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:f}),m=new Wn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:is,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,ne=null,se=null;g.depth&&(se=g.stencil?35056:33190,W=g.stencil?Js:Ji,ne=g.stencil?Vs:ji);const he={colorFormat:32856,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(he),i.updateRenderState({layers:[u]}),m=new Wn(u.textureWidth,u.textureHeight,{format:_n,type:is,depthTexture:new Gx(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(m);H.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(U){for(let W=0;W<U.removed.length;W++){const ne=U.removed[W],se=b.indexOf(ne);se>=0&&(b[se]=null,_[se].disconnect(ne))}for(let W=0;W<U.added.length;W++){const ne=U.added[W];let se=b.indexOf(ne);if(se===-1){for(let H=0;H<_.length;H++)if(H>=b.length){b.push(ne),se=H;break}else if(b[H]===null){b[H]=ne,se=H;break}if(se===-1)break}const he=_[se];he&&he.connect(ne)}}const I=new E,z=new E;function X(U,W,ne){I.setFromMatrixPosition(W.matrixWorld),z.setFromMatrixPosition(ne.matrixWorld);const se=I.distanceTo(z),he=W.projectionMatrix.elements,H=ne.projectionMatrix.elements,Se=he[14]/(he[10]-1),xe=he[14]/(he[10]+1),ue=(he[9]+1)/he[5],fe=(he[9]-1)/he[5],Ne=(he[8]-1)/he[0],Z=(H[8]+1)/H[0],$=Se*Ne,ce=Se*Z,we=se/(-Ne+Z),de=we*-Ne;W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(de),U.translateZ(we),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ke=Se+we,De=xe+we,Ie=$-de,tt=ce+(se-de),Ke=ue*xe/De*ke,P=fe*xe/De*ke;U.projectionMatrix.makePerspective(Ie,tt,Ke,P,ke,De)}function Y(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;y.near=T.near=M.near=U.near,y.far=T.far=M.far=U.far,(S!==y.near||R!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,R=y.far);const W=U.parent,ne=y.cameras;Y(y,W);for(let he=0;he<ne.length;he++)Y(ne[he],W);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),U.matrix.copy(y.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const se=U.children;for(let he=0,H=se.length;he<H;he++)se[he].updateMatrixWorld(!0);ne.length===2?X(y,M,T):y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return x};let G=null;function ee(U,W){if(c=W.getViewerPose(l||r),d=W,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let se=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let he=0;he<ne.length;he++){const H=ne[he];let Se=null;if(f!==null)Se=f.getViewport(H);else{const ue=h.getViewSubImage(u,H);Se=ue.viewport,he===0&&(e.setRenderTargetTextures(m,ue.colorTexture,u.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(m))}let xe=C[he];xe===void 0&&(xe=new sn,xe.layers.enable(he),xe.viewport=new ft,C[he]=xe),xe.matrix.fromArray(H.transform.matrix),xe.projectionMatrix.fromArray(H.projectionMatrix),xe.viewport.set(Se.x,Se.y,Se.width,Se.height),he===0&&y.matrix.copy(xe.matrix),se===!0&&y.cameras.push(xe)}}for(let ne=0;ne<_.length;ne++){const se=b[ne],he=_[ne];se!==null&&he!==void 0&&he.update(se,W,l||r)}if(G&&G(U,W),W.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let ne=null;for(const se of x)W.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)x.delete(se),v.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of W.detectedPlanes)if(!x.has(se))x.add(se),v.set(se,W.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const he=v.get(se);se.lastChangedTime>he&&(v.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}d=null}const Q=new xf;Q.setAnimationLoop(ee),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function Hx(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,df(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?o(p,m,_,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Wx(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(b,M);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function h(b){const x=u();b.__bindingPointIndex=x;const v=a.createBuffer(),M=b.__size,T=b.usage;return a.bindBuffer(35345,v),a.bufferData(35345,M,T),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],v=b.uniforms,M=b.__cache;a.bindBuffer(35345,x);for(let T=0,C=v.length;T<C;T++){const y=v[T];if(d(y,T,M)===!0){const S=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let q=0;q<R.length;q++){const D=R[q],I=p(D);typeof D=="number"?(y.__data[0]=D,a.bufferSubData(35345,S+N,y.__data)):D.isMatrix3?(y.__data[0]=D.elements[0],y.__data[1]=D.elements[1],y.__data[2]=D.elements[2],y.__data[3]=D.elements[0],y.__data[4]=D.elements[3],y.__data[5]=D.elements[4],y.__data[6]=D.elements[5],y.__data[7]=D.elements[0],y.__data[8]=D.elements[6],y.__data[9]=D.elements[7],y.__data[10]=D.elements[8],y.__data[11]=D.elements[0]):(D.toArray(y.__data,N),N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,S,y.__data)}}a.bindBuffer(35345,null)}function d(b,x,v){const M=b.value;if(v[x]===void 0){if(typeof M=="number")v[x]=M;else{const T=Array.isArray(M)?M:[M],C=[];for(let y=0;y<T.length;y++)C.push(T[y].clone());v[x]=C}return!0}else if(typeof M=="number"){if(v[x]!==M)return v[x]=M,!0}else{const T=Array.isArray(v[x])?v[x]:[v[x]],C=Array.isArray(M)?M:[M];for(let y=0;y<T.length;y++){const S=T[y];if(S.equals(C[y])===!1)return S.copy(C[y]),!0}}return!1}function g(b){const x=b.uniforms;let v=0;const M=16;let T=0;for(let C=0,y=x.length;C<y;C++){const S=x[C],R={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let q=0,D=N.length;q<D;q++){const I=N[q],z=p(I);R.boundary+=z.boundary,R.storage+=z.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,C>0){T=v%M;const q=M-T;T!==0&&q-R.boundary<0&&(v+=M-T,S.__offset=v)}v+=R.storage}return T=v%M,T>0&&(v+=M-T),b.__size=v,b.__cache={},this}function p(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const b in i)a.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Xx(){const a=Wr("canvas");return a.style.display="block",a}function Sf(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Xx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ss,this.physicallyCorrectLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const p=this;let m=!1,_=0,b=0,x=null,v=-1,M=null;const T=new ft,C=new ft;let y=null,S=e.width,R=e.height,N=1,q=null,D=null;const I=new ft(0,0,S,R),z=new ft(0,0,S,R);let X=!1;const Y=new Wl;let G=!1,ee=!1,Q=null;const U=new Xe,W=new ie,ne=new E,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?N:1}let H=t;function Se(A,B){for(let K=0;K<A.length;K++){const k=A[K],J=e.getContext(k,B);if(J!==null)return J}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",We,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),H=Se(B,A),H===null)throw Se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xe,ue,fe,Ne,Z,$,ce,we,de,ke,De,Ie,tt,Ke,P,w,V,ae,le,pe,Oe,L,F,_e;function be(){xe=new n_(H),ue=new Zg(H,xe,a),xe.init(ue),L=new zx(H,xe,ue),fe=new Fx(H,xe,ue),Ne=new r_,Z=new bx,$=new kx(H,xe,fe,Z,ue,L,Ne),ce=new $g(p),we=new t_(p),de=new pm(H,ue),F=new jg(H,xe,de,ue),ke=new i_(H,de,Ne,F),De=new c_(H,ke,de,Ne),le=new l_(H,ue,$),w=new Jg(Z),Ie=new Mx(p,ce,we,xe,ue,F,w),tt=new Hx(p,Z),Ke=new wx,P=new Lx(xe,ue),ae=new Yg(p,ce,we,fe,De,h,r),V=new Nx(p,De,ue),_e=new Wx(H,Ne,ue,fe),pe=new Kg(H,xe,Ne,ue),Oe=new s_(H,xe,Ne,ue),Ne.programs=Ie.programs,p.capabilities=ue,p.extensions=xe,p.properties=Z,p.renderLists=Ke,p.shadowMap=V,p.state=fe,p.info=Ne}be();const ye=new Vx(p,H);this.xr=ye,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(S,R,!1))},this.getSize=function(A){return A.set(S,R)},this.setSize=function(A,B,K){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,R=B,e.width=Math.floor(A*N),e.height=Math.floor(B*N),K!==!1&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(S*N,R*N).floor()},this.setDrawingBufferSize=function(A,B,K){S=A,R=B,N=K,e.width=Math.floor(A*K),e.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,B,K,k){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,B,K,k),fe.viewport(T.copy(I).multiplyScalar(N).floor())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,B,K,k){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,B,K,k),fe.scissor(C.copy(z).multiplyScalar(N).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){fe.setScissorTest(X=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(A=!0,B=!0,K=!0){let k=0;A&&(k|=16384),B&&(k|=256),K&&(k|=1024),H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",We,!1),Ke.dispose(),P.dispose(),Z.dispose(),ce.dispose(),we.dispose(),De.dispose(),F.dispose(),_e.dispose(),Ie.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Me),ye.removeEventListener("sessionend",Ce),Q&&(Q.dispose(),Q=null),$e.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const A=Ne.autoReset,B=V.enabled,K=V.autoUpdate,k=V.needsUpdate,J=V.type;be(),Ne.autoReset=A,V.enabled=B,V.autoUpdate=K,V.needsUpdate=k,V.type=J}function We(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const B=A.target;B.removeEventListener("dispose",Ge),nt(B)}function nt(A){O(A),Z.remove(A)}function O(A){const B=Z.get(A).programs;B!==void 0&&(B.forEach(function(K){Ie.releaseProgram(K)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,k,J,Re){B===null&&(B=se);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,Ue=ni(A,B,K,k,J);fe.setMaterial(k,Fe);let Ve=K.index,Qe=1;k.wireframe===!0&&(Ve=ke.getWireframeAttribute(K),Qe=2);const qe=K.drawRange,Ye=K.attributes.position;let xt=qe.start*Qe,Xt=(qe.start+qe.count)*Qe;Re!==null&&(xt=Math.max(xt,Re.start*Qe),Xt=Math.min(Xt,(Re.start+Re.count)*Qe)),Ve!==null?(xt=Math.max(xt,0),Xt=Math.min(Xt,Ve.count)):Ye!=null&&(xt=Math.max(xt,0),Xt=Math.min(Xt,Ye.count));const An=Xt-xt;if(An<0||An===1/0)return;F.setup(J,k,Ue,K,Ve);let kn,rt=pe;if(Ve!==null&&(kn=de.get(Ve),rt=Oe,rt.setIndex(kn)),J.isMesh)k.wireframe===!0?(fe.setLineWidth(k.wireframeLinewidth*he()),rt.setMode(1)):rt.setMode(4);else if(J.isLine){let je=k.linewidth;je===void 0&&(je=1),fe.setLineWidth(je*he()),J.isLineSegments?rt.setMode(1):J.isLineLoop?rt.setMode(2):rt.setMode(3)}else J.isPoints?rt.setMode(0):J.isSprite&&rt.setMode(4);if(J.isInstancedMesh)rt.renderInstances(xt,An,J.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ms=Math.min(K.instanceCount,je);rt.renderInstances(xt,An,ms)}else rt.render(xt,An)},this.compile=function(A,B){function K(k,J,Re){k.transparent===!0&&k.side===ao?(k.side=Mn,k.needsUpdate=!0,$t(k,J,Re),k.side=Di,k.needsUpdate=!0,$t(k,J,Re),k.side=ao):$t(k,J,Re)}f=P.get(A),f.init(),g.push(f),A.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(p.physicallyCorrectLights),A.traverse(function(k){const J=k.material;if(J)if(Array.isArray(J))for(let Re=0;Re<J.length;Re++){const Fe=J[Re];K(Fe,A,k)}else K(J,A,k)}),g.pop(),f=null};let j=null;function oe(A){j&&j(A)}function Me(){$e.stop()}function Ce(){$e.start()}const $e=new xf;$e.setAnimationLoop(oe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(A){j=A,ye.setAnimationLoop(A),A===null?$e.stop():$e.start()},ye.addEventListener("sessionstart",Me),ye.addEventListener("sessionend",Ce),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,B,x),f=P.get(A,g.length),f.init(),g.push(f),U.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(U),ee=this.localClippingEnabled,G=w.init(this.clippingPlanes,ee,B),u=Ke.get(A,d.length),u.init(),d.push(u),St(A,B,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(q,D),G===!0&&w.beginShadows();const K=f.state.shadowsArray;if(V.render(K,A,B),G===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(u,A),f.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const k=B.cameras;for(let J=0,Re=k.length;J<Re;J++){const Fe=k[J];It(u,A,Fe,Fe.viewport)}}else It(u,A,B);x!==null&&($.updateMultisampleRenderTarget(x),$.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(p,A,B),F.resetDefaultState(),v=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function St(A,B,K,k){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){k&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Fe=De.update(A),Ue=A.material;Ue.visible&&u.push(A,Fe,Ue,K,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ne.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ne.render.frame),!A.frustumCulled||Y.intersectsObject(A))){k&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);const Fe=De.update(A),Ue=A.material;if(Array.isArray(Ue)){const Ve=Fe.groups;for(let Qe=0,qe=Ve.length;Qe<qe;Qe++){const Ye=Ve[Qe],xt=Ue[Ye.materialIndex];xt&&xt.visible&&u.push(A,Fe,xt,K,ne.z,Ye)}}else Ue.visible&&u.push(A,Fe,Ue,K,ne.z,null)}}const Re=A.children;for(let Fe=0,Ue=Re.length;Fe<Ue;Fe++)St(Re[Fe],B,K,k)}function It(A,B,K,k){const J=A.opaque,Re=A.transmissive,Fe=A.transparent;f.setupLightsView(K),Re.length>0&&qn(J,B,K),k&&fe.viewport(T.copy(k)),J.length>0&&at(J,B,K),Re.length>0&&at(Re,B,K),Fe.length>0&&at(Fe,B,K),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function qn(A,B,K){const k=ue.isWebGL2;Q===null&&(Q=new Wn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ur:is,minFilter:Jn,samples:k&&s===!0?4:0})),p.getDrawingBufferSize(W),k?Q.setSize(W.x,W.y):Q.setSize(Yo(W.x),Yo(W.y));const J=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const Re=p.toneMapping;p.toneMapping=pi,at(A,B,K),p.toneMapping=Re,$.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q),p.setRenderTarget(J)}function at(A,B,K){const k=B.isScene===!0?B.overrideMaterial:null;for(let J=0,Re=A.length;J<Re;J++){const Fe=A[J],Ue=Fe.object,Ve=Fe.geometry,Qe=k===null?Fe.material:k,qe=Fe.group;Ue.layers.test(K.layers)&&En(Ue,B,K,Ve,Qe,qe)}}function En(A,B,K,k,J,Re){A.onBeforeRender(p,B,K,k,J,Re),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(p,B,K,k,A,Re),J.transparent===!0&&J.side===ao?(J.side=Mn,J.needsUpdate=!0,p.renderBufferDirect(K,B,k,J,A,Re),J.side=Di,J.needsUpdate=!0,p.renderBufferDirect(K,B,k,J,A,Re),J.side=ao):p.renderBufferDirect(K,B,k,J,A,Re),A.onAfterRender(p,B,K,k,J,Re)}function $t(A,B,K){B.isScene!==!0&&(B=se);const k=Z.get(A),J=f.state.lights,Re=f.state.shadowsArray,Fe=J.state.version,Ue=Ie.getParameters(A,J.state,Re,B,K),Ve=Ie.getProgramCacheKey(Ue);let Qe=k.programs;k.environment=A.isMeshStandardMaterial?B.environment:null,k.fog=B.fog,k.envMap=(A.isMeshStandardMaterial?we:ce).get(A.envMap||k.environment),Qe===void 0&&(A.addEventListener("dispose",Ge),Qe=new Map,k.programs=Qe);let qe=Qe.get(Ve);if(qe!==void 0){if(k.currentProgram===qe&&k.lightsStateVersion===Fe)return mr(A,Ue),qe}else Ue.uniforms=Ie.getUniforms(A),A.onBuild(K,Ue,p),A.onBeforeCompile(Ue,p),qe=Ie.acquireProgram(Ue,Ve),Qe.set(Ve,qe),k.uniforms=Ue.uniforms;const Ye=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=w.uniform),mr(A,Ue),k.needsLights=ps(A),k.lightsStateVersion=Fe,k.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.directionalShadowMap.value=J.state.directionalShadowMap,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotShadowMap.value=J.state.spotShadowMap,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMap.value=J.state.pointShadowMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix);const xt=qe.getUniforms(),Xt=Go.seqWithValue(xt.seq,Ye);return k.currentProgram=qe,k.uniformsList=Xt,qe}function mr(A,B){const K=Z.get(A);K.outputEncoding=B.outputEncoding,K.instancing=B.instancing,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function ni(A,B,K,k,J){B.isScene!==!0&&(B=se),$.resetTextureUnits();const Re=B.fog,Fe=k.isMeshStandardMaterial?B.environment:null,Ue=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ss,Ve=(k.isMeshStandardMaterial?we:ce).get(k.envMap||Fe),Qe=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!k.normalMap&&!!K.attributes.tangent,Ye=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,Xt=!!K.morphAttributes.color,An=k.toneMapped?p.toneMapping:pi,kn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rt=kn!==void 0?kn.length:0,je=Z.get(k),ms=f.state.lights;if(G===!0&&(ee===!0||A!==M)){const Et=A===M&&k.id===v;w.setState(k,A,Et)}let te=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ms.state.version||je.outputEncoding!==Ue||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ve||k.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==w.numPlanes||je.numIntersection!==w.numIntersection)||je.vertexAlphas!==Qe||je.vertexTangents!==qe||je.morphTargets!==Ye||je.morphNormals!==xt||je.morphColors!==Xt||je.toneMapping!==An||ue.isWebGL2===!0&&je.morphTargetsCount!==rt)&&(te=!0):(te=!0,je.__version=k.version);let Ee=je.currentProgram;te===!0&&(Ee=$t(k,B,J));let ze=!1,Ze=!1,Te=!1;const me=Ee.getUniforms(),wt=je.uniforms;if(fe.useProgram(Ee.program)&&(ze=!0,Ze=!0,Te=!0),k.id!==v&&(v=k.id,Ze=!0),ze||M!==A){if(me.setValue(H,"projectionMatrix",A.projectionMatrix),ue.logarithmicDepthBuffer&&me.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Ze=!0,Te=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Et=me.map.cameraPosition;Et!==void 0&&Et.setValue(H,ne.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||J.isSkinnedMesh)&&me.setValue(H,"viewMatrix",A.matrixWorldInverse)}if(J.isSkinnedMesh){me.setOptional(H,J,"bindMatrix"),me.setOptional(H,J,"bindMatrixInverse");const Et=J.skeleton;Et&&(ue.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),me.setValue(H,"boneTexture",Et.boneTexture,$),me.setValue(H,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tt=K.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0&&ue.isWebGL2===!0)&&le.update(J,K,k,Ee),(Ze||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,me.setValue(H,"receiveShadow",J.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(wt.envMap.value=Ve,wt.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Ze&&(me.setValue(H,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&ds(wt,Te),Re&&k.fog===!0&&tt.refreshFogUniforms(wt,Re),tt.refreshMaterialUniforms(wt,k,N,R,Q),Go.upload(H,je.uniformsList,wt,$)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Go.upload(H,je.uniformsList,wt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(H,"center",J.center),me.setValue(H,"modelViewMatrix",J.modelViewMatrix),me.setValue(H,"normalMatrix",J.normalMatrix),me.setValue(H,"modelMatrix",J.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Et=k.uniformsGroups;for(let zn=0,gr=Et.length;zn<gr;zn++)if(ue.isWebGL2){const gs=Et[zn];_e.update(gs,Ee),_e.bind(gs,Ee)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ee}function ds(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ps(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,B,K){Z.get(A.texture).__webglTexture=B,Z.get(A.depthTexture).__webglTexture=K;const k=Z.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=K===void 0,k.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const K=Z.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){x=A,_=B,b=K;let k=!0,J=null,Re=!1,Fe=!1;if(A){const Ve=Z.get(A);Ve.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),k=!1):Ve.__webglFramebuffer===void 0?$.setupRenderTarget(A):Ve.__hasExternalTextures&&$.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Fe=!0);const qe=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(J=qe[B],Re=!0):ue.isWebGL2&&A.samples>0&&$.useMultisampledRTT(A)===!1?J=Z.get(A).__webglMultisampledFramebuffer:J=qe,T.copy(A.viewport),C.copy(A.scissor),y=A.scissorTest}else T.copy(I).multiplyScalar(N).floor(),C.copy(z).multiplyScalar(N).floor(),y=X;if(fe.bindFramebuffer(36160,J)&&ue.drawBuffers&&k&&fe.drawBuffers(A,J),fe.viewport(T),fe.scissor(C),fe.setScissorTest(y),Re){const Ve=Z.get(A.texture);H.framebufferTexture2D(36160,36064,34069+B,Ve.__webglTexture,K)}else if(Fe){const Ve=Z.get(A.texture),Qe=B||0;H.framebufferTextureLayer(36160,36064,Ve.__webglTexture,K||0,Qe)}v=-1},this.readRenderTargetPixels=function(A,B,K,k,J,Re,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ue=Ue[Fe]),Ue){fe.bindFramebuffer(36160,Ue);try{const Ve=A.texture,Qe=Ve.format,qe=Ve.type;if(Qe!==_n&&L.convert(Qe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=qe===Ur&&(xe.has("EXT_color_buffer_half_float")||ue.isWebGL2&&xe.has("EXT_color_buffer_float"));if(qe!==is&&L.convert(qe)!==H.getParameter(35738)&&!(qe===wi&&(ue.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-k&&K>=0&&K<=A.height-J&&H.readPixels(B,K,k,J,L.convert(Qe),L.convert(qe),Re)}finally{const Ve=x!==null?Z.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(A,B,K=0){const k=Math.pow(2,-K),J=Math.floor(B.image.width*k),Re=Math.floor(B.image.height*k);$.setTexture2D(B,0),H.copyTexSubImage2D(3553,K,0,0,A.x,A.y,J,Re),fe.unbindTexture()},this.copyTextureToTexture=function(A,B,K,k=0){const J=B.image.width,Re=B.image.height,Fe=L.convert(K.format),Ue=L.convert(K.type);$.setTexture2D(K,0),H.pixelStorei(37440,K.flipY),H.pixelStorei(37441,K.premultiplyAlpha),H.pixelStorei(3317,K.unpackAlignment),B.isDataTexture?H.texSubImage2D(3553,k,A.x,A.y,J,Re,Fe,Ue,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(3553,k,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Fe,B.mipmaps[0].data):H.texSubImage2D(3553,k,A.x,A.y,Fe,Ue,B.image),k===0&&K.generateMipmaps&&H.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K,k,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,Ue=A.max.z-A.min.z+1,Ve=L.convert(k.format),Qe=L.convert(k.type);let qe;if(k.isData3DTexture)$.setTexture3D(k,0),qe=32879;else if(k.isDataArrayTexture)$.setTexture2DArray(k,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment);const Ye=H.getParameter(3314),xt=H.getParameter(32878),Xt=H.getParameter(3316),An=H.getParameter(3315),kn=H.getParameter(32877),rt=K.isCompressedTexture?K.mipmaps[0]:K.image;H.pixelStorei(3314,rt.width),H.pixelStorei(32878,rt.height),H.pixelStorei(3316,A.min.x),H.pixelStorei(3315,A.min.y),H.pixelStorei(32877,A.min.z),K.isDataTexture||K.isData3DTexture?H.texSubImage3D(qe,J,B.x,B.y,B.z,Re,Fe,Ue,Ve,Qe,rt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(qe,J,B.x,B.y,B.z,Re,Fe,Ue,Ve,rt.data)):H.texSubImage3D(qe,J,B.x,B.y,B.z,Re,Fe,Ue,Ve,Qe,rt),H.pixelStorei(3314,Ye),H.pixelStorei(32878,xt),H.pixelStorei(3316,Xt),H.pixelStorei(3315,An),H.pixelStorei(32877,kn),J===0&&k.generateMipmaps&&H.generateMipmap(qe),fe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,fe.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qx extends Sf{}qx.prototype.isWebGL1Renderer=!0;class ql{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new ql(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Yx extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class jx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new E;class Yl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kh=new E,zh=new ft,Bh=new ft,Kx=new E,Uh=new Xe;class Zx extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;zh.fromBufferAttribute(i.attributes.skinIndex,e),Bh.fromBufferAttribute(i.attributes.skinWeight,e),kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Bh.getComponent(s);if(r!==0){const o=zh.getComponent(s);Uh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Kx.copy(kh).applyMatrix4(Uh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wf extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jx extends Gt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=zt,h=zt,u,f){super(null,r,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new Xe,$x=new Xe;class jl{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:$x;Gh.multiplyMatrices(o,t[s]),Gh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=rf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Jx(t,e,e,_n,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new wf),this.bones.push(r),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vh extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hh=new Xe,Wh=new Xe,Ao=[],Qx=new Xe,wr=new Be;class ev extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Qx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Hh),Wh.multiplyMatrices(n,Hh),wr.matrixWorld=Wh,wr.raycast(e,Ao);for(let r=0,o=Ao.length;r<o;r++){const l=Ao[r];l.instanceId=s,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xh=new E,qh=new E,Yh=new Xe,Wa=new ra,Co=new ur;class Kl extends gt{constructor(e=new _t,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xh.fromBufferAttribute(t,i-1),qh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xh.distanceTo(qh);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Yh.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Yh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,u=new E,f=new E,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),b=Math.min(g.count,r.start+r.count);for(let x=_,v=b-1;x<v;x+=d){const M=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,T),Wa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),b=Math.min(m.count,r.start+r.count);for(let x=_,v=b-1;x<v;x+=d){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Wa.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const jh=new E,Kh=new E;class Zl extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jh.distanceTo(Kh);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tv extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tf extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new Xe,xl=new ra,Po=new ur,Lo=new E;class er extends gt{constructor(e=new _t,t=new Tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Zh.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Zh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);Lo.fromBufferAttribute(u,m),Jh(Lo,m,l,i,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,p=d;g<p;g++)Lo.fromBufferAttribute(u,g),Jh(Lo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jh(a,e,t,n,i,s,r){const o=xl.distanceSqToPoint(a);if(o<t){const l=new E;xl.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class $n extends Gt{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new ie:new E);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],s=[],r=[],o=new E,l=new Xe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new E)}s[0]=new E,r[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Bt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Bt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends ei{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ie,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nv extends Jl{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,u){let f=(r-s)/c-(o-s)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+u)+(l-o)/u;f*=h,d*=h,i(r,o,f,d)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const Ro=new E,Xa=new $l,qa=new $l,Ya=new $l;class iv extends ei{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Ro.subVectors(i[0],i[1]).add(i[0]),c=Ro);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ro.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Xa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,m),qa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,m),Ya.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),qa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function sv(a,e){const t=1-a;return t*t*e}function rv(a,e){return 2*(1-a)*a*e}function ov(a,e){return a*a*e}function Nr(a,e,t,n){return sv(a,e)+rv(a,t)+ov(a,n)}function av(a,e){const t=1-a;return t*t*t*e}function lv(a,e){const t=1-a;return 3*t*t*a*e}function cv(a,e){return 3*(1-a)*a*a*e}function hv(a,e){return a*a*a*e}function Fr(a,e,t,n,i){return av(a,e)+lv(a,t)+cv(a,n)+hv(a,i)}class Ef extends ei{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,r.x,o.x),Fr(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vl extends ei{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Fr(e,i.x,s.x,r.x,o.x),Fr(e,i.y,s.y,r.y,o.y),Fr(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ql extends ei{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ie;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends ei{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends ei{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Nr(e,i.x,s.x,r.x),Nr(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fv extends ei{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Nr(e,i.x,s.x,r.x),Nr(e,i.y,s.y,r.y),Nr(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set($h(o,l.x,c.x,h.x,u.x),$h(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Pf=Object.freeze({__proto__:null,ArcCurve:nv,CatmullRomCurve3:iv,CubicBezierCurve:Ef,CubicBezierCurve3:vl,EllipseCurve:Jl,LineCurve:Ql,LineCurve3:uv,QuadraticBezierCurve:Af,QuadraticBezierCurve3:fv,SplineCurve:Cf});class dv extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ql(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Pf[i.type]().fromJSON(i))}return this}}class yl extends dv{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ql(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Af(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new Ef(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Cf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new Jl(e,t,n,i,s,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ht extends _t{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const p=[],m=n/2;let _=0;b(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function b(){const v=new E,M=new E;let T=0;const C=(t-e)/n;for(let y=0;y<=s;y++){const S=[],R=y/s,N=R*(t-e)+e;for(let q=0;q<=i;q++){const D=q/i,I=D*l+o,z=Math.sin(I),X=Math.cos(I);M.x=N*z,M.y=-R*n+m,M.z=N*X,u.push(M.x,M.y,M.z),v.set(z,C,X).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-R),S.push(g++)}p.push(S)}for(let y=0;y<i;y++)for(let S=0;S<s;S++){const R=p[S][y],N=p[S+1][y],q=p[S+1][y+1],D=p[S][y+1];h.push(R,N,D),h.push(N,q,D),T+=6}c.addGroup(_,T,0),_+=T}function x(v){const M=g,T=new ie,C=new E;let y=0;const S=v===!0?e:t,R=v===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;const N=g;for(let q=0;q<=i;q++){const I=q/i*l+o,z=Math.cos(I),X=Math.sin(I);C.x=S*X,C.y=m*R,C.z=S*z,u.push(C.x,C.y,C.z),f.push(0,R,0),T.x=z*.5+.5,T.y=X*.5*R+.5,d.push(T.x,T.y),g++}for(let q=0;q<i;q++){const D=M+q,I=N+q;v===!0?h.push(I,I+1,D):h.push(I+1,I,D),y+=3}c.addGroup(_,y,v===!0?1:2),_+=y}}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ec extends Ht{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ec(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo extends yl{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new yl().fromJSON(i))}return this}}const pv={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=Lf(a,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,h,u,f,d;if(n&&(s=vv(a,e,s,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let g=t;g<i;g+=t)u=a[g],f=a[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Xr(s,r,t,o,l,d,0),r}};function Lf(a,e,t,n,i){let s,r;if(i===Lv(a,e,t,n)>0)for(s=e;s<t;s+=n)r=Qh(s,a[s],a[s+1],r);else for(s=t-n;s>=e;s-=n)r=Qh(s,a[s],a[s+1],r);return r&&ca(r,r.next)&&(Yr(r),r=r.next),r}function os(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(ca(t,t.next)||yt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xr(a,e,t,n,i,s,r){if(!a)return;!r&&s&&wv(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?gv(a,n,i,s):mv(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),Yr(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=_v(os(a),e,t),Xr(a,e,t,n,i,s,2)):r===2&&xv(a,e,t,n,i,s):Xr(os(a),e,t,n,i,s,1);break}}}function mv(a){const e=a.prev,t=a,n=a.next;if(yt(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<r?i:r:s<r?s:r,u=o<l?o<c?o:c:l<c?l:c,f=i>s?i>r?i:r:s>r?s:r,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ks(i,o,s,l,r,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gv(a,e,t,n){const i=a.prev,s=a,r=a.next;if(yt(i,s,r)>=0)return!1;const o=i.x,l=s.x,c=r.x,h=i.y,u=s.y,f=r.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,p=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,_=Ml(d,g,e,t,n),b=Ml(p,m,e,t,n);let x=a.prevZ,v=a.nextZ;for(;x&&x.z>=_&&v&&v.z<=b;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&ks(o,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=p&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&ks(o,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&ks(o,h,l,u,c,f,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=m&&v!==i&&v!==r&&ks(o,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _v(a,e,t){let n=a;do{const i=n.prev,s=n.next.next;!ca(i,s)&&Rf(i,n,n.next,s)&&qr(i,s)&&qr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Yr(n),Yr(n.next),n=a=s),n=n.next}while(n!==a);return os(n)}function xv(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Av(r,o)){let l=If(r,o);r=os(r,r.next),l=os(l,l.next),Xr(r,e,t,n,i,s,0),Xr(l,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function vv(a,e,t,n){const i=[];let s,r,o,l,c;for(s=0,r=e.length;s<r;s++)o=e[s]*n,l=s<r-1?e[s+1]*n:a.length,c=Lf(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ev(c));for(i.sort(yv),s=0;s<i.length;s++)t=Mv(i[s],t);return t}function yv(a,e){return a.x-e.x}function Mv(a,e){const t=bv(a,e);if(!t)return e;const n=If(t,a);return os(n,n.next),os(t,t.next)}function bv(a,e){let t=e,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ks(r<c?s:n,r,l,c,r<c?n:s,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(s-t.x),qr(t,a)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Sv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Sv(a,e){return yt(a.prev,a,e.prev)<0&&yt(e.next,a,a.next)<0}function wv(a,e,t,n){let i=a;do i.z===0&&(i.z=Ml(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Tv(i)}function Tv(a){let e,t,n,i,s,r,o,l,c=1;do{for(t=a,a=null,s=null,r=0;t;){for(r++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return a}function Ml(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Ev(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function ks(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function Av(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Cv(a,e)&&(qr(a,e)&&qr(e,a)&&Pv(a,e)&&(yt(a.prev,a,e.prev)||yt(a,e.prev,e))||ca(a,e)&&yt(a.prev,a,a.next)>0&&yt(e.prev,e,e.next)>0)}function yt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function ca(a,e){return a.x===e.x&&a.y===e.y}function Rf(a,e,t,n){const i=Do(yt(a,e,t)),s=Do(yt(a,e,n)),r=Do(yt(t,n,a)),o=Do(yt(t,n,e));return!!(i!==s&&r!==o||i===0&&Io(a,t,e)||s===0&&Io(a,n,e)||r===0&&Io(t,a,n)||o===0&&Io(t,e,n))}function Io(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Do(a){return a>0?1:a<0?-1:0}function Cv(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Rf(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function qr(a,e){return yt(a.prev,a,a.next)<0?yt(a,e,a.next)>=0&&yt(a,a.prev,e)>=0:yt(a,e,a.prev)<0||yt(a,a.next,e)<0}function Pv(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function If(a,e){const t=new bl(a.i,a.x,a.y),n=new bl(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qh(a,e,t,n){const i=new bl(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function bl(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lv(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class Hs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Hs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];eu(e),tu(n,e);let r=e.length;t.forEach(eu);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,tu(n,t[l]);const o=pv.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function eu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function tu(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class tc extends _t{constructor(e=new Vo([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Rv;let x,v=!1,M,T,C,y;_&&(x=_.getSpacedPoints(h),v=!0,f=!1,M=_.computeFrenetFrames(h,!1),T=new E,C=new E,y=new E),f||(m=0,d=0,g=0,p=0);const S=o.extractPoints(c);let R=S.shape;const N=S.holes;if(!Hs.isClockWise(R)){R=R.reverse();for(let Z=0,$=N.length;Z<$;Z++){const ce=N[Z];Hs.isClockWise(ce)&&(N[Z]=ce.reverse())}}const D=Hs.triangulateShape(R,N),I=R;for(let Z=0,$=N.length;Z<$;Z++){const ce=N[Z];R=R.concat(ce)}function z(Z,$,ce){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(ce).add(Z)}const X=R.length,Y=D.length;function G(Z,$,ce){let we,de,ke;const De=Z.x-$.x,Ie=Z.y-$.y,tt=ce.x-Z.x,Ke=ce.y-Z.y,P=De*De+Ie*Ie,w=De*Ke-Ie*tt;if(Math.abs(w)>Number.EPSILON){const V=Math.sqrt(P),ae=Math.sqrt(tt*tt+Ke*Ke),le=$.x-Ie/V,pe=$.y+De/V,Oe=ce.x-Ke/ae,L=ce.y+tt/ae,F=((Oe-le)*Ke-(L-pe)*tt)/(De*Ke-Ie*tt);we=le+De*F-Z.x,de=pe+Ie*F-Z.y;const _e=we*we+de*de;if(_e<=2)return new ie(we,de);ke=Math.sqrt(_e/2)}else{let V=!1;De>Number.EPSILON?tt>Number.EPSILON&&(V=!0):De<-Number.EPSILON?tt<-Number.EPSILON&&(V=!0):Math.sign(Ie)===Math.sign(Ke)&&(V=!0),V?(we=-Ie,de=De,ke=Math.sqrt(P)):(we=De,de=Ie,ke=Math.sqrt(P/2))}return new ie(we/ke,de/ke)}const ee=[];for(let Z=0,$=I.length,ce=$-1,we=Z+1;Z<$;Z++,ce++,we++)ce===$&&(ce=0),we===$&&(we=0),ee[Z]=G(I[Z],I[ce],I[we]);const Q=[];let U,W=ee.concat();for(let Z=0,$=N.length;Z<$;Z++){const ce=N[Z];U=[];for(let we=0,de=ce.length,ke=de-1,De=we+1;we<de;we++,ke++,De++)ke===de&&(ke=0),De===de&&(De=0),U[we]=G(ce[we],ce[ke],ce[De]);Q.push(U),W=W.concat(U)}for(let Z=0;Z<m;Z++){const $=Z/m,ce=d*Math.cos($*Math.PI/2),we=g*Math.sin($*Math.PI/2)+p;for(let de=0,ke=I.length;de<ke;de++){const De=z(I[de],ee[de],we);Se(De.x,De.y,-ce)}for(let de=0,ke=N.length;de<ke;de++){const De=N[de];U=Q[de];for(let Ie=0,tt=De.length;Ie<tt;Ie++){const Ke=z(De[Ie],U[Ie],we);Se(Ke.x,Ke.y,-ce)}}}const ne=g+p;for(let Z=0;Z<X;Z++){const $=f?z(R[Z],W[Z],ne):R[Z];v?(C.copy(M.normals[0]).multiplyScalar($.x),T.copy(M.binormals[0]).multiplyScalar($.y),y.copy(x[0]).add(C).add(T),Se(y.x,y.y,y.z)):Se($.x,$.y,0)}for(let Z=1;Z<=h;Z++)for(let $=0;$<X;$++){const ce=f?z(R[$],W[$],ne):R[$];v?(C.copy(M.normals[Z]).multiplyScalar(ce.x),T.copy(M.binormals[Z]).multiplyScalar(ce.y),y.copy(x[Z]).add(C).add(T),Se(y.x,y.y,y.z)):Se(ce.x,ce.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){const $=Z/m,ce=d*Math.cos($*Math.PI/2),we=g*Math.sin($*Math.PI/2)+p;for(let de=0,ke=I.length;de<ke;de++){const De=z(I[de],ee[de],we);Se(De.x,De.y,u+ce)}for(let de=0,ke=N.length;de<ke;de++){const De=N[de];U=Q[de];for(let Ie=0,tt=De.length;Ie<tt;Ie++){const Ke=z(De[Ie],U[Ie],we);v?Se(Ke.x,Ke.y+x[h-1].y,x[h-1].x+ce):Se(Ke.x,Ke.y,u+ce)}}}se(),he();function se(){const Z=i.length/3;if(f){let $=0,ce=X*$;for(let we=0;we<Y;we++){const de=D[we];xe(de[2]+ce,de[1]+ce,de[0]+ce)}$=h+m*2,ce=X*$;for(let we=0;we<Y;we++){const de=D[we];xe(de[0]+ce,de[1]+ce,de[2]+ce)}}else{for(let $=0;$<Y;$++){const ce=D[$];xe(ce[2],ce[1],ce[0])}for(let $=0;$<Y;$++){const ce=D[$];xe(ce[0]+X*h,ce[1]+X*h,ce[2]+X*h)}}n.addGroup(Z,i.length/3-Z,0)}function he(){const Z=i.length/3;let $=0;H(I,$),$+=I.length;for(let ce=0,we=N.length;ce<we;ce++){const de=N[ce];H(de,$),$+=de.length}n.addGroup(Z,i.length/3-Z,1)}function H(Z,$){let ce=Z.length;for(;--ce>=0;){const we=ce;let de=ce-1;de<0&&(de=Z.length-1);for(let ke=0,De=h+m*2;ke<De;ke++){const Ie=X*ke,tt=X*(ke+1),Ke=$+we+Ie,P=$+de+Ie,w=$+de+tt,V=$+we+tt;ue(Ke,P,w,V)}}}function Se(Z,$,ce){l.push(Z),l.push($),l.push(ce)}function xe(Z,$,ce){fe(Z),fe($),fe(ce);const we=i.length/3,de=b.generateTopUV(n,i,we-3,we-2,we-1);Ne(de[0]),Ne(de[1]),Ne(de[2])}function ue(Z,$,ce,we){fe(Z),fe($),fe(we),fe($),fe(ce),fe(we);const de=i.length/3,ke=b.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);Ne(ke[0]),Ne(ke[1]),Ne(ke[3]),Ne(ke[1]),Ne(ke[2]),Ne(ke[3])}function fe(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Ne(Z){s.push(Z.x),s.push(Z.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Iv(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Pf[i.type]().fromJSON(i)),new tc(n,e.options)}}const Rv={generateTopUV:function(a,e,t,n,i){const s=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ie(s,r),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(a,e,t,n,i,s){const r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ie(r,1-l),new ie(c,1-u),new ie(f,1-g),new ie(p,1-_)]:[new ie(o,1-l),new ie(h,1-u),new ie(d,1-g),new ie(m,1-_)]}};function Iv(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nc extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new E,g=new ie;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){const _=s+m/n*r;d.x=u*Math.cos(_),d.y=u*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let p=0;p<i;p++){const m=p*(n+1);for(let _=0;_<n;_++){const b=_+m,x=b,v=b+n+1,M=b+n+2,T=b+1;o.push(x,v,T),o.push(v,M,T)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}static fromJSON(e){return new nc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ic extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new E,f=new E,d=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const b=[],x=_/n;let v=0;_==0&&r==0?v=.5/t:_==n&&l==Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){const T=M/t;u.x=-e*Math.cos(i+T*s)*Math.sin(r+x*o),u.y=e*Math.cos(r+x*o),u.z=e*Math.sin(i+T*s)*Math.sin(r+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),m.push(T+v,1-x),b.push(c++)}h.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const x=h[_][b+1],v=h[_][b],M=h[_+1][b],T=h[_+1][b+1];(_!==0||r>0)&&d.push(x,v,T),(_!==n-1||l<Math.PI)&&d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(p,3)),this.setAttribute("uv",new Je(m,2))}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ko extends _t{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new E,u=new E,f=new E;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const p=g/i*s,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const p=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,_=(i+1)*(d-1)+g,b=(i+1)*d+g;r.push(p,m,b),r.push(m,_,b)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}static fromJSON(e){return new Ko(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dt extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sf,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hs extends dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Mi(a,e,t){return Df(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Oo(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Df(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Dv(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nu(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function Of(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class io{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ov extends io{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case th:s=e,o=2*t-n;break;case nh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:r=e,l=2*n-t;break;case nh:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,b=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*p+.5*g,v=d*m-d*p;for(let M=0;M!==o;++M)s[M]=_*r[h+M]+b*r[c+M]+x*r[l+M]+v*r[u+M];return s}}class Nv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=r[c+f]*u+r[l+f]*h;return s}}class Fv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ov(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=Mi(n,s,r),this.values=Mi(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Df(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Mi(this.times),t=Mi(this.values),n=this.getValueSize(),i=this.getInterpolation()===xa,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const p=t[u+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const u=o*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=Mi(e,0,r),this.values=Mi(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Mi(this.times,0),t=Mi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=$s;class dr extends ti{}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Gr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nf extends ti{}Nf.prototype.ValueTypeName="color";class jr extends ti{}jr.prototype.ValueTypeName="number";class kv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ln.slerpFlat(s,0,r,c-o,r,c,l);return s}}class as extends ti{InterpolantFactoryMethodLinear(e){return new kv(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=$s;as.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends ti{}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Gr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends ti{}Kr.prototype.ValueTypeName="vector";class zv{constructor(e,t=-1,n,i=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Uv(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(ti.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Dv(l);l=nu(l,1,h),c=nu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new jr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,p){if(d.length!==0){const m=[],_=[];Of(d,m,_,g),m.length!==0&&p.push(new u(f,m,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let b=0;b!==f[g].morphTargets.length;++b){const x=f[g];m.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new jr(".morphTargetInfluence["+p+"]",m,_))}l=d.length*r}else{const d=".bones["+t[u].name+"]";n(Kr,d+".position",f,"pos",i),n(as,d+".quaternion",f,"rot",i),n(Kr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return Kr;case"color":return Nf;case"quaternion":return as;case"bool":case"boolean":return dr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Uv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bv(a.type);if(a.times===void 0){const t=[],n=[];Of(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const tr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class sc{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Gv=new sc;class us{constructor(e){this.manager=e!==void 0?e:Gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const li={};class Vv extends Error{constructor(e,t){super(e),this.response=t}}class Zr extends us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=tr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=li[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){b();function b(){u.read().then(({done:x,value:v})=>{if(x)_.close();else{p+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let T=0,C=h.length;T<C;T++){const y=h[T];y.onProgress&&y.onProgress(M)}_.enqueue(v),b()}})}}});return new Response(m)}else throw new Vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{tr.add(e,c);const h=li[e];delete li[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=li[e];if(h===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hv extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=tr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=Wr("img");function l(){h(),tr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Wv extends us{constructor(e){super(e)}load(e,t,n,i){const s=new Gt,r=new Hv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class so extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ff extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new Xe,iu=new E,su=new E;class rc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xv extends rc{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kf extends so{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Xv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ru=new Xe,Tr=new E,Ka=new E;class qv extends rc{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),i.makeTranslation(-Tr.x,-Tr.y,-Tr.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}}class zs extends so{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yv extends rc{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Li extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DefaultUp),this.updateMatrix(),this.target=new gt,this.shadow=new Yv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oc extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jv extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=tr.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){tr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class zf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ou();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ou(){return(typeof performance>"u"?Date:performance).now()}const ac="\\[\\]\\.:\\/",Kv=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",Zv="[^"+ac.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",lc),$v=/(WCOD+)?/.source.replace("WCOD",Zv),Qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),ty=new RegExp("^"+Jv+$v+Qv+ey+"$"),ny=["material","materials","bones","map"];class iy{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kv,"")}static parseTrackName(e){const t=ty.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ny.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=iy;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sy{constructor(e,t,n=0,i=1/0){this.ray=new ra(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sl(e,this,n,t),n.sort(au),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Sl(e[i],this,n,t);return n.sort(au),n}}function au(a,e){return a.distance-e.distance}function Sl(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Sl(i[s],e,t,!0)}}class lu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ry{constructor(){this.type="ShapePath",this.color=new Pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const b=[];for(let x=0,v=_.length;x<v;x++){const M=_[x],T=new Vo;T.curves=M.curves,b.push(T)}return b}function n(_,b){const x=b.length;let v=!1;for(let M=x-1,T=0;T<x;M=T++){let C=b[M],y=b[T],S=y.x-C.x,R=y.y-C.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(C=b[T],S=-S,y=b[M],R=-R),_.y<C.y||_.y>y.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const N=R*(_.x-C.x)-S*(_.y-C.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(_.y!==C.y)continue;if(y.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=y.x)return!0}}return v}const i=Hs.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,l;const c=[];if(s.length===1)return o=s[0],l=new Vo,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],g=0,p;f[g]=void 0,d[g]=[];for(let _=0,b=s.length;_<b;_++)o=s[_],p=o.getPoints(),r=i(p),r=e?!r:r,r?(!h&&f[g]&&g++,f[g]={s:new Vo,p},f[g].s.curves=o.curves,h&&g++,d[g]=[]):d[g].push({h:o,p:p[0]});if(!f[0])return t(s);if(f.length>1){let _=!1,b=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const M=d[x];for(let T=0;T<M.length;T++){const C=M[T];let y=!0;for(let S=0;S<f.length;S++)n(C.p,f[S].p)&&(x!==S&&b++,y?(y=!1,u[S].push(C)):_=!0);y&&u[x].push(C)}}b>0&&_===!1&&(d=u)}let m;for(let _=0,b=f.length;_<b;_++){l=f[_].s,c.push(l),m=d[_];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);class cc extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new yy(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Qi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Zr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Qi.decodeText(new Uint8Array(e,0,4))===Bf){try{r[it.KHR_BINARY_GLTF]=new My(e)}catch(h){i&&i(h);return}s=JSON.parse(r[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(Qi.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Oy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],u=s.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:r[h]=new ly;break;case it.KHR_DRACO_MESH_COMPRESSION:r[h]=new by(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:r[h]=new Sy;break;case it.KHR_MESH_QUANTIZATION:r[h]=new wy;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function oy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ay{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Pe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Li(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zs(h),c.distance=u;break;case"spot":c=new kf(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ly{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,st))}return Promise.all(i)}}class cy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(o,o)}return Promise.all(s)}}class uy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class fy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,st)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class dy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class py{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Pe(o[0],o[1],o[2]),Promise.all(s)}}class my{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class gy{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Pe(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,st)),Promise.all(s)}}class _y{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class xy{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vy{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class yy{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const p=new Xe,m=new E,_=new ln,b=new E(1,1,1),x=new ev(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,p.compose(m,_,b));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);gt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Bf="glTF",Er=12,cu={JSON:1313821514,BIN:5130562};class My{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er);if(this.header={magic:Qi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Er,i=new DataView(e,Er);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===cu.JSON){const l=new Uint8Array(e,Er+s,r);this.content=Qi.decodeText(l)}else if(o===cu.BIN){const l=Er+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class by{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const u=wl[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=wl[h]||h.toLowerCase();if(r[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Ws[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}u(f)},o,c)})})}}class Sy{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wy{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Uf extends io{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,p=g-c,m=-2*d+3*f,_=d-f,b=1-m,x=_-f+u;for(let v=0;v!==o;v++){const M=r[p+v+o],T=r[p+v+l]*h,C=r[g+v+o],y=r[g+v]*h;s[v]=b*M+x*T+m*C+_*y}return s}}const Ty=new ln;class Ey extends Uf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Ty.fromArray(s).normalize().toArray(s),s}}const Ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hu={9728:zt,9729:Lt,9984:dl,9985:ef,9986:Bo,9987:Jn},uu={33071:on,33648:qo,10497:Oi},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ay={CUBICSPLINE:void 0,LINEAR:$s,STEP:Gr},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cy(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new dt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),a.DefaultMaterial}function Ar(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function Ly(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ry(a){const e=a.extensions&&a.extensions[it.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+fu(e.attributes):t=a.indices+":"+fu(a.attributes)+":"+a.mode,t}function fu(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Tl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iy(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Dy=new Xe;class Oy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oy,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Wv(this.options.manager):this.textureLoader=new jv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Ar(s,o,i),Si(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Qi.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Za[i.type],o=Ws[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new pt(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Za[i.type],c=Ws[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==u){const _=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(b);x||(p=new c(o,_*d,i.count*d/h),x=new jx(p,d/h),t.cache.add(b,x)),m=new Yl(x,l,f%d/h,g)}else o===null?p=new c(i.count*l):p=new c(o,f,i.count*l),m=new pt(p,l,g);if(i.sparse!==void 0){const _=Za.SCALAR,b=Ws[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,M=new b(r[1],x,i.sparse.count*_),T=new c(r[2],v,i.sparse.count*l);o!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,y=M.length;C<y;C++){const S=M[C];if(m.setX(S,T[C*l]),l>=2&&m.setY(S,T[C*l+1]),l>=3&&m.setZ(S,T[C*l+2]),l>=4&&m.setW(S,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const f=(s.samplers||{})[r.sampler]||{};return h.magFilter=hu[f.magFilter]||Lt,h.minFilter=hu[f.minFilter]||Jn,h.wrapS=uu[f.wrapS]||Oi,h.wrapT=uu[f.wrapT]||Oi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Gt(p);m.needsUpdate=!0,f(m)}),t.load(Qi.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=r.mimeType||Iy(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Tf,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new la,Kn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return dt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const u=i[it.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,st)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Kt);const h=s.alphaMode||Ja.OPAQUE;if(h===Ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ja.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==rn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==rn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==rn&&(o.emissive=new Pe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==rn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,st)),Promise.all(c).then(function(){const u=new r(o);return s.name&&(u.name=s.name),Si(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ar(i,u,s),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return du(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ry(c),u=i[h];if(u)r.push(u.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=du(new _t,c,t),i[h]={primitive:c,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Cy(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[d];let _;const b=c[d];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new Zx(p,b):new Be(p,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?_.geometry=pu(_.geometry,Dp):m.mode===Ln.TRIANGLE_FAN&&(_.geometry=pu(_.geometry,nf));else if(m.mode===Ln.LINES)_=new Zl(p,b);else if(m.mode===Ln.LINE_STRIP)_=new Kl(p,b);else if(m.mode===Ln.LINE_LOOP)_=new tv(p,b);else if(m.mode===Ln.POINTS)_=new er(p,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Ly(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Si(_,s),m.extensions&&Ar(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];const f=new Ct;t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(lt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new oa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){o.push(u);const f=new Xe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jl(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],f=n.samplers[u.sampler],d=u.target,g=d.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",m)),o.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,b=h.length;_<b;_++){const x=h[_],v=u[_],M=f[_],T=d[_],C=g[_];if(x===void 0)continue;x.updateMatrix();let y;switch(bi[C.path]){case bi.weights:y=jr;break;case bi.rotation:y=as;break;case bi.position:case bi.scale:default:y=Kr;break}const S=x.name?x.name:x.uuid,R=T.interpolation!==void 0?Ay[T.interpolation]:$s,N=[];bi[C.path]===bi.weights?x.traverse(function(D){D.morphTargetInfluences&&N.push(D.name?D.name:D.uuid)}):N.push(S);let q=M.array;if(M.normalized){const D=Tl(q.constructor),I=new Float32Array(q.length);for(let z=0,X=q.length;z<X;z++)I[z]=q[z]*D;q=I}for(let D=0,I=N.length;D<I;D++){const z=new y(N[D]+"."+bi[C.path],v.array,q,R);T.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(Y){const G=this instanceof as?Ey:Uf;return new G(this.times,this.values,this.getValueSize()/3,Y)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(z)}}const m=n.name?n.name:"animation_"+e;return new zv(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return(function(){const o=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});const c=[],h=s.children||[];for(let f=0,d=h.length;f<d;f++)c.push(i.getDependency("node",h[f]));const u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),u])})().then(function(o){const l=o[0],c=o[1],h=o[2];let u;if(s.isBone===!0?u=new wf:l.length>1?u=new Ct:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=r),Si(u,s),s.extensions&&Ar(n,u,s),s.matrix!==void 0){const f=new Xe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Dy)});for(let f=0,d=c.length;f<d;f++)u.add(c[f]);return u})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ct;n.name&&(s.name=i.createUniqueName(n.name)),Si(s,n),n.extensions&&Ar(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Kn||f instanceof Gt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}}function Ny(a,e,t){const n=e.attributes,i=new hr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){const h=Tl(Ws[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new E,l=new E;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=Tl(Ws[f.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new ur;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function du(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=wl[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Si(a,e),Ny(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Py(a,e.targets,t):a})}function pu(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===nf)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}const mu={type:"change"},$a={type:"start"},gu={type:"end"};class Gf extends cs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ke),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(mu),n.update(),s=i.NONE},this.update=(function(){const L=new E,F=new ln().setFromUnitVectors(e.up,new E(0,1,0)),_e=F.clone().invert(),be=new E,ye=new ln,Le=2*Math.PI;return function(){const We=n.object.position;L.copy(We).sub(n.target),L.applyQuaternion(F),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&S(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ge=n.minAzimuthAngle,nt=n.maxAzimuthAngle;return isFinite(Ge)&&isFinite(nt)&&(Ge<-Math.PI?Ge+=Le:Ge>Math.PI&&(Ge-=Le),nt<-Math.PI?nt+=Le:nt>Math.PI&&(nt-=Le),Ge<=nt?o.theta=Math.max(Ge,Math.min(nt,o.theta)):o.theta=o.theta>(Ge+nt)/2?Math.max(Ge,o.theta):Math.min(nt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(o),L.applyQuaternion(_e),We.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||be.distanceToSquared(n.object.position)>r||8*(1-ye.dot(n.object.quaternion))>r?(n.dispatchEvent(mu),be.copy(n.object.position),ye.copy(n.object.quaternion),u=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",ce),n.domElement.removeEventListener("pointercancel",ke),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",de),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ke)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new lu,l=new lu;let c=1;const h=new E;let u=!1;const f=new ie,d=new ie,g=new ie,p=new ie,m=new ie,_=new ie,b=new ie,x=new ie,v=new ie,M=[],T={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function S(L){l.theta-=L}function R(L){l.phi-=L}const N=(function(){const L=new E;return function(_e,be){L.setFromMatrixColumn(be,0),L.multiplyScalar(-_e),h.add(L)}})(),q=(function(){const L=new E;return function(_e,be){n.screenSpacePanning===!0?L.setFromMatrixColumn(be,1):(L.setFromMatrixColumn(be,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(_e),h.add(L)}})(),D=(function(){const L=new E;return function(_e,be){const ye=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;L.copy(Le).sub(n.target);let Ae=L.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),N(2*_e*Ae/ye.clientHeight,n.object.matrix),q(2*be*Ae/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(_e*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),q(be*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function I(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){f.set(L.clientX,L.clientY)}function Y(L){b.set(L.clientX,L.clientY)}function G(L){p.set(L.clientX,L.clientY)}function ee(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),R(2*Math.PI*g.y/F.clientHeight),f.copy(d),n.update()}function Q(L){x.set(L.clientX,L.clientY),v.subVectors(x,b),v.y>0?I(y()):v.y<0&&z(y()),b.copy(x),n.update()}function U(L){m.set(L.clientX,L.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),D(_.x,_.y),p.copy(m),n.update()}function W(L){L.deltaY<0?z(y()):L.deltaY>0&&I(y()),n.update()}function ne(L){let F=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),n.update())}function se(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);f.set(L,F)}}function he(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);p.set(L,F)}}function H(){const L=M[0].pageX-M[1].pageX,F=M[0].pageY-M[1].pageY,_e=Math.sqrt(L*L+F*F);b.set(0,_e)}function Se(){n.enableZoom&&H(),n.enablePan&&he()}function xe(){n.enableZoom&&H(),n.enableRotate&&se()}function ue(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const _e=Oe(L),be=.5*(L.pageX+_e.x),ye=.5*(L.pageY+_e.y);d.set(be,ye)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),R(2*Math.PI*g.y/F.clientHeight),f.copy(d)}function fe(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const F=Oe(L),_e=.5*(L.pageX+F.x),be=.5*(L.pageY+F.y);m.set(_e,be)}_.subVectors(m,p).multiplyScalar(n.panSpeed),D(_.x,_.y),p.copy(m)}function Ne(L){const F=Oe(L),_e=L.pageX-F.x,be=L.pageY-F.y,ye=Math.sqrt(_e*_e+be*be);x.set(0,ye),v.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),I(v.y),b.copy(x)}function Z(L){n.enableZoom&&Ne(L),n.enablePan&&fe(L)}function $(L){n.enableZoom&&Ne(L),n.enableRotate&&ue(L)}function ce(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",de)),ae(L),L.pointerType==="touch"?P(L):De(L))}function we(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):Ie(L))}function de(L){le(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",de)),n.dispatchEvent(gu),s=i.NONE}function ke(L){le(L)}function De(L){let F;switch(L.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case _s.DOLLY:if(n.enableZoom===!1)return;Y(L),s=i.DOLLY;break;case _s.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;G(L),s=i.PAN}else{if(n.enableRotate===!1)return;X(L),s=i.ROTATE}break;case _s.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;X(L),s=i.ROTATE}else{if(n.enablePan===!1)return;G(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent($a)}function Ie(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(L);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(L);break;case i.PAN:if(n.enablePan===!1)return;U(L);break}}function tt(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent($a),W(L),n.dispatchEvent(gu))}function Ke(L){n.enabled===!1||n.enablePan===!1||ne(L)}function P(L){switch(pe(L),M.length){case 1:switch(n.touches.ONE){case xs.ROTATE:if(n.enableRotate===!1)return;se(),s=i.TOUCH_ROTATE;break;case xs.PAN:if(n.enablePan===!1)return;he(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case xs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),s=i.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent($a)}function w(L){switch(pe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(L),n.update();break;default:s=i.NONE}}function V(L){n.enabled!==!1&&L.preventDefault()}function ae(L){M.push(L)}function le(L){delete T[L.pointerId];for(let F=0;F<M.length;F++)if(M[F].pointerId==L.pointerId){M.splice(F,1);return}}function pe(L){let F=T[L.pointerId];F===void 0&&(F=new ie,T[L.pointerId]=F),F.set(L.pageX,L.pageY)}function Oe(L){const F=L.pointerId===M[0].pointerId?M[1]:M[0];return T[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",ce),n.domElement.addEventListener("pointercancel",ke),n.domElement.addEventListener("wheel",tt,{passive:!1}),this.update()}}const Vf={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ro{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fy=new oa(-1,1,1,-1,0,1),hc=new _t;hc.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3));hc.setAttribute("uv",new Je([0,2,0,0,2,0],2));class Hf{constructor(e){this._mesh=new Be(hc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ky extends ro{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jo.clone(e.uniforms),this.material=new mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _u extends ro{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class zy extends ro{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class By{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ie);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ky(Vf),this.clock=new zf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_u!==void 0&&(r instanceof _u?n=!0:r instanceof zy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uy extends ro{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Gy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class nr extends ro{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Wn(s,r);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Wn(s,r);d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const o=Gy;this.highPassUniforms=jo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new ie(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Vf;this.copyUniforms=jo.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new mt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new rn,this.fsQuad=new Hf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new ie(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new mt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}nr.BlurDirectionX=new ie(1,0);nr.BlurDirectionY=new ie(0,1);function ci(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Wf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ir={duration:.5,overwrite:!1,delay:0},uc,Zt,Rt,In=1e8,ut=1/In,El=Math.PI*2,Vy=El/4,Hy=0,Xf=Math.sqrt,Wy=Math.cos,Xy=Math.sin,Vt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},Qn=function(e){return typeof e=="object"},cn=function(e){return e!==!1},qf=function(){return typeof window<"u"},No=function(e){return bt(e)||Vt(e)},Yf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,Al=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kf=/[+-]=-?[.\d]+/,Zf=/[^,'"\[\]\s]+/gi,qy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Rn,Cl,dc,wn={},Zo={},Jf,$f=function(e){return(Zo=ls(e,wn))&&Tn},pc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Jo=function(e,t){return!t&&console.warn(e)},Qf=function(e,t){return e&&(wn[e]=t)&&Zo&&(Zo[e]=t)||wn},Jr=function(){return 0},Yy={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},jy={suppressEvents:!0},mc={},Ri=[],Pl={},ed,gn={},el={},xu=30,Wo=[],gc="",_c=function(e){var t=e[0],n,i;if(Qn(t)||bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wo.length;i--&&!Wo[i].targetTest(t););n=Wo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new bd(e[i],n)))||e.splice(i,1);return e},es=function(e){return e._gsap||_c(Dn(e))[0]._gsap},td=function(e,t,n){return(n=e[t])&&bt(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ky=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$o=function(){var e=Ri.length,t=Ri.slice(0),n,i;for(Pl={},Ri.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nd=function(e,t,n,i){Ri.length&&!Zt&&$o(),e.render(t,n,Zt&&t<0&&(e._initted||e._startAt)),Ri.length&&!Zt&&$o()},id=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zf).length<2?t:Vt(e)?e.trim():e},sd=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ls=function(e,t){for(var n in t)e[n]=t[n];return e},vu=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Qo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},kr=function(e){var t=e.parent||vt,n=e.keyframes?Zy(Jt(e.keyframes)):Fn;if(cn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},rd=function(e,t,n,i,s){var r=e[i],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},ha=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ni=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$y=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ll=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Qy=function a(e){return!e||e._ts&&a(e.parent)},yu=function(e){return e._repeat?sr(e._tTime,e=e.duration()+e._rDelay)*e:0},sr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ea=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ua=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},fa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ua(e),n._dirty||ts(n,e)),e},od=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ea(e.rawTime(),t),(!t._dur||oo(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},jn=function(e,t,n,i){return t.parent&&Ni(t),t._start=Wt((mi(n)?n:n||e!==vt?Pn(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rd(e,t,"_first","_last",e._sort?"_start":0),Rl(t)||(e._recent=t),i||od(e,t),e._ts<0&&fa(e,e._tTime),e},ad=function(e,t){return(wn.ScrollTrigger||pc("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},ld=function(e,t,n,i,s){if(vc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ed!==xn.frame)return Ri.push(e),e._lazy=[s,i],1},eM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Rl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tM=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&eM(e)&&!(!e._initted&&Rl(e))||(e._ts<0||e._dp._ts<0)&&!Rl(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=oo(0,e._tDur,t),h=sr(l,o),e._yoyo&&h&1&&(r=1-r),h!==sr(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Zt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&ld(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!u),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&Ll(e,t,n,!0),e._onUpdate&&!n&&On(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Ni(e,1),!n&&!Zt&&(On(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},rr=function(e,t,n,i){var s=e._repeat,r=Wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Wt(r*(s+1)+e._rDelay*s):r,o>0&&!i&&fa(e,e._tTime=e._tDur*o),e.parent&&ua(e),n||ts(e.parent,e),e},Mu=function(e){return e instanceof an?ts(e):rr(e,e._dur)},iM={_start:0,endTime:Jr,totalDuration:Jr},Pn=function a(e,t,n){var i=e.labels,s=e._recent||iM,r=e.duration()>=In?s.endTime(!1):e._dur,o,l,c;return Vt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Jt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},zr=function(e,t,n){var i=mi(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],o,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;r.immediateRender=cn(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Ot(t[0],r,t[s+1])},ki=function(e,t){return e||e===0?t(e):t},oo=function(e,t,n){return n<e?e:n>t?t:n},jt=function(e,t){return!Vt(e)||!(t=qy.exec(e))?"":t[1]},sM=function(e,t,n){return ki(n,function(i){return oo(e,t,i)})},Il=[].slice,cd=function(e,t){return e&&Qn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qn(e[0]))&&!e.nodeType&&e!==Rn},rM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Vt(i)&&!t||cd(i,1)?(s=n).push.apply(s,Dn(i)):n.push(i)})||n},Dn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Vt(e)&&!n&&(Cl||!or())?Il.call((t||dc).querySelectorAll(e),0):Jt(e)?rM(e,n):cd(e)?Il.call(e,0):e?[e]:[]},Dl=function(e){return e=Dn(e)[0]||Jo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Dn(t,n.querySelectorAll?n:n===e?Jo("Invalid scope")||dc.createElement("div"):e)}},hd=function(e){return e.sort(function(){return .5-Math.random()})},ud=function(e){if(bt(e))return e;var t=Qn(e)?e:{each:e},n=ns(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Vt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var p=(g||t).length,m=r[p],_,b,x,v,M,T,C,y,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,In])[1],!S){for(C=-In;C<(C=g[S++].getBoundingClientRect().left)&&S<p;);S--}for(m=r[p]=[],_=l?Math.min(S,p)*h-.5:i%S,b=S===In?0:l?p*u/S-.5:i/S|0,C=0,y=In,T=0;T<p;T++)x=T%S-_,v=b-(T/S|0),m[T]=M=c?Math.abs(c==="y"?v:x):Xf(x*x+v*v),M>C&&(C=M),M<y&&(y=M);i==="random"&&hd(m),m.max=C-y,m.min=y,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(i==="edges"?-1:1),m.b=p<0?s-p:s,m.u=jt(t.amount||t.each)||0,n=n&&p<0?vd(n):n}return p=(m[f]-m.min)/m.max||0,Wt(m.b+(n?n(p):p)*m.v)+m.u}},Ol=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mi(n)?0:jt(n))}},fd=function(e,t){var n=Jt(e),i,s;return!n&&Qn(e)&&(i=n=e.radius||In,e.values?(e=Dn(e.values),(s=!mi(e[0]))&&(i*=i)):e=Ol(e.increment)),ki(t,n?bt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=In,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:r,s||h===r||mi(r)?h:h+jt(r)}:Ol(e))},dd=function(e,t,n,i){return ki(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},oM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},aM=function(e,t){return function(n){return e(parseFloat(n))+(t||jt(n))}},lM=function(e,t,n){return md(e,t,0,1,n)},pd=function(e,t,n){return ki(n,function(i){return e[~~t(i)]})},cM=function a(e,t,n){var i=t-e;return Jt(e)?pd(e,a(0,e.length),t):ki(n,function(s){return(i+(s-e)%i)%i+e})},hM=function a(e,t,n){var i=t-e,s=i*2;return Jt(e)?pd(e,a(0,e.length-1),t):ki(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},$r=function(e){for(var t=0,n="",i,s,r,o;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(o?Zf:Al),n+=e.substr(t,i-t)+dd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},md=function(e,t,n,i,s){var r=t-e,o=i-n;return ki(s,function(l){return n+((l-e)/r*o||0)})},uM=function a(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var r=Vt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(a(e[c-1],e[c]));u--,s=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},n=t}else i||(e=ls(Jt(e)?[]:{},e));if(!h){for(l in t)xc.call(o,e,l,"get",t[l]);s=function(g){return bc(g,o)||(r?e.p:e)}}}return ki(n,s)},bu=function(e,t,n){var i=e.labels,s=In,r,o,l;for(r in i)o=i[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},On=function(e,t,n){var i=e.vars,s=i[t],r=Rt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ri.length&&$o(),o&&(Rt=o),h=l?s.apply(c,l):s.call(c),Rt=r,h},Rr=function(e){return Ni(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&On(e,"onInterrupt"),e},Us,fM=function(e){e=!e.name&&e.default||e;var t=e.name,n=bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Jr,render:bc,add:xc,kill:CM,modifier:AM,rawVars:0},r={targetTest:0,get:0,getSetter:Mc,aliases:{},register:0};if(or(),e!==i){if(gn[t])return;Fn(i,Fn(Qo(e,s),r)),ls(i.prototype,ls(s,Qo(e,r))),gn[i.prop=t]=i,e.targetTest&&(Wo.push(i),mc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qf(t,i),e.register&&e.register(Tn,i,un)},ct=255,Ir={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},tl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},gd=function(e,t,n){var i=e?mi(e)?[e>>16,e>>8&ct,e&ct]:0:Ir.black,s,r,o,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ir[e])i=Ir[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Al),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(c+1):h+c-h*c,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=tl(l+1/3,s,r),i[1]=tl(l,s,r),i[2]=tl(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(jf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Al)||Ir.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ct,r=i[1]/ct,o=i[2]/ct,u=Math.max(s,r,o),f=Math.min(s,r,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(r-o)/d+(r<o?6:0):u===r?(o-s)/d+2:(s-r)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_d=function(e){var t=[],n=[],i=-1;return e.split(Ii).forEach(function(s){var r=s.match(Bs)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Su=function(e,t,n){var i="",s=(e+i).match(Ii),r=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=gd(f,t,1))&&r+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=_d(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ii,"1").split(Bs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ii),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Ii=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ir)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),dM=/hsl[a]?\(/,xd=function(e){var t=e.join(" "),n;if(Ii.lastIndex=0,Ii.test(t))return n=dM.test(t),e[1]=Su(e[1],n),e[0]=Su(e[0],n,_d(e[1])),!0},Qr,xn=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,h,u,f,d,g=function p(m){var _=a()-i,b=m===!0,x,v,M,T;if(_>e&&(n+=_-t),i+=_,M=i-n,x=M-r,(x>0||b)&&(T=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,r+=x+(x>=s?4:s-x),v=1),b||(l=c(p)),v)for(d=0;d<o.length;d++)o[d](M,f,T,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Jf&&(!Cl&&qf()&&(Rn=Cl=window,dc=Rn.document||{},wn.gsap=Tn,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(Tn.version),$f(Zo||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),h=Rn.requestAnimationFrame),l&&u.sleep(),c=h||function(m){return setTimeout(m,r-u.time*1e3+1|0)},Qr=1,g(2))},sleep:function(){(h?Rn.cancelAnimationFrame:clearTimeout)(l),Qr=0,c=Jr},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),r=u.time*1e3+s},add:function(m,_,b){var x=_?function(v,M,T,C){m(v,M,T,C),u.remove(x)}:m;return u.remove(m),o[b?"unshift":"push"](x),or(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},u})(),or=function(){return!Qr&&xn.wake()},et={},pM=/^[\d.\-M][\d.\-,\s]/,mM=/["']/g,gM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(mM,"").trim():+c,i=l.substr(o+1).trim();return t},_M=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},xM=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[gM(t[1])]:_M(e).split(",").map(id)):et._CE&&pM.test(e)?et._CE("",e):n},vd=function(e){return function(t){return 1-e(1-t)}},yd=function a(e,t){for(var n=e._first,i;n;)n instanceof an?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ns=function(e,t){return e&&(bt(e)?e:et[e]||xM(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return hn(e,function(o){et[o]=wn[o]=s,et[r=o.toLowerCase()]=n;for(var l in s)et[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=s[l]}),s},Md=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nl=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/El*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Xy((h-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Md(o);return s=El/s,l.config=function(c,h){return a(e,c,h)},l},il=function a(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Md(n);return i.config=function(s){return a(e,s)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;fs(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;fs("Elastic",nl("in"),nl("out"),nl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};fs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);fs("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});fs("Circ",function(a){return-(Xf(1-a*a)-1)});fs("Sine",function(a){return a===1?1:-Wy(a*Vy)+1});fs("Back",il("in"),il("out"),il());et.SteppedEase=et.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-ut;return function(o){return((i*oo(0,r,o)|0)+s)*n}}};ir.ease=et["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return gc+=a+","+a+"Params,"});var bd=function(e,t){this.id=Hy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:td,this.set=t?t.getSetter:Mc},ar=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rr(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Qr||xn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(or(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fa(this,n),!s._dp||s.parent||od(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?sr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(oo(-this._delay,this._tDur,i),!0),ua(this),$y(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&jn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ea(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jy);var i=Zt;return Zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Pn(this,n),cn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,cn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=bt(n)?n:sd,o=function(){var c=i.then;i.then=null,bt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Rr(this)},a})();Fn(ar.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var an=(function(a){Wf(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=cn(n.sortChildren),vt&&jn(n.parent||vt,ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ad(ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return zr(0,arguments,this),this},t.from=function(i,s,r){return zr(1,arguments,this),this},t.fromTo=function(i,s,r,o){return zr(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,kr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,Pn(this,r),1),this},t.call=function(i,s,r){return jn(this,Ot.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,o,l,c,h){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=h,r.parent=this,new Ot(i,r,Pn(this,l)),this},t.staggerFrom=function(i,s,r,o,l,c,h){return r.runBackwards=1,kr(r).immediateRender=cn(r.immediateRender),this.staggerTo(i,s,r,o,l,c,h)},t.staggerFromTo=function(i,s,r,o,l,c,h,u){return o.startAt=r,kr(o).immediateRender=cn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},t.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Wt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,_,b,x,v,M,T,C;if(this!==vt&&h>l&&i>=0&&(h=l),h!==this._tTime||r||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,x=this._ts,_=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=Wt(h%m),h===l?(p=this._repeat,f=c):(p=~~(h/m),p&&p===h/m&&(f=c,p--),f>c&&(f=c)),M=sr(this._tTime,m),!o&&this._tTime&&M!==p&&(M=p),T&&p&1&&(f=c-f,C=1),p!==M&&!this._lock){var y=T&&M&1,S=y===(T&&p&1);if(p<M&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(C?0:Wt(p*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;yd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=nM(this,Wt(o),Wt(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(On(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,r),f!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=-ut);break}}d=g}else{d=this._last;for(var R=i<0?i:f;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,r||Zt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=R?-ut:ut);break}}d=g}}if(b&&!s&&(this.pause(),b.render(f>=o?0:-ut)._zTime=f>=o?1:-1,this._ts))return this._start=v,ua(this),this.render(i,s,r);this._onUpdate&&!s&&On(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ni(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(On(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(mi(s)||(s=Pn(this,s,i)),!(i instanceof ar)){if(Jt(i))return i.forEach(function(o){return r.add(o,s)}),this;if(Vt(i))return this.addLabel(i,s);if(bt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?jn(this,i,s):this},t.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return Vt(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(ha(this,i),i===this._recent&&(this._recent=this._last),ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var o=Ot.delayedCall(0,s||Jr,r);return o.data="isPause",this._hasPause=1,jn(this,o,Pn(this,i))},t.removePause=function(i){var s=this._first;for(i=Pn(this,i);s;)s._start===i&&s.data==="isPause"&&Ni(s),s=s._next},t.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)Ti!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],o=Dn(i),l=this._first,c=mi(s),h;l;)l instanceof Ot?Ky(l._targets,o)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(h=l.getTweensOf(o,s)).length&&r.push.apply(r,h),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,o=Pn(r,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Ot.to(r,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||ut,onStart:function(){if(r.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==m&&rr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,Fn({startAt:{time:Pn(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bu(this,Pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bu(this,Pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ts(this)},t.totalDuration=function(i){var s=0,r=this,o=r._last,l=In,c,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,jn(r,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;rr(r,r===vt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(vt._ts&&(nd(vt,ea(i,vt)),ed=xn.frame),xn.frame>=xu){xu+=Sn.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&Sn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},e})(ar);Fn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var vM=function(e,t,n,i,s,r,o){var l=new un(this._pt,e,t,0,1,Cd,null,s),c=0,h=0,u,f,d,g,p,m,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=$r(i)),r&&(b=[n,i],r(b,e,t),n=b[0],i=b[1]),f=n.match(Qa)||[];u=Qa.exec(i);)g=u[0],p=i.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:m,c:g.charAt(1)==="="?Xs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Qa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Kf.test(i)||_)&&(l.e=0),this._pt=l,l},xc=function(e,t,n,i,s,r,o,l,c,h){bt(i)&&(i=i(s||0,e,r));var u=e[t],f=n!=="get"?n:bt(u)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=bt(u)?c?wM:Ed:yc,g;if(Vt(i)&&(~i.indexOf("random(")&&(i=$r(i)),i.charAt(1)==="="&&(g=Xs(f,i)+(jt(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Nl)return!isNaN(f*i)&&i!==""?(g=new un(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?EM:Ad,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&pc(t,i),vM.call(this,e,t,f,i,d,l||Sn.stringFilter,c))},yM=function(e,t,n,i,s){if(bt(e)&&(e=Br(e,s,t,n,i)),!Qn(e)||e.style&&e.nodeType||Jt(e)||Yf(e))return Vt(e)?Br(e,s,t,n,i):e;var r={},o;for(o in e)r[o]=Br(e[o],s,t,n,i);return r},Sd=function(e,t,n,i,s,r){var o,l,c,h;if(gn[e]&&(o=new gn[e]).init(s,o.rawVars?t[e]:yM(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new un(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ti,Nl,vc=function a(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:b,M=e._overwrite==="auto"&&!uc,T=e.timeline,C,y,S,R,N,q,D,I,z,X,Y,G,ee;if(T&&(!g||!s)&&(s="none"),e._ease=ns(s,ir.ease),e._yEase=d?vd(ns(d===!0?s:d,ir.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(I=b[0]?es(b[0]).harness:0,G=I&&i[I.prop],C=Qo(i,mc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!p?_.render(-1,!0):_.revert(f&&m?Ho:Yy),_._lazy=0),r){if(Ni(e._startAt=Ot.set(b,Fn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&cn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!o&&!p)&&e._startAt.revert(Ho),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(o=!1),S=Fn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&cn(l),immediateRender:o,stagger:0,parent:x},C),G&&(S[I.prop]=G),Ni(e._startAt=Ot.set(b,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&cn(l)||l&&!m,y=0;y<b.length;y++){if(N=b[y],D=N._gsap||_c(b)[y]._gsap,e._ptLookup[y]=X={},Pl[D.id]&&Ri.length&&$o(),Y=v===b?y:v.indexOf(N),I&&(z=new I).init(N,G||C,e,Y,v)!==!1&&(e._pt=R=new un(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(Q){X[Q]=R}),z.priority&&(q=1)),!I||G)for(S in C)gn[S]&&(z=Sd(S,C,e,Y,N,v))?z.priority&&(q=1):X[S]=R=xc.call(e,N,S,"get",C[S],Y,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(N,e._op[y]),M&&e._pt&&(Ti=e,vt.killTweensOf(N,X,e.globalTime(t)),ee=!e.parent,Ti=0),e._pt&&l&&(Pl[D.id]=1)}q&&Pd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,g&&t<=0&&T.render(In,!0,!0)},MM=function(e,t,n,i,s,r,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Nl=1,e.vars[t]="+=0",vc(e,o),Nl=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,h.e&&(h.e=At(n)+jt(h.e)),h.b&&(h.b=c.s+jt(h.b))},bM=function(e,t){var n=e[0]?es(e[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return t;s=ls({},t);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},SM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,o;if(Jt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},Br=function(e,t,n,i,s){return bt(e)?e.call(t,n,i,s):Vt(e)&&~e.indexOf("random(")?$r(e):e},wd=gc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Td={};hn(wd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Td[a]=1});var Ot=(function(a){Wf(e,a);function e(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:kr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=i.parent||vt,x=(Jt(n)||Yf(n)?mi(n[0]):"length"in i)?[n]:Dn(n),v,M,T,C,y,S,R,N;if(o._targets=x.length?_c(x):Jo("GSAP target "+n+" not found. https://greensock.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||No(c)||No(h)){if(i=o.vars,v=o.timeline=new an({data:"nested",defaults:p||{},targets:b&&b.data==="nested"?b.vars.targets:x}),v.kill(),v.parent=v._dp=ci(o),v._start=0,f||No(c)||No(h)){if(C=x.length,R=f&&ud(f),Qn(f))for(y in f)~wd.indexOf(y)&&(N||(N={}),N[y]=f[y]);for(M=0;M<C;M++)T=Qo(i,Td),T.stagger=0,_&&(T.yoyoEase=_),N&&ls(T,N),S=x[M],T.duration=+Br(c,ci(o),M,S,x),T.delay=(+Br(h,ci(o),M,S,x)||0)-o._delay,!f&&C===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),v.to(S,T,R?R(M,S,x):0),v._ease=et.none;v.duration()?c=h=0:o.timeline=0}else if(g){kr(Fn(v.vars.defaults,{ease:"none"})),v._ease=ns(g.ease||i.ease||"none");var q=0,D,I,z;if(Jt(g))g.forEach(function(X){return v.to(x,X,">")}),v.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||SM(y,g[y],T,g.easeEach);for(y in T)for(D=T[y].sort(function(X,Y){return X.t-Y.t}),q=0,M=0;M<D.length;M++)I=D[M],z={ease:I.e,duration:(I.t-(M?D[M-1].t:0))/100*c},z[y]=I.v,v.to(x,z,q),q+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!uc&&(Ti=ci(o),vt.killTweensOf(x),Ti=0),jn(b,ci(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Wt(b._time)&&cn(u)&&Qy(ci(o))&&b.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-h)||0)),m&&ad(ci(o),m),o}var t=e.prototype;return t.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ut&&!h?l:i<ut?0:i,f,d,g,p,m,_,b,x,v;if(!c)tM(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,r);if(f=Wt(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),m=sr(this._tTime,p),f===o&&!r&&this._initted)return this._tTime=u,this;g!==m&&(x&&this._yEase&&yd(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=r=1,this.render(Wt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(ld(this,h?i:f,r,s,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!o&&!s&&(On(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;x&&x.render(i<0?i:!f&&_?-ut:x._dur*x._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ll(this,i,s,r),On(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ll(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!s&&!(h&&!o)&&(u||o||_)&&(On(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,o){Qr||xn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vc(this,l),c=this._ease(l/this._dur),MM(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(fa(this,0),this.parent||rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ti&&Ti.vars.overwrite!==!0)._first||Rr(this),this.parent&&r!==this.timeline.totalDuration()&&rr(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?Dn(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,p,m,_;if((!s||s==="all")&&Jy(o,l))return s==="all"&&(this._pt=0),Rr(this);for(u=this._op=this._op||[],s!=="all"&&(Vt(s)&&(p={},hn(s,function(b){return p[b]=1}),s=p),s=bM(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],s==="all"?(u[_]=s,g=f,d={}):(d=u[_]=u[_]||{},g=s);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&ha(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Rr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return zr(1,arguments)},e.delayedCall=function(i,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(i,s,r){return zr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return vt.killTweensOf(i,s,r)},e})(ar);Fn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(a){Ot[a]=function(){var e=new an,t=Il.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var yc=function(e,t,n){return e[t]=n},Ed=function(e,t,n){return e[t](n)},wM=function(e,t,n,i){return e[t](i.fp,n)},TM=function(e,t,n){return e.setAttribute(t,n)},Mc=function(e,t){return bt(e[t])?Ed:fc(e[t])&&e.setAttribute?TM:yc},Ad=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},EM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},AM=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},CM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ha(this,t,"_pt"):t.dep||(n=1),t=i;return!n},PM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pd=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},un=(function(){function a(t,n,i,s,r,o,l,c,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Ad,this.d=l||this,this.set=c||yc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=PM,this.m=n,this.mt=s,this.tween=i},a})();hn(gc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return mc[a]=1});wn.TweenMax=wn.TweenLite=Ot;wn.TimelineLite=wn.TimelineMax=an;vt=new an({sortChildren:!1,defaults:ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=xd;var lr=[],Xo={},LM=[],wu=0,sl=function(e){return(Xo[e]||LM).map(function(t){return t()})},Fl=function(){var e=Date.now(),t=[];e-wu>2&&(sl("matchMediaInit"),lr.forEach(function(n){var i=n.queries,s=n.conditions,r,o,l,c;for(o in i)r=Rn.matchMedia(i[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&t.push(n))}),sl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),wu=e,sl("matchMedia"))},Ld=(function(){function a(t,n){this.selector=n&&Dl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,s){bt(n)&&(s=i,i=n,n=bt);var r=this,o=function(){var c=Rt,h=r.selector,u;return c&&c!==r&&c.data.push(r),s&&(r.selector=Dl(s)),Rt=r,u=i.apply(r,arguments),bt(u)&&r._r.push(u),Rt=c,r.selector=h,r.isReverted=!1,u};return r.last=o,n===bt?o(r):n?r[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ar)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=lr.indexOf(this);~o&&lr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a})(),RM=(function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,s){Qn(n)||(n={matches:n});var r=new Ld(0,s||this.scope),o=r.conditions={},l,c,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?h=1:(l=Rn.matchMedia(n[c]),l&&(lr.indexOf(r)<0&&lr.push(r),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Fl):l.addEventListener("change",Fl)));return h&&i(r),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),ta={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return fM(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Vt(e)&&(e=Dn(e)[0]);var s=es(e||{}).get,r=n?sd:id;return n==="native"&&(n=""),e&&(t?r((gn[t]&&gn[t].get||s)(e,t,n,i)):function(o,l,c){return r((gn[o]&&gn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Dn(e),e.length>1){var i=e.map(function(h){return Tn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var r=gn[t],o=es(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(h){var u=new r;Us._pt=0,u.init(e,n?h+n:h,Us,0,[e]),u.render(1,u),Us._pt&&bc(1,Us)}:o.set(e,l);return r?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Tn.to(e,ls((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,h){return s.resetTo(t,l,c,h)};return r.tween=s,r},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ns(e.ease,ir.ease)),vu(ir,e||{})},config:function(e){return vu(Sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!wn[o]&&Jo(t+" effect requires "+o+" plugin.")}),el[t]=function(o,l,c){return n(Dn(o),Fn(l||{},s),c)},r&&(an.prototype[t]=function(o,l,c){return this.add(el[t](o,Qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=ns(t)},parseEase:function(e,t){return arguments.length?ns(e,t):et},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,s;for(n.smoothChildTiming=cn(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,i=vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&jn(n,i,i._start-i._delay),i=s;return jn(vt,n,0),n},context:function(e,t){return e?new Ld(e,t):Rt},matchMedia:function(e){return new RM(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fl()},addEventListener:function(e,t){var n=Xo[e]||(Xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cM,wrapYoyo:hM,distribute:ud,random:dd,snap:fd,normalize:lM,getUnit:jt,clamp:sM,splitColor:gd,toArray:Dn,selector:Dl,mapRange:md,pipe:oM,unitize:aM,interpolate:uM,shuffle:hd},install:$f,effects:el,ticker:xn,updateRoot:an.updateRoot,plugins:gn,globalTimeline:vt,core:{PropTween:un,globals:Qf,Tween:Ot,Timeline:an,Animation:ar,getCache:es,_removeLinkedListItem:ha,reverting:function(){return Zt},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return uc=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return ta[a]=Ot[a]});xn.add(an.updateRoot);Us=ta.to({},{duration:0});var IM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},DM=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=IM(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},rl=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(Vt(s)&&(l={},hn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}DM(o,s)}}}},Tn=ta.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,o,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(l||0)+"",t[r],i,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rl("roundProps",Ol),rl("modifiers"),rl("snap",fd))||ta;Ot.version=an.version=Tn.version="3.11.4";Jf=1;qf()&&or();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tu,Ei,qs,Sc,Ki,Eu,wc,OM=function(){return typeof window<"u"},gi={},qi=180/Math.PI,Ys=Math.PI/180,Ds=Math.atan2,Au=1e8,Tc=/([A-Z])/g,NM=/(left|right|width|margin|padding|x)/i,FM=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Id=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},UM=function(e,t,n){return e.style[t]=n},GM=function(e,t,n){return e.style.setProperty(t,n)},VM=function(e,t,n){return e._gsap[t]=n},HM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WM=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},XM=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},Mt="transform",Xn=Mt+"Origin",qM=function(e,t){var n=this,i=this.target,s=i.style;if(e in gi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return n.tfm[r]=hi(i,r)}):this.tfm[e]=i._gsap.x?i._gsap[e]:hi(i,e)),this.props.indexOf(Mt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},Dd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Tc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wc(),s&&!s.isStart&&!n[Mt]&&(Dd(n),i.uncache=1)}},Od=function(e,t){var n={target:e,props:[],revert:YM,save:qM};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Nd,zl=function(e,t){var n=Ei.createElementNS?Ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return n.style?n:Ei.createElement(e)},Zn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Tc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,cr(t)||t,1)||""},Cu="O,Moz,ms,Ms,Webkit".split(","),cr=function(e,t,n){var i=t||Ki,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Cu[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Cu[r]:"")+e},Bl=function(){OM()&&window.document&&(Tu=window,Ei=Tu.document,qs=Ei.documentElement,Ki=zl("div")||{style:{}},zl("div"),Mt=cr(Mt),Xn=Mt+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nd=!!cr("perspective"),wc=Tn.core.reverting,Sc=1)},ol=function a(e){var t=zl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(qs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qs.removeChild(t),this.style.cssText=s,r},Pu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fd=function(e){var t;try{t=e.getBBox()}catch{t=ol.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ol||(t=ol.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pu(e,["x","cx","x1"])||0,y:+Pu(e,["y","cy","y1"])||0,width:0,height:0}:t},kd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Fd(e))},eo=function(e,t){if(t){var n=e.style;t in gi&&t!==Xn&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Tc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,i,s,r){var o=new un(e._pt,t,n,0,1,r?Id:Rd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Lu={deg:1,rad:1,turn:1},jM={grid:1,flex:1},Fi=function a(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Ki.style,l=NM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,p,m,_;return i===r||!s||Lu[i]||Lu[r]?s:(r!=="px"&&!f&&(s=a(e,t,n,"px")),_=e.getCTM&&kd(e),(d||r==="%")&&(gi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[h],At(d?s/g*u:s/100*g)):(o[l?"width":"height"]=u+(f?r:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ei||!p.appendChild)&&(p=Ei.body),m=p._gsap,m&&d&&m.width&&l&&m.time===xn.time&&!m.uncache?At(s/m.width*u):((d||r==="%")&&!jM[Zn(p,"display")]&&(o.position=Zn(e,"position")),p===e&&(o.position="static"),p.appendChild(Ki),g=Ki[h],p.removeChild(Ki),o.position="absolute",l&&d&&(m=es(p),m.time=xn.time,m.width=p[h]),At(f?g*s/u:g&&s?u/g*s:0))))},hi=function(e,t,n,i){var s;return Sc||Bl(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),gi[t]&&t!=="transform"?(s=no(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ia(Zn(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=na[t]&&na[t](e,t,n)||Zn(e,t)||td(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fi(e,t,s,n)+n:s},KM=function(e,t,n,i){if(!n||n==="none"){var s=cr(t,e,1),r=s&&Zn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new un(this._pt,e.style,t,0,1,Cd),l=0,c=0,h,u,f,d,g,p,m,_,b,x,v,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Zn(e,t)||i,e.style[t]=n),h=[n,i],xd(h),n=h[0],i=h[1],f=n.match(Bs)||[],M=i.match(Bs)||[],M.length){for(;u=Bs.exec(i);)m=u[0],b=i.substring(l,u.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,v=p.substr((d+"").length),m.charAt(1)==="="&&(m=Xs(d,m)+v),_=parseFloat(m),x=m.substr((_+"").length),l=Bs.lastIndex-x.length,x||(x=x||Sn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(d=Fi(e,t,p,x)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Id:Rd;return Kf.test(i)&&(o.e=0),this._pt=o,o},Ru={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ru[n]||n,t[1]=Ru[i]||i,t.join(" ")},JM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gi[o]&&(l=1,o=o==="transformOrigin"?Xn:Mt),eo(n,o);l&&(eo(n,Mt),r&&(r.svg&&n.removeAttribute("transform"),no(n,1),r.uncache=1,Dd(i)))}},na={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new un(e._pt,t,n,0,0,JM);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},to=[1,0,0,1,0,0],zd={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Iu=function(e){var t=Zn(e,Mt);return Bd(t)?to:t.substr(7).match(jf).map(At)},Ec=function(e,t){var n=e._gsap||es(e),i=e.style,s=Iu(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?to:s):(s===to&&!e.offsetParent&&e!==qs&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,o=e.nextElementSibling,qs.appendChild(e)),s=Iu(e),l?i.display=l:eo(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ul=function(e,t,n,i,s,r){var o=e._gsap,l=s||Ec(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,T,C,y,S;n?l!==to&&(C=d*m-g*p)&&(y=v*(m/C)+M*(-p/C)+(p*b-m*_)/C,S=v*(-g/C)+M*(d/C)-(d*b-g*_)/C,v=y,M=S):(T=Fd(e),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),M=T.y+(~(x[1]||x[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&o.smooth?(_=v-c,b=M-h,o.xOffset=u+(_*d+b*p)-_,o.yOffset=f+(_*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Xn]="0px 0px",r&&(Ai(r,o,"xOrigin",c,v),Ai(r,o,"yOrigin",h,M),Ai(r,o,"xOffset",u,o.xOffset),Ai(r,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},no=function(e,t){var n=e._gsap||new bd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(e),c=Zn(e,Xn)||"0",h,u,f,d,g,p,m,_,b,x,v,M,T,C,y,S,R,N,q,D,I,z,X,Y,G,ee,Q,U,W,ne,se,he;return h=u=f=p=m=_=b=x=v=0,d=g=1,n.svg=!!(e.getCTM&&kd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),i.scale=i.rotate=i.translate="none"),C=Ec(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Ul(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,T=n.yOrigin||0,C!==to&&(N=C[0],q=C[1],D=C[2],I=C[3],h=z=C[4],u=X=C[5],C.length===6?(d=Math.sqrt(N*N+q*q),g=Math.sqrt(I*I+D*D),p=N||q?Ds(q,N)*qi:0,b=D||I?Ds(D,I)*qi+p:0,b&&(g*=Math.abs(Math.cos(b*Ys))),n.svg&&(h-=M-(M*N+T*D),u-=T-(M*q+T*I))):(he=C[6],ne=C[7],Q=C[8],U=C[9],W=C[10],se=C[11],h=C[12],u=C[13],f=C[14],y=Ds(he,W),m=y*qi,y&&(S=Math.cos(-y),R=Math.sin(-y),Y=z*S+Q*R,G=X*S+U*R,ee=he*S+W*R,Q=z*-R+Q*S,U=X*-R+U*S,W=he*-R+W*S,se=ne*-R+se*S,z=Y,X=G,he=ee),y=Ds(-D,W),_=y*qi,y&&(S=Math.cos(-y),R=Math.sin(-y),Y=N*S-Q*R,G=q*S-U*R,ee=D*S-W*R,se=I*R+se*S,N=Y,q=G,D=ee),y=Ds(q,N),p=y*qi,y&&(S=Math.cos(y),R=Math.sin(y),Y=N*S+q*R,G=z*S+X*R,q=q*S-N*R,X=X*S-z*R,N=Y,z=G),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=At(Math.sqrt(N*N+q*q+D*D)),g=At(Math.sqrt(X*X+he*he)),y=Ds(z,X),b=Math.abs(y)>2e-4?y*qi:0,v=se?1/(se<0?-se:se):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(Zn(e,Mt)),Y&&e.setAttribute("transform",Y))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=At(d),n.scaleY=At(g),n.rotation=At(p)+o,n.rotationX=At(m)+o,n.rotationY=At(_)+o,n.skewX=b+o,n.skewY=x+o,n.transformPerspective=v+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Xn]=ia(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?QM:Nd?Ud:$M,n.uncache=0,n},ia=function(e){return(e=e.split(" "))[0]+" "+e[1]},al=function(e,t,n){var i=jt(t);return At(parseFloat(t)+parseFloat(Fi(e,"x",n+"px",i)))+i},$M=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ud(e,t)},Vi="0deg",Cr="0px",Hi=") ",Ud=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,v="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(u!==Vi||h!==Vi)){var T=parseFloat(h)*Ys,C=Math.sin(T),y=Math.cos(T),S;T=parseFloat(u)*Ys,S=Math.cos(T),r=al(b,r,C*S*-x),o=al(b,o,-Math.sin(T)*-x),l=al(b,l,y*S*-x+x)}m!==Cr&&(v+="perspective("+m+Hi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||r!==Cr||o!==Cr||l!==Cr)&&(v+=l!==Cr||M?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Hi),c!==Vi&&(v+="rotate("+c+Hi),h!==Vi&&(v+="rotateY("+h+Hi),u!==Vi&&(v+="rotateX("+u+Hi),(f!==Vi||d!==Vi)&&(v+="skew("+f+", "+d+Hi),(g!==1||p!==1)&&(v+="scale("+g+", "+p+Hi),b.style[Mt]=v||"translate(0, 0)"},QM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(r),v=parseFloat(o),M,T,C,y,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ys,c*=Ys,M=Math.cos(l)*u,T=Math.sin(l)*u,C=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(h*=Ys,S=Math.tan(c-h),S=Math.sqrt(1+S*S),C*=S,y*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),M*=S,T*=S)),M=At(M),T=At(T),C=At(C),y=At(y)):(M=u,y=f,T=C=0),(x&&!~(r+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Fi(d,"x",r,"px"),v=Fi(d,"y",o,"px")),(g||p||m||_)&&(x=At(x+g-(g*M+p*C)+m),v=At(v+p-(g*T+p*y)+_)),(i||s)&&(S=d.getBBox(),x=At(x+i/100*S.width),v=At(v+s/100*S.height)),S="matrix("+M+","+T+","+C+","+y+","+x+","+v+")",d.setAttribute("transform",S),b&&(d.style[Mt]=S)},eb=function(e,t,n,i,s){var r=360,o=Vt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),u==="cw"&&c<0?c=(c+r*Au)%r-~~(c/r)*r:u==="ccw"&&c>0&&(c=(c-r*Au)%r-~~(c/r)*r)),e._pt=f=new un(e._pt,t,n,i,c,kM),f.e=h,f.u="deg",e._props.push(n),f},Du=function(e,t){for(var n in t)e[n]=t[n];return e},tb=function(e,t,n){var i=Du({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Mt]=t,o=no(n,1),eo(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],r[Mt]=t,o=no(n,1),r[Mt]=c);for(l in gi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=jt(c),g=jt(h),u=d!==g?Fi(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new un(e._pt,o,l,u,f-u,kl),e._pt.u=g||0,e._props.push(l));Du(o,i)};hn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?a+o:"border"+o+a});na[e>1?"border"+a:a]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=r.map(function(g){return hi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},r.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,d,u)}});var Gd={name:"css",register:Bl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,g,p,m,_,b,x,v,M,T,C,y;Sc||Bl(),this.styles=this.styles||Od(e),y=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(gn[p]&&Sd(p,t,n,i,e,s)))){if(d=typeof h,g=na[p],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=$r(h)),g)g(this,e,p,h,n)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",Ii.lastIndex=0,Ii.test(c)||(m=jt(c),_=jt(h)),_?m!==_&&(c=Fi(e,p,c,_)+_):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,p),r.push(p),y.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Vt(c)&&~c.indexOf("random(")&&(c=$r(c)),jt(c+"")||(c+=Sn.units[p]||jt(hi(e,p))||""),(c+"").charAt(1)==="="&&(c=hi(e,p))):c=hi(e,p),f=parseFloat(c),b=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),p in di&&(p==="autoAlpha"&&(f===1&&hi(e,"visibility")==="hidden"&&u&&(f=0),y.push("visibility",0,o.visibility),Ai(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=di[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in gi,x){if(this.styles.save(p),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||no(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new un(this._pt,o,Mt,0,1,M.renderTransform,M,0,-1),v.dep=1),p==="scale")this._pt=new un(this._pt,M,"scaleY",M.scaleY,(b?Xs(M.scaleY,b+u):u)-M.scaleY||0,kl),this._pt.u=0,r.push("scaleY",p),p+="X";else if(p==="transformOrigin"){y.push(Xn,0,o[Xn]),h=ZM(h),M.svg?Ul(e,h,0,T,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&Ai(this,M,"zOrigin",M.zOrigin,_),Ai(this,o,p,ia(c),ia(h)));continue}else if(p==="svgOrigin"){Ul(e,h,1,T,0,this);continue}else if(p in zd){eb(this,M,p,f,b?Xs(f,b+h):h);continue}else if(p==="smoothOrigin"){Ai(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){tb(this,h,e);continue}}else p in o||(p=cr(p)||p);if(x||(u||u===0)&&(f||f===0)&&!FM.test(h)&&p in o)m=(c+"").substr((f+"").length),u||(u=0),_=jt(h)||(p in Sn.units?Sn.units[p]:m),m!==_&&(f=Fi(e,p,c,_)),this._pt=new un(this._pt,x?M:o,p,f,(b?Xs(f,b+u):u)-f,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?BM:kl),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=zM);else if(p in o)KM.call(this,e,p,c,b?b+h:h);else if(p in e)this.add(e,p,c||e[p],b?b+h:h,i,s);else if(p!=="parseTransform"){pc(p,h);continue}x||(p in o?y.push(p,0,o[p]):y.push(p,1,c||e[p])),r.push(p)}}C&&Pd(this)},render:function(e,t){if(t.tween._time||!wc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:di,getSetter:function(e,t,n){var i=di[t];return i&&i.indexOf(",")<0&&(t=i),t in gi&&t!==Xn&&(e._gsap.x||hi(e,"x"))?n&&Eu===n?t==="scale"?HM:VM:(Eu=n||{})&&(t==="scale"?WM:XM):e.style&&!fc(e.style[t])?UM:~t.indexOf("-")?GM:Mc(e,t)},core:{_removeProperty:eo,_getMatrix:Ec}};Tn.utils.checkPrefix=cr;Tn.core.getStyleSaver=Od;(function(a,e,t,n){var i=hn(a+","+e+","+t,function(s){gi[s]=1});hn(e,function(s){Sn.units[s]="deg",zd[s]=1}),di[i[13]]=a+","+e,hn(n,function(s){var r=s.split(":");di[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Sn.units[a]="px"});Tn.registerPlugin(Gd);var vn=Tn.registerPlugin(Gd)||Tn;vn.core.Tween;class nb extends us{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Zr(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new ib(e)}}class ib{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=sb(e,t,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function sb(a,e,t){const n=Array.from(a),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,r=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const u=rb(h,i,o,l,t);o+=u.offsetX,r.push(u.path)}}return r}function rb(a,e,t,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new ry;let o,l,c,h,u,f,d,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,_=p.length;m<_;)switch(p[m++]){case"m":o=p[m++]*e+t,l=p[m++]*e+n,r.moveTo(o,l);break;case"l":o=p[m++]*e+t,l=p[m++]*e+n,r.lineTo(o,l);break;case"q":c=p[m++]*e+t,h=p[m++]*e+n,u=p[m++]*e+t,f=p[m++]*e+n,r.quadraticCurveTo(u,f,c,h);break;case"b":c=p[m++]*e+t,h=p[m++]*e+n,u=p[m++]*e+t,f=p[m++]*e+n,d=p[m++]*e+t,g=p[m++]*e+n,r.bezierCurveTo(u,f,d,g,c,h);break}}return{offsetX:s.ha*e,path:r}}class Ou extends tc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class ob{constructor(e){this.group=new Ct,this.group.name="CursiveNeonTextMasterGroup",this.floatGroup=new Ct,this.floatGroup.name="CursiveNeonTextFloatGroup",this.group.add(this.floatGroup),this.onLoaded=e,this.textMaterial=new dt({color:3718648,emissive:165063,emissiveIntensity:6,roughness:.1,metalness:.95,envMapIntensity:2,transparent:!0,opacity:1}),this.buildText()}buildText(){new nb().load("/fonts/GreatVibes_Regular.json",t=>{const n=new Ou("Hi, I am",{font:t,size:.52,height:.06,curveSegments:16,bevelEnabled:!0,bevelThickness:.018,bevelSize:.012,bevelSegments:5});n.center();const i=new Be(n,this.textMaterial);i.position.set(-.25,.42,0),i.rotation.z=.03,this.floatGroup.add(i);const s=new Ou("Venkat Koppula",{font:t,size:.65,height:.07,curveSegments:16,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:5});s.center();const r=new Be(s,this.textMaterial);r.position.set(.1,-.38,0),r.rotation.z=-.02,this.floatGroup.add(r),this.onLoaded&&this.onLoaded()})}}function Nu(){const a=document.createElement("canvas");a.width=64,a.height=64;const e=a.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,64,64);const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.35,"rgba(200, 240, 255, 1.0)"),t.addColorStop(.7,"rgba(100, 160, 255, 0.5)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=e.createLinearGradient(0,32,64,32);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(8,32),e.lineTo(56,32),e.stroke();let i=e.createLinearGradient(32,0,32,64);return i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.moveTo(32,8),e.lineTo(32,56),e.stroke(),new $n(a)}function Fu(a,e){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,2048,2048);const i=n.createRadialGradient(1024,1024,40,1024,1024,960);i.addColorStop(0,a),i.addColorStop(.35,e),i.addColorStop(.7,"rgba(0,0,0,0.02)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,2048,2048),n.globalCompositeOperation="screen";for(let r=0;r<24;r++){const o=300+Math.random()*1448,l=300+Math.random()*1448,c=160+Math.random()*440,h=n.createRadialGradient(o,l,8,o,l,c);h.addColorStop(0,"rgba(75, 40, 130, 0.08)"),h.addColorStop(.5,"rgba(50, 20, 90, 0.04)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}return new $n(t)}const Fo={vertex:`
    attribute float aPhase;
    attribute float aSpeed;
    uniform float uTime;
    uniform float uSize;
    varying float vBrightness;
    
    void main() {
      vec3 pos = position;
      pos.x += sin(uTime * 0.4 + aPhase) * 3.0;
      pos.y += cos(uTime * 0.015 + aPhase * 1.3) * 0.4;
      pos.z += sin(uTime * 0.01 + aPhase * 0.7) * 0.3;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      float t = uTime * aSpeed + aPhase;
      vBrightness = 0.05 + 0.95 * pow(0.5 + 0.5 * sin(t), 3.0);
      
      gl_PointSize = uSize * (350.0 / -mvPosition.z) * (0.7 + 0.3 * vBrightness);
    }
  `,fragment:`
    uniform sampler2D uTexture;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying float vBrightness;
    
    void main() {
      vec4 texColor = texture2D(uTexture, gl_PointCoord);
      if (texColor.a < 0.05) discard;
      gl_FragColor = vec4(uColor * vBrightness, texColor.a * uOpacity * vBrightness);
    }
  `};class ab{constructor(e){this.scene=e,this.group=new Ct,this.group.name="SpaceCosmosGroup",this.buildStarfield(),this.buildNebulaClouds(),this.scene.add(this.group)}buildStarfield(){this.randomStarCount=3e3;const i=new Float32Array(this.randomStarCount*3),s=new Float32Array(this.randomStarCount),r=new Float32Array(this.randomStarCount);for(let l=0;l<this.randomStarCount;l++){const c=Math.random(),h=Math.random(),u=c*2*Math.PI,f=Math.acos(2*h-1),d=380+Math.random()*320;i[l*3]=37.5+d*Math.sin(f)*Math.cos(u),i[l*3+1]=0+d*Math.sin(f)*Math.sin(u),i[l*3+2]=0+d*Math.cos(f),s[l]=Math.random()*Math.PI*2,r[l]=.12+Math.random()*.38}const o=new _t;o.setAttribute("position",new pt(i,3)),o.setAttribute("aPhase",new pt(s,1)),o.setAttribute("aSpeed",new pt(r,1)),this.starMat=new mt({vertexShader:Fo.vertex,fragmentShader:Fo.fragment,uniforms:{uTime:{value:0},uSize:{value:1.5},uTexture:{value:Nu()},uColor:{value:new Pe(16777215)},uOpacity:{value:.95}},transparent:!0,blending:Ut,depthWrite:!1}),this.stars=new er(o,this.starMat),this.group.add(this.stars),this.buildRandomStarClusters(37.5,0,0)}buildRandomStarClusters(e,t,n){this.clusterStarTotal=3e3;const i=Math.floor(Math.random()*4)+6,s=Math.floor(this.clusterStarTotal/i),r=new Float32Array(this.clusterStarTotal*3),o=new Float32Array(this.clusterStarTotal),l=new Float32Array(this.clusterStarTotal);let c=0;for(let u=0;u<i;u++){const f=Math.random(),d=Math.random(),g=f*2*Math.PI,p=Math.acos(2*d-1),m=380+Math.random()*260,_=e+m*Math.sin(p)*Math.cos(g),b=t+m*Math.sin(p)*Math.sin(g),x=n+m*Math.cos(p),v=90+Math.random()*110,M=u===i-1?this.clusterStarTotal-c:s;for(let T=0;T<M;T++){const C=Math.pow(Math.random(),1.4)*v,y=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);r[c*3]=_+C*Math.sin(S)*Math.cos(y),r[c*3+1]=b+C*Math.sin(S)*Math.sin(y),r[c*3+2]=x+C*Math.cos(S),o[c]=Math.random()*Math.PI*2,l[c]=.1+Math.random()*.35,c++}}const h=new _t;h.setAttribute("position",new pt(r,3)),h.setAttribute("aPhase",new pt(o,1)),h.setAttribute("aSpeed",new pt(l,1)),this.clusterMat=new mt({vertexShader:Fo.vertex,fragmentShader:Fo.fragment,uniforms:{uTime:{value:0},uSize:{value:1.5},uTexture:{value:Nu()},uColor:{value:new Pe(14742270)},uOpacity:{value:1}},transparent:!0,blending:Ut,depthWrite:!1}),this.clusterStars=new er(h,this.clusterMat),this.group.add(this.clusterStars)}buildNebulaClouds(){this.nebulaOpacity=.3,this.nebMat1=new rn({map:Fu("rgba(20, 100, 240, 0.32)","rgba(5, 12, 40, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:Ut,side:Kt}),this.nebMat2=new rn({map:Fu("rgba(140, 40, 180, 0.28)","rgba(12, 3, 24, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:Ut,side:Kt});const e=new bn(900,500);this.nebulaCount=6,this.nebulaMeshes=[],this.nebulaSettings=[],[{x:37.5,y:80,z:450,mat:this.nebMat1},{x:-350,y:140,z:300,mat:this.nebMat2},{x:400,y:-120,z:250,mat:this.nebMat1},{x:0,y:-200,z:-350,mat:this.nebMat2},{x:-250,y:-100,z:400,mat:this.nebMat1},{x:300,y:200,z:-250,mat:this.nebMat2}].forEach(n=>{const i=new Be(e,n.mat);i.position.set(n.x,n.y,n.z),i.rotation.y=(Math.random()-.5)*.5,this.group.add(i),this.nebulaMeshes.push(i),this.nebulaSettings.push({rotSpeed:.004+Math.random()*.008,rotDir:Math.random()<.5?1:-1,yBase:n.y,xBase:n.x,driftFreqX:.2+Math.random()*.2,driftAmpX:15+Math.random()*15,driftFreqY:.15+Math.random()*.15,driftAmpY:8+Math.random()*8})})}update(e){this.starMat&&this.starMat.uniforms.uTime&&(this.starMat.uniforms.uTime.value=e),this.clusterMat&&this.clusterMat.uniforms.uTime&&(this.clusterMat.uniforms.uTime.value=e),this.stars&&(this.stars.rotation.y=e*.003,this.stars.rotation.x=Math.sin(e*.002)*.007),this.clusterStars&&(this.clusterStars.rotation.y=e*3e-5,this.clusterStars.rotation.z=Math.cos(e*7e-5)*3e-5),this.nebulaMeshes&&this.nebulaMeshes.forEach((t,n)=>{const i=this.nebulaSettings[n];t.rotation.z+=i.rotSpeed*i.rotDir*.08,t.position.y=i.yBase+Math.sin(e*i.driftFreqY)*i.driftAmpY,t.position.x=i.xBase+Math.cos(e*i.driftFreqX)*i.driftAmpX})}fadeOut(e=2,t=null,n=0){t&&(this.starMat&&this.starMat.uniforms.uOpacity&&t.to(this.starMat.uniforms.uOpacity,{value:0,duration:e,ease:"power2.inOut"},n),this.clusterMat&&this.clusterMat.uniforms.uOpacity&&t.to(this.clusterMat.uniforms.uOpacity,{value:0,duration:e,ease:"power2.inOut"},n),this.nebMat1&&t.to(this.nebMat1,{opacity:0,duration:e,ease:"power2.inOut"},n),this.nebMat2&&t.to(this.nebMat2,{opacity:0,duration:e,ease:"power2.inOut"},n))}}const ll=new WeakMap;class lb extends us{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Zr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ll.has(e)){const l=ll.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),ll.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new _t;e.index&&t.setIndex(new pt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize;t.setAttribute(s,new pt(r,o))}return t}_loadLibrary(e,t){const n=new Zr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=cb.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function cb(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder,d=new u.DecoderBuffer;d.Init(new Int8Array(l),l.byteLength);try{const g=t(u,f,d,c),p=g.attributes.map(m=>m.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{u.destroy(d),u.destroy(f)}});break}};function t(r,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let f,d;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)f=new r.Mesh,d=o.DecodeBufferToMesh(l,f);else if(g===r.POINT_CLOUD)f=new r.PointCloud,d=o.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in h){const _=self[u[m]];let b,x;if(c.useUniqueIDs)x=h[m],b=o.GetAttributeByUniqueId(f,x);else{if(x=o.GetAttributeId(f,r[h[m]]),x===-1)continue;b=o.GetAttribute(f,x)}p.attributes.push(i(r,o,f,m,_,b))}return g===r.TRIANGULAR_MESH&&(p.index=n(r,o,f)),r.destroy(f),p}function n(r,o,l){const h=l.num_faces()*3,u=h*4,f=r._malloc(u);o.GetTrianglesUInt32Array(l,u,f);const d=new Uint32Array(r.HEAPF32.buffer,f,h).slice();return r._free(f),{array:d,itemSize:1}}function i(r,o,l,c,h,u){const f=u.num_components(),g=l.num_points()*f,p=g*h.BYTES_PER_ELEMENT,m=s(r,h),_=r._malloc(p);o.GetAttributeDataArrayForAllPoints(l,u,m,p,_);const b=new h(r.HEAPF32.buffer,_,g).slice();return r._free(_),{name:c,array:b,itemSize:f}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class hb{constructor(e="/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",t=null,n=null){this.group=new Ct,this.group.name="VenkatAvatarGroup",this.model=null,this.mixer=null,this.modelLoaded=!1,this.loadModel(e,t,n)}loadModel(e,t,n=null){const i=new lb;i.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const s=new cc(n);s.setDRACOLoader(i),s.load(e,r=>{this.model=r.scene,this.model.name="VenkyAvatarModel",this.model.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.group.add(this.model),this.modelLoaded=!0,console.log("[TechAvatar] Loaded Draco-compressed GLB model from:",e),t&&t(this.model,r)},r=>{if(r.lengthComputable){const o=Math.round(r.loaded/r.total*100);console.log(`[TechAvatar] Loading model: ${o}%`)}},r=>{console.error("[TechAvatar] Error loading Draco GLB model:",r)})}setSkinColor(e){this.model&&this.model.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{const s=(i.name||"").toLowerCase(),r=(t.name||"").toLowerCase();(s.includes("skin")||s.includes("head")||s.includes("face")||r.includes("head")||r.includes("face")||r.includes("skin"))&&i.color.set(e)})})}setMaterialColor(e,t){if(!this.model)return;const n=e.toLowerCase();this.model.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{const o=(r.name||"").toLowerCase(),l=(i.name||"").toLowerCase();(o.includes(n)||l.includes(n))&&r.color.set(t)})})}update(e){this.mixer&&e&&this.mixer.update(e)}}function ub(a){return new mt({uniforms:{uTime:{value:0},uTexture:{value:a},uOpacity:{value:0},uColor:{value:new Pe(3718648)},uHoverTarget:{value:0},uHoverBrightness:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uTexture;
      uniform float uOpacity;
      uniform vec3 uColor;
      uniform float uHoverTarget;
      uniform float uHoverBrightness;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec4 texColor = texture2D(uTexture, vUv);

        // Moving horizontal scanlines
        float scanline = 0.85 + 0.15 * sin(vUv.y * 140.0 - uTime * 1.5);

        // Fresnel edge glow halo
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.2) * 0.45;

        // Subtle energy flicker
        float flicker = 0.96 + 0.04 * sin(uTime * 28.0);

        // Color boost & tint
        vec3 finalColor = texColor.rgb + (uColor * (fresnel + 0.1));

        // Hover target highlight pulse
        bool inBoxA = (vUv.x >= 0.039 && vUv.x <= 0.478 && vUv.y >= 0.141 && vUv.y <= 0.824);
        bool inBoxB = (vUv.x >= 0.521 && vUv.x <= 0.961 && vUv.y >= 0.141 && vUv.y <= 0.824);

        if (uHoverTarget == 1.0 && inBoxA) {
          finalColor += vec3(0.08, 0.22, 0.35) * uHoverBrightness * (0.8 + 0.2 * sin(uTime * 6.0));
        } else if (uHoverTarget == 2.0 && inBoxB) {
          finalColor += vec3(0.08, 0.22, 0.35) * uHoverBrightness * (0.8 + 0.2 * sin(uTime * 6.0));
        }

        float alpha = texColor.a * uOpacity * scanline * flicker;
        alpha = clamp(alpha + (fresnel * 0.15 * uOpacity), 0.0, 1.0);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Kt,blending:Ut})}function fb(){return new mt({uniforms:{uTime:{value:0},uOpacity:{value:0},uBeamOpacity:{value:.28},uRayDensity:{value:60},uRaySpeed:{value:.4},uColor:{value:new Pe(3718648)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uOpacity;
      uniform float uBeamOpacity;
      uniform float uRayDensity;
      uniform float uRaySpeed;
      uniform vec3 uColor;

      varying vec2 vUv;

      void main() {
        float beamGradient = pow(1.0 - vUv.y, 1.3);
        float lightRays = 0.85 + 0.15 * sin(vUv.x * uRayDensity + uTime * uRaySpeed);
        float shimmer = 0.96 + 0.04 * sin(uTime * 12.0);
        float sideFade = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

        vec3 color = uColor * 1.6;
        float alpha = beamGradient * lightRays * shimmer * sideFade * uOpacity * uBeamOpacity;

        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1,side:Kt,blending:Ut})}class db{constructor(){this.group=new Ct,this.group.name="HologramScreenGroup",this.canvasWidth=1024,this.canvasHeight=512,this.hoverTarget=0,this.opacity=0,this.isVisible=!1,this.initCanvas(),this.texture=new $n(this.canvas),this.texture.colorSpace=mn,this.hologramMat=ub(this.texture),this.beamMat=fb();const e=new bn(16,8.5);this.screenMesh=new Be(e,this.hologramMat),this.screenMesh.name="HologramScreenPlane",this.group.add(this.screenMesh),this.createFrameAccents(),this.createProjectorBeam(),this.renderCanvasUI(),document.fonts&&document.fonts.ready.then(()=>{this.renderCanvasUI()})}initCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d")}renderCanvasUI(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=this.hoverBrightness!==void 0?this.hoverBrightness:1;e.clearRect(0,0,t,n),e.fillStyle="rgba(2, 6, 23, 0.55)",e.fillRect(0,0,t,n),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(10,10,t-20,n-20),e.strokeStyle="rgba(56, 189, 248, 0.4)",e.lineWidth=2,e.strokeRect(18,18,t-36,n-36),e.fillStyle="rgba(56, 189, 248, 0.12)",e.fillRect(20,20,t-40,50),e.fillStyle="#38bdf8",e.font="bold 22px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText("⚡ NAVIGATIONAL CONSOLE // CHOOSE DESTINATION ⚡",t/2,45);const s=this.hoverTarget===1;e.fillStyle="rgba(15, 23, 42, 0.65)",e.fillRect(40,90,450,350),e.strokeStyle=s?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=s?3:2,e.strokeRect(40,90,450,350),s&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round(25*i)):e.shadowBlur=0,e.fillStyle="#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET A: KOPPULA SYSTEM",265,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[PROJECTS SOLAR SYSTEM]",265,160),e.beginPath(),e.arc(265,250,24,0,Math.PI*2),e.fillStyle="#ffea00",e.fill(),e.beginPath(),e.ellipse(265,250,75,30,0,0,Math.PI*2),e.strokeStyle="#38bdf8",e.lineWidth=2,e.stroke(),e.beginPath(),e.arc(325,238,10,0,Math.PI*2),e.fillStyle="#38bdf8",e.fill(),e.beginPath(),e.ellipse(265,250,120,50,0,0,Math.PI*2),e.strokeStyle="rgba(236, 72, 153, 0.6)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.arc(170,275,12,0,Math.PI*2),e.fillStyle="#ec4899",e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("Multi-colored planet network & data-star",265,335),e.fillStyle=s?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(80,370,370,45),e.fillStyle=s?"#020617":"#38bdf8",e.font="bold 18px monospace",e.fillText(s?"▶ LOCK & WARP TO PROJECTS":"[ENTER SYSTEM]",265,392),e.shadowBlur=0;const r=this.hoverTarget===2;e.fillStyle="rgba(15, 23, 42, 0.65)",e.fillRect(534,90,450,350),e.strokeStyle=r?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=r?3:2,e.strokeRect(534,90,450,350),r&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round(25*i)):e.shadowBlur=0,e.fillStyle="#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET B: ORIGIN PLANET",759,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[ABOUT ME HOME BASE]",759,160),e.beginPath(),e.arc(759,250,45,0,Math.PI*2);const o=e.createRadialGradient(740,230,10,759,250,45);o.addColorStop(0,"#60a5fa"),o.addColorStop(.7,"#1d4ed8"),o.addColorStop(1,"#0f172a"),e.fillStyle=o,e.fill(),e.beginPath(),e.arc(759,250,52,0,Math.PI*2),e.strokeStyle="rgba(56, 189, 248, 0.7)",e.lineWidth=3,e.stroke(),e.fillStyle="#ef4444",e.beginPath(),e.arc(759,230,6,0,Math.PI*2),e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("High-fidelity Earth & personal dossier",759,335),e.fillStyle=r?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(574,370,370,45),e.fillStyle=r?"#020617":"#38bdf8",e.font="bold 18px monospace",e.fillText(r?"▶ LOCK & DE-ORBIT TO EARTH":"[DE-ORBIT TO EARTH]",759,392),e.shadowBlur=0,e.fillStyle="rgba(56, 189, 248, 0.8)",e.font="13px monospace",e.textAlign="center",e.fillText("SYSTEM STATUS: ONLINE // ENCRYPTION: 256-BIT // HOVER TO INSPECT TARGET",t/2,470),this.texture&&(this.texture.needsUpdate=!0)}createFrameAccents(){const e=new la({color:61695,linewidth:2,transparent:!0,opacity:0});this.lineMat=e;const t=[new E(-8.3,4.5,.01),new E(-7.5,4.5,.01),new E(-8.3,4.5,.01),new E(-8.3,3.7,.01),new E(8.3,4.5,.01),new E(7.5,4.5,.01),new E(8.3,4.5,.01),new E(8.3,3.7,.01),new E(-8.3,-4.5,.01),new E(-7.5,-4.5,.01),new E(-8.3,-4.5,.01),new E(-8.3,-3.7,.01),new E(8.3,-4.5,.01),new E(7.5,-4.5,.01),new E(8.3,-4.5,.01),new E(8.3,-3.7,.01)],n=new _t().setFromPoints(t),i=new Zl(n,e);this.group.add(i)}createProjectorBeam(){const e=new Ht(8,.5,12,32,1,!0);e.translate(0,-6,0),this.beamMesh=new Be(e,this.beamMat),this.beamMesh.rotation.x=.2,this.group.add(this.beamMesh)}setBeamTransform(e,t,n,i){this.beamMesh&&(this.beamMesh.scale.set(e,t,e),this.beamMesh.position.y=n,this.beamMesh.rotation.x=i)}setBeamProps(e,t,n){this.beamMat&&(this.beamMat.uniforms.uBeamOpacity.value=e,this.beamMat.uniforms.uRayDensity.value=t,this.beamMat.uniforms.uRaySpeed.value=n)}setHoverTarget(e){this.hoverTarget!==e&&(this.hoverTarget=e,this.hologramMat.uniforms.uHoverTarget.value=e,this.renderCanvasUI())}setHoverBrightness(e){this.hologramMat&&(this.hologramMat.uniforms.uHoverBrightness.value=e)}update(e){this.hologramMat&&(this.hologramMat.uniforms.uTime.value=e),this.beamMat&&(this.beamMat.uniforms.uTime.value=e)}fadeIn(e=1.2){this.isVisible=!0,this.group.visible=!0,vn.to(this,{opacity:1,duration:e,ease:"power2.out",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)}})}fadeOut(e=.8){vn.to(this,{opacity:0,duration:e,ease:"power2.in",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)},onComplete:()=>{this.isVisible=!1,this.group.visible=!1}})}}class pb{constructor(){this.group=new Ct,this.group.name="RocketDockingPadMasterGroup",this.padRingGroup=new Ct,this.padRingGroup.name="DockingPadRingGroup",this.connectingBoomGroup=new Ct,this.connectingBoomGroup.name="DockingConnectingBoomGroup",this.group.add(this.connectingBoomGroup),this.group.add(this.padRingGroup),this.initMaterials(),this.buildConnectingBoom(),this.buildPadRing()}initMaterials(){this.darkHullMat=new dt({color:1976635,roughness:.35,metalness:.85,envMapIntensity:1}),this.lightHullMat=new dt({color:4674921,roughness:.3,metalness:.8,envMapIntensity:1}),this.gantryAccentMat=new dt({color:994140,roughness:.25,metalness:.9,envMapIntensity:1.2}),this.conduitCopperMat=new dt({color:3023626,roughness:.28,metalness:.88,envMapIntensity:1.2}),this.goldTrimMat=new dt({color:3023626,roughness:.22,metalness:.94,envMapIntensity:1.3}),this.beaconGlowMat=new dt({color:165063,emissive:3718648,emissiveIntensity:2.5,roughness:.1,metalness:.3}),this.boltSilverMat=new dt({color:9741240,roughness:.2,metalness:.95})}buildConnectingBoom(){const s=new Ht(1.25,1.25,12.8,64,1,!1),r=new Be(s,this.darkHullMat);r.rotation.x=Math.PI/2,r.position.set(42,-7.5,16.4),r.castShadow=!0,r.receiveShadow=!0,this.connectingBoomGroup.add(r);const o=new Ht(1.85,1.85,1.4,64,1,!1),l=new Be(o,this.gantryAccentMat);l.rotation.x=Math.PI/2,l.position.set(42,-7.5,10+.7),l.castShadow=!0,l.receiveShadow=!0,this.connectingBoomGroup.add(l);const c=new Ht(1.75,1.75,1.4,64,1,!1),h=new Be(c,this.gantryAccentMat);h.rotation.x=Math.PI/2,h.position.set(42,-7.5,22.8-.7),h.castShadow=!0,h.receiveShadow=!0,this.connectingBoomGroup.add(h),[.35,.65].forEach(f=>{const d=10+12.8*f,g=new Ht(1.48,1.48,.9,64,1,!1),p=new Be(g,this.lightHullMat);p.rotation.x=Math.PI/2,p.position.set(42,-7.5,d),p.castShadow=!0,p.receiveShadow=!0,this.connectingBoomGroup.add(p)});const u=12.8+.4;[-1.42,1.42].forEach((f,d)=>{const g=new Ht(.14,.14,u,32),p=d===0?this.conduitCopperMat:this.lightHullMat,m=new Be(g,p);m.rotation.x=Math.PI/2,m.position.set(42+f,-7.5,16.4),m.castShadow=!0,this.connectingBoomGroup.add(m),[.2,.5,.8].forEach(_=>{const b=10+12.8*_,x=new Pi(.35,.25,.35),v=new Be(x,this.darkHullMat);v.position.set(42+f*.9,-7.5,b),this.connectingBoomGroup.add(v)})})}buildPadRing(){const e=new E(42,-7.5,30),t=new Ht(7.6,7.8,1.2,96,1,!1),n=new Be(t,this.darkHullMat);n.position.copy(e),n.castShadow=!0,n.receiveShadow=!0,this.padRingGroup.add(n);const i=new Ko(7.4,.18,24,96),s=new Be(i,this.goldTrimMat);s.rotation.x=Math.PI/2,s.position.set(e.x,e.y+.6,e.z),s.castShadow=!0,this.padRingGroup.add(s);const r=new Ht(3.6,3.8,1.4,96,1,!1),o=new Be(r,this.gantryAccentMat);o.position.set(e.x,e.y-.05,e.z),o.castShadow=!0,o.receiveShadow=!0,this.padRingGroup.add(o);const l=new Ko(3.6,.14,24,96),c=new Be(l,this.conduitCopperMat);c.rotation.x=Math.PI/2,c.position.set(e.x,e.y+.65,e.z),this.padRingGroup.add(c);for(let h=0;h<8;h++){const u=h*Math.PI*2/8,f=3.6,d=new Pi(.45,.65,f),g=new Be(d,this.lightHullMat),p=(3.7+7.3)/2,m=e.x+Math.sin(u)*p,_=e.z+Math.cos(u)*p;g.position.set(m,e.y+.1,_),g.rotation.y=u,g.castShadow=!0,g.receiveShadow=!0,this.padRingGroup.add(g)}for(let h=0;h<4;h++){const u=h*Math.PI*2/4+Math.PI/4,f=4.8,d=e.x+Math.sin(u)*f,g=e.z+Math.cos(u)*f,p=new Pi(1.2,.75,1.4),m=new Be(p,this.darkHullMat);m.position.set(d,e.y+.65,g),m.rotation.y=u,m.castShadow=!0,this.padRingGroup.add(m);const _=new Ht(.35,.45,.5,32),b=new Be(_,this.gantryAccentMat);b.position.set(d,e.y+1.15,g),b.castShadow=!0,this.padRingGroup.add(b)}for(let h=0;h<4;h++){const u=h*Math.PI*2/4,f=7.1,d=e.x+Math.sin(u)*f,g=e.z+Math.cos(u)*f,p=new Ht(.22,.28,.25,32),m=new Be(p,this.beaconGlowMat);m.position.set(d,e.y+.68,g),this.padRingGroup.add(m)}for(let h=0;h<32;h++){const u=h*Math.PI*2/32,f=6.9,d=e.x+Math.sin(u)*f,g=e.z+Math.cos(u)*f,p=new Ht(.08,.08,.12,16),m=new Be(p,this.boltSilverMat);m.position.set(d,e.y+.62,g),this.padRingGroup.add(m)}}}const ve={timeScale:2,assets:{rocketModel:"/assets/NewRocket.glb",monolithScene:"/assets/MonolithScene.glb"},monolith:{riseDuration:8.5,startDepth:-23,ease:"power2.in"},timeline:{snapBackStart:16.8,flyToEarthStart:25.8,flyToEarthDuration:11,cameraChaseStart:36.8,cameraChaseDuration:9.2,whiteoutStart:44.2,landingStart:47.2,rocketDescentStart:56.4,touchdownTime:66.4,manualControlTime:68.4},colors:{bgSpace:131589,bgStorm:658448,bgLanding:131845,lightningColors:[11198463,13675263,8978431],oceanDarkWater:66311,moonColor:13559807},camera:{initial:{pos:new E(9.36,.3,-2.6),look:new E(9.52,.08,.22)},warp:{pos:new E(0,-4,-6.5),look:new E(0,10,15)},orbit:{offsetPos:new E(0,4.5,9),offsetLook:new E(0,-8,-12)},reentry:{offsetPos:new E(1.5,3,2.5),offsetLook:new E(-1,-12,-8)},storm:{offsetPos:new E(0,15,.01),offsetLook:new E(0,-25,0)},landing:{offsetPos:new E(-.74,18.95,-36.13),offsetLook:new E(-.74,17.04,-74.29)}}},re={currentScene:"INITIAL",globalTime:0,timelineTime:0,warpProgress:0,warpBankProgress:0,cameraShakeAmp:0,globalFogDensity:0,atmosphereFriction:0,thrusterIntensity:0,lightningIntensity:0,monolithPulse:1,starsOpacity:1,timeScale:1,ambientIntensity:.6,rocketArcProgress:0,cameraArcProgress:0,whiteoutOpacity:0,cameraDescentProgress:0,landingFadeInProgress:0,monolithRiseProgress:0,setScene(a){console.log(`[STATE] Scene transition: ${this.currentScene} -> ${a}`),this.currentScene=a}},Hn=document.getElementById("hud-telemetry"),ko=document.getElementById("ignition-trigger"),cl=document.getElementById("loader-screen"),ku=document.getElementById("loader-bar"),zu=document.getElementById("loader-status"),mb={updateProgress(a,e){ku&&(ku.style.width=`${a}%`),zu&&(zu.innerText=`${e} (${a}%)`)},hideLoader(a){ko&&(ko.disabled=!1,ko.addEventListener("click",()=>{ko.style.display="none",a()})),cl&&(cl.style.opacity=0,setTimeout(()=>{cl.style.display="none"},800))},tick(a){if(!Hn)return;const e=re.currentScene,t=re.timelineTime;if(e==="INITIAL")Hn.innerText="SYSTEM STANDBY // IG_READY";else if(e==="WARP"){const h=Math.floor(re.warpProgress*9999);Hn.innerText=`WARP TRANSIT // VELOCITY: ${h} LY/SEC // SYS_SYNC`}else if(e==="SNAP_BACK")t<23.8?Hn.innerText="SILHOUETTE SCAN ACTIVE // DETECTING SHADOW PROFILE":t<28.8?Hn.innerText="ILLUMINATION ACTIVE // REVEALING SURFACE DETAILS":t<30.8?Hn.innerText="APPROACH INITIATED // POSITIONING HULL CAMERA":Hn.innerText="ORBIT SIZE ACQUIRED // DESCENT SEQUENCE PAUSED";else if(e==="REENTRY"){const h=Math.floor(re.atmosphereFriction*100);Hn.innerText=`THERMAL DESCENT // FRICTION GLOW: ${h}% // WARNING: CRITICAL HEAT`}else e==="STORM"?Hn.innerText="CLOUDBREAK DECK // PIERCING CORE // WIND SHEAR LEVEL: MAX":e==="LANDING"?Hn.innerText="OCEAN LEVEL REACHED // ALIGNING WITH MONOLITH // THRUSTER DE-IGNITION":e==="MANUAL"&&(Hn.innerText="TOUCHDOWN DEPLOYED // MANUAL SCANNING INTERFACE ACTIVE");const n=document.getElementById("hud-timeline-progress"),i=document.getElementById("hud-timeline-marker"),r=Math.min(t/49.6*100,100);n&&(n.style.width=`${r}%`),i&&(i.style.left=`${r}%`);const o=document.getElementById("hud-altitude"),l=document.getElementById("hud-velocity"),c=document.getElementById("hud-coords");if(a){let h="-- m",u="-- m/s";const f=a.position.x.toFixed(2),d=a.position.y.toFixed(2),g=a.position.z.toFixed(2),p=`X: ${f}, Y: ${d}, Z: ${g}`;e==="INITIAL"?(h="384,400 km",u="0.0 km/s"):e==="WARP"?(h=`${Math.floor(384400-t*12e3).toLocaleString()} km`,u=`${Math.floor(re.warpProgress*9999)} LY/s`):e==="SNAP_BACK"?t<23.8?(h=`${Math.floor(12e4-(t-16.8)*1e4).toLocaleString()} km (APPROACH)`,u="12.0 km/s"):t<28.8?(h="50,000 km (REVEALING SURFACE)",u="0.0 m/s"):t<30.8?(h=`${Math.floor(5e4-(t-28.8)*12e3).toLocaleString()} km (ORBIT ENTRY)`,u="24.0 km/s"):(h="26,000 km (STATIONARY PAUSE)",u="0.0 m/s"):e==="REENTRY"?(h=`${Math.floor(12e4-(t-30.8)*1e4).toLocaleString()} m`,u=`${Math.floor(7800-(t-30.8)*1650).toLocaleString()} m/s`):e==="STORM"?(h=`${Math.floor(Math.max(3e3,a.position.y*150)).toLocaleString()} m`,u=`${Math.floor(1200-(t-34.8)*150).toLocaleString()} m/s`):e==="LANDING"?(h=`${Math.floor(Math.max(0,(a.position.y-2.9)*150)).toLocaleString()} m`,u=`${Math.floor(Math.max(0,(a.position.y-2.9)*45)).toLocaleString()} m/s`):e==="MANUAL"&&(h="0.0 m (TOUCHDOWN)",u="0.0 m/s"),o&&(o.innerText=h),l&&(l.innerText=u),c&&(c.innerText=p)}}},tn=new E,pn=new E,gb=new E(-1.1,-1,-8.6),_b=new E(.65,.65,.65),Yt=new E,Bu=new E;new E;new E(0,0,-1);new E(0,0,1);const xb=new E(-100.4,296.5,-30),Uu=new E,Gu=new E(0,1,0),Vu=new E;class vb{constructor(){this.currentPos=new E().copy(ve.camera.initial.pos),this.currentLook=new E().copy(ve.camera.initial.look),this.targetPos=new E().copy(ve.camera.initial.pos),this.targetLook=new E().copy(ve.camera.initial.look),this.snapBackPos=new E().copy(ve.camera.initial.pos),this.snapBackLook=new E().copy(ve.camera.initial.look),this.snapBackCaptured=!1,this.instantSnapNextFrame=!1,this.shakeIntensity=0,this.lerpSpeed=.04,this.stormDetachPos=null,this.localYOffset=-8,this.camOffsetX=4.2,this.camOffsetZ=-4.5,this.camDistance=-8}setTarget(e,t){this.targetPos.copy(e),this.targetLook.copy(t)}resetToDefault(){this.currentPos.copy(ve.camera.initial.pos),this.currentLook.copy(ve.camera.initial.look),this.targetPos.copy(ve.camera.initial.pos),this.targetLook.copy(ve.camera.initial.look),this.snapBackPos.copy(ve.camera.initial.pos),this.snapBackLook.copy(ve.camera.initial.look),this.snapBackCaptured=!1,this.instantSnapNextFrame=!1}update(e,t,n,i){if(window.activeControls)return;const s=re.currentScene;if(s==="REENTRY"){this.stormDetachPos=null,this.snapBackCaptured||(Yt.set(0,50,0),this.snapBackPos.copy(Yt).multiply(_b).add(gb),this.snapBackLook.set(1.4,296.5,2),this.snapBackCaptured=!0);const o=re.cameraArcProgress,l=this.snapBackPos;tn.lerpVectors(l,xb,o),Uu.subVectors(this.snapBackLook,l).normalize(),pn.addVectors(tn,Uu.multiplyScalar(100)),this.setTarget(tn,pn),e.up.set(0,1,0)}else if(t&&(s==="WARP"||s==="INITIAL"||s==="SNAP_BACK"||s==="STORM"))if(s==="INITIAL")this.stormDetachPos=null,this.setTarget(ve.camera.initial.pos,ve.camera.initial.look);else if(s==="WARP"){this.stormDetachPos=null;const o=Math.max(0,this.localYOffset- -8);Yt.set(-4.32766,-2.86449+o,-2),Bu.set(-3.70432,1.43601+o,-1.66154),t.updateMatrixWorld(!0),tn.copy(Yt).applyMatrix4(t.matrixWorld),pn.copy(Bu).applyMatrix4(t.matrixWorld),this.setTarget(tn,pn),e.up.set(0,1,0)}else if(s==="STORM")this.stormDetachPos||(t.updateMatrixWorld(),Yt.set(6.8,this.localYOffset,3.8),this.stormDetachPos=Yt.clone().applyMatrix4(t.matrixWorld)),this.setTarget(this.stormDetachPos,t.position);else{this.stormDetachPos=null;const o=13,c=lt.clamp((this.localYOffset-o)/(45-o),0,1);if(Yt.set(0,this.localYOffset,0),c<.25){const h=c/.25;Yt.x=lt.lerp(this.camOffsetX,0,h),Yt.z=lt.lerp(this.camOffsetZ,-3.5,h)}else if(c<.65)Yt.x=0,Yt.z=-3.5;else if(c<.9){const h=(c-.65)/.25,u=Math.sin(h*Math.PI/2);Yt.x=0,Yt.z=lt.lerp(-3.5,0,u)}else Yt.x=0,Yt.z=0;t.updateMatrixWorld(),tn.copy(Yt).applyMatrix4(t.matrixWorld),s==="WARP"||s==="INITIAL"?pn.set(tn.x,tn.y,tn.z+100):re.earth&&(s==="SNAP_BACK"||s==="REENTRY")?(re.earth.getWorldPosition(Vu),pn.copy(Vu)):pn.set(0,this.localYOffset+30,0).applyMatrix4(t.matrixWorld),this.setTarget(tn,pn),s==="SNAP_BACK"&&(this.snapBackPos.copy(tn),this.snapBackLook.copy(pn),this.snapBackCaptured=!0)}else if(s==="LANDING"){this.stormDetachPos=null;const o=re.cameraDescentProgress,l=0*(1-o)-.74*o,c=57*(1-o)+18.95*o,h=-22*(1-o)-36.13*o,u=0*(1-o)-.74*o,f=7*(1-o)+17.04*o,d=-72*(1-o)-74.29*o;tn.set(l,c,h),pn.set(u,f,d),this.setTarget(tn,pn)}else s==="MANUAL"?(this.stormDetachPos=null,tn.set(-.74,18.95,-36.13),pn.set(-.74,17.04,-74.29),this.setTarget(tn,pn)):(this.stormDetachPos=null,this.setTarget(ve.camera.initial.pos,ve.camera.initial.look));s==="WARP"||s==="INITIAL"||s==="SNAP_BACK"||s==="REENTRY"?(this.currentPos.copy(this.targetPos),this.currentLook.copy(this.targetLook),s==="WARP"||(t&&(s==="INITIAL"||s==="SNAP_BACK")?e.up.set(0,1,0):s==="REENTRY"||e.up.lerp(Gu,.1))):(this.lerpSpeed=.04,this.instantSnapNextFrame?(this.currentPos.copy(this.targetPos),this.currentLook.copy(this.targetLook),e.up.set(0,1,0),this.instantSnapNextFrame=!1):(this.currentPos.lerp(this.targetPos,this.lerpSpeed),this.currentLook.lerp(this.targetLook,this.lerpSpeed),e.up.lerp(Gu,this.lerpSpeed))),e.position.copy(this.currentPos),e.lookAt(this.currentLook)}}const Zi=new vb;function yb(a,e,t,n,i,s,r,o){const l=vn.timeline({paused:!0});let c=null,h=null,u=null,f=null,d=null;if(t){t.traverse(M=>{M.isDirectionalLight&&(M.name==="spaceSun"?c=M:M.name==="earthFrontLight"&&(h=M)),M.isAmbientLight&&(u=M)});const v=t.parent;v&&v.traverse(M=>{M.isHemisphereLight&&(f=M),M.isSpotLight&&M.name!=="lightningLight"&&(d=M)})}let g=null;e&&e.traverse(v=>{v.isMesh&&(g=v)});const p=new E(42,-6.25,30),m=new E(12,-1,-.5);l.add(()=>{re.setScene("WARP"),re.warpProgress=0,re.warpBankProgress=0,re.starsOpacity=1,o&&(o.strength=0),Zi.localYOffset=-8,a&&(a.visible=!0,a.position.copy(p),a.rotation.set(0,0,0),a.scale.set(1,1,1)),t&&(t.visible=!0),n&&(n.visible=!1),e&&(e.visible=!1),u&&(u.intensity=re.ambientIntensity)},0),l.to(re,{warpProgress:.18,duration:3,ease:"power2.in"},0);const _=new ln().setFromEuler(new rs(0,0,0)),b=new ln().setFromEuler(new rs(Math.PI/2,0,5*Math.PI/180)),x=new ln;return l.to(re,{warpBankProgress:1,duration:3.5,ease:"power2.inOut",onUpdate:()=>{const v=re.warpBankProgress;if(a){a.position.lerpVectors(p,m,v);const M=lt.lerp(1,.65,v);a.scale.set(M,M,M),x.slerpQuaternions(_,b,v),a.quaternion.copy(x),a.updateMatrixWorld(!0)}}},1.5),l.to(re,{warpProgress:1,duration:4.5,ease:"power2.in"},3),l.to(Zi,{localYOffset:50,duration:10,ease:"power2.out"},6.8),l.to(re,{starsOpacity:.25,duration:8,ease:"power1.inOut"},8.8),l.to(re,{warpProgress:.02,duration:8,ease:"power1.inOut"},8.8),u&&l.to(u,{intensity:0,duration:8,ease:"power1.inOut"},8.8),f&&l.to(f,{intensity:0,duration:8,ease:"power1.inOut"},8.8),d&&l.to(d,{intensity:0,duration:8,ease:"power1.inOut"},8.8),c&&l.to(c,{intensity:0,duration:8,ease:"power1.inOut"},8.8),h&&l.to(h,{intensity:0,duration:8,ease:"power1.inOut"},8.8),l.add(()=>{re.setScene("SNAP_BACK"),a&&(a.visible=!1,a.rotation.set(0,0,0),a.position.set(-1.1,-1,-8.6),a.updateMatrixWorld(!0)),u&&(u.intensity=0),f&&(f.intensity=0),d&&(d.intensity=0),c&&(c.intensity=0),h&&(h.intensity=0),e&&(e.visible=!0,e.scale.set(.12,.12,.12),e.position.set(1.4,296.5,2),c&&(c.position.set(1.4,426.5,-78),c.target=e,c.intensity=0),h&&(h.position.set(-148.6,146.5,-148),h.target=e,h.intensity=0)),g&&g.material&&(g.material.emissiveIntensity=0)},ve.timeline.snapBackStart),c&&l.to(c,{intensity:1.5,duration:7,ease:"power1.inOut"},ve.timeline.snapBackStart),e&&l.to(e.scale,{x:.45,y:.45,z:.45,duration:7,ease:"power1.inOut"},ve.timeline.snapBackStart),h&&l.to(h,{intensity:2,duration:5,ease:"power1.inOut"},19.8),l.add(()=>{re.setScene("REENTRY"),re.rocketArcProgress=0,re.cameraArcProgress=0,re.whiteoutOpacity=0,re.globalFogDensity=0,re.starsOpacity=.25,c&&(c.intensity=1.5),h&&(h.intensity=2),a&&(a.visible=!0,a.scale.set(10,10,10))},ve.timeline.flyToEarthStart),l.to(re,{rocketArcProgress:1,duration:ve.timeline.flyToEarthDuration,ease:"power2.inOut"},ve.timeline.flyToEarthStart),l.add(()=>{a&&(a.visible=!1)},ve.timeline.cameraChaseStart),l.to(re,{cameraArcProgress:1,duration:ve.timeline.cameraChaseDuration,ease:"power1.inOut"},ve.timeline.cameraChaseStart),c&&l.to(c,{intensity:0,duration:ve.timeline.cameraChaseDuration,ease:"power1.inOut"},ve.timeline.cameraChaseStart),h&&l.to(h,{intensity:0,duration:ve.timeline.cameraChaseDuration,ease:"power1.inOut"},ve.timeline.cameraChaseStart),l.to(re,{globalFogDensity:.08,duration:ve.timeline.cameraChaseDuration,ease:"power2.in"},ve.timeline.cameraChaseStart),l.to(re,{starsOpacity:0,duration:ve.timeline.cameraChaseDuration,ease:"power1.inOut"},ve.timeline.cameraChaseStart),l.add(()=>{const v=document.getElementById("storm-overlay");v&&(v.style.backgroundColor="#020205")},ve.timeline.whiteoutStart),l.to(re,{whiteoutOpacity:1,duration:1,ease:"none"},ve.timeline.whiteoutStart),l.add(()=>{re.setScene("LANDING"),Zi.instantSnapNextFrame=!0,re.globalFogDensity=.045,re.landingFadeInProgress=0,t&&(t.visible=!1),n&&(n.visible=!0),a&&(a.position.set(40,70,-100),a.scale.set(.65,.65,.65),a.rotation.set(0,-Math.PI/4,0),a.visible=!0,r.forEach(v=>{v.scale.set(.001,.001,.001)})),re.thrusterIntensity=8,re.cameraDescentProgress=0},ve.timeline.whiteoutStart+1.5),l.to(re,{whiteoutOpacity:0,duration:1,ease:"none"},ve.timeline.whiteoutStart+2),l.add(()=>{const v=document.getElementById("storm-overlay");v&&(v.style.backgroundColor="#ffffff")},ve.timeline.landingStart),l.to(re,{cameraDescentProgress:1,duration:10,ease:"power2.inOut"},ve.timeline.landingStart),l.to(re,{globalFogDensity:.008,duration:8,ease:"power1.inOut"},ve.timeline.landingStart),l.to(re,{landingFadeInProgress:1,duration:4,ease:"power1.inOut"},ve.timeline.landingStart),re.monolithRiseProgress=0,l.to(re,{monolithRiseProgress:1,duration:ve.monolith&&ve.monolith.riseDuration?ve.monolith.riseDuration:10,ease:ve.monolith&&ve.monolith.ease?ve.monolith.ease:"power2.in"},ve.timeline.landingStart+.5),l.add(()=>{},ve.timeline.rocketDescentStart),a&&l.to(a.position,{y:7.4,duration:ve.timeline.touchdownTime-ve.timeline.rocketDescentStart,ease:"power1.out"},ve.timeline.rocketDescentStart),l.add(()=>{r.forEach(v=>{v.scale.set(1,1,1)})},ve.timeline.rocketDescentStart+3),l.add(()=>{re.setScene("MANUAL"),re.thrusterIntensity=0},ve.timeline.touchdownTime),l.add(()=>{const v=new Gf(s,i.domElement);v.enableDamping=!0,v.dampingFactor=.05,v.maxPolarAngle=Math.PI/2-.05,v.target.set(-.74,17.04,-74.29),window.activeControls=v},ve.timeline.manualControlTime),l}const Os={stars:{vertex:`
      uniform float uWarpProgress;
      uniform float uWarpOffset;
      uniform vec3 uCameraPos;
      attribute float aSpeed;
      attribute float aAngle;
      attribute float aSize;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      
      void main() {
        vSpeed = aSpeed;
        vWarpProgress = uWarpProgress;
        
        // Calculate the base Z position, animated by the accumulated warp offset
        float zBase = position.z + (aSpeed * uWarpOffset);
        
        // Wrap Z base to keep stars in the tunnel [-500, 500]
        zBase = mod(zBase + 500.0, 1000.0) - 500.0;
        
        float spiral = aAngle; // straight trails, no rotation

        
        float r = length(position.xy);
        // Spread stars wider in the background when not at warp speed
        r = mix(r * 2.5, r, clamp(uWarpProgress / 0.2, 0.0, 1.0));
        
        vec3 pos = vec3(
          r * cos(spiral),
          r * sin(spiral),
          zBase
        );
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Calculate the screen-space angle of the star's trajectory from the screen center
        // This aligns the capsule billboard with the direction of radial movement
        vAngle = atan(gl_Position.y, gl_Position.x);
        
        // Natural starfield colors (mix of white, pale yellow, and pale blue)
        vec3 colorWhite = vec3(1.0, 1.0, 1.0);
        vec3 colorBlue = vec3(0.78, 0.90, 1.0);
        vec3 colorGold = vec3(1.0, 0.96, 0.84);
        
        float colorHash = fract(aSpeed * 43.123);
        vec3 starColor = mix(colorWhite, mix(colorBlue, colorGold, step(0.5, colorHash)), 0.35);
        vColor = mix(starColor, vec3(0.65, 0.88, 1.0), uWarpProgress * 0.4);
        
        // Fade out near the bounds of the tunnel
        vOpacity = smoothstep(-500.0, -350.0, zBase) * smoothstep(500.0, 350.0, zBase);
        
        // Point size scales with speed and warp progress (restricted to keep stars sharp and individual)
        gl_PointSize = aSize * (1.0 + uWarpProgress * aSpeed * 1.2);
      }
    `,fragment:`
      uniform float uStarsOpacity;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      
      void main() {
        // Gradually reduce the density of stars as warp progress decays (only keep ~29% in space)
        float starHash = fract(vSpeed * 73.849);
        float densityThreshold = mix(0.18, 1.0, clamp(vWarpProgress / 0.15, 0.0, 1.0));
        if (starHash > densityThreshold) discard;

        // Rotate gl_PointCoord around (0.5, 0.5) by vAngle
        vec2 p = gl_PointCoord - vec2(0.5);
        float cosA = cos(vAngle);
        float sinA = sin(vAngle);
        vec2 rp = vec2(p.x * cosA - p.y * sinA, p.x * sinA + p.y * cosA);
        
        // Progressive stretch: start as round points (halfLength=0) and stretch into long capsules
        float halfLength = (0.05 + vSpeed * 0.55) * vWarpProgress;
        float thickness = mix(0.12, 0.008, vWarpProgress); // Start thicker/rounder, get thin/sharp at warp speed
        
        // Distance to the line segment from (-halfLength, 0) to (halfLength, 0)
        float dist = length(vec2(rp.x - clamp(rp.x, -halfLength, halfLength), rp.y));
        
        // Volumetric glow and core falloff (tightened to keep stars sharp and distinct)
        float core = smoothstep(thickness, 0.0, dist);
        float glow = exp(-dist * 55.0) * 0.60;
        float intensity = (core * 0.60 + glow * 0.40) * vOpacity * uStarsOpacity;
        
        if (intensity < 0.01) discard;
        
        gl_FragColor = vec4(vColor, intensity);
      }
    `},tunnel:{vertex:`
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uWarpProgress;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        vPosition = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragment:`
      uniform float uTime;
      uniform float uWarpProgress;
      uniform float uStarsOpacity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      // Simplex 2D noise implementation
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx) ;
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute(
                     i.y + vec3(0.0, i1.y, 1.0 ))
                   + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 a0 = x - floor(x + 0.5);
        vec3 g0 = a0*x0.x  + h*x0.y;
        vec3 g1 = a0*x12.x + h*x12.y;
        vec3 g2 = a0*x12.z + h*x12.w;
        vec3 r = 13.0 * (m*g0 + m*g1 + m*g2);
        return r.x;
      }
      
      void main() {
        float angle = vUv.x * 6.28318;
        
        // Straight coordinates down the tunnel, scrolling forward
        vec2 uv = vec2(angle, vUv.y * 1.0 + uTime * 5.0);
        
        // Multi-layered storm clouds noise
        float n1 = snoise(uv * 1.2);
        float n2 = snoise(uv * 3.5 - vec2(0.0, uTime * 2.0));
        float stormCloud = smoothstep(0.2, 0.85, n1 * 0.65 + n2 * 0.35);
        
        // Smoothly fade out the tunnel opacity towards the far end to blend into deep space
        float tunnelFade = smoothstep(0.85, 0.35, vUv.y);
        float opacity = stormCloud * 0.6 * tunnelFade * uWarpProgress * uStarsOpacity;
        
        // Deep space storm colors: dark violet to muted cobalt blue (toned down to highlight stars)
        vec3 colorBg = vec3(0.01, 0.005, 0.02);
        vec3 colorStormEdge = vec3(0.04, 0.01, 0.10);
        vec3 colorStormCore = vec3(0.01, 0.15, 0.32);
        vec3 colorDataHighlight = vec3(0.4, 0.70, 0.95) * 0.45; 
        
        vec3 finalCol = mix(colorBg, colorStormEdge, n1 * 0.5 + 0.5);
        finalCol = mix(finalCol, colorStormCore, stormCloud);
        
        // Data packet streaks highlights (slower packet flow)
        float packet = smoothstep(0.78, 0.94, snoise(vec2(angle * 8.0, vUv.y * 4.0 - uTime * 12.0)));
        finalCol = mix(finalCol, colorDataHighlight, packet * uWarpProgress * 0.9);
        
        gl_FragColor = vec4(finalCol, opacity);
      }
    `}};class Mb{constructor(e){this.scene=e,this.starCount=1200,this.starGeom=new _t;const t=[],n=[],i=[],s=[];for(let h=0;h<this.starCount;h++){const u=Math.random()*Math.PI*2,f=10+Math.random()*50;t.push(f*Math.cos(u),f*Math.sin(u),Math.random()*1e3-500),n.push(.6+Math.random()*1.4),i.push(u),s.push(16+Math.random()*24)}this.starGeom.setAttribute("position",new Je(t,3)),this.starGeom.setAttribute("aSpeed",new Je(n,1)),this.starGeom.setAttribute("aAngle",new Je(i,1)),this.starGeom.setAttribute("aSize",new Je(s,1)),this.warpOffset=0,this.starMat=new mt({vertexShader:Os.stars.vertex,fragmentShader:Os.stars.fragment,uniforms:{uWarpProgress:{value:0},uWarpOffset:{value:0},uCameraPos:{value:new E},uStarsOpacity:{value:1}},transparent:!0,depthWrite:!1,blending:Ut}),this.stars=new er(this.starGeom,this.starMat),this.scene.add(this.stars),this.centerStarCount=3e3,this.centerGeom=new _t;const r=[],o=[],l=[],c=[];for(let h=0;h<this.centerStarCount;h++){const u=Math.random()*Math.PI*2,f=.5+Math.random()*9.5;r.push(f*Math.cos(u),f*Math.sin(u),Math.random()*1e3-500),o.push(.3+Math.random()*.7),l.push(u),c.push(2.5+Math.random()*5.5)}this.centerGeom.setAttribute("position",new Je(r,3)),this.centerGeom.setAttribute("aSpeed",new Je(o,1)),this.centerGeom.setAttribute("aAngle",new Je(l,1)),this.centerGeom.setAttribute("aSize",new Je(c,1)),this.centerMat=new mt({vertexShader:Os.stars.vertex,fragmentShader:Os.stars.fragment,uniforms:{uWarpProgress:{value:0},uWarpOffset:{value:0},uCameraPos:{value:new E},uStarsOpacity:{value:1}},transparent:!0,depthWrite:!1,blending:Ut}),this.centerStars=new er(this.centerGeom,this.centerMat),this.scene.add(this.centerStars),this.cylinderGeom=new Ht(20,20,300,48,48,!0),this.cylinderGeom.rotateX(Math.PI/2),this.cylinderGeom.translate(0,0,150),this.cylinderMat=new mt({vertexShader:Os.tunnel.vertex,fragmentShader:Os.tunnel.fragment,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uStarsOpacity:{value:1}},transparent:!0,depthWrite:!1,side:Mn}),this.tunnel=new Be(this.cylinderGeom,this.cylinderMat),this.tunnel.position.set(0,0,50),this.scene.add(this.tunnel)}update(e,t,n){const i=re.currentScene,s=i==="WARP"||i==="INITIAL"||re.starsOpacity>.01;this.stars.visible=s,this.centerStars.visible=s,this.tunnel.visible=s,i==="INITIAL"?this.warpOffset=0:n&&(this.warpOffset+=(.015+re.warpProgress*.985)*n*480),t&&(this.starMat.uniforms.uCameraPos.value.copy(t.position),this.centerMat.uniforms.uCameraPos.value.copy(t.position),this.stars.position.copy(t.position),this.stars.quaternion.copy(t.quaternion),this.centerStars.position.copy(t.position),this.centerStars.quaternion.copy(t.quaternion),this.tunnel.position.copy(t.position),this.tunnel.quaternion.copy(t.quaternion)),this.starMat.uniforms.uWarpProgress.value=re.warpProgress,this.starMat.uniforms.uWarpOffset.value=this.warpOffset,this.starMat.uniforms.uStarsOpacity.value=re.starsOpacity,this.centerMat.uniforms.uWarpProgress.value=re.warpProgress,this.centerMat.uniforms.uWarpOffset.value=this.warpOffset,this.centerMat.uniforms.uStarsOpacity.value=re.starsOpacity,this.cylinderMat.uniforms.uWarpProgress.value=re.warpProgress,this.cylinderMat.uniforms.uTime.value=e,this.cylinderMat.uniforms.uStarsOpacity.value=re.starsOpacity}}const Hu={burnShell:{vertex:`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      uniform float uTime;
      uniform float uFriction;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        // Physical heat wave displacement in local space
        float ripple = sin(uTime * 32.0 + position.y * 18.0) * 0.015 * uFriction;
        vec3 displaced = position + normal * (0.06 + ripple);
        vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragment:`
      uniform float uTime;
      uniform float uFriction;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      
      // Simple 2D Pseudo Random Noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Fresnel glow
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        
        // Ripple coordinate mappings
        vec2 uv = vec2(vUv.x, vUv.y - uTime * 6.5);
        float n = noise(uv * 12.0) * 0.6 + noise(uv * 24.0) * 0.4;
        
        // Color transition: faint purple haze -> orange cocoon
        vec3 colorPurple = vec3(0.5, 0.1, 0.9);
        vec3 colorOrange = vec3(1.0, 0.35, 0.0);
        vec3 colorYellow = vec3(1.0, 0.85, 0.15);
        
        vec3 baseColor = mix(colorPurple, colorOrange, smoothstep(0.2, 0.75, uFriction));
        vec3 finalColor = mix(baseColor, colorYellow, n * fresnel);
        
        float alpha = fresnel * uFriction * (0.2 + 0.8 * n) * 0.85;
        
        gl_FragColor = vec4(finalColor * 2.5, alpha);
      }
    `}};class bb{constructor(e){this.scene=e,this.plasmaShells=[],this.plasmaMat=new mt({vertexShader:Hu.burnShell.vertex,fragmentShader:Hu.burnShell.fragment,uniforms:{uTime:{value:0},uFriction:{value:0}},transparent:!0,depthWrite:!1,blending:Ut,side:Kt})}createShell(e){if(!e)return;const t=[];e.traverse(n=>{n.isMesh&&t.push(n)}),t.forEach(n=>{const i=new Be(n.geometry.clone(),this.plasmaMat);n.add(i),this.plasmaShells.push(i)})}update(e){this.plasmaMat.uniforms.uTime.value=e,this.plasmaMat.uniforms.uFriction.value=re.atmosphereFriction}}const Wu={vertex:`
    varying vec2 vUv;
    varying vec3 vWorldPos;
    void main() {
      vUv = uv;
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragment:`
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vWorldPos;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      // Create organic cloud density
      vec2 uv = vWorldPos.xz * 0.01 + vec2(uTime * 0.12, uTime * 0.05);
      float d = noise(uv * 1.5) * 0.6 + noise(uv * 3.0) * 0.4;
      
      // vignette fade
      float vignette = smoothstep(0.5, 0.2, length(vUv - vec2(0.5)));
      
      vec3 cloudColor = vec3(0.08, 0.09, 0.12);
      gl_FragColor = vec4(cloudColor, d * vignette * 0.85);
    }
  `};class Sb{constructor(e,t){this.scene=e,this.rocket=t,this.clouds=new Ct,this.scene.add(this.clouds),this.clouds.visible=!1,this.cloudMat=new mt({vertexShader:Wu.vertex,fragmentShader:Wu.fragment,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,side:Kt});for(let n=0;n<30;n++){const i=new bn(500,500),s=new Be(i,this.cloudMat);s.position.set(lt.randFloatSpread(800),lt.randFloatSpread(200),lt.randFloatSpread(800)),s.rotation.x=-Math.PI/2,s.rotation.z=Math.random()*Math.PI*2,this.clouds.add(s)}this.lightningGeom=new _t,this.lightningMat=new la({color:8978431,transparent:!0,opacity:0,blending:Ut,linewidth:2}),this.lightningSegments=new Zl(this.lightningGeom,this.lightningMat),this.scene.add(this.lightningSegments),this.lightningLight=new Li(11198463,0),this.lightningLight.castShadow=!0,this.lightningLight.shadow.mapSize.width=1024,this.lightningLight.shadow.mapSize.height=1024,this.lightningLight.shadow.bias=-5e-4,this.scene.add(this.lightningLight)}generateLightningPaths(e,t,n,i){const s=[],r=new E().addVectors(e,t).multiplyScalar(.5);return r.x+=lt.randFloatSpread(i),r.y+=lt.randFloatSpread(i),r.z+=lt.randFloatSpread(i),n<=1?s.push(e.clone(),t.clone()):(s.push(...this.generateLightningPaths(e,r,n/2,i*.5)),s.push(...this.generateLightningPaths(r,t,n/2,i*.5))),s}triggerStrike(e){if(!e)return;const t=e.position.x,n=e.position.y,i=e.position.z,s=new E(t+lt.randFloatSpread(100),n+120,i+lt.randFloatSpread(100)-20),r=new E(t+lt.randFloatSpread(60),n-80,i+lt.randFloatSpread(60)),o=this.generateLightningPaths(s,r,16,40),l=o.length;for(let g=0;g<3;g++){const p=Math.floor(Math.random()*(l-2)),m=o[p],_=new E(m.x+lt.randFloatSpread(50),m.y-40-Math.random()*20,m.z+lt.randFloatSpread(50));o.push(...this.generateLightningPaths(m,_,8,18))}const c=[];for(let g=0;g<o.length;g+=2)o[g]&&o[g+1]&&c.push(o[g].x,o[g].y,o[g].z,o[g+1].x,o[g+1].y,o[g+1].z);this.lightningGeom.setAttribute("position",new Je(c,3)),this.lightningGeom.attributes.position.needsUpdate=!0;const h=ve.colors.lightningColors[Math.floor(Math.random()*ve.colors.lightningColors.length)],u=new Pe(h);this.lightningMat.color.copy(u),this.lightningLight.color.copy(u),this.lightningLight.position.copy(s),this.lightningLight.target=e;const f=document.getElementById("storm-overlay"),d=vn.timeline();d.to(this.lightningMat,{opacity:.95,duration:.05}),d.to(this.lightningLight,{intensity:15,duration:.05},0),f&&d.to(f,{opacity:.3,duration:.05,yoyo:!0,repeat:1},0),d.to(this.lightningMat,{opacity:0,duration:.06}),d.to(this.lightningLight,{intensity:0,duration:.06},.05),d.to(this.lightningMat,{opacity:.75,duration:.04},.12),d.to(this.lightningLight,{intensity:8,duration:.04},.12),f&&d.to(f,{opacity:.15,duration:.04,yoyo:!0,repeat:1},.12),d.to(this.lightningMat,{opacity:0,duration:.12},.16),d.to(this.lightningLight,{intensity:0,duration:.12},.16)}triggerCameraLightning(e){if(!e)return;const t=new E(lt.randFloatSpread(30),lt.randFloatSpread(30),-15-Math.random()*15),n=new E(lt.randFloatSpread(30),lt.randFloatSpread(30),-15-Math.random()*15),i=t.applyMatrix4(e.matrixWorld),s=n.applyMatrix4(e.matrixWorld),r=this.generateLightningPaths(i,s,16,10),o=r.length;for(let d=0;d<2;d++){const g=Math.floor(Math.random()*(o-2)),p=r[g],m=new E(p.x+lt.randFloatSpread(10),p.y-8-Math.random()*8,p.z+lt.randFloatSpread(10));r.push(...this.generateLightningPaths(p,m,8,4))}const l=[];for(let d=0;d<r.length;d+=2)r[d]&&r[d+1]&&l.push(r[d].x,r[d].y,r[d].z,r[d+1].x,r[d+1].y,r[d+1].z);this.lightningGeom.setAttribute("position",new Je(l,3)),this.lightningGeom.attributes.position.needsUpdate=!0;const c=ve.colors.lightningColors[Math.floor(Math.random()*ve.colors.lightningColors.length)],h=new Pe(c);this.lightningMat.color.copy(h),this.lightningLight.color.copy(h),this.lightningLight.position.copy(i);const u=document.getElementById("storm-overlay"),f=vn.timeline();f.to(this.lightningMat,{opacity:.95,duration:.05}),f.to(this.lightningLight,{intensity:15,duration:.05},0),u&&f.to(u,{opacity:.45,duration:.05,yoyo:!0,repeat:1},0),f.to(this.lightningMat,{opacity:0,duration:.06}),f.to(this.lightningLight,{intensity:0,duration:.06},.05),f.to(this.lightningMat,{opacity:.75,duration:.04},.12),f.to(this.lightningLight,{intensity:8,duration:.04},.12),u&&f.to(u,{opacity:.22,duration:.04,yoyo:!0,repeat:1},.12),f.to(this.lightningMat,{opacity:0,duration:.12},.16),f.to(this.lightningLight,{intensity:0,duration:.12},.16)}update(e,t,n,i){this.cloudMat.uniforms.uTime.value=e;const s=re.currentScene;this.clouds.visible=s==="STORM",s==="STORM"||s==="LANDING"||s==="MANUAL"?(this.clouds.position.y+=t*120,this.clouds.children.forEach(r=>{const o=r.position.y+this.clouds.position.y,l=n?n.position.y:0;o>l+100&&(r.position.y-=200,r.position.x=lt.randFloatSpread(800),r.position.z=lt.randFloatSpread(800))}),s==="STORM"&&Math.random()<.02&&this.triggerStrike(n)):(this.lightningLight.intensity=0,this.lightningMat.opacity=0)}}function zo(a){const e=document.createElement("canvas");e.width=2048,e.height=4608;const t=e.getContext("2d");t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high";const n=t.createLinearGradient(0,0,0,4608);n.addColorStop(0,"#010307"),n.addColorStop(.3,"#02050c"),n.addColorStop(.7,"#010307"),n.addColorStop(1,"#000103"),t.fillStyle=n,t.fillRect(0,0,2048,4608),t.strokeStyle="rgba(0, 247, 255, 0.08)",t.lineWidth=2;const i=128;for(let r=0;r<2048;r+=i)t.beginPath(),t.moveTo(r,0),t.lineTo(r,4608),t.stroke();for(let r=0;r<4608;r+=i)t.beginPath(),t.moveTo(0,r),t.lineTo(2048,r),t.stroke();if(t.save(),t.shadowBlur=0,t.lineWidth=8,t.strokeStyle="#00f7ff",t.beginPath(),t.moveTo(80,120),t.lineTo(80,4488),t.stroke(),t.beginPath(),t.moveTo(1968,120),t.lineTo(1968,4488),t.stroke(),t.beginPath(),t.moveTo(80,1e3),t.lineTo(220,1140),t.lineTo(220,1400),t.stroke(),t.beginPath(),t.arc(220,1400,20,0,Math.PI*2),t.fillStyle="#00f7ff",t.fill(),t.beginPath(),t.moveTo(80,3e3),t.lineTo(240,3140),t.lineTo(240,3400),t.stroke(),t.beginPath(),t.arc(240,3400,20,0,Math.PI*2),t.fill(),t.strokeStyle="#ffe033",t.beginPath(),t.moveTo(1968,1800),t.lineTo(1808,1940),t.lineTo(1808,2200),t.stroke(),t.beginPath(),t.arc(1808,2200,20,0,Math.PI*2),t.fillStyle="#ffe033",t.fill(),t.strokeStyle="#00f7ff",t.beginPath(),t.moveTo(1968,3600),t.lineTo(1788,3740),t.lineTo(1788,3960),t.stroke(),t.beginPath(),t.arc(1788,3960,20,0,Math.PI*2),t.fillStyle="#00f7ff",t.fill(),t.shadowBlur=0,t.fillStyle="#ffe033",t.font='bold 56px "Share Tech Mono", monospace',t.textAlign="left",t.fillText("COORD-X // 00.325.A",120,220),t.fillText("SYS_LOCK // V3.2 HD",120,300),t.textAlign="right",t.fillText("100% ULTRA HD",1928,220),t.fillText("2048X4608 // CRISP",1928,300),t.restore(),a==="face1"){t.shadowBlur=24,t.shadowColor="#00f7ff",t.fillStyle="#00f7ff",t.font='bold 176px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("VENKAT",1024,640),t.fillText("KOPPULA",1024,860),t.strokeStyle="#00f7ff",t.lineWidth=10,t.beginPath(),t.moveTo(360,1020),t.lineTo(1688,1020),t.stroke();const r=1640;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(904,r-360,240,160),t.beginPath(),t.moveTo(904,r-360),t.lineTo(1024,r-260),t.lineTo(1144,r-360),t.stroke(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("EMAIL:",1024,r-100),t.fillStyle="#ffffff",t.font='bold 68px "Share Tech Mono", monospace',t.fillText("venky.koppula2003@gmail.com",1024,r+40);const o=2700;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(924,o-380,200,280),t.strokeRect(948,o-340,152,190),t.beginPath(),t.arc(1024,o-130,14,0,Math.PI*2),t.stroke(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("CONTACT:",1024,o+20),t.fillStyle="#ffffff",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("+91 XXXXX XXXXX",1024,o+140);const l=3700;t.strokeStyle="#ff7043",t.lineWidth=10,t.beginPath(),t.moveTo(1024,l-160),t.bezierCurveTo(924,l-320,924,l-480,1024,l-480),t.bezierCurveTo(1124,l-480,1124,l-320,1024,l-160),t.closePath(),t.stroke(),t.beginPath(),t.arc(1024,l-340,30,0,Math.PI*2),t.fillStyle="#ff7043",t.fill(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("ADDRESS:",1024,l-20),t.fillStyle="#ffffff",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("Hyderabad, India",1024,l+100);const c=4300;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(660,c-120,200,200),t.fillStyle="#00f7ff",t.font="bold 128px sans-serif",t.fillText("in",760,c+20),t.beginPath(),t.arc(1300,c-20,100,0,Math.PI*2),t.stroke(),t.fillStyle="#00f7ff",t.beginPath(),t.arc(1300,c-4,48,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(1264,c-40),t.lineTo(1246,c-80),t.lineTo(1288,c-48),t.lineTo(1312,c-48),t.lineTo(1354,c-80),t.lineTo(1336,c-40),t.fill()}else if(a==="face2"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("THE JOURNEY",1024,560),t.strokeStyle="rgba(0, 247, 255, 0.7)",t.lineWidth=12,t.beginPath(),t.moveTo(360,840),t.lineTo(360,3500),t.stroke(),[{y:1040,title:"SCHOOL ERA",dates:"2012 - 2020"},{y:1760,title:"COLLEGE ERA",subtitle:"(CBIT/UDH)",dates:"2020 - 2024"},{y:2480,title:"INDUSTRY ASCENT",subtitle:"(HBL/HEXAGON)",dates:"2024 - 2025"},{y:3200,title:"AI/ML PIVOT",dates:"2025 - PRESENT"}].forEach(h=>{t.fillStyle="#ffe033",t.beginPath(),t.arc(360,h.y,44,0,Math.PI*2),t.fill(),t.strokeStyle="#ffe033",t.lineWidth=8,t.beginPath(),t.moveTo(360,h.y),t.lineTo(480,h.y),t.stroke(),t.textAlign="left",t.fillStyle="#00f7ff",t.font='bold 84px "Share Tech Mono", monospace',t.fillText(h.title,540,h.y-30),h.subtitle?(t.fillStyle="#ffffff",t.font='bold 60px "Share Tech Mono", monospace',t.fillText(h.subtitle,540,h.y+50),t.fillStyle="#ffe033",t.fillText(h.dates,540,h.y+130)):(t.fillStyle="#ffe033",t.font='bold 60px "Share Tech Mono", monospace',t.fillText(h.dates,540,h.y+60))});const o=3640;t.strokeStyle="#00f7ff",t.lineWidth=6,t.strokeRect(180,o,1688,440),t.strokeStyle="rgba(0, 247, 255, 0.3)";for(let h=280;h<1800;h+=120)t.beginPath(),t.moveTo(h,o),t.lineTo(h,o+440),t.stroke();for(let h=o+60;h<o+440;h+=80)t.beginPath(),t.moveTo(180,h),t.lineTo(1868,h),t.stroke();t.strokeStyle="#00f7ff",t.beginPath(),t.arc(1024,o+220,130,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(1024,o+220,70,0,Math.PI*2),t.stroke();const l=4200,c=[[{x:640,y:l+80},{x:640,y:l+220}],[{x:1024,y:l+20},{x:1024,y:l+160},{x:1024,y:l+300}],[{x:1408,y:l+80},{x:1408,y:l+220}]];t.strokeStyle="rgba(0, 247, 255, 0.5)",t.lineWidth=5;for(let h=0;h<c.length-1;h++)for(let u=0;u<c[h].length;u++)for(let f=0;f<c[h+1].length;f++)t.beginPath(),t.moveTo(c[h][u].x,c[h][u].y),t.lineTo(c[h+1][f].x,c[h+1][f].y),t.stroke();c.forEach((h,u)=>{h.forEach(f=>{t.fillStyle=u===2?"#ffe033":"#00f7ff",t.beginPath(),t.arc(f.x,f.y,24,0,Math.PI*2),t.fill()})})}else if(a==="face3"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("THE SYSTEMS CORE",1024,560);const r=1e3;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("TECH STACK",600,r),t.fillStyle="#00f7ff",t.beginPath(),t.roundRect(280,r+200,190,190,[40,40,0,40]),t.fill(),t.beginPath(),t.roundRect(370,r+100,190,190,[40,40,40,0]),t.fill(),t.fillStyle="#ffe033",t.beginPath(),t.roundRect(380,r+300,190,190,[0,40,40,40]),t.fill(),t.beginPath(),t.roundRect(290,r+410,190,190,[40,0,40,40]),t.fill(),t.strokeStyle="#ffe033",t.lineWidth=10,t.beginPath(),t.arc(780,r+300,140,0,Math.PI*2),t.stroke();for(let f=0;f<Math.PI*2;f+=Math.PI/8)t.beginPath(),t.moveTo(780+140*Math.cos(f),r+300+140*Math.sin(f)),t.lineTo(780+170*Math.cos(f),r+300+170*Math.sin(f)),t.stroke();t.fillStyle="#ffe033",t.font="bold 140px sans-serif",t.fillText("R",780,r+350);const o=2e3;t.fillStyle="#ffe033",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("INTERACTIVE NETWORK",600,o);const l=[[{x:280,y:o+160},{x:280,y:o+360},{x:280,y:o+560}],[{x:600,y:o+60},{x:600,y:o+260},{x:600,y:o+460},{x:600,y:o+660}],[{x:920,y:o+160},{x:920,y:o+360},{x:920,y:o+560}]];t.strokeStyle="rgba(0, 247, 255, 0.5)",t.lineWidth=5;for(let f=0;f<l.length-1;f++)for(let d=0;d<l[f].length;d++)for(let g=0;g<l[f+1].length;g++)t.beginPath(),t.moveTo(l[f][d].x,l[f][d].y),t.lineTo(l[f+1][g].x,l[f+1][g].y),t.stroke();l.forEach(f=>{f.forEach(d=>{t.fillStyle="#00f7ff",t.beginPath(),t.arc(d.x,d.y,28,0,Math.PI*2),t.fill()})});const c=1e3;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("INDUSTRIAL EXPERTISE",1440,c),t.fillStyle="#00f7ff",t.font='bold 60px "Share Tech Mono", monospace',t.fillText("OIL REFINERIES",1440,c+120);const h=c+180;t.strokeStyle="#00f7ff",t.lineWidth=6,t.strokeRect(1200,h,480,500),t.fillStyle="rgba(0, 247, 255, 0.35)",t.fillRect(1250,h+100,120,360),t.fillRect(1450,h+160,160,300),t.fillStyle="#00f7ff",t.fillText("GAS TURBINES",1440,c+800);const u=c+860;t.strokeRect(1200,u,480,500),t.beginPath(),t.ellipse(1440,u+250,180,120,0,0,Math.PI*2),t.stroke()}else if(a==="face4"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("SYSTEM STATUS",1024,560);const r=1400;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("PARAMETERS",1024,r),t.textAlign="left",t.fillStyle="#ffffff",t.font='56px "Share Tech Mono", monospace',t.fillText("TEMP: 342.5 K",300,r+160),t.fillText("PRESSURE: 1.02 ATM",300,r+280),t.fillText("THRUST: 89.2%",300,r+400),t.fillText("LOCK: SECURED",300,r+520);const o=2800;t.textAlign="center",t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("TELEMETRY LOGS",1024,o);const l=["> CONNECTING TO CORE SENSORS...","> TELEMETRY STREAM: OPTIMAL","> FLIGHT SYSTEMS BALANCED","> ATMOSPHERIC ENTRY STABLE","> MONOLITH HUD ACTIVE","> READY FOR CORE SYNC.","> ALL SYSTEMS STATUS: ACTIVE"];t.textAlign="left",t.fillStyle="#00f7ff",t.font='bold 64px "Share Tech Mono", monospace',l.forEach((c,h)=>{t.fillText(c,200,o+160+h*150)})}const s=new $n(e);return s.generateMipmaps=!0,s.minFilter=Jn,s.magFilter=Lt,s.anisotropy=16,s}class wb{constructor(e){this.scene=e,this.frontScreenTex=zo("face1"),this.rightScreenTex=zo("face2"),this.backScreenTex=zo("face3"),this.leftScreenTex=zo("face4");const t=i=>{i.generateMipmaps=!0,i.minFilter=Jn,i.magFilter=Lt,i.anisotropy=16,i.needsUpdate=!0};t(this.frontScreenTex),t(this.rightScreenTex),t(this.backScreenTex),t(this.leftScreenTex),this.monolithNoiseTexture=js(512,512,"#1a2332","#070b12"),this.monolithNoiseTexture.repeat.set(6,18),this.monolithMat=new dt({color:527380,map:this.monolithNoiseTexture,bumpMap:this.monolithNoiseTexture,bumpScale:.04,roughness:.18,metalness:.95});const n=i=>new dt({map:i,emissiveMap:i,emissive:new Pe(16777215),emissiveIntensity:1,metalness:.85,roughness:.12,bumpMap:this.monolithNoiseTexture,bumpScale:.02,side:Kt});this.frontScreenMat=n(this.frontScreenTex),this.backScreenMat=n(this.backScreenTex),this.rightScreenMat=n(this.rightScreenTex),this.leftScreenMat=n(this.leftScreenTex),this.slabTexture=js(256,256,"#181d28","#0b0d13"),this.slabMat=new dt({map:this.slabTexture,bumpMap:this.slabTexture,bumpScale:.08,roughness:.85,metalness:.15}),this.padTexture=js(256,256,"#3a4454","#202632"),this.padMat=new dt({map:this.padTexture,bumpMap:this.padTexture,bumpScale:.05,roughness:.65,metalness:.35})}configureMonolith(e){let t=null;if(e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.name.includes("Monolith")?(n.material=this.monolithMat,n.scale.set(4,.71,4)):n.name.includes("Cube.006")||n.name.includes("Cube006")?(t=n,n.geometry=new bn(1,1),n.material=this.frontScreenMat,n.position.set(0,22.5,-32.95),n.scale.set(24.1,45,1),n.rotation.y=0):n.name.includes("Cube.007")||n.name.includes("Cube007")?(n.geometry=new bn(1,1),n.material=this.backScreenMat,n.position.set(0,22.5,-57.05),n.scale.set(24.1,45,1),n.rotation.y=Math.PI):n.name.includes("LandingPad")||n.name.includes("PadGlowRing")||n.name.includes("PadCenterMetal")?n.material=this.padMat:n.name.includes("Cube")||n.name.includes("Slab")||n.name.includes("Plate")||n.name.includes("Ring")?n.visible=!1:n.material&&(n.material=this.slabMat))}),t&&(this.rightScreenMesh=t.clone(),this.rightScreenMesh.name="Cube006_right",this.rightScreenMesh.material=this.rightScreenMat,this.rightScreenMesh.position.set(12.05,22.5,-45),this.rightScreenMesh.rotation.set(0,Math.PI/2,0),this.rightScreenMesh.scale.set(24.1,45,1),e.add(this.rightScreenMesh),this.leftScreenMesh=t.clone(),this.leftScreenMesh.name="Cube006_left",this.leftScreenMesh.material=this.leftScreenMat,this.leftScreenMesh.position.set(-12.05,22.5,-45),this.leftScreenMesh.rotation.set(0,-Math.PI/2,0),this.leftScreenMesh.scale.set(24.1,45,1),e.add(this.leftScreenMesh)),!this.monolithTopCap){const n=new bn(24.1,24.1);this.monolithTopCap=new Be(n,this.monolithMat),this.monolithTopCap.name="MonolithTopCap",this.monolithTopCap.position.set(0,45,-45),this.monolithTopCap.rotation.x=-Math.PI/2,this.monolithTopCap.castShadow=!0,this.monolithTopCap.receiveShadow=!0,e.add(this.monolithTopCap)}}updateTextGlow(e){this.textGlowFactor=e;const t=(this.textBrightnessFactor!==void 0?this.textBrightnessFactor:1)*(this.textGlowFactor!==void 0?this.textGlowFactor:1);this.updateEmissiveIntensity(t)}updateTextBrightness(e){this.textBrightnessFactor=e;const t=(this.textBrightnessFactor!==void 0?this.textBrightnessFactor:1)*(this.textGlowFactor!==void 0?this.textGlowFactor:1);this.updateEmissiveIntensity(t)}updateEmissiveIntensity(e){this.frontScreenMat&&this.frontScreenMat.emissiveIntensity!==void 0&&(this.frontScreenMat.emissiveIntensity=e,this.backScreenMat.emissiveIntensity=e,this.rightScreenMat.emissiveIntensity=e,this.leftScreenMat.emissiveIntensity=e)}}const Xu={vertex:`
    uniform float uTime;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    
    // Gerstner Wave equation adapted for XY plane geometry
    vec3 getGerstnerWave(vec3 pos, float waveLength, float amplitude, float speed, vec2 direction, float steepness) {
      float k = 2.0 * 3.14159 / waveLength;
      float c = sqrt(9.8 / k);
      vec2 d = normalize(direction);
      float f = k * (dot(d, pos.xy) - c * uTime * speed);
      
      return vec3(
        d.x * (steepness * amplitude) * cos(f), // displace along local X
        d.y * (steepness * amplitude) * cos(f), // displace along local Y
        amplitude * sin(f)                      // displace along local Z (height)
      );
    }
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Layering waves for stormy, choppy water
      vec3 w1 = getGerstnerWave(position, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25);
      vec3 w2 = getGerstnerWave(position, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20);
      vec3 w3 = getGerstnerWave(position, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
      
      pos += w1 + w2 + w3;
      vec4 worldPos = modelMatrix * vec4(pos, 1.0);
      vWorldPos = worldPos.xyz;
      
      // Calculate normal vectors procedurally
      vec3 epsX = vec3(0.2, 0.0, 0.0);
      vec3 pX = position + epsX;
      pX += getGerstnerWave(pX, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25) +
            getGerstnerWave(pX, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20) +
            getGerstnerWave(pX, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
            
      vec3 epsY = vec3(0.0, 0.2, 0.0);
      vec3 pY = position + epsY;
      pY += getGerstnerWave(pY, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25) +
            getGerstnerWave(pY, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20) +
            getGerstnerWave(pY, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
            
      vec3 tangent = normalize(pX - pos);
      vec3 bitangent = normalize(pY - pos);
      vWorldNormal = normalize((modelMatrix * vec4(cross(tangent, bitangent), 0.0)).xyz);
      
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,fragment:`
    uniform float uTime;
    uniform vec3 uMoonLightPos;
    uniform vec3 uMoonColor;
    uniform vec3 uDarkWaterColor;
    uniform float uThrusterIntensity;
    uniform vec3 uThrusterPos;
    uniform float uLandingFadeIn;
    uniform float uAmbientIntensity;
    
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      vec3 normal = normalize(vWorldNormal);
      
      // Layered micro-bump mapping using world position for seamless, non-stretched coordinates
      vec2 uvRippleX = vWorldPos.xz * 5.0 + vec2(uTime * 0.8, uTime * 0.5);
      vec2 uvRippleZ = vWorldPos.xz * 5.0 + vec2(uTime * -0.6 + 80.0, uTime * 0.9 + 40.0);
      
      // Use different frequencies and scrolling directions to create dynamic, chaotic wave ripples
      float bumpX = noise(uvRippleX) * 0.14 + 
                    noise(uvRippleX * 2.2 + vec2(uTime * -0.4, uTime * 0.8)) * 0.07 +
                    noise(uvRippleX * 4.8 + vec2(uTime * 1.2, uTime * -1.0)) * 0.03;
                    
      float bumpZ = noise(uvRippleZ) * 0.14 + 
                    noise(uvRippleZ * 2.2 + vec2(uTime * 0.6, uTime * -0.5)) * 0.07 +
                    noise(uvRippleZ * 4.8 + vec2(uTime * -0.9, uTime * 1.1)) * 0.03;
      
      // Perturb the normal along the horizontal XZ plane, leaving the vertical component unaffected
      vec3 blendNormal = normalize(normal + vec3(bumpX, 0.0, bumpZ));
      
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      
      // Moon Specular Reflections (high contrast, wet look)
      vec3 moonDir = normalize(uMoonLightPos - vWorldPos);
      float moonDiff = max(dot(blendNormal, moonDir), 0.0);
      
      vec3 moonHalfDir = normalize(moonDir + viewDir);
      float moonSpec = pow(max(dot(blendNormal, moonHalfDir), 0.0), 180.0) * 0.95; // narrower & slightly dimmed hot spot
      float moonWideSpec = pow(max(dot(blendNormal, moonHalfDir), 0.0), 24.0) * 0.20; // narrower specular reflection path
      
      // Thruster Flame Light Reflections
      vec3 thrusterDir = normalize(uThrusterPos - vWorldPos);
      float thrusterDist = length(uThrusterPos - vWorldPos);
      float thrusterAtten = 1.0 / (1.0 + 0.02 * thrusterDist + 0.0005 * thrusterDist * thrusterDist);
      float thrusterDiff = max(dot(blendNormal, thrusterDir), 0.0);
      vec3 thrusterHalfDir = normalize(thrusterDir + viewDir);
      float thrusterSpec = pow(max(dot(blendNormal, thrusterHalfDir), 0.0), 96.0) * uThrusterIntensity * 0.08; // narrower thruster spec
      
      vec3 thrusterReflectColor = vec3(1.0, 0.45, 0.08) * thrusterSpec * thrusterAtten;
      
      // Combine lighting into Batman Arkham color palette (dark green/blue/black water)
      vec3 skyReflectColor = vec3(0.015, 0.035, 0.075); // richer dark blue reflect
      
      float fresnel = pow(1.0 - max(dot(blendNormal, viewDir), 0.0), 5.0);
      float scaleFactor = uAmbientIntensity / 0.6;
      vec3 waterBase = mix(uDarkWaterColor * scaleFactor, skyReflectColor * scaleFactor, 0.15 + 0.35 * fresnel);
      waterBase += uMoonColor * (moonDiff * 0.05 + moonSpec + moonWideSpec);
      waterBase += thrusterReflectColor;
      
      // Add wind-blown foam on steep wave crests (restricted to extreme wave peaks)
      float steepness = 1.0 - normal.y;
      float foam = smoothstep(0.35, 0.70, steepness * 0.82 + noise(vUv * 1500.0) * 0.22) * 0.22; // reduced density and opacity
      vec3 foamColor = vec3(0.85, 0.90, 0.98);
      
      vec3 finalColor = mix(waterBase, foamColor, foam);
      
      gl_FragColor = vec4(finalColor * uLandingFadeIn, 1.0);
    }
  `};function qu(a,e){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,2048,2048);const i=n.createRadialGradient(1024,1024,40,1024,1024,960);i.addColorStop(0,a),i.addColorStop(.35,e),i.addColorStop(.7,"rgba(0,0,0,0.02)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,2048,2048),n.globalCompositeOperation="screen";for(let l=0;l<20;l++){const c=300+Math.random()*1448,h=300+Math.random()*1448,u=160+Math.random()*440,f=n.createRadialGradient(c,h,8,c,h,u);f.addColorStop(0,"rgba(75, 40, 130, 0.08)"),f.addColorStop(.5,"rgba(50, 20, 90, 0.04)"),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.beginPath(),n.arc(c,h,u,0,Math.PI*2),n.fill()}const s=n.getImageData(0,0,2048,2048),r=s.data;for(let l=0;l<r.length;l+=4)if(r[l+3]>0){const c=(Math.random()-.5)*5;r[l]=Math.min(255,Math.max(0,r[l]+c)),r[l+1]=Math.min(255,Math.max(0,r[l+1]+c)),r[l+2]=Math.min(255,Math.max(0,r[l+2]+c))}n.putImageData(s,0,0);const o=new $n(t);return o.minFilter=Lt,o.magFilter=Lt,o}function Tb(){const a=document.createElement("canvas");a.width=64,a.height=64;const e=a.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,64,64);const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.35,"rgba(200, 240, 255, 1.0)"),t.addColorStop(.7,"rgba(100, 160, 255, 0.5)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=e.createLinearGradient(0,32,64,32);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(8,32),e.lineTo(56,32),e.stroke();let i=e.createLinearGradient(32,0,32,64);i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.moveTo(32,8),e.lineTo(32,56),e.stroke();const s=new $n(a);return s.minFilter=Lt,s.magFilter=Lt,s}function js(a=256,e=256,t="#1a1f2c",n="#0d0f15"){const i=document.createElement("canvas");i.width=a,i.height=e;const s=i.getContext("2d"),r=s.createLinearGradient(0,0,a,e);r.addColorStop(0,t),r.addColorStop(1,n),s.fillStyle=r,s.fillRect(0,0,a,e);const o=s.getImageData(0,0,a,e),l=o.data;for(let h=0;h<l.length;h+=4){const u=(Math.random()-.5)*15;l[h]=Math.min(255,Math.max(0,l[h]+u)),l[h+1]=Math.min(255,Math.max(0,l[h+1]+u)),l[h+2]=Math.min(255,Math.max(0,l[h+2]+u))}s.putImageData(o,0,0);for(let h=0;h<40;h++)s.fillStyle=Math.random()<.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.03)",s.beginPath(),s.arc(Math.random()*a,Math.random()*e,2+Math.random()*8,0,Math.PI*2),s.fill();const c=new $n(i);return c.wrapS=Oi,c.wrapT=Oi,c.repeat.set(4,4),c}class Eb{constructor(e){this.scene=e,this.moonGroup=new Ct,this.scene.add(this.moonGroup),this.moonLight=new Li(ve.colors.moonColor,.6),this.moonLight.position.set(0,150,-450),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.width=2048,this.moonLight.shadow.mapSize.height=2048,this.moonLight.shadow.bias=-4e-4,this.moonGroup.add(this.moonLight),this.nebMat1=new rn({map:qu("rgba(20, 100, 240, 0.28)","rgba(5, 12, 40, 0)"),transparent:!0,depthWrite:!1,blending:Ut,side:Kt,fog:!1}),this.nebMat2=new rn({map:qu("rgba(140, 40, 180, 0.22)","rgba(12, 3, 24, 0)"),transparent:!0,depthWrite:!1,blending:Ut,side:Kt,fog:!1});const t=new bn(1200,450);this.nebulaCount=5,this.nebulaMeshes=[],this.nebulaXOffsets=[],this.nebulaSettings=[];const n=1400,i=n/2;for(let p=0;p<this.nebulaCount;p++){const m=p%2===0?this.nebMat1:this.nebMat2,_=new Be(t,m),b=p/this.nebulaCount*n-i,x=240+Math.random()*40,v=-520+Math.random()*30;_.position.set(b,x,v),_.rotation.y=(Math.random()-.5)*.4,this.moonGroup.add(_),this.nebulaMeshes.push(_),this.nebulaXOffsets.push(b),this.nebulaSettings.push({rotSpeed:.008+Math.random()*.016,rotDir:Math.random()<.5?1:-1,yBase:x,driftFreqX:.2+Math.random()*.2,driftAmpX:25+Math.random()*20,driftFreqY:.1+Math.random()*.2,driftAmpY:5+Math.random()*5})}this.starCount=400,this.starSpeed=3,this.starSize=1.5,this.lastTime=0;const s=[];for(let p=0;p<4;p++){const m=.2+Math.random()*(Math.PI/2-.3),_=Math.random()*Math.PI,b=620;s.push({x:b*Math.sin(m)*Math.cos(_),y:Math.abs(b*Math.cos(m))+60,z:-Math.abs(b*Math.sin(m)*Math.sin(_))-320})}const r=new _t,o=[];for(let p=0;p<this.starCount;p++)if(Math.random()<.65&&s.length>0){const m=s[Math.floor(Math.random()*s.length)],_=50,b=(Math.random()-.5+Math.random()-.5)*_,x=(Math.random()-.5+Math.random()-.5)*_,v=(Math.random()-.5+Math.random()-.5)*_;o.push(m.x+b,m.y+x,m.z+v)}else{const m=Math.random()*Math.PI,_=Math.random()*Math.PI,b=580+Math.random()*160,x=b*Math.sin(m)*Math.cos(_),v=Math.abs(b*Math.cos(m))+50,M=-Math.abs(b*Math.sin(m)*Math.sin(_))-320;o.push(x,v,M)}const l={vertex:`
    attribute float aPhase;
    attribute float aSpeed;
    uniform float uTime;
    uniform float uSize;
    varying float vBrightness;
    
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Calculate twinkling oscillation (smooth pulsing between 0.15 dark and 1.0 bright)
      float t = uTime * aSpeed + aPhase;
      vBrightness = 0.15 + 0.85 * pow(0.5 + 0.5 * sin(t), 2.2);
      
      // Size attenuation based on depth and brightness
      gl_PointSize = uSize * (350.0 / -mvPosition.z) * (0.7 + 0.3 * vBrightness);
    }
  `,fragment:`
    uniform sampler2D uTexture;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying float vBrightness;
    
    void main() {
      vec4 texColor = texture2D(uTexture, gl_PointCoord);
      if (texColor.a < 0.05) discard;
      gl_FragColor = vec4(uColor * vBrightness, texColor.a * uOpacity * vBrightness);
    }
  `};r.setAttribute("position",new Je(o,3));const c=new Float32Array(this.starCount),h=new Float32Array(this.starCount);for(let p=0;p<this.starCount;p++)c[p]=Math.random()*Math.PI*2,h[p]=.25+Math.random()*.75;r.setAttribute("aPhase",new pt(c,1)),r.setAttribute("aSpeed",new pt(h,1)),this.starMat=new mt({vertexShader:l.vertex,fragmentShader:l.fragment,uniforms:{uTime:{value:0},uSize:{value:this.starSize*3.2},uTexture:{value:Tb()},uColor:{value:new Pe(16777215)},uOpacity:{value:0}},transparent:!0,blending:Ut,depthWrite:!1,fog:!1}),this.stars=new er(r,this.starMat),this.moonGroup.add(this.stars),this.stormAmbient=new oc(16777215,re.ambientIntensity),this.scene.add(this.stormAmbient),this.stormSkyLight=new Li(1976635,.7),this.stormSkyLight.position.set(40,150,40),this.scene.add(this.stormSkyLight),this.oceanGeom=new bn(4e3,4e3,250,250),this.oceanMat=new mt({vertexShader:Xu.vertex,fragmentShader:Xu.fragment,uniforms:{uTime:{value:0},uMoonLightPos:{value:this.moonLight.position},uMoonColor:{value:new Pe(ve.colors.moonColor)},uDarkWaterColor:{value:new Pe(ve.colors.oceanDarkWater)},uThrusterIntensity:{value:0},uThrusterPos:{value:new E(0,0,0)},uLandingFadeIn:{value:0},uAmbientIntensity:{value:.6}},side:Kt}),this.ocean=new Be(this.oceanGeom,this.oceanMat),this.ocean.rotation.x=-Math.PI/2,this.ocean.receiveShadow=!0,this.monolithManager=new wb(this.scene),this.monolithMat=this.monolithManager.monolithMat,this.slabTexture=js(256,256,"#181d28","#0b0d13"),this.slabMat=new dt({map:this.slabTexture,bumpMap:this.slabTexture,bumpScale:.08,roughness:.85,metalness:.15}),this.padTexture=js(256,256,"#171b21","#0e1116"),this.padMat=new dt({color:1119773,map:this.padTexture,bumpMap:this.padTexture,bumpScale:.05,roughness:.55,metalness:.35}),this.pillarTexture=js(256,256,"#404c5c","#2c3540"),this.pillarMat=new dt({map:this.pillarTexture,bumpMap:this.pillarTexture,bumpScale:.04,roughness:.25,metalness:.9}),this.ambientHoverLight=new zs(65535,1.5,25),this.ambientHoverLight.position.set(0,5,-72);const u=document.createElement("canvas");u.width=128,u.height=128;const f=u.getContext("2d"),d=f.createRadialGradient(64,64,0,64,64,64);d.addColorStop(0,"rgba(0, 240, 255, 1.0)"),d.addColorStop(.4,"rgba(0, 240, 255, 0.3)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),f.fillStyle=d,f.fillRect(0,0,128,128);const g=new $n(u);this.poolMat=new rn({map:g,color:65535,transparent:!0,blending:Ut,depthWrite:!1}),this.hoverPool=new Be(new bn(80,80),this.poolMat),this.hoverPool.rotation.x=-Math.PI/2,this.hoverPool.position.set(0,.1,-72)}configureMonolith(e){if(!e)return;this.monolithManager.configureMonolith(e);const t=[];e.children.forEach(s=>{Math.abs(s.position.z)<20&&t.push(s)}),this.padGroup=new Ct,t.forEach(s=>{this.padGroup.add(s)}),this.padGroup.position.set(0,0,-45),e.add(this.padGroup),this.rocketPadGroup=this.padGroup.clone(),this.rocketPadGroup.position.set(40,7,-100),this.rocketPadGroup.scale.set(.6,.6,.6),this.scene.add(this.rocketPadGroup),this.scene.add(this.ambientHoverLight),this.scene.add(this.hoverPool);const n=new Ht(11,12,15,64,32);this.monolithPillar=new Be(n,this.pillarMat),this.monolithPillar.position.set(0,-.5,-72),this.monolithPillar.receiveShadow=!0,this.monolithPillar.castShadow=!0,this.scene.add(this.monolithPillar);const i=new Ht(6,7,15,64,32);this.rocketPillar=new Be(i,this.pillarMat),this.rocketPillar.position.set(40,-.5,-100),this.rocketPillar.receiveShadow=!0,this.rocketPillar.castShadow=!0,this.scene.add(this.rocketPillar),this.monoStageLight=new Li(13559807,1.2),this.monoStageLight.position.set(0,80,-72),this.monoStageLight.castShadow=!0,this.monoStageLight.shadow.mapSize.width=1024,this.monoStageLight.shadow.mapSize.height=1024,this.monoStageLight.shadow.bias=-6e-4,this.monoStageLight.shadow.radius=4,this.monoStageLight.shadow.camera.left=-30,this.monoStageLight.shadow.camera.right=30,this.monoStageLight.shadow.camera.top=30,this.monoStageLight.shadow.camera.bottom=-30,this.monoStageLight.shadow.camera.near=10,this.monoStageLight.shadow.camera.far=100,this.scene.add(this.monoStageLight),this.scene.add(this.monoStageLight.target),this.monoStageLight.target.position.set(0,7,-72)}setMonolithLightIntensity(e){this.baseMonoStageLightIntensity=1.2*e,this.monoStageLight&&(this.monoStageLight.intensity=this.baseMonoStageLightIntensity*(re.landingFadeInProgress||1))}activateOcean(){this.scene.add(this.ocean)}update(e,t){this.oceanMat.uniforms.uTime.value=e;const n=re.currentScene,i=n==="LANDING"||n==="MANUAL",s=n==="STORM"||n==="LANDING"||n==="MANUAL";if(this.moonGroup.visible=i,this.ocean.visible=i,this.ambientHoverLight.visible=i,this.hoverPool.visible=i,this.rocketPadGroup&&(this.rocketPadGroup.visible=i),this.monolithPillar&&(this.monolithPillar.visible=i),this.rocketPillar&&(this.rocketPillar.visible=i),this.monoStageLight&&(this.monoStageLight.visible=i),this.stormAmbient.visible=s,this.stormSkyLight.visible=s,t&&(this.oceanMat.uniforms.uThrusterIntensity.value=re.thrusterIntensity,this.oceanMat.uniforms.uThrusterPos.value.copy(t.position)),this.oceanMat.uniforms.uLandingFadeIn.value=re.landingFadeInProgress,this.oceanMat.uniforms.uAmbientIntensity.value=re.ambientIntensity,i){const r=re.landingFadeInProgress,o=1;if(this.monolithMat.emissiveIntensity=o*r,this.ambientHoverLight.intensity=1.5*r,this.poolMat.opacity=.25*r,this.moonLight.intensity=.6*r,this.stormAmbient.intensity=re.ambientIntensity*r,this.stormSkyLight.intensity=.7*r,this.monoStageLight){const d=this.baseMonoStageLightIntensity!==void 0?this.baseMonoStageLightIntensity:1.2;this.monoStageLight.intensity=d*r}this.nebMat1&&(this.nebMat1.opacity=r*.4),this.nebMat2&&(this.nebMat2.opacity=r*.3),this.starMat&&this.starMat.uniforms&&(this.starMat.uniforms.uTime.value=e,this.starMat.uniforms.uOpacity.value=r*.85);const l=performance.now()*.001,c=this.lastTime?l-this.lastTime:.016;this.lastTime=l;const h=this.starSpeed*.5,f=1400/2;for(let d=0;d<this.nebulaCount;d++){this.nebulaXOffsets[d]+=h*c,this.nebulaXOffsets[d]>f&&(this.nebulaXOffsets[d]=-f);const g=this.nebulaMeshes[d],p=this.nebulaSettings[d];g&&p&&(g.rotation.z=l*p.rotSpeed*p.rotDir,g.position.x=this.nebulaXOffsets[d]+Math.sin(l*p.driftFreqX)*p.driftAmpX,g.position.y=p.yBase+Math.cos(l*p.driftFreqY)*p.driftAmpY)}if(this.stars){const d=this.stars.geometry.getAttribute("position"),g=d.array;for(let p=0;p<this.starCount;p++){const m=p*3;g[m]+=this.starSpeed*c,g[m]>450&&(g[m]=-450)}d.needsUpdate=!0}}else n==="STORM"&&(this.stormAmbient.intensity=re.ambientIntensity,this.stormSkyLight.intensity=.7)}}class Ab{constructor(e,t,n,i,s,r){this.scene=e,this.camera=t,this.renderer=n,this.composer=i,this.bloomPass=s,this.loadingManager=r||new sc,this.isActive=!1,this.sequenceTime=0,this.cinematicTimeline=null,this.landingLegs=[],this.rocketMaterials=[],this.targetMonolithRotationY=0,this.initGroups(),this.initLightsAndEnvironment(),this.initSystems(),this.initInteractionHandlers(),this.loadAssets()}initGroups(){this.spaceGroup=new Ct,this.spaceGroup.name="EarthLandingSpaceGroup",this.spaceGroup.visible=!1,this.scene.add(this.spaceGroup),this.oceanGroup=new Ct,this.oceanGroup.name="EarthLandingOceanGroup",this.oceanGroup.visible=!1,this.scene.add(this.oceanGroup),this.earthGroup=new Ct,this.earthGroup.name="EarthGroup",this.spaceGroup.add(this.earthGroup),this.earthGroup.visible=!1,re.earth=this.earthGroup;const e=new dt({color:1122884,roughness:.7,metalness:.1,emissive:1920728,emissiveIntensity:.35}),t=new ic(120,32,32),n=new Be(t,e);this.earthGroup.add(n)}initLightsAndEnvironment(){this.cubeRenderTarget=new _f(256,{generateMipmaps:!0,minFilter:Jn,format:_n}),this.cubeCamera=new mf(.1,1e3,this.cubeRenderTarget),this.scene.add(this.cubeCamera),this.spaceAmbient=new oc(16777215,.6),this.spaceGroup.add(this.spaceAmbient),this.spaceSun=new Li(16777215,1.5),this.spaceSun.name="spaceSun",this.spaceSun.position.set(-100,150,100),this.spaceGroup.add(this.spaceSun),this.earthFrontLight=new Li(16777215,0),this.earthFrontLight.name="earthFrontLight",this.spaceGroup.add(this.earthFrontLight),this.hemisphereLight=new Ff(8246268,1976635,1.2),this.hemisphereLight.name="earthLandingHemiLight",this.hemisphereLight.visible=!1,this.scene.add(this.hemisphereLight),this.searchLight=new kf(65450,20,180,Math.PI/5,.4,.5),this.searchLight.castShadow=!0,this.searchLight.shadow.mapSize.width=1024,this.searchLight.shadow.mapSize.height=1024,this.searchLight.visible=!1,this.scene.add(this.searchLight),this.scene.add(this.searchLight.target);const e=new nc(4,4.4,32),t=new rn({color:65450,side:Kt,transparent:!0,opacity:.8});this.targetRing=new Be(e,t),this.targetRing.rotation.x=-Math.PI/2,this.targetRing.position.set(40,7.01,-100),this.oceanGroup.add(this.targetRing)}initSystems(){this.warpSystem=new Mb(this.spaceGroup),this.atmosphereSystem=new bb(this.spaceGroup),this.landingSystem=new Eb(this.oceanGroup),this.stormSystem=null}initInteractionHandlers(){const e=document.getElementById("monolith-rotate-left"),t=document.getElementById("monolith-rotate-right");e&&e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.monolithScene&&(this.targetMonolithRotationY-=Math.PI/2,vn.to(this.monolithScene.rotation,{y:this.targetMonolithRotationY,duration:.85,ease:"power2.out"}))}),t&&t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.monolithScene&&(this.targetMonolithRotationY+=Math.PI/2,vn.to(this.monolithScene.rotation,{y:this.targetMonolithRotationY,duration:.85,ease:"power2.out"}))})}loadAssets(){const e=new cc(this.loadingManager);e.load(ve.assets.rocketModel,t=>{this.rocketModel=t.scene,this.rocketModel.scale.set(1,1,1),this.rocketModel.position.set(42,-6.25,30),this.rocketModel.rotation.set(0,0,0),this.rocketModel.visible=!0,this.scene.add(this.rocketModel),this.configureRocketModel(this.rocketModel),this.atmosphereSystem.createShell(this.rocketModel),this.stormSystem=new Sb(this.scene,this.rocketModel);const n=new ec(.8,6,16,1,!0);n.translate(0,-3,0);const i=new rn({color:16755268,transparent:!0,opacity:0,blending:Ut});this.thrusterFlame=new Be(n,i),this.thrusterFlame.position.set(0,-1.8,0),this.rocketModel.add(this.thrusterFlame),this.checkReadyAndBuildTimeline()}),e.load(ve.assets.monolithScene,t=>{this.monolithScene=t.scene;const n=.6*.76;this.monolithScene.scale.set(n,n,n),this.monolithScene.position.set(0,7,-72+n*45),this.oceanGroup.add(this.monolithScene),this.landingSystem.configureMonolith(this.monolithScene),this.landingSystem.activateOcean(),this.checkReadyAndBuildTimeline()})}configureRocketModel(e){e.traverse(t=>{t.name&&(t.name.toLowerCase().includes("leg")||t.name.toLowerCase().includes("foot")||t.name.toLowerCase().includes("gear")||t.name.toLowerCase().includes("strut"))&&(this.landingLegs.push(t),t.scale.set(.001,.001,.001)),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{this.rocketMaterials.push(i),i.metalness=.99,i.roughness=.01,i.color&&i.color.setHex(11184810),i.envMap=this.cubeRenderTarget.texture,i.envMapIntensity=.35,i.needsUpdate=!0}))})}checkReadyAndBuildTimeline(){this.rocketModel&&this.monolithScene&&!this.cinematicTimeline&&(this.cinematicTimeline=yb(this.rocketModel,this.earthGroup,this.spaceGroup,this.oceanGroup,this.renderer,this.camera,this.landingLegs,this.bloomPass),re.timeScale=ve.timeScale,this.cinematicTimeline.timeScale(re.timeScale),console.log("[EARTH LANDING] Cinematic timeline successfully built & ready!"))}startSequence(){this.isActive=!0,this.spaceGroup.visible=!0,this.hemisphereLight.visible=!0,this.scene.background=new Pe(ve.colors.bgSpace),this.scene.fog=new ql(ve.colors.bgSpace,0),this.rocketModel&&(this.rocketModel.visible=!0,this.rocketModel.position.set(42,-6.25,30),this.rocketModel.rotation.set(0,0,0),this.rocketModel.scale.set(1,1,1),this.rocketModel.updateMatrixWorld(!0)),Zi.currentPos.copy(this.camera.position),Zi.targetPos.copy(this.camera.position),Zi.localYOffset=-8,this.cinematicTimeline&&this.cinematicTimeline.play(0),console.log("[EARTH LANDING] Sequence ignited at 50/50 starting frame!")}updateCubeNow(){if(this.rocketModel&&this.cubeCamera&&this.rocketModel.visible){const e=this.rocketModel.visible,t=this.renderer.shadowMap.enabled;this.renderer.shadowMap.enabled=!1,this.rocketModel.visible=!1,this.cubeCamera.position.copy(this.rocketModel.position),this.cubeCamera.update(this.renderer,this.scene),this.rocketModel.visible=e,this.renderer.shadowMap.enabled=t,this.hasRenderedInitialCube=!0}}update(e,t){if(this.rocketModel&&this.cubeCamera&&this.rocketModel.visible&&(this.cubeFrameCounter||(this.cubeFrameCounter=0),this.cubeFrameCounter++,(!this.hasRenderedInitialCube||this.isActive&&this.cubeFrameCounter%6===0)&&this.updateCubeNow()),!this.isActive)return;const n=t*re.timeScale;if(this.cinematicTimeline&&(this.cinematicTimeline.timeScale()!==re.timeScale&&this.cinematicTimeline.timeScale(re.timeScale),re.timelineTime=this.cinematicTimeline.time()),re.currentScene!=="INITIAL"?this.sequenceTime+=n:this.sequenceTime=0,re.globalTime=this.sequenceTime,mb.tick(this.rocketModel),Zi.update(this.camera,this.rocketModel,this.sequenceTime,n),this.rocketModel&&this.searchLight&&(this.searchLight.position.copy(this.rocketModel.position),this.searchLight.target.position.set(this.rocketModel.position.x,this.rocketModel.position.y-60,this.rocketModel.position.z),this.searchLight.visible=this.rocketModel.visible&&re.currentScene!=="WARP"&&re.currentScene!=="INITIAL"&&re.currentScene!=="SNAP_BACK"),this.targetRing&&(this.targetRing.visible=re.currentScene==="STORM"||re.currentScene==="LANDING"||re.currentScene==="MANUAL"),re.currentScene==="REENTRY"&&this.rocketModel){const o=re.rocketArcProgress,l=99.45*(1-o)-31.84*o-378.02*o*(1-o),c=-53.54+433.54*o,h=25.23*(1-o)-16.91*o+68.56*o*(1-o),u=10*(1-.94*o);this.rocketModel.position.set(l,c,h),this.rocketModel.scale.set(u,u,u);const f=Math.min(o+.002,1),d=99.45*(1-f)-31.84*f-378.02*f*(1-f),g=-53.54+433.54*f,p=25.23*(1-f)-16.91*f+68.56*f*(1-f),m=new E(d-l,g-c,p-h).normalize(),_=new ln().setFromUnitVectors(new E(0,1,0),m);o===0?this.rocketModel.quaternion.copy(_):this.rocketModel.quaternion.slerp(_,.08)}if(this.thrusterFlame){const o=re.thrusterIntensity/8;this.thrusterFlame.scale.set(1,o,1),this.thrusterFlame.material.opacity=o*.85}const i=document.getElementById("storm-overlay");i&&(i.style.opacity=re.whiteoutOpacity),this.warpSystem&&this.warpSystem.update(this.sequenceTime,this.camera,n),this.atmosphereSystem&&this.atmosphereSystem.update(this.sequenceTime),this.landingSystem&&this.landingSystem.update(this.sequenceTime,this.rocketModel),this.stormSystem&&this.stormSystem.update(this.sequenceTime,n,this.rocketModel,this.camera);let s=ve.colors.bgSpace;re.currentScene==="STORM"?s=ve.colors.bgStorm:(re.currentScene==="LANDING"||re.currentScene==="MANUAL")&&(s=ve.colors.bgLanding);const r=new Pe(s);if(this.scene.fog&&(this.scene.fog.color.copy(r),this.scene.background.copy(r),this.scene.fog.density=lt.lerp(this.scene.fog.density,re.globalFogDensity||0,.05)),this.monolithScene){const o=.45599999999999996,l=re.currentScene==="LANDING"||re.currentScene==="MANUAL",c=l&&re.monolithRiseProgress!==void 0?re.monolithRiseProgress:1,u=7+(ve.monolith&&ve.monolith.startDepth?ve.monolith.startDepth:-45)*(1-c);this.monolithScene.scale.set(o,o,o);const f=this.monolithScene.rotation.y,d=o*45,g=d*Math.sin(f),p=-72+d*Math.cos(f);this.monolithScene.position.set(g,u,p),this.landingSystem&&this.landingSystem.monolithPillar&&(this.landingSystem.monolithPillar.rotation.y=this.monolithScene.rotation.y);const m=document.getElementById("monolith-rotation-controls"),_=document.getElementById("monolith-rotate-left"),b=document.getElementById("monolith-rotate-right");if(m&&_&&b)if(l&&re.monolithRiseProgress!==void 0&&re.monolithRiseProgress>=.98){m.classList.add("visible");const v=new E(-13,14,-72),M=new E(13,14,-72);v.project(this.camera),M.project(this.camera);const T=(v.x*.5+.5)*window.innerWidth,C=(-(v.y*.5)+.5)*window.innerHeight,y=(M.x*.5+.5)*window.innerWidth,S=(-(M.y*.5)+.5)*window.innerHeight;_.style.left=`${T}px`,_.style.top=`${C}px`,b.style.left=`${y}px`,b.style.top=`${S}px`}else m.classList.remove("visible")}}}function Cb(){const a=document.getElementById("webgl-canvas");if(!a)return;const e=new Yx;e.background=new Pe(132106);const t=new sn(50,window.innerWidth/window.innerHeight,.5,800),n=new Sf({canvas:a,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=ju,n.toneMapping=$u,n.toneMappingExposure=1.25;const i=new By(n),s=new Uy(e,t),r=new nr(new ie(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.45,.5,.92);i.addPass(s),i.addPass(r);const o=new Gf(t,n.domElement);o.enabled=!1,o.enableDamping=!0,o.dampingFactor=.05;const l=document.getElementById("loader-screen"),c=document.getElementById("loader-bar"),h=document.getElementById("loader-status"),u=new sc,f={pct:0};let d=!1;u.onProgress=(te,Ee,ze)=>{const Ze=ze>0?Math.floor(Ee/ze*100):0,Te=Math.max(f.pct,Math.min(Ze,99));vn.to(f,{pct:Te,duration:.35,ease:"power1.out",onUpdate:()=>{const me=Math.floor(f.pct);c&&(c.style.width=`${me}%`),h&&(h.innerText=`Preloading WebGL and assets... (${me}%)`)}})},u.onLoad=()=>{d||(d=!0,vn.to(f,{pct:100,duration:.35,ease:"power1.out",onUpdate:()=>{c&&(c.style.width="100%"),h&&(h.innerText="Initialization Complete (100%)")},onComplete:()=>{l&&(l.style.transition="opacity 0.6s ease",l.style.opacity="0",setTimeout(()=>{l.style.display="none"},600))}}),console.log("[SCENE 1] Loading Manager complete."))},u.onError=te=>{console.error("[SCENE 1] Error loading asset:",te),h&&(h.innerText=`Error loading: ${te}`)};const g=new E(39.8,.1,-6.8),p=new E(36.2,-.4,2.8),m=new E(-12.68,29.89,78.14),_=new E(14.65,23.3,17.59),b=p.clone();t.position.copy(g),t.lookAt(b),o.target.copy(p),window.triggerBlastOff=$;const x=new oc(1914199,1.2);e.add(x);const v=new Ff(3718648,593174,.3);e.add(v);const M=new Li(16775149,1.5);M.position.set(45,30,60),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,e.add(M);const T=new zs(3718648,1.4,20);T.position.set(37.5,5,2),e.add(T);const C=new zs(16711731,4.5,8);C.position.set(37.5,-2.2,6.5),e.add(C);let y=null;const S=new ab(e),R=new Ab(e,t,n,i,r,u);function N(te){te.clearRect(0,0,1024,512),te.save();const ze="BLAST OFF".split(""),Ze=ze.length,Te=260,me=780,wt=65;te.textAlign="center",te.textBaseline="top";for(let Tt=0;Tt<Ze;Tt++){const Et=ze[Tt];if(Et===" ")continue;const zn=Tt/(Ze-1),gr=1.75*(1.3-zn*.5),gs=.85*(1.2-zn*.38),da=Te+zn*(me-Te);te.save(),te.translate(da,wt),te.scale(gs,gr);const zi=te.createLinearGradient(0,0,0,160);zi.addColorStop(0,"#ffea00"),zi.addColorStop(.4,"#ff7700ff"),zi.addColorStop(1,"#ff2a00ff"),te.shadowColor="#ff0000",te.shadowBlur=35,te.fillStyle=zi,te.font='bold 160px "Bebas Neue", "Oswald", "Anton", sans-serif',te.fillText(Et,0,0),te.shadowBlur=12,te.fillStyle=zi,te.fillText(Et,0,0),te.restore()}te.restore()}function q(){const te=document.createElement("canvas");te.width=1024,te.height=512;const Ee=te.getContext("2d");N(Ee);const ze=new $n(te);return ze.colorSpace=mn,ze.wrapS=on,ze.wrapT=on,document.fonts&&document.fonts.ready.then(()=>{N(Ee),ze.needsUpdate=!0}),ze}const D=q();function I(){const te=document.createElement("canvas");te.width=512,te.height=256;const Ee=te.getContext("2d");Ee.fillStyle="#0284c7",Ee.fillRect(0,0,512,256),Ee.strokeStyle="#38bdf8",Ee.lineWidth=2;for(let Ze=0;Ze<512;Ze+=32)Ee.beginPath(),Ee.moveTo(Ze,0),Ee.lineTo(Ze,256),Ee.stroke();for(let Ze=0;Ze<256;Ze+=32)Ee.beginPath(),Ee.moveTo(0,Ze),Ee.lineTo(512,Ze),Ee.stroke();Ee.fillStyle="#e0f2fe",Ee.font="bold 24px monospace",Ee.fillText("STATION_DIAGNOSTICS // ONLINE",20,40);const ze=new $n(te);return ze.colorSpace=mn,ze}const z=I(),X=new cc(u),Y=new pb;e.add(Y.group);let G=null,ee=null,Q=null;const U=[],W=[],ne=[],se=new dt({color:3023626,roughness:.22,metalness:.94,envMapIntensity:1.3}),he=new dt({color:3023626,roughness:.24,metalness:.92,envMapIntensity:1.3});X.load("/assets/FinalSpaceStationModel.glb",te=>{G=te.scene,e.add(G);const Ee=[];G.traverse(Te=>{Te.isLight&&Ee.push(Te);const me=Te.name||"";if(me.includes("Collar_Left"),me.includes("Collar_Right"),me.includes("Collar_Front"),me.includes("Collar_Back"),/docking_platform/i.test(me)&&(Te.visible=!1),Te.isMesh&&Te.material){Te.castShadow=!0,Te.receiveShadow=!0;const Tt=Te.material.name||"";(me.includes("Cabin_Light_Strip")||me.includes("Light_Strip"))&&(Te.visible=!1);const Et=/^(Collar_(Left|Right)_Detail_Ring|Sphere_Cap_Top_Ring_1|Hub_Front_Ring_1|Hub_Hatch_Ring_[13]|Arm_Truss_(North|South)_Ring_[13])$/i.test(me),zn=/^(Collar_(Front|Back)_Detail_Ring|Sphere_Cap_Bottom_Ring_1|Hub_Front_Ring_2|Hub_Hatch_Ring_[24]|Arm_Truss_(North|South)_Ring_2)$/i.test(me);Et?Te.material=se:zn?Te.material=he:Tt==="Hull_Light"?(Te.material.color.setHex(6583435),Te.material.roughness=.35,Te.material.metalness=.8):Tt==="Hull_Dark"?(Te.material.color.setHex(1976635),Te.material.roughness=.4,Te.material.metalness=.85):Tt==="Rocket_Silver"||Tt.toLowerCase().includes("rocket")||me.toLowerCase().includes("rocket")?Te.visible=!1:Tt==="Gantry_Copper"||me.includes("Window_Inner_Frame")||me.includes("Window_Frame")?Te.material=new dt({color:994140,roughness:.25,metalness:.9}):(Tt==="Window_Glass_Mat"||me.includes("Window_Glass"))&&(Te.material.transparent=!0,Te.material.opacity=.22,Te.material.color.setHex(3718648),Te.material.roughness=.02,Te.material.metalness=.2),(me.includes("Button_Lid")||me.includes("Button_Base")||me.includes("Button_Bezel")||me.includes("Button_Hinge")||me.includes("Button_Screw")||me.includes("Button_Indicator"))&&(Te.material=new dt({color:994140,metalness:.95,roughness:.1,envMapIntensity:1}),U.push(Te)),me.includes("Console_Screen")&&(Te.material=new dt({map:z,emissiveMap:z,emissive:new Pe(3718648),emissiveIntensity:1.4}),ne.push(Te.material)),me.includes("Button_Cylinder")&&(ee=Te,Te.material=new dt({color:16711680,emissive:16711697,emissiveIntensity:1.8,roughness:.1,metalness:.2}),ne.push(Te.material),U.push(Te)),(Tt.includes("Glow")||me.includes("Indicator")||Te.material.emissiveIntensity&&Te.material.emissiveIntensity>0)&&(ne.includes(Te.material)||ne.push(Te.material))}});const ze=new bn(1.5,.85),Ze=new dt({map:D,emissiveMap:D,emissive:new Pe(16729088),emissiveIntensity:.5,transparent:!0,opacity:.52,roughness:.55,metalness:.35,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthTest:!0,depthWrite:!1,side:Kt});Q=new Be(ze,Ze),Q.position.set(37.5,-2.75,7.34),Q.rotation.set(-.04,3.15,0),Q.scale.set(2.3,2.3,2.3),e.add(Q),y=new zs(3718648,3.5,45),y.position.set(20,5,18),e.add(y),Ee.forEach(Te=>{Te.parent&&Te.parent.remove(Te)}),console.log("[SCENE 1] Station loaded. 3D Model Button & Lid wired!")},void 0,te=>{console.error("[SCENE 1] Error loading station model:",te)});const H=new ob(()=>{H.group.position.set(35.1,.4,9.4),H.group.rotation.set(0,3.05,0),H.group.scale.set(1.45,1.45,1.45)});e.add(H.group);const Se=new hb("/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",null,u);Se.group.position.set(32.95,-5.5,1.1),Se.group.rotation.set(0,2.04,0),Se.group.scale.set(7.7,7.7,7.7),e.add(Se.group);const xe=new zs(16767673,.85,15);xe.position.set(36,1.5,-2),e.add(xe);const ue=new db;ue.group.position.set(-11.5,30.6,70.3),ue.group.rotation.set(.1,-.3,.02),ue.group.scale.set(.25,.25,.25),ue.setBeamTransform(1,.7,-2.2,.21),ue.setBeamProps(.28,60,.5),ue.setHoverBrightness(0),ue.group.visible=!1,e.add(ue.group);const fe=new sy,Ne=new ie(-9999,-9999);window.addEventListener("mousemove",te=>{if(Ne.x=te.clientX/window.innerWidth*2-1,Ne.y=-(te.clientY/window.innerHeight)*2+1,ue&&ue.isVisible){fe.setFromCamera(Ne,t);const Ee=fe.intersectObject(ue.screenMesh);if(Ee.length>0){document.body.style.cursor="pointer",Ee[0].uv.x<.5?ue.setHoverTarget(1):ue.setHoverTarget(2);return}else ue.setHoverTarget(0)}U.length>0&&(fe.setFromCamera(Ne,t),fe.intersectObjects(U,!0).length>0?(document.body.style.cursor="pointer",ee&&ee.material&&(ee.material.emissiveIntensity=2.5)):(document.body.style.cursor="default",ee&&ee.material&&(ee.material.emissiveIntensity=1.4)))}),window.addEventListener("click",te=>{if(te.target.closest("#hud-container")||te.target.closest("#camera-inspector")||te.target.tagName==="BUTTON"||te.target.tagName==="INPUT")return;if(Ne.x=te.clientX/window.innerWidth*2-1,Ne.y=-(te.clientY/window.innerHeight)*2+1,ue&&ue.isVisible){fe.setFromCamera(Ne,t);const ze=fe.intersectObject(ue.screenMesh);if(ze.length>0){const Te=ze[0].uv.x<.5?"TARGET A: KOPPULA SYSTEM":"TARGET B: ORIGIN PLANET";ce(Te);return}}if(Z||U.length===0)return;fe.setFromCamera(Ne,t),fe.intersectObjects(U,!0).length>0&&(ee?vn.to(ee.position,{y:"-=0.15",duration:.1,yoyo:!0,repeat:1,onComplete:()=>{$()}}):$())});let Z=!1;window.isTransitioning=Z;function $(){if(window.isTransitioning&&Z)return;Z=!0,window.isTransitioning=!0,o.enabled=!1;const te=document.getElementById("toggle-orbit-btn");te&&(te.innerText="ENABLE FREE CAM");const Ee=document.getElementById("cam-status");Ee&&(Ee.innerText="LAUNCH_SEQUENCE_ACTIVE");const ze=vn.timeline({onComplete:()=>{Z=!1,window.isTransitioning=!1,Ee&&(Ee.innerText="EXTERIOR_VIEW // DESTINATION_SELECTION_READY"),console.log("[SCENE 1] Blast Off pullout complete! Projecting Hologram Screen..."),ue&&ue.fadeIn(1.2)}});ze.to(t.position,{x:m.x,y:m.y,z:m.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(b),o&&o.target.copy(b)}},0),ze.to(b,{x:_.x,y:_.y,z:_.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(b),o.target.copy(b)}},0),H&&H.textMaterial&&ze.to(H.textMaterial,{opacity:0,duration:.01},1.3),Q&&Q.material&&ze.to(Q.material,{opacity:0,duration:.01},1.3),Se&&Se.group&&ze.set(Se.group,{visible:!1},1.3),xe&&ze.set(xe,{visible:!1},1.3),ze.to(r,{strength:.85,duration:1,yoyo:!0,repeat:1,ease:"sine.inOut"},1)}function ce(te="TARGET A: KOPPULA SYSTEM"){if(window.triggerDestinationTransition=ce,window.isTransitioning||Z)return;Z=!0,window.isTransitioning=!0,o.enabled=!1;const Ee=document.getElementById("toggle-orbit-btn");Ee&&(Ee.innerText="ENABLE FREE CAM");const ze=document.getElementById("cam-status");ze&&(ze.innerText=`DESTINATION_LOCKED // ${te}`),console.log(`[DESTINATION SELECTION] Initiating sequence for ${te}...`);const Ze=new E(37.67234,-9.11449,28),Te=new E(38.29568,-4.81399,28.33846),me=vn.timeline({onComplete:()=>{Z=!1,window.isTransitioning=!1,ze&&(ze.innerText="WARP_IGNITION_ACTIVE"),console.log("[DESTINATION SELECTION] Camera settled on rocket hull looking at tip. Igniting Vertical Warp!"),R&&(R.updateCubeNow(),R.startSequence())}});ue&&ue.fadeOut(1.5),x&&me.to(x,{intensity:.45,duration:1.5,ease:"power2.inOut"},0),v&&me.to(v,{intensity:.15,duration:1.5,ease:"power2.inOut"},0),M&&me.to(M,{intensity:.55,duration:1.5,ease:"power2.inOut"},0),T&&me.to(T,{intensity:.35,duration:1.5,ease:"power2.inOut"},0),C&&me.to(C,{intensity:0,duration:1.5,ease:"power2.inOut"},0),y&&me.to(y,{intensity:1.2,duration:1.5,ease:"power2.inOut"},0),xe&&me.to(xe,{intensity:.2,duration:1.5,ease:"power2.inOut"},0),ne.forEach(Bn=>{me.to(Bn,{emissiveIntensity:0,duration:1.5,ease:"power2.inOut"},0)}),me.add(()=>{Y&&Y.padRingGroup&&(Y.padRingGroup.visible=!1),W.forEach(Bn=>{Bn.visible=!1})},1.5);const wt=t.position.clone(),Tt=new E(6,6,66),Et=new E(24,-14,46),zn=Ze.clone(),gr=new vl(wt,Tt,Et,zn),gs=b.clone(),da=new E(22,-3,16),zi=new E(38,-6,26),Vd=Te.clone(),Hd=new vl(gs,da,zi,Vd),Ac={progress:0};me.to(Ac,{progress:1,duration:3.5,ease:"power2.inOut",onUpdate:()=>{const Bn=Ac.progress;gr.getPoint(Bn,t.position),Hd.getPoint(Bn,b),t.up.set(0,1,0),t.lookAt(b),o&&o.target.copy(b)}},1.5),S&&S.fadeOut&&S.fadeOut(1.3,me,4.2),me.to(e.background,{r:2/255,g:2/255,b:5/255,duration:1.3,ease:"power2.inOut"},4.2),me.add(()=>{R&&(R.spaceGroup.visible=!0)},4.2),re.starsOpacity=0,me.to(re,{starsOpacity:1,duration:1.3,ease:"power2.inOut"},4.2),G&&G.traverse(Bn=>{Bn.isMesh&&Bn.material&&(Bn.material.transparent=!0,me.to(Bn.material,{opacity:0,duration:1.3,ease:"power2.inOut"},4.2))}),me.add(()=>{G&&(G.visible=!1),Y&&Y.group&&(Y.group.visible=!1),Se&&Se.group&&(Se.group.visible=!1),H&&H.group&&(H.group.visible=!1),Q&&(Q.visible=!1),S&&S.group&&(S.group.visible=!1)},5.5),x&&me.to(x,{intensity:0,duration:1.3,ease:"power2.inOut"},4.2),M&&me.to(M,{intensity:0,duration:1.3,ease:"power2.inOut"},4.2),T&&me.to(T,{intensity:0,duration:1.3,ease:"power2.inOut"},4.2),y&&me.to(y,{intensity:0,duration:1.3,ease:"power2.inOut"},4.2),xe&&me.to(xe,{intensity:0,duration:1.3,ease:"power2.inOut"},4.2),R&&(me.to(R.spaceAmbient,{intensity:.6,duration:1.3,ease:"power2.inOut"},4.2),me.to(R.spaceSun,{intensity:1.5,duration:1.3,ease:"power2.inOut"},4.2),me.to(R.hemisphereLight,{intensity:1.2,duration:1.3,ease:"power2.inOut"},4.2)),me.to(n,{toneMappingExposure:.9,duration:1.3,ease:"power2.inOut"},4.2),r&&me.to(r,{strength:0,duration:1.3,ease:"power2.inOut"},4.2)}const we=document.getElementById("camera-inspector"),de=document.getElementById("settings-toggle-btn"),ke=document.getElementById("cam-pos-val"),De=document.getElementById("cam-target-val"),Ie=document.getElementById("cam-fov-val"),tt=document.getElementById("toggle-orbit-btn"),Ke=document.getElementById("copy-cam-btn"),P=document.getElementById("copy-toast");de==null||de.addEventListener("click",()=>{we&&we.classList.toggle("inspector-hidden")}),document.querySelectorAll(".accordion-header").forEach(te=>{te.addEventListener("click",()=>{const Ee=te.closest(".accordion-item");Ee&&Ee.classList.toggle("active")})}),tt==null||tt.addEventListener("click",()=>{o.enabled=!o.enabled;const te=document.getElementById("cam-status");o.enabled?(tt.innerText="DISABLE FREE CAM",te&&(te.innerText="FREE_ORBIT_ENABLED")):(tt.innerText="ENABLE FREE CAM",te&&(te.innerText=Z?"EXTERIOR_VIEW":"INTERIOR_VIEW"))}),Ke==null||Ke.addEventListener("click",()=>{const te=t.position.x.toFixed(2),Ee=t.position.y.toFixed(2),ze=t.position.z.toFixed(2),Ze=o.target.x.toFixed(2),Te=o.target.y.toFixed(2),me=o.target.z.toFixed(2),wt=`const INTERIOR_CAM_POS = new THREE.Vector3(${te}, ${Ee}, ${ze});
const INTERIOR_LOOK_TARGET = new THREE.Vector3(${Ze}, ${Te}, ${me});`;navigator.clipboard.writeText(wt).then(()=>{console.log(`[CAMERA INSPECTOR] Coordinates copied to clipboard:
`+wt)}).catch(()=>{}),P&&(P.style.display="block",setTimeout(()=>{P.style.display="none"},2500))});const w=document.getElementById("bloom-strength-slider"),V=document.getElementById("bloom-threshold-slider"),ae=document.getElementById("bloom-strength-val"),le=document.getElementById("bloom-threshold-val");w==null||w.addEventListener("input",()=>{const te=parseFloat(w.value);r.strength=te,ae&&(ae.innerText=te.toFixed(2))}),V==null||V.addEventListener("input",()=>{const te=parseFloat(V.value);r.threshold=te,le&&(le.innerText=te.toFixed(2))});const pe=document.getElementById("text-scale-slider"),Oe=document.getElementById("text-x-slider"),L=document.getElementById("text-y-slider"),F=document.getElementById("text-z-slider"),_e=document.getElementById("text-roty-slider"),be=document.getElementById("text-scale-val"),ye=document.getElementById("text-x-val"),Le=document.getElementById("text-y-val"),Ae=document.getElementById("text-z-val"),We=document.getElementById("text-roty-val");function Ge(){if(!H)return;const te=parseFloat(pe.value),Ee=parseFloat(Oe.value),ze=parseFloat(L.value),Ze=parseFloat(F.value),Te=parseFloat(_e.value);H.group.scale.set(te,te,te),H.group.position.set(Ee,ze,Ze),H.group.rotation.set(0,Te,0),be&&(be.innerText=te.toFixed(2)),ye&&(ye.innerText=Ee.toFixed(2)),Le&&(Le.innerText=ze.toFixed(2)),Ae&&(Ae.innerText=Ze.toFixed(2)),We&&(We.innerText=Te.toFixed(2))}pe==null||pe.addEventListener("input",Ge),Oe==null||Oe.addEventListener("input",Ge),L==null||L.addEventListener("input",Ge),F==null||F.addEventListener("input",Ge),_e==null||_e.addEventListener("input",Ge);const nt=document.getElementById("avatar-scale-slider"),O=document.getElementById("avatar-x-slider"),j=document.getElementById("avatar-y-slider"),oe=document.getElementById("avatar-z-slider"),Me=document.getElementById("avatar-rotx-slider"),Ce=document.getElementById("avatar-roty-slider"),$e=document.getElementById("avatar-rotz-slider"),St=document.getElementById("avatar-scale-val"),It=document.getElementById("avatar-x-val"),qn=document.getElementById("avatar-y-val"),at=document.getElementById("avatar-z-val"),En=document.getElementById("avatar-rotx-val"),$t=document.getElementById("avatar-roty-val"),mr=document.getElementById("avatar-rotz-val");function ni(){if(!Se||!Se.group)return;const te=parseFloat(nt.value),Ee=parseFloat(O.value),ze=parseFloat(j.value),Ze=parseFloat(oe.value),Te=parseFloat(Me.value),me=parseFloat(Ce.value),wt=parseFloat($e.value);Se.group.scale.set(te,te,te),Se.group.position.set(Ee,ze,Ze),Se.group.rotation.set(Te,me,wt),St&&(St.innerText=te.toFixed(2)),It&&(It.innerText=Ee.toFixed(2)),qn&&(qn.innerText=ze.toFixed(2)),at&&(at.innerText=Ze.toFixed(2)),En&&(En.innerText=Te.toFixed(2)),$t&&($t.innerText=me.toFixed(2)),mr&&(mr.innerText=wt.toFixed(2))}nt==null||nt.addEventListener("input",ni),O==null||O.addEventListener("input",ni),j==null||j.addEventListener("input",ni),oe==null||oe.addEventListener("input",ni),Me==null||Me.addEventListener("input",ni),Ce==null||Ce.addEventListener("input",ni),$e==null||$e.addEventListener("input",ni);const ds=document.getElementById("avatar-skin-picker");ds==null||ds.addEventListener("input",()=>{Se&&Se.setSkinColor&&Se.setSkinColor(ds.value)});const ps=document.getElementById("hologram-scale-slider"),A=document.getElementById("hologram-x-slider"),B=document.getElementById("hologram-y-slider"),K=document.getElementById("hologram-z-slider"),k=document.getElementById("hologram-rotx-slider"),J=document.getElementById("hologram-roty-slider"),Re=document.getElementById("hologram-rotz-slider"),Fe=document.getElementById("hologram-hoverbright-slider"),Ue=document.getElementById("hologram-scale-val"),Ve=document.getElementById("hologram-x-val"),Qe=document.getElementById("hologram-y-val"),qe=document.getElementById("hologram-z-val"),Ye=document.getElementById("hologram-rotx-val"),xt=document.getElementById("hologram-roty-val"),Xt=document.getElementById("hologram-rotz-val"),An=document.getElementById("hologram-hoverbright-val"),kn=document.getElementById("toggle-hologram-vis-btn");function rt(){if(!ue||!ue.group)return;const te=parseFloat(ps.value),Ee=parseFloat(A.value),ze=parseFloat(B.value),Ze=parseFloat(K.value),Te=parseFloat(k.value),me=parseFloat(J.value),wt=parseFloat(Re.value),Tt=parseFloat((Fe==null?void 0:Fe.value)||1);ue.group.scale.set(te,te,te),ue.group.position.set(Ee,ze,Ze),ue.group.rotation.set(Te,me,wt),ue.setHoverBrightness(Tt),Ue&&(Ue.innerText=te.toFixed(2)),Ve&&(Ve.innerText=Ee.toFixed(2)),Qe&&(Qe.innerText=ze.toFixed(2)),qe&&(qe.innerText=Ze.toFixed(2)),Ye&&(Ye.innerText=Te.toFixed(2)),xt&&(xt.innerText=me.toFixed(2)),Xt&&(Xt.innerText=wt.toFixed(2)),An&&(An.innerText=Tt.toFixed(2))}ps==null||ps.addEventListener("input",rt),A==null||A.addEventListener("input",rt),B==null||B.addEventListener("input",rt),K==null||K.addEventListener("input",rt),k==null||k.addEventListener("input",rt),J==null||J.addEventListener("input",rt),Re==null||Re.addEventListener("input",rt),Fe==null||Fe.addEventListener("input",rt),kn==null||kn.addEventListener("click",()=>{ue&&(ue.isVisible?ue.fadeOut(.4):ue.fadeIn(.4))}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.setSize(window.innerWidth,window.innerHeight),r.resolution.set(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});const je=new zf;function ms(){requestAnimationFrame(ms);const te=je.getDelta(),Ee=je.getElapsedTime();S&&S.group&&S.group.visible&&S.update(Ee),Se&&Se.update&&Se.update(te),ue&&ue.update&&ue.update(Ee),R&&R.update(Ee,te),!R||!R.isActive?o.enabled?o.update():t.lookAt(b):window.activeControls&&window.activeControls.update(),ke&&(ke.innerText=`${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)}`),De&&(De.innerText=`${o.target.x.toFixed(2)}, ${o.target.y.toFixed(2)}, ${o.target.z.toFixed(2)}`),Ie&&(Ie.innerText=`${t.fov.toFixed(0)}°`),i.render()}ms()}document.addEventListener("DOMContentLoaded",()=>{Cb()});
