const calculate = document.querySelector("button")
// console.log(calculate)

const form = document.querySelector("form")
console.log(form)

const result = document.querySelector(".result")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    // console.log(height)
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(weight)

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `The value of height entered is ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `The value of weight entered is ${weight}`
    } else {
        const bmi = weight / ((height * height) / 10000)
        // console.log(bmi)
        checkBMI(bmi)
    }
})

function checkBMI(bmi) {
    if (bmi < 18.5) {
        result.innerHTML = `BMI is ${bmi}, which falls under underweight`
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = `BMI is ${bmi}, which is Normal`
    } else if (bmi >= 25.0 && bmi <= 30) {
        result.innerHTML = `BMI is ${bmi}, which is over weight`
    } else {
        result.innerHTML = `DUDE!! your bmi is ${bmi}. WTF!! you're obese`
    }
}