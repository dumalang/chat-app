define([], () => {
    const $messageForm = document.querySelector('#message-form')
    const $messageFormInput = $messageForm.querySelector('input')
    const $messageFormButton = $messageForm.querySelector('button')
    const $sendLocationButton = document.querySelector('#send-location')
    return {
        $messageForm,
        $messageFormInput,
        $messageFormButton,
        $sendLocationButton
    }
});