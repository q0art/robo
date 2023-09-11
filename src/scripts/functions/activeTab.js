import { getData } from './getData';

export const activeTab = () => {
	const tabs = document.querySelectorAll('.trainers-tabs__nav-btn');
	const tabContents = document.querySelectorAll('.trainers-tabs__wrapper');

	document.addEventListener('click', (event) => {
		event.preventDefault();

		const targetTab = event.target.closest('.trainers-tabs__nav-btn');
		const trainerCard = event.target.closest('.trainers-card');
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
			if (tab.id === event.target.name) {
				tab.classList.add('is-active');
			}
		});
	});

	tabs[0].classList.add('is-active');
	tabContents[0].classList.add('is-active');
};
