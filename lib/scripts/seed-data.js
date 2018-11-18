const mongoCollectionPromise = require('../db/mongo-collection');
let mongoCollection;

(async () => {

  const seedData = async () => {
    mongoCollection = await mongoCollectionPromise()
    await clearDatabase();
    console.log("Seeding records.");
    const result = await mongoCollection.insertMany(records());
    if (result.result.ok === 0)
      throw new Error(`Unable to insert to mongo. Errors: ${result.getRawResponse().writeErrors}`);
    console.log("Records Successfully Seeded!");
    process.exit(0);
  }
  seedData();

  // -- private below here --

  const buildRecord = (id, percentOff) =>
  ({
    id,
    discounts: {
      percentOff: Math.floor(Math.random()*100)
    }
  })

  const records = () => {
    result = [];
    for(let i = 0; i < 50000; i++) {
      result.push(buildRecord(i+1))
    }
    return result;
  }

  const clearDatabase = async () => {
    console.log('Clearing Database')
    await mongoCollection.remove({});
  }

})();