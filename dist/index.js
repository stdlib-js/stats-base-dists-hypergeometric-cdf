/** @license Apache-2.0 */

'use strict';

/**
* Hypergeometric distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-hypergeometric-cdf
*
* @example
* var cdf = require( '@stdlib/stats-base-dists-hypergeometric-cdf' );
*
* var y = cdf( 1.0, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 1.5, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 2.0, 8, 4, 2 );
* // returns 1.0
*
* y = cdf( 0.0, 8, 4, 2 );
* // returns ~0.214
*
* var mycdf = cdf.factory( 30, 20, 5 );
* y = mycdf( 4.0 );
* // returns ~0.891
*
* y = mycdf( 1.0 );
* // returns ~0.031
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
