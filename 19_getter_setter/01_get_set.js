// for setting specific value field and getting them
// getter and setters should be same name as of variables
// i dont want someone to directly access these value: so we use getters and setters

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `Email: ${this._email.toUpperCase()}`  // _email? this because constructor is also setting a value. so we create a new variable
    }

    set email(value){
        this._email = value                         // _email? this because constructor is also setting a value. so we create a new variable
    }

    get password(){
        return `Pass: ${this._password.toUpperCase()}`  // _password? this because constructor is also setting a value. so we create a new variable
    }

    set password(value){
        this._password = value                         // _password? this because constructor is also setting a value. so we create a new variable
    }
}

const obj = new User("email", "abcd")
// console.log(obj.email)
// console.log(obj.password)

// console.log(obj)                   // this will return old email and password which is not in upper case

// -----------------------------------------------------------------------

// how this used to be before
// defineProperty

function Userfunc(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {                // here we need to gove this. global context this is {}
        get: () => {
            return this._email.toUpperCase()
        },
        set: (value) => {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: () => {
            return this._password.toUpperCase()
        },
        set: (value) => {
            this._password = value
        }
    })
}

const obj1 = new Userfunc("abc@abc.com", "Password-is-something")
console.log(obj1)

console.log(obj1.email)
console.log(obj1.password)