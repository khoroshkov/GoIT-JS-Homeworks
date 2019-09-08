'use strict';

let input;
let total = 0;

while (true) {
  input = prompt("Пожалуйста, введите любое число: ");

  if (input === null) {
    break;
  }

  input = Number(input);

  if (input === Number(input)) {
    total += input;
  } else {
    alert("Было введено не число, попробуйте еще раз!");
  }
}

alert("Общая сумма чисел равна: " + total);
