function boxBlur(image) {
  if (!image.length) return 0;

  let length = image[0].length;
  for (let i = 1; i < image.length; i++) {
    if (image[i].length < length) {
      length = image[i].length;
    }
  }
  const blurArr = [];
  
  
  let avg = 0
  //goes to next vertical square
  for(let vertIndex = 0; vertIndex < image.length -2; vertIndex++) {
    //goes to next horizontal square
    let index = vertIndex
    for(let horiIndex = 0; horiIndex < length -2; horiIndex++) {
      //grabs verticle on index
      while(index < vertIndex + 3) {
        //grabs horizontal on index
        let inner = horiIndex
        while(inner < horiIndex + 3) {
          avg += image[index][inner];
          inner++
        }
        index++
      }
      if(!blurArr[vertIndex]){
        blurArr[vertIndex] = []
      }
      blurArr[vertIndex].push(Math.floor(avg/9))
      avg = 0;
      index = vertIndex;
    }
  }


  return blurArr
}

console.log(boxBlur([[1, 1, 1, 1,2], [1, 7, 1, 1, 2], [1, 1, 1, 1,2],[1,1,1]]))