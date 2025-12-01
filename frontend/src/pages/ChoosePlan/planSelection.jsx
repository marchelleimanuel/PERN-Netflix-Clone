import TopBar from "../../components/TopBar/topBar";
import { useNavigate } from "react-router-dom";
import PlanSelectionCard from "../../components/Card/PlanSelectionCard/planSelectionCard";
import { getUserInfo } from "../../common/common";
import { updateSignUpStage } from "../../services/GetStarted/getStartedService";
import { useState } from "react";

const PlanSelection = () => {

    const navigate = useNavigate();
    const user = getUserInfo();
    const [planSelectionData, setPlanSelectionData] = useState([]);

    const onClickNext = async () => {
        try {

            const response = await updateSignUpStage(user);
            const data = response.data;
            navigate(`/get-started/${data.signupStage}`, {state: {selectedPlan: planSelectionData}});
            // console.log('ini data finalnya ', planSelectionData)
        } catch (error) {
            console.log(error);

        }
    }

    const getSelectionPlan = (dataPlan) => {
        setPlanSelectionData(dataPlan);
    }

    return (
        <>
            <TopBar isRegister={true} isLight={true}/>
            <div className="flex flex-col justify-center items-center h-[100vh] w-full pt-120">
                <div className=" w-[100%] min-h-[80%] flex justify-center items-center ">
                    <div className="w-[85%]">
                        <p>Step <span className="font-bold">2</span> of <span className="font-bold">3</span></p>
                        <h1 className="text-[2rem]/10 font-bold mb-10">Choose the plan that's right for you</h1>
                        <div className="grid grid-cols-4 gap-4 min-h-[600px] ">
                            <PlanSelectionCard fetchData={getSelectionPlan} />
                        </div>
                        <div className="mt-5 text-gray-500">
                            <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                            <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                            <p>Live events are included with any Netflix plan and contain ads.</p>
                        </div>
                        <button className="cursor-pointer mt-8 w-[35%] bg-[rgb(229,9,20)] font-bold rounded text-white h-15 text-2xl hover:opacity-90 ml-auto mr-auto block" onClick={onClickNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanSelection;