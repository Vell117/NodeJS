/*
// Используем модуль os, который предоставляет информацию
// об окружении и операционной системе
const os = require("os");

// Добавляем модуль
const greeting = require("./greeting");

// получим имя текущего пользователя
let userName = os.userInfo().username;
 
// Вывод в консоль, вызов переменной и метода из фалйа greeting.js
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
*/ 
// Добавляем модуль
const User = require("./user.js");

// Создаем объект функции
let eugene = new User("Eugene", 32);

// Вызываем функциюиз модуля
eugene.sayHi();