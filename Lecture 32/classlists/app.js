let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

// 1. add
// h1.classList.add('class1');
// h1.classList.add('class2');
// h1.classList.add('class3');

h1.classList.add('class3','class2','class1');
// h1.classList.add('class3','class2');

// -------------------------------------------------------
// 2. remove
// h1.classList.remove('class2');
// h1.classList.remove('class1','class3');

// ------------------------------------------------------
// 3. toggle
h3.classList.toggle('class3');

// -----------------------------------------------------
// 4. toggle
console.log(h3.classList.contains('class1'));
