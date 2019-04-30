var client = require('./connection.js');
var argv = require('yargs').argv;

var results = function(quoteLookup) {
client.search({  
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 1,
  body: {
        query: {
          match: { 'quote': quoteLookup }
        },
 },	  
},function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
    });
}
if (argv.search) {
  var quoteLookup=argv.search;
  console.log("Search term: "+quoteLookup);
  results(quoteLookup);
}
