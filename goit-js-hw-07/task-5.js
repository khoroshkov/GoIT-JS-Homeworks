'use strict';


const userInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

userInput.addEventListener('input', () => {
  output.textContent = userInput.value || 'незнакомец';
});




  // inputField.addEventListener('input', () => {
//   outputField.textContent = inputField.value;
//   if (inputField.value === '') {
//     outputField.textContent = 'незнакомец';
//   }
// })