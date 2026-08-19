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
function test() {
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
// console.log(h)


// be careful at this one. why and how is important
// console.log(i)
function testtest() {
  var i = 10
}
testtest()


var j = 10
function testj() {
  var j = 20
}
// console.log(j)


var k = 10;
function testk() {
  // console.log(k);
  var k = 20;
  // console.log(k);
}
testk();


// -------------------------------------------------------------------------------------------------------------


// functions hoisting
// function declaration and function expressions

// console.log(l)
function l() {
  return 10
}


// testm();
function testm() {
  console.log("Hello");
}


// testn()
var testn = function () {
  console.log("Hello")
}
// let and const as well


// testo()
var testo = () => {
  console.log("Hello")
}


// this one is IMPORTANT****************
var p = 10
function testp(){
  // console.log(p)
  if (false) {
    var p = 20
  }
}
testp()

let q = 10
function testq(){
  // console.log(q)
  if (false) {
    let q = 20
  }
}
testq()


// this is weird
console.log(r);
var r = 10;
function r() {}