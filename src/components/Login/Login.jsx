import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin=e=>{
        e.preventDefault()
    }
    return (
        <div>


<div className="md:w-3/4 lg:w-1/2 mx-auto text-[#808080]">
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

                <div className="divider divider-info">or</div>

                <div className="flex justify-center gap-10 mb-5">

                    <button ><span className="text-[#AC87C5] text-4xl"><FaGoogle /></span></button>
                    <button><span className="text-[#AC87C5] text-4xl"><FaGithub /></span></button>

                </div>
            </div>
            <div className="text-center">
                <h1>Do not have any account! <Link className="text-[#AC87C5] font-bold" to={"/register"}>Register Now</Link></h1>
            </div>
            
        </div>
    );
};

export default Login;