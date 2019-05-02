const moment = require('moment')

class Message {

    constructor(text, user = null, createdAt = moment()) {

        return {
            text,
            created_at: createdAt.toISOString(),
            user
        }

    }

}

module.exports = Message;