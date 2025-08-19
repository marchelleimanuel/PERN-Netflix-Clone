import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ERROR_CODE, SUCCESS_CODE } from '../common/common.js';
dotenv.config();

const jwtAuth =  (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({
            response_code: ERROR_CODE,
            message: 'No token provided'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({
            response_code: ERROR_CODE,
            message: 'Invalid or expired token'
        });
    }



}

export default jwtAuth;