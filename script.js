console.log("Welcome to Spotify");

// Initialize the Variables
let songindex = 0;
let audioelement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let song = [
    {songname:"DNA - BTS", filePath:"song/1.mp3", coverPath:"cover/1.jpg"},
    {songname:"As It Was - Harry Styles", filePath:"song/2.mp3", coverPath:"cover/2.jpg"},
    {songname:"Pretty Savage - Blackpink", filePath:"song/3.mp3", coverPath:"cover/3.png"},
    {songname:"We Don't Talk Anymore - Charlie Puth", filePath:"song/4.mp3", coverPath:"cover/4.jpg"},
    {songname:"Run BTS - BTS", filePath:"song/5.mp3", coverPath:"cover/5.jpg"},
    {songname:"Senorita - Shawn Mendes", filePath:"song/6.mp3", coverPath:"cover/6.jpg"},
    {songname:"Light Switch - Charlie Puth", filePath:"song/7.mp3", coverPath:"cover/7.png"},
    {songname:"Cry for me - Camila Cabello", filePath:"song/8.mp3", coverPath:"cover/8.png"},
    {songname:"Without me - Halsey", filePath:"song/9.mp3", coverPath:"cover/9.jpg"},
    {songname:"Bad Blood - Taylor Swift", filePath:"song/10.mp3", coverPath:"cover/10.jpg"}
]

songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = song[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = song[i].songname; 
})
 

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioelement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)* 100); 
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioelement.currentTime = progressbar.value * audioelement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = song[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioelement.src = `song/${songindex+1}.mp3`;
    mastersongname.innerText = song[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `song/${songindex+1}.mp3`;
    mastersongname.innerText = song[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})