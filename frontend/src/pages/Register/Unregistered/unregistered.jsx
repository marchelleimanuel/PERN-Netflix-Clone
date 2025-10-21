import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../../components/TopBar/topBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { RegisterService } from "../../../services/Register/registerService";

const Unregistered = () => {
    const location = useLocation();
    const passedEmail = location.state.email;

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setEmail(passedEmail);
    }, []);

    const onClickNext = async () => {
        const input = {
            email: email,
            password: password,
        }  

        try {
            const response = await RegisterService(input);
            
            if(response.response_code === 'SUCCESS') {
                localStorage.setItem('userLogin', JSON.stringify(response.data));
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
                navigate('/get-started/choose-plan')
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
                <TopBar isRegister={true} isLight={true}/>
                <div className="flex justify-center items-center h-[100vh] w-full">
                    <div className=" z-99 relative w-[40%] h-[550px]">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[80%]">
                            <p>Step <span className="font-bold">1</span> of <span className="font-bold">3</span></p>
                            <h1 className="text-[2rem]/10 font-bold mb-2">Create a password to start your membership</h1>
                            <p>Just a few more steps and you're done!</p>
                            <p>We hate paperwork, too.</p>
                            <div className="relative w-full mt-5">
                                <input 
                                    type="text" 
                                    id="email" 
                                    className="peer border border-gray-500 rounded px-3 pt-5 pb-2 w-full placeholder-transparent"  
                                    placeholder="Email"
                                    onChange={onChangeEmail}
                                    value={email} 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-500 peer-focus:text-sm hover:cursor-text">
                                    Email
                                </label>
                            </div>
                            <div className="relative w-full mt-4 ">
                                <input 
                                    type='password'
                                    id="password" 
                                    className="peer border border-gray-500 rounded px-3 pt-5 pb-2 w-full placeholder-transparent"  
                                    placeholder="Password"
                                    onChange={onChangePassword} 
                                />
                                <label 
                                    htmlFor="password" 
                                    className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
                                            peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
                                            peer-focus:top-1 peer-focus:text-gray-500 peer-focus:text-sm hover:cursor-text w-[93%]">
                                        Password
                                </label>
                            </div>
                            <button className="cursor-pointer mt-5 w-full bg-[rgb(229,9,20)] font-bold rounded mb-5 text-white h-18 text-2xl hover:opacity-90" onClick={onClickNext}>Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Unregistered;