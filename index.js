
/**
 * Module Export
 *
 * @type {[type]}
 */

module.exports = session;

/**
 * Session container object/method.
 *
 * session('hello', 123)
 *
 * @return {Function}
 */

function session(key, value) {

  if (!value) {
    return session.keys[key];
  }

  session.keys[key] = value;

  return session;
}

/**
 * Temp in-memory sessions.
 *
 * @todo Backup the data using adapters for the various
 *       local storage implementations. The front facing
 *       interface will be in-memory (for speed).
 *
 * @type {Object}
 */

session.keys = {};