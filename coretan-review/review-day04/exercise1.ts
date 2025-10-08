function trianglePattern(height: number) {

    // loop dari 1 sampai height untuk menentukan jumlah baris
    for (let i: number = 1; i <= height; i++) {
        let line: string = "" // untuk menyimpan baris saat ini
        for (let j: number = 1; j <= i; j++) {
            line += j// tambahkan angka ke line
            if (j < i) {
                line += " " // tambahkan spasi ganda antara angka, kecuali setelah angka terakhir
            }
        }

        console.log(line)
    }
}

trianglePattern(5)