import dotenv from 'dotenv';
dotenv.config();
import { ERROR_CODE, SUCCESS_CODE } from '../common/common.js';
import jwt from 'jsonwebtoken';

const authenticate =  (req, res, next) => {
    const accessToken = req.cookies['access_token'];
    if(!accessToken) return res.status(401);

    jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                response_code: ERROR_CODE,
                response_message: 'Access Token is not Valid or Expired'
            });
        } 
        else {
            req.user = decoded;
            next();
        }
    });
}

export default authenticate;