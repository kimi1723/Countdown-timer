const settings = document.querySelector('.settings') as HTMLDivElement;
const settingsBtn = document.querySelector('.settings-btn') as HTMLButtonElement;
const imageSection = document.querySelector('.image-section') as HTMLDivElement;

const eventName = document.querySelector('#event-name') as HTMLInputElement;
const eventDay = document.querySelector('#event-day') as HTMLInputElement;
const eventMonth = document.querySelector('#event-month') as HTMLInputElement;
const eventYear = document.querySelector('#event-year') as HTMLInputElement;
const eventImg = document.querySelector('#event-image') as HTMLInputElement;

const eventNameSpan = document.querySelector('.event') as HTMLSpanElement;
const daysCount = document.querySelector('.days-count') as HTMLParagraphElement;
const hoursCount = document.querySelector('.hours-count') as HTMLParagraphElement;
const minutesCount = document.querySelector('.minutes-count') as HTMLParagraphElement;
const secondsCount = document.querySelector('.seconds-count') as HTMLParagraphElement;

const saveBtn = document.querySelector('.save') as HTMLButtonElement;

const handleCountdownTimer = (): void => {
	if (validateInputs() === false) return;
	updateVariables();
};

const validateInputs = (): boolean => {
	if (
		eventName.value !== '' &&
		eventDay.value !== '' &&
		eventMonth.value !== '' &&
		eventYear.value !== '' &&
		eventImg.value !== ''
	) {
		return true;
	} else {
		return false;
	}
};

const updateVariables = () => {
	eventNameSpan.textContent = eventName.value;
	imageSection.style.backgroundImage = `url('${eventImg.value}')`;

	updateTime();
};

const updateTime = (): void => {
	const currentTime: Date = new Date();
	const userTime: Date = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
	const result: number = userTime.valueOf() - currentTime.valueOf();

	const days: number = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours: number = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes: number = Math.floor(result / 1000 / 60) % 60;
	const seconds: number = Math.floor(result / 1000) % 60;

	daysCount.textContent = days.toString();
	hoursCount.textContent = hours.toString();
	minutesCount.textContent = minutes.toString();
	secondsCount.textContent = seconds.toString();
};

const handleSettingsDisplay = (): void => {
	settings.classList.toggle('active');
};

settingsBtn.addEventListener('click', handleSettingsDisplay);
saveBtn.addEventListener('click', handleCountdownTimer);

updateVariables();
setInterval(updateTime, 1000);
