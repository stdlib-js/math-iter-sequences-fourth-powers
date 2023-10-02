"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=v(function(j,s){
var h=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function y(t,r){return h(r)?w(r,"iter")&&(t.iter=r.iter,!x(r.iter))?new TypeError(o('0a72t',"iter",r.iter)):null:new TypeError(o('0a72V',r));}s.exports=y
});var g=v(function(F,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),O=f(),P=9741;function c(t){var r,i,a,n,e;if(r={iter:P},arguments.length&&(n=O(r,t),n))throw n;return e=-1,i={},u(i,"next",m),u(i,"return",q),l&&u(i,l,p),i;function m(){return e+=1,a||e>=r.iter?{done:!0}:{value:e*e*e*e,done:!1}}function q(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var E=g();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
