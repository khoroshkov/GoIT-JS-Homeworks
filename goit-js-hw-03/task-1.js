'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const changeUserInfo = function () {

  user.mood = 'happy';

  const keys = Object.keys(user);

  for (const key of keys) {
    user.hobby = 'javascript';
    user.premium = 'false';

    console.log(`${key}: ${user[key]}`);
  };

}

changeUserInfo();

// ======= Второй вариант. Показался каким-то простым и "неправильным"====== //


user.mood = 'happy';

const keys = Object.keys(user);

for (const key of keys) {

  user.hobby = 'javascript';
  user.premium = 'false';
  console.log(`${key}: ${user[key]}`);
};