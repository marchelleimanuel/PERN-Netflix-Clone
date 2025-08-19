import { useState } from "react";
import LoginService from "../../services/Login/loginService";
import { useNavigate } from "react-router-dom";
import loginBackground from '../../assets/login-background.jpg';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);

    const onClickLogin = async () => {
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
            <div className="flex">
                <div
                    style={{
                        backgroundImage: `url(${loginBackground})`
                    }}
                    className={`bg-cover bg-center bg-no-repeat absolute w-full h-[100vh] -z-99`}
                ></div>
                <div className="bg-black opacity-50 w-full h-[100vh] absolute"></div>
                <div className="flex justify-center items-center h-[100vh] w-full">
                    <div className=" z-99 relative w-[450px] h-[550px]">
                        <div className="bg-black opacity-75 w-full h-full -z-10 absolute rounded-sm"></div>
                        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[80%]">
                            <h1 className="text-[2rem] font-bold mb-5">Sign In</h1>
                            <div className="relative w-full">
                                <input 
                                    type="text" 
                                    id="email" 
                                    className="peer border border-gray-400 rounded px-3 pt-5 pb-2 w-full placeholder-transparent text-white"  
                                    placeholder="Email"
                                    onChange={onChangeEmail} 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-3 top-1 text-gray-300 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-300 peer-focus:text-sm hover:cursor-text">
                                    Email
                                </label>
                            </div>
                            <div className="relative w-full mt-4">
                                <input 
                                    type={visiblePassword ? 'text' : 'password'}
                                    id="password" 
                                    className="peer border border-gray-400 rounded px-3 pt-5 pb-2 w-full placeholder-transparent text-white"  
                                    placeholder="Password"
                                    onChange={onChangePassword} 
                                />
                                <label 
                                    htmlFor="password" 
                                    className="absolute left-3 top-1 text-gray-300 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-300 peer-focus:text-sm hover:cursor-text">
                                    Password
                                </label>
                                <button className="cursor-pointer" onClick={() => setVisiblePassword(prev => !prev)}>tes</button>
                            </div>
                            <button className="border-1 border-black cursor-pointer mt-5 w-full bg-[rgb(229,9,20)] font-bold h-10 rounded mb-5" onClick={onClickLogin}>Sign In</button>
                            <p className="text-gray-300">New to Netflix? <span className="font-bold cursor-pointer text-white" onClick={() => navigate('/register')}>Sign up now.</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;