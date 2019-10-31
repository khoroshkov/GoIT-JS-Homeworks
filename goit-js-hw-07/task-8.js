'use strict';


const inputField = document.getElementById('user-input-number');
const renderBtn = document.querySelector('.box-button[data-action="render"]');
const destroyBtn = document.querySelector('.box-button[data-action="destroy"]');
const boxes = document.querySelector('.boxes');


renderBtn.addEventListener("click", getUserInput);
destroyBtn.addEventListener("click", destroyBoxes);


function getUserInput() {
  let userNumber = Number(inputField.value);
  createBoxes(userNumber);
}

function createBoxes(userNumber) {
  const basicDivSize = 30;
  
    for (let i = 0; i < userNumber; i+= 1) {
    const boxSizes = basicDivSize + i * 10;
    const box = document.createElement("div");
    box.style.cssText = `width: ${boxSizes}px; height: ${boxSizes}px; background-color: rgb( ${random()} , ${random()} , ${random()} )`;
    boxes.appendChild(box);
  }
  
}

// function createBoxes(userNumber) {
//   const basicDivSize = 30;
//     for (let i = 0; i < userNumber; i+= 1) {
//     const boxSizes = basicDivSize + i * 10;
//     const box = document.createElement("div");
//     box.style.cssText = `width: ${boxSizes}px; height: ${boxSizes}px; background-color: rgb( ${random()} , ${random()} , ${random()} )`;
//     boxes.appendChild(box);
//   }
  
// }

function destroyBoxes() {
  boxes.innerHTML = '';
  inputField.value = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}