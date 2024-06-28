


// function getData(cb){
//     setTimeout(function(){
//         // let data = "Hello my family"; 
//         cb(null); 
//     } , 4000)
// }


// getData(function(data,error){
//     if(error){
//         console.log(error, 'if')
//     }else{
//         console.log(data,'else')
//     }
// })

//----------------------------------------
// callback tackle -> promise -> contructor function

// // step 1
// let promise1= new Promise() //object creation -> constructor

// // ---------------------------------------------
// // step 2
// let promise1= new Promise(function(){

// })

// --------------------------------------------
// step 3

let mypromise= new Promise(function(resolve, reject){
    
    setTimeout(function(){

        let data='Hello my promise family' ; //server dega
        let err='mai server hu nhi de rha data'; //error
        
        resolve(data); //complete promise
        reject(err) //break promise

    } , 4000)

})

// // mypromise.then().catch()

mypromise.then(function(data){ //accepts a cb function
    console.log(data,'resolve')
})
.catch(function(errr){
    console.log(errr,'reject')
})
// both cannot be executed






















