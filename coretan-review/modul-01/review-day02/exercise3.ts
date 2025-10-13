let N: number = 5
let sum: number = 0

// cara 1 : pakai looping
for (let i: number = 1; i <= N; i++) {
    sum += i
}

console.log(" ---- Cara 1 : pakai looping --- ")
console.log(`Sum 1 to ${N} = ${sum}`)

// cara 2 : pakai rumus (N x (N + 1)) / 2
let value: number = (N * (N + 1)) / 2
console.log(" ---- Cara 2 : pakai rumus aritmatika --- ")
console.log(`Sum 1 to ${N} = ${value}`)