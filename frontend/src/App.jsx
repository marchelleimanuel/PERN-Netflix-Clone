import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home/home"
import Watchlist from "./pages/WatchList/Watchlist"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/watchlist" element={<Watchlist/>}/>
    </Routes>
  )
}

export default App
