class ObjectReverser {
    public reverseObjects(arr: Record<string, string | number>[]) {
        let result: Record<string, string>[] = []

        // loop melalui setiap objek dalam array input
        for (let i: number = 0; i < arr.length; i++) {
            let currentObj = arr[i]
            let reversedObj: Record<string, string> = {}

            // loop untuk akses setiap key pada object
            for (let key in currentObj) {
                if (currentObj.hasOwnProperty(key)) {
                    // ambil value dan jadikan key baru, sementara key asli jadi value
                    let newKey = String(currentObj[key])
                    let newValue = key

                    // masukkan ke objek hasilnya
                    reversedObj[newKey] = newValue
                }
            }

            // simpan objek hasilnya ke array result
            result.push(reversedObj)
        }

        return result
    }
}

let data = [{ name: 'David', age: 20 }]
let reverser = new ObjectReverser()
let output = reverser.reverseObjects(data)
console.log(output)
