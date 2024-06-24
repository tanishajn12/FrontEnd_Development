
// // array
// let worldCup= ['India','Pakistan','Afghanistan','Australia','New Zealand']

// // 1. for each method() -> method which accepts a callback function

// // worldCup.forEach(); //->syntax : forEach works on array
// // forEach : Higher order function

// worldCup.forEach(function(sachin) { //item -> just a regular variable
//     console.log(sachin);
// })

// worldCup.forEach(function(item,index) { //item -> just a regular variable
//     console.log(index+ '--->' +item);
// })

// name is not compulsory for callback functions

// ------------------------------------------------------------------
// 2. map() -> ,method
// let worldCup= ['India','Pakistan','Afghanistan','Australia','New Zealand']


// // worldCup.map()  -> syntax -> Higher Order function

// let newArray= worldCup.map(function(item){  //returns new array
//     return item.toUpperCase();
// })


// console.log(worldCup)
// console.log(newArray)

// -------------------------------------------------------------------

// let numbers=[10,20,30,40,50]
// let newArray= numbers.map(function(item){  //returns new array
//     return item*item;

// })
// console.log(numbers)
// console.log(newArray)

// -------------------------------------------------------------
// let newArray= numbers.map(function(item,index){  //returns new array
//     return item*index;

// })

// console.log(numbers)
// console.log(newArray)

// --------------------------------------------------------------------
// 3. Filter() ->  method 
let numbers=[10,20,30,40,50]

let filteredArray= numbers.filter(function(item){
    if(item>=30){
        return true
    }
    else{
        return false
    }

})

console.log(numbers)
console.log(filteredArray)

// 4. reduce() -> method





















