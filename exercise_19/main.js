function avoidObstacles(inputArray) {
    const max = Math.max(...inputArray) + 1
    let jump = 2;
    for(let i = 2; i < max; i++) {

        const truthy = inputArray.every(input => input%i !== 0)
        if(truthy) return jump
        jump++
    }
    return jump
}

console.log(avoidObstacles([2,3]))
>>>>>>> 18625552c3b299bf7475bdb91117dbb8a6ad6e0b
