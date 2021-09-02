class Slider {
	constructor( className ) {
		this.create( className );

		this.currentSlide = 0;
		this.maxSlidesCount = 0;

		this.init = this.init.bind( this );
		this.nextSlide = this.nextSlide.bind( this );
		this.backSlide = this.backSlide.bind( this );
	}

	create( className ) {
		this.slider = document.querySelector(`.${className}`);
		this.sliderLine = document.querySelector(`.${className} .slider_line`);
		this.sliderControls = document.querySelector(`.${className} .slider_controls`);
		this.arrowLeft = document.querySelector(`.${className}  .left`);
		this.arrowRight = document.querySelector(`.${className}  .right`);

		this.sliderWrapper = this.slider.children[0];
		this.slides = Array.from(this.sliderLine.children);
	}
	
	changeSlide() {
		this.sliderLine.style.transform = `translateX(-${ this.sliderWrapper.offsetWidth * this.currentSlide }px)`;
	}

	init() {
		const sliderLineWidth = this.sliderWrapper.offsetWidth * this.slides.length;

		this.sliderLine.style.width = `${ sliderLineWidth }px`;
		this.maxSlidesCount = this.slides.length - 1;

		this.slides.forEach( slide => {
			slide.style.width = `${ this.sliderWrapper.offsetWidth }px`;
			slide.style.height = 'auto';
		} );
	
		this.changeSlide();
	}

	nextSlide() {
		this.currentSlide++;
		if(this.currentSlide > this.maxSlidesCount) this.currentSlide = 0;
		this.changeSlide();
	}

	backSlide() {
		this.currentSlide--;
		if(this.currentSlide < 0) this.currentSlide = this.maxSlidesCount;
		this.changeSlide();	
	}
}

export default Slider;
