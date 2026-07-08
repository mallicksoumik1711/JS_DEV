// Object made from constructor is singleton
// Object.create()

// object made from literals is not singleton
const user = {
    name: "Abc", //key and value
    age: 12,
    email: "abc@abc.abc"
}

// here name defined is a string. No need to write it as string but it is
// how we can access fields from objects

// console.log(user.name);
// console.log(user["name"]); //why? look below

const user1 = {
    "full name is": "Some full name" // we cannot access this key by using dot 
}
// console.log(user1["full name is"]);

// one way we can add into existing object
user["full name is"] = "some full name added in user"
// console.log(user);



// Accessing a symbol datatype in js
const id = Symbol("id")
const obj = {
    [id]: "ABC123"
}
// console.log(obj[id]);


// freezing an object
// Object.freeze(user)
// user.name = "changed name"
// console.log(user);


// Functions in Objects
user.thisIsFunc = function(){
    // console.log("This is a function");
}
// console.log(user.thisIsFunc);
// console.log(user.thisIsFunc());

user.isLoggedIn = true
// console.log(user.isLoggedIn);



// summary
// const employee = Symbol("employee")
// const summary = {
//     name: "Soumik",
//     age: 12,
//     email: "hello",
//     [employee]: "Office work", //symbol if written like => employee: "office work" not a symbol
//     // employee: "office work"
// }
// console.log(summary);
// Object.freeze(summary) // freezes the object
// summary.name = "name did not changed. did it?"
// console.log(summary);


// summary points
// 1. object (constructor) => singleton && object (literals) != singleton
// 2. key are usually treated as strings. No need to write them as string though
// 3. if added keys are in string format, access them by [] not dot(.)
// 4. symbols accessed by [] so they remain symbols
// 5. freeze any object bu Object.freeze(obj name)
// 6. access functions inside objects by ()