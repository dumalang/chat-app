define([
    './renders/render_message',
    './renders/render_sidebar',
    'qs'
], (
    renderMessage,
    renderSidebar,
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
        socket.on('roomData', renderSidebar)
    }

})