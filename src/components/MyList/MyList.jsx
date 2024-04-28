import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const MyList = () => {
    

    const {user}= useContext(AuthContext)

    const email = user.email
    const [userData,setUserData]=useState([])

    useEffect(()=>{

        fetch(`https://journey-junction-server-one.vercel.app/spot/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setUserData(data)
        })       

    },[email])

    const handleDelete=_id=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if(result.isConfirmed) {
            
            fetch(`https://journey-junction-server-one.vercel.app/spot/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.deletedCount>0){


              const remaining = userData.filter(one=>one._id !=_id)

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"

               
              });

              setUserData(remaining)

              
             

                }
            })
            }
          });
          

    }

    return (
        <div>
            <Helmet>
            <title>My List || Journey Junction</title>
          </Helmet>
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-extrabold">My List</h1>
            </div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<div className="overflow-x-auto mx-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left ">
					<th className="p-3 font-bold">Spot Name</th>
					<th className="p-3 font-bold">Country</th>
					<th className="p-3 font-bold">Cost</th>
					<th className="p-3 font-bold">Action</th>
					<th className="p-3 font-bold">Action</th>
				</tr>
			</thead>
			<tbody>{
                userData.map((singleOne,index)=><tr key={index} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p><span>{index+1}.</span>{singleOne.spotName}</p>
                </td>
                <td className="p-3">
                    <p>{singleOne.country}</p>
                </td>
                <td className="p-3">
                    <p className="dark:text-gray-600">{singleOne.cost}</p>
                </td>
                <td className="p-3">
                    <Link to={`/update/${singleOne._id}`}><button className="btn btn-active btn-primary text-white">Edit</button></Link>
                </td>
                <td className="p-3">
                <button onClick={()=> handleDelete(singleOne._id)} className="btn btn-error text-white">Delete</button>
                </td>
                
                
            </tr>)
               }
			</tbody>
		</table>
	</div>
</div>
            
        </div>
    );
};

export default MyList;