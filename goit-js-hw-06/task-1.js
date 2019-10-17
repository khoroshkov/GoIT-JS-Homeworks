'use strict';

import users from "./users.js";

// const getUserNames = users => users.map(user => user.name); - старый вариант

const getUserNames = users => users.map(({name}) => name);

console.log(getUserNames(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//=================


const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//================


const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender)
      .map(({name}) => name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//================


const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//===============

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//===============


const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//===============


// const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0); - старый вариант

const calculateTotalBalance = users => users.reduce((totalBalance, {balance}) => (totalBalance + balance), 0);

console.log(calculateTotalBalance(users)); // 20916
//===============


const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//================

const getNamesSortedByFriendsCount = users => {
  return users = [...users]
  .sort((a, b) => a.friends.length - b.friends.length)
  
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//=================


// const getSortedUniqueSkills = users => 
//   users.reduce((allSkills, user) => {allSkills.push(...user.skills);
//     return allSkills
//     .sort()
//     .filter((item, index) => allSkills.indexOf(item) === index);
//    }, []); - старый вариант.


const getSortedUniqueSkills = users => 
  users.reduce((allSkills, user) => [...allSkills, ...user.skills], [])
  .sort()
  .filter((elem, index, array) => array.indexOf(elem) === index);
  
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]