'use strict';

const countProps = (obj) => {
  let total = 0;

  const keys = Object.keys(obj);
  for (const key of keys) {
    total += 1;
  };

  //====== Второй вариант ======//
  // for (const key in obj) {
  //   total += 1;
  // }
  
  return total;
};



// Вызовы функции для проверки работоспособности твоей реализации.

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3