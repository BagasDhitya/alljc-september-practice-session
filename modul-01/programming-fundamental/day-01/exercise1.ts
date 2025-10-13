// Soal 1 : Luas persegi panjang

let length: number = 5
let width: number = 3

console.log("---- Cara 1 : perkalian biasa ----")
// cara 1 : manual perkalian
// konsep -> luas = width * length
let area1: number = width * length
console.log("Area1 (manual) : ", area1)

console.log("---- Cara 2 : dengan looping ----")
// cara 2 : looping/perulangan

// --- konsep looping
// let items: string[] = ['milk', 'egg', 'rice', 'cooking oil']
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i])
// }

let area2: number = 0
for (let i = 0; i < width; i++) {
    area2 += length
}
console.log("Area 2 (pakai looping) : ", area2)

