const Message = require('../Utils/Message')
const Room = require('../Utils/Room')
const {removeUser} = require('../Utils/users')

const disconnectSocket = (io, socket) => {

    return () => {

        user = removeUser()

        if (user) {
            io.to(user.room).emit('message', new Message(`${user.username} has left`))

            io.to(user.room).emit('roomData', new Room(user.room))
            console.log(user.room);
        }

    }

}

module.exports = disconnectSocket