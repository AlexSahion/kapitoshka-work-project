document.addEventListener('click', e => {
	if (document.querySelector('.open') && !e.target.closest('popup__body')) {
		popupClose(popup)
	}
	if (e.target.closest('._popup')) {
		const link = e.target.closest('._popup')
		const wayToPopup = link.getAttribute("href").split('#')[1]
		const popup = document.getElementById(wayToPopup)

		popupOpen(popup)
	}

	if (e.target.closest('._popup-close')) {
		popupClose(popup)
	}

})

function popupOpen(popup) {
	popup.classList.add('open')
}

function popupClose(popup) {
	popup.classList.remove('open')
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


