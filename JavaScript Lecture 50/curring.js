// function bahubali(a) {
//     return function(b) {
//         console.log("I am bahubali", a + b)
//     }
// }

// // const ans = bahubali(1)
// // ans(2)
// bahubali(1)(2)

function sum(a) {
    return function([b]) {
        return a + b
    }
}
// sum(1)(2)

const func2 = 

console.log("abra ka dabra, i am just waiting")

setTimeout(function() {
    console.log(sum(1)(2)) // sum(1)(2)
},3000)

// function sum(a,b) {return a + b}

// console.log(sum(1,2))