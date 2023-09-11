import { burger } from './functions/burger';
import { slider } from './functions/slider';
import { tooltip } from './functions/tooltip';
import { activeTab } from './functions/activeTab';
import { togglePopup } from './functions/togglePopup';
import { validationInputs } from './functions/validation';

const app = () => {
	burger();
	slider();
	tooltip();
	validationInputs();
	activeTab();
	togglePopup();
};

app();
