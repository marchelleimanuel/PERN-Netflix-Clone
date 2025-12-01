import { ERROR_CODE, SUCCESS_CODE } from "../../common/common.js";
import SubscriptionType from "../../models/Subscription_Type/subscriptionTypeModel.js";
import User from "../../models/User/userModel.js";

export const GetPlanSelectionController = async (req, res) => {
    try {
        const data = await SubscriptionType.findAll();

        return res.status(200).json({
            response_code: SUCCESS_CODE,
            response_message: 'Data fetched successfully',
            data: data
        });
    } catch (error) {
        return res.status(404).json({
            response_code: ERROR_CODE,
            response_message: error
        });
    }
}

export const GetSignUpStageController = async (req, res) => {
    const { email } = req.query;
    
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        return res.status(200).json({
            response_code: SUCCESS_CODE,
            response_message: 'Data fetched successfully',
            data: user
        });
    } catch (error) {
        return res.status(404).json({
            response_code: ERROR_CODE,
            response_message: error
        });
    }
}

export const UpdateSignUpStageController = async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        await user.update({
            signupStage: 'checkout'
        });

        return res.status(200).json({
            response_code: SUCCESS_CODE,
            response_message: 'User updated successfully',
            data: user
        });
    } catch (error) {
        return res.status(404).json({
            response_code: ERROR_CODE,
            response_message: error
        });
    }
}