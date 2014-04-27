var operation = require('plumber').operation;
var Resource = require('plumber').Resource;

module.exports = function(statsName) {
    return operation(function(resources) {
        /* TODO: return a new Resource containing the mapping of each
         * resource path => data size as JSON
         */
        return resources; // <= change me!
    });
};
