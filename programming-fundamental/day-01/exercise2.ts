// Soal 2 : Keliling persegi panjang

let length: number = 5
let width: number = 3

// Cara 1 : formula keliling persegi panjang
// Konsep -> keliling = 2 x (length + width)
let perimeter1: number = 2 * (length + width)
console.log("Perimeter 1 (formula) : ", perimeter1)

// Cara 2 : array.reduce
let sides: number[] = [length, width, length, width]
let perimeter2: number = sides.reduce((sum, val) => sum + val, 0)
console.log('Perimeter 2 (reduce) : ', perimeter2)
