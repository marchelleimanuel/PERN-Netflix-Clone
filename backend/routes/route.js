import express from 'express';
import {GetStartedController, RegisterController} from '../controllers/Register/registerController.js';
import LoginController from '../controllers/Login/loginController.js';
import jwtAuth from '../middleware/verifyToken.js';
import User from '../models/User/userModel.js';
import { GetPlanSelectionController, GetSignUpStageController, UpdateSignUpStageController } from '../controllers/GetStarted/getStartedController.js';

const router = express.Router();

router.post('/getStarted', GetStartedController);
router.post('/login', LoginController);
router.post('/register', RegisterController)
router.get('/planSelection', GetPlanSelectionController)
router.get('/getSignUpStage', GetSignUpStageController)
router.put('/updateSignUpStage', UpdateSignUpStageController)

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
