import User from "../models/User/userModel.js";
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { ERROR_CODE, SUCCESS_CODE } from "../common/common.js";

const refreshTokenController = async (req, res) => {
    const refreshToken = req.cookies['refresh_token']
    if(!refreshToken) return res.status(401)

    const user = await User.findOne({
        where: {
            refreshToken: refreshToken
        }
    });
    if(!user) return res.status(401)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                response_code: ERROR_CODE,
                response_message: 'Refresh Token is not Valid or Expired'
            });
        }
        else {
            const { exp, iat, ...payload } = decoded; // remove exp dan iat nya
            const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: '3s'});

            res.cookie("access_token", newAccessToken, {
                httpOnly: true
            });

            return res.status(200).json({
                response_code: SUCCESS_CODE, 
                response_message: 'Access token refreshed' 
            });
        }

    });


}

export default refreshTokenController;