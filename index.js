
/**
 * Module Dependencies
 */

var adapter = require('./lib/adapter');
    require('./lib/adapters/session');
    require('./lib/adapters/local');

/**
 * Module Export
 *
 * @type {[type]}
 */

var exports = module.exports = session;

/**
 * Session container object/method.
 *
 * session('hello', 123)
 *
 * @return {Function}
 */

function session (key, value) {

  if (arguments.length === 2) {
    return exports.adapter.set(key,value);
  } else {
    return exports.adapter.get(key);
  }

}

exports.adapter = null;

exports.adapters = [
    'session'
  , 'local'
];

session.init = function() {

  for (var i = 0, n = exports.adapters.length; i < n; i++) {
    if (adapter(exports.adapters[i]).supported) {
      return exports.adapter = adapter(exports.adapters[i]);
    }
  }

};

/**
 * Initialize the session engine.
 */

session.init();
