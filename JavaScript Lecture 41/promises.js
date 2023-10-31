// const promise = new Promise(function (resolve, reject) {
//     // what is the promise
//     console.log('I am arijit singh and i will come to your concert')
//     setTimeout(function() {
//         resolve("I am here and show is hit")
//         // console.log(promise)
//     },5000)
//     // setTimeout(() => {
//     //     reject("Sorry i can't come, some emergency")
//     //     console.log(promise)
//     // },5000)
// })

// console.log(promise)

// const promise = new Promise(function(resolve, reject) {
//     console.log('Promise created, Contract signed with Arijit')
//     setTimeout(function() {
//         // resolve("Arijit is on stage")
//     }, 5000)
//     // setTimeout(function() {
//     //     reject("Nhi aaya")
//     // }, 5000)
// })

// promise.then(
//     function(result) {
//         console.log(result)
//         // console.log('Muskarane ki wjh tum ho')
//     },
//     function(error) {
//         console.log(error)
//         // console.log('Tamatar Tamatar')
//     }
// )

const promise = new Promise(function (res, rej) {
    setTimeout(function () {
        res("rejected with some error")
    }, 5000)

})

// promise.then(function(){}, function() {})
promise.catch(function (error) {
    console.log(error)
})
