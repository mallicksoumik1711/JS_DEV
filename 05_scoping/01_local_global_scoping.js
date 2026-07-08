// local scope => upto the parenthesis {} function/conditionals etc
// global scole => in all file main file
// var can be accessed globally which is not good
// fields in global can be accessed in local but local fields cannot be accessed in global scoping

let b = 800

if(true){
    var a = 700
    let b = 200
    console.log("inner b: ", b);
}

console.log("Should be inner a but is declared with var so no scoping", a); 
console.log("outer b: ", b); 


