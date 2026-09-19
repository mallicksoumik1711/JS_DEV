// 1. Promise + setTimeout + microtask queue
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("C");
//   })
//   .then(() => {
//     console.log("D");
//   });

// console.log("E");



// 2. this + arrow function
// const user = {
//   name: "Soumik",

//   normal() {
//     console.log(this.name);
//   },

//   arrow: () => {
//     console.log(this.name);
//   }
// };

// user.normal();
// user.arrow();
