/**
 * Module Dependencies
 */
var adapter = require('./../adapter');


adapter('local')
  .support(function() {
    if (typeof(Storage) === "undefined") {
      return false;
    }
    return true;
  })
  .method('set', function(key, value) {
    return localStorage.setItem(key, value);
  })
  .method('get', function(key) {
    return localStorage.getItem(key);
  })