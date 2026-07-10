// Filter
// gives a new array based on the condition
// filter returns a boolean so it wont perform operations

const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = arr.filter( (items) => {
    return items >= 6
} )
// console.log(newArr)


// const newArr2 = arr.filter( (items) => {
//     return items * 2
// } )                                         // this wont work as its not returning any boolean value
// console.log(newArr2)

const str = "Hello World"                       // not aplicable in strings
// str.filter( (items) => {
//     return items === "h"
// } )
// str.map( (items) => {
//     return items === "h"
// } )





// Map

const price = [100, 200, 300, 400, 500]

const multipliedArray = price.map( (items) => {
    return items * 10
} )

// console.log(multipliedArray)





// chaining

const numbers = [1,2,3,4,5,6,7,8,9,10]

const ultimateArray = numbers
                        .map((items) => {
                            return items * 2
                        })
                        .map((items) => {
                            return items + 1
                        }).
                        filter((items) => {
                            return items > 15
                        })

// console.log(ultimateArray)




// Reduce
// reduces array into a single value

const container = [1,2,3,4,5]

const valueAnswer = container.reduce( (accumulator, currVal) => {
    // console.log(`Accumulator: ${accumulator}, currVal: ${currVal}`)
    return accumulator + currVal
}, 0) 

// console.log(valueAnswer)


const courseObj = [
    {
        course: "maths",
        price: 100
    },
    {
        course: "science",
        price: 600
    },
    {
        course: "bio",
        price: 900
    },
]

const totalprice = courseObj.reduce( (acc, curr) => {
    return acc + curr.price
}, 0)

console.log(totalprice)
