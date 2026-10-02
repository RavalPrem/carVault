import {Outlet,useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/';

  return (
    <div className='relative min-h-screen bg-[black] text-white'>
        <Navbar isHomePage={isHomePage}/>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout