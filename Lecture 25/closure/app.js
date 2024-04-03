
// function myFunc() {
//     let username="tanisha";
//     function hello(){
//         console.log(username+ "hello")
//     }
//     hello();
// }

// myFunc();

// ------------------------------------------------------

// ----------CLOSURE---------------------
//whenever we return a function, that function is never returned alsone, it always
//returns with the lexical environment along with it.
function myFunc() {
    let username="tanisha";
    function hello(){
        console.log(username+ "hello")
    }
    return hello();
}

let returnedFunc= myFunc();
returnedFunc()






























