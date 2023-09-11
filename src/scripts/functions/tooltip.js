import { createPopper } from '@popperjs/core';

export const tooltip = () => {
	const tooltipTriggers = document.querySelectorAll('.tooltip__trigger');

	tooltipTriggers.forEach((trigger) => {
		const tooltip = trigger.parentNode.querySelector('.tooltip__text');

		createPopper(trigger, tooltip, {
			placement: 'top',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, 12],
					},
				},
			],
		});

		trigger.addEventListener('mouseenter', () => {
			tooltip.style.opacity = '1';
		});

		trigger.addEventListener('mouseleave', () => {
			tooltip.style.opacity = '0';
		});
	});
};
