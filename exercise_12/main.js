function reverseString(arr,length = arr.length - 1, endIndex = 0) {
    let reversedString = "";
    if(arr.length === 0) return reversedString
    for(let i = length; i >= endIndex; i--) {
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
    let reversedString = "";
    let parenthChecker = 0
    debugger;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "(") {
            if(!openParenth) {
                openParenth = true;
            } else {
                tempIndex++
            }
            parenthChecker++
            continue;
        }
        if(arr[i] === ")") {
            parenthChecker--
        }
        if(openParenth && arr[i] !== ")") {
            if(!temp[tempIndex]) {
                temp[tempIndex] = ""
            }
            temp[tempIndex] += arr[i]
            continue
        }
        if(arr[i] === ")" && parenthChecker === 0) {
            reversedString = reverseString(temp,tempIndex)
            nonParenth += reversedString
            reversedString = ""
            temp = [];
            tempIndex = 0;
            openParenth = false
            continue;
        }
        if(arr[i] === ")" && /[^)]/g.test(arr[i+1]) && arr[i+1]) {
            temp[tempIndex] = reverseString([temp[tempIndex]]);
            temp = [temp.join("")];
            tempIndex = 0;
            continue;
        }
        if(arr[i] !== ")") {
            nonParenth += arr[i]
        }
    }
    return nonParenth
}

console.log(reverseInParentheses("foo(avc(def)123)abc"))