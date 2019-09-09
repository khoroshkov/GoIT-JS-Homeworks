'use strict';

const china = "china";
const chile = "chile";
const australia = "australia";
const india = "india";
const jamaica = "jamaica";
const ukraine = "ukraine";

const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 100;
const ukrainePrice = 0;

const shippingLabel = `Укажите страну доставки:`;
let userInput = prompt(shippingLabel);
let shippingMessage;
let userCountry;

if (userInput === null) {
  shippingMessage = "Пожалуйста, выберите страну доставки";
} else {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case china:
      userCountry = chinaPrice;
      break;

    case chile:
      userCountry = chilePrice;
      break;

    case australia:
      userCountry = australiaPrice;
      break;

    case india:
      userCountry = indiaPrice;
      break;

    case jamaica:
      userCountry = jamaicaPrice;
      break;

    case ukraine:
      userCountry = ukrainePrice;
      break;

    default:
      alert(`Доставка в ${userInput} не доступна`);
      throw "stop"; //  Потребовалось остановить выполнение скрипта в случае ввода отсутствующей в списке страны.
  }

  shippingMessage = `Доставка в ${userInput} будет стоить ${userCountry} кредитов`;
}

alert(shippingMessage);
