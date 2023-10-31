const promise = new Promise(function (res, rej) {
    res("hello i am resolving")
})

// promise.then(function(result) {
//     console.log(result, "1")
// })

// promise.then(function(result) {
//     console.log(result, "2")
// })
// promise.then(function(result) {
//     console.log(result, "3")
// })
// promise.then(function(result) {
//     console.log(result, "4")
// })


// promise.catch(function() {

// })

// promise.finally(function() {
//     console.log('finally')
// })

const p1 = (promise.then(function () {
    return 5
}))

p1.then(function(result) {
    console.log(result)
}, function() {
    
})

const p2 = (promise.then(function () {
    throw "error"
}))

p2.catch(function(err) {
    console.log(err)
})