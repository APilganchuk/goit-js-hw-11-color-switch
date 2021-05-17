const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const CHANGE_COLOR_DELAY = 1000;
let intervalId = null;

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
    
    refs.stopBtn.addEventListener('click', onBtnClickStop);
}

function changeBodyColor(colors) {
    const minValue = 0;
    const maxValue = colors.length - 1;

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor =
            colors[randomIntegerFromInterval(minValue, maxValue)];
    }, CHANGE_COLOR_DELAY);
}
function onBtnClickStop() {
    refs.stopBtn.setAttribute('disabled', 'disabled');
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
}
