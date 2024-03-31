const myArr = [2,5,6,3,1,0];
const fruits = ["mango", "apple"];

const myArr2 = new Array(1,2,3,4);

console.log(myArr[2]);


//Array methods

myArr.push(8);
myArr.push(9);
//myArr.pop();

//myArr.unshift(4);
//myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();  //converts array into string

console.log(myArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //last range not included
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); //original array manipulated
console.log("C ", myArr);
console.log(myn2);
