// Первый элемент этого массива всегда указывает на путь к файлу node.exe
let nodePath = process.argv[0];
// Второй элемент массив всегда указывает на путь к файлу приложения, который выполняется
let appPath = process.argv[1];
// Остальное элементы с консоли
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);
// Теперь запустим приложение с помощью следующей команды: node app.js Tom 23