const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: "Join"
    })
})

router.get('/chat', (req, res) => {
    res.render('chat', {
        title: "Chat"
    })
})

module.exports = router