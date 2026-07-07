const arr1 = [1,2,3,4,5,6,7,8]
console.log("Original array", arr1);

console.log("Applying slice method", arr1.slice(1, 4)); // slice
console.log("Original array after slice", arr1)

console.log("Applying splice method", arr1.splice(1,4)); // splice
console.log("Original array after splice", arr1)

// IMPORTANT 
// difference between slice and splice
// slice doesnt include the last number and it doesnt change the original array
// splice includes the end number and changes the original array
// eg; arr = 1,2,3,4,5
//     slice(1,3) => 2,3
//     original arr = 1,2,3,4,5
//     splice(1,3) => 2,3,4
//     original array = 1,5

