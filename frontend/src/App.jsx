import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home/home"
import Watchlist from "./pages/WatchList/Watchlist"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/watchlist" element={<Watchlist/>}/>
    </Routes>
  )
}

export default App
