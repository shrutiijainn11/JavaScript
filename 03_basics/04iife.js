//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`);
})();  //need to end using ;

( () => {
    console.log(`DB Connected two`);
})();  //arrow function

( (name) => {
    console.log(`DB Connected two ${name}`);
})("shruti");



//("function definition")("execution")