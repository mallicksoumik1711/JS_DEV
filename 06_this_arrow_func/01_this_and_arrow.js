// Let's understand this keywoed first
// this refers to context, which context we are talking about
// something we can say like scope (block)

const userObj = {
    name: "soumik",
    email: "soumik@mail.com",
    address: "qwerty12345",
    greetUser: function(){
        console.log(`Welcome ${this.name}, your email is ${this.email}`);
        console.log(this); //here this will print the context of the object (userObj) entire userObj
    }
}

// userObj.greetUser() //welcome message before changing name
// userObj.name = "changed name"
// userObj.email = "changed email"
// userObj.greetUser() //welcome message after changing name

// console.log(this); //here this will return empty object {}. as the context is node in the root level
// in node environment this is referoing to empty object
// here is no context defined in global level that is why its refering to empty object
// but if you run console.log(this) in browser it will return window object.
// as in browser the global object is window object



// ARROW FUNCTIONS
function one() {
    // console.log(this);  
}
one()
// this normal function is allowing to use this keyword.

const arrowFunc = () => {
    // console.log(this);
}
arrowFunc()
// Arrow function is not allowing to use this keyword
// in arrow function this cannot refers to the context. It refers to surrounding scope
// just like calling this in node env empty obj



// normal function
function normalFunction () {
    console.log(arguments);
}
// normalFunction("abcd", "efgh", "ijkl")

// function expression
const functionname = function funcHeldInVariable () {
    console.log(arguments);
}
// functionname(1,2,3,4,5)

// arrow function
const arrowFuncVariable = () => {
    // console.log(arguments); it doesn't have its own arguments, this, super. It inherits from nearest normal function
}
// arrowFuncVariable(1,2,3,4,5)



// types of writing arrow function
// 1. Explicit return
const explicitReturn = (num1, num2) => {
    return num1 + num2
}
// console.log(explicitReturn(1,2))

// 2. Implicit return => no need to give parenthesis with () or without ()
// const implicitReturn = (val1, val2) => val1 + val2
const implicitReturn = (val1, val2) => (val1 + val2)
// console.log(implicitReturn(5,10))

// implicit return is important while dealing with objects
// if explicit {} => need to give return keyword

const returnObj = () => ({
    name: "object",
    age: 22,
    type: "obj"
})
// console.log(returnObj());
