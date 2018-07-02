const express = require('express')
const router = express.Router();
const usersRoutes = require('./users')
const authRoutes = require('./auth')
const postsRoutes = require('./posts')

router.use('/users', usersRoutes)

router.use('/user-auth', authRoutes)

router.use('/posts', postsRoutes)

module.exports = router
