


// function step1() {
//     console.log('Selecting the image from gallery');
//     setTimeout(function(){
        
//         return 'selected image';
//     }, 4000)
// }


// function step2(image){
//     console.log(`applying filter to the ${image} , pls wait`)
//     setTimeout(function(){
//         return 'filter applied'
//     }, 2000)

// }

 
// let image = step1(); 
// console.log(image);
// let filteredImage = step2(image);
// console.log(filteredImage);


// by default undefined is returned at 0sec
// after 4 sec 'Selecting the image from gallery' is displayed

// ---------------------------------------------------------------


// RIGHT WAY


// function step1(fn) { //giving function as argument
//     console.log('image is being selected from the galary...')
//     setTimeout(function() {
//         console.log('image is selected now')
//         fn('selected image'); //calling step2 ka function -> only when step 1 completes
//     }, 4000)
// }

// function step2(image) {
//     console.log(`applying filter to the ${image}`);
// }

// step1(function(image){
//     step2(image)
// });


//-----------------------------------------------

// function step1(fn) { //giving function as argument
//     console.log('image is being selected from the galary...')
//     setTimeout(function() {
//         console.log('image is selected now')
//         fn('selected image'); //calling step2 ka function -> only when step 1 completes
//     }, 4000)
// }

// step1(function(image){
//     console.log(image);
// });

//-----------------------------------------------------

function step1(fn) { //giving function as argument
    console.log('image is being selected from the galary...')
    setTimeout(function() {
        console.log('image is selected now')
        fn('selected image'); //calling step2 ka function -> only when step 1 completes
    }, 4000)
}

function step2(image, fn) {
    console.log(`applying filter to the ${image}`);
    setTimeout(function(){
        console.log(`filter applied to the ${image}`)
        fn('filtered image') //calling step 3 ka function
    }, 2000)
}

function step3(filteredImage, fn){
    console.log(`adding caption to the ${filteredImage}`);
    setTimeout(function(){
        console.log('caption done')
        fn('captioned Image') //step 4 ka calling function
    }, 3000)
}

function step4(captionImage) {
    console.log(`posting the ${captionImage}`)
    setTimeout(function(){
        console.log('posted the image successfully')
    }, 5000)
}

step1(function(image){
    step2(image, function(filteredImage){
        console.log(filteredImage);
        step3(filteredImage, function(captionImage){
            step4(captionImage); 
        });
    })
});


function(){
    console.log("")
}





















