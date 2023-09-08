import { burger } from './functions/burger';
import { slider } from './functions/slider';
import { tooltip } from './functions/tooltip';
import { activeTab } from './functions/activeTab';
import { togglePopup } from './functions/togglePopup';
import { getData } from './functions/getData';
import { data } from './helpers/const';

const app = () => {
	burger();
	slider();
	tooltip();
	activeTab();
	togglePopup();
	getData(data);
};

app();
