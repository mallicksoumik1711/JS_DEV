// immediately invoked function expression
// () => {}

(function runImmediately() {
    // named IIFE
    console.log("db connected w normal iife");
})();

(()=>{
    console.log("db connected w arrow iife");
})();

// WHY IIFE????
// so our file should not gets affected by the variables/functions calls etc from global scope
// also put semicolon in iife IMP :)