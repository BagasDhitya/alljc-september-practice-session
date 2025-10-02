let F: number = 6

// cara 1 : manual dengan for
let factorial: number = 1
let count: string = ""

for (let i: number = F; i > 0; i--) {
    factorial *= i
    count += i
    if (i > 1) {
        count += " x "
    }
}

console.log(`${count} = ${factorial}`)