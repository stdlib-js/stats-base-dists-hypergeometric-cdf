// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){return r!=r}var s=Math.ceil;function b(r){return r<0?s(r):y(r)}var w=Number.POSITIVE_INFINITY;function N(r){return 0===r&&1/r===w}var d=Number.NEGATIVE_INFINITY;function h(r,n){var t,e,u,o;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===w||n===w?w:r===n&&0===r?N(r)?r:n:r>n?r:n;for(e=d,o=0;o<t;o++){if(p(u=arguments[o])||u===w)return u;(u>e||u===e&&0===u&&N(u))&&(e=u)}return e}function _(r){return 0===r&&1/r===d}function A(r,n){var t,e,u,o;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===d||n===d?d:r===n&&0===r?_(r)?r:n:r<n?r:n;for(e=w,o=0;o<t;o++){if(p(u=arguments[o])||u===d)return u;(u<e||u===e&&0===u&&_(u))&&(e=u)}return e}var m=1023;function U(r){return r===w||r===d}var g,j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),I=Object.prototype.toString,O=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",E=j&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return I.call(r);t=r[S],o=S,n=null!=(u=r)&&O.call(u,o);try{r[S]=void 0}catch(n){return I.call(r)}return e=I.call(r),n?r[S]=t:delete r[S],e}:function(r){return I.call(r)},F="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,H="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(F&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=g,x="function"==typeof Float64Array,k="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var L,V=G,W="function"==typeof Uint8Array,Y="function"==typeof Uint8Array?Uint8Array:null,C="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var q,z=L,B="function"==typeof Uint16Array,D="function"==typeof Uint16Array?Uint16Array:null,J="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,65536,65537]),t=n,r=(B&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q={uint16:q,uint8:z};(K=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(K.buffer)[0];!0===Z?(R=1,X=0):(R=0,X=1);var $={HIGH:R,LOW:X},rr=new V(1),nr=new P(rr.buffer),tr=$.HIGH,er=$.LOW;function ur(r,n){return rr[0]=n,r[0]=nr[tr],r[1]=nr[er],r}function or(r,n){return 1===arguments.length?ur([0,0],r):ur(r,n)}var fr,ir,ar=!0===Z?1:0,cr=new V(1),lr=new P(cr.buffer);function yr(r){return cr[0]=r,lr[ar]}!0===Z?(fr=1,ir=0):(fr=0,ir=1);var vr={HIGH:fr,LOW:ir},pr=new V(1),sr=new P(pr.buffer),br=vr.HIGH,wr=vr.LOW;function Nr(r,n){return sr[br]=r,sr[wr]=n,pr[0]}var dr=[0,0];function hr(r,n){var t,e;return or(dr,r),t=dr[0],t&=2147483647,e=yr(n),Nr(t|=e&=2147483648,dr[1])}function _r(r){return Math.abs(r)}function Ar(r,n){return p(n)||U(n)?(r[0]=n,r[1]=0,r):0!==n&&_r(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var mr=[0,0],Ur=[0,0];function gr(r,n){var t,e;return 0===n||0===r||p(r)||U(r)?r:(function(r,n){1===arguments.length?Ar([0,0],r):Ar(r,n)}(mr,r),n+=mr[1],n+=function(r){var n=yr(r);return(n=(2146435072&n)>>>20)-m|0}(r=mr[0]),n<-1074?hr(0,r):n>1023?r<0?d:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or(Ur,r),t=Ur[0],t&=2148532223,e*Nr(t|=n+m<<20,Ur[1])))}var jr=1.4426950408889634,Ir=1/(1<<28);function Or(r){var n;return p(r)||r===w?r:r===d?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ir?1+r:function(r,n,t){var e,u,o,f;return gr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=b(r<0?jr*r-.5:jr*r+.5)),1.9082149292705877e-10*n,n)}var Sr=!0===Z?1:0,Er=new V(1),Fr=new P(Er.buffer),Tr=.6931471803691238,Hr=1.9082149292705877e-10,Gr=1048575;function Pr(r){var n,t,e,u,o,f,i,a,c,l,y,v;return 0===r?d:p(r)||r<0?NaN:(o=0,(t=yr(r))<1048576&&(o-=54,t=yr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-m|0,o+=(a=614244+(t&=Gr)&1048576|0)>>20|0,i=(r=function(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}(r,t|1072693248^a))-1,(Gr&2+t)<3?0===i?0===o?0:o*Tr+o*Hr:(f=i*i*(.5-.3333333333333333*i),0===o?i-f:o*Tr-(f-o*Hr-i)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=i/(2+i))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=e+u,(a|=c)>0?(n=.5*i*i,0===o?i-(n-l*(n+f)):o*Tr-(n-(l*(n+f)+o*Hr)-i)):0===o?i-l*(i-f):o*Tr-(l*(i-f)-o*Hr-i))))}function xr(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var kr=-.16666666666666632;function Mr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(kr+u*t):r-(u*(.5*n-e*t)-n-e*kr)}var Lr=!0===Z?0:1,Vr=new V(1),Wr=new P(Vr.buffer);function Yr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],zr=16777216,Br=5.960464477539063e-8,Dr=Yr(20),Jr=Yr(20),Kr=Yr(20),Qr=Yr(20);function Rr(r,n,t,e,u,o,f,i,a){var c,l,v,p,s,b,w,N,d;for(p=o,d=e[t],N=t,s=0;N>0;s++)l=Br*d|0,Qr[s]=d-zr*l|0,d=e[N-1]+l,N-=1;if(d=gr(d,u),d-=8*y(.125*d),d-=w=0|d,v=0,u>0?(w+=s=Qr[t-1]>>24-u,Qr[t-1]-=s<<24-u,v=Qr[t-1]>>23-u):0===u?v=Qr[t-1]>>23:d>=.5&&(v=2),v>0){for(w+=1,c=0,s=0;s<t;s++)N=Qr[s],0===c?0!==N&&(c=1,Qr[s]=16777216-N):Qr[s]=16777215-N;if(u>0)switch(u){case 1:Qr[t-1]&=8388607;break;case 2:Qr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=gr(1,u)))}if(0===d){for(N=0,s=t-1;s>=o;s--)N|=Qr[s];if(0===N){for(b=1;0===Qr[o-b];b++);for(s=t+1;s<=t+b;s++){for(a[i+s]=Cr[f+s],l=0,N=0;N<=i;N++)l+=r[N]*a[i+(s-N)];e[s]=l}return Rr(r,n,t+=b,e,u,o,f,i,a)}}if(0===d)for(t-=1,u-=24;0===Qr[t];)t-=1,u-=24;else(d=gr(d,-u))>=zr?(l=Br*d|0,Qr[t]=d-zr*l|0,u+=24,Qr[t+=1]=l):Qr[t]=0|d;for(l=gr(1,u),s=t;s>=0;s--)e[s]=l*Qr[s],l*=Br;for(s=t;s>=0;s--){for(l=0,b=0;b<=p&&b<=t-s;b++)l+=qr[b]*e[s+b];Kr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Kr[s];for(n[0]=0===v?l:-l,l=Kr[0]-l,s=1;s<=t;s++)l+=Kr[s];return n[1]=0===v?l:-l,7&w}function Xr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Dr[a]=c<0?0:Cr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Dr[f+(a-c)];Jr[a]=u}return Rr(r,n,4,Jr,i,4,o,f,Dr)}var Zr=Math.round;function $r(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Zr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(yr(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(yr(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var rn=1.5707963267341256,nn=6077100506506192e-26,tn=2*nn,en=3*nn,un=4*nn,on=[0,0,0],fn=[0,0];function an(r,n){var t,e,u,o,f,i,a;if((u=2147483647&yr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?$r(r,u,n):u<=1073928572?r>0?(a=r-rn,n[0]=a-nn,n[1]=a-n[0]-nn,1):(a=r+rn,n[0]=a+nn,n[1]=a-n[0]+nn,-1):r>0?(a=r-2*rn,n[0]=a-tn,n[1]=a-n[0]-tn,2):(a=r+2*rn,n[0]=a+tn,n[1]=a-n[0]+tn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?$r(r,u,n):r>0?(a=r-3*rn,n[0]=a-en,n[1]=a-n[0]-en,3):(a=r+3*rn,n[0]=a+en,n[1]=a-n[0]+en,-3):1075388923===u?$r(r,u,n):r>0?(a=r-4*rn,n[0]=a-un,n[1]=a-n[0]-un,4):(a=r+4*rn,n[0]=a+un,n[1]=a-n[0]+un,-4);if(u<1094263291)return $r(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Vr[0]=r,Wr[Lr]}(r),a=Nr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)on[f]=0|a,a=16777216*(a-on[f]);for(on[2]=a,o=3;0===on[o-1];)o-=1;return i=Xr(on,fn,e,o),r<0?(n[0]=-fn[0],n[1]=-fn[1],-i):(n[0]=fn[0],n[1]=fn[1],i)}var cn=[0,0];function ln(r){var n;if(n=yr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:xr(r,0);if(n>=2146435072)return NaN;switch(3&an(r,cn)){case 0:return xr(cn[0],cn[1]);case 1:return-Mr(cn[0],cn[1]);case 2:return-xr(cn[0],cn[1]);default:return Mr(cn[0],cn[1])}}var yn=[0,0];function vn(r){var n;if(n=yr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Mr(r,0);if(n>=2146435072)return NaN;switch(3&an(r,yn)){case 0:return Mr(yn[0],yn[1]);case 1:return xr(yn[0],yn[1]);case 2:return-Mr(yn[0],yn[1]);default:return-xr(yn[0],yn[1])}}var pn=3.141592653589793,sn=1.4616321449683622,bn=1.4616321449683622;function wn(r){var n,t,e,u,o,f,i,a,c,l,y,v,s;if(p(r)||U(r))return r;if(0===r)return w;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Pr(r);if(n){if(r>=4503599627370496)return w;if(c=function(r){var n,t;return p(r)||U(r)?NaN:0===(n=_r(t=r%2))||1===n?hr(0,t):n<.25?vn(pn*t):n<.75?hr(ln(pn*(n=.5-n)),t):n<1.25?(t=hr(1,t)-t,vn(pn*t)):n<1.75?-hr(ln(pn*(n-=1.5)),t):(t-=hr(2,t),vn(pn*t))}(r),0===c)return w;t=Pr(pn/_r(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-Pr(r),r>=sn-1+.27?(y=1-r,e=0):r>=sn-1-.27?(y=r-(bn-1),e=1):(y=r,e=2)):(s=0,r>=sn+.27?(y=2-r,e=0):r>=sn-.27?(y=r-bn,e=1):(y=r-1,e=2)),e){case 0:f=.07721566490153287+(v=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),o=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),s+=(i=y*f+o)-.5*y;break;case 1:f=.48383612272381005+(l=(v=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(i=v*f-(-3638676997039505e-33-l*(o+y*u)))-.12148629053584961;break;case 2:f=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),o=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+f/o}else if(r<8)switch(i=(y=r-(e=b(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+i/a,v=1,e){case 7:v*=y+6;case 6:v*=y+5;case 5:v*=y+4;case 4:v*=y+3;case 3:s+=Pr(v*=y+2)}else r<0x400000000000000?(c=Pr(r),l=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=v*v),s=(r-.5)*(c-1)+l):s=r*(Pr(r)-1);return n&&(s=t-s),s}function Nn(r){return function(r){return y(r)===r&&r<0}(r)?NaN:wn(r+1)}function dn(r,n,t,e){var u,o,f,i;return p(r)||p(n)||p(t)||p(e)||!v(n)||!v(t)||!v(e)||n===w||t===w||t>n||e>n?NaN:(i=h(0,e+t-n),f=A(t,e),v(r)&&i<=r&&r<=f?(o=Nn(e)+Nn(t)+Nn(n-e)+Nn(n-t),u=Nn(n)+Nn(r)+Nn(e-r),Or(o-(u+=Nn(t-r)+Nn(n-t+r-e)))):0)}function hn(r){return function(){return r}}function _n(r){var n,t,e;for(n=r.length,t=0,e=0;e<n;e++)t+=r[e];return t}function An(r,n,t,e){var u,o,f,i;if(p(r)||p(n)||p(t)||p(e)||!v(n)||!v(t)||!v(e)||n===w||t===w||t>n||e>n)return NaN;if((r=b(r))<h(0,e+t-n))return 0;if(r>=A(e,t))return 1;for((o=new V(r+1))[r]=dn(r,n,t,e),i=r-1;i>=0;i--)f=(i+1)*(n-t-(e-i-1)),u=(t-i)*(e-i),o[i]=f/u*o[i+1];return A(_n(o),1)}function mn(r,n,t){return p(r)||p(n)||p(t)||!v(r)||!v(n)||!v(t)||r===w||n===w||n>r||t>r?hn(NaN):function(e){var u,o,f,i;if(p(e))return NaN;if((e=b(e))<h(0,t+n-r))return 0;if(e>=A(t,n))return 1;for((o=new V(e+1))[e]=dn(e,r,n,t),i=e-1;i>=0;i--)f=(i+1)*(r-n-(t-i-1)),u=(n-i)*(t-i),o[i]=f/u*o[i+1];return A(_n(o),1)}}l(dn,"factory",(function(r,n,t){var e,u;return p(r)||p(n)||p(t)||!v(r)||!v(n)||!v(t)||r===w||n===w||n>r||t>r?hn(NaN):(u=h(0,t+n-r),e=A(n,t),function(o){var f,i;return p(o)?NaN:v(o)&&u<=o&&o<=e?(i=Nn(t)+Nn(n)+Nn(r-t)+Nn(r-n),f=Nn(r)+Nn(o)+Nn(t-o),f+=Nn(n-o)+Nn(r-n+o-t),Or(i-f)):0})})),l(An,"factory",mn),r.default=An,r.factory=mn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).cdf={});
//# sourceMappingURL=browser.js.map