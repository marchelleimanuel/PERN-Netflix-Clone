import NetflixLogo from "../../NetflixLogo/netflixLogo";

const LoginTopBar = () => {

    return (
        <>  
            <div className="w-full absolute h-20 z-99 flex items-center justify-between px-40">
                <NetflixLogo/>
            </div>
        </>
    )
}

export default LoginTopBar;