// 1. generate random colors dynamically

// function generateSixDig() {
//     const num = Math.floor(Math.random() * (999999 - 100000) + 1)
//     return num
// }

// function generateRandomColor() {
//     const color = `#${generateSixDig()}`
//     return color
// }

const hex = "0123456789ABCDEF"

function generateRandomColorFromHex () {
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// 2. Apply random color in body

const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

// start.addEventListener('click', (e) => {
//     const changeColor = setInterval( () => {
//         body.style.backgroundColor = generateRandomColor()
//     }, 1000 )

//     stop.addEventListener('click', (e) => {
//         clearInterval(changeColor)
//     }, false)
// }, false)

let interval

start.addEventListener('click', (e) => {
    if (!interval) {
        interval = setInterval(() => {
            // body.style.backgroundColor = generateRandomColor()
            body.style.backgroundColor = generateRandomColorFromHex()
        }, 1000)
    }
}, false)

stop.addEventListener('click', (e) => {
    clearInterval(interval)
    interval = null
}, false)