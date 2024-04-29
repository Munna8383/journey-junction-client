/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { FaPersonDrowning } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Helmet } from "react-helmet-async";


const AllSpot = () => {

    const [allSpot, setAllSpot] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://journey-junction-server-one.vercel.app/spot")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setAllSpot(data)
            }
            )
    }, [])

    const handleAscending =()=>{

        const sortedData = [...allSpot].sort((a,b)=> parseInt(a.cost)-parseInt(b.cost))

        setAllSpot(sortedData)

      
    }

    const handleDescending =()=>{

        const sortedData = [...allSpot].sort((a,b)=> parseInt(b.cost)-parseInt(a.cost))

        setAllSpot(sortedData)

    }



    return (
        <div className="mt-5">
            <Helmet>
            <title>All Spot || Journey Junction</title>
          </Helmet>
            {loading && <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>}

            <div className="flex justify-center">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sorted By Cost</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleAscending}>Low</button></li>
                        <li><button onClick={handleDescending}>High</button></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-5">
                <h1 className="text-3xl lg:text-4xl font-extrabold">All Tourist Spot</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
                {
                    allSpot.map((one, index) => <div key={index} className="card card-compact bg-base-100 shadow-xl">
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
                                <Link to={`/details/${one._id}`}> <button className="btn  bg-[#AC87C5] text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllSpot;