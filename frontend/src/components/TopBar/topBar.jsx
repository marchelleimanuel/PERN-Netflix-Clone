import LoginTopBar from "./Login/loginTopBar";
import RegisterTopBar from "./Register/registerTopBar";

const TopBar = ({isRegister, isLogin, isHome, isLight} = props) => {  
    if(isRegister) {
        return <RegisterTopBar isLight={isLight} />
    }
    else if(isLogin) {
        return <LoginTopBar/>
    }
}

export default TopBar;