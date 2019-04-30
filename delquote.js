var client = require('./connection.js');

client.delete({  
  index: 'diosteodia',
  id: '1',
  type: 'doc'
},function(err,resp,status) {
    console.log(resp);
});
