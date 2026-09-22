import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <div className='min-h-screen bg-[black] text-white'>
        <Navbar/>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout