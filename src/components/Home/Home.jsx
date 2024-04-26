import Contact from "../Contact/Contact";
import Reviews from "../Reviews/Reviews";
import SixCountries from "../SixCountires/SixCountries";
import Slider from "../Slider/Slider";




const Home = () => {
    return (
        <div>

           
           <Slider></Slider>
           <SixCountries></SixCountries>
           <Contact></Contact>
           <Reviews></Reviews>

         
        </div>
    );
};

export default Home;