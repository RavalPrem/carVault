import { Search } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='h-35 w-screenflex items-center justify-center'>
            <nav className='h-20 w-screen flex items-center justify-around'>
                <div className='logo flex'>
                    Car  <p className='text-blue-700'>Vault</p>
                </div>

                <ul className='text-xl flex justify-between gap-7'>
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : " "
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/market_place" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : " "
                        }>
                            Market Place
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sell_car" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : " "
                        }>
                            Sell Car
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact_us" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : " "
                        }>
                            Contact Us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about_us" className={({ isActive }) =>
                            isActive ? "text-yellow-500" : " "
                        }>
                            About Us
                        </NavLink>
                    </li>
                </ul>

                <div className="hidden lg:flex items-center gap-5">

                    {/* Search */}
                    <div className="
                            flex items-center
                            w-70
                            border border-gray-500
                            rounded-full
                            px-5 py-3
                        ">

                        <input
                            type="text"
                            placeholder="Search"
                            className="
                                    bg-transparent
                                    outline-none
                                    w-full
                                    text-white
                                    placeholder-gray-400
                                "
                        />

                        <Search
                            size={21}
                            className="text-gray-300"
                        />

                    </div>


                    {/* Login */}
                    <Link
                        to="/login"
                        className="
                                border border-gray-500
                                rounded-full
                                px-7 py-3
                                hover:border-white
                                transition
                            "
                    >
                        Log in
                    </Link>


                    {/* Signup */}
                    <Link
                        to="/signup"
                        className="
                                bg-[#526DFF]
                                px-7 py-3
                                rounded-full
                                hover:bg-[#4059e8]
                                transition
                            "
                    >
                        Sign Up
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Navbar