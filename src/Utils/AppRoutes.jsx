import Home from "../Components/Home";
import Edit from "../Components/Edit";
import Create from "../Components/Create";
import { Navigate } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Datacard from "../Common/Datacard";

const AppRoutes=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/create',
        element:<Create/>
    },
    {
        path:'/edit/:id',
        element:<Edit/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:"/s",
        element:<Datacard/>
    },
    {
        path:'*',
        element:<Navigate to='/' />
    }
]
export default AppRoutes