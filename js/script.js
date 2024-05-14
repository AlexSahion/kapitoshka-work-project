const body = document.body
//BURGER
const iconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".menu__body")

//POPUP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const popupLinks = document.querySelectorAll('.popup-link')
const popupCloseLinks = document.querySelectorAll('.popup-close')

//TABS-PROJECT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tabLinks = document.querySelectorAll('.projects__link')
const projectContent = document.querySelector('.projects__content')


//FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tabOpen(tab, link) {
	const tabActive = projectContent.querySelector('._active-tab')
	const linkActive = projectContent.querySelector('._active')
	tabActive.classList.remove('_active-tab')
	linkActive.classList.remove('_active')
	tab.classList.add('_active-tab')
	link.classList.add('_active')
}

function popupOpen(popup) {
	popup.classList.add('open')
	body.classList.add('_lock')
	popup.addEventListener('click', e => {
		if (!e.target.closest('.popup__content')) {
			popupClose(popup)
		}
	})
}
function popupClose(popup) {
	popup.classList.remove('open')
	body.classList.remove('_lock')
}

//DELEGATION/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('click', e => {
	//BURGER/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (e.target.closest(".menu__icon")) {
		body.classList.toggle("_lock")
		iconMenu.classList.toggle("_active")
		menuBody.classList.toggle("_active")
	}

	//POPUP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (e.target.closest('.popup-link')) {
		const popupLink = e.target.closest('.popup-link')
		const popupName = popupLink.getAttribute('href').replace('#', '')
		const popup = document.getElementById(popupName)
		popupOpen(popup)
		e.preventDefault()
	}

	if (e.target.closest('.popup-close')) {
		const popupCloseLink = e.target.closest('.popup-close')
		popupClose(popupCloseLink.closest('.open'))
	}

	//TABS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (e.target.closest('.projects__link')) {
		const tabLink = e.target.closest('.projects__link')
		const tabName = tabLink.getAttribute('href').replace('#', '')
		const tab = document.getElementById(tabName)
		tabOpen(tab, tabLink)
		e.preventDefault()
	}
})


//SLIDER/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
new Swiper('.blog__slider', {
	slidesPerView: 1,
	spaceBetween: 25,
	loop: true,
	breakpoints: {
		615: {
			slidesPerView: 2,
		}
	},
	pagination: {
		el: '.blog__pagination',
	}
})

new Swiper('.reviews__slider', {
	spaceBetween: 50,
	slidesPerView: 2,
	direction: 'vertical',
	pagination: {
		el: '.slider-perviews__pagination',
	}
})