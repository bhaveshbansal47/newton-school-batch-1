const xhttp = new XMLHttpRequest()

xhttp.open('GET','https://mocki.io/v1/91597bb3-21fe-4f16-9fd3-d1a4124b2883')
//callback function
xhttp.onload = function() {
    console.log(this.responseText)
}

// asynchronous
xhttp.send()