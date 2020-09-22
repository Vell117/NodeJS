/*
// Подключаем модуль events
const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
// С помощью функции on() связываем событие, которое передается в качестве первого параметра, с некоторой функцией,
// которая передается в качестве второго параметра. 
emitter.on(eventName, function(){
    console.log("Hello all!");
});
 
emitter.on(eventName, function(){
    console.log("Привет!");
});
//Для генерации события и вызова связанных с ним обработчиков выполняется функция emitter.emit(), в которое передается название события. 
emitter.emit(eventName);
*/

//Наследование от EventEmitter
const EventEmitter = require("events");
  
let eventName = "greet";

// Пишем конструктор User 
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}
 
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
  
user.sayHi("Мне нужна твоя одежда...");