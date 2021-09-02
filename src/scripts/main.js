import Slider from './slider.js';
import SliderType2 from './sliderType2.js';
// const $sliders = document.querySelectorAll('.slider');
// const slider = new Slider( creatObjFromSlider( $sliders[0] ) );

const slider = new Slider('headder_slider');

window.addEventListener('resize', slider.init);
slider.arrowLeft.addEventListener('click', slider.backSlide);
slider.arrowRight.addEventListener('click', slider.nextSlide);

slider.init();

//mb make it better in the future
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');

tab1.addEventListener('click', () => {
  tab1.classList.add('active');
  tab2.classList.remove('active');
  //change slider
});

tab2.addEventListener('click', () => {
  tab2.classList.add('active');
  tab1.classList.remove('active');
  //change slider
});
//

const slider2 = new SliderType2('slider_variants');

slider2.init();

window.addEventListener( 'resize', slider2.init );
slider2.arrowLeft.addEventListener('click', slider2.backSlide);
slider2.arrowRight.addEventListener('click', slider2.nextSlide);