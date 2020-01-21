export function checkCombinations(
  matrix,
  currentPlayer,
  lastRowSelected,
  lastColumnSelected
) {
  let count = 0;
  let playerWinner;
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  function checkIfValidCount(valueMatrix) {
    if (valueMatrix === currentPlayer) {
      count++;
      if (count === 4) {
        return currentPlayer;
      }
    } else {
      count = 0;
    }
  }
  for (let i = 0; i < numberOfColumns; i++) {
    playerWinner = checkIfValidCount(matrix[lastRowSelected][i]);
    if (playerWinner) {
      return playerWinner;
    }
  }
  for (let i = 0; i < numberOfRows; i++) {
    playerWinner = checkIfValidCount(matrix[i][lastColumnSelected]);
    if (playerWinner) {
      return playerWinner;
    }
  }
  const firstRowDiagonal =
    lastRowSelected >= lastColumnSelected
      ? lastRowSelected - lastColumnSelected
      : 0;
  const firstColumnDiagonal =
    lastColumnSelected >= lastRowSelected
      ? lastColumnSelected - lastRowSelected
      : 0;
  for (
    let i = 0;
    firstRowDiagonal + i < numberOfRows &&
    firstColumnDiagonal + i < numberOfColumns;
    i++
  ) {
    playerWinner = checkIfValidCount(
      matrix[firstRowDiagonal + i][firstColumnDiagonal + i]
    );
    if (playerWinner) {
      return playerWinner;
    }
  }
  const rowPlusColumn = lastRowSelected + lastColumnSelected;
  const firstRowDiagonalInverted =
    rowPlusColumn <= numberOfColumns - 1
      ? 0
      : rowPlusColumn - (numberOfColumns - 1);
  const firstColumnDiagonalInverted =
    rowPlusColumn <= numberOfColumns - 1 ? rowPlusColumn : numberOfColumns - 1;
  for (
    let i = 0;
    firstRowDiagonalInverted + i < numberOfRows &&
    firstColumnDiagonalInverted - i >= 0;
    i++
  ) {
    playerWinner = checkIfValidCount(
      matrix[firstRowDiagonalInverted + i][firstColumnDiagonalInverted - i]
    );
    if (playerWinner) {
      return playerWinner;
    }
  }
}
