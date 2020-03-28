const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const app = express();

const formatMessage = require("./util/formatMessage");

const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
  console.log("New Connection");

  //rest of the clients except new client
  socket.broadcast.emit("message",formatMessage('admin', "New user joined"));

  // all the clients
  io.emit();

  socket.on("disconnect", function() {
    io.emit("user disconnected");
  });

  socket.on("sendMessage", function(message) {
    console.log("user typed", message);
  });
});

const PORT = process.env.port || 3000;

server.listen(PORT, () => console.log("Server started"));