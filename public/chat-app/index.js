require.config({
    baseUrl: 'chat-app',
    paths: {
        'jquery': 'https://code.jquery.com/jquery-3.4.0.min',
        'socketio': '/socket.io/socket.io',
        'mustache': 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min',
        'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min',
        'qs': 'https://cdnjs.cloudflare.com/ajax/libs/qs/6.6.0/qs.min',
        'linkify': '../plugins/linkify/linkify.amd.min',
        'linkify-html': '../plugins/linkify/linkify-html.amd.min',
        'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min'
    },
    shim: {
        'socketio': {
            exports: 'io'
        },
        'linkify-html': {
            deps: ['jquery', 'linkify']
        }
    },
    deps: ['app']
});