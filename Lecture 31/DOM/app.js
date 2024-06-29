//using js i will manipulate html
//DOM

//selectors
//document -> html mei se select kro - is is way se

// way 1 -> getElementById

// let elem = document.getElementById(samarth); //h2 -> it is not the right way of referiing to h2
// let elem = document.getElementById("samarth"); //right way of referring h2

//note->only returns 1 single entity -> 1st occurence

// -------------------------------------------
// styling
// alag alag same element par properties apply krna 
// Point to observe -> use camelcase like backgroundColor

// elem.style.color="red";
// elem.style.backgroundColor="grey";
// elem.style.border="10px solid black";

// ek saath element pr properties apply krna
// Point to observe -> no camelcase

// elem.style.cssText=`
//     color: purple;
//     font-size: 50px;
//     background-color: yellow;  
// `


// -------------------------------------------------------------
// way 2 -> getElementByTagName

// document.getElementByTagName(h1) //no
// let allheading= document.getElementsByTagName('h1') //yes
// return an arrays of all heading with tagname h1

// heading.style.color="red"; //directly use nhi hoga -> use looping

// for( let heading of allheading){
//     heading.style.color="red";
//     heading.style.backgroundColor="grey";
// }

// or

// for( let heading of allheading){
//     heading.style.cssText=`
//     color: red;
//     background-color: blue;
//     font-size: 80px
//     `;
// }


// ---------------------------------------------------
// way 3 -> getElementByClassName
// gives an array with same className

let classElem= document.getElementsByClassName('sam'); 
// classElem.style.color="red"; //it will not work

// for(let elem of classElem) {
//     elem.style.textDecoration="line-through";
// }


// ----------------------------------------------------------
// way 4 -> Query Selector -> 3 in 1 kaam krta hai -> only 1 element of select krta hai


// // id-> 
// let qs1= document.querySelector('#samarth'); //single selector


// // className -> 
// let qs2=document.querySelector('.sam'); //single possible

// // tagname ->
// let qs3=document.querySelector('p'); //single possible

// qs1.style.color="red";
// // qs2.style.color="yellow";
// qs3.style.color="blue";


//------------------------------------------------------------------------------
//way 5 : querySelectorAll
// className -> 
let qs2=document.querySelectorAll('.sam'); 

// tagname ->
let qs3=document.querySelectorAll('p'); 

// qs2.style.color="red";
for(let elem of qs2) {
    elem.style.textDecoration="line-through";
    elem.style.color="red";
}






















