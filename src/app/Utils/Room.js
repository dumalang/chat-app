const {getUsersInRoom} = require('./users')

class Room {

    constructor(room) {

        return {
            room,
            users : getUsersInRoom(room)
        }

    }

}

module.exports = Room;