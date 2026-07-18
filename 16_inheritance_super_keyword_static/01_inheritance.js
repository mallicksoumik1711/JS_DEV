class User {
    constructor(username){
        this.username = username
    }

    printName(){
        console.log(`The name is : ${this.username}`)
    }
}

class UserOne extends User{
    constructor(username, email, password){

        super(username)
        // it will automatically take "this"
        // read the context from where it has to get the value "User"
        // taes username from user and sets in UserOne

        this.email = email
        this.password = password
    }

    printFullName(){
        console.log(`${this.username} wayne`)
    }
}

const obj1 = new UserOne("Alex", "email", "123")
obj1.printName()
obj1.printFullName()

const obj2 = new User("Bruce")
// obj2.printFullName()                       // parent cannot take methods from child
obj2.printName()

// -----------------------------------------------------------------------------------------

console.log(obj1 === obj2)
console.log(obj1 === UserOne)
console.log(obj2 === User)
console.log(obj1 === User)
console.log(obj2 === UserOne)

console.log(obj1 instanceof User)
console.log(obj1 instanceof UserOne)
console.log(obj2 instanceof User)
console.log(obj2 instanceof UserOne)