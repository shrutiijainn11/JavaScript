let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber) //NaN

//"33" => 33
//"33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //true

let someNumber = 33

let stringNumber = String(someNumber)

/***************Operations***************/

let value = 3
let negvalue = -value

let str1 = "hello"
let str2 = " shruti"
let str3 = str1+str2

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

console.log(+true) //1
console.log(+"")//0
