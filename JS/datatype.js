"use script"

// let num = 25
// let str = "3"
// const result = num + str

// console.log(typeof result) 

// let num = 25
// console.log("num: ", num) 

// let num = 35
// console.log(num)
// num = 45
// console.log(num)    

// let userInfo1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// let arr = [1, 2, 3, 4, 5]
// arr[0] = 10
// console.log(arr)

// //String
// //using single quotes
// let name1 = 'Ze'
// //using double quotes
// let province = "Ontario"
// //using backticks
// let userInfo = `She is ${name1} from ${province}`
// // log the results
// console.log("name : ", name1)
// console.log("Province : ", province)
// console.log("userInfo: ", userInfo)

// // undefined
// let number
// console.log("num1: ", number)
// // null
// let name = null
// console.log("name: ", name)
// let a = "5"
// console.log(typeof a) 

// // number
// // +infinity
// let num1 = 15
// // -infinity
// let num2 = -15
// // NaN
// let num3 = 5 + "5"
// // log on the console 
// console.log("num1: ", typeof num1)
// console.log("num2: ", typeof num2)
// console.log("num3: ", typeof num3)


// // number
// //bigInt
// let num1 = 123456789123456789123456789n
// // infinity
// let num2 = 0/0
// // NaN
// let num3 = 1/0
// // log on the console 
// console.log("num1: ", typeof num1)
// console.log("num2: ", num1.toString())
// console.log("num1: ", num1)
// console.log("num2: ", num2)
// console.log("num3: ", num3)

// boolean
let num1 = 1 + true
console.log("num1: ", num1) 

let num2 = 1 + false
console.log("num2: ", num2) 

let name = true

let userInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    placeOfBirth: function() {
        let province = "Ontario"
        return province
    }
}
console.log("userInfo: ", userInfo)
console.log("userInfo.firstName: ", userInfo.firstName)
console.log("userInfo.lastName: ", userInfo.lastName)
console.log("userInfo.age: ", userInfo.age)
console.log("userInfo.placeOfBirth: ", userInfo.placeOfBirth())