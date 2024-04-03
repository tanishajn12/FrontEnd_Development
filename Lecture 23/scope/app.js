// var b = 20;
// function a() {
//     console.log(b);
// }

// a();


//--------------------------------

function outer() {
    var b=10;

    inner() ;
    function inner() {
        console.log(b);
    }  
}

outer();

//-----------------------------------

// function outer() {
//     var b=10;

//     // inner() ;
//     // function inner() 
//     {
//         var b=1000;
//         console.log(b);
//     }
    
//     console.log(b);
// }

// outer();

//---------------------------------------------


// function outer(){
//     var a =10;

//     inner();
//     function inner() {
//         console.log(a);
//         var a=30;
//         console.log(a)
//     }

//     var a =1000;
// }
// console.log(a);
// outer();

//---------------------------------------

// function outer(){
//     var a =10;

//     inner();
//     function inner() {
//         console.log(a);
//         var a=30;
//         console.log(a)
//     }

//     var a =1000;
// }

// outer();

//-----------------------------------------
// function outer() {
//     var a =10;
//     console.log(a);

//     function inner (){
//         console.log(a)
//         var a=200;
//         console.log(a)
//     }
//     console.log(a)
// }

// console.log(a)

// outer();

// //--------------------
// function outer() {
//     var a =10;
//     console.log(a);

//     function inner (){
//         console.log(a)
//         var a=200;
//         console.log(a)
//     }
//     console.log(a)
// }

// outer();

//-------------------------------
// function outer() {
//     var a =10;
//     console.log(a);

//     inner();

//     function inner (){
//         console.log(a)
//         var a=200;
//         console.log(a)
//     }
//     console.log(a)
// }

// outer();

//---------------------------------
// function outer() {
//     let a=10;
//     console.log(a);


//     if(true){
//         console.log(b);
//         let a=200;
//         console.log(a);
//     }

//     console.log(a);
// }

// outer();

//------------------------------------
function outer() {
    let a=10;
    console.log(a);


    if(true){
        console.log(b);
        a=200;
        console.log(a);
    }

    console.log(a);
}

outer();

//--------------------------------------------

//function outer() {
//     var a =10;
//     console.log(a);

//     inner();

//     function inner (){
//         var a=200;
//         console.log(a)
//     }
//     console.log(a)
// }

// outer();

//---------------------------------------------


//function outer() {
//     let a =10;
//     console.log(a);

//     inner();

//     function inner (){
//         var a=200;
//         console.log(a)
//     }
//     console.log(a)
// }

// outer();

//-----------------------------------------------

function outer() {
    let a =10;
    console.log(a);
    {
        var a=200;
        console.log(a)
    }
    console.log(a)
}
outer();

//---------------------------------------------------


function outer() {
    let a =10;
    console.log(a);
    {
        let a=200;
        console.log(a)
    }
    console.log(a)
}
outer();

//-------------------------------------------------





