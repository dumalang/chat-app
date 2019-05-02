define([], () => {
    return (e) => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported on your browser')
        }

        navigator.geolocation.getCurrentPosition((position) => {
            socket.emit('sendLocation', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }, (e) => {
            console.log(e)
        }, {timeout: 5000, enableHighAccuracy: true})
    }
});