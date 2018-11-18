const mongoCollectionPromise = require('../db/mongo-collection');
let mongoCollection;

const addIndexes = async () => {
  mongoCollection = await mongoCollectionPromise()
  console.log('creating index for id field')
  await mongoCollection.createIndex({id: 1}, {unique: 1});
  console.log('index successfully created!')
  process.exit(0);
}

addIndexes();