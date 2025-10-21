import { BASE_URL, GET_STARTED_URL, REGISTER_URL } from "../../common/urlPath"
import axios from 'axios';


export const GetStartedService = async (email) => {
    const config = {
        method: 'post',
        url: BASE_URL + GET_STARTED_URL,
        data: {
            email: email,
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}

export const RegisterService = async (input) => {
    const config = {
        method: 'post',
        url: BASE_URL + REGISTER_URL,
        data: {
            email: input.email,
            password: input.password
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}
