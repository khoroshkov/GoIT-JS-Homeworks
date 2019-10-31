'use strict';

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueField = document.getElementById('value');
let counterValue = 0;

counterValueField.textContent = counterValue;


function increment() {
  counterValue += 1;
};

function decrement() {
  counterValue -= 1;
};

incrementBtn.addEventListener('click', () => {
  increment();
  counterValueField.textContent = counterValue;

  if (counterValue >= 0) {
    counterValueField.classList.remove('negative');  // - добавил ради интереса
  }
})

decrementBtn.addEventListener('click', () => {
  decrement();
  counterValueField.textContent = counterValue;

  if(counterValue < 0) {
    counterValueField.classList.add('negative');  // - добавил ради интереса
  }
})


// можно решить и без if

// const actions = {
// state: {
// value: 0,
// },
// decrement() {
// this.state.value -= 1;
// },
// increment() {
// this.state.value += 1;
// },
// };

// const changeValue = ({ target }) => {
// actions[target.dataset.action]();
// value.textContent = actions.state.value;
// };



//========================= Вариант с конструктором функции ===============//////
// const Counter = function({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// }

// Counter.prototype.increment = function() {
//   this.value += this.step;
// }

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// }
// const counter = new Counter ({ initialValue: 0, step: 1 });

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const counterValueField = document.getElementById('value');

// counterValueField.textContent = counter.value;

// incrementBtn.addEventListener('click', () => {
//   counter.increment();
//   counterValueField.textContent = counter.value;
// })

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   counterValueField.textContent = counter.value;
// })