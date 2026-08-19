// console.log(a)
// var a = 10
// this will print undefined as var is hoisted but before declaration its printed

// console.log(b)
// const b = 10
// reference error - let and const are hoisted but remain at TDZ till they're assignment (=10)

// function test() {
//   console.log(a);
//   var a = 20;
// }

// test();

// function test() {
//   console.log(a);
//   const a = 20;
// }

// test();

// let a = 10
// function test(){
//     console.log(a)
//     let a = 20
// }
// test()

// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }

// var a = 10;
// {
//   console.log(a);
//   var a = 20;
// }

// var a = 10;
// {
//   var a = 20;
// }
// console.log(a);

// let a = 10;
// {
//   let a = 20;
// }
// console.log(a);

// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;

// console.log(a);
// function test() {
//     console.log(a)
//   var a = 100;
// }
// var a = 10;
// console.log(a)
// test()
// console.log(a)

var a = 10;
function test() {
  console.log(a);
  let a = 20;
}
test();