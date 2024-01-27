import { useEffect } from "react"
import { useState } from "react"
import { getCoinBanner } from "./services/coin"
import CoinDetail from "./CoinDetail"

const Home = () => {

    const [coinBanner, setCoinBanner] = useState([])

    useEffect(() => {
        getCoinBanner((data) => {
            setCoinBanner(data)
        })
    }, [])

    return (
        <section className="min-h-full py-32 w-full flex justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950 font-figtree" id="home">
            <div className="w-[75rem]">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-200 font-bold text-2xl pb-2 sm:text-3xl md:text-4xl lg:text-6xl sm:ml-5 md:ml-5 lg:ml-0 ml-3">track and trade cryptocurrencies in</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-slate-300 font-bold mb-5 sm:ml-5 md:ml-5 lg:ml-0 ml-3">
                        <span className="">
                            <span className="text-white">Crypto</span>
                            <span className="text-red-500">sans</span>{" "}
                       </span>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-200">
                        we operate the worlds biggest cryptocurrency exchange
                       </span>
                    </h1>
                <div className="flex flex-col mt-20 md:flex-row">
                    {coinBanner.length > 0 && coinBanner.map((coin) => (
                        <div className="text-center w-full opacity-50 grayscale hover:opacity-100 hover:grayscale-0 ease-in duration-300 cursor-pointer mt-6 md:mt-0">
                            <div className="flex justify-center">
                                <img src={coin.image} alt="" className="w-1/6 md:w-2/6"/>    
                            </div>       
                                <h1 className="text-xl font-bold text-white mt-1 md:mt-5">
                                    {coin.name} {" "}
                                    {coin.price_change_percentage_24h > 0 
                                        ? (<span className="w-1/4 text-green-400">{coin.price_change_percentage_24h.toFixed(2)}%</span>)
                                        : (<span className="w-1/4 text-red-400">{coin.price_change_percentage_24h.toFixed(2)}%</span>)
                                    }
                                </h1>
                            <span className="text-sky-200 font-bold text-xl" id="coins">${coin.current_price}</span>
                        </div>
                    ))}
                </div> 
            </div>
            <div></div>
        </section>
    )
}

export default Home