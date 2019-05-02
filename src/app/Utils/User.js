class User {

    constructor(id, username = null, room = null) {
        return {
            id,
            username,
            room
        }
    }

}

module.exports = User;