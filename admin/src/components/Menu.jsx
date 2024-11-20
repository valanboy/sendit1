import { Link } from "react-router-dom";
import {
  FaHdd,
  FaCog,
  FaHome,
  FaUser,
  FaBox,
  FaUsers,
  FaClipboardList,
  FaElementor,
  FaChartBar,
  FaClipboard,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
const [open, setOpen] = useState(false)

const handleopen = ()=>{
  setOpen(!open)
}

  return (
    <div className="shadow-xl">
 <div className=" md:hidden absolute items-center w-full pl-3 pt-2 text-[#D7D7D7] ">
    
    <button id="menu-toggle" className="text-2xl" onClick={handleopen}>&#9776;</button>
  </div>
  <div className="h-[85vh] shadow-xl hidden  md:flex">
      <ul className="flex flex-col items-center justify-center mt-[20px] p-4">

      

        <Link to="/">
        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaHome className="mr-[15px]" />
          Home
        </li>
        </Link>

        <Link to="/profile">
        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaUser className="mr-[15px]" />
          Profile
        </li>
        </Link>

        <hr className="h-[20px]" />

       <Link to="/parcels">
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaBox className="mr-[15px]" />
          Parcels
        </li>
       </Link>

       <Link to='/users'>
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaUsers className="mr-[15px]" />
          Users
        </li>
       </Link>

       <Link to="/orders">
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaClipboardList className="mr-[15px]" />
          Orders
        </li>
        </Link>
        

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaElementor className="mr-[15px]" />
          elements
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaCog className="mr-[15px]" />
          Settings
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaHdd className="mr-[15px]" />
          Backups
        </li>

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaChartBar className="mr-[15px]" />
          Charts
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaClipboard className="mr-[15px]" />
          All logs
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaCalendarAlt className="mr-[15px]" />
          Calendar
        </li>

      </ul>
      </div>

{open && <div className="h-[100%] shadow-xl absolute z-10 bg-[#242424]">
  <div className=" md:hidden items-center w-full pl-2 pt-2 text-[#D7D7D7] ">
    
    <button id="menu-toggle" className="text-2xl" onClick={handleopen}>&#9776;</button>
  </div>
      <ul className="flex flex-col items-center justify-center  p-4">

      

        <Link to="/">
        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaHome className="mr-[15px]" />
          Home
        </li>
        </Link>

        <Link to="/profile">
        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaUser className="mr-[15px]" />
          Profile
        </li>
        </Link>

        <hr className="h-[20px]" />

       <Link to="/parcels">
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaBox className="mr-[15px]" />
          Parcels
        </li>
       </Link>

       <Link to='/users'>
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaUsers className="mr-[15px]" />
          Users
        </li>
       </Link>

       <Link to="/orders">
       <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaClipboardList className="mr-[15px]" />
          Orders
        </li>
        </Link>
        

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaElementor className="mr-[15px]" />
          elements
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaCog className="mr-[15px]" />
          Settings
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaHdd className="mr-[15px]" />
          Backups
        </li>

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaChartBar className="mr-[15px]" />
          Charts
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaClipboard className="mr-[15px]" />
          All logs
        </li>

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaCalendarAlt className="mr-[15px]" />
          Calendar
        </li>

      </ul>
      </div>}
    
    </div>
  );
};

export default Menu;
