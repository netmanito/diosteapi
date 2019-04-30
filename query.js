var client = require('./connection.js');

client.search({  
  index: 'diosteodia',
  type: 'doc',
  // fields: ['author','quote'],
  size: 5,
  body: {
    query: {
      match: { 'quote': 'culo' }
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
