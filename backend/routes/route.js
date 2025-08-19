import express, { response } from 'express';
import RegisterController from '../controllers/Register/registerController.js';
import LoginController from '../controllers/Login/loginController.js';
import jwtAuth from '../middleware/verifyToken.js';
import User from '../models/User/userModel.js';

const router = express.Router();

router.post('/register', RegisterController);
router.post('/login', LoginController);

// router.get('/tes', jwtAuth, async (req, res) => {
//     const allUser = await User.findAll();

//     if(!allUser)  return res.status(400).json({
//         message: 'error bro'
//     });

//     return res.status(200).json({
//         response: 'berhasil kok',
//         data: allUser
//     });
// });


export default router;
