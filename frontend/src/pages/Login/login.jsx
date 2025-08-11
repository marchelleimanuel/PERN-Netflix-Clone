import { useState } from "react";
import LoginService from "../../services/Login/loginService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickRegister = async () => {
        const input = {
            email: email,
            password: password,
        }  

        try {
            const response = await LoginService(input);
            
            if(response.response_code === 'SUCCESS') {
                console.log(response);
                navigate('/home')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    } 

    return (
        <>
            <h1>ini Login page</h1>
            <div className="flex flex-col w-1/4 border-1 border-red-500 p-10">
                <div>
                    <p>Email</p>
                    <input type="text" className="border-1 border-black" onChange={onChangeEmail}/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" className="border-1 border-black" onChange={onChangePassword}/>
                </div>
                <button className="border-1 border-black cursor-pointer mt-5 w-1/2" onClick={onClickRegister}>Login</button>
                <p>New to Netflix? <span className="font-bold cursor-pointer" onClick={() => navigate('/register')}>Sign up now.</span></p>
            </div>
        </>
    )
}

export default Login;