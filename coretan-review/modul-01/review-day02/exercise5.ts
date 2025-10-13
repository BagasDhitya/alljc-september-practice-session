let fiboN: number = 15
let x: number = 0
let y: number = 1

console.log(`Fibonacci up to ${fiboN} : `)
console.log(x)
console.log(y)

for (let i: number = 2; i <= fiboN; i++) {
    let next: number = x + y
    console.log(next)
    x = y
    y = next
}