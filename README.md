<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# reverseDimensions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a view of an input ndarray in which the order of elements along specified dimensions is reversed.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reverseDimensions from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reverse-dimensions@deno/mod.js';
```

#### reverseDimensions( x, dims, writable )

Returns a view of an input ndarray in which the order of elements along specified dimensions is reversed.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]

var y = reverseDimensions( x, [ 0, 1 ], false );
// returns <ndarray>[ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dims**: dimension indices along which to reverse elements. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.
-   **writable**: boolean indicating whether a returned ndarray should be writable.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import reverseDimensions from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reverse-dimensions@deno/mod.js';

// Create a 3x2 matrix:
var x = array( [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] );

// Reverse the order of the first axis:
var y = reverseDimensions( x, [ 0 ], false );
var arr = ndarray2array( y );
// returns [ [ 5, 6 ], [ 3, 4 ], [ 1, 2 ] ]

// Reverse the order of the second axis:
y = reverseDimensions( x, [ 1 ], false );
arr = ndarray2array( y );
// returns [ [ 2, 1 ], [ 4, 3 ], [ 6, 5 ] ]

// Reverse the order of all axes:
y = reverseDimensions( x, [ 0, 1 ], false );
arr = ndarray2array( y );
// returns [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]

// Supports negative dimension indices:
y = reverseDimensions( x, [ -2, -1 ], false );
arr = ndarray2array( y );
// returns [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-reverse-dimensions.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-reverse-dimensions

[test-image]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-reverse-dimensions/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-reverse-dimensions?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-reverse-dimensions.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-reverse-dimensions/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-reverse-dimensions/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-reverse-dimensions/main/LICENSE

</section>

<!-- /.links -->
