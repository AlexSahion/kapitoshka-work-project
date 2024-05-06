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

//SLIDER/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//POPUP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const popupLinks = document.querySelectorAll('.popup-link')
const popupCloseLinks = document.querySelectorAll('.popup-close')


if (popupLinks) {
	popupLinks.forEach(popupLink => {
		popupLink.addEventListener('click', e => {
			const popupName = popupLink.getAttribute('href').replace('#', '')
			const popup = document.getElementById(popupName)
			popupOpen(popup)
			e.preventDefault()
		})
	})
}

if (popupCloseLinks) {
	popupCloseLinks.forEach(link => {
		link.addEventListener('click', e => {
			popupClose(link.closest('.open'))
		})
	})
}

function popupOpen(popup) {
	popup.classList.add('open')
	popup.addEventListener('click', e => {
		if (!e.target.closest('.popup__content')) {
			popupClose(popup)
		}
	})
}
function popupClose(popup) {
	popup.classList.remove('open')
}

//TABS-PROJECT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tabLinks = document.querySelectorAll('.projects__link')
const projectContent = document.querySelector('.projects__content')

tabLinks.forEach(tabLink => {
	tabLink.addEventListener('click', e => {
		const tabName = tabLink.getAttribute('href').replace('#', '')
		const tab = document.getElementById(tabName)
		tabOpen(tab, tabLink)
		e.preventDefault()
	})
})

function tabOpen(tab, link) {
	const tabActive = projectContent.querySelector('._active-tab')
	const linkActive = projectContent.querySelector('._active')
	tabActive.classList.remove('_active-tab')
	linkActive.classList.remove('_active')
	tab.classList.add('_active-tab')
	link.classList.add('_active')
}