'use strict';

const formatString = function (string) {
  const stringLength = string.length;

  if (stringLength < 40) {
    return string;
  } else {
    string = string.slice(0, 40);
    return string + '...';
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

console.log(formatString('Pellentesque libero tortor tincidunt et. Curabitur at lacus ac velit.'));