const actualWord = "actor"
const letterNodes = document.getElementsByClassName('letter')
// letterNodes is an object with numerical values as the key
let currentPosition = 0
let guesses = 5

document.body.addEventListener('keydown', function (event) {
    const currentLetter = event.key
    if (actualWord[currentPosition] === currentLetter) {
        letterNodes[currentPosition].innerText = currentLetter
        currentPosition += 1
        if (currentPosition === 5) {
            alert("Congratulations!")
        }
    } else {
        guesses -= 1
        document.getElementById('guesses').innerText = `Chances Left : ${guesses}`
        if (guesses === 0) {
            alert("You've run out of guesses! Game over!")
            document.getElementById('answer').innerText = `Answer is ${actualWord}`
        } else {
            alert(`Wrong guess! ${guesses} guesses remaining.`)
        }

    }
})