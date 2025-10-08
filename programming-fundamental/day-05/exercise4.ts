function sumArrays(arr1: number[], arr2: number[]) {

    // - asumsikan kedua array memiliki panjang yang sama
    // - loop setiap index dan jumlahkan elemen sesuai posisi
    // - tampung ke array baru

    // cek panjang array
    if(arr1.length !== arr2.length){
        return "Cannot sum, because they have a different length"
    }

    let result: number[] = []
    for (let i: number = 0; i < arr1.length; i++) {
        result[i] = arr1[i]! + arr2[i]!
    }
    return result
}

let arr1: number[] = [1, 2, 3]
let arr2: number[] = [3, 2, 1]
console.log(sumArrays(arr1, arr2))