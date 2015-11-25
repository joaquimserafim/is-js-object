'use strict';

module.exports = isJsObject;

function isJsObject(obj) {
  return /^\[object (?:object|global|window)\]$/i
    .test(Object.prototype.toString.call(obj));
}
