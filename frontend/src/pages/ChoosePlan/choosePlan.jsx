import TopBar from "../../components/TopBar/topBar";
import { IoCheckmark } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ChoosePlan = () => {
    const navigate = useNavigate();

    const onClickNext = () => {
        navigate('/get-started/choose-plan/plan-selection');
    }

    return (
        <>  
            <TopBar isRegister={true} isLight={true}/>
            <div className="flex justify-center items-center h-[100vh] w-full">
                <div className=" z-99 relative w-[35%] h-[550px] flex justify-center items-center">
                    <div className="absolute w-3/4 h-[80%]">
                        <CiCircleCheck className="text-[rgb(229,9,20)] text-6xl mb-5" />
                        <p>Step <span className="font-bold">2</span> of <span className="font-bold">3</span></p>
                        <h1 className="text-[2rem]/10 font-bold mb-10">Choose your plan</h1>
                        <div className="flex items-center">
                            <IoCheckmark className="text-2xl text-[rgb(229,9,20)]"/>
                            <p className="text-[18px] font-normal ml-2">No commitments, cancel anytime.</p>
                        </div>
                        <div className="flex items-center my-5">
                            <IoCheckmark className="text-2xl text-[rgb(229,9,20)]"/>
                            <p className="text-[18px] font-normal ml-2">Everything on Netflix for one low price.</p>
                        </div>
                        <div className="flex items-center">
                            <IoCheckmark className="text-2xl text-[rgb(229,9,20)]"/>
                            <p className="text-[18px] font-normal ml-2">No ads and no extra fees. Ever.</p>
                        </div>
                        <button className="cursor-pointer mt-8 w-full bg-[rgb(229,9,20)] font-bold rounded text-white h-15 text-2xl hover:opacity-90" onClick={onClickNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoosePlan;