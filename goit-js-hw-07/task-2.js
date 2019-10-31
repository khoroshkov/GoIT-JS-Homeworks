'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById('ingredients');
let listItems = '<ul>';

ingredients.forEach(function (item) {
  listItems += '<li>' + item + '</li>';
})

ingredientsList.innerHTML = listItems;