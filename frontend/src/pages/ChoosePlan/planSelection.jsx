import TopBar from "../../components/TopBar/topBar";
import { IoCheckmark } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import PlanSelectionCard from "../../components/Card/PlanSelectionCard/planSelectionCard";

const PlanSelection = () => {

    const navigate = useNavigate();

    const onClickNext = () => {
        navigate('/get-started/choose-plan/plan-selection');
    }

    return (
        <>
            <TopBar isRegister={true} isLight={true}/>
            <div className="flex flex-col justify-center items-center h-[100vh] w-full pt-55">
                <div className=" w-[100%] min-h-[80%] flex justify-center items-center ">
                    <div className="w-[85%]">
                        <p>Step <span className="font-bold">2</span> of <span className="font-bold">3</span></p>
                        <h1 className="text-[2rem]/10 font-bold mb-10">Choose your plan</h1>
                        <div className="grid grid-cols-4 gap-4 min-h-[600px] ">
                            <PlanSelectionCard/>
                            <PlanSelectionCard/>
                            <PlanSelectionCard/>
                            <PlanSelectionCard/>
                        </div>
                        <button className="cursor-pointer mt-8 w-[35%] bg-[rgb(229,9,20)] font-bold rounded text-white h-15 text-2xl hover:opacity-90 ml-auto mr-auto block" onClick={onClickNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanSelection;