import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export const slider = () => {
	const trainers = new Swiper('.trainers__cards', {
		modules: [Navigation, Scrollbar],
		speed: 400,
		slidesPerView: 'auto',
		spaceBetween: 40,
		scrollbar: {
			el: '.trainers-nav__scrollbar',
			draggable: false,
		},
		navigation: {
			prevEl: '.trainers-nav__btn--prev',
			nextEl: '.trainers-nav__btn--next',
		},
		// breakpoints: {
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	1024: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	1360: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 20,
		// 	},
		// },
	});
};
