const xhttp = new XMLHttpRequest()//instance of this class
const nameNode = document.getElementById('name')
// callback
xhttp.onload = function () {
    console.log(this.responseText)
    const response = JSON.parse(this.responseText)
    nameNode.innerText = response.name
}

xhttp.open(
    'GET',
    'https://mocki.io/v1/4494b70a-cabf-45a9-bdef-1400f77979fa'
)

const buttonNode = document.getElementById('button')

buttonNode.addEventListener('click', function () {
    xhttp.send()
})
