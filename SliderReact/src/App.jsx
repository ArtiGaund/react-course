
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'


function App() {
 

  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#6c34af]'>
      <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        }
      }}
      freeMode = {true}
      pagination = {{
        clickable: true
      }}
      modules={[ FreeMode, Pagination ]}
      className='max-w-[90%] lg:max-w-[80%]'
      >

      </Swiper>
    </div>
  )
}

export default App
