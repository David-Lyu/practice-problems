function arrayMaximalAdjacentDifference(inputArray) {
    let storeNum = null;
    debugger;
    for(let i = 0; i < inputArray.length; i++) {
        if(i === 0) {
            storeNum = inputArray[i] - inputArray[i+1];
            continue
        }
        if(i === inputArray.length -1) {
            const newStore = inputArray[i] - inputArray[i-1];
            storeNum = storeNum > newStore ? storeNum : newStore;
            continue
        }
        const compareLeft = inputArray[i] - inputArray[i-1];
        const compareRight = inputArray[i] - inputArray[i+1];
        const newStore = compareLeft > compareRight ? compareLeft : compareRight;
        storeNum = storeNum > newStore ? storeNum : newStore
    }
    return storeNum
}
arrayMaximalAdjacentDifference([1,2,3,4])