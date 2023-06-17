function counter(x){

    flag = flag + x;
    slideshow(flag); 
}

let flag = 0; 
slideshow(flag); 

function slideshow(num){

    let slides = document.getElementsByClassName("slides");

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num<0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    for(let elm of slides){
        elm.style.display = "none";
    }
    slides[num].style.display = "block";
} 