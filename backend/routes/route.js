import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {GetStartedController, RegisterController} from '../controllers/Register/registerController.js';
import LoginController from '../controllers/Login/loginController.js';
import authenticate from '../middleware/verifyToken.js';
import User from '../models/User/userModel.js';
import { GetPlanSelectionController, GetSignUpStageController, UpdateSignUpStageController } from '../controllers/GetStarted/getStartedController.js';
import refreshTokenController from '../middleware/refreshToken.js';
import { deleteTokenController } from '../controllers/Home/homeController.js';
import { createCheckoutSessionController } from '../controllers/Payment/createCheckoutSessionController.js';
import { getSessionStatusController } from '../controllers/Payment/getSessionStatusController.js';

const router = express.Router();

router.post('/getStarted', GetStartedController);
router.post('/login', LoginController);
router.post('/register', RegisterController)
router.get('/planSelection', GetPlanSelectionController)
router.get('/getSignUpStage', GetSignUpStageController)
router.put('/updateSignUpStage', UpdateSignUpStageController)
router.post('/refreshToken', refreshTokenController);
router.post('/deleteToken', deleteTokenController)

router.post('/create-checkout-session', createCheckoutSessionController);
router.get('/session-status', getSessionStatusController)

// router.get('/private', authenticate ,async (req, res) => {
//     const allUser = await User.findAll();

//     try {    
//         return res.status(200).json({
//             response: 'berhasil kok',
//             data: allUser
//         });
//     } catch(err) {
//         return res.status(403).json({
//             response: 'gagal',
//         });
//     }
// });


export default router;
