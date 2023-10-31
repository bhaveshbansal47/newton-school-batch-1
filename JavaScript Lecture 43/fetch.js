const promiseReq = fetch('https://mocki.io/v1/7a59f991-dea8-4697-93c5-89360204d46e')

promiseReq.then(function(responseObject) {
    console.log(responseObject)
    const resPromise = responseObject.json()
    console.log(resPromise)
    resPromise.then(function(res) {
        console.log(res)
    })
})