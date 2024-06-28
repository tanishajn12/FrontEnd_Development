
//1. image selection
let step1=function(){
    console.log('Selecting image');
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('image.jpg')

        }, 4000)
    });
}

//2. applying filter to image
let step2=function(image){
    console.log(`Applying filters to ${image}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('image.jpg')

        }, 3000)
    });
}

//3. Adding caption to image
let step3=function(filteredImage){
    console.log(`Adding caption to ${filteredImage}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('image.jpg')

        }, 2000)
    });
}

//4. Uploading caption to Image
let step4=function(caption){
    console.log(`Uploading ${caption} please wait`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('All done image uploaded')

        }, 3000)
    });
}
//.then() -> resolve
//.catch() -> reject

//promise chaining
step1()
.then(function(image){
    console.log('Image Selected');
    return step2(image);
    //a promise is retuned from here 
    //either it will be in .then() or .catch()
})
.then(function(filteredImage){
    console.log('Filtered Applied')
    return step3(filteredImage);
})
.then(function(caption){
    console.log('Added Caption to Image')
    return step4(caption);
})
.then(function(upload){
    console.log(upload)

})


















