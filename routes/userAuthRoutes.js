const express = require('express');
const router = express.Router();

// get the login page
router.get('/login', (req, res) => {});

// get the register page
router.get('/register', (req, res) => {});

// get the dashboard
router.get('/dashboard', (req, res) => {});

// user login
router.post('/login', (req, res) => {});

// user register new
router.post('/register', (req, res) => {});

module.exports = router;