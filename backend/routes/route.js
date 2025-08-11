import express from 'express';
import RegisterController from '../controllers/Register/registerController.js';

const app = express();

const router = express.Router();

router.post('/register', RegisterController);


export default router;
