"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=c(function(U,d){
function O(e){var r,a,i;for(r=e.length,a=0,i=0;i<r;i++)a+=e[i];return a}d.exports=O
});var I=c(function(V,F){
var p=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-trunc/dist'),j=require('@stdlib/math-base-special-max/dist'),g=require('@stdlib/math-base-special-min/dist'),k=require('@stdlib/stats-base-dists-hypergeometric-pmf/dist'),l=require('@stdlib/constants-float64-pinf/dist'),z=require('@stdlib/array-float64/dist'),B=m();function C(e,r,a,i){var u,n,o,s,t;if(q(e)||q(r)||q(a)||q(i)||!p(r)||!p(a)||!p(i)||r===l||a===l||a>r||i>r)return NaN;if(e=R(e),e<j(0,i+a-r))return 0;if(e>=g(i,a))return 1;for(n=new z(e+1),n[e]=k(e,r,a,i),t=e-1;t>=0;t--)o=(t+1)*(r-a-(i-t-1)),u=(a-t)*(i-t),n[t]=o/u*n[t+1];return s=B(n),g(s,1)}F.exports=C
});var P=c(function(W,A){
var y=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/utils-constant-function/dist'),E=require('@stdlib/math-base-special-trunc/dist'),G=require('@stdlib/math-base-special-max/dist'),b=require('@stdlib/math-base-special-min/dist'),H=require('@stdlib/stats-base-dists-hypergeometric-pmf/dist'),w=require('@stdlib/constants-float64-pinf/dist'),J=require('@stdlib/array-float64/dist'),L=m();function M(e,r,a){if(f(e)||f(r)||f(a)||!y(e)||!y(r)||!y(a)||e===w||r===w||r>e||a>e)return D(NaN);return i;function i(u){var n,o,s,t,v;if(f(u))return NaN;if(u=E(u),u<G(0,a+r-e))return 0;if(u>=b(a,r))return 1;for(o=new J(u+1),o[u]=H(u,e,r,a),v=u-1;v>=0;v--)s=(v+1)*(e-r-(a-v-1)),n=(r-v)*(a-v),o[v]=s/n*o[v+1];return t=L(o),b(t,1)}}A.exports=M
});var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=I(),S=P();Q(h,"factory",S);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
