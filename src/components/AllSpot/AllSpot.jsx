import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { FaPersonDrowning } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


const AllSpot = () => {

    const [allSpot,setAllSpot]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/spot")
        .then(res=>res.json())
        .then(data=>setAllSpot(data))
    },[])

    console.log(allSpot)

    
    return (
        <div className="mt-5">
           <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold">All Tourist Spot</h1>
           </div>

           <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
            {
                allSpot.map((one,index)=> <div key={index} className="card card-compact bg-base-100 shadow-xl">
                <figure ><img className="h-[300px]" src={one.photo} alt="Shoes" /></figure>
                <div className="card-body space-y-4">
                  <h2 className="card-title text-2xl font-bold">{one.spotName}</h2>

                  <div className="flex gap-2 items-center font-bold">
                      <div>
                      <FaDollarSign />
                      </div>
                      <div>
                          <h1>Cost:{one.cost}</h1>
                      </div>
                  </div>
              
                  <div className="flex gap-2 items-center font-bold">
                      <div>
                      <FaPersonDrowning />
                      </div>
                      <div>
                          <h1>Visitor Count:{one.visitorPerYear}</h1>
                      </div>
                  </div>
                  <div className="flex gap-2 items-center font-bold">
                      <div>
                      <CiTimer />
                      </div>
                      <div>
                          <h1>Time:{one.travelTime}</h1>
                      </div>
                  </div>
                  
                  <div className="flex gap-2 items-center font-bold">
                      <div>
                      <SlCalender />
                      </div>
                      <div>
                          <h1>Season:{one.season}</h1>
                      </div>
                  </div>
                  <div className="card-actions justify-left">
                   <Link> <button className="btn  bg-[#AC87C5] text-white">View Details</button></Link>
                  </div>
                </div>
              </div>)
            }
           </div>
            
        </div>
    );
};

export default AllSpot;