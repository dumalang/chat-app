define([
    '../utilities/message_transformer',
    'mustache',
    '../dom',
    './autoscroll'
], (messageTransformer, Mustache, {$messages, $messageTemplate}, autoscroll) => {

    return (message) => {

        const messageTemplate = $messageTemplate.innerHTML

        Mustache.tags = ["[[", "]]"];

        const transformedMessage = messageTransformer(message)
        const html = Mustache.render(messageTemplate, {
            message: transformedMessage
        })

        $messages.insertAdjacentHTML('beforeend', html)

        autoscroll()

    }

});