import { Toaster , toast} from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const Update = () => {
    const updateData = useLoaderData()
    const navigate = useNavigate()


   const handleUpdate = e=>{
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

    const UpdateSpot = {photo,spotName,country,location,description,cost,season,travelTime,visitorPerYear}

    fetch(`https://journey-junction-server-one.vercel.app/update/${updateData._id}`,{
        method:"PUT",
        headers:{
           "content-type":"application/json" 
        },
        body:JSON.stringify(UpdateSpot)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount==1){
            toast.success('Updated In Successfully')

            setTimeout(()=>{
                navigate("/spot/myList")
            },2000)
            
        }
    })




   }


    return (
        <div className="mt-5">
        <Toaster></Toaster>
      <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold">Update Tourist Spots</h1>
      </div>

      <div className="md:w-3/4 lg:w-1/2 mx-auto text-[#808080]">
          <form onSubmit={handleUpdate}>

          <div className="form-control">
                  <label className="label">
                      <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" defaultValue={updateData.photo} className="input input-bordered" required />
              </div>
          <div className="form-control">
                  <label className="label">
                      <span className="label-text">Tourist Spot Name</span>
                  </label>
                  <input type="text" name="spotName" defaultValue={updateData.spotName} className="input input-bordered" required />
              </div>
          <div className="form-control">
                  <label className="label">
                      <span className="label-text">Select Country</span>
                  </label>
                  <select name="country" defaultValue={updateData.country} className="select select-bordered">
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
                  <input type="text" name="location"defaultValue={updateData.location} className="input input-bordered" required />
              </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Description</span>
                  </label>
                  <input type="text" name="description" defaultValue={updateData.description} className="input input-bordered" required />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Average Cost</span>
                  </label>
                  <input type="text" name="cost" defaultValue={updateData.cost} className="input input-bordered" required />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Season</span>
                  </label>
                  <input type="text" name="season" defaultValue={updateData.season} className="input input-bordered" required />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Travel Time</span>
                  </label>
                  <input type="text" name="travelTime" defaultValue={updateData.travelTime} className="input input-bordered" required />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Visitor Per Year</span>
                  </label>
                  <input type="text" name="visitorPerYear" defaultValue={updateData.visitorPerYear} className="input input-bordered" required />
              </div>          
              
              <div className="form-control mt-6">
                  
                  <input className="btn bg-[#AC87C5] text-white" type="submit" value="Update" />
              </div>







          </form>
      </div>
      
  </div>
    );
};

export default Update;