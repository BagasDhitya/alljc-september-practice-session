function sumNumbers(mixedArray: any[]) {

    // - loop semua elemen array
    // - jika tipe datanya number, maka tambahkan ke total
    // - jika tipe datanya "string" tetapi bisa dikonversi ke number, ubah dulu pakai Number()
    // - abaikan selain tipe data yang udah disebutkan diatas

    let total: number = 0

    for (let i: number = 0; i < mixedArray.length; i++) {
        let value = mixedArray[i]

        // periksa setiap index yang bertipe data number
        if (typeof value === "number") {
            total += value
        }
    }
    return total
}

let mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2]
console.log(sumNumbers(mixedArray))