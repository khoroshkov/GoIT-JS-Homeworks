'use strict';

const findBestEmployee = (employees) => {
  let maxTask = 0;
  let name;
  
  const entries = Object.entries(employees);
  for (const entry of entries) {

    if (maxTask < entry[1]) {
      maxTask = entry[1];
      name = entry;
    };
  };
  
  //====== Второй варинат =======//
  // const keys = Object.keys(employees);
  // for (const key of keys) {

  //   if (maxTask < employees[key]) {
  //     maxTask = employees[key];
  //     name = key;
  //   }
  // }
  return name;
};



// Вызовы функции для проверки работоспособности твоей реализации.

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux