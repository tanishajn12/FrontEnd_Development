

// console.log('start');

// setInterval(function(){
//     console.log("hello");
// }, 2000)


//======================================

let id = setInterval(function(){
    console.log("hello");
}, 2000)

setInterval(function(){
    clearInterval(id);
}, 10000)