// async function abcd() {
//     await giveUsAPromise()
//     console.log("i am acting as .then's function1(argument1)")
//     console.log("mein bhi .then mein hun")
//     let a = 2
//     console.log("a bhi .then mein hai",a)
// }

// function giveUsAPromise() {
//     return new Promise(function (res, rej) {
//         setTimeout(function () {
//             res()
//         }, 3000)

//     })
// }

// function abcd() {
//     new Promise(function(res,rej) {
//         setTimeout(function() {
//             res()
//         },3000)
//     }).then(function() {
//         console.log("i am acting as .then's function1(argument1)")
//     })
// }

// abcd()


// async function createAPromise() {
//     return "hello"
// }

// async function recieveAPromise() {
//     await createAPromise()
// }


async function getResult() {
    const response = await fetch("https://mocki.io/v1/41dba926-dade-4bf1-a3a8-3b8737524da9")
    console.log(response)
    const data = await response.json()
    console.log(data)
}

getResult()