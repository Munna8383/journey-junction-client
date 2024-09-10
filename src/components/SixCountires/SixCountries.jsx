import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPersonHiking } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";


const SixCountries = () => {
    const [sixCountries,setSixCountries]=useState([])

    useEffect(()=>{
        fetch("https://journey-junction-server-one.vercel.app/spot")
        .then(res=>res.json())
        .then(data=>setSixCountries(data))
    },[])



    const newSix = sixCountries.slice(0,6)
    return (
       <div className="mt-20">
        <div className="text-center">
            <h1  className="text-3xl lg:text-4xl font-extrabold">Explore Different Spot</h1>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">

{
    newSix.map((single,index)=><div data-aos="zoom-in" key={index} className="card card-compact bg-base-100 shadow-xl">
    <figure ><img className="h-[300px]" src={single.photo} alt="Shoes" /></figure>
    <div className="card-body space-y-4">
      <h2 className="card-title text-2xl font-bold">{single.spotName}</h2>
  
      <div  className="flex gap-2 items-center font-bold">
          <div>
          <FaLocationDot />
          </div>
          <div>
              <h1>Location:{single.location}</h1>
          </div>
      </div>
      <div className="flex gap-2 items-center font-bold">
          <div>
          <FaFlag />
          </div>
          <div>
              <h1>Country:{single.country}</h1>
          </div>
      </div>
      
      <div className="flex gap-2 items-center font-bold">
          <div>
          <FaPersonHiking />
          </div>
          <div>
              <h1>Visitor:{single.visitorPerYear}</h1>
          </div>
      </div>
      <div className="card-actions justify-left">
       <Link  to={`/details/${single._id}`}> <button className="btn  bg-[#AC87C5] text-white">View Details</button></Link>
      </div>
    </div>
  </div>
  )
}

</div>
       </div>
    );
};

export default SixCountries;