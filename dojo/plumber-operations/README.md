# Implement Plumber operations

[Plumber](https://github.com/plumberjs/plumber) is a build tool based
on declarative pipelines of operations.  Internally, it uses [Highland streams](http://highlandjs.org/).


## Setup

First, you need NodeJS and NPM installed.

Install the `plumber-cli` globally:

```
$ npm install -g plumber-cli
```

(Alternatively, you can install it locally without `-g` and run it
with `./node_modules/.bin/plumber`.)

Install all the dependencies:

```
$ npm install
```

You should now be able to run the default pipelines:

```
$ plumber
```


## File size statistics

Implement a new operation that maps all the input resources to a
single JSON resource, which maps the path of each file to its size in
bytes.

Plumber operations are functions that receive a Highland stream of
"executions" as input. Each item in that stream represents a single
run of the pipeline, and as such, is itself a Highland stream of
resources.  Looking at the code of existing operations should help
give some insight as to how this all works.


### Useful references

* [Highland API](http://highlandjs.org/)
* [Existing Plumber operations](https://github.com/plumberjs/plumber#operations)
* [Plumber Resource model](https://github.com/plumberjs/plumber/blob/master/lib/model/resource.js)


## Gzip

Implement a new operation that maps each input resource to a new
resource with the contents gzipped.



### Note

* You may need to add a new content-type mapping for "gz" to Plumber in [resource.js](https://github.com/plumberjs/plumber/blob/master/lib/model/resource.js#L58) and [supervisor.js](https://github.com/plumberjs/plumber/blob/master/lib/util/supervisor.js#L25).

### Useful references

* [Plumber operation helper](https://github.com/plumberjs/plumber/blob/master/lib/core.js#L60)
