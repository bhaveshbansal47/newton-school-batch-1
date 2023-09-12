// javascript code goes here
// const labelNodes = document.getElementsByTagName('label')

// for (let i = 0; i < labelNodes.length; i++) {
//     labelNodes[i].addEventListener('click', onClick)
// }

// function onClick(event) {
//     clearAllLabels()
//     event.target.style['background-color'] = '#ffcc00'
//     const inputId = event.target.getAttribute('for') // option1
//     // id = "option1"
//     const input = document.getElementById(inputId)
//     const color = input.value
//     document.body.style['background-color'] = `#${color}`
// }

// function clearAllLabels() {
//     for (let i = 0; i < labelNodes.length; i++) {
//         labelNodes[i].style['background-color'] = '#e6e6e6'
//     }
// }
const labelNodes = document.getElementsByTagName('label')
const inputNodes = document.getElementsByTagName('input')
for (let i = 0; i < inputNodes.length; i++) {
    inputNodes[i].addEventListener('click', onClick)
}

function onClick(event) {
    clearAllLabels()
    const input = event.target
    const id = input.getAttribute('id')
    const labelNode = document.querySelector(`[for="${id}"]`)
    labelNode.style['background-color'] = '#ffcc00'
    const color = input.value
    document.body.style['background-color'] = `#${color}`
}

function clearAllLabels() {
    for (let i = 0; i < labelNodes.length; i++) {
        labelNodes[i].style['background-color'] = '#e6e6e6'
    }
}
