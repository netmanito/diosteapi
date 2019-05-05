var client = require ('./connection.js');  
var getJSON = require('get-json');  


// function show quote from word
var quote = function(quoteLookup) {
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
var rquote = function(quote) {
    client.search({
        index: 'diosteodia',
        type: 'doc',
        _source: ['author','quote'],
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
                quote = hit;
            })
        }
    });
}
// function search quote by id
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
// function addquote
var addquote = function(addLookUp) {
  client.index({
  index: 'diosteodia',
  id: '1',	  
  type: 'doc',
  body: {
        'author': 'test',
	      'quote': addLookUp
        }
    },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
          console.log(response);
      }
    });  
}
// function delquote
var delquote = function(delLookUp) {
  client.delete({
  index: 'diosteodia',
  id: '1',	  
  type: 'doc',
    },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
          console.log(response);
      }
    });  
}

module.exports = {
  quote: quote,
  rquote: rquote,
  aquote: aquote,
  iquote: iquote,
  addquote: addquote
};
