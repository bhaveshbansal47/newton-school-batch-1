function callApi1() {
    return new Promise(function (res, rej) {
        res()
    })
}
// // console.log(callApi1())

async function callApi2() {
    // return new Promise(function (res, rej) {
        // res("hello world")
    return("hello word") // here return means fulfilled and undefined is the result
    // rej("error")
    throw("error")
    // })
}

// console.log(callApi1())
// console.log(callApi2())

async function abcd() {
    // return new Promise(function(res) {
        // res(new Promise(function(res,rej) {
            return async function() {
                // rej("Any body can dance")
                throw("Any body can dance")
            }()
            
        // }))
    // })
}

// const promise = abcd()

// setTimeout(function() {
//     console.log(promise)
// },1000)

async function abcd() {
    return async function () {
        throw "Any body can dance"
    }()
}

const promise = abcd()

setTimeout(function () {
    console.log(promise)
}, 1000)