const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController')

// get homepage
router.get('/', userAuthController.home_get)

// get the login page
router.get('/login', userAuthController.login_get);

// get the register page
router.get('/register', userAuthController.register_get);

// get the dashboard
router.get('/dashboard', userAuthController.dashboard_get);

// user login
router.post('/login', userAuthController.login_post);

// user register new
router.post('/register', userAuthController.register_post);

module.exports = router;