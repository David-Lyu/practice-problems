function almostIncreasingSequence(sequence) {
  let placeholder = null;
  let hasSkipped = false;
  console.log(sequence)
  for(let i = 0; i < sequence.length - 1; i++) {
    debugger
    placeholder = sequence[i-1];
    if(sequence[i] < sequence[i + 1]) {
      continue
    }
    if(sequence[i] >= sequence[i + 1] && hasSkipped) {
      return false;
    }
    if(sequence[i] >= sequence[i + 1] && !hasSkipped) {
      hasSkipped = true;
      if (!sequence[i + 2]) {
        return true
      }
      if(sequence[i] < sequence[i+2]) {
        continue;
      } else if (!placeholder) {
        continue
      } else {
        if (placeholder < sequence[i + 1]) {
          continue
        }else {
          return false;
        }
      }
    }
  }
  return true;
}
//this is where we check [i + 2]
//if yes continue
//check for placeholder truthy
  //if [i+2] is no then check placeholder < [i + 1]
  //if yes go to next index skip? continue
  //if no return false
//if placeholder is not truthy
  //continue

  // console.log(newArr)
  // for(let i = 0; i < newArr.length; i++) {
  //   if(newArr[i] > newArr[i+1]) {
  //     return false;
  //   }
  // }
console.log(almostIncreasingSequence([3,5,67,98,3]))
