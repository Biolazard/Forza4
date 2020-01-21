function regexWinner(matrix, col, row) {
  let vertical = [];
  let horizontal = [];
  let diagonal = [];
  let diagonalInverted = [];
  let index;

  const startRowForDiagonalInverted = row >= col ? row - col : 0; // Math.max(row-col, 0)
  const startColumnForDiagonalInverted = row < col ? col - row : 0;

  const startRowDiagonal =
    row + col <= matrix.length ? 0 : row + col - matrix.length;
  const startColumnDiagonal =
    row + col <= matrix.length ? row + col : matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    //Vertical
    index = isValidIndexMatrix(i, col);
    vertical.push(index);

    // Diagonal Inverted
    index = isValidIndexMatrix(
      startRowForDiagonalInverted + i,
      startColumnForDiagonalInverted + i
    );
    if (diagonalInverted.length !== matrix.length) {
      diagonalInverted.push(index);
    }

    //Diagonal
    index = isValidIndexMatrix(startRowDiagonal + i, startColumnDiagonal - i);
    if (diagonal.length !== matrix.length) {
      diagonal.push(index);
    }

    for (let j = 0; j < matrix[0].length; j++) {
      //Horizontal
      index = isValidIndexMatrix(row, j);
      if (horizontal.length !== matrix[0].length) {
        horizontal.push(index);
      }
    }
  }
  return [
    vertical.join(""),
    horizontal.join(""),
    diagonal.join(""),
    diagonalInverted.join("")
  ];

  function isValidIndexMatrix(row, col) {
    if (row < matrix.length && col < matrix[0].length && row >= 0 && col >= 0) {
      return "" + matrix[row][col];
    } else {
      return "z";
      
    }
  }
}

export function checkCombinations(matrix, col, row, player) {
  const checkArray = regexWinner(matrix, col, row);
  const regex = new RegExp(`${player}{4}`, "g");
  return regex.test(checkArray.join("x"));
}
