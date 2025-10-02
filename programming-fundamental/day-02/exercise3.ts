let N: number = 5

// cara 1 : manual dengan loop for
console.log(" --- Cara 1 : pakai loop for --- ")

let sum: number = 0 // asumsikan total belum diketahui
let count: string = ""

for (let i: number = 1; i <= N; i++) {
    sum += i
    count += i
    if (i < N) {
        count += " + "
    }
}

console.log(`${count} = ${sum}`)

// cara 2 : pakai rumus
console.log(" --- Cara 2 : pakai rumus = (N x (N + 1)) / 2 --- ")
let sumFormula: number = (N * (N + 1)) / 2
console.log(`${count} = ${sumFormula}`)