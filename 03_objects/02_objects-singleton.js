// Objects crteated from constructor are singleton object
const singletonObject = new Object()
// console.log(singletonObject);

singletonObject.id = 1234
singletonObject.name = "Name"
singletonObject.isLoggedIn = true

// console.log(singletonObject);



// merging different objects
// 1. assign
// 2. spread operator

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

const obj3 = {obj1, obj2}
// console.log(obj3); // object inside object (Not recomended)

// assign
const obj4 = Object.assign({}, obj1, obj2) //empty parenthesis means answer will be a single object give it or not thats up to you
// console.log(obj4);

// spread operator (mostly used )
const obj5 = {...obj1, ...obj2}
console.log(obj5);



// Extract only keys or values from object => gives answer in array format easy to loop through 
console.log(Object.keys(singletonObject));
console.log(Object.values(singletonObject));



// summary points
// 1. Objects made from constructor are singleton objects
// 2. merging objects with one another via => assign || spread operator
// 3. extracting keys and values from the object