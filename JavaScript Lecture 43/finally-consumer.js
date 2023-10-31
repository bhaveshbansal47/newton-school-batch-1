let promise = new Promise(function (res, rej) {
    setTimeout(function () {
        res('hello world')
    }, 3000)

})

promise.finally(function() {
    console.log('finally is executed')
})

promise.then(function (result) {
    console.log('promise resolved', result)
}, function () {
    console.log('promise rejects')
}).finally(function () {
    console.log('finally is executed', result)
})