const Filter = require('bad-words')
const Message = require('../Utils/Message')
const {getUser} = require('../Utils/users')

const sendMessage = (io, socket) => {

    return (clientMessage, callback) => {
        var user = getUser(socket.id)
        var error = undefined

        const filter = new Filter()

        if (filter.isProfane(clientMessage)) {
            error = "Profanity is not allowed"
        } else {
            // parsing mysql date into moment created_at: moment("2018-01-02 00:00:00Z").toISOString()
            io.to(user.room).emit('message', new Message(clientMessage.text, user))
        }

        callback(error, user)
    }
}

module.exports = sendMessage