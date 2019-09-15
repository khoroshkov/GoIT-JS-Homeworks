'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (userLogin) {
  if (userLogin.length < 4 || userLogin.length > 16) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
  return true;
};


const isLoginUnique = function (logins, userLogin) {
  for (const item of logins) {
    if (item === userLogin) {
      alert('Такой логин уже используется!');
      return false;
    }
  }
  return true;
};

const addLogin = function (logins, userLogin) {
  if (isLoginValid(userLogin) && isLoginUnique(logins, userLogin)) {
    alert('Логин успешно добавлен!');
    logins.push(userLogin);
  }
};




// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);