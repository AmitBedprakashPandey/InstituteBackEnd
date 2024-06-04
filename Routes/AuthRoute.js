const express = require('express');
const router = express.Router();
const { register, login ,findloger,forgetPassword } = require('../Controllers/AuthController');
const { verifyToken } = require('../Controllers/Middleware/AuthMiddleware');

// Register a new user
router.post('/register', register);

// Login
router.post('/login', login);

router.post('/find/:email', findloger);

// Protected route (example)
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route, token verified' });
});

module.exports = router;
