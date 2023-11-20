const wm = new WeakMap() // {}
console.log(wm)

// wm.set({name: "Bhavesh"} , "abra ka dabra")
// wm.set({students: 20} , "newton school")
// console.log(wm)

// console.log(wm.get({name: "Bhavesh"})) // undefined

const obj = {name: "Bhavesh"}
const obj1 = obj

wm.set(obj , "abra ka dabra")
wm.set({students: 20} , "newton school")
console.log(wm)

console.log(wm.get(obj))
console.log(wm.has(obj1))
wm.delete(obj)
console.log(wm)

