import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import EmployeeList from "../Pages/Dashboard/dash_pages/EmployeeList/EmployeeList";
import Progress from "../Pages/Dashboard/dash_pages/Progress/Progress";
import Dash from "../Pages/Dashboard/dash_pages/Dash/Dash";
import HrRoute from "./HrRoute";
import EmployeeDetails from "../Pages/Dashboard/dash_pages/EmployeeDetails/EmployeeDetails";
import PaymentHistory from "../Pages/Dashboard/dash_pages/PaymentHistory/PaymentHistory";
import WorkSheetEmployee from "../Pages/Dashboard/dash_pages/WorkSheetEmployee/WorkSheetEmployee";
import AllEmployeeList from "../Pages/Dashboard/dash_pages/AllEployeeList/AllEmployeeList";


const PublicRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<h2>Error 404 </h2>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/contactUs",
                element:<ContactUs></ContactUs>
            }
            
            
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children:[
            {
                path:"/dashboard",
                element:<Dash></Dash>
            },
            {
                path:"employeeList",
                element:<HrRoute><EmployeeList></EmployeeList></HrRoute>
            },
            {
                path:"details/:id",
                element:<HrRoute><EmployeeDetails></EmployeeDetails></HrRoute>,
                loader:({params}) => fetch(`http://localhost:5000/api/v1/specificUser/${params.id}`)
            },
            
            {
                path:"progress",
                element:<HrRoute><Progress></Progress></HrRoute>
            },
            {
                path:"paymentHistory",
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:"workSheet",
                element:<WorkSheetEmployee></WorkSheetEmployee>
            },
            {
                path:"allUser",
                element:<AllEmployeeList></AllEmployeeList>
            }
        ]
    },
   
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default PublicRouter;