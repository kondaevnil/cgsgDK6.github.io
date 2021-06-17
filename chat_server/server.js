const { parse } = require('cookie');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 8080;

let messages = [];

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
    console.log('user connected');

    for (let message of messages) {
        socket.emit('chat message', JSON.stringify(message));
    }

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', msg => {
        let message = JSON.parse(msg);

        messages.push(message);
        console.log(`message: ${msg}`);

        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log(`port is ${port}`);
});