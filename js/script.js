const body = document.body
const iconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".menu__body")
if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		body.classList.toggle("_lock")
		iconMenu.classList.toggle("_active")
		menuBody.classList.toggle("_active")
	})
}

new Swiper('.blog__slider', {
	slidesPerView: 1,
	spaceBetween: 25,
	breakpoints: {
		615: {
			slidesPerView: 2,
		}
	},
	pagination: {
		el: '.blog__pagination',
	}
})