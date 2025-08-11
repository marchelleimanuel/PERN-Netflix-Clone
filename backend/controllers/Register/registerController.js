import { ERROR_CODE, SUCCESS_CODE } from "../../common/common.js";
import bcrypt, { genSalt, hash } from 'bcryptjs';
import User from "../../models/User/userModel.js";

const RegisterController = async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    const regexEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!regexEmailValidation.test(email)) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Email is not valid'
    });

    if(password.length < 10) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Password must be atleast 8 characters'
    })

    if(!(password === confirmPassword)) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Password must be match'
    }) 

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    User.create({
        email: email,
        password: hashedPassword,
    });

    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Register Success!'
    });
}

export default RegisterController;