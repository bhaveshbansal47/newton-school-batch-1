// async function abcd() {
//     await new Promise(function (res, rej) {
        // setTimeout(function() {
        //     res()
        // },3000)
        
//     })
//     console.log("i am acting as .then's function1(argument1)")
// }

function abcd() {
    new Promise(function(res,rej) {
        setTimeout(function() {
            res()
        },3000)
    }).then(function() {
        console.log("i am acting as .then's function1(argument1)")
    })
}

abcd()