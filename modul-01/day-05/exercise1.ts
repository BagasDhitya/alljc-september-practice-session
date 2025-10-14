function getStatistics(target: number[]) {

    // - gunakan looping untuk mencari nilai minimum dan maksimum secara berulang
    // - gunakan variabel total buat menghitung jumlah semua elemen
    // - average = total / panjang array

    let lowest: number = target[0]!
    let highest: number = target[0]!
    let total: number = 0

    for (let i: number = 0; i < target.length; i++) {
        if (target[i]! < lowest) {
            lowest = target[i]!
        }
        if (target[i]! > highest) {
            highest = target[i]!
        }

        total += target[i]!
    }

    let average: number = total / target.length
    return {
        lowest,
        highest,
        average
    }
}

console.log(getStatistics([12, 5, 23, 18, 4, 45, 32]))