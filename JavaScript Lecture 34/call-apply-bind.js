function Car(type, fuelType) {
    // console.log(this)
    this.type = type
    this.fuelType = fuelType
}

// const obj1 = {}

// const obj2 = {}

const obj3 = {

}
// Car.call(obj3, "Convertible", "Diesel")
// Car.apply(obj3, ["SUV", "Diesel"])
const newCar = Car.bind(obj3)
// Car.bind(obj3)()
// console.log(Car.bind(obj3))

// function Car(type, fuelType) {
//     this = obj3
//     this.type = type
//     this.fuelType = fuelType
// }
newCar( "Convertible", "Petrol")
console.log(obj3)