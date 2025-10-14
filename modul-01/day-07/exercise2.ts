class ObjectReverser {
    public reverserObjects(arr: Record<string, string | number>[]) {
        let result: Record<string, string>[] = []

        // loop melalui setiap objek didalam input
        for (let i: number = 0; i < arr.length; i++) {
            let currentObj = arr[i]
            let reversedObj: Record<string, string> = {}

            // loop manual untuk mengakses setiap key pada object
            for (let key in currentObj) {
                if (currentObj.hasOwnProperty(key)) {
                    // ambil value dan jadikan key baru, sementara key asli jadi value
                    let newKey = String(currentObj[key])
                    let newValue = key

                    // masukkan objek hasil
                    reversedObj[newKey] = newValue
                }
            }

            // simpan objek hasil ke array result
            result.push(reversedObj)
        }

        return result
    }
}

let rawData = [
    { name: 'David', age: 20 }
]

let reverser = new ObjectReverser()
let output = reverser.reverserObjects(rawData)
console.log(output)
