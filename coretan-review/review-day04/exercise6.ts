function removeOddNumbers(target: number[]) {
    let result: number[] = [] // untuk nampung array baru yang berisi elemen genap
    for (let i: number = 0; i < target.length; i++) {
        if (target[i]! % 2 === 0) {
            //   result.push(target[i]!) 
            result[result.length] = target[i]!
        }
    }

    return result
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))