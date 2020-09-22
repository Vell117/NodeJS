// Пакет для работы с файлами
const fs = require("fs");

// Для создания потока для записи применяется метод fs.createWriteStream()
let writeableStream = fs.createWriteStream("hello.txt");
// Запись данных производится с помощью метода write()
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
// Чтение содержимого файла
let readableStream = fs.createReadStream("hello.txt", "utf8");

// Подпись на событие считывания, вывод в консоль
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});