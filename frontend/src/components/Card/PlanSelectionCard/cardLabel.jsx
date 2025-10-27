

export const CardLabel = ({text, dataDisplayed} = props) => {
    return (
        <div className="my-5">
            <div className="font-semibold">
                <p>{text}</p>
                <p className="text-gray-900">{dataDisplayed}</p>
            </div>

            {text === 'Download devices' ? '' : <div className="border-1 border-black mt-3"></div>}
        </div>
    )
}