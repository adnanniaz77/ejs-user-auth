const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/userAuthController')

// GET "homepage" Route
router.get('/', userAuthController.home_get)

// GET "login" Route
router.get('/login', userAuthController.login_get);

// GET "register" Route
router.get('/register', userAuthController.register_get);

// GET "dashboard" Route
router.get('/dashboard', userAuthController.dashboard_get);

// POST login Route
router.post('/login', userAuthController.login_post);

// POST register new Route
router.post('/register', userAuthController.register_post);

module.exports = router;