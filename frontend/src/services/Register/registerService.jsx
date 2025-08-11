import { BASE_URL, REGISTER_URL } from "../../common/urlPath"
import axios from 'axios';


const RegisterService = async (input) => {
    const config = {
        method: 'post',
        url: BASE_URL + REGISTER_URL,
        data: {
            email: input.email,
            password: input.password,
            confirmPassword: input.confirmPassword
        }
    }

    const response = await axios(config);
    const { data } = response;
    return data;
}

export default RegisterService