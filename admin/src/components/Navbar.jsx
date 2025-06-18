import { Link, useNavigate } from "react-router-dom";
import CurrentDateTime from "./Recentdate";
import { logOut } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { FiUser } from "react-icons/fi"; // You can replace with any icon
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleLogout = () => {
    try {
      dispatch(logOut());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-orange-50 shadow-lg z-50">
      <CurrentDateTime />
      <div className="h-auto p-4 flex items-center justify-between px-[0.5rem]">
        <Link to="/">
          <img
            src="/logo.png"
            alt="logo"
            height="100px"
            width="100px"
            className="md:w-[150px] filter invert"
          />
        </Link>

        <div className="relative mr-2" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 rounded-full bg-[#7a472fcb] text-white hover:bg-[#6a3e29] transition duration-200"
          >
            <FiUser className="text-xl" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-28 bg-white text-gray-600 border rounded-md shadow-md z-50">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
