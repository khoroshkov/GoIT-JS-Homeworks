'use strict';

const inputField = document.querySelector('#validation-input');


inputField.addEventListener('blur', () => {

  if (inputField.value.length === 6) {
    inputField.classList.add('valid');
    inputField.classList.remove('invalid');
  }
  else {
    inputField.classList.add('invalid');
  }
})