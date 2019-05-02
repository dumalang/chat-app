const Message = require('../Utils/Message')
const {removeUser} = require('../Utils/users')

const disconnectSocket = (io, socket) => {

    return () => {
        user = removeUser()
        if (user) {
            io.to(user.room).emit('message', new Message(`${user.username} has left`))
        }
    }

}

module.exports = disconnectSocket