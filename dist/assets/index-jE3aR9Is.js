(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="148",Ki={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},id=0,Ql=1,sd=2,lh=1,ch=2,ir=3,pi=0,gn=1,Kn=2,Gr=3,hi=0,_s=1,Xn=2,ec=3,tc=4,rd=5,fs=100,od=101,ad=102,nc=103,ic=104,ld=200,cd=201,ud=202,hd=203,uh=204,hh=205,fd=206,dd=207,pd=208,md=209,gd=210,_d=0,xd=1,vd=2,Va=3,yd=4,bd=5,Md=6,Sd=7,fh=0,wd=1,Td=2,Yn=0,Ed=1,Ad=2,Cd=3,dh=4,Ld=5,ph=300,ws=301,Ts=302,Ga=303,Ha=304,Fo=306,Es=1e3,Wt=1001,To=1002,wt=1003,Wa=1004,xo=1005,Ht=1006,mh=1007,ki=1008,Bi=1009,Pd=1010,Rd=1011,gh=1012,Dd=1013,Ri=1014,ai=1015,mr=1016,Id=1017,Od=1018,xs=1020,Nd=1021,Fd=1022,hn=1023,zd=1024,Ud=1025,Ii=1026,As=1027,kd=1028,Bd=1029,Vd=1030,Gd=1031,Hd=1033,qo=33776,jo=33777,Yo=33778,Ko=33779,sc=35840,rc=35841,oc=35842,ac=35843,Wd=36196,lc=37492,cc=37496,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,yc=37818,bc=37819,Mc=37820,Sc=37821,wc=36492,gr=2300,Cs=2301,Zo=2302,Tc=2400,Ec=2401,Ac=2402,Xd=2500,qd=1,_h=2,Vi=3e3,Qe=3001,jd=3200,Yd=3201,xh=0,Kd=1,$t="srgb",_r="srgb-linear",Jo=7680,Zd=519,Xa=35044,Cc="300 es",qa=1035;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const lr=Math.PI/180,xr=180/Math.PI;function _n(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[a&255]+Dt[a>>8&255]+Dt[a>>16&255]+Dt[a>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Tt(a,e,t){return Math.max(e,Math.min(t,a))}function vl(a,e){return(a%e+e)%e}function Jd(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function $d(a,e,t){return a!==e?(t-a)/(e-a):0}function cr(a,e,t){return(1-t)*a+t*e}function Qd(a,e,t,n){return cr(a,e,1-Math.exp(-t*n))}function ep(a,e=1){return e-Math.abs(vl(a,e*2)-e)}function tp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function np(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ip(a,e){return a+Math.floor(Math.random()*(e-a+1))}function sp(a,e){return a+Math.random()*(e-a)}function rp(a){return a*(.5-Math.random())}function op(a){a!==void 0&&(Lc=a);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(a){return a*lr}function lp(a){return a*xr}function ja(a){return(a&a-1)===0&&a!==0}function vh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Eo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function cp(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function it(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var up=Object.freeze({__proto__:null,DEG2RAD:lr,RAD2DEG:xr,generateUUID:_n,clamp:Tt,euclideanModulo:vl,mapLinear:Jd,inverseLerp:$d,lerp:cr,damp:Qd,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:ja,ceilPowerOfTwo:vh,floorPowerOfTwo:Eo,setQuaternionFromProperEuler:cp,normalize:it,denormalize:qn});class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(){tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],M=i[1],x=i[4],b=i[7],y=i[2],T=i[5],A=i[8];return s[0]=r*d+o*M+l*y,s[3]=r*m+o*x+l*T,s[6]=r*_+o*b+l*A,s[1]=c*d+u*M+h*y,s[4]=c*m+u*x+h*T,s[7]=c*_+u*b+h*A,s[2]=f*d+p*M+g*y,s[5]=f*m+p*x+g*T,s[8]=f*_+p*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,f=o*l-u*s,p=c*s-r*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*r)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(r*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new tn;function yh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function vr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Oi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function vo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qo={[$t]:{[_r]:Oi},[_r]:{[$t]:vo}},Ut={legacyMode:!0,get workingColorSpace(){return _r},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Qo[e]&&Qo[e][t]!==void 0){const n=Qo[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xt={r:0,g:0,b:0},vn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ea(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Wr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ut.workingColorSpace){if(e=vl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ea(r,s,e+1/3),this.g=ea(r,s,e),this.b=ea(r,s,e-1/3)}return Ut.toWorkingColorSpace(this,i),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$t){const n=bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ut.fromWorkingColorSpace(Wr(this,xt),e),Tt(xt.r*255,0,255)<<16^Tt(xt.g*255,0,255)<<8^Tt(xt.b*255,0,255)<<0}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Wr(this,xt),t);const n=xt.r,i=xt.g,s=xt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Wr(this,xt),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=$t){return Ut.fromWorkingColorSpace(Wr(this,xt),e),e!==$t?`color(${e} ${xt.r} ${xt.g} ${xt.b})`:`rgb(${xt.r*255|0},${xt.g*255|0},${xt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=n,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Hr);const n=cr(vn.h,Hr.h,t),i=cr(vn.s,Hr.s,t),s=cr(vn.l,Hr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}De.NAMES=bh;let Ji;class Mh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=vr("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Oi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Sh{constructor(e=null){this.isSource=!0,this.uuid=_n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ta(i[r].image)):s.push(ta(i[r]))}else s=ta(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ta(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Mh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class Et extends Xi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Wt,i=Wt,s=Ht,r=ki,o=hn,l=Bi,c=Et.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=_n(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=ph;Et.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,y=(_+1)/2,T=(u+f)/4,A=(h+d)/4,v=(g+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=A/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=v/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mn extends Xi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[r+0],p=s[r+1],g=s[r+2],d=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-o;const _=l*f+c*p+u*g+h*d,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),T=Math.atan2(y,_*M);m=Math.sin(m*T)/y,o=Math.sin(o*T)/y}const b=o*M;if(l=l*m+f*b,c=c*m+p*b,u=u*m+g*b,h=h*m+d*b,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],f=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+u*-o-h*-r,this.y=u*l+f*-r+h*-s-c*-o,this.z=h*l+f*-o+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new P,Pc=new Ln;class ks{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>r&&(r=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Mi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox),ia.applyMatrix4(e.matrixWorld),this.union(ia);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Xr.subVectors(this.max,Xs),$i.subVectors(e.a,Xs),Qi.subVectors(e.b,Xs),es.subVectors(e.c,Xs),Qn.subVectors(Qi,$i),ei.subVectors(es,Qi),Si.subVectors($i,es);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Si.z,Si.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!sa(t,$i,Qi,es,Xr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,$i,Qi,es,Xr))?!1:(qr.crossVectors(Qn,ei),t=[qr.x,qr.y,qr.z],sa(t,$i,Qi,es,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],Mi=new P,ia=new ks,$i=new P,Qi=new P,es=new P,Qn=new P,ei=new P,Si=new P,Xs=new P,Xr=new P,qr=new P,wi=new P;function sa(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){wi.fromArray(a,s);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dp=new ks,qs=new P,ra=new P;class Bs{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(ra)),this.expandByPoint(qs.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new P,oa=new P,jr=new P,ti=new P,aa=new P,Yr=new P,la=new P;class zo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oa.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(oa);const s=e.distanceTo(t)*.5,r=-this.direction.dot(jr),o=ti.dot(this.direction),l=-ti.dot(jr),c=ti.lengthSq(),u=Math.abs(1-r*r);let h,f,p,g;if(u>0)if(h=r*l-o,f=r*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(jr).multiplyScalar(f).add(oa),p}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,s){aa.subVectors(t,e),Yr.subVectors(n,e),la.crossVectors(aa,Yr);let r=this.direction.dot(la),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(ti,Yr));if(l<0)return null;const c=o*this.direction.dot(aa.cross(ti));if(c<0||l+c>r)return null;const u=-o*ti.dot(la);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),r=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,p=r*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=p*o-g,t[6]=d+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-r*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*u,t[9]=d-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*u,p=r*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=r*l,p=r*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=r*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ni.crossVectors(n,Zt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ni.crossVectors(n,Zt)),ni.normalize(),Kr.crossVectors(Zt,ni),i[0]=ni.x,i[4]=Kr.x,i[8]=Zt.x,i[1]=ni.y,i[5]=Kr.y,i[9]=Zt.y,i[2]=ni.z,i[6]=Kr.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],M=n[3],x=n[7],b=n[11],y=n[15],T=i[0],A=i[4],v=i[8],S=i[12],R=i[1],N=i[5],j=i[9],I=i[13],D=i[2],z=i[6],H=i[10],q=i[14],k=i[3],ne=i[7],W=i[11],V=i[15];return s[0]=r*T+o*R+l*D+c*k,s[4]=r*A+o*N+l*z+c*ne,s[8]=r*v+o*j+l*H+c*W,s[12]=r*S+o*I+l*q+c*V,s[1]=u*T+h*R+f*D+p*k,s[5]=u*A+h*N+f*z+p*ne,s[9]=u*v+h*j+f*H+p*W,s[13]=u*S+h*I+f*q+p*V,s[2]=g*T+d*R+m*D+_*k,s[6]=g*A+d*N+m*z+_*ne,s[10]=g*v+d*j+m*H+_*W,s[14]=g*S+d*I+m*q+_*V,s[3]=M*T+x*R+b*D+y*k,s[7]=M*A+x*N+b*z+y*ne,s[11]=M*v+x*j+b*H+y*W,s[15]=M*S+x*I+b*q+y*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+d*(+t*l*p-t*c*f+s*r*f-i*r*p+i*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*r*h+n*r*p+s*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*r*h-n*r*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],M=h*m*c-d*f*c+d*l*p-o*m*p-h*l*_+o*f*_,x=g*f*c-u*m*c-g*l*p+r*m*p+u*l*_-r*f*_,b=u*d*c-g*h*c+g*o*p-r*d*p-u*o*_+r*h*_,y=g*h*l-u*d*l-g*o*f+r*d*f+u*o*m-r*h*m,T=t*M+n*x+i*b+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=M*A,e[1]=(d*f*s-h*m*s-d*i*p+n*m*p+h*i*_-n*f*_)*A,e[2]=(o*m*s-d*l*s+d*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*i*p-t*m*p-u*i*_+t*f*_)*A,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*_-t*l*_)*A,e[7]=(r*f*s-u*l*s+u*i*c-t*f*c-r*i*p+t*l*p)*A,e[8]=b*A,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*A,e[10]=(r*d*s-g*o*s+g*n*c-t*d*c-r*n*_+t*o*_)*A,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*p-t*o*p)*A,e[12]=y*A,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-r*d*i-g*n*l+t*d*l+r*n*m-t*o*m)*A,e[15]=(r*h*i-u*o*i+u*n*l-t*h*l-r*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,f=s*c,p=s*u,g=s*h,d=r*u,m=r*h,_=o*h,M=l*c,x=l*u,b=l*h,y=n.x,T=n.y,A=n.z;return i[0]=(1-(d+_))*y,i[1]=(p+b)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(p-b)*T,i[5]=(1-(f+_))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+x)*A,i[9]=(m-M)*A,i[10]=(1-(f+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ts.set(i[0],i[1],i[2]).length();const r=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/s,u=1/r,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(r-s),h=(t+e)*l,f=(n+i)*c,p=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new P,yn=new He,pp=new P(0,0,0),mp=new P(1,1,1),ni=new P,Kr=new P,Zt=new P,Rc=new He,Dc=new Ln;class Ir{constructor(e=0,t=0,n=0,i=Ir.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ir.DefaultOrder="XYZ";Ir.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gp=0;const Ic=new P,ns=new Ln,zn=new He,Zr=new P,js=new P,_p=new P,xp=new Ln,Oc=new P(1,0,0),Nc=new P(0,1,0),Fc=new P(0,0,1),vp={type:"added"},zc={type:"removed"};class ot extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new P,t=new Ir,n=new Ln,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new tn}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(js,Zr,this.up):zn.lookAt(Zr,js,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(zn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DefaultUp=new P(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const bn=new P,Un=new P,ca=new P,kn=new P,is=new P,ss=new P,Uc=new P,ua=new P,ha=new P,fa=new P;class Hn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),Un.subVectors(n,t),ca.subVectors(e,t);const r=bn.dot(bn),o=bn.dot(Un),l=bn.dot(ca),c=Un.dot(Un),u=Un.dot(ca),h=r*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(r*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,kn),l.set(0,0),l.addScaledVector(s,kn.x),l.addScaledVector(r,kn.y),l.addScaledVector(o,kn.z),l}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Un.subVectors(e,t),bn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),bn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Hn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;is.subVectors(i,n),ss.subVectors(s,n),ua.subVectors(e,n);const l=is.dot(ua),c=ss.dot(ua);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,i);const u=is.dot(ha),h=ss.dot(ha);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(is,r);fa.subVectors(e,s);const p=is.dot(fa),g=ss.dot(fa);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ss,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Uc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Uc,o);const _=1/(m+d+f);return r=d*_,o=f*_,t.copy(n).addScaledVector(is,r).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yp=0;class An extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=_s,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new P,Jr=new se;class ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Th extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eh extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bp=0;const an=new He,da=new ot,rs=new P,Jt=new ks,Ys=new ks,St=new P;class Rt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Eh:Th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Jt.min,Ys.min),Jt.expandByPoint(St),St.addVectors(Jt.max,Ys.max),Jt.expandByPoint(St)):(Jt.expandByPoint(Ys.min),Jt.expandByPoint(Ys.max))}Jt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),St.add(rs)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new P,u[R]=new P;const h=new P,f=new P,p=new P,g=new se,d=new se,m=new se,_=new P,M=new P;function x(R,N,j){h.fromArray(i,R*3),f.fromArray(i,N*3),p.fromArray(i,j*3),g.fromArray(r,R*2),d.fromArray(r,N*2),m.fromArray(r,j*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(I),M.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(I),c[R].add(_),c[N].add(_),c[j].add(_),u[R].add(M),u[N].add(M),u[j].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,N=b.length;R<N;++R){const j=b[R],I=j.start,D=j.count;for(let z=I,H=I+D;z<H;z+=3)x(n[z+0],n[z+1],n[z+2])}const y=new P,T=new P,A=new P,v=new P;function S(R){A.fromArray(s,R*3),v.copy(A);const N=c[R];y.copy(N),y.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(v,N);const I=T.dot(u[R])<0?-1:1;l[R*4]=y.x,l[R*4+1]=y.y,l[R*4+2]=y.z,l[R*4+3]=I}for(let R=0,N=b.length;R<N;++R){const j=b[R],I=j.start,D=j.count;for(let z=I,H=I+D;z<H;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,r=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new He,os=new zo,pa=new Bs,Ks=new P,Zs=new P,Js=new P,ma=new P,$r=new P,Qr=new se,eo=new se,to=new se,ga=new P,no=new P;class yt extends ot{constructor(e=new Rt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ma.fromBufferAttribute(h,e),r?$r.addScaledVector(ma,u):$r.addScaledVector(ma.sub(t),u))}t.add($r)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),e.ray.intersectsSphere(pa)===!1)||(kc.copy(s).invert(),os.copy(e.ray).applyMatrix4(kc),n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,b=M;x<b;x+=3){const y=o.getX(x),T=o.getX(x+1),A=o.getX(x+2);r=io(this,m,e,os,c,u,y,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=o.getX(d),M=o.getX(d+1),x=o.getX(d+2);r=io(this,i,e,os,c,u,_,M,x),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,b=M;x<b;x+=3){const y=x,T=x+1,A=x+2;r=io(this,m,e,os,c,u,y,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,M=d+1,x=d+2;r=io(this,i,e,os,c,u,_,M,x),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Mp(a,e,t,n,i,s,r,o){let l;if(e.side===gn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===pi,o),l===null)return null;no.copy(o),no.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:a}}function io(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,Ks),a.getVertexPosition(o,Zs),a.getVertexPosition(l,Js);const c=Mp(a,e,t,n,Ks,Zs,Js,ga);if(c){i&&(Qr.fromBufferAttribute(i,r),eo.fromBufferAttribute(i,o),to.fromBufferAttribute(i,l),c.uv=Hn.getUV(ga,Ks,Zs,Js,Qr,eo,to,new se)),s&&(Qr.fromBufferAttribute(s,r),eo.fromBufferAttribute(s,o),to.fromBufferAttribute(s,l),c.uv2=Hn.getUV(ga,Ks,Zs,Js,Qr,eo,to,new se));const u={a:r,b:o,c:l,normal:new P,materialIndex:0};Hn.getNormal(Ks,Zs,Js,u.normal),c.face=u}return c}class Or extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function g(d,m,_,M,x,b,y,T,A,v,S){const R=b/A,N=y/v,j=b/2,I=y/2,D=T/2,z=A+1,H=v+1;let q=0,k=0;const ne=new P;for(let W=0;W<H;W++){const V=W*N-I;for(let G=0;G<z;G++){const te=G*R-j;ne[d]=te*M,ne[m]=V*x,ne[_]=D,c.push(ne.x,ne.y,ne.z),ne[d]=0,ne[m]=0,ne[_]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(G/A),h.push(1-W/v),q+=1}}for(let W=0;W<v;W++)for(let V=0;V<A;V++){const G=f+V+z*W,te=f+V+z*(W+1),ie=f+(V+1)+z*(W+1),ue=f+(V+1)+z*W;l.push(G,te,ue),l.push(te,ie,ue),k+=6}o.addGroup(p,k,S),p+=k,f+=q}}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(a){const e={};for(let t=0;t<a.length;t++){const n=Ls(a[t]);for(const i in n)e[i]=n[i]}return e}function Sp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ah(a){return a.getRenderTarget()===null&&a.outputEncoding===Qe?$t:_r}const Ao={clone:Ls,merge:Bt};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ch extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class Ep extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Vt(as,ls,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Vt(as,ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Vt(as,ls,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Vt(as,ls,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Vt(as,ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Vt(as,ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Lh extends Et{constructor(e,t,n,i,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ap extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Or(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hi});s.uniforms.tEquirect.value=t;const r=new yt(i,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Ht),new Ep(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const _a=new P,Cp=new P,Lp=new tn;class Ai{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_a.subVectors(n,t).cross(Cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),i=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Bs,so=new P;class bl{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,r=new Ai){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-m).normalize(),t[1].setComponents(o+i,h+l,d+f,x+m).normalize(),t[2].setComponents(o+s,h+c,d+p,x+_).normalize(),t[3].setComponents(o-s,h-c,d-p,x-_).normalize(),t[4].setComponents(o-r,h-u,d-g,x-M).normalize(),t[5].setComponents(o+r,h+u,d+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Pp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;a.bindBuffer(h,c),p.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:o,update:l}}class Vs extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const M=_*f-r;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-M,0),d.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const x=M+c*_,b=M+c*(_+1),y=M+1+c*(_+1),T=M+1+c*_;p.push(x,b,T),p.push(b,y,T)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(m,2))}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp="vec3 transformed = vec3( position );",Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zp=`#define PI 3.141592653589793
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
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,ym=`#if defined( USE_ENVMAP )
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Em=`struct PhysicalMaterial {
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
}`,Am=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Xm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ng=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,jg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:Rp,alphamap_pars_fragment:Dp,alphatest_fragment:Ip,alphatest_pars_fragment:Op,aomap_fragment:Np,aomap_pars_fragment:Fp,begin_vertex:zp,beginnormal_vertex:Up,bsdfs:kp,iridescence_fragment:Bp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:jp,color_pars_vertex:Yp,color_vertex:Kp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Qp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,encodings_fragment:im,encodings_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:ym,envmap_vertex:cm,fog_vertex:um,fog_pars_vertex:hm,fog_fragment:fm,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:vm,lights_toon_fragment:bm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Em,lights_fragment_begin:Am,lights_fragment_maps:Cm,lights_fragment_end:Lm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Im,map_fragment:Om,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:zm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:km,morphcolor_vertex:Bm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Gm,morphtarget_vertex:Hm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:jm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Qm,output_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:ug,shadowmask_pars_fragment:hg,skinbase_vertex:fg,skinning_pars_vertex:dg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:yg,transmission_pars_fragment:bg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:wg,uv2_pars_fragment:Tg,uv2_pars_vertex:Eg,uv2_vertex:Ag,worldpos_vertex:Cg,background_vert:Lg,background_frag:Pg,backgroundCube_vert:Rg,backgroundCube_frag:Dg,cube_vert:Ig,cube_frag:Og,depth_vert:Ng,depth_frag:Fg,distanceRGBA_vert:zg,distanceRGBA_frag:Ug,equirect_vert:kg,equirect_frag:Bg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Hg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:jg,meshmatcap_frag:Yg,meshnormal_vert:Kg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Qg,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tn},uv2Transform:{value:new tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}}},wn={basic:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Bt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Bt([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};wn.physical={uniforms:Bt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ro={r:0,b:0,g:0};function c_(a,e,t,n,i,s,r){const o=new De(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=a.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),M=!0),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Fo)?(u===void 0&&(u=new yt(new Or(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Ls(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Qe,(h!==x||f!==x.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new yt(new Vs(2,2),new Pt({name:"BackgroundMaterial",uniforms:Ls(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(ro,Ah(a)),n.buffers.color.setClear(ro.r,ro.g,ro.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(o,l)},render:g}}function u_(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(D,z,H,q,k){let ne=!1;if(r){const W=d(q,H,z);c!==W&&(c=W,p(c.object)),ne=_(D,q,H,k),ne&&M(D,q,H,k)}else{const W=z.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==W)&&(c.geometry=q.id,c.program=H.id,c.wireframe=W,ne=!0)}k!==null&&t.update(k,34963),(ne||u)&&(u=!1,v(D,z,H,q),k!==null&&a.bindBuffer(34963,t.get(k).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?a.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function d(D,z,H){const q=H.wireframe===!0;let k=o[D.id];k===void 0&&(k={},o[D.id]=k);let ne=k[z.id];ne===void 0&&(ne={},k[z.id]=ne);let W=ne[q];return W===void 0&&(W=m(f()),ne[q]=W),W}function m(D){const z=[],H=[],q=[];for(let k=0;k<i;k++)z[k]=0,H[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:q,object:D,attributes:{},index:null}}function _(D,z,H,q){const k=c.attributes,ne=z.attributes;let W=0;const V=H.getAttributes();for(const G in V)if(V[G].location>=0){const ie=k[G];let ue=ne[G];if(ue===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;W++}return c.attributesNum!==W||c.index!==q}function M(D,z,H,q){const k={},ne=z.attributes;let W=0;const V=H.getAttributes();for(const G in V)if(V[G].location>=0){let ie=ne[G];ie===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),k[G]=ue,W++}c.attributes=k,c.attributesNum=W,c.index=q}function x(){const D=c.newAttributes;for(let z=0,H=D.length;z<H;z++)D[z]=0}function b(D){y(D,0)}function y(D,z){const H=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;H[D]=1,q[D]===0&&(a.enableVertexAttribArray(D),q[D]=1),k[D]!==z&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),k[D]=z)}function T(){const D=c.newAttributes,z=c.enabledAttributes;for(let H=0,q=z.length;H<q;H++)z[H]!==D[H]&&(a.disableVertexAttribArray(H),z[H]=0)}function A(D,z,H,q,k,ne){n.isWebGL2===!0&&(H===5124||H===5125)?a.vertexAttribIPointer(D,z,H,k,ne):a.vertexAttribPointer(D,z,H,q,k,ne)}function v(D,z,H,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=q.attributes,ne=H.getAttributes(),W=z.defaultAttributeValues;for(const V in ne){const G=ne[V];if(G.location>=0){let te=k[V];if(te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const ie=te.normalized,ue=te.itemSize,Z=t.get(te);if(Z===void 0)continue;const Oe=Z.buffer,ye=Z.type,Re=Z.bytesPerElement;if(te.isInterleavedBufferAttribute){const de=te.data,ze=de.stride,ee=te.offset;if(de.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)y(G.location+Q,de.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Q=0;Q<G.locationSize;Q++)b(G.location+Q);a.bindBuffer(34962,Oe);for(let Q=0;Q<G.locationSize;Q++)A(G.location+Q,ue/G.locationSize,ye,ie,ze*Re,(ee+ue/G.locationSize*Q)*Re)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)y(G.location+de,te.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<G.locationSize;de++)b(G.location+de);a.bindBuffer(34962,Oe);for(let de=0;de<G.locationSize;de++)A(G.location+de,ue/G.locationSize,ye,ie,ue*Re,ue/G.locationSize*de*Re)}}else if(W!==void 0){const ie=W[V];if(ie!==void 0)switch(ie.length){case 2:a.vertexAttrib2fv(G.location,ie);break;case 3:a.vertexAttrib3fv(G.location,ie);break;case 4:a.vertexAttrib4fv(G.location,ie);break;default:a.vertexAttrib1fv(G.location,ie)}}}}T()}function S(){j();for(const D in o){const z=o[D];for(const H in z){const q=z[H];for(const k in q)g(q[k].object),delete q[k];delete z[H]}delete o[D]}}function R(D){if(o[D.id]===void 0)return;const z=o[D.id];for(const H in z){const q=z[H];for(const k in q)g(q[k].object),delete q[k];delete z[H]}delete o[D.id]}function N(D){for(const z in o){const H=o[z];if(H[D.id]===void 0)continue;const q=H[D.id];for(const k in q)g(q[k].object),delete q[k];delete H[D.id]}}function j(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function h_(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=o,this.renderInstances=l}function f_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),x=f>0,b=r||e.has("OES_texture_float"),y=x&&b,T=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:T}}function d_(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ai,o=new tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let b=_.clippingState||null;l.value=b,b=u(g,f,x,p);for(let y=0;y!==x;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,b=p;x!==d;++x,b+=4)r.copy(h[x]).applyMatrix4(M,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function p_(a){let e=new WeakMap;function t(r,o){return o===Ga?r.mapping=ws:o===Ha&&(r.mapping=Ts),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Ga||o===Ha)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ap(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uo extends Ch{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,Bc=[.125,.215,.35,.446,.526,.582],Pi=20,xa=new Uo,Vc=new De;let va=null;const Ci=(1+Math.sqrt(5))/2,us=1/Ci,Gc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Ci,us),new P(0,Ci,-us),new P(us,0,Ci),new P(-us,0,Ci),new P(Ci,us,0),new P(-Ci,us,0)];class Hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){va=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va),e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:mr,format:hn,encoding:Vi,depthBuffer:!1},i=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(s)),this._blurMaterial=g_(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,i){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Vc),u.toneMapping=Yn,u.autoClear=!1;const p=new En({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new yt(new Or,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Vc),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;oo(i,M*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new yt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Gc[(i-1)%Gc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const _=[];let M=0;for(let A=0;A<Pi;++A){const v=A/d,S=Math.exp(-v*v/2);_.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-ds?i-x+ds:0),T=4*(this._cubeSize-b);oo(t,y,T,3*b,2*b),l.setRenderTarget(t),l.render(h,xa)}}function m_(a){const e=[],t=[],n=[];let i=a;const s=a-ds+1+Bc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-ds?l=Bc[r-a+ds-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,M=new Float32Array(d*g*p),x=new Float32Array(m*g*p),b=new Float32Array(_*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,v=T>2?0:-1,S=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];M.set(S,d*g*T),x.set(f,m*g*T);const R=[T,T,T,T,T,T];b.set(R,_*g*T)}const y=new Rt;y.setAttribute("position",new ct(M,d)),y.setAttribute("uv",new ct(x,m)),y.setAttribute("faceIndex",new ct(b,_)),e.push(y),i>ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(a,e,t){const n=new Mn(a,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function g_(a,e,t){const n=new Float32Array(Pi),i=new P(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Xc(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function qc(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function __(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ga||l===Ha,u=l===ws||l===Ts;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Hc(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Hc(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function x_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function v_(a,e,t,n){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const M=p.array;d=p.version;for(let x=0,b=M.length;x<b;x+=3){const y=M[x+0],T=M[x+1],A=M[x+2];f.push(y,T,T,A,A,y)}}else{const M=g.array;d=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const y=x+0,T=x+1,A=x+2;f.push(y,T,T,A,A,y)}}const m=new(yh(f)?Eh:Th)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function y_(a,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){a.drawElements(s,p,o,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=a,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,o,f*l,g),t.update(p,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function b_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function M_(a,e){return a[0]-e[0]}function S_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function w_(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let H=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let R=0;b===!0&&(R=1),y===!0&&(R=2),T===!0&&(R=3);let N=u.attributes.position.count*R,j=1;N>e.maxTextureSize&&(j=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*j*4*m),D=new wh(I,N,j,m);D.type=ai,D.needsUpdate=!0;const z=R*4;for(let q=0;q<m;q++){const k=A[q],ne=v[q],W=S[q],V=N*j*4*q;for(let G=0;G<k.count;G++){const te=G*z;b===!0&&(r.fromBufferAttribute(k,G),I[V+te+0]=r.x,I[V+te+1]=r.y,I[V+te+2]=r.z,I[V+te+3]=0),y===!0&&(r.fromBufferAttribute(ne,G),I[V+te+4]=r.x,I[V+te+5]=r.y,I[V+te+6]=r.z,I[V+te+7]=0),T===!0&&(r.fromBufferAttribute(W,G),I[V+te+8]=r.x,I[V+te+9]=r.y,I[V+te+10]=r.z,I[V+te+11]=W.itemSize===4?r.w:1)}}_={count:m,texture:D,size:new se(N,j)},s.set(u,_),u.addEventListener("dispose",H)}let M=0;for(let b=0;b<p.length;b++)M+=p[b];const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",p),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let y=0;y<d;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<d;y++){const T=m[y];T[0]=y,T[1]=p[y]}m.sort(S_);for(let y=0;y<8;y++)y<d&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(M_);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const T=o[y],A=T[0],v=T[1];A!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),M&&u.getAttribute("morphNormal"+y)!==M[A]&&u.setAttribute("morphNormal"+y,M[A]),i[y]=v,x+=v):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),M&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const b=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function T_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Rh=new Et,Dh=new wh,Ih=new fp,Oh=new Lh,jc=[],Yc=[],Kc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Gs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=jc[i];if(s===void 0&&(s=new Float32Array(i),jc[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function bt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Mt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ko(a,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function E_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function A_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2fv(this.addr,e),Mt(t,e)}}function C_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;a.uniform3fv(this.addr,e),Mt(t,e)}}function L_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4fv(this.addr,e),Mt(t,e)}}function P_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Jc.set(n),a.uniformMatrix2fv(this.addr,!1,Jc),Mt(t,n)}}function R_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Zc.set(n),a.uniformMatrix3fv(this.addr,!1,Zc),Mt(t,n)}}function D_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Kc.set(n),a.uniformMatrix4fv(this.addr,!1,Kc),Mt(t,n)}}function I_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function O_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2iv(this.addr,e),Mt(t,e)}}function N_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3iv(this.addr,e),Mt(t,e)}}function F_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4iv(this.addr,e),Mt(t,e)}}function z_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function U_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2uiv(this.addr,e),Mt(t,e)}}function k_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3uiv(this.addr,e),Mt(t,e)}}function B_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4uiv(this.addr,e),Mt(t,e)}}function V_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Rh,i)}function G_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ih,i)}function H_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function W_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dh,i)}function X_(a){switch(a){case 5126:return E_;case 35664:return A_;case 35665:return C_;case 35666:return L_;case 35674:return P_;case 35675:return R_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return O_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return z_;case 36294:return U_;case 36295:return k_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(a,e){a.uniform1fv(this.addr,e)}function j_(a,e){const t=Gs(e,this.size,2);a.uniform2fv(this.addr,t)}function Y_(a,e){const t=Gs(e,this.size,3);a.uniform3fv(this.addr,t)}function K_(a,e){const t=Gs(e,this.size,4);a.uniform4fv(this.addr,t)}function Z_(a,e){const t=Gs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function J_(a,e){const t=Gs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function $_(a,e){const t=Gs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Q_(a,e){a.uniform1iv(this.addr,e)}function e0(a,e){a.uniform2iv(this.addr,e)}function t0(a,e){a.uniform3iv(this.addr,e)}function n0(a,e){a.uniform4iv(this.addr,e)}function i0(a,e){a.uniform1uiv(this.addr,e)}function s0(a,e){a.uniform2uiv(this.addr,e)}function r0(a,e){a.uniform3uiv(this.addr,e)}function o0(a,e){a.uniform4uiv(this.addr,e)}function a0(a,e,t){const n=this.cache,i=e.length,s=ko(t,i);bt(n,s)||(a.uniform1iv(this.addr,s),Mt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Rh,s[r])}function l0(a,e,t){const n=this.cache,i=e.length,s=ko(t,i);bt(n,s)||(a.uniform1iv(this.addr,s),Mt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ih,s[r])}function c0(a,e,t){const n=this.cache,i=e.length,s=ko(t,i);bt(n,s)||(a.uniform1iv(this.addr,s),Mt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Oh,s[r])}function u0(a,e,t){const n=this.cache,i=e.length,s=ko(t,i);bt(n,s)||(a.uniform1iv(this.addr,s),Mt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Dh,s[r])}function h0(a){switch(a){case 5126:return q_;case 35664:return j_;case 35665:return Y_;case 35666:return K_;case 35674:return Z_;case 35675:return J_;case 35676:return $_;case 5124:case 35670:return Q_;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=X_(t.type)}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=h0(t.type)}}class p0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function $c(a,e){a.seq.push(e),a.map[e.id]=e}function m0(a,e,t){const n=a.name,i=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),r=ya.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){$c(t,c===void 0?new f0(o,a,e):new d0(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new p0(o),$c(t,h)),t=h}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);m0(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Qc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let g0=0;function _0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function x0(a){switch(a){case Vi:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function eu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+_0(a.getShaderSource(e),r)}else return i}function v0(a,e){const t=x0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function y0(a,e){let t;switch(e){case Ed:t="Linear";break;case Ad:t="Reinhard";break;case Cd:t="OptimizedCineon";break;case dh:t="ACESFilmic";break;case Ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b0(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function M0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function sr(a){return a!==""}function tu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(a){return a.replace(w0,T0)}function T0(a,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ya(t)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(a){return a.replace(E0,A0)}function A0(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function su(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function D0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I0(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=C0(t),c=L0(t),u=P0(t),h=R0(t),f=D0(t),p=t.isWebGL2?"":b0(t),g=M0(s),d=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(sr).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(sr).join(`
`),_.length>0&&(_+=`
`)):(m=[su(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),_=[p,su(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,v0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),r=Ya(r),r=tu(r,t),r=nu(r,t),o=Ya(o),o=tu(o,t),o=nu(o,t),r=iu(r),o=iu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+m+r,b=M+_+o,y=Qc(i,35633,x),T=Qc(i,35632,b);if(i.attachShader(d,y),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const S=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(y).trim(),N=i.getShaderInfoLog(T).trim();let j=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){j=!1;const D=eu(i,y,"vertex"),z=eu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+S+`
`+D+`
`+z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(y),i.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new yo(i,d)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=S0(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=T,this}let O0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F0(e),t.set(e,n)),n}}class F0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function z0(a,e,t,n,i,s,r){const o=new yl,l=new N0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,S,R,N,j){const I=N.fog,D=j.geometry,z=v.isMeshStandardMaterial?N.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),q=H&&H.mapping===Fo?H.image.height:null,k=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=ne!==void 0?ne.length:0;let V=0;D.morphAttributes.position!==void 0&&(V=1),D.morphAttributes.normal!==void 0&&(V=2),D.morphAttributes.color!==void 0&&(V=3);let G,te,ie,ue;if(k){const ze=wn[k];G=ze.vertexShader,te=ze.fragmentShader}else G=v.vertexShader,te=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),ue=l.getFragmentShaderID(v);const Z=a.getRenderTarget(),Oe=v.alphaTest>0,ye=v.clearcoat>0,Re=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:G,fragmentShader:te,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?a.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Vi,map:!!v.map,matcap:!!v.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Kd,tangentSpaceNormalMap:v.normalMapType===xh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Qe,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!v.iridescenceMap,iridescenceThicknessMap:Re&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===_s,alphaMap:!!v.alphaMap,alphaTest:Oe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:V,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Yn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kn,flipSided:v.side===gn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)S.push(R),S.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(S,v),M(S,v),S.push(a.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),v.push(o.mask)}function x(v){const S=g[v.type];let R;if(S){const N=wn[S];R=Ao.clone(N.uniforms)}else R=v.uniforms;return R}function b(v,S){let R;for(let N=0,j=c.length;N<j;N++){const I=c[N];if(I.cacheKey===S){R=I,++R.usedTimes;break}}return R===void 0&&(R=new I0(a,S,v,s),c.push(R)),R}function y(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:A}}function U0(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function k0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ru(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ou(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,p,g,d,m){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function o(h,f,p,g,d,m){const _=r(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=r(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||k0),n.length>1&&n.sort(f||ru),i.length>1&&i.sort(f||ru)}function u(){for(let h=e,f=a.length;h<f;h++){const p=a[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function B0(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new ou,a.set(n,[r])):i>=s.length?(r=new ou,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function V0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function G0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let H0=0;function W0(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function X0(a,e){const t=new V0,n=G0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,r=new He,o=new He;function l(u,h){let f=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,m=0,_=0,M=0,x=0,b=0,y=0,T=0,A=0,v=0;u.sort(W0);const S=h!==!0?Math.PI:1;for(let N=0,j=u.length;N<j;N++){const I=u[N],D=I.color,z=I.intensity,H=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=D.r*z*S,p+=D.g*z*S,g+=D.b*z*S;else if(I.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],z);else if(I.isDirectionalLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const ne=I.shadow,W=n.get(I);W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=I.shadow.matrix,b++}i.directional[d]=k,d++}else if(I.isSpotLight){const k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(D).multiplyScalar(z*S),k.distance=H,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[_]=k;const ne=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,ne.updateMatrices(I),I.castShadow&&v++),i.spotLightMatrix[_]=ne.matrix,I.castShadow){const W=n.get(I);W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=q,T++}_++}else if(I.isRectAreaLight){const k=t.get(I);k.color.copy(D).multiplyScalar(z),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=k,M++}else if(I.isPointLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*S),k.distance=I.distance,k.decay=I.decay,I.castShadow){const ne=I.shadow,W=n.get(I);W.shadowBias=ne.bias,W.shadowNormalBias=ne.normalBias,W.shadowRadius=ne.radius,W.shadowMapSize=ne.mapSize,W.shadowCameraNear=ne.camera.near,W.shadowCameraFar=ne.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=k,m++}else if(I.isHemisphereLight){const k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(z*S),k.groundColor.copy(I.groundColor).multiplyScalar(z*S),i.hemi[x]=k,x++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==x||R.numDirectionalShadows!==b||R.numPointShadows!==y||R.numSpotShadows!==T||R.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+A-v,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=v,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=x,R.numDirectionalShadows=b,R.numPointShadows=y,R.numSpotShadows=T,R.numSpotMaps=A,i.version=H0++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const b=u[M];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),f++}else if(b.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),d++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function au(a,e){const t=new X0(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function q0(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new au(a,e),t.set(s,[l])):r>=o.length?(l=new au(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class j0 extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function J0(a,e,t){let n=new bl;const i=new se,s=new se,r=new rt,o=new j0({depthPacking:Yd}),l=new Y0,c={},u=t.maxTextureSize,h={0:gn,1:pi,2:Kn},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh,this.render=function(b,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=a.getRenderTarget(),v=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),R=a.state;R.setBlending(hi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let N=0,j=b.length;N<j;N++){const I=b[N],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/z.x),i.x=s.x*z.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/z.y),i.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null){const q=this.type!==ir?{minFilter:wt,magFilter:wt}:{};D.map=new Mn(i.x,i.y,q),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const H=D.getViewportCount();for(let q=0;q<H;q++){const k=D.getViewport(q);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),R.viewport(r),D.updateMatrices(I,q),n=D.getFrustum(),x(y,T,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===ir&&_(D,T),D.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,v,S)};function _(b,y){const T=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(y,null,T,f,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(y,null,T,p,d,null)}function M(b,y,T,A,v,S){let R=null;const N=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=T.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const j=R.uuid,I=y.uuid;let D=c[j];D===void 0&&(D={},c[j]=D);let z=D[I];z===void 0&&(z=R.clone(),D[I]=z),R=z}return R.visible=y.visible,R.wireframe=y.wireframe,S===ir?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:h[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=A,R.farDistance=v),R}function x(b,y,T,A,v){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ir)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const N=e.update(b),j=b.material;if(Array.isArray(j)){const I=N.groups;for(let D=0,z=I.length;D<z;D++){const H=I[D],q=j[H.materialIndex];if(q&&q.visible){const k=M(b,q,A,T.near,T.far,v);a.renderBufferDirect(T,null,N,k,b,H)}}}else if(j.visible){const I=M(b,j,A,T.near,T.far,v);a.renderBufferDirect(T,null,N,I,b,null)}}const R=b.children;for(let N=0,j=R.length;N<j;N++)x(R[N],y,T,A,v)}}function $0(a,e,t){const n=t.isWebGL2;function i(){let O=!1;const Y=new rt;let oe=null;const ve=new rt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!O&&(a.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){O=Me},setClear:function(Me,qe,at,pt,on){on===!0&&(Me*=pt,qe*=pt,at*=pt),Y.set(Me,qe,at,pt),ve.equals(Y)===!1&&(a.clearColor(Me,qe,at,pt),ve.copy(Y))},reset:function(){O=!1,oe=null,ve.set(-1,0,0,0)}}}function s(){let O=!1,Y=null,oe=null,ve=null;return{setTest:function(Me){Me?Oe(2929):ye(2929)},setMask:function(Me){Y!==Me&&!O&&(a.depthMask(Me),Y=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case _d:a.depthFunc(512);break;case xd:a.depthFunc(519);break;case vd:a.depthFunc(513);break;case Va:a.depthFunc(515);break;case yd:a.depthFunc(514);break;case bd:a.depthFunc(518);break;case Md:a.depthFunc(516);break;case Sd:a.depthFunc(517);break;default:a.depthFunc(515)}oe=Me}},setLocked:function(Me){O=Me},setClear:function(Me){ve!==Me&&(a.clearDepth(Me),ve=Me)},reset:function(){O=!1,Y=null,oe=null,ve=null}}}function r(){let O=!1,Y=null,oe=null,ve=null,Me=null,qe=null,at=null,pt=null,on=null;return{setTest:function(et){O||(et?Oe(2960):ye(2960))},setMask:function(et){Y!==et&&!O&&(a.stencilMask(et),Y=et)},setFunc:function(et,Gt,Ct){(oe!==et||ve!==Gt||Me!==Ct)&&(a.stencilFunc(et,Gt,Ct),oe=et,ve=Gt,Me=Ct)},setOp:function(et,Gt,Ct){(qe!==et||at!==Gt||pt!==Ct)&&(a.stencilOp(et,Gt,Ct),qe=et,at=Gt,pt=Ct)},setLocked:function(et){O=et},setClear:function(et){on!==et&&(a.clearStencil(et),on=et)},reset:function(){O=!1,Y=null,oe=null,ve=null,Me=null,qe=null,at=null,pt=null,on=null}}}const o=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,b=null,y=null,T=null,A=null,v=null,S=!1,R=null,N=null,j=null,I=null,D=null;const z=a.getParameter(35661);let H=!1,q=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=q>=2);let ne=null,W={};const V=a.getParameter(3088),G=a.getParameter(2978),te=new rt().fromArray(V),ie=new rt().fromArray(G);function ue(O,Y,oe){const ve=new Uint8Array(4),Me=a.createTexture();a.bindTexture(O,Me),a.texParameteri(O,10241,9728),a.texParameteri(O,10240,9728);for(let qe=0;qe<oe;qe++)a.texImage2D(Y+qe,0,6408,1,1,0,6408,5121,ve);return Me}const Z={};Z[3553]=ue(3553,3553,1),Z[34067]=ue(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(2929),l.setFunc(Va),he(!1),Ne(Ql),Oe(2884),ce(hi);function Oe(O){f[O]!==!0&&(a.enable(O),f[O]=!0)}function ye(O){f[O]!==!1&&(a.disable(O),f[O]=!1)}function Re(O,Y){return p[O]!==Y?(a.bindFramebuffer(O,Y),p[O]=Y,n&&(O===36009&&(p[36160]=Y),O===36160&&(p[36009]=Y)),!0):!1}function de(O,Y){let oe=d,ve=!1;if(O)if(oe=g.get(Y),oe===void 0&&(oe=[],g.set(Y,oe)),O.isWebGLMultipleRenderTargets){const Me=O.texture;if(oe.length!==Me.length||oe[0]!==36064){for(let qe=0,at=Me.length;qe<at;qe++)oe[qe]=36064+qe;oe.length=Me.length,ve=!0}}else oe[0]!==36064&&(oe[0]=36064,ve=!0);else oe[0]!==1029&&(oe[0]=1029,ve=!0);ve&&(t.isWebGL2?a.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ze(O){return m!==O?(a.useProgram(O),m=O,!0):!1}const ee={[fs]:32774,[od]:32778,[ad]:32779};if(n)ee[nc]=32775,ee[ic]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(ee[nc]=O.MIN_EXT,ee[ic]=O.MAX_EXT)}const Q={[ld]:0,[cd]:1,[ud]:768,[uh]:770,[gd]:776,[pd]:774,[fd]:772,[hd]:769,[hh]:771,[md]:775,[dd]:773};function ce(O,Y,oe,ve,Me,qe,at,pt){if(O===hi){_===!0&&(ye(3042),_=!1);return}if(_===!1&&(Oe(3042),_=!0),O!==rd){if(O!==M||pt!==S){if((x!==fs||T!==fs)&&(a.blendEquation(32774),x=fs,T=fs),pt)switch(O){case _s:a.blendFuncSeparate(1,771,1,771);break;case Xn:a.blendFunc(1,1);break;case ec:a.blendFuncSeparate(0,769,0,1);break;case tc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case _s:a.blendFuncSeparate(770,771,1,771);break;case Xn:a.blendFunc(770,1);break;case ec:a.blendFuncSeparate(0,769,0,1);break;case tc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,y=null,A=null,v=null,M=O,S=pt}return}Me=Me||Y,qe=qe||oe,at=at||ve,(Y!==x||Me!==T)&&(a.blendEquationSeparate(ee[Y],ee[Me]),x=Y,T=Me),(oe!==b||ve!==y||qe!==A||at!==v)&&(a.blendFuncSeparate(Q[oe],Q[ve],Q[qe],Q[at]),b=oe,y=ve,A=qe,v=at),M=O,S=!1}function xe(O,Y){O.side===Kn?ye(2884):Oe(2884);let oe=O.side===gn;Y&&(oe=!oe),he(oe),O.blending===_s&&O.transparent===!1?ce(hi):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const ve=O.stencilWrite;c.setTest(ve),ve&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Oe(32926):ye(32926)}function he(O){R!==O&&(O?a.frontFace(2304):a.frontFace(2305),R=O)}function Ne(O){O!==id?(Oe(2884),O!==N&&(O===Ql?a.cullFace(1029):O===sd?a.cullFace(1028):a.cullFace(1032))):ye(2884),N=O}function Ae(O){O!==j&&(H&&a.lineWidth(O),j=O)}function Ee(O,Y,oe){O?(Oe(32823),(I!==Y||D!==oe)&&(a.polygonOffset(Y,oe),I=Y,D=oe)):ye(32823)}function Ke(O){O?Oe(3089):ye(3089)}function We(O){O===void 0&&(O=33984+z-1),ne!==O&&(a.activeTexture(O),ne=O)}function C(O,Y,oe){oe===void 0&&(ne===null?oe=33984+z-1:oe=ne);let ve=W[oe];ve===void 0&&(ve={type:void 0,texture:void 0},W[oe]=ve),(ve.type!==O||ve.texture!==Y)&&(ne!==oe&&(a.activeTexture(oe),ne=oe),a.bindTexture(O,Y||Z[O]),ve.type=O,ve.texture=Y)}function w(){const O=W[ne];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function X(){try{a.compressedTexImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{a.compressedTexImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{a.texSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{a.texSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{a.texStorage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{a.texStorage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{a.texImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{a.texImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(O){te.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),te.copy(O))}function Se(O){ie.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Ge(O,Y){let oe=h.get(Y);oe===void 0&&(oe=new WeakMap,h.set(Y,oe));let ve=oe.get(O);ve===void 0&&(ve=a.getUniformBlockIndex(Y,O.name),oe.set(O,ve))}function Xe(O,Y){const ve=h.get(Y).get(O);u.get(Y)!==ve&&(a.uniformBlockBinding(Y,ve,O.__bindingPointIndex),u.set(Y,ve))}function $e(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ne=null,W={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,b=null,y=null,T=null,A=null,v=null,S=!1,R=null,N=null,j=null,I=null,D=null,te.set(0,0,a.canvas.width,a.canvas.height),ie.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:ye,bindFramebuffer:Re,drawBuffers:de,useProgram:ze,setBlending:ce,setMaterial:xe,setFlipSided:he,setCullFace:Ne,setLineWidth:Ae,setPolygonOffset:Ee,setScissorTest:Ke,activeTexture:We,bindTexture:C,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:re,texImage2D:_e,texImage3D:ge,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:F,texStorage3D:me,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:L,scissor:we,viewport:Se,reset:$e}}function Q0(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,w){return _?new OffscreenCanvas(C,w):vr("canvas")}function x(C,w,X,re){let le=1;if((C.width>re||C.height>re)&&(le=re/Math.max(C.width,C.height)),le<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pe=w?Eo:Math.floor,Ce=pe(le*C.width),L=pe(le*C.height);d===void 0&&(d=M(Ce,L));const F=X?M(Ce,L):d;return F.width=Ce,F.height=L,F.getContext("2d").drawImage(C,0,0,Ce,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ce+"x"+L+")."),F}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return ja(C.width)&&ja(C.height)}function y(C){return o?!1:C.wrapS!==Wt||C.wrapT!==Wt||C.minFilter!==wt&&C.minFilter!==Ht}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==wt&&C.minFilter!==Ht}function A(C){a.generateMipmap(C)}function v(C,w,X,re,le=!1){if(o===!1)return w;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=w;return w===6403&&(X===5126&&(pe=33326),X===5131&&(pe=33325),X===5121&&(pe=33321)),w===33319&&(X===5126&&(pe=33328),X===5131&&(pe=33327),X===5121&&(pe=33323)),w===6408&&(X===5126&&(pe=34836),X===5131&&(pe=34842),X===5121&&(pe=re===Qe&&le===!1?35907:32856),X===32819&&(pe=32854),X===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function S(C,w,X){return T(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===wt||C===Wa||C===xo?9728:9729}function N(C){const w=C.target;w.removeEventListener("dispose",N),I(w),w.isVideoTexture&&g.delete(w)}function j(C){const w=C.target;w.removeEventListener("dispose",j),z(w)}function I(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,re=m.get(X);if(re){const le=re[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&D(C),Object.keys(re).length===0&&m.delete(X)}n.remove(C)}function D(C){const w=n.get(C);a.deleteTexture(w.__webglTexture);const X=C.source,re=m.get(X);delete re[w.__cacheKey],r.memory.textures--}function z(C){const w=C.texture,X=n.get(C),re=n.get(w);if(re.__webglTexture!==void 0&&(a.deleteTexture(re.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)a.deleteFramebuffer(X.__webglFramebuffer[le]),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer[le]);else{if(a.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&a.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&a.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let le=0;le<X.__webglColorRenderbuffer.length;le++)X.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(X.__webglColorRenderbuffer[le]);X.__webglDepthRenderbuffer&&a.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let le=0,pe=w.length;le<pe;le++){const Ce=n.get(w[le]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),r.memory.textures--),n.remove(w[le])}n.remove(w),n.remove(C)}let H=0;function q(){H=0}function k(){const C=H;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),H+=1,C}function ne(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function W(C,w){const X=n.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(X,C,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function V(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){ye(X,C,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function G(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){ye(X,C,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function te(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Re(X,C,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const ie={[Es]:10497,[Wt]:33071,[To]:33648},ue={[wt]:9728,[Wa]:9984,[xo]:9986,[Ht]:9729,[mh]:9985,[ki]:9987};function Z(C,w,X){if(X?(a.texParameteri(C,10242,ie[w.wrapS]),a.texParameteri(C,10243,ie[w.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,ie[w.wrapR]),a.texParameteri(C,10240,ue[w.magFilter]),a.texParameteri(C,10241,ue[w.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(w.wrapS!==Wt||w.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,R(w.magFilter)),a.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==wt&&w.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===wt||w.minFilter!==xo&&w.minFilter!==ki||w.type===ai&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===mr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Oe(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",N));const re=w.source;let le=m.get(re);le===void 0&&(le={},m.set(re,le));const pe=ne(w);if(pe!==C.__cacheKey){le[pe]===void 0&&(le[pe]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,X=!0),le[pe].usedTimes++;const Ce=le[C.__cacheKey];Ce!==void 0&&(le[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&D(w)),C.__cacheKey=pe,C.__webglTexture=le[pe].texture}return X}function ye(C,w,X){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const le=Oe(C,w),pe=w.source;t.bindTexture(re,C.__webglTexture,33984+X);const Ce=n.get(pe);if(pe.version!==Ce.__version||le===!0){t.activeTexture(33984+X),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const L=y(w)&&b(w.image)===!1;let F=x(w.image,L,!1,u);F=We(w,F);const me=b(F)||o,_e=s.convert(w.format,w.encoding);let ge=s.convert(w.type),we=v(w.internalFormat,_e,ge,w.encoding,w.isVideoTexture);Z(re,w,me);let Se;const Ge=w.mipmaps,Xe=o&&w.isVideoTexture!==!0,$e=Ce.__version===void 0||le===!0,O=S(w,F,me);if(w.isDepthTexture)we=6402,o?w.type===ai?we=36012:w.type===Ri?we=33190:w.type===xs?we=35056:we=33189:w.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ii&&we===6402&&w.type!==gh&&w.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ri,ge=s.convert(w.type)),w.format===As&&we===6402&&(we=34041,w.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=xs,ge=s.convert(w.type))),$e&&(Xe?t.texStorage2D(3553,1,we,F.width,F.height):t.texImage2D(3553,0,we,F.width,F.height,0,_e,ge,null));else if(w.isDataTexture)if(Ge.length>0&&me){Xe&&$e&&t.texStorage2D(3553,O,we,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)Se=Ge[Y],Xe?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(3553,Y,we,Se.width,Se.height,0,_e,ge,Se.data);w.generateMipmaps=!1}else Xe?($e&&t.texStorage2D(3553,O,we,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,_e,ge,F.data)):t.texImage2D(3553,0,we,F.width,F.height,0,_e,ge,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&$e&&t.texStorage3D(35866,O,we,Ge[0].width,Ge[0].height,F.depth);for(let Y=0,oe=Ge.length;Y<oe;Y++)Se=Ge[Y],w.format!==hn?_e!==null?Xe?t.compressedTexSubImage3D(35866,Y,0,0,0,Se.width,Se.height,F.depth,_e,Se.data,0,0):t.compressedTexImage3D(35866,Y,we,Se.width,Se.height,F.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,Y,0,0,0,Se.width,Se.height,F.depth,_e,ge,Se.data):t.texImage3D(35866,Y,we,Se.width,Se.height,F.depth,0,_e,ge,Se.data)}else{Xe&&$e&&t.texStorage2D(3553,O,we,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)Se=Ge[Y],w.format!==hn?_e!==null?Xe?t.compressedTexSubImage2D(3553,Y,0,0,Se.width,Se.height,_e,Se.data):t.compressedTexImage2D(3553,Y,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(3553,Y,we,Se.width,Se.height,0,_e,ge,Se.data)}else if(w.isDataArrayTexture)Xe?($e&&t.texStorage3D(35866,O,we,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,_e,ge,F.data)):t.texImage3D(35866,0,we,F.width,F.height,F.depth,0,_e,ge,F.data);else if(w.isData3DTexture)Xe?($e&&t.texStorage3D(32879,O,we,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,_e,ge,F.data)):t.texImage3D(32879,0,we,F.width,F.height,F.depth,0,_e,ge,F.data);else if(w.isFramebufferTexture){if($e)if(Xe)t.texStorage2D(3553,O,we,F.width,F.height);else{let Y=F.width,oe=F.height;for(let ve=0;ve<O;ve++)t.texImage2D(3553,ve,we,Y,oe,0,_e,ge,null),Y>>=1,oe>>=1}}else if(Ge.length>0&&me){Xe&&$e&&t.texStorage2D(3553,O,we,Ge[0].width,Ge[0].height);for(let Y=0,oe=Ge.length;Y<oe;Y++)Se=Ge[Y],Xe?t.texSubImage2D(3553,Y,0,0,_e,ge,Se):t.texImage2D(3553,Y,we,_e,ge,Se);w.generateMipmaps=!1}else Xe?($e&&t.texStorage2D(3553,O,we,F.width,F.height),t.texSubImage2D(3553,0,0,0,_e,ge,F)):t.texImage2D(3553,0,we,_e,ge,F);T(w,me)&&A(re),Ce.__version=pe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Re(C,w,X){if(w.image.length!==6)return;const re=Oe(C,w),le=w.source;t.bindTexture(34067,C.__webglTexture,33984+X);const pe=n.get(le);if(le.version!==pe.__version||re===!0){t.activeTexture(33984+X),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Ce=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,F=[];for(let Y=0;Y<6;Y++)!Ce&&!L?F[Y]=x(w.image[Y],!1,!0,c):F[Y]=L?w.image[Y].image:w.image[Y],F[Y]=We(w,F[Y]);const me=F[0],_e=b(me)||o,ge=s.convert(w.format,w.encoding),we=s.convert(w.type),Se=v(w.internalFormat,ge,we,w.encoding),Ge=o&&w.isVideoTexture!==!0,Xe=pe.__version===void 0||re===!0;let $e=S(w,me,_e);Z(34067,w,_e);let O;if(Ce){Ge&&Xe&&t.texStorage2D(34067,$e,Se,me.width,me.height);for(let Y=0;Y<6;Y++){O=F[Y].mipmaps;for(let oe=0;oe<O.length;oe++){const ve=O[oe];w.format!==hn?ge!==null?Ge?t.compressedTexSubImage2D(34069+Y,oe,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(34069+Y,oe,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+Y,oe,0,0,ve.width,ve.height,ge,we,ve.data):t.texImage2D(34069+Y,oe,Se,ve.width,ve.height,0,ge,we,ve.data)}}}else{O=w.mipmaps,Ge&&Xe&&(O.length>0&&$e++,t.texStorage2D(34067,$e,Se,F[0].width,F[0].height));for(let Y=0;Y<6;Y++)if(L){Ge?t.texSubImage2D(34069+Y,0,0,0,F[Y].width,F[Y].height,ge,we,F[Y].data):t.texImage2D(34069+Y,0,Se,F[Y].width,F[Y].height,0,ge,we,F[Y].data);for(let oe=0;oe<O.length;oe++){const Me=O[oe].image[Y].image;Ge?t.texSubImage2D(34069+Y,oe+1,0,0,Me.width,Me.height,ge,we,Me.data):t.texImage2D(34069+Y,oe+1,Se,Me.width,Me.height,0,ge,we,Me.data)}}else{Ge?t.texSubImage2D(34069+Y,0,0,0,ge,we,F[Y]):t.texImage2D(34069+Y,0,Se,ge,we,F[Y]);for(let oe=0;oe<O.length;oe++){const ve=O[oe];Ge?t.texSubImage2D(34069+Y,oe+1,0,0,ge,we,ve.image[Y]):t.texImage2D(34069+Y,oe+1,Se,ge,we,ve.image[Y])}}}T(w,_e)&&A(34067),pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function de(C,w,X,re,le){const pe=s.convert(X.format,X.encoding),Ce=s.convert(X.type),L=v(X.internalFormat,pe,Ce,X.encoding);n.get(w).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,L,w.width,w.height,w.depth,0,pe,Ce,null):t.texImage2D(le,0,L,w.width,w.height,0,pe,Ce,null)),t.bindFramebuffer(36160,C),Ee(w)?f.framebufferTexture2DMultisampleEXT(36160,re,le,n.get(X).__webglTexture,0,Ae(w)):(le===3553||le>=34069&&le<=34074)&&a.framebufferTexture2D(36160,re,le,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(C,w,X){if(a.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(X||Ee(w)){const le=w.depthTexture;le&&le.isDepthTexture&&(le.type===ai?re=36012:le.type===Ri&&(re=33190));const pe=Ae(w);Ee(w)?f.renderbufferStorageMultisampleEXT(36161,pe,re,w.width,w.height):a.renderbufferStorageMultisample(36161,pe,re,w.width,w.height)}else a.renderbufferStorage(36161,re,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const re=Ae(w);X&&Ee(w)===!1?a.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Ee(w)?f.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0;le<re.length;le++){const pe=re[le],Ce=s.convert(pe.format,pe.encoding),L=s.convert(pe.type),F=v(pe.internalFormat,Ce,L,pe.encoding),me=Ae(w);X&&Ee(w)===!1?a.renderbufferStorageMultisample(36161,me,F,w.width,w.height):Ee(w)?f.renderbufferStorageMultisampleEXT(36161,me,F,w.width,w.height):a.renderbufferStorage(36161,F,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function ee(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,le=Ae(w);if(w.depthTexture.format===Ii)Ee(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,le):a.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===As)Ee(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,le):a.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Q(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ee(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=a.createRenderbuffer(),ze(w.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),ze(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function ce(C,w,X){const re=n.get(C);w!==void 0&&de(re.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&Q(C)}function xe(C){const w=C.texture,X=n.get(C),re=n.get(w);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=a.createTexture()),re.__version=w.version,r.memory.textures++);const le=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,Ce=b(C)||o;if(le){X.__webglFramebuffer=[];for(let L=0;L<6;L++)X.__webglFramebuffer[L]=a.createFramebuffer()}else{if(X.__webglFramebuffer=a.createFramebuffer(),pe)if(i.drawBuffers){const L=C.texture;for(let F=0,me=L.length;F<me;F++){const _e=n.get(L[F]);_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ee(C)===!1){const L=pe?w:[w];X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){const me=L[F];X.__webglColorRenderbuffer[F]=a.createRenderbuffer(),a.bindRenderbuffer(36161,X.__webglColorRenderbuffer[F]);const _e=s.convert(me.format,me.encoding),ge=s.convert(me.type),we=v(me.internalFormat,_e,ge,me.encoding,C.isXRRenderTarget===!0),Se=Ae(C);a.renderbufferStorageMultisample(36161,Se,we,C.width,C.height),a.framebufferRenderbuffer(36160,36064+F,36161,X.__webglColorRenderbuffer[F])}a.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,re.__webglTexture),Z(34067,w,Ce);for(let L=0;L<6;L++)de(X.__webglFramebuffer[L],C,w,36064,34069+L);T(w,Ce)&&A(34067),t.unbindTexture()}else if(pe){const L=C.texture;for(let F=0,me=L.length;F<me;F++){const _e=L[F],ge=n.get(_e);t.bindTexture(3553,ge.__webglTexture),Z(3553,_e,Ce),de(X.__webglFramebuffer,C,_e,36064+F,3553),T(_e,Ce)&&A(3553)}t.unbindTexture()}else{let L=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?L=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,re.__webglTexture),Z(L,w,Ce),de(X.__webglFramebuffer,C,w,36064,L),T(w,Ce)&&A(L),t.unbindTexture()}C.depthBuffer&&Q(C)}function he(C){const w=b(C)||o,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,le=X.length;re<le;re++){const pe=X[re];if(T(pe,w)){const Ce=C.isWebGLCubeRenderTarget?34067:3553,L=n.get(pe).__webglTexture;t.bindTexture(Ce,L),A(Ce),t.unbindTexture()}}}function Ne(C){if(o&&C.samples>0&&Ee(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,re=C.height;let le=16384;const pe=[],Ce=C.stencilBuffer?33306:36096,L=n.get(C),F=C.isWebGLMultipleRenderTargets===!0;if(F)for(let me=0;me<w.length;me++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let me=0;me<w.length;me++){pe.push(36064+me),C.depthBuffer&&pe.push(Ce);const _e=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(_e===!1&&(C.depthBuffer&&(le|=256),C.stencilBuffer&&(le|=1024)),F&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[me]),_e===!0&&(a.invalidateFramebuffer(36008,[Ce]),a.invalidateFramebuffer(36009,[Ce])),F){const ge=n.get(w[me]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ge,0)}a.blitFramebuffer(0,0,X,re,0,0,X,re,le,9728),p&&a.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let me=0;me<w.length;me++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+me,36161,L.__webglColorRenderbuffer[me]);const _e=n.get(w[me]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+me,3553,_e,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Ae(C){return Math.min(h,C.samples)}function Ee(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(C){const w=r.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function We(C,w){const X=C.encoding,re=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===qa||X!==Vi&&(X===Qe?o===!1?e.has("EXT_sRGB")===!0&&re===hn?(C.format=qa,C.minFilter=Ht,C.generateMipmaps=!1):w=Mh.sRGBToLinear(w):(re!==hn||le!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=ce,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ee}function ex(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Bi)return 5121;if(s===Id)return 32819;if(s===Od)return 32820;if(s===Pd)return 5120;if(s===Rd)return 5122;if(s===gh)return 5123;if(s===Dd)return 5124;if(s===Ri)return 5125;if(s===ai)return 5126;if(s===mr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Nd)return 6406;if(s===hn)return 6408;if(s===zd)return 6409;if(s===Ud)return 6410;if(s===Ii)return 6402;if(s===As)return 34041;if(s===Fd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kd)return 6403;if(s===Bd)return 36244;if(s===Vd)return 33319;if(s===Gd)return 33320;if(s===Hd)return 36249;if(s===qo||s===jo||s===Yo||s===Ko)if(r===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sc||s===rc||s===oc||s===ac)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lc||s===cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===lc)return r===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===cc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uc||s===hc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===xc||s===vc||s===yc||s===bc||s===Mc||s===Sc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===uc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_c)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sc)return r===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wc)return r===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===xs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class tx extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fn extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ix extends Et{constructor(e,t,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ii&&(n=Ri),n===void 0&&u===As&&(n=xs),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class sx extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],M=[],x=new Set,b=new Map,y=new Vt;y.layers.enable(1),y.viewport=new rt;const T=new Vt;T.layers.enable(2),T.viewport=new rt;const A=[y,T],v=new tx;v.layers.enable(1),v.layers.enable(2);let S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=_[V];return G===void 0&&(G=new ba,_[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=_[V];return G===void 0&&(G=new ba,_[V]=G),G.getGripSpace()},this.getHand=function(V){let G=_[V];return G===void 0&&(G=new ba,_[V]=G),G.getHandSpace()};function N(V){const G=M.indexOf(V.inputSource);if(G===-1)return;const te=_[G];te!==void 0&&te.dispatchEvent({type:V.type,data:V.inputSource})}function j(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",I);for(let V=0;V<_.length;V++){const G=M[V];G!==null&&(M[V]=null,_[V].disconnect(G))}S=null,R=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,m=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",j),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:f}),m=new Mn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,te=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,G=g.stencil?As:Ii,te=g.stencil?xs:Ri);const ue={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ue),i.updateRenderState({layers:[h]}),m=new Mn(h.textureWidth,h.textureHeight,{format:hn,type:Bi,depthTexture:new ix(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Z=e.properties.get(m);Z.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(V){for(let G=0;G<V.removed.length;G++){const te=V.removed[G],ie=M.indexOf(te);ie>=0&&(M[ie]=null,_[ie].disconnect(te))}for(let G=0;G<V.added.length;G++){const te=V.added[G];let ie=M.indexOf(te);if(ie===-1){for(let Z=0;Z<_.length;Z++)if(Z>=M.length){M.push(te),ie=Z;break}else if(M[Z]===null){M[Z]=te,ie=Z;break}if(ie===-1)break}const ue=_[ie];ue&&ue.connect(te)}}const D=new P,z=new P;function H(V,G,te){D.setFromMatrixPosition(G.matrixWorld),z.setFromMatrixPosition(te.matrixWorld);const ie=D.distanceTo(z),ue=G.projectionMatrix.elements,Z=te.projectionMatrix.elements,Oe=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),Re=(ue[9]+1)/ue[5],de=(ue[9]-1)/ue[5],ze=(ue[8]-1)/ue[0],ee=(Z[8]+1)/Z[0],Q=Oe*ze,ce=Oe*ee,xe=ie/(-ze+ee),he=xe*-ze;G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(he),V.translateZ(xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ne=Oe+xe,Ae=ye+xe,Ee=Q-he,Ke=ce+(ie-he),We=Re*ye/Ae*Ne,C=de*ye/Ae*Ne;V.projectionMatrix.makePerspective(Ee,Ke,We,C,Ne,Ae)}function q(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=T.near=y.near=V.near,v.far=T.far=y.far=V.far,(S!==v.near||R!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,R=v.far);const G=V.parent,te=v.cameras;q(v,G);for(let ue=0;ue<te.length;ue++)q(te[ue],G);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),V.matrix.copy(v.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const ie=V.children;for(let ue=0,Z=ie.length;ue<Z;ue++)ie[ue].updateMatrixWorld(!0);te.length===2?H(v,y,T):v.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return x};let k=null;function ne(V,G){if(c=G.getViewerPose(l||r),p=G,c!==null){const te=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ie=!1;te.length!==v.cameras.length&&(v.cameras.length=0,ie=!0);for(let ue=0;ue<te.length;ue++){const Z=te[ue];let Oe=null;if(f!==null)Oe=f.getViewport(Z);else{const Re=u.getViewSubImage(h,Z);Oe=Re.viewport,ue===0&&(e.setRenderTargetTextures(m,Re.colorTexture,h.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(m))}let ye=A[ue];ye===void 0&&(ye=new Vt,ye.layers.enable(ue),ye.viewport=new rt,A[ue]=ye),ye.matrix.fromArray(Z.transform.matrix),ye.projectionMatrix.fromArray(Z.projectionMatrix),ye.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ue===0&&v.matrix.copy(ye.matrix),ie===!0&&v.cameras.push(ye)}}for(let te=0;te<_.length;te++){const ie=M[te],ue=_[te];ie!==null&&ue!==void 0&&ue.update(ie,G,l||r)}if(k&&k(V,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let te=null;for(const ie of x)G.detectedPlanes.has(ie)||(te===null&&(te=[]),te.push(ie));if(te!==null)for(const ie of te)x.delete(ie),b.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of G.detectedPlanes)if(!x.has(ie))x.add(ie),b.set(ie,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const ue=b.get(ie);ie.lastChangedTime>ue&&(b.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}p=null}const W=new Ph;W.setAnimationLoop(ne),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function rx(a,e){function t(d,m){m.color.getRGB(d.fogColor.value,Ah(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&r(d,m)):m.isPointsMaterial?o(d,m,_,M):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===gn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===gn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function r(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=M*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===gn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ox(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function c(M,x){let b=i[M.id];b===void 0&&(g(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(M,y);const T=e.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const b=a.createBuffer(),y=M.__size,T=M.usage;return a.bindBuffer(35345,b),a.bufferData(35345,y,T),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,b),b}function h(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],b=M.uniforms,y=M.__cache;a.bindBuffer(35345,x);for(let T=0,A=b.length;T<A;T++){const v=b[T];if(p(v,T,y)===!0){const S=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let N=0;for(let j=0;j<R.length;j++){const I=R[j],D=d(I);typeof I=="number"?(v.__data[0]=I,a.bufferSubData(35345,S+N,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,S,v.__data)}}a.bindBuffer(35345,null)}function p(M,x,b){const y=M.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{const T=Array.isArray(y)?y:[y],A=[];for(let v=0;v<T.length;v++)A.push(T[v].clone());b[x]=A}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{const T=Array.isArray(b[x])?b[x]:[b[x]],A=Array.isArray(y)?y:[y];for(let v=0;v<T.length;v++){const S=T[v];if(S.equals(A[v])===!1)return S.copy(A[v]),!0}}return!1}function g(M){const x=M.uniforms;let b=0;const y=16;let T=0;for(let A=0,v=x.length;A<v;A++){const S=x[A],R={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let j=0,I=N.length;j<I;j++){const D=N[j],z=d(D);R.boundary+=z.boundary,R.storage+=z.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,A>0){T=b%y;const j=y-T;T!==0&&j-R.boundary<0&&(b+=y-T,S.__offset=b)}b+=R.storage}return T=b%y,T>0&&(b+=y-T),M.__size=b,M.__cache={},this}function d(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const M in i)a.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function ax(){const a=vr("canvas");return a.style.display="block",a}function Nh(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:ax(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vi,this.physicallyCorrectLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const d=this;let m=!1,_=0,M=0,x=null,b=-1,y=null;const T=new rt,A=new rt;let v=null,S=e.width,R=e.height,N=1,j=null,I=null;const D=new rt(0,0,S,R),z=new rt(0,0,S,R);let H=!1;const q=new bl;let k=!1,ne=!1,W=null;const V=new He,G=new se,te=new P,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return x===null?N:1}let Z=t;function Oe(E,B){for(let K=0;K<E.length;K++){const U=E[K],$=e.getContext(U,B);if($!==null)return $}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),Z===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),Z=Oe(B,E),Z===null)throw Oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Re,de,ze,ee,Q,ce,xe,he,Ne,Ae,Ee,Ke,We,C,w,X,re,le,pe,Ce,L,F,me;function _e(){ye=new x_(Z),Re=new f_(Z,ye,a),ye.init(Re),L=new ex(Z,ye,Re),de=new $0(Z,ye,Re),ze=new b_,ee=new U0,Q=new Q0(Z,ye,de,ee,Re,L,ze),ce=new p_(d),xe=new __(d),he=new Pp(Z,Re),F=new u_(Z,ye,he,Re),Ne=new v_(Z,he,ze,F),Ae=new T_(Z,Ne,he,ze),le=new w_(Z,Re,Q),w=new d_(ee),Ee=new z0(d,ce,xe,ye,Re,F,w),Ke=new rx(d,ee),We=new B0,C=new q0(ye,Re),re=new c_(d,ce,xe,de,Ae,u,r),X=new J0(d,Ae,Re),me=new ox(Z,ze,Re,de),pe=new h_(Z,ye,ze,Re),Ce=new y_(Z,ye,ze,Re),ze.programs=Ee.programs,d.capabilities=Re,d.extensions=ye,d.properties=ee,d.renderLists=We,d.shadowMap=X,d.state=de,d.info=ze}_e();const ge=new sx(d,Z);this.xr=ge,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(S,R,!1))},this.getSize=function(E){return E.set(S,R)},this.setSize=function(E,B,K){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,R=B,e.width=Math.floor(E*N),e.height=Math.floor(B*N),K!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(S*N,R*N).floor()},this.setDrawingBufferSize=function(E,B,K){S=E,R=B,N=K,e.width=Math.floor(E*K),e.height=Math.floor(B*K),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,B,K,U){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,B,K,U),de.viewport(T.copy(D).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(z)},this.setScissor=function(E,B,K,U){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,B,K,U),de.scissor(A.copy(z).multiplyScalar(N).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){de.setScissorTest(H=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(E=!0,B=!0,K=!0){let U=0;E&&(U|=16384),B&&(U|=256),K&&(U|=1024),Z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),We.dispose(),C.dispose(),ee.dispose(),ce.dispose(),xe.dispose(),Ae.dispose(),F.dispose(),me.dispose(),Ee.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ve),ge.removeEventListener("sessionend",Me),W&&(W.dispose(),W=null),qe.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=ze.autoReset,B=X.enabled,K=X.autoUpdate,U=X.needsUpdate,$=X.type;_e(),ze.autoReset=E,X.enabled=B,X.autoUpdate=K,X.needsUpdate=U,X.type=$}function Ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const B=E.target;B.removeEventListener("dispose",Xe),$e(B)}function $e(E){O(E),ee.remove(E)}function O(E){const B=ee.get(E).programs;B!==void 0&&(B.forEach(function(K){Ee.releaseProgram(K)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,K,U,$,Pe){B===null&&(B=ie);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,ke=$n(E,B,K,U,$);de.setMaterial(U,Ue);let Be=K.index,je=1;U.wireframe===!0&&(Be=Ne.getWireframeAttribute(K),je=2);const J=K.drawRange,ae=K.attributes.position;let be=J.start*je,Ie=(J.start+J.count)*je;Pe!==null&&(be=Math.max(be,Pe.start*je),Ie=Math.min(Ie,(Pe.start+Pe.count)*je)),Be!==null?(be=Math.max(be,0),Ie=Math.min(Ie,Be.count)):ae!=null&&(be=Math.max(be,0),Ie=Math.min(Ie,ae.count));const Je=Ie-be;if(Je<0||Je===1/0)return;F.setup($,U,ke,K,Be);let Te,Le=pe;if(Be!==null&&(Te=he.get(Be),Le=Ce,Le.setIndex(Te)),$.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*ue()),Le.setMode(1)):Le.setMode(4);else if($.isLine){let Fe=U.linewidth;Fe===void 0&&(Fe=1),de.setLineWidth(Fe*ue()),$.isLineSegments?Le.setMode(1):$.isLineLoop?Le.setMode(2):Le.setMode(3)}else $.isPoints?Le.setMode(0):$.isSprite&&Le.setMode(4);if($.isInstancedMesh)Le.renderInstances(be,Je,$.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vi=Math.min(K.instanceCount,Fe);Le.renderInstances(be,Je,vi)}else Le.render(be,Je)},this.compile=function(E,B){function K(U,$,Pe){U.transparent===!0&&U.side===Gr?(U.side=gn,U.needsUpdate=!0,Ct(U,$,Pe),U.side=pi,U.needsUpdate=!0,Ct(U,$,Pe),U.side=Gr):Ct(U,$,Pe)}f=C.get(E),f.init(),g.push(f),E.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let Pe=0;Pe<$.length;Pe++){const Ue=$[Pe];K(Ue,E,U)}else K($,E,U)}),g.pop(),f=null};let Y=null;function oe(E){Y&&Y(E)}function ve(){qe.stop()}function Me(){qe.start()}const qe=new Ph;qe.setAnimationLoop(oe),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){Y=E,ge.setAnimationLoop(E),E===null?qe.stop():qe.start()},ge.addEventListener("sessionstart",ve),ge.addEventListener("sessionend",Me),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,B,x),f=C.get(E,g.length),f.init(),g.push(f),V.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(V),ne=this.localClippingEnabled,k=w.init(this.clippingPlanes,ne,B),h=We.get(E,p.length),h.init(),p.push(h),at(E,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(j,I),k===!0&&w.beginShadows();const K=f.state.shadowsArray;if(X.render(K,E,B),k===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(h,E),f.setupLights(d.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let $=0,Pe=U.length;$<Pe;$++){const Ue=U[$];pt(h,E,Ue,Ue.viewport)}}else pt(h,E,B);x!==null&&(Q.updateMultisampleRenderTarget(x),Q.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,B),F.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function at(E,B,K,U){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){U&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const Ue=Ae.update(E),ke=E.material;ke.visible&&h.push(E,Ue,ke,K,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ze.render.frame&&(E.skeleton.update(),E.skeleton.frame=ze.render.frame),!E.frustumCulled||q.intersectsObject(E))){U&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const Ue=Ae.update(E),ke=E.material;if(Array.isArray(ke)){const Be=Ue.groups;for(let je=0,J=Be.length;je<J;je++){const ae=Be[je],be=ke[ae.materialIndex];be&&be.visible&&h.push(E,Ue,be,K,te.z,ae)}}else ke.visible&&h.push(E,Ue,ke,K,te.z,null)}}const Pe=E.children;for(let Ue=0,ke=Pe.length;Ue<ke;Ue++)at(Pe[Ue],B,K,U)}function pt(E,B,K,U){const $=E.opaque,Pe=E.transmissive,Ue=E.transparent;f.setupLightsView(K),Pe.length>0&&on($,B,K),U&&de.viewport(T.copy(U)),$.length>0&&et($,B,K),Pe.length>0&&et(Pe,B,K),Ue.length>0&&et(Ue,B,K),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function on(E,B,K){const U=Re.isWebGL2;W===null&&(W=new Mn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?mr:Bi,minFilter:ki,samples:U&&s===!0?4:0})),d.getDrawingBufferSize(G),U?W.setSize(G.x,G.y):W.setSize(Eo(G.x),Eo(G.y));const $=d.getRenderTarget();d.setRenderTarget(W),d.clear();const Pe=d.toneMapping;d.toneMapping=Yn,et(E,B,K),d.toneMapping=Pe,Q.updateMultisampleRenderTarget(W),Q.updateRenderTargetMipmap(W),d.setRenderTarget($)}function et(E,B,K){const U=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Pe=E.length;$<Pe;$++){const Ue=E[$],ke=Ue.object,Be=Ue.geometry,je=U===null?Ue.material:U,J=Ue.group;ke.layers.test(K.layers)&&Gt(ke,B,K,Be,je,J)}}function Gt(E,B,K,U,$,Pe){E.onBeforeRender(d,B,K,U,$,Pe),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(d,B,K,U,E,Pe),$.transparent===!0&&$.side===Gr?($.side=gn,$.needsUpdate=!0,d.renderBufferDirect(K,B,U,$,E,Pe),$.side=pi,$.needsUpdate=!0,d.renderBufferDirect(K,B,U,$,E,Pe),$.side=Gr):d.renderBufferDirect(K,B,U,$,E,Pe),E.onAfterRender(d,B,K,U,$,Pe)}function Ct(E,B,K){B.isScene!==!0&&(B=ie);const U=ee.get(E),$=f.state.lights,Pe=f.state.shadowsArray,Ue=$.state.version,ke=Ee.getParameters(E,$.state,Pe,B,K),Be=Ee.getProgramCacheKey(ke);let je=U.programs;U.environment=E.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(E.isMeshStandardMaterial?xe:ce).get(E.envMap||U.environment),je===void 0&&(E.addEventListener("dispose",Xe),je=new Map,U.programs=je);let J=je.get(Be);if(J!==void 0){if(U.currentProgram===J&&U.lightsStateVersion===Ue)return xi(E,ke),J}else ke.uniforms=Ee.getUniforms(E),E.onBuild(K,ke,d),E.onBeforeCompile(ke,d),J=Ee.acquireProgram(ke,Be),je.set(Be,J),U.uniforms=ke.uniforms;const ae=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ae.clippingPlanes=w.uniform),xi(E,ke),U.needsLights=Br(E),U.lightsStateVersion=Ue,U.needsLights&&(ae.ambientLightColor.value=$.state.ambient,ae.lightProbe.value=$.state.probe,ae.directionalLights.value=$.state.directional,ae.directionalLightShadows.value=$.state.directionalShadow,ae.spotLights.value=$.state.spot,ae.spotLightShadows.value=$.state.spotShadow,ae.rectAreaLights.value=$.state.rectArea,ae.ltc_1.value=$.state.rectAreaLTC1,ae.ltc_2.value=$.state.rectAreaLTC2,ae.pointLights.value=$.state.point,ae.pointLightShadows.value=$.state.pointShadow,ae.hemisphereLights.value=$.state.hemi,ae.directionalShadowMap.value=$.state.directionalShadowMap,ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ae.spotShadowMap.value=$.state.spotShadowMap,ae.spotLightMatrix.value=$.state.spotLightMatrix,ae.spotLightMap.value=$.state.spotLightMap,ae.pointShadowMap.value=$.state.pointShadowMap,ae.pointShadowMatrix.value=$.state.pointShadowMatrix);const be=J.getUniforms(),Ie=yo.seqWithValue(be.seq,ae);return U.currentProgram=J,U.uniformsList=Ie,J}function xi(E,B){const K=ee.get(E);K.outputEncoding=B.outputEncoding,K.instancing=B.instancing,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function $n(E,B,K,U,$){B.isScene!==!0&&(B=ie),Q.resetTextureUnits();const Pe=B.fog,Ue=U.isMeshStandardMaterial?B.environment:null,ke=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Vi,Be=(U.isMeshStandardMaterial?xe:ce).get(U.envMap||Ue),je=U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,J=!!U.normalMap&&!!K.attributes.tangent,ae=!!K.morphAttributes.position,be=!!K.morphAttributes.normal,Ie=!!K.morphAttributes.color,Je=U.toneMapped?d.toneMapping:Yn,Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Le=Te!==void 0?Te.length:0,Fe=ee.get(U),vi=f.state.lights;if(k===!0&&(ne===!0||E!==y)){const Kt=E===y&&U.id===b;w.setState(U,E,Kt)}let ft=!1;U.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vi.state.version||Fe.outputEncoding!==ke||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Be||U.fog===!0&&Fe.fog!==Pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==J||Fe.morphTargets!==ae||Fe.morphNormals!==be||Fe.morphColors!==Ie||Fe.toneMapping!==Je||Re.isWebGL2===!0&&Fe.morphTargetsCount!==Le)&&(ft=!0):(ft=!0,Fe.__version=U.version);let In=Fe.currentProgram;ft===!0&&(In=Ct(U,B,$));let Vr=!1,yi=!1,On=!1;const zt=In.getUniforms(),bi=Fe.uniforms;if(de.useProgram(In.program)&&(Vr=!0,yi=!0,On=!0),U.id!==b&&(b=U.id,yi=!0),Vr||y!==E){if(zt.setValue(Z,"projectionMatrix",E.projectionMatrix),Re.logarithmicDepthBuffer&&zt.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,yi=!0,On=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Kt=zt.map.cameraPosition;Kt!==void 0&&Kt.setValue(Z,te.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&zt.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||$.isSkinnedMesh)&&zt.setValue(Z,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){zt.setOptional(Z,$,"bindMatrix"),zt.setOptional(Z,$,"bindMatrixInverse");const Kt=$.skeleton;Kt&&(Re.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),zt.setValue(Z,"boneTexture",Kt.boneTexture,Q),zt.setValue(Z,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wo=K.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&Re.isWebGL2===!0)&&le.update($,K,U,In),(yi||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,zt.setValue(Z,"receiveShadow",$.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(bi.envMap.value=Be,bi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),yi&&(zt.setValue(Z,"toneMappingExposure",d.toneMappingExposure),Fe.needsLights&&kr(bi,On),Pe&&U.fog===!0&&Ke.refreshFogUniforms(bi,Pe),Ke.refreshMaterialUniforms(bi,U,N,R,W),yo.upload(Z,Fe.uniformsList,bi,Q)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(yo.upload(Z,Fe.uniformsList,bi,Q),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&zt.setValue(Z,"center",$.center),zt.setValue(Z,"modelViewMatrix",$.modelViewMatrix),zt.setValue(Z,"normalMatrix",$.normalMatrix),zt.setValue(Z,"modelMatrix",$.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Kt=U.uniformsGroups;for(let Xo=0,nd=Kt.length;Xo<nd;Xo++)if(Re.isWebGL2){const $l=Kt[Xo];me.update($l,In),me.bind($l,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function kr(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Br(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,B,K){ee.get(E.texture).__webglTexture=B,ee.get(E.depthTexture).__webglTexture=K;const U=ee.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=K===void 0,U.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const K=ee.get(E);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,K=0){x=E,_=B,M=K;let U=!0,$=null,Pe=!1,Ue=!1;if(E){const Be=ee.get(E);Be.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),U=!1):Be.__webglFramebuffer===void 0?Q.setupRenderTarget(E):Be.__hasExternalTextures&&Q.rebindTextures(E,ee.get(E.texture).__webglTexture,ee.get(E.depthTexture).__webglTexture);const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ue=!0);const J=ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=J[B],Pe=!0):Re.isWebGL2&&E.samples>0&&Q.useMultisampledRTT(E)===!1?$=ee.get(E).__webglMultisampledFramebuffer:$=J,T.copy(E.viewport),A.copy(E.scissor),v=E.scissorTest}else T.copy(D).multiplyScalar(N).floor(),A.copy(z).multiplyScalar(N).floor(),v=H;if(de.bindFramebuffer(36160,$)&&Re.drawBuffers&&U&&de.drawBuffers(E,$),de.viewport(T),de.scissor(A),de.setScissorTest(v),Pe){const Be=ee.get(E.texture);Z.framebufferTexture2D(36160,36064,34069+B,Be.__webglTexture,K)}else if(Ue){const Be=ee.get(E.texture),je=B||0;Z.framebufferTextureLayer(36160,36064,Be.__webglTexture,K||0,je)}b=-1},this.readRenderTargetPixels=function(E,B,K,U,$,Pe,Ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){de.bindFramebuffer(36160,ke);try{const Be=E.texture,je=Be.format,J=Be.type;if(je!==hn&&L.convert(je)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ae=J===mr&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(J!==Bi&&L.convert(J)!==Z.getParameter(35738)&&!(J===ai&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-U&&K>=0&&K<=E.height-$&&Z.readPixels(B,K,U,$,L.convert(je),L.convert(J),Pe)}finally{const Be=x!==null?ee.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(E,B,K=0){const U=Math.pow(2,-K),$=Math.floor(B.image.width*U),Pe=Math.floor(B.image.height*U);Q.setTexture2D(B,0),Z.copyTexSubImage2D(3553,K,0,0,E.x,E.y,$,Pe),de.unbindTexture()},this.copyTextureToTexture=function(E,B,K,U=0){const $=B.image.width,Pe=B.image.height,Ue=L.convert(K.format),ke=L.convert(K.type);Q.setTexture2D(K,0),Z.pixelStorei(37440,K.flipY),Z.pixelStorei(37441,K.premultiplyAlpha),Z.pixelStorei(3317,K.unpackAlignment),B.isDataTexture?Z.texSubImage2D(3553,U,E.x,E.y,$,Pe,Ue,ke,B.image.data):B.isCompressedTexture?Z.compressedTexSubImage2D(3553,U,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ue,B.mipmaps[0].data):Z.texSubImage2D(3553,U,E.x,E.y,Ue,ke,B.image),U===0&&K.generateMipmaps&&Z.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(E,B,K,U,$=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Ue=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,Be=L.convert(U.format),je=L.convert(U.type);let J;if(U.isData3DTexture)Q.setTexture3D(U,0),J=32879;else if(U.isDataArrayTexture)Q.setTexture2DArray(U,0),J=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,U.flipY),Z.pixelStorei(37441,U.premultiplyAlpha),Z.pixelStorei(3317,U.unpackAlignment);const ae=Z.getParameter(3314),be=Z.getParameter(32878),Ie=Z.getParameter(3316),Je=Z.getParameter(3315),Te=Z.getParameter(32877),Le=K.isCompressedTexture?K.mipmaps[0]:K.image;Z.pixelStorei(3314,Le.width),Z.pixelStorei(32878,Le.height),Z.pixelStorei(3316,E.min.x),Z.pixelStorei(3315,E.min.y),Z.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?Z.texSubImage3D(J,$,B.x,B.y,B.z,Pe,Ue,ke,Be,je,Le.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(J,$,B.x,B.y,B.z,Pe,Ue,ke,Be,Le.data)):Z.texSubImage3D(J,$,B.x,B.y,B.z,Pe,Ue,ke,Be,je,Le),Z.pixelStorei(3314,ae),Z.pixelStorei(32878,be),Z.pixelStorei(3316,Ie),Z.pixelStorei(3315,Je),Z.pixelStorei(32877,Te),$===0&&U.generateMipmaps&&Z.generateMipmap(J),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lx extends Nh{}lx.prototype.isWebGL1Renderer=!0;class cx extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new P;class Sl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lu=new P,cu=new rt,uu=new rt,hx=new P,hu=new He;class fx extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;cu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=uu.getComponent(s);if(r!==0){const o=cu.getComponent(s);hu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hx.copy(lu).applyMatrix4(hu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fh extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dx extends Et{constructor(e=null,t=1,n=1,i,s,r,o,l,c=wt,u=wt,h,f){super(null,r,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=new He,px=new He;class wl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:px;fu.multiplyMatrices(o,t[s]),fu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=vh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dx(t,e,e,hn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Fh),this.bones.push(r),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class du extends ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pu=new He,mu=new He,ao=[],mx=new He,$s=new yt;class gx extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new du(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,mx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,pu),mu.multiplyMatrices(n,pu),$s.matrixWorld=mu,$s.raycast(e,ao);for(let r=0,o=ao.length;r<o;r++){const l=ao[r];l.instanceId=s,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new du(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Tl extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gu=new P,_u=new P,xu=new He,Ma=new zo,lo=new Bs;class El extends ot{constructor(e=new Rt,t=new Tl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gu.fromBufferAttribute(t,i-1),_u.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gu.distanceTo(_u);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;xu.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(xu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),M=Math.min(g.count,r.start+r.count);for(let x=_,b=M-1;x<b;x+=p){const y=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,T),Ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),M=Math.min(m.count,r.start+r.count);for(let x=_,b=M-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ma.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const vu=new P,yu=new P;class zh extends El{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vu.fromBufferAttribute(t,i),yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(yu);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _x extends El{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uh extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bu=new He,Ka=new zo,co=new Bs,uo=new P;class Za extends ot{constructor(e=new Rt,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(i),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;bu.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(bu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,d=p;g<d;g++){const m=c.getX(g);uo.fromBufferAttribute(h,m),Mu(uo,m,l,i,e,t,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=f,d=p;g<d;g++)uo.fromBufferAttribute(h,g),Mu(uo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mu(a,e,t,n,i,s,r){const o=Ka.distanceSqToPoint(a);if(o<t){const l=new P;Ka.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class yr extends Et{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(r-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new se:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],r=[],o=new P,l=new He;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new P)}s[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Tt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Al extends Rn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new se,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xx extends Al{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,h){let f=(r-s)/c-(o-s)/(c+u)+(o-r)/u,p=(o-r)/u-(l-r)/(u+h)+(l-o)/h;f*=u,p*=u,i(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const ho=new P,Sa=new Cl,wa=new Cl,Ta=new Cl;class vx extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(ho.subVectors(i[0],i[1]).add(i[0]),c=ho);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(ho.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);d<1e-4&&(d=1),g<1e-4&&(g=d),m<1e-4&&(m=d),Sa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,d,m),wa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,d,m),Ta.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,d,m)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),wa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ta.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Sa.calc(l),wa.calc(l),Ta.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Su(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function yx(a,e){const t=1-a;return t*t*e}function bx(a,e){return 2*(1-a)*a*e}function Mx(a,e){return a*a*e}function ur(a,e,t,n){return yx(a,e)+bx(a,t)+Mx(a,n)}function Sx(a,e){const t=1-a;return t*t*t*e}function wx(a,e){const t=1-a;return 3*t*t*a*e}function Tx(a,e){return 3*(1-a)*a*a*e}function Ex(a,e){return a*a*a*e}function hr(a,e,t,n,i){return Sx(a,e)+wx(a,t)+Tx(a,n)+Ex(a,i)}class kh extends Rn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(hr(e,i.x,s.x,r.x,o.x),hr(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends Rn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(hr(e,i.x,s.x,r.x,o.x),hr(e,i.y,s.y,r.y,o.y),hr(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ll extends Rn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cx extends Rn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends Rn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ur(e,i.x,s.x,r.x),ur(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends Rn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(ur(e,i.x,s.x,r.x),ur(e,i.y,s.y,r.y),ur(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Su(o,l.x,c.x,u.x,h.x),Su(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var Gh=Object.freeze({__proto__:null,ArcCurve:xx,CatmullRomCurve3:vx,CubicBezierCurve:kh,CubicBezierCurve3:Ax,EllipseCurve:Al,LineCurve:Ll,LineCurve3:Cx,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:Lx,SplineCurve:Vh});class Px extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ll(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Gh[i.type]().fromJSON(i))}return this}}class Ja extends Px{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ll(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Bh(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new kh(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new Al(e,t,n,i,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pl extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const d=[],m=n/2;let _=0;M(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function M(){const b=new P,y=new P;let T=0;const A=(t-e)/n;for(let v=0;v<=s;v++){const S=[],R=v/s,N=R*(t-e)+e;for(let j=0;j<=i;j++){const I=j/i,D=I*l+o,z=Math.sin(D),H=Math.cos(D);y.x=N*z,y.y=-R*n+m,y.z=N*H,h.push(y.x,y.y,y.z),b.set(z,A,H).normalize(),f.push(b.x,b.y,b.z),p.push(I,1-R),S.push(g++)}d.push(S)}for(let v=0;v<i;v++)for(let S=0;S<s;S++){const R=d[S][v],N=d[S+1][v],j=d[S+1][v+1],I=d[S][v+1];u.push(R,N,I),u.push(N,j,I),T+=6}c.addGroup(_,T,0),_+=T}function x(b){const y=g,T=new se,A=new P;let v=0;const S=b===!0?e:t,R=b===!0?1:-1;for(let j=1;j<=i;j++)h.push(0,m*R,0),f.push(0,R,0),p.push(.5,.5),g++;const N=g;for(let j=0;j<=i;j++){const D=j/i*l+o,z=Math.cos(D),H=Math.sin(D);A.x=S*H,A.y=m*R,A.z=S*z,h.push(A.x,A.y,A.z),f.push(0,R,0),T.x=z*.5+.5,T.y=H*.5*R+.5,p.push(T.x,T.y),g++}for(let j=0;j<i;j++){const I=y+j,D=N+j;b===!0?u.push(D,D+1,I):u.push(D+1,D,I),v+=3}c.addGroup(_,v,b===!0?1:2),_+=v}}static fromJSON(e){return new Pl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends Ja{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ja().fromJSON(i))}return this}}const Rx={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=Hh(a,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,u,h,f,p;if(n&&(s=Fx(a,e,s,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let g=t;g<i;g+=t)h=a[g],f=a[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return br(s,r,t,o,l,p,0),r}};function Hh(a,e,t,n,i){let s,r;if(i===jx(a,e,t,n)>0)for(s=e;s<t;s+=n)r=wu(s,a[s],a[s+1],r);else for(s=t-n;s>=e;s-=n)r=wu(s,a[s],a[s+1],r);return r&&Bo(r,r.next)&&(Sr(r),r=r.next),r}function Gi(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||ut(t.prev,t,t.next)===0)){if(Sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function br(a,e,t,n,i,s,r){if(!a)return;!r&&s&&Vx(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?Ix(a,n,i,s):Dx(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),Sr(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=Ox(Gi(a),e,t),br(a,e,t,n,i,s,2)):r===2&&Nx(a,e,t,n,i,s):br(Gi(a),e,t,n,i,s,1);break}}}function Dx(a){const e=a.prev,t=a,n=a.next;if(ut(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,o=e.y,l=t.y,c=n.y,u=i<s?i<r?i:r:s<r?s:r,h=o<l?o<c?o:c:l<c?l:c,f=i>s?i>r?i:r:s>r?s:r,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&ps(i,o,s,l,r,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ix(a,e,t,n){const i=a.prev,s=a,r=a.next;if(ut(i,s,r)>=0)return!1;const o=i.x,l=s.x,c=r.x,u=i.y,h=s.y,f=r.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,d=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,_=$a(p,g,e,t,n),M=$a(d,m,e,t,n);let x=a.prevZ,b=a.nextZ;for(;x&&x.z>=_&&b&&b.z<=M;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&ps(o,u,l,h,c,f,x.x,x.y)&&ut(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=p&&b.x<=d&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&ps(o,u,l,h,c,f,b.x,b.y)&&ut(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&ps(o,u,l,h,c,f,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=M;){if(b.x>=p&&b.x<=d&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&ps(o,u,l,h,c,f,b.x,b.y)&&ut(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ox(a,e,t){let n=a;do{const i=n.prev,s=n.next.next;!Bo(i,s)&&Wh(i,n,n.next,s)&&Mr(i,s)&&Mr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Sr(n),Sr(n.next),n=a=s),n=n.next}while(n!==a);return Gi(n)}function Nx(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Wx(r,o)){let l=Xh(r,o);r=Gi(r,r.next),l=Gi(l,l.next),br(r,e,t,n,i,s,0),br(l,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function Fx(a,e,t,n){const i=[];let s,r,o,l,c;for(s=0,r=e.length;s<r;s++)o=e[s]*n,l=s<r-1?e[s+1]*n:a.length,c=Hh(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Hx(c));for(i.sort(zx),s=0;s<i.length;s++)t=Ux(i[s],t);return t}function zx(a,e){return a.x-e.x}function Ux(a,e){const t=kx(a,e);if(!t)return e;const n=Xh(t,a);return Gi(n,n.next),Gi(t,t.next)}function kx(a,e){let t=e,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ps(r<c?s:n,r,l,c,r<c?n:s,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(s-t.x),Mr(t,a)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Bx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function Bx(a,e){return ut(a.prev,a,e.prev)<0&&ut(e.next,a,a.next)<0}function Vx(a,e,t,n){let i=a;do i.z===0&&(i.z=$a(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Gx(i)}function Gx(a){let e,t,n,i,s,r,o,l,c=1;do{for(t=a,a=null,s=null,r=0;t;){for(r++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return a}function $a(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Hx(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function ps(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function Wx(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Xx(a,e)&&(Mr(a,e)&&Mr(e,a)&&qx(a,e)&&(ut(a.prev,a,e.prev)||ut(a,e.prev,e))||Bo(a,e)&&ut(a.prev,a,a.next)>0&&ut(e.prev,e,e.next)>0)}function ut(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Bo(a,e){return a.x===e.x&&a.y===e.y}function Wh(a,e,t,n){const i=po(ut(a,e,t)),s=po(ut(a,e,n)),r=po(ut(t,n,a)),o=po(ut(t,n,e));return!!(i!==s&&r!==o||i===0&&fo(a,t,e)||s===0&&fo(a,n,e)||r===0&&fo(t,a,n)||o===0&&fo(t,e,n))}function fo(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function po(a){return a>0?1:a<0?-1:0}function Xx(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Wh(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Mr(a,e){return ut(a.prev,a,a.next)<0?ut(a,e,a.next)>=0&&ut(a,a.prev,e)>=0:ut(a,e,a.prev)<0||ut(a,a.next,e)<0}function qx(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Xh(a,e){const t=new Qa(a.i,a.x,a.y),n=new Qa(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wu(a,e,t,n){const i=new Qa(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Qa(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jx(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class vs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Tu(e),Eu(n,e);let r=e.length;t.forEach(Tu);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,Eu(n,t[l]);const o=Rx.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Tu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Eu(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Rl extends Rt{constructor(e=new bo([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new Ot(i,3)),this.setAttribute("uv",new Ot(s,2)),this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Yx;let x,b=!1,y,T,A,v;_&&(x=_.getSpacedPoints(u),b=!0,f=!1,y=_.computeFrenetFrames(u,!1),T=new P,A=new P,v=new P),f||(m=0,p=0,g=0,d=0);const S=o.extractPoints(c);let R=S.shape;const N=S.holes;if(!vs.isClockWise(R)){R=R.reverse();for(let ee=0,Q=N.length;ee<Q;ee++){const ce=N[ee];vs.isClockWise(ce)&&(N[ee]=ce.reverse())}}const I=vs.triangulateShape(R,N),D=R;for(let ee=0,Q=N.length;ee<Q;ee++){const ce=N[ee];R=R.concat(ce)}function z(ee,Q,ce){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar(ce).add(ee)}const H=R.length,q=I.length;function k(ee,Q,ce){let xe,he,Ne;const Ae=ee.x-Q.x,Ee=ee.y-Q.y,Ke=ce.x-ee.x,We=ce.y-ee.y,C=Ae*Ae+Ee*Ee,w=Ae*We-Ee*Ke;if(Math.abs(w)>Number.EPSILON){const X=Math.sqrt(C),re=Math.sqrt(Ke*Ke+We*We),le=Q.x-Ee/X,pe=Q.y+Ae/X,Ce=ce.x-We/re,L=ce.y+Ke/re,F=((Ce-le)*We-(L-pe)*Ke)/(Ae*We-Ee*Ke);xe=le+Ae*F-ee.x,he=pe+Ee*F-ee.y;const me=xe*xe+he*he;if(me<=2)return new se(xe,he);Ne=Math.sqrt(me/2)}else{let X=!1;Ae>Number.EPSILON?Ke>Number.EPSILON&&(X=!0):Ae<-Number.EPSILON?Ke<-Number.EPSILON&&(X=!0):Math.sign(Ee)===Math.sign(We)&&(X=!0),X?(xe=-Ee,he=Ae,Ne=Math.sqrt(C)):(xe=Ae,he=Ee,Ne=Math.sqrt(C/2))}return new se(xe/Ne,he/Ne)}const ne=[];for(let ee=0,Q=D.length,ce=Q-1,xe=ee+1;ee<Q;ee++,ce++,xe++)ce===Q&&(ce=0),xe===Q&&(xe=0),ne[ee]=k(D[ee],D[ce],D[xe]);const W=[];let V,G=ne.concat();for(let ee=0,Q=N.length;ee<Q;ee++){const ce=N[ee];V=[];for(let xe=0,he=ce.length,Ne=he-1,Ae=xe+1;xe<he;xe++,Ne++,Ae++)Ne===he&&(Ne=0),Ae===he&&(Ae=0),V[xe]=k(ce[xe],ce[Ne],ce[Ae]);W.push(V),G=G.concat(V)}for(let ee=0;ee<m;ee++){const Q=ee/m,ce=p*Math.cos(Q*Math.PI/2),xe=g*Math.sin(Q*Math.PI/2)+d;for(let he=0,Ne=D.length;he<Ne;he++){const Ae=z(D[he],ne[he],xe);Oe(Ae.x,Ae.y,-ce)}for(let he=0,Ne=N.length;he<Ne;he++){const Ae=N[he];V=W[he];for(let Ee=0,Ke=Ae.length;Ee<Ke;Ee++){const We=z(Ae[Ee],V[Ee],xe);Oe(We.x,We.y,-ce)}}}const te=g+d;for(let ee=0;ee<H;ee++){const Q=f?z(R[ee],G[ee],te):R[ee];b?(A.copy(y.normals[0]).multiplyScalar(Q.x),T.copy(y.binormals[0]).multiplyScalar(Q.y),v.copy(x[0]).add(A).add(T),Oe(v.x,v.y,v.z)):Oe(Q.x,Q.y,0)}for(let ee=1;ee<=u;ee++)for(let Q=0;Q<H;Q++){const ce=f?z(R[Q],G[Q],te):R[Q];b?(A.copy(y.normals[ee]).multiplyScalar(ce.x),T.copy(y.binormals[ee]).multiplyScalar(ce.y),v.copy(x[ee]).add(A).add(T),Oe(v.x,v.y,v.z)):Oe(ce.x,ce.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){const Q=ee/m,ce=p*Math.cos(Q*Math.PI/2),xe=g*Math.sin(Q*Math.PI/2)+d;for(let he=0,Ne=D.length;he<Ne;he++){const Ae=z(D[he],ne[he],xe);Oe(Ae.x,Ae.y,h+ce)}for(let he=0,Ne=N.length;he<Ne;he++){const Ae=N[he];V=W[he];for(let Ee=0,Ke=Ae.length;Ee<Ke;Ee++){const We=z(Ae[Ee],V[Ee],xe);b?Oe(We.x,We.y+x[u-1].y,x[u-1].x+ce):Oe(We.x,We.y,h+ce)}}}ie(),ue();function ie(){const ee=i.length/3;if(f){let Q=0,ce=H*Q;for(let xe=0;xe<q;xe++){const he=I[xe];ye(he[2]+ce,he[1]+ce,he[0]+ce)}Q=u+m*2,ce=H*Q;for(let xe=0;xe<q;xe++){const he=I[xe];ye(he[0]+ce,he[1]+ce,he[2]+ce)}}else{for(let Q=0;Q<q;Q++){const ce=I[Q];ye(ce[2],ce[1],ce[0])}for(let Q=0;Q<q;Q++){const ce=I[Q];ye(ce[0]+H*u,ce[1]+H*u,ce[2]+H*u)}}n.addGroup(ee,i.length/3-ee,0)}function ue(){const ee=i.length/3;let Q=0;Z(D,Q),Q+=D.length;for(let ce=0,xe=N.length;ce<xe;ce++){const he=N[ce];Z(he,Q),Q+=he.length}n.addGroup(ee,i.length/3-ee,1)}function Z(ee,Q){let ce=ee.length;for(;--ce>=0;){const xe=ce;let he=ce-1;he<0&&(he=ee.length-1);for(let Ne=0,Ae=u+m*2;Ne<Ae;Ne++){const Ee=H*Ne,Ke=H*(Ne+1),We=Q+xe+Ee,C=Q+he+Ee,w=Q+he+Ke,X=Q+xe+Ke;Re(We,C,w,X)}}}function Oe(ee,Q,ce){l.push(ee),l.push(Q),l.push(ce)}function ye(ee,Q,ce){de(ee),de(Q),de(ce);const xe=i.length/3,he=M.generateTopUV(n,i,xe-3,xe-2,xe-1);ze(he[0]),ze(he[1]),ze(he[2])}function Re(ee,Q,ce,xe){de(ee),de(Q),de(xe),de(Q),de(ce),de(xe);const he=i.length/3,Ne=M.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);ze(Ne[0]),ze(Ne[1]),ze(Ne[3]),ze(Ne[1]),ze(Ne[2]),ze(Ne[3])}function de(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function ze(ee){s.push(ee.x),s.push(ee.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Gh[i.type]().fromJSON(i)),new Rl(n,e.options)}}const Yx={generateTopUV:function(a,e,t,n,i){const s=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new se(s,r),new se(o,l),new se(c,u)]},generateSideWallUV:function(a,e,t,n,i,s){const r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],d=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new se(r,1-l),new se(c,1-h),new se(f,1-g),new se(d,1-_)]:[new se(o,1-l),new se(u,1-h),new se(p,1-g),new se(m,1-_)]}};function Kx(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wn extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qi extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ii(a,e,t){return qh(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function mo(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function qh(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Zx(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Au(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function jh(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jx extends Nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:s=e,o=2*t-n;break;case Ac:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:r=e,l=2*n-t;break;case Ac:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-f*m+2*f*d-f*g,M=(1+f)*m+(-1.5-2*f)*d+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,b=p*m-p*d;for(let y=0;y!==o;++y)s[y]=_*r[u+y]+M*r[c+y]+x*r[l+y]+b*r[h+y];return s}}class $x extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=r[c+f]*h+r[l+f]*u;return s}}class Qx extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $x(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=ii(n,s,r),this.values=ii(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&qh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),i=this.getInterpolation()===Zo,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const d=t[h+g];if(d!==t[f+g]||d!==t[p+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const h=o*n,f=r*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=ii(e,0,r),this.values=ii(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Cs;class Hs extends Dn{}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=gr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Yh extends Dn{}Yh.prototype.ValueTypeName="color";class wr extends Dn{}wr.prototype.ValueTypeName="number";class ev extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Hi extends Dn{InterpolantFactoryMethodLinear(e){return new ev(this.times,this.values,this.getValueSize(),e)}}Hi.prototype.ValueTypeName="quaternion";Hi.prototype.DefaultInterpolation=Cs;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Dn{}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=gr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends Dn{}Tr.prototype.ValueTypeName="vector";class tv{constructor(e,t=-1,n,i=Xd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(iv(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Zx(l);l=Au(l,1,u),c=Au(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new wr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,d){if(p.length!==0){const m=[],_=[];jh(p,m,_,g),m.length!==0&&d.push(new h(f,m,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let d=0;d<f[g].morphTargets.length;d++)p[f[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new wr(".morphTargetInfluence["+d+"]",m,_))}l=p.length*r}else{const p=".bones["+t[h].name+"]";n(Tr,p+".position",f,"pos",i),n(Hi,p+".quaternion",f,"rot",i),n(Tr,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Yh;case"quaternion":return Hi;case"bool":case"boolean":return Hs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function iv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nv(a.type);if(a.times===void 0){const t=[],n=[];jh(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ps={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Kh{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const sv=new Kh;class ji{constructor(e){this.manager=e!==void 0?e:sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Bn={};class rv extends Error{constructor(e,t){super(e),this.response=t}}class Er extends ji{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ps.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:b})=>{if(x)_.close();else{d+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let T=0,A=u.length;T<A;T++){const v=u[T];v.onProgress&&v.onProgress(y)}_.enqueue(b),M()}})}}});return new Response(m)}else throw new rv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ps.add(e,c);const u=Bn[e];delete Bn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ov extends ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ps.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=vr("img");function l(){u(),Ps.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class av extends ji{constructor(e){super(e)}load(e,t,n,i){const s=new Et,r=new ov(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fr extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class lv extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ea=new He,Cu=new P,Lu=new P;class Dl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cv extends Dl{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uv extends Fr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new cv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new He,Qs=new P,Aa=new P;class hv extends Dl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}}class rr extends Fr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fv extends Dl{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zh extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dv extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ni{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pv extends ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ps.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Ps.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Jh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ru(){return(typeof performance>"u"?Date:performance).now()}const Il="\\[\\]\\.:\\/",mv=new RegExp("["+Il+"]","g"),Ol="[^"+Il+"]",gv="[^"+Il.replace("\\.","")+"]",_v=/((?:WC+[\/:])*)/.source.replace("WC",Ol),xv=/(WCOD+)?/.source.replace("WCOD",gv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),bv=new RegExp("^"+_v+xv+vv+yv+"$"),Mv=["material","materials","bones","map"];class Sv{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(e){const t=bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Mv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Sv;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wv{constructor(e,t,n=0,i=1/0){this.ray=new zo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)el(e[i],this,n,t);return n.sort(Du),n}}function Du(a,e){return a.distance-e.distance}function el(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)el(i[s],e,t,!0)}}class Iu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tv{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ja,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const M=[];for(let x=0,b=_.length;x<b;x++){const y=_[x],T=new bo;T.curves=y.curves,M.push(T)}return M}function n(_,M){const x=M.length;let b=!1;for(let y=x-1,T=0;T<x;y=T++){let A=M[y],v=M[T],S=v.x-A.x,R=v.y-A.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(A=M[T],S=-S,v=M[y],R=-R),_.y<A.y||_.y>v.y)continue;if(_.y===A.y){if(_.x===A.x)return!0}else{const N=R*(_.x-A.x)-S*(_.y-A.y);if(N===0)return!0;if(N<0)continue;b=!b}}else{if(_.y!==A.y)continue;if(v.x<=_.x&&_.x<=A.x||A.x<=_.x&&_.x<=v.x)return!0}}return b}const i=vs.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,l;const c=[];if(s.length===1)return o=s[0],l=new bo,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,d;f[g]=void 0,p[g]=[];for(let _=0,M=s.length;_<M;_++)o=s[_],d=o.getPoints(),r=i(d),r=e?!r:r,r?(!u&&f[g]&&g++,f[g]={s:new bo,p:d},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:d[0]});if(!f[0])return t(s);if(f.length>1){let _=!1,M=0;for(let x=0,b=f.length;x<b;x++)h[x]=[];for(let x=0,b=f.length;x<b;x++){const y=p[x];for(let T=0;T<y.length;T++){const A=y[T];let v=!0;for(let S=0;S<f.length;S++)n(A.p,f[S].p)&&(x!==S&&M++,v?(v=!1,h[S].push(A)):_=!0);v&&h[x].push(A)}}M>0&&_===!1&&(p=h)}let m;for(let _=0,M=f.length;_<M;_++){l=f[_].s,c.push(l),m=p[_];for(let x=0,b=m.length;x<b;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);class $h extends ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Bv(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Ni.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Er(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ni.decodeText(new Uint8Array(e,0,4))===Qh){try{r[Ze.KHR_BINARY_GLTF]=new Vv(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(Ni.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ey(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:r[u]=new Cv;break;case Ze.KHR_DRACO_MESH_COMPRESSION:r[u]=new Gv(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:r[u]=new Hv;break;case Ze.KHR_MESH_QUANTIZATION:r[u]=new Wv;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ev(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Av{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zh(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rr(u),c.distance=h;break;case"spot":c=new uv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Cv{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Qe))}return Promise.all(i)}}class Lv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Pv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(o,o)}return Promise.all(s)}}class Rv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Dv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Qe)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Iv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new De(o[0],o[1],o[2]),Promise.all(s)}}class Nv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Fv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new De(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Qe)),Promise.all(s)}}class zv{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Uv{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kv{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class Bv{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==cn.TRIANGLES&&c.mode!==cn.TRIANGLE_STRIP&&c.mode!==cn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const d=new He,m=new P,_=new Ln,M=new P(1,1,1),x=new gx(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,d.compose(m,_,M));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ot.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Qh="glTF",er=12,Ou={JSON:1313821514,BIN:5130562};class Vv{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,er);if(this.header={magic:Ni.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-er,i=new DataView(e,er);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===Ou.JSON){const l=new Uint8Array(e,er+s,r);this.content=Ni.decodeText(l)}else if(o===Ou.BIN){const l=er+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Gv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=tl[u]||u.toLowerCase();o[h]=r[u]}for(const u in e.attributes){const h=tl[u]||u.toLowerCase();if(r[u]!==void 0){const f=n.accessors[e.attributes[u]],p=ys[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}h(f)},o,c)})})}}class Hv{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Wv{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class ef extends Nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,d=g-c,m=-2*p+3*f,_=p-f,M=1-m,x=_-f+h;for(let b=0;b!==o;b++){const y=r[d+b+o],T=r[d+b+l]*u,A=r[g+b+o],v=r[g+b]*u;s[b]=M*y+x*T+m*A+_*v}return s}}const Xv=new Ln;class qv extends ef{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Xv.fromArray(s).normalize().toArray(s),s}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nu={9728:wt,9729:Ht,9984:Wa,9985:mh,9986:xo,9987:ki},Fu={33071:Wt,33648:To,10497:Es},Ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jv={CUBICSPLINE:void 0,LINEAR:Cs,STEP:gr},La={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),a.DefaultMaterial}function tr(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kv(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;r.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function Zv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(a){const e=a.extensions&&a.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+zu(e.attributes):t=a.indices+":"+zu(a.attributes)+":"+a.mode,t}function zu(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function nl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $v(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Qv=new He;class ey{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ev,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new av(this.options.manager):this.textureLoader=new pv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Er(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};tr(s,o,i),ri(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Ni.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Ca[i.type],o=ys[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new ct(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Ca[i.type],c=ys[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let d,m;if(p&&p!==h){const _=Math.floor(f/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(M);x||(d=new c(o,_*p,i.count*p/u),x=new ux(d,p/u),t.cache.add(M,x)),m=new Sl(x,l,f%p/u,g)}else o===null?d=new c(i.count*l):d=new c(o,f,i.count*l),m=new ct(d,l,g);if(i.sparse!==void 0){const _=Ca.SCALAR,M=ys[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new M(r[1],x,i.sparse.count*_),T=new c(r[2],b,i.sparse.count*l);o!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized));for(let A=0,v=y.length;A<v;A++){const S=y[A];if(m.setX(S,T[A*l]),l>=2&&m.setY(S,T[A*l+1]),l>=3&&m.setZ(S,T[A*l+2]),l>=4&&m.setW(S,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"";const f=(s.samplers||{})[r.sampler]||{};return u.magFilter=Nu[f.magFilter]||Ht,u.minFilter=Nu[f.minFilter]||ki,u.wrapS=Fu[f.wrapS]||Es,u.wrapT=Fu[f.wrapT]||Es,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Et(d);m.needsUpdate=!0,f(m)}),t.load(Ni.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=r.mimeType||$v(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Uh,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Tl,An.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Wn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const h=i[Ze.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Qe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Kn);const u=s.alphaMode||La.OPAQUE;if(u===La.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===La.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==En&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==En&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==En&&(o.emissive=new De().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==En&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Qe)),Promise.all(c).then(function(){const h=new r(o);return s.name&&(h.name=s.name),ri(h,s),t.associations.set(h,{materials:e}),s.extensions&&tr(i,h,s),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Uu(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=Jv(c),h=i[u];if(h)r.push(h.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Uu(new Rt,c,t),i[u]={primitive:c,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Yv(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=r[p];let _;const M=c[p];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new fx(d,M):new yt(d,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?_.geometry=ku(_.geometry,qd):m.mode===cn.TRIANGLE_FAN&&(_.geometry=ku(_.geometry,_h));else if(m.mode===cn.LINES)_=new zh(d,M);else if(m.mode===cn.LINE_STRIP)_=new El(d,M);else if(m.mode===cn.LINE_LOOP)_=new _x(d,M);else if(m.mode===cn.POINTS)_=new Za(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Zv(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),ri(_,s),m.extensions&&tr(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new fn;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(up.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Uo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){o.push(h);const f=new He;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wl(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,d=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",d)),r.push(this.getDependency("accessor",m)),o.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],d=[];for(let _=0,M=u.length;_<M;_++){const x=u[_],b=h[_],y=f[_],T=p[_],A=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(si[A.path]){case si.weights:v=wr;break;case si.rotation:v=Hi;break;case si.position:case si.scale:default:v=Tr;break}const S=x.name?x.name:x.uuid,R=T.interpolation!==void 0?jv[T.interpolation]:Cs,N=[];si[A.path]===si.weights?x.traverse(function(I){I.morphTargetInfluences&&N.push(I.name?I.name:I.uuid)}):N.push(S);let j=y.array;if(y.normalized){const I=nl(j.constructor),D=new Float32Array(j.length);for(let z=0,H=j.length;z<H;z++)D[z]=j[z]*I;j=D}for(let I=0,D=N.length;I<D;I++){const z=new v(N[I]+"."+si[A.path],b.array,j,R);T.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(q){const k=this instanceof Hi?qv:ef;return new k(this.times,this.values,this.getValueSize()/3,q)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(z)}}const m=n.name?n.name:"animation_"+e;return new tv(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return(function(){const o=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});const c=[],u=s.children||[];for(let f=0,p=u.length;f<p;f++)c.push(i.getDependency("node",u[f]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),h])})().then(function(o){const l=o[0],c=o[1],u=o[2];let h;if(s.isBone===!0?h=new Fh:l.length>1?h=new fn:l.length===1?h=l[0]:h=new ot,h!==l[0])for(let f=0,p=l.length;f<p;f++)h.add(l[f]);if(s.name&&(h.userData.name=s.name,h.name=r),ri(h,s),s.extensions&&tr(n,h,s),s.matrix!==void 0){const f=new He;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Qv)});for(let f=0,p=c.length;f<p;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new fn;n.name&&(s.name=i.createUniqueName(n.name)),ri(s,n),n.extensions&&tr(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof An||f instanceof Et)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(s),s})}}function ty(a,e,t){const n=e.attributes,i=new ks;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=nl(ys[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const d=nl(ys[f.componentType]);l.multiplyScalar(d)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Bs;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Uu(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=tl[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return ri(a,e),ty(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Kv(a,e.targets,t):a})}function ku(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===_h)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}const Bu={type:"change"},Pa={type:"start"},Vu={type:"end"};class ny extends Xi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",We),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bu),n.update(),s=i.NONE},this.update=(function(){const L=new P,F=new Ln().setFromUnitVectors(e.up,new P(0,1,0)),me=F.clone().invert(),_e=new P,ge=new Ln,we=2*Math.PI;return function(){const Ge=n.object.position;L.copy(Ge).sub(n.target),L.applyQuaternion(F),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&S(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Xe=n.minAzimuthAngle,$e=n.maxAzimuthAngle;return isFinite(Xe)&&isFinite($e)&&(Xe<-Math.PI?Xe+=we:Xe>Math.PI&&(Xe-=we),$e<-Math.PI?$e+=we:$e>Math.PI&&($e-=we),Xe<=$e?o.theta=Math.max(Xe,Math.min($e,o.theta)):o.theta=o.theta>(Xe+$e)/2?Math.max(Xe,o.theta):Math.min($e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(o),L.applyQuaternion(me),Ge.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||_e.distanceToSquared(n.object.position)>r||8*(1-ge.dot(n.object.quaternion))>r?(n.dispatchEvent(Bu),_e.copy(n.object.position),ge.copy(n.object.quaternion),h=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",ce),n.domElement.removeEventListener("pointercancel",Ne),n.domElement.removeEventListener("wheel",Ke),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",he),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",We)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Iu,l=new Iu;let c=1;const u=new P;let h=!1;const f=new se,p=new se,g=new se,d=new se,m=new se,_=new se,M=new se,x=new se,b=new se,y=[],T={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function S(L){l.theta-=L}function R(L){l.phi-=L}const N=(function(){const L=new P;return function(me,_e){L.setFromMatrixColumn(_e,0),L.multiplyScalar(-me),u.add(L)}})(),j=(function(){const L=new P;return function(me,_e){n.screenSpacePanning===!0?L.setFromMatrixColumn(_e,1):(L.setFromMatrixColumn(_e,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(me),u.add(L)}})(),I=(function(){const L=new P;return function(me,_e){const ge=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;L.copy(we).sub(n.target);let Se=L.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),N(2*me*Se/ge.clientHeight,n.object.matrix),j(2*_e*Se/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(me*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),j(_e*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function D(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(L){f.set(L.clientX,L.clientY)}function q(L){M.set(L.clientX,L.clientY)}function k(L){d.set(L.clientX,L.clientY)}function ne(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),R(2*Math.PI*g.y/F.clientHeight),f.copy(p),n.update()}function W(L){x.set(L.clientX,L.clientY),b.subVectors(x,M),b.y>0?D(v()):b.y<0&&z(v()),M.copy(x),n.update()}function V(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(m),n.update()}function G(L){L.deltaY<0?z(v()):L.deltaY>0&&D(v()),n.update()}function te(L){let F=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),n.update())}function ie(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);f.set(L,F)}}function ue(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const L=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);d.set(L,F)}}function Z(){const L=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,me=Math.sqrt(L*L+F*F);M.set(0,me)}function Oe(){n.enableZoom&&Z(),n.enablePan&&ue()}function ye(){n.enableZoom&&Z(),n.enableRotate&&ie()}function Re(L){if(y.length==1)p.set(L.pageX,L.pageY);else{const me=Ce(L),_e=.5*(L.pageX+me.x),ge=.5*(L.pageY+me.y);p.set(_e,ge)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;S(2*Math.PI*g.x/F.clientHeight),R(2*Math.PI*g.y/F.clientHeight),f.copy(p)}function de(L){if(y.length===1)m.set(L.pageX,L.pageY);else{const F=Ce(L),me=.5*(L.pageX+F.x),_e=.5*(L.pageY+F.y);m.set(me,_e)}_.subVectors(m,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(m)}function ze(L){const F=Ce(L),me=L.pageX-F.x,_e=L.pageY-F.y,ge=Math.sqrt(me*me+_e*_e);x.set(0,ge),b.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),D(b.y),M.copy(x)}function ee(L){n.enableZoom&&ze(L),n.enablePan&&de(L)}function Q(L){n.enableZoom&&ze(L),n.enableRotate&&Re(L)}function ce(L){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",xe),n.domElement.addEventListener("pointerup",he)),re(L),L.pointerType==="touch"?C(L):Ae(L))}function xe(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):Ee(L))}function he(L){le(L),y.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",he)),n.dispatchEvent(Vu),s=i.NONE}function Ne(L){le(L)}function Ae(L){let F;switch(L.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ki.DOLLY:if(n.enableZoom===!1)return;q(L),s=i.DOLLY;break;case Ki.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;k(L),s=i.PAN}else{if(n.enableRotate===!1)return;H(L),s=i.ROTATE}break;case Ki.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;H(L),s=i.ROTATE}else{if(n.enablePan===!1)return;k(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pa)}function Ee(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(L);break;case i.DOLLY:if(n.enableZoom===!1)return;W(L);break;case i.PAN:if(n.enablePan===!1)return;V(L);break}}function Ke(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Pa),G(L),n.dispatchEvent(Vu))}function We(L){n.enabled===!1||n.enablePan===!1||te(L)}function C(L){switch(pe(L),y.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;ue(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(),s=i.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Pa)}function w(L){switch(pe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(L),n.update();break;default:s=i.NONE}}function X(L){n.enabled!==!1&&L.preventDefault()}function re(L){y.push(L)}function le(L){delete T[L.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==L.pointerId){y.splice(F,1);return}}function pe(L){let F=T[L.pointerId];F===void 0&&(F=new se,T[L.pointerId]=F),F.set(L.pageX,L.pageY)}function Ce(L){const F=L.pointerId===y[0].pointerId?y[1]:y[0];return T[F.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",ce),n.domElement.addEventListener("pointercancel",Ne),n.domElement.addEventListener("wheel",Ke,{passive:!1}),this.update()}}const tf={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iy=new Uo(-1,1,1,-1,0,1),Nl=new Rt;Nl.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3));Nl.setAttribute("uv",new Ot([0,2,0,0,2,0],2));class nf{constructor(e){this._mesh=new yt(Nl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sy extends zr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ao.clone(e.uniforms),this.material=new Pt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gu extends zr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class ry extends zr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class oy{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new se);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sy(tf),this.clock=new Jh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(r instanceof Gu?n=!0:r instanceof ry&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ay extends zr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const ly={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Rs extends zr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Mn(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Mn(s,r);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Mn(s,r);p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),r=Math.round(r/2)}const o=ly;this.highPassUniforms=Ao.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new se(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=tf;this.copyUniforms=Ao.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Pt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new En,this.fsQuad=new nf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new se(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new Pt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Rs.BlurDirectionX=new se(1,0);Rs.BlurDirectionY=new se(0,1);function Vn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function sf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ds={duration:.5,overwrite:!1,delay:0},Fl,Nt,_t,dn=1e8,st=1/dn,il=Math.PI*2,cy=il/4,uy=0,rf=Math.sqrt,hy=Math.cos,fy=Math.sin,At=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},Zn=function(e){return typeof e=="number"},zl=function(e){return typeof e>"u"},Pn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},of=function(){return typeof window<"u"},go=function(e){return dt(e)||At(e)},af=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ft=Array.isArray,sl=/(?:-?\.?\d|\.)+/gi,lf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cf=/[+-]=-?[.\d]+/,uf=/[^,'"\[\]\s]+/gi,dy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,un,rl,Ul,sn={},Co={},hf,ff=function(e){return(Co=Wi(e,sn))&&rn},kl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lo=function(e,t){return!t&&console.warn(e)},df=function(e,t){return e&&(sn[e]=t)&&Co&&(Co[e]=t)||sn},Ar=function(){return 0},py={suppressEvents:!0,isStart:!0,kill:!1},Mo={suppressEvents:!0,kill:!1},my={suppressEvents:!0},Bl={},fi=[],ol={},pf,Qt={},Da={},Hu=30,So=[],Vl="",Gl=function(e){var t=e[0],n,i;if(Pn(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=So.length;i--&&!So[i].targetTest(t););n=So[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ff(e[i],n)))||e.splice(i,1);return e},Fi=function(e){return e._gsap||Gl(pn(e))[0]._gsap},mf=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():zl(n)&&e.getAttribute&&e.getAttribute(t)||n},jt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Po=function(){var e=fi.length,t=fi.slice(0),n,i;for(ol={},fi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gf=function(e,t,n,i){fi.length&&!Nt&&Po(),e.render(t,n,Nt&&t<0&&(e._initted||e._startAt)),fi.length&&!Nt&&Po()},_f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uf).length<2?t:At(e)?e.trim():e},xf=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_y=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Wi=function(e,t){for(var n in t)e[n]=t[n];return e},Wu=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Ro=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fr=function(e){var t=e.parent||lt,n=e.keyframes?_y(Ft(e.keyframes)):xn;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vf=function(e,t,n,i,s){var r=e[i],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Vo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},mi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},zi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},al=function(e,t,n,i){return e._startAt&&(Nt?e._startAt.revert(Mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yy=function a(e){return!e||e._ts&&a(e.parent)},Xu=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Do=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Go=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Ho=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Go(e),n._dirty||zi(n,e)),e},yf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Do(e.rawTime(),t),(!t._dur||Ur(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),zi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Tn=function(e,t,n,i){return t.parent&&mi(t),t._start=Lt((Zn(n)?n:n||e!==lt?ln(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vf(e,t,"_first","_last",e._sort?"_start":0),ll(t)||(e._recent=t),i||yf(e,t),e._ts<0&&Ho(e,e._tTime),e},bf=function(e,t){return(sn.ScrollTrigger||kl("scrollTrigger",t))&&sn.ScrollTrigger.create(t,e)},Mf=function(e,t,n,i,s){if(Wl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pf!==en.frame)return fi.push(e),e._lazy=[s,i],1},by=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},ll=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},My=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&by(e)&&!(!e._initted&&ll(e))||(e._ts<0||e._dp._ts<0)&&!ll(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ur(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(r=1-r),u!==Is(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Nt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&Mf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&al(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&mi(e,1),!n&&!Nt&&(mn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Os=function(e,t,n,i){var s=e._repeat,r=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Lt(r*(s+1)+e._rDelay*s):r,o>0&&!i&&Ho(e,e._tTime=e._tDur*o),e.parent&&Go(e),n||zi(e.parent,e),e},qu=function(e){return e instanceof Xt?zi(e):Os(e,e._dur)},wy={_start:0,endTime:Ar,totalDuration:Ar},ln=function a(e,t,n){var i=e.labels,s=e._recent||wy,r=e.duration()>=dn?s.endTime(!1):e._dur,o,l,c;return At(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ft(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},dr=function(e,t,n){var i=Zn(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],o,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;r.immediateRender=qt(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new vt(t[0],r,t[s+1])},_i=function(e,t){return e||e===0?t(e):t},Ur=function(e,t,n){return n<e?e:n>t?t:n},It=function(e,t){return!At(e)||!(t=dy.exec(e))?"":t[1]},Ty=function(e,t,n){return _i(n,function(i){return Ur(e,t,i)})},cl=[].slice,Sf=function(e,t){return e&&Pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pn(e[0]))&&!e.nodeType&&e!==un},Ey=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||Sf(i,1)?(s=n).push.apply(s,pn(i)):n.push(i)})||n},pn=function(e,t,n){return _t&&!t&&_t.selector?_t.selector(e):At(e)&&!n&&(rl||!Ns())?cl.call((t||Ul).querySelectorAll(e),0):Ft(e)?Ey(e,n):Sf(e)?cl.call(e,0):e?[e]:[]},ul=function(e){return e=pn(e)[0]||Lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pn(t,n.querySelectorAll?n:n===e?Lo("Invalid scope")||Ul.createElement("div"):e)}},wf=function(e){return e.sort(function(){return .5-Math.random()})},Tf=function(e){if(dt(e))return e;var t=Pn(e)?e:{each:e},n=Ui(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return At(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=r[d],_,M,x,b,y,T,A,v,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,dn])[1],!S){for(A=-dn;A<(A=g[S++].getBoundingClientRect().left)&&S<d;);S--}for(m=r[d]=[],_=l?Math.min(S,d)*u-.5:i%S,M=S===dn?0:l?d*h/S-.5:i/S|0,A=0,v=dn,T=0;T<d;T++)x=T%S-_,b=M-(T/S|0),m[T]=y=c?Math.abs(c==="y"?b:x):rf(x*x+b*b),y>A&&(A=y),y<v&&(v=y);i==="random"&&wf(m),m.max=A-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(S>d?d-1:c?c==="y"?d/S:S:Math.max(S,d/S))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=It(t.amount||t.each)||0,n=n&&d<0?If(n):n}return d=(m[f]-m.min)/m.max||0,Lt(m.b+(n?n(d):d)*m.v)+m.u}},hl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zn(n)?0:It(n))}},Ef=function(e,t){var n=Ft(e),i,s;return!n&&Pn(e)&&(i=n=e.radius||dn,e.values?(e=pn(e.values),(s=!Zn(e[0]))&&(i*=i)):e=hl(e.increment)),_i(t,n?dt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=dn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:r,s||u===r||Zn(r)?u:u+It(r)}:hl(e))},Af=function(e,t,n,i){return _i(Ft(e)?!t:n===!0?!!(n=0):!i,function(){return Ft(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ay=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},Cy=function(e,t){return function(n){return e(parseFloat(n))+(t||It(n))}},Ly=function(e,t,n){return Lf(e,t,0,1,n)},Cf=function(e,t,n){return _i(n,function(i){return e[~~t(i)]})},Py=function a(e,t,n){var i=t-e;return Ft(e)?Cf(e,a(0,e.length),t):_i(n,function(s){return(i+(s-e)%i)%i+e})},Ry=function a(e,t,n){var i=t-e,s=i*2;return Ft(e)?Cf(e,a(0,e.length-1),t):_i(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Cr=function(e){for(var t=0,n="",i,s,r,o;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(o?uf:sl),n+=e.substr(t,i-t)+Af(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Lf=function(e,t,n,i,s){var r=t-e,o=i-n;return _i(s,function(l){return n+((l-e)/r*o||0)})},Dy=function a(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var r=At(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Ft(e)&&!Ft(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Wi(Ft(e)?[]:{},e));if(!u){for(l in t)Hl.call(o,e,l,"get",t[l]);s=function(g){return jl(g,o)||(r?e.p:e)}}}return _i(n,s)},ju=function(e,t,n){var i=e.labels,s=dn,r,o,l;for(r in i)o=i[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},mn=function(e,t,n){var i=e.vars,s=i[t],r=_t,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&fi.length&&Po(),o&&(_t=o),u=l?s.apply(c,l):s.call(c),_t=r,u},or=function(e){return mi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nt),e.progress()<1&&mn(e,"onInterrupt"),e},gs,Iy=function(e){e=!e.name&&e.default||e;var t=e.name,n=dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ar,render:jl,add:Hl,kill:Ky,modifier:Yy,rawVars:0},r={targetTest:0,get:0,getSetter:ql,aliases:{},register:0};if(Ns(),e!==i){if(Qt[t])return;xn(i,xn(Ro(e,s),r)),Wi(i.prototype,Wi(s,Ro(e,r))),Qt[i.prop=t]=i,e.targetTest&&(So.push(i),Bl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}df(t,i),e.register&&e.register(rn,i,Yt)},nt=255,ar={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Ia=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},Pf=function(e,t,n){var i=e?Zn(e)?[e>>16,e>>8&nt,e&nt]:0:ar.black,s,r,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ar[e])i=ar[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(sl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Ia(l+1/3,s,r),i[1]=Ia(l,s,r),i[2]=Ia(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(lf),n&&i.length<4&&(i[3]=1),i}else i=e.match(sl)||ar.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/nt,r=i[1]/nt,o=i[2]/nt,h=Math.max(s,r,o),f=Math.min(s,r,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(r-o)/p+(r<o?6:0):h===r?(o-s)/p+2:(s-r)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rf=function(e){var t=[],n=[],i=-1;return e.split(di).forEach(function(s){var r=s.match(ms)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Yu=function(e,t,n){var i="",s=(e+i).match(di),r=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Pf(f,t,1))&&r+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Rf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(di,"1").split(ms),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(di),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},di=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ar)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),Oy=/hsl[a]?\(/,Df=function(e){var t=e.join(" "),n;if(di.lastIndex=0,di.test(t))return n=Oy.test(t),e[1]=Yu(e[1],n),e[0]=Yu(e[0],n,Rf(e[1])),!0},Lr,en=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,u,h,f,p,g=function d(m){var _=a()-i,M=m===!0,x,b,y,T;if(_>e&&(n+=_-t),i+=_,y=i-n,x=y-r,(x>0||M)&&(T=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,r+=x+(x>=s?4:s-x),b=1),M||(l=c(d)),b)for(p=0;p<o.length;p++)o[p](y,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){hf&&(!rl&&of()&&(un=rl=window,Ul=un.document||{},sn.gsap=rn,(un.gsapVersions||(un.gsapVersions=[])).push(rn.version),ff(Co||un.GreenSockGlobals||!un.gsap&&un||{}),u=un.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,r-h.time*1e3+1|0)},Lr=1,g(2))},sleep:function(){(u?un.cancelAnimationFrame:clearTimeout)(l),Lr=0,c=Ar},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),r=h.time*1e3+s},add:function(m,_,M){var x=_?function(b,y,T,A){m(b,y,T,A),h.remove(x)}:m;return h.remove(m),o[M?"unshift":"push"](x),Ns(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h})(),Ns=function(){return!Lr&&en.wake()},Ye={},Ny=/^[\d.\-M][\d.\-,\s]/,Fy=/["']/g,zy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Fy,"").trim():+c,i=l.substr(o+1).trim();return t},Uy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ky=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zy(t[1])]:Uy(e).split(",").map(_f)):Ye._CE&&Ny.test(e)?Ye._CE("",e):n},If=function(e){return function(t){return 1-e(1-t)}},Of=function a(e,t){for(var n=e._first,i;n;)n instanceof Xt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ui=function(e,t){return e&&(dt(e)?e:Ye[e]||ky(e))||t},Yi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return jt(e,function(o){Ye[o]=sn[o]=s,Ye[r=o.toLowerCase()]=n;for(var l in s)Ye[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},Nf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Oa=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/il*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*fy((u-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Nf(o);return s=il/s,l.config=function(c,u){return a(e,c,u)},l},Na=function a(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nf(n);return i.config=function(s){return a(e,s)},i};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Yi(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Yi("Elastic",Oa("in"),Oa("out"),Oa());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Yi("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Yi("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Yi("Circ",function(a){return-(rf(1-a*a)-1)});Yi("Sine",function(a){return a===1?1:-hy(a*cy)+1});Yi("Back",Na("in"),Na("out"),Na());Ye.SteppedEase=Ye.steps=sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-st;return function(o){return((i*Ur(0,r,o)|0)+s)*n}}};Ds.ease=Ye["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Vl+=a+","+a+"Params,"});var Ff=function(e,t){this.id=uy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:mf,this.set=t?t.getSetter:ql},Fs=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Os(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Lr||en.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ho(this,n),!s._dp||s.parent||yf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Do(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Ur(-this._delay,this._tDur,i),!0),Go(this),vy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Tn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Do(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=my);var i=Nt;return Nt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Nt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,qu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ln(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-st)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=dt(n)?n:xf,o=function(){var c=i.then;i.then=null,dt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){or(this)},a})();xn(Fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Xt=(function(a){sf(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qt(n.sortChildren),lt&&Tn(n.parent||lt,Vn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&bf(Vn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return dr(0,arguments,this),this},t.from=function(i,s,r){return dr(1,arguments,this),this},t.fromTo=function(i,s,r,o){return dr(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,fr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,ln(this,r),1),this},t.call=function(i,s,r){return Tn(this,vt.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,o,l,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new vt(i,r,ln(this,l)),this},t.staggerFrom=function(i,s,r,o,l,c,u){return r.runBackwards=1,fr(r).immediateRender=qt(r.immediateRender),this.staggerTo(i,s,r,o,l,c,u)},t.staggerFromTo=function(i,s,r,o,l,c,u,h){return o.startAt=r,fr(o).immediateRender=qt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,_,M,x,b,y,T,A;if(this!==lt&&u>l&&i>=0&&(u=l),u!==this._tTime||r||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,b=this._start,x=this._ts,_=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=Lt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),y=Is(this._tTime,m),!o&&this._tTime&&y!==d&&(y=d),T&&d&1&&(f=c-f,A=1),d!==y&&!this._lock){var v=T&&y&1,S=v===(T&&d&1);if(d<y&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(A?0:Lt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Of(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Sy(this,Lt(o),Lt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&(mn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,r),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-st);break}}p=g}else{p=this._last;for(var R=i<0?i:f;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,r||Nt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=R?-st:st);break}}p=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-st)._zTime=f>=o?1:-1,this._ts))return this._start=b,Go(this),this.render(i,s,r);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&mi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(Zn(s)||(s=ln(this,s,i)),!(i instanceof Fs)){if(Ft(i))return i.forEach(function(o){return r.add(o,s)}),this;if(At(i))return this.addLabel(i,s);if(dt(i))i=vt.delayedCall(0,i);else return this}return this!==i?Tn(this,i,s):this},t.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof vt?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return At(i)?this.removeLabel(i):dt(i)?this.killTweensOf(i):(Vo(this,i),i===this._recent&&(this._recent=this._last),zi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ln(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var o=vt.delayedCall(0,s||Ar,r);return o.data="isPause",this._hasPause=1,Tn(this,o,ln(this,i))},t.removePause=function(i){var s=this._first;for(i=ln(this,i);s;)s._start===i&&s.data==="isPause"&&mi(s),s=s._next},t.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)li!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],o=pn(i),l=this._first,c=Zn(s),u;l;)l instanceof vt?gy(l._targets,o)&&(c?(!li||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(o,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,o=ln(r,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=vt.to(r,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||st,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==m&&Os(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,xn({startAt:{time:ln(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ju(this,ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ju(this,ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return zi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zi(this)},t.totalDuration=function(i){var s=0,r=this,o=r._last,l=dn,c,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,Tn(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Os(r,r===lt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(lt._ts&&(gf(lt,Do(i,lt)),pf=en.frame),en.frame>=Hu){Hu+=nn.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&nn.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},e})(Fs);xn(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});var By=function(e,t,n,i,s,r,o){var l=new Yt(this._pt,e,t,0,1,Gf,null,s),c=0,u=0,h,f,p,g,d,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Cr(i)),r&&(M=[n,i],r(M,e,t),n=M[0],i=M[1]),f=n.match(Ra)||[];h=Ra.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?bs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ra.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(cf.test(i)||_)&&(l.e=0),this._pt=l,l},Hl=function(e,t,n,i,s,r,o,l,c,u){dt(i)&&(i=i(s||0,e,r));var h=e[t],f=n!=="get"?n:dt(h)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=dt(h)?c?Xy:Bf:Xl,g;if(At(i)&&(~i.indexOf("random(")&&(i=Cr(i)),i.charAt(1)==="="&&(g=bs(f,i)+(It(f)||0),(g||g===0)&&(i=g))),!u||f!==i||fl)return!isNaN(f*i)&&i!==""?(g=new Yt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?jy:Vf,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&kl(t,i),By.call(this,e,t,f,i,p,l||nn.stringFilter,c))},Vy=function(e,t,n,i,s){if(dt(e)&&(e=pr(e,s,t,n,i)),!Pn(e)||e.style&&e.nodeType||Ft(e)||af(e))return At(e)?pr(e,s,t,n,i):e;var r={},o;for(o in e)r[o]=pr(e[o],s,t,n,i);return r},zf=function(e,t,n,i,s,r){var o,l,c,u;if(Qt[e]&&(o=new Qt[e]).init(s,o.rawVars?t[e]:Vy(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new Yt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==gs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},li,fl,Wl=function a(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,M=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:M,y=e._overwrite==="auto"&&!Fl,T=e.timeline,A,v,S,R,N,j,I,D,z,H,q,k,ne;if(T&&(!g||!s)&&(s="none"),e._ease=Ui(s,Ds.ease),e._yEase=p?If(Ui(p===!0?s:p,Ds.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(D=M[0]?Fi(M[0]).harness:0,k=D&&i[D.prop],A=Ro(i,Bl),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&m?Mo:py),_._lazy=0),r){if(mi(e._startAt=vt.set(M,xn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&qt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt||!o&&!d)&&e._startAt.revert(Mo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(o=!1),S=xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&qt(l),immediateRender:o,stagger:0,parent:x},A),k&&(S[D.prop]=k),mi(e._startAt=vt.set(M,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt?e._startAt.revert(Mo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&qt(l)||l&&!m,v=0;v<M.length;v++){if(N=M[v],I=N._gsap||Gl(M)[v]._gsap,e._ptLookup[v]=H={},ol[I.id]&&fi.length&&Po(),q=b===M?v:b.indexOf(N),D&&(z=new D).init(N,k||A,e,q,b)!==!1&&(e._pt=R=new Yt(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(W){H[W]=R}),z.priority&&(j=1)),!D||k)for(S in A)Qt[S]&&(z=zf(S,A,e,q,N,b))?z.priority&&(j=1):H[S]=R=Hl.call(e,N,S,"get",A[S],q,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(N,e._op[v]),y&&e._pt&&(li=e,lt.killTweensOf(N,H,e.globalTime(t)),ne=!e.parent,li=0),e._pt&&l&&(ol[I.id]=1)}j&&Hf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,g&&t<=0&&T.render(dn,!0,!0)},Gy=function(e,t,n,i,s,r,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return fl=1,e.vars[t]="+=0",Wl(e,o),fl=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,u.e&&(u.e=mt(n)+It(u.e)),u.b&&(u.b=c.s+It(u.b))},Hy=function(e,t){var n=e[0]?Fi(e[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return t;s=Wi({},t);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},Wy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,o;if(Ft(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},pr=function(e,t,n,i,s){return dt(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Cr(e):e},Uf=Vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kf={};jt(Uf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return kf[a]=1});var vt=(function(a){sf(e,a);function e(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:fr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||lt,x=(Ft(n)||af(n)?Zn(n[0]):"length"in i)?[n]:pn(n),b,y,T,A,v,S,R,N;if(o._targets=x.length?Gl(x):Lo("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||go(c)||go(u)){if(i=o.vars,b=o.timeline=new Xt({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:x}),b.kill(),b.parent=b._dp=Vn(o),b._start=0,f||go(c)||go(u)){if(A=x.length,R=f&&Tf(f),Pn(f))for(v in f)~Uf.indexOf(v)&&(N||(N={}),N[v]=f[v]);for(y=0;y<A;y++)T=Ro(i,kf),T.stagger=0,_&&(T.yoyoEase=_),N&&Wi(T,N),S=x[y],T.duration=+pr(c,Vn(o),y,S,x),T.delay=(+pr(u,Vn(o),y,S,x)||0)-o._delay,!f&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),b.to(S,T,R?R(y,S,x):0),b._ease=Ye.none;b.duration()?c=u=0:o.timeline=0}else if(g){fr(xn(b.vars.defaults,{ease:"none"})),b._ease=Ui(g.ease||i.ease||"none");var j=0,I,D,z;if(Ft(g))g.forEach(function(H){return b.to(x,H,">")}),b.duration();else{T={};for(v in g)v==="ease"||v==="easeEach"||Wy(v,g[v],T,g.easeEach);for(v in T)for(I=T[v].sort(function(H,q){return H.t-q.t}),j=0,y=0;y<I.length;y++)D=I[y],z={ease:D.e,duration:(D.t-(y?I[y-1].t:0))/100*c},z[v]=D.v,b.to(x,z,j),j+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return p===!0&&!Fl&&(li=Vn(o),lt.killTweensOf(x),li=0),Tn(M,Vn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Lt(M._time)&&qt(h)&&yy(Vn(o))&&M.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),m&&bf(Vn(o),m),o}var t=e.prototype;return t.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-st&&!u?l:i<st?0:i,f,p,g,d,m,_,M,x,b;if(!c)My(this,i,s,r);else if(h!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,r);if(f=Lt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,f=c-f),m=Is(this._tTime,d),f===o&&!r&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Of(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=r=1,this.render(Lt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Mf(this,u?i:f,r,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!s&&(mn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!f&&_?-st:x._dur*x._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&al(this,i,s,r),mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&al(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&mi(this,1),!s&&!(u&&!o)&&(h||o||_)&&(mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,o){Lr||en.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wl(this,l),c=this._ease(l/this._dur),Gy(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(Ho(this,0),this.parent||vf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?or(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,li&&li.vars.overwrite!==!0)._first||or(this),this.parent&&r!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?pn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&xy(o,l))return s==="all"&&(this._pt=0),or(this);for(h=this._op=this._op||[],s!=="all"&&(At(s)&&(d={},jt(s,function(M){return d[M]=1}),s=d),s=Hy(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Vo(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&or(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return dr(1,arguments)},e.delayedCall=function(i,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(i,s,r){return dr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return lt.killTweensOf(i,s,r)},e})(Fs);xn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(a){vt[a]=function(){var e=new Xt,t=cl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Xl=function(e,t,n){return e[t]=n},Bf=function(e,t,n){return e[t](n)},Xy=function(e,t,n,i){return e[t](i.fp,n)},qy=function(e,t,n){return e.setAttribute(t,n)},ql=function(e,t){return dt(e[t])?Bf:zl(e[t])&&e.setAttribute?qy:Xl},Vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Yy=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},Ky=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Vo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Zy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Hf=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},Yt=(function(){function a(t,n,i,s,r,o,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Vf,this.d=l||this,this.set=c||Xl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Zy,this.m=n,this.mt=s,this.tween=i},a})();jt(Vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Bl[a]=1});sn.TweenMax=sn.TweenLite=vt;sn.TimelineLite=sn.TimelineMax=Xt;lt=new Xt({sortChildren:!1,defaults:Ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Df;var zs=[],wo={},Jy=[],Ku=0,Fa=function(e){return(wo[e]||Jy).map(function(t){return t()})},dl=function(){var e=Date.now(),t=[];e-Ku>2&&(Fa("matchMediaInit"),zs.forEach(function(n){var i=n.queries,s=n.conditions,r,o,l,c;for(o in i)r=un.matchMedia(i[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&t.push(n))}),Fa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ku=e,Fa("matchMedia"))},Wf=(function(){function a(t,n){this.selector=n&&ul(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,s){dt(n)&&(s=i,i=n,n=dt);var r=this,o=function(){var c=_t,u=r.selector,h;return c&&c!==r&&c.data.push(r),s&&(r.selector=ul(s)),_t=r,h=i.apply(r,arguments),dt(h)&&r._r.push(h),_t=c,r.selector=u,r.isReverted=!1,h};return r.last=o,n===dt?o(r):n?r[n]=o:o},e.ignore=function(n){var i=_t;_t=null,n(this),_t=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Fs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=zs.indexOf(this);~o&&zs.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a})(),$y=(function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,s){Pn(n)||(n={matches:n});var r=new Wf(0,s||this.scope),o=r.conditions={},l,c,u;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(l=un.matchMedia(n[c]),l&&(zs.indexOf(r)<0&&zs.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(dl):l.addEventListener("change",dl)));return u&&i(r),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),Io={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Iy(i)})},timeline:function(e){return new Xt(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=pn(e)[0]);var s=Fi(e||{}).get,r=n?xf:_f;return n==="native"&&(n=""),e&&(t?r((Qt[t]&&Qt[t].get||s)(e,t,n,i)):function(o,l,c){return r((Qt[o]&&Qt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pn(e),e.length>1){var i=e.map(function(u){return rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Qt[t],o=Fi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(u){var h=new r;gs._pt=0,h.init(e,n?u+n:u,gs,0,[e]),h.render(1,h),gs._pt&&jl(1,gs)}:o.set(e,l);return r?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=rn.to(e,Wi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,u){return s.resetTo(t,l,c,u)};return r.tween=s,r},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ui(e.ease,Ds.ease)),Wu(Ds,e||{})},config:function(e){return Wu(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qt[o]&&!sn[o]&&Lo(t+" effect requires "+o+" plugin.")}),Da[t]=function(o,l,c){return n(pn(o),xn(l||{},s),c)},r&&(Xt.prototype[t]=function(o,l,c){return this.add(Da[t](o,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=Ui(t)},parseEase:function(e,t){return arguments.length?Ui(e,t):Ye},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xt(e),i,s;for(n.smoothChildTiming=qt(e.smoothChildTiming),lt.remove(n),n._dp=0,n._time=n._tTime=lt._time,i=lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Tn(n,i,i._start-i._delay),i=s;return Tn(lt,n,0),n},context:function(e,t){return e?new Wf(e,t):_t},matchMedia:function(e){return new $y(e)},matchMediaRefresh:function(){return zs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||dl()},addEventListener:function(e,t){var n=wo[e]||(wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Py,wrapYoyo:Ry,distribute:Tf,random:Af,snap:Ef,normalize:Ly,getUnit:It,clamp:Ty,splitColor:Pf,toArray:pn,selector:ul,mapRange:Lf,pipe:Ay,unitize:Cy,interpolate:Dy,shuffle:wf},install:ff,effects:Da,ticker:en,updateRoot:Xt.updateRoot,plugins:Qt,globalTimeline:lt,core:{PropTween:Yt,globals:df,Tween:vt,Timeline:Xt,Animation:Fs,getCache:Fi,_removeLinkedListItem:Vo,reverting:function(){return Nt},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Fl=e}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Io[a]=vt[a]});en.add(Xt.updateRoot);gs=Io.to({},{duration:0});var Qy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eb=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=Qy(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},za=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(At(s)&&(l={},jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}eb(o,s)}}}},rn=Io.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,o,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(l||0)+"",t[r],i,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Nt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},za("roundProps",hl),za("modifiers"),za("snap",Ef))||Io;vt.version=Xt.version=rn.version="3.11.4";hf=1;of()&&Ns();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zu,ci,Ms,Yl,Di,Ju,Kl,tb=function(){return typeof window<"u"},Jn={},Li=180/Math.PI,Ss=Math.PI/180,hs=Math.atan2,$u=1e8,Zl=/([A-Z])/g,nb=/(left|right|width|margin|padding|x)/i,ib=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ob=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ab=function(e,t,n){return e.style[t]=n},lb=function(e,t,n){return e.style.setProperty(t,n)},cb=function(e,t,n){return e._gsap[t]=n},ub=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hb=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},fb=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},ht="transform",Sn=ht+"Origin",db=function(e,t){var n=this,i=this.target,s=i.style;if(e in Jn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return n.tfm[r]=Gn(i,r)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Gn(i,e)),this.props.indexOf(ht)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},jf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Zl,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Kl(),s&&!s.isStart&&!n[ht]&&(jf(n),i.uncache=1)}},Yf=function(e,t){var n={target:e,props:[],revert:pb,save:db};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Kf,ml=function(e,t){var n=ci.createElementNS?ci.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ci.createElement(e);return n.style?n:ci.createElement(e)},Cn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Us(t)||t,1)||""},Qu="O,Moz,ms,Ms,Webkit".split(","),Us=function(e,t,n){var i=t||Di,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Qu[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Qu[r]:"")+e},gl=function(){tb()&&window.document&&(Zu=window,ci=Zu.document,Ms=ci.documentElement,Di=ml("div")||{style:{}},ml("div"),ht=Us(ht),Sn=ht+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kf=!!Us("perspective"),Kl=rn.core.reverting,Yl=1)},Ua=function a(e){var t=ml("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Ms.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ms.removeChild(t),this.style.cssText=s,r},eh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Zf=function(e){var t;try{t=e.getBBox()}catch{t=Ua.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ua||(t=Ua.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+eh(e,["x","cx","x1"])||0,y:+eh(e,["y","cy","y1"])||0,width:0,height:0}:t},Jf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zf(e))},Pr=function(e,t){if(t){var n=e.style;t in Jn&&t!==Sn&&(t=ht),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Zl,"-$1").toLowerCase())):n.removeAttribute(t)}},ui=function(e,t,n,i,s,r){var o=new Yt(e._pt,t,n,0,1,r?qf:Xf);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},th={deg:1,rad:1,turn:1},mb={grid:1,flex:1},gi=function a(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Di.style,l=nb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,_;return i===r||!s||th[i]||th[r]?s:(r!=="px"&&!f&&(s=a(e,t,n,"px")),_=e.getCTM&&Jf(e),(p||r==="%")&&(Jn[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],mt(p?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?r:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===ci||!d.appendChild)&&(d=ci.body),m=d._gsap,m&&p&&m.width&&l&&m.time===en.time&&!m.uncache?mt(s/m.width*h):((p||r==="%")&&!mb[Cn(d,"display")]&&(o.position=Cn(e,"position")),d===e&&(o.position="static"),d.appendChild(Di),g=Di[u],d.removeChild(Di),o.position="absolute",l&&p&&(m=Fi(d),m.time=en.time,m.width=d[u]),mt(f?g*s/h:g&&s?h/g*s:0))))},Gn=function(e,t,n,i){var s;return Yl||gl(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jn[t]&&t!=="transform"?(s=Dr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:No(Cn(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Oo[t]&&Oo[t](e,t,n)||Cn(e,t)||mf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gi(e,t,s,n)+n:s},gb=function(e,t,n,i){if(!n||n==="none"){var s=Us(t,e,1),r=s&&Cn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Cn(e,"borderTopColor"))}var o=new Yt(this._pt,e.style,t,0,1,Gf),l=0,c=0,u,h,f,p,g,d,m,_,M,x,b,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Cn(e,t)||i,e.style[t]=n),u=[n,i],Df(u),n=u[0],i=u[1],f=n.match(ms)||[],y=i.match(ms)||[],y.length){for(;h=ms.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,b=d.substr((p+"").length),m.charAt(1)==="="&&(m=bs(p,m)+b),_=parseFloat(m),x=m.substr((_+"").length),l=ms.lastIndex-x.length,x||(x=x||nn.units[t]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(p=gi(e,t,d,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?qf:Xf;return cf.test(i)&&(o.e=0),this._pt=o,o},nh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_b=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=nh[n]||n,t[1]=nh[i]||i,t.join(" ")},xb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Jn[o]&&(l=1,o=o==="transformOrigin"?Sn:ht),Pr(n,o);l&&(Pr(n,ht),r&&(r.svg&&n.removeAttribute("transform"),Dr(n,1),r.uncache=1,jf(i)))}},Oo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new Yt(e._pt,t,n,0,0,xb);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Rr=[1,0,0,1,0,0],$f={},Qf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ih=function(e){var t=Cn(e,ht);return Qf(t)?Rr:t.substr(7).match(lf).map(mt)},Jl=function(e,t){var n=e._gsap||Fi(e),i=e.style,s=ih(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Rr:s):(s===Rr&&!e.offsetParent&&e!==Ms&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ms.appendChild(e)),s=ih(e),l?i.display=l:Pr(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):Ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},_l=function(e,t,n,i,s,r){var o=e._gsap,l=s||Jl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],M=l[5],x=t.split(" "),b=parseFloat(x[0])||0,y=parseFloat(x[1])||0,T,A,v,S;n?l!==Rr&&(A=p*m-g*d)&&(v=b*(m/A)+y*(-d/A)+(d*M-m*_)/A,S=b*(-g/A)+y*(p/A)-(p*M-g*_)/A,b=v,y=S):(T=Zf(e),b=T.x+(~x[0].indexOf("%")?b/100*T.width:b),y=T.y+(~(x[1]||x[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&o.smooth?(_=b-c,M=y-u,o.xOffset=h+(_*p+M*d)-_,o.yOffset=f+(_*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Sn]="0px 0px",r&&(ui(r,o,"xOrigin",c,b),ui(r,o,"yOrigin",u,y),ui(r,o,"xOffset",h,o.xOffset),ui(r,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},Dr=function(e,t){var n=e._gsap||new Ff(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(e),c=Cn(e,Sn)||"0",u,h,f,p,g,d,m,_,M,x,b,y,T,A,v,S,R,N,j,I,D,z,H,q,k,ne,W,V,G,te,ie,ue;return u=h=f=d=m=_=M=x=b=0,p=g=1,n.svg=!!(e.getCTM&&Jf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),i.scale=i.rotate=i.translate="none"),A=Jl(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),_l(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,T=n.yOrigin||0,A!==Rr&&(N=A[0],j=A[1],I=A[2],D=A[3],u=z=A[4],h=H=A[5],A.length===6?(p=Math.sqrt(N*N+j*j),g=Math.sqrt(D*D+I*I),d=N||j?hs(j,N)*Li:0,M=I||D?hs(I,D)*Li+d:0,M&&(g*=Math.abs(Math.cos(M*Ss))),n.svg&&(u-=y-(y*N+T*I),h-=T-(y*j+T*D))):(ue=A[6],te=A[7],W=A[8],V=A[9],G=A[10],ie=A[11],u=A[12],h=A[13],f=A[14],v=hs(ue,G),m=v*Li,v&&(S=Math.cos(-v),R=Math.sin(-v),q=z*S+W*R,k=H*S+V*R,ne=ue*S+G*R,W=z*-R+W*S,V=H*-R+V*S,G=ue*-R+G*S,ie=te*-R+ie*S,z=q,H=k,ue=ne),v=hs(-I,G),_=v*Li,v&&(S=Math.cos(-v),R=Math.sin(-v),q=N*S-W*R,k=j*S-V*R,ne=I*S-G*R,ie=D*R+ie*S,N=q,j=k,I=ne),v=hs(j,N),d=v*Li,v&&(S=Math.cos(v),R=Math.sin(v),q=N*S+j*R,k=z*S+H*R,j=j*S-N*R,H=H*S-z*R,N=q,z=k),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=mt(Math.sqrt(N*N+j*j+I*I)),g=mt(Math.sqrt(H*H+ue*ue)),v=hs(z,H),M=Math.abs(v)>2e-4?v*Li:0,b=ie?1/(ie<0?-ie:ie):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qf(Cn(e,ht)),q&&e.setAttribute("transform",q))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=mt(p),n.scaleY=mt(g),n.rotation=mt(d)+o,n.rotationX=mt(m)+o,n.rotationY=mt(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Sn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?yb:Kf?ed:vb,n.uncache=0,n},No=function(e){return(e=e.split(" "))[0]+" "+e[1]},ka=function(e,t,n){var i=It(t);return mt(parseFloat(t)+parseFloat(gi(e,"x",n+"px",i)))+i},vb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ed(e,t)},Ti="0deg",nr="0px",Ei=") ",ed=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,b="",y=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Ti||u!==Ti)){var T=parseFloat(u)*Ss,A=Math.sin(T),v=Math.cos(T),S;T=parseFloat(h)*Ss,S=Math.cos(T),r=ka(M,r,A*S*-x),o=ka(M,o,-Math.sin(T)*-x),l=ka(M,l,v*S*-x+x)}m!==nr&&(b+="perspective("+m+Ei),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(y||r!==nr||o!==nr||l!==nr)&&(b+=l!==nr||y?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Ei),c!==Ti&&(b+="rotate("+c+Ei),u!==Ti&&(b+="rotateY("+u+Ei),h!==Ti&&(b+="rotateX("+h+Ei),(f!==Ti||p!==Ti)&&(b+="skew("+f+", "+p+Ei),(g!==1||d!==1)&&(b+="scale("+g+", "+d+Ei),M.style[ht]=b||"translate(0, 0)"},yb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(r),b=parseFloat(o),y,T,A,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ss,c*=Ss,y=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Ss,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,T*=S)),y=mt(y),T=mt(T),A=mt(A),v=mt(v)):(y=h,v=f,T=A=0),(x&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=gi(p,"x",r,"px"),b=gi(p,"y",o,"px")),(g||d||m||_)&&(x=mt(x+g-(g*y+d*A)+m),b=mt(b+d-(g*T+d*v)+_)),(i||s)&&(S=p.getBBox(),x=mt(x+i/100*S.width),b=mt(b+s/100*S.height)),S="matrix("+y+","+T+","+A+","+v+","+x+","+b+")",p.setAttribute("transform",S),M&&(p.style[ht]=S)},bb=function(e,t,n,i,s){var r=360,o=At(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Li:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),h==="cw"&&c<0?c=(c+r*$u)%r-~~(c/r)*r:h==="ccw"&&c>0&&(c=(c-r*$u)%r-~~(c/r)*r)),e._pt=f=new Yt(e._pt,t,n,i,c,sb),f.e=u,f.u="deg",e._props.push(n),f},sh=function(e,t){for(var n in t)e[n]=t[n];return e},Mb=function(e,t,n){var i=sh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[ht]=t,o=Dr(n,1),Pr(n,ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ht],r[ht]=t,o=Dr(n,1),r[ht]=c);for(l in Jn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=It(c),g=It(u),h=p!==g?gi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Yt(e._pt,o,l,h,f-h,pl),e._pt.u=g||0,e._props.push(l));sh(o,i)};jt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?a+o:"border"+o+a});Oo[e>1?"border"+a:a]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=r.map(function(g){return Gn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},r.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,p,h)}});var td={name:"css",register:gl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,M,x,b,y,T,A,v;Yl||gl(),this.styles=this.styles||Yf(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Qt[d]&&zf(d,t,n,i,e,s)))){if(p=typeof u,g=Oo[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Cr(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",di.lastIndex=0,di.test(c)||(m=It(c),_=It(u)),_?m!==_&&(c=gi(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,d),r.push(d),v.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],At(c)&&~c.indexOf("random(")&&(c=Cr(c)),It(c+"")||(c+=nn.units[d]||It(Gn(e,d))||""),(c+"").charAt(1)==="="&&(c=Gn(e,d))):c=Gn(e,d),f=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in jn&&(d==="autoAlpha"&&(f===1&&Gn(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),ui(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=jn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Jn,x){if(this.styles.save(d),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||Dr(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new Yt(this._pt,o,ht,0,1,y.renderTransform,y,0,-1),b.dep=1),d==="scale")this._pt=new Yt(this._pt,y,"scaleY",y.scaleY,(M?bs(y.scaleY,M+h):h)-y.scaleY||0,pl),this._pt.u=0,r.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(Sn,0,o[Sn]),u=_b(u),y.svg?_l(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&ui(this,y,"zOrigin",y.zOrigin,_),ui(this,o,d,No(c),No(u)));continue}else if(d==="svgOrigin"){_l(e,u,1,T,0,this);continue}else if(d in $f){bb(this,y,d,f,M?bs(f,M+u):u);continue}else if(d==="smoothOrigin"){ui(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){Mb(this,u,e);continue}}else d in o||(d=Us(d)||d);if(x||(h||h===0)&&(f||f===0)&&!ib.test(u)&&d in o)m=(c+"").substr((f+"").length),h||(h=0),_=It(u)||(d in nn.units?nn.units[d]:m),m!==_&&(f=gi(e,d,c,_)),this._pt=new Yt(this._pt,x?y:o,d,f,(M?bs(f,M+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?ob:pl),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=rb);else if(d in o)gb.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,s);else if(d!=="parseTransform"){kl(d,u);continue}x||(d in o?v.push(d,0,o[d]):v.push(d,1,c||e[d])),r.push(d)}}A&&Hf(this)},render:function(e,t){if(t.tween._time||!Kl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gn,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in Jn&&t!==Sn&&(e._gsap.x||Gn(e,"x"))?n&&Ju===n?t==="scale"?ub:cb:(Ju=n||{})&&(t==="scale"?hb:fb):e.style&&!zl(e.style[t])?ab:~t.indexOf("-")?lb:ql(e,t)},core:{_removeProperty:Pr,_getMatrix:Jl}};rn.utils.checkPrefix=Us;rn.core.getStyleSaver=Yf;(function(a,e,t,n){var i=jt(a+","+e+","+t,function(s){Jn[s]=1});jt(e,function(s){nn.units[s]="deg",$f[s]=1}),jn[i[13]]=a+","+e,jt(n,function(s){var r=s.split(":");jn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){nn.units[a]="px"});rn.registerPlugin(td);var oi=rn.registerPlugin(td)||rn;oi.core.Tween;class Sb extends ji{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new Er(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new wb(e)}}class wb{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Tb(e,t,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function Tb(a,e,t){const n=Array.from(a),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,r=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=s;else{const h=Eb(u,i,o,l,t);o+=h.offsetX,r.push(h.path)}}return r}function Eb(a,e,t,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new Tv;let o,l,c,u,h,f,p,g;if(s.o){const d=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,_=d.length;m<_;)switch(d[m++]){case"m":o=d[m++]*e+t,l=d[m++]*e+n,r.moveTo(o,l);break;case"l":o=d[m++]*e+t,l=d[m++]*e+n,r.lineTo(o,l);break;case"q":c=d[m++]*e+t,u=d[m++]*e+n,h=d[m++]*e+t,f=d[m++]*e+n,r.quadraticCurveTo(h,f,c,u);break;case"b":c=d[m++]*e+t,u=d[m++]*e+n,h=d[m++]*e+t,f=d[m++]*e+n,p=d[m++]*e+t,g=d[m++]*e+n,r.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:r}}class rh extends Rl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class Ab{constructor(e){this.group=new fn,this.group.name="CursiveNeonTextMasterGroup",this.floatGroup=new fn,this.floatGroup.name="CursiveNeonTextFloatGroup",this.group.add(this.floatGroup),this.onLoaded=e,this.textMaterial=new Wn({color:3718648,emissive:165063,emissiveIntensity:6,roughness:.1,metalness:.95,envMapIntensity:2,transparent:!0,opacity:1}),this.buildText()}buildText(){new Sb().load("/fonts/GreatVibes_Regular.json",t=>{const n=new rh("Hi, I am",{font:t,size:.52,height:.06,curveSegments:16,bevelEnabled:!0,bevelThickness:.018,bevelSize:.012,bevelSegments:5});n.center();const i=new yt(n,this.textMaterial);i.position.set(-.25,.42,0),i.rotation.z=.03,this.floatGroup.add(i);const s=new rh("Venkat Koppula",{font:t,size:.65,height:.07,curveSegments:16,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:5});s.center();const r=new yt(s,this.textMaterial);r.position.set(.1,-.38,0),r.rotation.z=-.02,this.floatGroup.add(r),this.onLoaded&&this.onLoaded()})}}function oh(){const a=document.createElement("canvas");a.width=64,a.height=64;const e=a.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,64,64);const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.35,"rgba(200, 240, 255, 1.0)"),t.addColorStop(.7,"rgba(100, 160, 255, 0.5)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=e.createLinearGradient(0,32,64,32);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(8,32),e.lineTo(56,32),e.stroke();let i=e.createLinearGradient(32,0,32,64);return i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.moveTo(32,8),e.lineTo(32,56),e.stroke(),new yr(a)}function ah(a,e){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,2048,2048);const i=n.createRadialGradient(1024,1024,40,1024,1024,960);i.addColorStop(0,a),i.addColorStop(.35,e),i.addColorStop(.7,"rgba(0,0,0,0.02)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,2048,2048),n.globalCompositeOperation="screen";for(let r=0;r<24;r++){const o=300+Math.random()*1448,l=300+Math.random()*1448,c=160+Math.random()*440,u=n.createRadialGradient(o,l,8,o,l,c);u.addColorStop(0,"rgba(75, 40, 130, 0.08)"),u.addColorStop(.5,"rgba(50, 20, 90, 0.04)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}return new yr(t)}const _o={vertex:`
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
      
      gl_PointSize = uSize * (650.0 / -mvPosition.z) * (0.6 + 0.4 * vBrightness);
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
  `};class Cb{constructor(e){this.scene=e,this.group=new fn,this.group.name="SpaceCosmosGroup",this.buildStarfield(),this.buildNebulaClouds(),this.scene.add(this.group)}buildStarfield(){this.randomStarCount=3e3;const i=new Float32Array(this.randomStarCount*3),s=new Float32Array(this.randomStarCount),r=new Float32Array(this.randomStarCount);for(let l=0;l<this.randomStarCount;l++){const c=Math.random(),u=Math.random(),h=c*2*Math.PI,f=Math.acos(2*u-1),p=380+Math.random()*320;i[l*3]=37.5+p*Math.sin(f)*Math.cos(h),i[l*3+1]=0+p*Math.sin(f)*Math.sin(h),i[l*3+2]=0+p*Math.cos(f),s[l]=Math.random()*Math.PI*2,r[l]=.12+Math.random()*.38}const o=new Rt;o.setAttribute("position",new ct(i,3)),o.setAttribute("aPhase",new ct(s,1)),o.setAttribute("aSpeed",new ct(r,1)),this.starMat=new Pt({vertexShader:_o.vertex,fragmentShader:_o.fragment,uniforms:{uTime:{value:0},uSize:{value:2.2},uTexture:{value:oh()},uColor:{value:new De(16777215)},uOpacity:{value:.95}},transparent:!0,blending:Xn,depthWrite:!1}),this.stars=new Za(o,this.starMat),this.group.add(this.stars),this.buildRandomStarClusters(37.5,0,0)}buildRandomStarClusters(e,t,n){this.clusterStarTotal=3e3;const i=Math.floor(Math.random()*4)+6,s=Math.floor(this.clusterStarTotal/i),r=new Float32Array(this.clusterStarTotal*3),o=new Float32Array(this.clusterStarTotal),l=new Float32Array(this.clusterStarTotal);let c=0;for(let h=0;h<i;h++){const f=Math.random(),p=Math.random(),g=f*2*Math.PI,d=Math.acos(2*p-1),m=380+Math.random()*260,_=e+m*Math.sin(d)*Math.cos(g),M=t+m*Math.sin(d)*Math.sin(g),x=n+m*Math.cos(d),b=90+Math.random()*110,y=h===i-1?this.clusterStarTotal-c:s;for(let T=0;T<y;T++){const A=Math.pow(Math.random(),1.4)*b,v=Math.random()*Math.PI*2,S=Math.acos(2*Math.random()-1);r[c*3]=_+A*Math.sin(S)*Math.cos(v),r[c*3+1]=M+A*Math.sin(S)*Math.sin(v),r[c*3+2]=x+A*Math.cos(S),o[c]=Math.random()*Math.PI*2,l[c]=.1+Math.random()*.35,c++}}const u=new Rt;u.setAttribute("position",new ct(r,3)),u.setAttribute("aPhase",new ct(o,1)),u.setAttribute("aSpeed",new ct(l,1)),this.clusterMat=new Pt({vertexShader:_o.vertex,fragmentShader:_o.fragment,uniforms:{uTime:{value:0},uSize:{value:2.2},uTexture:{value:oh()},uColor:{value:new De(14742270)},uOpacity:{value:1}},transparent:!0,blending:Xn,depthWrite:!1}),this.clusterStars=new Za(u,this.clusterMat),this.group.add(this.clusterStars)}buildNebulaClouds(){this.nebulaOpacity=.3,this.nebMat1=new En({map:ah("rgba(20, 100, 240, 0.32)","rgba(5, 12, 40, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:Xn,side:Kn}),this.nebMat2=new En({map:ah("rgba(140, 40, 180, 0.28)","rgba(12, 3, 24, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:Xn,side:Kn});const e=new Vs(900,500);this.nebulaCount=6,this.nebulaMeshes=[],this.nebulaSettings=[],[{x:37.5,y:80,z:450,mat:this.nebMat1},{x:-350,y:140,z:300,mat:this.nebMat2},{x:400,y:-120,z:250,mat:this.nebMat1},{x:0,y:-200,z:-350,mat:this.nebMat2},{x:-250,y:-100,z:400,mat:this.nebMat1},{x:300,y:200,z:-250,mat:this.nebMat2}].forEach(n=>{const i=new yt(e,n.mat);i.position.set(n.x,n.y,n.z),i.rotation.y=(Math.random()-.5)*.5,this.group.add(i),this.nebulaMeshes.push(i),this.nebulaSettings.push({rotSpeed:.004+Math.random()*.008,rotDir:Math.random()<.5?1:-1,yBase:n.y,xBase:n.x,driftFreqX:.2+Math.random()*.2,driftAmpX:15+Math.random()*15,driftFreqY:.15+Math.random()*.15,driftAmpY:8+Math.random()*8})})}update(e){this.starMat&&this.starMat.uniforms.uTime&&(this.starMat.uniforms.uTime.value=e),this.clusterMat&&this.clusterMat.uniforms.uTime&&(this.clusterMat.uniforms.uTime.value=e),this.stars&&(this.stars.rotation.y=e*.003,this.stars.rotation.x=Math.sin(e*.002)*.007),this.clusterStars&&(this.clusterStars.rotation.y=e*3e-5,this.clusterStars.rotation.z=Math.cos(e*7e-5)*3e-5),this.nebulaMeshes&&this.nebulaMeshes.forEach((t,n)=>{const i=this.nebulaSettings[n];t.rotation.z+=i.rotSpeed*i.rotDir*.08,t.position.y=i.yBase+Math.sin(e*i.driftFreqY)*i.driftAmpY,t.position.x=i.xBase+Math.cos(e*i.driftFreqX)*i.driftAmpX})}}const Ba=new WeakMap;class Lb extends ji{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Er(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ba.has(e)){const l=Ba.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ba.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Rt;e.index&&t.setIndex(new ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize;t.setAttribute(s,new ct(r,o))}return t}_loadLibrary(e,t){const n=new Er(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Pb.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Pb(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(u){a.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder,p=new h.DecoderBuffer;p.Init(new Int8Array(l),l.byteLength);try{const g=t(h,f,p,c),d=g.attributes.map(m=>m.array.buffer);g.index&&d.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},d)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{h.destroy(p),h.destroy(f)}});break}};function t(r,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,p;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)f=new r.Mesh,p=o.DecodeBufferToMesh(l,f);else if(g===r.POINT_CLOUD)f=new r.PointCloud,p=o.DecodeBufferToPointCloud(l,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const d={index:null,attributes:[]};for(const m in u){const _=self[h[m]];let M,x;if(c.useUniqueIDs)x=u[m],M=o.GetAttributeByUniqueId(f,x);else{if(x=o.GetAttributeId(f,r[u[m]]),x===-1)continue;M=o.GetAttribute(f,x)}d.attributes.push(i(r,o,f,m,_,M))}return g===r.TRIANGULAR_MESH&&(d.index=n(r,o,f)),r.destroy(f),d}function n(r,o,l){const u=l.num_faces()*3,h=u*4,f=r._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const p=new Uint32Array(r.HEAPF32.buffer,f,u).slice();return r._free(f),{array:p,itemSize:1}}function i(r,o,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,d=g*u.BYTES_PER_ELEMENT,m=s(r,u),_=r._malloc(d);o.GetAttributeDataArrayForAllPoints(l,h,m,d,_);const M=new u(r.HEAPF32.buffer,_,g).slice();return r._free(_),{name:c,array:M,itemSize:f}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class Rb{constructor(e="/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",t=null,n=null){this.group=new fn,this.group.name="VenkatAvatarGroup",this.model=null,this.mixer=null,this.modelLoaded=!1,this.loadModel(e,t,n)}loadModel(e,t,n=null){const i=new Lb(n);i.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const s=new $h(n);s.setDRACOLoader(i),s.load(e,r=>{this.model=r.scene,this.model.name="VenkyAvatarModel",this.model.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.group.add(this.model),this.modelLoaded=!0,console.log("[TechAvatar] Loaded Draco-compressed GLB model from:",e),t&&t(this.model,r)},r=>{if(r.lengthComputable){const o=Math.round(r.loaded/r.total*100);console.log(`[TechAvatar] Loading model: ${o}%`)}},r=>{console.error("[TechAvatar] Error loading Draco GLB model:",r)})}setSkinColor(e){this.model&&this.model.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{const s=(i.name||"").toLowerCase(),r=(t.name||"").toLowerCase();(s.includes("skin")||s.includes("head")||s.includes("face")||r.includes("head")||r.includes("face")||r.includes("skin"))&&i.color.set(e)})})}setMaterialColor(e,t){if(!this.model)return;const n=e.toLowerCase();this.model.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{const o=(r.name||"").toLowerCase(),l=(i.name||"").toLowerCase();(o.includes(n)||l.includes(n))&&r.color.set(t)})})}update(e){this.mixer&&e&&this.mixer.update(e)}}function Db(a){return new Pt({uniforms:{uTime:{value:0},uTexture:{value:a},uOpacity:{value:0},uColor:{value:new De(3718648)},uHoverTarget:{value:0},uHoverBrightness:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Kn,blending:Xn})}function Ib(){return new Pt({uniforms:{uTime:{value:0},uOpacity:{value:0},uBeamOpacity:{value:.28},uRayDensity:{value:60},uRaySpeed:{value:.4},uColor:{value:new De(3718648)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:Kn,blending:Xn})}class Ob{constructor(){this.group=new fn,this.group.name="HologramScreenGroup",this.canvasWidth=1024,this.canvasHeight=512,this.hoverTarget=0,this.opacity=0,this.isVisible=!1,this.initCanvas(),this.texture=new yr(this.canvas),this.texture.colorSpace=$t,this.hologramMat=Db(this.texture),this.beamMat=Ib();const e=new Vs(16,8.5);this.screenMesh=new yt(e,this.hologramMat),this.screenMesh.name="HologramScreenPlane",this.group.add(this.screenMesh),this.createFrameAccents(),this.createProjectorBeam(),this.renderCanvasUI(),document.fonts&&document.fonts.ready.then(()=>{this.renderCanvasUI()})}initCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d")}renderCanvasUI(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=this.hoverBrightness!==void 0?this.hoverBrightness:1;e.clearRect(0,0,t,n),e.fillStyle="rgba(2, 6, 23, 0.55)",e.fillRect(0,0,t,n),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(10,10,t-20,n-20),e.strokeStyle="rgba(56, 189, 248, 0.4)",e.lineWidth=2,e.strokeRect(18,18,t-36,n-36),e.fillStyle="rgba(56, 189, 248, 0.12)",e.fillRect(20,20,t-40,50),e.fillStyle="#38bdf8",e.font="bold 22px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText("⚡ NAVIGATIONAL CONSOLE // CHOOSE DESTINATION ⚡",t/2,45);const s=this.hoverTarget===1;e.fillStyle="rgba(15, 23, 42, 0.65)",e.fillRect(40,90,450,350),e.strokeStyle=s?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=s?3:2,e.strokeRect(40,90,450,350),s&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round(25*i)):e.shadowBlur=0,e.fillStyle="#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET A: KOPPULA SYSTEM",265,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[PROJECTS SOLAR SYSTEM]",265,160),e.beginPath(),e.arc(265,250,24,0,Math.PI*2),e.fillStyle="#ffea00",e.fill(),e.beginPath(),e.ellipse(265,250,75,30,0,0,Math.PI*2),e.strokeStyle="#38bdf8",e.lineWidth=2,e.stroke(),e.beginPath(),e.arc(325,238,10,0,Math.PI*2),e.fillStyle="#38bdf8",e.fill(),e.beginPath(),e.ellipse(265,250,120,50,0,0,Math.PI*2),e.strokeStyle="rgba(236, 72, 153, 0.6)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.arc(170,275,12,0,Math.PI*2),e.fillStyle="#ec4899",e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("Multi-colored planet network & data-star",265,335),e.fillStyle=s?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(80,370,370,45),e.fillStyle=s?"#020617":"#38bdf8",e.font="bold 18px monospace",e.fillText(s?"▶ LOCK & WARP TO PROJECTS":"[ENTER SYSTEM]",265,392),e.shadowBlur=0;const r=this.hoverTarget===2;e.fillStyle="rgba(15, 23, 42, 0.65)",e.fillRect(534,90,450,350),e.strokeStyle=r?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=r?3:2,e.strokeRect(534,90,450,350),r&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round(25*i)):e.shadowBlur=0,e.fillStyle="#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET B: ORIGIN PLANET",759,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[ABOUT ME HOME BASE]",759,160),e.beginPath(),e.arc(759,250,45,0,Math.PI*2);const o=e.createRadialGradient(740,230,10,759,250,45);o.addColorStop(0,"#60a5fa"),o.addColorStop(.7,"#1d4ed8"),o.addColorStop(1,"#0f172a"),e.fillStyle=o,e.fill(),e.beginPath(),e.arc(759,250,52,0,Math.PI*2),e.strokeStyle="rgba(56, 189, 248, 0.7)",e.lineWidth=3,e.stroke(),e.fillStyle="#ef4444",e.beginPath(),e.arc(759,230,6,0,Math.PI*2),e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("High-fidelity Earth & personal dossier",759,335),e.fillStyle=r?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(574,370,370,45),e.fillStyle=r?"#020617":"#38bdf8",e.font="bold 18px monospace",e.fillText(r?"▶ LOCK & DE-ORBIT TO EARTH":"[DE-ORBIT TO EARTH]",759,392),e.shadowBlur=0,e.fillStyle="rgba(56, 189, 248, 0.8)",e.font="13px monospace",e.textAlign="center",e.fillText("SYSTEM STATUS: ONLINE // ENCRYPTION: 256-BIT // HOVER TO INSPECT TARGET",t/2,470),this.texture&&(this.texture.needsUpdate=!0)}createFrameAccents(){const e=new Tl({color:61695,linewidth:2,transparent:!0,opacity:0});this.lineMat=e;const t=[new P(-8.3,4.5,.01),new P(-7.5,4.5,.01),new P(-8.3,4.5,.01),new P(-8.3,3.7,.01),new P(8.3,4.5,.01),new P(7.5,4.5,.01),new P(8.3,4.5,.01),new P(8.3,3.7,.01),new P(-8.3,-4.5,.01),new P(-7.5,-4.5,.01),new P(-8.3,-4.5,.01),new P(-8.3,-3.7,.01),new P(8.3,-4.5,.01),new P(7.5,-4.5,.01),new P(8.3,-4.5,.01),new P(8.3,-3.7,.01)],n=new Rt().setFromPoints(t),i=new zh(n,e);this.group.add(i)}createProjectorBeam(){const e=new Pl(8,.5,12,32,1,!0);e.translate(0,-6,0),this.beamMesh=new yt(e,this.beamMat),this.beamMesh.rotation.x=.2,this.group.add(this.beamMesh)}setBeamTransform(e,t,n,i){this.beamMesh&&(this.beamMesh.scale.set(e,t,e),this.beamMesh.position.y=n,this.beamMesh.rotation.x=i)}setBeamProps(e,t,n){this.beamMat&&(this.beamMat.uniforms.uBeamOpacity.value=e,this.beamMat.uniforms.uRayDensity.value=t,this.beamMat.uniforms.uRaySpeed.value=n)}setHoverTarget(e){this.hoverTarget!==e&&(this.hoverTarget=e,this.hologramMat.uniforms.uHoverTarget.value=e,this.renderCanvasUI())}setHoverBrightness(e){this.hologramMat&&(this.hologramMat.uniforms.uHoverBrightness.value=e)}update(e){this.hologramMat&&(this.hologramMat.uniforms.uTime.value=e),this.beamMat&&(this.beamMat.uniforms.uTime.value=e)}fadeIn(e=1.2){this.isVisible=!0,this.group.visible=!0,oi.to(this,{opacity:1,duration:e,ease:"power2.out",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)}})}fadeOut(e=.8){oi.to(this,{opacity:0,duration:e,ease:"power2.in",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)},onComplete:()=>{this.isVisible=!1,this.group.visible=!1}})}}function Nb(){const a=document.getElementById("webgl-canvas");if(!a)return;const e=new cx;e.background=new De(132106);const t=new Vt(50,window.innerWidth/window.innerHeight,.5,800),n=new Nh({canvas:a,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=ch,n.toneMapping=dh,n.toneMappingExposure=1.25;const i=new oy(n),s=new ay(e,t),r=new Rs(new se(window.innerWidth,window.innerHeight),.45,.5,.92);i.addPass(s),i.addPass(r);const o=new ny(t,n.domElement);o.enabled=!1,o.enableDamping=!0,o.dampingFactor=.05;const l=document.getElementById("loader-screen"),c=document.getElementById("loader-bar"),u=document.getElementById("loader-status"),h=new Kh;h.onProgress=(J,ae,be)=>{const Ie=Math.floor(ae/be*100);c&&(c.style.width=`${Ie}%`),u&&(u.innerText=`Preloading WebGL and assets... (${Ie}%)`)},h.onLoad=()=>{u&&(u.innerText="Initialization Complete"),l&&(l.style.opacity="0",setTimeout(()=>{l.style.display="none"},800)),console.log("[SCENE 1] Loading Manager complete.")},h.onError=J=>{console.error("[SCENE 1] Error loading asset:",J),u&&(u.innerText=`Error loading: ${J}`)};const f=new P(39.8,.1,-6.8),p=new P(36.2,-.4,2.8),g=new P(-12.68,29.89,78.14),d=new P(14.65,23.3,17.59),m=p.clone();t.position.copy(f),t.lookAt(m),o.target.copy(p),window.triggerBlastOff=ie;const _=new dv(1914199,1.2);e.add(_);const M=new lv(3718648,593174,.3);e.add(M);const x=new Zh(16775149,1.5);x.position.set(45,30,60),x.castShadow=!0,x.shadow.mapSize.width=2048,x.shadow.mapSize.height=2048,e.add(x);const b=new rr(3718648,1.4,20);b.position.set(37.5,5,2),e.add(b);const y=new rr(16711731,4.5,8);y.position.set(37.5,-2.2,6.5),e.add(y);const T=new Cb(e);function A(J){J.clearRect(0,0,1024,512),J.save();const be="BLAST OFF".split(""),Ie=be.length,Je=260,Te=780,Le=65;J.textAlign="center",J.textBaseline="top";for(let Fe=0;Fe<Ie;Fe++){const vi=be[Fe];if(vi===" ")continue;const ft=Fe/(Ie-1),In=1.75*(1.3-ft*.5),Vr=.85*(1.2-ft*.38),yi=Je+ft*(Te-Je);J.save(),J.translate(yi,Le),J.scale(Vr,In);const On=J.createLinearGradient(0,0,0,160);On.addColorStop(0,"#ffea00"),On.addColorStop(.4,"#ff7700ff"),On.addColorStop(1,"#ff2a00ff"),J.shadowColor="#ff0000",J.shadowBlur=35,J.fillStyle=On,J.font='bold 160px "Bebas Neue", "Oswald", "Anton", sans-serif',J.fillText(vi,0,0),J.shadowBlur=12,J.fillStyle=On,J.fillText(vi,0,0),J.restore()}J.restore()}function v(){const J=document.createElement("canvas");J.width=1024,J.height=512;const ae=J.getContext("2d");A(ae);const be=new yr(J);return be.colorSpace=$t,be.wrapS=Wt,be.wrapT=Wt,document.fonts&&document.fonts.ready.then(()=>{A(ae),be.needsUpdate=!0}),be}const S=v();function R(){const J=document.createElement("canvas");J.width=512,J.height=256;const ae=J.getContext("2d");ae.fillStyle="#0284c7",ae.fillRect(0,0,512,256),ae.strokeStyle="#38bdf8",ae.lineWidth=2;for(let Ie=0;Ie<512;Ie+=32)ae.beginPath(),ae.moveTo(Ie,0),ae.lineTo(Ie,256),ae.stroke();for(let Ie=0;Ie<256;Ie+=32)ae.beginPath(),ae.moveTo(0,Ie),ae.lineTo(512,Ie),ae.stroke();ae.fillStyle="#e0f2fe",ae.font="bold 24px monospace",ae.fillText("STATION_DIAGNOSTICS // ONLINE",20,40);const be=new yr(J);return be.colorSpace=$t,be}const N=R(),j=new $h(h);let I=null,D=null,z=null;const H=[];j.load("/assets/FinalSpaceStationModel.glb",J=>{I=J.scene,e.add(I);const ae=[];I.traverse(Te=>{Te.isLight&&ae.push(Te);const Le=Te.name||"";if(Le.includes("Collar_Left"),Le.includes("Collar_Right"),Le.includes("Collar_Front"),Le.includes("Collar_Back"),Le.includes("Docking_Platform")||Le.includes("Exterior_Docking_Collar"),Te.isMesh&&Te.material){Te.castShadow=!0,Te.receiveShadow=!0;const Fe=Te.material.name||"";(Le.includes("Cabin_Light_Strip")||Le.includes("Light_Strip"))&&(Te.visible=!1),Fe==="Hull_Light"?(Te.material.color.setHex(6583435),Te.material.roughness=.35,Te.material.metalness=.8):Fe==="Hull_Dark"?(Te.material.color.setHex(1976635),Te.material.roughness=.4,Te.material.metalness=.85):Fe==="Rocket_Silver"||Fe.toLowerCase().includes("rocket")||Le.toLowerCase().includes("rocket")?(Te.material.color.setHex(11184810),Te.material.metalness=.99,Te.material.roughness=.01,Te.material.envMapIntensity=.35,Te.material.needsUpdate=!0):Fe==="Gantry_Copper"||Le.includes("Window_Inner_Frame")||Le.includes("Window_Frame")?Te.material=new Wn({color:994140,roughness:.25,metalness:.9}):(Fe==="Window_Glass_Mat"||Le.includes("Window_Glass"))&&(Te.material.transparent=!0,Te.material.opacity=.22,Te.material.color.setHex(3718648),Te.material.roughness=.02,Te.material.metalness=.2),(Le.includes("Button_Lid")||Le.includes("Button_Base")||Le.includes("Button_Bezel")||Le.includes("Button_Hinge")||Le.includes("Button_Screw")||Le.includes("Button_Indicator"))&&(Te.material=new Wn({color:994140,metalness:.95,roughness:.1,envMapIntensity:1}),H.push(Te)),Le.includes("Console_Screen")&&(Te.material=new Wn({map:N,emissiveMap:N,emissive:new De(3718648),emissiveIntensity:1.4})),Le.includes("Button_Cylinder")&&(D=Te,Te.material=new Wn({color:16711680,emissive:16711697,emissiveIntensity:1.8,roughness:.1,metalness:.2}),H.push(Te))}});const be=new Vs(1.5,.85),Ie=new Wn({map:S,emissiveMap:S,emissive:new De(16729088),emissiveIntensity:.5,transparent:!0,opacity:.52,roughness:.55,metalness:.35,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthTest:!0,depthWrite:!1,side:Kn});z=new yt(be,Ie),z.position.set(37.5,-2.75,7.34),z.rotation.set(-.04,3.15,0),z.scale.set(2.3,2.3,2.3),e.add(z);const Je=new rr(3718648,3.5,45);Je.position.set(20,5,18),e.add(Je),ae.forEach(Te=>{Te.parent&&Te.parent.remove(Te)}),console.log("[SCENE 1] Station loaded. 3D Model Button & Lid wired!")},void 0,J=>{console.error("[SCENE 1] Error loading station model:",J)});const q=new Ab(()=>{q.group.position.set(35.1,.4,9.4),q.group.rotation.set(0,3.05,0),q.group.scale.set(1.45,1.45,1.45)});e.add(q.group),oi.to(q.floatGroup.position,{y:"+=0.06",duration:2.8,repeat:-1,yoyo:!0,ease:"sine.inOut"});const k=new Rb("/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",null,h);k.group.position.set(32.95,-5.5,1.1),k.group.rotation.set(0,2.04,0),k.group.scale.set(7.7,7.7,7.7),e.add(k.group);const ne=new rr(16767673,.85,15);ne.position.set(36,1.5,-2),e.add(ne);const W=new Ob;W.group.position.set(-11.5,30.6,70.3),W.group.rotation.set(.1,-.3,.02),W.group.scale.set(.25,.25,.25),W.setBeamTransform(1,.7,-2.2,.21),W.setBeamProps(.28,60,.5),W.setHoverBrightness(0),W.group.visible=!1,e.add(W.group);const V=new wv,G=new se(-9999,-9999);window.addEventListener("mousemove",J=>{if(G.x=J.clientX/window.innerWidth*2-1,G.y=-(J.clientY/window.innerHeight)*2+1,W&&W.isVisible){V.setFromCamera(G,t);const ae=V.intersectObject(W.screenMesh);if(ae.length>0){document.body.style.cursor="pointer",ae[0].uv.x<.5?W.setHoverTarget(1):W.setHoverTarget(2);return}else W.setHoverTarget(0)}H.length>0&&(V.setFromCamera(G,t),V.intersectObjects(H,!0).length>0?(document.body.style.cursor="pointer",D&&D.material&&(D.material.emissiveIntensity=2.5)):(document.body.style.cursor="default",D&&D.material&&(D.material.emissiveIntensity=1.4)))}),window.addEventListener("click",J=>{if(J.target.closest("#hud-container")||J.target.closest("#camera-inspector")||J.target.tagName==="BUTTON"||J.target.tagName==="INPUT")return;if(G.x=J.clientX/window.innerWidth*2-1,G.y=-(J.clientY/window.innerHeight)*2+1,W&&W.isVisible){V.setFromCamera(G,t);const be=V.intersectObject(W.screenMesh);if(be.length>0){const Je=be[0].uv.x<.5?"TARGET A: KOPPULA SYSTEM":"TARGET B: ORIGIN PLANET";ue(Je);return}}if(te||H.length===0)return;V.setFromCamera(G,t),V.intersectObjects(H,!0).length>0&&(D?oi.to(D.position,{y:"-=0.15",duration:.1,yoyo:!0,repeat:1,onComplete:()=>{ie()}}):ie())});let te=!1;window.isTransitioning=te;function ie(){if(window.isTransitioning&&te)return;te=!0,window.isTransitioning=!0,o.enabled=!1;const J=document.getElementById("toggle-orbit-btn");J&&(J.innerText="ENABLE FREE CAM");const ae=document.getElementById("cam-status");ae&&(ae.innerText="LAUNCH_SEQUENCE_ACTIVE");const be=oi.timeline({onComplete:()=>{te=!1,window.isTransitioning=!1,ae&&(ae.innerText="EXTERIOR_VIEW // DESTINATION_SELECTION_READY"),console.log("[SCENE 1] Blast Off pullout complete! Projecting Hologram Screen..."),W&&W.fadeIn(1.2)}});be.to(t.position,{x:g.x,y:g.y,z:g.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(m),o&&o.target.copy(m)}},0),be.to(m,{x:d.x,y:d.y,z:d.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(m),o.target.copy(m)}},0),q&&q.textMaterial&&be.to(q.textMaterial,{opacity:0,duration:.01},1.3),z&&z.material&&be.to(z.material,{opacity:0,duration:.01},1.3),k&&k.group&&be.set(k.group,{visible:!1},1.3),ne&&be.set(ne,{visible:!1},1.3),be.to(r,{strength:1.2,duration:1.2,yoyo:!0,repeat:1,ease:"sine.inOut"},1)}function ue(J="TARGET A: KOPPULA SYSTEM"){if(window.triggerDestinationTransition=ue,window.isTransitioning||te)return;te=!0,window.isTransitioning=!0,o.enabled=!1;const ae=document.getElementById("toggle-orbit-btn");ae&&(ae.innerText="ENABLE FREE CAM");const be=document.getElementById("cam-status");be&&(be.innerText=`DESTINATION_LOCKED // ${J}`),console.log(`[DESTINATION SELECTION] Initiating sequence for ${J}...`);const Ie=oi.timeline({onComplete:()=>{console.log("[DESTINATION SELECTION] Sequence complete. Moving camera to interior view...");const Je=new P(38.88,-7.64,32.98),Te=new P(46.73,20.65,31.94),Le=oi.timeline({onComplete:()=>{te=!1,window.isTransitioning=!1,o.enabled=!0,ae&&(ae.innerText="DISABLE FREE CAM"),be&&(be.innerText="DESTINATION_ARRIVED")}});Le.to(t.position,{x:Je.x,y:Je.y,z:Je.z,duration:2.5,ease:"power2.inOut"},0),Le.to(m,{x:Te.x,y:Te.y,z:Te.z,duration:2.5,ease:"power2.inOut",onUpdate:()=>{o.target.copy(m)}},0)}});W&&W.fadeOut(1.8),_&&Ie.to(_,{intensity:.02,duration:1.8,ease:"power2.inOut"},0),M&&Ie.to(M,{intensity:.01,duration:1.8,ease:"power2.inOut"},0),x&&Ie.to(x,{intensity:.02,duration:1.8,ease:"power2.inOut"},0),b&&Ie.to(b,{intensity:0,duration:1.8,ease:"power2.inOut"},0),y&&Ie.to(y,{intensity:0,duration:1.8,ease:"power2.inOut"},0),ne&&Ie.to(ne,{intensity:0,duration:1.8,ease:"power2.inOut"},0)}const Z=document.getElementById("camera-inspector"),Oe=document.getElementById("settings-toggle-btn"),ye=document.getElementById("cam-pos-val"),Re=document.getElementById("cam-target-val"),de=document.getElementById("cam-fov-val"),ze=document.getElementById("toggle-orbit-btn"),ee=document.getElementById("copy-cam-btn"),Q=document.getElementById("copy-toast");Oe==null||Oe.addEventListener("click",()=>{Z&&Z.classList.toggle("inspector-hidden")}),document.querySelectorAll(".accordion-header").forEach(J=>{J.addEventListener("click",()=>{const ae=J.closest(".accordion-item");ae&&ae.classList.toggle("active")})}),ze==null||ze.addEventListener("click",()=>{o.enabled=!o.enabled;const J=document.getElementById("cam-status");o.enabled?(ze.innerText="DISABLE FREE CAM",J&&(J.innerText="FREE_ORBIT_ENABLED")):(ze.innerText="ENABLE FREE CAM",J&&(J.innerText=te?"EXTERIOR_VIEW":"INTERIOR_VIEW"))}),ee==null||ee.addEventListener("click",()=>{const J=t.position.x.toFixed(2),ae=t.position.y.toFixed(2),be=t.position.z.toFixed(2),Ie=o.target.x.toFixed(2),Je=o.target.y.toFixed(2),Te=o.target.z.toFixed(2),Le=`const INTERIOR_CAM_POS = new THREE.Vector3(${J}, ${ae}, ${be});
const INTERIOR_LOOK_TARGET = new THREE.Vector3(${Ie}, ${Je}, ${Te});`;navigator.clipboard.writeText(Le).then(()=>{console.log(`[CAMERA INSPECTOR] Coordinates copied to clipboard:
`+Le)}).catch(()=>{}),Q&&(Q.style.display="block",setTimeout(()=>{Q.style.display="none"},2500))});const ce=document.getElementById("bloom-strength-slider"),xe=document.getElementById("bloom-threshold-slider"),he=document.getElementById("bloom-strength-val"),Ne=document.getElementById("bloom-threshold-val");ce==null||ce.addEventListener("input",()=>{const J=parseFloat(ce.value);r.strength=J,he&&(he.innerText=J.toFixed(2))}),xe==null||xe.addEventListener("input",()=>{const J=parseFloat(xe.value);r.threshold=J,Ne&&(Ne.innerText=J.toFixed(2))});const Ae=document.getElementById("text-scale-slider"),Ee=document.getElementById("text-x-slider"),Ke=document.getElementById("text-y-slider"),We=document.getElementById("text-z-slider"),C=document.getElementById("text-roty-slider"),w=document.getElementById("text-scale-val"),X=document.getElementById("text-x-val"),re=document.getElementById("text-y-val"),le=document.getElementById("text-z-val"),pe=document.getElementById("text-roty-val");function Ce(){if(!q)return;const J=parseFloat(Ae.value),ae=parseFloat(Ee.value),be=parseFloat(Ke.value),Ie=parseFloat(We.value),Je=parseFloat(C.value);q.group.scale.set(J,J,J),q.group.position.set(ae,be,Ie),q.group.rotation.set(0,Je,0),w&&(w.innerText=J.toFixed(2)),X&&(X.innerText=ae.toFixed(2)),re&&(re.innerText=be.toFixed(2)),le&&(le.innerText=Ie.toFixed(2)),pe&&(pe.innerText=Je.toFixed(2))}Ae==null||Ae.addEventListener("input",Ce),Ee==null||Ee.addEventListener("input",Ce),Ke==null||Ke.addEventListener("input",Ce),We==null||We.addEventListener("input",Ce),C==null||C.addEventListener("input",Ce);const L=document.getElementById("avatar-scale-slider"),F=document.getElementById("avatar-x-slider"),me=document.getElementById("avatar-y-slider"),_e=document.getElementById("avatar-z-slider"),ge=document.getElementById("avatar-rotx-slider"),we=document.getElementById("avatar-roty-slider"),Se=document.getElementById("avatar-rotz-slider"),Ge=document.getElementById("avatar-scale-val"),Xe=document.getElementById("avatar-x-val"),$e=document.getElementById("avatar-y-val"),O=document.getElementById("avatar-z-val"),Y=document.getElementById("avatar-rotx-val"),oe=document.getElementById("avatar-roty-val"),ve=document.getElementById("avatar-rotz-val");function Me(){if(!k||!k.group)return;const J=parseFloat(L.value),ae=parseFloat(F.value),be=parseFloat(me.value),Ie=parseFloat(_e.value),Je=parseFloat(ge.value),Te=parseFloat(we.value),Le=parseFloat(Se.value);k.group.scale.set(J,J,J),k.group.position.set(ae,be,Ie),k.group.rotation.set(Je,Te,Le),Ge&&(Ge.innerText=J.toFixed(2)),Xe&&(Xe.innerText=ae.toFixed(2)),$e&&($e.innerText=be.toFixed(2)),O&&(O.innerText=Ie.toFixed(2)),Y&&(Y.innerText=Je.toFixed(2)),oe&&(oe.innerText=Te.toFixed(2)),ve&&(ve.innerText=Le.toFixed(2))}L==null||L.addEventListener("input",Me),F==null||F.addEventListener("input",Me),me==null||me.addEventListener("input",Me),_e==null||_e.addEventListener("input",Me),ge==null||ge.addEventListener("input",Me),we==null||we.addEventListener("input",Me),Se==null||Se.addEventListener("input",Me);const qe=document.getElementById("avatar-skin-picker");qe==null||qe.addEventListener("input",()=>{k&&k.setSkinColor&&k.setSkinColor(qe.value)});const at=document.getElementById("hologram-scale-slider"),pt=document.getElementById("hologram-x-slider"),on=document.getElementById("hologram-y-slider"),et=document.getElementById("hologram-z-slider"),Gt=document.getElementById("hologram-rotx-slider"),Ct=document.getElementById("hologram-roty-slider"),xi=document.getElementById("hologram-rotz-slider"),$n=document.getElementById("hologram-hoverbright-slider"),kr=document.getElementById("hologram-scale-val"),Br=document.getElementById("hologram-x-val"),E=document.getElementById("hologram-y-val"),B=document.getElementById("hologram-z-val"),K=document.getElementById("hologram-rotx-val"),U=document.getElementById("hologram-roty-val"),$=document.getElementById("hologram-rotz-val"),Pe=document.getElementById("hologram-hoverbright-val"),Ue=document.getElementById("toggle-hologram-vis-btn");function ke(){if(!W||!W.group)return;const J=parseFloat(at.value),ae=parseFloat(pt.value),be=parseFloat(on.value),Ie=parseFloat(et.value),Je=parseFloat(Gt.value),Te=parseFloat(Ct.value),Le=parseFloat(xi.value),Fe=parseFloat(($n==null?void 0:$n.value)||1);W.group.scale.set(J,J,J),W.group.position.set(ae,be,Ie),W.group.rotation.set(Je,Te,Le),W.setHoverBrightness(Fe),kr&&(kr.innerText=J.toFixed(2)),Br&&(Br.innerText=ae.toFixed(2)),E&&(E.innerText=be.toFixed(2)),B&&(B.innerText=Ie.toFixed(2)),K&&(K.innerText=Je.toFixed(2)),U&&(U.innerText=Te.toFixed(2)),$&&($.innerText=Le.toFixed(2)),Pe&&(Pe.innerText=Fe.toFixed(2))}at==null||at.addEventListener("input",ke),pt==null||pt.addEventListener("input",ke),on==null||on.addEventListener("input",ke),et==null||et.addEventListener("input",ke),Gt==null||Gt.addEventListener("input",ke),Ct==null||Ct.addEventListener("input",ke),xi==null||xi.addEventListener("input",ke),$n==null||$n.addEventListener("input",ke),Ue==null||Ue.addEventListener("click",()=>{W&&(W.isVisible?W.fadeOut(.4):W.fadeIn(.4))}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),i.setSize(window.innerWidth,window.innerHeight)});const Be=new Jh;function je(){requestAnimationFrame(je);const J=Be.getDelta(),ae=Be.getElapsedTime();T.update(ae),k&&k.update&&k.update(J),W&&W.update&&W.update(ae),o.enabled?o.update():t.lookAt(m),ye&&(ye.innerText=`${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)}`),Re&&(Re.innerText=`${o.target.x.toFixed(2)}, ${o.target.y.toFixed(2)}, ${o.target.z.toFixed(2)}`),de&&(de.innerText=`${t.fov.toFixed(0)}°`),i.render()}je()}document.addEventListener("DOMContentLoaded",()=>{Nb()});
