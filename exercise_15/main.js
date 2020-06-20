function areSimilar(a, b) {
  // const aString = a.join();
  // const bString = b.join();
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
