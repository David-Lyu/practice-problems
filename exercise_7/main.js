function matrixElementsSum(matrix) {
  let compare = 0;
  const hashTable = {}
  for (let i = 0; i < matrix.length; i++) {
    const innerArr = matrix[i]
    for (let j = 0; j < innerArr.length; j++) {
      if (innerArr[j] === 0) {
        hashTable[j] = true;
      }
      if (hashTable[j]) {
        continue
      } else {
        compare += innerArr[j]
      }
    }
  }
  return compare
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]
console.log(matrixElementsSum(matrix))
