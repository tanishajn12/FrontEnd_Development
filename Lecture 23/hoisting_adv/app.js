// // ---------HOISTING 1--------------------
// //accessing the variable/func before its declaration

// b(); //hoisting - yes
// console.log(a); //yes hoisting

// var a = 30;
// function b() {
//     console.log(c); //yes hoisting
//     var c = 100;
// }


// -----------------------------------------------------------
// let a = 10; 
// console.log(a); //no hoisting

// function b() {
//     console.log("Honesty is best policy")
// }

// b(); //no

//-------------------------------------------------------------

let a; //declare -> js engine -> undefined --> let a-> undefiend
console.log(a); //no hoisting: because variable is defined already
a=100; //reinitialise

function b() {
    console.log("Honesty is best policy")
}

b(); 

//----------------------------------------------------------
// var a; //declare -> js engine -> undefined --> let a-> undefiend
// console.log(a); //no hoisting: because variable is defined already
// a=100; //reinitialise

// function b() {
//     console.log("Honesty is best policy")
// }

// b(); 

//-----------------------------------------------------------
// in case of const declaration -> cannot reinitialize the variable

// const a=100; //declare -> js engine -> undefined --> let a-> undefiend
// console.log(a); //no hoisting
// // a=100; //reinitialise -> invalid

// function b() {
//     console.log("Honesty is best policy")
// }

// b(); //no

//---------------------------------------------------------------
// console.log(sam);
// a();

// var sam=100;
// function a() {
//     console.log("inside a")
// }

//----------------------------------------------------------

// console.log(sam);
// a();

// // let sam=100; //declarative change
// function a() {
//     console.log("inside a")
// }


//---------------------------------------------------------

// console.log(a);  //undefined
// var a;
// a=1000;
// console.log(a);  //1000

//--------------------------------------------------------

// console.log(a);  //error
// let a;  //error -> hoisting allow but -> dead temporal zone
// a=1000;
// console.log(a);  

//-----------------------------------------------------


console.log(a);  //error
const a=1000; //->error -> dead temporal zone 
a=1000;
console.log(a);  //1000

