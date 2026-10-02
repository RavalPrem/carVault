import HeroImage from '../assets/images/HeroImage1.jpg'
import {Car,Anvil} from 'lucide-react'
import ButtonWithIcon from './../components/ButtonWithIcon';

//for navigate
import { useNavigate } from 'react-router-dom';
import CarCards from '../components/CarCards';


//for slider
import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import cars
import {cars} from '../data/Cars'



const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='h-screen w-screen absolute left-0 top-0 z-0 overflow-x-hidden'>
      
        <img src={HeroImage} alt="HeroImage1" className="w-screen"/>
        <div className='absolute left-0 top-0 h-[110vh] w-screen bg-radial from-[#31313624] via-[#0b0b0bc9] to-[#000000] flex items-center pl-18'>
          <div className='text-6xl absolute top-[35%] left-10'>
            <div >
              Find Your next <br/>
              <p className='text-[#4545f7]'>Dream car</p>
            </div>

            <div className='mt-4'>
              <p className='text-[15px] text-gray-400'>Buy and sell trusted used cars with confidence. <br />
                Great Price, verified sellers, and smooth deals.</p>
            </div>
            
            <div className='mt-10 text-2xl flex gap-4'>
              <ButtonWithIcon 
                icon={Car} 
                className='bg-[#3B5FFF] hover:bg-blue-700 cursor-pointer'
                onClick={() => navigate('/market_place')}
                >
                  Browse Cars
              </ButtonWithIcon>

              <ButtonWithIcon 
                icon={Anvil} 
                className='border border-white cursor-pointer hover:bg-gray-900'
                onClick={() => navigate('/sell_car')}
              >
                    Sell Your Car
              </ButtonWithIcon>
            </div>
          </div>
        </div>

        {/*Car slider specs*/}
         
        <div className='px-3 py-2 border border-red-500'>
            <h1 className='text-3xl'>Verified Vehicles</h1>
            <p className='text-gray-400'>
              See the verified vehicles
            </p>

            <Swiper
          modules={[Navigation, Pagination]}

          /* Number of cards visible */
          slidesPerView={1}

          /* Space between cards */
          spaceBetween={20}

          /* Arrow buttons */
          navigation

          /* Pagination dots */
          pagination={{
            clickable: true
          }}

          /* Responsive */
          breakpoints={{
            640: {
              slidesPerView: 1
            },

            768: {
              slidesPerView: 2
            },

            1024: {
              slidesPerView: 3
            }
          }}

          className="w-full"
        >

          {cars.map((car, index) => (

            <SwiperSlide key={index}>
              <CarCards
                imageLink={car.image}
                specs={car.specs}
                carName={car.name}
                price={car.price}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>


            {/* <CarCards 
              imageLink={'https://wallpaperaccess.com/full/13662.jpg'}
              specs={carSpecs}
              carName={'Hyundai'}
              price={"$38.4 lakh"}
              className="max-w-md"
            /> */}
        </div>
    </div>
  )
}

export default Home