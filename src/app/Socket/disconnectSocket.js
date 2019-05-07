const Bot = require('../Utils/Bot')
const Message = require('../Utils/Message')
const Room = require('../Utils/Room')
const {removeUser} = require('../Utils/users')

const disconnectSocket = (io, socket) => {

    return () => {

        user = removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('message', new Message(`${user.username} has left`, new Bot()))

            io.to(user.room).emit('roomData', new Room(user.room))
        }

    }

}

module.exports = disconnectSocket