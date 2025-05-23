<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Hypergeometric][hypergeometric-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution]. The [cumulative distribution function][cdf] for a [hypergeometric][hypergeometric-distribution] random variable is

<!-- <equation class="equation" label="eq:hypergeometric_cdf" align="center" raw="F(x;N,K,n) =\sum_{i=0}^{\lfloor x \rfloor} \frac{{K \choose i}{N-K \choose n-i}}{{N \choose n}}" alt="Cumulative distribution function for a hypergeometric distribution."> -->

```math
F(x;N,K,n) =\sum_{i=0}^{\lfloor x \rfloor} \frac{{K \choose i}{N-K \choose n-i}}{{N \choose n}}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;N,K,n) =\sum_{i=0}^{\lfloor x \rfloor} \frac{{K \choose i}{N-K \choose n-i}}{{N \choose n}}" data-equation="eq:hypergeometric_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/cdf/docs/img/equation_hypergeometric_cdf.svg" alt="Cumulative distribution function for a hypergeometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-hypergeometric-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-hypergeometric-cdf' );
```

#### cdf( x, N, K, n )

Evaluates the [cumulative distribution function][cdf] for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = cdf( 1.0, 8, 4, 2 );
// returns ~0.786

y = cdf( 1.5, 8, 4, 2 );
// returns ~0.786

y = cdf( 2.0, 8, 4, 2 );
// returns 1.0

y = cdf( 0.0, 8, 4, 2);
// returns ~0.214
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 10, 5, 2 );
// returns NaN

y = cdf( 0.0, NaN, 5, 2 );
// returns NaN

y = cdf( 0.0, 10, NaN, 2 );
// returns NaN

y = cdf( 0.0, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 10.5, 5, 2 );
// returns NaN

y = cdf( 2.0, 10, 1.5, 2 );
// returns NaN

y = cdf( 2.0, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or subpopulation size `K` exceed the population size `N`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 10, 5, 12 );
// returns NaN

y = cdf( 2.0, 8, 3, 9 );
// returns NaN
```

#### cdf.factory( N, K, n )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var mycdf = cdf.factory( 30, 20, 5 );
var y = mycdf( 4.0 );
// returns ~0.891

y = mycdf( 1.0 );
// returns ~0.031
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var cdf = require( '@stdlib/stats-base-dists-hypergeometric-cdf' );

var i;
var N;
var K;
var n;
var x;
var y;

for ( i = 0; i < 10; i++ ) {
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    x = round( randu() * K );
    y = cdf( x, N, K, n );
    console.log( 'x: %d, N: %d, K: %d, n: %d, F(x;N,K,n): %d', x.toFixed( 4 ), N, K, n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-hypergeometric-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/hypergeometric_distribution

</section>

<!-- /.links -->
