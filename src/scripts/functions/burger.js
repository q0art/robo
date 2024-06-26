import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const burger = () => {
	const burgerOpen = document.querySelector('.burger--open');
	const burgerClose = document.querySelector('.burger--close');
	const headerNav = document.querySelector('.header__nav');
	const navLinks = document.querySelectorAll('.header__nav-link');

	burgerOpen.addEventListener('click', () => {
		headerNav.classList.add('is-active');
		disableBodyScroll(headerNav);
	});

	burgerClose.addEventListener('click', () => {
		headerNav.classList.remove('is-active');
		enableBodyScroll(headerNav);
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			headerNav.classList.remove('is-active');
			enableBodyScroll(headerNav);
		});
	});
};
