define([
    '../utilities/message_transformer',
    'mustache'
], (messageTransformer, Mustache) => {
    return (message) => {
        const $messages = document.querySelector('#messages')
        const messageTemplate = document.querySelector('#message-template').innerHTML

        Mustache.tags = ["[[", "]]"];

        const transformedMessage = messageTransformer(message)
        const html = Mustache.render(messageTemplate, {
            message: transformedMessage
        })

        $messages.insertAdjacentHTML('beforeend', html)
    }
});