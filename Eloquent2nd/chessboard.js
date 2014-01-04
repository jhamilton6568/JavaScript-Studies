/* Chess Board
 * Exercise 2.3 from Eloquent JS 2nd Edition
*/

var size = 8;
var chessboard = "";
for (var line = 1; line <= size; line++) {
  for (var cursor = 1; cursor <= size; cursor++) {
    if (line % 2 != 0 && cursor % 2 != 0 || line % 2 == 0 && cursor % 2 == 0) {
      chessboard += "#";
    }
    else {
      chessboard += " ";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
