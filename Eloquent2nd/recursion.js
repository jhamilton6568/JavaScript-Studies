/* Recursion
 * Exercise 3.2 from Eloquent JS 2nd Edition
*/

function isEven(number) {
  // Handle negative numbers
  if (number < 0) {
    return isEven(-number);
  }
  // Value of zero is accepted as even and returned as true
  else if (number === 0) {
    return true;
  }
  // Value of one is accepted as odd and returned as false
  else if (number === 1) {
    return false;
  }
  // Other values recursively call isEven subtracting two with each call
  else {
    return isEven(number - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
