const body = document.querySelector('body')
// console.log(body)

const color = document.querySelectorAll(".boxes")
// console.log(color)

color.forEach( (colors) => {
    // console.log(colors.id)
    colors.addEventListener('click', (e)=>{
        // console.log(e.target.id)
        body.style.backgroundColor = e.target.id
    })
} )

const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", (e) => {
    body.style.backgroundColor = "black"
})