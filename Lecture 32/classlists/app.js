let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');


// 1. ADD
// way 1 : adding multiple classes 
// h1.classList.add('class1');
// h1.classList.add('class2');
// h1.classList.add('class3');

//way 2 : add single time
h1.classList.add('class1','class2','class3');

//2. REMOVE
h1.classList.remove('class1');

h1.classList.remove('class1', 'class2','class3')

//toggle
h3.classList.toggle('class3');

//contains
console.log(h3.classList.contains('class3'));