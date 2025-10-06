function createTrianglePattern(height: number) {
    for (let i: number = 1; i <= height; i++) {
        let line: string = ""     // untuk menampung setiap baris angka
        for (let j: number = 1; j <= i; j++) {
            line += j + " " // tambahkan angka dan spasi
            console.log('line : ', line)
        }

        console.log(line.trim()) // trim() -> untuk hapus spasi di ujung kanan
    }
}

createTrianglePattern(5)