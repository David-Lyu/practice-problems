function palindromeRearranging(inputString) {
  const hashMap = {};
  for (let i = 0; i < inputString.length; i++) {
    if (!hashMap[inputString[i]]) {
      hashMap[inputString[i]] = 1
    } else {
      hashMap[inputString[i]]--
    }
  }
  let one = false;
  for (const counter in hashMap) {
    if (hashMap[counter] === 1 && !one) {
      one = true
      continue
    }
    if (hashMap[counter] !== 0 && one) {
      return false
    }
  }
  return true
}

console.log(palindromeRearranging("aabaa"))
