/* Пример с асинхронным вызовом
function display(data, callback){
 
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
 
console.log("Начало работы программы");
 
display("Обработка данных...", function (err, data){
 
    if(err) throw err;
    console.log(data);
});
 
console.log("Завершение работы программы");
*/

// Пример с двумя асинхронными вызовами
function displaySync(callback){
    callback();
}
 
console.log("Начало работы программы");
 
setTimeout(function(){
         
        console.log("timeout 500");
}, 500);
 
setTimeout(function(){
         
        console.log("timeout 100");
}, 100);
 
displaySync(function(){console.log("without timeout")});
console.log("Завершение работы программы");