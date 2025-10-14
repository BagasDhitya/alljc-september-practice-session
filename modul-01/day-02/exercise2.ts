let value: number = 7
let isPrime: boolean = true; // variable flag -> asumsi awal nilai isPrime adalah true#

// cara 1 : pakai loop for
console.log(" --- Cara 1 : pakai loop for --- ")
if (value <= 1) {
    isPrime = false
} else {
    for (let i: number = 2; i < value; i++) {
        if (value % i === 0) {
            isPrime = false
        }
    }
}

if (isPrime) {
    console.log(value, ' is a prime number')
} else {
    console.log(value, ' is not a prime number')
}

// cara 2 : pakai built in method Array.every()
// Array.every() -> untuk cek apakah setiap elemen tidak bisa membagi habis N

console.log(" --- Cara 2 : pakai Array.every() --- ")
let range: number[] = []
for (let i: number = 2; i < value; i++) {
    range.push(i)
}

let primeCheck: boolean = false
if (value > 1) {
    range.every((i) => value % i !== 0)
    primeCheck = true
}

if (primeCheck) {
    console.log(value, " is a prime number")
} else {
    console.log(value, " is not a prime number")
}