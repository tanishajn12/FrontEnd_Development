

$('button').click(function() {
    console.log("hello");
})

//querySelector All
$('ul li').click(function(event){
    // console.log(event);
    console.log(event.target);

    // event.target.css('color','red')//wrong

    //jquery -> this keyword -> points to target
    $(this).css('color','red');
    //here this indicates jis pr event trigger hua h

})

//addeventlistener
$('button').on('click', function(){
    let ans =$('input').val()
    console.log(ans)
})

// ------------------------------------
// effects

