var client = require ('./connection.js');  
var getJSON = require('get-json');  

var results = function(quoteLookup,callback) {
client.search({
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 1,
  body: {
        query: {
            function_score: {
                    query: { match: { 'quote': quoteLookup }
        },
                boost: 5,
                random_score: {},
                boost_mode: 'multiply'
        }
  },
 }
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
var rquote = function() {
client.search({
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 1,
  body: {
        query: {
            function_score: {
                    query: { match_all: {}
        },
                boost: 5,
                random_score: {},
                boost_mode: 'multiply'
        }
  },
 }
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
module.exports = {
  results: results,
  rquote: rquote
};
