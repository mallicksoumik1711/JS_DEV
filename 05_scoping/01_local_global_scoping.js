// local scope => upto the parenthesis {} function/conditionals etc
// global scole => in all file main file
// var can be accessed globally which is not good
// fields in global can be accessed in local but local fields cannot be accessed in global scoping


if(true){
    var a = 700
    let b = 200
}

console.log(a); 
console.log(b); //gives error


