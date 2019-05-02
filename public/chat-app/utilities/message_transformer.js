define([
    'jquery',
    'moment',
    'linkify-html',
    'lodash'
], function ($, moment, linkifyHtml, _) {
    return (message) => {
        var createdAt = moment(message.created_at).format('h:mm a')
        var text = linkifyHtml(message.text, {
            defaultProtocol: 'https'
        });

        if(message.user) {
            message.user.username = _.capitalize(message.user.username)
        }

        return {
            text,
            created_at: createdAt,
            user: message.user
        }
    }
});