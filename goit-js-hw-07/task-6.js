'use strict';

const inputField = document.querySelector('#validation-input');


inputField.addEventListener('blur', () => {
  const inputValue = [...inputField.value];
  if (inputValue.length !== 6) {
    inputField.classList.add('invalid');
  }
  else {
      inputField.classList.add('valid');
  }
})