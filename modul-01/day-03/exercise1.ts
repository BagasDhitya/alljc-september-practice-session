let target: string = "The QuiCk BrOwN Fox"
let swapped: string = ""

// cara 1 : pakai built in method

for (let i: number = 0; i < target.length; i++) {
    let character: string = target[i]!

    // toUpperCase -> mengubah huruf jadi kapital
    // toLowerCase -> mengubah huruf jadi kecil

    if (character === character.toUpperCase()) {
        swapped += character.toLowerCase()
    } else {
        swapped += character.toUpperCase()
    }
}

console.log(" --- Cara 1 : pakai built in method --- ")
console.log(`${target} -> ${swapped}`)

// cara 2 : pakai kode ASCII
let changed: string = ""

for (let i: number = 0; i < target.length; i++) {
    let code: number = target.charCodeAt(i) // ambil kode ASCII/Unicode karakter

    if (code >= 65 && code <= 90) {
        // jika ada huruf besar, maka kita change
        changed += String.fromCharCode(code + 32) // ubah ke huruf kecil
    } else if (code >= 97 && code <= 122) {
        // jika ada huruf kecil, maka kita change
        changed += String.fromCharCode(code - 32) // ubah ke huruf besar
    } else {
        changed += target[i] // bukan huruf
    }
}

console.log(" --- Cara 1 : pakai ASCII number --- ")
console.log(`${target} -> ${changed}`)
