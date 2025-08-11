import { ERROR_CODE, SUCCESS_CODE } from "../../common/common.js";
import User from "../../models/User/userModel.js";
import bcrypt from 'bcryptjs';

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
    
    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Login Success!'
    })
}

export default LoginController;