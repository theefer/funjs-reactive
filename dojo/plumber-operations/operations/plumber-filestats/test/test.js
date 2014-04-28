require('should');

var runOperation = require('plumber-util-test').runOperation;

var Resource = require('plumber').Resource;

var filestats = require('..');


describe('filestats', function(){
  var resources;

  beforeEach(function() {
    resources = [
      new Resource({
        type: 'javascript',
        path: 'path/to/file.js',
        data: 'var n = 42;'
      }),
      new Resource({
        type: 'css',
        path: 'path/to/file.css',
        data: '.n {color: #422}'
      })
    ];
  });


  it('should be a function', function(){
    filestats.should.be.type('function');
  });

  it('should throw an error if no name is provided', function(){
    (function() {
      filestats().should.be.type('function');
    }).should.throw();
  });

  it('should return a function', function(){
    filestats('stats').should.be.type('function');
  });


  describe('run on two resources', function() {
    var output;

    beforeEach(function() {
      output = runOperation(filestats('stats'), resources).resources;
    });


    it('should produce a stats mapping', function(done){
      output.toArray(function(statsResources) {
        statsResources.length.should.equal(1);
        statsResources[0].filename().should.equal('stats.json');
        statsResources[0].type().should.equal('json');

        var mapping = JSON.parse(statsResources[0].data());
        Object.keys(mapping).length.should.equal(2);
        mapping['path/to/file.js'].should.equal(11);
        mapping['path/to/file.css'].should.equal(16);
        done();
      });
    });
  });


  it('should produce an empty mapping if no resources as input', function(){
    var output = runOperation(filestats('stats'), []).resources;
    output.toArray(function(statsResources) {
      statsResources.length.should.equal(1);
      statsResources[0].filename().should.equal('stats.json');
      statsResources[0].data().should.equal('{}');
    });
  });

});
