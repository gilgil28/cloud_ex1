var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var res;

var findExcercises = function(db, callback){
	var cursor = db.collection('restaurants').find({ "restaurant_id": "50018889" });
	cursor.each(function(err, doc){
		assert.equal(err, null);
		if (doc != null){
			res = doc;
			console.dir(res);
		} else{
			callback();
		}
	});
	
};



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findExcercises(db, function() {
      db.close();
  });
});



