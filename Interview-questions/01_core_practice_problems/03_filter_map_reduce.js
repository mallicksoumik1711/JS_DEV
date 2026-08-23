const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Use filter() to create a new array containing only even numbers.
// Expected result:
// [2, 4, 6, 8]

const evenNums = numbers.filter((num) => num % 2 == 0)
// console.log(evenNums)

// ---------------------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5];
// Use map() to create a new array where every number is squared.
// Expected result:
// [1, 4, 9, 16, 25]

const sqNums = numbers2.map((num) => num * num)
// console.log(sqNums)

const names = ["john", "alice", "bob"];
// Use map() to create:
// ["JOHN", "ALICE", "BOB"]

const uppercaseNames = names.map((name) => name.toUpperCase())
// console.log(uppercaseNames)

// ---------------------------------------------------------------

const numbers3 = [5, 10, 15, 20];
// Use reduce() to calculate the total.
// Expected result:
// 50

const addedNums = numbers3.reduce((total, num) => {
    return total + num;
})
// console.log(addedNums)

const numbers4 = [2, 3, 4, 5];
// Use reduce() to calculate the product of all numbers.
// Expected result:
// 120

const prodNums = numbers4.reduce((total, num) => total * num, 100)
// last 100 sets the value of total initially
// console.log(prodNums)

// ------------------------------------------------------------

// COMBINED

const nums = [1, 2, 3, 4, 5, 6];
// Use filter() and map() to:
// Keep only even numbers.
// Multiply each remaining number by 10.
// Expected result:
// [20, 40, 60]

const ans = nums.filter((num) => num % 2 === 0).map((num) => num * 10)
// console.log(ans)



const nums2 = [5, 10, 15, 20, 25];
// Use filter() and reduce() to:
// Keep numbers greater than 10.
// Calculate their total.
// Expected result:
// 60

const ans2 = nums2.filter((num) => num > 10).reduce((total, num) => total + num);
// console.log(ans2)



const orders = [
    { item: "Laptop", amount: 1000 },
    { item: "Phone", amount: 500 },
    { item: "Mouse", amount: 50 },
    { item: "Keyboard", amount: 100 }
];
// Use reduce() to calculate the total amount of all orders.

const totalAmount = orders.reduce((total, order) => total + order.amount, 0)
// console.log(totalAmount)



const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true },
    { name: "Sarah", active: false }
];
// Using filter() and map(), return the names of all active users.

const activeUsers = users.filter((user) => user.active).map((user) => user.name)
// console.log(activeUsers)



const nums3 = [1, 2, 3, 4, 5];
// How would you calculate the sum of the squares of only the even numbers?
const sumOfSquare = nums3.filter((num) => num%2===0).map((num) => num*num).reduce((total, num) => total + num, 0);
// console.log(sumOfSquare)


const products = [
    { name: "Laptop", category: "electronics", price: 1000 },
    { name: "Phone", category: "electronics", price: 500 },
    { name: "Shirt", category: "clothing", price: 100 },
    { name: "Shoes", category: "clothing", price: 150 }
];
// Using array methods, calculate the total price of electronics only.
const totalPrice = products.filter((product) => product.category === "electronics").reduce((acc, obj) => acc+obj.price, 0);
// console.log(totalPrice)



// Can reduce() replace both filter() and map()?
// For example, can you solve this:
const reduceOnly = [1, 2, 3, 4, 5, 6];
// and produce:
// [20, 40, 60]
// using only reduce()?
// If yes, write the code.

const ansWReduce = reduceOnly.reduce((acc, num) => {
    if(num % 2 == 0){
        acc.push(num*10);
    }
    return acc;
}, [])
// console.log(ansWReduce)



const employees = [
    { name: "John", department: "IT", salary: 50000 },
    { name: "Alice", department: "HR", salary: 45000 },
    { name: "Bob", department: "IT", salary: 60000 },
    { name: "Sarah", department: "Finance", salary: 55000 },
    { name: "Mike", department: "IT", salary: 70000 }
];
// Using filter(), map(), and reduce(), find the average salary of IT employees.
let count = 0;
const onlyEmp = employees.filter((employee) => {
    return employee.department === "IT"
}).reduce((acc, ans) => {
    count += 1
    // console.log(count)
    return acc+ans.salary
}, 0)
console.log(onlyEmp/count)