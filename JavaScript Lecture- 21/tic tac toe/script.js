const player1Html = `<span id="player1Mark">X</span>`
const player2Html = `<span id="player2Mark">O</span>`
let turn = 1

for(let i = 1; i <= 9; i++) {
    const box = document.getElementById(i)
    box.addEventListener('click',onClick)
}

function onClick(event) {
    const currentDiv = event.target
    if(turn === 1) {
        currentDiv.innerHTML = player1Html
        turn = 2
    } else {
        currentDiv.innerHTML = player2Html
        turn = 1
    }
}