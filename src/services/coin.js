import axios from "axios"

export const getCoins = (currentPage, callback) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`)
      .then((res) => {
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getCoinBanner = (callback) => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en').then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err);
    })
} 

export const getCoin = (id, callback) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((res) => {
        callback(res.data)
    }).catch((err) => {
        console.log(err);
    })
} 