import { useState } from 'react';
import RegisterService from '../../services/Register/registerService';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar/topBar';
import loginBackground from '../../assets/login-background.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);

    const onClickRegister = async () => {
        const input = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }  

        try {
            const response = await RegisterService(input);
            
            if(response.response_code === 'SUCCESS') {
                console.log(response);
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

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <>
            <div>
                <TopBar/>
                <div
                    style={{
                        backgroundImage: `url(${loginBackground})`
                    }}
                    className={`bg-cover bg-center bg-no-repeat absolute w-full h-[100vh] -z-99`}
                    >
                </div>
                <div className="bg-black opacity-75 w-full h-[100vh] absolute"></div>
                <div className="flex justify-center items-center h-[100vh] w-full">
                    <div className=" z-99 relative w-[50%] h-[550px]">
                        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] border-2 border-red-500">
                            <div className='text-center'>
                                <p className='text-6xl font-extrabold '>Unlimited movies, TV shows, and more</p>
                                <p className='text-2xl font-bold'>Starts at IDR 54,000. Cancel anytime.</p>
                                <button className="border-1 border-black cursor-pointer mt-5 w-full bg-[rgb(229,9,20)] font-bold h-10 rounded mb-5" onClick={onClickRegister}>Register</button>
                                <p className="text-gray-300">Already have an account? <span className="font-bold cursor-pointer text-white" onClick={() => navigate('/login')}>Login now.</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;