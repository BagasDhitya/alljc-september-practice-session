function joinWords(arr: string[]) {

    // - jika array hanya 1 elemen, maka kembalikan langsung
    // - loop sampai elemen ke n-2 untuk digabung pakai koma
    // - elemen terakhir ditambahkan dengan kata 'end'

    if (arr.length === 1) {
        return arr[0]
    }

    // - gunakan join() untuk menggabungkan array jadi string

    let allButLast: string = arr.slice(0, arr.length - 1).join(",") // pisahkan dengan koma
    let lastWord: string = arr[arr.length - 1]!

    return `${allButLast}, and ${lastWord}`
}

let words: string[] = ['apple', 'banana', 'cherry', 'date']
console.log(joinWords(words))