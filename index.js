const socketio = require('socket.io');
const http = require('http');
const express = require('express');
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

const server = http.createServer(app);
const io = socketio(server);

io.on("connection",(socket)=>{
    socket.emit("testing","hello from client socket conn");
})

server.listen(8000,()=>{
    console.log("client at port 8000"); 
})
