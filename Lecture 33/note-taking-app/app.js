
let inpEl= document.querySelector('input');
let btnEl= document.querySelector('button');
let list = document.querySelector('#list');


btnEl.addEventListener('click', function(event){
    let noteText=inpEl.value; //getter

    let li = document.createElement('li');
    li.innerText=noteText;

    list.appendChild(li);

    //after adding the input, empty the input box
    inpEl.value= ""; //setter 

    li.addEventListener('click',(event)=>{
        // event.target.remove(); //way 1
        li.remove(); //way 2
    })
})



















