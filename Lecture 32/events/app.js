
//2nd way
// let btn = document.querySelector('button');
// btn.onclick = function() {
//     console.log("hello tanisha")
// }

//3rd way
// let btn = document.querySelector('button');
// let fn = function() {
//     console.log("web d padh lo")
// }

// btn.onclick = fn;

// -------------------------------------------
//interview question
// let btn = document.querySelector('button');
// function dsa() {
//     console.log("data structures and algorithms")
// }

// function webd() {
//     console.log("web development")
// }

// btn.onclick = dsa
// btn.onclick = webd
// onclick does not allow multiple actions : gets overridden

// ------------------------------------------

//----------------ADD EVENT LISTENEERS---------------------
// mutiple kaam

// let btn=document.querySelector("#btn")

// function dsa() {
//     console.log("data structures and algorithms")
// }

// function webd() {
//     console.log("web development")
// }

// btn.addEventListener('click',dsa);
// btn.addEventListener('click',webd);


// ---------------------------------------------------------
// let btn=document.querySelector("#btn");

// btn.onclick=function(){
//     let body=document.querySelector("body");
//     body.style.backgroundColor="red";

// }

// let func=function(){
//     let body=document.querySelector("body");
//     body.style.backgroundColor="red";

// }

// btn.addEventListener('click',func);


// 

let inp=document.querySelector("input");
inp.addEventListener("input",function(event){
    console.log(event)
    console.log(event.target);
    console.log(event.target.value,"sam");
    console.log(inp.value,"tan");
});






