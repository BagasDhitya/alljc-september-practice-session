let value1: number = 42
let value2: number = 27

// cara 1 : pakai built in method
console.log(" --- Cara 1 : pakai Math.max --- ")
console.log(Math.max(value1, value2))

// cara 2 : manual
console.log(" --- Cara 2 : pakai manual --- ")
if(value1 > value2){
    console.log(value1)
} else {
    console.log(value2)
}