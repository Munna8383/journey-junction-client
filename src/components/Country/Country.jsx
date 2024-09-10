import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFlag } from "react-icons/fa";


const Country = () => {

    const [country,setCountry]=useState([])

    useEffect(()=>{

        fetch("https://journey-junction-server-one.vercel.app/country")
        .then(res=>res.json())
        .then(data=>{
            setCountry(data)
        })



    },[])



    return (
        <div className="mt-20">
             <div className="text-center">
            <h1  className="text-3xl lg:text-4xl font-extrabold">Search Countries</h1>
        </div>
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">

{
    country.map((item,index)=> <Link  data-aos="zoom-out" key={index} to={`/countries/${item.country}`}><div className="card h-[650px] card-compact bg-base-100 shadow-xl">
    <figure ><img className="h-[300px]" src={item.image} alt="Shoes" /></figure>
    <div className="card-body space-y-4">
  
      <div className="flex gap-2 items-center font-bold">
          <div>
          <FaFlag />
          </div>
          <div>
              <h1><span>Country: </span><span className="text-lg text-[#AC87C5]">{item.country}</span></h1>
          </div>
      </div>
      <div className="flex gap-2 items-center font-bold">
          <div>
          
          </div>
          <div>
              <h1><span className="text-lg">Description: </span>{item.description}</h1>
          </div>
      </div>
      
      
      
    </div>
  </div></Link>  )
}

</div>
        </div>
    );
};

export default Country;