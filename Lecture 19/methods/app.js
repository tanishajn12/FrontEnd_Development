



// let person = {
//     name : "Tanisha Jain",
//     city : "Delhi",

//     //methods -> functions
//     describe : function describe() {
//         console.log("My name is Tanisha Jain")
//     }
// }


// console.log(person);
// console.log(person.name);
// console.log(person.city);

// console.log(person.describe); //wrong way -> cannot access function without calling it
// console.log(person.describe()) //right way

// ----------------------------------------------------------

// let person = {
//     name : "Tanisha Jain",
//     city : "Delhi",

//     describe : function desc() {
//         console.log("My name is Tanisha Jain")
//     }
// }

// person.describe();
// person.desc(); //wrong
// desc(); //wrong

//----------------------------------------------------------------
// let person = {
//     name : "Tanisha Jain",
//     city : "Delhi",
    
//     describe : function desc() {
//         console.log(`My name is Tanisha Jain`)
//         console.log(`My name is ${this.name}`)
//         return 100;
//     }
// }

// let ans=person.describe();
// console.log(ans);


//--------------------------------------------------------------
let marks = {
    dsa: 67,
    webd: 54,
    cn: 43,

    total : function(grace) {
        return this.dsa + this.webd + this.cn + grace;
    }
}

console.log(marks.total(10));











