function sortByHeight(a) {
  let temp = -Infinity
  let index = 0
  debugger;
  for( let i = 0; i < a.length; i++) {
    for(let j = 0; j < a.length; j++) {
      if(a[j] === -1 || a[i] === -1) {
        continue
      }
      if(i < j) {
        if(a[i] > a[j]) {
          temp = a[i]
          a[i] = a[j]
          a[j] = temp}
        }
      }
    }
    return a
  }


console.log(sortByHeight([2,5,-1,1]))

// function sortByHeight(a) {
//   let newArr = a
//   let temp = -Infinity;
//   let index = 0
//   for (let i = 0; i < a.length; i++) {
//     if (newArr[i] === -1) {
//       continue
//     }
//     for (let j = 0; j < a.length; j++) {
//       if (i === j) {
//         continue
//       }
//       if (temp !== -Infinity) {

//         if (i > index) {
//           if (newArr[i] < newArr[index]) {
//             newArr[index] = newArr[i]
//             newArr[i] = temp;
//             temp = -Infinity
//           }
//         }
//         if (i < index) {
//           if (newArr[i] > newArr[index]) {
//             newArr[index] = newArr[i]
//             newArr[i] = temp
//             temp = -Infinity
//           }
//         }
//       }
//       if (newArr[i] > newArr[j] && temp === -Infinity && newArr[j] !== -1) {
//         temp = newArr[i]
//         newArr[i] = newArr[j]
//         newArr[j] = temp
//         temp = -Infinity
//         continue
//       }
//       if (newArr[j] === -1 && newArr[i] !== -1) {
//         temp = newArr[i]
//         index = i;
//         continue
//       }
//     }
//   }
//   return newArr

// }
