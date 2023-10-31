let count = 0
console.log(count)

function createPromiseToRun2SecTimer() {
    return new Promise(function (res, rej) {
        console.log('promise created')
        setTimeout(function () {
            count += 2
            console.log(count)
            res()
        }, 2000)
    })
}


// createPromiseToRun2SecTimer().then(function() { //2
//     return createPromiseToRun2SecTimer()
// }).then(function() { //4
//     return createPromiseToRun2SecTimer()
// }).then(function() { //4
//     return createPromiseToRun2SecTimer()
// }).then(function() { //4
//     return createPromiseToRun2SecTimer()
// }).then(function() { //4
//     return createPromiseToRun2SecTimer()
// })

createPromiseToRun2SecTimer().then(function() { //2
    createPromiseToRun2SecTimer().then(function() { //4
        createPromiseToRun2SecTimer().then(function() { //4
            createPromiseToRun2SecTimer().then(function() { //4
                createPromiseToRun2SecTimer().then(function() { //4
                    createPromiseToRun2SecTimer()
                })
            })
        })
    })
})





// createPromiseToRun2SecTimer()
// createPromiseToRun2SecTimer()
// createPromiseToRun2SecTimer()