const userId: number = 10
const isVerified: boolean = false
const hasPermission: boolean = true
const permissionLevel: number = 2

// userId = 10 : true
// isVerified = false : true
// hasPermission = true : true
// permissionLevel = 2 : true

// 10 == 15 : false
// isVerified = false : true
// hasPermission = true : true

// false && true && true && true
if (userId && !isVerified && !hasPermission && permissionLevel === 3 ? true : permissionLevel === 1 ? true : permissionLevel === 0 ? true : false) {
    console.log('Access granted')
}