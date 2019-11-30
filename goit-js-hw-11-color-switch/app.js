'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', () => {
  toggleColor ()
});

function toggleColor (event) {
  const intervalId = setInterval(() => {
    let colorIndex = colors[randomIntegerFromInterval(0, 5)];
    refs.body.style.backgroundColor = colorIndex;
}, 1000);
refs.startBtn.disabled = true;

refs.stopBtn.addEventListener('click', (e) => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
});
}