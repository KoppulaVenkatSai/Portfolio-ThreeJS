(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="148",rs={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bd=0,Mc=1,zd=2,zu=1,Uu=2,mr=3,Si=0,dn=1,Vt=2,Kr=3,xi=0,Ps=1,xt=2,bc=3,Sc=4,Ud=5,Ss=100,Gd=101,Vd=102,wc=103,Tc=104,Hd=200,Wd=201,Xd=202,qd=203,Gu=204,Vu=205,Yd=206,jd=207,Kd=208,Zd=209,$d=210,Jd=0,Qd=1,ep=2,il=3,tp=4,np=5,ip=6,sp=7,Hu=0,rp=1,op=2,si=0,ap=1,lp=2,cp=3,Wu=4,hp=5,Xu=300,Fs=301,Bs=302,sl=303,rl=304,qo=306,wi=1e3,Jt=1001,Oo=1002,Rt=1003,ol=1004,Ao=1005,bt=1006,qu=1007,Un=1008,Ki=1009,up=1010,fp=1011,Yu=1012,dp=1013,Gi=1014,pi=1015,Er=1016,pp=1017,mp=1018,Ls=1020,gp=1021,_p=1022,hn=1023,xp=1024,vp=1025,Hi=1026,zs=1027,yp=1028,Mp=1029,bp=1030,Sp=1031,wp=1033,oa=33776,aa=33777,la=33778,ca=33779,Ec=35840,Ac=35841,Cc=35842,Pc=35843,Tp=36196,Lc=37492,Rc=37496,Ic=37808,Dc=37809,Oc=37810,Nc=37811,kc=37812,Fc=37813,Bc=37814,zc=37815,Uc=37816,Gc=37817,Vc=37818,Hc=37819,Wc=37820,Xc=37821,qc=36492,Ar=2300,Us=2301,ha=2302,Yc=2400,jc=2401,Kc=2402,Ep=2500,Ap=1,ju=2,Zi=3e3,Je=3001,Cp=3200,Pp=3201,Ku=0,Lp=1,ln="srgb",Cr="srgb-linear",ua=7680,Rp=519,al=35044,Zc="300 es",ll=1035;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const vr=Math.PI/180,Pr=180/Math.PI;function En(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[a&255]+Ut[a>>8&255]+Ut[a>>16&255]+Ut[a>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function It(a,e,t){return Math.max(e,Math.min(t,a))}function Nl(a,e){return(a%e+e)%e}function Ip(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Dp(a,e,t){return a!==e?(t-a)/(e-a):0}function yr(a,e,t){return(1-t)*a+t*e}function Op(a,e,t,n){return yr(a,e,1-Math.exp(-t*n))}function Np(a,e=1){return e-Math.abs(Nl(a,e*2)-e)}function kp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Fp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Bp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function zp(a,e){return a+Math.random()*(e-a)}function Up(a){return a*(.5-Math.random())}function Gp(a){a!==void 0&&($c=a);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vp(a){return a*vr}function Hp(a){return a*Pr}function cl(a){return(a&a-1)===0&&a!==0}function Zu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function No(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Wp(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),f=s((e-n)/2),u=r((e-n)/2),d=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*f,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*f,o*c);break;case"ZXZ":a.set(l*f,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function nt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var et=Object.freeze({__proto__:null,DEG2RAD:vr,RAD2DEG:Pr,generateUUID:En,clamp:It,euclideanModulo:Nl,mapLinear:Ip,inverseLerp:Dp,lerp:yr,damp:Op,pingpong:Np,smoothstep:kp,smootherstep:Fp,randInt:Bp,randFloat:zp,randFloatSpread:Up,seededRandom:Gp,degToRad:Vp,radToDeg:Hp,isPowerOfTwo:cl,ceilPowerOfTwo:Zu,floorPowerOfTwo:No,setQuaternionFromProperEuler:Wp,normalize:nt,denormalize:ni});class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(){fn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],y=i[1],x=i[4],b=i[7],M=i[2],E=i[5],C=i[8];return s[0]=r*p+o*y+l*M,s[3]=r*m+o*x+l*E,s[6]=r*_+o*b+l*C,s[1]=c*p+h*y+f*M,s[4]=c*m+h*x+f*E,s[7]=c*_+h*b+f*C,s[2]=u*p+d*y+g*M,s[5]=u*m+d*x+g*E,s[8]=u*_+d*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,u=o*l-h*s,d=c*s-r*l,g=t*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(i*c-h*n)*p,e[2]=(o*n-i*r)*p,e[3]=u*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(r*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new fn;function $u(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Lr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Wi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Co(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const da={[ln]:{[Cr]:Wi},[Cr]:{[ln]:Co}},qt={legacyMode:!0,get workingColorSpace(){return Cr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(da[e]&&da[e][t]!==void 0){const n=da[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wt={r:0,g:0,b:0},Cn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function pa(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function $r(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=Nl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=pa(r,s,e+1/3),this.g=pa(r,s,e),this.b=pa(r,s,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ln){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return qt.fromWorkingColorSpace($r(this,wt),e),It(wt.r*255,0,255)<<16^It(wt.g*255,0,255)<<8^It(wt.b*255,0,255)<<0}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace($r(this,wt),t);const n=wt.r,i=wt.g,s=wt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace($r(this,wt),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=ln){return qt.fromWorkingColorSpace($r(this,wt),e),e!==ln?`color(${e} ${wt.r} ${wt.g} ${wt.b})`:`rgb(${wt.r*255|0},${wt.g*255|0},${wt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Cn),Cn.h+=e,Cn.s+=t,Cn.l+=n,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Zr);const n=yr(Cn.h,Zr.h,t),i=yr(Cn.s,Zr.s,t),s=yr(Cn.l,Zr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ce.NAMES=Ju;let as;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Lr("canvas")),as.width=e.width,as.height=e.height;const n=as.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ef{constructor(e=null){this.isSource=!0,this.uuid=En(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ma(i[r].image)):s.push(ma(i[r]))}else s=ma(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ma(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Qu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xp=0;class Ot extends es{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Jt,i=Jt,s=bt,r=Un,o=hn,l=Ki,c=Ot.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=En(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Xu;Ot.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(d+1)/2,M=(_+1)/2,E=(h+u)/4,C=(f+p)/4,v=(g+m)/4;return x>b&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=C/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-p)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends es{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ef(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tf extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qp extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=s[r+0],d=s[r+1],g=s[r+2],p=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==u||c!==d||h!==g){let m=1-o;const _=l*u+c*d+h*g+f*p,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,_*y);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const b=o*y;if(l=l*m+u*b,c=c*m+d*b,h=h*m+g*b,f=f*m+p*b,m===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[r],u=s[r+1],d=s[r+2],g=s[r+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),u=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,h=l*n+o*t-s*i,f=l*i+s*n-r*t,u=-s*t-r*n-o*i;return this.x=c*l+u*-s+h*-o-f*-r,this.y=h*l+u*-r+f*-s-c*-o,this.z=f*l+u*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new A,Jc=new On;class ts{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],f=e[l+1],u=e[l+2];h<t&&(t=h),f<n&&(n=f),u<i&&(i=u),h>s&&(s=h),f>r&&(r=f),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),f=e.getY(l),u=e.getZ(l);h<t&&(t=h),f<n&&(n=f),u<i&&(i=u),h>s&&(s=h),f>r&&(r=f),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Ii.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox),_a.applyMatrix4(e.matrixWorld),this.union(_a);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Jr.subVectors(this.max,ir),ls.subVectors(e.a,ir),cs.subVectors(e.b,ir),hs.subVectors(e.c,ir),ai.subVectors(cs,ls),li.subVectors(hs,cs),Di.subVectors(ls,hs);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Di.z,Di.y,ai.z,0,-ai.x,li.z,0,-li.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-li.y,li.x,0,-Di.y,Di.x,0];return!xa(t,ls,cs,hs,Jr)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,ls,cs,hs,Jr))?!1:(Qr.crossVectors(ai,li),t=[Qr.x,Qr.y,Qr.z],xa(t,ls,cs,hs,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new A,new A,new A,new A,new A,new A,new A,new A],Ii=new A,_a=new ts,ls=new A,cs=new A,hs=new A,ai=new A,li=new A,Di=new A,ir=new A,Jr=new A,Qr=new A,Oi=new A;function xa(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Oi.fromArray(a,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yp=new ts,sr=new A,va=new A;class Js{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(va)),this.expandByPoint(sr.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new A,ya=new A,eo=new A,ci=new A,Ma=new A,to=new A,ba=new A;class Yo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.direction).multiplyScalar(t).add(this.origin),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ya);const s=e.distanceTo(t)*.5,r=-this.direction.dot(eo),o=ci.dot(this.direction),l=-ci.dot(eo),c=ci.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-o,u=r*o-l,g=s*h,f>=0)if(u>=-g)if(u<=g){const p=1/h;f*=p,u*=p,d=f*(f+r*u+2*o)+u*(r*f+u+2*l)+c}else u=s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(r*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=r>0?-s:s,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(eo).multiplyScalar(u).add(ya),d}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,s){Ma.subVectors(t,e),to.subVectors(n,e),ba.crossVectors(Ma,to);let r=this.direction.dot(ba),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(to.crossVectors(ci,to));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(ci));if(c<0||l+c>r)return null;const h=-o*ci.dot(ba);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,h,f,u,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=u,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),r=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=r*h,d=r*f,g=o*h,p=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-p*c,t[9]=-o*l,t[2]=p-u*c,t[6]=g+d*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,g=c*h,p=c*f;t[0]=u+p*o,t[4]=g*o-d,t[8]=r*c,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=p+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,g=c*h,p=c*f;t[0]=u-p*o,t[4]=-r*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=p-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,d=r*f,g=o*h,p=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+p,t[1]=l*f,t[5]=p*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,d=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=p-u*f,t[8]=g*f+d,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-p*f}else if(e.order==="XZY"){const u=r*l,d=r*c,g=o*l,p=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+p,t[5]=r*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=p*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Kp)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),no.crossVectors(on,hi),i[0]=hi.x,i[4]=no.x,i[8]=on.x,i[1]=hi.y,i[5]=no.y,i[9]=on.y,i[2]=hi.z,i[6]=no.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],y=n[3],x=n[7],b=n[11],M=n[15],E=i[0],C=i[4],v=i[8],w=i[12],R=i[1],k=i[5],Y=i[9],O=i[13],D=i[2],B=i[6],X=i[10],K=i[14],V=i[3],se=i[7],te=i[11],U=i[15];return s[0]=r*E+o*R+l*D+c*V,s[4]=r*C+o*k+l*B+c*se,s[8]=r*v+o*Y+l*X+c*te,s[12]=r*w+o*O+l*K+c*U,s[1]=h*E+f*R+u*D+d*V,s[5]=h*C+f*k+u*B+d*se,s[9]=h*v+f*Y+u*X+d*te,s[13]=h*w+f*O+u*K+d*U,s[2]=g*E+p*R+m*D+_*V,s[6]=g*C+p*k+m*B+_*se,s[10]=g*v+p*Y+m*X+_*te,s[14]=g*w+p*O+m*K+_*U,s[3]=y*E+x*R+b*D+M*V,s[7]=y*C+x*k+b*B+M*se,s[11]=y*v+x*Y+b*X+M*te,s[15]=y*w+x*O+b*K+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*o*u+n*c*u+i*o*d-n*l*d)+p*(+t*l*d-t*c*u+s*r*u-i*r*d+i*c*h-s*l*h)+m*(+t*c*f-t*o*d-s*r*f+n*r*d+s*o*h-n*c*h)+_*(-i*o*h-t*l*f+t*o*u+i*r*f-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],y=f*m*c-p*u*c+p*l*d-o*m*d-f*l*_+o*u*_,x=g*u*c-h*m*c-g*l*d+r*m*d+h*l*_-r*u*_,b=h*p*c-g*f*c+g*o*d-r*p*d-h*o*_+r*f*_,M=g*f*l-h*p*l-g*o*u+r*p*u+h*o*m-r*f*m,E=t*y+n*x+i*b+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(p*u*s-f*m*s-p*i*d+n*m*d+f*i*_-n*u*_)*C,e[2]=(o*m*s-p*l*s+p*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(f*l*s-o*u*s-f*i*c+n*u*c+o*i*d-n*l*d)*C,e[4]=x*C,e[5]=(h*m*s-g*u*s+g*i*d-t*m*d-h*i*_+t*u*_)*C,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*_-t*l*_)*C,e[7]=(r*u*s-h*l*s+h*i*c-t*u*c-r*i*d+t*l*d)*C,e[8]=b*C,e[9]=(g*f*s-h*p*s-g*n*d+t*p*d+h*n*_-t*f*_)*C,e[10]=(r*p*s-g*o*s+g*n*c-t*p*c-r*n*_+t*o*_)*C,e[11]=(h*o*s-r*f*s-h*n*c+t*f*c+r*n*d-t*o*d)*C,e[12]=M*C,e[13]=(h*p*i-g*f*i+g*n*u-t*p*u-h*n*m+t*f*m)*C,e[14]=(g*o*i-r*p*i-g*n*l+t*p*l+r*n*m-t*o*m)*C,e[15]=(r*f*i-h*o*i+h*n*l-t*f*l-r*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,f=o+o,u=s*c,d=s*h,g=s*f,p=r*h,m=r*f,_=o*f,y=l*c,x=l*h,b=l*f,M=n.x,E=n.y,C=n.z;return i[0]=(1-(p+_))*M,i[1]=(d+b)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-b)*E,i[5]=(1-(u+_))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+x)*C,i[9]=(m-y)*C,i[10]=(1-(u+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=us.set(i[0],i[1],i[2]).length();const r=us.set(i[4],i[5],i[6]).length(),o=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/s,h=1/r,f=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),u=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),f=(t+e)*l,u=(n+i)*c,d=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new A,Pn=new He,jp=new A(0,0,0),Kp=new A(1,1,1),hi=new A,no=new A,on=new A,Qc=new He,eh=new On;class Hr{constructor(e=0,t=0,n=0,i=Hr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-It(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Hr.DefaultOrder="XYZ";Hr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const th=new A,fs=new On,Kn=new He,io=new A,rr=new A,$p=new A,Jp=new On,nh=new A(1,0,0),ih=new A(0,1,0),sh=new A(0,0,1),Qp={type:"added"},rh={type:"removed"};class ht extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DefaultUp.clone();const e=new A,t=new Hr,n=new On,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new fn}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DefaultMatrixWorldAutoUpdate,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(rr,io,this.up):Kn.lookAt(io,rr,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Kn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DefaultUp=new A(0,1,0);ht.DefaultMatrixAutoUpdate=!0;ht.DefaultMatrixWorldAutoUpdate=!0;const Ln=new A,Zn=new A,Sa=new A,$n=new A,ds=new A,ps=new A,oh=new A,wa=new A,Ta=new A,Ea=new A;class ti{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),Zn.subVectors(n,t),Sa.subVectors(e,t);const r=Ln.dot(Ln),o=Ln.dot(Zn),l=Ln.dot(Sa),c=Zn.dot(Zn),h=Zn.dot(Sa),f=r*c-o*o;if(f===0)return s.set(-2,-1,-1);const u=1/f,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,$n),l.set(0,0),l.addScaledVector(s,$n.x),l.addScaledVector(r,$n.y),l.addScaledVector(o,$n.z),l}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),Zn.subVectors(e,t),Ln.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ti.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;ds.subVectors(i,n),ps.subVectors(s,n),wa.subVectors(e,n);const l=ds.dot(wa),c=ps.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ta.subVectors(e,i);const h=ds.dot(Ta),f=ps.dot(Ta);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(ds,r);Ea.subVectors(e,s);const d=ds.dot(Ea),g=ps.dot(Ea);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ps,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return oh.subVectors(s,i),o=(f-h)/(f-h+(d-g)),t.copy(i).addScaledVector(oh,o);const _=1/(m+p+u);return r=p*_,o=u*_,t.copy(n).addScaledVector(ds,r).addScaledVector(ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let em=0;class Bn extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Ps,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gu,this.blendDst=Vu,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dt extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new A,so=new ce;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nf extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sf extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ne extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tm=0;const vn=new He,Aa=new ht,ms=new A,an=new ts,or=new ts,Lt=new A;class at extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?sf:nf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new fn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ne(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(an.min,or.min),an.expandByPoint(Lt),Lt.addVectors(an.max,or.max),an.expandByPoint(Lt)):(an.expandByPoint(or.min),an.expandByPoint(or.max))}an.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),Lt.add(ms)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new A,h[R]=new A;const f=new A,u=new A,d=new A,g=new ce,p=new ce,m=new ce,_=new A,y=new A;function x(R,k,Y){f.fromArray(i,R*3),u.fromArray(i,k*3),d.fromArray(i,Y*3),g.fromArray(r,R*2),p.fromArray(r,k*2),m.fromArray(r,Y*2),u.sub(f),d.sub(f),p.sub(g),m.sub(g);const O=1/(p.x*m.y-m.x*p.y);isFinite(O)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(O),y.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(O),c[R].add(_),c[k].add(_),c[Y].add(_),h[R].add(y),h[k].add(y),h[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,k=b.length;R<k;++R){const Y=b[R],O=Y.start,D=Y.count;for(let B=O,X=O+D;B<X;B+=3)x(n[B+0],n[B+1],n[B+2])}const M=new A,E=new A,C=new A,v=new A;function w(R){C.fromArray(s,R*3),v.copy(C);const k=c[R];M.copy(k),M.sub(C.multiplyScalar(C.dot(k))).normalize(),E.crossVectors(v,k);const O=E.dot(h[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=O}for(let R=0,k=b.length;R<k;++R){const Y=b[R],O=Y.start,D=Y.count;for(let B=O,X=O+D;B<X;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,r=new A,o=new A,l=new A,c=new A,h=new A,f=new A;if(e)for(let u=0,d=e.count;u<d;u+=3){const g=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*h;for(let _=0;_<h;_++)u[g++]=c[d++]}return new ot(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new He,gs=new Yo,Ca=new Js,ar=new A,lr=new A,cr=new A,Pa=new A,ro=new A,oo=new ce,ao=new ce,lo=new ce,La=new A,co=new A;class De extends ht{constructor(e=new at,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Pa.fromBufferAttribute(f,e),r?ro.addScaledVector(Pa,h):ro.addScaledVector(Pa.sub(t),h))}t.add(ro)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),e.ray.intersectsSphere(Ca)===!1)||(ah.copy(s).invert(),gs.copy(e.ray).applyMatrix4(ah),n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,f=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=i[p.materialIndex],_=Math.max(p.start,u.start),y=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,b=y;x<b;x+=3){const M=o.getX(x),E=o.getX(x+1),C=o.getX(x+2);r=ho(this,m,e,gs,c,h,M,E,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const d=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=o.getX(p),y=o.getX(p+1),x=o.getX(p+2);r=ho(this,i,e,gs,c,h,_,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=i[p.materialIndex],_=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=_,b=y;x<b;x+=3){const M=x,E=x+1,C=x+2;r=ho(this,m,e,gs,c,h,M,E,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const d=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=d,m=g;p<m;p+=3){const _=p,y=p+1,x=p+2;r=ho(this,i,e,gs,c,h,_,y,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function nm(a,e,t,n,i,s,r,o){let l;if(e.side===dn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Si,o),l===null)return null;co.copy(o),co.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:a}}function ho(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,ar),a.getVertexPosition(o,lr),a.getVertexPosition(l,cr);const c=nm(a,e,t,n,ar,lr,cr,La);if(c){i&&(oo.fromBufferAttribute(i,r),ao.fromBufferAttribute(i,o),lo.fromBufferAttribute(i,l),c.uv=ti.getUV(La,ar,lr,cr,oo,ao,lo,new ce)),s&&(oo.fromBufferAttribute(s,r),ao.fromBufferAttribute(s,o),lo.fromBufferAttribute(s,l),c.uv2=ti.getUV(La,ar,lr,cr,oo,ao,lo,new ce));const h={a:r,b:o,c:l,normal:new A,materialIndex:0};ti.getNormal(ar,lr,cr,h.normal),c.face=h}return c}class vi extends at{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function g(p,m,_,y,x,b,M,E,C,v,w){const R=b/C,k=M/v,Y=b/2,O=M/2,D=E/2,B=C+1,X=v+1;let K=0,V=0;const se=new A;for(let te=0;te<X;te++){const U=te*k-O;for(let H=0;H<B;H++){const oe=H*R-Y;se[p]=oe*y,se[m]=U*x,se[_]=D,c.push(se.x,se.y,se.z),se[p]=0,se[m]=0,se[_]=E>0?1:-1,h.push(se.x,se.y,se.z),f.push(H/C),f.push(1-te/v),K+=1}}for(let te=0;te<v;te++)for(let U=0;U<C;U++){const H=u+U+B*te,oe=u+U+B*(te+1),ae=u+(U+1)+B*(te+1),de=u+(U+1)+B*te;l.push(H,oe,de),l.push(oe,ae,de),V+=6}o.addGroup(d,V,w),d+=V,u+=K}}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(a){const e={};for(let t=0;t<a.length;t++){const n=Gs(a[t]);for(const i in n)e[i]=n[i]}return e}function im(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function rf(a){return a.getRenderTarget()===null&&a.outputEncoding===Je?ln:Cr}const ko={clone:Gs,merge:Kt};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class of extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends of{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,xs=1;class af extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Zt(_s,xs,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Zt(_s,xs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Zt(_s,xs,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Zt(_s,xs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Zt(_s,xs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Zt(_s,xs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=si,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class lf extends Ot{constructor(e,t,n,i,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cf extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vi(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:xi});s.uniforms.tEquirect.value=t;const r=new De(i,s),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=bt),new af(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ra=new A,om=new A,am=new fn;class Fi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ra.subVectors(n,t).cross(om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||am.getNormalMatrix(e),i=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Js,uo=new A;class Fl{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,s=new Fi,r=new Fi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],f=n[7],u=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],y=n[14],x=n[15];return t[0].setComponents(o-i,f-l,p-u,x-m).normalize(),t[1].setComponents(o+i,f+l,p+u,x+m).normalize(),t[2].setComponents(o+s,f+c,p+d,x+_).normalize(),t[3].setComponents(o-s,f-c,p-d,x-_).normalize(),t[4].setComponents(o-r,f-h,p-g,x-y).normalize(),t[5].setComponents(o+r,f+h,p+g,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(uo.x=i.normal.x>0?e.max.x:e.min.x,uo.y=i.normal.y>0?e.max.y:e.min.y,uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hf(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function lm(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,u=c.usage,d=a.createBuffer();a.bindBuffer(h,d),a.bufferData(h,f,u),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,f){const u=h.array,d=h.updateRange;a.bindBuffer(f,c),d.count===-1?a.bufferSubData(f,0,u):(t?a.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):a.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,h)):f.version<c.version&&(s(f.buffer,c,h),f.version=c.version)}return{get:r,remove:o,update:l}}class pn extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const y=_*u-r;for(let x=0;x<c;x++){const b=x*f-s;g.push(b,-y,0),p.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<o;y++){const x=y+c*_,b=y+c*(_+1),M=y+1+c*(_+1),E=y+1+c*_;d.push(x,b,E),d.push(b,M,E)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(p,3)),this.setAttribute("uv",new Ne(m,2))}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}var cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm="vec3 transformed = vec3( position );",gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
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
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Jm=`#if defined( USE_ENVMAP )
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,S0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ng=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
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
	#include <encodings_fragment>
}`,vg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Eg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Og=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ge={alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:fm,aomap_fragment:dm,aomap_pars_fragment:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:_m,iridescence_fragment:xm,bumpmap_pars_fragment:vm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Em,color_vertex:Am,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Om,encodings_fragment:Nm,encodings_pars_fragment:km,envmap_fragment:Fm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:zm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Jm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Hm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_fragment:Ym,lightmap_pars_fragment:jm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Zm,lights_pars_begin:$m,lights_toon_fragment:Qm,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphcolor_vertex:x0,morphnormal_vertex:v0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:b0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:E0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:R0,output_fragment:I0,packing:D0,premultiplied_alpha_fragment:O0,project_vertex:N0,dithering_fragment:k0,dithering_pars_fragment:F0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:H0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:j0,specularmap_pars_fragment:K0,tonemapping_fragment:Z0,tonemapping_pars_fragment:$0,transmission_fragment:J0,transmission_pars_fragment:Q0,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,uv2_pars_fragment:ig,uv2_pars_vertex:sg,uv2_vertex:rg,worldpos_vertex:og,background_vert:ag,background_frag:lg,backgroundCube_vert:cg,backgroundCube_frag:hg,cube_vert:ug,cube_frag:fg,depth_vert:dg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:_g,equirect_frag:xg,linedashed_vert:vg,linedashed_frag:yg,meshbasic_vert:Mg,meshbasic_frag:bg,meshlambert_vert:Sg,meshlambert_frag:wg,meshmatcap_vert:Tg,meshmatcap_frag:Eg,meshnormal_vert:Ag,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:Rg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Og,points_vert:Ng,points_frag:kg,shadow_vert:Fg,shadow_frag:Bg,sprite_vert:zg,sprite_frag:Ug},_e={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fn},uv2Transform:{value:new fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}}},kn={basic:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Kt([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Kt([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Kt([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Kt([_e.common,_e.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Kt([_e.lights,_e.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};kn.physical={uniforms:Kt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const fo={r:0,b:0,g:0};function Gg(a,e,t,n,i,s,r){const o=new Ce(0);let l=s===!0?0:1,c,h,f=null,u=0,d=null;function g(m,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=a.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qo)?(h===void 0&&(h=new De(new vi(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Gs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==Je,(f!==x||u!==x.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new De(new pn(2,2),new ct({name:"BackgroundMaterial",uniforms:Gs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(fo,rf(a)),n.buffers.color.setClear(fo.r,fo.g,fo.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function Vg(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function f(D,B,X,K,V){let se=!1;if(r){const te=p(K,X,B);c!==te&&(c=te,d(c.object)),se=_(D,K,X,V),se&&y(D,K,X,V)}else{const te=B.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==te)&&(c.geometry=K.id,c.program=X.id,c.wireframe=te,se=!0)}V!==null&&t.update(V,34963),(se||h)&&(h=!1,v(D,B,X,K),V!==null&&a.bindBuffer(34963,t.get(V).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?a.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,B,X){const K=X.wireframe===!0;let V=o[D.id];V===void 0&&(V={},o[D.id]=V);let se=V[B.id];se===void 0&&(se={},V[B.id]=se);let te=se[K];return te===void 0&&(te=m(u()),se[K]=te),te}function m(D){const B=[],X=[],K=[];for(let V=0;V<i;V++)B[V]=0,X[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:K,object:D,attributes:{},index:null}}function _(D,B,X,K){const V=c.attributes,se=B.attributes;let te=0;const U=X.getAttributes();for(const H in U)if(U[H].location>=0){const ae=V[H];let de=se[H];if(de===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;te++}return c.attributesNum!==te||c.index!==K}function y(D,B,X,K){const V={},se=B.attributes;let te=0;const U=X.getAttributes();for(const H in U)if(U[H].location>=0){let ae=se[H];ae===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),V[H]=de,te++}c.attributes=V,c.attributesNum=te,c.index=K}function x(){const D=c.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function b(D){M(D,0)}function M(D,B){const X=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;X[D]=1,K[D]===0&&(a.enableVertexAttribArray(D),K[D]=1),V[D]!==B&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),V[D]=B)}function E(){const D=c.newAttributes,B=c.enabledAttributes;for(let X=0,K=B.length;X<K;X++)B[X]!==D[X]&&(a.disableVertexAttribArray(X),B[X]=0)}function C(D,B,X,K,V,se){n.isWebGL2===!0&&(X===5124||X===5125)?a.vertexAttribIPointer(D,B,X,V,se):a.vertexAttribPointer(D,B,X,K,V,se)}function v(D,B,X,K){if(n.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=K.attributes,se=X.getAttributes(),te=B.defaultAttributeValues;for(const U in se){const H=se[U];if(H.location>=0){let oe=V[U];if(oe===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const ae=oe.normalized,de=oe.itemSize,$=t.get(oe);if($===void 0)continue;const Ae=$.buffer,me=$.type,Ee=$.bytesPerElement;if(oe.isInterleavedBufferAttribute){const le=oe.data,Re=le.stride,J=oe.offset;if(le.isInstancedInterleavedBuffer){for(let j=0;j<H.locationSize;j++)M(H.location+j,le.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<H.locationSize;j++)b(H.location+j);a.bindBuffer(34962,Ae);for(let j=0;j<H.locationSize;j++)C(H.location+j,de/H.locationSize,me,ae,Re*Ee,(J+de/H.locationSize*j)*Ee)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)M(H.location+le,oe.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<H.locationSize;le++)b(H.location+le);a.bindBuffer(34962,Ae);for(let le=0;le<H.locationSize;le++)C(H.location+le,de/H.locationSize,me,ae,de*Ee,de/H.locationSize*le*Ee)}}else if(te!==void 0){const ae=te[U];if(ae!==void 0)switch(ae.length){case 2:a.vertexAttrib2fv(H.location,ae);break;case 3:a.vertexAttrib3fv(H.location,ae);break;case 4:a.vertexAttrib4fv(H.location,ae);break;default:a.vertexAttrib1fv(H.location,ae)}}}}E()}function w(){Y();for(const D in o){const B=o[D];for(const X in B){const K=B[X];for(const V in K)g(K[V].object),delete K[V];delete B[X]}delete o[D]}}function R(D){if(o[D.id]===void 0)return;const B=o[D.id];for(const X in B){const K=B[X];for(const V in K)g(K[V].object),delete K[V];delete B[X]}delete o[D.id]}function k(D){for(const B in o){const X=o[B];if(X[D.id]===void 0)continue;const K=X[D.id];for(const V in K)g(K[V].object),delete K[V];delete X[D.id]}}function Y(){O(),h=!0,c!==l&&(c=l,d(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function Hg(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let u,d;if(i)u=a,d="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](s,c,h,f),t.update(h,s,f)}this.setMode=r,this.render=o,this.renderInstances=l}function Wg(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=a.getParameter(34930),u=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),y=a.getParameter(36349),x=u>0,b=r||e.has("OES_texture_float"),M=x&&b,E=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:E}}function Xg(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Fi,o=new fn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u,d){const g=f.length!==0||u||n!==0||i;return i=u,t=h(f,d,0),n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,u,d){const g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,_=a.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let b=_.clippingState||null;l.value=b,b=h(g,u,x,d);for(let M=0;M!==x;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,b=d;x!==p;++x,b+=4)r.copy(f[x]).applyMatrix4(y,o),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function qg(a){let e=new WeakMap;function t(r,o){return o===sl?r.mapping=Fs:o===rl&&(r.mapping=Bs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===sl||o===rl)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new cf(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jo extends of{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,lh=[.125,.215,.35,.446,.526,.582],Ui=20,Ia=new jo,ch=new Ce;let Da=null;const Bi=(1+Math.sqrt(5))/2,ys=1/Bi,hh=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Bi,ys),new A(0,Bi,-ys),new A(ys,0,Bi),new A(-ys,0,Bi),new A(Bi,ys,0),new A(-Bi,ys,0)];class uh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Er,format:hn,encoding:Zi,depthBuffer:!1},i=fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=jg(s,e,t)}return i}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i){const o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(ch),h.toneMapping=si,h.autoClear=!1;const d=new Dt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new De(new vi,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(ch),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):y===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;po(i,y*x,_>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new De(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=hh[(i-1)%hh.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new De(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):Ui;m>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const _=[];let y=0;for(let C=0;C<Ui;++C){const v=C/p,w=Math.exp(-v*v/2);_.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const b=this._sizeLods[i],M=3*b*(i>x-ws?i-x+ws:0),E=4*(this._cubeSize-b);po(t,M,E,3*b,2*b),l.setRenderTarget(t),l.render(f,Ia)}}function Yg(a){const e=[],t=[],n=[];let i=a;const s=a-ws+1+lh.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-ws?l=lh[r-a+ws-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,p=3,m=2,_=1,y=new Float32Array(p*g*d),x=new Float32Array(m*g*d),b=new Float32Array(_*g*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,v=E>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(w,p*g*E),x.set(u,m*g*E);const R=[E,E,E,E,E,E];b.set(R,_*g*E)}const M=new at;M.setAttribute("position",new ot(y,p)),M.setAttribute("uv",new ot(x,m)),M.setAttribute("faceIndex",new ot(b,_)),e.push(M),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fh(a,e,t){const n=new In(a,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function jg(a,e,t){const n=new Float32Array(Ui),i=new A(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function dh(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ph(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Kg(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===sl||l===rl,h=l===Fs||l===Bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new uh(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new uh(a));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Zg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $g(a,e,t,n){const i={},s=new WeakMap;function r(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],34962);const d=f.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let p=0;if(d!==null){const y=d.array;p=d.version;for(let x=0,b=y.length;x<b;x+=3){const M=y[x+0],E=y[x+1],C=y[x+2];u.push(M,E,E,C,C,M)}}else{const y=g.array;p=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const M=x+0,E=x+1,C=x+2;u.push(M,E,E,C,C,M)}}const m=new($u(u)?sf:nf)(u,1);m.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(a,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,d){a.drawElements(s,d,o,u*l),t.update(d,s,1)}function f(u,d,g){if(g===0)return;let p,m;if(i)p=a,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,o,u*l,g),t.update(d,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=f}function Qg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function e_(a,e){return a[0]-e[0]}function t_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function n_(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new st,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==m){let X=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let R=0;b===!0&&(R=1),M===!0&&(R=2),E===!0&&(R=3);let k=h.attributes.position.count*R,Y=1;k>e.maxTextureSize&&(Y=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*Y*4*m),D=new tf(O,k,Y,m);D.type=pi,D.needsUpdate=!0;const B=R*4;for(let K=0;K<m;K++){const V=C[K],se=v[K],te=w[K],U=k*Y*4*K;for(let H=0;H<V.count;H++){const oe=H*B;b===!0&&(r.fromBufferAttribute(V,H),O[U+oe+0]=r.x,O[U+oe+1]=r.y,O[U+oe+2]=r.z,O[U+oe+3]=0),M===!0&&(r.fromBufferAttribute(se,H),O[U+oe+4]=r.x,O[U+oe+5]=r.y,O[U+oe+6]=r.z,O[U+oe+7]=0),E===!0&&(r.fromBufferAttribute(te,H),O[U+oe+8]=r.x,O[U+oe+9]=r.y,O[U+oe+10]=r.z,O[U+oe+11]=te.itemSize===4?r.w:1)}}_={count:m,texture:D,size:new ce(k,Y)},s.set(h,_),h.addEventListener("dispose",X)}let y=0;for(let b=0;b<d.length;b++)y+=d[b];const x=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",x),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];n[h.id]=m}for(let M=0;M<p;M++){const E=m[M];E[0]=M,E[1]=d[M]}m.sort(t_);for(let M=0;M<8;M++)M<p&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(e_);const _=h.morphAttributes.position,y=h.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const E=o[M],C=E[0],v=E[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+M)!==_[C]&&h.setAttribute("morphTarget"+M,_[C]),y&&h.getAttribute("morphNormal"+M)!==y[C]&&h.setAttribute("morphNormal"+M,y[C]),i[M]=v,x+=v):(_&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),y&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const b=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",b),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function i_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const uf=new Ot,ff=new tf,df=new qp,pf=new lf,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Qs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=mh[i];if(s===void 0&&(s=new Float32Array(i),mh[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function At(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ct(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ko(a,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function s_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function r_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2fv(this.addr,e),Ct(t,e)}}function o_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;a.uniform3fv(this.addr,e),Ct(t,e)}}function a_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4fv(this.addr,e),Ct(t,e)}}function l_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;vh.set(n),a.uniformMatrix2fv(this.addr,!1,vh),Ct(t,n)}}function c_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;xh.set(n),a.uniformMatrix3fv(this.addr,!1,xh),Ct(t,n)}}function h_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;_h.set(n),a.uniformMatrix4fv(this.addr,!1,_h),Ct(t,n)}}function u_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function f_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2iv(this.addr,e),Ct(t,e)}}function d_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;a.uniform3iv(this.addr,e),Ct(t,e)}}function p_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4iv(this.addr,e),Ct(t,e)}}function m_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function g_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2uiv(this.addr,e),Ct(t,e)}}function __(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;a.uniform3uiv(this.addr,e),Ct(t,e)}}function x_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4uiv(this.addr,e),Ct(t,e)}}function v_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||uf,i)}function y_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||df,i)}function M_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pf,i)}function b_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ff,i)}function S_(a){switch(a){case 5126:return s_;case 35664:return r_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(a,e){a.uniform1fv(this.addr,e)}function T_(a,e){const t=Qs(e,this.size,2);a.uniform2fv(this.addr,t)}function E_(a,e){const t=Qs(e,this.size,3);a.uniform3fv(this.addr,t)}function A_(a,e){const t=Qs(e,this.size,4);a.uniform4fv(this.addr,t)}function C_(a,e){const t=Qs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function P_(a,e){const t=Qs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function L_(a,e){const t=Qs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function R_(a,e){a.uniform1iv(this.addr,e)}function I_(a,e){a.uniform2iv(this.addr,e)}function D_(a,e){a.uniform3iv(this.addr,e)}function O_(a,e){a.uniform4iv(this.addr,e)}function N_(a,e){a.uniform1uiv(this.addr,e)}function k_(a,e){a.uniform2uiv(this.addr,e)}function F_(a,e){a.uniform3uiv(this.addr,e)}function B_(a,e){a.uniform4uiv(this.addr,e)}function z_(a,e,t){const n=this.cache,i=e.length,s=Ko(t,i);At(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||uf,s[r])}function U_(a,e,t){const n=this.cache,i=e.length,s=Ko(t,i);At(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||df,s[r])}function G_(a,e,t){const n=this.cache,i=e.length,s=Ko(t,i);At(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||pf,s[r])}function V_(a,e,t){const n=this.cache,i=e.length,s=Ko(t,i);At(n,s)||(a.uniform1iv(this.addr,s),Ct(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||ff,s[r])}function H_(a){switch(a){case 5126:return w_;case 35664:return T_;case 35665:return E_;case 35666:return A_;case 35674:return C_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return R_;case 35667:case 35671:return I_;case 35668:case 35672:return D_;case 35669:case 35673:return O_;case 5125:return N_;case 36294:return k_;case 36295:return F_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}class W_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=S_(t.type)}}class X_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=H_(t.type)}}class q_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function yh(a,e){a.seq.push(e),a.map[e.id]=e}function Y_(a,e,t){const n=a.name,i=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),r=Oa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){yh(t,c===void 0?new W_(o,a,e):new X_(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new q_(o),yh(t,f)),t=f}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Y_(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Mh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let j_=0;function K_(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Z_(a){switch(a){case Zi:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function bh(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+K_(a.getShaderSource(e),r)}else return i}function $_(a,e){const t=Z_(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J_(a,e){let t;switch(e){case ap:t="Linear";break;case lp:t="Reinhard";break;case cp:t="OptimizedCineon";break;case Wu:t="ACESFilmic";break;case hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q_(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function ex(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function gr(a){return a!==""}function Sh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(a){return a.replace(nx,ix)}function ix(a,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return hl(t)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(a){return a.replace(sx,rx)}function rx(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Eh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ox(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===zu?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function cx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Hu:e="ENVMAP_BLENDING_MULTIPLY";break;case rp:e="ENVMAP_BLENDING_MIX";break;case op:e="ENVMAP_BLENDING_ADD";break}return e}function hx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ux(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=ox(t),c=ax(t),h=lx(t),f=cx(t),u=hx(t),d=t.isWebGL2?"":Q_(t),g=ex(s),p=i.createProgram();let m,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(gr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(gr).join(`
`),_.length>0&&(_+=`
`)):(m=[Eh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),_=[d,Eh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ge.tonemapping_pars_fragment:"",t.toneMapping!==si?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,$_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),r=hl(r),r=Sh(r,t),r=wh(r,t),o=hl(o),o=Sh(o,t),o=wh(o,t),r=Th(r),o=Th(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+m+r,b=y+_+o,M=Mh(i,35633,x),E=Mh(i,35632,b);if(i.attachShader(p,M),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(E).trim();let Y=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const D=bh(i,M,"vertex"),B=bh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+D+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||k==="")&&(O=!1);O&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:R,prefix:m},fragmentShader:{log:k,prefix:_}})}i.deleteShader(M),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Po(i,p)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=tx(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let fx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new px(e),t.set(e,n)),n}}class px{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function mx(a,e,t,n,i,s,r){const o=new kl,l=new dx,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,w,R,k,Y){const O=k.fog,D=Y.geometry,B=v.isMeshStandardMaterial?k.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),K=X&&X.mapping===qo?X.image.height:null,V=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=se!==void 0?se.length:0;let U=0;D.morphAttributes.position!==void 0&&(U=1),D.morphAttributes.normal!==void 0&&(U=2),D.morphAttributes.color!==void 0&&(U=3);let H,oe,ae,de;if(V){const Re=kn[V];H=Re.vertexShader,oe=Re.fragmentShader}else H=v.vertexShader,oe=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),de=l.getFragmentShaderID(v);const $=a.getRenderTarget(),Ae=v.alphaTest>0,me=v.clearcoat>0,Ee=v.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:v.type,vertexShader:H,fragmentShader:oe,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:u,outputEncoding:$===null?a.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:Zi,map:!!v.map,matcap:!!v.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Lp,tangentSpaceNormalMap:v.normalMapType===Ku,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:me,clearcoatMap:me&&!!v.clearcoatMap,clearcoatRoughnessMap:me&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!v.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!v.iridescenceMap,iridescenceThicknessMap:Ee&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ps,alphaMap:!!v.alphaMap,alphaTest:Ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:si,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===dn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(w,v),y(w,v),w.push(a.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function x(v){const w=g[v.type];let R;if(w){const k=kn[w];R=ko.clone(k.uniforms)}else R=v.uniforms;return R}function b(v,w){let R;for(let k=0,Y=c.length;k<Y;k++){const O=c[k];if(O.cacheKey===w){R=O,++R.usedTimes;break}}return R===void 0&&(R=new ux(a,w,v,s),c.push(R)),R}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:C}}function gx(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _x(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ah(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ch(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f,u,d,g,p,m){let _=a[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},a[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function o(f,u,d,g,p,m){const _=r(f,u,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(f,u,d,g,p,m){const _=r(f,u,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,u){t.length>1&&t.sort(f||_x),n.length>1&&n.sort(u||Ah),i.length>1&&i.sort(u||Ah)}function h(){for(let f=e,u=a.length;f<u;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function xx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Ch,a.set(n,[r])):i>=s.length?(r=new Ch,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function vx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ce};break;case"SpotLight":t={position:new A,direction:new A,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new A,halfWidth:new A,halfHeight:new A};break}return a[e.id]=t,t}}}function yx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Mx=0;function bx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Sx(a,e){const t=new vx,n=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new A);const s=new A,r=new He,o=new He;function l(h,f){let u=0,d=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,m=0,_=0,y=0,x=0,b=0,M=0,E=0,C=0,v=0;h.sort(bx);const w=f!==!0?Math.PI:1;for(let k=0,Y=h.length;k<Y;k++){const O=h[k],D=O.color,B=O.intensity,X=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=D.r*B*w,d+=D.g*B*w,g+=D.b*B*w;else if(O.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(O.sh.coefficients[V],B);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const se=O.shadow,te=n.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=O.shadow.matrix,b++}i.directional[p]=V,p++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(D).multiplyScalar(B*w),V.distance=X,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,i.spot[_]=V;const se=O.shadow;if(O.map&&(i.spotLightMap[C]=O.map,C++,se.updateMatrices(O),O.castShadow&&v++),i.spotLightMatrix[_]=se.matrix,O.castShadow){const te=n.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=K,E++}_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(D).multiplyScalar(B),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=V,y++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),V.distance=O.distance,V.decay=O.decay,O.castShadow){const se=O.shadow,te=n.get(O);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,te.shadowCameraNear=se.camera.near,te.shadowCameraFar=se.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=O.shadow.matrix,M++}i.point[m]=V,m++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(B*w),V.groundColor.copy(O.groundColor).multiplyScalar(B*w),i.hemi[x]=V,x++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==x||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=x,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=C,i.version=Mx++)}function c(h,f){let u=0,d=0,g=0,p=0,m=0;const _=f.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const b=h[y];if(b.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),u++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Ph(a,e){const t=new Sx(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function wx(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Ph(a,e),t.set(s,[l])):r>=o.length?(l=new Ph(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tx extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
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
}`;function Px(a,e,t){let n=new Fl;const i=new ce,s=new ce,r=new st,o=new Tx({depthPacking:Pp}),l=new Ex,c={},h=t.maxTextureSize,f={0:dn,1:Si,2:Vt},u=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Ax,fragmentShader:Cx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new at;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new De(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu,this.render=function(b,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const C=a.getRenderTarget(),v=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),R=a.state;R.setBlending(xi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let k=0,Y=b.length;k<Y;k++){const O=b[k],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const B=D.getFrameExtents();if(i.multiply(B),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,D.mapSize.y=s.y)),D.map===null){const K=this.type!==mr?{minFilter:Rt,magFilter:Rt}:{};D.map=new In(i.x,i.y,K),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const X=D.getViewportCount();for(let K=0;K<X;K++){const V=D.getViewport(K);r.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),R.viewport(r),D.updateMatrices(O,K),n=D.getFrustum(),x(M,E,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===mr&&_(D,E),D.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(C,v,w)};function _(b,M){const E=e.update(p);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new In(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(M,null,E,u,p,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(M,null,E,d,p,null)}function y(b,M,E,C,v,w){let R=null;const k=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)R=k;else if(R=E.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Y=R.uuid,O=M.uuid;let D=c[Y];D===void 0&&(D={},c[Y]=D);let B=D[O];B===void 0&&(B=R.clone(),D[O]=B),R=B}return R.visible=M.visible,R.wireframe=M.wireframe,w===mr?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:f[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=C,R.farDistance=v),R}function x(b,M,E,C,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===mr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const k=e.update(b),Y=b.material;if(Array.isArray(Y)){const O=k.groups;for(let D=0,B=O.length;D<B;D++){const X=O[D],K=Y[X.materialIndex];if(K&&K.visible){const V=y(b,K,C,E.near,E.far,v);a.renderBufferDirect(E,null,k,V,b,X)}}}else if(Y.visible){const O=y(b,Y,C,E.near,E.far,v);a.renderBufferDirect(E,null,k,O,b,null)}}const R=b.children;for(let k=0,Y=R.length;k<Y;k++)x(R[k],M,E,C,v)}}function Lx(a,e,t){const n=t.isWebGL2;function i(){let N=!1;const Z=new st;let ue=null;const Se=new st(0,0,0,0);return{setMask:function(xe){ue!==xe&&!N&&(a.colorMask(xe,xe,xe,xe),ue=xe)},setLocked:function(xe){N=xe},setClear:function(xe,Oe,gt,zt,Ci){Ci===!0&&(xe*=zt,Oe*=zt,gt*=zt),Z.set(xe,Oe,gt,zt),Se.equals(Z)===!1&&(a.clearColor(xe,Oe,gt,zt),Se.copy(Z))},reset:function(){N=!1,ue=null,Se.set(-1,0,0,0)}}}function s(){let N=!1,Z=null,ue=null,Se=null;return{setTest:function(xe){xe?Ae(2929):me(2929)},setMask:function(xe){Z!==xe&&!N&&(a.depthMask(xe),Z=xe)},setFunc:function(xe){if(ue!==xe){switch(xe){case Jd:a.depthFunc(512);break;case Qd:a.depthFunc(519);break;case ep:a.depthFunc(513);break;case il:a.depthFunc(515);break;case tp:a.depthFunc(514);break;case np:a.depthFunc(518);break;case ip:a.depthFunc(516);break;case sp:a.depthFunc(517);break;default:a.depthFunc(515)}ue=xe}},setLocked:function(xe){N=xe},setClear:function(xe){Se!==xe&&(a.clearDepth(xe),Se=xe)},reset:function(){N=!1,Z=null,ue=null,Se=null}}}function r(){let N=!1,Z=null,ue=null,Se=null,xe=null,Oe=null,gt=null,zt=null,Ci=null;return{setTest:function(lt){N||(lt?Ae(2960):me(2960))},setMask:function(lt){Z!==lt&&!N&&(a.stencilMask(lt),Z=lt)},setFunc:function(lt,Xn,xn){(ue!==lt||Se!==Xn||xe!==xn)&&(a.stencilFunc(lt,Xn,xn),ue=lt,Se=Xn,xe=xn)},setOp:function(lt,Xn,xn){(Oe!==lt||gt!==Xn||zt!==xn)&&(a.stencilOp(lt,Xn,xn),Oe=lt,gt=Xn,zt=xn)},setLocked:function(lt){N=lt},setClear:function(lt){Ci!==lt&&(a.clearStencil(lt),Ci=lt)},reset:function(){N=!1,Z=null,ue=null,Se=null,xe=null,Oe=null,gt=null,zt=null,Ci=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,f=new WeakMap;let u={},d={},g=new WeakMap,p=[],m=null,_=!1,y=null,x=null,b=null,M=null,E=null,C=null,v=null,w=!1,R=null,k=null,Y=null,O=null,D=null;const B=a.getParameter(35661);let X=!1,K=0;const V=a.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=K>=2);let se=null,te={};const U=a.getParameter(3088),H=a.getParameter(2978),oe=new st().fromArray(U),ae=new st().fromArray(H);function de(N,Z,ue){const Se=new Uint8Array(4),xe=a.createTexture();a.bindTexture(N,xe),a.texParameteri(N,10241,9728),a.texParameteri(N,10240,9728);for(let Oe=0;Oe<ue;Oe++)a.texImage2D(Z+Oe,0,6408,1,1,0,6408,5121,Se);return xe}const $={};$[3553]=de(3553,3553,1),$[34067]=de(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(il),fe(!1),Pe(Mc),Ae(2884),he(xi);function Ae(N){u[N]!==!0&&(a.enable(N),u[N]=!0)}function me(N){u[N]!==!1&&(a.disable(N),u[N]=!1)}function Ee(N,Z){return d[N]!==Z?(a.bindFramebuffer(N,Z),d[N]=Z,n&&(N===36009&&(d[36160]=Z),N===36160&&(d[36009]=Z)),!0):!1}function le(N,Z){let ue=p,Se=!1;if(N)if(ue=g.get(Z),ue===void 0&&(ue=[],g.set(Z,ue)),N.isWebGLMultipleRenderTargets){const xe=N.texture;if(ue.length!==xe.length||ue[0]!==36064){for(let Oe=0,gt=xe.length;Oe<gt;Oe++)ue[Oe]=36064+Oe;ue.length=xe.length,Se=!0}}else ue[0]!==36064&&(ue[0]=36064,Se=!0);else ue[0]!==1029&&(ue[0]=1029,Se=!0);Se&&(t.isWebGL2?a.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Re(N){return m!==N?(a.useProgram(N),m=N,!0):!1}const J={[Ss]:32774,[Gd]:32778,[Vd]:32779};if(n)J[wc]=32775,J[Tc]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(J[wc]=N.MIN_EXT,J[Tc]=N.MAX_EXT)}const j={[Hd]:0,[Wd]:1,[Xd]:768,[Gu]:770,[$d]:776,[Kd]:774,[Yd]:772,[qd]:769,[Vu]:771,[Zd]:775,[jd]:773};function he(N,Z,ue,Se,xe,Oe,gt,zt){if(N===xi){_===!0&&(me(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),N!==Ud){if(N!==y||zt!==w){if((x!==Ss||E!==Ss)&&(a.blendEquation(32774),x=Ss,E=Ss),zt)switch(N){case Ps:a.blendFuncSeparate(1,771,1,771);break;case xt:a.blendFunc(1,1);break;case bc:a.blendFuncSeparate(0,769,0,1);break;case Sc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:a.blendFuncSeparate(770,771,1,771);break;case xt:a.blendFunc(770,1);break;case bc:a.blendFuncSeparate(0,769,0,1);break;case Sc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,M=null,C=null,v=null,y=N,w=zt}return}xe=xe||Z,Oe=Oe||ue,gt=gt||Se,(Z!==x||xe!==E)&&(a.blendEquationSeparate(J[Z],J[xe]),x=Z,E=xe),(ue!==b||Se!==M||Oe!==C||gt!==v)&&(a.blendFuncSeparate(j[ue],j[Se],j[Oe],j[gt]),b=ue,M=Se,C=Oe,v=gt),y=N,w=!1}function ve(N,Z){N.side===Vt?me(2884):Ae(2884);let ue=N.side===dn;Z&&(ue=!ue),fe(ue),N.blending===Ps&&N.transparent===!1?he(xi):he(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Se=N.stencilWrite;c.setTest(Se),Se&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),we(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ae(32926):me(32926)}function fe(N){R!==N&&(N?a.frontFace(2304):a.frontFace(2305),R=N)}function Pe(N){N!==Bd?(Ae(2884),N!==k&&(N===Mc?a.cullFace(1029):N===zd?a.cullFace(1028):a.cullFace(1032))):me(2884),k=N}function Te(N){N!==Y&&(X&&a.lineWidth(N),Y=N)}function we(N,Z,ue){N?(Ae(32823),(O!==Z||D!==ue)&&(a.polygonOffset(Z,ue),O=Z,D=ue)):me(32823)}function ze(N){N?Ae(3089):me(3089)}function Ue(N){N===void 0&&(N=33984+B-1),se!==N&&(a.activeTexture(N),se=N)}function T(N,Z,ue){ue===void 0&&(se===null?ue=33984+B-1:ue=se);let Se=te[ue];Se===void 0&&(Se={type:void 0,texture:void 0},te[ue]=Se),(Se.type!==N||Se.texture!==Z)&&(se!==ue&&(a.activeTexture(ue),se=ue),a.bindTexture(N,Z||$[N]),Se.type=N,Se.texture=Z)}function S(){const N=te[se];N!==void 0&&N.type!==void 0&&(a.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{a.compressedTexImage2D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{a.compressedTexImage3D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{a.texSubImage2D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{a.texSubImage3D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{a.texStorage2D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{a.texStorage3D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{a.texImage2D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{a.texImage3D.apply(a,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){oe.equals(N)===!1&&(a.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function Me(N){ae.equals(N)===!1&&(a.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function ke(N,Z){let ue=f.get(Z);ue===void 0&&(ue=new WeakMap,f.set(Z,ue));let Se=ue.get(N);Se===void 0&&(Se=a.getUniformBlockIndex(Z,N.name),ue.set(N,Se))}function Be(N,Z){const Se=f.get(Z).get(N);h.get(Z)!==Se&&(a.uniformBlockBinding(Z,Se,N.__bindingPointIndex),h.set(Z,Se))}function qe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},se=null,te={},d={},g=new WeakMap,p=[],m=null,_=!1,y=null,x=null,b=null,M=null,E=null,C=null,v=null,w=!1,R=null,k=null,Y=null,O=null,D=null,oe.set(0,0,a.canvas.width,a.canvas.height),ae.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:me,bindFramebuffer:Ee,drawBuffers:le,useProgram:Re,setBlending:he,setMaterial:ve,setFlipSided:fe,setCullFace:Pe,setLineWidth:Te,setPolygonOffset:we,setScissorTest:ze,activeTexture:Ue,bindTexture:T,unbindTexture:S,compressedTexImage2D:F,compressedTexImage3D:ee,texImage2D:ge,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Be,texStorage2D:I,texStorage3D:ie,texSubImage2D:W,texSubImage3D:q,compressedTexSubImage2D:Le,compressedTexSubImage3D:L,scissor:be,viewport:Me,reset:qe}}function Rx(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return _?new OffscreenCanvas(T,S):Lr("canvas")}function x(T,S,F,ee){let W=1;if((T.width>ee||T.height>ee)&&(W=ee/Math.max(T.width,T.height)),W<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const q=S?No:Math.floor,Le=q(W*T.width),L=q(W*T.height);p===void 0&&(p=y(Le,L));const I=F?y(Le,L):p;return I.width=Le,I.height=L,I.getContext("2d").drawImage(T,0,0,Le,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Le+"x"+L+")."),I}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return cl(T.width)&&cl(T.height)}function M(T){return o?!1:T.wrapS!==Jt||T.wrapT!==Jt||T.minFilter!==Rt&&T.minFilter!==bt}function E(T,S){return T.generateMipmaps&&S&&T.minFilter!==Rt&&T.minFilter!==bt}function C(T){a.generateMipmap(T)}function v(T,S,F,ee,W=!1){if(o===!1)return S;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=S;return S===6403&&(F===5126&&(q=33326),F===5131&&(q=33325),F===5121&&(q=33321)),S===33319&&(F===5126&&(q=33328),F===5131&&(q=33327),F===5121&&(q=33323)),S===6408&&(F===5126&&(q=34836),F===5131&&(q=34842),F===5121&&(q=ee===Je&&W===!1?35907:32856),F===32819&&(q=32854),F===32820&&(q=32855)),(q===33325||q===33326||q===33327||q===33328||q===34842||q===34836)&&e.get("EXT_color_buffer_float"),q}function w(T,S,F){return E(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==bt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){return T===Rt||T===ol||T===Ao?9728:9729}function k(T){const S=T.target;S.removeEventListener("dispose",k),O(S),S.isVideoTexture&&g.delete(S)}function Y(T){const S=T.target;S.removeEventListener("dispose",Y),B(S)}function O(T){const S=n.get(T);if(S.__webglInit===void 0)return;const F=T.source,ee=m.get(F);if(ee){const W=ee[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(T),Object.keys(ee).length===0&&m.delete(F)}n.remove(T)}function D(T){const S=n.get(T);a.deleteTexture(S.__webglTexture);const F=T.source,ee=m.get(F);delete ee[S.__cacheKey],r.memory.textures--}function B(T){const S=T.texture,F=n.get(T),ee=n.get(S);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)a.deleteFramebuffer(F.__webglFramebuffer[W]),F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer[W]);else{if(a.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&a.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let W=0;W<F.__webglColorRenderbuffer.length;W++)F.__webglColorRenderbuffer[W]&&a.deleteRenderbuffer(F.__webglColorRenderbuffer[W]);F.__webglDepthRenderbuffer&&a.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let W=0,q=S.length;W<q;W++){const Le=n.get(S[W]);Le.__webglTexture&&(a.deleteTexture(Le.__webglTexture),r.memory.textures--),n.remove(S[W])}n.remove(S),n.remove(T)}let X=0;function K(){X=0}function V(){const T=X;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),X+=1,T}function se(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function te(T,S){const F=n.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,T,S);return}}t.bindTexture(3553,F.__webglTexture,33984+S)}function U(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){me(F,T,S);return}t.bindTexture(35866,F.__webglTexture,33984+S)}function H(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){me(F,T,S);return}t.bindTexture(32879,F.__webglTexture,33984+S)}function oe(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Ee(F,T,S);return}t.bindTexture(34067,F.__webglTexture,33984+S)}const ae={[wi]:10497,[Jt]:33071,[Oo]:33648},de={[Rt]:9728,[ol]:9984,[Ao]:9986,[bt]:9729,[qu]:9985,[Un]:9987};function $(T,S,F){if(F?(a.texParameteri(T,10242,ae[S.wrapS]),a.texParameteri(T,10243,ae[S.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,ae[S.wrapR]),a.texParameteri(T,10240,de[S.magFilter]),a.texParameteri(T,10241,de[S.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(S.wrapS!==Jt||S.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,R(S.magFilter)),a.texParameteri(T,10241,R(S.minFilter)),S.minFilter!==Rt&&S.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Rt||S.minFilter!==Ao&&S.minFilter!==Un||S.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(T,S){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",k));const ee=S.source;let W=m.get(ee);W===void 0&&(W={},m.set(ee,W));const q=se(S);if(q!==T.__cacheKey){W[q]===void 0&&(W[q]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,F=!0),W[q].usedTimes++;const Le=W[T.__cacheKey];Le!==void 0&&(W[T.__cacheKey].usedTimes--,Le.usedTimes===0&&D(S)),T.__cacheKey=q,T.__webglTexture=W[q].texture}return F}function me(T,S,F){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const W=Ae(T,S),q=S.source;t.bindTexture(ee,T.__webglTexture,33984+F);const Le=n.get(q);if(q.version!==Le.__version||W===!0){t.activeTexture(33984+F),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const L=M(S)&&b(S.image)===!1;let I=x(S.image,L,!1,h);I=Ue(S,I);const ie=b(I)||o,ge=s.convert(S.format,S.encoding);let pe=s.convert(S.type),be=v(S.internalFormat,ge,pe,S.encoding,S.isVideoTexture);$(ee,S,ie);let Me;const ke=S.mipmaps,Be=o&&S.isVideoTexture!==!0,qe=Le.__version===void 0||W===!0,N=w(S,I,ie);if(S.isDepthTexture)be=6402,o?S.type===pi?be=36012:S.type===Gi?be=33190:S.type===Ls?be=35056:be=33189:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Hi&&be===6402&&S.type!==Yu&&S.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Gi,pe=s.convert(S.type)),S.format===zs&&be===6402&&(be=34041,S.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ls,pe=s.convert(S.type))),qe&&(Be?t.texStorage2D(3553,1,be,I.width,I.height):t.texImage2D(3553,0,be,I.width,I.height,0,ge,pe,null));else if(S.isDataTexture)if(ke.length>0&&ie){Be&&qe&&t.texStorage2D(3553,N,be,ke[0].width,ke[0].height);for(let Z=0,ue=ke.length;Z<ue;Z++)Me=ke[Z],Be?t.texSubImage2D(3553,Z,0,0,Me.width,Me.height,ge,pe,Me.data):t.texImage2D(3553,Z,be,Me.width,Me.height,0,ge,pe,Me.data);S.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(3553,N,be,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,ge,pe,I.data)):t.texImage2D(3553,0,be,I.width,I.height,0,ge,pe,I.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(35866,N,be,ke[0].width,ke[0].height,I.depth);for(let Z=0,ue=ke.length;Z<ue;Z++)Me=ke[Z],S.format!==hn?ge!==null?Be?t.compressedTexSubImage3D(35866,Z,0,0,0,Me.width,Me.height,I.depth,ge,Me.data,0,0):t.compressedTexImage3D(35866,Z,be,Me.width,Me.height,I.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,Z,0,0,0,Me.width,Me.height,I.depth,ge,pe,Me.data):t.texImage3D(35866,Z,be,Me.width,Me.height,I.depth,0,ge,pe,Me.data)}else{Be&&qe&&t.texStorage2D(3553,N,be,ke[0].width,ke[0].height);for(let Z=0,ue=ke.length;Z<ue;Z++)Me=ke[Z],S.format!==hn?ge!==null?Be?t.compressedTexSubImage2D(3553,Z,0,0,Me.width,Me.height,ge,Me.data):t.compressedTexImage2D(3553,Z,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,Z,0,0,Me.width,Me.height,ge,pe,Me.data):t.texImage2D(3553,Z,be,Me.width,Me.height,0,ge,pe,Me.data)}else if(S.isDataArrayTexture)Be?(qe&&t.texStorage3D(35866,N,be,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,ge,pe,I.data)):t.texImage3D(35866,0,be,I.width,I.height,I.depth,0,ge,pe,I.data);else if(S.isData3DTexture)Be?(qe&&t.texStorage3D(32879,N,be,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,ge,pe,I.data)):t.texImage3D(32879,0,be,I.width,I.height,I.depth,0,ge,pe,I.data);else if(S.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(3553,N,be,I.width,I.height);else{let Z=I.width,ue=I.height;for(let Se=0;Se<N;Se++)t.texImage2D(3553,Se,be,Z,ue,0,ge,pe,null),Z>>=1,ue>>=1}}else if(ke.length>0&&ie){Be&&qe&&t.texStorage2D(3553,N,be,ke[0].width,ke[0].height);for(let Z=0,ue=ke.length;Z<ue;Z++)Me=ke[Z],Be?t.texSubImage2D(3553,Z,0,0,ge,pe,Me):t.texImage2D(3553,Z,be,ge,pe,Me);S.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(3553,N,be,I.width,I.height),t.texSubImage2D(3553,0,0,0,ge,pe,I)):t.texImage2D(3553,0,be,ge,pe,I);E(S,ie)&&C(ee),Le.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ee(T,S,F){if(S.image.length!==6)return;const ee=Ae(T,S),W=S.source;t.bindTexture(34067,T.__webglTexture,33984+F);const q=n.get(W);if(W.version!==q.__version||ee===!0){t.activeTexture(33984+F),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,I=[];for(let Z=0;Z<6;Z++)!Le&&!L?I[Z]=x(S.image[Z],!1,!0,c):I[Z]=L?S.image[Z].image:S.image[Z],I[Z]=Ue(S,I[Z]);const ie=I[0],ge=b(ie)||o,pe=s.convert(S.format,S.encoding),be=s.convert(S.type),Me=v(S.internalFormat,pe,be,S.encoding),ke=o&&S.isVideoTexture!==!0,Be=q.__version===void 0||ee===!0;let qe=w(S,ie,ge);$(34067,S,ge);let N;if(Le){ke&&Be&&t.texStorage2D(34067,qe,Me,ie.width,ie.height);for(let Z=0;Z<6;Z++){N=I[Z].mipmaps;for(let ue=0;ue<N.length;ue++){const Se=N[ue];S.format!==hn?pe!==null?ke?t.compressedTexSubImage2D(34069+Z,ue,0,0,Se.width,Se.height,pe,Se.data):t.compressedTexImage2D(34069+Z,ue,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+Z,ue,0,0,Se.width,Se.height,pe,be,Se.data):t.texImage2D(34069+Z,ue,Me,Se.width,Se.height,0,pe,be,Se.data)}}}else{N=S.mipmaps,ke&&Be&&(N.length>0&&qe++,t.texStorage2D(34067,qe,Me,I[0].width,I[0].height));for(let Z=0;Z<6;Z++)if(L){ke?t.texSubImage2D(34069+Z,0,0,0,I[Z].width,I[Z].height,pe,be,I[Z].data):t.texImage2D(34069+Z,0,Me,I[Z].width,I[Z].height,0,pe,be,I[Z].data);for(let ue=0;ue<N.length;ue++){const xe=N[ue].image[Z].image;ke?t.texSubImage2D(34069+Z,ue+1,0,0,xe.width,xe.height,pe,be,xe.data):t.texImage2D(34069+Z,ue+1,Me,xe.width,xe.height,0,pe,be,xe.data)}}else{ke?t.texSubImage2D(34069+Z,0,0,0,pe,be,I[Z]):t.texImage2D(34069+Z,0,Me,pe,be,I[Z]);for(let ue=0;ue<N.length;ue++){const Se=N[ue];ke?t.texSubImage2D(34069+Z,ue+1,0,0,pe,be,Se.image[Z]):t.texImage2D(34069+Z,ue+1,Me,pe,be,Se.image[Z])}}}E(S,ge)&&C(34067),q.__version=W.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,F,ee,W){const q=s.convert(F.format,F.encoding),Le=s.convert(F.type),L=v(F.internalFormat,q,Le,F.encoding);n.get(S).__hasExternalTextures||(W===32879||W===35866?t.texImage3D(W,0,L,S.width,S.height,S.depth,0,q,Le,null):t.texImage2D(W,0,L,S.width,S.height,0,q,Le,null)),t.bindFramebuffer(36160,T),we(S)?u.framebufferTexture2DMultisampleEXT(36160,ee,W,n.get(F).__webglTexture,0,Te(S)):(W===3553||W>=34069&&W<=34074)&&a.framebufferTexture2D(36160,ee,W,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(T,S,F){if(a.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(F||we(S)){const W=S.depthTexture;W&&W.isDepthTexture&&(W.type===pi?ee=36012:W.type===Gi&&(ee=33190));const q=Te(S);we(S)?u.renderbufferStorageMultisampleEXT(36161,q,ee,S.width,S.height):a.renderbufferStorageMultisample(36161,q,ee,S.width,S.height)}else a.renderbufferStorage(36161,ee,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Te(S);F&&we(S)===!1?a.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):we(S)?u.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let W=0;W<ee.length;W++){const q=ee[W],Le=s.convert(q.format,q.encoding),L=s.convert(q.type),I=v(q.internalFormat,Le,L,q.encoding),ie=Te(S);F&&we(S)===!1?a.renderbufferStorageMultisample(36161,ie,I,S.width,S.height):we(S)?u.renderbufferStorageMultisampleEXT(36161,ie,I,S.width,S.height):a.renderbufferStorage(36161,I,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function J(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,W=Te(S);if(S.depthTexture.format===Hi)we(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,W):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===zs)we(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,W):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function j(T){const S=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");J(S.__webglFramebuffer,T)}else if(F){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=a.createRenderbuffer(),Re(S.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),Re(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function he(T,S,F){const ee=n.get(T);S!==void 0&&le(ee.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&j(T)}function ve(T){const S=T.texture,F=n.get(T),ee=n.get(S);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=S.version,r.memory.textures++);const W=T.isWebGLCubeRenderTarget===!0,q=T.isWebGLMultipleRenderTargets===!0,Le=b(T)||o;if(W){F.__webglFramebuffer=[];for(let L=0;L<6;L++)F.__webglFramebuffer[L]=a.createFramebuffer()}else{if(F.__webglFramebuffer=a.createFramebuffer(),q)if(i.drawBuffers){const L=T.texture;for(let I=0,ie=L.length;I<ie;I++){const ge=n.get(L[I]);ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&we(T)===!1){const L=q?S:[S];F.__webglMultisampledFramebuffer=a.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let I=0;I<L.length;I++){const ie=L[I];F.__webglColorRenderbuffer[I]=a.createRenderbuffer(),a.bindRenderbuffer(36161,F.__webglColorRenderbuffer[I]);const ge=s.convert(ie.format,ie.encoding),pe=s.convert(ie.type),be=v(ie.internalFormat,ge,pe,ie.encoding,T.isXRRenderTarget===!0),Me=Te(T);a.renderbufferStorageMultisample(36161,Me,be,T.width,T.height),a.framebufferRenderbuffer(36160,36064+I,36161,F.__webglColorRenderbuffer[I])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=a.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(W){t.bindTexture(34067,ee.__webglTexture),$(34067,S,Le);for(let L=0;L<6;L++)le(F.__webglFramebuffer[L],T,S,36064,34069+L);E(S,Le)&&C(34067),t.unbindTexture()}else if(q){const L=T.texture;for(let I=0,ie=L.length;I<ie;I++){const ge=L[I],pe=n.get(ge);t.bindTexture(3553,pe.__webglTexture),$(3553,ge,Le),le(F.__webglFramebuffer,T,ge,36064+I,3553),E(ge,Le)&&C(3553)}t.unbindTexture()}else{let L=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?L=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),$(L,S,Le),le(F.__webglFramebuffer,T,S,36064,L),E(S,Le)&&C(L),t.unbindTexture()}T.depthBuffer&&j(T)}function fe(T){const S=b(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,W=F.length;ee<W;ee++){const q=F[ee];if(E(q,S)){const Le=T.isWebGLCubeRenderTarget?34067:3553,L=n.get(q).__webglTexture;t.bindTexture(Le,L),C(Le),t.unbindTexture()}}}function Pe(T){if(o&&T.samples>0&&we(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ee=T.height;let W=16384;const q=[],Le=T.stencilBuffer?33306:36096,L=n.get(T),I=T.isWebGLMultipleRenderTargets===!0;if(I)for(let ie=0;ie<S.length;ie++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ie,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ie,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ie=0;ie<S.length;ie++){q.push(36064+ie),T.depthBuffer&&q.push(Le);const ge=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ge===!1&&(T.depthBuffer&&(W|=256),T.stencilBuffer&&(W|=1024)),I&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ie]),ge===!0&&(a.invalidateFramebuffer(36008,[Le]),a.invalidateFramebuffer(36009,[Le])),I){const pe=n.get(S[ie]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,pe,0)}a.blitFramebuffer(0,0,F,ee,0,0,F,ee,W,9728),d&&a.invalidateFramebuffer(36008,q)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let ie=0;ie<S.length;ie++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ie,36161,L.__webglColorRenderbuffer[ie]);const ge=n.get(S[ie]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ie,3553,ge,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Te(T){return Math.min(f,T.samples)}function we(T){const S=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(T){const S=r.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function Ue(T,S){const F=T.encoding,ee=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ll||F!==Zi&&(F===Je?o===!1?e.has("EXT_sRGB")===!0&&ee===hn?(T.format=ll,T.minFilter=bt,T.generateMipmaps=!1):S=Qu.sRGBToLinear(S):(ee!==hn||W!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),S}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=te,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=oe,this.rebindTextures=he,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=le,this.useMultisampledRTT=we}function Ix(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Ki)return 5121;if(s===pp)return 32819;if(s===mp)return 32820;if(s===up)return 5120;if(s===fp)return 5122;if(s===Yu)return 5123;if(s===dp)return 5124;if(s===Gi)return 5125;if(s===pi)return 5126;if(s===Er)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gp)return 6406;if(s===hn)return 6408;if(s===xp)return 6409;if(s===vp)return 6410;if(s===Hi)return 6402;if(s===zs)return 34041;if(s===_p)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ll)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===yp)return 6403;if(s===Mp)return 36244;if(s===bp)return 33319;if(s===Sp)return 33320;if(s===wp)return 36249;if(s===oa||s===aa||s===la||s===ca)if(r===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===aa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===la)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ec||s===Ac||s===Cc||s===Pc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ec)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ac)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lc||s===Rc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Lc)return r===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Rc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ic||s===Dc||s===Oc||s===Nc||s===kc||s===Fc||s===Bc||s===zc||s===Uc||s===Gc||s===Vc||s===Hc||s===Wc||s===Xc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ic)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xc)return r===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===qc)return r===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ls?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Dx extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nx extends Ot{constructor(e,t,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=Gi),n===void 0&&h===zs&&(n=Ls),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class kx extends es{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,h=null,f=null,u=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],y=[],x=new Set,b=new Map,M=new Zt;M.layers.enable(1),M.viewport=new st;const E=new Zt;E.layers.enable(2),E.viewport=new st;const C=[M,E],v=new Dx;v.layers.enable(1),v.layers.enable(2);let w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=_[U];return H===void 0&&(H=new Na,_[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=_[U];return H===void 0&&(H=new Na,_[U]=H),H.getGripSpace()},this.getHand=function(U){let H=_[U];return H===void 0&&(H=new Na,_[U]=H),H.getHandSpace()};function k(U){const H=y.indexOf(U.inputSource);if(H===-1)return;const oe=_[H];oe!==void 0&&oe.dispatchEvent({type:U.type,data:U.inputSource})}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",O);for(let U=0;U<_.length;U++){const H=y[U];H!==null&&(y[U]=null,_[U].disconnect(H))}w=null,R=null,e.setRenderTarget(p),u=null,f=null,h=null,i=null,m=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:u}),m=new In(u.framebufferWidth,u.framebufferHeight,{format:hn,type:Ki,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,oe=null,ae=null;g.depth&&(ae=g.stencil?35056:33190,H=g.stencil?zs:Hi,oe=g.stencil?Ls:Gi);const de={colorFormat:32856,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(de),i.updateRenderState({layers:[f]}),m=new In(f.textureWidth,f.textureHeight,{format:hn,type:Ki,depthTexture:new Nx(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const $=e.properties.get(m);$.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(U){for(let H=0;H<U.removed.length;H++){const oe=U.removed[H],ae=y.indexOf(oe);ae>=0&&(y[ae]=null,_[ae].disconnect(oe))}for(let H=0;H<U.added.length;H++){const oe=U.added[H];let ae=y.indexOf(oe);if(ae===-1){for(let $=0;$<_.length;$++)if($>=y.length){y.push(oe),ae=$;break}else if(y[$]===null){y[$]=oe,ae=$;break}if(ae===-1)break}const de=_[ae];de&&de.connect(oe)}}const D=new A,B=new A;function X(U,H,oe){D.setFromMatrixPosition(H.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const ae=D.distanceTo(B),de=H.projectionMatrix.elements,$=oe.projectionMatrix.elements,Ae=de[14]/(de[10]-1),me=de[14]/(de[10]+1),Ee=(de[9]+1)/de[5],le=(de[9]-1)/de[5],Re=(de[8]-1)/de[0],J=($[8]+1)/$[0],j=Ae*Re,he=Ae*J,ve=ae/(-Re+J),fe=ve*-Re;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(fe),U.translateZ(ve),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Pe=Ae+ve,Te=me+ve,we=j-fe,ze=he+(ae-fe),Ue=Ee*me/Te*Pe,T=le*me/Te*Pe;U.projectionMatrix.makePerspective(we,ze,Ue,T,Pe,Te)}function K(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;v.near=E.near=M.near=U.near,v.far=E.far=M.far=U.far,(w!==v.near||R!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,R=v.far);const H=U.parent,oe=v.cameras;K(v,H);for(let de=0;de<oe.length;de++)K(oe[de],H);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),U.matrix.copy(v.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const ae=U.children;for(let de=0,$=ae.length;de<$;de++)ae[de].updateMatrixWorld(!0);oe.length===2?X(v,M,E):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(U){f!==null&&(f.fixedFoveation=U),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=U)},this.getPlanes=function(){return x};let V=null;function se(U,H){if(c=H.getViewerPose(l||r),d=H,c!==null){const oe=c.views;u!==null&&(e.setRenderTargetFramebuffer(m,u.framebuffer),e.setRenderTarget(m));let ae=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let de=0;de<oe.length;de++){const $=oe[de];let Ae=null;if(u!==null)Ae=u.getViewport($);else{const Ee=h.getViewSubImage(f,$);Ae=Ee.viewport,de===0&&(e.setRenderTargetTextures(m,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(m))}let me=C[de];me===void 0&&(me=new Zt,me.layers.enable(de),me.viewport=new st,C[de]=me),me.matrix.fromArray($.transform.matrix),me.projectionMatrix.fromArray($.projectionMatrix),me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),de===0&&v.matrix.copy(me.matrix),ae===!0&&v.cameras.push(me)}}for(let oe=0;oe<_.length;oe++){const ae=y[oe],de=_[oe];ae!==null&&de!==void 0&&de.update(ae,H,l||r)}if(V&&V(U,H),H.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let oe=null;for(const ae of x)H.detectedPlanes.has(ae)||(oe===null&&(oe=[]),oe.push(ae));if(oe!==null)for(const ae of oe)x.delete(ae),b.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of H.detectedPlanes)if(!x.has(ae))x.add(ae),b.set(ae,H.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const de=b.get(ae);ae.lastChangedTime>de&&(b.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}d=null}const te=new hf;te.setAnimationLoop(se),this.setAnimationLoop=function(U){V=U},this.dispose=function(){}}}function Fx(a,e){function t(p,m){m.color.getRGB(p.fogColor.value,rf(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&r(p,m)):m.isPointsMaterial?o(p,m,_,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function r(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===dn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Bx(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(y,M);const E=e.render.frame;s[y.id]!==E&&(u(y),s[y.id]=E)}function h(y){const x=f();y.__bindingPointIndex=x;const b=a.createBuffer(),M=y.__size,E=y.usage;return a.bindBuffer(35345,b),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,b),b}function f(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],b=y.uniforms,M=y.__cache;a.bindBuffer(35345,x);for(let E=0,C=b.length;E<C;E++){const v=b[E];if(d(v,E,M)===!0){const w=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let k=0;for(let Y=0;Y<R.length;Y++){const O=R[Y],D=p(O);typeof O=="number"?(v.__data[0]=O,a.bufferSubData(35345,w+k,v.__data)):O.isMatrix3?(v.__data[0]=O.elements[0],v.__data[1]=O.elements[1],v.__data[2]=O.elements[2],v.__data[3]=O.elements[0],v.__data[4]=O.elements[3],v.__data[5]=O.elements[4],v.__data[6]=O.elements[5],v.__data[7]=O.elements[0],v.__data[8]=O.elements[6],v.__data[9]=O.elements[7],v.__data[10]=O.elements[8],v.__data[11]=O.elements[0]):(O.toArray(v.__data,k),k+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,v.__data)}}a.bindBuffer(35345,null)}function d(y,x,b){const M=y.value;if(b[x]===void 0){if(typeof M=="number")b[x]=M;else{const E=Array.isArray(M)?M:[M],C=[];for(let v=0;v<E.length;v++)C.push(E[v].clone());b[x]=C}return!0}else if(typeof M=="number"){if(b[x]!==M)return b[x]=M,!0}else{const E=Array.isArray(b[x])?b[x]:[b[x]],C=Array.isArray(M)?M:[M];for(let v=0;v<E.length;v++){const w=E[v];if(w.equals(C[v])===!1)return w.copy(C[v]),!0}}return!1}function g(y){const x=y.uniforms;let b=0;const M=16;let E=0;for(let C=0,v=x.length;C<v;C++){const w=x[C],R={boundary:0,storage:0},k=Array.isArray(w.value)?w.value:[w.value];for(let Y=0,O=k.length;Y<O;Y++){const D=k[Y],B=p(D);R.boundary+=B.boundary,R.storage+=B.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,C>0){E=b%M;const Y=M-E;E!==0&&Y-R.boundary<0&&(b+=M-E,w.__offset=b)}b+=R.storage}return E=b%M,E>0&&(b+=M-E),y.__size=b,y.__cache={},this}function p(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function zx(){const a=Lr("canvas");return a.style.display="block",a}function mf(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:zx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let f=null,u=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const p=this;let m=!1,_=0,y=0,x=null,b=-1,M=null;const E=new st,C=new st;let v=null,w=e.width,R=e.height,k=1,Y=null,O=null;const D=new st(0,0,w,R),B=new st(0,0,w,R);let X=!1;const K=new Fl;let V=!1,se=!1,te=null;const U=new He,H=new ce,oe=new A,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?k:1}let $=t;function Ae(P,G){for(let Q=0;Q<P.length;Q++){const z=P[Q],ne=e.getContext(z,G);if(ne!==null)return ne}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",ke,!1),$===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),$=Ae(G,P),$===null)throw Ae(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let me,Ee,le,Re,J,j,he,ve,fe,Pe,Te,we,ze,Ue,T,S,F,ee,W,q,Le,L,I,ie;function ge(){me=new Zg($),Ee=new Wg($,me,a),me.init(Ee),L=new Ix($,me,Ee),le=new Lx($,me,Ee),Re=new Qg,J=new gx,j=new Rx($,me,le,J,Ee,L,Re),he=new qg(p),ve=new Kg(p),fe=new lm($,Ee),I=new Vg($,me,fe,Ee),Pe=new $g($,fe,Re,I),Te=new i_($,Pe,fe,Re),W=new n_($,Ee,j),S=new Xg(J),we=new mx(p,he,ve,me,Ee,I,S),ze=new Fx(p,J),Ue=new xx,T=new wx(me,Ee),ee=new Gg(p,he,ve,le,Te,h,r),F=new Px(p,Te,Ee),ie=new Bx($,Re,Ee,le),q=new Hg($,me,Re,Ee),Le=new Jg($,me,Re,Ee),Re.programs=we.programs,p.capabilities=Ee,p.extensions=me,p.properties=J,p.renderLists=Ue,p.shadowMap=F,p.state=le,p.info=Re}ge();const pe=new kx(p,$);this.xr=pe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(w,R,!1))},this.getSize=function(P){return P.set(w,R)},this.setSize=function(P,G,Q){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=P,R=G,e.width=Math.floor(P*k),e.height=Math.floor(G*k),Q!==!1&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(w*k,R*k).floor()},this.setDrawingBufferSize=function(P,G,Q){w=P,R=G,k=Q,e.width=Math.floor(P*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(D)},this.setViewport=function(P,G,Q,z){P.isVector4?D.set(P.x,P.y,P.z,P.w):D.set(P,G,Q,z),le.viewport(E.copy(D).multiplyScalar(k).floor())},this.getScissor=function(P){return P.copy(B)},this.setScissor=function(P,G,Q,z){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,G,Q,z),le.scissor(C.copy(B).multiplyScalar(k).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(P){le.setScissorTest(X=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(P=!0,G=!0,Q=!0){let z=0;P&&(z|=16384),G&&(z|=256),Q&&(z|=1024),$.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Ue.dispose(),T.dispose(),J.dispose(),he.dispose(),ve.dispose(),Te.dispose(),I.dispose(),ie.dispose(),we.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Se),pe.removeEventListener("sessionend",xe),te&&(te.dispose(),te=null),Oe.stop()};function be(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const P=Re.autoReset,G=F.enabled,Q=F.autoUpdate,z=F.needsUpdate,ne=F.type;ge(),Re.autoReset=P,F.enabled=G,F.autoUpdate=Q,F.needsUpdate=z,F.type=ne}function ke(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Be(P){const G=P.target;G.removeEventListener("dispose",Be),qe(G)}function qe(P){N(P),J.remove(P)}function N(P){const G=J.get(P).programs;G!==void 0&&(G.forEach(function(Q){we.releaseProgram(Q)}),P.isShaderMaterial&&we.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Q,z,ne,Ie){G===null&&(G=ae);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ve=Od(P,G,Q,z,ne);le.setMaterial(z,Fe);let We=Q.index,$e=1;z.wireframe===!0&&(We=Pe.getWireframeAttribute(Q),$e=2);const Ye=Q.drawRange,je=Q.attributes.position;let vt=Ye.start*$e,sn=(Ye.start+Ye.count)*$e;Ie!==null&&(vt=Math.max(vt,Ie.start*$e),sn=Math.min(sn,(Ie.start+Ie.count)*$e)),We!==null?(vt=Math.max(vt,0),sn=Math.min(sn,We.count)):je!=null&&(vt=Math.max(vt,0),sn=Math.min(sn,je.count));const qn=sn-vt;if(qn<0||qn===1/0)return;I.setup(ne,z,Ve,Q,We);let Pi,yt=q;if(We!==null&&(Pi=fe.get(We),yt=Le,yt.setIndex(Pi)),ne.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*de()),yt.setMode(1)):yt.setMode(4);else if(ne.isLine){let Ke=z.linewidth;Ke===void 0&&(Ke=1),le.setLineWidth(Ke*de()),ne.isLineSegments?yt.setMode(1):ne.isLineLoop?yt.setMode(2):yt.setMode(3)}else ne.isPoints?yt.setMode(0):ne.isSprite&&yt.setMode(4);if(ne.isInstancedMesh)yt.renderInstances(vt,qn,ne.count);else if(Q.isInstancedBufferGeometry){const Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,na=Math.min(Q.instanceCount,Ke);yt.renderInstances(vt,qn,na)}else yt.render(vt,qn)},this.compile=function(P,G){function Q(z,ne,Ie){z.transparent===!0&&z.side===Kr?(z.side=dn,z.needsUpdate=!0,xn(z,ne,Ie),z.side=Si,z.needsUpdate=!0,xn(z,ne,Ie),z.side=Kr):xn(z,ne,Ie)}u=T.get(P),u.init(),g.push(u),P.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(p.physicallyCorrectLights),P.traverse(function(z){const ne=z.material;if(ne)if(Array.isArray(ne))for(let Ie=0;Ie<ne.length;Ie++){const Fe=ne[Ie];Q(Fe,P,z)}else Q(ne,P,z)}),g.pop(),u=null};let Z=null;function ue(P){Z&&Z(P)}function Se(){Oe.stop()}function xe(){Oe.start()}const Oe=new hf;Oe.setAnimationLoop(ue),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(P){Z=P,pe.setAnimationLoop(P),P===null?Oe.stop():Oe.start()},pe.addEventListener("sessionstart",Se),pe.addEventListener("sessionend",xe),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,G,x),u=T.get(P,g.length),u.init(),g.push(u),U.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(U),se=this.localClippingEnabled,V=S.init(this.clippingPlanes,se,G),f=Ue.get(P,d.length),f.init(),d.push(f),gt(P,G,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Y,O),V===!0&&S.beginShadows();const Q=u.state.shadowsArray;if(F.render(Q,P,G),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,P),u.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const z=G.cameras;for(let ne=0,Ie=z.length;ne<Ie;ne++){const Fe=z[ne];zt(f,P,Fe,Fe.viewport)}}else zt(f,P,G);x!==null&&(j.updateMultisampleRenderTarget(x),j.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(p,P,G),I.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function gt(P,G,Q,z){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)u.pushLight(P),P.castShadow&&u.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){z&&oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(U);const Fe=Te.update(P),Ve=P.material;Ve.visible&&f.push(P,Fe,Ve,Q,oe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Re.render.frame&&(P.skeleton.update(),P.skeleton.frame=Re.render.frame),!P.frustumCulled||K.intersectsObject(P))){z&&oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(U);const Fe=Te.update(P),Ve=P.material;if(Array.isArray(Ve)){const We=Fe.groups;for(let $e=0,Ye=We.length;$e<Ye;$e++){const je=We[$e],vt=Ve[je.materialIndex];vt&&vt.visible&&f.push(P,Fe,vt,Q,oe.z,je)}}else Ve.visible&&f.push(P,Fe,Ve,Q,oe.z,null)}}const Ie=P.children;for(let Fe=0,Ve=Ie.length;Fe<Ve;Fe++)gt(Ie[Fe],G,Q,z)}function zt(P,G,Q,z){const ne=P.opaque,Ie=P.transmissive,Fe=P.transparent;u.setupLightsView(Q),Ie.length>0&&Ci(ne,G,Q),z&&le.viewport(E.copy(z)),ne.length>0&&lt(ne,G,Q),Ie.length>0&&lt(Ie,G,Q),Fe.length>0&&lt(Fe,G,Q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ci(P,G,Q){const z=Ee.isWebGL2;te===null&&(te=new In(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Er:Ki,minFilter:Un,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(H),z?te.setSize(H.x,H.y):te.setSize(No(H.x),No(H.y));const ne=p.getRenderTarget();p.setRenderTarget(te),p.clear();const Ie=p.toneMapping;p.toneMapping=si,lt(P,G,Q),p.toneMapping=Ie,j.updateMultisampleRenderTarget(te),j.updateRenderTargetMipmap(te),p.setRenderTarget(ne)}function lt(P,G,Q){const z=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Ie=P.length;ne<Ie;ne++){const Fe=P[ne],Ve=Fe.object,We=Fe.geometry,$e=z===null?Fe.material:z,Ye=Fe.group;Ve.layers.test(Q.layers)&&Xn(Ve,G,Q,We,$e,Ye)}}function Xn(P,G,Q,z,ne,Ie){P.onBeforeRender(p,G,Q,z,ne,Ie),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(p,G,Q,z,P,Ie),ne.transparent===!0&&ne.side===Kr?(ne.side=dn,ne.needsUpdate=!0,p.renderBufferDirect(Q,G,z,ne,P,Ie),ne.side=Si,ne.needsUpdate=!0,p.renderBufferDirect(Q,G,z,ne,P,Ie),ne.side=Kr):p.renderBufferDirect(Q,G,z,ne,P,Ie),P.onAfterRender(p,G,Q,z,ne,Ie)}function xn(P,G,Q){G.isScene!==!0&&(G=ae);const z=J.get(P),ne=u.state.lights,Ie=u.state.shadowsArray,Fe=ne.state.version,Ve=we.getParameters(P,ne.state,Ie,G,Q),We=we.getProgramCacheKey(Ve);let $e=z.programs;z.environment=P.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(P.isMeshStandardMaterial?ve:he).get(P.envMap||z.environment),$e===void 0&&(P.addEventListener("dispose",Be),$e=new Map,z.programs=$e);let Ye=$e.get(We);if(Ye!==void 0){if(z.currentProgram===Ye&&z.lightsStateVersion===Fe)return xc(P,Ve),Ye}else Ve.uniforms=we.getUniforms(P),P.onBuild(Q,Ve,p),P.onBeforeCompile(Ve,p),Ye=we.acquireProgram(Ve,We),$e.set(We,Ye),z.uniforms=Ve.uniforms;const je=z.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=S.uniform),xc(P,Ve),z.needsLights=kd(P),z.lightsStateVersion=Fe,z.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.directionalShadowMap.value=ne.state.directionalShadowMap,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotShadowMap.value=ne.state.spotShadowMap,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMap.value=ne.state.pointShadowMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix);const vt=Ye.getUniforms(),sn=Po.seqWithValue(vt.seq,je);return z.currentProgram=Ye,z.uniformsList=sn,Ye}function xc(P,G){const Q=J.get(P);Q.outputEncoding=G.outputEncoding,Q.instancing=G.instancing,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Od(P,G,Q,z,ne){G.isScene!==!0&&(G=ae),j.resetTextureUnits();const Ie=G.fog,Fe=z.isMeshStandardMaterial?G.environment:null,Ve=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Zi,We=(z.isMeshStandardMaterial?ve:he).get(z.envMap||Fe),$e=z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ye=!!z.normalMap&&!!Q.attributes.tangent,je=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,sn=!!Q.morphAttributes.color,qn=z.toneMapped?p.toneMapping:si,Pi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=Pi!==void 0?Pi.length:0,Ke=J.get(z),na=u.state.lights;if(V===!0&&(se===!0||P!==M)){const rn=P===M&&z.id===b;S.setState(z,P,rn)}let Pt=!1;z.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==na.state.version||Ke.outputEncoding!==Ve||ne.isInstancedMesh&&Ke.instancing===!1||!ne.isInstancedMesh&&Ke.instancing===!0||ne.isSkinnedMesh&&Ke.skinning===!1||!ne.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==We||z.fog===!0&&Ke.fog!==Ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==S.numPlanes||Ke.numIntersection!==S.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ye||Ke.morphTargets!==je||Ke.morphNormals!==vt||Ke.morphColors!==sn||Ke.toneMapping!==qn||Ee.isWebGL2===!0&&Ke.morphTargetsCount!==yt)&&(Pt=!0):(Pt=!0,Ke.__version=z.version);let Li=Ke.currentProgram;Pt===!0&&(Li=xn(z,G,ne));let vc=!1,nr=!1,ia=!1;const Xt=Li.getUniforms(),Ri=Ke.uniforms;if(le.useProgram(Li.program)&&(vc=!0,nr=!0,ia=!0),z.id!==b&&(b=z.id,nr=!0),vc||M!==P){if(Xt.setValue($,"projectionMatrix",P.projectionMatrix),Ee.logarithmicDepthBuffer&&Xt.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,nr=!0,ia=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const rn=Xt.map.cameraPosition;rn!==void 0&&rn.setValue($,oe.setFromMatrixPosition(P.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Xt.setValue($,"isOrthographic",P.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||ne.isSkinnedMesh)&&Xt.setValue($,"viewMatrix",P.matrixWorldInverse)}if(ne.isSkinnedMesh){Xt.setOptional($,ne,"bindMatrix"),Xt.setOptional($,ne,"bindMatrixInverse");const rn=ne.skeleton;rn&&(Ee.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Xt.setValue($,"boneTexture",rn.boneTexture,j),Xt.setValue($,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sa=Q.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0&&Ee.isWebGL2===!0)&&W.update(ne,Q,z,Li),(nr||Ke.receiveShadow!==ne.receiveShadow)&&(Ke.receiveShadow=ne.receiveShadow,Xt.setValue($,"receiveShadow",ne.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ri.envMap.value=We,Ri.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),nr&&(Xt.setValue($,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Nd(Ri,ia),Ie&&z.fog===!0&&ze.refreshFogUniforms(Ri,Ie),ze.refreshMaterialUniforms(Ri,z,k,R,te),Po.upload($,Ke.uniformsList,Ri,j)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Po.upload($,Ke.uniformsList,Ri,j),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Xt.setValue($,"center",ne.center),Xt.setValue($,"modelViewMatrix",ne.modelViewMatrix),Xt.setValue($,"normalMatrix",ne.normalMatrix),Xt.setValue($,"modelMatrix",ne.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const rn=z.uniformsGroups;for(let ra=0,Fd=rn.length;ra<Fd;ra++)if(Ee.isWebGL2){const yc=rn[ra];ie.update(yc,Li),ie.bind(yc,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Nd(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function kd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(P,G,Q){J.get(P.texture).__webglTexture=G,J.get(P.depthTexture).__webglTexture=Q;const z=J.get(P);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Q===void 0,z.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,G){const Q=J.get(P);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Q=0){x=P,_=G,y=Q;let z=!0,ne=null,Ie=!1,Fe=!1;if(P){const We=J.get(P);We.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),z=!1):We.__webglFramebuffer===void 0?j.setupRenderTarget(P):We.__hasExternalTextures&&j.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);const $e=P.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Fe=!0);const Ye=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ne=Ye[G],Ie=!0):Ee.isWebGL2&&P.samples>0&&j.useMultisampledRTT(P)===!1?ne=J.get(P).__webglMultisampledFramebuffer:ne=Ye,E.copy(P.viewport),C.copy(P.scissor),v=P.scissorTest}else E.copy(D).multiplyScalar(k).floor(),C.copy(B).multiplyScalar(k).floor(),v=X;if(le.bindFramebuffer(36160,ne)&&Ee.drawBuffers&&z&&le.drawBuffers(P,ne),le.viewport(E),le.scissor(C),le.setScissorTest(v),Ie){const We=J.get(P.texture);$.framebufferTexture2D(36160,36064,34069+G,We.__webglTexture,Q)}else if(Fe){const We=J.get(P.texture),$e=G||0;$.framebufferTextureLayer(36160,36064,We.__webglTexture,Q||0,$e)}b=-1},this.readRenderTargetPixels=function(P,G,Q,z,ne,Ie,Fe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){le.bindFramebuffer(36160,Ve);try{const We=P.texture,$e=We.format,Ye=We.type;if($e!==hn&&L.convert($e)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ye===Er&&(me.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&me.has("EXT_color_buffer_float"));if(Ye!==Ki&&L.convert(Ye)!==$.getParameter(35738)&&!(Ye===pi&&(Ee.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-z&&Q>=0&&Q<=P.height-ne&&$.readPixels(G,Q,z,ne,L.convert($e),L.convert(Ye),Ie)}finally{const We=x!==null?J.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,We)}}},this.copyFramebufferToTexture=function(P,G,Q=0){const z=Math.pow(2,-Q),ne=Math.floor(G.image.width*z),Ie=Math.floor(G.image.height*z);j.setTexture2D(G,0),$.copyTexSubImage2D(3553,Q,0,0,P.x,P.y,ne,Ie),le.unbindTexture()},this.copyTextureToTexture=function(P,G,Q,z=0){const ne=G.image.width,Ie=G.image.height,Fe=L.convert(Q.format),Ve=L.convert(Q.type);j.setTexture2D(Q,0),$.pixelStorei(37440,Q.flipY),$.pixelStorei(37441,Q.premultiplyAlpha),$.pixelStorei(3317,Q.unpackAlignment),G.isDataTexture?$.texSubImage2D(3553,z,P.x,P.y,ne,Ie,Fe,Ve,G.image.data):G.isCompressedTexture?$.compressedTexSubImage2D(3553,z,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,Fe,G.mipmaps[0].data):$.texSubImage2D(3553,z,P.x,P.y,Fe,Ve,G.image),z===0&&Q.generateMipmaps&&$.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Q,z,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=P.max.x-P.min.x+1,Fe=P.max.y-P.min.y+1,Ve=P.max.z-P.min.z+1,We=L.convert(z.format),$e=L.convert(z.type);let Ye;if(z.isData3DTexture)j.setTexture3D(z,0),Ye=32879;else if(z.isDataArrayTexture)j.setTexture2DArray(z,0),Ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,z.flipY),$.pixelStorei(37441,z.premultiplyAlpha),$.pixelStorei(3317,z.unpackAlignment);const je=$.getParameter(3314),vt=$.getParameter(32878),sn=$.getParameter(3316),qn=$.getParameter(3315),Pi=$.getParameter(32877),yt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;$.pixelStorei(3314,yt.width),$.pixelStorei(32878,yt.height),$.pixelStorei(3316,P.min.x),$.pixelStorei(3315,P.min.y),$.pixelStorei(32877,P.min.z),Q.isDataTexture||Q.isData3DTexture?$.texSubImage3D(Ye,ne,G.x,G.y,G.z,Ie,Fe,Ve,We,$e,yt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ye,ne,G.x,G.y,G.z,Ie,Fe,Ve,We,yt.data)):$.texSubImage3D(Ye,ne,G.x,G.y,G.z,Ie,Fe,Ve,We,$e,yt),$.pixelStorei(3314,je),$.pixelStorei(32878,vt),$.pixelStorei(3316,sn),$.pixelStorei(3315,qn),$.pixelStorei(32877,Pi),ne===0&&z.generateMipmaps&&$.generateMipmap(Ye),le.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?j.setTextureCube(P,0):P.isData3DTexture?j.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?j.setTexture2DArray(P,0):j.setTexture2D(P,0),le.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,le.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ux extends mf{}Ux.prototype.isWebGL1Renderer=!0;class zl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new zl(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Gx extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new A;class Ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lh=new A,Rh=new st,Ih=new st,Hx=new A,Dh=new He;class Wx extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Rh.fromBufferAttribute(i.attributes.skinIndex,e),Ih.fromBufferAttribute(i.attributes.skinWeight,e),Lh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ih.getComponent(s);if(r!==0){const o=Rh.getComponent(s);Dh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hx.copy(Lh).applyMatrix4(Dh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gf extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xx extends Ot{constructor(e=null,t=1,n=1,i,s,r,o,l,c=Rt,h=Rt,f,u){super(null,r,o,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new He,qx=new He;class Gl{constructor(e=[],t=[]){this.uuid=En(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:qx;Oh.multiplyMatrices(o,t[s]),Oh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Zu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xx(t,e,e,hn,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new gf),this.bones.push(r),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nh extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kh=new He,Fh=new He,mo=[],Yx=new He,hr=new De;class jx extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Yx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,kh),Fh.multiplyMatrices(n,kh),hr.matrixWorld=Fh,hr.raycast(e,mo);for(let r=0,o=mo.length;r<o;r++){const l=mo[r];l.instanceId=s,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bh=new A,zh=new A,Uh=new He,ka=new Yo,go=new Js;class Zo extends ht{constructor(e=new at,t=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bh.fromBufferAttribute(t,i-1),zh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bh.distanceTo(zh);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Uh.copy(i).invert(),ka.copy(e.ray).applyMatrix4(Uh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,f=new A,u=new A,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let x=_,b=y-1;x<b;x+=d){const M=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,E),ka.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let x=_,b=y-1;x<b;x+=d){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ka.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Gh=new A,Vh=new A;class Vl extends Zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gh.distanceTo(Vh);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kx extends Zo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _f extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new He,ul=new Yo,_o=new Js,xo=new A;class Vs extends ht{constructor(e=new at,t=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;Hh.copy(i).invert(),ul.copy(e.ray).applyMatrix4(Hh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,p=d;g<p;g++){const m=c.getX(g);xo.fromBufferAttribute(f,m),Wh(xo,m,l,i,e,t,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,p=d;g<p;g++)xo.fromBufferAttribute(f,g),Wh(xo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wh(a,e,t,n,i,s,r){const o=ul.distanceSqToPoint(a);if(o<t){const l=new A;ul.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class Gn extends Ot{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new ce:new A);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],r=[],o=new A,l=new He;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new A)}s[0]=new A,r[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(It(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(It(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends Hn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ce,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zx extends Hl{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,f){let u=(r-s)/c-(o-s)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+f)+(l-o)/f;u*=h,d*=h,i(r,o,u,d)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const vo=new A,Fa=new Wl,Ba=new Wl,za=new Wl;class $x extends Hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(vo.subVectors(i[0],i[1]).add(i[0]),c=vo);const f=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(vo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Fa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,p,m),Ba.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,p,m),za.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ba.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),za.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Fa.calc(l),Ba.calc(l),za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}function Jx(a,e){const t=1-a;return t*t*e}function Qx(a,e){return 2*(1-a)*a*e}function ev(a,e){return a*a*e}function Mr(a,e,t,n){return Jx(a,e)+Qx(a,t)+ev(a,n)}function tv(a,e){const t=1-a;return t*t*t*e}function nv(a,e){const t=1-a;return 3*t*t*a*e}function iv(a,e){return 3*(1-a)*a*a*e}function sv(a,e){return a*a*a*e}function br(a,e,t,n,i){return tv(a,e)+nv(a,t)+iv(a,n)+sv(a,i)}class xf extends Hn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(br(e,i.x,s.x,r.x,o.x),br(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fl extends Hn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(br(e,i.x,s.x,r.x,o.x),br(e,i.y,s.y,r.y,o.y),br(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xl extends Hn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ce;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rv extends Hn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vf extends Hn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Mr(e,i.x,s.x,r.x),Mr(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends Hn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Mr(e,i.x,s.x,r.x),Mr(e,i.y,s.y,r.y),Mr(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(Xh(o,l.x,c.x,h.x,f.x),Xh(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var Mf=Object.freeze({__proto__:null,ArcCurve:Zx,CatmullRomCurve3:$x,CubicBezierCurve:xf,CubicBezierCurve3:fl,EllipseCurve:Hl,LineCurve:Xl,LineCurve3:rv,QuadraticBezierCurve:vf,QuadraticBezierCurve3:ov,SplineCurve:yf});class av extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Xl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Mf[i.type]().fromJSON(i))}return this}}class dl extends av{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xl(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new vf(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const o=new xf(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,r,o,l),this}absellipse(e,t,n,i,s,r,o,l){const c=new Hl(e,t,n,i,s,r,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Tt extends at{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],u=[],d=[];let g=0;const p=[],m=n/2;let _=0;y(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(d,2));function y(){const b=new A,M=new A;let E=0;const C=(t-e)/n;for(let v=0;v<=s;v++){const w=[],R=v/s,k=R*(t-e)+e;for(let Y=0;Y<=i;Y++){const O=Y/i,D=O*l+o,B=Math.sin(D),X=Math.cos(D);M.x=k*B,M.y=-R*n+m,M.z=k*X,f.push(M.x,M.y,M.z),b.set(B,C,X).normalize(),u.push(b.x,b.y,b.z),d.push(O,1-R),w.push(g++)}p.push(w)}for(let v=0;v<i;v++)for(let w=0;w<s;w++){const R=p[w][v],k=p[w+1][v],Y=p[w+1][v+1],O=p[w][v+1];h.push(R,k,O),h.push(k,Y,O),E+=6}c.addGroup(_,E,0),_+=E}function x(b){const M=g,E=new ce,C=new A;let v=0;const w=b===!0?e:t,R=b===!0?1:-1;for(let Y=1;Y<=i;Y++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),g++;const k=g;for(let Y=0;Y<=i;Y++){const D=Y/i*l+o,B=Math.cos(D),X=Math.sin(D);C.x=w*X,C.y=m*R,C.z=w*B,f.push(C.x,C.y,C.z),u.push(0,R,0),E.x=B*.5+.5,E.y=X*.5*R+.5,d.push(E.x,E.y),g++}for(let Y=0;Y<i;Y++){const O=M+Y,D=k+Y;b===!0?h.push(D,D+1,O):h.push(D+1,D,O),v+=3}c.addGroup(_,v,b===!0?1:2),_+=v}}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends Tt{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lo extends dl{constructor(e){super(e),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new dl().fromJSON(i))}return this}}const lv={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=bf(a,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,h,f,u,d;if(n&&(s=dv(a,e,s,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let g=t;g<i;g+=t)f=a[g],u=a[g+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Rr(s,r,t,o,l,d,0),r}};function bf(a,e,t,n,i){let s,r;if(i===wv(a,e,t,n)>0)for(s=e;s<t;s+=n)r=qh(s,a[s],a[s+1],r);else for(s=t-n;s>=e;s-=n)r=qh(s,a[s],a[s+1],r);return r&&$o(r,r.next)&&(Dr(r),r=r.next),r}function $i(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&($o(t,t.next)||ft(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rr(a,e,t,n,i,s,r){if(!a)return;!r&&s&&xv(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?hv(a,n,i,s):cv(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),Dr(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=uv($i(a),e,t),Rr(a,e,t,n,i,s,2)):r===2&&fv(a,e,t,n,i,s):Rr($i(a),e,t,n,i,s,1);break}}}function cv(a){const e=a.prev,t=a,n=a.next;if(ft(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<r?i:r:s<r?s:r,f=o<l?o<c?o:c:l<c?l:c,u=i>s?i>r?i:r:s>r?s:r,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ts(i,o,s,l,r,c,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hv(a,e,t,n){const i=a.prev,s=a,r=a.next;if(ft(i,s,r)>=0)return!1;const o=i.x,l=s.x,c=r.x,h=i.y,f=s.y,u=r.y,d=o<l?o<c?o:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,p=o>l?o>c?o:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,_=pl(d,g,e,t,n),y=pl(p,m,e,t,n);let x=a.prevZ,b=a.nextZ;for(;x&&x.z>=_&&b&&b.z<=y;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Ts(o,h,l,f,c,u,x.x,x.y)&&ft(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=d&&b.x<=p&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&Ts(o,h,l,f,c,u,b.x,b.y)&&ft(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&Ts(o,h,l,f,c,u,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=p&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&Ts(o,h,l,f,c,u,b.x,b.y)&&ft(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function uv(a,e,t){let n=a;do{const i=n.prev,s=n.next.next;!$o(i,s)&&Sf(i,n,n.next,s)&&Ir(i,s)&&Ir(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Dr(n),Dr(n.next),n=a=s),n=n.next}while(n!==a);return $i(n)}function fv(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Mv(r,o)){let l=wf(r,o);r=$i(r,r.next),l=$i(l,l.next),Rr(r,e,t,n,i,s,0),Rr(l,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function dv(a,e,t,n){const i=[];let s,r,o,l,c;for(s=0,r=e.length;s<r;s++)o=e[s]*n,l=s<r-1?e[s+1]*n:a.length,c=bf(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(yv(c));for(i.sort(pv),s=0;s<i.length;s++)t=mv(i[s],t);return t}function pv(a,e){return a.x-e.x}function mv(a,e){const t=gv(a,e);if(!t)return e;const n=wf(t,a);return $i(n,n.next),$i(t,t.next)}function gv(a,e){let t=e,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,f;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&Ts(r<c?s:n,r,l,c,r<c?n:s,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(s-t.x),Ir(t,a)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&_v(i,t)))&&(i=t,h=f)),t=t.next;while(t!==o);return i}function _v(a,e){return ft(a.prev,a,e.prev)<0&&ft(e.next,a,a.next)<0}function xv(a,e,t,n){let i=a;do i.z===0&&(i.z=pl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,vv(i)}function vv(a){let e,t,n,i,s,r,o,l,c=1;do{for(t=a,a=null,s=null,r=0;t;){for(r++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(r>1);return a}function pl(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function yv(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Ts(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function Mv(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!bv(a,e)&&(Ir(a,e)&&Ir(e,a)&&Sv(a,e)&&(ft(a.prev,a,e.prev)||ft(a,e.prev,e))||$o(a,e)&&ft(a.prev,a,a.next)>0&&ft(e.prev,e,e.next)>0)}function ft(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function $o(a,e){return a.x===e.x&&a.y===e.y}function Sf(a,e,t,n){const i=Mo(ft(a,e,t)),s=Mo(ft(a,e,n)),r=Mo(ft(t,n,a)),o=Mo(ft(t,n,e));return!!(i!==s&&r!==o||i===0&&yo(a,t,e)||s===0&&yo(a,n,e)||r===0&&yo(t,a,n)||o===0&&yo(t,e,n))}function yo(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Mo(a){return a>0?1:a<0?-1:0}function bv(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Sf(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Ir(a,e){return ft(a.prev,a,a.next)<0?ft(a,e,a.next)>=0&&ft(a,a.prev,e)>=0:ft(a,e,a.prev)<0||ft(a,a.next,e)<0}function Sv(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function wf(a,e){const t=new ml(a.i,a.x,a.y),n=new ml(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qh(a,e,t,n){const i=new ml(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Dr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ml(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wv(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class Rs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Rs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Yh(e),jh(n,e);let r=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,jh(n,t[l]);const o=lv.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Yh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function jh(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Yl extends at{constructor(e=new Lo([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(s,2)),this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Tv;let x,b=!1,M,E,C,v;_&&(x=_.getSpacedPoints(h),b=!0,u=!1,M=_.computeFrenetFrames(h,!1),E=new A,C=new A,v=new A),u||(m=0,d=0,g=0,p=0);const w=o.extractPoints(c);let R=w.shape;const k=w.holes;if(!Rs.isClockWise(R)){R=R.reverse();for(let J=0,j=k.length;J<j;J++){const he=k[J];Rs.isClockWise(he)&&(k[J]=he.reverse())}}const O=Rs.triangulateShape(R,k),D=R;for(let J=0,j=k.length;J<j;J++){const he=k[J];R=R.concat(he)}function B(J,j,he){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(he).add(J)}const X=R.length,K=O.length;function V(J,j,he){let ve,fe,Pe;const Te=J.x-j.x,we=J.y-j.y,ze=he.x-J.x,Ue=he.y-J.y,T=Te*Te+we*we,S=Te*Ue-we*ze;if(Math.abs(S)>Number.EPSILON){const F=Math.sqrt(T),ee=Math.sqrt(ze*ze+Ue*Ue),W=j.x-we/F,q=j.y+Te/F,Le=he.x-Ue/ee,L=he.y+ze/ee,I=((Le-W)*Ue-(L-q)*ze)/(Te*Ue-we*ze);ve=W+Te*I-J.x,fe=q+we*I-J.y;const ie=ve*ve+fe*fe;if(ie<=2)return new ce(ve,fe);Pe=Math.sqrt(ie/2)}else{let F=!1;Te>Number.EPSILON?ze>Number.EPSILON&&(F=!0):Te<-Number.EPSILON?ze<-Number.EPSILON&&(F=!0):Math.sign(we)===Math.sign(Ue)&&(F=!0),F?(ve=-we,fe=Te,Pe=Math.sqrt(T)):(ve=Te,fe=we,Pe=Math.sqrt(T/2))}return new ce(ve/Pe,fe/Pe)}const se=[];for(let J=0,j=D.length,he=j-1,ve=J+1;J<j;J++,he++,ve++)he===j&&(he=0),ve===j&&(ve=0),se[J]=V(D[J],D[he],D[ve]);const te=[];let U,H=se.concat();for(let J=0,j=k.length;J<j;J++){const he=k[J];U=[];for(let ve=0,fe=he.length,Pe=fe-1,Te=ve+1;ve<fe;ve++,Pe++,Te++)Pe===fe&&(Pe=0),Te===fe&&(Te=0),U[ve]=V(he[ve],he[Pe],he[Te]);te.push(U),H=H.concat(U)}for(let J=0;J<m;J++){const j=J/m,he=d*Math.cos(j*Math.PI/2),ve=g*Math.sin(j*Math.PI/2)+p;for(let fe=0,Pe=D.length;fe<Pe;fe++){const Te=B(D[fe],se[fe],ve);Ae(Te.x,Te.y,-he)}for(let fe=0,Pe=k.length;fe<Pe;fe++){const Te=k[fe];U=te[fe];for(let we=0,ze=Te.length;we<ze;we++){const Ue=B(Te[we],U[we],ve);Ae(Ue.x,Ue.y,-he)}}}const oe=g+p;for(let J=0;J<X;J++){const j=u?B(R[J],H[J],oe):R[J];b?(C.copy(M.normals[0]).multiplyScalar(j.x),E.copy(M.binormals[0]).multiplyScalar(j.y),v.copy(x[0]).add(C).add(E),Ae(v.x,v.y,v.z)):Ae(j.x,j.y,0)}for(let J=1;J<=h;J++)for(let j=0;j<X;j++){const he=u?B(R[j],H[j],oe):R[j];b?(C.copy(M.normals[J]).multiplyScalar(he.x),E.copy(M.binormals[J]).multiplyScalar(he.y),v.copy(x[J]).add(C).add(E),Ae(v.x,v.y,v.z)):Ae(he.x,he.y,f/h*J)}for(let J=m-1;J>=0;J--){const j=J/m,he=d*Math.cos(j*Math.PI/2),ve=g*Math.sin(j*Math.PI/2)+p;for(let fe=0,Pe=D.length;fe<Pe;fe++){const Te=B(D[fe],se[fe],ve);Ae(Te.x,Te.y,f+he)}for(let fe=0,Pe=k.length;fe<Pe;fe++){const Te=k[fe];U=te[fe];for(let we=0,ze=Te.length;we<ze;we++){const Ue=B(Te[we],U[we],ve);b?Ae(Ue.x,Ue.y+x[h-1].y,x[h-1].x+he):Ae(Ue.x,Ue.y,f+he)}}}ae(),de();function ae(){const J=i.length/3;if(u){let j=0,he=X*j;for(let ve=0;ve<K;ve++){const fe=O[ve];me(fe[2]+he,fe[1]+he,fe[0]+he)}j=h+m*2,he=X*j;for(let ve=0;ve<K;ve++){const fe=O[ve];me(fe[0]+he,fe[1]+he,fe[2]+he)}}else{for(let j=0;j<K;j++){const he=O[j];me(he[2],he[1],he[0])}for(let j=0;j<K;j++){const he=O[j];me(he[0]+X*h,he[1]+X*h,he[2]+X*h)}}n.addGroup(J,i.length/3-J,0)}function de(){const J=i.length/3;let j=0;$(D,j),j+=D.length;for(let he=0,ve=k.length;he<ve;he++){const fe=k[he];$(fe,j),j+=fe.length}n.addGroup(J,i.length/3-J,1)}function $(J,j){let he=J.length;for(;--he>=0;){const ve=he;let fe=he-1;fe<0&&(fe=J.length-1);for(let Pe=0,Te=h+m*2;Pe<Te;Pe++){const we=X*Pe,ze=X*(Pe+1),Ue=j+ve+we,T=j+fe+we,S=j+fe+ze,F=j+ve+ze;Ee(Ue,T,S,F)}}}function Ae(J,j,he){l.push(J),l.push(j),l.push(he)}function me(J,j,he){le(J),le(j),le(he);const ve=i.length/3,fe=y.generateTopUV(n,i,ve-3,ve-2,ve-1);Re(fe[0]),Re(fe[1]),Re(fe[2])}function Ee(J,j,he,ve){le(J),le(j),le(ve),le(j),le(he),le(ve);const fe=i.length/3,Pe=y.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);Re(Pe[0]),Re(Pe[1]),Re(Pe[3]),Re(Pe[1]),Re(Pe[2]),Re(Pe[3])}function le(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Re(J){s.push(J.x),s.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ev(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Mf[i.type]().fromJSON(i)),new Yl(n,e.options)}}const Tv={generateTopUV:function(a,e,t,n,i){const s=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ce(s,r),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(a,e,t,n,i,s){const r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ce(r,1-l),new ce(c,1-f),new ce(u,1-g),new ce(p,1-_)]:[new ce(o,1-l),new ce(h,1-f),new ce(d,1-g),new ce(m,1-_)]}};function Ev(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jl extends at{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new A,g=new ce;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){const _=s+m/n*r;d.x=f*Math.cos(_),d.y=f*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=u}for(let p=0;p<i;p++){const m=p*(n+1);for(let _=0;_<n;_++){const y=_+m,x=y,b=y+n+1,M=y+n+2,E=y+1;o.push(x,b,E),o.push(b,M,E)}}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}static fromJSON(e){return new jl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jo extends at{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],f=new A,u=new A,d=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const y=[],x=_/n;let b=0;_==0&&r==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const E=M/t;f.x=-e*Math.cos(i+E*s)*Math.sin(r+x*o),f.y=e*Math.cos(r+x*o),f.z=e*Math.sin(i+E*s)*Math.sin(r+x*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),p.push(u.x,u.y,u.z),m.push(E+b,1-x),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const x=h[_][y+1],b=h[_][y],M=h[_+1][y],E=h[_+1][y+1];(_!==0||r>0)&&d.push(x,b,E),(_!==n-1||l<Math.PI)&&d.push(b,M,E)}this.setIndex(d),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(p,3)),this.setAttribute("uv",new Ne(m,2))}static fromJSON(e){return new Jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends at{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new A,f=new A,u=new A;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const p=g/i*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(p),f.y=(e+t*Math.cos(m))*Math.sin(p),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const p=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,_=(i+1)*(d-1)+g,y=(i+1)*d+g;r.push(p,m,y),r.push(m,_,y)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}static fromJSON(e){return new Fo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rt extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ns extends rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ui(a,e,t){return Tf(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function bo(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Tf(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Av(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Kh(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function Ef(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Xr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cv extends Xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case jc:s=e,o=2*t-n;break;case Kc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:r=e,l=2*n-t;break;case Kc:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-u*m+2*u*p-u*g,y=(1+u)*m+(-1.5-2*u)*p+(-.5+u)*g+1,x=(-1-d)*m+(1.5+d)*p+.5*g,b=d*m-d*p;for(let M=0;M!==o;++M)s[M]=_*r[h+M]+y*r[c+M]+x*r[l+M]+b*r[f+M];return s}}class Pv extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*f+r[l+u]*h;return s}}class Lv extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=ui(n,s,r),this.values=ui(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Tf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ui(this.times),t=ui(this.values),n=this.getValueSize(),i=this.getInterpolation()===ha,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){const p=t[f+g];if(p!==t[u+g]||p!==t[d+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const f=o*n,u=r*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=ui(e,0,r),this.values=ui(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=ui(this.times,0),t=ui(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Us;class er extends Wn{}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ar;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Af extends Wn{}Af.prototype.ValueTypeName="color";class Or extends Wn{}Or.prototype.ValueTypeName="number";class Rv extends Xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Ji extends Wn{InterpolantFactoryMethodLinear(e){return new Rv(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=Us;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Wn{}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Ar;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends Wn{}Nr.prototype.ValueTypeName="vector";class Iv{constructor(e,t=-1,n,i=Ep){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Ov(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Av(l);l=Kh(l,1,h),c=Kh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Or(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,g,p){if(d.length!==0){const m=[],_=[];Ef(d,m,_,g),m.length!==0&&p.push(new f(u,m,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let p=0;p<u[g].morphTargets.length;p++)d[u[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let y=0;y!==u[g].morphTargets.length;++y){const x=u[g];m.push(x.time),_.push(x.morphTarget===p?1:0)}i.push(new Or(".morphTargetInfluence["+p+"]",m,_))}l=d.length*r}else{const d=".bones["+t[f].name+"]";n(Nr,d+".position",u,"pos",i),n(Ji,d+".quaternion",u,"rot",i),n(Nr,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return Af;case"quaternion":return Ji;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Ov(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dv(a.type);if(a.times===void 0){const t=[],n=[];Ef(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Hs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Kl{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const Nv=new Kl;class is{constructor(e){this.manager=e!==void 0?e:Nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jn={};class kv extends Error{constructor(e,t){super(e),this.response=t}}class kr extends is{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Hs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jn[e],f=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=u?parseInt(u):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){y();function y(){f.read().then(({done:x,value:b})=>{if(x)_.close();else{p+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let E=0,C=h.length;E<C;E++){const v=h[E];v.onProgress&&v.onProgress(M)}_.enqueue(b),y()}})}}});return new Response(m)}else throw new kv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Hs.add(e,c);const h=Jn[e];delete Jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fv extends is{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Hs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=Lr("img");function l(){h(),Hs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){h(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Bv extends is{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,r=new Fv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class qr extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Cf extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new He,Zh=new A,$h=new A;class Zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zv extends Zl{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pf extends qr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new zv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jh=new He,ur=new A,Ga=new A;class Uv extends Zl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),Ga.copy(n.position),Ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-ur.x,-ur.y,-ur.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class Es extends qr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gv extends Zl{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yi extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DefaultUp),this.updateMatrix(),this.target=new ht,this.shadow=new Gv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $l extends qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vv extends is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Hs.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Hs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qh(){return(typeof performance>"u"?Date:performance).now()}const Jl="\\[\\]\\.:\\/",Hv=new RegExp("["+Jl+"]","g"),Ql="[^"+Jl+"]",Wv="[^"+Jl.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",Ql),qv=/(WCOD+)?/.source.replace("WCOD",Wv),Yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Kv=new RegExp("^"+Xv+qv+Yv+jv+"$"),Zv=["material","materials","bones","map"];class $v{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hv,"")}static parseTrackName(e){const t=Kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=$v;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jv{constructor(e,t,n=0,i=1/0){this.ray=new Yo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(eu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)gl(e[i],this,n,t);return n.sort(eu),n}}function eu(a,e){return a.distance-e.distance}function gl(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)gl(i[s],e,t,!0)}}class tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qv{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new dl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const y=[];for(let x=0,b=_.length;x<b;x++){const M=_[x],E=new Lo;E.curves=M.curves,y.push(E)}return y}function n(_,y){const x=y.length;let b=!1;for(let M=x-1,E=0;E<x;M=E++){let C=y[M],v=y[E],w=v.x-C.x,R=v.y-C.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(C=y[E],w=-w,v=y[M],R=-R),_.y<C.y||_.y>v.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const k=R*(_.x-C.x)-w*(_.y-C.y);if(k===0)return!0;if(k<0)continue;b=!b}}else{if(_.y!==C.y)continue;if(v.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=v.x)return!0}}return b}const i=Rs.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,l;const c=[];if(s.length===1)return o=s[0],l=new Lo,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],g=0,p;u[g]=void 0,d[g]=[];for(let _=0,y=s.length;_<y;_++)o=s[_],p=o.getPoints(),r=i(p),r=e?!r:r,r?(!h&&u[g]&&g++,u[g]={s:new Lo,p},u[g].s.curves=o.curves,h&&g++,d[g]=[]):d[g].push({h:o,p:p[0]});if(!u[0])return t(s);if(u.length>1){let _=!1,y=0;for(let x=0,b=u.length;x<b;x++)f[x]=[];for(let x=0,b=u.length;x<b;x++){const M=d[x];for(let E=0;E<M.length;E++){const C=M[E];let v=!0;for(let w=0;w<u.length;w++)n(C.p,u[w].p)&&(x!==w&&y++,v?(v=!1,f[w].push(C)):_=!0);v&&f[x].push(C)}}y>0&&_===!1&&(d=f)}let m;for(let _=0,y=u.length;_<y;_++){l=u[_].s,c.push(l),m=d[_];for(let x=0,b=m.length;x<b;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);class ec extends is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new py(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Xi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new kr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Xi.decodeText(new Uint8Array(e,0,4))===Rf){try{r[Ze.KHR_BINARY_GLTF]=new my(e)}catch(h){i&&i(h);return}s=JSON.parse(r[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(Xi.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Cy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:r[h]=new ny;break;case Ze.KHR_DRACO_MESH_COMPRESSION:r[h]=new gy(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:r[h]=new _y;break;case Ze.KHR_MESH_QUANTIZATION:r[h]=new xy;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function ey(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ty{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ce(16777215);l.color!==void 0&&h.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Es(h),c.distance=f;break;case"spot":c=new Pf(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ny{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Je))}return Promise.all(i)}}class iy{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class sy{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(s)}}class ry{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class oy{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Je)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class ay{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class ly{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(o[0],o[1],o[2]),Promise.all(s)}}class cy{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class hy{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ce(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Je)),Promise.all(s)}}class uy{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class fy{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dy{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(h*f);return r.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}}class py{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(const g of f){const p=new He,m=new A,_=new On,y=new A(1,1,1),x=new jx(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,p.compose(m,_,y));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ht.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Rf="glTF",fr=12,nu={JSON:1313821514,BIN:5130562};class my{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fr);if(this.header={magic:Xi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-fr,i=new DataView(e,fr);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===nu.JSON){const l=new Uint8Array(e,fr+s,r);this.content=Xi.decodeText(l)}else if(o===nu.BIN){const l=fr+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const f=_l[h]||h.toLowerCase();o[f]=r[h]}for(const h in e.attributes){const f=_l[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],d=Is[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f){i.decodeDracoFile(h,function(u){for(const d in u.attributes){const g=u.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}f(u)},o,c)})})}}class _y{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xy{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class If extends Xr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,f=(n-t)/h,u=f*f,d=u*f,g=e*c,p=g-c,m=-2*d+3*u,_=d-u,y=1-m,x=_-u+f;for(let b=0;b!==o;b++){const M=r[p+b+o],E=r[p+b+l]*h,C=r[g+b+o],v=r[g+b]*h;s[b]=y*M+x*E+m*C+_*v}return s}}const vy=new On;class yy extends If{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return vy.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iu={9728:Rt,9729:bt,9984:ol,9985:qu,9986:Ao,9987:Un},su={33071:Jt,33648:Oo,10497:wi},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},My={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ar},Ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function by(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),a.DefaultMaterial}function dr(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sy(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const f=e[c];if(n){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):a.attributes.position;r.push(u)}if(i){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):a.attributes.normal;o.push(u)}if(s){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):a.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],f=c[1],u=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=f),s&&(a.morphAttributes.color=u),a.morphTargetsRelative=!0,a})}function wy(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ty(a){const e=a.extensions&&a.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ru(e.attributes):t=a.indices+":"+ru(a.attributes)+":"+a.mode,t}function ru(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function xl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ey(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ay=new He;class Cy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ey,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Bv(this.options.manager):this.textureLoader=new Vv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};dr(s,o,i),di(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Xi.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Va[i.type],o=Is[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new ot(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Va[i.type],c=Is[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==f){const _=Math.floor(u/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(y);x||(p=new c(o,_*d,i.count*d/h),x=new Vx(p,d/h),t.cache.add(y,x)),m=new Ul(x,l,u%d/h,g)}else o===null?p=new c(i.count*l):p=new c(o,u,i.count*l),m=new ot(p,l,g);if(i.sparse!==void 0){const _=Va.SCALAR,y=Is[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new y(r[1],x,i.sparse.count*_),E=new c(r[2],b,i.sparse.count*l);o!==null&&(m=new ot(m.array.slice(),m.itemSize,m.normalized));for(let C=0,v=M.length;C<v;C++){const w=M[C];if(m.setX(w,E[C*l]),l>=2&&m.setY(w,E[C*l+1]),l>=3&&m.setZ(w,E[C*l+2]),l>=4&&m.setW(w,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=iu[u.magFilter]||bt,h.minFilter=iu[u.minFilter]||Un,h.wrapS=su[u.wrapS]||wi,h.wrapT=su[u.wrapT]||wi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let g=u;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Ot(p);m.needsUpdate=!0,u(m)}),t.load(Xi.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=r.mimeType||Ey(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _f,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wr,Bn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return rt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const f=i[Ze.KHR_MATERIALS_UNLIT];r=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,Je)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Vt);const h=s.alphaMode||Ha.OPAQUE;if(h===Ha.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ha.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Dt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ce(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&r!==Dt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Dt&&(o.emissive=new Ce().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==Dt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Je)),Promise.all(c).then(function(){const f=new r(o);return s.name&&(f.name=s.name),di(f,s),t.associations.set(f,{materials:e}),s.extensions&&dr(i,f,s),f})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ou(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ty(c),f=i[h];if(f)r.push(f.promise);else{let u;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=ou(new at,c,t),i[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?by(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[d];let _;const y=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new Wx(p,y):new De(p,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?_.geometry=au(_.geometry,Ap):m.mode===Mn.TRIANGLE_FAN&&(_.geometry=au(_.geometry,ju));else if(m.mode===Mn.LINES)_=new Vl(p,y);else if(m.mode===Mn.LINE_STRIP)_=new Zo(p,y);else if(m.mode===Mn.LINE_LOOP)_=new Kx(p,y);else if(m.mode===Mn.POINTS)_=new Vs(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&wy(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),di(_,s),m.extensions&&dr(i,_,m),t.assignFinalMaterial(_),f.push(_)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const u=new pt;t.associations.set(u,{meshes:e});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const f=r[c];if(f){o.push(f);const u=new He;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gl(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const f=n.channels[c],u=n.samplers[f.sampler],d=f.target,g=d.node,p=n.parameters!==void 0?n.parameters[u.input]:u.input,m=n.parameters!==void 0?n.parameters[u.output]:u.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",m)),o.push(u),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],f=c[1],u=c[2],d=c[3],g=c[4],p=[];for(let _=0,y=h.length;_<y;_++){const x=h[_],b=f[_],M=u[_],E=d[_],C=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(fi[C.path]){case fi.weights:v=Or;break;case fi.rotation:v=Ji;break;case fi.position:case fi.scale:default:v=Nr;break}const w=x.name?x.name:x.uuid,R=E.interpolation!==void 0?My[E.interpolation]:Us,k=[];fi[C.path]===fi.weights?x.traverse(function(O){O.morphTargetInfluences&&k.push(O.name?O.name:O.uuid)}):k.push(w);let Y=M.array;if(M.normalized){const O=xl(Y.constructor),D=new Float32Array(Y.length);for(let B=0,X=Y.length;B<X;B++)D[B]=Y[B]*O;Y=D}for(let O=0,D=k.length;O<D;O++){const B=new v(k[O]+"."+fi[C.path],b.array,Y,R);E.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(K){const V=this instanceof Ji?yy:If;return new V(this.times,this.values,this.getValueSize()/3,K)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(B)}}const m=n.name?n.name:"animation_"+e;return new Iv(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return(function(){const o=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)});const c=[],h=s.children||[];for(let u=0,d=h.length;u<d;u++)c.push(i.getDependency("node",h[u]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),f])})().then(function(o){const l=o[0],c=o[1],h=o[2];let f;if(s.isBone===!0?f=new gf:l.length>1?f=new pt:l.length===1?f=l[0]:f=new ht,f!==l[0])for(let u=0,d=l.length;u<d;u++)f.add(l[u]);if(s.name&&(f.userData.name=s.name,f.name=r),di(f,s),s.extensions&&dr(n,f,s),s.matrix!==void 0){const u=new He;u.fromArray(s.matrix),f.applyMatrix4(u)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,h!==null&&f.traverse(function(u){u.isSkinnedMesh&&u.bind(h,Ay)});for(let u=0,d=c.length;u<d;u++)f.add(c[u]);return f})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new pt;n.name&&(s.name=i.createUniqueName(n.name)),di(s,n),n.extensions&&dr(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++)s.add(l[h]);const c=h=>{const f=new Map;for(const[u,d]of i.associations)(u instanceof Bn||u instanceof Ot)&&f.set(u,d);return h.traverse(u=>{const d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=c(s),s})}}function Py(a,e,t){const n=e.attributes,i=new ts;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){const h=xl(Is[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new A,l=new A;for(let c=0,h=s.length;c<h;c++){const f=s[c];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){const p=xl(Is[u.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Js;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function ou(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=_l[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return di(a,e),Py(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sy(a,e.targets,t):a})}function au(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===ju)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}const lu={type:"change"},Wa={type:"start"},cu={type:"end"};class Df extends es{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ue),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lu),n.update(),s=i.NONE},this.update=(function(){const L=new A,I=new On().setFromUnitVectors(e.up,new A(0,1,0)),ie=I.clone().invert(),ge=new A,pe=new On,be=2*Math.PI;return function(){const ke=n.object.position;L.copy(ke).sub(n.target),L.applyQuaternion(I),o.setFromVector3(L),n.autoRotate&&s===i.NONE&&w(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Be=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(qe)&&(Be<-Math.PI?Be+=be:Be>Math.PI&&(Be-=be),qe<-Math.PI?qe+=be:qe>Math.PI&&(qe-=be),Be<=qe?o.theta=Math.max(Be,Math.min(qe,o.theta)):o.theta=o.theta>(Be+qe)/2?Math.max(Be,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(o),L.applyQuaternion(ie),ke.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,f||ge.distanceToSquared(n.object.position)>r||8*(1-pe.dot(n.object.quaternion))>r?(n.dispatchEvent(lu),ge.copy(n.object.position),pe.copy(n.object.quaternion),f=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",he),n.domElement.removeEventListener("pointercancel",Pe),n.domElement.removeEventListener("wheel",ze),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ue)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new tu,l=new tu;let c=1;const h=new A;let f=!1;const u=new ce,d=new ce,g=new ce,p=new ce,m=new ce,_=new ce,y=new ce,x=new ce,b=new ce,M=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function R(L){l.phi-=L}const k=(function(){const L=new A;return function(ie,ge){L.setFromMatrixColumn(ge,0),L.multiplyScalar(-ie),h.add(L)}})(),Y=(function(){const L=new A;return function(ie,ge){n.screenSpacePanning===!0?L.setFromMatrixColumn(ge,1):(L.setFromMatrixColumn(ge,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ie),h.add(L)}})(),O=(function(){const L=new A;return function(ie,ge){const pe=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;L.copy(be).sub(n.target);let Me=L.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ie*Me/pe.clientHeight,n.object.matrix),Y(2*ge*Me/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ie*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),Y(ge*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function D(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){u.set(L.clientX,L.clientY)}function K(L){y.set(L.clientX,L.clientY)}function V(L){p.set(L.clientX,L.clientY)}function se(L){d.set(L.clientX,L.clientY),g.subVectors(d,u).multiplyScalar(n.rotateSpeed);const I=n.domElement;w(2*Math.PI*g.x/I.clientHeight),R(2*Math.PI*g.y/I.clientHeight),u.copy(d),n.update()}function te(L){x.set(L.clientX,L.clientY),b.subVectors(x,y),b.y>0?D(v()):b.y<0&&B(v()),y.copy(x),n.update()}function U(L){m.set(L.clientX,L.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),O(_.x,_.y),p.copy(m),n.update()}function H(L){L.deltaY<0?B(v()):L.deltaY>0&&D(v()),n.update()}function oe(L){let I=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),I=!0;break}I&&(L.preventDefault(),n.update())}function ae(){if(M.length===1)u.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);u.set(L,I)}}function de(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);p.set(L,I)}}function $(){const L=M[0].pageX-M[1].pageX,I=M[0].pageY-M[1].pageY,ie=Math.sqrt(L*L+I*I);y.set(0,ie)}function Ae(){n.enableZoom&&$(),n.enablePan&&de()}function me(){n.enableZoom&&$(),n.enableRotate&&ae()}function Ee(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const ie=Le(L),ge=.5*(L.pageX+ie.x),pe=.5*(L.pageY+ie.y);d.set(ge,pe)}g.subVectors(d,u).multiplyScalar(n.rotateSpeed);const I=n.domElement;w(2*Math.PI*g.x/I.clientHeight),R(2*Math.PI*g.y/I.clientHeight),u.copy(d)}function le(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const I=Le(L),ie=.5*(L.pageX+I.x),ge=.5*(L.pageY+I.y);m.set(ie,ge)}_.subVectors(m,p).multiplyScalar(n.panSpeed),O(_.x,_.y),p.copy(m)}function Re(L){const I=Le(L),ie=L.pageX-I.x,ge=L.pageY-I.y,pe=Math.sqrt(ie*ie+ge*ge);x.set(0,pe),b.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),D(b.y),y.copy(x)}function J(L){n.enableZoom&&Re(L),n.enablePan&&le(L)}function j(L){n.enableZoom&&Re(L),n.enableRotate&&Ee(L)}function he(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ve),n.domElement.addEventListener("pointerup",fe)),ee(L),L.pointerType==="touch"?T(L):Te(L))}function ve(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):we(L))}function fe(L){W(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",fe)),n.dispatchEvent(cu),s=i.NONE}function Pe(L){W(L)}function Te(L){let I;switch(L.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case rs.DOLLY:if(n.enableZoom===!1)return;K(L),s=i.DOLLY;break;case rs.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),s=i.PAN}else{if(n.enableRotate===!1)return;X(L),s=i.ROTATE}break;case rs.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;X(L),s=i.ROTATE}else{if(n.enablePan===!1)return;V(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wa)}function we(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;se(L);break;case i.DOLLY:if(n.enableZoom===!1)return;te(L);break;case i.PAN:if(n.enablePan===!1)return;U(L);break}}function ze(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Wa),H(L),n.dispatchEvent(cu))}function Ue(L){n.enabled===!1||n.enablePan===!1||oe(L)}function T(L){switch(q(L),M.length){case 1:switch(n.touches.ONE){case os.ROTATE:if(n.enableRotate===!1)return;ae(),s=i.TOUCH_ROTATE;break;case os.PAN:if(n.enablePan===!1)return;de(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),s=i.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wa)}function S(L){switch(q(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(L),n.update();break;default:s=i.NONE}}function F(L){n.enabled!==!1&&L.preventDefault()}function ee(L){M.push(L)}function W(L){delete E[L.pointerId];for(let I=0;I<M.length;I++)if(M[I].pointerId==L.pointerId){M.splice(I,1);return}}function q(L){let I=E[L.pointerId];I===void 0&&(I=new ce,E[L.pointerId]=I),I.set(L.pageX,L.pageY)}function Le(L){const I=L.pointerId===M[0].pointerId?M[1]:M[0];return E[I.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",he),n.domElement.addEventListener("pointercancel",Pe),n.domElement.addEventListener("wheel",ze,{passive:!1}),this.update()}}const Of={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Yr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ly=new jo(-1,1,1,-1,0,1),tc=new at;tc.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3));tc.setAttribute("uv",new Ne([0,2,0,0,2,0],2));class Nf{constructor(e){this._mesh=new De(tc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ly)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ry extends Yr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ko.clone(e.uniforms),this.material=new ct({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class hu extends Yr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Iy extends Yr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Dy{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ce);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ry(Of),this.clock=new Lf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}hu!==void 0&&(r instanceof hu?n=!0:r instanceof Iy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Oy extends Yr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Ny={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ws extends Yr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new In(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new In(s,r);u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new In(s,r);d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const o=Ny;this.highPassUniforms=ko.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new ce(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Of;this.copyUniforms=ko.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ct({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new Nf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.texSize.value=new ce(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new ct({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ws.BlurDirectionX=new ce(1,0);Ws.BlurDirectionY=new ce(0,1);function Qn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function kf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xs={duration:.5,overwrite:!1,delay:0},nc,Ht,St,Sn=1e8,it=1/Sn,vl=Math.PI*2,ky=vl/4,Fy=0,Ff=Math.sqrt,By=Math.cos,zy=Math.sin,Nt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ri=function(e){return typeof e=="number"},ic=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},en=function(e){return e!==!1},Bf=function(){return typeof window<"u"},So=function(e){return mt(e)||Nt(e)},zf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,yl=/(?:-?\.?\d|\.)+/gi,Uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gf=/[+-]=-?[.\d]+/,Vf=/[^,'"\[\]\s]+/gi,Uy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,bn,Ml,sc,gn={},Bo={},Hf,Wf=function(e){return(Bo=Qi(e,gn))&&_n},rc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zo=function(e,t){return!t&&console.warn(e)},Xf=function(e,t){return e&&(gn[e]=t)&&Bo&&(Bo[e]=t)||gn},Fr=function(){return 0},Gy={suppressEvents:!0,isStart:!0,kill:!1},Ro={suppressEvents:!0,kill:!1},Vy={suppressEvents:!0},oc={},Mi=[],bl={},qf,cn={},qa={},uu=30,Io=[],ac="",lc=function(e){var t=e[0],n,i;if(Vn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Io.length;i--&&!Io[i].targetTest(t););n=Io[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pd(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||lc(wn(e))[0]._gsap},Yf=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():ic(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Uo=function(){var e=Mi.length,t=Mi.slice(0),n,i;for(bl={},Mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jf=function(e,t,n,i){Mi.length&&!Ht&&Uo(),e.render(t,n,Ht&&t<0&&(e._initted||e._startAt)),Mi.length&&!Ht&&Uo()},Kf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vf).length<2?t:Nt(e)?e.trim():e},Zf=function(e){return e},An=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Qi=function(e,t){for(var n in t)e[n]=t[n];return e},fu=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Go=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sr=function(e){var t=e.parent||ut,n=e.keyframes?Wy(Wt(e.keyframes)):An;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Xy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$f=function(e,t,n,i,s){var r=e[i],o;if(s)for(o=t[s];r&&r[s]>o;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Qo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sl=function(e,t,n,i){return e._startAt&&(Ht?e._startAt.revert(Ro):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Yy=function a(e){return!e||e._ts&&a(e.parent)},du=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Vo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ea=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},ta=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ea(e),n._dirty||Yi(n,e)),e},Jf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Vo(e.rawTime(),t),(!t._dur||jr(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),Yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},Fn=function(e,t,n,i){return t.parent&&Ti(t),t._start=Bt((ri(n)?n:n||e!==ut?yn(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$f(e,t,"_first","_last",e._sort?"_start":0),wl(t)||(e._recent=t),i||Jf(e,t),e._ts<0&&ta(e,e._tTime),e},Qf=function(e,t){return(gn.ScrollTrigger||rc("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},ed=function(e,t,n,i,s){if(hc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qf!==un.frame)return Mi.push(e),e._lazy=[s,i],1},jy=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},wl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ky=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&jy(e)&&!(!e._initted&&wl(e))||(e._ts<0||e._dp._ts<0)&&!wl(e))?0:1,o=e._rDelay,l=0,c,h,f;if(o&&e._repeat&&(l=jr(0,e._tDur,t),h=qs(l,o),e._yoyo&&h&1&&(r=1-r),h!==qs(e._tTime,o)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Ht||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&ed(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!f),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&Sl(e,t,n,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&Ti(e,1),!n&&!Ht&&(Tn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ys=function(e,t,n,i){var s=e._repeat,r=Bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Bt(r*(s+1)+e._rDelay*s):r,o>0&&!i&&ta(e,e._tTime=e._tDur*o),e.parent&&ea(e),n||Yi(e.parent,e),e},pu=function(e){return e instanceof Qt?Yi(e):Ys(e,e._dur)},$y={_start:0,endTime:Fr,totalDuration:Fr},yn=function a(e,t,n){var i=e.labels,s=e._recent||$y,r=e.duration()>=Sn?s.endTime(!1):e._dur,o,l,c;return Nt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=r),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:r+l)):t==null?r:+t},wr=function(e,t,n){var i=ri(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],o,l;if(i&&(r.duration=t[1]),r.parent=n,e){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;r.immediateRender=en(o.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Et(t[0],r,t[s+1])},Ai=function(e,t){return e||e===0?t(e):t},jr=function(e,t,n){return n<e?e:n>t?t:n},Gt=function(e,t){return!Nt(e)||!(t=Uy.exec(e))?"":t[1]},Jy=function(e,t,n){return Ai(n,function(i){return jr(e,t,i)})},Tl=[].slice,td=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==bn},Qy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Nt(i)&&!t||td(i,1)?(s=n).push.apply(s,wn(i)):n.push(i)})||n},wn=function(e,t,n){return St&&!t&&St.selector?St.selector(e):Nt(e)&&!n&&(Ml||!js())?Tl.call((t||sc).querySelectorAll(e),0):Wt(e)?Qy(e,n):td(e)?Tl.call(e,0):e?[e]:[]},El=function(e){return e=wn(e)[0]||zo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?zo("Invalid scope")||sc.createElement("div"):e)}},nd=function(e){return e.sort(function(){return .5-Math.random()})},id=function(e){if(mt(e))return e;var t=Vn(e)?e:{each:e},n=ji(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,f=i;return Nt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,d,g){var p=(g||t).length,m=r[p],_,y,x,b,M,E,C,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!w){for(C=-Sn;C<(C=g[w++].getBoundingClientRect().left)&&w<p;);w--}for(m=r[p]=[],_=l?Math.min(w,p)*h-.5:i%w,y=w===Sn?0:l?p*f/w-.5:i/w|0,C=0,v=Sn,E=0;E<p;E++)x=E%w-_,b=y-(E/w|0),m[E]=M=c?Math.abs(c==="y"?b:x):Ff(x*x+b*b),M>C&&(C=M),M<v&&(v=M);i==="random"&&nd(m),m.max=C-v,m.min=v,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(i==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Gt(t.amount||t.each)||0,n=n&&p<0?ud(n):n}return p=(m[u]-m.min)/m.max||0,Bt(m.b+(n?n(p):p)*m.v)+m.u}},Al=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ri(n)?0:Gt(n))}},sd=function(e,t){var n=Wt(e),i,s;return!n&&Vn(e)&&(i=n=e.radius||Sn,e.values?(e=wn(e.values),(s=!ri(e[0]))&&(i*=i)):e=Al(e.increment)),Ai(t,n?mt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=Sn,h=0,f=e.length,u,d;f--;)s?(u=e[f].x-o,d=e[f].y-l,u=u*u+d*d):u=Math.abs(e[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?e[h]:r,s||h===r||ri(r)?h:h+Gt(r)}:Al(e))},rd=function(e,t,n,i){return Ai(Wt(e)?!t:n===!0?!!(n=0):!i,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},eM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},tM=function(e,t){return function(n){return e(parseFloat(n))+(t||Gt(n))}},nM=function(e,t,n){return ad(e,t,0,1,n)},od=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},iM=function a(e,t,n){var i=t-e;return Wt(e)?od(e,a(0,e.length),t):Ai(n,function(s){return(i+(s-e)%i)%i+e})},sM=function a(e,t,n){var i=t-e,s=i*2;return Wt(e)?od(e,a(0,e.length-1),t):Ai(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Br=function(e){for(var t=0,n="",i,s,r,o;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(o?Vf:yl),n+=e.substr(t,i-t)+rd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},ad=function(e,t,n,i,s){var r=t-e,o=i-n;return Ai(s,function(l){return n+((l-e)/r*o||0)})},rM=function a(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var r=Nt(e),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(h=[],f=e.length,u=f-2,c=1;c<f;c++)h.push(a(e[c-1],e[c]));f--,s=function(g){g*=f;var p=Math.min(u,~~g);return h[p](g-p)},n=t}else i||(e=Qi(Wt(e)?[]:{},e));if(!h){for(l in t)cc.call(o,e,l,"get",t[l]);s=function(g){return dc(g,o)||(r?e.p:e)}}}return Ai(n,s)},mu=function(e,t,n){var i=e.labels,s=Sn,r,o,l;for(r in i)o=i[r]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},Tn=function(e,t,n){var i=e.vars,s=i[t],r=St,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mi.length&&Uo(),o&&(St=o),h=l?s.apply(c,l):s.call(c),St=r,h},_r=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&Tn(e,"onInterrupt"),e},Cs,oM=function(e){e=!e.name&&e.default||e;var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fr,render:dc,add:cc,kill:bM,modifier:MM,rawVars:0},r={targetTest:0,get:0,getSetter:fc,aliases:{},register:0};if(js(),e!==i){if(cn[t])return;An(i,An(Go(e,s),r)),Qi(i.prototype,Qi(s,Go(e,r))),cn[i.prop=t]=i,e.targetTest&&(Io.push(i),oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xf(t,i),e.register&&e.register(_n,i,nn)},tt=255,xr={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},Ya=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},ld=function(e,t,n){var i=e?ri(e)?[e>>16,e>>8&tt,e&tt]:0:xr.black,s,r,o,l,c,h,f,u,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xr[e])i=xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),o=e.charAt(3),e="#"+s+s+r+r+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(yl),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(c+1):h+c-h*c,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=Ya(l+1/3,s,r),i[1]=Ya(l,s,r),i[2]=Ya(l-1/3,s,r);else if(~e.indexOf("="))return i=e.match(Uf),n&&i.length<4&&(i[3]=1),i}else i=e.match(yl)||xr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/tt,r=i[1]/tt,o=i[2]/tt,f=Math.max(s,r,o),u=Math.min(s,r,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(r-o)/d+(r<o?6:0):f===r?(o-s)/d+2:(s-r)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},cd=function(e){var t=[],n=[],i=-1;return e.split(bi).forEach(function(s){var r=s.match(As)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},gu=function(e,t,n){var i="",s=(e+i).match(bi),r=t?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return e;if(s=s.map(function(u){return(u=ld(u,t,1))&&r+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=cd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(bi,"1").split(As),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(bi),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},bi=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xr)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),aM=/hsl[a]?\(/,hd=function(e){var t=e.join(" "),n;if(bi.lastIndex=0,bi.test(t))return n=aM.test(t),e[1]=gu(e[1],n),e[0]=gu(e[0],n,cd(e[1])),!0},zr,un=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,h,f,u,d,g=function p(m){var _=a()-i,y=m===!0,x,b,M,E;if(_>e&&(n+=_-t),i+=_,M=i-n,x=M-r,(x>0||y)&&(E=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,r+=x+(x>=s?4:s-x),b=1),y||(l=c(p)),b)for(d=0;d<o.length;d++)o[d](M,u,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Hf&&(!Ml&&Bf()&&(bn=Ml=window,sc=bn.document||{},gn.gsap=_n,(bn.gsapVersions||(bn.gsapVersions=[])).push(_n.version),Wf(Bo||bn.GreenSockGlobals||!bn.gsap&&bn||{}),h=bn.requestAnimationFrame),l&&f.sleep(),c=h||function(m){return setTimeout(m,r-f.time*1e3+1|0)},zr=1,g(2))},sleep:function(){(h?bn.cancelAnimationFrame:clearTimeout)(l),zr=0,c=Fr},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),r=f.time*1e3+s},add:function(m,_,y){var x=_?function(b,M,E,C){m(b,M,E,C),f.remove(x)}:m;return f.remove(m),o[y?"unshift":"push"](x),js(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},f})(),js=function(){return!zr&&un.wake()},Xe={},lM=/^[\d.\-M][\d.\-,\s]/,cM=/["']/g,hM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(cM,"").trim():+c,i=l.substr(o+1).trim();return t},uM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},fM=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hM(t[1])]:uM(e).split(",").map(Kf)):Xe._CE&&lM.test(e)?Xe._CE("",e):n},ud=function(e){return function(t){return 1-e(1-t)}},fd=function a(e,t){for(var n=e._first,i;n;)n instanceof Qt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ji=function(e,t){return e&&(mt(e)?e:Xe[e]||fM(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return tn(e,function(o){Xe[o]=gn[o]=s,Xe[r=o.toLowerCase()]=n;for(var l in s)Xe[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=s[l]}),s},dd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ja=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/vl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*zy((h-r)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:dd(o);return s=vl/s,l.config=function(c,h){return a(e,c,h)},l},Ka=function a(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dd(n);return i.config=function(s){return a(e,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;ss(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;ss("Elastic",ja("in"),ja("out"),ja());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};ss("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);ss("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});ss("Circ",function(a){return-(Ff(1-a*a)-1)});ss("Sine",function(a){return a===1?1:-By(a*ky)+1});ss("Back",Ka("in"),Ka("out"),Ka());Xe.SteppedEase=Xe.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-it;return function(o){return((i*jr(0,r,o)|0)+s)*n}}};Xs.ease=Xe["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ac+=a+","+a+"Params,"});var pd=function(e,t){this.id=Fy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yf,this.set=t?t.getSetter:fc},Ks=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),zr||un.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ta(this,n),!s._dp||s.parent||Jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+du(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+du(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Vo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(jr(-this._delay,this._tDur,i),!0),ea(this),qy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Vy);var i=Ht;return Ht=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ht=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(yn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-it)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=mt(n)?n:Zf,o=function(){var c=i.then;i.then=null,mt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_r(this)},a})();An(Ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Qt=(function(a){kf(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),ut&&Fn(n.parent||ut,Qn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qf(Qn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return wr(0,arguments,this),this},t.from=function(i,s,r){return wr(1,arguments,this),this},t.fromTo=function(i,s,r,o){return wr(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,Sr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,yn(this,r),1),this},t.call=function(i,s,r){return Fn(this,Et.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,o,l,c,h){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=h,r.parent=this,new Et(i,r,yn(this,l)),this},t.staggerFrom=function(i,s,r,o,l,c,h){return r.runBackwards=1,Sr(r).immediateRender=en(r.immediateRender),this.staggerTo(i,s,r,o,l,c,h)},t.staggerFromTo=function(i,s,r,o,l,c,h,f){return o.startAt=r,Sr(o).immediateRender=en(o.immediateRender),this.staggerTo(i,s,o,l,c,h,f)},t.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Bt(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,p,m,_,y,x,b,M,E,C;if(this!==ut&&h>l&&i>=0&&(h=l),h!==this._tTime||r||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,b=this._start,x=this._ts,_=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(u=Bt(h%m),h===l?(p=this._repeat,u=c):(p=~~(h/m),p&&p===h/m&&(u=c,p--),u>c&&(u=c)),M=qs(this._tTime,m),!o&&this._tTime&&M!==p&&(M=p),E&&p&1&&(u=c-u,C=1),p!==M&&!this._lock){var v=E&&M&1,w=v===(E&&p&1);if(p<M&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(C?0:Bt(p*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;fd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Zy(this,Bt(o),Bt(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&!s&&(Tn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,r),u!==this._time||!this._ts&&!_){y=0,g&&(h+=this._zTime=-it);break}}d=g}else{d=this._last;for(var R=i<0?i:u;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,r||Ht&&(d._initted||d._startAt)),u!==this._time||!this._ts&&!_){y=0,g&&(h+=this._zTime=R?-it:it);break}}d=g}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-it)._zTime=u>=o?1:-1,this._ts))return this._start=b,ea(this),this.render(i,s,r);this._onUpdate&&!s&&Tn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Tn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(ri(s)||(s=yn(this,s,i)),!(i instanceof Ks)){if(Wt(i))return i.forEach(function(o){return r.add(o,s)}),this;if(Nt(i))return this.addLabel(i,s);if(mt(i))i=Et.delayedCall(0,i);else return this}return this!==i?Fn(this,i,s):this},t.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return Nt(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(Qo(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=yn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var o=Et.delayedCall(0,s||Fr,r);return o.data="isPause",this._hasPause=1,Fn(this,o,yn(this,i))},t.removePause=function(i){var s=this._first;for(i=yn(this,i);s;)s._start===i&&s.data==="isPause"&&Ti(s),s=s._next},t.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)mi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],o=wn(i),l=this._first,c=ri(s),h;l;)l instanceof Et?Hy(l._targets,o)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(h=l.getTweensOf(o,s)).length&&r.push.apply(r,h),l=l._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,o=yn(r,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=Et.to(r,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||it,onStart:function(){if(r.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==m&&Ys(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,An({startAt:{time:yn(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mu(this,yn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mu(this,yn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return Yi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},t.totalDuration=function(i){var s=0,r=this,o=r._last,l=Sn,c,h,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(f=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,Fn(r,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ys(r,r===ut&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(ut._ts&&(jf(ut,Vo(i,ut)),qf=un.frame),un.frame>=uu){uu+=mn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&mn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},e})(Ks);An(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var dM=function(e,t,n,i,s,r,o){var l=new nn(this._pt,e,t,0,1,yd,null,s),c=0,h=0,f,u,d,g,p,m,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Br(i)),r&&(y=[n,i],r(y,e,t),n=y[0],i=y[1]),u=n.match(Xa)||[];f=Xa.exec(i);)g=f[0],p=i.substring(c,f.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:m,c:g.charAt(1)==="="?Ds(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Gf.test(i)||_)&&(l.e=0),this._pt=l,l},cc=function(e,t,n,i,s,r,o,l,c,h){mt(i)&&(i=i(s||0,e,r));var f=e[t],u=n!=="get"?n:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=mt(f)?c?xM:xd:uc,g;if(Nt(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(g=Ds(u,i)+(Gt(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Cl)return!isNaN(u*i)&&i!==""?(g=new nn(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?yM:vd,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&rc(t,i),dM.call(this,e,t,u,i,d,l||mn.stringFilter,c))},pM=function(e,t,n,i,s){if(mt(e)&&(e=Tr(e,s,t,n,i)),!Vn(e)||e.style&&e.nodeType||Wt(e)||zf(e))return Nt(e)?Tr(e,s,t,n,i):e;var r={},o;for(o in e)r[o]=Tr(e[o],s,t,n,i);return r},md=function(e,t,n,i,s,r){var o,l,c,h;if(cn[e]&&(o=new cn[e]).init(s,o.rawVars?t[e]:pM(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},mi,Cl,hc=function a(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,f=i.callbackScope,u=i.runBackwards,d=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,_=e._startAt,y=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:y,M=e._overwrite==="auto"&&!nc,E=e.timeline,C,v,w,R,k,Y,O,D,B,X,K,V,se;if(E&&(!g||!s)&&(s="none"),e._ease=ji(s,Xs.ease),e._yEase=d?ud(ji(d===!0?s:d,Xs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(D=y[0]?qi(y[0]).harness:0,V=D&&i[D.prop],C=Go(i,oc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&m?Ro:Gy),_._lazy=0),r){if(Ti(e._startAt=Et.set(y,An({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&en(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:f,stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!p)&&e._startAt.revert(Ro),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),w=An({overwrite:!1,data:"isFromStart",lazy:o&&!_&&en(l),immediateRender:o,stagger:0,parent:x},C),V&&(w[D.prop]=V),Ti(e._startAt=Et.set(y,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(Ro):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&en(l)||l&&!m,v=0;v<y.length;v++){if(k=y[v],O=k._gsap||lc(y)[v]._gsap,e._ptLookup[v]=X={},bl[O.id]&&Mi.length&&Uo(),K=b===y?v:b.indexOf(k),D&&(B=new D).init(k,V||C,e,K,b)!==!1&&(e._pt=R=new nn(e._pt,k,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(te){X[te]=R}),B.priority&&(Y=1)),!D||V)for(w in C)cn[w]&&(B=md(w,C,e,K,k,b))?B.priority&&(Y=1):X[w]=R=cc.call(e,k,w,"get",C[w],K,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(k,e._op[v]),M&&e._pt&&(mi=e,ut.killTweensOf(k,X,e.globalTime(t)),se=!e.parent,mi=0),e._pt&&l&&(bl[O.id]=1)}Y&&Md(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&E.render(Sn,!0,!0)},mM=function(e,t,n,i,s,r,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,u;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(c=f[u][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Cl=1,e.vars[t]="+=0",hc(e,o),Cl=0,1;l.push(c)}for(u=l.length;u--;)h=l[u],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,h.e&&(h.e=_t(n)+Gt(h.e)),h.b&&(h.b=c.s+Gt(h.b))},gM=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return t;s=Qi({},t);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},_M=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,o;if(Wt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(e),v:t[r],e:s})},Tr=function(e,t,n,i,s){return mt(e)?e.call(t,n,i,s):Nt(e)&&~e.indexOf("random(")?Br(e):e},gd=ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_d={};tn(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return _d[a]=1});var Et=(function(a){kf(e,a);function e(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:Sr(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,y=i.parent||ut,x=(Wt(n)||zf(n)?ri(n[0]):"length"in i)?[n]:wn(n),b,M,E,C,v,w,R,k;if(o._targets=x.length?lc(x):zo("GSAP target "+n+" not found. https://greensock.com",!mn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||u||So(c)||So(h)){if(i=o.vars,b=o.timeline=new Qt({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:x}),b.kill(),b.parent=b._dp=Qn(o),b._start=0,u||So(c)||So(h)){if(C=x.length,R=u&&id(u),Vn(u))for(v in u)~gd.indexOf(v)&&(k||(k={}),k[v]=u[v]);for(M=0;M<C;M++)E=Go(i,_d),E.stagger=0,_&&(E.yoyoEase=_),k&&Qi(E,k),w=x[M],E.duration=+Tr(c,Qn(o),M,w,x),E.delay=(+Tr(h,Qn(o),M,w,x)||0)-o._delay,!u&&C===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),b.to(w,E,R?R(M,w,x):0),b._ease=Xe.none;b.duration()?c=h=0:o.timeline=0}else if(g){Sr(An(b.vars.defaults,{ease:"none"})),b._ease=ji(g.ease||i.ease||"none");var Y=0,O,D,B;if(Wt(g))g.forEach(function(X){return b.to(x,X,">")}),b.duration();else{E={};for(v in g)v==="ease"||v==="easeEach"||_M(v,g[v],E,g.easeEach);for(v in E)for(O=E[v].sort(function(X,K){return X.t-K.t}),Y=0,M=0;M<O.length;M++)D=O[M],B={ease:D.e,duration:(D.t-(M?O[M-1].t:0))/100*c},B[v]=D.v,b.to(x,B,Y),Y+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return d===!0&&!nc&&(mi=Qn(o),ut.killTweensOf(x),mi=0),Fn(y,Qn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Bt(y._time)&&en(f)&&Yy(Qn(o))&&y.data!=="nested")&&(o._tTime=-it,o.render(Math.max(0,-h)||0)),m&&Qf(Qn(o),m),o}var t=e.prototype;return t.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-it&&!h?l:i<it?0:i,u,d,g,p,m,_,y,x,b;if(!c)Ky(this,i,s,r);else if(f!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=f,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,r);if(u=Bt(f%p),f===l?(g=this._repeat,u=c):(g=~~(f/p),g&&g===f/p&&(u=c,g--),u>c&&(u=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,u=c-u),m=qs(this._tTime,p),u===o&&!r&&this._initted)return this._tTime=f,this;g!==m&&(x&&this._yEase&&fd(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=r=1,this.render(Bt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(ed(this,h?i:u,r,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(u/c),this._from&&(this.ratio=y=1-y),u&&!o&&!s&&(Tn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:!u&&_?-it:x._dur*x._ease(u/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Sl(this,i,s,r),Tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Tn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Sl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ti(this,1),!s&&!(h&&!o)&&(f||o||_)&&(Tn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,o){zr||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||hc(this,l),c=this._ease(l/this._dur),mM(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(ta(this,0),this.parent||$f(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_r(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||_r(this),this.parent&&r!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?wn(i):o,c=this._ptLookup,h=this._pt,f,u,d,g,p,m,_;if((!s||s==="all")&&Xy(o,l))return s==="all"&&(this._pt=0),_r(this);for(f=this._op=this._op||[],s!=="all"&&(Nt(s)&&(p={},tn(s,function(y){return p[y]=1}),s=p),s=gM(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){u=c[_],s==="all"?(f[_]=s,g=u,d={}):(d=f[_]=f[_]||{},g=s);for(p in g)m=u&&u[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Qo(this,m,"_pt"),delete u[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&_r(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return wr(1,arguments)},e.delayedCall=function(i,s,r,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},e.fromTo=function(i,s,r){return wr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return ut.killTweensOf(i,s,r)},e})(Ks);An(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(a){Et[a]=function(){var e=new Qt,t=Tl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var uc=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},xM=function(e,t,n,i){return e[t](i.fp,n)},vM=function(e,t,n){return e.setAttribute(t,n)},fc=function(e,t){return mt(e[t])?xd:ic(e[t])&&e.setAttribute?vM:uc},vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},dc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},MM=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},bM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Qo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},SM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Md=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},nn=(function(){function a(t,n,i,s,r,o,l,c,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||vd,this.d=l||this,this.set=c||uc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=SM,this.m=n,this.mt=s,this.tween=i},a})();tn(ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return oc[a]=1});gn.TweenMax=gn.TweenLite=Et;gn.TimelineLite=gn.TimelineMax=Qt;ut=new Qt({sortChildren:!1,defaults:Xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mn.stringFilter=hd;var Zs=[],Do={},wM=[],_u=0,Za=function(e){return(Do[e]||wM).map(function(t){return t()})},Pl=function(){var e=Date.now(),t=[];e-_u>2&&(Za("matchMediaInit"),Zs.forEach(function(n){var i=n.queries,s=n.conditions,r,o,l,c;for(o in i)r=bn.matchMedia(i[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&t.push(n))}),Za("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),_u=e,Za("matchMedia"))},bd=(function(){function a(t,n){this.selector=n&&El(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,s){mt(n)&&(s=i,i=n,n=mt);var r=this,o=function(){var c=St,h=r.selector,f;return c&&c!==r&&c.data.push(r),s&&(r.selector=El(s)),St=r,f=i.apply(r,arguments),mt(f)&&r._r.push(f),St=c,r.selector=h,r.isReverted=!1,f};return r.last=o,n===mt?o(r):n?r[n]=o:o},e.ignore=function(n){var i=St;St=null,n(this),St=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ks)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Zs.indexOf(this);~o&&Zs.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a})(),TM=(function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,s){Vn(n)||(n={matches:n});var r=new bd(0,s||this.scope),o=r.conditions={},l,c,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?h=1:(l=bn.matchMedia(n[c]),l&&(Zs.indexOf(r)<0&&Zs.push(r),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Pl):l.addEventListener("change",Pl)));return h&&i(r),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),Ho={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return oM(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Nt(e)&&(e=wn(e)[0]);var s=qi(e||{}).get,r=n?Zf:Kf;return n==="native"&&(n=""),e&&(t?r((cn[t]&&cn[t].get||s)(e,t,n,i)):function(o,l,c){return r((cn[o]&&cn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var i=e.map(function(h){return _n.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var r=cn[t],o=qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=r?function(h){var f=new r;Cs._pt=0,f.init(e,n?h+n:h,Cs,0,[e]),f.render(1,f),Cs._pt&&dc(1,Cs)}:o.set(e,l);return r?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=_n.to(e,Qi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,h){return s.resetTo(t,l,c,h)};return r.tween=s,r},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ji(e.ease,Xs.ease)),fu(Xs,e||{})},config:function(e){return fu(mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!cn[o]&&!gn[o]&&zo(t+" effect requires "+o+" plugin.")}),qa[t]=function(o,l,c){return n(wn(o),An(l||{},s),c)},r&&(Qt.prototype[t]=function(o,l,c){return this.add(qa[t](o,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=ji(t)},parseEase:function(e,t){return arguments.length?ji(e,t):Xe},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,s;for(n.smoothChildTiming=en(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=s;return Fn(ut,n,0),n},context:function(e,t){return e?new bd(e,t):St},matchMedia:function(e){return new TM(e)},matchMediaRefresh:function(){return Zs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pl()},addEventListener:function(e,t){var n=Do[e]||(Do[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Do[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:iM,wrapYoyo:sM,distribute:id,random:rd,snap:sd,normalize:nM,getUnit:Gt,clamp:Jy,splitColor:ld,toArray:wn,selector:El,mapRange:ad,pipe:eM,unitize:tM,interpolate:rM,shuffle:nd},install:Wf,effects:qa,ticker:un,updateRoot:Qt.updateRoot,plugins:cn,globalTimeline:ut,core:{PropTween:nn,globals:Xf,Tween:Et,Timeline:Qt,Animation:Ks,getCache:qi,_removeLinkedListItem:Qo,reverting:function(){return Ht},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return nc=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Ho[a]=Et[a]});un.add(Qt.updateRoot);Cs=Ho.to({},{duration:0});var EM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},AM=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=EM(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},$a=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(Nt(s)&&(l={},tn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}AM(o,s)}}}},_n=Ho.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,o,l;this.tween=n;for(r in t)l=e.getAttribute(r)||"",o=this.add(e,"setAttribute",(l||0)+"",t[r],i,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Ht?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$a("roundProps",Al),$a("modifiers"),$a("snap",sd))||Ho;Et.version=Qt.version=_n.version="3.11.4";Hf=1;Bf()&&js();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xu,gi,Os,pc,Vi,vu,mc,CM=function(){return typeof window<"u"},oi={},zi=180/Math.PI,Ns=Math.PI/180,Ms=Math.atan2,yu=1e8,gc=/([A-Z])/g,PM=/(left|right|width|margin|padding|x)/i,LM=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ll=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OM=function(e,t,n){return e.style[t]=n},NM=function(e,t,n){return e.style.setProperty(t,n)},kM=function(e,t,n){return e._gsap[t]=n},FM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},BM=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},zM=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},dt="transform",Dn=dt+"Origin",UM=function(e,t){var n=this,i=this.target,s=i.style;if(e in oi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return n.tfm[r]=ei(i,r)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ei(i,e)),this.props.indexOf(dt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},Td=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(gc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mc(),s&&!s.isStart&&!n[dt]&&(Td(n),i.uncache=1)}},Ed=function(e,t){var n={target:e,props:[],revert:GM,save:UM};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ad,Rl=function(e,t){var n=gi.createElementNS?gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gi.createElement(e);return n.style?n:gi.createElement(e)},zn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,$s(t)||t,1)||""},Mu="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||Vi,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Mu[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Mu[r]:"")+e},Il=function(){CM()&&window.document&&(xu=window,gi=xu.document,Os=gi.documentElement,Vi=Rl("div")||{style:{}},Rl("div"),dt=$s(dt),Dn=dt+"Origin",Vi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ad=!!$s("perspective"),mc=_n.core.reverting,pc=1)},Ja=function a(e){var t=Rl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Os.removeChild(t),this.style.cssText=s,r},bu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cd=function(e){var t;try{t=e.getBBox()}catch{t=Ja.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ja||(t=Ja.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+bu(e,["x","cx","x1"])||0,y:+bu(e,["y","cy","y1"])||0,width:0,height:0}:t},Pd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cd(e))},Ur=function(e,t){if(t){var n=e.style;t in oi&&t!==Dn&&(t=dt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(gc,"-$1").toLowerCase())):n.removeAttribute(t)}},_i=function(e,t,n,i,s,r){var o=new nn(e._pt,t,n,0,1,r?wd:Sd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Su={deg:1,rad:1,turn:1},VM={grid:1,flex:1},Ei=function a(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Vi.style,l=PM.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,p,m,_;return i===r||!s||Su[i]||Su[r]?s:(r!=="px"&&!u&&(s=a(e,t,n,"px")),_=e.getCTM&&Pd(e),(d||r==="%")&&(oi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[h],_t(d?s/g*f:s/100*g)):(o[l?"width":"height"]=f+(u?r:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===gi||!p.appendChild)&&(p=gi.body),m=p._gsap,m&&d&&m.width&&l&&m.time===un.time&&!m.uncache?_t(s/m.width*f):((d||r==="%")&&!VM[zn(p,"display")]&&(o.position=zn(e,"position")),p===e&&(o.position="static"),p.appendChild(Vi),g=Vi[h],p.removeChild(Vi),o.position="absolute",l&&d&&(m=qi(p),m.time=un.time,m.width=p[h]),_t(u?g*s/f:g&&s?f/g*s:0))))},ei=function(e,t,n,i){var s;return pc||Il(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),oi[t]&&t!=="transform"?(s=Vr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xo(zn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wo[t]&&Wo[t](e,t,n)||zn(e,t)||Yf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ei(e,t,s,n)+n:s},HM=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),r=s&&zn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var o=new nn(this._pt,e.style,t,0,1,yd),l=0,c=0,h,f,u,d,g,p,m,_,y,x,b,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=zn(e,t)||i,e.style[t]=n),h=[n,i],hd(h),n=h[0],i=h[1],u=n.match(As)||[],M=i.match(As)||[],M.length){for(;f=As.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(p=u[c++]||"")&&(d=parseFloat(p)||0,b=p.substr((d+"").length),m.charAt(1)==="="&&(m=Ds(d,m)+b),_=parseFloat(m),x=m.substr((_+"").length),l=As.lastIndex-x.length,x||(x=x||mn.units[t]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(d=Ei(e,t,p,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?wd:Sd;return Gf.test(i)&&(o.e=0),this._pt=o,o},wu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wu[n]||n,t[1]=wu[i]||i,t.join(" ")},XM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],oi[o]&&(l=1,o=o==="transformOrigin"?Dn:dt),Ur(n,o);l&&(Ur(n,dt),r&&(r.svg&&n.removeAttribute("transform"),Vr(n,1),r.uncache=1,Td(i)))}},Wo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new nn(e._pt,t,n,0,0,XM);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Gr=[1,0,0,1,0,0],Ld={},Rd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tu=function(e){var t=zn(e,dt);return Rd(t)?Gr:t.substr(7).match(Uf).map(_t)},_c=function(e,t){var n=e._gsap||qi(e),i=e.style,s=Tu(e),r,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gr:s):(s===Gr&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=Tu(e),l?i.display=l:Ur(e,"display"),c&&(o?r.insertBefore(e,o):r?r.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dl=function(e,t,n,i,s,r){var o=e._gsap,l=s||_c(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],y=l[5],x=t.split(" "),b=parseFloat(x[0])||0,M=parseFloat(x[1])||0,E,C,v,w;n?l!==Gr&&(C=d*m-g*p)&&(v=b*(m/C)+M*(-p/C)+(p*y-m*_)/C,w=b*(-g/C)+M*(d/C)-(d*y-g*_)/C,b=v,M=w):(E=Cd(e),b=E.x+(~x[0].indexOf("%")?b/100*E.width:b),M=E.y+(~(x[1]||x[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(_=b-c,y=M-h,o.xOffset=f+(_*d+y*p)-_,o.yOffset=u+(_*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Dn]="0px 0px",r&&(_i(r,o,"xOrigin",c,b),_i(r,o,"yOrigin",h,M),_i(r,o,"xOffset",f,o.xOffset),_i(r,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+M)},Vr=function(e,t){var n=e._gsap||new pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(e),c=zn(e,Dn)||"0",h,f,u,d,g,p,m,_,y,x,b,M,E,C,v,w,R,k,Y,O,D,B,X,K,V,se,te,U,H,oe,ae,de;return h=f=u=p=m=_=y=x=b=0,d=g=1,n.svg=!!(e.getCTM&&Pd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),i.scale=i.rotate=i.translate="none"),C=_c(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Dl(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,E=n.yOrigin||0,C!==Gr&&(k=C[0],Y=C[1],O=C[2],D=C[3],h=B=C[4],f=X=C[5],C.length===6?(d=Math.sqrt(k*k+Y*Y),g=Math.sqrt(D*D+O*O),p=k||Y?Ms(Y,k)*zi:0,y=O||D?Ms(O,D)*zi+p:0,y&&(g*=Math.abs(Math.cos(y*Ns))),n.svg&&(h-=M-(M*k+E*O),f-=E-(M*Y+E*D))):(de=C[6],oe=C[7],te=C[8],U=C[9],H=C[10],ae=C[11],h=C[12],f=C[13],u=C[14],v=Ms(de,H),m=v*zi,v&&(w=Math.cos(-v),R=Math.sin(-v),K=B*w+te*R,V=X*w+U*R,se=de*w+H*R,te=B*-R+te*w,U=X*-R+U*w,H=de*-R+H*w,ae=oe*-R+ae*w,B=K,X=V,de=se),v=Ms(-O,H),_=v*zi,v&&(w=Math.cos(-v),R=Math.sin(-v),K=k*w-te*R,V=Y*w-U*R,se=O*w-H*R,ae=D*R+ae*w,k=K,Y=V,O=se),v=Ms(Y,k),p=v*zi,v&&(w=Math.cos(v),R=Math.sin(v),K=k*w+Y*R,V=B*w+X*R,Y=Y*w-k*R,X=X*w-B*R,k=K,B=V),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),d=_t(Math.sqrt(k*k+Y*Y+O*O)),g=_t(Math.sqrt(X*X+de*de)),v=Ms(B,X),y=Math.abs(v)>2e-4?v*zi:0,b=ae?1/(ae<0?-ae:ae):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Rd(zn(e,dt)),K&&e.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=u+r,n.scaleX=_t(d),n.scaleY=_t(g),n.rotation=_t(p)+o,n.rotationX=_t(m)+o,n.rotationY=_t(_)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Dn]=Xo(c)),n.xOffset=n.yOffset=0,n.force3D=mn.force3D,n.renderTransform=n.svg?YM:Ad?Id:qM,n.uncache=0,n},Xo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qa=function(e,t,n){var i=Gt(t);return _t(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",i)))+i},qM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Id(e,t)},Ni="0deg",pr="0px",ki=") ",Id=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,y=n.target,x=n.zOrigin,b="",M=_==="auto"&&e&&e!==1||_===!0;if(x&&(f!==Ni||h!==Ni)){var E=parseFloat(h)*Ns,C=Math.sin(E),v=Math.cos(E),w;E=parseFloat(f)*Ns,w=Math.cos(E),r=Qa(y,r,C*w*-x),o=Qa(y,o,-Math.sin(E)*-x),l=Qa(y,l,v*w*-x+x)}m!==pr&&(b+="perspective("+m+ki),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(M||r!==pr||o!==pr||l!==pr)&&(b+=l!==pr||M?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+ki),c!==Ni&&(b+="rotate("+c+ki),h!==Ni&&(b+="rotateY("+h+ki),f!==Ni&&(b+="rotateX("+f+ki),(u!==Ni||d!==Ni)&&(b+="skew("+u+", "+d+ki),(g!==1||p!==1)&&(b+="scale("+g+", "+p+ki),y.style[dt]=b||"translate(0, 0)"},YM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,y=n.forceCSS,x=parseFloat(r),b=parseFloat(o),M,E,C,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ns,c*=Ns,M=Math.cos(l)*f,E=Math.sin(l)*f,C=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ns,w=Math.tan(c-h),w=Math.sqrt(1+w*w),C*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=_t(M),E=_t(E),C=_t(C),v=_t(v)):(M=f,v=u,E=C=0),(x&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=Ei(d,"x",r,"px"),b=Ei(d,"y",o,"px")),(g||p||m||_)&&(x=_t(x+g-(g*M+p*C)+m),b=_t(b+p-(g*E+p*v)+_)),(i||s)&&(w=d.getBBox(),x=_t(x+i/100*w.width),b=_t(b+s/100*w.height)),w="matrix("+M+","+E+","+C+","+v+","+x+","+b+")",d.setAttribute("transform",w),y&&(d.style[dt]=w)},jM=function(e,t,n,i,s){var r=360,o=Nt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),f==="cw"&&c<0?c=(c+r*yu)%r-~~(c/r)*r:f==="ccw"&&c>0&&(c=(c-r*yu)%r-~~(c/r)*r)),e._pt=u=new nn(e._pt,t,n,i,c,RM),u.e=h,u.u="deg",e._props.push(n),u},Eu=function(e,t){for(var n in t)e[n]=t[n];return e},KM=function(e,t,n){var i=Eu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[dt]=t,o=Vr(n,1),Ur(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],r[dt]=t,o=Vr(n,1),r[dt]=c);for(l in oi)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Gt(c),g=Gt(h),f=d!==g?Ei(n,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new nn(e._pt,o,l,f,u-f,Ll),e._pt.u=g||0,e._props.push(l));Eu(o,i)};tn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?a+o:"border"+o+a});Wo[e>1?"border"+a:a]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=r.map(function(g){return ei(o,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},r.forEach(function(g,p){return d[g]=u[p]=u[p]||u[(p-1)/2|0]}),o.init(l,d,f)}});var Dd={name:"css",register:Il,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,o=e.style,l=n.vars.startAt,c,h,f,u,d,g,p,m,_,y,x,b,M,E,C,v;pc||Il(),this.styles=this.styles||Ed(e),v=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(cn[p]&&md(p,t,n,i,e,s)))){if(d=typeof h,g=Wo[p],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Br(h)),g)g(this,e,p,h,n)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",bi.lastIndex=0,bi.test(c)||(m=Gt(c),_=Gt(h)),_?m!==_&&(c=Ei(e,p,c,_)+_):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,p),r.push(p),v.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Nt(c)&&~c.indexOf("random(")&&(c=Br(c)),Gt(c+"")||(c+=mn.units[p]||Gt(ei(e,p))||""),(c+"").charAt(1)==="="&&(c=ei(e,p))):c=ei(e,p),u=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),p in ii&&(p==="autoAlpha"&&(u===1&&ei(e,"visibility")==="hidden"&&f&&(u=0),v.push("visibility",0,o.visibility),_i(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=ii[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in oi,x){if(this.styles.save(p),b||(M=e._gsap,M.renderTransform&&!t.parseTransform||Vr(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,b=this._pt=new nn(this._pt,o,dt,0,1,M.renderTransform,M,0,-1),b.dep=1),p==="scale")this._pt=new nn(this._pt,M,"scaleY",M.scaleY,(y?Ds(M.scaleY,y+f):f)-M.scaleY||0,Ll),this._pt.u=0,r.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(Dn,0,o[Dn]),h=WM(h),M.svg?Dl(e,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==M.zOrigin&&_i(this,M,"zOrigin",M.zOrigin,_),_i(this,o,p,Xo(c),Xo(h)));continue}else if(p==="svgOrigin"){Dl(e,h,1,E,0,this);continue}else if(p in Ld){jM(this,M,p,u,y?Ds(u,y+h):h);continue}else if(p==="smoothOrigin"){_i(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){KM(this,h,e);continue}}else p in o||(p=$s(p)||p);if(x||(f||f===0)&&(u||u===0)&&!LM.test(h)&&p in o)m=(c+"").substr((u+"").length),f||(f=0),_=Gt(h)||(p in mn.units?mn.units[p]:m),m!==_&&(u=Ei(e,p,c,_)),this._pt=new nn(this._pt,x?M:o,p,u,(y?Ds(u,y+f):f)-u,!x&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?DM:Ll),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=IM);else if(p in o)HM.call(this,e,p,c,y?y+h:h);else if(p in e)this.add(e,p,c||e[p],y?y+h:h,i,s);else if(p!=="parseTransform"){rc(p,h);continue}x||(p in o?v.push(p,0,o[p]):v.push(p,1,c||e[p])),r.push(p)}}C&&Md(this)},render:function(e,t){if(t.tween._time||!mc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ei,aliases:ii,getSetter:function(e,t,n){var i=ii[t];return i&&i.indexOf(",")<0&&(t=i),t in oi&&t!==Dn&&(e._gsap.x||ei(e,"x"))?n&&vu===n?t==="scale"?FM:kM:(vu=n||{})&&(t==="scale"?BM:zM):e.style&&!ic(e.style[t])?OM:~t.indexOf("-")?NM:fc(e,t)},core:{_removeProperty:Ur,_getMatrix:_c}};_n.utils.checkPrefix=$s;_n.core.getStyleSaver=Ed;(function(a,e,t,n){var i=tn(a+","+e+","+t,function(s){oi[s]=1});tn(e,function(s){mn.units[s]="deg",Ld[s]=1}),ii[i[13]]=a+","+e,tn(n,function(s){var r=s.split(":");ii[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){mn.units[a]="px"});_n.registerPlugin(Dd);var Ft=_n.registerPlugin(Dd)||_n;Ft.core.Tween;class ZM extends is{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new kr(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){const l=s.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new $M(e)}}class $M{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=JM(e,t,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function JM(a,e,t){const n=Array.from(a),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,r=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const f=QM(h,i,o,l,t);o+=f.offsetX,r.push(f.path)}}return r}function QM(a,e,t,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new Qv;let o,l,c,h,f,u,d,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,_=p.length;m<_;)switch(p[m++]){case"m":o=p[m++]*e+t,l=p[m++]*e+n,r.moveTo(o,l);break;case"l":o=p[m++]*e+t,l=p[m++]*e+n,r.lineTo(o,l);break;case"q":c=p[m++]*e+t,h=p[m++]*e+n,f=p[m++]*e+t,u=p[m++]*e+n,r.quadraticCurveTo(f,u,c,h);break;case"b":c=p[m++]*e+t,h=p[m++]*e+n,f=p[m++]*e+t,u=p[m++]*e+n,d=p[m++]*e+t,g=p[m++]*e+n,r.bezierCurveTo(f,u,d,g,c,h);break}}return{offsetX:s.ha*e,path:r}}class Au extends Yl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class eb{constructor(e){this.group=new pt,this.group.name="CursiveNeonTextMasterGroup",this.floatGroup=new pt,this.floatGroup.name="CursiveNeonTextFloatGroup",this.group.add(this.floatGroup),this.onLoaded=e,this.textMaterial=new rt({color:3718648,emissive:165063,emissiveIntensity:6,roughness:.1,metalness:.95,envMapIntensity:2,transparent:!0,opacity:1}),this.buildText()}buildText(){new ZM().load("/fonts/GreatVibes_Regular.json",t=>{const n=new Au("Hi, I am",{font:t,size:.52,height:.06,curveSegments:16,bevelEnabled:!0,bevelThickness:.018,bevelSize:.012,bevelSegments:5});n.center();const i=new De(n,this.textMaterial);i.position.set(-.25,.42,0),i.rotation.z=.03,this.floatGroup.add(i);const s=new Au("Venkat Koppula",{font:t,size:.65,height:.07,curveSegments:16,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:5});s.center();const r=new De(s,this.textMaterial);r.position.set(.1,-.38,0),r.rotation.z=-.02,this.floatGroup.add(r),this.onLoaded&&this.onLoaded()})}}function Cu(){const a=document.createElement("canvas");a.width=64,a.height=64;const e=a.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,64,64);const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.35,"rgba(200, 240, 255, 1.0)"),t.addColorStop(.7,"rgba(100, 160, 255, 0.5)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=e.createLinearGradient(0,32,64,32);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(8,32),e.lineTo(56,32),e.stroke();let i=e.createLinearGradient(32,0,32,64);return i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.moveTo(32,8),e.lineTo(32,56),e.stroke(),new Gn(a)}function Pu(a,e){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,2048,2048);const i=n.createRadialGradient(1024,1024,40,1024,1024,960);i.addColorStop(0,a),i.addColorStop(.35,e),i.addColorStop(.7,"rgba(0,0,0,0.02)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,2048,2048),n.globalCompositeOperation="screen";for(let r=0;r<24;r++){const o=300+Math.random()*1448,l=300+Math.random()*1448,c=160+Math.random()*440,h=n.createRadialGradient(o,l,8,o,l,c);h.addColorStop(0,"rgba(75, 40, 130, 0.08)"),h.addColorStop(.5,"rgba(50, 20, 90, 0.04)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}return new Gn(t)}const wo={vertex:`
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
  `};class tb{constructor(e){this.scene=e,this.group=new pt,this.group.name="SpaceCosmosGroup",this.buildStarfield(),this.buildNebulaClouds(),this.scene.add(this.group)}buildStarfield(){this.randomStarCount=3e3;const i=new Float32Array(this.randomStarCount*3),s=new Float32Array(this.randomStarCount),r=new Float32Array(this.randomStarCount);for(let l=0;l<this.randomStarCount;l++){const c=Math.random(),h=Math.random(),f=c*2*Math.PI,u=Math.acos(2*h-1),d=380+Math.random()*320;i[l*3]=37.5+d*Math.sin(u)*Math.cos(f),i[l*3+1]=0+d*Math.sin(u)*Math.sin(f),i[l*3+2]=0+d*Math.cos(u),s[l]=Math.random()*Math.PI*2,r[l]=.12+Math.random()*.38}const o=new at;o.setAttribute("position",new ot(i,3)),o.setAttribute("aPhase",new ot(s,1)),o.setAttribute("aSpeed",new ot(r,1)),this.starMat=new ct({vertexShader:wo.vertex,fragmentShader:wo.fragment,uniforms:{uTime:{value:0},uSize:{value:1.5},uTexture:{value:Cu()},uColor:{value:new Ce(16777215)},uOpacity:{value:.95}},transparent:!0,blending:xt,depthWrite:!1}),this.stars=new Vs(o,this.starMat),this.group.add(this.stars),this.buildRandomStarClusters(37.5,0,0)}buildRandomStarClusters(e,t,n){this.clusterStarTotal=3e3;const i=Math.floor(Math.random()*4)+6,s=Math.floor(this.clusterStarTotal/i),r=new Float32Array(this.clusterStarTotal*3),o=new Float32Array(this.clusterStarTotal),l=new Float32Array(this.clusterStarTotal);let c=0;for(let f=0;f<i;f++){const u=Math.random(),d=Math.random(),g=u*2*Math.PI,p=Math.acos(2*d-1),m=380+Math.random()*260,_=e+m*Math.sin(p)*Math.cos(g),y=t+m*Math.sin(p)*Math.sin(g),x=n+m*Math.cos(p),b=90+Math.random()*110,M=f===i-1?this.clusterStarTotal-c:s;for(let E=0;E<M;E++){const C=Math.pow(Math.random(),1.4)*b,v=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1);r[c*3]=_+C*Math.sin(w)*Math.cos(v),r[c*3+1]=y+C*Math.sin(w)*Math.sin(v),r[c*3+2]=x+C*Math.cos(w),o[c]=Math.random()*Math.PI*2,l[c]=.1+Math.random()*.35,c++}}const h=new at;h.setAttribute("position",new ot(r,3)),h.setAttribute("aPhase",new ot(o,1)),h.setAttribute("aSpeed",new ot(l,1)),this.clusterMat=new ct({vertexShader:wo.vertex,fragmentShader:wo.fragment,uniforms:{uTime:{value:0},uSize:{value:1.5},uTexture:{value:Cu()},uColor:{value:new Ce(14742270)},uOpacity:{value:1}},transparent:!0,blending:xt,depthWrite:!1}),this.clusterStars=new Vs(h,this.clusterMat),this.group.add(this.clusterStars)}buildNebulaClouds(){this.nebulaOpacity=.3,this.nebMat1=new Dt({map:Pu("rgba(20, 100, 240, 0.32)","rgba(5, 12, 40, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:xt,side:Vt}),this.nebMat2=new Dt({map:Pu("rgba(140, 40, 180, 0.28)","rgba(12, 3, 24, 0)"),transparent:!0,opacity:this.nebulaOpacity,depthWrite:!1,blending:xt,side:Vt});const e=new pn(900,500);this.nebulaCount=6,this.nebulaMeshes=[],this.nebulaSettings=[],[{x:37.5,y:80,z:450,mat:this.nebMat1},{x:-350,y:140,z:300,mat:this.nebMat2},{x:400,y:-120,z:250,mat:this.nebMat1},{x:0,y:-200,z:-350,mat:this.nebMat2},{x:-250,y:-100,z:400,mat:this.nebMat1},{x:300,y:200,z:-250,mat:this.nebMat2}].forEach(n=>{const i=new De(e,n.mat);i.position.set(n.x,n.y,n.z),i.rotation.y=(Math.random()-.5)*.5,this.group.add(i),this.nebulaMeshes.push(i),this.nebulaSettings.push({rotSpeed:.004+Math.random()*.008,rotDir:Math.random()<.5?1:-1,yBase:n.y,xBase:n.x,driftFreqX:.2+Math.random()*.2,driftAmpX:15+Math.random()*15,driftFreqY:.15+Math.random()*.15,driftAmpY:8+Math.random()*8})})}update(e){this.starMat&&this.starMat.uniforms.uTime&&(this.starMat.uniforms.uTime.value=e),this.clusterMat&&this.clusterMat.uniforms.uTime&&(this.clusterMat.uniforms.uTime.value=e),this.stars&&(this.stars.rotation.y=e*.003,this.stars.rotation.x=Math.sin(e*.002)*.007),this.clusterStars&&(this.clusterStars.rotation.y=e*3e-5,this.clusterStars.rotation.z=Math.cos(e*7e-5)*3e-5),this.nebulaMeshes&&this.nebulaMeshes.forEach((t,n)=>{const i=this.nebulaSettings[n];t.rotation.z+=i.rotSpeed*i.rotDir*.08,t.position.y=i.yBase+Math.sin(e*i.driftFreqY)*i.driftAmpY,t.position.x=i.xBase+Math.cos(e*i.driftFreqX)*i.driftAmpX})}fadeOut(e=2,t=null,n=0){t&&(this.starMat&&this.starMat.uniforms.uOpacity&&t.to(this.starMat.uniforms.uOpacity,{value:0,duration:e,ease:"power2.inOut"},n),this.clusterMat&&this.clusterMat.uniforms.uOpacity&&t.to(this.clusterMat.uniforms.uOpacity,{value:0,duration:e,ease:"power2.inOut"},n),this.nebMat1&&t.to(this.nebMat1,{opacity:0,duration:e,ease:"power2.inOut"},n),this.nebMat2&&t.to(this.nebMat2,{opacity:0,duration:e,ease:"power2.inOut"},n))}}const el=new WeakMap;class nb extends is{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new kr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(el.has(e)){const l=el.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),el.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new at;e.index&&t.setIndex(new ot(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize;t.setAttribute(s,new ot(r,o))}return t}_loadLibrary(e,t){const n=new kr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=ib.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function ib(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(f){h({draco:f})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const f=h.draco,u=new f.Decoder,d=new f.DecoderBuffer;d.Init(new Int8Array(l),l.byteLength);try{const g=t(f,u,d,c),p=g.attributes.map(m=>m.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{f.destroy(d),f.destroy(u)}});break}};function t(r,o,l,c){const h=c.attributeIDs,f=c.attributeTypes;let u,d;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)u=new r.Mesh,d=o.DecodeBufferToMesh(l,u);else if(g===r.POINT_CLOUD)u=new r.PointCloud,d=o.DecodeBufferToPointCloud(l,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in h){const _=self[f[m]];let y,x;if(c.useUniqueIDs)x=h[m],y=o.GetAttributeByUniqueId(u,x);else{if(x=o.GetAttributeId(u,r[h[m]]),x===-1)continue;y=o.GetAttribute(u,x)}p.attributes.push(i(r,o,u,m,_,y))}return g===r.TRIANGULAR_MESH&&(p.index=n(r,o,u)),r.destroy(u),p}function n(r,o,l){const h=l.num_faces()*3,f=h*4,u=r._malloc(f);o.GetTrianglesUInt32Array(l,f,u);const d=new Uint32Array(r.HEAPF32.buffer,u,h).slice();return r._free(u),{array:d,itemSize:1}}function i(r,o,l,c,h,f){const u=f.num_components(),g=l.num_points()*u,p=g*h.BYTES_PER_ELEMENT,m=s(r,h),_=r._malloc(p);o.GetAttributeDataArrayForAllPoints(l,f,m,p,_);const y=new h(r.HEAPF32.buffer,_,g).slice();return r._free(_),{name:c,array:y,itemSize:u}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class sb{constructor(e="/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",t=null,n=null){this.group=new pt,this.group.name="VenkatAvatarGroup",this.model=null,this.mixer=null,this.modelLoaded=!1,this.loadModel(e,t,n)}loadModel(e,t,n=null){const i=new nb;i.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");const s=new ec(n);s.setDRACOLoader(i),s.load(e,r=>{this.model=r.scene,this.model.name="VenkyAvatarModel",this.model.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.group.add(this.model),this.modelLoaded=!0,console.log("[TechAvatar] Loaded Draco-compressed GLB model from:",e),t&&t(this.model,r)},r=>{if(r.lengthComputable){const o=Math.round(r.loaded/r.total*100);console.log(`[TechAvatar] Loading model: ${o}%`)}},r=>{console.error("[TechAvatar] Error loading Draco GLB model:",r)})}setSkinColor(e){this.model&&this.model.traverse(t=>{t.isMesh&&t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{const s=(i.name||"").toLowerCase(),r=(t.name||"").toLowerCase();(s.includes("skin")||s.includes("head")||s.includes("face")||r.includes("head")||r.includes("face")||r.includes("skin"))&&i.color.set(e)})})}setMaterialColor(e,t){if(!this.model)return;const n=e.toLowerCase();this.model.traverse(i=>{i.isMesh&&i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(r=>{const o=(r.name||"").toLowerCase(),l=(i.name||"").toLowerCase();(o.includes(n)||l.includes(n))&&r.color.set(t)})})}update(e){this.mixer&&e&&this.mixer.update(e)}}function rb(a){return new ct({uniforms:{uTime:{value:0},uTexture:{value:a},uOpacity:{value:0},uColor:{value:new Ce(3718648)},uHoverTarget:{value:0},uHoverBrightness:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Vt,blending:xt})}function ob(){return new ct({uniforms:{uTime:{value:0},uOpacity:{value:0},uBeamOpacity:{value:.28},uRayDensity:{value:60},uRaySpeed:{value:.4},uColor:{value:new Ce(3718648)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,side:Vt,blending:xt})}class ab{constructor(){this.group=new pt,this.group.name="HologramScreenGroup",this.canvasWidth=1024,this.canvasHeight=512,this.hoverTarget=0,this.lockedTarget=0,this.btnAScale=1,this.btnBScale=1,this.opacity=0,this.isVisible=!1,this.initCanvas(),this.texture=new Gn(this.canvas),this.texture.colorSpace=ln,this.hologramMat=rb(this.texture),this.beamMat=ob();const e=new pn(16,8.5);this.screenMesh=new De(e,this.hologramMat),this.screenMesh.name="HologramScreenPlane",this.group.add(this.screenMesh),this.createFrameAccents(),this.createProjectorBeam(),this.renderCanvasUI(),document.fonts&&document.fonts.ready.then(()=>{this.renderCanvasUI()})}initCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.ctx=this.canvas.getContext("2d")}triggerClickFeedback(e){this.lockedTarget=e,this.hoverTarget=e;const t=e===1?"btnAScale":"btnBScale";this[t]=1,Ft.killTweensOf(this,t),Ft.to(this,{[t]:.93,duration:.1,yoyo:!0,repeat:1,ease:"power2.out",onUpdate:()=>{this.renderCanvasUI()},onComplete:()=>{this[t]=1,this.renderCanvasUI()}}),this.renderCanvasUI()}renderCanvasUI(){const e=this.ctx,t=this.canvasWidth,n=this.canvasHeight,i=this.hoverBrightness!==void 0?this.hoverBrightness:1,s=this.lockedTarget===1,r=this.lockedTarget===2,o=s||r;e.clearRect(0,0,t,n),e.fillStyle="rgba(2, 6, 23, 0.55)",e.fillRect(0,0,t,n),e.strokeStyle=o?"#00f0ff":"#38bdf8",e.lineWidth=4,e.strokeRect(10,10,t-20,n-20),e.strokeStyle=o?"rgba(0, 240, 255, 0.6)":"rgba(56, 189, 248, 0.4)",e.lineWidth=2,e.strokeRect(18,18,t-36,n-36),e.fillStyle=o?"rgba(0, 240, 255, 0.18)":"rgba(56, 189, 248, 0.12)",e.fillRect(20,20,t-40,50),e.fillStyle=o?"#00f0ff":"#38bdf8",e.font="bold 22px monospace",e.textAlign="center",e.textBaseline="middle",s?e.fillText("✔ TRAJECTORY LOCKED: KOPPULA SYSTEM // INITIATING WARP ✔",t/2,45):r?e.fillText("✔ TRAJECTORY LOCKED: ORIGIN PLANET // INITIATING DE-ORBIT ✔",t/2,45):e.fillText("⚡ NAVIGATIONAL CONSOLE // CHOOSE DESTINATION ⚡",t/2,45);const l=this.hoverTarget===1||s,c=r?.35:1;e.save(),e.globalAlpha=c,e.fillStyle=s?"rgba(14, 116, 144, 0.45)":"rgba(15, 23, 42, 0.65)",e.fillRect(40,90,450,350),e.strokeStyle=l||s?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=s?4:l?3:2,e.strokeRect(40,90,450,350),(l||s)&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round((s?30:20)*i)):e.shadowBlur=0,e.fillStyle=s?"#00f0ff":"#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET A: KOPPULA SYSTEM",265,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[PROJECTS SOLAR SYSTEM]",265,160),e.beginPath(),e.arc(265,250,24,0,Math.PI*2),e.fillStyle="#ffea00",e.fill(),e.beginPath(),e.ellipse(265,250,75,30,0,0,Math.PI*2),e.strokeStyle="#38bdf8",e.lineWidth=2,e.stroke(),e.beginPath(),e.arc(325,238,10,0,Math.PI*2),e.fillStyle="#38bdf8",e.fill(),e.beginPath(),e.ellipse(265,250,120,50,0,0,Math.PI*2),e.strokeStyle="rgba(236, 72, 153, 0.6)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.arc(170,275,12,0,Math.PI*2),e.fillStyle="#ec4899",e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("Multi-colored planet network & data-star",265,335),e.save(),e.translate(265,392.5),e.scale(this.btnAScale,this.btnAScale),e.translate(-265,-392.5),e.fillStyle=s||l?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(80,370,370,45),e.fillStyle=l||s?"#020617":"#38bdf8",e.font="bold 18px monospace",s?e.fillText("✔ DESTINATION LOCKED // ENGAGING...",265,392):e.fillText(l?"▶ LOCK & WARP TO PROJECTS":"[ENTER SYSTEM]",265,392),e.restore(),e.restore();const h=this.hoverTarget===2||r,f=s?.35:1;e.save(),e.globalAlpha=f,e.fillStyle=r?"rgba(14, 116, 144, 0.45)":"rgba(15, 23, 42, 0.65)",e.fillRect(534,90,450,350),e.strokeStyle=h||r?"#00f0ff":"rgba(56, 189, 248, 0.30)",e.lineWidth=r?4:h?3:2,e.strokeRect(534,90,450,350),(h||r)&&i>0?(e.shadowColor="#00f0ff",e.shadowBlur=Math.round((r?30:20)*i)):e.shadowBlur=0,e.fillStyle=r?"#00f0ff":"#38bdf8",e.font='bold 30px "Bebas Neue", sans-serif',e.textAlign="center",e.fillText("TARGET B: ORIGIN PLANET",759,130),e.fillStyle="#94a3b8",e.font="16px monospace",e.fillText("[ABOUT ME HOME BASE]",759,160),e.beginPath(),e.arc(759,250,45,0,Math.PI*2);const u=e.createRadialGradient(740,230,10,759,250,45);u.addColorStop(0,"#60a5fa"),u.addColorStop(.7,"#1d4ed8"),u.addColorStop(1,"#0f172a"),e.fillStyle=u,e.fill(),e.beginPath(),e.arc(759,250,52,0,Math.PI*2),e.strokeStyle="rgba(56, 189, 248, 0.7)",e.lineWidth=3,e.stroke(),e.fillStyle="#ef4444",e.beginPath(),e.arc(759,230,6,0,Math.PI*2),e.fill(),e.fillStyle="#e2e8f0",e.font="15px sans-serif",e.fillText("High-fidelity Earth & personal dossier",759,335),e.save(),e.translate(759,392.5),e.scale(this.btnBScale,this.btnBScale),e.translate(-759,-392.5),e.fillStyle=r||h?"#00f0ff":"rgba(56, 189, 248, 0.2)",e.fillRect(574,370,370,45),e.fillStyle=h||r?"#020617":"#38bdf8",e.font="bold 18px monospace",r?e.fillText("✔ DESTINATION LOCKED // ENGAGING...",759,392):e.fillText(h?"▶ LOCK & DE-ORBIT TO EARTH":"[DE-ORBIT TO EARTH]",759,392),e.restore(),e.restore(),e.fillStyle=o?"#00f0ff":"rgba(56, 189, 248, 0.8)",e.font="13px monospace",e.textAlign="center",o?e.fillText("TRANSMITTING TELEMETRY TO LAUNCHPAD... [ALL SYSTEMS GO]",t/2,470):e.fillText("SYSTEM STATUS: ONLINE // ENCRYPTION: 256-BIT // HOVER TO INSPECT TARGET",t/2,470),this.texture&&(this.texture.needsUpdate=!0)}createFrameAccents(){const e=new Wr({color:61695,linewidth:2,transparent:!0,opacity:0});this.lineMat=e;const t=[new A(-8.3,4.5,.01),new A(-7.5,4.5,.01),new A(-8.3,4.5,.01),new A(-8.3,3.7,.01),new A(8.3,4.5,.01),new A(7.5,4.5,.01),new A(8.3,4.5,.01),new A(8.3,3.7,.01),new A(-8.3,-4.5,.01),new A(-7.5,-4.5,.01),new A(-8.3,-4.5,.01),new A(-8.3,-3.7,.01),new A(8.3,-4.5,.01),new A(7.5,-4.5,.01),new A(8.3,-4.5,.01),new A(8.3,-3.7,.01)],n=new at().setFromPoints(t),i=new Vl(n,e);this.group.add(i)}createProjectorBeam(){const e=new Tt(8,.5,12,32,1,!0);e.translate(0,-6,0),this.beamMesh=new De(e,this.beamMat),this.beamMesh.rotation.x=.2,this.group.add(this.beamMesh)}setBeamTransform(e,t,n,i){this.beamMesh&&(this.beamMesh.scale.set(e,t,e),this.beamMesh.position.y=n,this.beamMesh.rotation.x=i)}setBeamProps(e,t,n){this.beamMat&&(this.beamMat.uniforms.uBeamOpacity.value=e,this.beamMat.uniforms.uRayDensity.value=t,this.beamMat.uniforms.uRaySpeed.value=n)}setHoverTarget(e){this.hoverTarget!==e&&(this.hoverTarget=e,this.hologramMat.uniforms.uHoverTarget.value=e,this.renderCanvasUI())}setHoverBrightness(e){this.hologramMat&&(this.hologramMat.uniforms.uHoverBrightness.value=e)}update(e){this.hologramMat&&(this.hologramMat.uniforms.uTime.value=e),this.beamMat&&(this.beamMat.uniforms.uTime.value=e)}fadeIn(e=1.2){this.isVisible=!0,this.group.visible=!0,Ft.to(this,{opacity:1,duration:e,ease:"power2.out",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)}})}fadeOut(e=.8){Ft.to(this,{opacity:0,duration:e,ease:"power2.in",onUpdate:()=>{this.hologramMat&&(this.hologramMat.uniforms.uOpacity.value=this.opacity),this.beamMat&&(this.beamMat.uniforms.uOpacity.value=this.opacity),this.lineMat&&(this.lineMat.opacity=this.opacity)},onComplete:()=>{this.isVisible=!1,this.group.visible=!1}})}}class lb{constructor(){this.group=new pt,this.group.name="RocketDockingPadMasterGroup",this.padRingGroup=new pt,this.padRingGroup.name="DockingPadRingGroup",this.connectingBoomGroup=new pt,this.connectingBoomGroup.name="DockingConnectingBoomGroup",this.group.add(this.connectingBoomGroup),this.group.add(this.padRingGroup),this.initMaterials(),this.buildConnectingBoom(),this.buildPadRing()}initMaterials(){this.darkHullMat=new rt({color:1976635,roughness:.35,metalness:.85,envMapIntensity:1}),this.lightHullMat=new rt({color:4674921,roughness:.3,metalness:.8,envMapIntensity:1}),this.gantryAccentMat=new rt({color:994140,roughness:.25,metalness:.9,envMapIntensity:1.2}),this.conduitCopperMat=new rt({color:3023626,roughness:.28,metalness:.88,envMapIntensity:1.2}),this.goldTrimMat=new rt({color:3023626,roughness:.22,metalness:.94,envMapIntensity:1.3}),this.beaconGlowMat=new rt({color:165063,emissive:3718648,emissiveIntensity:2.5,roughness:.1,metalness:.3}),this.boltSilverMat=new rt({color:9741240,roughness:.2,metalness:.95})}buildConnectingBoom(){const s=new Tt(1.25,1.25,12.8,64,1,!1),r=new De(s,this.darkHullMat);r.rotation.x=Math.PI/2,r.position.set(42,-7.5,16.4),r.castShadow=!0,r.receiveShadow=!0,this.connectingBoomGroup.add(r);const o=new Tt(1.85,1.85,1.4,64,1,!1),l=new De(o,this.gantryAccentMat);l.rotation.x=Math.PI/2,l.position.set(42,-7.5,10+.7),l.castShadow=!0,l.receiveShadow=!0,this.connectingBoomGroup.add(l);const c=new Tt(1.75,1.75,1.4,64,1,!1),h=new De(c,this.gantryAccentMat);h.rotation.x=Math.PI/2,h.position.set(42,-7.5,22.8-.7),h.castShadow=!0,h.receiveShadow=!0,this.connectingBoomGroup.add(h),[.35,.65].forEach(u=>{const d=10+12.8*u,g=new Tt(1.48,1.48,.9,64,1,!1),p=new De(g,this.lightHullMat);p.rotation.x=Math.PI/2,p.position.set(42,-7.5,d),p.castShadow=!0,p.receiveShadow=!0,this.connectingBoomGroup.add(p)});const f=12.8+.4;[-1.42,1.42].forEach((u,d)=>{const g=new Tt(.14,.14,f,32),p=d===0?this.conduitCopperMat:this.lightHullMat,m=new De(g,p);m.rotation.x=Math.PI/2,m.position.set(42+u,-7.5,16.4),m.castShadow=!0,this.connectingBoomGroup.add(m),[.2,.5,.8].forEach(_=>{const y=10+12.8*_,x=new vi(.35,.25,.35),b=new De(x,this.darkHullMat);b.position.set(42+u*.9,-7.5,y),this.connectingBoomGroup.add(b)})})}buildPadRing(){const e=new A(42,-7.5,30),t=new Tt(7.6,7.8,1.2,96,1,!1),n=new De(t,this.darkHullMat);n.position.copy(e),n.castShadow=!0,n.receiveShadow=!0,this.padRingGroup.add(n);const i=new Fo(7.4,.18,24,96),s=new De(i,this.goldTrimMat);s.rotation.x=Math.PI/2,s.position.set(e.x,e.y+.6,e.z),s.castShadow=!0,this.padRingGroup.add(s);const r=new Tt(3.6,3.8,1.4,96,1,!1),o=new De(r,this.gantryAccentMat);o.position.set(e.x,e.y-.05,e.z),o.castShadow=!0,o.receiveShadow=!0,this.padRingGroup.add(o);const l=new Fo(3.6,.14,24,96),c=new De(l,this.conduitCopperMat);c.rotation.x=Math.PI/2,c.position.set(e.x,e.y+.65,e.z),this.padRingGroup.add(c);for(let h=0;h<8;h++){const f=h*Math.PI*2/8,u=3.6,d=new vi(.45,.65,u),g=new De(d,this.lightHullMat),p=(3.7+7.3)/2,m=e.x+Math.sin(f)*p,_=e.z+Math.cos(f)*p;g.position.set(m,e.y+.1,_),g.rotation.y=f,g.castShadow=!0,g.receiveShadow=!0,this.padRingGroup.add(g)}for(let h=0;h<4;h++){const f=h*Math.PI*2/4+Math.PI/4,u=4.8,d=e.x+Math.sin(f)*u,g=e.z+Math.cos(f)*u,p=new vi(1.2,.75,1.4),m=new De(p,this.darkHullMat);m.position.set(d,e.y+.65,g),m.rotation.y=f,m.castShadow=!0,this.padRingGroup.add(m);const _=new Tt(.35,.45,.5,32),y=new De(_,this.gantryAccentMat);y.position.set(d,e.y+1.15,g),y.castShadow=!0,this.padRingGroup.add(y)}for(let h=0;h<4;h++){const f=h*Math.PI*2/4,u=7.1,d=e.x+Math.sin(f)*u,g=e.z+Math.cos(f)*u,p=new Tt(.22,.28,.25,32),m=new De(p,this.beaconGlowMat);m.position.set(d,e.y+.68,g),this.padRingGroup.add(m)}for(let h=0;h<32;h++){const f=h*Math.PI*2/32,u=6.9,d=e.x+Math.sin(f)*u,g=e.z+Math.cos(f)*u,p=new Tt(.08,.08,.12,16),m=new De(p,this.boltSilverMat);m.position.set(d,e.y+.62,g),this.padRingGroup.add(m)}}}const ye={timeScale:2,assets:{rocketModel:"/assets/NewRocket.glb",monolithScene:"/assets/MonolithScene.glb"},monolith:{riseDuration:8.5,startDepth:-23,ease:"power2.in"},timeline:{snapBackStart:16.8,flyToEarthStart:25.8,flyToEarthDuration:11,cameraChaseStart:36.8,cameraChaseDuration:9.2,whiteoutStart:44.2,landingStart:47.2,rocketDescentStart:56.4,touchdownTime:66.4,manualControlTime:68.4},colors:{bgSpace:131589,bgStorm:658448,bgLanding:131845,lightningColors:[11198463,13675263,8978431],oceanDarkWater:66311,moonColor:13559807},camera:{initial:{pos:new A(38.69034,-8.56499,30.52824),look:new A(38.71423,-5.01504,30.55209)},warp:{pos:new A(0,-4,-6.5),look:new A(0,10,15)},orbit:{offsetPos:new A(0,4.5,9),offsetLook:new A(0,-8,-12)},reentry:{offsetPos:new A(1.5,3,2.5),offsetLook:new A(-1,-12,-8)},storm:{offsetPos:new A(0,15,.01),offsetLook:new A(0,-25,0)},landing:{offsetPos:new A(-.74,18.95,-36.13),offsetLook:new A(-.74,17.04,-74.29)}}},re={currentScene:"INITIAL",globalTime:0,timelineTime:0,warpProgress:0,warpBankProgress:0,cameraShakeAmp:0,globalFogDensity:0,atmosphereFriction:0,thrusterIntensity:0,lightningIntensity:0,monolithPulse:1,starsOpacity:1,starBatchProgress:0,timeScale:1,ambientIntensity:.6,rocketArcProgress:0,cameraArcProgress:0,whiteoutOpacity:0,cameraDescentProgress:0,landingFadeInProgress:0,monolithRiseProgress:0,setScene(a){console.log(`[STATE] Scene transition: ${this.currentScene} -> ${a}`),this.currentScene=a}},Rn=document.getElementById("hud-telemetry"),To=document.getElementById("ignition-trigger"),tl=document.getElementById("loader-screen"),Lu=document.getElementById("loader-bar"),Ru=document.getElementById("loader-status"),cb={updateProgress(a,e){Lu&&(Lu.style.width=`${a}%`),Ru&&(Ru.innerText=`${e} (${a}%)`)},hideLoader(a){To&&(To.disabled=!1,To.addEventListener("click",()=>{To.style.display="none",a()})),tl&&(tl.style.opacity=0,setTimeout(()=>{tl.style.display="none"},800))},tick(a){if(!Rn)return;const e=re.currentScene,t=re.timelineTime;if(e==="INITIAL")Rn.innerText="SYSTEM STANDBY // IG_READY";else if(e==="WARP"){const h=Math.floor(re.warpProgress*9999);Rn.innerText=`WARP TRANSIT // VELOCITY: ${h} LY/SEC // SYS_SYNC`}else if(e==="SNAP_BACK")t<23.8?Rn.innerText="SILHOUETTE SCAN ACTIVE // DETECTING SHADOW PROFILE":t<28.8?Rn.innerText="ILLUMINATION ACTIVE // REVEALING SURFACE DETAILS":t<30.8?Rn.innerText="APPROACH INITIATED // POSITIONING HULL CAMERA":Rn.innerText="ORBIT SIZE ACQUIRED // DESCENT SEQUENCE PAUSED";else if(e==="REENTRY"){const h=Math.floor(re.atmosphereFriction*100);Rn.innerText=`THERMAL DESCENT // FRICTION GLOW: ${h}% // WARNING: CRITICAL HEAT`}else e==="STORM"?Rn.innerText="CLOUDBREAK DECK // PIERCING CORE // WIND SHEAR LEVEL: MAX":e==="LANDING"?Rn.innerText="OCEAN LEVEL REACHED // ALIGNING WITH MONOLITH // THRUSTER DE-IGNITION":e==="MANUAL"&&(Rn.innerText="TOUCHDOWN DEPLOYED // MANUAL SCANNING INTERFACE ACTIVE");const n=document.getElementById("hud-timeline-progress"),i=document.getElementById("hud-timeline-marker"),r=Math.min(t/49.6*100,100);n&&(n.style.width=`${r}%`),i&&(i.style.left=`${r}%`);const o=document.getElementById("hud-altitude"),l=document.getElementById("hud-velocity"),c=document.getElementById("hud-coords");if(a){let h="-- m",f="-- m/s";const u=a.position.x.toFixed(2),d=a.position.y.toFixed(2),g=a.position.z.toFixed(2),p=`X: ${u}, Y: ${d}, Z: ${g}`;e==="INITIAL"?(h="384,400 km",f="0.0 km/s"):e==="WARP"?(h=`${Math.floor(384400-t*12e3).toLocaleString()} km`,f=`${Math.floor(re.warpProgress*9999)} LY/s`):e==="SNAP_BACK"?t<23.8?(h=`${Math.floor(12e4-(t-16.8)*1e4).toLocaleString()} km (APPROACH)`,f="12.0 km/s"):t<28.8?(h="50,000 km (REVEALING SURFACE)",f="0.0 m/s"):t<30.8?(h=`${Math.floor(5e4-(t-28.8)*12e3).toLocaleString()} km (ORBIT ENTRY)`,f="24.0 km/s"):(h="26,000 km (STATIONARY PAUSE)",f="0.0 m/s"):e==="REENTRY"?(h=`${Math.floor(12e4-(t-30.8)*1e4).toLocaleString()} m`,f=`${Math.floor(7800-(t-30.8)*1650).toLocaleString()} m/s`):e==="STORM"?(h=`${Math.floor(Math.max(3e3,a.position.y*150)).toLocaleString()} m`,f=`${Math.floor(1200-(t-34.8)*150).toLocaleString()} m/s`):e==="LANDING"?(h=`${Math.floor(Math.max(0,(a.position.y-2.9)*150)).toLocaleString()} m`,f=`${Math.floor(Math.max(0,(a.position.y-2.9)*45)).toLocaleString()} m/s`):e==="MANUAL"&&(h="0.0 m (TOUCHDOWN)",f="0.0 m/s"),o&&(o.innerText=h),l&&(l.innerText=f),c&&(c.innerText=p)}}},kt=new A,jt=new A,hb=new A(-1.1,-1,-8.6),ub=new A(.65,.65,.65),$t=new A;new A;new A;new A(0,0,-1);const nl=new A(0,0,1),fb=new A(-100.4,296.5,-30),Iu=new A,Du=new A(0,1,0),Ou=new A;class db{constructor(){this.currentPos=new A().copy(ye.camera.initial.pos),this.currentLook=new A().copy(ye.camera.initial.look),this.targetPos=new A().copy(ye.camera.initial.pos),this.targetLook=new A().copy(ye.camera.initial.look),this.snapBackPos=new A().copy(ye.camera.initial.pos),this.snapBackLook=new A().copy(ye.camera.initial.look),this.snapBackCaptured=!1,this.instantSnapNextFrame=!1,this.shakeIntensity=0,this.lerpSpeed=.04,this.stormDetachPos=null,this.localYOffset=-8,this.camOffsetX=4.2,this.camOffsetZ=-4.5,this.camDistance=-8}setTarget(e,t){this.targetPos.copy(e),this.targetLook.copy(t)}resetToDefault(){this.currentPos.copy(ye.camera.initial.pos),this.currentLook.copy(ye.camera.initial.look),this.targetPos.copy(ye.camera.initial.pos),this.targetLook.copy(ye.camera.initial.look),this.snapBackPos.copy(ye.camera.initial.pos),this.snapBackLook.copy(ye.camera.initial.look),this.snapBackCaptured=!1,this.instantSnapNextFrame=!1}update(e,t,n,i){if(window.activeControls)return;const s=re.currentScene;if(s==="REENTRY"){this.stormDetachPos=null,this.snapBackCaptured||($t.set(0,50,0),this.snapBackPos.copy($t).multiply(ub).add(hb),this.snapBackLook.set(1.4,296.5,2),this.snapBackCaptured=!0);const o=re.cameraArcProgress,l=this.snapBackPos;kt.lerpVectors(l,fb,o),Iu.subVectors(this.snapBackLook,l).normalize(),jt.addVectors(kt,Iu.multiplyScalar(100)),this.setTarget(kt,jt),e.up.set(0,1,0)}else if(t&&(s==="WARP"||s==="INITIAL"||s==="SNAP_BACK"||s==="STORM"))if(s==="INITIAL")this.stormDetachPos=null,this.setTarget(ye.camera.initial.pos,ye.camera.initial.look);else if(s==="WARP"){this.stormDetachPos=null;const o=Math.max(0,this.localYOffset- -8);kt.set(38.69034,-8.56499,30.52824),jt.set(38.71423,-5.01504,30.55209),o>0&&(nl.subVectors(jt,kt).normalize(),kt.addScaledVector(nl,o),jt.addScaledVector(nl,o)),this.setTarget(kt,jt),e.up.set(0,1,0)}else if(s==="STORM")this.stormDetachPos||(t.updateMatrixWorld(),$t.set(6.8,this.localYOffset,3.8),this.stormDetachPos=$t.clone().applyMatrix4(t.matrixWorld)),this.setTarget(this.stormDetachPos,t.position);else{this.stormDetachPos=null;const o=13,c=et.clamp((this.localYOffset-o)/(45-o),0,1);if($t.set(0,this.localYOffset,0),c<.25){const h=c/.25;$t.x=et.lerp(this.camOffsetX,0,h),$t.z=et.lerp(this.camOffsetZ,-3.5,h)}else if(c<.65)$t.x=0,$t.z=-3.5;else if(c<.9){const h=(c-.65)/.25,f=Math.sin(h*Math.PI/2);$t.x=0,$t.z=et.lerp(-3.5,0,f)}else $t.x=0,$t.z=0;t.updateMatrixWorld(),kt.copy($t).applyMatrix4(t.matrixWorld),s==="WARP"||s==="INITIAL"?jt.set(kt.x,kt.y,kt.z+100):re.earth&&(s==="SNAP_BACK"||s==="REENTRY")?(re.earth.getWorldPosition(Ou),jt.copy(Ou)):jt.set(0,this.localYOffset+30,0).applyMatrix4(t.matrixWorld),this.setTarget(kt,jt),s==="SNAP_BACK"&&(this.snapBackPos.copy(kt),this.snapBackLook.copy(jt),this.snapBackCaptured=!0)}else if(s==="LANDING"){this.stormDetachPos=null;const o=re.cameraDescentProgress,l=0*(1-o)-.74*o,c=57*(1-o)+18.95*o,h=-22*(1-o)-36.13*o,f=0*(1-o)-.74*o,u=7*(1-o)+17.04*o,d=-72*(1-o)-74.29*o;kt.set(l,c,h),jt.set(f,u,d),this.setTarget(kt,jt)}else s==="MANUAL"?(this.stormDetachPos=null,kt.set(-.74,18.95,-36.13),jt.set(-.74,17.04,-74.29),this.setTarget(kt,jt)):(this.stormDetachPos=null,this.setTarget(ye.camera.initial.pos,ye.camera.initial.look));s==="WARP"||s==="INITIAL"||s==="SNAP_BACK"||s==="REENTRY"?(this.currentPos.copy(this.targetPos),this.currentLook.copy(this.targetLook),s==="WARP"||(t&&(s==="INITIAL"||s==="SNAP_BACK")?e.up.set(0,1,0):s==="REENTRY"||e.up.lerp(Du,.1))):(this.lerpSpeed=.04,this.instantSnapNextFrame?(this.currentPos.copy(this.targetPos),this.currentLook.copy(this.targetLook),e.up.set(0,1,0),this.instantSnapNextFrame=!1):(this.currentPos.lerp(this.targetPos,this.lerpSpeed),this.currentLook.lerp(this.targetLook,this.lerpSpeed),e.up.lerp(Du,this.lerpSpeed))),e.position.copy(this.currentPos),e.lookAt(this.currentLook)}}const Nn=new db;function pb(a,e,t,n,i,s,r,o){const l=Ft.timeline({paused:!0});let c=null,h=null,f=null,u=null,d=null;if(t){t.traverse(_=>{_.isDirectionalLight&&(_.name==="spaceSun"?c=_:_.name==="earthFrontLight"&&(h=_)),_.isAmbientLight&&(f=_)});const m=t.parent;m&&m.traverse(_=>{_.isHemisphereLight&&(u=_),_.isSpotLight&&_.name!=="lightningLight"&&(d=_)})}let g=null;e&&e.traverse(m=>{m.isMesh&&(g=m)});const p=new A(42,-6.25,30);return new A(12,-1,-.5),l.add(()=>{re.setScene("WARP"),re.warpProgress=0,re.warpBankProgress=0,re.starBatchProgress=0,re.starsOpacity=1,o&&(o.strength=0),Nn.localYOffset=-8,a&&(a.visible=!0,a.position.copy(p),a.rotation.set(0,0,0),a.scale.set(1,1,1)),t&&(t.visible=!0),n&&(n.visible=!1),e&&(e.visible=!1),f&&(f.intensity=re.ambientIntensity)},0),l.to(re,{starBatchProgress:1,duration:5,ease:"none"},0),l.to(re,{warpProgress:.18,duration:3,ease:"power2.in"},0),l.to(re,{warpBankProgress:1,duration:6.8,ease:"power1.inOut",onUpdate:()=>{const m=re.warpBankProgress;a&&(a.position.copy(p),a.scale.set(1,1,1),a.rotation.set(0,m*Math.PI*.5,0),a.updateMatrixWorld(!0))}},0),l.to(re,{warpProgress:1,duration:4.5,ease:"power2.in"},3),l.to(Nn,{localYOffset:50,duration:10,ease:"power2.out"},6.8),l.to(re,{starsOpacity:.25,duration:8,ease:"power1.inOut"},8.8),l.to(re,{warpProgress:.02,duration:8,ease:"power1.inOut"},8.8),f&&l.to(f,{intensity:0,duration:8,ease:"power1.inOut"},8.8),u&&l.to(u,{intensity:0,duration:8,ease:"power1.inOut"},8.8),d&&l.to(d,{intensity:0,duration:8,ease:"power1.inOut"},8.8),c&&l.to(c,{intensity:0,duration:8,ease:"power1.inOut"},8.8),h&&l.to(h,{intensity:0,duration:8,ease:"power1.inOut"},8.8),l.add(()=>{re.setScene("SNAP_BACK"),a&&(a.visible=!1,a.rotation.set(0,0,0),a.position.set(-1.1,-1,-8.6),a.updateMatrixWorld(!0)),f&&(f.intensity=0),u&&(u.intensity=0),d&&(d.intensity=0),c&&(c.intensity=0),h&&(h.intensity=0),e&&(e.visible=!0,e.scale.set(.12,.12,.12),e.position.set(1.4,296.5,2),c&&(c.position.set(1.4,426.5,-78),c.target=e,c.intensity=0),h&&(h.position.set(-148.6,146.5,-148),h.target=e,h.intensity=0)),g&&g.material&&(g.material.emissiveIntensity=0)},ye.timeline.snapBackStart),c&&l.to(c,{intensity:1.5,duration:7,ease:"power1.inOut"},ye.timeline.snapBackStart),e&&l.to(e.scale,{x:.45,y:.45,z:.45,duration:7,ease:"power1.inOut"},ye.timeline.snapBackStart),h&&l.to(h,{intensity:2,duration:5,ease:"power1.inOut"},19.8),l.add(()=>{re.setScene("REENTRY"),re.rocketArcProgress=0,re.cameraArcProgress=0,re.whiteoutOpacity=0,re.globalFogDensity=0,re.starsOpacity=.25,c&&(c.intensity=1.5),h&&(h.intensity=2),a&&(a.visible=!0,a.scale.set(10,10,10))},ye.timeline.flyToEarthStart),l.to(re,{rocketArcProgress:1,duration:ye.timeline.flyToEarthDuration,ease:"power2.inOut"},ye.timeline.flyToEarthStart),l.add(()=>{a&&(a.visible=!1)},ye.timeline.cameraChaseStart),l.to(re,{cameraArcProgress:1,duration:ye.timeline.cameraChaseDuration,ease:"power1.inOut"},ye.timeline.cameraChaseStart),c&&l.to(c,{intensity:0,duration:ye.timeline.cameraChaseDuration,ease:"power1.inOut"},ye.timeline.cameraChaseStart),h&&l.to(h,{intensity:0,duration:ye.timeline.cameraChaseDuration,ease:"power1.inOut"},ye.timeline.cameraChaseStart),l.to(re,{globalFogDensity:.08,duration:ye.timeline.cameraChaseDuration,ease:"power2.in"},ye.timeline.cameraChaseStart),l.to(re,{starsOpacity:0,duration:ye.timeline.cameraChaseDuration,ease:"power1.inOut"},ye.timeline.cameraChaseStart),l.add(()=>{const m=document.getElementById("storm-overlay");m&&(m.style.backgroundColor="#020205")},ye.timeline.whiteoutStart),l.to(re,{whiteoutOpacity:1,duration:1,ease:"none"},ye.timeline.whiteoutStart),l.add(()=>{re.setScene("LANDING"),Nn.instantSnapNextFrame=!0,re.globalFogDensity=.045,re.landingFadeInProgress=0,t&&(t.visible=!1),n&&(n.visible=!0),a&&(a.position.set(40,70,-100),a.scale.set(.65,.65,.65),a.rotation.set(0,-Math.PI/4,0),a.visible=!0,r.forEach(m=>{m.scale.set(.001,.001,.001)})),re.thrusterIntensity=8,re.cameraDescentProgress=0},ye.timeline.whiteoutStart+1.5),l.to(re,{whiteoutOpacity:0,duration:1,ease:"none"},ye.timeline.whiteoutStart+2),l.add(()=>{const m=document.getElementById("storm-overlay");m&&(m.style.backgroundColor="#ffffff")},ye.timeline.landingStart),l.to(re,{cameraDescentProgress:1,duration:10,ease:"power2.inOut"},ye.timeline.landingStart),l.to(re,{globalFogDensity:.008,duration:8,ease:"power1.inOut"},ye.timeline.landingStart),l.to(re,{landingFadeInProgress:1,duration:4,ease:"power1.inOut"},ye.timeline.landingStart),re.monolithRiseProgress=0,l.to(re,{monolithRiseProgress:1,duration:ye.monolith&&ye.monolith.riseDuration?ye.monolith.riseDuration:10,ease:ye.monolith&&ye.monolith.ease?ye.monolith.ease:"power2.in"},ye.timeline.landingStart+.5),l.add(()=>{},ye.timeline.rocketDescentStart),a&&l.to(a.position,{y:7.4,duration:ye.timeline.touchdownTime-ye.timeline.rocketDescentStart,ease:"power1.out"},ye.timeline.rocketDescentStart),l.add(()=>{r.forEach(m=>{m.scale.set(1,1,1)})},ye.timeline.rocketDescentStart+3),l.add(()=>{re.setScene("MANUAL"),re.thrusterIntensity=0},ye.timeline.touchdownTime),l.add(()=>{const m=new Df(s,i.domElement);m.enableDamping=!0,m.dampingFactor=.05,m.maxPolarAngle=Math.PI/2-.05,m.target.set(-.74,17.04,-74.29),window.activeControls=m},ye.timeline.manualControlTime),l}const bs={stars:{vertex:`
      uniform float uWarpProgress;
      uniform float uWarpOffset;
      uniform float uBatchProgress;
      uniform vec3 uCameraPos;
      uniform float uTime;
      uniform float uTwinkleSpeed;
      uniform float uTwinkleRatio;
      uniform float uTwinkleDepth;
      uniform float uSizeMultiplier;
      uniform float uCentroidSpace;
      attribute float aSpeed;
      attribute float aAngle;
      attribute float aSize;
      attribute float aTwinklePhase;
      attribute float aTwinkleSpeed;
      attribute float aTwinkleMask;
      attribute float aBatch;
      attribute float aBatchDelay;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      varying float vTwinkle;
      varying float vBatchFade;
      
      void main() {
        vSpeed = aSpeed;
        vWarpProgress = uWarpProgress;
        
        // Progressive batch-wise emergence as rocket begins moving
        // Initial resting stars (Batch 0) are already visible before the rocket starts moving
        float bStart = aBatch + aBatchDelay;
        float bFade = (aBatch < 0.01) ? 1.0 : smoothstep(bStart, bStart + 0.14, uBatchProgress);
        vBatchFade = bFade;
        
        // Calculate the base Z position, animated by the accumulated warp offset
        float zBase = position.z + (aSpeed * uWarpOffset);
        
        // Wrap Z base to keep stars in the tunnel [-500, 500]
        zBase = mod(zBase + 500.0, 1000.0) - 500.0;
        
        float spiral = aAngle; // straight trails, no rotation
        
        float r = length(position.xy);
        
        // Dynamic radial expansion and centroid inner clearance distance from the center axis
        float distFactor = clamp((zBase + 500.0) / 1000.0, 0.0, 1.0);
        float outwardSpread = mix(0.35, 2.2, distFactor) * (1.0 + uWarpProgress * 0.75);
        r = r * outwardSpread + uCentroidSpace * mix(0.4, 1.2, distFactor);
        
        // Spread stars wider when idle/slow
        r = mix(r * 1.5, r, clamp(uWarpProgress / 0.25, 0.0, 1.0));
        
        vec3 pos = vec3(
          r * cos(spiral),
          r * sin(spiral),
          zBase
        );
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Calculate the screen-space angle of the star's trajectory from the screen center
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
        
        // Dynamic GPU Twinkle calculation
        float twTime = uTime * uTwinkleSpeed * aTwinkleSpeed + aTwinklePhase;
        float twSine = sin(twTime);
        float twVal = pow(0.5 + 0.5 * twSine, 2.8);
        
        float isTwinkling = step(1.0 - uTwinkleRatio, aTwinkleMask);
        float twinkleFactor = mix(1.0, 1.0 - uTwinkleDepth * (1.0 - twVal), isTwinkling);
        
        // Smoothly fade out twinkle into solid streaks as warp speed ignites
        twinkleFactor = mix(twinkleFactor, 1.0, clamp(uWarpProgress * 4.0, 0.0, 1.0));
        vTwinkle = twinkleFactor;
        
        // Slight subtle point size shimmering when twinkling
        float sizeTwinkle = mix(1.0, 0.82 + 0.36 * twVal, isTwinkling * (1.0 - clamp(uWarpProgress * 4.0, 0.0, 1.0)));
        gl_PointSize = aSize * uSizeMultiplier * sizeTwinkle * (1.0 + uWarpProgress * aSpeed * 1.2);
      }
    `,fragment:`
      uniform float uStarsOpacity;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      varying float vTwinkle;
      varying float vBatchFade;
      
      void main() {
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
        
        // Volumetric glow and core falloff
        float core = smoothstep(thickness, 0.0, dist);
        float glow = exp(-dist * 55.0) * 0.60;
        float intensity = (core * 0.60 + glow * 0.40) * vOpacity * uStarsOpacity * vTwinkle * vBatchFade;
        
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
    `}};class mb{constructor(e){this.scene=e,this.maxOuterStarCount=3e3,this.starGeom=new at;const t=5,n=[],i=[],s=[],r=[],o=[],l=[],c=[],h=[],f=[];for(let M=0;M<this.maxOuterStarCount;M++){const E=Math.random()*Math.PI*2,C=10+Math.random()*50;n.push(C*Math.cos(E),C*Math.sin(E),Math.random()*1e3-500),i.push(.6+Math.random()*1.4),s.push(E),r.push(16+Math.random()*24),o.push(Math.random()*Math.PI*2),l.push(.6+Math.random()*1.2),c.push(Math.random());const v=M%t;h.push(v/5*.8),f.push(Math.random()*.04)}this.starGeom.setAttribute("position",new Ne(n,3)),this.starGeom.setAttribute("aSpeed",new Ne(i,1)),this.starGeom.setAttribute("aAngle",new Ne(s,1)),this.starGeom.setAttribute("aSize",new Ne(r,1)),this.starGeom.setAttribute("aTwinklePhase",new Ne(o,1)),this.starGeom.setAttribute("aTwinkleSpeed",new Ne(l,1)),this.starGeom.setAttribute("aTwinkleMask",new Ne(c,1)),this.starGeom.setAttribute("aBatch",new Ne(h,1)),this.starGeom.setAttribute("aBatchDelay",new Ne(f,1)),this.warpOffset=0,this.currentTotalStars=2e3,this.twinkleSpeed=2.5,this.twinkleRatio=.7,this.twinkleDepth=.85,this.sizeMultiplier=1,this.centroidSpace=17,this.warpSpeed=220,this.starMat=new ct({vertexShader:bs.stars.vertex,fragmentShader:bs.stars.fragment,uniforms:{uWarpProgress:{value:0},uWarpOffset:{value:0},uBatchProgress:{value:0},uCameraPos:{value:new A},uStarsOpacity:{value:1},uTime:{value:0},uTwinkleSpeed:{value:this.twinkleSpeed},uTwinkleRatio:{value:this.twinkleRatio},uTwinkleDepth:{value:this.twinkleDepth},uSizeMultiplier:{value:this.sizeMultiplier},uCentroidSpace:{value:this.centroidSpace}},transparent:!0,depthWrite:!1,blending:xt}),this.stars=new Vs(this.starGeom,this.starMat),this.scene.add(this.stars),this.maxCenterStarCount=7e3,this.centerGeom=new at;const u=[],d=[],g=[],p=[],m=[],_=[],y=[],x=[],b=[];for(let M=0;M<this.maxCenterStarCount;M++){const E=Math.random()*Math.PI*2,C=2.5+Math.pow(Math.random(),.85)*22;u.push(C*Math.cos(E),C*Math.sin(E),Math.random()*1e3-500),d.push(.3+Math.random()*.7),g.push(E),p.push(2.5+Math.random()*5.5),m.push(Math.random()*Math.PI*2),_.push(.5+Math.random()*1.5),y.push(Math.random());const v=M%t;x.push(v/5*.8),b.push(Math.random()*.04)}this.centerGeom.setAttribute("position",new Ne(u,3)),this.centerGeom.setAttribute("aSpeed",new Ne(d,1)),this.centerGeom.setAttribute("aAngle",new Ne(g,1)),this.centerGeom.setAttribute("aSize",new Ne(p,1)),this.centerGeom.setAttribute("aTwinklePhase",new Ne(m,1)),this.centerGeom.setAttribute("aTwinkleSpeed",new Ne(_,1)),this.centerGeom.setAttribute("aTwinkleMask",new Ne(y,1)),this.centerGeom.setAttribute("aBatch",new Ne(x,1)),this.centerGeom.setAttribute("aBatchDelay",new Ne(b,1)),this.centerMat=new ct({vertexShader:bs.stars.vertex,fragmentShader:bs.stars.fragment,uniforms:{uWarpProgress:{value:0},uWarpOffset:{value:0},uBatchProgress:{value:0},uCameraPos:{value:new A},uStarsOpacity:{value:1},uTime:{value:0},uTwinkleSpeed:{value:this.twinkleSpeed},uTwinkleRatio:{value:this.twinkleRatio},uTwinkleDepth:{value:this.twinkleDepth},uSizeMultiplier:{value:this.sizeMultiplier},uCentroidSpace:{value:this.centroidSpace}},transparent:!0,depthWrite:!1,blending:xt}),this.centerStars=new Vs(this.centerGeom,this.centerMat),this.scene.add(this.centerStars),this.currentTotalStars=2e3,this.setStarCount(this.currentTotalStars),this.cylinderGeom=new Tt(20,20,300,48,48,!0),this.cylinderGeom.rotateX(Math.PI/2),this.cylinderGeom.translate(0,0,150),this.cylinderMat=new ct({vertexShader:bs.tunnel.vertex,fragmentShader:bs.tunnel.fragment,uniforms:{uTime:{value:0},uWarpProgress:{value:0},uStarsOpacity:{value:1}},transparent:!0,depthWrite:!1,side:dn}),this.tunnel=new De(this.cylinderGeom,this.cylinderMat),this.tunnel.position.set(0,0,50),this.scene.add(this.tunnel)}setStarCount(e){this.currentTotalStars=Math.max(100,Math.min(1e4,e));const t=Math.min(this.maxOuterStarCount,Math.round(this.currentTotalStars*.4)),n=Math.min(this.maxCenterStarCount,this.currentTotalStars-t);this.starGeom.setDrawRange(0,t),this.centerGeom.setDrawRange(0,n)}setTwinkleSpeed(e){this.twinkleSpeed=Math.max(0,e),this.starMat.uniforms.uTwinkleSpeed.value=this.twinkleSpeed,this.centerMat.uniforms.uTwinkleSpeed.value=this.twinkleSpeed}setTwinkleRatio(e){this.twinkleRatio=Math.max(0,Math.min(1,e)),this.starMat.uniforms.uTwinkleRatio.value=this.twinkleRatio,this.centerMat.uniforms.uTwinkleRatio.value=this.twinkleRatio}setTwinkleDepth(e){this.twinkleDepth=Math.max(0,Math.min(1,e)),this.starMat.uniforms.uTwinkleDepth.value=this.twinkleDepth,this.centerMat.uniforms.uTwinkleDepth.value=this.twinkleDepth}setSizeMultiplier(e){this.sizeMultiplier=Math.max(.1,e),this.starMat.uniforms.uSizeMultiplier.value=this.sizeMultiplier,this.centerMat.uniforms.uSizeMultiplier.value=this.sizeMultiplier}setCentroidSpace(e){this.centroidSpace=Math.max(0,e),this.starMat.uniforms.uCentroidSpace.value=this.centroidSpace,this.centerMat.uniforms.uCentroidSpace.value=this.centroidSpace}setWarpSpeed(e){this.warpSpeed=Math.max(0,e)}update(e,t,n){const i=re.currentScene,s=i==="WARP"||i==="INITIAL"||re.starsOpacity>.01;if(this.stars.visible=s,this.centerStars.visible=s,this.tunnel.visible=s,i==="INITIAL"||re.warpProgress<=1e-4)i==="INITIAL"&&(this.warpOffset=0);else if(n){const o=et.lerp(200,300,re.warpProgress)*(this.warpSpeed/250),l=.015+re.warpProgress*.985;this.warpOffset+=l*n*o}t&&(this.starMat.uniforms.uCameraPos.value.copy(t.position),this.centerMat.uniforms.uCameraPos.value.copy(t.position),this.stars.position.copy(t.position),this.stars.quaternion.copy(t.quaternion),this.centerStars.position.copy(t.position),this.centerStars.quaternion.copy(t.quaternion),this.tunnel.position.copy(t.position),this.tunnel.quaternion.copy(t.quaternion));const r=re.starBatchProgress!==void 0?re.starBatchProgress:re.warpProgress;this.starMat.uniforms.uWarpProgress.value=re.warpProgress,this.starMat.uniforms.uWarpOffset.value=this.warpOffset,this.starMat.uniforms.uBatchProgress.value=r,this.starMat.uniforms.uStarsOpacity.value=re.starsOpacity,this.starMat.uniforms.uTime.value=e,this.centerMat.uniforms.uWarpProgress.value=re.warpProgress,this.centerMat.uniforms.uWarpOffset.value=this.warpOffset,this.centerMat.uniforms.uBatchProgress.value=r,this.centerMat.uniforms.uStarsOpacity.value=re.starsOpacity,this.centerMat.uniforms.uTime.value=e,this.cylinderMat.uniforms.uWarpProgress.value=re.warpProgress,this.cylinderMat.uniforms.uTime.value=e,this.cylinderMat.uniforms.uStarsOpacity.value=re.starsOpacity}}const Nu={burnShell:{vertex:`
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
    `}};class gb{constructor(e){this.scene=e,this.plasmaShells=[],this.plasmaMat=new ct({vertexShader:Nu.burnShell.vertex,fragmentShader:Nu.burnShell.fragment,uniforms:{uTime:{value:0},uFriction:{value:0}},transparent:!0,depthWrite:!1,blending:xt,side:Vt})}createShell(e){if(!e)return;const t=[];e.traverse(n=>{n.isMesh&&t.push(n)}),t.forEach(n=>{const i=new De(n.geometry.clone(),this.plasmaMat);n.add(i),this.plasmaShells.push(i)})}update(e){this.plasmaMat.uniforms.uTime.value=e,this.plasmaMat.uniforms.uFriction.value=re.atmosphereFriction}}const ku={vertex:`
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
  `};class _b{constructor(e,t){this.scene=e,this.rocket=t,this.clouds=new pt,this.scene.add(this.clouds),this.clouds.visible=!1,this.cloudMat=new ct({vertexShader:ku.vertex,fragmentShader:ku.fragment,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,side:Vt});for(let n=0;n<30;n++){const i=new pn(500,500),s=new De(i,this.cloudMat);s.position.set(et.randFloatSpread(800),et.randFloatSpread(200),et.randFloatSpread(800)),s.rotation.x=-Math.PI/2,s.rotation.z=Math.random()*Math.PI*2,this.clouds.add(s)}this.lightningGeom=new at,this.lightningMat=new Wr({color:8978431,transparent:!0,opacity:0,blending:xt,linewidth:2}),this.lightningSegments=new Vl(this.lightningGeom,this.lightningMat),this.scene.add(this.lightningSegments),this.lightningLight=new yi(11198463,0),this.lightningLight.castShadow=!0,this.lightningLight.shadow.mapSize.width=1024,this.lightningLight.shadow.mapSize.height=1024,this.lightningLight.shadow.bias=-5e-4,this.scene.add(this.lightningLight)}generateLightningPaths(e,t,n,i){const s=[],r=new A().addVectors(e,t).multiplyScalar(.5);return r.x+=et.randFloatSpread(i),r.y+=et.randFloatSpread(i),r.z+=et.randFloatSpread(i),n<=1?s.push(e.clone(),t.clone()):(s.push(...this.generateLightningPaths(e,r,n/2,i*.5)),s.push(...this.generateLightningPaths(r,t,n/2,i*.5))),s}triggerStrike(e){if(!e)return;const t=e.position.x,n=e.position.y,i=e.position.z,s=new A(t+et.randFloatSpread(100),n+120,i+et.randFloatSpread(100)-20),r=new A(t+et.randFloatSpread(60),n-80,i+et.randFloatSpread(60)),o=this.generateLightningPaths(s,r,16,40),l=o.length;for(let g=0;g<3;g++){const p=Math.floor(Math.random()*(l-2)),m=o[p],_=new A(m.x+et.randFloatSpread(50),m.y-40-Math.random()*20,m.z+et.randFloatSpread(50));o.push(...this.generateLightningPaths(m,_,8,18))}const c=[];for(let g=0;g<o.length;g+=2)o[g]&&o[g+1]&&c.push(o[g].x,o[g].y,o[g].z,o[g+1].x,o[g+1].y,o[g+1].z);this.lightningGeom.setAttribute("position",new Ne(c,3)),this.lightningGeom.attributes.position.needsUpdate=!0;const h=ye.colors.lightningColors[Math.floor(Math.random()*ye.colors.lightningColors.length)],f=new Ce(h);this.lightningMat.color.copy(f),this.lightningLight.color.copy(f),this.lightningLight.position.copy(s),this.lightningLight.target=e;const u=document.getElementById("storm-overlay"),d=Ft.timeline();d.to(this.lightningMat,{opacity:.95,duration:.05}),d.to(this.lightningLight,{intensity:15,duration:.05},0),u&&d.to(u,{opacity:.3,duration:.05,yoyo:!0,repeat:1},0),d.to(this.lightningMat,{opacity:0,duration:.06}),d.to(this.lightningLight,{intensity:0,duration:.06},.05),d.to(this.lightningMat,{opacity:.75,duration:.04},.12),d.to(this.lightningLight,{intensity:8,duration:.04},.12),u&&d.to(u,{opacity:.15,duration:.04,yoyo:!0,repeat:1},.12),d.to(this.lightningMat,{opacity:0,duration:.12},.16),d.to(this.lightningLight,{intensity:0,duration:.12},.16)}triggerCameraLightning(e){if(!e)return;const t=new A(et.randFloatSpread(30),et.randFloatSpread(30),-15-Math.random()*15),n=new A(et.randFloatSpread(30),et.randFloatSpread(30),-15-Math.random()*15),i=t.applyMatrix4(e.matrixWorld),s=n.applyMatrix4(e.matrixWorld),r=this.generateLightningPaths(i,s,16,10),o=r.length;for(let d=0;d<2;d++){const g=Math.floor(Math.random()*(o-2)),p=r[g],m=new A(p.x+et.randFloatSpread(10),p.y-8-Math.random()*8,p.z+et.randFloatSpread(10));r.push(...this.generateLightningPaths(p,m,8,4))}const l=[];for(let d=0;d<r.length;d+=2)r[d]&&r[d+1]&&l.push(r[d].x,r[d].y,r[d].z,r[d+1].x,r[d+1].y,r[d+1].z);this.lightningGeom.setAttribute("position",new Ne(l,3)),this.lightningGeom.attributes.position.needsUpdate=!0;const c=ye.colors.lightningColors[Math.floor(Math.random()*ye.colors.lightningColors.length)],h=new Ce(c);this.lightningMat.color.copy(h),this.lightningLight.color.copy(h),this.lightningLight.position.copy(i);const f=document.getElementById("storm-overlay"),u=Ft.timeline();u.to(this.lightningMat,{opacity:.95,duration:.05}),u.to(this.lightningLight,{intensity:15,duration:.05},0),f&&u.to(f,{opacity:.45,duration:.05,yoyo:!0,repeat:1},0),u.to(this.lightningMat,{opacity:0,duration:.06}),u.to(this.lightningLight,{intensity:0,duration:.06},.05),u.to(this.lightningMat,{opacity:.75,duration:.04},.12),u.to(this.lightningLight,{intensity:8,duration:.04},.12),f&&u.to(f,{opacity:.22,duration:.04,yoyo:!0,repeat:1},.12),u.to(this.lightningMat,{opacity:0,duration:.12},.16),u.to(this.lightningLight,{intensity:0,duration:.12},.16)}update(e,t,n,i){this.cloudMat.uniforms.uTime.value=e;const s=re.currentScene;this.clouds.visible=s==="STORM",s==="STORM"||s==="LANDING"||s==="MANUAL"?(this.clouds.position.y+=t*120,this.clouds.children.forEach(r=>{const o=r.position.y+this.clouds.position.y,l=n?n.position.y:0;o>l+100&&(r.position.y-=200,r.position.x=et.randFloatSpread(800),r.position.z=et.randFloatSpread(800))}),s==="STORM"&&Math.random()<.02&&this.triggerStrike(n)):(this.lightningLight.intensity=0,this.lightningMat.opacity=0)}}function Eo(a){const e=document.createElement("canvas");e.width=2048,e.height=4608;const t=e.getContext("2d");t.imageSmoothingEnabled=!0,t.imageSmoothingQuality="high";const n=t.createLinearGradient(0,0,0,4608);n.addColorStop(0,"#010307"),n.addColorStop(.3,"#02050c"),n.addColorStop(.7,"#010307"),n.addColorStop(1,"#000103"),t.fillStyle=n,t.fillRect(0,0,2048,4608),t.strokeStyle="rgba(0, 247, 255, 0.08)",t.lineWidth=2;const i=128;for(let r=0;r<2048;r+=i)t.beginPath(),t.moveTo(r,0),t.lineTo(r,4608),t.stroke();for(let r=0;r<4608;r+=i)t.beginPath(),t.moveTo(0,r),t.lineTo(2048,r),t.stroke();if(t.save(),t.shadowBlur=0,t.lineWidth=8,t.strokeStyle="#00f7ff",t.beginPath(),t.moveTo(80,120),t.lineTo(80,4488),t.stroke(),t.beginPath(),t.moveTo(1968,120),t.lineTo(1968,4488),t.stroke(),t.beginPath(),t.moveTo(80,1e3),t.lineTo(220,1140),t.lineTo(220,1400),t.stroke(),t.beginPath(),t.arc(220,1400,20,0,Math.PI*2),t.fillStyle="#00f7ff",t.fill(),t.beginPath(),t.moveTo(80,3e3),t.lineTo(240,3140),t.lineTo(240,3400),t.stroke(),t.beginPath(),t.arc(240,3400,20,0,Math.PI*2),t.fill(),t.strokeStyle="#ffe033",t.beginPath(),t.moveTo(1968,1800),t.lineTo(1808,1940),t.lineTo(1808,2200),t.stroke(),t.beginPath(),t.arc(1808,2200,20,0,Math.PI*2),t.fillStyle="#ffe033",t.fill(),t.strokeStyle="#00f7ff",t.beginPath(),t.moveTo(1968,3600),t.lineTo(1788,3740),t.lineTo(1788,3960),t.stroke(),t.beginPath(),t.arc(1788,3960,20,0,Math.PI*2),t.fillStyle="#00f7ff",t.fill(),t.shadowBlur=0,t.fillStyle="#ffe033",t.font='bold 56px "Share Tech Mono", monospace',t.textAlign="left",t.fillText("COORD-X // 00.325.A",120,220),t.fillText("SYS_LOCK // V3.2 HD",120,300),t.textAlign="right",t.fillText("100% ULTRA HD",1928,220),t.fillText("2048X4608 // CRISP",1928,300),t.restore(),a==="face1"){t.shadowBlur=24,t.shadowColor="#00f7ff",t.fillStyle="#00f7ff",t.font='bold 176px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("VENKAT",1024,640),t.fillText("KOPPULA",1024,860),t.strokeStyle="#00f7ff",t.lineWidth=10,t.beginPath(),t.moveTo(360,1020),t.lineTo(1688,1020),t.stroke();const r=1640;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(904,r-360,240,160),t.beginPath(),t.moveTo(904,r-360),t.lineTo(1024,r-260),t.lineTo(1144,r-360),t.stroke(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("EMAIL:",1024,r-100),t.fillStyle="#ffffff",t.font='bold 68px "Share Tech Mono", monospace',t.fillText("venky.koppula2003@gmail.com",1024,r+40);const o=2700;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(924,o-380,200,280),t.strokeRect(948,o-340,152,190),t.beginPath(),t.arc(1024,o-130,14,0,Math.PI*2),t.stroke(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("CONTACT:",1024,o+20),t.fillStyle="#ffffff",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("+91 XXXXX XXXXX",1024,o+140);const l=3700;t.strokeStyle="#ff7043",t.lineWidth=10,t.beginPath(),t.moveTo(1024,l-160),t.bezierCurveTo(924,l-320,924,l-480,1024,l-480),t.bezierCurveTo(1124,l-480,1124,l-320,1024,l-160),t.closePath(),t.stroke(),t.beginPath(),t.arc(1024,l-340,30,0,Math.PI*2),t.fillStyle="#ff7043",t.fill(),t.fillStyle="#ffe033",t.font='bold 88px "Share Tech Mono", monospace',t.fillText("ADDRESS:",1024,l-20),t.fillStyle="#ffffff",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("Hyderabad, India",1024,l+100);const c=4300;t.strokeStyle="#00f7ff",t.lineWidth=10,t.strokeRect(660,c-120,200,200),t.fillStyle="#00f7ff",t.font="bold 128px sans-serif",t.fillText("in",760,c+20),t.beginPath(),t.arc(1300,c-20,100,0,Math.PI*2),t.stroke(),t.fillStyle="#00f7ff",t.beginPath(),t.arc(1300,c-4,48,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(1264,c-40),t.lineTo(1246,c-80),t.lineTo(1288,c-48),t.lineTo(1312,c-48),t.lineTo(1354,c-80),t.lineTo(1336,c-40),t.fill()}else if(a==="face2"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("THE JOURNEY",1024,560),t.strokeStyle="rgba(0, 247, 255, 0.7)",t.lineWidth=12,t.beginPath(),t.moveTo(360,840),t.lineTo(360,3500),t.stroke(),[{y:1040,title:"SCHOOL ERA",dates:"2012 - 2020"},{y:1760,title:"COLLEGE ERA",subtitle:"(CBIT/UDH)",dates:"2020 - 2024"},{y:2480,title:"INDUSTRY ASCENT",subtitle:"(HBL/HEXAGON)",dates:"2024 - 2025"},{y:3200,title:"AI/ML PIVOT",dates:"2025 - PRESENT"}].forEach(h=>{t.fillStyle="#ffe033",t.beginPath(),t.arc(360,h.y,44,0,Math.PI*2),t.fill(),t.strokeStyle="#ffe033",t.lineWidth=8,t.beginPath(),t.moveTo(360,h.y),t.lineTo(480,h.y),t.stroke(),t.textAlign="left",t.fillStyle="#00f7ff",t.font='bold 84px "Share Tech Mono", monospace',t.fillText(h.title,540,h.y-30),h.subtitle?(t.fillStyle="#ffffff",t.font='bold 60px "Share Tech Mono", monospace',t.fillText(h.subtitle,540,h.y+50),t.fillStyle="#ffe033",t.fillText(h.dates,540,h.y+130)):(t.fillStyle="#ffe033",t.font='bold 60px "Share Tech Mono", monospace',t.fillText(h.dates,540,h.y+60))});const o=3640;t.strokeStyle="#00f7ff",t.lineWidth=6,t.strokeRect(180,o,1688,440),t.strokeStyle="rgba(0, 247, 255, 0.3)";for(let h=280;h<1800;h+=120)t.beginPath(),t.moveTo(h,o),t.lineTo(h,o+440),t.stroke();for(let h=o+60;h<o+440;h+=80)t.beginPath(),t.moveTo(180,h),t.lineTo(1868,h),t.stroke();t.strokeStyle="#00f7ff",t.beginPath(),t.arc(1024,o+220,130,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(1024,o+220,70,0,Math.PI*2),t.stroke();const l=4200,c=[[{x:640,y:l+80},{x:640,y:l+220}],[{x:1024,y:l+20},{x:1024,y:l+160},{x:1024,y:l+300}],[{x:1408,y:l+80},{x:1408,y:l+220}]];t.strokeStyle="rgba(0, 247, 255, 0.5)",t.lineWidth=5;for(let h=0;h<c.length-1;h++)for(let f=0;f<c[h].length;f++)for(let u=0;u<c[h+1].length;u++)t.beginPath(),t.moveTo(c[h][f].x,c[h][f].y),t.lineTo(c[h+1][u].x,c[h+1][u].y),t.stroke();c.forEach((h,f)=>{h.forEach(u=>{t.fillStyle=f===2?"#ffe033":"#00f7ff",t.beginPath(),t.arc(u.x,u.y,24,0,Math.PI*2),t.fill()})})}else if(a==="face3"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("THE SYSTEMS CORE",1024,560);const r=1e3;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("TECH STACK",600,r),t.fillStyle="#00f7ff",t.beginPath(),t.roundRect(280,r+200,190,190,[40,40,0,40]),t.fill(),t.beginPath(),t.roundRect(370,r+100,190,190,[40,40,40,0]),t.fill(),t.fillStyle="#ffe033",t.beginPath(),t.roundRect(380,r+300,190,190,[0,40,40,40]),t.fill(),t.beginPath(),t.roundRect(290,r+410,190,190,[40,0,40,40]),t.fill(),t.strokeStyle="#ffe033",t.lineWidth=10,t.beginPath(),t.arc(780,r+300,140,0,Math.PI*2),t.stroke();for(let u=0;u<Math.PI*2;u+=Math.PI/8)t.beginPath(),t.moveTo(780+140*Math.cos(u),r+300+140*Math.sin(u)),t.lineTo(780+170*Math.cos(u),r+300+170*Math.sin(u)),t.stroke();t.fillStyle="#ffe033",t.font="bold 140px sans-serif",t.fillText("R",780,r+350);const o=2e3;t.fillStyle="#ffe033",t.font='bold 72px "Share Tech Mono", monospace',t.fillText("INTERACTIVE NETWORK",600,o);const l=[[{x:280,y:o+160},{x:280,y:o+360},{x:280,y:o+560}],[{x:600,y:o+60},{x:600,y:o+260},{x:600,y:o+460},{x:600,y:o+660}],[{x:920,y:o+160},{x:920,y:o+360},{x:920,y:o+560}]];t.strokeStyle="rgba(0, 247, 255, 0.5)",t.lineWidth=5;for(let u=0;u<l.length-1;u++)for(let d=0;d<l[u].length;d++)for(let g=0;g<l[u+1].length;g++)t.beginPath(),t.moveTo(l[u][d].x,l[u][d].y),t.lineTo(l[u+1][g].x,l[u+1][g].y),t.stroke();l.forEach(u=>{u.forEach(d=>{t.fillStyle="#00f7ff",t.beginPath(),t.arc(d.x,d.y,28,0,Math.PI*2),t.fill()})});const c=1e3;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("INDUSTRIAL EXPERTISE",1440,c),t.fillStyle="#00f7ff",t.font='bold 60px "Share Tech Mono", monospace',t.fillText("OIL REFINERIES",1440,c+120);const h=c+180;t.strokeStyle="#00f7ff",t.lineWidth=6,t.strokeRect(1200,h,480,500),t.fillStyle="rgba(0, 247, 255, 0.35)",t.fillRect(1250,h+100,120,360),t.fillRect(1450,h+160,160,300),t.fillStyle="#00f7ff",t.fillText("GAS TURBINES",1440,c+800);const f=c+860;t.strokeRect(1200,f,480,500),t.beginPath(),t.ellipse(1440,f+250,180,120,0,0,Math.PI*2),t.stroke()}else if(a==="face4"){t.shadowBlur=0,t.fillStyle="#00f7ff",t.font='bold 168px "Outfit", "Share Tech Mono", sans-serif',t.textAlign="center",t.fillText("SYSTEM STATUS",1024,560);const r=1400;t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("PARAMETERS",1024,r),t.textAlign="left",t.fillStyle="#ffffff",t.font='56px "Share Tech Mono", monospace',t.fillText("TEMP: 342.5 K",300,r+160),t.fillText("PRESSURE: 1.02 ATM",300,r+280),t.fillText("THRUST: 89.2%",300,r+400),t.fillText("LOCK: SECURED",300,r+520);const o=2800;t.textAlign="center",t.fillStyle="#ffe033",t.font='bold 80px "Share Tech Mono", monospace',t.fillText("TELEMETRY LOGS",1024,o);const l=["> CONNECTING TO CORE SENSORS...","> TELEMETRY STREAM: OPTIMAL","> FLIGHT SYSTEMS BALANCED","> ATMOSPHERIC ENTRY STABLE","> MONOLITH HUD ACTIVE","> READY FOR CORE SYNC.","> ALL SYSTEMS STATUS: ACTIVE"];t.textAlign="left",t.fillStyle="#00f7ff",t.font='bold 64px "Share Tech Mono", monospace',l.forEach((c,h)=>{t.fillText(c,200,o+160+h*150)})}const s=new Gn(e);return s.generateMipmaps=!0,s.minFilter=Un,s.magFilter=bt,s.anisotropy=16,s}class xb{constructor(e){this.scene=e,this.frontScreenTex=Eo("face1"),this.rightScreenTex=Eo("face2"),this.backScreenTex=Eo("face3"),this.leftScreenTex=Eo("face4");const t=i=>{i.generateMipmaps=!0,i.minFilter=Un,i.magFilter=bt,i.anisotropy=16,i.needsUpdate=!0};t(this.frontScreenTex),t(this.rightScreenTex),t(this.backScreenTex),t(this.leftScreenTex),this.monolithNoiseTexture=ks(512,512,"#1a2332","#070b12"),this.monolithNoiseTexture.repeat.set(6,18),this.monolithMat=new rt({color:527380,map:this.monolithNoiseTexture,bumpMap:this.monolithNoiseTexture,bumpScale:.04,roughness:.18,metalness:.95});const n=i=>new rt({map:i,emissiveMap:i,emissive:new Ce(16777215),emissiveIntensity:1,metalness:.85,roughness:.12,bumpMap:this.monolithNoiseTexture,bumpScale:.02,side:Vt});this.frontScreenMat=n(this.frontScreenTex),this.backScreenMat=n(this.backScreenTex),this.rightScreenMat=n(this.rightScreenTex),this.leftScreenMat=n(this.leftScreenTex),this.slabTexture=ks(256,256,"#181d28","#0b0d13"),this.slabMat=new rt({map:this.slabTexture,bumpMap:this.slabTexture,bumpScale:.08,roughness:.85,metalness:.15}),this.padTexture=ks(256,256,"#3a4454","#202632"),this.padMat=new rt({map:this.padTexture,bumpMap:this.padTexture,bumpScale:.05,roughness:.65,metalness:.35})}configureMonolith(e){let t=null;if(e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.name.includes("Monolith")?(n.material=this.monolithMat,n.scale.set(4,.71,4)):n.name.includes("Cube.006")||n.name.includes("Cube006")?(t=n,n.geometry=new pn(1,1),n.material=this.frontScreenMat,n.position.set(0,22.5,-32.95),n.scale.set(24.1,45,1),n.rotation.y=0):n.name.includes("Cube.007")||n.name.includes("Cube007")?(n.geometry=new pn(1,1),n.material=this.backScreenMat,n.position.set(0,22.5,-57.05),n.scale.set(24.1,45,1),n.rotation.y=Math.PI):n.name.includes("LandingPad")||n.name.includes("PadGlowRing")||n.name.includes("PadCenterMetal")?n.material=this.padMat:n.name.includes("Cube")||n.name.includes("Slab")||n.name.includes("Plate")||n.name.includes("Ring")?n.visible=!1:n.material&&(n.material=this.slabMat))}),t&&(this.rightScreenMesh=t.clone(),this.rightScreenMesh.name="Cube006_right",this.rightScreenMesh.material=this.rightScreenMat,this.rightScreenMesh.position.set(12.05,22.5,-45),this.rightScreenMesh.rotation.set(0,Math.PI/2,0),this.rightScreenMesh.scale.set(24.1,45,1),e.add(this.rightScreenMesh),this.leftScreenMesh=t.clone(),this.leftScreenMesh.name="Cube006_left",this.leftScreenMesh.material=this.leftScreenMat,this.leftScreenMesh.position.set(-12.05,22.5,-45),this.leftScreenMesh.rotation.set(0,-Math.PI/2,0),this.leftScreenMesh.scale.set(24.1,45,1),e.add(this.leftScreenMesh)),!this.monolithTopCap){const n=new pn(24.1,24.1);this.monolithTopCap=new De(n,this.monolithMat),this.monolithTopCap.name="MonolithTopCap",this.monolithTopCap.position.set(0,45,-45),this.monolithTopCap.rotation.x=-Math.PI/2,this.monolithTopCap.castShadow=!0,this.monolithTopCap.receiveShadow=!0,e.add(this.monolithTopCap)}}updateTextGlow(e){this.textGlowFactor=e;const t=(this.textBrightnessFactor!==void 0?this.textBrightnessFactor:1)*(this.textGlowFactor!==void 0?this.textGlowFactor:1);this.updateEmissiveIntensity(t)}updateTextBrightness(e){this.textBrightnessFactor=e;const t=(this.textBrightnessFactor!==void 0?this.textBrightnessFactor:1)*(this.textGlowFactor!==void 0?this.textGlowFactor:1);this.updateEmissiveIntensity(t)}updateEmissiveIntensity(e){this.frontScreenMat&&this.frontScreenMat.emissiveIntensity!==void 0&&(this.frontScreenMat.emissiveIntensity=e,this.backScreenMat.emissiveIntensity=e,this.rightScreenMat.emissiveIntensity=e,this.leftScreenMat.emissiveIntensity=e)}}const Fu={vertex:`
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
  `};function Bu(a,e){const t=document.createElement("canvas");t.width=2048,t.height=2048;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,2048,2048);const i=n.createRadialGradient(1024,1024,40,1024,1024,960);i.addColorStop(0,a),i.addColorStop(.35,e),i.addColorStop(.7,"rgba(0,0,0,0.02)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,2048,2048),n.globalCompositeOperation="screen";for(let l=0;l<20;l++){const c=300+Math.random()*1448,h=300+Math.random()*1448,f=160+Math.random()*440,u=n.createRadialGradient(c,h,8,c,h,f);u.addColorStop(0,"rgba(75, 40, 130, 0.08)"),u.addColorStop(.5,"rgba(50, 20, 90, 0.04)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.beginPath(),n.arc(c,h,f,0,Math.PI*2),n.fill()}const s=n.getImageData(0,0,2048,2048),r=s.data;for(let l=0;l<r.length;l+=4)if(r[l+3]>0){const c=(Math.random()-.5)*5;r[l]=Math.min(255,Math.max(0,r[l]+c)),r[l+1]=Math.min(255,Math.max(0,r[l+1]+c)),r[l+2]=Math.min(255,Math.max(0,r[l+2]+c))}n.putImageData(s,0,0);const o=new Gn(t);return o.minFilter=bt,o.magFilter=bt,o}function vb(){const a=document.createElement("canvas");a.width=64,a.height=64;const e=a.getContext("2d");e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,64,64);const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.15,"rgba(255, 255, 255, 1.0)"),t.addColorStop(.35,"rgba(200, 240, 255, 1.0)"),t.addColorStop(.7,"rgba(100, 160, 255, 0.5)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=e.createLinearGradient(0,32,64,32);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(8,32),e.lineTo(56,32),e.stroke();let i=e.createLinearGradient(32,0,32,64);i.addColorStop(0,"rgba(255, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.95)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=i,e.lineWidth=1,e.beginPath(),e.moveTo(32,8),e.lineTo(32,56),e.stroke();const s=new Gn(a);return s.minFilter=bt,s.magFilter=bt,s}function ks(a=256,e=256,t="#1a1f2c",n="#0d0f15"){const i=document.createElement("canvas");i.width=a,i.height=e;const s=i.getContext("2d"),r=s.createLinearGradient(0,0,a,e);r.addColorStop(0,t),r.addColorStop(1,n),s.fillStyle=r,s.fillRect(0,0,a,e);const o=s.getImageData(0,0,a,e),l=o.data;for(let h=0;h<l.length;h+=4){const f=(Math.random()-.5)*15;l[h]=Math.min(255,Math.max(0,l[h]+f)),l[h+1]=Math.min(255,Math.max(0,l[h+1]+f)),l[h+2]=Math.min(255,Math.max(0,l[h+2]+f))}s.putImageData(o,0,0);for(let h=0;h<40;h++)s.fillStyle=Math.random()<.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.03)",s.beginPath(),s.arc(Math.random()*a,Math.random()*e,2+Math.random()*8,0,Math.PI*2),s.fill();const c=new Gn(i);return c.wrapS=wi,c.wrapT=wi,c.repeat.set(4,4),c}class yb{constructor(e){this.scene=e,this.moonGroup=new pt,this.scene.add(this.moonGroup),this.moonLight=new yi(ye.colors.moonColor,.6),this.moonLight.position.set(0,150,-450),this.moonLight.castShadow=!0,this.moonLight.shadow.mapSize.width=2048,this.moonLight.shadow.mapSize.height=2048,this.moonLight.shadow.bias=-4e-4,this.moonGroup.add(this.moonLight),this.nebMat1=new Dt({map:Bu("rgba(20, 100, 240, 0.28)","rgba(5, 12, 40, 0)"),transparent:!0,depthWrite:!1,blending:xt,side:Vt,fog:!1}),this.nebMat2=new Dt({map:Bu("rgba(140, 40, 180, 0.22)","rgba(12, 3, 24, 0)"),transparent:!0,depthWrite:!1,blending:xt,side:Vt,fog:!1});const t=new pn(1200,450);this.nebulaCount=5,this.nebulaMeshes=[],this.nebulaXOffsets=[],this.nebulaSettings=[];const n=1400,i=n/2;for(let p=0;p<this.nebulaCount;p++){const m=p%2===0?this.nebMat1:this.nebMat2,_=new De(t,m),y=p/this.nebulaCount*n-i,x=240+Math.random()*40,b=-520+Math.random()*30;_.position.set(y,x,b),_.rotation.y=(Math.random()-.5)*.4,this.moonGroup.add(_),this.nebulaMeshes.push(_),this.nebulaXOffsets.push(y),this.nebulaSettings.push({rotSpeed:.008+Math.random()*.016,rotDir:Math.random()<.5?1:-1,yBase:x,driftFreqX:.2+Math.random()*.2,driftAmpX:25+Math.random()*20,driftFreqY:.1+Math.random()*.2,driftAmpY:5+Math.random()*5})}this.starCount=400,this.starSpeed=3,this.starSize=1.5,this.lastTime=0;const s=[];for(let p=0;p<4;p++){const m=.2+Math.random()*(Math.PI/2-.3),_=Math.random()*Math.PI,y=620;s.push({x:y*Math.sin(m)*Math.cos(_),y:Math.abs(y*Math.cos(m))+60,z:-Math.abs(y*Math.sin(m)*Math.sin(_))-320})}const r=new at,o=[];for(let p=0;p<this.starCount;p++)if(Math.random()<.65&&s.length>0){const m=s[Math.floor(Math.random()*s.length)],_=50,y=(Math.random()-.5+Math.random()-.5)*_,x=(Math.random()-.5+Math.random()-.5)*_,b=(Math.random()-.5+Math.random()-.5)*_;o.push(m.x+y,m.y+x,m.z+b)}else{const m=Math.random()*Math.PI,_=Math.random()*Math.PI,y=580+Math.random()*160,x=y*Math.sin(m)*Math.cos(_),b=Math.abs(y*Math.cos(m))+50,M=-Math.abs(y*Math.sin(m)*Math.sin(_))-320;o.push(x,b,M)}const l={vertex:`
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
  `};r.setAttribute("position",new Ne(o,3));const c=new Float32Array(this.starCount),h=new Float32Array(this.starCount);for(let p=0;p<this.starCount;p++)c[p]=Math.random()*Math.PI*2,h[p]=.25+Math.random()*.75;r.setAttribute("aPhase",new ot(c,1)),r.setAttribute("aSpeed",new ot(h,1)),this.starMat=new ct({vertexShader:l.vertex,fragmentShader:l.fragment,uniforms:{uTime:{value:0},uSize:{value:this.starSize*3.2},uTexture:{value:vb()},uColor:{value:new Ce(16777215)},uOpacity:{value:0}},transparent:!0,blending:xt,depthWrite:!1,fog:!1}),this.stars=new Vs(r,this.starMat),this.moonGroup.add(this.stars),this.stormAmbient=new $l(16777215,re.ambientIntensity),this.scene.add(this.stormAmbient),this.stormSkyLight=new yi(1976635,.7),this.stormSkyLight.position.set(40,150,40),this.scene.add(this.stormSkyLight),this.oceanGeom=new pn(4e3,4e3,250,250),this.oceanMat=new ct({vertexShader:Fu.vertex,fragmentShader:Fu.fragment,uniforms:{uTime:{value:0},uMoonLightPos:{value:this.moonLight.position},uMoonColor:{value:new Ce(ye.colors.moonColor)},uDarkWaterColor:{value:new Ce(ye.colors.oceanDarkWater)},uThrusterIntensity:{value:0},uThrusterPos:{value:new A(0,0,0)},uLandingFadeIn:{value:0},uAmbientIntensity:{value:.6}},side:Vt}),this.ocean=new De(this.oceanGeom,this.oceanMat),this.ocean.rotation.x=-Math.PI/2,this.ocean.receiveShadow=!0,this.monolithManager=new xb(this.scene),this.monolithMat=this.monolithManager.monolithMat,this.slabTexture=ks(256,256,"#181d28","#0b0d13"),this.slabMat=new rt({map:this.slabTexture,bumpMap:this.slabTexture,bumpScale:.08,roughness:.85,metalness:.15}),this.padTexture=ks(256,256,"#171b21","#0e1116"),this.padMat=new rt({color:1119773,map:this.padTexture,bumpMap:this.padTexture,bumpScale:.05,roughness:.55,metalness:.35}),this.pillarTexture=ks(256,256,"#404c5c","#2c3540"),this.pillarMat=new rt({map:this.pillarTexture,bumpMap:this.pillarTexture,bumpScale:.04,roughness:.25,metalness:.9}),this.ambientHoverLight=new Es(65535,1.5,25),this.ambientHoverLight.position.set(0,5,-72);const f=document.createElement("canvas");f.width=128,f.height=128;const u=f.getContext("2d"),d=u.createRadialGradient(64,64,0,64,64,64);d.addColorStop(0,"rgba(0, 240, 255, 1.0)"),d.addColorStop(.4,"rgba(0, 240, 255, 0.3)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=d,u.fillRect(0,0,128,128);const g=new Gn(f);this.poolMat=new Dt({map:g,color:65535,transparent:!0,blending:xt,depthWrite:!1}),this.hoverPool=new De(new pn(80,80),this.poolMat),this.hoverPool.rotation.x=-Math.PI/2,this.hoverPool.position.set(0,.1,-72)}configureMonolith(e){if(!e)return;this.monolithManager.configureMonolith(e);const t=[];e.children.forEach(s=>{Math.abs(s.position.z)<20&&t.push(s)}),this.padGroup=new pt,t.forEach(s=>{this.padGroup.add(s)}),this.padGroup.position.set(0,0,-45),e.add(this.padGroup),this.rocketPadGroup=this.padGroup.clone(),this.rocketPadGroup.position.set(40,7,-100),this.rocketPadGroup.scale.set(.6,.6,.6),this.scene.add(this.rocketPadGroup),this.scene.add(this.ambientHoverLight),this.scene.add(this.hoverPool);const n=new Tt(11,12,15,64,32);this.monolithPillar=new De(n,this.pillarMat),this.monolithPillar.position.set(0,-.5,-72),this.monolithPillar.receiveShadow=!0,this.monolithPillar.castShadow=!0,this.scene.add(this.monolithPillar);const i=new Tt(6,7,15,64,32);this.rocketPillar=new De(i,this.pillarMat),this.rocketPillar.position.set(40,-.5,-100),this.rocketPillar.receiveShadow=!0,this.rocketPillar.castShadow=!0,this.scene.add(this.rocketPillar),this.monoStageLight=new yi(13559807,1.2),this.monoStageLight.position.set(0,80,-72),this.monoStageLight.castShadow=!0,this.monoStageLight.shadow.mapSize.width=1024,this.monoStageLight.shadow.mapSize.height=1024,this.monoStageLight.shadow.bias=-6e-4,this.monoStageLight.shadow.radius=4,this.monoStageLight.shadow.camera.left=-30,this.monoStageLight.shadow.camera.right=30,this.monoStageLight.shadow.camera.top=30,this.monoStageLight.shadow.camera.bottom=-30,this.monoStageLight.shadow.camera.near=10,this.monoStageLight.shadow.camera.far=100,this.scene.add(this.monoStageLight),this.scene.add(this.monoStageLight.target),this.monoStageLight.target.position.set(0,7,-72)}setMonolithLightIntensity(e){this.baseMonoStageLightIntensity=1.2*e,this.monoStageLight&&(this.monoStageLight.intensity=this.baseMonoStageLightIntensity*(re.landingFadeInProgress||1))}activateOcean(){this.scene.add(this.ocean)}update(e,t){this.oceanMat.uniforms.uTime.value=e;const n=re.currentScene,i=n==="LANDING"||n==="MANUAL",s=n==="STORM"||n==="LANDING"||n==="MANUAL";if(this.moonGroup.visible=i,this.ocean.visible=i,this.ambientHoverLight.visible=i,this.hoverPool.visible=i,this.rocketPadGroup&&(this.rocketPadGroup.visible=i),this.monolithPillar&&(this.monolithPillar.visible=i),this.rocketPillar&&(this.rocketPillar.visible=i),this.monoStageLight&&(this.monoStageLight.visible=i),this.stormAmbient.visible=s,this.stormSkyLight.visible=s,t&&(this.oceanMat.uniforms.uThrusterIntensity.value=re.thrusterIntensity,this.oceanMat.uniforms.uThrusterPos.value.copy(t.position)),this.oceanMat.uniforms.uLandingFadeIn.value=re.landingFadeInProgress,this.oceanMat.uniforms.uAmbientIntensity.value=re.ambientIntensity,i){const r=re.landingFadeInProgress,o=1;if(this.monolithMat.emissiveIntensity=o*r,this.ambientHoverLight.intensity=1.5*r,this.poolMat.opacity=.25*r,this.moonLight.intensity=.6*r,this.stormAmbient.intensity=re.ambientIntensity*r,this.stormSkyLight.intensity=.7*r,this.monoStageLight){const d=this.baseMonoStageLightIntensity!==void 0?this.baseMonoStageLightIntensity:1.2;this.monoStageLight.intensity=d*r}this.nebMat1&&(this.nebMat1.opacity=r*.4),this.nebMat2&&(this.nebMat2.opacity=r*.3),this.starMat&&this.starMat.uniforms&&(this.starMat.uniforms.uTime.value=e,this.starMat.uniforms.uOpacity.value=r*.85);const l=performance.now()*.001,c=this.lastTime?l-this.lastTime:.016;this.lastTime=l;const h=this.starSpeed*.5,u=1400/2;for(let d=0;d<this.nebulaCount;d++){this.nebulaXOffsets[d]+=h*c,this.nebulaXOffsets[d]>u&&(this.nebulaXOffsets[d]=-u);const g=this.nebulaMeshes[d],p=this.nebulaSettings[d];g&&p&&(g.rotation.z=l*p.rotSpeed*p.rotDir,g.position.x=this.nebulaXOffsets[d]+Math.sin(l*p.driftFreqX)*p.driftAmpX,g.position.y=p.yBase+Math.cos(l*p.driftFreqY)*p.driftAmpY)}if(this.stars){const d=this.stars.geometry.getAttribute("position"),g=d.array;for(let p=0;p<this.starCount;p++){const m=p*3;g[m]+=this.starSpeed*c,g[m]>450&&(g[m]=-450)}d.needsUpdate=!0}}else n==="STORM"&&(this.stormAmbient.intensity=re.ambientIntensity,this.stormSkyLight.intensity=.7)}}class Mb{constructor(e,t,n,i,s,r){this.scene=e,this.camera=t,this.renderer=n,this.composer=i,this.bloomPass=s,this.loadingManager=r||new Kl,this.isActive=!1,this.sequenceTime=0,this.cinematicTimeline=null,this.landingLegs=[],this.rocketMaterials=[],this.targetMonolithRotationY=0,this.initGroups(),this.initLightsAndEnvironment(),this.initSystems(),this.initInteractionHandlers(),this.loadAssets()}initGroups(){this.spaceGroup=new pt,this.spaceGroup.name="EarthLandingSpaceGroup",this.spaceGroup.visible=!1,this.scene.add(this.spaceGroup),this.oceanGroup=new pt,this.oceanGroup.name="EarthLandingOceanGroup",this.oceanGroup.visible=!1,this.scene.add(this.oceanGroup),this.earthGroup=new pt,this.earthGroup.name="EarthGroup",this.spaceGroup.add(this.earthGroup),this.earthGroup.visible=!1,re.earth=this.earthGroup;const e=new rt({color:1122884,roughness:.7,metalness:.1,emissive:1920728,emissiveIntensity:.35}),t=new Jo(120,32,32),n=new De(t,e);this.earthGroup.add(n)}initLightsAndEnvironment(){this.cubeRenderTarget=new cf(256,{generateMipmaps:!0,minFilter:Un,format:hn}),this.cubeCamera=new af(.1,1e3,this.cubeRenderTarget),this.scene.add(this.cubeCamera),this.spaceAmbient=new $l(16777215,.6),this.spaceGroup.add(this.spaceAmbient),this.spaceSun=new yi(16777215,1.5),this.spaceSun.name="spaceSun",this.spaceSun.position.set(-100,150,100),this.spaceGroup.add(this.spaceSun),this.earthFrontLight=new yi(16777215,0),this.earthFrontLight.name="earthFrontLight",this.spaceGroup.add(this.earthFrontLight),this.hemisphereLight=new Cf(8246268,1976635,1.2),this.hemisphereLight.name="earthLandingHemiLight",this.hemisphereLight.visible=!1,this.scene.add(this.hemisphereLight),this.searchLight=new Pf(65450,20,180,Math.PI/5,.4,.5),this.searchLight.castShadow=!0,this.searchLight.shadow.mapSize.width=1024,this.searchLight.shadow.mapSize.height=1024,this.searchLight.visible=!1,this.scene.add(this.searchLight),this.scene.add(this.searchLight.target);const e=new jl(4,4.4,32),t=new Dt({color:65450,side:Vt,transparent:!0,opacity:.8});this.targetRing=new De(e,t),this.targetRing.rotation.x=-Math.PI/2,this.targetRing.position.set(40,7.01,-100),this.oceanGroup.add(this.targetRing)}initSystems(){this.warpSystem=new mb(this.spaceGroup),this.atmosphereSystem=new gb(this.spaceGroup),this.landingSystem=new yb(this.oceanGroup),this.stormSystem=null}initInteractionHandlers(){const e=document.getElementById("monolith-rotate-left"),t=document.getElementById("monolith-rotate-right");e&&e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.monolithScene&&(this.targetMonolithRotationY-=Math.PI/2,Ft.to(this.monolithScene.rotation,{y:this.targetMonolithRotationY,duration:.85,ease:"power2.out"}))}),t&&t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.monolithScene&&(this.targetMonolithRotationY+=Math.PI/2,Ft.to(this.monolithScene.rotation,{y:this.targetMonolithRotationY,duration:.85,ease:"power2.out"}))})}loadAssets(){const e=new ec(this.loadingManager);e.load(ye.assets.rocketModel,t=>{this.rocketModel=t.scene,this.rocketModel.scale.set(1,1,1),this.rocketModel.position.set(42,-6.25,30),this.rocketModel.rotation.set(0,0,0),this.rocketModel.visible=!0,this.scene.add(this.rocketModel),this.configureRocketModel(this.rocketModel),this.atmosphereSystem.createShell(this.rocketModel),this.stormSystem=new _b(this.scene,this.rocketModel);const n=new ql(.8,6,16,1,!0);n.translate(0,-3,0);const i=new Dt({color:16755268,transparent:!0,opacity:0,blending:xt});this.thrusterFlame=new De(n,i),this.thrusterFlame.position.set(0,-1.8,0),this.rocketModel.add(this.thrusterFlame),this.checkReadyAndBuildTimeline()}),e.load(ye.assets.monolithScene,t=>{this.monolithScene=t.scene;const n=.6*.76;this.monolithScene.scale.set(n,n,n),this.monolithScene.position.set(0,7,-72+n*45),this.oceanGroup.add(this.monolithScene),this.landingSystem.configureMonolith(this.monolithScene),this.landingSystem.activateOcean(),this.checkReadyAndBuildTimeline()})}configureRocketModel(e){e.traverse(t=>{t.name&&(t.name.toLowerCase().includes("leg")||t.name.toLowerCase().includes("foot")||t.name.toLowerCase().includes("gear")||t.name.toLowerCase().includes("strut"))&&(this.landingLegs.push(t),t.scale.set(.001,.001,.001)),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{this.rocketMaterials.push(i),i.metalness=.99,i.roughness=.01,i.color&&i.color.setHex(11184810),i.envMap=this.cubeRenderTarget.texture,i.envMapIntensity=.35,i.needsUpdate=!0}))})}checkReadyAndBuildTimeline(){this.rocketModel&&this.monolithScene&&!this.cinematicTimeline&&(this.cinematicTimeline=pb(this.rocketModel,this.earthGroup,this.spaceGroup,this.oceanGroup,this.renderer,this.camera,this.landingLegs,this.bloomPass),re.timeScale=ye.timeScale,this.cinematicTimeline.timeScale(re.timeScale),console.log("[EARTH LANDING] Cinematic timeline successfully built & ready!"))}startSequence(){this.isActive=!0,this.spaceGroup.visible=!0,this.hemisphereLight.visible=!0,this.scene.background&&this.scene.background.isColor?this.scene.background.setHex(ye.colors.bgSpace):this.scene.background=new Ce(ye.colors.bgSpace),this.scene.fog?(this.scene.fog.color.setHex(ye.colors.bgSpace),this.scene.fog.density=0):this.scene.fog=new zl(ye.colors.bgSpace,0),this.rocketModel&&(this.rocketModel.visible=!0,this.rocketModel.position.set(42,-6.25,30),this.rocketModel.rotation.set(0,0,0),this.rocketModel.scale.set(1,1,1),this.rocketModel.updateMatrixWorld(!0)),Nn.currentPos.copy(this.camera.position),Nn.targetPos.copy(this.camera.position),Nn.currentLook.set(38.71423,-5.01504,30.55209),Nn.targetLook.set(38.71423,-5.01504,30.55209),Nn.instantSnapNextFrame=!0,Nn.localYOffset=-8,this.cinematicTimeline&&this.cinematicTimeline.play(0),console.log("[EARTH LANDING] Sequence ignited at 50/50 starting frame with zero 1-frame hitch!")}updateCubeNow(){if(this.rocketModel&&this.cubeCamera&&this.rocketModel.visible){const e=this.rocketModel.visible,t=this.renderer.shadowMap.enabled;this.renderer.shadowMap.enabled=!1,this.rocketModel.visible=!1,this.cubeCamera.position.copy(this.rocketModel.position),this.cubeCamera.update(this.renderer,this.scene),this.rocketModel.visible=e,this.renderer.shadowMap.enabled=t,this.hasRenderedInitialCube=!0}}update(e,t){if(this.rocketModel&&this.cubeCamera&&this.rocketModel.visible&&(this.cubeFrameCounter||(this.cubeFrameCounter=0),this.cubeFrameCounter++,(!this.hasRenderedInitialCube||this.isActive&&this.cubeFrameCounter%6===0)&&this.updateCubeNow()),!this.isActive){this.warpSystem&&(this.spaceGroup.visible||re.starsOpacity>.001)&&this.warpSystem.update(e,this.camera,t);return}const n=t*re.timeScale;if(this.cinematicTimeline&&(this.cinematicTimeline.timeScale()!==re.timeScale&&this.cinematicTimeline.timeScale(re.timeScale),re.timelineTime=this.cinematicTimeline.time()),re.currentScene!=="INITIAL"?this.sequenceTime+=n:this.sequenceTime=0,re.globalTime=this.sequenceTime,cb.tick(this.rocketModel),Nn.update(this.camera,this.rocketModel,this.sequenceTime,n),this.rocketModel&&this.searchLight&&(this.searchLight.position.copy(this.rocketModel.position),this.searchLight.target.position.set(this.rocketModel.position.x,this.rocketModel.position.y-60,this.rocketModel.position.z),this.searchLight.visible=this.rocketModel.visible&&re.currentScene!=="WARP"&&re.currentScene!=="INITIAL"&&re.currentScene!=="SNAP_BACK"),this.targetRing&&(this.targetRing.visible=re.currentScene==="STORM"||re.currentScene==="LANDING"||re.currentScene==="MANUAL"),re.currentScene==="REENTRY"&&this.rocketModel){const o=re.rocketArcProgress,l=99.45*(1-o)-31.84*o-378.02*o*(1-o),c=-53.54+433.54*o,h=25.23*(1-o)-16.91*o+68.56*o*(1-o),f=10*(1-.94*o);this.rocketModel.position.set(l,c,h),this.rocketModel.scale.set(f,f,f);const u=Math.min(o+.002,1),d=99.45*(1-u)-31.84*u-378.02*u*(1-u),g=-53.54+433.54*u,p=25.23*(1-u)-16.91*u+68.56*u*(1-u),m=new A(d-l,g-c,p-h).normalize(),_=new On().setFromUnitVectors(new A(0,1,0),m);o===0?this.rocketModel.quaternion.copy(_):this.rocketModel.quaternion.slerp(_,.08)}if(this.thrusterFlame){const o=re.thrusterIntensity/8;this.thrusterFlame.scale.set(1,o,1),this.thrusterFlame.material.opacity=o*.85}const i=document.getElementById("storm-overlay");i&&(i.style.opacity=re.whiteoutOpacity),this.warpSystem&&this.warpSystem.update(this.sequenceTime,this.camera,n),this.atmosphereSystem&&this.atmosphereSystem.update(this.sequenceTime),this.landingSystem&&this.landingSystem.update(this.sequenceTime,this.rocketModel),this.stormSystem&&this.stormSystem.update(this.sequenceTime,n,this.rocketModel,this.camera);let s=ye.colors.bgSpace;re.currentScene==="STORM"?s=ye.colors.bgStorm:(re.currentScene==="LANDING"||re.currentScene==="MANUAL")&&(s=ye.colors.bgLanding);const r=new Ce(s);if(this.scene.fog&&(this.scene.fog.color.copy(r),this.scene.background.copy(r),this.scene.fog.density=et.lerp(this.scene.fog.density,re.globalFogDensity||0,.05)),this.monolithScene){const o=.45599999999999996,l=re.currentScene==="LANDING"||re.currentScene==="MANUAL",c=l&&re.monolithRiseProgress!==void 0?re.monolithRiseProgress:1,f=7+(ye.monolith&&ye.monolith.startDepth?ye.monolith.startDepth:-45)*(1-c);this.monolithScene.scale.set(o,o,o);const u=this.monolithScene.rotation.y,d=o*45,g=d*Math.sin(u),p=-72+d*Math.cos(u);this.monolithScene.position.set(g,f,p),this.landingSystem&&this.landingSystem.monolithPillar&&(this.landingSystem.monolithPillar.rotation.y=this.monolithScene.rotation.y);const m=document.getElementById("monolith-rotation-controls"),_=document.getElementById("monolith-rotate-left"),y=document.getElementById("monolith-rotate-right");if(m&&_&&y)if(l&&re.monolithRiseProgress!==void 0&&re.monolithRiseProgress>=.98){m.classList.add("visible");const b=new A(-13,14,-72),M=new A(13,14,-72);b.project(this.camera),M.project(this.camera);const E=(b.x*.5+.5)*window.innerWidth,C=(-(b.y*.5)+.5)*window.innerHeight,v=(M.x*.5+.5)*window.innerWidth,w=(-(M.y*.5)+.5)*window.innerHeight;_.style.left=`${E}px`,_.style.top=`${C}px`,y.style.left=`${v}px`,y.style.top=`${w}px`}else m.classList.remove("visible")}}}const bb=new A,Sb=new A;class wb{constructor(e,t,n,i=!1){this.scene=e,this.camera=t,this.earthLandingManager=n,this.isEnabled=i,this.alignmentRayGroup=null,this.rocketTipLocalY=9.85,this.reticleOverlay=document.getElementById("alignment-reticle-overlay"),this.toggleBtn=document.getElementById("toggle-align-guide-btn"),this.tipCoordsElem=document.getElementById("telemetry-tip-coords"),this.deltaElem=document.getElementById("telemetry-delta"),this.badgeElem=document.getElementById("telemetry-status-badge"),this.init3DRay(),this.bindEvents(),this.setEnabled(this.isEnabled)}init3DRay(){if(this.alignmentRayGroup)return;this.alignmentRayGroup=new pt,this.alignmentRayGroup.name="RocketAlignmentRayGroup";const e=new Jo(.14,16,16),t=new Dt({color:16711807,transparent:!0,opacity:.95}),n=new De(e,t);n.name="TipSphere",this.alignmentRayGroup.add(n);const i=new at().setFromPoints([new A(0,0,0),new A(0,150,0)]),s=new Wr({color:61695,linewidth:3,transparent:!0,opacity:.95,blending:xt}),r=new Zo(i,s);this.alignmentRayGroup.add(r);const o=new Tt(.04,.04,150,8);o.translate(0,75,0);const l=new Dt({color:61695,transparent:!0,opacity:.55,blending:xt}),c=new De(o,l);this.alignmentRayGroup.add(c);const h=new Tt(.12,.12,150,8);h.translate(0,75,0);const f=new Dt({color:16711807,transparent:!0,opacity:.25,blending:xt}),u=new De(h,f);this.alignmentRayGroup.add(u),this.alignmentRayGroup.visible=this.isEnabled,this.scene.add(this.alignmentRayGroup)}bindEvents(){var e;(e=this.toggleBtn)==null||e.addEventListener("click",()=>{this.toggle()})}updateRocketTipBounds(){if(this.earthLandingManager&&this.earthLandingManager.rocketModel){const e=this.earthLandingManager.rocketModel,t=new ts;e.traverse(n=>{if(n.isMesh&&n.geometry){n.geometry.boundingBox||n.geometry.computeBoundingBox();const i=n.geometry.boundingBox.clone();i.applyMatrix4(n.matrix),t.union(i)}}),isFinite(t.max.y)&&t.max.y>0&&(this.rocketTipLocalY=t.max.y)}}setEnabled(e){this.isEnabled=!!e,this.alignmentRayGroup&&(this.alignmentRayGroup.visible=this.isEnabled),this.reticleOverlay&&(this.isEnabled?this.reticleOverlay.classList.remove("alignment-reticle-hidden"):this.reticleOverlay.classList.add("alignment-reticle-hidden")),this.toggleBtn&&(this.toggleBtn.innerText=this.isEnabled?"🎯 ALIGNMENT GUIDES: ON":"🎯 ALIGNMENT GUIDES: OFF",this.toggleBtn.style.borderColor=this.isEnabled?"#c084fc":"rgba(148, 163, 184, 0.3)")}toggle(e){const t=e!==void 0?e:!this.isEnabled;return this.setEnabled(t),this.isEnabled}update(){if(!this.isEnabled||!this.earthLandingManager||!this.earthLandingManager.rocketModel||!this.alignmentRayGroup)return;const e=this.earthLandingManager.rocketModel;e.updateMatrixWorld(!0);const t=bb.set(0,this.rocketTipLocalY,0),n=Sb.copy(t).applyMatrix4(e.matrixWorld);this.alignmentRayGroup.position.copy(n),this.alignmentRayGroup.quaternion.copy(e.quaternion);const i=n.clone().project(this.camera),s=Math.sqrt(i.x*i.x+i.y*i.y);this.tipCoordsElem&&(this.tipCoordsElem.innerText=`${i.x>=0?"+":""}${i.x.toFixed(3)}, ${i.y>=0?"+":""}${i.y.toFixed(3)}`),this.deltaElem&&(this.deltaElem.innerText=s.toFixed(3)),this.badgeElem&&(s<.04?(this.badgeElem.className="badge-aligned",this.badgeElem.innerText="🎯 ALIGNED WITH CENTER!"):(this.badgeElem.className="badge-aligning",this.badgeElem.innerText="ALIGNING..."))}}class Tb{constructor(e={}){this.camera=e.camera,this.controls=e.controls,this.bloomPass=e.bloomPass,this.cursiveTextInstance=e.cursiveTextInstance,this.techAvatarInstance=e.techAvatarInstance,this.hologramScreenInstance=e.hologramScreenInstance,this.earthLandingManager=e.earthLandingManager,this.isTransitioningRef=e.isTransitioningRef,this.isEnabled=!1,this.init()}init(){this.bindDOM(),this.bindSliders()}bindDOM(){const e=document.getElementById("camera-inspector"),t=document.getElementById("settings-toggle-btn"),n=document.getElementById("toggle-orbit-btn"),i=document.getElementById("copy-cam-btn"),s=document.getElementById("copy-toast");t==null||t.addEventListener("click",()=>{e&&e.classList.toggle("inspector-hidden")}),document.querySelectorAll(".accordion-header").forEach(r=>{r.addEventListener("click",()=>{const o=r.closest(".accordion-item");o&&o.classList.toggle("active")})}),n==null||n.addEventListener("click",()=>{if(!this.controls)return;this.controls.enabled=!this.controls.enabled;const r=document.getElementById("cam-status");if(this.controls.enabled)n.innerText="DISABLE FREE CAM",r&&(r.innerText="FREE_ORBIT_ENABLED");else if(n.innerText="ENABLE FREE CAM",r){const o=typeof this.isTransitioningRef=="function"?this.isTransitioningRef():!1;r.innerText=o?"EXTERIOR_VIEW":"INTERIOR_VIEW"}}),i==null||i.addEventListener("click",()=>{if(!this.camera||!this.controls)return;const r=this.camera.position.x.toFixed(2),o=this.camera.position.y.toFixed(2),l=this.camera.position.z.toFixed(2),c=this.controls.target.x.toFixed(2),h=this.controls.target.y.toFixed(2),f=this.controls.target.z.toFixed(2),u=`const INTERIOR_CAM_POS = new THREE.Vector3(${r}, ${o}, ${l});
const INTERIOR_LOOK_TARGET = new THREE.Vector3(${c}, ${h}, ${f});`;navigator.clipboard.writeText(u).then(()=>{console.log(`[CAMERA INSPECTOR] Coordinates copied to clipboard:
`+u)}).catch(()=>{}),s&&(s.style.display="block",setTimeout(()=>{s.style.display="none"},2500))})}bindSliders(){const e=document.getElementById("bloom-strength-slider"),t=document.getElementById("bloom-threshold-slider"),n=document.getElementById("bloom-strength-val"),i=document.getElementById("bloom-threshold-val");e==null||e.addEventListener("input",()=>{if(!this.bloomPass)return;const I=parseFloat(e.value);this.bloomPass.strength=I,n&&(n.innerText=I.toFixed(2))}),t==null||t.addEventListener("input",()=>{if(!this.bloomPass)return;const I=parseFloat(t.value);this.bloomPass.threshold=I,i&&(i.innerText=I.toFixed(2))});const s=document.getElementById("text-scale-slider"),r=document.getElementById("text-x-slider"),o=document.getElementById("text-y-slider"),l=document.getElementById("text-z-slider"),c=document.getElementById("text-roty-slider"),h=document.getElementById("text-scale-val"),f=document.getElementById("text-x-val"),u=document.getElementById("text-y-val"),d=document.getElementById("text-z-val"),g=document.getElementById("text-roty-val"),p=()=>{if(!this.cursiveTextInstance)return;const I=parseFloat(s.value),ie=parseFloat(r.value),ge=parseFloat(o.value),pe=parseFloat(l.value),be=parseFloat(c.value);this.cursiveTextInstance.group.scale.set(I,I,I),this.cursiveTextInstance.group.position.set(ie,ge,pe),this.cursiveTextInstance.group.rotation.set(0,be,0),h&&(h.innerText=I.toFixed(2)),f&&(f.innerText=ie.toFixed(2)),u&&(u.innerText=ge.toFixed(2)),d&&(d.innerText=pe.toFixed(2)),g&&(g.innerText=be.toFixed(2))};s==null||s.addEventListener("input",p),r==null||r.addEventListener("input",p),o==null||o.addEventListener("input",p),l==null||l.addEventListener("input",p),c==null||c.addEventListener("input",p);const m=document.getElementById("avatar-scale-slider"),_=document.getElementById("avatar-x-slider"),y=document.getElementById("avatar-y-slider"),x=document.getElementById("avatar-z-slider"),b=document.getElementById("avatar-rotx-slider"),M=document.getElementById("avatar-roty-slider"),E=document.getElementById("avatar-rotz-slider"),C=document.getElementById("avatar-scale-val"),v=document.getElementById("avatar-x-val"),w=document.getElementById("avatar-y-val"),R=document.getElementById("avatar-z-val"),k=document.getElementById("avatar-rotx-val"),Y=document.getElementById("avatar-roty-val"),O=document.getElementById("avatar-rotz-val"),D=()=>{if(!this.techAvatarInstance||!this.techAvatarInstance.group)return;const I=parseFloat(m.value),ie=parseFloat(_.value),ge=parseFloat(y.value),pe=parseFloat(x.value),be=parseFloat(b.value),Me=parseFloat(M.value),ke=parseFloat(E.value);this.techAvatarInstance.group.scale.set(I,I,I),this.techAvatarInstance.group.position.set(ie,ge,pe),this.techAvatarInstance.group.rotation.set(be,Me,ke),C&&(C.innerText=I.toFixed(2)),v&&(v.innerText=ie.toFixed(2)),w&&(w.innerText=ge.toFixed(2)),R&&(R.innerText=pe.toFixed(2)),k&&(k.innerText=be.toFixed(2)),Y&&(Y.innerText=Me.toFixed(2)),O&&(O.innerText=ke.toFixed(2))};m==null||m.addEventListener("input",D),_==null||_.addEventListener("input",D),y==null||y.addEventListener("input",D),x==null||x.addEventListener("input",D),b==null||b.addEventListener("input",D),M==null||M.addEventListener("input",D),E==null||E.addEventListener("input",D);const B=document.getElementById("avatar-skin-picker");B==null||B.addEventListener("input",()=>{this.techAvatarInstance&&this.techAvatarInstance.setSkinColor&&this.techAvatarInstance.setSkinColor(B.value)});const X=document.getElementById("hologram-scale-slider"),K=document.getElementById("hologram-x-slider"),V=document.getElementById("hologram-y-slider"),se=document.getElementById("hologram-z-slider"),te=document.getElementById("hologram-rotx-slider"),U=document.getElementById("hologram-roty-slider"),H=document.getElementById("hologram-rotz-slider"),oe=document.getElementById("hologram-hoverbright-slider"),ae=document.getElementById("hologram-scale-val"),de=document.getElementById("hologram-x-val"),$=document.getElementById("hologram-y-val"),Ae=document.getElementById("hologram-z-val"),me=document.getElementById("hologram-rotx-val"),Ee=document.getElementById("hologram-roty-val"),le=document.getElementById("hologram-rotz-val"),Re=document.getElementById("hologram-hoverbright-val"),J=document.getElementById("toggle-hologram-vis-btn"),j=()=>{if(!this.hologramScreenInstance||!this.hologramScreenInstance.group)return;const I=parseFloat(X.value),ie=parseFloat(K.value),ge=parseFloat(V.value),pe=parseFloat(se.value),be=parseFloat(te.value),Me=parseFloat(U.value),ke=parseFloat(H.value),Be=parseFloat((oe==null?void 0:oe.value)||1);this.hologramScreenInstance.group.scale.set(I,I,I),this.hologramScreenInstance.group.position.set(ie,ge,pe),this.hologramScreenInstance.group.rotation.set(be,Me,ke),this.hologramScreenInstance.setHoverBrightness(Be),ae&&(ae.innerText=I.toFixed(2)),de&&(de.innerText=ie.toFixed(2)),$&&($.innerText=ge.toFixed(2)),Ae&&(Ae.innerText=pe.toFixed(2)),me&&(me.innerText=be.toFixed(2)),Ee&&(Ee.innerText=Me.toFixed(2)),le&&(le.innerText=ke.toFixed(2)),Re&&(Re.innerText=Be.toFixed(2))};X==null||X.addEventListener("input",j),K==null||K.addEventListener("input",j),V==null||V.addEventListener("input",j),se==null||se.addEventListener("input",j),te==null||te.addEventListener("input",j),U==null||U.addEventListener("input",j),H==null||H.addEventListener("input",j),oe==null||oe.addEventListener("input",j),J==null||J.addEventListener("click",()=>{this.hologramScreenInstance&&(this.hologramScreenInstance.isVisible?this.hologramScreenInstance.fadeOut(.4):this.hologramScreenInstance.fadeIn(.4))});const he=document.getElementById("star-count-slider"),ve=document.getElementById("twinkle-speed-slider"),fe=document.getElementById("twinkle-ratio-slider"),Pe=document.getElementById("twinkle-depth-slider"),Te=document.getElementById("star-size-slider"),we=document.getElementById("centroid-space-slider"),ze=document.getElementById("warp-speed-slider"),Ue=document.getElementById("copy-star-btn"),T=document.getElementById("star-count-val"),S=document.getElementById("twinkle-speed-val"),F=document.getElementById("twinkle-ratio-val"),ee=document.getElementById("twinkle-depth-val"),W=document.getElementById("star-size-val"),q=document.getElementById("centroid-space-val"),Le=document.getElementById("warp-speed-val"),L=()=>{var I;return((I=this.earthLandingManager)==null?void 0:I.warpSystem)||window.warpSystem};he==null||he.addEventListener("input",()=>{const I=parseInt(he.value,10),ie=L();ie&&ie.setStarCount(I),T&&(T.innerText=I.toString())}),ve==null||ve.addEventListener("input",()=>{const I=parseFloat(ve.value),ie=L();ie&&ie.setTwinkleSpeed(I),S&&(S.innerText=I.toFixed(1))}),fe==null||fe.addEventListener("input",()=>{const I=parseFloat(fe.value),ie=L();ie&&ie.setTwinkleRatio(I),F&&(F.innerText=`${Math.round(I*100)}%`)}),Pe==null||Pe.addEventListener("input",()=>{const I=parseFloat(Pe.value),ie=L();ie&&ie.setTwinkleDepth(I),ee&&(ee.innerText=I.toFixed(2))}),Te==null||Te.addEventListener("input",()=>{const I=parseFloat(Te.value),ie=L();ie&&ie.setSizeMultiplier(I),W&&(W.innerText=`${I.toFixed(1)}x`)}),we==null||we.addEventListener("input",()=>{const I=parseFloat(we.value),ie=L();ie&&ie.setCentroidSpace(I),q&&(q.innerText=I.toFixed(1))}),ze==null||ze.addEventListener("input",()=>{const I=parseFloat(ze.value),ie=L();ie&&ie.setWarpSpeed(I),Le&&(Le.innerText=Math.round(I).toString())}),Ue==null||Ue.addEventListener("click",()=>{L();const I=(he==null?void 0:he.value)||2e3,ie=(ve==null?void 0:ve.value)||2.5,ge=(fe==null?void 0:fe.value)||.7,pe=(Pe==null?void 0:Pe.value)||.85,be=(Te==null?void 0:Te.value)||1,Me=(we==null?void 0:we.value)||17,ke=(ze==null?void 0:ze.value)||220,Be=`// Tuned Starfield & Warp Speed Settings
const STARFIELD_CONFIG = {
  totalStars: ${I},
  twinkleSpeed: ${ie},
  twinkleRatio: ${ge},
  twinkleDepth: ${pe},
  sizeMultiplier: ${be},
  centroidSpace: ${Me},
  warpSpeed: ${ke}
};`;navigator.clipboard.writeText(Be).then(()=>{console.log(`[STARFIELD CONFIG COPIED]:
`+Be)});const qe=document.getElementById("copy-toast");qe&&(qe.style.display="block",setTimeout(()=>{qe.style.display="none"},2500))})}updateHUD(){const e=document.getElementById("cam-pos-val"),t=document.getElementById("cam-target-val"),n=document.getElementById("cam-fov-val");e&&this.camera&&(e.innerText=`${this.camera.position.x.toFixed(2)}, ${this.camera.position.y.toFixed(2)}, ${this.camera.position.z.toFixed(2)}`),t&&this.controls&&(t.innerText=`${this.controls.target.x.toFixed(2)}, ${this.controls.target.y.toFixed(2)}, ${this.controls.target.z.toFixed(2)}`),n&&this.camera&&(n.innerText=`${this.camera.fov.toFixed(0)}°`)}}function Eb(){const a=document.getElementById("webgl-canvas");if(!a)return;const e=new Gx;e.background=new Ce(132106);const t=new Zt(50,window.innerWidth/window.innerHeight,.5,800),n=new mf({canvas:a,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=Uu,n.toneMapping=Wu,n.toneMappingExposure=1.25;const i=new Dy(n),s=new Oy(e,t),r=new Ws(new ce(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.45,.5,.92);i.addPass(s),i.addPass(r);const o=new Df(t,n.domElement);o.enabled=!1,o.enableDamping=!0,o.dampingFactor=.05;const l=document.getElementById("loader-screen"),c=document.getElementById("loader-bar"),h=document.getElementById("loader-status"),f=new Kl,u={pct:0};let d=!1;f.onProgress=(T,S,F)=>{const ee=F>0?Math.floor(S/F*100):0,W=Math.max(u.pct,Math.min(ee,99));Ft.to(u,{pct:W,duration:.35,ease:"power1.out",onUpdate:()=>{const q=Math.floor(u.pct);c&&(c.style.width=`${q}%`),h&&(h.innerText=`Preloading WebGL and assets... (${q}%)`)}})},f.onLoad=()=>{d||(d=!0,Ft.to(u,{pct:100,duration:.35,ease:"power1.out",onUpdate:()=>{c&&(c.style.width="100%"),h&&(h.innerText="Initialization Complete (100%)")},onComplete:()=>{l&&(l.style.transition="opacity 0.6s ease",l.style.opacity="0",setTimeout(()=>{l.style.display="none"},600))}}),console.log("[SCENE 1] Loading Manager complete."))},f.onError=T=>{console.error("[SCENE 1] Error loading asset:",T),h&&(h.innerText=`Error loading: ${T}`)};const g=new A(39.8,.1,-6.8),p=new A(36.2,-.4,2.8),m=new A(-12.68,29.89,78.14),_=new A(14.65,23.3,17.59),y=p.clone();t.position.copy(g),t.lookAt(y),o.target.copy(p),window.triggerBlastOff=he;const x=new $l(1914199,1.2);e.add(x);const b=new Cf(3718648,593174,.3);e.add(b);const M=new yi(16775149,1.5);M.position.set(45,30,60),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,e.add(M);const E=new Es(3718648,1.4,20);E.position.set(37.5,5,2),e.add(E);const C=new Es(16711731,4.5,8);C.position.set(37.5,-2.2,6.5),e.add(C);let v=null;const w=new tb(e),R=new Mb(e,t,n,i,r,f),k=new wb(e,t,R,!1);window.rocketAlignmentHelper=k;function Y(T){T.clearRect(0,0,1024,512),T.save();const F="BLAST OFF".split(""),ee=F.length,W=260,q=780,Le=65;T.textAlign="center",T.textBaseline="top";for(let L=0;L<ee;L++){const I=F[L];if(I===" ")continue;const ie=L/(ee-1),ge=1.75*(1.3-ie*.5),pe=.85*(1.2-ie*.38),be=W+ie*(q-W);T.save(),T.translate(be,Le),T.scale(pe,ge);const Me=T.createLinearGradient(0,0,0,160);Me.addColorStop(0,"#ffea00"),Me.addColorStop(.4,"#ff7700ff"),Me.addColorStop(1,"#ff2a00ff"),T.shadowColor="#ff0000",T.shadowBlur=35,T.fillStyle=Me,T.font='bold 160px "Bebas Neue", "Oswald", "Anton", sans-serif',T.fillText(I,0,0),T.shadowBlur=12,T.fillStyle=Me,T.fillText(I,0,0),T.restore()}T.restore()}function O(){const T=document.createElement("canvas");T.width=1024,T.height=512;const S=T.getContext("2d");Y(S);const F=new Gn(T);return F.colorSpace=ln,F.wrapS=Jt,F.wrapT=Jt,document.fonts&&document.fonts.ready.then(()=>{Y(S),F.needsUpdate=!0}),F}const D=O();function B(){const T=document.createElement("canvas");T.width=512,T.height=256;const S=T.getContext("2d");S.fillStyle="#0284c7",S.fillRect(0,0,512,256),S.strokeStyle="#38bdf8",S.lineWidth=2;for(let ee=0;ee<512;ee+=32)S.beginPath(),S.moveTo(ee,0),S.lineTo(ee,256),S.stroke();for(let ee=0;ee<256;ee+=32)S.beginPath(),S.moveTo(0,ee),S.lineTo(512,ee),S.stroke();S.fillStyle="#e0f2fe",S.font="bold 24px monospace",S.fillText("STATION_DIAGNOSTICS // ONLINE",20,40);const F=new Gn(T);return F.colorSpace=ln,F}const X=B(),K=new ec(f),V=new lb;e.add(V.group);let se=null,te=null,U=null;const H=[],oe=[],ae=[],de=new rt({color:3023626,roughness:.22,metalness:.94,envMapIntensity:1.3}),$=new rt({color:3023626,roughness:.24,metalness:.92,envMapIntensity:1.3});K.load("/assets/FinalSpaceStationModel.glb",T=>{se=T.scene,e.add(se);const S=[];se.traverse(W=>{W.isLight&&S.push(W);const q=W.name||"";if(q.includes("Collar_Left"),q.includes("Collar_Right"),q.includes("Collar_Front"),q.includes("Collar_Back"),/docking_platform/i.test(q)&&(W.visible=!1),/rocket/i.test(q)){W.visible=!1;return}if(W.isMesh&&W.material){W.castShadow=!0,W.receiveShadow=!0;const I=W.material.name||"";(q.includes("Cabin_Light_Strip")||q.includes("Light_Strip"))&&(W.visible=!1);const ie=/^(Collar_(Left|Right)_Detail_Ring|Sphere_Cap_Top_Ring_1|Hub_Front_Ring_1|Hub_Hatch_Ring_[13]|Arm_Truss_(North|South)_Ring_[13])$/i.test(q),ge=/^(Collar_(Front|Back)_Detail_Ring|Sphere_Cap_Bottom_Ring_1|Hub_Front_Ring_2|Hub_Hatch_Ring_[24]|Arm_Truss_(North|South)_Ring_2)$/i.test(q);ie?W.material=de:ge?W.material=$:I==="Hull_Light"?(W.material.color.setHex(6583435),W.material.roughness=.35,W.material.metalness=.8):I==="Hull_Dark"?(W.material.color.setHex(1976635),W.material.roughness=.4,W.material.metalness=.85):I==="Rocket_Silver"||I.toLowerCase().includes("rocket")||q.toLowerCase().includes("rocket")?W.visible=!1:I==="Gantry_Copper"||q.includes("Window_Inner_Frame")||q.includes("Window_Frame")?W.material=new rt({color:994140,roughness:.25,metalness:.9}):(I==="Window_Glass_Mat"||q.includes("Window_Glass"))&&(W.material.transparent=!0,W.material.opacity=.22,W.material.color.setHex(3718648),W.material.roughness=.02,W.material.metalness=.2),(q.includes("Button_Lid")||q.includes("Button_Base")||q.includes("Button_Bezel")||q.includes("Button_Hinge")||q.includes("Button_Screw")||q.includes("Button_Indicator"))&&(W.material=new rt({color:994140,metalness:.95,roughness:.1,envMapIntensity:1}),H.push(W)),q.includes("Console_Screen")&&(W.material=new rt({map:X,emissiveMap:X,emissive:new Ce(3718648),emissiveIntensity:1.4}),ae.push(W.material)),q.includes("Button_Cylinder")&&(te=W,W.material=new rt({color:16711680,emissive:16711697,emissiveIntensity:1.8,roughness:.1,metalness:.2}),ae.push(W.material),H.push(W)),(I.includes("Glow")||q.includes("Indicator")||W.material.emissiveIntensity&&W.material.emissiveIntensity>0)&&(ae.includes(W.material)||ae.push(W.material))}});const F=new pn(1.5,.85),ee=new rt({map:D,emissiveMap:D,emissive:new Ce(16729088),emissiveIntensity:.5,transparent:!0,opacity:.52,roughness:.55,metalness:.35,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthTest:!0,depthWrite:!1,side:Vt});U=new De(F,ee),U.position.set(37.5,-2.75,7.34),U.rotation.set(-.04,3.15,0),U.scale.set(2.3,2.3,2.3),e.add(U),v=new Es(3718648,3.5,45),v.position.set(20,5,18),e.add(v),S.forEach(W=>{W.parent&&W.parent.remove(W)}),console.log("[SCENE 1] Station loaded. 3D Model Button & Lid wired!")},void 0,T=>{console.error("[SCENE 1] Error loading station model:",T)});const Ae=new eb(()=>{Ae.group.position.set(35.1,.4,9.4),Ae.group.rotation.set(0,3.05,0),Ae.group.scale.set(1.45,1.45,1.45)});e.add(Ae.group);const me=new sb("/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb",null,f);me.group.position.set(32.95,-5.5,1.1),me.group.rotation.set(0,2.04,0),me.group.scale.set(7.7,7.7,7.7),e.add(me.group);const Ee=new Es(16767673,.85,15);Ee.position.set(36,1.5,-2),e.add(Ee);const le=new ab;le.group.position.set(-11.5,30.6,70.3),le.group.rotation.set(.1,-.3,.02),le.group.scale.set(.25,.25,.25),le.setBeamTransform(1,.7,-2.2,.21),le.setBeamProps(.28,60,.5),le.setHoverBrightness(0),le.group.visible=!1,e.add(le.group);const Re=new Jv,J=new ce(-9999,-9999);window.addEventListener("mousemove",T=>{if(J.x=T.clientX/window.innerWidth*2-1,J.y=-(T.clientY/window.innerHeight)*2+1,le&&le.isVisible){Re.setFromCamera(J,t);const S=Re.intersectObject(le.screenMesh);if(S.length>0){document.body.style.cursor="pointer",S[0].uv.x<.5?le.setHoverTarget(1):le.setHoverTarget(2);return}else le.setHoverTarget(0)}H.length>0&&(Re.setFromCamera(J,t),Re.intersectObjects(H,!0).length>0?(document.body.style.cursor="pointer",te&&te.material&&(te.material.emissiveIntensity=2.5)):(document.body.style.cursor="default",te&&te.material&&(te.material.emissiveIntensity=1.4)))}),window.addEventListener("click",T=>{if(T.target.closest("#hud-container")||T.target.closest("#camera-inspector")||T.target.tagName==="BUTTON"||T.target.tagName==="INPUT")return;if(J.x=T.clientX/window.innerWidth*2-1,J.y=-(T.clientY/window.innerHeight)*2+1,le&&le.isVisible&&!j){Re.setFromCamera(J,t);const F=Re.intersectObject(le.screenMesh);if(F.length>0){const W=F[0].uv.x<.5?1:2,q=W===1?"TARGET A: KOPPULA SYSTEM":"TARGET B: ORIGIN PLANET";le.triggerClickFeedback(W),ve(q);return}}if(j||H.length===0)return;Re.setFromCamera(J,t),Re.intersectObjects(H,!0).length>0&&(te?Ft.to(te.position,{y:"-=0.15",duration:.1,yoyo:!0,repeat:1,onComplete:()=>{he()}}):he())});let j=!1;window.isTransitioning=j;function he(){if(window.isTransitioning&&j)return;j=!0,window.isTransitioning=!0,o.enabled=!1;const T=document.getElementById("toggle-orbit-btn");T&&(T.innerText="ENABLE FREE CAM");const S=document.getElementById("cam-status");S&&(S.innerText="LAUNCH_SEQUENCE_ACTIVE");const F=Ft.timeline({onComplete:()=>{j=!1,window.isTransitioning=!1,S&&(S.innerText="EXTERIOR_VIEW // DESTINATION_SELECTION_READY"),console.log("[SCENE 1] Blast Off pullout complete! Projecting Hologram Screen..."),le&&le.fadeIn(1.2)}});F.to(t.position,{x:m.x,y:m.y,z:m.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(y),o&&o.target.copy(y)}},0),F.to(y,{x:_.x,y:_.y,z:_.z,duration:3.8,ease:"power3.inOut",onUpdate:()=>{t.lookAt(y),o.target.copy(y)}},0),Ae&&Ae.textMaterial&&F.to(Ae.textMaterial,{opacity:0,duration:.01},1.3),U&&U.material&&F.to(U.material,{opacity:0,duration:.01},1.3),me&&me.group&&F.set(me.group,{visible:!1},1.3),Ee&&F.set(Ee,{visible:!1},1.3),F.to(r,{strength:.85,duration:1,yoyo:!0,repeat:1,ease:"sine.inOut"},1)}function ve(T="TARGET A: KOPPULA SYSTEM"){if(window.triggerDestinationTransition=ve,window.isTransitioning||j)return;j=!0,window.isTransitioning=!0,o.enabled=!1;const S=document.getElementById("toggle-orbit-btn");S&&(S.innerText="ENABLE FREE CAM");const F=document.getElementById("cam-status");F&&(F.innerText=`DESTINATION_LOCKED // ${T}`),console.log(`[DESTINATION SELECTION] Initiating sequence for ${T}...`);const ee=new A(38.69034,-8.56499,30.52824),W=new A(38.71423,-5.01504,30.55209),q=Ft.timeline({onComplete:()=>{j=!1,window.isTransitioning=!1;const xe=document.getElementById("cam-status");xe&&(xe.innerText="WARP_IGNITION_ACTIVE"),console.log("[DESTINATION SELECTION] Camera arrived at rocket base. Seamlessly igniting warp sequence...");const Oe=document.getElementById("warp-action-container");Oe&&Oe.classList.add("warp-action-hidden"),k.setEnabled(!1),o.enabled=!1,R&&(R.updateCubeNow(),R.startSequence())}});le&&q.add(()=>{le.fadeOut(1.25)},.25),x&&q.to(x,{intensity:.45,duration:1.5,ease:"power2.inOut"},0),b&&q.to(b,{intensity:.15,duration:1.5,ease:"power2.inOut"},0),M&&q.to(M,{intensity:.55,duration:1.5,ease:"power2.inOut"},0),E&&q.to(E,{intensity:.35,duration:1.5,ease:"power2.inOut"},0),C&&q.to(C,{intensity:0,duration:1.5,ease:"power2.inOut"},0),v&&q.to(v,{intensity:1.2,duration:1.5,ease:"power2.inOut"},0),Ee&&q.to(Ee,{intensity:.2,duration:1.5,ease:"power2.inOut"},0),ae.forEach(xe=>{q.to(xe,{emissiveIntensity:0,duration:1.5,ease:"power2.inOut"},0)}),q.add(()=>{V&&V.padRingGroup&&(V.padRingGroup.visible=!1),oe.forEach(xe=>{xe.visible=!1})},1.5);const Le=t.position.clone(),L=new A(8,8,68),I=new A(28,-11,40),ie=ee.clone(),ge=new fl(Le,L,I,ie),pe=y.clone(),be=new A(18,0,20),Me=new A(34,-5,28),ke=W.clone(),Be=new fl(pe,be,Me,ke),qe=5,N=.65,Z=.97;function ue(xe){if(xe<=0)return 0;if(xe>=1)return 1;if(xe<N){const Oe=xe/N;return(Oe<.5?2*Oe*Oe:1-Math.pow(-2*Oe+2,2)/2)*Z}else{const Oe=(xe-N)/(1-N),gt=1-Math.pow(1-Oe,4);return Z+(1-Z)*gt}}const Se={progress:0};q.to(Se,{progress:1,duration:qe,ease:ue,onUpdate:()=>{const xe=Se.progress;if(ge.getPoint(xe,t.position),Be.getPoint(xe,y),t.up.set(0,1,0),t.lookAt(y),o&&o.target.copy(y),R&&R.rocketModel){const Oe=R.rocketModel;Oe.visible=!0,Oe.position.set(42,-6.25,30),Oe.scale.set(1,1,1),Oe.rotation.set(0,0,0),Oe.updateMatrixWorld(!0)}}},1.5),w&&w.fadeOut&&w.fadeOut(1.8,q,4.5),q.to(e.background,{r:2/255,g:2/255,b:5/255,duration:1.8,ease:"power2.inOut"},4.5),q.add(()=>{R&&(R.spaceGroup.visible=!0)},4.5),re.starsOpacity=0,q.to(re,{starsOpacity:1,duration:1.8,ease:"power2.inOut"},4.5),se&&se.traverse(xe=>{xe.isMesh&&xe.material&&(xe.material.transparent=!0,q.to(xe.material,{opacity:0,duration:1.8,ease:"power2.inOut"},4.5))}),q.add(()=>{se&&(se.visible=!1),V&&V.group&&(V.group.visible=!1),me&&me.group&&(me.group.visible=!1),Ae&&Ae.group&&(Ae.group.visible=!1),U&&(U.visible=!1),w&&w.group&&(w.group.visible=!1)},6.3),x&&q.to(x,{intensity:0,duration:1.8,ease:"power2.inOut"},4.5),M&&q.to(M,{intensity:0,duration:1.8,ease:"power2.inOut"},4.5),E&&q.to(E,{intensity:0,duration:1.8,ease:"power2.inOut"},4.5),v&&q.to(v,{intensity:0,duration:1.8,ease:"power2.inOut"},4.5),Ee&&q.to(Ee,{intensity:0,duration:1.8,ease:"power2.inOut"},4.5),R&&(q.to(R.spaceAmbient,{intensity:.6,duration:1.8,ease:"power2.inOut"},4.5),q.to(R.spaceSun,{intensity:1.5,duration:1.8,ease:"power2.inOut"},4.5),q.to(R.hemisphereLight,{intensity:1.2,duration:1.8,ease:"power2.inOut"},4.5)),q.to(n,{toneMappingExposure:.9,duration:1.8,ease:"power2.inOut"},4.5),r&&q.to(r,{strength:0,duration:1.8,ease:"power2.inOut"},4.5)}const fe=new Tb({camera:t,controls:o,bloomPass:r,cursiveTextInstance:Ae,techAvatarInstance:me,hologramScreenInstance:le,earthLandingManager:R,isTransitioningRef:()=>j});window.sceneInspectorHelper=fe,R&&(window.warpSystem=R.warpSystem);const Pe=document.getElementById("ignite-warp-btn"),Te=document.getElementById("reset-base-cam-btn"),we=document.getElementById("copy-base-cam-btn");Pe==null||Pe.addEventListener("click",()=>{const T=document.getElementById("warp-action-container");T&&T.classList.add("warp-action-hidden"),k.setEnabled(!1),o.enabled=!1;const S=document.getElementById("cam-status");S&&(S.innerText="WARP_IGNITION_ACTIVE"),console.log("[WARP IGNITION] Starting EarthLanding Warp sequence..."),R&&(R.updateCubeNow(),R.startSequence())}),Te==null||Te.addEventListener("click",()=>{Ft.to(t.position,{x:38.69034,y:-8.56499,z:30.52824,duration:.8,ease:"power2.inOut"}),Ft.to(o.target,{x:38.71423,y:-5.01504,z:30.55209,duration:.8,ease:"power2.inOut",onUpdate:()=>{t.up.set(0,1,0),t.lookAt(o.target)}})}),we==null||we.addEventListener("click",()=>{const T=`new THREE.Vector3(${t.position.x.toFixed(5)}, ${t.position.y.toFixed(5)}, ${t.position.z.toFixed(5)})`,S=`new THREE.Vector3(${o.target.x.toFixed(5)}, ${o.target.y.toFixed(5)}, ${o.target.z.toFixed(5)})`,F=`PAD_CAM_POS = ${T};
PAD_CAM_LOOK = ${S};
PAD_CAM_UP = new THREE.Vector3(${t.up.x.toFixed(2)}, ${t.up.y.toFixed(2)}, ${t.up.z.toFixed(2)});`;navigator.clipboard.writeText(F),console.log(`[CAMERA COPIED]:
`+F);const ee=document.getElementById("copy-toast");ee&&(ee.style.display="block",setTimeout(()=>{ee.style.display="none"},2500))}),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.setSize(window.innerWidth,window.innerHeight),r.resolution.set(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});const ze=new Lf;function Ue(){requestAnimationFrame(Ue);const T=ze.getDelta(),S=ze.getElapsedTime();w&&w.group&&w.group.visible&&w.update(S),me&&me.update&&me.update(T),le&&le.update&&le.update(S),R&&R.update(S,T),!R||!R.isActive?o.enabled?o.update():t.lookAt(y):window.activeControls&&window.activeControls.update(),fe&&fe.updateHUD(),k&&k.update(),i.render()}Ue()}document.addEventListener("DOMContentLoaded",()=>{Eb()});
