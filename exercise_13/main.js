function alternatingSums(a) {
  let altSumArr = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      altSumArr[0] += a[i]
    } else {
      altSumArr[1] += a[i]
    }
  }
  return altSumArr
}
