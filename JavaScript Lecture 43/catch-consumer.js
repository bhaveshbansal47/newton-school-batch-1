let promise = new Promise(function (res, rej) {
    rej('some error occured in p1')
    // res("hello world")
})

// promise.catch(function (error) {
//     console.log(error)
// })

// promise.then(function(result) {
//     console.log(result)
// }, function(err) {
//     console.log(err)
// })

// promise.then(function(result) {
//     console.log(result)
// })

// promise.catch(function(err) {
//     console.log(err)
// })

// promise.then(function (result) {
//     console.log(result, 'then')
//     // return 5 // promise 2
//     // console.log(x) // throw ReferenceError
//     throw new Error("a new error")
// }).catch(function (err) {
//     console.log(err, 'catch')
// })

// promise.then(function() {

// }, function(err) {
//     console.log(err, 'then')
// }).catch(function(err) {
//     console.log(err,'catch')
// })