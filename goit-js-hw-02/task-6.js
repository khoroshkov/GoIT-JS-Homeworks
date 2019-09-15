'use strict';

let numbers = [];
let input;
let total = 0;

do {
  input = Number(prompt('Введите любое число: '));

  if (input === Number(input)) {
    numbers.push(input);
  } else {
    alert("Было введено не число, попробуйте еще раз!");
    input = Number(prompt('Введите любое число: '));
  }
}

while (input);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}


console.log("Общая сумма введенных чисел равна: " + total);