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
const list = document.createElement('ul');
list.id = 'ingredients';

ingredients.forEach(function (item) {
  let listItem = document.createElement('li');
  listItem.textContent = item;
  list.appendChild(listItem);
})

ingredientsList.replaceWith(list);

//========= Первый вариант ============//

// const ingredientsList = document.getElementById('ingredients');

// function createListItem(ingredients) {
//   let listItem;

//   for(let i = 0; i < ingredients.length; i += 1) {
//     listItem = document.createElement('li');
//     listItem.textContent = ingredients[i];
//     ingredientsList.appendChild(listItem);
//   }
// }

// createListItem(ingredients);
