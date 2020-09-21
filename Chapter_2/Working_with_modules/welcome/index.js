// Подключаем модули
const morning = require("./morning");
const evening = require("./evening");

// Определяем объект с двумя функциями 
module.exports = {
    getMorningMessage : function(){ console.log(morning);},
    getEveningMessage : function(){ console.log(evening);}
}

