// reversing letter per word in sentence

//split the string into an array when seperated by " "
// for each item in this array
  //reverse the string.
  //replace the array item with that reversed string
// join the array by " "

function reverseString(string: string) {
  let i = string.length -1;
  let result = ""
  while(i >= 0 ) {
    result += string[i];
    i--
  }
  return result
}


const reverseLetters = (string: string): string => {
  const array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    const reversed = reverseString(word);
    array[i] = reversed;
  };
  return array.join(" ");
};
