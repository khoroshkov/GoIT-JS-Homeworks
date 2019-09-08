'use strict';

const userCredits = 23580;
const pricePerDroid = 3000;
const orderLabel = `Укажите необходимое количество дроидов`;

let orderMessage;
let userOrder = prompt(orderLabel);

if (userOrder === null) {
  orderMessage = `Отменено пользователем.`;
} else if (userOrder * pricePerDroid < userCredits) {
  let totalPrice = userOrder * pricePerDroid;
  let creditLeft = userCredits - totalPrice;
  orderMessage = `Вы купили ${userOrder} дроидов, на счету осталось ${creditLeft} кредитов.`;
} else {
  orderMessage = "Недостаточно средств на счету!";
}

console.log(orderMessage);
