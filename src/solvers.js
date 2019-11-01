/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  // loop through n times
  // each loop we create 0
  // debugger;
  // var board = window.Board.prototype.rows();
  debugger;
  var newBoard = new Board({n: n});
  // var temp = new Board({n: n}).attributes;
  var solution = [];
  for (var key in temp) {
    solution.push(temp[key]);
  }
  solution.splice(-1, 1);
  console.log(solution);
  solution[0][0] = 1;
  // var randomIdx = Math.floor(Math.random() * Math.floor(n-1));

  for (let i = 0; i < solution.length; i++) {
    for ( let j = 0; j < solution[i].length; j++) {
      if (newBoard.hasAnyRooksConflicts()) {
        solution[i][j] = 0;
      }
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function (n) {
//   var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function (n) {
//   var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
// };

// // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// window.countNQueensSolutions = function (n) {
//   var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };
