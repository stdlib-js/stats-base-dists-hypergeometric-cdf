// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,A(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!A(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Math.ceil;function R(r){return r<0?P(r):W(r)}var M=Number.POSITIVE_INFINITY;function Z(r,e){return L(r)||L(e)?NaN:r===M||e===M?M:r===e&&0===r?function(r){return 0===r&&1/r===M}(r)?r:e:r>e?r:e}var X=Number.NEGATIVE_INFINITY;function Y(r,e){return L(r)||L(e)?NaN:r===X||e===X?X:r===e&&0===r?function(r){return 0===r&&1/r===X}(r)?r:e:r<e?r:e}var z=1023,q=1023,B=-1023,D=-1074;function J(r){return r===M||r===X}var K=2147483648,Q=2147483647;var rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var er=Object.prototype.toString;var nr=Object.prototype.hasOwnProperty;var tr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof tr?tr.toStringTag:"";var ar=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return er.call(r);n=r[ir],a=ir,e=null!=(i=r)&&nr.call(i,a);try{r[ir]=void 0}catch(e){return er.call(r)}return t=er.call(r),e?r[ir]=n:delete r[ir],t}:function(r){return er.call(r)},or="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var cr,fr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var vr,yr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr=vr,dr="function"==typeof Uint8Array;var hr="function"==typeof Uint8Array?Uint8Array:null;var wr,br="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr=wr,Nr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var _r,Er="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Nr&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Ur,kr={uint16:_r,uint8:mr};(Ur=new kr.uint16(1))[0]=4660;var Ir,Sr,xr=52===new kr.uint8(Ur.buffer)[0];!0===xr?(Ir=1,Sr=0):(Ir=0,Sr=1);var Fr={HIGH:Ir,LOW:Sr},jr=new gr(1),Tr=new sr(jr.buffer),Or=Fr.HIGH,Vr=Fr.LOW;function $r(r,e,n,t){return jr[0]=r,e[t]=Tr[Or],e[t+n]=Tr[Vr],e}function Gr(r){return $r(r,[0,0],1,0)}H(Gr,"assign",$r);var Hr,Wr,Cr=!0===xr?1:0,Lr=new gr(1),Pr=new sr(Lr.buffer);function Rr(r){return Lr[0]=r,Pr[Cr]}!0===xr?(Hr=1,Wr=0):(Hr=0,Wr=1);var Mr={HIGH:Hr,LOW:Wr},Zr=new gr(1),Xr=new sr(Zr.buffer),Yr=Mr.HIGH,zr=Mr.LOW;function qr(r,e){return Xr[Yr]=r,Xr[zr]=e,Zr[0]}var Br=[0,0];function Dr(r,e){var n,t;return Gr.assign(r,Br,1,0),n=Br[0],n&=Q,t=Rr(e),qr(n|=t&=K,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function re(r,e,n,t){return L(r)||J(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Kr(r)<Jr?(e[t]=r*Qr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=2146435072;var ne=2220446049250313e-31,te=2148532223,ie=[0,0],ae=[0,0];function oe(r,e){var n,t;return 0===e||0===r||L(r)||J(r)?r:(re(r,ie,1,0),r=ie[0],e+=ie[1],e+=function(r){var e=Rr(r);return(e=(e&ee)>>>20)-z|0}(r),e<D?Dr(0,r):e>q?r<0?X:M:(e<=B?(e+=52,t=ne):t=1,Gr.assign(r,ae,1,0),n=ae[0],n&=te,t*qr(n|=e+z<<20,ae[1])))}var ue=.6931471803691238,ce=1.9082149292705877e-10,fe=1.4426950408889634,se=709.782712893384,le=-745.1332191019411,pe=1/(1<<28),ve=-pe;function ye(r){var e;return L(r)||r===M?r:r===X?0:r>se?M:r<le?0:r>ve&&r<pe?1+r:function(r,e,n){var t,i,a,o;return oe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=R(r<0?fe*r-.5:fe*r+.5))*ue,e*ce,e)}var ge=!0===xr?1:0,de=new gr(1),he=new sr(de.buffer);var we=.6931471803691238,be=1.9082149292705877e-10,me=0x40000000000000,Ne=.3333333333333333,Ae=1048575,_e=2146435072,Ee=1048576,Ue=1072693248;function ke(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?X:L(r)||r<0?NaN:(a=0,(n=Rr(r))<Ee&&(a-=54,n=Rr(r*=me)),n>=_e?r+r:(a+=(n>>20)-z|0,a+=(c=(n&=Ae)+614244&1048576|0)>>20|0,u=(r=function(r,e){return de[0]=r,he[ge]=e>>>0,de[0]}(r,n|c^Ue))-1,(Ae&2+n)<3?0===u?0===a?0:a*we+a*be:(o=u*u*(.5-Ne*u),0===a?u-o:a*we-(o-a*be-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*we-(e-(s*(e+o)+a*be)-u)):0===a?u-s*(u-o):a*we-(s*(u-o)-a*be-u))))}function Ie(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Se=-.16666666666666632,xe=.00833333333332249,Fe=-.0001984126982985795,je=27557313707070068e-22,Te=-2.5050760253406863e-8,Oe=1.58969099521155e-10;function Ve(r,e){var n,t,i;return n=xe+(i=r*r)*(Fe+i*je)+i*(i*i)*(Te+i*Oe),t=i*r,0===e?r+t*(Se+i*n):r-(i*(.5*e-t*n)-e-t*Se)}var $e=1048575,Ge=!0===xr?0:1,He=new gr(1),We=new sr(He.buffer);function Ce(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Le=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Re=16777216,Me=5.960464477539063e-8,Ze=Ce(20),Xe=Ce(20),Ye=Ce(20),ze=Ce(20);function qe(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Me*h|0,ze[v]=h-Re*s|0,h=t[d-1]+s,d-=1;if(h=oe(h,i),h-=8*W(.125*h),h-=g=0|h,l=0,i>0?(g+=v=ze[n-1]>>24-i,ze[n-1]-=v<<24-i,l=ze[n-1]>>23-i):0===i?l=ze[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=ze[v],0===f?0!==d&&(f=1,ze[v]=16777216-d):ze[v]=16777215-d;if(i>0)switch(i){case 1:ze[n-1]&=8388607;break;case 2:ze[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=oe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=ze[v];if(0===d){for(y=1;0===ze[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=Le[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return qe(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===ze[n];)n-=1,i-=24;else(h=oe(h,-i))>=Re?(s=Me*h|0,ze[n]=h-Re*s|0,i+=24,ze[n+=1]=s):ze[n]=0|h;for(s=oe(1,i),v=n;v>=0;v--)t[v]=s*ze[v],s*=Me;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Pe[y]*t[v+y];Ye[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ye[v];for(e[0]=0===l?s:-s,s=Ye[0]-s,v=1;v<=n;v++)s+=Ye[v];return e[1]=0===l?s:-s,7&g}function Be(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Ze[c]=f<0?0:Le[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Ze[o+(c-f)];Xe[c]=i}return 4,qe(r,e,4,Xe,u,4,a,o,Ze)}var De=Math.round,Je=.6366197723675814,Ke=1.5707963267341256,Qe=6077100506506192e-26,rn=6077100506303966e-26,en=20222662487959506e-37,nn=20222662487111665e-37,tn=84784276603689e-45,an=2047;function on(r,e,n){var t,i,a,o,u;return a=r-(t=De(r*Je))*Ke,o=t*Qe,u=e>>20|0,n[0]=a-o,u-(Rr(n[0])>>20&an)>16&&(o=t*en-((i=a)-(a=i-(o=t*rn))-o),n[0]=a-o,u-(Rr(n[0])>>20&an)>49&&(o=t*tn-((i=a)-(a=i-(o=t*nn))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var un=0,cn=16777216,fn=1.5707963267341256,sn=6077100506506192e-26,ln=2*sn,pn=3*sn,vn=4*sn,yn=598523,gn=1072243195,dn=1073928572,hn=1074752122,wn=1074977148,bn=1075183036,mn=1075388923,Nn=1075594811,An=1094263291,_n=[0,0,0],En=[0,0];function Un(r,e){var n,t,i,a,o,u,c;if((i=Rr(r)&Q|0)<=gn)return e[0]=r,e[1]=0,0;if(i<=hn)return(i&$e)===yn?on(r,i,e):i<=dn?r>0?(c=r-fn,e[0]=c-sn,e[1]=c-e[0]-sn,1):(c=r+fn,e[0]=c+sn,e[1]=c-e[0]+sn,-1):r>0?(c=r-2*fn,e[0]=c-ln,e[1]=c-e[0]-ln,2):(c=r+2*fn,e[0]=c+ln,e[1]=c-e[0]+ln,-2);if(i<=Nn)return i<=bn?i===wn?on(r,i,e):r>0?(c=r-3*fn,e[0]=c-pn,e[1]=c-e[0]-pn,3):(c=r+3*fn,e[0]=c+pn,e[1]=c-e[0]+pn,-3):i===mn?on(r,i,e):r>0?(c=r-4*fn,e[0]=c-vn,e[1]=c-e[0]-vn,4):(c=r+4*fn,e[0]=c+vn,e[1]=c-e[0]+vn,-4);if(i<An)return on(r,i,e);if(i>=ee)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return He[0]=r,We[Ge]}(r),c=qr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)_n[o]=0|c,c=(c-_n[o])*cn;for(_n[2]=c,a=3;_n[a-1]===un;)a-=1;return u=Be(_n,En,t,a),r<0?(e[0]=-En[0],e[1]=-En[1],-u):(e[0]=En[0],e[1]=En[1],u)}var kn=[0,0],In=2147483647,Sn=1072243195,xn=1044381696,Fn=2146435072;function jn(r){var e;if(e=Rr(r),(e&=In)<=Sn)return e<xn?1:Ie(r,0);if(e>=Fn)return NaN;switch(3&Un(r,kn)){case 0:return Ie(kn[0],kn[1]);case 1:return-Ve(kn[0],kn[1]);case 2:return-Ie(kn[0],kn[1]);default:return Ve(kn[0],kn[1])}}var Tn=1072243195,On=1045430272,Vn=[0,0];function $n(r){var e;if(e=Rr(r),(e&=Q)<=Tn)return e<On?r:Ve(r,0);if(e>=ee)return NaN;switch(3&Un(r,Vn)){case 0:return Ve(Vn[0],Vn[1]);case 1:return Ie(Vn[0],Vn[1]);case 2:return-Ve(Vn[0],Vn[1]);default:return-Ie(Vn[0],Vn[1])}}var Gn=3.141592653589793;var Hn=.07721566490153287,Wn=.3224670334241136,Cn=1,Ln=-.07721566490153287,Pn=.48383612272381005,Rn=-.1475877229945939,Mn=.06462494023913339,Zn=-.07721566490153287,Xn=1,Yn=.4189385332046727,zn=1.4616321449683622,qn=4503599627370496,Bn=0x400000000000000,Dn=8470329472543003e-37,Jn=1.4616321449683622,Kn=-.12148629053584961,Qn=-3638676997039505e-33;function rt(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(L(r)||J(r))return r;if(0===r)return M;if(r<0?(e=!0,r=-r):e=!1,r<Dn)return-ke(r);if(e){if(r>=qn)return M;if(f=function(r){var e,n;return L(r)||J(r)?NaN:0===(e=Kr(n=r%2))||1===e?Dr(0,n):e<.25?$n(Gn*n):e<.75?Dr(jn(Gn*(e=.5-e)),n):e<1.25?(n=Dr(1,n)-n,$n(Gn*n)):e<1.75?-Dr(jn(Gn*(e-=1.5)),n):(n-=Dr(2,n),$n(Gn*n))}(r),0===f)return M;n=ke(Gn/Kr(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-ke(r),r>=zn-1+.27?(l=1-r,t=0):r>=zn-1-.27?(l=r-(Jn-1),t=1):(l=r,t=2)):(v=0,r>=zn+.27?(l=2-r,t=0):r>=zn-.27?(l=r-Jn,t=1):(l=r-1,t=2)),t){case 0:o=Hn+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Wn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=Pn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Rn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Mn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Kn+(u=p*o-(Qn-s*(a+l*i)));break;case 2:o=l*(Zn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Xn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=R(r)))*(Ln+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=Cn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=ke(p*=l+2)}else r<Bn?(f=ke(r),s=Yn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*(ke(r)-1);return e&&(v=n-v),v}function et(r){return function(r){return W(r)===r&&r<0}(r)?NaN:rt(r+1)}function nt(r,e,n,t){var i,a,o,u;return L(r)||L(e)||L(n)||L(t)||!C(e)||!C(n)||!C(t)||e===M||n===M||n>e||t>e?NaN:(u=Z(0,t+n-e),o=Y(n,t),C(r)&&u<=r&&r<=o?(a=et(t)+et(n)+et(e-t)+et(e-n),i=et(e)+et(r)+et(t-r),ye(a-(i+=et(n-r)+et(e-n+r-t)))):0)}function tt(r){return function(){return r}}function it(r){var e,n,t;for(e=r.length,n=0,t=0;t<e;t++)n+=r[t];return n}function at(r,e,n,t){var i,a,o,u;if(L(r)||L(e)||L(n)||L(t)||!C(e)||!C(n)||!C(t)||e===M||n===M||n>e||t>e)return NaN;if((r=R(r))<Z(0,t+n-e))return 0;if(r>=Y(t,n))return 1;for((a=new gr(r+1))[r]=nt(r,e,n,t),u=r-1;u>=0;u--)o=(u+1)*(e-n-(t-u-1)),i=(n-u)*(t-u),a[u]=o/i*a[u+1];return Y(it(a),1)}function ot(r,e,n){return L(r)||L(e)||L(n)||!C(r)||!C(e)||!C(n)||r===M||e===M||e>r||n>r?tt(NaN):function(t){var i,a,o,u;if(L(t))return NaN;if((t=R(t))<Z(0,n+e-r))return 0;if(t>=Y(n,e))return 1;for((a=new gr(t+1))[t]=nt(t,r,e,n),u=t-1;u>=0;u--)o=(u+1)*(r-e-(n-u-1)),i=(e-u)*(n-u),a[u]=o/i*a[u+1];return Y(it(a),1)}}H(nt,"factory",(function(r,e,n){var t,i;return L(r)||L(e)||L(n)||!C(r)||!C(e)||!C(n)||r===M||e===M||e>r||n>r?tt(NaN):(i=Z(0,n+e-r),t=Y(e,n),function(a){var o,u;if(L(a))return NaN;if(C(a)&&i<=a&&a<=t)return u=et(n)+et(e)+et(r-n)+et(r-e),o=et(r)+et(a)+et(n-a),ye(u-(o+=et(e-a)+et(r-e+a-n)));return 0})})),H(at,"factory",ot);export{at as default,ot as factory};
//# sourceMappingURL=mod.js.map
