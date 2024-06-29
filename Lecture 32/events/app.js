
// function handleClick(){
//     console.log("hello bhai")
// }

// function handleh1(){
//     console.log("how are you")
// }


// let btn=document.querySelector("#btn")

// btn.onclick=function() {
//     console.log("baba bangali");
// };


// btn.onclick=function(){
//     console.log("moye moye");
// };

//onclick does not allow multiple actions : gets overridden\


//----------------ADD EVENT LISTENEERS---------------------
// let btn=document.querySelector("#btn")

// let f1=function(){
//     console.log("hey ")
// }

// let f2=function(){
//     console.log("i am good")
// }

// btn.addEventListener('click',f1);
// btn.addEventListener('click',f2);


// ---------------------------------------------------------
let btn=document.querySelector("#btn");

// btn.onclick=function(){
//     let body=document.querySelector("body");
//     body.style.backgroundColor="red";

// }

let func=function(){
    let body=document.querySelector("body");
    body.style.backgroundColor="red";

}

btn.addEventListener('click',func);


// 

let inp=document.querySelector("input");
inp.addEventListener("input",function(event){
    console.log(event)
    console.log(event.target);
    console.log(event.target.value,"sam");
    console.log(inp.value,"tan");
});






