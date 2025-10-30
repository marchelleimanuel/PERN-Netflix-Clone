import { useState } from "react";
import LoginService from "../../services/Login/loginService";
import { useNavigate } from "react-router-dom";
import loginBackground from '../../assets/login-background.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import TopBar from "../../components/TopBar/topBar";


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
                localStorage.setItem('userLogin', JSON.stringify(response.data));
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
                navigate('/home')
                console.log('ini token', response.data);
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
            <div>
                <TopBar isLogin={true}/>
                <div
                    style={{
                        backgroundImage: `url(${loginBackground})`
                    }}
                    className={`bg-cover bg-center bg-no-repeat absolute w-full h-[100vh] -z-99`}
                    >
                </div>
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
                                    // value={'marchelleimanuel@gmail.com'} // jgn lupa apus
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-3 top-1 text-gray-300 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-300 peer-focus:text-sm hover:cursor-text">
                                    Email
                                </label>
                            </div>
                            <div className="relative w-full mt-4 border-1border-red-500 ">
                                <input 
                                    type={visiblePassword ? 'text' : 'password'}
                                    id="password" 
                                    className="peer border border-gray-400 rounded px-3 pt-5 pb-2 w-full placeholder-transparent text-white"  
                                    placeholder="Password"
                                    onChange={onChangePassword} 
                                    // value={'marchelleimanuel123'} // jgn lupa apus
                                />
                                <label 
                                    htmlFor="password" 
                                    className="absolute left-3 top-1 text-gray-300 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-300 peer-focus:text-sm hover:cursor-text w-[93%]">
                                        Password
                                </label>
                                {password ? 
                                    (!visiblePassword ? 
                                        <FaEye className="cursor-pointer absolute top-5 left-[90%]  " onClick={() => setVisiblePassword(prev => !prev)}/> : 
                                        <FaEyeSlash className="cursor-pointer absolute top-5 left-[90%] " onClick={() => setVisiblePassword(prev => !prev)}/> 
                                    )
                                : ''}
                            </div>
                            <button className="cursor-pointer mt-5 w-full bg-[rgb(229,9,20)] font-bold h-10 rounded mb-5" onClick={onClickLogin}>Sign In</button>
                            <p className="text-gray-300">New to Netflix? <span className="font-bold cursor-pointer text-white" onClick={() => navigate('/get-started')}>Sign up now.</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;