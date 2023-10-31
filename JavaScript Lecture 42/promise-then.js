// const promise = new Promise(function(res,rej) {
//     setTimeout(() => {
//         res("hello")
//         // rej("some error")
//     },3000)
// })

// promise.then(
//     function(result) {
//         console.log(result)
//     },
//     function(error) {
//         console.log(error)
//     }
// )

// console.log(promise.then(function(result) {
//     return result
// }))

// const promise1 = new Promise(function(res,rej) {
//     res(1)
// })

// const promise2 = promise1.then(function(result) {
//     return result + 1
// })

// const promise3 = promise2.then(function(result) {
//     return result + 1
// })

// promise3.then(function(result) {
//     console.log(result)
// })

// const promise = new Promise(function(res,rej) {
//     res(1)
// })

// promise.then(function(result) {
//     return result + 1
// }).then(function(result) {
//     return result + 1
// }).then(function(result) {
//     console.log(result)
// })

function createPromise1() {
    return new Promise(function (res) {
        res(1)
    })
}

function createPromise2() {
    return new Promise(function (res) {
        console.log('promise 2 created')
        res(2)
    })
}

createPromise1().then(function (result) {
    console.log(result)
    createPromise2()
})