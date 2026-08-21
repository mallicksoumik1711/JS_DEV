// Create a createCounter() function that returns an object with three methods:

// const counter = createCounter();

// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.getValue();  // 1

// Requirements:

// The counter value should not be directly accessible from outside.
// Use closure.
// increment(), decrement(), and getValue() should share the same private variable.

// Concepts: Closure, scope, function return.

function createCounter() {
    let count = 0;
    const methods = {
        increase: function () {
            return count += 1;
        },
        decrease: function () {
            return count -= 1;
        },
        getValue: function () {
            return count;
        }
    }
    return methods;
}

const counter = createCounter()
counter.increase()
counter.increase()
counter.decrease()
console.log(counter.getValue())