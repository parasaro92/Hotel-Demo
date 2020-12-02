//Selecting myslide and all slide images
/*const mySlide = document.querySelector('.myslide');
const mySlideImages = document.querySelectorAll('.myslide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = myslideImages[0].clientWidth;

mySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= mySlideImages.length - 1) return;
    mySlide.style.transition = "tranform 0.4s ease-in-out";
    counter++;
    mySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    mySlide.style.transition = "tranform 0.4s ease-in-out";
    counter--;
    mySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

mySlide.addEventListener('transiitioned', () => {
    if (mySlideImages[counter].id === 'lastClone') {
        mySlide.style.transition = "none"; 
        counter = mySlideImages.length -2 ;
        mySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (mySlideImages[counter].id === 'lastClone') {
        mySlide.style.transition = "none"; 
        counter = mySlideImages.length - counter;
        mySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})*/

//Code for image slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}