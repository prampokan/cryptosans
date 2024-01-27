import Coins from "./Coins"
import Home from "./Home"
import Navbar from './Navbar.jsx'
import Testimony from "./Testimony"
import Joinus from "./JoinUs.jsx"

const App = () => {
  return(
    <div className="overflow-x-auto">
      <Navbar />
      <Home />
      <Coins />
      <Testimony />
      <Joinus />
    </div>
  )
}

export default App
