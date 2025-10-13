value = '3456'
var value = '12345'
var value = 'abcd'
console.log(value)

function sum(par1, par2) {
    var x = par1
    var y = par2
    return x + y
}

let users = [
    {
        name: 'John Doe',
        email: 'john.doe@mail.com'
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@mail.com'
    },
]

const foreachUser = users.forEach((item) => item)
const mapUser = users.map((item) => item)
console.log('foreach : ', foreachUser)
console.log('mapuser : ', mapUser)