function trianglePatternSequential(height: number) {
    let num: number = 1 // variabel flag untuk mengisi angka di baris yang udah dibuat

    for (let i: number = 1; i <= height; i++) {
        let line: string = ""
        for (let j: number = 1; j <= i; j++) {
            // format angka menjadi 2 digit : tambahkan 0 jika < 10
            if (num < 10) {
                line += "0" + num
            } else {
                line += num
            }

            // tambahkan spasi ganda kecuali di akhir baris
            if (j < i) {
                line += " "
            }
            num++
        }

        console.log(line)
    }
}

trianglePatternSequential(5)