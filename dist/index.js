"use strict";var d=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var l=d(function(E,s){"use strict";var m=require("@stdlib/slice-base-args2multislice"),g=require("@stdlib/slice-ctor"),q=require("@stdlib/ndarray-base-slice"),c=require("@stdlib/array-base-nulls"),f=require("@stdlib/ndarray-base-ndims"),h=require("@stdlib/ndarray-base-to-unique-normalized-indices"),o=require("@stdlib/array-base-join"),t=require("@stdlib/string-format");function w(n,r,v){var a,e,i,u;if(e=f(n),e===0)throw new TypeError(t("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",e));if(i=h(r,e-1),i===null)throw new RangeError(t("invalid argument. Specified dimension index is out-of-bounds. Must be on the interval: [-%u, %u]. Value: `[%s]`.",e,e-1,o(r,", ")));if(i.length!==r.length)throw new Error(t("invalid argument. Must provide unique dimension indices. Value: `[%s]`.",o(r,", ")));for(a=c(e),u=0;u<i.length;u++)a[i[u]]=new g(null,null,-1);return q(n,m(a),!0,v)}s.exports=w});var p=l();module.exports=p;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
