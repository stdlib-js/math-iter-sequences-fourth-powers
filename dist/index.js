"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(j,s){
var h=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function y(i,r){return h(r)?w(r,"iter")&&(i.iter=r.iter,!x(r.iter))?new TypeError(o('0a72t',"iter",r.iter)):null:new TypeError(o('0a72V',r));}s.exports=y
});var g=v(function(F,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),O=f(),P=9741;function c(i){var r,e,a,n,t;if(r={iter:P},arguments.length&&(n=O(r,i),n))throw n;return t=-1,e={},u(e,"next",m),u(e,"return",q),l&&u(e,l,p),e;function m(){return t+=1,a||t>=r.iter?{done:!0}:{value:t*t*t*t,done:!1}}function q(b){return a=!0,arguments.length?{value:b,done:!0}:{done:!0}}function p(){return c(r)}}d.exports=c
});var E=g();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
