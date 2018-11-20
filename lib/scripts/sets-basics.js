// initial values
let animalArray = ['🐷', '🐢', '🐷', '🐷'];

const pig = ('🐷');
const panda = ('🐼');
const turtle = ('🐢');
const squirrel = ('🐿');

let set = new Set(animalArray);

// Use these methods to pass the tests: .has​ .size​ .add​ .delete​ .clear​ .forEach.

// #1
// use a method on 'set' to determine its size/length
// store the value in a variable named 'length' to pass the first test

let length // RE_WRITE this line

// test 1
if (length === 2) {
  console.log('test 1--PASSING')
} else {
  console.error('test 1--FAILING')
}

// #2
// add an animal to 'set' so that the size of set goes up to 3

// set...  RE-WRITE this line

// test 2
if (set.size === 3) {
   console.log('test 2--PASSING')
} else {
  console.error('test 2--FAILING')
}

// #3
// add another animal to the set so that the set stays the same

let newSet = new Set([pig, turtle])
newSet.add(squirrel) // RE-WRITE this line of code to pass the test

// test 3
if (newSet.size === 2) {
  console.log('test 3--PASSING')
} else {
  console.error('test 3--FAILING')
}

// #4
// using newSet, implement a method to pass the next test
// newSet...   COMPLETE this line 

// test 4
if (newSet.size === 1) {
  console.log('test 4--PASSING')
} else {
  console.error('test 4--FAILING')
}

// #5
// using newSet, implement a different method to pass the next test
// newSet...  COMPLETE this line 

// test 5
if (newSet.size === 0) {
  console.log('test 5--PASSING')
} else {
  console.error('test 5--FAILING')
}

// #6
// create anotherSet by calling new on it with an argument to pass the test
let anotherSet = new Set // RE-WRITE this code

// test 6
if (anotherSet.has('🐷')) {
  console.log('test 6--PASSING')
} else {
  console.error('test 6--FAILING')
}

// #7 and #8
// last challenge, make a new set, Animals, that contains all the animals
// so all the animals are console logged

let str = '';
let animals = [] // RE-WRITE this line of code
animals.forEach(animal => str += animal);

console.log('test 7--' + str); // make all the animals show up

// test 8
if (str === '🐿🐼🐢🐷') {
  console.log ('test 8--PASSING');
} else {
  console.log ('test 8--FAILING');
}
