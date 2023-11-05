const previewNode = document.getElementById('preview')
const quoteNode = document.getElementById('quote')

window.addEventListener('keypress', function (event) {
    previewNode.innerText += event.key
    if (previewNode.innerText === "fortytwo") {
        fetch('https://api.quotable.io/random').then(function (response) {
            return response.json()
        }).then(function (data) {
            quoteNode.innerText = data.content
        })
    }
})