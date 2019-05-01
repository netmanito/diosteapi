var client = require('./connection.js');

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
      console.log('search error: '+error)
    }
    else {
      console.log('--- Response ---');
      console.log('Total hits: ',response.hits.total);
      console.log('--- Hits ---');
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
