// Soal 4 : Menghitung sudut ketiga dari sebuah segitiga

let a: number = 80
let b: number = 65

// Cara 1 : formula dasar
// total sudut segitiga = 180
let c1 = 180 - (a + b)
console.log("Angle1 : ", c1)

// Cara 2 : array.reduce
let givenAngle: number[] = [a, b]
let sumAngles: number = givenAngle.reduce((sum, val) => sum + val, 0)
let c2 = 180 - sumAngles
console.log("Angle2 ; ", c2)