import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';


const Slider = () => {
    return (
        <div className="mt-10" >

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
    );
};

export default Slider;