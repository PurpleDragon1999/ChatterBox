const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./users");
const formatMessage = require("./message");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botName = "ChatterBox";

io.on("connection", (socket) => {
  const { id } = socket.client;

  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(id, username, room);
    socket.join(user.room);

    socket.emit(
      "message",
      formatMessage(botName, `Hello ${username}, You have joined ${room} room`)
    );

    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
