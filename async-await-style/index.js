const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const homeController = require("./app/controllers/home.controller");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // call controller
    homeController.sayHello(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
