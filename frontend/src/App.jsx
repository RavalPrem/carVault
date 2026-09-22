import {Route, Router, BrowserRouter, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    // <Navbar/>
  )
}

export default App