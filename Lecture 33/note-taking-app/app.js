
let inpEl= document.querySelector('input');
let btnEl= document.querySelector('button');
let list = document.querySelector('#list');


btnEl.addEventListener('click', function(e){
    let noteText=inpEl.value; //getter

    let li = document.createElement('li');
    li.innerText=noteText;

    list.appendChild(li);

    inpEl.value= ""; //setter

    li.addEventListener('click',(e)=>{
        // e.target.remove(); //way 1
        li.remove(); //way 2
    })
})



















