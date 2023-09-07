const textNode = document.getElementById("text");
const defaultTextSize = 18 // for the cases when font size is not present

const incrementButton = document.getElementById('increaseBtn')
const decrementButton = document.getElementById('decreaseBtn')

incrementButton.addEventListener('click', function() {
    let textSize = findTextSize()
    textNode.style['font-size'] = (textSize + 2) + "px"
})

decrementButton.addEventListener('click', function() {
    let textSize = findTextSize()
    textNode.style['font-size'] = (textSize - 2) + "px"
})

function findTextSize() {
    const fontSize = textNode.style['font-size']
    if(fontSize) {
        return Number(fontSize.replace("px",""))
    } else {
        return defaultTextSize
    }
}
