import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const Details = () => {

    const oneData = useLoaderData()

    console.log(oneData)
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="mt-10">
            <Helmet>
            <title>Details || Journey Junction</title>
          </Helmet>
            <div className="flex-row lg:flex items-center gap-7">

                <div className="lg:w-1/2">

                    <img className="rounded-xl" src={oneData.photo} />

                </div>

                <div className="lg:w-1/2 space-y-3 mt-2">

                    <div>
                        <h1><span className="text-lg font-bold">Spot Name: </span>{oneData.spotName}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Country: </span>{oneData.country}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Location: </span>{oneData.location}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Cost: </span>{oneData.cost}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Season: </span>{oneData.season}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Travel Time: </span>{oneData.travelTime}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Visitor Per Year: </span>{oneData.visitorPerYear}</h1>
                    </div>
                    <div>
                        <h1><span className="text-lg font-bold">Description: </span>{oneData.description}</h1>
                    </div>

                </div>






            </div>
            
        </div>
    );
};

export default Details;