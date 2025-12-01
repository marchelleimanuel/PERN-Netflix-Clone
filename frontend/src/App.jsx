import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home/home"
import Watchlist from "./pages/WatchList/Watchlist"
import Login from "./pages/Login/login"
import GetStarted from "./pages/Register/getStarted"
import Unregistered from "./pages/Register/Unregistered/unregistered"
import Registered from "./pages/Register/Registered/registered"
import ChoosePlan from "./pages/ChoosePlan/choosePlan"
import PlanSelection from "./pages/ChoosePlan/planSelection"
import Payment from "./pages/Payment/checkoutForm"
import Private from "./pages/Home/private"
import Public from "./pages/Home/public"
import CheckoutForm from "./pages/Payment/checkoutForm"
import ReturnPage from "./pages/Payment/return"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/private-page" element={<Private/>}/>
      <Route path="/public" element={<Public/>}/>
      <Route path="/watchlist" element={<Watchlist/>}/>
      <Route path="/get-started" element={<GetStarted/>}/>
      <Route path="/get-started/registration" element={<Unregistered/>}/>
      <Route path="/get-started/login" element={<Registered/>}/>
      <Route path="/get-started/choose-plan" element={<ChoosePlan/>}/>
      <Route path="/get-started/plan-selection" element={<PlanSelection/>}/>
      <Route path="/get-started/checkout" element={<CheckoutForm/>}/>
      <Route path="/return" element={<ReturnPage />} />
    </Routes>
  )
}

export default App
