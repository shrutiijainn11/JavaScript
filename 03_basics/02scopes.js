//scope .. {} -- block scope
//outside{} -- global scope
let a = 300 //global

if(true){
    let a = 10 //block
    const b = 20
    var c = 30  //can be accessed outside the scope
    console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shruti"

    function two(){
        const website = "github"
        console.log(username)
    }
    //console.log(website)  //unreachable scope
    two()
}

one()

if(true){
    const username = "shruti"
    if(username === "shruti"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

addone(5) //can be accessed before declaration

function addone(num){
    return num + 1
}

addTwo(5) //cannot be accessed before declaration

const addTwo = function(num){  //can be called expression
    return num + 2
}

