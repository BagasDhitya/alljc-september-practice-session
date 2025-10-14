// Soal 3 : Menghitung diameter, keliling, dan luas lingkaran

let radius: number = 5

// Cara 1 : formula dasar
let diameter1: number = 2 * radius
let circumference1: number = 2 * Math.PI * radius
let areaCircle1: number = Math.PI * radius * radius

let finalResult1: { diameter: number, circumference: number, areaCircle: number } = {
    diameter: diameter1,
    circumference: circumference1,
    areaCircle: areaCircle1
}

console.log("Circle 1 : ", finalResult1)

// Cara 2 : pakai Math.pow
let diameter2: number = 2 * radius
let circumference2: number = 2 * Math.PI * radius
let areaCircle2: number = Math.PI * Math.pow(radius, 2)

let finalResult2: { diameter: number, circumference: number, areaCircle: number } = {
    diameter: diameter2,
    circumference: circumference2,
    areaCircle: areaCircle2
}

console.log("Circle 2 : ", finalResult2)