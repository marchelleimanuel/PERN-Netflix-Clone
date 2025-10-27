
import axios from 'axios';
import { BASE_URL, GET_PLAN_SELECTION_URL, GET_USER_SIGN_UP_STAGE, UPDATE_USER_SIGN_UP_STAGE } from '../../common/urlPath';

export const getPlanSelectionData = async () => {

    const config = {
        method: 'get',
        url: BASE_URL + GET_PLAN_SELECTION_URL,
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}

export const getSignUpStage = async (email) => {
    const config = {
        method: 'get',
        url: BASE_URL + GET_USER_SIGN_UP_STAGE,
        params: {
            email: email
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}

export const updateSignUpStage = async (user) => {
    const config = {
        method: 'put',
        url: BASE_URL + UPDATE_USER_SIGN_UP_STAGE,
        data: {
            email: user.email
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}
