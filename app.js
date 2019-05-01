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

// function search word in quote
if (argv.quote) {
  functions.results(argv.quote, function(results) {
      console.log(results);
  });
} 

// function search quote by author
if (argv.aquote) {
  functions.aquote(argv.aquote, function(aquote) {
    console.log(aquote);
 });
}

// function search quote by id
if (argv.iquote) {
  functions.iquote(argv.iquote, function(iquote) {
    console.log(iquote);
 });
}

// function random quote
if (argv.rquote) {
  functions.rquote(function(rquote) {
     console.log(rquote);
  });
}


// ADD THESE TWO LINES
//var rquote = require('./functions.js');
//app.use('/rquote', results);

//module.exports = app;
