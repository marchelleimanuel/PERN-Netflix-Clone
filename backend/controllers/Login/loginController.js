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

    if(!user) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Email is not registered'
    })

    const comparedPassword = await bcrypt.compare(password, user.password);
    if(!comparedPassword) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Password is incorrect'
    })

    const accessToken = jwt.sign({id_user: user.dataValues.id_user, email: user.dataValues.email}, process.env.ACCESS_TOKEN, {expiresIn: '3s'});
    const refreshToken = jwt.sign({id_user: user.dataValues.id_user, email: user.dataValues.email}, process.env.REFRESH_TOKEN, {expiresIn: '30d'});

    res.cookie("access_token", accessToken, {
        httpOnly: true
    })

    res.cookie("refresh_token", refreshToken, {
        httpOnly: true
    })

    await user.update({
        refreshToken: refreshToken
    })

    let userLoggedIn = {
        id_user: user.idUser,
        role: user.role,
        email: user.email,
        access_token: accessToken,
        refresh_token: refreshToken
    }
    
    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Login Success!',
        data: userLoggedIn,
    })
}

export default LoginController;