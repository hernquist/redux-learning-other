const { performance } = require('perf_hooks')

let objects = []
let start;
let stop;

for (var i = 0; i < 20000; i++) {
  const dummyObj = {id: i}
  objects.push(dummyObj)
}

// The slow way with Arrays:

start = performance.now();
for (var i = 0; i < 20000; i++) {
  objects.find(obj => obj == {id: i})
}
stop = performance.now();
console.log("Find using array comparisons took: " + (stop - start) + " milliseconds.")


// Now you try with objects (make it fast!)

// TODO: Make the objects by IDs

// start = performance.now();
//
// for (var i = 0; i < 20000; i++) {
//   // TODO: lookup all objects by IDs
// }
//
// stop = performance.now();
// console.log("Find using object lookups took: " + (stop - start) + " milliseconds.")