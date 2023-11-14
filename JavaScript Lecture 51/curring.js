function sum(a,b) {
    return a + b
}
// console.log(sum(1,2))


// function sum(a) {
//     return function(b) {
//         return a + b
//     }
// }
// console.log(sum(1)(2))

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a,b) // a+b
        }
    }
}

// const curriedSum = curry(sum)

// console.log(curriedSum(1)(2))

function mutilply(a,b) {
    return a * b
}

// console.log(mutilply(2,3))

const curriedMultiply = curry(mutilply)
console.log(curriedMultiply(2)(3))