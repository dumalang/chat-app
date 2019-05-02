define([
    'dom'
], (
    {$messageFormButton, $messageFormInput}
) => {
    return (e) => {
        e.preventDefault()
        $messageFormButton.setAttribute('disabled', 'disabled')
        const message = {
            text: e.target.elements.message.value
        }
        socket.emit('sendMessage', message, (error, success) => {
            $messageFormButton.removeAttribute('disabled')
            $messageFormInput.value = ''
            $messageFormInput.focus()
            if (error) {
                console.log('Something went wrong!', error)
            } else {
                console.log(success)
            }
        })
    }
});