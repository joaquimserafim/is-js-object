'use strict';

module.exports = isJsObject;

function isJsObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
