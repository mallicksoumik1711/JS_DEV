const arr1 = [1,2,3,4,5,6,7,8]
// console.log("Original array", arr1);

// console.log("Applying slice method", arr1.slice(1, 4)); // slice
// console.log("Original array after slice", arr1)

// console.log("Applying splice method", arr1.splice(1,4)); // splice
// console.log("Original array after splice", arr1)


// IMPORTANT 
// difference between slice and splice
// slice doesnt include the last number and it doesnt change the original array
// splice includes the end number and changes the original array
// eg; arr = 1,2,3,4,5
//     slice(1,3) => 2,3
//     original arr = 1,2,3,4,5
//     splice(1,3) => 2,3,4
//     original array = 1,5


// Concat and spread operator
const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

// num1.push(num2)
// console.log("Merging arrays with push method " ,num1);

// const allNum = num1.concat(num2) // returns a new array
// console.log("Merging arrays with concat method " ,allNum);

// const spreadOperator = [...num1, ...num2]
// console.log("Merging with spread operator ", spreadOperator);


// Flat method
// subarray into a single array
// const nested_array = [1,2,[3,2,1],[4,5],[9,[9,5,6]]]
// console.log(nested_array.flat(2)); //2 represent the depth can write infinity as well


// Important concept
// convert another datatype to array "of" and "from"
const abc = 1
const xyz = 2
const jkl = 3
console.log(Array.of(abc, xyz, jkl));

//Array ia a built in constructor function (class) just like Number, String
console.log(typeof Array); //function

console.log(Array.from("this is an array"));
console.log(Array.from({name: "Hello"})); //Important doesnt convert and gives empty []
console.log(Array.from(12345678)); //not iterable change into string

// of => create an array with elements I give you
// from => converting something which can be iterable or array like structure
