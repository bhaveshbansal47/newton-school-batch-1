const p1 = fetch('https://api.github.com/gists/public').then(function (result) {
    console.log('1st request resolved')
    return result
})

const p2 = fetch('https://mocki.io/v1/7e6be8bb-3f47-4087-85f3-d0d4ccf18c75').then(function (result) {
    console.log('2nd request resolved')
    return result
})

const p3 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (result) {
    console.log('3rd request resolved')
    return result
})
const p4 = new Promise(function (res,rej) {
    setTimeout(function () {
        console.log('4th promise resolved')
        res('after 3 seconds')
    }, 3000)
})

const combinedPromise = Promise.all([p1, p2, p3, p4])

combinedPromise.then(function (result) {
    console.log(result)
    console.log('all requests resolved')
}).catch(function () {
    console.log('error')
})

