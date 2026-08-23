const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Use filter() to create a new array containing only even numbers.
// Expected result:
// [2, 4, 6, 8]

const evenNums = numbers.filter((num) => num%2==0)
console.log(evenNums)

// ---------------------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5];
// Use map() to create a new array where every number is squared.
// Expected result:
// [1, 4, 9, 16, 25]

const sqNums = numbers2.map((num) => num*num)
console.log(sqNums)

const names = ["john", "alice", "bob"];
// Use map() to create:
// ["JOHN", "ALICE", "BOB"]

const uppercaseNames = names.map((name) => name.toUpperCase())
console.log(uppercaseNames)

// ---------------------------------------------------------------

const numbers3 = [5, 10, 15, 20];
// Use reduce() to calculate the total.
// Expected result:
// 50

const addedNums = numbers3.reduce((total, num) => {
    return total + num;
})
console.log(addedNums)

const numbers4 = [2, 3, 4, 5];
// Use reduce() to calculate the product of all numbers.
// Expected result:
// 120

const prodNums = numbers4.reduce((total, num) => total*num, 100)
// last 100 sets the value of total initially
console.log(prodNums)