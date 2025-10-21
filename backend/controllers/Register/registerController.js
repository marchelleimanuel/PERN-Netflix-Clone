import { ERROR_CODE, SUCCESS_CODE } from "../../common/common.js";
import bcrypt, { genSalt, hash } from 'bcryptjs';
import User from "../../models/User/userModel.js";

export const RegisterController = async (req, res) => {
    const { email, password } = req.body;
    
    const regexEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!regexEmailValidation.test(email)) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Email is not valid'
    });

    if(password.length < 10) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Password must be atleast 8 characters'
    })

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    const newUser = await User.create({
        email: email,
        password: hashedPassword,
    });
    console.log(newUser);

    const data = {
        id_user: newUser.dataValues.id_user,
        email: newUser.dataValues.email,
        role: newUser.dataValues.role,
    }

    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Register Success!',
        data: data
    });
}

export const GetStartedController = async (req, res) => {
    const { email } = req.body

    const regexEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!regexEmailValidation.test(email)) return res.status(400).json({
        response_code: ERROR_CODE,
        response_message: 'Email is not valid'
    });

    const user = await User.findOne({
        where: {
            email: email
        }
    })

    if(!user) return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Unregistered'
    });

    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Registered'
    });

}