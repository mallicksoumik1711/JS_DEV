const randomNumber = Math.floor(Math.random() * 100 + 1)
// console.log(randomNumber);

let totalGuesses = 10
let currGuess = 0

const limit = document.querySelector("#limit")
// console.log(limit)

const store = []
const instructions = document.querySelector(".instructions")
const prevGuesses = document.querySelector(".prev-guess")

const form = document.querySelector("form")
// console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const input = parseInt(document.querySelector(".input").value)
    // console.log(input)

    if (input === "" || isNaN(input) || input <= 0 || input > 100) {
        instructions.innerHTML = `Please enter a valid number. your number is ${input}`
    }

    currGuess += 1
    totalGuesses -= 1

    if (input === randomNumber) {
        instructions.innerHTML = `Congratulations!! you've guessed it right in ${currGuess} guesses.`
        return
    }

    else if (input > randomNumber) {
        instructions.innerHTML = `your guess is higher than expected number. please guess lower number than ${input}`
    }

    else if (input < randomNumber) {
        instructions.innerHTML = `your guess is lower than expected number. please guess higher number than ${input}`
    }

    limit.innerHTML = totalGuesses
    store.push(input)
    prevGuesses.innerHTML = store
})