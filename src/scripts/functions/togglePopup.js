import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const togglePopup = () => {
	const trainersPopup = document.querySelector('.trainers-popup');
	const trainersPopupContainer = document.querySelector(
		'.trainers-popup__container'
	);

	document.addEventListener('click', ({ target }) => {
		const popupOpen = target.closest('.trainers-card__link');
		if (!popupOpen) return;

		trainersPopup.style.display = 'flex';
		disableBodyScroll(trainersPopupContainer);
	});

	trainersPopup.addEventListener('click', ({ target }) => {
		const popupClose = target.closest('.trainers-popup__btn--close');
		if (!popupClose) return;

		trainersPopup.style.display = 'none';
		enableBodyScroll(trainersPopupContainer);
	});

	trainersPopup.addEventListener('click', ({ target }) => {
		const isPopupOpen = target.closest('.trainers-popup__container');
		if (!isPopupOpen) {
			trainersPopup.style.display = 'none';
			enableBodyScroll(trainersPopupContainer);
		}
	});
};
