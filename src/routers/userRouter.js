const express = require('express')
const router = new express.Router()

const userController = require('../app/Http/Controllers/userController')
const auth = require('../app/Http/Middleware/authMiddleware')

router.get('/', auth, userController.index)

module.exports = router