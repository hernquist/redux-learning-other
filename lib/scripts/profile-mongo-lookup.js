const { performance } = require('perf_hooks')
const mongoCollectionPromise = require('../db/mongo-collection');

const idsToLookup = [];
let mongoCollection;
let start;
let stop;

const profileMongoLookup = async () => {
  mongoCollection = await mongoCollectionPromise()

  for (var i = 0; i < 500000; i += 5000) {
    idsToLookup.push(i)
  }

  start = performance.now();
  await mongoCollection.find({ id: { $in: idsToLookup } }).toArray();
  stop = performance.now();
  console.log("Looking up 100 records took: " + (stop - start) + " milliseconds.")
  process.exit(0);
}

profileMongoLookup();