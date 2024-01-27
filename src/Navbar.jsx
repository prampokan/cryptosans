import React, {useState} from "react"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    return(
        <section className="w-full flex md:px-0 px-5 justify-end md:justify-center items-center h-20 fixed top-0 z-50">
            <div className={navbar ? "w-[20rem] md:w-[45rem] mt-36 md:mt-0 py-2 md:py-2 rounded-xl md:rounded-full flex justify-center font-figtree bg-white/10 backdrop-filter shadow-md backdrop-blur hover:shadow-2xl ease-in duration-200" : "w-[20rem] md:w-[43rem] mt-36 md:mt-10 py-2 md:py-3 rounded-xl md:rounded-full flex justify-center font-figtree bg-white/10 backdrop-filter shadow-md backdrop-blur hover:shadow-2xl ease-in duration-300"}>
            
                <div onClick={()=>setOpen(!open)} className="text-3xl text-white absolute right-4 top-3 md:hidden cursor-pointer z-20">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                    <ul className={`flex flex-col gap-x-6 text-lg font-semibold text-sky-800 md:flex-row text-center ${open ? 'h-full' : 'md:flex hidden'}`}>
                        <a href="#home"><li className="hover:text-slate-400 hover:bg-white/25 px-8 py-2 rounded-full hover:shadow-md ease-in duration-200 cursor-pointer">Home</li></a>
                        <a href="#coins"><li className="hover:text-slate-400 hover:bg-white/25 px-8 py-2 rounded-full hover:shadow-md ease-in duration-200 cursor-pointer">Currencies</li></a>
                        <a href="#testimony"><li className="hover:text-slate-400 hover:bg-white/25 px-8 py-2 rounded-full hover:shadow-md ease-in duration-200 cursor-pointer">Testimony</li></a>
                        <a href="#joinus"><li className="hover:text-slate-400 hover:bg-white/25 px-8 py-2 rounded-full hover:shadow-md ease-in duration-200 cursor-pointer">Join Us</li></a>
                    </ul>
               
            </div>
        </section>
    )
}

export default Navbar