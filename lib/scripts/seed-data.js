const mongoCollectionPromise = require('../db/mongo-collection');
let mongoCollection;

const records = () => {
  result = [];
  for(let i = 0; i < 50000; i++) {
    const record = { id: result.length + 1, percentOff: Math.floor(Math.random()*100) }
    result.push(record)
  }
  return result;
}

const clearDatabase = async () => {
  console.log('Clearing Database')
  await mongoCollection.remove({});
}

const seedData = async () => {
  mongoCollection = await mongoCollectionPromise()
  await clearDatabase();
  console.log("Seeding records.");
  const result = await mongoCollection.insertMany(records());
  if (result.result.ok === 0)
    throw new Error(`Unable to insert to mongo. Errors: ${result.getRawResponse().writeErrors}`);
  console.log("Records Successfully Seeded!");
  process.exit(0)
}

seedData();