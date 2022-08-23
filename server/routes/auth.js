const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
router.post('/signup', authController.addNewUser);
router.post('/signin', authController.loginUser);
router.get('/', authController.getAllUsers);
module.exports = router;
