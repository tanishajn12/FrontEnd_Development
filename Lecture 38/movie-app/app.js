



let input= document.querySelector('input')
let btn=document.querySelector('button')
let list= document.querySelector('#list')

btn.addEventListener('click',function(){
    let searchText =input.value;
    let data=fetchData(searchText);
    input.value="";


})

function fetchData(searchText){

    //fetch -> method 1
    // fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    // .then(function(res){-
    //     return res.json();
    // })
    // .then(function(data){
    //     manipulateDom(data);
    // })

    //axios -> method 2
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        console.log(response.data)
        manipulateDom(response.data)
    })

}

function manipulateDom(allthedata){
    //to remove already present movies
    while(list.firstChild){
        list.firstChild.remove();
    }




    for(let data of allthedata){
        let figure=document.createElement('figure');
        figure.innerHTML=`
        <img src=${data.show.image.medium} />
        <h2> Name: ${data.show.name}</h2>
        <h5> Language: ${data.show.language}</h5>
        `

        list.appendChild(figure);
    }

}

