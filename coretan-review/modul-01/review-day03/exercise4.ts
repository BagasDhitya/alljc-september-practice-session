// cara 1 : pakai regular expression
let price: number = 1000000
let formattedPrice: string = "Rp " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00"
console.log('with regular expression : ',formattedPrice)

// cara 2 : pakai toLocaleString
let value: number = 1000000
let formattedValue: string = value.toLocaleString("id-ID", {
    style: 'currency',
    currency: 'IDR'
})
console.log('with toLocaleString : ', formattedValue)