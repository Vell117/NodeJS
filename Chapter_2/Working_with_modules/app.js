/*
var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`); //Hello Alice
 
var greeting2 = require("./greeting.js");
greeting2.name= "Bob";
 
console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob

// Несмотря на то, что здесь два раза получаем модуль с помощью функции require, 
// но обе переменных - greeting1 и greeting2 будут указывать на один и тот же объект.
*/

// Подключаем модуль 
const welcome = require("./welcome");
// Вызываем функции из объекта
welcome.getMorningMessage();
welcome.getEveningMessage();
