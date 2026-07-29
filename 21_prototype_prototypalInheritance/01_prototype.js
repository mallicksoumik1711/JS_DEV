// in Js everything is object 

const bmw = {
    model: "BMW",
    color: "Black",
    plate: 12345,
    showCar: function(){
        console.log(this.model, this.color, this.plate)
    }
}

const mitsubshi = Object.create(bmw)

console.log(bmw)          // this will return the object bmw
console.log(mitsubshi)    // this will return empty object

// why? 
// because mitsubshi also points to the reference og bmw not the copy of bmw
// mitsubhsi has empty object but inside the prototype of mitsubshi bmw's property exist

// thats why we can still access the properties of bmw via mitsubshi

mitsubshi.showCar()
console.log(mitsubshi.__proto__)  //this is where the property is present

mitsubshi.__proto__.model = "Mitsubshi"  //this will change the model for bmw as well. reference not copy :)
console.log(bmw.model)
console.log(mitsubshi.model)

// ---------------------------------------------------------------------------------------------------

let str = "some value"

// behind js engine how is this processed
// let str = new String("some value")
// means, str is an object of String wrapper class
// that's wht writing str. will give all methods from intelliscense
// simply understand like str.__proto__ = String.prototype

console.log(str.__proto__)

// ------------------------------------------------------------------------------------------------------------------------

const p1 = {
    num1: "inside p1"
}

const p2 = {
    num2: "inside p2",
    __proto__: p1
}

const p3 = {
    num3: "inside p3",
    __proto__: p2
}

console.log(p3)

// p3.__proto__ = p2.prototype
// p2.__proto__ = p1.prototype
// prototypal inheritance

// difference in __proto__ and prototype

// __proto__ are contained by the objects
// prototype are contained by the base class

// object.__proto__ : baseClass.prototype