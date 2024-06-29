

// regular function invocation

//function inside object is called method
//and use of this keyword inside that function points to object

// let obj={
//     number:200,
//     fun:function(){
//         console.log(this)
//     }
// }

// 1. bina object ke bhi this keyword exist krta hai
// this always depends on how it(this) is being called.

// function fn(){
//     console.log(this);
// }
// fn(); //regular function invocation

// 1. in case of regular function calling-> this always points to the window object
//window -> global object

// // eg.
// function hello(){
//     console.log(this)
// }
// hello(); //direct function invocation

//----------------------------------------------------
// 2. method invocation

// let obj={
//     number: 200,
//     fun: function(){
//         console.log(this) //obj
//     }
// }

// // function ki calling is dependent on object
// obj.fun(); //method invocation

// method invocation -> this always points to the object it is being called upon
//------------------------------------------------------
// eg:
// let obj2= {
//     a:100,
//     sam: function(){
//         console.log(this)  //obj2 ko point kr rha
//     }
// }

// obj2.sam(); //method invocation
//-------------------------------------------------------
// eg2
// let obj2= {
//     a:100,
//     sam: function(){
//         console.log(this)  //obj2 ko point kr rha
//     }
// }

// let b = obj2.sam; 
// b(); //now it is direct function invocation -> window

//----------------------------------------------------------------
// eg3
// let obj3={
//     a: 10,
//     fn: function(){
//         console.log(this);  //method invocation -> point to object
//         function sam(){
//             console.log(this); //direct function : window
//         }
//         sam();
//     }
// }
// obj3.fn(); //method invocation

//--------------------------------------------------------------
// 3. Constructor invocation
//contructor invocation -> 'this' always points to the newly created object

// function CreateObj() {
//     this.x=200;
// }

// let obj= new CreateObj(); //object create
// console.log(obj.x)

//------------------------------------------------------------
// 4. indirect invocation
// call() and apply()

// let obj={
//     a:20,
//     fn: function(a,b,c){
//         console.log(this, a,b,c)
//     }
// }

// let obj2= {
//     a:50
// }

// obj.fn(1,2,3); //method invocation
// obj.fn(); //direct calling

// obj.fn.call(obj2) //this -> obj2 -> changes the context of this
// obj.fn.call(obj2,1,2,3) //this -> obj2 -> changes the context of this

//----------------------------------------------------

// call and apply are same -> changes the context of this
// obj.fn.apply(obj2,1,2,3) //->wrong way

// obj.fn.apply(obj2, [1,2,3]) //apply syntax
// obj.fn.call(obj2,1,2,3) //-> call syntax

// //-----------------------------------
// 4. indirect invocation
// bind()

// let obj3={
//     fn: function(){
//         console.log(this)
//     }
// }

// let myfun=obj3.fn.bind(obj3); //call no, assign yes

// console.log(myfun)
// myfun();

// -------------------------------------------------

// let obj3 ={
//     fn: function(){
//         console.log(this)
//     }
// }

// function fn3(){
//     console.log(this);
// }

// fn3(); //this refers to window
// let fn4= fn3.bind(100); //assign
// fn4();

// -----------------------------------------------------
// 5. Arrow function

// let obj5={
//     fn: function(){
//         console.log(this)
//     }
// }

// obj5.fn(); //method invocation

// eg2
// let obj5 = {
//     fn: function(){
//         function sam(){
//             console.log(this);
//         }
//         sam(); //direct calling -> window
//     }
// }
// obj5.fn();

//eg3
// let obj5 = {
//     fn: function(){

//         //arrow function
//         let sam=()=>{
//             console.log(this); //obj 5
//         }
//         sam(); 
//     }
// }
// obj5.fn();

// eg 4

let obj5= {
    fn: ()=> {
        console.log(this) //this statement here will act like this of parent -> window
        let sam=()=> {
            console.log(this); 
        }
        sam();
    }
}

obj5.fn();







