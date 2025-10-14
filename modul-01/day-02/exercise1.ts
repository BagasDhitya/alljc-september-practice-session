// contoh angka yang mau dicek
let value1: number = 25
let value2: number = 2

// Cara 1 : menggunakan modulus (%)
console.log(" ---- Cara 1 : Modulus ---- ")

if (value1 % 2 === 0) {
    console.log(value1, " -> even number")
} else {
    console.log(value1, " -> odd number")
}

if (value2 % 2 === 0) {
    console.log(value2, " -> even number")
} else {
    console.log(value2, " -> odd number")
}

// Cara 2 : built in bawaan (Number.isInteger())
// Number.isInteger() -> untuk mengecek apakah sebuah nilai bertipe integer (bilangan bulat)
// kalau hasil bagi adalah integer -> genap
// kalau hasil bagi adalah non integer -> ganjil

console.log(" ---- Cara 2 : Number.isInteger() ---- ")

if (Number.isInteger(value1 / 2)) {
    console.log(value1, " -> even number")
} else {
    console.log(value1, " -> odd number")
}

if (Number.isInteger(value2 / 2)) {
    console.log(value2, " -> even number")
} else {
    console.log(value2, " -> odd number")
}