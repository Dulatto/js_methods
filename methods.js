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
//////////////////////////////////////////////////////////////////////////////////////////////////
// copyWithin() method

const array7 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array7.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array7.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

///////////////////////////////////////////////////////////////////////////////////////////////////
// entries() method
// The entries() method returns a new Array Iterator
// object that contains the key/value pairs for each index in the array.

const array8 = ['a', 'b', 'c'];

const iterator1 = array8.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

////////////////////////////////////////////////////////////////////////////////////////////////
// every() method should return
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array9 = [1, 30, 39, 29, 10, 13];

console.log(array9.every(isBelowThreshold));

////////////////////////////////////////////////////////////////////////////////////////////

//fill() method
//The fill() method changes all elements in an array to a static value, 
//from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array10 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array10.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array10.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array10.fill(6));
// expected output: [6, 6, 6, 6]

//fill(value)
//fill(value, start)
//fill(value, start, end)

////////////////////////////////////////////////////////////////////////////////////////////////////
// filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

///////////////////////////////////////////////////////////////////////////////////////////////
// find() method
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const array11 = [5, 12, 8, 130, 44];

const found = array11.find(element => element > 10);

console.log(found);
// expected output: 12

/////////////////////////////////////////////////////////////////////////////////////////////////
// findIndex() method
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
//  Otherwise, it returns -1, indicating that no element passed the test.

const array12 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 20;

console.log(array12.findIndex(isLargeNumber));

///////////////////////////////////////////////////////////////////////////////////////////////////
//flat() method
//The flat() method creates a new array with all sub-array elements concatenated
//into it recursively up to the specified depth.

const arr13 = [0, 1, 2, [3, 4]];

console.log(arr13.flat());
// expected output: [0, 1, 2, 3, 4]

const arr20 = [0, 1, 2, [[[3, 4]]]];

console.log(arr20.flat(2));
// expected output: [0, 1, 2, [3, 4]]

/////////////////////////////////////////////////////////////////////////////////////////////////
//forEach() method
//The forEach() method executes a provided function once for each array element.

const array14 = ['a', 'b', 'c'];

array14.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/////////////////////////////////////////////////////////////////////////////////////////////
// includes() method
//The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.
const array15 = [1, 2, 3];

console.log(array15.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false