# JS_DEV

## 1. Difference bt var, let, const
      var             => function scoped
      let and const   => block scoped

      Block scoped: anything within the curly braces.
                    range only initialised upto that block
      ex :- conditionals, loops
            if(true){
                  var a = 10        let, const wont allow outside the block
                  console.log(a)    this gives a=10
            }
            console.log(a)          this gives a=10

            for(var i=0; i<3; i++){
                  console.log(i)    give all iteration of i
            }
            console.log(i)          give final value of i

      Function scoped: function creates its own scope
                       outside that scope cannot access the variables
                       even var
      ex :- function
            function add(){
                  var a = 10
                  console.log(a)
            }
            console.log(a)          reference error

## 2. can const object be modified?
      yes actually, const prevents from reassigning the variable.
      But won't make the object immutable.
      ex :- const user = {
                  num: 10
            }
            user.num = 100          allowed

## 3. redeclaration is allowed in let, var, const
      var           => allowed
      ex:-          var a = 10
                    var a = 100
                    
      let and const => not allowed
      ex :-         let a = 10 && const a = 10      Not allowed
                    let a = 100 && const a = 100    Not allowed

## 4. reference datatype
      - stores the reference (memory address) instead of value
      - object, arrays, functions

## 5. Null               &               Undefined
      - intentional empty value          - variable declared but not assigned
      - assigned by user                 - assigned by js
      - typeof null => object            - typeof undefined => undefined

## 6. Why typeof Null is object
      - in every language, code is identified as binary
      - in js as well developers denoted every piece of code as 32 bit binary 
      - in those 32 bits, last 3 bits were assigned for datatype
      - 001 => number, 010 => string like this
      - for null since its completely blank, they decided 000
      - but 000 was already there for object
      - thus typeof null became object
      quite a story innit :)

## 7. Stack and Heap memory
      stack => primitive values
               stores the copy

      Heap => object, array, function
              stores the reference of memory address

## 8. Implicit and Explicit conversion
      Implicit => js automatically converts
                  console.log("5" + 2)     52
                  console.log("5" - 2)     3  string is converted into number

      Explicit => user manually converts them
                  Number(100)       100
                  Boolean(1)        true
                  Number(100abc)    NaN
                  String(100)       "100"
                  Boolean("")       false
                  Boolean("false")  true
                  Boolean("0")      true

## 9. Function Declaration & Function Expression
      Declaration => completely Hoisted
                     can be called before its defination
                     
                     greet()
                     function greet(){
                           console.log("Greeting')
                     }

      Expression => hoisted but its value is not initilized till assignment
                    cannot call before function declaration

                    greet()                         Not allowed
                    const greet = function () {
                          console.log("Greeting")      
                    }

## 10. Arrow function doesn't have their own this
       - like regular functions, these dont have their own this
       - they inherit "this" from their surrounding (node env) or whereever the code is
       
## 11. Hoisting and temporal dead zone
       - js behaviour of moving declarations (not initilizations/assignment) to the top of their scope
       - during execution phase
       - var/let/const a this is declaration
       - a = 10 is initilization 

       console.log(a)
       var a = 10
       - this is accepted as a id hoisted
       - i.e. decalred and initilized as undefined

       console.log(a)
       let/const a = 10
       - this will throw error
       - a is also hoisted but is uninitilized
       this is k/a "Temporal dead zone"

       Example

       console.log(a); // undefined
       var a = 10;

       console.log(b); // ReferenceError Tdz
       let/const b = 20;

       hello(); // Hello
       function hello() {
            console.log("Hello");
       }

       greet(); // TypeError
       var greet = function () {
            console.log("Hi");
       };

       welcome(); // ReferenceError
            const welcome = () => {
            console.log("Welcome");
       };
