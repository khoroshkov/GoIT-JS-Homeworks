'use strict';

const checkForSpam = function (string) {
  const checkWord = string.toLowerCase();
  const words = checkWord.split(/\b/);

  // Вариант-1

  return words.includes('spam') || words.includes('sale');

  // Варинат-2

  // for (const word of words) {
  //   if (words.includes('spam') || words.includes('sale')) {
  //     return true;
  //   }
  // }

  // return false;


  // Вариант-3

  // for (const word of words) {
  //   if (word === "spam" || word === "sale") {
  //     return true;
  //   }
  // }

  // return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));

console.log(checkForSpam('It is a big (sAlE), only two days left'));