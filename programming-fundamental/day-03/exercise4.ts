// cara 1 : pakai typeof
let input: any = true

// typeof -> untuk mengembalikan tipe data dalam bentuk string
if (typeof input === "string") {
    console.log(1)
} else if (typeof input === "number") {
    console.log(2)
} else {
    console.log(3)
}