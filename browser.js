// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,f=t.__lookupGetter__,i=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var p=Math.ceil;function s(r){return r<0?p(r):l(r)}var b=Number.POSITIVE_INFINITY;function w(r){return 0===r&&1/r===b}var N=Number.NEGATIVE_INFINITY;function d(r,n){var t,e,u,o;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===b||n===b?b:r===n&&0===r?w(r)?r:n:r>n?r:n;for(e=N,o=0;o<t;o++){if(v(u=arguments[o])||u===b)return u;(u>e||u===e&&0===u&&w(u))&&(e=u)}return e}function h(r){return 0===r&&1/r===N}function A(r,n){var t,e,u,o;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===N||n===N?N:r===n&&0===r?h(r)?r:n:r<n?r:n;for(e=b,o=0;o<t;o++){if(v(u=arguments[o])||u===N)return u;(u<e||u===e&&0===u&&h(u))&&(e=u)}return e}var _=1023;function m(r){return r===b||r===N}var U,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,I=Object.prototype.hasOwnProperty,O="function"==typeof Symbol?Symbol.toStringTag:"",S=g&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return j.call(r);t=r[O],o=O,n=null!=(u=r)&&I.call(u,o);try{r[O]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[O]=t:delete r[O],e}:function(r){return j.call(r)},E="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(E&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=U,P="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k([1,3.14,-3.14,NaN]),t=n,r=(P&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L,M=H,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var C,q=L,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),t=n,r=(z&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K={uint16:C,uint8:q};(J=new K.uint16(1))[0]=4660;var Q,R,X=52===new K.uint8(J.buffer)[0];!0===X?(Q=1,R=0):(Q=0,R=1);var Z={HIGH:Q,LOW:R},$=new M(1),rr=new G($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function ur(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var or,fr,ir=!0===X?1:0,ar=new M(1),cr=new G(ar.buffer);function lr(r){return ar[0]=r,cr[ir]}!0===X?(or=1,fr=0):(or=0,fr=1);var yr={HIGH:or,LOW:fr},vr=new M(1),pr=new G(vr.buffer),sr=yr.HIGH,br=yr.LOW;function wr(r,n){return pr[sr]=r,pr[br]=n,vr[0]}var Nr=[0,0];function dr(r,n){var t,e;return ur(Nr,r),t=Nr[0],t&=2147483647,e=lr(n),wr(t|=e&=2147483648,Nr[1])}function hr(r){return Math.abs(r)}function Ar(r,n,t,e){return v(r)||m(r)?(n[e]=r,n[e+t]=0,n):0!==r&&hr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var _r=[0,0],mr=[0,0];function Ur(r,n){var t,e;return 0===n||0===r||v(r)||m(r)?r:(Ar(r,_r,1,0),n+=_r[1],n+=function(r){var n=lr(r);return(n=(2146435072&n)>>>20)-_|0}(r=_r[0]),n<-1074?dr(0,r):n>1023?r<0?N:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ur(mr,r),t=mr[0],t&=2148532223,e*wr(t|=n+_<<20,mr[1])))}var gr=1.4426950408889634,jr=1/(1<<28);function Ir(r){var n;return v(r)||r===b?r:r===N?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<jr?1+r:function(r,n,t){var e,u,o,f;return Ur(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=s(r<0?gr*r-.5:gr*r+.5)),1.9082149292705877e-10*n,n)}var Or=!0===X?1:0,Sr=new M(1),Er=new G(Sr.buffer),Fr=.6931471803691238,Tr=1.9082149292705877e-10,Hr=1048575;function Gr(r){var n,t,e,u,o,f,i,a,c,l,y,p;return 0===r?N:v(r)||r<0?NaN:(o=0,(t=lr(r))<1048576&&(o-=54,t=lr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-_|0,o+=(a=614244+(t&=Hr)&1048576|0)>>20|0,i=(r=function(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}(r,t|1072693248^a))-1,(Hr&2+t)<3?0===i?0===o?0:o*Fr+o*Tr:(f=i*i*(.5-.3333333333333333*i),0===o?i-f:o*Fr-(f-o*Tr-i)):(a=t-398458|0,c=440401-t|0,u=(y=(p=(l=i/(2+i))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+u,(a|=c)>0?(n=.5*i*i,0===o?i-(n-l*(n+f)):o*Fr-(n-(l*(n+f)+o*Tr)-i)):0===o?i-l*(i-f):o*Fr-(l*(i-f)-o*Tr-i))))}function Pr(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var kr=-.16666666666666632;function xr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(kr+u*t):r-(u*(.5*n-e*t)-n-e*kr)}var Lr=!0===X?0:1,Mr=new M(1),Vr=new G(Mr.buffer);function Wr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Yr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Cr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],qr=16777216,zr=5.960464477539063e-8,Br=Wr(20),Dr=Wr(20),Jr=Wr(20),Kr=Wr(20);function Qr(r,n,t,e,u,o,f,i,a){var c,y,v,p,s,b,w,N,d;for(p=o,d=e[t],N=t,s=0;N>0;s++)y=zr*d|0,Kr[s]=d-qr*y|0,d=e[N-1]+y,N-=1;if(d=Ur(d,u),d-=8*l(.125*d),d-=w=0|d,v=0,u>0?(w+=s=Kr[t-1]>>24-u,Kr[t-1]-=s<<24-u,v=Kr[t-1]>>23-u):0===u?v=Kr[t-1]>>23:d>=.5&&(v=2),v>0){for(w+=1,c=0,s=0;s<t;s++)N=Kr[s],0===c?0!==N&&(c=1,Kr[s]=16777216-N):Kr[s]=16777215-N;if(u>0)switch(u){case 1:Kr[t-1]&=8388607;break;case 2:Kr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=Ur(1,u)))}if(0===d){for(N=0,s=t-1;s>=o;s--)N|=Kr[s];if(0===N){for(b=1;0===Kr[o-b];b++);for(s=t+1;s<=t+b;s++){for(a[i+s]=Yr[f+s],y=0,N=0;N<=i;N++)y+=r[N]*a[i+(s-N)];e[s]=y}return Qr(r,n,t+=b,e,u,o,f,i,a)}}if(0===d)for(t-=1,u-=24;0===Kr[t];)t-=1,u-=24;else(d=Ur(d,-u))>=qr?(y=zr*d|0,Kr[t]=d-qr*y|0,u+=24,Kr[t+=1]=y):Kr[t]=0|d;for(y=Ur(1,u),s=t;s>=0;s--)e[s]=y*Kr[s],y*=zr;for(s=t;s>=0;s--){for(y=0,b=0;b<=p&&b<=t-s;b++)y+=Cr[b]*e[s+b];Jr[t-s]=y}for(y=0,s=t;s>=0;s--)y+=Jr[s];for(n[0]=0===v?y:-y,y=Jr[0]-y,s=1;s<=t;s++)y+=Jr[s];return n[1]=0===v?y:-y,7&w}function Rr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Br[a]=c<0?0:Yr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Br[f+(a-c)];Dr[a]=u}return Qr(r,n,4,Dr,i,4,o,f,Br)}var Xr=Math.round;function Zr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Xr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(lr(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(lr(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var $r=1.5707963267341256,rn=6077100506506192e-26,nn=2*rn,tn=3*rn,en=4*rn,un=[0,0,0],on=[0,0];function fn(r,n){var t,e,u,o,f,i,a;if((u=2147483647&lr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Zr(r,u,n):u<=1073928572?r>0?(a=r-$r,n[0]=a-rn,n[1]=a-n[0]-rn,1):(a=r+$r,n[0]=a+rn,n[1]=a-n[0]+rn,-1):r>0?(a=r-2*$r,n[0]=a-nn,n[1]=a-n[0]-nn,2):(a=r+2*$r,n[0]=a+nn,n[1]=a-n[0]+nn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Zr(r,u,n):r>0?(a=r-3*$r,n[0]=a-tn,n[1]=a-n[0]-tn,3):(a=r+3*$r,n[0]=a+tn,n[1]=a-n[0]+tn,-3):1075388923===u?Zr(r,u,n):r>0?(a=r-4*$r,n[0]=a-en,n[1]=a-n[0]-en,4):(a=r+4*$r,n[0]=a+en,n[1]=a-n[0]+en,-4);if(u<1094263291)return Zr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Mr[0]=r,Vr[Lr]}(r),a=wr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)un[f]=0|a,a=16777216*(a-un[f]);for(un[2]=a,o=3;0===un[o-1];)o-=1;return i=Rr(un,on,e,o),r<0?(n[0]=-on[0],n[1]=-on[1],-i):(n[0]=on[0],n[1]=on[1],i)}var an=[0,0];function cn(r){var n;if(n=lr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Pr(r,0);if(n>=2146435072)return NaN;switch(3&fn(r,an)){case 0:return Pr(an[0],an[1]);case 1:return-xr(an[0],an[1]);case 2:return-Pr(an[0],an[1]);default:return xr(an[0],an[1])}}var ln=[0,0];function yn(r){var n;if(n=lr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:xr(r,0);if(n>=2146435072)return NaN;switch(3&fn(r,ln)){case 0:return xr(ln[0],ln[1]);case 1:return Pr(ln[0],ln[1]);case 2:return-xr(ln[0],ln[1]);default:return-Pr(ln[0],ln[1])}}var vn=3.141592653589793,pn=1.4616321449683622,sn=1.4616321449683622;function bn(r){var n,t,e,u,o,f,i,a,c,l,y,p,w;if(v(r)||m(r))return r;if(0===r)return b;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Gr(r);if(n){if(r>=4503599627370496)return b;if(c=function(r){var n,t;return v(r)||m(r)?NaN:0===(n=hr(t=r%2))||1===n?dr(0,t):n<.25?yn(vn*t):n<.75?dr(cn(vn*(n=.5-n)),t):n<1.25?(t=dr(1,t)-t,yn(vn*t)):n<1.75?-dr(cn(vn*(n-=1.5)),t):(t-=dr(2,t),yn(vn*t))}(r),0===c)return b;t=Gr(vn/hr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-Gr(r),r>=pn-1+.27?(y=1-r,e=0):r>=pn-1-.27?(y=r-(sn-1),e=1):(y=r,e=2)):(w=0,r>=pn+.27?(y=2-r,e=0):r>=pn-.27?(y=r-sn,e=1):(y=r-1,e=2)),e){case 0:f=.07721566490153287+(p=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),o=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),w+=(i=y*f+o)-.5*y;break;case 1:f=.48383612272381005+(l=(p=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),w+=(i=p*f-(-3638676997039505e-33-l*(o+y*u)))-.12148629053584961;break;case 2:f=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),o=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),w+=-.5*y+f/o}else if(r<8)switch(i=(y=r-(e=s(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),w=.5*y+i/a,p=1,e){case 7:p*=y+6;case 6:p*=y+5;case 5:p*=y+4;case 4:p*=y+3;case 3:w+=Gr(p*=y+2)}else r<0x400000000000000?(c=Gr(r),l=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=p*p),w=(r-.5)*(c-1)+l):w=r*(Gr(r)-1);return n&&(w=t-w),w}function wn(r){return function(r){return l(r)===r&&r<0}(r)?NaN:bn(r+1)}function Nn(r,n,t,e){var u,o,f,i;return v(r)||v(n)||v(t)||v(e)||!y(n)||!y(t)||!y(e)||n===b||t===b||t>n||e>n?NaN:(i=d(0,e+t-n),f=A(t,e),y(r)&&i<=r&&r<=f?(o=wn(e)+wn(t)+wn(n-e)+wn(n-t),u=wn(n)+wn(r)+wn(e-r),Ir(o-(u+=wn(t-r)+wn(n-t+r-e)))):0)}function dn(r){return function(){return r}}function hn(r){var n,t,e;for(n=r.length,t=0,e=0;e<n;e++)t+=r[e];return t}function An(r,n,t,e){var u,o,f,i;if(v(r)||v(n)||v(t)||v(e)||!y(n)||!y(t)||!y(e)||n===b||t===b||t>n||e>n)return NaN;if((r=s(r))<d(0,e+t-n))return 0;if(r>=A(e,t))return 1;for((o=new M(r+1))[r]=Nn(r,n,t,e),i=r-1;i>=0;i--)f=(i+1)*(n-t-(e-i-1)),u=(t-i)*(e-i),o[i]=f/u*o[i+1];return A(hn(o),1)}return c(Nn,"factory",(function(r,n,t){var e,u;return v(r)||v(n)||v(t)||!y(r)||!y(n)||!y(t)||r===b||n===b||n>r||t>r?dn(NaN):(u=d(0,t+n-r),e=A(n,t),function(o){var f,i;return v(o)?NaN:y(o)&&u<=o&&o<=e?(i=wn(t)+wn(n)+wn(r-t)+wn(r-n),f=wn(r)+wn(o)+wn(t-o),f+=wn(n-o)+wn(r-n+o-t),Ir(i-f)):0})})),c(An,"factory",(function(r,n,t){return v(r)||v(n)||v(t)||!y(r)||!y(n)||!y(t)||r===b||n===b||n>r||t>r?dn(NaN):function(e){var u,o,f,i;if(v(e))return NaN;if((e=s(e))<d(0,t+n-r))return 0;if(e>=A(t,n))return 1;for((o=new M(e+1))[e]=Nn(e,r,n,t),i=e-1;i>=0;i--)f=(i+1)*(r-n-(t-i-1)),u=(n-i)*(t-i),o[i]=f/u*o[i+1];return A(hn(o),1)}})),An},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=n();
//# sourceMappingURL=browser.js.map
