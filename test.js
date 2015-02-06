'use strict';

var test        = require('tape');
var isJsObject  = require('./');

test('should test valids JS Objects', function(assert) {
  assert.deepEqual(isJsObject({a: 1}), true);
  /*jshint -W010 */
  assert.deepEqual(isJsObject(new Object()), true);
  assert.end();
});

test('should test invalids JS Objects', function(assert) {
  /*jshint -W009 */
  ['1', 1, null, undefined, [], false, Object, new Array()]
    .forEach(function(value) {
      assert.deepEqual(isJsObject(value), false);
    });
  assert.end();
});
