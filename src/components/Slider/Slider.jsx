import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'
import { Slide } from "react-awesome-reveal";


const Slider = () => {
    return (
        <div className="mt-10 md:flex md:gap-5 md:items-center" >



            <div className="hidden md:block md:w-1/2 space-y-7">

            
                    <Slide><h1  className="text-4xl font-bold text-[#AC87C5]">Journey Junction</h1></Slide>

                    <p className="font-semibold text-[#808080]"><Typewriter
            words={["Welcome to our enchanting world of hospitality and exploration! Whether you are seeking a luxurious retreat or an adventurous getaway, our hotel and tourism is your passport to unforgettable experiences.Nestled amidst breathtaking landscapes and vibrant cityscapes, our collection of handpicked hotels promises unparalleled comfort and style."]}
            cursor
            cursorStyle='_'
            typeSpeed={15}
          /></p>

                    <Slide><button className="btn bg-[#AC87C5] text-white">BOOK NOW</button></Slide>
                

            </div>




            <div className="w-full md:w-1/2">

                
<Swiper 
               navigation={true} modules={[Navigation,Autoplay,Pagination]}
               pagination={{clickable:true}}
               loop={true}
               autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                
              }}
              className="mySwiper"  >
              <SwiperSlide><img className="w-[1000px] h-[450px] rounded-xl mx-auto" src="https://i.ibb.co/Zh5rkK1/maitheli-maitra-n-Z2c-Eh8-Qzcg-unsplash.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img className="w-[1000px] h-[450px] rounded-xl mx-auto" src="https://i.ibb.co/d4p94FB/marek-okon-WScpnd-ZFr-OM-unsplash.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img className="w-[1000px] h-[450px] rounded-xl  mx-auto" src="https://i.ibb.co/2dtsBLb/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg" alt=""/></SwiperSlide>
        
              </Swiper>

            </div>


            
        </div>
    );
};

export default Slider;