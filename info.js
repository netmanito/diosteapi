var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'diosteodia',type: 'doc'},function(err,resp,status) {
  console.log("doc",resp);
});
