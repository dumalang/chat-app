define([
    '../utilities/message_transformer',
    'mustache',
    '../dom',
], (messageTransformer, Mustache, {$messages}) => {

    return () => {

        const $newMessage = $messages.lastElementChild
        const newMessagesStyles = getComputedStyle($newMessage)
        const newMessageMargin = parseInt(newMessagesStyles.marginBottom)
        const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

        const visibleHeight = $messages.offsetHeight + newMessageMargin

        const containerHeight = $messages.scrollHeight
        const scrollOffset = $messages.scrollTop + visibleHeight

        if (containerHeight - newMessageHeight <= scrollOffset) {
            $messages.scrollTop = $messages.scrollHeight
        }

    }

})
;