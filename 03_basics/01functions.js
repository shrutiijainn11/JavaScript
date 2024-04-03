function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("T");
    console.log("I");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    //console.log("shruti") //won't be executed
    return number1 + number2
}


const result = addTwoNumbers(3, 4)  //7
console.log("Result: ", result)

// addTwoNumbers(3, "4")  //34
// addTwoNumbers(3, "a")  //3a
// addTwoNumbers(3, null) //3

function loginUserMessage(username = "sam"){  //default value = sam to avoid undefined
    if(username === undefined){  //!username
        console.log("Please enter a username");
    }

    return `${username} just logged in`
}

//console.log(loginUserMessage("shruti"))
console.log(loginUserMessage()) //undefined will be printed


//shopping cart problem

function calculateCartPrice(val1, val2, ...num1){  //... = rest operator
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000))  //[200,400,500]
//will add any number of arguments
//val1 = 200, val2 = 400, num1 = [500, 2000]


const user = {
    username: "shruti",
    price: 2003
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([11,22,33]))