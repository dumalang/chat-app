define([
    './renders/render_message',
    'qs'
], (
    renderMessage,
    Qs
) => {

    return () => {
        socket.on('message', renderMessage)
        const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})
        socket.emit('join', {username, room}, (error, user) => {
            if (error) {
                alert(error)
                location = '/'
            }
        })
    }

})