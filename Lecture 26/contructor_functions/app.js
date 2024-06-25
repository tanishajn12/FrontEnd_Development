
//when nothing is returned from function
// by default undefined is returned

// function user() {

// }

// let user1 = user();
// console.log(user1)
//------------------------------------------------------


// //adding a new keyword -> constructor function
// //constructor function return an object

// function user() {

// }

// let user2 = new user();
// console.log(user2) //return user{}

// --------------------------------------------


//constructor function
//convention -> 1st Letter capital

// function User() {
//     this.username = "Tanisha";
//     this.age = 20;
//     this.color = "purple"
// }

// let user3 = new User();
// console.log(user3) 

//want to create multiple objects with the same properties
//use constructor functions
function User(naam, umar, rang) {
    this.username = naam;
    this.age = umar;
    this.color = rang;

    // this.desc = function() {
    //     return `my name is ${this.username}`
    // }
}

//put the description function in the prototype
User.prototype.description = function() {
    return `my name is ${this.username}`
}
let user3 = new User("Tanisha", 20, "pink");
console.log(user3); 
console.log(user3.description())

// let user4 = new User("Stuti", 24, "white");
// console.log(user4); 
// console.log(user4.desc())



