const pascal = function (n) {
  const currentRow = [1];
  
  // Recursive Base
  if (n === 1) { return currentRow };

  const previousLine = pascal(n - 1);
  
  // Recursive Case
  previousLine.forEach((number, i) => {
    const rightNeighbor = previousLine[i + 1] ?? 0;
    currentRow.push(number + rightNeighbor);
  })

  return currentRow;
}

// Do not edit below this line
module.exports = pascal;
