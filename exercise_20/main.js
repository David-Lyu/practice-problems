function boxBlur(image) {
  if (!image.length) return 0;

  let length = image[0].length;
  for (let i = 1; i < image.length; i++) {
    if (image[i].length < length) {
      length = image[i].length;
    }
  }
  const blurArr = [];
  //outside start
  for (let outer = 0; outer < image.length - 2; outer++) {
    for (let i = 0; i < outer + 3; i++) {
      let newArr = []
      for (let j = 0; j < length - 2; j++) {
        let avg = 0;
        for (let k = 0; k < j + 3; k++) {
          avg += image[i][k]
        }
        newArr[outer] += avg
      }
      blurArr.push(newArr)
    }
  }
  return blurArr
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]))
