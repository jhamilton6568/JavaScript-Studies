/* Bean Counting
 * Exercise 3.3 from Eloquent JS 2nd Edition
*/

function countChar(word,letter) {
  var instances = 0;
  for (var count = 0; count < word.length; count++) {
    if (word.charAt(count) === letter) {
      instances++;
    }
  }
  return instances;
}

function countBs(word) {
  return countChar(word,"B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
