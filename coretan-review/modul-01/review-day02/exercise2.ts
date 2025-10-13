let target: number = 7
let isPrime: boolean = true // kita asumsikan isPrime bernilai true di awal

if (target <= 1) {
    isPrime = false
} else {
    for (let i: number = 2; i < target; i++) {
        if (target % i === 0) {
            isPrime = false
        }
    }
}

if (isPrime) {
    console.log(`${target} is a prime number`)
} else {
    console.log(`${target} is not a prime number`)
}

