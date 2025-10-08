function addUniqueElement(arr: number[], newElement: number) {

    // - cek apakah elemen sudah ada di dalam array atau belum
    // - jika belum, maka tambahkan di akhir
    // - pakai includes() untuk memeriksa apakah suatu nilai ada di dalam array

    if (!arr.includes(newElement)) {
        arr[arr.length] = newElement // masukkan ke dalam array
    }
    return arr
}

let target: number[] = [1, 2, 3, 4]
let newElement1: number = 4
let newElement2: number = 7

console.log(addUniqueElement(target, newElement1))
console.log(addUniqueElement(target, newElement2))