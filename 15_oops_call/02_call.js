// call -> gives current context to another function

function SetName(name){
    this.name = name
}

function User(name, email, id){

    SetName(name)            //writing this.name wont work as well

    this.email = email
    this.id = id
}

const userOne = new User("Alex", "alex@alexdotcom", 23)
console.log(userOne)     // this will print only email and id
//  not name. As name is in diferent context

// ====================================================================================

function SetModel(model){
    this.model = model
}

function Car(model, color, plate){

    SetModel.call(this, model)  //syntax - takes a this as a parameter

    this.color = color
    this.plate = plate
}

const cars = new Car('Hyundai', 'red', 909090)
console.log(cars)