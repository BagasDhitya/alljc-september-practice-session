// Soal 5 : Konversi hari

let days: number = 400 // tinggal diganti dengan 400 atau 366

// Cara 1 : formula dasar dengan % dan /
let years1: number = Math.floor(days / 365)
let remainingDays1: number = days % 365
let months1: number = Math.floor(remainingDays1 / 30)
let finalDays1: number = remainingDays1 % 30
console.log(days + " days -> " + years1 + " years, " + months1 + " months, " + finalDays1 + " days")

