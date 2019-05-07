define([
    'mustache',
    '../dom'
], (Mustache, {$sidebar, $sidebarTemplate}) => {

    return (roomData) => {

        const sidebarTemplate = $sidebarTemplate.innerHTML;

        Mustache.tags = ["[[", "]]"];

        const html = Mustache.render(sidebarTemplate, {
            room: roomData.room,
            users: roomData.users
        })

        $sidebar.innerHTML = html

    }

});