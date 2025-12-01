import axios from "axios";
import { BASE_URL, DELETE_TOKEN_URL } from "../../common/urlPath";


export const logOut = async (user) => {
    const config = {
        method: 'post',
        url: BASE_URL + DELETE_TOKEN_URL,
        withCredentials: true, 
        data: user,
    }

    const response = await axios(config);
    const { data } = response;
    return data;
};