function sumDuplicate(arr: number[]) {

    // - loop setiap elemen untuk menghitung berapa kali jumlah kemunculan
    // - jika muncul lebih dari sekali, tambahkan ke total
    // - pastikan setiap duplicate hanya dihitung sekali aja

    let total: number = 0
    let counted: number[] = [] // untuk nyiapin elemen yang sudah dihitung
    let countedIndex: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        let current = arr[i]
        let occurences = 0

        // hitung jumlah kemunculan current
        for (let j: number = 0; j < arr.length; j++) {
            if (arr[j] === current) {
                occurences++
            }
        }

        // jika muncul lebih dari sekali dan belum dihitung
        let alreadyCounted = false
        for (let k: number = 0; k < counted.length; k++) {
            if (counted[k] === current) {
                alreadyCounted = true
            }
        }

        if (occurences > 1 && !alreadyCounted) {
            total += current! * occurences // hitung jumlah duplikat saja
            counted[countedIndex] = current!
            countedIndex++
        }
    }

    return total
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]))