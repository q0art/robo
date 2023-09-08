const setData = (data) => {
	const trainerImage = document.querySelector('.trainers-popup__image');
	const trainerName = document.querySelector('.trainers-popup__title');
	const trainerText = document.querySelector('.trainers-popup__text');
	const trainerEducation = document.querySelector(
		'.tab-content__text-education'
	);
	const trainerExperience = document.querySelector(
		'.tab-content__text-experience'
	);
	const trainerAwards = document.querySelector('.tab-content__text-awards');

	trainerImage.src = data.img;
	trainerName.textContent = data.name;
	trainerText.textContent = data.description;

	trainerEducation.textContent = data.education;
	trainerExperience.textContent = data.experience;
	trainerAwards.textContent = data.awards;
};

export const getData = (data) => {
	const trainerLinks = document.querySelectorAll('.trainers-card__link');

	trainerLinks.forEach((link) => {
		link.addEventListener('click', function (event) {
			event.preventDefault();

			const trainerLinkName = this.getAttribute('data-trainers');
			const trainerData = data[trainerLinkName];
			setData(trainerData);
		});
	});
};
