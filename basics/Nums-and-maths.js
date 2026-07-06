const num1 = 10
console.log(num1); //automatically detected number

const num2 = new Number(20)
console.log(num2); //specifically told compiler its Number type

console.log(typeof num1); // => number
console.log(typeof num2); // => object

console.log(typeof num1.toString() + " " + typeof num2.toString());

console.log((Math));
const randomNumber = Math.random() //0 to 1
console.log(`Random number between 0 and 1 ${randomNumber}`)

const max = 20
const min = 10
const betMaxMin = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Random number between Max and Min ${betMaxMin}`)
