
//functions are heart in JS

// function sum(num1,num2){
//     console.log(num1+num2)
// }

// sum(4,5)
// sum("tanisha","jain")
// sum(true, false)


function a(fn) { // hof
    console.log("I am A")
    fn(); //calling is important for callback function
}

function b() { //CALLBACK function
    console.log("I am B")
}

a(b);

//unethical way of running code

// function a(fn) {
//     console.log("I am A")
//     fn();
// }

// a(function b() {
//     console.log("I am B")
// });

// -------------------------------


//Higher Order Function (HOF) : 2 definitions
// 1. when you pass the entire function as an argument in some other function
//then it is called higher order function.

function a() { //hof

    console.log("inside a")

    function b() {
        console.log("inside b")
    }

    return b;
}

let temp=a();
temp();

// 2. when you return an entire function from some other function
// then the other function is HOF

// Callback function : 'b'
// The function which is being sent as an argument to some other
// function and therein called as well then it is a CALLBACK FUNCTION.


// ---------------USE CASE----------------

// function getString(arr){
//     let res=[];
//     for (let item of arr) {
//         if(typeof(item)==='string'){
//             res.push(item)
//         }
        
//     }
//     return res;

// }

// function getNumber(arr){
//     let res=[];
//     for (let item of arr) {
//         if(typeof(item)==='number'){
//             res.push(item)
//         }
        
//     }
//     return res;
// }

// function getBool(arr){
//     let res=[];
//     for (let item of arr) {
//         if(typeof(item)==='boolean'){
//             res.push(item)
//         }
//     }
//     return res;

// }


let arr=['sam',100,'book',true, 400, false]
// console.log(getString(arr));
// console.log(getNumber(arr));
// console.log(getBool(arr));


// ------------------------using HOF
function getString(item) {
    return typeof(item)==='string'
}

function getNumber(item) {
    return typeof(item)==='number'
}

function getBool(item) {
    return typeof(item)==='boolean'
}

function get(arr,fn) {
    //using hof
    let res=[];
    for(let item of arr) {
        if(fn(item)) {
            res.push(item)
        }
    }

    return res;
}

console.log(get(arr,getString));
console.log(get(arr,getNumber));
console.log(get(arr,getBool));



















