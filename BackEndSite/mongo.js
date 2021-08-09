const Mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

Mongo.connect(url, function(err,db)
{
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("usuarios").findOne({}, function(err,result){
        console.log(result.name);
        db.close();
    })
})