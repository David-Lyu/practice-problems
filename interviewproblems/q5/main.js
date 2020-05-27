//given an array of numbers
//find the first nnumber that has a duplicate in the array

//for every item in the array
//cache that item into that hash table  // constant look up time
//if we have already seen that item, return that item
//if we havent seen that item save to cache
const findDupe = (array: number[]): number => {
  const cache: {
    [key: number]: boolean;
  } = {}
  for (const item of array) {
    if (cache[item] !== undefined) {
      return item;
    };
    cache[item] = true;
  };
  return -1;
};
