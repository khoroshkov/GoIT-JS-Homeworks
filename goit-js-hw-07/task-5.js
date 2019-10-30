'use strict';


const inputField = document.getElementById('name-input');
const outputField = document.getElementById('name-output');


inputField.addEventListener('input', () => {
  outputField.textContent = inputField.value;
  if (inputField.value === '') {
    outputField.textContent = 'незнакомец';
  }
})