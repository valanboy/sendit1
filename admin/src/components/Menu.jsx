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
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen shadow-xl">
      <div className="md:hidden absolute items-center w-full pl-3 pt-2 text-gray-700 sm md:text-[15px] lg:text-[17px]">
        {!open && (
           <button id="menu-toggle" className="pl-5 text-xl text-[#7a472fcb]" onClick={handleopen}>
          &#9776;
        </button>
        )}
       
      </div>
      <div className="h-screen shadow-xl hidden w-64 justify-center md:flex">
        <ul className="flex flex-col items-center mt-[20px] space-y-3 md:space-y-9 p-4">
          <Link to="/">
            <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
              <FaHome className="mr-[15px]" />
               <button>Home</button>
            </li>
          </Link>

          <Link to="/profile">
            <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
              <FaUser className="mr-[15px]" />
               Profile
            </li>
          </Link>

          <hr className="h-2 border-gray-200 shadow-lg px-[5rem]" />

          <Link to="/parcels">
            <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
              <FaBox className="mr-[15px]" />
               Parcels
            </li>
          </Link>

          <Link to="/users">
            <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
              <FaUsers className="mr-[15px]" />
               Users
            </li>
          </Link>

          <Link to="/orders">
            <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
              <FaClipboardList className="mr-[15px]" />
               Orders
            </li>
          </Link>

          <hr className="h-2 border-gray-200 shadow-lg px-[5rem]" />

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaElementor className="mr-[15px]" />
            elements
          </li>

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaCog className="mr-[15px]" />
            Settings
          </li>

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaHdd className="mr-[15px]" />
            Backups
          </li>

          <hr className="h-2 border-gray-200 shadow-lg px-[5rem]" />

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaChartBar className="mr-[15px]" />
            Charts
          </li>

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaClipboard className="mr-[15px]" />
            All logs
          </li>

          <li className="border-b border-gray-200 flex items-center text-gray-700 text-sm md:text-[15px] lg:text-[17px] cursor-pointer hover:text-[#6a3e29]">
            <FaCalendarAlt className="mr-[15px]" />
            Calendar
          </li>
        </ul>
      </div>

<AnimatePresence>
      {open && (
        <motion.div  initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-screen md:hidden shadow-2xl absolute bg-orange-50 z-10 w-64"
            drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                if (info.velocity.x < -100) {
                  setOpen(false); // swipe left to close
                }
              }}
            >

        
     
         <div className="items-center w-full pl-2 pt-2 text-gray-700 ">
            <button
              id="menu-toggle"
              className="block pl-[13rem] mt-4 text-[#7a472ff5]"
              onClick={handleopen}
            >
                 &#10006;
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center ">
            <Link to="/">
              <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
                <FaHome className="mr-[15px]" />
                <button onClick={handleopen}>Home</button> 
              </li>
            </Link>

            <Link to="/profile">
              <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
                <FaUser className="mr-[15px]" />
                 <button onClick={handleopen}>Profile</button>
              </li>
            </Link>

            <hr className="h-[20px]" />

            <Link to="/parcels">
              <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
                <FaBox className="mr-[15px]" />
                 Parcels
              </li>
            </Link>

            <Link to="/users">
              <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
                <FaUsers className="mr-[15px]" />
                 Users
              </li>
            </Link>

            <Link to="/orders">
              <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
                <FaClipboardList className="mr-[15px]" />
                 Orders
              </li>
            </Link>

            <hr className="h-[20px]" />

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaElementor className="mr-[15px]" />
              elements
            </li>

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaCog className="mr-[15px]" />
              Settings
            </li>

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaHdd className="mr-[15px]" />
              Backups
            </li>

            <hr className="h-[20px]" />

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaChartBar className="mr-[15px]" />
              Charts
            </li>

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaClipboard className="mr-[15px]" />
              All logs
            </li>

            <li className=" border-b border-gray-200 w-[200px] flex items-center text-gray-700 text-sm cursor-pointer mt-[20px] hover:text-[#6a3e29]">
              <FaCalendarAlt className="mr-[15px]" />
              Calendar
            </li>
          </ul>
  
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
