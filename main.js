var mongoose = require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');


//parameters are:model name,schema, collection name
//un modelo para cada coleccion
var User= mongoose.model('User2',schema,'users2');

var user = new user({
    name: 'Karen Covarrubias',
    email: 'karen@covarrubias.io'
});

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved :)");
    process.exit(0);
});

