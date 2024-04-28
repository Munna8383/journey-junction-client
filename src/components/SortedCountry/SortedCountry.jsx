import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const SortedCountry = () => {

    const nation = useLoaderData()

    return (
        <div>

            <Helmet>
            <title>Country || Journey Junction</title>
          </Helmet>
             <div className="text-center">
            <h1  className="text-3xl lg:text-4xl font-extrabold">Get Spot In One Place</h1>
        </div>

           <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
        {
            nation.map((item,index)=><div key={index} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Spot Name: {item.spotName}</h2>
              <p><span>Country:</span>{item.country}</p>
              <p><span>Location:</span>{item.location}</p>
              <p><span>Season:</span>{item.season}</p>
              <p><span>Cost:</span>{item.cost}</p>
              <p><span>Description:</span>{item.description}</p>
              <div className="card-actions justify-end">
              <Link  to={`/details/${item._id}`}> <button className="btn  bg-[#AC87C5] text-white">View Details</button></Link>
              </div>
            </div>
          </div>)
        }
           </div>
            
        </div>
    );
};

export default SortedCountry;