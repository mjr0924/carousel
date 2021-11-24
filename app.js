const caroselSlide = document.querySelector('.carousel-slide');
const caroselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

//counter
let counter = 1;
const size = caroselImages[0].clientWidth;
caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Buttons listener 
nextbtn.addEventListener('click', () => {
    if(counter >= caroselImages.length -1) return;
    caroselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevbtn.addEventListener('click', () => {
   if(counter <= 0 ) return;
    caroselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

caroselSlide.addEventListener('transitionend', () => {
    if(caroselImages[counter].id === 'lastclone'){
        caroselSlide.style.transition = 'none';
        counter = caroselImages.length - 2;
        caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(caroselImages[counter].id === 'firstclone'){
        caroselSlide.style.transition = 'none';
        counter = caroselImages.length - counter;
        caroselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})