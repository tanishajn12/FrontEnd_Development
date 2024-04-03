
// //SYNTAX
// //function definition / declaration
// function sum() {

// }

// sum(); //function calling


//-----------------------------------------

// function sum() {
//     let num1=10;
//     let num2=30;
//     console.log(num1+num2);
// }

// sum();
//-----------------------------------------------

// function sum() { 
//     let num1=10;
//     let num2=30;
//     console.log(num1+num2+num3); //error
//     //num 3 is not defined
// }

// sum(); 

//----------------------------------------

// function sum(num3) { //parameter
//     let num1=10;
//     let num2=30;
//     console.log(num1+num2+num3); 
// }

// sum(50); //argument

//---------------------------------------
// function sum(n1,n2,n3) {
//     let num1=n1;
//     let num2=n2;

//     console.log(num1+num2+n3); //result : NaN -> n3: unknown (may be anything)
// }

// sum(10,50);

//----------------------------------------------------------
// //default parameterised functions
// function sum(n1,n2,n3=70) { 
//     let num1=n1;
//     let num2=n2;

//     console.log(num1+num2+n3); //result : NaN -> n3: unknown (may be anything)
// }

// sum(10,50);

//-------------------------------------------------------
//calling function value is dominating : it overrides the default parameterised value
// function sum(n1,n2,n3=70) { 
//     let num1=n1;
//     let num2=n2;

//     console.log(num1+num2+n3); //result : NaN -> n3: unknown (may be anything)
// }

// sum(10,50,30); //ans: 90

//---------------------------------------------------------
// function sum(num2){
//     let num1=30;
//     let ans=num1+num2;
//     return ans;
// }

// sum(10); //function call -> return yahan ayegi -> 40

// //way 1
// let result=sum(60);
// console.log(result);

// //way 2
// console.log(sum(60));

//------------------------------------------------------------

// function sum(num2){
//     let num1=30;
//     let ans=num1+num2;
//     return ans;
//     console.log("TANISHA"); 
//     //return krne ke baad koi line of code nhi chalti
// }

// let result=sum(60);
// console.log(result);

//---------------------------------------------------------------

// function sum(num1,num2){
//     console.log(num1);
//     console.log(num2);
//     return num1+num2; //NaN
// }

// let output=sum(); //no argument
// console.log(output);


//------------------------------------------------------------------
// function sum(num1,num2){
//     console.log(num1); //10
//     console.log(num2); //undefined
//     return num1+num2;  //NaN
// }

// let output=sum(10); //one argument
// console.log(output);

//------------------------------------------------------------------
// function sum(num1,num2=20){
//     console.log(num1); //10
//     console.log(num2); //20
//     return num1+num2;  //30
// }

// let output=sum(10); //one argument
// console.log(output);

//-----------------------------------------------------------------
function sum(num1=40,num2=20){
    console.log(num1); //10
    console.log(num2); //20
    return num1+num2;  //30
}

let output=sum(10); //argumented value -> dominates
console.log(output);

