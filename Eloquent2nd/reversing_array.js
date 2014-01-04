/* Reversing an Array
 * Exercise 4.2 from Eloquent JavaScript 2nd Edition
*/

function reverseArray(given) {
  var reversed = [];
  for (var count = given.length -1; count >= 0; count--) {
    reversed.push(given[count]);
  }
  return reversed;
}

function reverseArrayInPlace(given) {
  for (var count = (Math.floor(given.length / 2)) -1; count >= 0; count --) {
    var hold = given[count];
    given[count] = given[given.length - 1 - count];
    given[given.length - 1 - count] = hold;
  }
  return given;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
