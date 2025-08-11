import { BASE_URL, LOGIN_URL } from "../../common/urlPath";
import axios from 'axios';

const LoginService = async (input) => {
    const config = {
        method: 'post',
        url: BASE_URL + LOGIN_URL,
        data: {
            email: input.email,
            password: input.password
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}

export default LoginService;