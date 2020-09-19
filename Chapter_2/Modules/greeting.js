let currentDate = new Date();

// Передача переменной для использования вне модуля
module.exports.date = currentDate;

// Передача метода для использования вне модуля
module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}