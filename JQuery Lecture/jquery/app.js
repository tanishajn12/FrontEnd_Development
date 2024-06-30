// console.log($); //$ -> jQuery

//selection methods using DOM -> 5 method

// selection using Jquery -> 1 method

// let el = $('h1'); //document.querySelectorAll('h1')
// let para = $('p'); 

// // ID selector
// let idd = $('#tan'); 


// //CLASS Selector
// let classs = $('.jain');

// ----------------------------------------------------------
// Manipulation
// .css(property to be changed, new value) -> 2 arguments
// para.css('color', 'red');
// para.css('border','2px solid black')
// para.css('background-color','yellow') //kabab case used


// //better approach - 2
// //use objects -> objects are part of js 
// // in js we use CamelCase
// el.css({
//     color:'red',
//     border: '5px solid green',
//     fontSize : '30px',
//     backgroundColor : "pink"
// })


//----------------------------------------------------------
//Accessing Text
// let para = $('p'); 

// //getter
// console.log(para.text()); //brainless : textContent


// //setter
// para.text("Todays weather is very good.")

// console.log(para.html()) ; //innerhtml

// ---------------------------------------------------------------
// ATTRIBUTES

// let inp = $('input');

// // getAttribute
// console.log(inp.attr('type'))
// console.log(inp.attr('id'));

// //setAttribute

// inp.attr('type','color');
// inp.attr('type','date');

//-------------------------------------------------------------------
//unordered list

// let lis = $('ul li') //selects all li in unordered list
// lis.css('color','red') //all li turn red


// let el = $('ul li').first();
// el.css('font-size', '30px');


//----------------------------------------------------
//getter + setter
// .val()
// let inp = $('input');
// console.log(inp.val()); //getter

// inp.val('pass me that bottle'); //setter
// console.log(inp.val());


// --------------------------------------------------------
// class Atributes
let para = $('p'); 

//add
para.addClass('a')  //correct
para.addClass('a b c') //correct -> multiple in single argument
para.addClass('a', 'c')   //wrong -> multiple arguments not allowed

//remove
para.removeClass('a')
para.removeClass('a b c')

//toggle
para.toggleClass('c');
para.toggleClass('a b');


//hasClass
console.log(para.hasClass('a'));




