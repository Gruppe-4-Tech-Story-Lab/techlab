const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carousel = document.querySelector('.carousel');
 
let scrollPosition = 0;

leftBtn.addEventListener('click', () => {
    scrollPosition -= 360;
    carousel.scrollBy({
        left: -360,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    scrollPosition += 360;
    carousel.scrollBy({
        left: 360,
        behavior: 'smooth'
    });
});