let playbtn = document.getElementById('play-btn')
let progress = document.getElementById('progress')
let songList = document.getElementById('song-list')
let frwdbtn=document.getElementById('frwd-btn')
let backbtn=document.getElementById('back-btn')

let songs = [
    {
        id:1,
        name:"song1"
    },

    {
        id:2,
        name:"song2"
    },

    {
        id:3,
        name:"song3"
    },

    {
        id:4,
        name:"song4"
    },
]


let audio= new Audio('./media/song1.mp3');

for(let song of songs ){
    let li=document.createElement('li');
    li.innerHTML=song.name;
    li.setAttribute("id",song.id);
    li.classList.add('song-item')
    songList.append(li);

    
}

playbtn.addEventListener("click", function() {
    audio.paused? audio.play() : audio.pause();

    if(playbtn.children[0].classList.contains('fa-play')){
        playbtn.children[0].classList.remove('fa-play')
        playbtn.children[0].classList.add('fa-pause')

    }

    else{
        playbtn.children[0].classList.add('fa-play');
        playbtn.children[0].classList.remove('fa-pause')

    }

    //<i class="fa-solid fa-pause"></i>
    
});


audio.addEventListener('timeupdate', function(){
    let currentProgress=(audio.currentTime*100)/audio.duration;
    progress.value=currentProgress;
   

})   

progress.addEventListener('change',function() {
    let updatedTime=(audio.duration*progress.value)/100;
    audio.currentTime=updatedTime;
});


songList.addEventListener("click", function(e) {
    let songId=e.target.getAttribute("id");
   
    audio.src=`./media/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play();

    playbtn.children[0].classList.remove('fa-play')
    playbtn.children[0].classList.add('fa-pause')

});

frwdbtn.addEventListener("click",function(e){
    let songIdfrwd=parseInt(e.target.getAttribute("id"));
    audio.src=`./media/song${songIdfrwd+1}.mp3`;
    audio.currentTime=0;
    audio.play();
  
    
});

backbtn.addEventListener("click",function(e){
    let songIdback=parseInt(e.target.getAttribute("id"));
    audio.src=`./media/song${songIdback-1}.mp3`;
    audio.currentTime=0;
    audio.play();
    
});



