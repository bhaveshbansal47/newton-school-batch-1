let promise = new Promise(function(res,rej) {
    res(1)
})

// promise.then(function(result) {
//     console.log(result) // 1
//     return result + 1 // return 2
// }).then(function(result) {
//     console.log(result) // 2
//     return result + 1 // return 3
// }).then(function(result) {
//     console.log(result) // 3
//     return result + 1 // return 4
// }).then(function(result) {
//     console.log(result) // 4
//     return result + 1 // return 5
// })


// promise.then(function (result) {
//     console.log(result) // 1
//     return result + 1 // return 2
// }).then(function (result) {
//     console.log(result) // 2
//     throw result + 1 // throw 3
// }).then(function (result) {
//     console.log(result)
//     return result + 1 // return 4
// }).then(function (result) {
//     console.log(result) 
//     return result + 1 // return 5
// }).catch(function (err) {
//     console.log(err)
// })

promise.then(function (result) {
    console.log(result) // 1
    return result + 1 // return 2
}).then(function (result) {
    console.log(result) // 2
    throw result + 1 // throw 3
}).finally(function() {
    console.log('Abra ka dabra')
    return 'djsfjksdhfjksdjkfbjksdbfjkbsdkjf' // silently ignored
}).then(function (result) {
    console.log(result)
    return result + 1 // return 4
}).then(function (result) {
    console.log(result) 
    return result + 1 // return 5
}).catch(function (err) {
    console.log(err)
})


new Promise(function(res,rej) {
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    console.log("hello")
    setTimeout()
})