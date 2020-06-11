//Psuedo code
// Define a function names isLucky that has a parameter "n" which
//is an interger of even number of digits
  //inside the function change the arguement that is passed in to a string
  //and store that value into a variable nString
  //initialize a storage variable named firstHalfSum with value equal zero
  //initialize another storage var named secondHalfSum with value equal zero
  //iterate through the first half of the string
    //change the values of string back to numbers and store in firstHalfSum
  //iterate through the second half
    //change the values of string back to numbers and store in secondHalfSum
  //check to see if firstHalfSum is equal to secondHalfSum
    //if it is return true
    //if it is not return false

function isLucky(n) {
  const nString = n.toString();
  let firstHalfSum = 0;
  let secondHalfSum = 0;
  debugger;
  for (let i = 0; i < nString.length / 2; i++) {
    firstHalfSum += parseInt(nString[i])
  }
  for (let i = nString.length / 2; i < nString.length; i++) {
    secondHalfSum += parseInt(nString[i])
  }
  console.log(firstHalfSum, secondHalfSum)
  if (firstHalfSum === secondHalfSum) {
    return true
  } else {
    return false
  }
}

isLucky(123006)
