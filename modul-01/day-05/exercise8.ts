function combineArrays(arr1: number[], arr2: number[]) {

    // - buat array baru untuk menampung gabungan dua array
    // - tambahkan semua elemen arr1 ke array baru
    // - tambahkan semua elemen arr2 ke array baru

    let combined: number[] = []

    // looping untuk arr1
    for (let i: number = 0; i < arr1.length; i++) {
        combined[combined.length] = arr1[i]!
    }

    // looping untuk arr2
    for (let j: number = 0; j < arr2.length; j++) {
        combined[combined.length] = arr2[j]!
    }

    return combined
}

let arr1: number[] = [1, 2, 3]
let arr2: number[] = [4, 5, 6]
console.log(combineArrays(arr1, arr2))