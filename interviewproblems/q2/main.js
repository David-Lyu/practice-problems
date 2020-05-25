//given two string find out if they are anagrams of each other
//


//easiest way is to sort the strings

//count letters for both words and see if they match
// [letter: string]: number

//for each letter of a string
  //increase letter count by 1 in the hashtable
  //for the other string decrement letter count by 1
//if table is empty, then return true
  //otherwise return false

  interface Letters {
    [letter:string]: number
  };

const isAnagram = (string1: string, string2: string): boolean => {
  const letters: Letters = {};
  if (string1.length !== string2.length) return false;
  for (let i = 0; i < string1.length; i++) {
    const letter1 = string1[i]
    const letter2 = string2[i]

    if(letters[letter1] !== undefined) {
      letters[letter1]++;
      if(letters[letter1] === 0) delete letters[letter1]
    } else {
      letters[letter1] = 1;
    };

    if (letters[string2] !== undefined) {
      letters[letter2]--;
      if(letters[letter2] === 0) delete letters[letter1]
    } else {
      letters[letter2] = -1
    };
  };
  const keys = Object.keys(letters);
  return !keys.length;
};
