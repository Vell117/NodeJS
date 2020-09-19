// Пишем функцию конструктора
function User(name, age){
     
    this.name = name;
    this.age = age;
    this.displayInfo = function(){
         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age}`);
};
// Передаем модуль и функцию для использования 
module.exports = User;