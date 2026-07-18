// JS => prototype based language

// objects can be created using new keyword (one of the method)

// promises are objects as well

// const print = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         console.log("Hello")
//     }, 1000)
// })

// console.log(print)
// console.log(typeof print)

// ------------------------------------------------------

//  - object literal
//  - constructor function => new -> creates a new instance
//  - prototype
//  - classes
//  - Instances (new, this)

// OBJECT LITERAL - Literally an object
//                - base unit for oops

const user = {
    name: "Alex",
    isLoggedIn: true,
    id: 88,

    getUserDetails: function(){
        // console.log("Getting user details from db")
        // console.log(`Hi ${name}`)     // name is out of context. Need to verify which context we are talking about
        // Since context -> this
        // console.log(`Hi ${this.name}`)
        // console.log(this) // -> entire context (user)
    }
}

// console.log(user.getUserDetails())


// console.log(this)            // {} No values in global context (Node env)

// --------------------------------------------------------------------------------------------------------------------------

// constructor functions => new keyword
// allows dev to create multiple instance out of 1 object
// new keyword => create a new context

// create a function which further creates multiple objects

function User(name, isLoggedIn, id){   //const funcs are created using pascal case
    // name = this.name
    // isLoggedIn = this.isLoggedIn
    // id = this.id
    // this will not work
    
    this.name = name
    this.isLoggedIn = isLoggedIn
    this.id = id

    return this   // write this or not
}

// const userOne = User("Wilson", true, 12345)
// const userTwo = User("Bruce wayne", false, 64747)

// here userOne will print the details of userTwo as it is creating in the existing instance.
// need to use new keyword - for creating new instance
// after userTwo, both objects pointys to same reference point since created in a single instance

const userOne = new User("wilson", true, 12)
const userTwo = new User("bruce wayne", false, 356363)
// console.log(userOne)

// -------------------------------------------------------------------------------------

// new keyword

// 1. creates an empty object
// 2. new creates a cons func and give all values
// 3. values is injected in this keyword
// 4. accessable