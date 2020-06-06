const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  const { id } = socket.client;
  console.log(`Client connected at ${id}`);

  socket.on("Javascript", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });

  socket.on("Python", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });

  socket.on("PHP", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });

  socket.on("C#", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });

  socket.on("Ruby", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });

  socket.on("Java", ({ message, username }) => {
    io.emit("Javascript", { username, message });
  });
});

const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
