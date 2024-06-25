



// //constructor function
// function Person(naam, umar) {

//     this.username = naam;
//     this.age = umar;
// }

// Person.prototype.getFullName = function() {
//     return (`name is ${this.username}`)
// }

// Person.prototype.printName = function(){
//     console.log(`my name is ${this.username}`)
// }

// let person1 = new Person("tani",21);
// console.log(person1);


// ---------------------------------------------
//Class Syntax
// First letter of class should be capital

class Person {
    constructor(name, age) {
        this.username = name;
        this.userage = age;
    }

    printName() {
        console.log(`my name is ${this.username}`)
    }

    getFullName() {
        return (`name is ${this.username}`)
    }
}

let person2 = new Person('Tanisha',22);
console.log(person2);



















