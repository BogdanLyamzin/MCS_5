import express from "express";

const app = express(); // app - web-server

// request - all about HTTP request
// response - config and send HTTP response to frontend

app.get("/", (request, response)=> {
    response.send("<h1>Home page</h1>");
})

app.get("/contacts", (request, response)=> {
    console.log(request.method);
    console.log(request.url);
    response.send("<h1>Contacts page</h1>");
})

app.listen(3000, ()=> console.log("Server runnig on 3000 port"));