const slide = document.querySelector('.slide');
const slideimgs = document.querySelectorAll('.slide img');

//button
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

//counter
let counter = 1;
const size = slideimgs[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
next.addEventListener('click',()=>{
  if(counter >= slideimgs.length -1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prev.addEventListener('click',()=>{
  if(counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', ()=>{
  if(slideimgs[counter].id === 'lastclone') {
    slide.style.transition = "none";
    counter = slideimgs.length - 2;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(slideimgs[counter].id === 'firstclone') {
    slide.style.transition = "none";
    counter = slideimgs.length - counter;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
