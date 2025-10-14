// Class Student merepresentasikan satu entitas Student
class Student {
    public name: string
    public email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
}

// Class StudentService untuk mengelola data student (merge & remove duplicate)
class StudentService {

    public mergeStudent(arr1: Student[], arr2: Student[]) {
        const combined = [...arr1, ...arr2]

        // gunakan Map untuk menyimpan data unik berdasarkan email
        const uniqueMap = new Map<string, Student>()

        // loop setiap student dari hasil merge
        for (const student of combined) {
            const key = student.email.trim().toLowerCase() // normalisasi email
            if (!uniqueMap.has(key)) {
                // jika email belum ada di Map, masukkan
                uniqueMap.set(key, student)
            }
        }

        // kembalikan semua value dari Map sebagai array Student[]
        return Array.from(uniqueMap.values())
    }
}

const arr1: Student[] = [
    new Student('Student 1', 'student1@mail.com'),
    new Student('Student 2', 'student2@mail.com'),
]

const arr2: Student[] = [
    new Student('Student 1', 'student1@mail.com'),
    new Student('Student 3', 'student3@mail.com'),
]

const studentService = new StudentService()
const mergedStudent = studentService.mergeStudent(arr1, arr2)
console.log(mergedStudent)