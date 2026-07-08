// rest operator => ...variable_name
// this is used to accept incoming arguments from functions when arguments are unknown
// say we want to make a cart. here we dont know how many items will be in the cart 
// rest operator will accept all the incoming arguments

function shoppingCart(...values) {
    return values
}

console.log(shoppingCart(100, 200, 300, 400, 500));



// passing objects in function
const user = {
    name: "soumik",
    address: "India"
}

function objectPassing(anuObjectName){
    return anuObjectName.address
}

console.log(objectPassing(user));



// passing arrays in function
const arr = [1,2,3,4,5]
function arrPassing(arrayname){
    return arrayname[2]
}
console.log(arrPassing(arr));

