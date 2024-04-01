//singleton - through constructor
//Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Shruti",
    "full name": "Shruti Jain", //can only be accessed through []
    age: 18,
    [mySym]: "mykey1",  //to be used as symbol
    location: "Jaipur",
    email: "shruti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]  //name is automatically string
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym])

jsUser.email = "shruti@google.com"
//Object.freeze(jsUser)  //no changes will be done
jsUser.email = "shruti@yahoo.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello user...");
}

jsUser.greeting2 = function(){
    console.log(`Hello user..., ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
