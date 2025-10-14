function findSecondSmallest(arr: number[]) {

    // - urutkan array nya secara ascending
    // - ambil elemen ke 1 (index 1)
    // -> karena index[0] pasti nilai terkecil
    // - pakai method sort() untuk mengurutkan arraynya

    let sorted: number[] = arr.sort((a, b) => a - b)
    return sorted[1]
}

let target: number[] = [5, 3, 1, 7, 2, 6]
console.log(findSecondSmallest(target)) 