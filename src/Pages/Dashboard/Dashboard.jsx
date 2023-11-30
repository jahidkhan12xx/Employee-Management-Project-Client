import { FaHome, FaOutdent } from "react-icons/fa";
import { FaMoneyCheckDollar, FaPeopleGroup } from "react-icons/fa6";
import { GiChart, GiPayMoney, GiProgression } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [currentUser, setCurrentUser] = useState();
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const [data, isLoading] = useUserData();

  useEffect(() => {
    const cUser = data?.filter((u) => u.email == user.email);
    const rol = cUser?.map(item => setRole(item?.role))
    setCurrentUser(cUser);
  }, [data, user]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(currentUser,role);

  const handleOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Success");
      })
      .catch();
  };

  return (
    <div className=" flex  ">
       <Helmet>
        <title>PB | DASHBOARD</title>
      </Helmet>
      <div className=" md:w-72 min-h-screen bg-[#001B79] py-32 ">
        <ul className=" menu space-y-7">
        <li>
            <NavLink
              className="text-2xl text-white p-4 font-light"
              to="/dashboard"
            >
              <MdDashboard className=" mr-3"></MdDashboard> Dashboard
            </NavLink>
          </li>
         {
            role === "hr" && <ul>
                 
          <li>
            <NavLink
              className="text-2xl text-white p-4 font-light"
              to="/dashboard/employeeList"
            >
              <FaPeopleGroup className=" mr-3" /> Employee List
            </NavLink>
          </li>
          
          <li>
            <NavLink
              className="text-2xl text-white p-4 font-light"
              to="/dashboard/progress"
            >
              <GiProgression className=" mr-2"></GiProgression> Progress
            </NavLink>
          </li>
            </ul>
         }
          {
            role==="employee" && <ul>
                <li>
            <NavLink
              className="text-2xl text-white p-4 font-light"
              to="/dashboard/paymentHistory"
            >
              <FaMoneyCheckDollar className=" mr-2"></FaMoneyCheckDollar>{" "}
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-2xl text-white font-light"
              to="/dashboard/workSheet"
            >
              <GiChart className=" mr-2"></GiChart> Work Sheet
            </NavLink>
          </li>
            </ul>
          }
         {
            role === "admin" && <ul>
                 <li>
            <NavLink
              className="text-2xl text-white font-light"
              to="/dashboard/allUser"
            >
              <FaPeopleGroup className=" mr-3"></FaPeopleGroup> All Employee List
            </NavLink>
          </li>
            </ul>
         }
          <hr />
          <li>
            <NavLink className="text-2xl text-white font-light" to="/">
              <FaHome className=" mr-3"></FaHome> Home
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleOut}
              className="text-2xl text-white font-light"
            >
              <FaOutdent className=" mr-3"></FaOutdent> LogOut
            </button>
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-[#FF90C2] ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
