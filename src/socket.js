const socketio = require('socket.io')
const joinRoomSocket = require('./app/Socket/joinRoomSocket')
const sendMessageSocket = require('./app/Socket/sendMessageSocket')
const sendLocationSocket = require('./app/Socket/sendLocationSocket')
const disconnectSocket = require('./app/Socket/disconnectSocket')

function init(server) {

    const io = socketio(server);

    io.on('connection', (socket) => {

        socket.on('join', joinRoomSocket(io, socket))

        socket.on('sendMessage', sendMessageSocket(io, socket));

        socket.on('sendLocation', sendLocationSocket(io, socket))

        socket.on('disconnect', disconnectSocket(io, socket))

    })

    return io;

}

module.exports = init;