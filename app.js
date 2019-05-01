// var express = require('express');
// var app = express();
var client = require('./connection.js');
var argv = require('yargs').argv;
var functions = require('./functions.js');

/* if (argv.search) {
  var quoteLookup=argv.search;
  console.log("Search term: "+quoteLookup);
  results(quoteLookup);
} */
if (argv.search) {
  functions.results(argv.search, function(results) {
      console.log(results);
  });
} 

if (argv.rquote) {
  functions.rquote(function(rquote) {
     console.log(rquote);
  });
}
// ADD THESE TWO LINES
//var rquote = require('./functions.js');
//app.use('/rquote', results);

//module.exports = app;
