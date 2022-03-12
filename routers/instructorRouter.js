// courseRouter.js - courses route model
const express = require('express')
const Instructor = require('../models/instructorModel')
const authController = require('../controllers/authController')

const router = express.Router()

router.post('/signup', authController.instructorSignUp)


module.exports = router