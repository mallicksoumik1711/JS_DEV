// FOR OF Loops

const nums = [1,2,3,4,5]

// for (const num of nums) {
    //     console.log(num);
    // }
    
const str = "Hello world!"

// for (const i of str) {
//     if(i == " ") continue;
//     console.log(i);
// }

// in "for of" loop the iterator (i) does not represent the index of the value
// rather its the value directly
// str[i] wront
// i directly represents the value




// FOR in loops

// for (const num in nums) {
//     // console.log(num);
// }

// in for in loops, the iterator behaves as index
// it doesnt fetch the actual values rather it gets index for the values

// for (const key in str) {
//     if(str[key] == " ") continue
//     console.log(`Index is ${key} and value is ${str[key]}`);
// }




// Maps in javascript
// collection of key value pairs
// doesn't hold duplicate values

const maap = new Map()
maap.set("key1", "value1")
maap.set("key2", "value2")
maap.set("key3", "value3")

// console.log(maap);

for (const mpp of maap) {        // gives in form of arrays
    // console.log(mpp)
}

for (const [key, value] of maap) {  // gives values separately
    // console.log(key, value); 
}

for (const mpp in maap) {
    // console.log(maap[mpp])        // doesnt gives error but wont work. cannot iterate in maps as it works on index
}

for (const [key, value] in maap) {   // this also wont work :)
    // console.log(key, value)
}




// we cannot iterate OBJECTS in javascript by for of loop
const users = {
    name: "soumik",
    email: "email.email.email", 
    age: 22
}

// for (const user of users) {
//     // console.log(user);
//     // this will give error as objects are not iteratable by for of
// }

for (const i in users) {
    // console.log(`Hello my ${i} is ${users[i]}`)
}





// Object => for in
// Maps => for of