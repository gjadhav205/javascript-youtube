// Primitive data types:-
    // 7 Types: String,Number,Boolean,Null,undefined,symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber= 3456543576654321n



//Reference (Non-primitive) data types
    //Array,Objects,Functions

const heros =["shaktiman","naagraj","doga"];
let myObj={
    name:"gayatri",
    age: 22,
}

const myFunction= function(){
    console.log("Hello World");
}