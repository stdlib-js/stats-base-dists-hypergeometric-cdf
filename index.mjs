// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function f(t){var s,e,n;for(s=t.length,e=0,n=0;n<s;n++)e+=t[n];return e}function l(t,a,l,j){var p,h,v,c,u;if(e(t)||e(a)||e(l)||e(j)||!s(a)||!s(l)||!s(j)||a===d||l===d||l>a||j>a)return NaN;if((t=n(t))<r(0,j+l-a))return 0;if(t>=i(j,l))return 1;for((h=new o(t+1))[t]=m(t,a,l,j),u=t-1;u>=0;u--)v=(u+1)*(a-l-(j-u-1)),p=(l-u)*(j-u),h[u]=v/p*h[u+1];return c=f(h),i(c,1)}function j(t,l,j){return e(t)||e(l)||e(j)||!s(t)||!s(l)||!s(j)||t===d||l===d||l>t||j>t?a(NaN):function(s){var d,a,p,h,v;if(e(s))return NaN;if((s=n(s))<r(0,j+l-t))return 0;if(s>=i(j,l))return 1;for((a=new o(s+1))[s]=m(s,t,l,j),v=s-1;v>=0;v--)p=(v+1)*(t-l-(j-v-1)),d=(l-v)*(j-v),a[v]=p/d*a[v+1];return h=f(a),i(h,1)}}t(l,"factory",j);export{l as default,j as factory};
//# sourceMappingURL=index.mjs.map
