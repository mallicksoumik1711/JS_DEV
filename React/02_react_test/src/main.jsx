import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const MyApp = () => {
//   return(
//     <>
//       <h1>This H1 is under main.jsx</h1>
//       <h1>We didn't created a separate component for this</h1>
//       <h1>Rather we just used an arrow function inside main.jsx</h1>
//     </>
//   )
// }

// const reactElement = {
//     elementType: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me - GooGle'
// }

// this html is converted into object which is further understood by js
// but inorder to use this object structure we need to use React.createElement
// as react is rendering thinghs here

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me '
)

createRoot(document.getElementById('root')).render(
    // MyApp()
    // <App/>
    reactElement
)
