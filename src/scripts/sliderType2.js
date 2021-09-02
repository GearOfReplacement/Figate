import Slider from "./slider.js";

class SliderType2 extends Slider {
  constructor( className ) {
    super( className );
  }

  create( className ) {
    super.create( className );
    
    this.leftSlideNumber = document.querySelector('.slide_number');
    this.rightSlideNumber = document.querySelector('.slide_total');
    this.skrollLine = document.querySelector('.skroll_line');
    this.skrollAmount = this.skrollLine.firstChild;
  }

  makeSlides(slidesCount, padding) {
		const slideWidth = Math.round( (this.sliderWrapper.offsetWidth - padding) / slidesCount);

		this.maxSlidesCount = Math.ceil( this.slides.length / slidesCount );
		this.sliderLine.style.width = `${ this.sliderWrapper.offsetWidth * this.maxSlidesCount }px`;
		this.maxSlidesCount--; // it needs cause we start counting slides from zero

		this.slides.forEach( slide => {
			slide.style.width = `${ slideWidth }px`;
		});
	}

  init() {
    if( this.sliderWrapper.offsetWidth >= 1490 ) {
      const slidesInWrapper = 3;
      const totalPaddingInWrapper = 40;
      
      this.makeSlides( slidesInWrapper, totalPaddingInWrapper );
    }
    else if( this.sliderWrapper.offsetWidth >= 990 ){
      const slidesInWrapper = 2;
      const totalPaddingInWrapper = 20;

      this.makeSlides( slidesInWrapper, totalPaddingInWrapper );
    }
    else if( this.sliderWrapper.offsetWidth >= 490 ) {
      const slidesInWrapper = 1;
      const totalPaddingInWrapper = 0;

      this.makeSlides( slidesInWrapper, totalPaddingInWrapper );
    }
  
    this.skrollAmount.style.width = `${ this.skrollLine.offsetWidth / ( this.maxSlidesCount + 1 ) }px`;
    this.leftSlideNumber.innerHTML = this.toTwoSignesNumber(this.currentSlide + 1);
    this.rightSlideNumber.innerHTML = this.toTwoSignesNumber(this.maxSlidesCount + 1);

    this.changeSlide(); 
  }

  toTwoSignesNumber( number ) {
    return number < 10 ? `0${number}` : number;
  }

  nextSlide() {
    super.nextSlide();
    
    this.leftSlideNumber.innerHTML = this.toTwoSignesNumber( this.currentSlide + 1 );
    this.skrollAmount.style.transform = `translateX(${this.skrollAmount.offsetWidth * this.currentSlide}px)`;
  }

  backSlide() {
    super.backSlide();

    this.leftSlideNumber.innerHTML = this.toTwoSignesNumber( this.currentSlide + 1);
    this.skrollAmount.style.transform = `translateX(${this.skrollAmount.offsetWidth * this.currentSlide}px)`;
  }
}

export default SliderType2
