
// here we will create a react element which we will render into root.

const reactElement = {
    elementType: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me - GooGle'
}

// we need to create a function which will add all the react elements into root

const customRenderManuallyEachElements = (reactElement, root) => {
    const domElement = document.createElement(reactElement.elementType)
    domElement.innerHTML = reactElement.children
    // here we are setting attribute manually for each element.
    // suppose 100 elements.
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    root.appendChild(domElement)
}

const customRenderLoops = (reactElement, root) => {
    const domElement = document.createElement(reactElement.elementType)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domElement)
}

const root = document.getElementById('root')

// customRenderManuallyEachElements(reactElement, root)
customRenderLoops(reactElement, root)