import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#e9eb77] flex items-center justify-between px-[10px]">
      <img src="/logo.png" alt="" height="200px" width="200px" />
     <Link to="/login">
      <span className="p-[10px] font-semibold text-[#1a1a1a] text-[2rem] cursor-pointer border-none w-[100px]">
        Login
      </span>
      </Link>
    </div>
  );
};

export default Navbar;
