import { useState } from 'react'
import { useEffect } from 'react'
import { getCoins } from './services/coin'
import { Link } from "react-router-dom"

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCoins(currentPage, (data) => {
      setCoins(data);
    });
  }, [currentPage, setCoins]);

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? 'text-white py-2 sm:py-3 px-4 sm:px-5 mx-1 rounded-full bg-white/50 border-white sm:text-lg text-sm sm:mx-2' : 'text-white py-2 sm:py-3 px-4 sm:px-5 mx-1 mx-1 sm:text-lg text-sm sm:mx-2 rounded-full bg-white/10'}
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 650,
      behavior: "smooth",
    });
  };

  return (
    <>
    <section className='h-full w-full flex justify-center items-center bg-slate-950 font-figtree px-3 sm:px-5 md:px-5 lg:px-5'>
      <div className='pt-[1px] rounded-xl bg-gradient-to-r from-white via-slate-950 to-white overflow-x-auto'> 
        <div className='w-[40rem] text-sm md:text-lg lg:text-xl text-center flex-col justify-center bg-slate-950 rounded-t-[calc(1.5rem-1px)] sm:w-[50rem] md:w-[60rem] lg:w-[75rem]'>
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 flex justify-between p-2 text-white items-center rounded-t-xl font-semibold py-4">
              <p className="w-1/4">Coin</p>
              <p className="w-1/4">Price</p>
              <p className="w-1/4">24h Change</p>
              <p className="w-1/4">Market Cap</p>
            </div>
            <div className='text-white text-center'>
              {coins.length > 0 && coins.map((coin) => (
                <Link to={`/coindetail/${coin.id}`} key={coin.id} className="border-b font-semibold dark:border-neutral-500 flex justify-between items-center py-5 px-2 hover:bg-slate-900">
                  <span className='flex items-center w-1/4'>
                    <img
                      src={coin.image}
                      className='w-1/12 sm:w-2/12 mr-4'
                      alt={`${coin.name} logo`}
                    />
                    {coin.name}
                  </span>
                  <p className="w-1/4">$ {coin.current_price.toLocaleString()}</p>
                  {coin.price_change_percentage_24h > 0 
                    ? (<p className="w-1/4 text-green-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                    : (<p className="w-1/4 text-red-500">{coin.price_change_percentage_24h.toFixed(2)}%</p>)
                  }
                  <p className="w-1/4">$ {coin.market_cap.toLocaleString()}</p>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </section>
    <div onClick={scrollMarket} className='pt-10 bg-slate-950 h-full w-full flex justify-center items-center'>
      {paginationButtons}
    </div>
    </>
  )
}

export default Coins