import { useState } from "react"
import { useEffect } from "react"
import { getCoin } from "./services/coin"
import { useParams } from "react-router-dom"

const CoinDetail = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState({})

    useEffect(() => {
        getCoin(id, (data) => {
            setCoin(data)
        })
    }, [id])

    return (
        <section className="h-screen flex justify-center items-center font-figtree bg-gradient-to-b from-violet-950 to-slate-950 text-white">
            <div className="w-[75rem]" key={coin.id}>
                <div className="flex flex-col sm:flex-row justify-between items-center">
            
                        <div className="flex">
                            {coin.image ? <img src={coin.image.large} alt={coin.id} className="sm:w-1/1 w-2/4"/> : null}
                        </div>
                
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-100">{coin.name}</h1>
                        <p className="text-xl font-bold text-amber-300"><span className="text-gray-400">Rank:</span> #{coin.market_cap_rank}</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {coin.market_data ? <p className="font-bold text-xl text-yellow-300"><span className="text-gray-400">Price:</span> ${coin.market_data.current_price.usd.toLocaleString()}</p> : ""}
                        {coin.market_data && coin.market_data.price_change_percentage_24h ? (
                            coin.market_data.price_change_percentage_24h > 0 ? (
                                <p className="text-green-400 font-bold text-xl">
                                    <span className="text-gray-400">24h Change:</span> {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                                </p>
                            ) : coin.market_data.price_change_percentage_24h < 0 ? (
                                <p className="text-red-400 font-bold text-xl">
                                    <span className="text-gray-400">24h Change:</span> {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                                </p>
                            ) : (
                                ""
                            )
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col gap-6">
                        {coin.market_data ? <p className="font-bold text-xl text-green-300"><span className="text-gray-400">Market:</span> ${coin.market_data.market_cap.usd.toLocaleString()}</p> : ""}
                        <p className="font-bold text-xl text-sky-300"><span className="text-gray-400">Symbol:</span> {coin.symbol}</p>
                    </div>
                </div>
                <div className="mt-10 h-[300px] overflow-y-auto flex justify-center">
                    {coin.description ? <p className="text-sm font-medium text-gray-300 leading-loose sm:text-xl">{coin.description.en}</p> : "" }
                </div>
            </div> 
        </section>
    )
}

export default CoinDetail