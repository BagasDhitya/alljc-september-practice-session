let N: number = 15

// cara 1 : pakai for loop
console.log(" --- Cara 1 : pakai for loop --- ")

let fibonacci: number[] = [0, 1]
for (let i: number = 2; i <= N; i++) {
    fibonacci[i] = fibonacci[i - 1]! + fibonacci[i - 2]!
}

console.log(`Fibonacci ke-${N} = ${fibonacci[N]}`)