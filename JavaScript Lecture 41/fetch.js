const reqPromise = fetch('https://api.github.com/gists/pub')
console.log(reqPromise)
// reqPromise.then(function () {
//     console.log('response aa gya')
// }, function () {
//     console.log(reqPromise)
//     console.log("Request failed")
// })

reqPromise.catch(function(err) {
    console.log(err)
})