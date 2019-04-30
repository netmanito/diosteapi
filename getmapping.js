var client = require('./connection.js');

client.indices.getMapping({  
    index: 'diosteodia',
    type: 'doc',
  },
function (error,response) {  
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.diosteodia.mappings.doc.properties);
    }
});
