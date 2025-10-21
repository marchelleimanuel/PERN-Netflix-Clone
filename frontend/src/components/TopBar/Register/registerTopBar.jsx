import { useNavigate } from "react-router-dom";
import NetflixLogo from "../../NetflixLogo/netflixLogo";
import { getIsLoggedIn } from "../../../common/common";

const RegisterTopBar = ({isLight} = props) => {
    const isLoggedIn = getIsLoggedIn();
    const navigate = useNavigate();

    const onClickButton = (e) => {
        console.log(e.target.innerText);
        if(e.target.innerText === 'Sign Out') {
            localStorage.removeItem('userLogin');
            localStorage.setItem('isLoggedIn', JSON.stringify(false));
            navigate('/get-started');
        }
        else {
            navigate('/login');
        }
    }
    
    return (
        <>  
            <div className={`w-full absolute h-20 z-99 flex items-center justify-between ${isLight ? `px-20 border-1 border-b-gray-200` : `px-40`}`}>
                <NetflixLogo/>
                <div className="">
                    <button className={`cursor-pointer mt-5 font-medium rounded mb-5 ${isLight ? 'text-xl' : `bg-[rgb(229,9,20)] px-4 py-1 text-white`}`} onClick={onClickButton}>{isLoggedIn ? `Sign Out` : 'Sign In'}</button>
                </div>
            </div>
        </>
    )
}

export default RegisterTopBar;