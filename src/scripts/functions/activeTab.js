import { getData } from './getData';

export const activeTab = () => {
	const tabs = document.querySelectorAll('.popup-tabs__nav-btn');
	const tabContents = document.querySelectorAll('.popup-tabs__wrapper');

	document.addEventListener('click', ({ target }) => {
		//bug with event
		const targetTab = target.closest('.popup-tabs__nav-btn');
		const trainerCard = target.closest('.trainers-card');
		getData(trainerCard);
		if (!targetTab) return;

		tabContents.forEach((content) => {
			content.classList.remove('is-active');
		});

		tabs.forEach((tab) => {
			tab.classList.remove('is-active');
		});

		targetTab.classList.add('is-active');
		tabContents.forEach((tab) => {
			if (tab.id === target.name) {
				tab.classList.add('is-active');
			}
		});
	});
	// bug with state tabs
	tabs[0].classList.add('is-active');
	tabContents[0].classList.add('is-active');
};
