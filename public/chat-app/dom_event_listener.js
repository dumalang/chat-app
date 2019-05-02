define([
    'dom',
    './dom_events/message_form_submit',
    './dom_events/send_location_button_click'
], (
    {$messageForm, $sendLocationButton},
    messageFormSubmit, sendLocationButtonClick
) => {

    return () => {

        $messageForm.addEventListener('submit', messageFormSubmit)
        $sendLocationButton.addEventListener('click', sendLocationButtonClick)

    }

});