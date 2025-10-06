// cara 1 : pakai method builtin
function splittingWordBuiltin(text: string) {
    // pisahkan string berdasarkan spasi
    let words: string[] = text.split(" ")
    return words
}

console.log(splittingWordBuiltin('Hello World'))

// cara 2 : dengan manual looping
function splittingWordLooping(text: string) {
    let word: string = ""
    let result: string[] = []

    for (let i: number = 0; i < text.length; i++) {
        let char: string = text[i]!

        // jika bukan spasi, tambahkan ke kata saat ini
        if (char !== " ") {
            word += char
        } else {
            // jika spasi, dan word tidak kosong -> push ke array
            if (word.length > 0) {
                result.push(word)
                word = ""
            }
        }
    }

    // tambahkan kata terakhir (karena bisa jadi string tidak selalu diakhir spasi)
    if (word.length > 0) {
        result.push(word)
    }

    return result
}

console.log(splittingWordLooping('Hello World'))