import {Route, BrowserRouter, Routes} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace';
import SellCar from './pages/SellCar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/market_place" element={<MarketPlace/>}/>
          <Route path="/sell_car" element={<SellCar/>}/>
          <Route path="/contact_us" element={<ContactUs/>}/>
          <Route path="/about_us" element={<AboutUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    // <Navbar/>
  )
}

export default App