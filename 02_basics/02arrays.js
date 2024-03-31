const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]; //spread operator
console.log(allNewHeros);

const anotherArr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]];

const usableArr = anotherArr.flat(Infinity);
console.log(usableArr);


console.log(Array .isArray("Shruti"));
console.log(Array.from("Shruti"));
console.log(Array.from({name : "Shruti"})); //returns empty array
//because not specified whether to make array from keys or something

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));