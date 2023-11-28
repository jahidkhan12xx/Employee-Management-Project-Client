import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

import logo from '/c.png'

const NavBar = () => {
  const {user,logOut} = useAuth();

  const handleLogOut = () =>{
    logOut()
    .then(res=>{
      toast.success('LogOut Successfully', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    })
    .catch()
  }
  const nav = (
    <>
      
      
          <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white" : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
  }
>
  Home
</NavLink>
     

     
       <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white" : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
  } to="/contactUs">Contact Us</NavLink>
     
     
       <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white" : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
  } to="/dashboard">Dashboard</NavLink>
      
    </>
  );
  return (
    <div className=" bg-blue-800 text-white z-50">
      <div className="navbar  w-[80vw] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu z-50  menu-sm ml-7 bg-blue-800 text-white dropdown-content mt-3  p-2 shadow  rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
<div className=" flex justify-center items-center">
  <img  className=" hidden lg:block w-10" src={logo} alt="" />
<a className="btn btn-ghost text-xl">Coder Booth</a>
</div>
        </div>
        <div className="navbar-center hidden lg:flex z-50 ">
          <ul className="menu text-white bg-blue-800 menu-horizontal px-1 ">
            {nav}
          </ul>
        </div>
        <div className="navbar-end z-50">
          {
            user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm text-blue-800 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <div className="justify-between ">
                  {user?.displayName}
                  
                </div>
              </li>
              <li><div>{user?.email}</div></li>
              <li><a className=" hover:bg-blue-800 hover:text-white" onClick={handleLogOut}>Logout</a></li>
            </ul>
          </div> : <NavLink to="/login"><button className=" btn btn-sm btn-ghost hover:bg-white hover:text-blue-800  rounded-none ">Login</button></NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
