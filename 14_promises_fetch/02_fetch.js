// fetch => return a promise
// promise returns a status code => 404
//                               - where will we get this code now?
//                               - reject or resolve
//                               - promise gives error only when the request call is not made.
//                               - so http errors will be shown in .then() resolve()
//                               -

// ----------------------------------------------------------------------------------------------

// 1. In 01_promise.js
//    we saw that even after async calls (steTimeout) fetch's execution was earlier than the other promises
//    why???
//    As they are special promises that directly goes directly into highPriority/micro task/fetch queue instead of task queue
//

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("This will print later than fetch");
  }, 1000);
});

// calling fetch from promise

// fetch("https://api.github.com/users/mallicksoumik1711", { name: "name" })
//   .then((response) => {
//     return response.json();
//   })
//   .then((updatedResponse) => {
//     console.log(updatedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ------------------------------------------------------------------------------------------------

// fetch with async and await

async function getData() {
  try {
    const response = await fetch(
      "https://api.github.com/users/mallicksoumik1711",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData()
