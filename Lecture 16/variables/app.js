// let sam=10;
// let sam1=100;

//-----------------strings ----------------
//way 1 : using ' '
// let firstName= 'Tanisha';
// let lastName= 'Jain';
// let space= ' ';

//way 2: using " "
let firstName= "Tanisha";
let lastName= "Jain";
let space= " ";

//way 3: using backticks ``
// let firstName= `Tanisha`;
// let lastName= `Jain`;
// let space= ` `;

console.log(firstName)
console.log(lastName)

//-----------string concatination (concat) -> + --------
console.log(firstName + lastName)
console.log(firstName + space + lastName)
console.log(firstName + ` ` + lastName)
console.log(firstName + " " + lastName)
console.log(firstName + ' ' + lastName)

// let houseName = 'Tanisha Jain's house' -> wrong way
//let houseName = "Tanisha Jain's house" - > right way
let houseName = 'Tanisha Jain\'s house' 


// let baarish= 'hogi\nahi'
//let baarish= 'hogi\n Not'
//let baarish= 'hogi'\n'Not' -> error generate
let baarish= 'hogi/nNot'

let baarish2='hogi' + '\n' + 'Not'