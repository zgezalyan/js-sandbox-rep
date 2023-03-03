let login;
let message;

login = prompt('Введите логин', '')
message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : ''

alert(message)