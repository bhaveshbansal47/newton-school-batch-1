const promise = new Promise(function (res, rej) {
    res("abra ka dabra")
    setTimeout(function () {
        console.log('callback')

    }, 2000)

})

promise.then(function (result) {
    console.log(result, "consumer")
})