async function fetchAll() {
    console.log("I will fetch 3 api's")
    const result = await Promise.all(
        [
            fetch("https://api.github.com/gists/public"),
            fetch("https://mocki.io/v1/3d1b6827-bde4-4f8b-bf68-f649bc8b994d"),
            fetch("https://api.github.com/gists")
        ]
    )

    console.log("Saare response aa gye", result)
    // for(let i = 0; i < result.length; i++) {
    //     const jsonResult = await result[i].json()
    //     console.log(jsonResult)
    // }
    try {
        const jsonResult = await Promise.all(
            result.map(function (value) {
                // console.log(x)
                return value.json()
            })
        )
        // console.log(x)
        console.log(jsonResult)

    } catch (err) {
        console.log(err, "error caught")
    }

}

fetchAll()


// function delay(time) {
//     return new Promise(function (res) {
//         setTimeout(function () {
//             res()
//         }, time * 1000)
//     })
// }

// async function test() {
//     for (let i = 5; i > 0; i--) {
//         await delay(i)
//         console.log(i)
//     }
// }
// test()

// await delay(5)
// console.log(5)
// await delay(4)
// console.log(4)
// await delay(3)
// console.log(3)
// await delay(2)
// console.log(2)
// await delay(1)
// console.log(1)

// delay(5).then(function () {
//     console.log(5)
//     delay(4).then(function () {
//         console.log(4)
//         delay(3).then(function () {
//             console.log(3)
//             delay(2).then(function () {
//                 console.log(2)
//                 delay(1)
//             }).then(function () {
//                 console.log(1)
//             })
//         })
//     })
// })


