define([], () => {

    const $messages = document.querySelector('#messages')
    const $messageTemplate = document.querySelector('#message-template')
    const $messageForm = document.querySelector('#message-form')
    const $messageFormInput = $messageForm.querySelector('input')
    const $messageFormButton = $messageForm.querySelector('button')
    const $sendLocationButton = document.querySelector('#send-location')
    const $sidebar = document.querySelector('#sidebar')
    const $sidebarTemplate = document.querySelector('#sidebar-template')

    return {
        $messages,
        $messageTemplate,
        $messageForm,
        $messageFormInput,
        $messageFormButton,
        $sendLocationButton,
        $sidebar,
        $sidebarTemplate
    }

});