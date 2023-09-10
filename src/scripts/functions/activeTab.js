export const activeTab = () => {
	const tabs = document.querySelectorAll('.trainers-tabs__nav-btn');
	const tabContents = document.querySelectorAll('.trainers-tabs__wrapper');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabContents.forEach((content) => {
				content.classList.remove('is-active');
			});
			tabs.forEach((tab) => {
				tab.classList.remove('is-active');
			});

			tabContents[index].classList.add('is-active');
			tab.classList.add('is-active');
		});
	});

	// delete maybe
	tabs.forEach((tab) => {
		tab.classList.remove('is-active');
	});

	tabContents.forEach((content) => {
		content.classList.remove('is-active');
	});

	tabs[0].classList.add('is-active');
	tabContents[0].classList.add('is-active');

	console.log(tabs[0], tabContents[0]);
};
