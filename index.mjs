// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(e,t){return n(t)?r(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(s("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",t))}function d(n){var r,i,s,m,l;if(r={iter:9741},arguments.length&&(m=o(r,n)))throw m;return l=-1,e(i={},"next",p),e(i,"return",a),t&&e(i,t,u),i;function p(){return l+=1,s||l>=r.iter?{done:!0}:{value:l*l*l*l,done:!1}}function a(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return d(r)}}export{d as default};
//# sourceMappingURL=index.mjs.map
