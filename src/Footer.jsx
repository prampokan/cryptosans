const Footer = () => {
    return (
        <section className="bg-gradient-to-r from-sky-100 via-slate-950 to-sky-100 pt-[1px]">
        <div className="bg-slate-950 h-[20rem] flex justify-center items-center">
            <div className="w-[75rem] flex flex-col justify-center items-center">
                <h1 className="text-transparent flex bg-clip-text bg-gradient-to-r from-sky-300 to-sky-100 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-10 sm:mx-5 md:mx-5 lg:mx-0 mx-3 pt-10">
                    So what are you waiting for! Join us on our Social Media
                </h1>
                <div className="text-white text-2xl flex gap-4 cursor-pointer">
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer