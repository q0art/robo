export const getData = (trainerCard) => {
	if (!trainerCard) return;

	const trainerImage = trainerCard.querySelector('.trainers-card__image').src;
	const trainerName = trainerCard.querySelector(
		'.trainers-card__subtitle'
	).textContent;
	const trainerText = trainerCard.querySelector(
		'.trainers-card__text'
	).textContent;
	const trainerTextEducation = trainerCard.querySelector(
		'.trainer__content-education'
	).textContent;
	const trainerTextExperience = trainerCard.querySelector(
		'.trainer__content-experiance'
	).textContent;
	const trainerTextAwards = trainerCard.querySelector(
		'.trainer__content-awards'
	).textContent;

	const popupImage = document.querySelector('.popup__image');
	popupImage.src = trainerImage;
	const pupupTitle = document.querySelector('.popup__title');
	pupupTitle.textContent = trainerName;
	const pupupText = document.querySelector('.popup__text');
	pupupText.textContent = trainerText;
	const pupupTextEducation = document.querySelector(
		'.popup-content__text-education'
	);
	pupupTextEducation.textContent = trainerTextEducation;
	const pupupTextExperience = document.querySelector(
		'.tab-content__text-experience'
	);
	pupupTextExperience.textContent = trainerTextExperience;
	const pupupTextAwards = document.querySelector('.popup-content__text-awards');
	pupupTextAwards.textContent = trainerTextAwards;
};
