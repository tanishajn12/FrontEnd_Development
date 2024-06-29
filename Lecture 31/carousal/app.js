
let arr=[
    "https://images.unsplash.com/photo-1683009427042-e094996f9780?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1706028024882-0b972506d02d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1682687980918-3c2149a8f110?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1705951430866-0d59c7135e1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
]



let n=0;
let imgEl=document.querySelector('img');

let id=setInterval(function() {
    imgEl.setAttribute('src',arr[n]);
    n=(n+1)%arr.length;

},2000);

setTimeout(function() {
    clearInterval(id);
},30*1000);