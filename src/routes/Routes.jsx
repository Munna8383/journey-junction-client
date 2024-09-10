import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddSpot from "../components/AddSpot/AddSpot";
import Protected from "../components/Proctected/Protected";
import AllSpot from "../components/AllSpot/AllSpot";
import Details from "../components/Details/Details";
import MyList from "../components/MyList/MyList";
import Update from "../components/Update/Update";
import SortedCountry from "../components/SortedCountry/SortedCountry";





  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        },
        {
          path:"/addSpot",
          element:<Protected><AddSpot></AddSpot></Protected>
        },
        {
          path:"/allSpot",
          element:<AllSpot></AllSpot>
        },
        {
          path:"/details/:id",
          element:<Details></Details>,
          loader:({params})=>fetch(`https://journey-junction-server-one.vercel.app/details/${params.id}`)
        },{
          path:"/spot/myList",
          element:<Protected><MyList></MyList></Protected>
        },
        {
          
            path:"/update/:id",
            element:<Protected><Update></Update></Protected>,
            loader:({params})=>fetch(`https://journey-junction-server-one.vercel.app/details/${params.id}`)
          
        },
        {
          path:"/countries/:country",
          element:<SortedCountry></SortedCountry>,
          loader: ({params})=>fetch(`https://journey-junction-server-one.vercel.app/countries/${params.country}`)
        }
      ]
    },
  ]);

  export default router;