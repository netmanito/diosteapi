var client = require('./connection.js');

client.index({  
  index: 'diosteodia',
  id: '1',
  type: 'doc',
  body: {
    "author": "Ipswich",
    "quote": "E14000761",
  }
},function(err,resp,status) {
    console.log(resp);
});
