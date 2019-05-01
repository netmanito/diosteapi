var client = require ('./connection.js');  
var getJSON = require('get-json');  


// function show quote from word
var results = function(quoteLookup) {
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
// function show quote from author
var aquote = function(authorLookup) {
  client.search({
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 1,
   body: {
        query: {
            function_score: {
                    query: { match: { 'author': authorLookup }
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
// function show random quote  
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
var iquote = function(idLookUp) {
  client.search({
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 1,
  body: {
        query: { match: {'id': idLookUp}
        }
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
  rquote: rquote,
  aquote: aquote,
  iquote: iquote
};
