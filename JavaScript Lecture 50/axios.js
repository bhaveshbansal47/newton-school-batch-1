// const reqPromise = axios.get("https://mocki.io/v1/3ae9a13b-329e-4b4d-ab15-d292015ce7f6")
// console.log(reqPromise)
// reqPromise.then(function(response) {
//     console.log(response.data)
// })

async function sendRequest() {
    const response = await axios.get("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    console.log(response.data)
}
sendRequest()


// const fetchReqPromise = fetch("https://mocki.io/v1/3ae9a13b-329e-4b4d-ab15-d292015ce7f6")
// console.log(reqPromise)
// fetchReqPromise.then(function(result) {
//     console.log(result)
// })