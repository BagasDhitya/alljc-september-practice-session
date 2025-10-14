function insertWithLimit(maxSize: number, ...values: number[]) {

    // - gunakan parameter rest (...values) untuk nampung input
    // - buat array kosong
    // - loop semua values, tambahkan sampai panjang = maxSize
    // - lewat batas dari maxSize, hentikan loop

    let result: number[] = []
    let count: number = 0

    for (let i: number = 0; i < values.length; i++) {
        if (count < maxSize) {
            result[count] = values[i]!
            count++
        } else {
            break
        }
    }

    return result
}

console.log(insertWithLimit(5, 5, 10, 24, 3, 6, 7, 8))