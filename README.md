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
