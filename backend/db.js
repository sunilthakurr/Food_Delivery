const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://harshikasaxena2206:18Aq6Dd7p9fcrDUq@cluster0.okz33y1.mongodb.net/'
 const mongoURI = "mongodb+srv://harshikasaxena2206:18Aq6Dd7p9fcrDUq@cluster0.okz33y1.mongodb.net/gofoodmern";
//const mongoURI = "mongodb://harshikasaxena2206:18Aq6Dd7p9fcrDUq@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/gofoodmernssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority";

 

 // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray( function (err, data) {
 
                const categoryCollection =  mongoose.connection.db.collection("food_Category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
         });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            //  });
        }
    })
};
