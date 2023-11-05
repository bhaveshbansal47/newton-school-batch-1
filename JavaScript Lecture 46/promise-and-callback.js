function abrakadabra() {
    return new Promise(function(res,rej) {
        console.log("I just created a promise")
        setTimeout(function() {
            console.log("samay smapt hua")
            res("Hey magic happens here")
        },2000)
        console.log("executor ka khatma")
    })
}

abrakadabra().then(function(result) {
    console.log("Jo kiya tha wada woh pura hua")
    console.log(result)
})