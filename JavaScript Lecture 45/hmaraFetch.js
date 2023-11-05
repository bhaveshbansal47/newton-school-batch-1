function humaraFetch(url) {
    return new Promise(function(resolve,reject) {
        try {
            // send a request to server // 2 // ajax // fetch
            const xhttp = new XMLHttpRequest()
            xhttp.onload = function() {
                resolve(this.responseText)
            }
            xhttp.open('GET',url)
            xhttp.send()
        } catch(err) {
            reject(err)
        }
    })
}

const reqPromise = humaraFetch('https://fakestoreapi.com/products')

reqPromise.then(function(response) {
    console.log(response)
})