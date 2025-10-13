function createTrianglePattern(height: number) {
    let count: number = 1 // penghitung angka

    for (let i: number = 1; i <= height; i++) {
        let line: string = ""
        for (let j: number = 1; j <= i; j++) {

            // menentukan format 2 digit (misal 1 -> 01)
            let formattedNumber: string = String(count).padStart(2, "0")
            line += formattedNumber + " "
            count++
        }

        console.log(line.trim()) // untuk hapus spasi di ujung kanan
    }
}

createTrianglePattern(4)