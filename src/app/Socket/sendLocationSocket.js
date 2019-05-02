const Message = require('../Utils/Message')
const {getUser} = require('../Utils/users')

const sendLocationSocket = (io, socket) => {

    return (position) => {
        var user = getUser(socket.id)
        io.to(user.room).emit('message', new Message(`https://google.com/maps?q=${position.latitude},${position.longitude}`, user))
    }

}

module.exports = sendLocationSocket