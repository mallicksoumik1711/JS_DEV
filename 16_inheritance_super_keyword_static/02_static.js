// static keyword => static methods belong to classes not to its instance
//                => so the objects doesn't have access of those methods those are instance of those classes
//                => they are called using Classname.method()

class User{
    constructor(username){
        this.username = username
    }

    printName(){
        console.log(`Name is ${this.username}`)
    }

    static generateId() {
        console.log(`ID: ${this.username}.12345`)
    }
}

class Man extends User{
    constructor(username, password){
        super(username)
        this.password = password
    }
}

const userOne = new User("alex")
userOne.printName()
// userOne.generateId()

const person = new Man("Bruce", "12345")
person.printName()
// person.generateId()