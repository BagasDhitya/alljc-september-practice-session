// Soal 6 : Menghitung selisih hari

let date1: string = "2022-01-20"
let date2: string = "2022-01-22"

// Cara 1 : built in date object
let d1: Date = new Date(date1)
let d2: Date = new Date(date2)

console.log(d1.getTime())
console.log(d2.getTime())

let diff: any = Math.abs((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24))
console.log('Difference date : ', diff)