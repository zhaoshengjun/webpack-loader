module.exports = function(source, map) {
  this.callback(null, source.replace('SIMPLE', 'SAM'), map);
};
