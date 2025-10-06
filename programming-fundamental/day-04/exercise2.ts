function findMaxValue(input: number[]) {

    // cek jika array kosong
    if (input.length === 0) {
        return 'Array is empty'
    }

    // set nilai awal untuk mencari nilai maximum
    let maxValue: number = input[0]!

    // set looping untuk mencari nilai maximum
    for (let i: number = 1; i < input.length; i++) {
        if (input[i]! > maxValue) {
            maxValue = input[i]! // update jika ditemukan nilai yang lebih besar
        }
    }

    return maxValue
}

console.log(findMaxValue([10, 55, 79, 32]))

// --- Perbedaan dengan return dan tanpa return
// function totalSumWithoutReturn(x: number, y: number): any {
//     console.log(x + y)
// }

// function totalSumWithReturn(x: number, y: number): any {
//     return x + y
// }

// console.log(totalSumWithoutReturn(2,5) + 10)
// console.log(totalSumWithReturn(2,5) + 10)