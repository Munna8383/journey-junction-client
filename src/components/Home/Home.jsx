import Contact from "../Contact/Contact";
import Country from "../Country/Country";
import Reviews from "../Reviews/Reviews";
import SixCountries from "../SixCountires/SixCountries";
import Slider from "../Slider/Slider";
import { Helmet} from 'react-helmet-async';




const Home = () => {
    return (
        <div>

          <Helmet>
            <title>Home || Journey Junction</title>
          </Helmet>

           
           <Slider></Slider>
           <SixCountries></SixCountries>
           <Contact></Contact>
           <Country></Country>
           <Reviews></Reviews>

         
        </div>
    );
};

export default Home;