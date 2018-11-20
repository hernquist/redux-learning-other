const { performance } = require('perf_hooks')

let arrayOfIds = []
let start;
let stop;

for (var i = 0; i < 50000; i++) {
  arrayOfIds.push(i)
}

// The slow way with Arrays:

start = performance.now();
for (var i = 0; i < 50000; i++) {
  arrayOfIds.find(id => id == i)
}
stop = performance.now();
console.log("Seeing if an id is contained within an Array took: " + (stop - start) + " milliseconds.")


// Now you try with Sets (make it fast!)

// TODO: Make the set

start = performance.now();

for (var i = 0; i < 50000; i++) {
  setOfIds.has(i)
}

stop = performance.now();
console.log("Seeing if an id is contained within an Set took: " + (stop - start) + " milliseconds.")