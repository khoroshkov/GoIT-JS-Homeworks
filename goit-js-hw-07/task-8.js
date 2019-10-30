'use strict';


const inputField = document.getElementById('user-input-number');
const renderBtn = document.querySelector('.box-button[data-action="render"]');
const destroyBtn = document.querySelector('.box-button[data-action="destroy"]');
const boxes = document.querySelector('.boxes');


renderBtn.addEventListener("click", getUserInput);
destroyBtn.addEventListener("click", destroyBoxes);

const generateRandomColor = () => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};

function getUserInput() {
  let userNumber = Number(inputField.value);
  createBoxes(userNumber);
}

function createBoxes(userNumber) {
  const basicDivSize = 30;
    for (let i = 0; i < userNumber; i+= 1) {
    const boxSizes = basicDivSize + i * 10;
    const box = document.createElement("div");
    box.style.cssText = `width: ${boxSizes}px; height: ${boxSizes}px;`;
    box.style.backgroundColor = generateRandomColor();
    boxes.appendChild(box);
  }
  
}

function destroyBoxes() {
  boxes.innerHTML = '';
  inputField.value = '';
}