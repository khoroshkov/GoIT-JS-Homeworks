'use strict';

const categoriesCount = document.getElementById('categories').children.length;

console.log(`В списке ${categoriesCount} категории`);

//==================================//


const categories = document.getElementById('categories');

const getCategoriesInfo = () => {
  const categoryInfo = [...categories.children]
    .map(e => `Категория: ${e.children[0].textContent}
  Количество элементов: ${e.children[1].children.length}`)
    .join('\n');
  console.log(categoryInfo);
};

getCategoriesInfo();