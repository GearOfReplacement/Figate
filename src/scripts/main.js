import Slider from './slider.js';

// const $sliders = document.querySelectorAll('.slider');
// const slider = new Slider( creatObjFromSlider( $sliders[0] ) );

const slider = new Slider('headder_slider', 1);

window.addEventListener('resize', slider.init);
slider.arrowLeft.addEventListener('click', slider.backSlide);
slider.arrowRight.addEventListener('click', slider.nextSlide);

slider.init();

// slider1.init();

// window.addEventListener( 'resize', slider1.init );
// slider1.leftArrow.addEventListener('click', slider1.backSlide);
// slider1.rightArrow.addEventListener('click', slider1.nextSlide);