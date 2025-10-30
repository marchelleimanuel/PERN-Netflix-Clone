import { SUCCESS_CODE } from "../../common/common.js";
import User from "../../models/User/userModel.js";


export const deleteTokenController = async (req, res) => {
    const { id_user } = req.body;

    await User.update(
        {
            refreshToken: null
        },
        {
            where: {
                idUser: id_user
            }
        }
    )

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return res.status(200).json({
        response_code: SUCCESS_CODE,
        response_message: 'Token deleted successfully!'
    });

}