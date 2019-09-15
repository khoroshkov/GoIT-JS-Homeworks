'use strict';

// Вариант-1

const calculatePrice = function (message, pricePerWord) {
  const words = message.split(' ');
  const wordsCount = words.length;
  const total = wordsCount * pricePerWord;

  return total;
};

console.log(calculatePrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculatePrice('Donec orci lectus aliquam est', 40));

console.log(calculatePrice('Donec orci lectus aliquam est', 20));



//  Вариант-2


const calculateEngravingPrice = function (message, pricePerWord) {
  let total = 0;
  const words = message.split(' ');

  for (const word of words) {
    total += pricePerWord;
  }

  return total;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));