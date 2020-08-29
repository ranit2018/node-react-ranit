const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(cors());
app.get("/", (req, rsp) => {
  rsp.send("Welcome");
});

io.on("connection", (socket) => {
  socket.on("user-connected", (name) => {
    console.log(`${name} connected`);
  });
  socket.on("disconnect", function () {
    console.log("user disconnected!");
  });
});

server.listen(process.env.PORT || 9000);
