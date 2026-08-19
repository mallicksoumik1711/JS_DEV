// Normal hoisting with let var and const

// console.log(a)
var a = 10

// console.log(b)
let b = 10

// console.log(c)
const c = 10


// ------------------------------------------------------------------------------------------------------------


// Function vs block scope

// let var anc const
// var - function scope
// let & const - block scope

var d = 10
function test(){
  // console.log(d)
  var d = 20
}
test()

let e = 10             // same with const as well
function testt() {
  // console.log(e)
  let e = 20
}
testt()

var f = 10
function ttest() {
  // console.log(f)
}
ttest()

var g = 10
{
  var g = 20
}
// console.log(g)

let h = 10
{
  let h = 20
}
console.log(h)