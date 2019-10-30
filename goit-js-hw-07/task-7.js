'use strict';

const inputControl = document.getElementById('font-size-control');
const outputArea = document.getElementById('text');

inputControl.addEventListener('input', () => {
  outputArea.style.fontSize = inputControl.value + 'px';
  })