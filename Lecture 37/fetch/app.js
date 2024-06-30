

//web api -> it returns a promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response) {
    //not returns entire data -> meta data
    //console.log(response, 'res')
    return response.json() //parses the data in json format and returns a promise 
    // wait till all packets arive
})
.then(function(data){
    console.log(data);
})
.catch(function(error) {
    console.log(error, 'err')
})

