const User = require('./User')

class Bot extends User {

    constructor() {
        return super(null, 'ChatBot', null);
    }

}

module.exports = Bot;