new Swiper('.cost__swiper', {
	loop: true,
	spaceBetween: 30,

	pagination: {
		el: '.cost__pagination',
	},

	breakpoints: {
		590: {
			slidesPerView: 2,
		},

		940: {
			slidesPerView: 3,
			centeredSlides: true,
		}
	}
});