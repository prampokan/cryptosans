const CardJoin = (props) => {

    const {header, content, icons} = props

    return (
        <div className="w-[17rem] h-[16rem] sm:w-[24rem] sm:h-[17rem] text-white bg-violet-950 rounded-xl p-4 sm:p-5">
            <div className="bg-white/10 w-[50px] h-[50px] flex justify-center items-center rounded-md text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-8 h-8">
                    {icons}
                </svg>
            </div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl my-5">{header}</h3>
            <p className="text-sm sm:text-lg text-slate-300">{content}</p>
        </div>
    )
}

export default CardJoin