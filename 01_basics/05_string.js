const name = "shruti"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//placeholder convention using backticks

const gameName = new String('shrutii-i-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); //-ve values can't be passed
console.log(newString);

const anotherString = gameName.slice(-8,4); //-ve values can be passed
console.log(anotherString);

const newStringOne = "   shruti    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shruti.com/shruti%23jain";

console.log(url.replace('%23','-'));
console.log(url.includes('shruti'));

console.log(gameName.split('-'));
