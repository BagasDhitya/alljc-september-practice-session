function calculateBMI(weight: number, height: number) {
    // hitung pakai formula BMI
    const bmi = weight / (height * height)
    console.log(`BMI Anda adalah ${bmi.toFixed(2)}`)

    // klasifikasi berdasarkan BMI
    if (bmi < 18.5) {
        return "less weight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal"
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "overweight"
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}

console.log(calculateBMI(45, 1.6))
console.log(calculateBMI(60, 1.7))
console.log(calculateBMI(75, 1.7))
console.log(calculateBMI(95, 1.7))
console.log(calculateBMI(120, 1.7))