const ADMIN_PASSWORD = "jqueryismyjam";
const authorizationForm = `Введите ваш пароль Администратора`;
const userAuthorization = prompt(authorizationForm);
let message;

if (userAuthorization === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (userAuthorization === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);