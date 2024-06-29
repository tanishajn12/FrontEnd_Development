



// const inpEl=document.querySelector('input');

//input-event
// inpEl.addEventListener('input', ()=>{
//     console.log("input works.....")

// })

//------------------------------------------

const inpEl=document.querySelector('input');

//event is a object; can be of any name
inpEl.addEventListener('input',(event)=>{
    // console.log(event);
    // console.log(event.target); //target
    console.log(event.target.value); //value (only for inputs not for texts)
    console.log(event.data); //value shows last entered text
})




