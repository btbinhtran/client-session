/**
 * Module Export
 *
 * @type {Function}
 */

var exports = module.exports = adapter;


function adapter(name) {

  if (!name) {
    throw new Error("You need to specify a name to adapters.");
  }

  if (exports.adapters[name]) {
    return exports.adapters[name];
  }

  return exports.adapters[name] = new Adapter({
    name: name
  });
}

/**
 * Export Adapter Registry.
 *
 * @type {Object}
 */

exports.adapters = {};

/**
 * Adapter Constructor.
 *
 * @param {Object} options
 */

function Adapter(options) {
  this.name = options.name;
  this.methods = {};
  this.supported = false;
}

Adapter.prototype.support = function(cb) {
  this.supported = cb();
  return this;
};

Adapter.prototype.method = function(type, cb) {
  this.methods[type] = cb;
  return this;
};

Adapter.prototype.set = function(key, value) {
  if (this.methods.set)
    return this.methods.set(key, value);
};

Adapter.prototype.get = function(key) {
  return this.methods.get(key);
};
