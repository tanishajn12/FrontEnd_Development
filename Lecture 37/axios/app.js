

//fetch -> return a promose but do not wait for the entire data

// axios -> 3rd party library
// axios -> returns a promise and waits for the entire data at once
// axios -> just one .then() .catch()
axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})

