import { useContext, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {

  const {user,logout}= useContext(AuthContext)

    const [theme,setTheme]=useState(false);
    const handleTheme=()=>{
        setTheme(!theme)
        if(theme){
            const body = document.querySelector("html");
            body.setAttribute("data-theme","light")
        }
        else{

            const body = document.querySelector("html");
            body.setAttribute("data-theme","synthwave")

        }
    }
    return (
        <div className="mt-4">

<div className="navbar bg-base-100 text-[#808080]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-[#AC87C5] text-2xl font-bold hidden md:block">Journey Junction</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink className={({ isActive }) =>
         isActive ? "text-[#AC87C5] font-bold" : ""
        }>Home</NavLink></li>
      <li>
      <a >item2</a>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-5">
    <button onClick={handleTheme} className="text-3xl">{theme?<CiLight />:<MdDarkMode></MdDarkMode>}</button>
  <div className="tooltip hidden md:block" data-tip={user?.displayName||"Null"} > 
 
          <img className="w-10 rounded-full"  src={user?user?.photoURL:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}/>
        </div>
        {
          user?<button onClick={()=>logout()} className="btn bg-[#AC87C5] text-white">Logout</button>:<Link to={"/login"}> <button  className="btn bg-[#AC87C5] text-white">Login</button></Link>
        }
   
  </div>
</div>
            
        </div>
    );
};

export default Navbar;