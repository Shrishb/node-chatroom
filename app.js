const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
console.log("New Connection");

//new client
socket.emit("welcome");

//rest of the clients except new client
socket.broadcast.emit('message', 'New user joined');

// all the clients
io.emit();
});

const PORT = process.env.port || 3000;

server.listen(PORT, () => console.log("Server started"));