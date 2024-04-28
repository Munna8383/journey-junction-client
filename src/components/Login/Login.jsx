/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Toaster,toast} from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {googleLogin,githubLogin,login}= useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin=e=>{
        e.preventDefault()

        const email = e.target.email.value 
        const password = e.target.password.value 
        login(email,password)
        .then(() => {

            toast.success('Logged In Successfully')
        
            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
        
          })
          .catch(()=>{
            toast.error("Incorrect username or password")
          })

          e.target.reset()

    }
    

    const SignINGoogle = ()=>{

        googleLogin()
        .then(()=>{

            toast.success('Logged In Successfully')

            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
           
        })
        .catch(()=>{
            toast.error("login unsuccessful")
           
        })

    }

    const SignINGithub =()=>{
        githubLogin()
        .then(()=>{

            toast.success('Logged In Successfully')
            setTimeout(()=>{
                navigate(location?.state || "/")
            },2000)
        })
        .catch(()=>{
            toast.error("login unsuccessful")
        })
    }

    return (
        <div>
            <Toaster></Toaster>

            <Helmet>
            <title>Login || Journey Junction</title>
          </Helmet>


<div className="md:w-3/4 lg:w-1/2 mx-auto text-[#808080]">
<div className="text-center">
                    <h1 className="text-4xl font-bold text-[#AC87C5]">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#AC87C5] text-white">Login</button>
                    </div>
                </form>

                <div className="divider divider-secondary">or</div>

                <div className="flex justify-center gap-10 mb-5">

                    <button onClick={SignINGoogle} ><span className="text-[#AC87C5] text-4xl"><FaGoogle /></span></button>
                    <button onClick={SignINGithub}><span className="text-[#AC87C5] text-4xl"><FaGithub /></span></button>

                </div>
            </div>
            <div className="text-center">
                <h1>Do not have any account! <Link className="text-[#AC87C5] font-bold" to={"/register"}>Register Now</Link></h1>
            </div>
            
        </div>
    );
};

export default Login;