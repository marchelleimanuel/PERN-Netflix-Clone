import { useState, useRef } from 'react';
import { GetStartedService } from '../../services/Register/registerService';
import registerBackground from '../../assets/register-background.jpg';
import TopBar from '../../components/TopBar/topBar';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [email, setEmail] = useState('');
    const onClickGetStarted = async () => {
        if(!email) {
            inputRef.current.focus();
            return;
        }

        try {
            const response = await GetStartedService(email);
            
            if(response.response_message === 'Registered') {
                navigate('/get-started/login', {state: {email: email}})
            }
            else {
                navigate('/get-started/registration', {state: {email: email}});
            }

        } catch (error) {
            console.log(error.response.data.response_message);
        }

    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            <div>
                <TopBar isRegister={true}/>
                <div
                    style={{
                        backgroundImage: `url(${registerBackground})`
                    }}
                    className={`bg-cover bg-center bg-no-repeat absolute w-full h-[100vh] -z-99`}
                    >
                </div>
                <div className="bg-black opacity-75 w-full h-[100vh] absolute"></div>
                <div className="flex justify-center items-center h-[100vh] w-full">
                    <div className=" z-99 relative w-[50%] h-[550px]">
                        <div className="text-white flex justify-center items-center w-full h-[100%]">
                            <div className='text-center h-full flex flex-col justify-center items-center'>
                                <p className='text-6xl/20 font-extrabold '>Unlimited movies, TV shows, and more</p>
                                <p className='text-xl/15 font-bold'>Starts at IDR 54,000. Cancel anytime.</p>
                                <p className='text-[16px]/15'>Ready to watch? Enter your email to create or restart your membership.</p>
                                <div className='flex w-full px-20 pb-2'>
                                    <div className="relative w-full">
                                        <input 
                                            ref={inputRef}
                                            type="text" 
                                            id="email" 
                                            className="peer border border-gray-400 rounded px-3 pt-5 pb-2 w-full placeholder-transparent text-white "  
                                            placeholder="Email Address"
                                            onChange={onChangeEmail} 
                                        />
                                        <label 
                                            htmlFor="email" 
                                            className="absolute left-3 top-1 text-gray-300 text-sm transition-all 
                                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base
                                                    peer-focus:top-1 peer-focus:text-gray-300 peer-focus:text-sm hover:cursor-text">
                                            Email Address
                                        </label>
                                    </div>
                                    <button className="cursor-pointer w-[60%] bg-[rgb(229,9,20)] font-medium h-[54px] rounded text-[27px] ml-2 hover:opacity-90 transition-all" onClick={onClickGetStarted}>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GetStarted;