const linksToGo = document.querySelectorAll('.menu__link[data-goto]')

if (linksToGo) {
	linksToGo.forEach(link => {
		link.addEventListener("click", e => {
			const block = document.querySelector(link.dataset.goto)
			const gotoBlockValue = block.getBoundingClientRect().top + pageYOffset
			scrollToBlock(block, gotoBlockValue)
		})
	})
}

function scrollToBlock(block, gotoBlockValue) {
	window.scrollTo({
		top: gotoBlockValue,
		behavior: 'smooth'
	})
}



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



