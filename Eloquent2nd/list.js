/* A List
 * Exercise 4.3 from Eloquent JS 2nd Edition
*/

function arrayToList(elements) {
  var list = null;
  for (var i = elements.length -1; i >= 0; i--) {
    list = {
      value: elements[i],
      rest: list
    };
  }
  return list;
}

function listToArray(list) {
  var list_array = [];
  for (var node = list; node; node = node.rest) {
    list_array.push(node.value);
  }
  return list_array;
}

function prepend(element, list) {
  var newlist = {
    value: element,
    rest: list
  };
  return newlist;
}

function nth(list, number) {
  if (list.rest != null && number > 0) {
    return nth(list.rest, number - 1);
  }
  else if (number == 0) {
    return list.value;
  }
  else {
    return undefined;
  }
}

console.log(arrayToList([1, 2]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList([1, 2, 3])), 1));
