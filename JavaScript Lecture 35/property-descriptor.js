// const user = {
//     name: "Bhavesh"
// }

// // console.log(Object.getOwnPropertyDescriptor(user, "name"))

// // enumerable
// // for(let key in user) {
// //     console.log(key)
// // }

// const obj = {}
// // obj.name = "Bhavesh" // writable true, configurable true, enumerable true
// // obj["name"] = "Bhavesh"

// Object.defineProperty(obj, "name", {
//     value: "Bhavesh",
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

// // obj.name = "Mustafa"
// // obj["name"] = "UTKARSH"
// // console.log(obj)

// Object.defineProperty(obj,"name", {
//     writable: true,
//     enumerable: true
// }) // we changed the configuration

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))






// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: false,
//     writable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name", {
//     writable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: false,
//     writable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name", {
//     writable: true,
// })
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: false,
//     enumerable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name", {
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name", {
//     enumerable: true,
// })
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: false,
//     value: "Bhavesh",
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name", {
//     value: "Mustafa",
// })
// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// const obj = {}

// Object.defineProperty(obj,"name", {
//     configurable: true,
//     value: "Bhavesh"
// })

// console.log(obj)

// delete obj["name"]

// console.log(obj)

// const obj = {}

// Object.defineProperty(obj,"name", {
//     writable: false,
//     value: "Bhavesh"
// })

// console.log(obj)

// obj["name"] = "Mustafa"

// console.log(obj)


// const obj = {}

// Object.defineProperty(obj,"name", {
//     enumerable: true,
//     value: "Bhavesh"
// })

// for(let key in obj) {
//     console.log(key)
// }

// const obj = {}

// Object.defineProperty(obj,"name", {
//     enumerable: false,
//     value: "Bhavesh"
// })

// for(let key in obj) {
//     console.log(key)
// }


// Problem 1

// let user = {
//     name: "Harshit"
// }



// Object.defineProperty(user, "name", {
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(user, "name"))

// user.name = "Mustafa"

// // Problem 2

// let user = {}

// Object.defineProperty(user, "name", {
//     configurable: false,
//     value: "Harshit"
// })

// user.name = "Mustafa"

// // Problem 3

// let user = {
//     name: "Harshit"
// }

// Object.defineProperty(user, "name", {
//     configurable: false
// })

// delete user.name

// case 1

// const obj = {
//     name: "Bhavesh"
// }
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

// case 2

// const obj = {}

// obj.name = "Bhavesh"

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))

//case 3

const obj = {}

Object.defineProperty(obj,"name", {
    value: "Bhavesh"
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"))