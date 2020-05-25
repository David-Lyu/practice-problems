//given array of num look for 2 num that add up to a target

//input: array: number [], target: number (typescript)
//[1,2,3,4,5]
//want target num 6
// ask question to clear requirment first, just 1, 5 or need 2,4?

//O(n) time complexity, where n is the number of times it runs
//if its nested then O(nm), if n or length or iterartion is same the m == n

// for each number add the number and the following in the array, and iterate to the next index of the array
// if we ever hit the target, then return [...both numbers]

const twoNumberSum = (array: number[], target: number): [number,number] | []=> {
  for(let i = 0; i < array.length; i++) { //n
    const current = array[i];
    for(let j = i + 1; j < array.length; i++) { // n
      const next = array[j];
      const sum = current + next;
      if(sum === target) {
        return [curent,next];
      };
    };
  };
  return [];
};

//optimize this because O(n^2)
//helps array is sorted
//looks at first number and laster number add them together
//if the sum > target move max index by one
//if the sum < target move the lower index up by one;

const twoNumberSum = (array: number[], target: number): [number, number] | [] => {
  array.sort((a,b)=> a-b); // time complexity n*log(n) for small amount of data its almost linear, but as it gets bigger it becoms log
  let start = 0;
  let end = array.length -1;

  while(start < end) {
    const sum = array[start] + array[end];
    if( sum == target) return [array[start], array[end]]
    if( sum < target) {
      start++;
    }else if (sum > target) {
      end --
    };
  };
  return [];
};// entire time complexity n * log(n) worst case scenario actually n*log(n) + n

//optimize again
// hash table

//first iterate through array // tc n
//look at the value
//  did we see it's counterpart?
//  if so, return value and counterpart
//  [key: value]: counterpart
//  [key: counterpart]: value
//  return [];

const twoNumberSum = (array: number[], tarter: number):[number,number] | [] => {
  const seen = {}; // C
  for (let i = 0; i < array.length; i++) { //n
    const current = array[i];
    if (seen[current] !== undefined) {
      return [current, seen[current]]
    }
    const diff = target - current
    seen[current] = diff //in object will have 1: 5
    seem[diff] = current // in object will have also 5: 1
  };
}; // tc = n
//space complexity of the hash table is n or object, but technically its 2n because we stored the constant
