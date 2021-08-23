class Slider {
	constructor( className, sliderType ) {
		//	sliderType: {
		//		1-fullscreen, one slide, resizable;
		//		2-container, many slides in it, adaptive, slide has fixed width;
		//	}
		this.create( className, sliderType );

		this.currentSlide = 0;
		this.maxSlidesCount = 0;

		this.init = this.init.bind( this );
		this.nextSlide = this.nextSlide.bind( this );
		this.backSlide = this.backSlide.bind( this );
	}

	create(className, sliderType) {
		this.slider = document.querySelector(`.${className}`);
		this.sliderWrapper = this.slider.children[0];
		this.sliderLine = this.sliderWrapper.children[0];
		this.sliderControls = this.sliderWrapper.children[1];

		this.slides = Array.from(this.sliderLine.children);
		this.arrowLeft = this.sliderControls.children[0];
		this.arrowRight = this.sliderControls.children[1];
		this.sliderType = sliderType;
	}

	changeSlide() {
		this.sliderLine.style.transform = `translateX(-${ this.sliderWrapper.offsetWidth * this.currentSlide }px)`;
	}

	init() {
		if( this.sliderType === 1 ) {
			const sliderLineWidth = this.sliderWrapper.offsetWidth * this.slides.length;

			this.sliderLine.style.width = `${ sliderLineWidth }px`;
			this.maxSlidesCount = this.slides.length - 1;

			this.slides.forEach( slide => {
				slide.style.width = `${ this.sliderWrapper.offsetWidth }px`;
				slide.style.height = 'auto';
			} );
		}
		else if ( this.sliderType === 2 ){
			const sliderLineWidth = this.slides[0].offsetWidth * this.slides.length;

			this.sliderLine.style.width = `${ sliderLineWidth }px`;
			this.maxSlidesCount = Math.round( sliderLineWidth / this.sliderWrapper.offsetWidth ) - 1;
		}

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
