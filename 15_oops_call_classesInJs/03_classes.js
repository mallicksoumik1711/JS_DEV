class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encrytPassword(){
        console.log(`Password is : ${this.password}abcdefghijklmnopqrstuvwxyz`)
    }

    changeFormat(){
        console.log(`Uppercase name is : ${this.username.toUpperCase()}`)
    }
}

const userOne = new User("alex", "alex@dotcom", "12345")
userOne.encrytPassword()
userOne.changeFormat()

// --------------------------------------------------------------------------------------

// how it works behind

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// // noe in order to implement the function inside these constructor func
// // use prototype

// User.prototype.encrytPassword = function(){
//     console.log(`Password is : ${this.password}abcdefghijklmnopqrstuvwxyz`)
// }

// User.prototype.changeFormat = function(){
//     console.log(`Uppercase name is : ${this.username.toUpperCase()}`)
// }

// const userOne = new User("alex", "alex@dotcom", "12345")
// userOne.encrytPassword()
// userOne.changeFormat()