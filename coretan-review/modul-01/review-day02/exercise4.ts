let factorialTarget: number = 6
let factorial: number = 1

for (let i = factorialTarget; i >= 1; i--) {
    factorial *= i
}

console.log(`${factorialTarget}! = ${factorial} `)