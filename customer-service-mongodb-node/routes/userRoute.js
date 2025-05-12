const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update', auth, userController.updateUser);
router.delete('/delete', auth, userController.deleteUser);
router.get('/all',userController.getAllUsers);


/**
 * @swagger
 * /all:
 *   get:
 *     summary: Retrieve all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get('/all', userController.getAllUsers);
/**
* @swagger
* /register:
*  post:
*   summary: Register a new user
*   requestBody:
*    required: true
*    content:
*     application/json:
*      schema:
*       type: object
*       properties:
*        firstname:
*         type: string
*        lastname:
*         type: string
*        email:
*         type: string
*        password:
*         type: string
*        confirm_password:
*         type: string
*   responses:
*    201:
*     description: User registered successfully
*    400:
*     description: Bad Request
*    500:
*     description: Server error
*/
router.post('/register', userController.registerUser);

/**
* @swagger
* /login:
*  post:
*   summary: Login a user
*   requestBody:
*    required: true
*    content:
*     application/json:
*      schema:
*       type: object
*       properties:
*        email:
*         type: string
*        password:
*         type: string
*   responses:
*    200:
*     description: User logged in successfully
*    401:
*     description: Unauthorized
*    500:
*     description: Server error
*/
router.post('/login', userController.loginUser);

// /**
//  * @swagger
//  * /update:
//  *   put:
//  *     summary: Update user information by email
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 description: Email ID of the user to update
//  *               name:
//  *                 type: string
//  *                 description: New name for the user
//  *     responses:
//  *       200:
//  *         description: User updated successfully
//  *       401:
//  *         description: Unauthorized
//  *       404:
//  *         description: User not found
//  *       500:
//  *         description: Server error
//  */

// router.put('/update', auth, userController.updateUser);
// /**
//  * @swagger
//  * /delete:
//  *   delete:
//  *     summary: Delete a user by email
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 description: Email ID of the user to delete
//  *     responses:
//  *       200:
//  *         description: User deleted successfully
//  *       401:
//  *         description: Unauthorized
//  *       404:
//  *         description: User not found
//  *       500:
//  *         description: Server error
//  */

// router.delete('/delete', auth, userController.deleteUser);

/**
@swagger

    router.get('/all', userController.getAllUsers);
*/
module.exports = router;
