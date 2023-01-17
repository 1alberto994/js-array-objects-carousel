const img = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const carosello=document.querySelector(".slides");
const thumb=document.querySelector(".thumbnails");
let current=0;
for(let i =0;i<img.length;i++){
    if(i==0){
        carosello.innerHTML+= `<div class= "slide current"> <h4>"${img[i].title}"</h4> <p>"${img[i].text}"</p> <img class="images" src="${img[i].image}"> </div>`;
        thumb.innerHTML+= `<div class= "object">  <img class="images" src="${img[i].image}"> </div>`;
    }else{
        carosello.innerHTML+= `<div class= "slide"> <h4>"${img[i].title}"</h4> <p>"${img[i].text}"</p> <img class="images" src="${img[i].image}"> </div>`;
        thumb.innerHTML+= `<div class= "object">  <img class="images" src="${img[i].image}"> </div>`;
    }
}
const slides=document.querySelectorAll(".slide");
const preArrow=document.querySelector(".left");
const nextArrow=document.querySelector(".right");
nextArrow.addEventListener('click',
    function(){
        slides[current].classList.remove('current');
         if(current==slides.length -1 ){
            current=0
            
        }
        else{
            current=current +1
        }
        
        slides[current].classList.add('current');
        
       
    }
)
preArrow.addEventListener('click',
    function(){
        slides[current].classList.remove('current');
        if(current==0){
            current=slides.length -1
        }
        else{
            current=current-1
        }
       
        slides[current].classList.add('current');
        
    }
)


