// Kelas untuk merepresentasikan objek/entitas Student
class Student {
    public name: string
    public email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

// Kelas untuk mengelola operasi pada array student
class StudentOperations {

    // method untuk menggabungkan 2 array dan hapus duplikat
    public mergeArrays(list1: Student[], list2: Student[]) {
        let merged: Student[] = []

        // masukkan semua data dari array pertama
        for (let i: number = 0; i < list1.length; i++) {
            merged.push(list1[i] as Student)

            let exist = false

            // masukkan data dari array kedua dengan pengecekan duplikat\
            for (let j: number = 0; j < merged.length; j++) {
                if (list2[i]?.email === merged[j]?.email) {
                    exist = true
                }
            }

            // jika belum ada duplikat
            if (!exist) {
                merged.push(list2[i] as Student)
            }
        }

        return merged
    }
}

let list1: Student[] = [
    new Student("Student 1", "student1@mail.com"),
    new Student("Student 2", "student2@mail.com")
]

let list2: Student[] = [
    new Student("Student 1", "student1@mail.com"),
    new Student("Student 3", "student3@mail.com")
]

let merge = new StudentOperations()
let result = merge.mergeArrays(list1, list2)
console.log(result)