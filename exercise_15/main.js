
function areSimilar(a, b) {
  let different = false;
  let temp = null;
  let swapped = false;
  let truthy = true;
  if (a.length !== b.length) {
    return false;
  }
  debugger;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] && !different) {
      different = true
      temp = a[i]
      continue
    }
    if (a[i] !== b[i] && different && !swapped) {
      if (b[i - 1] !== temp && b[i - 1] !== a[i]) {
        truthy = false
        break
      } else {
        swapped = true
        continue
      }
    }
    if (a[i] !== b[i] && swapped) {
      truthy = false
    }
  }
  return truthy
}

console.log(areSimilar([1,1,4],[1,2,3]))
// another problem will be on readme
function arrayChange(inputArray) {
    let incArr = 0;
    for(let i = 0; i < inputArray.length -1; i++) {
        if(inputArray[i] >= inputArray[i+1]) {
            incArr += inputArray[i] + 1 - inputArray[i+1]
            inputArray[i+1] = inputArray[i] + 1
        }
    }
    return incArr;
}

