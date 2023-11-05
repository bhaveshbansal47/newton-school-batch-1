// function p1() {
//     return new Promise(function (res, rej) {
//         console.log('created promise 1')
//         rej("I am promise 1, with error")
//     })
// }

// function p2() {
//     return new Promise(function (res, rej) {
//         console.log('created promise 2')
//         res("I am promise 2")
//     })
// }




const p1 = new Promise(function (res, rej) {
    setTimeout(function () {
        console.log("I am p1")
        res('2seconds')
    }, 5000)
})

const p2 = new Promise(function (res, rej) {

    setTimeout(function () {
        console.log("I am p2")
        res('5seconds')
    }, 5000)
})

const combinedPromise = Promise.all([p1, p2])
combinedPromise.then(function (result) {
    console.log("Both promises executed", "combined Promise")
    console.log(result)
}).catch(function (err) {
    console.log("Atleast 1 promise rejected")
})