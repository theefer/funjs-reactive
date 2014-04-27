var glob       = require('plumber-glob');
var uglify     = require('plumber-uglifyjs');
var write      = require('plumber-write');
var all        = require('plumber-all');
var mincss     = require('plumber-mincss');

var filestats  = require('./operations/plumber-filestats');
var gzip       = require('./operations/plumber-gzip');

module.exports = function(pipelines) {

  var files = glob('*.js', 'operations/**/*.js');

  pipelines['stats'] = [
    files,
    filestats('filestats'),
    write('stats')
  ];

  /*
  pipelines['stats-gzip'] = [
    glob('Plumbing.js'),
    uglify(),
    gzip(),
    write('compressed')
  ];
   */

};
