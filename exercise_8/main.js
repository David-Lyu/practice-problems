function allLongestStrings(inputArray) {
  let length = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > length) {
      length = inputArray[i].length
    }
  }
  const storageArr = []
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === length) {
      storageArr.push(inputArray[i])
    }
  }
  return storageArr;
}
