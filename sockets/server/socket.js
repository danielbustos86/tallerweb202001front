const express = require('express'); 
const app = express();
const server = app.listen(9000,console.log("Socket.io Hello Wolrd server started!"));
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    //console.log("Client connected!");
    socket.on('recibe', (msg) => {
        console.log(msg);
        io.emit('reproduce', msg);
    })

});