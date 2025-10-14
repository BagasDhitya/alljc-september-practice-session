class FactorialCalculator {

    public findFactorial(num: number): any {
        // base case : jika num <= 1, maka kembalikan 1 (karena 1! = 1 dan 0! = 1)
        if (num <= 1) {
            return 1
        }

        // jika num > 2, maka hitung pakai rekursif
        return num * this.findFactorial(num - 1)
    }

    // method untuk menampilkan proses
    public showCalculation(num: number) {
        let expression: string = ""

        for (let i: number = num; i >= 1; i--) {
            expression += i
            if (i > 1) {
                expression += ' x '
            }
        }

        const result = this.findFactorial(num)
        return `${num}! = ${expression} = ${result}`
    }
}

let factorial = new FactorialCalculator()
console.log(factorial.showCalculation(5))