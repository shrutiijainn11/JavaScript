const user = {
    username: "shruti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = "shruti"
    console.log(this.username); //will not work
}

chai()

// const chai = function(){
//     let username = "shruti"
//     console.log(this.username);
// }

const chai = () => {
    let username = "shruti"
    console.log(this.username);  //will not work
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2  //implicit return

//const addTwo = (num1, num2) => (num1 + num2)

//const addTwo = (num1, num2) => {username: "shruti"} //cannot return like this

const addTwo = (num1, num2) => ({username: "shruti"})  //this will return

console.log(addTwo(3,4))



