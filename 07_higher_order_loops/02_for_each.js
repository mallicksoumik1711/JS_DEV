const arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach( (items) => {
    // console.log(items);
} )

// const str = "Hello World!"

// str.forEach( (items) => {
//     console.log(items);
// } )
// strictly for arrays ig ))

function print(items){
    // console.log(items);
}

// arr.forEach(print)          // we can write foreach like this as well
// give function reference not its execution

arr.forEach( (items, index, arrayItself) => {
    // console.log(items, index, arrayItself);
} )
// we can do this in foreach as well





// arrays of object

const laptops = [
    {
        id: 1,
        name: "lenovo",
    },
    {
        id: 2,
        name: "mac",
    },
    {
        id: 3,
        name: "Hp",
    }
]

laptops.forEach( (items) => {
    console.log(`Id: ${items.id}, model: ${items.name}`)
} )