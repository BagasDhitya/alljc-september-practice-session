let sentence: string = "An apple a day keeps the doctor away"
let result: string = ""

for (let i: number = 0; i < sentence.length; i++) {
    let char: string = sentence[i]!

    if (char === "a" || char === "A") {
        result += "*"
    } else {
        result += char
    }
}

console.log(`${sentence} -> ${result}`)