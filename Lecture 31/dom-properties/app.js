

// //queryselector
// let p = document.querySelector('p');
// console.log(p.innerText);

// //innerText -> getter + setter
// //brainfull -> aware of styling (can read css)

// //textContent ->getter + setter
// // brainless -> cannot read css (unaware of styling)

// console.log(p.textContent);

// // setter (both ways)
// // p.innerText = "hello i am Tanisha Jain"
// // p.textContent = "hello i <h1>am Tanisha </h1> Jain"

// p.innerHTML = "hello i <h1> am Tanisha </h1> Jain"
// //innerhtml: getter & setter both , best: evaluate tags
// // brainful -> reads css + shows the tags too

// console.log(p.innerHTML);


// let gl=document.querySelector("a");
// console.log(gl.getAttribute("href"));
// gl.setAttribute("href","https://facebook.com");
// console.log(gl.getAttribute("href"));


let id=setInterval(function(){
    console.log('Hi bitcoin');
},2000)

setTimeout(function() {
    clearInterval(id);
},12000);









