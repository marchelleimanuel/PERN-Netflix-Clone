import { ERROR_CODE, SUCCESS_CODE } from "../../common/common.js";
import User from "../../models/User/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const LoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email: email
        }
    });

    // console.log('ini user', user);

    if(!user) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Email is not registered'
    })

    const comparedPassword = await bcrypt.compare(password, user.password);
    if(!comparedPassword) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Password is incorrect'
    })

    const token = jwt.sign({id_user: user.dataValues.id_user, email: user.dataValues.email}, process.env.SECRET_TOKEN, {expiresIn: '10s'});

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true
    })
    
    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Login Success!',
        token: token
    })
}

export default LoginController;