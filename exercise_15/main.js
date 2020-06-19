function arrayChange(inputArray) {
    let incArr = 0;
    for(let i = 0; i < inputArray.length -1; i++) {
        if(inputArray[i] >= inputArray[i+1]) {
            incArr += inputArray[i] + 1 - inputArray[i+1]
            inputArray[i+1] = inputArray[i] + 1
        }
    }
    return incArr;
}
