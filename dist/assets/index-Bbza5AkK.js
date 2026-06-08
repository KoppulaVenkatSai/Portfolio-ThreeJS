(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="148",pd=0,vc=1,md=2,bh=1,Sh=2,us=3,pi=0,xn=1,ks=2,qs=3,ui=0,Sr=1,yc=2,Mc=3,bc=4,gd=5,xr=100,_d=101,xd=102,Sc=103,wc=104,vd=200,yd=201,Md=202,bd=203,wh=204,Th=205,Sd=206,wd=207,Td=208,Ed=209,Ad=210,Cd=0,Ld=1,Pd=2,Ya=3,Rd=4,Dd=5,Id=6,Nd=7,wl=0,Od=1,Fd=2,Kn=0,zd=1,Ud=2,kd=3,Bd=4,Vd=5,Eh=300,Pr=301,Rr=302,Ka=303,Za=304,ko=306,Dr=1e3,dn=1001,Lo=1002,St=1003,Ja=1004,bo=1005,Vt=1006,Ah=1007,qi=1008,ji=1009,Gd=1010,Hd=1011,Ch=1012,Wd=1013,Ui=1014,si=1015,Ms=1016,Xd=1017,qd=1018,wr=1020,jd=1021,Yd=1022,pn=1023,Kd=1024,Zd=1025,Bi=1026,Ir=1027,Jd=1028,$d=1029,Qd=1030,ep=1031,tp=1033,ta=33776,na=33777,ia=33778,ra=33779,Tc=35840,Ec=35841,Ac=35842,Cc=35843,np=36196,Lc=37492,Pc=37496,Rc=37808,Dc=37809,Ic=37810,Nc=37811,Oc=37812,Fc=37813,zc=37814,Uc=37815,kc=37816,Bc=37817,Vc=37818,Gc=37819,Hc=37820,Wc=37821,Xc=36492,bs=2300,Nr=2301,sa=2302,qc=2400,jc=2401,Yc=2402,ip=2500,rp=1,Lh=2,Yi=3e3,qe=3001,sp=3200,op=3201,Tl=0,ap=1,En="srgb",Ss="srgb-linear",oa=7680,lp=519,$a=35044,Kc="300 es",Qa=1035;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const ps=Math.PI/180,ws=180/Math.PI;function vn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[a&255]+Rt[a>>8&255]+Rt[a>>16&255]+Rt[a>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Et(a,e,t){return Math.max(e,Math.min(t,a))}function El(a,e){return(a%e+e)%e}function cp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function up(a,e,t){return a!==e?(t-a)/(e-a):0}function ms(a,e,t){return(1-t)*a+t*e}function hp(a,e,t,n){return ms(a,e,1-Math.exp(-t*n))}function fp(a,e=1){return e-Math.abs(El(a,e*2)-e)}function dp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function pp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function mp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function gp(a,e){return a+Math.random()*(e-a)}function _p(a){return a*(.5-Math.random())}function xp(a){a!==void 0&&(Zc=a);let e=Zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vp(a){return a*ps}function yp(a){return a*ws}function el(a){return(a&a-1)===0&&a!==0}function Ph(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Po(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Mp(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),p=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Je(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Rh=Object.freeze({__proto__:null,DEG2RAD:ps,RAD2DEG:ws,generateUUID:vn,clamp:Et,euclideanModulo:El,mapLinear:cp,inverseLerp:up,lerp:ms,damp:hp,pingpong:fp,smoothstep:dp,smootherstep:pp,randInt:mp,randFloat:gp,randFloatSpread:_p,seededRandom:xp,degToRad:vp,radToDeg:yp,isPowerOfTwo:el,ceilPowerOfTwo:Ph,floorPowerOfTwo:Po,setQuaternionFromProperEuler:Mp,normalize:Je,denormalize:qn});class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],M=i[1],x=i[4],v=i[7],b=i[2],T=i[5],C=i[8];return r[0]=s*d+o*M+l*b,r[3]=s*m+o*x+l*T,r[6]=s*_+o*v+l*C,r[1]=c*d+u*M+h*b,r[4]=c*m+u*x+h*T,r[7]=c*_+u*v+h*C,r[2]=f*d+p*M+g*b,r[5]=f*m+p*x+g*T,r[8]=f*_+p*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,p=c*r-s*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*s)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(s*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new $t;function Dh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ts(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function So(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const la={[En]:{[Ss]:Vi},[Ss]:{[En]:So}},Ft={legacyMode:!0,get workingColorSpace(){return Ss},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(la[e]&&la[e][t]!==void 0){const n=la[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},Mn={h:0,s:0,l:0},js={h:0,s:0,l:0};function ca(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Ys(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ft.workingColorSpace){if(e=El(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ca(s,r,e+1/3),this.g=ca(s,r,e),this.b=ca(s,r,e-1/3)}return Ft.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ft.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ft.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=En){const n=Ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ft.fromWorkingColorSpace(Ys(this,mt),e),Et(mt.r*255,0,255)<<16^Et(mt.g*255,0,255)<<8^Et(mt.b*255,0,255)<<0}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Ys(this,mt),t);const n=mt.r,i=mt.g,r=mt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Ys(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=En){return Ft.fromWorkingColorSpace(Ys(this,mt),e),e!==En?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(js);const n=ms(Mn.h,js.h,t),i=ms(Mn.s,js.s,t),r=ms(Mn.l,js.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=Ih;let ir;class Nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=Ts("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Vi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Oh{constructor(e=null){this.isSource=!0,this.uuid=vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(ua(i[s].image)):r.push(ua(i[s]))}else r=ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ua(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Nh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class Ct extends Wr{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=dn,i=dn,r=Vt,s=qi,o=pn,l=ji,c=Ct.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=vn(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Eh;Ct.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,b=(_+1)/2,T=(u+f)/4,C=(h+d)/4,y=(g+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=y/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends Wr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sp extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],p=r[s+1],g=r[s+2],d=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-o;const _=l*f+c*p+u*g+h*d,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,_*M);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}const v=o*M;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+d*v,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],p=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new P,Jc=new Mi;class Xr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,o=r.count;s<o;s++)Li.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox),fa.applyMatrix4(e.matrixWorld),this.union(fa);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Ks.subVectors(this.max,$r),rr.subVectors(e.a,$r),sr.subVectors(e.b,$r),or.subVectors(e.c,$r),$n.subVectors(sr,rr),Qn.subVectors(or,sr),Pi.subVectors(rr,or);let t=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-Pi.z,Pi.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,Pi.z,0,-Pi.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-Pi.y,Pi.x,0];return!da(t,rr,sr,or,Ks)||(t=[1,0,0,0,1,0,0,0,1],!da(t,rr,sr,or,Ks))?!1:(Zs.crossVectors($n,Qn),t=[Zs.x,Zs.y,Zs.z],da(t,rr,sr,or,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],Li=new P,fa=new Xr,rr=new P,sr=new P,or=new P,$n=new P,Qn=new P,Pi=new P,$r=new P,Ks=new P,Zs=new P,Ri=new P;function da(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Ri.fromArray(a,r);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wp=new Xr,Qr=new P,pa=new P;class qr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(pa)),this.expandByPoint(Qr.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,ma=new P,Js=new P,ei=new P,ga=new P,$s=new P,_a=new P;class Al{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.direction).multiplyScalar(t).add(this.origin),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Js),o=ei.dot(this.direction),l=-ei.dot(Js),c=ei.lengthSq(),u=Math.abs(1-s*s);let h,f,p,g;if(u>0)if(h=s*l-o,f=s*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Js).multiplyScalar(f).add(ma),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){ga.subVectors(t,e),$s.subVectors(n,e),_a.crossVectors(ga,$s);let s=this.direction.dot(_a),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ei.subVectors(this.origin,e);const l=o*this.direction.dot($s.crossVectors(ei,$s));if(l<0)return null;const c=o*this.direction.dot(ga.cross(ei));if(c<0||l+c>s)return null;const u=-o*ei.dot(_a);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),s=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,p=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-g,t[6]=d+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-s*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*u,t[9]=d-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,p=s*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=s*l,p=s*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ti.crossVectors(n,Yt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ti.crossVectors(n,Yt)),ti.normalize(),Qs.crossVectors(Yt,ti),i[0]=ti.x,i[4]=Qs.x,i[8]=Yt.x,i[1]=ti.y,i[5]=Qs.y,i[9]=Yt.y,i[2]=ti.z,i[6]=Qs.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],M=n[3],x=n[7],v=n[11],b=n[15],T=i[0],C=i[4],y=i[8],w=i[12],L=i[1],N=i[5],j=i[9],I=i[13],R=i[2],F=i[6],G=i[10],K=i[14],B=i[3],Q=i[7],$=i[11],k=i[15];return r[0]=s*T+o*L+l*R+c*B,r[4]=s*C+o*N+l*F+c*Q,r[8]=s*y+o*j+l*G+c*$,r[12]=s*w+o*I+l*K+c*k,r[1]=u*T+h*L+f*R+p*B,r[5]=u*C+h*N+f*F+p*Q,r[9]=u*y+h*j+f*G+p*$,r[13]=u*w+h*I+f*K+p*k,r[2]=g*T+d*L+m*R+_*B,r[6]=g*C+d*N+m*F+_*Q,r[10]=g*y+d*j+m*G+_*$,r[14]=g*w+d*I+m*K+_*k,r[3]=M*T+x*L+v*R+b*B,r[7]=M*C+x*N+v*F+b*Q,r[11]=M*y+x*j+v*G+b*$,r[15]=M*w+x*I+v*K+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+d*(+t*l*p-t*c*f+r*s*f-i*s*p+i*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*s*h+n*s*p+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],M=h*m*c-d*f*c+d*l*p-o*m*p-h*l*_+o*f*_,x=g*f*c-u*m*c-g*l*p+s*m*p+u*l*_-s*f*_,v=u*d*c-g*h*c+g*o*p-s*d*p-u*o*_+s*h*_,b=g*h*l-u*d*l-g*o*f+s*d*f+u*o*m-s*h*m,T=t*M+n*x+i*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=M*C,e[1]=(d*f*r-h*m*r-d*i*p+n*m*p+h*i*_-n*f*_)*C,e[2]=(o*m*r-d*l*r+d*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*C,e[4]=x*C,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*_+t*f*_)*C,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*C,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*p+t*l*p)*C,e[8]=v*C,e[9]=(g*h*r-u*d*r-g*n*p+t*d*p+u*n*_-t*h*_)*C,e[10]=(s*d*r-g*o*r+g*n*c-t*d*c-s*n*_+t*o*_)*C,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*p-t*o*p)*C,e[12]=b*C,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*C,e[14]=(g*o*i-s*d*i-g*n*l+t*d*l+s*n*m-t*o*m)*C,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,p=r*u,g=r*h,d=s*u,m=s*h,_=o*h,M=l*c,x=l*u,v=l*h,b=n.x,T=n.y,C=n.z;return i[0]=(1-(d+_))*b,i[1]=(p+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(f+_))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+x)*C,i[9]=(m-M)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ar.set(i[0],i[1],i[2]).length();const s=ar.set(i[4],i[5],i[6]).length(),o=ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/r,u=1/s,h=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),p=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,p=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new P,bn=new Ne,Tp=new P(0,0,0),Ep=new P(1,1,1),ti=new P,Qs=new P,Yt=new P,$c=new Ne,Qc=new Mi;class Bs{constructor(e=0,t=0,n=0,i=Bs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bs.DefaultOrder="XYZ";Bs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ap=0;const eu=new P,lr=new Mi,kn=new Ne,eo=new P,es=new P,Cp=new P,Lp=new Mi,tu=new P(1,0,0),nu=new P(0,1,0),iu=new P(0,0,1),Pp={type:"added"},ru={type:"removed"};class je extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DefaultUp.clone();const e=new P,t=new Bs,n=new Mi,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new $t}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=je.DefaultMatrixWorldAutoUpdate,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(es,eo,this.up):kn.lookAt(eo,es,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(kn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ru)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ru)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}je.DefaultUp=new P(0,1,0);je.DefaultMatrixAutoUpdate=!0;je.DefaultMatrixWorldAutoUpdate=!0;const Sn=new P,Bn=new P,xa=new P,Vn=new P,cr=new P,ur=new P,su=new P,va=new P,ya=new P,Ma=new P;class Xn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),Bn.subVectors(n,t),xa.subVectors(e,t);const s=Sn.dot(Sn),o=Sn.dot(Bn),l=Sn.dot(xa),c=Bn.dot(Bn),u=Bn.dot(xa),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(s*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Vn),l.set(0,0),l.addScaledVector(r,Vn.x),l.addScaledVector(s,Vn.y),l.addScaledVector(o,Vn.z),l}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Bn.subVectors(e,t),Sn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Sn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Xn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;cr.subVectors(i,n),ur.subVectors(r,n),va.subVectors(e,n);const l=cr.dot(va),c=ur.dot(va);if(l<=0&&c<=0)return t.copy(n);ya.subVectors(e,i);const u=cr.dot(ya),h=ur.dot(ya);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(cr,s);Ma.subVectors(e,r);const p=cr.dot(Ma),g=ur.dot(Ma);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ur,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return su.subVectors(r,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(su,o);const _=1/(m+d+f);return s=d*_,o=f*_,t.copy(n).addScaledVector(cr,s).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rp=0;class wn extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Sr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wh,this.blendDst=Th,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oi extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new P,to=new le;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$a,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uh extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dp=0;const cn=new Ne,ba=new je,hr=new P,Kt=new Xr,ts=new Xr,bt=new P;class Lt extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?kh:Uh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Kt.min,ts.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,ts.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(ts.min),Kt.expandByPoint(ts.max))}Kt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),bt.add(hr)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new P,u[L]=new P;const h=new P,f=new P,p=new P,g=new le,d=new le,m=new le,_=new P,M=new P;function x(L,N,j){h.fromArray(i,L*3),f.fromArray(i,N*3),p.fromArray(i,j*3),g.fromArray(s,L*2),d.fromArray(s,N*2),m.fromArray(s,j*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(I),M.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(I),c[L].add(_),c[N].add(_),c[j].add(_),u[L].add(M),u[N].add(M),u[j].add(M))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let L=0,N=v.length;L<N;++L){const j=v[L],I=j.start,R=j.count;for(let F=I,G=I+R;F<G;F+=3)x(n[F+0],n[F+1],n[F+2])}const b=new P,T=new P,C=new P,y=new P;function w(L){C.fromArray(r,L*3),y.copy(C);const N=c[L];b.copy(N),b.sub(C.multiplyScalar(C.dot(N))).normalize(),T.crossVectors(y,N);const I=T.dot(u[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=I}for(let L=0,N=v.length;L<N;++L){const j=v[L],I=j.start,R=j.count;for(let F=I,G=I+R;F<G;F+=3)w(n[F+0]),w(n[F+1]),w(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,s=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Bt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new Ne,fr=new Al,Sa=new qr,ns=new P,is=new P,rs=new P,wa=new P,no=new P,io=new le,ro=new le,so=new le,Ta=new P,oo=new P;class wt extends je{constructor(e=new Lt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(wa.fromBufferAttribute(h,e),s?no.addScaledVector(wa,u):no.addScaledVector(wa.sub(t),u))}t.add(no)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),e.ray.intersectsSphere(Sa)===!1)||(ou.copy(r).invert(),fr.copy(e.ray).applyMatrix4(ou),n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){const b=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);s=ao(this,m,e,fr,c,u,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=o.getX(d),M=o.getX(d+1),x=o.getX(d+2);s=ao(this,i,e,fr,c,u,_,M,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,v=M;x<v;x+=3){const b=x,T=x+1,C=x+2;s=ao(this,m,e,fr,c,u,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,M=d+1,x=d+2;s=ao(this,i,e,fr,c,u,_,M,x),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Ip(a,e,t,n,i,r,s,o){let l;if(e.side===xn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===pi,o),l===null)return null;oo.copy(o),oo.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:a}}function ao(a,e,t,n,i,r,s,o,l){a.getVertexPosition(s,ns),a.getVertexPosition(o,is),a.getVertexPosition(l,rs);const c=Ip(a,e,t,n,ns,is,rs,Ta);if(c){i&&(io.fromBufferAttribute(i,s),ro.fromBufferAttribute(i,o),so.fromBufferAttribute(i,l),c.uv=Xn.getUV(Ta,ns,is,rs,io,ro,so,new le)),r&&(io.fromBufferAttribute(r,s),ro.fromBufferAttribute(r,o),so.fromBufferAttribute(r,l),c.uv2=Xn.getUV(Ta,ns,is,rs,io,ro,so,new le));const u={a:s,b:o,c:l,normal:new P,materialIndex:0};Xn.getNormal(ns,is,rs,u.normal),c.face=u}return c}class Vs extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function g(d,m,_,M,x,v,b,T,C,y,w){const L=v/C,N=b/y,j=v/2,I=b/2,R=T/2,F=C+1,G=y+1;let K=0,B=0;const Q=new P;for(let $=0;$<G;$++){const k=$*N-I;for(let U=0;U<F;U++){const re=U*L-j;Q[d]=re*M,Q[m]=k*x,Q[_]=R,c.push(Q.x,Q.y,Q.z),Q[d]=0,Q[m]=0,Q[_]=T>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(U/C),h.push(1-$/y),K+=1}}for(let $=0;$<y;$++)for(let k=0;k<C;k++){const U=f+k+F*$,re=f+k+F*($+1),ee=f+(k+1)+F*($+1),se=f+(k+1)+F*$;l.push(U,re,se),l.push(re,ee,se),B+=6}o.addGroup(p,B,w),p+=B,f+=K}}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(a){const e={};for(let t=0;t<a.length;t++){const n=Or(a[t]);for(const i in n)e[i]=n[i]}return e}function Np(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Bh(a){return a.getRenderTarget()===null&&a.outputEncoding===qe?En:Ss}const Op={clone:Or,merge:Ut};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vh extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Vh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class Up extends je{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kt(dr,pr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new kt(dr,pr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new kt(dr,pr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new kt(dr,pr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new kt(dr,pr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(dr,pr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Gh extends Ct{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kp extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ui});r.uniforms.tEquirect.value=t;const s=new wt(i,r),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=Vt),new Up(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Ea=new P,Bp=new P,Vp=new $t;class Ni{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ea.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vp.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new qr,lo=new P;class Cl{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,r=new Ni,s=new Ni){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-m).normalize(),t[1].setComponents(o+i,h+l,d+f,x+m).normalize(),t[2].setComponents(o+r,h+c,d+p,x+_).normalize(),t[3].setComponents(o-r,h-c,d-p,x-_).normalize(),t[4].setComponents(o-s,h-u,d-g,x-M).normalize(),t[5].setComponents(o+s,h+u,d+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lo.x=i.normal.x>0?e.max.x:e.min.x,lo.y=i.normal.y>0?e.max.y:e.min.y,lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Gp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;a.bindBuffer(h,c),p.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class Ll extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const M=_*f-s;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-M,0),d.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const x=M+c*_,v=M+c*(_+1),b=M+1+c*(_+1),T=M+1+c*_;p.push(x,v,T),p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(m,2))}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp="vec3 transformed = vec3( position );",Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
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
}`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#endif`,Dm=`#if defined( USE_ENVMAP )
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Um=`struct PhysicalMaterial {
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
}`,km=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ig=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Og=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ug=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qg=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,s_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,u_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,p_=`#define TOON
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
}`,m_=`uniform float size;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 color;
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
}`,v_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:Hp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:jp,aomap_pars_fragment:Yp,begin_vertex:Kp,beginnormal_vertex:Zp,bsdfs:Jp,iridescence_fragment:$p,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:om,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:um,displacementmap_pars_vertex:hm,displacementmap_vertex:fm,emissivemap_fragment:dm,emissivemap_pars_fragment:pm,encodings_fragment:mm,encodings_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:vm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Dm,envmap_vertex:Mm,fog_vertex:bm,fog_pars_vertex:Sm,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Em,lightmap_fragment:Am,lightmap_pars_fragment:Cm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Rm,lights_toon_fragment:Im,lights_toon_pars_fragment:Nm,lights_phong_fragment:Om,lights_phong_pars_fragment:Fm,lights_physical_fragment:zm,lights_physical_pars_fragment:Um,lights_fragment_begin:km,lights_fragment_maps:Bm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:jm,map_particle_fragment:Ym,map_particle_pars_fragment:Km,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphcolor_vertex:$m,morphnormal_vertex:Qm,morphtarget_pars_vertex:eg,morphtarget_vertex:tg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:rg,normal_pars_vertex:sg,normal_vertex:og,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:hg,output_fragment:fg,packing:dg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:_g,roughnessmap_fragment:xg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:Mg,shadowmap_vertex:bg,shadowmask_pars_fragment:Sg,skinbase_vertex:wg,skinning_pars_vertex:Tg,skinning_vertex:Eg,skinnormal_vertex:Ag,specularmap_fragment:Cg,specularmap_pars_fragment:Lg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Rg,transmission_fragment:Dg,transmission_pars_fragment:Ig,uv_pars_fragment:Ng,uv_pars_vertex:Og,uv_vertex:Fg,uv2_pars_fragment:zg,uv2_pars_vertex:Ug,uv2_vertex:kg,worldpos_vertex:Bg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Hg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:jg,depth_frag:Yg,distanceRGBA_vert:Kg,distanceRGBA_frag:Zg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:Qg,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:r_,meshmatcap_vert:s_,meshmatcap_frag:o_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:u_,meshphysical_vert:h_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:x_,sprite_vert:v_,sprite_frag:y_},ae={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new $t},uv2Transform:{value:new $t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}}},An={basic:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ut([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ut([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ut([ae.points,ae.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ut([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ut([ae.common,ae.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ut([ae.sprite,ae.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ut([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ut([ae.lights,ae.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};An.physical={uniforms:Ut([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const co={r:0,b:0,g:0};function M_(a,e,t,n,i,r,s){const o=new Ae(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=a.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),M=!0),(a.autoClear||M)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ko)?(u===void 0&&(u=new wt(new Vs(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Or(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==qe,(h!==x||f!==x.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wt(new Ll(2,2),new Zi({name:"BackgroundMaterial",uniforms:Or(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(co,Bh(a)),n.buffers.color.setClear(co.r,co.g,co.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(o,l)},render:g}}function b_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(R,F,G,K,B){let Q=!1;if(s){const $=d(K,G,F);c!==$&&(c=$,p(c.object)),Q=_(R,K,G,B),Q&&M(R,K,G,B)}else{const $=F.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==$)&&(c.geometry=K.id,c.program=G.id,c.wireframe=$,Q=!0)}B!==null&&t.update(B,34963),(Q||u)&&(u=!1,y(R,F,G,K),B!==null&&a.bindBuffer(34963,t.get(B).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,F,G){const K=G.wireframe===!0;let B=o[R.id];B===void 0&&(B={},o[R.id]=B);let Q=B[F.id];Q===void 0&&(Q={},B[F.id]=Q);let $=Q[K];return $===void 0&&($=m(f()),Q[K]=$),$}function m(R){const F=[],G=[],K=[];for(let B=0;B<i;B++)F[B]=0,G[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:K,object:R,attributes:{},index:null}}function _(R,F,G,K){const B=c.attributes,Q=F.attributes;let $=0;const k=G.getAttributes();for(const U in k)if(k[U].location>=0){const ee=B[U];let se=Q[U];if(se===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;$++}return c.attributesNum!==$||c.index!==K}function M(R,F,G,K){const B={},Q=F.attributes;let $=0;const k=G.getAttributes();for(const U in k)if(k[U].location>=0){let ee=Q[U];ee===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),B[U]=se,$++}c.attributes=B,c.attributesNum=$,c.index=K}function x(){const R=c.newAttributes;for(let F=0,G=R.length;F<G;F++)R[F]=0}function v(R){b(R,0)}function b(R,F){const G=c.newAttributes,K=c.enabledAttributes,B=c.attributeDivisors;G[R]=1,K[R]===0&&(a.enableVertexAttribArray(R),K[R]=1),B[R]!==F&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),B[R]=F)}function T(){const R=c.newAttributes,F=c.enabledAttributes;for(let G=0,K=F.length;G<K;G++)F[G]!==R[G]&&(a.disableVertexAttribArray(G),F[G]=0)}function C(R,F,G,K,B,Q){n.isWebGL2===!0&&(G===5124||G===5125)?a.vertexAttribIPointer(R,F,G,B,Q):a.vertexAttribPointer(R,F,G,K,B,Q)}function y(R,F,G,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const B=K.attributes,Q=G.getAttributes(),$=F.defaultAttributeValues;for(const k in Q){const U=Q[k];if(U.location>=0){let re=B[k];if(re===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const ee=re.normalized,se=re.itemSize,X=t.get(re);if(X===void 0)continue;const Ce=X.buffer,pe=X.type,Te=X.bytesPerElement;if(re.isInterleavedBufferAttribute){const ue=re.data,De=ue.stride,J=re.offset;if(ue.isInstancedInterleavedBuffer){for(let Z=0;Z<U.locationSize;Z++)b(U.location+Z,ue.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<U.locationSize;Z++)v(U.location+Z);a.bindBuffer(34962,Ce);for(let Z=0;Z<U.locationSize;Z++)C(U.location+Z,se/U.locationSize,pe,ee,De*Te,(J+se/U.locationSize*Z)*Te)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<U.locationSize;ue++)b(U.location+ue,re.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<U.locationSize;ue++)v(U.location+ue);a.bindBuffer(34962,Ce);for(let ue=0;ue<U.locationSize;ue++)C(U.location+ue,se/U.locationSize,pe,ee,se*Te,se/U.locationSize*ue*Te)}}else if($!==void 0){const ee=$[k];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(U.location,ee);break;case 3:a.vertexAttrib3fv(U.location,ee);break;case 4:a.vertexAttrib4fv(U.location,ee);break;default:a.vertexAttrib1fv(U.location,ee)}}}}T()}function w(){j();for(const R in o){const F=o[R];for(const G in F){const K=F[G];for(const B in K)g(K[B].object),delete K[B];delete F[G]}delete o[R]}}function L(R){if(o[R.id]===void 0)return;const F=o[R.id];for(const G in F){const K=F[G];for(const B in K)g(K[B].object),delete K[B];delete F[G]}delete o[R.id]}function N(R){for(const F in o){const G=o[F];if(G[R.id]===void 0)continue;const K=G[R.id];for(const B in K)g(K[B].object),delete K[B];delete G[R.id]}}function j(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function S_(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function w_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),m=a.getParameter(36347),_=a.getParameter(36348),M=a.getParameter(36349),x=f>0,v=s||e.has("OES_texture_float"),b=x&&v,T=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:T}}function T_(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Ni,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,x=M*4;let v=_.clippingState||null;l.value=v,v=u(g,f,x,p);for(let b=0;b!==x;++b)v[b]=t[b];_.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,v=p;x!==d;++x,v+=4)s.copy(h[x]).applyMatrix4(M,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function E_(a){let e=new WeakMap;function t(s,o){return o===Ka?s.mapping=Pr:o===Za&&(s.mapping=Rr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Ka||o===Za)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new kp(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Pl extends Vh{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,au=[.125,.215,.35,.446,.526,.582],zi=20,Aa=new Pl,lu=new Ae;let Ca=null;const Oi=(1+Math.sqrt(5))/2,gr=1/Oi,cu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Oi,gr),new P(0,Oi,-gr),new P(gr,0,Oi),new P(-gr,0,Oi),new P(Oi,gr,0),new P(-Oi,gr,0)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ca=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca),e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ms,format:pn,encoding:Yi,depthBuffer:!1},i=hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(r)),this._blurMaterial=C_(r,e,t)}return i}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lu),u.toneMapping=Kn,u.autoClear=!1;const p=new oi({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new wt(new Vs,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(lu),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;uo(i,M*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pr||e.mapping===Rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=cu[(i-1)%cu.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const _=[];let M=0;for(let C=0;C<zi;++C){const y=C/d,w=Math.exp(-y*y/2);_.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-vr?i-x+vr:0),T=4*(this._cubeSize-v);uo(t,b,T,3*v,2*v),l.setRenderTarget(t),l.render(h,Aa)}}function A_(a){const e=[],t=[],n=[];let i=a;const r=a-vr+1+au.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-vr?l=au[s-a+vr-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,M=new Float32Array(d*g*p),x=new Float32Array(m*g*p),v=new Float32Array(_*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,y=T>2?0:-1,w=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];M.set(w,d*g*T),x.set(f,m*g*T);const L=[T,T,T,T,T,T];v.set(L,_*g*T)}const b=new Lt;b.setAttribute("position",new Bt(M,d)),b.setAttribute("uv",new Bt(x,m)),b.setAttribute("faceIndex",new Bt(v,_)),e.push(b),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hu(a,e,t){const n=new Ki(a,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function C_(a,e,t){const n=new Float32Array(zi),i=new P(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fu(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function du(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function L_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ka||l===Za,u=l===Pr||l===Rr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new uu(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new uu(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function P_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function R_(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const M=p.array;d=p.version;for(let x=0,v=M.length;x<v;x+=3){const b=M[x+0],T=M[x+1],C=M[x+2];f.push(b,T,T,C,C,b)}}else{const M=g.array;d=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const b=x+0,T=x+1,C=x+2;f.push(b,T,T,C,C,b)}}const m=new(Dh(f)?kh:Uh)(f,1);m.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function D_(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){a.drawElements(r,p,o,f*l),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=a,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,o,f*l,g),t.update(p,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function I_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function N_(a,e){return a[0]-e[0]}function O_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function F_(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new Qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==d){let F=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let w=0;x===!0&&(w=1),v===!0&&(w=2),b===!0&&(w=3);let L=u.attributes.position.count*w,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const j=new Float32Array(L*N*4*d),I=new Fh(j,L,N,d);I.type=si,I.needsUpdate=!0;const R=w*4;for(let G=0;G<d;G++){const K=T[G],B=C[G],Q=y[G],$=L*N*4*G;for(let k=0;k<K.count;k++){const U=k*R;x===!0&&(s.fromBufferAttribute(K,k),j[$+U+0]=s.x,j[$+U+1]=s.y,j[$+U+2]=s.z,j[$+U+3]=0),v===!0&&(s.fromBufferAttribute(B,k),j[$+U+4]=s.x,j[$+U+5]=s.y,j[$+U+6]=s.z,j[$+U+7]=0),b===!0&&(s.fromBufferAttribute(Q,k),j[$+U+8]=s.x,j[$+U+9]=s.y,j[$+U+10]=s.z,j[$+U+11]=Q.itemSize===4?s.w:1)}}m={count:d,texture:I,size:new le(L,N)},r.set(u,m),u.addEventListener("dispose",F)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const M=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(a,"morphTargetBaseInfluence",M),f.getUniforms().setValue(a,"morphTargetInfluences",p),f.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let v=0;v<g;v++)d[v]=[v,0];n[u.id]=d}for(let v=0;v<g;v++){const b=d[v];b[0]=v,b[1]=p[v]}d.sort(O_);for(let v=0;v<8;v++)v<g&&d[v][1]?(o[v][0]=d[v][0],o[v][1]=d[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(N_);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const b=o[v],T=b[0],C=b[1];T!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+v)!==m[T]&&u.setAttribute("morphTarget"+v,m[T]),_&&u.getAttribute("morphNormal"+v)!==_[T]&&u.setAttribute("morphNormal"+v,_[T]),i[v]=C,M+=C):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(a,"morphTargetBaseInfluence",x),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function z_(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Wh=new Ct,Xh=new Fh,qh=new Sp,jh=new Gh,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),xu=new Float32Array(4);function jr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=pu[i];if(r===void 0&&(r=new Float32Array(i),pu[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function _t(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function xt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Bo(a,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function U_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function k_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2fv(this.addr,e),xt(t,e)}}function B_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;a.uniform3fv(this.addr,e),xt(t,e)}}function V_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4fv(this.addr,e),xt(t,e)}}function G_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;xu.set(n),a.uniformMatrix2fv(this.addr,!1,xu),xt(t,n)}}function H_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;_u.set(n),a.uniformMatrix3fv(this.addr,!1,_u),xt(t,n)}}function W_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;gu.set(n),a.uniformMatrix4fv(this.addr,!1,gu),xt(t,n)}}function X_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function q_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2iv(this.addr,e),xt(t,e)}}function j_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3iv(this.addr,e),xt(t,e)}}function Y_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4iv(this.addr,e),xt(t,e)}}function K_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Z_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2uiv(this.addr,e),xt(t,e)}}function J_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3uiv(this.addr,e),xt(t,e)}}function $_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4uiv(this.addr,e),xt(t,e)}}function Q_(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wh,i)}function e0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qh,i)}function t0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jh,i)}function n0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xh,i)}function i0(a){switch(a){case 5126:return U_;case 35664:return k_;case 35665:return B_;case 35666:return V_;case 35674:return G_;case 35675:return H_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return j_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return Z_;case 36295:return J_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(a,e){a.uniform1fv(this.addr,e)}function s0(a,e){const t=jr(e,this.size,2);a.uniform2fv(this.addr,t)}function o0(a,e){const t=jr(e,this.size,3);a.uniform3fv(this.addr,t)}function a0(a,e){const t=jr(e,this.size,4);a.uniform4fv(this.addr,t)}function l0(a,e){const t=jr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function c0(a,e){const t=jr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function u0(a,e){const t=jr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function h0(a,e){a.uniform1iv(this.addr,e)}function f0(a,e){a.uniform2iv(this.addr,e)}function d0(a,e){a.uniform3iv(this.addr,e)}function p0(a,e){a.uniform4iv(this.addr,e)}function m0(a,e){a.uniform1uiv(this.addr,e)}function g0(a,e){a.uniform2uiv(this.addr,e)}function _0(a,e){a.uniform3uiv(this.addr,e)}function x0(a,e){a.uniform4uiv(this.addr,e)}function v0(a,e,t){const n=this.cache,i=e.length,r=Bo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Wh,r[s])}function y0(a,e,t){const n=this.cache,i=e.length,r=Bo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||qh,r[s])}function M0(a,e,t){const n=this.cache,i=e.length,r=Bo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||jh,r[s])}function b0(a,e,t){const n=this.cache,i=e.length,r=Bo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),xt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Xh,r[s])}function S0(a){switch(a){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return b0}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=i0(t.type)}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=S0(t.type)}}class E0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function vu(a,e){a.seq.push(e),a.map[e.id]=e}function A0(a,e,t){const n=a.name,i=n.length;for(La.lastIndex=0;;){const r=La.exec(n),s=La.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){vu(t,c===void 0?new w0(o,a,e):new T0(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new E0(o),vu(t,h)),t=h}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);A0(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function yu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let C0=0;function L0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function P0(a){switch(a){case Yi:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Mu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+L0(a.getShaderSource(e),s)}else return i}function R0(a,e){const t=P0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function D0(a,e){let t;switch(e){case zd:t="Linear";break;case Ud:t="Reinhard";break;case kd:t="OptimizedCineon";break;case Bd:t="ACESFilmic";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I0(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function N0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O0(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function hs(a){return a!==""}function bu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(a){return a.replace(F0,z0)}function z0(a,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tl(t)}const U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(a){return a.replace(U0,k0)}function k0(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function V0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Pr:case Rr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function W0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X0(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=B0(t),c=V0(t),u=G0(t),h=H0(t),f=W0(t),p=t.isWebGL2?"":I0(t),g=N0(r),d=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(hs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(hs).join(`
`),_.length>0&&(_+=`
`)):(m=[Tu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),_=[p,Tu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Re.tonemapping_pars_fragment:"",t.toneMapping!==Kn?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,R0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),s=tl(s),s=bu(s,t),s=Su(s,t),o=tl(o),o=bu(o,t),o=Su(o,t),s=wu(s),o=wu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+m+s,v=M+_+o,b=yu(i,35633,x),T=yu(i,35632,v);if(i.attachShader(d,b),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(T).trim();let j=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){j=!1;const R=Mu(i,b,"vertex"),F=Mu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+R+`
`+F)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(b),i.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new wo(i,d)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=O0(i,d)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=T,this}let q0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Y0(e),t.set(e,n)),n}}class Y0{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}}function K0(a,e,t,n,i,r,s){const o=new zh,l=new j0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,L,N,j){const I=N.fog,R=j.geometry,F=y.isMeshStandardMaterial?N.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),K=G&&G.mapping===ko?G.image.height:null,B=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=Q!==void 0?Q.length:0;let k=0;R.morphAttributes.position!==void 0&&(k=1),R.morphAttributes.normal!==void 0&&(k=2),R.morphAttributes.color!==void 0&&(k=3);let U,re,ee,se;if(B){const De=An[B];U=De.vertexShader,re=De.fragmentShader}else U=y.vertexShader,re=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const X=a.getRenderTarget(),Ce=y.alphaTest>0,pe=y.clearcoat>0,Te=y.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:y.type,vertexShader:U,fragmentShader:re,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Yi,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ap,tangentSpaceNormalMap:y.normalMapType===Tl,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===qe,clearcoat:pe,clearcoatMap:pe&&!!y.clearcoatMap,clearcoatRoughnessMap:pe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!y.clearcoatNormalMap,iridescence:Te,iridescenceMap:Te&&!!y.iridescenceMap,iridescenceThicknessMap:Te&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Sr,alphaMap:!!y.alphaMap,alphaTest:Ce,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Kn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ks,flipSided:y.side===xn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(_(w,y),M(w,y),w.push(a.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),y.push(o.mask)}function x(y){const w=g[y.type];let L;if(w){const N=An[w];L=Op.clone(N.uniforms)}else L=y.uniforms;return L}function v(y,w){let L;for(let N=0,j=c.length;N<j;N++){const I=c[N];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new X0(a,w,y,r),c.push(L)),L}function b(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function Z0(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function J0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Eu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Au(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,p,g,d,m){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function o(h,f,p,g,d,m){const _=s(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=s(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||J0),n.length>1&&n.sort(f||Eu),i.length>1&&i.sort(f||Eu)}function u(){for(let h=e,f=a.length;h<f;h++){const p=a[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function $0(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Au,a.set(n,[s])):i>=r.length?(s=new Au,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Q0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ae};break;case"SpotLight":t={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function ex(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let tx=0;function nx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ix(a,e){const t=new Q0,n=ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,s=new Ne,o=new Ne;function l(u,h){let f=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,m=0,_=0,M=0,x=0,v=0,b=0,T=0,C=0,y=0;u.sort(nx);const w=h!==!0?Math.PI:1;for(let N=0,j=u.length;N<j;N++){const I=u[N],R=I.color,F=I.intensity,G=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=R.r*F*w,p+=R.g*F*w,g+=R.b*F*w;else if(I.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],F);else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const Q=I.shadow,$=n.get(I);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=I.shadow.matrix,v++}i.directional[d]=B,d++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(R).multiplyScalar(F*w),B.distance=G,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[_]=B;const Q=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Q.updateMatrices(I),I.castShadow&&y++),i.spotLightMatrix[_]=Q.matrix,I.castShadow){const $=n.get(I);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=K,T++}_++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(R).multiplyScalar(F),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=B,M++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*w),B.distance=I.distance,B.decay=I.decay,I.castShadow){const Q=I.shadow,$=n.get(I);$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=B,m++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(F*w),B.groundColor.copy(I.groundColor).multiplyScalar(F*w),i.hemi[x]=B,x++}}M>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==x||L.numDirectionalShadows!==v||L.numPointShadows!==b||L.numSpotShadows!==T||L.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=x,L.numDirectionalShadows=v,L.numPointShadows=b,L.numSpotShadows=T,L.numSpotMaps=C,i.version=tx++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const v=u[M];if(v.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(v.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Cu(a,e){const t=new ix(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function rx(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Cu(a,e),t.set(r,[l])):s>=o.length?(l=new Cu(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class sx extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`;function cx(a,e,t){let n=new Cl;const i=new le,r=new le,s=new Qe,o=new sx({depthPacking:op}),l=new ox,c={},u=t.maxTextureSize,h={0:xn,1:pi,2:ks},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh,this.render=function(v,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const C=a.getRenderTarget(),y=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),L=a.state;L.setBlending(ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let N=0,j=v.length;N<j;N++){const I=v[N],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const F=R.getFrameExtents();if(i.multiply(F),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,R.mapSize.y=r.y)),R.map===null){const K=this.type!==us?{minFilter:St,magFilter:St}:{};R.map=new Ki(i.x,i.y,K),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const G=R.getViewportCount();for(let K=0;K<G;K++){const B=R.getViewport(K);s.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),L.viewport(s),R.updateMatrices(I,K),n=R.getFrustum(),x(b,T,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===us&&_(R,T),R.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(C,y,w)};function _(v,b){const T=e.update(d);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ki(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(b,null,T,f,d,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(b,null,T,p,d,null)}function M(v,b,T,C,y,w){let L=null;const N=T.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)L=N;else if(L=T.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const j=L.uuid,I=b.uuid;let R=c[j];R===void 0&&(R={},c[j]=R);let F=R[I];F===void 0&&(F=L.clone(),R[I]=F),L=F}return L.visible=b.visible,L.wireframe=b.wireframe,w===us?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:h[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=C,L.farDistance=y),L}function x(v,b,T,C,y){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===us)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld);const N=e.update(v),j=v.material;if(Array.isArray(j)){const I=N.groups;for(let R=0,F=I.length;R<F;R++){const G=I[R],K=j[G.materialIndex];if(K&&K.visible){const B=M(v,K,C,T.near,T.far,y);a.renderBufferDirect(T,null,N,B,v,G)}}}else if(j.visible){const I=M(v,j,C,T.near,T.far,y);a.renderBufferDirect(T,null,N,I,v,null)}}const L=v.children;for(let N=0,j=L.length;N<j;N++)x(L[N],b,T,C,y)}}function ux(a,e,t){const n=t.isWebGL2;function i(){let D=!1;const H=new Qe;let te=null;const de=new Qe(0,0,0,0);return{setMask:function(_e){te!==_e&&!D&&(a.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Xe,yt,Pt,Ti){Ti===!0&&(_e*=Pt,Xe*=Pt,yt*=Pt),H.set(_e,Xe,yt,Pt),de.equals(H)===!1&&(a.clearColor(_e,Xe,yt,Pt),de.copy(H))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function r(){let D=!1,H=null,te=null,de=null;return{setTest:function(_e){_e?Ce(2929):pe(2929)},setMask:function(_e){H!==_e&&!D&&(a.depthMask(_e),H=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case Cd:a.depthFunc(512);break;case Ld:a.depthFunc(519);break;case Pd:a.depthFunc(513);break;case Ya:a.depthFunc(515);break;case Rd:a.depthFunc(514);break;case Dd:a.depthFunc(518);break;case Id:a.depthFunc(516);break;case Nd:a.depthFunc(517);break;default:a.depthFunc(515)}te=_e}},setLocked:function(_e){D=_e},setClear:function(_e){de!==_e&&(a.clearDepth(_e),de=_e)},reset:function(){D=!1,H=null,te=null,de=null}}}function s(){let D=!1,H=null,te=null,de=null,_e=null,Xe=null,yt=null,Pt=null,Ti=null;return{setTest:function(it){D||(it?Ce(2960):pe(2960))},setMask:function(it){H!==it&&!D&&(a.stencilMask(it),H=it)},setFunc:function(it,On,ln){(te!==it||de!==On||_e!==ln)&&(a.stencilFunc(it,On,ln),te=it,de=On,_e=ln)},setOp:function(it,On,ln){(Xe!==it||yt!==On||Pt!==ln)&&(a.stencilOp(it,On,ln),Xe=it,yt=On,Pt=ln)},setLocked:function(it){D=it},setClear:function(it){Ti!==it&&(a.clearStencil(it),Ti=it)},reset:function(){D=!1,H=null,te=null,de=null,_e=null,Xe=null,yt=null,Pt=null,Ti=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,v=null,b=null,T=null,C=null,y=null,w=!1,L=null,N=null,j=null,I=null,R=null;const F=a.getParameter(35661);let G=!1,K=0;const B=a.getParameter(7938);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=K>=2);let Q=null,$={};const k=a.getParameter(3088),U=a.getParameter(2978),re=new Qe().fromArray(k),ee=new Qe().fromArray(U);function se(D,H,te){const de=new Uint8Array(4),_e=a.createTexture();a.bindTexture(D,_e),a.texParameteri(D,10241,9728),a.texParameteri(D,10240,9728);for(let Xe=0;Xe<te;Xe++)a.texImage2D(H+Xe,0,6408,1,1,0,6408,5121,de);return _e}const X={};X[3553]=se(3553,3553,1),X[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(2929),l.setFunc(Ya),ce(!1),Le(vc),Ce(2884),oe(ui);function Ce(D){f[D]!==!0&&(a.enable(D),f[D]=!0)}function pe(D){f[D]!==!1&&(a.disable(D),f[D]=!1)}function Te(D,H){return p[D]!==H?(a.bindFramebuffer(D,H),p[D]=H,n&&(D===36009&&(p[36160]=H),D===36160&&(p[36009]=H)),!0):!1}function ue(D,H){let te=d,de=!1;if(D)if(te=g.get(H),te===void 0&&(te=[],g.set(H,te)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(te.length!==_e.length||te[0]!==36064){for(let Xe=0,yt=_e.length;Xe<yt;Xe++)te[Xe]=36064+Xe;te.length=_e.length,de=!0}}else te[0]!==36064&&(te[0]=36064,de=!0);else te[0]!==1029&&(te[0]=1029,de=!0);de&&(t.isWebGL2?a.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function De(D){return m!==D?(a.useProgram(D),m=D,!0):!1}const J={[xr]:32774,[_d]:32778,[xd]:32779};if(n)J[Sc]=32775,J[wc]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(J[Sc]=D.MIN_EXT,J[wc]=D.MAX_EXT)}const Z={[vd]:0,[yd]:1,[Md]:768,[wh]:770,[Ad]:776,[Td]:774,[Sd]:772,[bd]:769,[Th]:771,[Ed]:775,[wd]:773};function oe(D,H,te,de,_e,Xe,yt,Pt){if(D===ui){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(Ce(3042),_=!0),D!==gd){if(D!==M||Pt!==w){if((x!==xr||T!==xr)&&(a.blendEquation(32774),x=xr,T=xr),Pt)switch(D){case Sr:a.blendFuncSeparate(1,771,1,771);break;case yc:a.blendFunc(1,1);break;case Mc:a.blendFuncSeparate(0,769,0,1);break;case bc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Sr:a.blendFuncSeparate(770,771,1,771);break;case yc:a.blendFunc(770,1);break;case Mc:a.blendFuncSeparate(0,769,0,1);break;case bc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,b=null,C=null,y=null,M=D,w=Pt}return}_e=_e||H,Xe=Xe||te,yt=yt||de,(H!==x||_e!==T)&&(a.blendEquationSeparate(J[H],J[_e]),x=H,T=_e),(te!==v||de!==b||Xe!==C||yt!==y)&&(a.blendFuncSeparate(Z[te],Z[de],Z[Xe],Z[yt]),v=te,b=de,C=Xe,y=yt),M=D,w=!1}function me(D,H){D.side===ks?pe(2884):Ce(2884);let te=D.side===xn;H&&(te=!te),ce(te),D.blending===Sr&&D.transparent===!1?oe(ui):oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const de=D.stencilWrite;c.setTest(de),de&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ce(32926):pe(32926)}function ce(D){L!==D&&(D?a.frontFace(2304):a.frontFace(2305),L=D)}function Le(D){D!==pd?(Ce(2884),D!==N&&(D===vc?a.cullFace(1029):D===md?a.cullFace(1028):a.cullFace(1032))):pe(2884),N=D}function be(D){D!==j&&(G&&a.lineWidth(D),j=D)}function Me(D,H,te){D?(Ce(32823),(I!==H||R!==te)&&(a.polygonOffset(H,te),I=H,R=te)):pe(32823)}function et(D){D?Ce(3089):pe(3089)}function Ye(D){D===void 0&&(D=33984+F-1),Q!==D&&(a.activeTexture(D),Q=D)}function A(D,H,te){te===void 0&&(Q===null?te=33984+F-1:te=Q);let de=$[te];de===void 0&&(de={type:void 0,texture:void 0},$[te]=de),(de.type!==D||de.texture!==H)&&(Q!==te&&(a.activeTexture(te),Q=te),a.bindTexture(D,H||X[D]),de.type=D,de.texture=H)}function S(){const D=$[Q];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{a.compressedTexImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){re.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function ve(D){ee.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Ve(D,H){let te=h.get(H);te===void 0&&(te=new WeakMap,h.set(H,te));let de=te.get(D);de===void 0&&(de=a.getUniformBlockIndex(H,D.name),te.set(D,de))}function nt(D,H){const de=h.get(H).get(D);u.get(H)!==de&&(a.uniformBlockBinding(H,de,D.__bindingPointIndex),u.set(H,de))}function vt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},Q=null,$={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,v=null,b=null,T=null,C=null,y=null,w=!1,L=null,N=null,j=null,I=null,R=null,re.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:pe,bindFramebuffer:Te,drawBuffers:ue,useProgram:De,setBlending:oe,setMaterial:me,setFlipSided:ce,setCullFace:Le,setLineWidth:be,setPolygonOffset:Me,setScissorTest:et,activeTexture:Ye,bindTexture:A,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:ne,texImage2D:we,texImage3D:ge,updateUBOMapping:Ve,uniformBlockBinding:nt,texStorage2D:Y,texStorage3D:xe,texSubImage2D:ie,texSubImage3D:he,compressedTexSubImage2D:Ee,compressedTexSubImage3D:fe,scissor:Se,viewport:ve,reset:vt}}function hx(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):Ts("canvas")}function x(A,S,V,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const he=S?Po:Math.floor,Ee=he(ie*A.width),fe=he(ie*A.height);d===void 0&&(d=M(Ee,fe));const Y=V?M(Ee,fe):d;return Y.width=Ee,Y.height=fe,Y.getContext("2d").drawImage(A,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+fe+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return el(A.width)&&el(A.height)}function b(A){return o?!1:A.wrapS!==dn||A.wrapT!==dn||A.minFilter!==St&&A.minFilter!==Vt}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==St&&A.minFilter!==Vt}function C(A){a.generateMipmap(A)}function y(A,S,V,ne,ie=!1){if(o===!1)return S;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he=S;return S===6403&&(V===5126&&(he=33326),V===5131&&(he=33325),V===5121&&(he=33321)),S===33319&&(V===5126&&(he=33328),V===5131&&(he=33327),V===5121&&(he=33323)),S===6408&&(V===5126&&(he=34836),V===5131&&(he=34842),V===5121&&(he=ne===qe&&ie===!1?35907:32856),V===32819&&(he=32854),V===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(A,S,V){return T(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){return A===St||A===Ja||A===bo?9728:9729}function N(A){const S=A.target;S.removeEventListener("dispose",N),I(S),S.isVideoTexture&&g.delete(S)}function j(A){const S=A.target;S.removeEventListener("dispose",j),F(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,ne=m.get(V);if(ne){const ie=ne[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(A),Object.keys(ne).length===0&&m.delete(V)}n.remove(A)}function R(A){const S=n.get(A);a.deleteTexture(S.__webglTexture);const V=A.source,ne=m.get(V);delete ne[S.__cacheKey],s.memory.textures--}function F(A){const S=A.texture,V=n.get(A),ne=n.get(S);if(ne.__webglTexture!==void 0&&(a.deleteTexture(ne.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)a.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,he=S.length;ie<he;ie++){const Ee=n.get(S[ie]);Ee.__webglTexture&&(a.deleteTexture(Ee.__webglTexture),s.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(A)}let G=0;function K(){G=0}function B(){const A=G;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),G+=1,A}function Q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function $(A,S){const V=n.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(V,A,S);return}}t.bindTexture(3553,V.__webglTexture,33984+S)}function k(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){pe(V,A,S);return}t.bindTexture(35866,V.__webglTexture,33984+S)}function U(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){pe(V,A,S);return}t.bindTexture(32879,V.__webglTexture,33984+S)}function re(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){Te(V,A,S);return}t.bindTexture(34067,V.__webglTexture,33984+S)}const ee={[Dr]:10497,[dn]:33071,[Lo]:33648},se={[St]:9728,[Ja]:9984,[bo]:9986,[Vt]:9729,[Ah]:9985,[qi]:9987};function X(A,S,V){if(V?(a.texParameteri(A,10242,ee[S.wrapS]),a.texParameteri(A,10243,ee[S.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,ee[S.wrapR]),a.texParameteri(A,10240,se[S.magFilter]),a.texParameteri(A,10241,se[S.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(S.wrapS!==dn||S.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,L(S.magFilter)),a.texParameteri(A,10241,L(S.minFilter)),S.minFilter!==St&&S.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===St||S.minFilter!==bo&&S.minFilter!==qi||S.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ms&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ce(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",N));const ne=S.source;let ie=m.get(ne);ie===void 0&&(ie={},m.set(ne,ie));const he=Q(S);if(he!==A.__cacheKey){ie[he]===void 0&&(ie[he]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ie[he].usedTimes++;const Ee=ie[A.__cacheKey];Ee!==void 0&&(ie[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(S)),A.__cacheKey=he,A.__webglTexture=ie[he].texture}return V}function pe(A,S,V){let ne=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=35866),S.isData3DTexture&&(ne=32879);const ie=Ce(A,S),he=S.source;t.bindTexture(ne,A.__webglTexture,33984+V);const Ee=n.get(he);if(he.version!==Ee.__version||ie===!0){t.activeTexture(33984+V),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const fe=b(S)&&v(S.image)===!1;let Y=x(S.image,fe,!1,u);Y=Ye(S,Y);const xe=v(Y)||o,we=r.convert(S.format,S.encoding);let ge=r.convert(S.type),Se=y(S.internalFormat,we,ge,S.encoding,S.isVideoTexture);X(ne,S,xe);let ve;const Ve=S.mipmaps,nt=o&&S.isVideoTexture!==!0,vt=Ee.__version===void 0||ie===!0,D=w(S,Y,xe);if(S.isDepthTexture)Se=6402,o?S.type===si?Se=36012:S.type===Ui?Se=33190:S.type===wr?Se=35056:Se=33189:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Bi&&Se===6402&&S.type!==Ch&&S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ui,ge=r.convert(S.type)),S.format===Ir&&Se===6402&&(Se=34041,S.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wr,ge=r.convert(S.type))),vt&&(nt?t.texStorage2D(3553,1,Se,Y.width,Y.height):t.texImage2D(3553,0,Se,Y.width,Y.height,0,we,ge,null));else if(S.isDataTexture)if(Ve.length>0&&xe){nt&&vt&&t.texStorage2D(3553,D,Se,Ve[0].width,Ve[0].height);for(let H=0,te=Ve.length;H<te;H++)ve=Ve[H],nt?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,we,ge,ve.data):t.texImage2D(3553,H,Se,ve.width,ve.height,0,we,ge,ve.data);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(3553,D,Se,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,we,ge,Y.data)):t.texImage2D(3553,0,Se,Y.width,Y.height,0,we,ge,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&vt&&t.texStorage3D(35866,D,Se,Ve[0].width,Ve[0].height,Y.depth);for(let H=0,te=Ve.length;H<te;H++)ve=Ve[H],S.format!==pn?we!==null?nt?t.compressedTexSubImage3D(35866,H,0,0,0,ve.width,ve.height,Y.depth,we,ve.data,0,0):t.compressedTexImage3D(35866,H,Se,ve.width,ve.height,Y.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,H,0,0,0,ve.width,ve.height,Y.depth,we,ge,ve.data):t.texImage3D(35866,H,Se,ve.width,ve.height,Y.depth,0,we,ge,ve.data)}else{nt&&vt&&t.texStorage2D(3553,D,Se,Ve[0].width,Ve[0].height);for(let H=0,te=Ve.length;H<te;H++)ve=Ve[H],S.format!==pn?we!==null?nt?t.compressedTexSubImage2D(3553,H,0,0,ve.width,ve.height,we,ve.data):t.compressedTexImage2D(3553,H,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,we,ge,ve.data):t.texImage2D(3553,H,Se,ve.width,ve.height,0,we,ge,ve.data)}else if(S.isDataArrayTexture)nt?(vt&&t.texStorage3D(35866,D,Se,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,we,ge,Y.data)):t.texImage3D(35866,0,Se,Y.width,Y.height,Y.depth,0,we,ge,Y.data);else if(S.isData3DTexture)nt?(vt&&t.texStorage3D(32879,D,Se,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,we,ge,Y.data)):t.texImage3D(32879,0,Se,Y.width,Y.height,Y.depth,0,we,ge,Y.data);else if(S.isFramebufferTexture){if(vt)if(nt)t.texStorage2D(3553,D,Se,Y.width,Y.height);else{let H=Y.width,te=Y.height;for(let de=0;de<D;de++)t.texImage2D(3553,de,Se,H,te,0,we,ge,null),H>>=1,te>>=1}}else if(Ve.length>0&&xe){nt&&vt&&t.texStorage2D(3553,D,Se,Ve[0].width,Ve[0].height);for(let H=0,te=Ve.length;H<te;H++)ve=Ve[H],nt?t.texSubImage2D(3553,H,0,0,we,ge,ve):t.texImage2D(3553,H,Se,we,ge,ve);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(3553,D,Se,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,we,ge,Y)):t.texImage2D(3553,0,Se,we,ge,Y);T(S,xe)&&C(ne),Ee.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Te(A,S,V){if(S.image.length!==6)return;const ne=Ce(A,S),ie=S.source;t.bindTexture(34067,A.__webglTexture,33984+V);const he=n.get(ie);if(ie.version!==he.__version||ne===!0){t.activeTexture(33984+V),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!Ee&&!fe?Y[H]=x(S.image[H],!1,!0,c):Y[H]=fe?S.image[H].image:S.image[H],Y[H]=Ye(S,Y[H]);const xe=Y[0],we=v(xe)||o,ge=r.convert(S.format,S.encoding),Se=r.convert(S.type),ve=y(S.internalFormat,ge,Se,S.encoding),Ve=o&&S.isVideoTexture!==!0,nt=he.__version===void 0||ne===!0;let vt=w(S,xe,we);X(34067,S,we);let D;if(Ee){Ve&&nt&&t.texStorage2D(34067,vt,ve,xe.width,xe.height);for(let H=0;H<6;H++){D=Y[H].mipmaps;for(let te=0;te<D.length;te++){const de=D[te];S.format!==pn?ge!==null?Ve?t.compressedTexSubImage2D(34069+H,te,0,0,de.width,de.height,ge,de.data):t.compressedTexImage2D(34069+H,te,ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+H,te,0,0,de.width,de.height,ge,Se,de.data):t.texImage2D(34069+H,te,ve,de.width,de.height,0,ge,Se,de.data)}}}else{D=S.mipmaps,Ve&&nt&&(D.length>0&&vt++,t.texStorage2D(34067,vt,ve,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(fe){Ve?t.texSubImage2D(34069+H,0,0,0,Y[H].width,Y[H].height,ge,Se,Y[H].data):t.texImage2D(34069+H,0,ve,Y[H].width,Y[H].height,0,ge,Se,Y[H].data);for(let te=0;te<D.length;te++){const _e=D[te].image[H].image;Ve?t.texSubImage2D(34069+H,te+1,0,0,_e.width,_e.height,ge,Se,_e.data):t.texImage2D(34069+H,te+1,ve,_e.width,_e.height,0,ge,Se,_e.data)}}else{Ve?t.texSubImage2D(34069+H,0,0,0,ge,Se,Y[H]):t.texImage2D(34069+H,0,ve,ge,Se,Y[H]);for(let te=0;te<D.length;te++){const de=D[te];Ve?t.texSubImage2D(34069+H,te+1,0,0,ge,Se,de.image[H]):t.texImage2D(34069+H,te+1,ve,ge,Se,de.image[H])}}}T(S,we)&&C(34067),he.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,V,ne,ie){const he=r.convert(V.format,V.encoding),Ee=r.convert(V.type),fe=y(V.internalFormat,he,Ee,V.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,fe,S.width,S.height,S.depth,0,he,Ee,null):t.texImage2D(ie,0,fe,S.width,S.height,0,he,Ee,null)),t.bindFramebuffer(36160,A),Me(S)?f.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get(V).__webglTexture,0,be(S)):(ie===3553||ie>=34069&&ie<=34074)&&a.framebufferTexture2D(36160,ne,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function De(A,S,V){if(a.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ne=33189;if(V||Me(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===si?ne=36012:ie.type===Ui&&(ne=33190));const he=be(S);Me(S)?f.renderbufferStorageMultisampleEXT(36161,he,ne,S.width,S.height):a.renderbufferStorageMultisample(36161,he,ne,S.width,S.height)}else a.renderbufferStorage(36161,ne,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ne=be(S);V&&Me(S)===!1?a.renderbufferStorageMultisample(36161,ne,35056,S.width,S.height):Me(S)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<ne.length;ie++){const he=ne[ie],Ee=r.convert(he.format,he.encoding),fe=r.convert(he.type),Y=y(he.internalFormat,Ee,fe,he.encoding),xe=be(S);V&&Me(S)===!1?a.renderbufferStorageMultisample(36161,xe,Y,S.width,S.height):Me(S)?f.renderbufferStorageMultisampleEXT(36161,xe,Y,S.width,S.height):a.renderbufferStorage(36161,Y,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function J(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,ie=be(S);if(S.depthTexture.format===Bi)Me(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):a.framebufferTexture2D(36160,36096,3553,ne,0);else if(S.depthTexture.format===Ir)Me(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):a.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Z(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");J(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=a.createRenderbuffer(),De(S.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),De(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function oe(A,S,V){const ne=n.get(A);S!==void 0&&ue(ne.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&Z(A)}function me(A){const S=A.texture,V=n.get(A),ne=n.get(S);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=S.version,s.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,he=A.isWebGLMultipleRenderTargets===!0,Ee=v(A)||o;if(ie){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)V.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),he)if(i.drawBuffers){const fe=A.texture;for(let Y=0,xe=fe.length;Y<xe;Y++){const we=n.get(fe[Y]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Me(A)===!1){const fe=he?S:[S];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Y=0;Y<fe.length;Y++){const xe=fe[Y];V.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Y]);const we=r.convert(xe.format,xe.encoding),ge=r.convert(xe.type),Se=y(xe.internalFormat,we,ge,xe.encoding,A.isXRRenderTarget===!0),ve=be(A);a.renderbufferStorageMultisample(36161,ve,Se,A.width,A.height),a.framebufferRenderbuffer(36160,36064+Y,36161,V.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),De(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),X(34067,S,Ee);for(let fe=0;fe<6;fe++)ue(V.__webglFramebuffer[fe],A,S,36064,34069+fe);T(S,Ee)&&C(34067),t.unbindTexture()}else if(he){const fe=A.texture;for(let Y=0,xe=fe.length;Y<xe;Y++){const we=fe[Y],ge=n.get(we);t.bindTexture(3553,ge.__webglTexture),X(3553,we,Ee),ue(V.__webglFramebuffer,A,we,36064+Y,3553),T(we,Ee)&&C(3553)}t.unbindTexture()}else{let fe=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?fe=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),X(fe,S,Ee),ue(V.__webglFramebuffer,A,S,36064,fe),T(S,Ee)&&C(fe),t.unbindTexture()}A.depthBuffer&&Z(A)}function ce(A){const S=v(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=V.length;ne<ie;ne++){const he=V[ne];if(T(he,S)){const Ee=A.isWebGLCubeRenderTarget?34067:3553,fe=n.get(he).__webglTexture;t.bindTexture(Ee,fe),C(Ee),t.unbindTexture()}}}function Le(A){if(o&&A.samples>0&&Me(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ne=A.height;let ie=16384;const he=[],Ee=A.stencilBuffer?33306:36096,fe=n.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){he.push(36064+xe),A.depthBuffer&&he.push(Ee);const we=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(we===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),Y&&a.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[xe]),we===!0&&(a.invalidateFramebuffer(36008,[Ee]),a.invalidateFramebuffer(36009,[Ee])),Y){const ge=n.get(S[xe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ge,0)}a.blitFramebuffer(0,0,V,ne,0,0,V,ne,ie,9728),p&&a.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xe,36161,fe.__webglColorRenderbuffer[xe]);const we=n.get(S[xe]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xe,3553,we,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function be(A){return Math.min(h,A.samples)}function Me(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(A){const S=s.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Ye(A,S){const V=A.encoding,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Qa||V!==Yi&&(V===qe?o===!1?e.has("EXT_sRGB")===!0&&ne===pn?(A.format=Qa,A.minFilter=Vt,A.generateMipmaps=!1):S=Nh.sRGBToLinear(S):(ne!==pn||ie!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=B,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=re,this.rebindTextures=oe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Me}function fx(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===ji)return 5121;if(r===Xd)return 32819;if(r===qd)return 32820;if(r===Gd)return 5120;if(r===Hd)return 5122;if(r===Ch)return 5123;if(r===Wd)return 5124;if(r===Ui)return 5125;if(r===si)return 5126;if(r===Ms)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===jd)return 6406;if(r===pn)return 6408;if(r===Kd)return 6409;if(r===Zd)return 6410;if(r===Bi)return 6402;if(r===Ir)return 34041;if(r===Yd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Jd)return 6403;if(r===$d)return 36244;if(r===Qd)return 33319;if(r===ep)return 33320;if(r===tp)return 36249;if(r===ta||r===na||r===ia||r===ra)if(s===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tc||r===Ec||r===Ac||r===Cc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===np)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lc||r===Pc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Lc)return s===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rc||r===Dc||r===Ic||r===Nc||r===Oc||r===Fc||r===zc||r===Uc||r===kc||r===Bc||r===Vc||r===Gc||r===Hc||r===Wc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Rc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ic)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wc)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Xc)return s===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===wr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class dx extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qt extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(px)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mx extends Ct{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bi&&(n=Ui),n===void 0&&u===Ir&&(n=wr),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class gx extends Wr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],M=[],x=new Set,v=new Map,b=new kt;b.layers.enable(1),b.viewport=new Qe;const T=new kt;T.layers.enable(2),T.viewport=new Qe;const C=[b,T],y=new dx;y.layers.enable(1),y.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let U=_[k];return U===void 0&&(U=new Pa,_[k]=U),U.getTargetRaySpace()},this.getControllerGrip=function(k){let U=_[k];return U===void 0&&(U=new Pa,_[k]=U),U.getGripSpace()},this.getHand=function(k){let U=_[k];return U===void 0&&(U=new Pa,_[k]=U),U.getHandSpace()};function N(k){const U=M.indexOf(k.inputSource);if(U===-1)return;const re=_[U];re!==void 0&&re.dispatchEvent({type:k.type,data:k.inputSource})}function j(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",I);for(let k=0;k<_.length;k++){const U=M[k];U!==null&&(M[k]=null,_[k].disconnect(U))}w=null,L=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,m=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",j),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:f}),m=new Ki(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ji,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,re=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,U=g.stencil?Ir:Bi,re=g.stencil?wr:Ui);const se={colorFormat:32856,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(se),i.updateRenderState({layers:[h]}),m=new Ki(h.textureWidth,h.textureHeight,{format:pn,type:ji,depthTexture:new mx(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const X=e.properties.get(m);X.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(k){for(let U=0;U<k.removed.length;U++){const re=k.removed[U],ee=M.indexOf(re);ee>=0&&(M[ee]=null,_[ee].disconnect(re))}for(let U=0;U<k.added.length;U++){const re=k.added[U];let ee=M.indexOf(re);if(ee===-1){for(let X=0;X<_.length;X++)if(X>=M.length){M.push(re),ee=X;break}else if(M[X]===null){M[X]=re,ee=X;break}if(ee===-1)break}const se=_[ee];se&&se.connect(re)}}const R=new P,F=new P;function G(k,U,re){R.setFromMatrixPosition(U.matrixWorld),F.setFromMatrixPosition(re.matrixWorld);const ee=R.distanceTo(F),se=U.projectionMatrix.elements,X=re.projectionMatrix.elements,Ce=se[14]/(se[10]-1),pe=se[14]/(se[10]+1),Te=(se[9]+1)/se[5],ue=(se[9]-1)/se[5],De=(se[8]-1)/se[0],J=(X[8]+1)/X[0],Z=Ce*De,oe=Ce*J,me=ee/(-De+J),ce=me*-De;U.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ce),k.translateZ(me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Le=Ce+me,be=pe+me,Me=Z-ce,et=oe+(ee-ce),Ye=Te*pe/be*Le,A=ue*pe/be*Le;k.projectionMatrix.makePerspective(Me,et,Ye,A,Le,be)}function K(k,U){U===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(U.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;y.near=T.near=b.near=k.near,y.far=T.far=b.far=k.far,(w!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,L=y.far);const U=k.parent,re=y.cameras;K(y,U);for(let se=0;se<re.length;se++)K(re[se],U);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),k.matrix.copy(y.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ee=k.children;for(let se=0,X=ee.length;se<X;se++)ee[se].updateMatrixWorld(!0);re.length===2?G(y,b,T):y.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.getPlanes=function(){return x};let B=null;function Q(k,U){if(c=U.getViewerPose(l||s),p=U,c!==null){const re=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ee=!1;re.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let se=0;se<re.length;se++){const X=re[se];let Ce=null;if(f!==null)Ce=f.getViewport(X);else{const Te=u.getViewSubImage(h,X);Ce=Te.viewport,se===0&&(e.setRenderTargetTextures(m,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(m))}let pe=C[se];pe===void 0&&(pe=new kt,pe.layers.enable(se),pe.viewport=new Qe,C[se]=pe),pe.matrix.fromArray(X.transform.matrix),pe.projectionMatrix.fromArray(X.projectionMatrix),pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),se===0&&y.matrix.copy(pe.matrix),ee===!0&&y.cameras.push(pe)}}for(let re=0;re<_.length;re++){const ee=M[re],se=_[re];ee!==null&&se!==void 0&&se.update(ee,U,l||s)}if(B&&B(k,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let re=null;for(const ee of x)U.detectedPlanes.has(ee)||(re===null&&(re=[]),re.push(ee));if(re!==null)for(const ee of re)x.delete(ee),v.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of U.detectedPlanes)if(!x.has(ee))x.add(ee),v.set(ee,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const se=v.get(ee);ee.lastChangedTime>se&&(v.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}p=null}const $=new Hh;$.setAnimationLoop(Q),this.setAnimationLoop=function(k){B=k},this.dispose=function(){}}}function _x(a,e){function t(d,m){m.color.getRGB(d.fogColor.value,Bh(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&s(d,m)):m.isPointsMaterial?o(d,m,_,M):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===xn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===xn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const v=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function s(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=M*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===xn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function xx(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=i[M.id];v===void 0&&(g(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(M,b);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const v=a.createBuffer(),b=M.__size,T=M.usage;return a.bindBuffer(35345,v),a.bufferData(35345,b,T),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],v=M.uniforms,b=M.__cache;a.bindBuffer(35345,x);for(let T=0,C=v.length;T<C;T++){const y=v[T];if(p(y,T,b)===!0){const w=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let j=0;j<L.length;j++){const I=L[j],R=d(I);typeof I=="number"?(y.__data[0]=I,a.bufferSubData(35345,w+N,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=I.elements[0],y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=I.elements[0],y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=I.elements[0]):(I.toArray(y.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,y.__data)}}a.bindBuffer(35345,null)}function p(M,x,v){const b=M.value;if(v[x]===void 0){if(typeof b=="number")v[x]=b;else{const T=Array.isArray(b)?b:[b],C=[];for(let y=0;y<T.length;y++)C.push(T[y].clone());v[x]=C}return!0}else if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const T=Array.isArray(v[x])?v[x]:[v[x]],C=Array.isArray(b)?b:[b];for(let y=0;y<T.length;y++){const w=T[y];if(w.equals(C[y])===!1)return w.copy(C[y]),!0}}return!1}function g(M){const x=M.uniforms;let v=0;const b=16;let T=0;for(let C=0,y=x.length;C<y;C++){const w=x[C],L={boundary:0,storage:0},N=Array.isArray(w.value)?w.value:[w.value];for(let j=0,I=N.length;j<I;j++){const R=N[j],F=d(R);L.boundary+=F.boundary,L.storage+=F.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,C>0){T=v%b;const j=b-T;T!==0&&j-L.boundary<0&&(v+=b-T,w.__offset=v)}v+=L.storage}return T=v%b,T>0&&(v+=b-T),M.__size=v,M.__cache={},this}function d(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const M in i)a.deleteBuffer(i[M]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function vx(){const a=Ts("canvas");return a.style.display="block",a}function Yh(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:vx(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,s=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yi,this.physicallyCorrectLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const d=this;let m=!1,_=0,M=0,x=null,v=-1,b=null;const T=new Qe,C=new Qe;let y=null,w=e.width,L=e.height,N=1,j=null,I=null;const R=new Qe(0,0,w,L),F=new Qe(0,0,w,L);let G=!1;const K=new Cl;let B=!1,Q=!1,$=null;const k=new Ne,U=new le,re=new P,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return x===null?N:1}let X=t;function Ce(E,z){for(let W=0;W<E.length;W++){const O=E[W],q=e.getContext(O,z);if(q!==null)return q}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),X=Ce(z,E),X===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,Te,ue,De,J,Z,oe,me,ce,Le,be,Me,et,Ye,A,S,V,ne,ie,he,Ee,fe,Y,xe;function we(){pe=new P_(X),Te=new w_(X,pe,a),pe.init(Te),fe=new fx(X,pe,Te),ue=new ux(X,pe,Te),De=new I_,J=new Z0,Z=new hx(X,pe,ue,J,Te,fe,De),oe=new E_(d),me=new L_(d),ce=new Gp(X,Te),Y=new b_(X,pe,ce,Te),Le=new R_(X,ce,De,Y),be=new z_(X,Le,ce,De),ie=new F_(X,Te,Z),S=new T_(J),Me=new K0(d,oe,me,pe,Te,Y,S),et=new _x(d,J),Ye=new $0,A=new rx(pe,Te),ne=new M_(d,oe,me,ue,be,u,s),V=new cx(d,be,Te),xe=new xx(X,De,Te,ue),he=new S_(X,pe,De,Te),Ee=new D_(X,pe,De,Te),De.programs=Me.programs,d.capabilities=Te,d.extensions=pe,d.properties=J,d.renderLists=Ye,d.shadowMap=V,d.state=ue,d.info=De}we();const ge=new gx(d,X);this.xr=ge,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(w,L,!1))},this.getSize=function(E){return E.set(w,L)},this.setSize=function(E,z,W){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,L=z,e.width=Math.floor(E*N),e.height=Math.floor(z*N),W!==!1&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(w*N,L*N).floor()},this.setDrawingBufferSize=function(E,z,W){w=E,L=z,N=W,e.width=Math.floor(E*W),e.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,z,W,O){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,z,W,O),ue.viewport(T.copy(R).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,z,W,O){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,z,W,O),ue.scissor(C.copy(F).multiplyScalar(N).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(E){ue.setScissorTest(G=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,z=!0,W=!0){let O=0;E&&(O|=16384),z&&(O|=256),W&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),Ye.dispose(),A.dispose(),J.dispose(),oe.dispose(),me.dispose(),be.dispose(),Y.dispose(),xe.dispose(),Me.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",de),ge.removeEventListener("sessionend",_e),$&&($.dispose(),$=null),Xe.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=De.autoReset,z=V.enabled,W=V.autoUpdate,O=V.needsUpdate,q=V.type;we(),De.autoReset=E,V.enabled=z,V.autoUpdate=W,V.needsUpdate=O,V.type=q}function Ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const z=E.target;z.removeEventListener("dispose",nt),vt(z)}function vt(E){D(E),J.remove(E)}function D(E){const z=J.get(E).programs;z!==void 0&&(z.forEach(function(W){Me.releaseProgram(W)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,O,q,ye){z===null&&(z=ee);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ie=ud(E,z,W,O,q);ue.setMaterial(O,Pe);let Oe=W.index,Ge=1;O.wireframe===!0&&(Oe=Le.getWireframeAttribute(W),Ge=2);const ze=W.drawRange,Ue=W.attributes.position;let ht=ze.start*Ge,qt=(ze.start+ze.count)*Ge;ye!==null&&(ht=Math.max(ht,ye.start*Ge),qt=Math.min(qt,(ye.start+ye.count)*Ge)),Oe!==null?(ht=Math.max(ht,0),qt=Math.min(qt,Oe.count)):Ue!=null&&(ht=Math.max(ht,0),qt=Math.min(qt,Ue.count));const Fn=qt-ht;if(Fn<0||Fn===1/0)return;Y.setup(q,O,Ie,W,Oe);let Ei,ft=he;if(Oe!==null&&(Ei=ce.get(Oe),ft=Ee,ft.setIndex(Ei)),q.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*se()),ft.setMode(1)):ft.setMode(4);else if(q.isLine){let ke=O.linewidth;ke===void 0&&(ke=1),ue.setLineWidth(ke*se()),q.isLineSegments?ft.setMode(1):q.isLineLoop?ft.setMode(2):ft.setMode(3)}else q.isPoints?ft.setMode(0):q.isSprite&&ft.setMode(4);if(q.isInstancedMesh)ft.renderInstances(ht,Fn,q.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jo=Math.min(W.instanceCount,ke);ft.renderInstances(ht,Fn,Jo)}else ft.render(ht,Fn)},this.compile=function(E,z){function W(O,q,ye){O.transparent===!0&&O.side===qs?(O.side=xn,O.needsUpdate=!0,ln(O,q,ye),O.side=pi,O.needsUpdate=!0,ln(O,q,ye),O.side=qs):ln(O,q,ye)}f=A.get(E),f.init(),g.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let ye=0;ye<q.length;ye++){const Pe=q[ye];W(Pe,E,O)}else W(q,E,O)}),g.pop(),f=null};let H=null;function te(E){H&&H(E)}function de(){Xe.stop()}function _e(){Xe.start()}const Xe=new Hh;Xe.setAnimationLoop(te),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){H=E,ge.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},ge.addEventListener("sessionstart",de),ge.addEventListener("sessionend",_e),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(z),z=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,z,x),f=A.get(E,g.length),f.init(),g.push(f),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(k),Q=this.localClippingEnabled,B=S.init(this.clippingPlanes,Q,z),h=Ye.get(E,p.length),h.init(),p.push(h),yt(E,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(j,I),B===!0&&S.beginShadows();const W=f.state.shadowsArray;if(V.render(W,E,z),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,E),f.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let q=0,ye=O.length;q<ye;q++){const Pe=O[q];Pt(h,E,Pe,Pe.viewport)}}else Pt(h,E,z);x!==null&&(Z.updateMultisampleRenderTarget(x),Z.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,z),Y.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function yt(E,z,W,O){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){O&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const Pe=be.update(E),Ie=E.material;Ie.visible&&h.push(E,Pe,Ie,W,re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==De.render.frame&&(E.skeleton.update(),E.skeleton.frame=De.render.frame),!E.frustumCulled||K.intersectsObject(E))){O&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(k);const Pe=be.update(E),Ie=E.material;if(Array.isArray(Ie)){const Oe=Pe.groups;for(let Ge=0,ze=Oe.length;Ge<ze;Ge++){const Ue=Oe[Ge],ht=Ie[Ue.materialIndex];ht&&ht.visible&&h.push(E,Pe,ht,W,re.z,Ue)}}else Ie.visible&&h.push(E,Pe,Ie,W,re.z,null)}}const ye=E.children;for(let Pe=0,Ie=ye.length;Pe<Ie;Pe++)yt(ye[Pe],z,W,O)}function Pt(E,z,W,O){const q=E.opaque,ye=E.transmissive,Pe=E.transparent;f.setupLightsView(W),ye.length>0&&Ti(q,z,W),O&&ue.viewport(T.copy(O)),q.length>0&&it(q,z,W),ye.length>0&&it(ye,z,W),Pe.length>0&&it(Pe,z,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ti(E,z,W){const O=Te.isWebGL2;$===null&&($=new Ki(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Ms:ji,minFilter:qi,samples:O&&r===!0?4:0})),d.getDrawingBufferSize(U),O?$.setSize(U.x,U.y):$.setSize(Po(U.x),Po(U.y));const q=d.getRenderTarget();d.setRenderTarget($),d.clear();const ye=d.toneMapping;d.toneMapping=Kn,it(E,z,W),d.toneMapping=ye,Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($),d.setRenderTarget(q)}function it(E,z,W){const O=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ye=E.length;q<ye;q++){const Pe=E[q],Ie=Pe.object,Oe=Pe.geometry,Ge=O===null?Pe.material:O,ze=Pe.group;Ie.layers.test(W.layers)&&On(Ie,z,W,Oe,Ge,ze)}}function On(E,z,W,O,q,ye){E.onBeforeRender(d,z,W,O,q,ye),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(d,z,W,O,E,ye),q.transparent===!0&&q.side===qs?(q.side=xn,q.needsUpdate=!0,d.renderBufferDirect(W,z,O,q,E,ye),q.side=pi,q.needsUpdate=!0,d.renderBufferDirect(W,z,O,q,E,ye),q.side=qs):d.renderBufferDirect(W,z,O,q,E,ye),E.onAfterRender(d,z,W,O,q,ye)}function ln(E,z,W){z.isScene!==!0&&(z=ee);const O=J.get(E),q=f.state.lights,ye=f.state.shadowsArray,Pe=q.state.version,Ie=Me.getParameters(E,q.state,ye,z,W),Oe=Me.getProgramCacheKey(Ie);let Ge=O.programs;O.environment=E.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(E.isMeshStandardMaterial?me:oe).get(E.envMap||O.environment),Ge===void 0&&(E.addEventListener("dispose",nt),Ge=new Map,O.programs=Ge);let ze=Ge.get(Oe);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===Pe)return gc(E,Ie),ze}else Ie.uniforms=Me.getUniforms(E),E.onBuild(W,Ie,d),E.onBeforeCompile(Ie,d),ze=Me.acquireProgram(Ie,Oe),Ge.set(Oe,ze),O.uniforms=Ie.uniforms;const Ue=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=S.uniform),gc(E,Ie),O.needsLights=fd(E),O.lightsStateVersion=Pe,O.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const ht=ze.getUniforms(),qt=wo.seqWithValue(ht.seq,Ue);return O.currentProgram=ze,O.uniformsList=qt,ze}function gc(E,z){const W=J.get(E);W.outputEncoding=z.outputEncoding,W.instancing=z.instancing,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function ud(E,z,W,O,q){z.isScene!==!0&&(z=ee),Z.resetTextureUnits();const ye=z.fog,Pe=O.isMeshStandardMaterial?z.environment:null,Ie=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Yi,Oe=(O.isMeshStandardMaterial?me:oe).get(O.envMap||Pe),Ge=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!O.normalMap&&!!W.attributes.tangent,Ue=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,qt=!!W.morphAttributes.color,Fn=O.toneMapped?d.toneMapping:Kn,Ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=Ei!==void 0?Ei.length:0,ke=J.get(O),Jo=f.state.lights;if(B===!0&&(Q===!0||E!==b)){const jt=E===b&&O.id===v;S.setState(O,E,jt)}let Mt=!1;O.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Jo.state.version||ke.outputEncoding!==Ie||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Oe||O.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==S.numPlanes||ke.numIntersection!==S.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==ze||ke.morphTargets!==Ue||ke.morphNormals!==ht||ke.morphColors!==qt||ke.toneMapping!==Fn||Te.isWebGL2===!0&&ke.morphTargetsCount!==ft)&&(Mt=!0):(Mt=!0,ke.__version=O.version);let Ai=ke.currentProgram;Mt===!0&&(Ai=ln(O,z,q));let _c=!1,Jr=!1,$o=!1;const Ot=Ai.getUniforms(),Ci=ke.uniforms;if(ue.useProgram(Ai.program)&&(_c=!0,Jr=!0,$o=!0),O.id!==v&&(v=O.id,Jr=!0),_c||b!==E){if(Ot.setValue(X,"projectionMatrix",E.projectionMatrix),Te.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Jr=!0,$o=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const jt=Ot.map.cameraPosition;jt!==void 0&&jt.setValue(X,re.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&Ot.setValue(X,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){Ot.setOptional(X,q,"bindMatrix"),Ot.setOptional(X,q,"bindMatrixInverse");const jt=q.skeleton;jt&&(Te.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Ot.setValue(X,"boneTexture",jt.boneTexture,Z),Ot.setValue(X,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qo=W.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0&&Te.isWebGL2===!0)&&ie.update(q,W,O,Ai),(Jr||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Ot.setValue(X,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ci.envMap.value=Oe,Ci.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Jr&&(Ot.setValue(X,"toneMappingExposure",d.toneMappingExposure),ke.needsLights&&hd(Ci,$o),ye&&O.fog===!0&&et.refreshFogUniforms(Ci,ye),et.refreshMaterialUniforms(Ci,O,N,L,$),wo.upload(X,ke.uniformsList,Ci,Z)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(wo.upload(X,ke.uniformsList,Ci,Z),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ot.setValue(X,"center",q.center),Ot.setValue(X,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(X,"normalMatrix",q.normalMatrix),Ot.setValue(X,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const jt=O.uniformsGroups;for(let ea=0,dd=jt.length;ea<dd;ea++)if(Te.isWebGL2){const xc=jt[ea];xe.update(xc,Ai),xe.bind(xc,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function hd(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function fd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,z,W){J.get(E.texture).__webglTexture=z,J.get(E.depthTexture).__webglTexture=W;const O=J.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=W===void 0,O.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const W=J.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,W=0){x=E,_=z,M=W;let O=!0,q=null,ye=!1,Pe=!1;if(E){const Oe=J.get(E);Oe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),O=!1):Oe.__webglFramebuffer===void 0?Z.setupRenderTarget(E):Oe.__hasExternalTextures&&Z.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);const ze=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=ze[z],ye=!0):Te.isWebGL2&&E.samples>0&&Z.useMultisampledRTT(E)===!1?q=J.get(E).__webglMultisampledFramebuffer:q=ze,T.copy(E.viewport),C.copy(E.scissor),y=E.scissorTest}else T.copy(R).multiplyScalar(N).floor(),C.copy(F).multiplyScalar(N).floor(),y=G;if(ue.bindFramebuffer(36160,q)&&Te.drawBuffers&&O&&ue.drawBuffers(E,q),ue.viewport(T),ue.scissor(C),ue.setScissorTest(y),ye){const Oe=J.get(E.texture);X.framebufferTexture2D(36160,36064,34069+z,Oe.__webglTexture,W)}else if(Pe){const Oe=J.get(E.texture),Ge=z||0;X.framebufferTextureLayer(36160,36064,Oe.__webglTexture,W||0,Ge)}v=-1},this.readRenderTargetPixels=function(E,z,W,O,q,ye,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){ue.bindFramebuffer(36160,Ie);try{const Oe=E.texture,Ge=Oe.format,ze=Oe.type;if(Ge!==pn&&fe.convert(Ge)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=ze===Ms&&(pe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&pe.has("EXT_color_buffer_float"));if(ze!==ji&&fe.convert(ze)!==X.getParameter(35738)&&!(ze===si&&(Te.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-O&&W>=0&&W<=E.height-q&&X.readPixels(z,W,O,q,fe.convert(Ge),fe.convert(ze),ye)}finally{const Oe=x!==null?J.get(x).__webglFramebuffer:null;ue.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(E,z,W=0){const O=Math.pow(2,-W),q=Math.floor(z.image.width*O),ye=Math.floor(z.image.height*O);Z.setTexture2D(z,0),X.copyTexSubImage2D(3553,W,0,0,E.x,E.y,q,ye),ue.unbindTexture()},this.copyTextureToTexture=function(E,z,W,O=0){const q=z.image.width,ye=z.image.height,Pe=fe.convert(W.format),Ie=fe.convert(W.type);Z.setTexture2D(W,0),X.pixelStorei(37440,W.flipY),X.pixelStorei(37441,W.premultiplyAlpha),X.pixelStorei(3317,W.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,O,E.x,E.y,q,ye,Pe,Ie,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,O,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):X.texSubImage2D(3553,O,E.x,E.y,Pe,Ie,z.image),O===0&&W.generateMipmaps&&X.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W,O,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,Oe=fe.convert(O.format),Ge=fe.convert(O.type);let ze;if(O.isData3DTexture)Z.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)Z.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const Ue=X.getParameter(3314),ht=X.getParameter(32878),qt=X.getParameter(3316),Fn=X.getParameter(3315),Ei=X.getParameter(32877),ft=W.isCompressedTexture?W.mipmaps[0]:W.image;X.pixelStorei(3314,ft.width),X.pixelStorei(32878,ft.height),X.pixelStorei(3316,E.min.x),X.pixelStorei(3315,E.min.y),X.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?X.texSubImage3D(ze,q,z.x,z.y,z.z,ye,Pe,Ie,Oe,Ge,ft.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ze,q,z.x,z.y,z.z,ye,Pe,Ie,Oe,ft.data)):X.texSubImage3D(ze,q,z.x,z.y,z.z,ye,Pe,Ie,Oe,Ge,ft),X.pixelStorei(3314,Ue),X.pixelStorei(32878,ht),X.pixelStorei(3316,qt),X.pixelStorei(3315,Fn),X.pixelStorei(32877,Ei),q===0&&O.generateMipmaps&&X.generateMipmap(ze),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,ue.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class yx extends Yh{}yx.prototype.isWebGL1Renderer=!0;class Mx extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class bx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$a,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class Dl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lu=new P,Pu=new Qe,Ru=new Qe,Sx=new P,Du=new Ne;class wx extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Pu.fromBufferAttribute(i.attributes.skinIndex,e),Ru.fromBufferAttribute(i.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Ru.getComponent(r);if(s!==0){const o=Pu.getComponent(r);Du.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sx.copy(Lu).applyMatrix4(Du),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kh extends je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tx extends Ct{constructor(e=null,t=1,n=1,i,r,s,o,l,c=St,u=St,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Iu=new Ne,Ex=new Ne;class Il{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:Ex;Iu.multiplyMatrices(o,t[r]),Iu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ph(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tx(t,e,e,pn,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Kh),this.bones.push(s),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Nu extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ou=new Ne,Fu=new Ne,ho=[],Ax=new Ne,ss=new wt;class Cx extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Ax)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ou),Fu.multiplyMatrices(n,Ou),ss.matrixWorld=Fu,ss.raycast(e,ho);for(let s=0,o=ho.length;s<o;s++){const l=ho[s];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zu=new P,Uu=new P,ku=new Ne,Ra=new Al,fo=new qr;class Es extends je{constructor(e=new Lt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)zu.fromBufferAttribute(t,i-1),Uu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=zu.distanceTo(Uu);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;ku.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),M=Math.min(g.count,s.start+s.count);for(let x=_,v=M-1;x<v;x+=p){const b=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,T),Ra.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),M=Math.min(m.count,s.start+s.count);for(let x=_,v=M-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ra.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Bu=new P,Vu=new P;class Nl extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bu.fromBufferAttribute(t,i),Vu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(Vu);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lx extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zh extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new Ne,nl=new Al,po=new qr,mo=new P;class Px extends je{constructor(e=new Lt,t=new Zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Gu.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=f,d=p;g<d;g++){const m=c.getX(g);mo.fromBufferAttribute(h,m),Hu(mo,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=f,d=p;g<d;g++)mo.fromBufferAttribute(h,g),Hu(mo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hu(a,e,t,n,i,r,s){const o=nl.distanceSqToPoint(a);if(o<t){const l=new P;nl.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],f=n[i+1]-u,p=(s-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new le:new P);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],s=[],o=new P,l=new Ne;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new P)}r[0]=new P,s[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Et(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Et(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ol extends In{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new le,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rx extends Ol{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,u,h){let f=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,p*=u,i(s,o,f,p)},calc:function(r){const s=r*r,o=s*r;return a+e*r+t*s+n*o}}}const go=new P,Da=new Fl,Ia=new Fl,Na=new Fl;class Dx extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(go.subVectors(i[0],i[1]).add(i[0]),c=go);const h=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(go.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);d<1e-4&&(d=1),g<1e-4&&(g=d),m<1e-4&&(m=d),Da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,d,m),Ia.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,d,m),Na.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,d,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ia.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Na.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Da.calc(l),Ia.calc(l),Na.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wu(a,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function Ix(a,e){const t=1-a;return t*t*e}function Nx(a,e){return 2*(1-a)*a*e}function Ox(a,e){return a*a*e}function gs(a,e,t,n){return Ix(a,e)+Nx(a,t)+Ox(a,n)}function Fx(a,e){const t=1-a;return t*t*t*e}function zx(a,e){const t=1-a;return 3*t*t*a*e}function Ux(a,e){return 3*(1-a)*a*a*e}function kx(a,e){return a*a*a*e}function _s(a,e,t,n,i){return Fx(a,e)+zx(a,t)+Ux(a,n)+kx(a,i)}class Jh extends In{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(_s(e,i.x,r.x,s.x,o.x),_s(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bx extends In{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(_s(e,i.x,r.x,s.x,o.x),_s(e,i.y,r.y,s.y,o.y),_s(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zl extends In{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new le;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vx extends In{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $h extends In{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(gs(e,i.x,r.x,s.x),gs(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gx extends In{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(gs(e,i.x,r.x,s.x),gs(e,i.y,r.y,s.y),gs(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Wu(o,l.x,c.x,u.x,h.x),Wu(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new le().fromArray(i))}return this}}var ef=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:Dx,CubicBezierCurve:Jh,CubicBezierCurve3:Bx,EllipseCurve:Ol,LineCurve:zl,LineCurve3:Vx,QuadraticBezierCurve:$h,QuadraticBezierCurve3:Gx,SplineCurve:Qh});class Hx extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new zl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ef[i.type]().fromJSON(i))}return this}}class il extends Hx{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zl(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new $h(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const o=new Jh(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,o,l),this}absellipse(e,t,n,i,r,s,o,l){const c=new Ol(e,t,n,i,r,s,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ul extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],o=[],l=[],c=new P,u=new le;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(s[f]/e+1)/2,u.y=(s[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}static fromJSON(e){return new Ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class To extends il{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new il().fromJSON(i))}return this}}const Wx={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=tf(a,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,l,c,u,h,f,p;if(n&&(r=Kx(a,e,r,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let g=t;g<i;g+=t)h=a[g],f=a[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return As(r,s,t,o,l,p,0),s}};function tf(a,e,t,n,i){let r,s;if(i===ov(a,e,t,n)>0)for(r=e;r<t;r+=n)s=Xu(r,a[r],a[r+1],s);else for(r=t-n;r>=e;r-=n)s=Xu(r,a[r],a[r+1],s);return s&&Vo(s,s.next)&&(Ls(s),s=s.next),s}function Ji(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(Vo(t,t.next)||st(t.prev,t,t.next)===0)){if(Ls(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(a,e,t,n,i,r,s){if(!a)return;!s&&r&&ev(a,n,i,r);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,r?qx(a,n,i,r):Xx(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),Ls(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=jx(Ji(a),e,t),As(a,e,t,n,i,r,2)):s===2&&Yx(a,e,t,n,i,r):As(Ji(a),e,t,n,i,r,1);break}}}function Xx(a){const e=a.prev,t=a,n=a.next;if(st(e,t,n)>=0)return!1;const i=e.x,r=t.x,s=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<s?i:s:r<s?r:s,h=o<l?o<c?o:c:l<c?l:c,f=i>r?i>s?i:s:r>s?r:s,p=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&yr(i,o,r,l,s,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qx(a,e,t,n){const i=a.prev,r=a,s=a.next;if(st(i,r,s)>=0)return!1;const o=i.x,l=r.x,c=s.x,u=i.y,h=r.y,f=s.y,p=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,d=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,_=rl(p,g,e,t,n),M=rl(d,m,e,t,n);let x=a.prevZ,v=a.nextZ;for(;x&&x.z>=_&&v&&v.z<=M;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=m&&x!==i&&x!==s&&yr(o,u,l,h,c,f,x.x,x.y)&&st(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=d&&v.y>=g&&v.y<=m&&v!==i&&v!==s&&yr(o,u,l,h,c,f,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=d&&x.y>=g&&x.y<=m&&x!==i&&x!==s&&yr(o,u,l,h,c,f,x.x,x.y)&&st(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=d&&v.y>=g&&v.y<=m&&v!==i&&v!==s&&yr(o,u,l,h,c,f,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jx(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!Vo(i,r)&&nf(i,n,n.next,r)&&Cs(i,r)&&Cs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ls(n),Ls(n.next),n=a=r),n=n.next}while(n!==a);return Ji(n)}function Yx(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&iv(s,o)){let l=rf(s,o);s=Ji(s,s.next),l=Ji(l,l.next),As(s,e,t,n,i,r,0),As(l,e,t,n,i,r,0);return}o=o.next}s=s.next}while(s!==a)}function Kx(a,e,t,n){const i=[];let r,s,o,l,c;for(r=0,s=e.length;r<s;r++)o=e[r]*n,l=r<s-1?e[r+1]*n:a.length,c=tf(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(nv(c));for(i.sort(Zx),r=0;r<i.length;r++)t=Jx(i[r],t);return t}function Zx(a,e){return a.x-e.x}function Jx(a,e){const t=$x(a,e);if(!t)return e;const n=rf(t,a);return Ji(n,n.next),Ji(t,t.next)}function $x(a,e){let t=e,n=-1/0,i;const r=a.x,s=a.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&yr(s<c?r:n,s,l,c,s<c?n:r,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(r-t.x),Cs(t,a)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Qx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function Qx(a,e){return st(a.prev,a,e.prev)<0&&st(e.next,a,a.next)<0}function ev(a,e,t,n){let i=a;do i.z===0&&(i.z=rl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,tv(i)}function tv(a){let e,t,n,i,r,s,o,l,c=1;do{for(t=a,a=null,r=null,s=0;t;){for(s++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return a}function rl(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function nv(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function yr(a,e,t,n,i,r,s,o){return(i-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(i-s)*(n-o)}function iv(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!rv(a,e)&&(Cs(a,e)&&Cs(e,a)&&sv(a,e)&&(st(a.prev,a,e.prev)||st(a,e.prev,e))||Vo(a,e)&&st(a.prev,a,a.next)>0&&st(e.prev,e,e.next)>0)}function st(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Vo(a,e){return a.x===e.x&&a.y===e.y}function nf(a,e,t,n){const i=xo(st(a,e,t)),r=xo(st(a,e,n)),s=xo(st(t,n,a)),o=xo(st(t,n,e));return!!(i!==r&&s!==o||i===0&&_o(a,t,e)||r===0&&_o(a,n,e)||s===0&&_o(t,a,n)||o===0&&_o(t,e,n))}function _o(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function xo(a){return a>0?1:a<0?-1:0}function rv(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&nf(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Cs(a,e){return st(a.prev,a,a.next)<0?st(a,e,a.next)>=0&&st(a,a.prev,e)>=0:st(a,e,a.prev)<0||st(a,a.next,e)<0}function sv(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function rf(a,e){const t=new sl(a.i,a.x,a.y),n=new sl(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xu(a,e,t,n){const i=new sl(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ls(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function sl(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ov(a,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}class Tr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Tr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];qu(e),ju(n,e);let s=e.length;t.forEach(qu);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,ju(n,t[l]);const o=Wx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function qu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function ju(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class kl extends Lt{constructor(e=new To([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new at(i,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:av;let x,v=!1,b,T,C,y;_&&(x=_.getSpacedPoints(u),v=!0,f=!1,b=_.computeFrenetFrames(u,!1),T=new P,C=new P,y=new P),f||(m=0,p=0,g=0,d=0);const w=o.extractPoints(c);let L=w.shape;const N=w.holes;if(!Tr.isClockWise(L)){L=L.reverse();for(let J=0,Z=N.length;J<Z;J++){const oe=N[J];Tr.isClockWise(oe)&&(N[J]=oe.reverse())}}const I=Tr.triangulateShape(L,N),R=L;for(let J=0,Z=N.length;J<Z;J++){const oe=N[J];L=L.concat(oe)}function F(J,Z,oe){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(oe).add(J)}const G=L.length,K=I.length;function B(J,Z,oe){let me,ce,Le;const be=J.x-Z.x,Me=J.y-Z.y,et=oe.x-J.x,Ye=oe.y-J.y,A=be*be+Me*Me,S=be*Ye-Me*et;if(Math.abs(S)>Number.EPSILON){const V=Math.sqrt(A),ne=Math.sqrt(et*et+Ye*Ye),ie=Z.x-Me/V,he=Z.y+be/V,Ee=oe.x-Ye/ne,fe=oe.y+et/ne,Y=((Ee-ie)*Ye-(fe-he)*et)/(be*Ye-Me*et);me=ie+be*Y-J.x,ce=he+Me*Y-J.y;const xe=me*me+ce*ce;if(xe<=2)return new le(me,ce);Le=Math.sqrt(xe/2)}else{let V=!1;be>Number.EPSILON?et>Number.EPSILON&&(V=!0):be<-Number.EPSILON?et<-Number.EPSILON&&(V=!0):Math.sign(Me)===Math.sign(Ye)&&(V=!0),V?(me=-Me,ce=be,Le=Math.sqrt(A)):(me=be,ce=Me,Le=Math.sqrt(A/2))}return new le(me/Le,ce/Le)}const Q=[];for(let J=0,Z=R.length,oe=Z-1,me=J+1;J<Z;J++,oe++,me++)oe===Z&&(oe=0),me===Z&&(me=0),Q[J]=B(R[J],R[oe],R[me]);const $=[];let k,U=Q.concat();for(let J=0,Z=N.length;J<Z;J++){const oe=N[J];k=[];for(let me=0,ce=oe.length,Le=ce-1,be=me+1;me<ce;me++,Le++,be++)Le===ce&&(Le=0),be===ce&&(be=0),k[me]=B(oe[me],oe[Le],oe[be]);$.push(k),U=U.concat(k)}for(let J=0;J<m;J++){const Z=J/m,oe=p*Math.cos(Z*Math.PI/2),me=g*Math.sin(Z*Math.PI/2)+d;for(let ce=0,Le=R.length;ce<Le;ce++){const be=F(R[ce],Q[ce],me);Ce(be.x,be.y,-oe)}for(let ce=0,Le=N.length;ce<Le;ce++){const be=N[ce];k=$[ce];for(let Me=0,et=be.length;Me<et;Me++){const Ye=F(be[Me],k[Me],me);Ce(Ye.x,Ye.y,-oe)}}}const re=g+d;for(let J=0;J<G;J++){const Z=f?F(L[J],U[J],re):L[J];v?(C.copy(b.normals[0]).multiplyScalar(Z.x),T.copy(b.binormals[0]).multiplyScalar(Z.y),y.copy(x[0]).add(C).add(T),Ce(y.x,y.y,y.z)):Ce(Z.x,Z.y,0)}for(let J=1;J<=u;J++)for(let Z=0;Z<G;Z++){const oe=f?F(L[Z],U[Z],re):L[Z];v?(C.copy(b.normals[J]).multiplyScalar(oe.x),T.copy(b.binormals[J]).multiplyScalar(oe.y),y.copy(x[J]).add(C).add(T),Ce(y.x,y.y,y.z)):Ce(oe.x,oe.y,h/u*J)}for(let J=m-1;J>=0;J--){const Z=J/m,oe=p*Math.cos(Z*Math.PI/2),me=g*Math.sin(Z*Math.PI/2)+d;for(let ce=0,Le=R.length;ce<Le;ce++){const be=F(R[ce],Q[ce],me);Ce(be.x,be.y,h+oe)}for(let ce=0,Le=N.length;ce<Le;ce++){const be=N[ce];k=$[ce];for(let Me=0,et=be.length;Me<et;Me++){const Ye=F(be[Me],k[Me],me);v?Ce(Ye.x,Ye.y+x[u-1].y,x[u-1].x+oe):Ce(Ye.x,Ye.y,h+oe)}}}ee(),se();function ee(){const J=i.length/3;if(f){let Z=0,oe=G*Z;for(let me=0;me<K;me++){const ce=I[me];pe(ce[2]+oe,ce[1]+oe,ce[0]+oe)}Z=u+m*2,oe=G*Z;for(let me=0;me<K;me++){const ce=I[me];pe(ce[0]+oe,ce[1]+oe,ce[2]+oe)}}else{for(let Z=0;Z<K;Z++){const oe=I[Z];pe(oe[2],oe[1],oe[0])}for(let Z=0;Z<K;Z++){const oe=I[Z];pe(oe[0]+G*u,oe[1]+G*u,oe[2]+G*u)}}n.addGroup(J,i.length/3-J,0)}function se(){const J=i.length/3;let Z=0;X(R,Z),Z+=R.length;for(let oe=0,me=N.length;oe<me;oe++){const ce=N[oe];X(ce,Z),Z+=ce.length}n.addGroup(J,i.length/3-J,1)}function X(J,Z){let oe=J.length;for(;--oe>=0;){const me=oe;let ce=oe-1;ce<0&&(ce=J.length-1);for(let Le=0,be=u+m*2;Le<be;Le++){const Me=G*Le,et=G*(Le+1),Ye=Z+me+Me,A=Z+ce+Me,S=Z+ce+et,V=Z+me+et;Te(Ye,A,S,V)}}}function Ce(J,Z,oe){l.push(J),l.push(Z),l.push(oe)}function pe(J,Z,oe){ue(J),ue(Z),ue(oe);const me=i.length/3,ce=M.generateTopUV(n,i,me-3,me-2,me-1);De(ce[0]),De(ce[1]),De(ce[2])}function Te(J,Z,oe,me){ue(J),ue(Z),ue(me),ue(Z),ue(oe),ue(me);const ce=i.length/3,Le=M.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);De(Le[0]),De(Le[1]),De(Le[3]),De(Le[1]),De(Le[2]),De(Le[3])}function ue(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function De(J){r.push(J.x),r.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ef[i.type]().fromJSON(i)),new kl(n,e.options)}}const av={generateTopUV:function(a,e,t,n,i){const r=e[t*3],s=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new le(r,s),new le(o,l),new le(c,u)]},generateSideWallUV:function(a,e,t,n,i,r){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],d=e[r*3],m=e[r*3+1],_=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new le(s,1-l),new le(c,1-h),new le(f,1-g),new le(d,1-_)]:[new le(o,1-l),new le(u,1-h),new le(p,1-g),new le(m,1-_)]}};function lv(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const r=a[n];t.shapes.push(r.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bl extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new P,f=new P,p=[],g=[],d=[],m=[];for(let _=0;_<=n;_++){const M=[],x=_/n;let v=0;_==0&&s==0?v=.5/t:_==n&&l==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const T=b/t;h.x=-e*Math.cos(i+T*r)*Math.sin(s+x*o),h.y=e*Math.cos(s+x*o),h.z=e*Math.sin(i+T*r)*Math.sin(s+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),m.push(T+v,1-x),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const x=u[_][M+1],v=u[_][M],b=u[_+1][M],T=u[_+1][M+1];(_!==0||s>0)&&p.push(x,v,T),(_!==n-1||l<Math.PI)&&p.push(v,b,T)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(m,2))}static fromJSON(e){return new Bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class er extends Go{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mi extends wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ni(a,e,t){return sf(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function vo(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function sf(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function cv(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yu(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function of(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class Hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class uv extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case jc:r=e,o=2*t-n;break;case Yc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:s=e,l=2*n-t;break;case Yc:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-f*m+2*f*d-f*g,M=(1+f)*m+(-1.5-2*f)*d+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,v=p*m-p*d;for(let b=0;b!==o;++b)r[b]=_*s[u+b]+M*s[c+b]+x*s[l+b]+v*s[h+b];return r}}class hv extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class fv extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ni(n,r,s),this.values=ni(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&sf(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ni(this.times),t=ni(this.values),n=this.getValueSize(),i=this.getInterpolation()===sa,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const d=t[h+g];if(d!==t[f+g]||d!==t[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=ni(e,0,s),this.values=ni(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ni(this.times,0),t=ni(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Nr;class Yr extends Nn{}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=bs;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends Nn{}af.prototype.ValueTypeName="color";class Ps extends Nn{}Ps.prototype.ValueTypeName="number";class dv extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Mi.slerpFlat(r,0,s,c-o,s,c,l);return r}}class $i extends Nn{InterpolantFactoryMethodLinear(e){return new dv(this.times,this.values,this.getValueSize(),e)}}$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=Nr;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Nn{}Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=bs;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Nn{}Rs.prototype.ValueTypeName="vector";class pv{constructor(e,t=-1,n,i=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(gv(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=cv(l);l=Yu(l,1,u),c=Yu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,d){if(p.length!==0){const m=[],_=[];of(p,m,_,g),m.length!==0&&d.push(new h(f,m,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let d=0;d<f[g].morphTargets.length;d++)p[f[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new Ps(".morphTargetInfluence["+d+"]",m,_))}l=p.length*s}else{const p=".bones["+t[h].name+"]";n(Rs,p+".position",f,"pos",i),n($i,p+".quaternion",f,"rot",i),n(Rs,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return af;case"quaternion":return $i;case"bool":case"boolean":return Yr;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function gv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mv(a.type);if(a.times===void 0){const t=[],n=[];of(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Fr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class _v{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const xv=new _v;class Zr{constructor(e){this.manager=e!==void 0?e:xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Gn={};class vv extends Error{constructor(e,t){super(e),this.response=t}}class Vl extends Zr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Fr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{d+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let T=0,C=u.length;T<C;T++){const y=u[T];y.onProgress&&y.onProgress(b)}_.enqueue(v),M()}})}}});return new Response(m)}else throw new vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Fr.add(e,c);const u=Gn[e];delete Gn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yv extends Zr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Fr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Ts("img");function l(){u(),Fr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Mv extends Zr{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,s=new yv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ho extends je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Oa=new Ne,Ku=new P,Zu=new P;class Gl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bv extends Gl{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sv extends Ho{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(je.DefaultUp),this.updateMatrix(),this.target=new je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new bv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ju=new Ne,os=new P,Fa=new P;class wv extends Gl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}}class lf extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tv extends Gl{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bi extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DefaultUp),this.updateMatrix(),this.target=new je,this.shadow=new Tv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ev extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Av extends Zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Fr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Fr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Hl="\\[\\]\\.:\\/",Cv=new RegExp("["+Hl+"]","g"),Wl="[^"+Hl+"]",Lv="[^"+Hl.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Wl),Rv=/(WCOD+)?/.source.replace("WCOD",Lv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),Nv=new RegExp("^"+Pv+Rv+Dv+Iv+"$"),Ov=["material","materials","bones","map"];class Fv{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(e){const t=Nv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=Fv;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zv extends Nl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ae(n),i=new Ae(i);const r=t/2,s=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const d=f===r?n:i;d.toArray(c,p),p+=3,d.toArray(c,p),p+=3,d.toArray(c,p),p+=3,d.toArray(c,p),p+=3}const u=new Lt;u.setAttribute("position",new at(l,3)),u.setAttribute("color",new at(c,3));const h=new Gs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const $u=new P,yo=new P,Qu=new P;class tr extends je{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Lt;i.setAttribute("position",new at([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Gs({fog:!1,toneMapped:!1});this.lightPlane=new Es(i,r),this.add(this.lightPlane),i=new Lt,i.setAttribute("position",new at([0,0,0,0,0,1],3)),this.targetLine=new Es(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),$u.setFromMatrixPosition(this.light.matrixWorld),yo.setFromMatrixPosition(this.light.target.matrixWorld),Qu.subVectors(yo,$u),this.lightPlane.lookAt(yo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(yo),this.targetLine.scale.z=Qu.length()}}class Uv extends Nl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Lt;i.setAttribute("position",new at(t,3)),i.setAttribute("color",new at(n,3));const r=new Gs({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ae,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kv{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new il,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const M=[];for(let x=0,v=_.length;x<v;x++){const b=_[x],T=new To;T.curves=b.curves,M.push(T)}return M}function n(_,M){const x=M.length;let v=!1;for(let b=x-1,T=0;T<x;b=T++){let C=M[b],y=M[T],w=y.x-C.x,L=y.y-C.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(C=M[T],w=-w,y=M[b],L=-L),_.y<C.y||_.y>y.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const N=L*(_.x-C.x)-w*(_.y-C.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(_.y!==C.y)continue;if(y.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=y.x)return!0}}return v}const i=Tr.isClockWise,r=this.subPaths;if(r.length===0)return[];let s,o,l;const c=[];if(r.length===1)return o=r[0],l=new To,l.curves=o.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,d;f[g]=void 0,p[g]=[];for(let _=0,M=r.length;_<M;_++)o=r[_],d=o.getPoints(),s=i(d),s=e?!s:s,s?(!u&&f[g]&&g++,f[g]={s:new To,p:d},f[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:d[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,M=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const b=p[x];for(let T=0;T<b.length;T++){const C=b[T];let y=!0;for(let w=0;w<f.length;w++)n(C.p,f[w].p)&&(x!==w&&M++,y?(y=!1,h[w].push(C)):_=!0);y&&h[x].push(C)}}M>0&&_===!1&&(p=h)}let m;for(let _=0,M=f.length;_<M;_++){l=f[_].s,c.push(l),m=p[_];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);function Hn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function cf(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},Xl,It,pt,mn=1e8,$e=1/mn,ol=Math.PI*2,Bv=ol/4,Vv=0,uf=Math.sqrt,Gv=Math.cos,Hv=Math.sin,Tt=function(e){return typeof e=="string"},ct=function(e){return typeof e=="function"},Zn=function(e){return typeof e=="number"},ql=function(e){return typeof e>"u"},Pn=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},hf=function(){return typeof window<"u"},Mo=function(e){return ct(e)||Tt(e)},ff=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,al=/(?:-?\.?\d|\.)+/gi,df=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,za=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pf=/[+-]=-?[.\d]+/,mf=/[^,'"\[\]\s]+/gi,Wv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,rt,hn,ll,jl,tn={},Ro={},gf,_f=function(e){return(Ro=Qi(e,tn))&&nn},Yl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Do=function(e,t){return!t&&console.warn(e)},xf=function(e,t){return e&&(tn[e]=t)&&Ro&&(Ro[e]=t)||tn},Ds=function(){return 0},Xv={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},qv={suppressEvents:!0},Kl={},hi=[],cl={},vf,Zt={},Ua={},eh=30,Ao=[],Zl="",Jl=function(e){var t=e[0],n,i;if(Pn(t)||ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ao.length;i--&&!Ao[i].targetTest(t););n=Ao[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vf(e[i],n)))||e.splice(i,1);return e},Hi=function(e){return e._gsap||Jl(gn(e))[0]._gsap},yf=function(e,t,n){return(n=e[t])&&ct(n)?e[t]():ql(n)&&e.getAttribute&&e.getAttribute(t)||n},Wt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Er=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Io=function(){var e=hi.length,t=hi.slice(0),n,i;for(cl={},hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Mf=function(e,t,n,i){hi.length&&!It&&Io(),e.render(t,n,It&&t<0&&(e._initted||e._startAt)),hi.length&&!It&&Io()},bf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mf).length<2?t:Tt(e)?e.trim():e},Sf=function(e){return e},yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Qi=function(e,t){for(var n in t)e[n]=t[n];return e},th=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},No=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xs=function(e){var t=e.parent||rt,n=e.keyframes?Yv(Nt(e.keyframes)):yn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Kv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wf=function(e,t,n,i,r){var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Wo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Wi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Zv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ul=function(e,t,n,i){return e._startAt&&(It?e._startAt.revert(Eo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Jv=function a(e){return!e||e._ts&&a(e.parent)},nh=function(e){return e._repeat?Ur(e._tTime,e=e.duration()+e._rDelay)*e:0},Ur=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Oo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xo=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},qo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xo(e),n._dirty||Wi(n,e)),e},Tf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Oo(e.rawTime(),t),(!t._dur||Ws(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),Wi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},Cn=function(e,t,n,i){return t.parent&&gi(t),t._start=At((Zn(n)?n:n||e!==rt?un(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wf(e,t,"_first","_last",e._sort?"_start":0),hl(t)||(e._recent=t),i||Tf(e,t),e._ts<0&&qo(e,e._tTime),e},Ef=function(e,t){return(tn.ScrollTrigger||Yl("scrollTrigger",t))&&tn.ScrollTrigger.create(t,e)},Af=function(e,t,n,i,r){if(Ql(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vf!==Jt.frame)return hi.push(e),e._lazy=[r,i],1},$v=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},hl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Qv=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&$v(e)&&!(!e._initted&&hl(e))||(e._ts<0||e._dp._ts<0)&&!hl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ws(0,e._tDur,t),u=Ur(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ur(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||It||i||e._zTime===$e||!t&&e._zTime){if(!e._initted&&Af(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&ul(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&gi(e,1),!n&&!It&&(_n(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ey=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},kr=function(e,t,n,i){var r=e._repeat,s=At(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:At(s*(r+1)+e._rDelay*r):s,o>0&&!i&&qo(e,e._tTime=e._tDur*o),e.parent&&Xo(e),n||Wi(e.parent,e),e},ih=function(e){return e instanceof Gt?Wi(e):kr(e,e._dur)},ty={_start:0,endTime:Ds,totalDuration:Ds},un=function a(e,t,n){var i=e.labels,r=e._recent||ty,s=e.duration()>=mn?r.endTime(!1):e._dur,o,l,c;return Tt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Nt(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},vs=function(e,t,n){var i=Zn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;s.immediateRender=Ht(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new gt(t[0],s,t[r+1])},Si=function(e,t){return e||e===0?t(e):t},Ws=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!Tt(e)||!(t=Wv.exec(e))?"":t[1]},ny=function(e,t,n){return Si(n,function(i){return Ws(e,t,i)})},fl=[].slice,Cf=function(e,t){return e&&Pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pn(e[0]))&&!e.nodeType&&e!==hn},iy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Tt(i)&&!t||Cf(i,1)?(r=n).push.apply(r,gn(i)):n.push(i)})||n},gn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Tt(e)&&!n&&(ll||!Br())?fl.call((t||jl).querySelectorAll(e),0):Nt(e)?iy(e,n):Cf(e)?fl.call(e,0):e?[e]:[]},dl=function(e){return e=gn(e)[0]||Do("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gn(t,n.querySelectorAll?n:n===e?Do("Invalid scope")||jl.createElement("div"):e)}},Lf=function(e){return e.sort(function(){return .5-Math.random()})},Pf=function(e){if(ct(e))return e;var t=Pn(e)?e:{each:e},n=Xi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Tt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=s[d],_,M,x,v,b,T,C,y,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,mn])[1],!w){for(C=-mn;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=s[d]=[],_=l?Math.min(w,d)*u-.5:i%w,M=w===mn?0:l?d*h/w-.5:i/w|0,C=0,y=mn,T=0;T<d;T++)x=T%w-_,v=M-(T/w|0),m[T]=b=c?Math.abs(c==="y"?v:x):uf(x*x+v*v),b>C&&(C=b),b<y&&(y=b);i==="random"&&Lf(m),m.max=C-y,m.min=y,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),m.b=d<0?r-d:r,m.u=Dt(t.amount||t.each)||0,n=n&&d<0?Uf(n):n}return d=(m[f]-m.min)/m.max||0,At(m.b+(n?n(d):d)*m.v)+m.u}},pl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=At(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Zn(n)?0:Dt(n))}},Rf=function(e,t){var n=Nt(e),i,r;return!n&&Pn(e)&&(i=n=e.radius||mn,e.values?(e=gn(e.values),(r=!Zn(e[0]))&&(i*=i)):e=pl(e.increment)),Si(t,n?ct(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=mn,u=0,h=e.length,f,p;h--;)r?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Zn(s)?u:u+Dt(s)}:pl(e))},Df=function(e,t,n,i){return Si(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ry=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},sy=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},oy=function(e,t,n){return Nf(e,t,0,1,n)},If=function(e,t,n){return Si(n,function(i){return e[~~t(i)]})},ay=function a(e,t,n){var i=t-e;return Nt(e)?If(e,a(0,e.length),t):Si(n,function(r){return(i+(r-e)%i)%i+e})},ly=function a(e,t,n){var i=t-e,r=i*2;return Nt(e)?If(e,a(0,e.length-1),t):Si(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Is=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?mf:al),n+=e.substr(t,i-t)+Df(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Nf=function(e,t,n,i,r){var s=t-e,o=i-n;return Si(r,function(l){return n+((l-e)/s*o||0)})},cy=function a(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var s=Tt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Qi(Nt(e)?[]:{},e));if(!u){for(l in t)$l.call(o,e,l,"get",t[l]);r=function(g){return nc(g,o)||(s?e.p:e)}}}return Si(n,r)},rh=function(e,t,n){var i=e.labels,r=mn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},_n=function(e,t,n){var i=e.vars,r=i[t],s=pt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&hi.length&&Io(),o&&(pt=o),u=l?r.apply(c,l):r.call(c),pt=s,u},fs=function(e){return gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&_n(e,"onInterrupt"),e},br,uy=function(e){e=!e.name&&e.default||e;var t=e.name,n=ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ds,render:nc,add:$l,kill:Ey,modifier:Ty,rawVars:0},s={targetTest:0,get:0,getSetter:tc,aliases:{},register:0};if(Br(),e!==i){if(Zt[t])return;yn(i,yn(No(e,r),s)),Qi(i.prototype,Qi(r,No(e,s))),Zt[i.prop=t]=i,e.targetTest&&(Ao.push(i),Kl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xf(t,i),e.register&&e.register(nn,i,Xt)},Ze=255,ds={aqua:[0,Ze,Ze],lime:[0,Ze,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ze],navy:[0,0,128],white:[Ze,Ze,Ze],olive:[128,128,0],yellow:[Ze,Ze,0],orange:[Ze,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ze,0,0],pink:[Ze,192,203],cyan:[0,Ze,Ze],transparent:[Ze,Ze,Ze,0]},ka=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ze+.5|0},Of=function(e,t,n){var i=e?Zn(e)?[e>>16,e>>8&Ze,e&Ze]:0:ds.black,r,s,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ds[e])i=ds[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ze,i&Ze,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ze,e&Ze]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(al),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ka(l+1/3,r,s),i[1]=ka(l,r,s),i[2]=ka(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(df),n&&i.length<4&&(i[3]=1),i}else i=e.match(al)||ds.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ze,s=i[1]/Ze,o=i[2]/Ze,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(s-o)/p+(s<o?6:0):h===s?(o-r)/p+2:(r-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ff=function(e){var t=[],n=[],i=-1;return e.split(fi).forEach(function(r){var s=r.match(Mr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},sh=function(e,t,n){var i="",r=(e+i).match(fi),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Of(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ff(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fi,"1").split(Mr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(fi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},fi=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ds)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),hy=/hsl[a]?\(/,zf=function(e){var t=e.join(" "),n;if(fi.lastIndex=0,fi.test(t))return n=hy.test(t),e[1]=sh(e[1],n),e[0]=sh(e[0],n,Ff(e[1])),!0},Ns,Jt=(function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,p,g=function d(m){var _=a()-i,M=m===!0,x,v,b,T;if(_>e&&(n+=_-t),i+=_,b=i-n,x=b-s,(x>0||M)&&(T=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,s+=x+(x>=r?4:r-x),v=1),M||(l=c(d)),v)for(p=0;p<o.length;p++)o[p](b,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gf&&(!ll&&hf()&&(hn=ll=window,jl=hn.document||{},tn.gsap=nn,(hn.gsapVersions||(hn.gsapVersions=[])).push(nn.version),_f(Ro||hn.GreenSockGlobals||!hn.gsap&&hn||{}),u=hn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Ns=1,g(2))},sleep:function(){(u?hn.cancelAnimationFrame:clearTimeout)(l),Ns=0,c=Ds},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,M){var x=_?function(v,b,T,C){m(v,b,T,C),h.remove(x)}:m;return h.remove(m),o[M?"unshift":"push"](x),Br(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h})(),Br=function(){return!Ns&&Jt.wake()},Fe={},fy=/^[\d.\-M][\d.\-,\s]/,dy=/["']/g,py=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(dy,"").trim():+c,i=l.substr(o+1).trim();return t},my=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gy=function(e){var t=(e+"").split("("),n=Fe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[py(t[1])]:my(e).split(",").map(bf)):Fe._CE&&fy.test(e)?Fe._CE("",e):n},Uf=function(e){return function(t){return 1-e(1-t)}},kf=function a(e,t){for(var n=e._first,i;n;)n instanceof Gt?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Xi=function(e,t){return e&&(ct(e)?e:Fe[e]||gy(e))||t},nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Wt(e,function(o){Fe[o]=tn[o]=r,Fe[s=o.toLowerCase()]=n;for(var l in r)Fe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Fe[o+"."+l]=r[l]}),r},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ba=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/ol*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hv((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Bf(o);return r=ol/r,l.config=function(c,u){return a(e,c,u)},l},Va=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Bf(n);return i.config=function(r){return a(e,r)},i};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;nr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;nr("Elastic",Ba("in"),Ba("out"),Ba());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};nr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);nr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});nr("Circ",function(a){return-(uf(1-a*a)-1)});nr("Sine",function(a){return a===1?1:-Gv(a*Bv)+1});nr("Back",Va("in"),Va("out"),Va());Fe.SteppedEase=Fe.steps=tn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-$e;return function(o){return((i*Ws(0,s,o)|0)+r)*n}}};zr.ease=Fe["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Zl+=a+","+a+"Params,"});var Vf=function(e,t){this.id=Vv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yf,this.set=t?t.getSetter:tc},Vr=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,kr(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Ns||Jt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Br(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(qo(this,n),!r._dp||r.parent||Tf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ur(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Oo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(Ws(-this._delay,this._tDur,i),!0),Xo(this),Zv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=qv);var i=It;return It=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ih(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ih(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),Ht(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ht(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-$e)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=ct(n)?n:Sf,o=function(){var c=i.then;i.then=null,ct(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){fs(this)},a})();yn(Vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Gt=(function(a){cf(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ht(n.sortChildren),rt&&Cn(n.parent||rt,Hn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ef(Hn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return vs(0,arguments,this),this},t.from=function(i,r,s){return vs(1,arguments,this),this},t.fromTo=function(i,r,s,o){return vs(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,xs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new gt(i,r,un(this,s),1),this},t.call=function(i,r,s){return Cn(this,gt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new gt(i,s,un(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,xs(s).immediateRender=Ht(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,xs(o).immediateRender=Ht(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,_,M,x,v,b,T,C;if(this!==rt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,x=this._ts,_=!x,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=At(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),b=Ur(this._tTime,m),!o&&this._tTime&&b!==d&&(b=d),T&&d&1&&(f=c-f,C=1),d!==b&&!this._lock){var y=T&&b&1,w=y===(T&&d&1);if(d<b&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(C?0:At(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;kf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ey(this,At(o),At(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&(_n(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,s),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-$e);break}}p=g}else{p=this._last;for(var L=i<0?i:f;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,r,s||It&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-$e:$e);break}}p=g}}if(M&&!r&&(this.pause(),M.render(f>=o?0:-$e)._zTime=f>=o?1:-1,this._ts))return this._start=v,Xo(this),this.render(i,r,s);this._onUpdate&&!r&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(_n(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Zn(r)||(r=un(this,r,i)),!(i instanceof Vr)){if(Nt(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Tt(i))return this.addLabel(i,r);if(ct(i))i=gt.delayedCall(0,i);else return this}return this!==i?Cn(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof gt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Tt(i)?this.removeLabel(i):ct(i)?this.killTweensOf(i):(Wo(this,i),i===this._recent&&(this._recent=this._last),Wi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=un(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=gt.delayedCall(0,r||Ds,s);return o.data="isPause",this._hasPause=1,Cn(this,o,un(this,i))},t.removePause=function(i){var r=this._first;for(i=un(this,i);r;)r._start===i&&r.data==="isPause"&&gi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)ai!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=gn(i),l=this._first,c=Zn(r),u;l;)l instanceof gt?jv(l._targets,o)&&(c?(!ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=un(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=gt.to(s,yn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||$e,onStart:function(){if(s.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&kr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,yn({startAt:{time:un(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rh(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rh(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Wi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wi(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=mn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Cn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;kr(s,s===rt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(rt._ts&&(Mf(rt,Oo(i,rt)),vf=Jt.frame),Jt.frame>=eh){eh+=en.autoSleep||120;var r=rt._first;if((!r||!r._ts)&&en.autoSleep&&Jt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jt.sleep()}}},e})(Vr);yn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var _y=function(e,t,n,i,r,s,o){var l=new Xt(this._pt,e,t,0,1,jf,null,r),c=0,u=0,h,f,p,g,d,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Is(i)),s&&(M=[n,i],s(M,e,t),n=M[0],i=M[1]),f=n.match(za)||[];h=za.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Er(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=za.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(pf.test(i)||_)&&(l.e=0),this._pt=l,l},$l=function(e,t,n,i,r,s,o,l,c,u){ct(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:ct(h)?c?e[t.indexOf("set")||!ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=ct(h)?c?by:Xf:ec,g;if(Tt(i)&&(~i.indexOf("random(")&&(i=Is(i)),i.charAt(1)==="="&&(g=Er(f,i)+(Dt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ml)return!isNaN(f*i)&&i!==""?(g=new Xt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?wy:qf,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Yl(t,i),_y.call(this,e,t,f,i,p,l||en.stringFilter,c))},xy=function(e,t,n,i,r){if(ct(e)&&(e=ys(e,r,t,n,i)),!Pn(e)||e.style&&e.nodeType||Nt(e)||ff(e))return Tt(e)?ys(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=ys(e[o],r,t,n,i);return s},Gf=function(e,t,n,i,r,s){var o,l,c,u;if(Zt[e]&&(o=new Zt[e]).init(r,o.rawVars?t[e]:xy(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Xt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==br))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ai,ml,Ql=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,M=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:M,b=e._overwrite==="auto"&&!Xl,T=e.timeline,C,y,w,L,N,j,I,R,F,G,K,B,Q;if(T&&(!g||!r)&&(r="none"),e._ease=Xi(r,zr.ease),e._yEase=p?Uf(Xi(p===!0?r:p,zr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(R=M[0]?Hi(M[0]).harness:0,B=R&&i[R.prop],C=No(i,Kl),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&m?Eo:Xv),_._lazy=0),s){if(gi(e._startAt=gt.set(M,yn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!d)&&e._startAt.revert(Eo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(o=!1),w=yn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ht(l),immediateRender:o,stagger:0,parent:x},C),B&&(w[R.prop]=B),gi(e._startAt=gt.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(Eo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ht(l)||l&&!m,y=0;y<M.length;y++){if(N=M[y],I=N._gsap||Jl(M)[y]._gsap,e._ptLookup[y]=G={},cl[I.id]&&hi.length&&Io(),K=v===M?y:v.indexOf(N),R&&(F=new R).init(N,B||C,e,K,v)!==!1&&(e._pt=L=new Xt(e._pt,N,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function($){G[$]=L}),F.priority&&(j=1)),!R||B)for(w in C)Zt[w]&&(F=Gf(w,C,e,K,N,v))?F.priority&&(j=1):G[w]=L=$l.call(e,N,w,"get",C[w],K,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(N,e._op[y]),b&&e._pt&&(ai=e,rt.killTweensOf(N,G,e.globalTime(t)),Q=!e.parent,ai=0),e._pt&&l&&(cl[I.id]=1)}j&&Yf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&T.render(mn,!0,!0)},vy=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return ml=1,e.vars[t]="+=0",Ql(e,o),ml=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=ut(n)+Dt(u.e)),u.b&&(u.b=c.s+Dt(u.b))},yy=function(e,t){var n=e[0]?Hi(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=Qi({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},My=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(Nt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},ys=function(e,t,n,i,r){return ct(e)?e.call(t,n,i,r):Tt(e)&&~e.indexOf("random(")?Is(e):e},Hf=Zl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wf={};Wt(Hf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Wf[a]=1});var gt=(function(a){cf(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:xs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||rt,x=(Nt(n)||ff(n)?Zn(n[0]):"length"in i)?[n]:gn(n),v,b,T,C,y,w,L,N;if(o._targets=x.length?Jl(x):Do("GSAP target "+n+" not found. https://greensock.com",!en.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Mo(c)||Mo(u)){if(i=o.vars,v=o.timeline=new Gt({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:x}),v.kill(),v.parent=v._dp=Hn(o),v._start=0,f||Mo(c)||Mo(u)){if(C=x.length,L=f&&Pf(f),Pn(f))for(y in f)~Hf.indexOf(y)&&(N||(N={}),N[y]=f[y]);for(b=0;b<C;b++)T=No(i,Wf),T.stagger=0,_&&(T.yoyoEase=_),N&&Qi(T,N),w=x[b],T.duration=+ys(c,Hn(o),b,w,x),T.delay=(+ys(u,Hn(o),b,w,x)||0)-o._delay,!f&&C===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),v.to(w,T,L?L(b,w,x):0),v._ease=Fe.none;v.duration()?c=u=0:o.timeline=0}else if(g){xs(yn(v.vars.defaults,{ease:"none"})),v._ease=Xi(g.ease||i.ease||"none");var j=0,I,R,F;if(Nt(g))g.forEach(function(G){return v.to(x,G,">")}),v.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||My(y,g[y],T,g.easeEach);for(y in T)for(I=T[y].sort(function(G,K){return G.t-K.t}),j=0,b=0;b<I.length;b++)R=I[b],F={ease:R.e,duration:(R.t-(b?I[b-1].t:0))/100*c},F[y]=R.v,v.to(x,F,j),j+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!Xl&&(ai=Hn(o),rt.killTweensOf(x),ai=0),Cn(M,Hn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===At(M._time)&&Ht(h)&&Jv(Hn(o))&&M.data!=="nested")&&(o._tTime=-$e,o.render(Math.max(0,-u)||0)),m&&Ef(Hn(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-$e&&!u?l:i<$e?0:i,f,p,g,d,m,_,M,x,v;if(!c)Qv(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,s);if(f=At(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),m=Ur(this._tTime,d),f===o&&!s&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&kf(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(At(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Af(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/c),this._from&&(this.ratio=M=1-M),f&&!o&&!r&&(_n(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!f&&_?-$e:x._dur*x._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ul(this,i,r,s),_n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&_n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ul(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&gi(this,1),!r&&!(u&&!o)&&(h||o||_)&&(_n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Ns||Jt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ql(this,l),c=this._ease(l/this._dur),vy(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(qo(this,0),this.parent||wf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fs(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ai&&ai.vars.overwrite!==!0)._first||fs(this),this.parent&&s!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?gn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!r||r==="all")&&Kv(o,l))return r==="all"&&(this._pt=0),fs(this);for(h=this._op=this._op||[],r!=="all"&&(Tt(r)&&(d={},Wt(r,function(M){return d[M]=1}),r=d),r=yy(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],r==="all"?(h[_]=r,g=f,p={}):(p=h[_]=h[_]||{},g=r);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Wo(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&fs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return vs(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return vs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return rt.killTweensOf(i,r,s)},e})(Vr);yn(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(a){gt[a]=function(){var e=new Gt,t=fl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ec=function(e,t,n){return e[t]=n},Xf=function(e,t,n){return e[t](n)},by=function(e,t,n,i){return e[t](i.fp,n)},Sy=function(e,t,n){return e.setAttribute(t,n)},tc=function(e,t){return ct(e[t])?Xf:ql(e[t])&&e.setAttribute?Sy:ec},qf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ty=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Ey=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ay=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yf=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Xt=(function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||qf,this.d=l||this,this.set=c||ec,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ay,this.m=n,this.mt=r,this.tween=i},a})();Wt(Zl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Kl[a]=1});tn.TweenMax=tn.TweenLite=gt;tn.TimelineLite=tn.TimelineMax=Gt;rt=new Gt({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=zf;var Gr=[],Co={},Cy=[],oh=0,Ga=function(e){return(Co[e]||Cy).map(function(t){return t()})},gl=function(){var e=Date.now(),t=[];e-oh>2&&(Ga("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=hn.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ga("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),oh=e,Ga("matchMedia"))},Kf=(function(){function a(t,n){this.selector=n&&dl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){ct(n)&&(r=i,i=n,n=ct);var s=this,o=function(){var c=pt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=dl(r)),pt=s,h=i.apply(s,arguments),ct(h)&&s._r.push(h),pt=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===ct?o(s):n?s[n]=o:o},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Vr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Gr.indexOf(this);~o&&Gr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},a})(),Ly=(function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){Pn(n)||(n={matches:n});var s=new Kf(0,r||this.scope),o=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=hn.matchMedia(n[c]),l&&(Gr.indexOf(s)<0&&Gr.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(gl):l.addEventListener("change",gl)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a})(),Fo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return uy(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Tt(e)&&(e=gn(e)[0]);var r=Hi(e||{}).get,s=n?Sf:bf;return n==="native"&&(n=""),e&&(t?s((Zt[t]&&Zt[t].get||r)(e,t,n,i)):function(o,l,c){return s((Zt[o]&&Zt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=gn(e),e.length>1){var i=e.map(function(u){return nn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=Zt[t],o=Hi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;br._pt=0,h.init(e,n?u+n:u,br,0,[e]),h.render(1,h),br._pt&&nc(1,br)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=nn.to(e,Qi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xi(e.ease,zr.ease)),th(zr,e||{})},config:function(e){return th(en,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zt[o]&&!tn[o]&&Do(t+" effect requires "+o+" plugin.")}),Ua[t]=function(o,l,c){return n(gn(o),yn(l||{},r),c)},s&&(Gt.prototype[t]=function(o,l,c){return this.add(Ua[t](o,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Fe[e]=Xi(t)},parseEase:function(e,t){return arguments.length?Xi(e,t):Fe},getById:function(e){return rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,r;for(n.smoothChildTiming=Ht(e.smoothChildTiming),rt.remove(n),n._dp=0,n._time=n._tTime=rt._time,i=rt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof gt&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=r;return Cn(rt,n,0),n},context:function(e,t){return e?new Kf(e,t):pt},matchMedia:function(e){return new Ly(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gl()},addEventListener:function(e,t){var n=Co[e]||(Co[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Co[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ay,wrapYoyo:ly,distribute:Pf,random:Df,snap:Rf,normalize:oy,getUnit:Dt,clamp:ny,splitColor:Of,toArray:gn,selector:dl,mapRange:Nf,pipe:ry,unitize:sy,interpolate:cy,shuffle:Lf},install:_f,effects:Ua,ticker:Jt,updateRoot:Gt.updateRoot,plugins:Zt,globalTimeline:rt,core:{PropTween:Xt,globals:xf,Tween:gt,Timeline:Gt,Animation:Vr,getCache:Hi,_removeLinkedListItem:Wo,reverting:function(){return It},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Xl=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Fo[a]=gt[a]});Jt.add(Gt.updateRoot);br=Fo.to({},{duration:0});var Py=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ry=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Py(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Ha=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Tt(r)&&(l={},Wt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ry(o,r)}}}},nn=Fo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)It?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ha("roundProps",pl),Ha("modifiers"),Ha("snap",Rf))||Fo;gt.version=Gt.version=nn.version="3.11.4";gf=1;hf()&&Br();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ah,li,Ar,ic,ki,lh,rc,Dy=function(){return typeof window<"u"},Jn={},Fi=180/Math.PI,Cr=Math.PI/180,_r=Math.atan2,ch=1e8,sc=/([A-Z])/g,Iy=/(left|right|width|margin|padding|x)/i,Ny=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_l=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Oy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uy=function(e,t,n){return e.style[t]=n},ky=function(e,t,n){return e.style.setProperty(t,n)},By=function(e,t,n){return e._gsap[t]=n},Vy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gy=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},Hy=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},ot="transform",Tn=ot+"Origin",Wy=function(e,t){var n=this,i=this.target,r=i.style;if(e in Jn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Wn(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Wn(i,e)),this.props.indexOf(ot)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=ot}(r||t)&&this.props.push(e,t,r[e])},$f=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(sc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=rc(),r&&!r.isStart&&!n[ot]&&($f(n),i.uncache=1)}},Qf=function(e,t){var n={target:e,props:[],revert:Xy,save:Wy};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},ed,xl=function(e,t){var n=li.createElementNS?li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):li.createElement(e);return n.style?n:li.createElement(e)},Ln=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Hr(t)||t,1)||""},uh="O,Moz,ms,Ms,Webkit".split(","),Hr=function(e,t,n){var i=t||ki,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(uh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?uh[s]:"")+e},vl=function(){Dy()&&window.document&&(ah=window,li=ah.document,Ar=li.documentElement,ki=xl("div")||{style:{}},xl("div"),ot=Hr(ot),Tn=ot+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ed=!!Hr("perspective"),rc=nn.core.reverting,ic=1)},Wa=function a(e){var t=xl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Ar.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ar.removeChild(t),this.style.cssText=r,s},hh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},td=function(e){var t;try{t=e.getBBox()}catch{t=Wa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Wa||(t=Wa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+hh(e,["x","cx","x1"])||0,y:+hh(e,["y","cy","y1"])||0,width:0,height:0}:t},nd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&td(e))},Os=function(e,t){if(t){var n=e.style;t in Jn&&t!==Tn&&(t=ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(sc,"-$1").toLowerCase())):n.removeAttribute(t)}},ci=function(e,t,n,i,r,s){var o=new Xt(e._pt,t,n,0,1,s?Jf:Zf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},fh={deg:1,rad:1,turn:1},qy={grid:1,flex:1},_i=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=ki.style,l=Iy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,_;return i===s||!r||fh[i]||fh[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&nd(e),(p||s==="%")&&(Jn[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ut(p?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?s:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===li||!d.appendChild)&&(d=li.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Jt.time&&!m.uncache?ut(r/m.width*h):((p||s==="%")&&!qy[Ln(d,"display")]&&(o.position=Ln(e,"position")),d===e&&(o.position="static"),d.appendChild(ki),g=ki[u],d.removeChild(ki),o.position="absolute",l&&p&&(m=Hi(d),m.time=Jt.time,m.width=d[u]),ut(f?g*r/h:g&&r?h/g*r:0))))},Wn=function(e,t,n,i){var r;return ic||vl(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jn[t]&&t!=="transform"?(r=zs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Uo(Ln(e,Tn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zo[t]&&zo[t](e,t,n)||Ln(e,t)||yf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?_i(e,t,r,n)+n:r},jy=function(e,t,n,i){if(!n||n==="none"){var r=Hr(t,e,1),s=r&&Ln(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Ln(e,"borderTopColor"))}var o=new Xt(this._pt,e.style,t,0,1,jf),l=0,c=0,u,h,f,p,g,d,m,_,M,x,v,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ln(e,t)||i,e.style[t]=n),u=[n,i],zf(u),n=u[0],i=u[1],f=n.match(Mr)||[],b=i.match(Mr)||[],b.length){for(;h=Mr.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,v=d.substr((p+"").length),m.charAt(1)==="="&&(m=Er(p,m)+v),_=parseFloat(m),x=m.substr((_+"").length),l=Mr.lastIndex-x.length,x||(x=x||en.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(p=_i(e,t,d,x)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Jf:Zf;return pf.test(i)&&(o.e=0),this._pt=o,o},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=dh[n]||n,t[1]=dh[i]||i,t.join(" ")},Ky=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Jn[o]&&(l=1,o=o==="transformOrigin"?Tn:ot),Os(n,o);l&&(Os(n,ot),s&&(s.svg&&n.removeAttribute("transform"),zs(n,1),s.uncache=1,$f(i)))}},zo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Xt(e._pt,t,n,0,0,Ky);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Fs=[1,0,0,1,0,0],id={},rd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ph=function(e){var t=Ln(e,ot);return rd(t)?Fs:t.substr(7).match(df).map(ut)},oc=function(e,t){var n=e._gsap||Hi(e),i=e.style,r=ph(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Fs:r):(r===Fs&&!e.offsetParent&&e!==Ar&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ar.appendChild(e)),r=ph(e),l?i.display=l:Os(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):Ar.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yl=function(e,t,n,i,r,s){var o=e._gsap,l=r||oc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],M=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,T,C,y,w;n?l!==Fs&&(C=p*m-g*d)&&(y=v*(m/C)+b*(-d/C)+(d*M-m*_)/C,w=v*(-g/C)+b*(p/C)-(p*M-g*_)/C,v=y,b=w):(T=td(e),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(x[1]||x[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&o.smooth?(_=v-c,M=b-u,o.xOffset=h+(_*p+M*d)-_,o.yOffset=f+(_*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Tn]="0px 0px",s&&(ci(s,o,"xOrigin",c,v),ci(s,o,"yOrigin",u,b),ci(s,o,"xOffset",h,o.xOffset),ci(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},zs=function(e,t){var n=e._gsap||new Vf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=Ln(e,Tn)||"0",u,h,f,p,g,d,m,_,M,x,v,b,T,C,y,w,L,N,j,I,R,F,G,K,B,Q,$,k,U,re,ee,se;return u=h=f=d=m=_=M=x=v=0,p=g=1,n.svg=!!(e.getCTM&&nd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ot]!=="none"?l[ot]:"")),i.scale=i.rotate=i.translate="none"),C=oc(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),yl(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,C)),b=n.xOrigin||0,T=n.yOrigin||0,C!==Fs&&(N=C[0],j=C[1],I=C[2],R=C[3],u=F=C[4],h=G=C[5],C.length===6?(p=Math.sqrt(N*N+j*j),g=Math.sqrt(R*R+I*I),d=N||j?_r(j,N)*Fi:0,M=I||R?_r(I,R)*Fi+d:0,M&&(g*=Math.abs(Math.cos(M*Cr))),n.svg&&(u-=b-(b*N+T*I),h-=T-(b*j+T*R))):(se=C[6],re=C[7],$=C[8],k=C[9],U=C[10],ee=C[11],u=C[12],h=C[13],f=C[14],y=_r(se,U),m=y*Fi,y&&(w=Math.cos(-y),L=Math.sin(-y),K=F*w+$*L,B=G*w+k*L,Q=se*w+U*L,$=F*-L+$*w,k=G*-L+k*w,U=se*-L+U*w,ee=re*-L+ee*w,F=K,G=B,se=Q),y=_r(-I,U),_=y*Fi,y&&(w=Math.cos(-y),L=Math.sin(-y),K=N*w-$*L,B=j*w-k*L,Q=I*w-U*L,ee=R*L+ee*w,N=K,j=B,I=Q),y=_r(j,N),d=y*Fi,y&&(w=Math.cos(y),L=Math.sin(y),K=N*w+j*L,B=F*w+G*L,j=j*w-N*L,G=G*w-F*L,N=K,F=B),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ut(Math.sqrt(N*N+j*j+I*I)),g=ut(Math.sqrt(G*G+se*se)),y=_r(F,G),M=Math.abs(y)>2e-4?y*Fi:0,v=ee?1/(ee<0?-ee:ee):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rd(Ln(e,ot)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(p*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=ut(p),n.scaleY=ut(g),n.rotation=ut(d)+o,n.rotationX=ut(m)+o,n.rotationY=ut(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Tn]=Uo(c)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Jy:ed?sd:Zy,n.uncache=0,n},Uo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xa=function(e,t,n){var i=Dt(t);return ut(parseFloat(t)+parseFloat(_i(e,"x",n+"px",i)))+i},Zy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sd(e,t)},Di="0deg",as="0px",Ii=") ",sd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,v="",b=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Di||u!==Di)){var T=parseFloat(u)*Cr,C=Math.sin(T),y=Math.cos(T),w;T=parseFloat(h)*Cr,w=Math.cos(T),s=Xa(M,s,C*w*-x),o=Xa(M,o,-Math.sin(T)*-x),l=Xa(M,l,y*w*-x+x)}m!==as&&(v+="perspective("+m+Ii),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||s!==as||o!==as||l!==as)&&(v+=l!==as||b?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Ii),c!==Di&&(v+="rotate("+c+Ii),u!==Di&&(v+="rotateY("+u+Ii),h!==Di&&(v+="rotateX("+h+Ii),(f!==Di||p!==Di)&&(v+="skew("+f+", "+p+Ii),(g!==1||d!==1)&&(v+="scale("+g+", "+d+Ii),M.style[ot]=v||"translate(0, 0)"},Jy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(s),v=parseFloat(o),b,T,C,y,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cr,c*=Cr,b=Math.cos(l)*h,T=Math.sin(l)*h,C=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=Cr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,y*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),b*=w,T*=w)),b=ut(b),T=ut(T),C=ut(C),y=ut(y)):(b=h,y=f,T=C=0),(x&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=_i(p,"x",s,"px"),v=_i(p,"y",o,"px")),(g||d||m||_)&&(x=ut(x+g-(g*b+d*C)+m),v=ut(v+d-(g*T+d*y)+_)),(i||r)&&(w=p.getBBox(),x=ut(x+i/100*w.width),v=ut(v+r/100*w.height)),w="matrix("+b+","+T+","+C+","+y+","+x+","+v+")",p.setAttribute("transform",w),M&&(p.style[ot]=w)},$y=function(e,t,n,i,r){var s=360,o=Tt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Fi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*ch)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*ch)%s-~~(c/s)*s)),e._pt=f=new Xt(e._pt,t,n,i,c,Oy),f.e=u,f.u="deg",e._props.push(n),f},mh=function(e,t){for(var n in t)e[n]=t[n];return e},Qy=function(e,t,n){var i=mh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[ot]=t,o=zs(n,1),Os(n,ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ot],s[ot]=t,o=zs(n,1),s[ot]=c);for(l in Jn)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=Dt(c),g=Dt(u),h=p!==g?_i(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Xt(e._pt,o,l,h,f-h,_l),e._pt.u=g||0,e._props.push(l));mh(o,i)};Wt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});zo[e>1?"border"+a:a]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=s.map(function(g){return Wn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},s.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,p,h)}});var od={name:"css",register:vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,M,x,v,b,T,C,y;ic||vl(),this.styles=this.styles||Qf(e),y=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Zt[d]&&Gf(d,t,n,i,e,r)))){if(p=typeof u,g=zo[d],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Is(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",fi.lastIndex=0,fi.test(c)||(m=Dt(c),_=Dt(u)),_?m!==_&&(c=_i(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,d),s.push(d),y.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Tt(c)&&~c.indexOf("random(")&&(c=Is(c)),Dt(c+"")||(c+=en.units[d]||Dt(Wn(e,d))||""),(c+"").charAt(1)==="="&&(c=Wn(e,d))):c=Wn(e,d),f=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in jn&&(d==="autoAlpha"&&(f===1&&Wn(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),ci(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=jn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Jn,x){if(this.styles.save(d),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||zs(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Xt(this._pt,o,ot,0,1,b.renderTransform,b,0,-1),v.dep=1),d==="scale")this._pt=new Xt(this._pt,b,"scaleY",b.scaleY,(M?Er(b.scaleY,M+h):h)-b.scaleY||0,_l),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(Tn,0,o[Tn]),u=Yy(u),b.svg?yl(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&ci(this,b,"zOrigin",b.zOrigin,_),ci(this,o,d,Uo(c),Uo(u)));continue}else if(d==="svgOrigin"){yl(e,u,1,T,0,this);continue}else if(d in id){$y(this,b,d,f,M?Er(f,M+u):u);continue}else if(d==="smoothOrigin"){ci(this,b,"smooth",b.smooth,u);continue}else if(d==="force3D"){b[d]=u;continue}else if(d==="transform"){Qy(this,u,e);continue}}else d in o||(d=Hr(d)||d);if(x||(h||h===0)&&(f||f===0)&&!Ny.test(u)&&d in o)m=(c+"").substr((f+"").length),h||(h=0),_=Dt(u)||(d in en.units?en.units[d]:m),m!==_&&(f=_i(e,d,c,_)),this._pt=new Xt(this._pt,x?b:o,d,f,(M?Er(f,M+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?zy:_l),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Fy);else if(d in o)jy.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else if(d!=="parseTransform"){Yl(d,u);continue}x||(d in o?y.push(d,0,o[d]):y.push(d,1,c||e[d])),s.push(d)}}C&&Yf(this)},render:function(e,t){if(t.tween._time||!rc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Wn,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in Jn&&t!==Tn&&(e._gsap.x||Wn(e,"x"))?n&&lh===n?t==="scale"?Vy:By:(lh=n||{})&&(t==="scale"?Gy:Hy):e.style&&!ql(e.style[t])?Uy:~t.indexOf("-")?ky:tc(e,t)},core:{_removeProperty:Os,_getMatrix:oc}};nn.utils.checkPrefix=Hr;nn.core.getStyleSaver=Qf;(function(a,e,t,n){var i=Wt(a+","+e+","+t,function(r){Jn[r]=1});Wt(e,function(r){en.units[r]="deg",id[r]=1}),jn[i[13]]=a+","+e,Wt(n,function(r){var s=r.split(":");jn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){en.units[a]="px"});nn.registerPlugin(od);var We=nn.registerPlugin(od)||nn;We.core.Tween;class ac extends Zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new pM(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Gi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Gi.decodeText(new Uint8Array(e,0,4))===ad){try{s[Be.KHR_BINARY_GLTF]=new mM(e)}catch(u){i&&i(u);return}r=JSON.parse(s[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(Gi.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new CM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,s[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:s[u]=new nM;break;case Be.KHR_DRACO_MESH_COMPRESSION:s[u]=new gM(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:s[u]=new _M;break;case Be.KHR_MESH_QUANTIZATION:s[u]=new xM;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(s),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function eM(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tM{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ae(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lf(u),c.distance=h;break;case"spot":c=new Sv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class nM{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(o,o)}return Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class oM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,qe)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ae(o[0],o[1],o[2]),Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class uM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ae(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,qe)),Promise.all(r)}}class hM{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class fM{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dM{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class pM{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const d=new Ne,m=new P,_=new Mi,M=new P(1,1,1),x=new Cx(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,d.compose(m,_,M));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);je.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const ad="glTF",ls=12,gh={JSON:1313821514,BIN:5130562};class mM{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ls);if(this.header={magic:Gi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ad)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ls,i=new DataView(e,ls);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const o=i.getUint32(r,!0);if(r+=4,o===gh.JSON){const l=new Uint8Array(e,ls+r,s);this.content=Gi.decodeText(l)}else if(o===gh.BIN){const l=ls+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=Ml[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=Ml[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Lr[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}h(f)},o,c)})})}}class _M{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xM{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class ld extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,d=g-c,m=-2*p+3*f,_=p-f,M=1-m,x=_-f+h;for(let v=0;v!==o;v++){const b=s[d+v+o],T=s[d+v+l]*u,C=s[g+v+o],y=s[g+v]*u;r[v]=M*b+x*T+m*C+_*y}return r}}const vM=new Mi;class yM extends ld{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vM.fromArray(r).normalize().toArray(r),r}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Lr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_h={9728:St,9729:Vt,9984:Ja,9985:Ah,9986:bo,9987:qi},xh={33071:dn,33648:Lo,10497:Dr},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MM={CUBICSPLINE:void 0,LINEAR:Nr,STEP:bs},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Go({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),a.DefaultMaterial}function cs(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SM(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function wM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TM(a){const e=a.extensions&&a.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+vh(e.attributes):t=a.indices+":"+vh(a.attributes)+":"+a.mode,t}function vh(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function bl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AM=new Ne;class CM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eM,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Mv(this.options.manager):this.textureLoader=new Av(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};cs(r,o,i),ri(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Gi.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=qa[i.type],o=Lr[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Bt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=qa[i.type],c=Lr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let d,m;if(p&&p!==h){const _=Math.floor(f/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(M);x||(d=new c(o,_*p,i.count*p/u),x=new bx(d,p/u),t.cache.add(M,x)),m=new Dl(x,l,f%p/u,g)}else o===null?d=new c(i.count*l):d=new c(o,f,i.count*l),m=new Bt(d,l,g);if(i.sparse!==void 0){const _=qa.SCALAR,M=Lr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new M(s[1],x,i.sparse.count*_),T=new c(s[2],v,i.sparse.count*l);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,y=b.length;C<y;C++){const w=b[C];if(m.setX(w,T[C*l]),l>=2&&m.setY(w,T[C*l+1]),l>=3&&m.setZ(w,T[C*l+2]),l>=4&&m.setW(w,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"";const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=_h[f.magFilter]||Vt,u.minFilter=_h[f.minFilter]||qi,u.wrapS=xh[f.wrapS]||Dr,u.wrapT=xh[f.wrapT]||Dr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Ct(d);m.needsUpdate=!0,f(m)}),t.load(Gi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||EM(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zh,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Gs,wn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Go}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const h=i[Be.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,qe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ks);const u=r.alphaMode||ja.OPAQUE;if(u===ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ja.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==oi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==oi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==oi&&(o.emissive=new Ae().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==oi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(i,h,r),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yh(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=TM(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=yh(new Lt,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?bM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=s[p];let _;const M=c[p];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new wx(d,M):new wt(d,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?_.geometry=Mh(_.geometry,rp):m.mode===fn.TRIANGLE_FAN&&(_.geometry=Mh(_.geometry,Lh));else if(m.mode===fn.LINES)_=new Nl(d,M);else if(m.mode===fn.LINE_STRIP)_=new Es(d,M);else if(m.mode===fn.LINE_LOOP)_=new Lx(d,M);else if(m.mode===fn.POINTS)_=new Px(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&wM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),ri(_,r),m.extensions&&cs(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const f=new Qt;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Rh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new Ne;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Il(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node,d=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",d)),s.push(this.getDependency("accessor",m)),o.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],d=[];for(let _=0,M=u.length;_<M;_++){const x=u[_],v=h[_],b=f[_],T=p[_],C=g[_];if(x===void 0)continue;x.updateMatrix();let y;switch(ii[C.path]){case ii.weights:y=Ps;break;case ii.rotation:y=$i;break;case ii.position:case ii.scale:default:y=Rs;break}const w=x.name?x.name:x.uuid,L=T.interpolation!==void 0?MM[T.interpolation]:Nr,N=[];ii[C.path]===ii.weights?x.traverse(function(I){I.morphTargetInfluences&&N.push(I.name?I.name:I.uuid)}):N.push(w);let j=b.array;if(b.normalized){const I=bl(j.constructor),R=new Float32Array(j.length);for(let F=0,G=j.length;F<G;F++)R[F]=j[F]*I;j=R}for(let I=0,R=N.length;I<R;I++){const F=new y(N[I]+"."+ii[C.path],v.array,j,L);T.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(K){const B=this instanceof $i?yM:ld;return new B(this.times,this.values,this.getValueSize()/3,K)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(F)}}const m=n.name?n.name:"animation_"+e;return new pv(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return(function(){const o=[],l=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){o.push(f)});const c=[],u=r.children||[];for(let f=0,p=u.length;f<p;f++)c.push(i.getDependency("node",u[f]));const h=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(o),Promise.all(c),h])})().then(function(o){const l=o[0],c=o[1],u=o[2];let h;if(r.isBone===!0?h=new Kh:l.length>1?h=new Qt:l.length===1?h=l[0]:h=new je,h!==l[0])for(let f=0,p=l.length;f<p;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=s),ri(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const f=new Ne;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,AM)});for(let f=0,p=c.length;f<p;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Qt;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&cs(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof wn||f instanceof Ct)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(r),r})}}function LM(a,e,t){const n=e.attributes,i=new Xr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=bl(Lr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const d=bl(Lr[f.componentType]);l.multiplyScalar(d)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new qr;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function yh(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Ml[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return ri(a,e),LM(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SM(a,e.targets,t):a})}function Mh(a,e){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Lh)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r}class PM extends Zr{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new Vl(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){const l=r.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new RM(e)}}class RM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=DM(e,t,this.data);for(let r=0,s=i.length;r<s;r++)n.push(...i[r].toShapes());return n}}function DM(a,e,t){const n=Array.from(a),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,s=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=r;else{const h=IM(u,i,o,l,t);o+=h.offsetX,s.push(h.path)}}return s}function IM(a,e,t,n,i){const r=i.glyphs[a]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const s=new kv;let o,l,c,u,h,f,p,g;if(r.o){const d=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,_=d.length;m<_;)switch(d[m++]){case"m":o=d[m++]*e+t,l=d[m++]*e+n,s.moveTo(o,l);break;case"l":o=d[m++]*e+t,l=d[m++]*e+n,s.lineTo(o,l);break;case"q":c=d[m++]*e+t,u=d[m++]*e+n,h=d[m++]*e+t,f=d[m++]*e+n,s.quadraticCurveTo(h,f,c,u);break;case"b":c=d[m++]*e+t,u=d[m++]*e+n,h=d[m++]*e+t,f=d[m++]*e+n,p=d[m++]*e+t,g=d[m++]*e+n,s.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:r.ha*e,path:s}}class jo extends kl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}const NM=new URL("/assets/FinalRocket-DrH6RY-Y.glb",import.meta.url),OM=new URL("/assets/FinalEarthModel-D7utAeRX.glb",import.meta.url),FM=new URL("/assets/LocationMarker-Ca1Kbxku.glb",import.meta.url),lt=new Mx,He=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),Xs=new Yh({canvas:document.querySelector(".canvas"),antialias:!0});Xs.shadowMap.enabled=!0;Xs.shadowMap.type=Sh;new Uv(1e3);new zv(1e3,100);Xs.setPixelRatio(window.devicePixelRatio);Xs.setSize(window.innerWidth,window.innerHeight);He.position.set(9.5,3.38,1);const wi=new bi(16777215,1);lt.add(wi);wi.position.set(-30,50,0);wi.castShadow=!0;wi.shadow.camera.top=100;wi.shadow.camera.bottom=-100;wi.shadow.mapSize.width=1024;wi.shadow.mapSize.height=1024;new tr(wi,5);lt.add(new Ev(16777215,1));const Yo=new bi(16777215,1.5);lt.add(Yo);const lc=new je;lc.position.set(9.5,3.38,1);lt.add(lc);Yo.target=lc;Yo.position.set(8,4,10);new tr(Yo,2);const tt=new Qt,zM=new ac;zM.load(NM.href,function(a){const e=a.scene;tt.add(e),a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0)})});tt.position.set(10,0,0);tt.rotation.y=-Math.PI/9;lt.add(tt);const Yn=new Qt,UM=new ac;UM.load(OM.href,function(a){const e=a.scene;Yn.add(e),a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0)})});Yn.position.set(300,10,-10);Yn.rotation.set(Math.PI/8,-Math.PI/3.5,0);Yn.scale.set(.005,.005,.005);lt.add(Yn);const di=new Qt,kM=new ac;kM.load(FM.href,function(a){const e=a.scene;di.add(e),a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0)})});di.position.set(308.5,10.7,8);di.rotation.y=Math.PI/4.4;di.scale.set(5,5,5);lt.add(di);const Ko=new PM,cc=new Qt,xi=new Qt,vi=new Qt;Ko.load("./fonts/EB_Garamond.json",function(a){const e=new jo("CHOOSE",{font:a,size:3,height:1,curveSegments:12,bevelEnabled:!0,bevelSize:.1,bevelThickness:.5}),t=new wt(e,[new mi({color:1048575}),new mi({color:3355443})]);t.castShadow=!0,cc.add(t),t.position.set(19,16,40),t.rotation.y=Math.PI});Ko.load("./fonts/EB_Garamond.json",function(a){const e=new jo("PATHWAY",{font:a,size:3,height:1,curveSegments:12,bevelEnabled:!0,bevelSize:.1,bevelThickness:.5}),t=new wt(e,[new mi({color:1048575}),new mi({color:3355443})]);t.castShadow=!0,cc.add(t),t.position.set(20.5,12,40),t.rotation.y=Math.PI});lt.add(cc);const BM=new Ul(12,50),VM=new Go({color:16776960,side:ks}),uc=new wt(BM,VM);uc.position.set(10,14,41.5);uc.receiveShadow=!0;lt.add(uc);Ko.load("./fonts/EB_Garamond.json",function(a){const e=new jo("PROJECTS",{font:a,size:2,height:.3,curveSegments:12}),t=new wt(e,[new mi({color:1048575}),new mi({color:3355443})]);xi.add(t),t.rotation.y=Math.PI+Math.PI/10});lt.add(xi);Ko.load("./fonts/EB_Garamond.json",function(a){var e=new jo("ABOUT ME",{font:a,size:2,height:.3,curveSegments:12});const t=new wt(e,[new mi({color:1048575}),new mi({color:3355443})]);vi.add(t),t.rotation.y=Math.PI-Math.PI/10});lt.add(vi);xi.position.set(20,14,40);vi.position.set(20,14,40);xi.scale.set(0,0,0);vi.scale.set(0,0,0);const GM=We.timeline(),HM=We.timeline(),WM=We.timeline(),XM=We.timeline(),Us=document.createElement("button");Us.innerHTML="Click";Us.id="click-btn";document.body.append(Us);const yi=document.createElement("div");yi.id="select-path-hover-div";document.body.append(yi);const rn=new bi(16777215,1);lt.add(rn);const hc=new je;hc.position.set(10,14,42);lt.add(hc);rn.target=hc;rn.position.set(13,18,10);rn.castShadow=!0;rn.shadow.camera.top=100;rn.shadow.camera.left=-100;rn.shadow.camera.right=100;rn.shadow.camera.bottom=-100;rn.shadow.mapSize.width=1024;rn.shadow.mapSize.height=1024;new tr(rn,.5);const Rn=document.createElement("div");Rn.id="projects-hover-div";document.body.append(Rn);Rn.style.display="none";const Dn=document.createElement("div");Dn.id="about-hover-div";document.body.append(Dn);Dn.style.display="none";Us.addEventListener("click",()=>{Us.style.display="none",GM.to(He.position,{x:10,y:2.8,z:4.5,duration:2}).to(tt.position,{y:15,x:0,duration:2,ease:"none"}).to(tt.position,{y:150,x:-150,z:-50,duration:3,ease:"none"}).to(tt.position,{x:10,y:4.5,z:2,duration:.1}).to(tt.position,{x:10,y:9.5,z:5.5,duration:1}),HM.to(tt.rotation,{duration:2}).to(tt.rotation,{z:.5,duration:4}).to(tt.rotation,{x:-2.4166097335246164,y:0,z:Math.PI,duration:.3}),WM.to(He.position,{duration:2}).to(He.position,{x:10,y:15,z:5,duration:5}),XM.to(He.rotation,{duration:2}).to(He.rotation,{y:Math.PI/3,duration:3,ease:"none"}).to(He.rotation,{y:Math.PI,duration:3}),yi.style.display="inline"});yi.addEventListener("click",()=>{yi.style.display="none",We.to(xi.position,{x:50,y:14,z:40,duration:.3}),We.to(vi.position,{x:-10,y:14,z:40,duration:.3}),We.to(xi.scale,{x:1,y:1,z:1,duration:.3}),We.to(vi.scale,{x:1,y:1,z:1,duration:.3}),Rn.style.display="inline",Dn.style.display="inline"});const sn=new bi(255,0);lt.add(sn);sn.position.set(2,-5,30);const fc=new je;fc.position.set(5,15,42);lt.add(fc);sn.target=fc;sn.castShadow=!0;sn.shadow.camera.top=100;sn.shadow.camera.left=-100;sn.shadow.camera.right=100;sn.shadow.camera.bottom=-100;sn.shadow.mapSize.width=1024;sn.shadow.mapSize.height=1024;new tr(sn,.5);yi.addEventListener("mouseenter",()=>{We.to(rn,{intensity:.8,duration:.2}),We.to(sn,{intensity:3,duration:.2})});yi.addEventListener("mouseleave",()=>{We.to(rn,{intensity:1,duration:.2}),We.to(sn,{intensity:.5,duration:.2})});const on=new bi(255,0);lt.add(on);on.position.set(45,13,38);const dc=new je;dc.position.set(50,15,42);lt.add(dc);on.target=dc;on.castShadow=!0;on.shadow.camera.top=100;on.shadow.camera.left=-100;on.shadow.camera.right=100;on.shadow.camera.bottom=-100;on.shadow.mapSize.width=1024;on.shadow.mapSize.height=1024;new tr(on,.5);Rn.addEventListener("mouseenter",()=>{We.to(on,{intensity:5,duration:.2}),We.to(xi.scale,{x:1.1,y:1.1,z:1.1,duration:.2})});Rn.addEventListener("mouseleave",()=>{We.to(on,{intensity:0,duration:.2}),We.to(xi.scale,{x:1,y:1,z:1,duration:.2})});const an=new bi(255,0);lt.add(an);an.position.set(-5,13,30);const pc=new je;pc.position.set(-15,14,38);lt.add(pc);an.target=pc;an.castShadow=!0;an.shadow.camera.top=100;an.shadow.camera.left=-100;an.shadow.camera.right=100;an.shadow.camera.bottom=-100;an.shadow.mapSize.width=1024;an.shadow.mapSize.height=1024;new tr(an,.5);Dn.addEventListener("mouseenter",()=>{We.to(an,{intensity:5,duration:.2}),We.to(vi.scale,{x:1.1,y:1.1,z:1.1,duration:.2})});Dn.addEventListener("mouseleave",()=>{We.to(an,{intensity:0,duration:.2}),We.to(vi.scale,{x:1,y:1,z:1,duration:.2})});const qM=We.timeline(),jM=We.timeline(),YM=We.timeline(),KM=We.timeline();Rn.addEventListener("click",()=>{YM.to(tt.position,{duration:1,ease:"none"}).to(tt.position,{x:100,y:200,z:100,duration:1,ease:"none"}).to(tt.position,{x:-300,y:10,z:-10,duration:.6,ease:"none"}),KM.to(tt.rotation,{duration:1.1,ease:"none"}).to(tt.rotation,{z:2.8,duration:.3,ease:"none"}),qM.to(He.position,{x:10,y:15,z:0,duration:1,ease:"none"}).to(He.position,{x:10,y:15,z:0,duration:.6,ease:"none"}).to(He.position,{x:400,y:300,z:100,duration:.5,ease:"none"}).to(He.position,{x:-300,y:10,z:100,duration:2,ease:"none"}).to(He.position,{x:-300,y:10,z:0,duration:2,ease:"none"}),jM.to(He.rotation,{x:Math.PI/7,duration:1,ease:"none"}).to(He.rotation,{x:-Math.PI/4,y:Math.PI+Math.PI/7,duration:.2,ease:"none"}).to(He.rotation,{x:-2*Math.PI,y:Math.PI+Math.PI/7,duration:.5,ease:"none"}).to(He.rotation,{x:0,y:Math.PI-Math.PI/2,z:0,duration:0,ease:"none"}).to(He.rotation,{x:0,y:Math.PI-Math.PI/2,z:5*Math.PI,duration:2,ease:"none"}).to(He.rotation,{x:0,y:0,z:Math.PI,duration:0,ease:"none"}).to(He.rotation,{x:0,y:0,z:2*Math.PI,duration:1}),Rn.style.display="none",Dn.style.display="none"});const ZM=We.timeline(),JM=We.timeline(),$M=We.timeline(),QM=We.timeline(),eb=We.timeline(),tb=We.timeline();Dn.addEventListener("click",()=>{$M.to(tt.position,{duration:1,ease:"none"}).to(tt.position,{z:100,duration:.5,ease:"none"}).to(tt.position,{x:100,y:-100,z:100,duration:2.8,ease:"none"}).to(tt.position,{x:326,y:-10,z:40,duration:.1,ease:"none"}).to(tt.position,{x:326,y:5,z:18,duration:.5,ease:"none"}),QM.to(tt.rotation,{duration:1.1,ease:"none"}).to(tt.rotation,{x:-2.53073,y:0,z:3.5,duration:.2,ease:"none"}).to(tt.rotation,{x:-2.53073,y:0,z:3.5,duration:2.5,ease:"none"}).to(tt.rotation,{x:-Math.PI/4,y:-Math.PI/5,z:0,duration:.1,ease:"none"}),ZM.to(He.position,{x:10,y:15,z:0,duration:1,ease:"none"}).to(He.position,{x:10,y:15,z:40,duration:.6,ease:"none"}).to(He.position,{x:260,y:10,z:200,duration:2,ease:"none"}).to(He.position,{x:320,y:10,z:20,duration:1,ease:"none"}),JM.to(He.rotation,{duration:1,ease:"none"}).to(He.rotation,{duration:.5,ease:"none"}).to(He.rotation,{y:2*Math.PI,duration:3,ease:"none"}),eb.to(Yn.rotation,{duration:1.5}).to(Yn.rotation,{x:Math.PI/8,y:-5*Math.PI,z:0,duration:.1}).to(Yn.rotation,{duration:1.9}).to(Yn.rotation,{x:Math.PI/8,y:-Math.PI/3.5,z:0,duration:1.5}),tb.to(di.position,{y:100,duration:.2}).to(di.position,{duration:4.2}).to(di.position,{x:308.5,y:10.7,z:8,duration:.6}),Rn.style.display="none",Dn.style.display="none"});yi.style.display="none";Rn.style.display="none";Dn.style.display="none";const Zo=new bi(16777215,1.5);Zo.position.set(300,10,10);lt.add(Zo);const mc=new je;mc.position.set(300,10,0);lt.add(mc);Zo.target=mc;new tr(Zo,2);function nb(){const a=new Bl(.25,24,24),e=new oi({color:16777215}),t=new wt(a,e),[n,i,r]=Array(3).fill().map(()=>Rh.randFloatSpread(1e3));t.position.set(n,i,r),lt.add(t)}Array(5e3).fill().forEach(nb);new lf(16777215,1,100);function cd(){He.rotation.set(He.rotation.x,He.rotation.y,He.rotation.z),requestAnimationFrame(cd),Xs.render(lt,He)}cd();
