


// 1. XMLHttpRequest
// constructor function

let req = new XMLHttpRequest();

// request open
// console.log(req);
req.open('GET','https://api.tvmaze.com/search/shows?q=girls')

// request ko actually mei bhjna
req.send();

// req.onerror = function() {}

req.onload = function() {
    // console.log(response);
    console.log(this.response);
}


















