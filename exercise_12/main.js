function reverseString(arr,length) {
    let reversedString = "";
// need an index end
    for(let i = length; i >= 0; i--) {
        for(let j = arr[i].length - 1; j >= 0; j--) {
            if(i === 0) {
                reversedString += arr[i][j];
                if(j === 0) break;
                continue;
            }
            arr[i-1] += arr[i][j]
        }
    }
    return reversedString
}
function reverseInParentheses(inputString) {
    let arr = inputString;
    let openParenth = false;
    let temp = [];
    let tempIndex = 0;
    let nonParenth = "";
    let reversedString = ""
    //give order to when to add nonParenth
    debugger;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "(") {
            if(!openParenth) {
                openParenth = true;
            } else {
                tempIndex++
            }
            continue;
        }
        if(openParenth && arr[i] !== ")") {
            if(!temp[tempIndex]) {
                temp[tempIndex] = ""
            }
            temp[tempIndex] += arr[i]
            continue
        }
        if(arr[i] === ")" && openParenth) {
            reversedString = reverseString(temp,tempIndex)
            tempIndex++
            openParenth = false
            continue;
        }
        if(arr[i] !== ")") {
            nonParenth += arr[i]
        }
    }
    return nonParenth + reversedString
}

console.log(reverseInParentheses("abc(123(zyx))"))