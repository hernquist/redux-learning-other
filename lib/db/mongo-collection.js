const { MongoClient } = require("mongodb");
const dbName = 'lunchAndLearn';
const collectionName = 'blackFridayDeals';
let collection;

module.exports = async () => {
  if(collection) return collection;
  const connectionString = `mongodb://localhost:27017/${dbName}`;
  console.log(`Connecting to Mongo DB: ${dbName} & Collection: ${collectionName}`);
  const conn = await MongoClient.connect(connectionString);
  console.log("Connected to Mongo successfully!");
  collection = conn.collection(collectionName);
  return collection;
}