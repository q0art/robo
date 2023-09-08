import { patterns } from '../helpers/const';

const validate = (input, regex) => {
	if (!regex.test(input.value)) {
		input.classList.add('invalid-input');
	} else {
		input.classList.remove('invalid-input');
	}
};

export const validationInputs = () => {
	const inputs = document.querySelectorAll('.order-form__input');

	inputs.forEach((input) => {
		input.addEventListener('keyup', (event) => {
			event.preventDefault();

			validate(event.target, patterns[event.target.attributes.name.value]);
		});
	});
};
