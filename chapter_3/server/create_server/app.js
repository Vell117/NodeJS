/* // Request
// Параметр request позволяет получить информацию о запросе и представляет объект http.IncomingMessage.
var http = require("http");
 
http.createServer(function(request, response){
     
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
     
    response.end();
}).listen(3000);
*/

/* Response
// Параметр response управляет отправкой ответа и представляет объект http.ServerResponse.
const http = require("http");
 
http.createServer(function(request, response){
     
    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Node.js</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    response.write("<body><h2>Привет мир</h2></body>");
    response.write("</html>");
    response.end();
}).listen(3000);
*/

/* Маршрутизация без фреймворков 
const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>");
    }
    else if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.end();
}).listen(3000);
*/

// Переадресация
const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/"){
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader("Location", "/newpage");
    }
    else if(request.url == "/newpage"){
        response.write("New address");
    }
    else{
        response.statusCode = 404; // адрес не найден
        response.write("Not Found");
    }
    response.end();
}).listen(3000);
