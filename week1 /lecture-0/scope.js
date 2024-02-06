let score=99;
console.log(score);

// global scope 
// basically means you can use this variable any where in your program


function getScore(){
    console.log(score);
}
// -------------------------------------------------------------------------
//function scope 
// a scope which is limited to a function , basically in javascript and many other programming
// languages variables declared inside a function are limited to those functions

function testFnScope(){
    let myFnVar="i am a big text";
    console.log(myFnVar);
}
//uncomment below line and test

console.log(myFnVar);

//ReferenceError: myFnVar is not definedss
//----------------------------------------------------------------------------
// block scope
// let and const provide block scope this means the 
// variables declared inside the {} cannot be used outside of them

{
    let myrollnum="18bce7341"
}
// console.log(myrollnum);

//we will get an error ReferenceError: myrollnum is not defined

// javascript is inside browsers