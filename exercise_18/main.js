function isIPv4Address(inputString) {
    debugger;
    const inputArr = inputString.split(".")
    console.log(inputArr)
    if(inputArr.length !== 4) {
        return false
    }
    for(let i = 0; i < inputArr.length; i++) {
        if(inputArr[i].length === 0) {
            return false
        }

        const number = Number(inputArr[i])
        if(isNaN(number) || (inputArr[i][0] == 0 && inputArr[i].length != 1)) {
            return false
        }

        if(number >= 0 && number <= 255) {
            continue
        } else {
            return false
        }
    }
    return true
}

console.log(isIPv4Address("172.16.254.00"))
