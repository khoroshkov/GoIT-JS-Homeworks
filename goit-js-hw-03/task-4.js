'use strict';

const countTotalSalary = (employees) => {
  let total = 0;

  const salaryValues = Object.values(employees);

  for (const value of salaryValues) {
    total += value;
  }

  // Второй вариант =====//
  // for (const key in employees) {
  //   total += employees[key];
  // };

  return total;
};


// Вызовы функции для проверки работоспособности твоей реализации.

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })); // 400