/* Чтение файла 
// Подключение модулей для работы с файлами
const fs = require("fs");
 
// асинхронное чтение
fs.readFile("hello.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
 
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
*/

/* Запись файла (перезапись данных без сохранения предыдущих)
// Подключение модулей для работы с файлами
const fs = require("fs");
// Синхронная запись
fs.writeFileSync("hello.txt", "Привет ми ми ми!");
console.log("Синхронная запись в файла завершена. Содержимое файла:");
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
console.log();

// Асинхронная запись
console.log("Асинхронная запись в файл");
fs.writeFile("hello.txt", "Hello мир!", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
});
*/

/* Дозапись в файл
const fs = require("fs");
 
fs.appendFileSync("hello.txt", "Привет ми ми ми!");
 
fs.appendFile("hello.txt", "Привет МИД!", function(error){
    if(error) throw error; // если возникла ошибка
                 
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);  // выводим считанные данные
});
*/

/* Удаление файла
// Синхронное fs.unlinkSync("hello.txt");
// Асинхронное:
fs.unlink("hello.txt", (err) => {
  if (err) console.log(err); // если возникла ошибка    
  else console.log("hello.txt was deleted");
});
 */