import { useEffect } from "react";
import { getPlanSelectionData } from "../../../services/GetStarted/getStartedService";
import { useState } from "react";
import { CardLabel } from "./cardLabel";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PlanSelectionCard = () => {

    const [planSelectionData, setPlanSelectionData] = useState([]);
    const [isClicked, setIsClicked] = useState({
        Mobile: true,
        Basic: false,
        Standard: false,
        Premium: false
    });

    useEffect(() => {

        const getPlanSelection = async () => {
            try {
                const response = await getPlanSelectionData();
                setPlanSelectionData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getPlanSelection();

    }, []);

    const chosenPlan = (data) => {
        setIsClicked({
            Mobile: false,
            Basic: false,
            Standard: false,
            Premium: false,
            [data]: true
        });
    }

    return (
        <>
            {planSelectionData.map((data, index) => {
                return (
                    <div key={index} className={`min-w-[35%] min-h-full rounded-2xl cursor-pointer border-2 border-black overflow-hidden text-gray-500 ${isClicked[data.type] ? 'shadow-xl scale-101 transition ease-in-out duration-300' : ''}`} onClick={() => chosenPlan(data.type)}>
                        <div className="bg-red-500 rounded-[16px] min-h-23 m-2 text-white p-3 flex justify-between items-center" >
                            <div>
                                <p className="text-xl font-bold">{data.type}</p>
                                <p className="font-semibold">{data.type === 'Premium' ? `${data.resolution} + HDR` : data.resolution}</p>
                            </div>
                            
                            {isClicked[data.type] && <IoIosCheckmarkCircleOutline className="text-4xl"/>}
                        </div>

                        <div className="m-5">
                            <CardLabel text='Monthly Price' dataDisplayed={'Rp. ' + data.price} />
                            <CardLabel text='Video and sound quality' dataDisplayed={data.quality} />
                            <CardLabel text='Resolution' dataDisplayed={data.type === 'Premium' ? `${data.resolution} (Ultra HD) + HDR` : data.resolution} />
                            {data.type === 'Premium' ? <CardLabel text='Spatial audio (immersive sound)' dataDisplayed={data.isSpatial === '1' ? 'Included' : ''} /> : ''}
                            <CardLabel text='Supported devices' dataDisplayed={data.supportedDevices} />
                            <CardLabel text='Devices your household can watch at the same time' dataDisplayed={data.devicesWatchAtTheSameTime} />
                            <CardLabel text='Download devices' dataDisplayed={data.downloadDevices} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PlanSelectionCard;