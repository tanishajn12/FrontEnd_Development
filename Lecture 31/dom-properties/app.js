



//queryselector
let p = document.querySelector('p');

//innerText -> getter + setter
// brainfull -> aware of styling (can read css)
console.log(p.innerText);

//textContent ->getter + setter
// brainless -> cannot read css (unaware of styling)
console.log(p.textContent);


// innerHTML -> getter + setter
//  brainful -> reads css + shows the tags too
console.log(p.innerHTML);

// ---------------------------------------------------------
// setter
p.innerText = "hello i am Tanisha Jain"

p.textContent = "hello i <h1>am Tanisha </h1> Jain"

p.innerHTML = "hello i <h1> am Tanisha </h1> Jain"











