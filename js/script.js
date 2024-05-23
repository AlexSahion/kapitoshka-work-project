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

//SPOLLERS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const spollers = document.querySelectorAll('[data-spollers]')
spollers.forEach(spoller => {
	const spollerTitles = spoller.querySelectorAll('[data-spoller]')
	if (spollerTitles) {
		spollerTitles.forEach(spollerTitle => {
			if (!spollerTitle.classList.contains('_active')) {
				spollerTitle.nextElementSibling.hidden = true;
				console.log(spollerTitle);
			}
		})
	}
})

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

function hideSpollerBody(spoller) {
	const spollerActive = spoller.querySelector('[data-spoller]._active')
	if (spollerActive) {
		spollerActive.classList.remove('_active')
		_slideUp(spollerActive.nextElementSibling, 500)
	}
}
function _slideUp(target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide')
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height')
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-top')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
}

function _slideDown(target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide')
		console.log(target);
		if (target.hidden) {
			target.hidden = false
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		window.setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
}

function _slideToogle(target, duration = 500) {
	if (target.hidden) {
		_slideDown(target, duration)
	} else {
		_slideUp(target, duration)
	}
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

	//SPOLLERS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (e.target.closest('[data-spoller]')) {
		const spollerTitle = e.target
		const spoller = spollerTitle.closest('[data-spollers]')
		if (!spoller.querySelectorAll('._slide').length) {
			if (!spollerTitle.classList.contains('_active')) {
				hideSpollerBody(spoller)
			}
			spollerTitle.classList.toggle('_active')
			_slideToogle(spollerTitle.nextElementSibling, 500)
		}
		e.preventDefault()
	}
})


//SLIDERS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// new Swiper('.reviews__slider', {
// 	spaceBetween: 50,
// 	slidesPerView: 2,
// 	direction: 'vertical',
// 	pagination: {
// 		el: '.slider-perviews__pagination',
// 	}
// })

