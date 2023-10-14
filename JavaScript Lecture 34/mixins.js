// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// const classroomMethods = {
//     printStudentName: function() {
//         console.log("Bhavesh")
//     }
// }

// Object.assign(User.prototype,classroomMethods)

// const user1 = new User("Bhavesh")
// console.log(user1)
// user1.printStudentName()

// let sayHiMixin = {
//     sayHi() {
//         alert(`Hello ${this.name}`)
//     },
//     sayBye() {
//         alert(`Bye ${this.name}`)
//     }
// }

// console.log(sayHiMixin)

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// Object.assign(User.prototype, sayHiMixin)

// new User('Dude').sayHi()

class SayHiMixin {
    sayHi = function() {
        alert(`Hello ${this.name}`)
    }
    sayBye = function() {
        alert(`Bye ${this.name}`)
    }
}
// console.log((new SayHiMixin()).__proto__)
// console.log(SayHiMixin.prototype)

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, new SayHiMixin())

new User('Dude').sayHi()