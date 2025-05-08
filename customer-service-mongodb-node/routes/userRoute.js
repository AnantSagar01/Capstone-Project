const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
 
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update', auth, userController.updateUser);
router.delete('/delete', auth, userController.deleteUser);
router.get('/all',userController.getAllUsers);



module.exports = router;

