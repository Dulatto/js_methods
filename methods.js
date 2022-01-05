//Array methods
//Length method
var items = ['shoes', 'shirts', 'socks', 'sweaters'];
items.length;
//console.log(items.length);

// Concat() method
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

//console.log(array3);

// copyWithin() method

const array7 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array7.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array7.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]


// entries() method
// The entries() method returns a new Array Iterator
// object that contains the key/value pairs for each index in the array.

const array8 = ['a', 'b', 'c'];

const iterator1 = array8.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

// every() method should return
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array9 = [1, 30, 39, 29, 10, 13];

console.log(array9.every(isBelowThreshold));