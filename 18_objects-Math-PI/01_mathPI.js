// Can we change value of Math.PI
// if yes - how
// in no why not

//No we cannot. why not is below -:

// console.log(Math.PI)
Math.PI = 44
// console.log("Changes value??", Math.PI)

// =--------------------------------------------------------------------------=

const res = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(res)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// ----------------------------------------------------------------------------

// const obj = Object.create({ //factory method
//     name: "name"
// })
// console.log(obj.name)

// ----------------------------------------------------------------------------

const user = {
    name: "alex",
    password: 123,
    isLoggedIn: true
}

// console.log(user)

const nameField = Object.getOwnPropertyDescriptor(user, "name")    // checking the properties of name
// console.log(nameField)

const nameFieldFixed = Object.defineProperty(user, "name", {       // fixing the properties of name. Now on iteration, name field will not come. 
    writable: false,                                               // we need to do the same for password and isLoggedIn if we want in them as well
    enumerable: false
})

// console.log(nameFieldFixed)

// for writable
user.name = "changed name"
console.log(user.name)

console.log(" ")

// for enumerable
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`)
}