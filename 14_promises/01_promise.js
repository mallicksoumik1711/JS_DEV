// in most of the operations user consumes promise
// rarely we create them (rarely??)

// Promise => is a Object
//         => takes a callback 


// 1. Normal Promise creation

const promiseOne = new Promise(function (resolve, reject) {
    // here async task will be done
    setTimeout(() => {
        console.log("Promise one is printed")
        resolve()
    }, 1000)
})

// consume promise one
// .then() => resolve
// .catch() => reject
promiseOne.then(function () {
    console.log("Promise is consumed")
})

// -----------------------------------------------------------

// 2. promise without variable and .then() and .catch()

new Promise((resolve, reject) => {
    const error = false
    setTimeout(() => {
        if (!error) {
            console.log("Promise two printed - resolve")
            resolve()
        } else {
            console.log("there is error printing promise 2 - reject")
            reject()
        }
    }, 2000)
})
    .then(() => {
        console.log("Promise 2 is consumed - then")
    })
    .catch(() => {
        console.log("Promise 2 is failed - catch")
    })

// -------------------------------------------------------------------

// 3. passing parameter in resolve(parameter) and reject(parameter) and finally and chaining .then().then() .... like this

const promiseThree = new Promise((resolve, reject) => {
    const error = true
    setTimeout(() => {
        if (!error) {
            resolve({ name: "Promise Three", location: "resolved in if" })
        } else {
            reject({ name: "Promise 3", location: "Reject in else" })
        }
    }, 3000)
})

promiseThree
    .then((obj) => {
        console.log(obj)
        return obj.location
    })
    .then( (loc) => {
        console.log(loc)
    } )
    .catch((obj) => {
        console.log(obj)
    })
    .finally( () => console.log("Finally block ran") )

// --------------------------------------------------------------

// 4. handeling promises with async and await
//    async await cannot handle rejection perfectly. they need try and catch

const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const error = false
        if(!error){
            resolve({name: "promise four", location: "resolved in if"})
        }
        else{
            reject({name: "promise 4", location: "rejected in else"})
        }
    }, 4000 )
} ) 

// async function consumePromiseFour(){
//     const response = await promiseFour              //promise is an object. do not write promiseFour() x
//     console.log(response)
// }

// when error is true the above code will not work. as it is not wrapped in try and catch

async function consumePromiseFour() {
    try{
        const response = await promiseFour
        console.log(response)
    }
    catch(e) {
        console.log(e)
    }
}

consumePromiseFour()

// -------------------------------------------------------------------------

// fetch basic - async await

const getDetails = async () => {
    try{
        const response = await fetch('https://api.github.com/users/mallicksoumik1711')    //this response will contain everything and things that are not needed
        const data = await response.json()                                                // needed to convert in json. Remember this process also needs await as it takes time
        // console.log(data)
    }
    catch (error) {
        // console.log(error)
    }
}

getDetails()

// -----------------------------------------------------------------------------

// fetch promise

fetch('https://api.github.com/users/mallicksoumik1711')
.then( (response) => {
    return response.json()
} )
.then( (responseFromUpperThen) => {
    console.log(responseFromUpperThen)
} )
.catch( () => {
    console.log("failed fetching data")
} )

// Note that this fetch is running earlier than promiseOne and others and async and await