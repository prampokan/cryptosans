const Card = (props) => {

    const {image, nama, testimoni, job} = props 
    return(
        <div className="rounded p-[1px] bg-gradient-to-br from-sky-300 via-slate-950 to-sky-300">
            <div className="text-white bg-slate-950 p-5 sm:p-10 rounded-[calc(5px-1px)]">
                <div className="flex gap-4">
                    <img src={image} alt={nama} className="w-[70px] sm:w-[100px] rounded-full"/>
                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-lg sm:text-xl">{nama}</p>
                        <p className="text-slate-400 text-sm sm:text-lg">{job}</p>
                    </div>
                </div>
                <p className="font-semibold mt-10 text-xl">"{testimoni}"</p>
            </div>
        </div>
    )
}

export default Card