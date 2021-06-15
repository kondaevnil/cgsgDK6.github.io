const http = require("http");
const fs = require("fs").promises;

const host = 'localhost';
const port = 8000;

let messages = [];

const requestListener = function (req, res) {
    console.log(
        `Request: ${req.method}, ${req.url}`
    );

    let fileName;
    let contentType;

    if (req.url === "/message" && req.method === "POST") {
        let data = "";
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            messages.push(JSON.parse(data));
            res.end();
        })
        return;
    } else if (req.url === "/message" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(messages));
        return;
    } else if (req.url === "/") {
        fileName = "index.html";
        contentType = "text/html";
    } else if (req.url.endsWith(".css")) {
        fileName = "style.css";
        contentType = "text/css";
    }

    fs.readFile(`${__dirname}/${fileName}`)
        .then(contents => {
            res.setHeader("Content-Type", contentType);
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(404);
            res.end(res.message);
            return;
        });
};


const server = http.createServer(requestListener);
server.listen(port);