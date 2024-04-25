/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {FaEye,FaEyeSlash} from "react-icons/fa"
import { Toaster,toast} from 'react-hot-toast';
import { AuthContext } from "../Providers/AuthProvider";




const Register = () => {
    const [showPassword,setShowPassword]=useState(false)
    const{createUser,updatePhotoAndName,logout}= useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()

        
        
        const passwordRegex = /^(?=.*[A-Z]).+$/;
        const lowerpasswordRegex = /^(?=.*[a-z]).+$/;

       

        
        const name = e.target.name.value 
        const photo =e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

        console.log(name,photo,email,password)


        if (!passwordRegex.test(password)) {
            toast.error("password must have an uppercase letter")

            return
          }

        if(!lowerpasswordRegex.test(password)){
            toast.error("password must have an lowercase letter")

            return
        }

        if(password.length<6){
            toast.error("password length mus be 6 character")

            return
        }

        createUser(email,password)
        .then(()=>{
            updatePhotoAndName(name,photo)
            .then(()=>{
                toast.success('Registered Successfully')
                logout()

                // setTimeout(()=>{
                //        navigate("/login")

                // },2000)
            })
        })

        e.target.reset()




    }
    return (
        <div>
            <Toaster></Toaster>

<div className="md:w-3/4 lg:w-1/2 mx-auto text-[#808080]">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder=" Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                       
                        <input type={showPassword? "text":"password"} name="password" placeholder=" Enter Password" className=" input input-bordered" required />
                        <span className="absolute right-12 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
                            {
                                showPassword? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#AC87C5] text-white">Register</button>
                    </div>
                    <div className="text-center">
                        <h1>Already Registered! <Link className="font-bold text-[#AC87C5]" to={"/login"}>Login here</Link></h1>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Register;