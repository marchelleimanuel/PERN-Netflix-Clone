import { useState } from 'react';
import RegisterService from '../../services/Register/registerService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            <h1>ini Register page</h1>
            <div className="flex flex-col w-1/4 border-1 border-red-500 p-10">
                <div>
                    <p>Email</p>
                    <input type="text" className="border-1 border-black" onChange={onChangeEmail}/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" className="border-1 border-black" onChange={onChangePassword}/>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" className="border-1 border-black" onChange={onChangeConfirmPassword} />
                </div>
                <button className="border-1 border-black cursor-pointer mt-5 w-1/2" onClick={onClickRegister}>Register</button>
                <p className='cursor-pointer' onClick={() => navigate('/login')}>Already have an account?</p>
            </div>
        </>
    )
}

export default Register;