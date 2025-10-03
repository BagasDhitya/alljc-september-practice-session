let arr: number[] = [42, 27, 18]

arr.sort((a, b) => a - b)
console.log(" --- Cara 1 : pakai sort --- ")
console.log(arr)

console.log(" --- Cara 2 : pakai manual --- ")

let x: number = 42
let y: number = 27
let z: number = 18

if (x > y) {
    [x, y] = [y, x]
}
if (x > z) {
    [x, z] = [z, x]
}
if (y > z) [
    [y, z] = [z, y]
]

console.log(x, y, z)