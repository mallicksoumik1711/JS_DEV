// compiler automatically detects some code which is true and false

// Falsy values
// 0, "", false, -0, BigInt 0n, null, undefined, NaN

// truthy values
// true, 1, " ", [], {}
// note: empty array and object are also truthy values

const array = []
const emptyObj = {}

const notANumber = NaN
const num1 = undefined
const num2 = null

// if(num2){
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }



// How can we calculate the length of object or check if object is empty or not

// const userObj = {}
const userObj = {name: "Abc"}

// if(Object.keys(userObj).length > 0){
//     console.log("Object is not empty");
// }
// else{
//     console.log("Object is empty");
// }