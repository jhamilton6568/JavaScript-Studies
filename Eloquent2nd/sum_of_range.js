/* The Sum of a Range
 * Exercise 4.1 from Eloquent JS 2nd Edition
*/

function range(start, finish) {
  var numbers = [];
  if (start < finish) {
    if (step == undefined) {
      var step = 1;
    }
    for (var count = start; count <= finish; count++) {
      numbers.push(count);
    }
  }
  else {
    if (step == undefined) {
      var step = -1;
    }
    for (var count = start; count >= finish; count += step) {
      numbers.push(count);
    }
  }
  return numbers;
}

function sum(range) {
  var accumulative = 0;
  for (var count = 0; count < range.length; count++) {
    accumulative += range[count];
  }
  return accumulative;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
