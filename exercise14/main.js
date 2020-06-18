function addBorder(picture) {
  const newArr = [];
  const outSideBorder = picture[0].length + 2
  for (let i = 0; i < picture.length; i++) {
    if (i === 0) {
      newArr.push("*".repeat(outSideBorder))
    }
    newArr.push("*" + picture[i] + "*")
    if (i === picture.length - 1) {
      newArr.push("*".repeat(outSideBorder))
    }
  }
  return newArr
}

console.log(addBorder(["abc","def"]))
