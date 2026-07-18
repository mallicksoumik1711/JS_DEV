// Lexical scope
// when a func is defined inside another function
// inner func has access all the properties of outer sections (variables/parameters/etc)

function outerFunc(){
    const name = "Alex"
    function innerFunc(){
        console.log(name)
    }
    innerFunc()
}
outerFunc()

// --------------------------------------------------------------------------------------

// Closure

// when a function is returned from another function
// the returned function doesn't only have the scope of its own
// but the entire lexical scope
// means inner func (rerturned func) has also returned the entire lex scope outer func as well

function parent(){
    const property = "2 beegha"
    function childOne(){
        console.log(property)
    }
    return childOne
}

console.log(parent()) // this returns a functuion named childOne

const distribution = parent()
distribution()

// this childOne doesn't just return its own scope/executional context
// rather its returning entire `lexical scope` (outer function)
// as childOne doesn't directlt has access to property