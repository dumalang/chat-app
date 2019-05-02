define([
    'socketio',
    './socket_event_listener',
    './dom_event_listener'
], (
    io,
    socketEventListener,
    domEventListener
) => {
    socket = io()
    socketEventListener()
    domEventListener()
})