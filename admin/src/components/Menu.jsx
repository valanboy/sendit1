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

const Menu = () => {
  return (
    <div className="h-[85vh] shadow-xl">
      <ul className="flex flex-col items-center justify-center mt-[20px]">

        <Link to="/">
        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaHome className="mr-[15px]" />
          Home
        </li>
        </Link>

        <Link to="">
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

        <li className="flex items-center text-[#D7D7D7] text-[20px] cursor-pointer mt-[20px] hover:text-[#E9EB77]">
          <FaClipboardList className="mr-[15px]" />
          Orders
        </li>

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
  );
};

export default Menu;
