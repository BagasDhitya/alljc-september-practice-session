function removeOddNumbers(arr: number[]) {
    let evenNumbers: number[] = [] // untuk nampung hasil cleaning dari bilangan ganjil

    for (let i: number = 0; i < arr.length; i++) {
        // jika angka genap, maka masukkan ke evenNumber
        if (arr[i]! % 2 === 0) {
            evenNumbers.push(arr[i]!)
        }
    }

    return evenNumbers
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))