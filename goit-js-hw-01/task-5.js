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

if (userInput === null) {
  shippingMessage = "Пожалуйста, выберите страну доставки";
} else {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case china:
      shippingMessage = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
      break;

    case chile:
      shippingMessage = `Доставка в ${chile} будет стоить ${chilePrice} кредитов`;
      break;

    case australia:
      shippingMessage = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
      break;

    case india:
      shippingMessage = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
      break;

    case jamaica:
      shippingMessage = `Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`;
      break;

    case ukraine:
      shippingMessage = `Доставка в ${ukraine} будет стоить ${ukrainePrice} кредитов!!!`;
      break;

    default:
      shippingMessage = "В вашей стране доставка не доступна";
  }
}

alert(shippingMessage);
