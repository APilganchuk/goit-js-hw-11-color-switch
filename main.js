const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const CHANGE_COLOR_DELAY = 1000;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onBtnClickStart);

function onBtnClickStart() {
    refs.startBtn.setAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled');
    changeBodyColor(colors);

    refs.stopBtn.addEventListener('click', () => {
        refs.startBtn.removeAttribute('disabled');
    });
}

function changeBodyColor(colors) {
    const minValue = 0;
    const maxValye = colors.length - 1;

    const intervalId = setInterval(() => {
        refs.body.style.backgroundColor =
            colors[randomIntegerFromInterval(minValue, maxValye)];
    }, CHANGE_COLOR_DELAY);

    refs.stopBtn.addEventListener('click', () => {
        refs.stopBtn.setAttribute('disabled', 'disabled');
        clearInterval(intervalId);
    });
}
