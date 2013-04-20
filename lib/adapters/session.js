/**
 * Module Dependencies
 */
var adapter = require('./../adapter');


adapter('session')
  .support(function() {
    if (typeof(Storage) === "undefined") {
      return false;
    }
    return true;
  })
  .method('set', function(key, value) {
    return sessionStorage.setItem(key, value);
  })
  .method('get', function(key) {
    return sessionStorage.getItem(key);
  });

