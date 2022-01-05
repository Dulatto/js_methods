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