import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CoinDetail from './CoinDetail.jsx'
import Coins from './Coins.jsx'
import Testimony from './Testimony.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path : "/",
    element: <App />,
  },
  {
    path : "/coins",
    element: <Coins />,
  },
  {
    path : "/testimony",
    element: <Testimony />,
  },
  {
    path : "/coindetail/:id",
    element: <CoinDetail />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
