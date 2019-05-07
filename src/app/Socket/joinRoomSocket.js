const Message = require('../Utils/Message')
const User = require('../Utils/User')
const Bot = require('../Utils/Bot')
const Room = require('../Utils/Room')
const {addUser} = require('../Utils/users')

const joinRoom = (io, socket) => {

    return (options, callback) => {

        const newUser = new User(socket.id, options.username, options.room)

        const {error, user} = addUser(newUser)

        if (error) {
            return callback(error)
        }

        socket.join(user.room)

        const bot = new Bot;

        socket.emit('message', new Message("Welcome to chat", bot))

        socket.broadcast.to(user.room).emit('message', new Message(`${user.username} joined the room`, bot))

        io.to(user.room).emit('roomData', new Room(user.room))

        callback(undefined, user)

    }
}

module.exports = joinRoom