/* Deep Comparison
 * Exercise 4.4 for Eloquent JS 2nd Edition
*/

function deepEqual(value1, value2) {
  if (typeof(value1) == "object" && typeof(value1) != null && typeof(value2) == "object" && typeof(value2) != null) {
  	
  }
  if (value1 === value2) {
    return true;
  }
  else {
    return false;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
