import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Toaster,toast} from 'react-hot-toast';


const AddSpot = () => {
    const {user}=useContext(AuthContext)

    const handleAdd=e=>{
        e.preventDefault()

        const photo = e.target.photo.value;
        const spotName= e.target.spotName.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const cost = e.target.cost.value;
        const season = e.target.season.value;
        const travelTime = e.target.travelTime.value;
        const visitorPerYear = e.target.visitorPerYear.value;
        const name = user.displayName;
        const email = user.email

        const spot = {photo,spotName,country,location,description,cost,season,travelTime,visitorPerYear,name,email}


        fetch("http://localhost:5000/allSpot",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(spot)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Added In Successfully')
                e.target.reset()
            }
        })

    }


    return (
        <div className="mt-5">
              <Toaster></Toaster>
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-extrabold">Add Tourist Spots</h1>
            </div>

            <div className="md:w-3/4 lg:w-1/2 mx-auto text-[#808080]">
                <form onSubmit={handleAdd}>

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered" required />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input type="text" name="spotName" placeholder="Spot Name" className="input input-bordered" required />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Country</span>
                        </label>
                        <select name="country" className="select select-bordered">
                            <option>Bangladesh</option>
                            <option>Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Cambodia</option>
                            <option>Vietnam</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Season</span>
                        </label>
                        <input type="text" name="season" placeholder="Season" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input type="text" name="travelTime" placeholder="Time" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Visitor Per Year</span>
                        </label>
                        <input type="text" name="visitorPerYear" placeholder="Visitor Per Year" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={`${user.displayName}`} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={`${user.email}`} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        
                        <input className="btn bg-[#AC87C5] text-white" type="submit" value="Add" />
                    </div>







                </form>
            </div>
            
        </div>
    );
};

export default AddSpot;