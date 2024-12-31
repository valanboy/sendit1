
import CurrentDateTime from "./recentDate"

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#e9eb77] items-center justify-between px-[10px]">
   <CurrentDateTime/> 
      <img src="/logo.png" alt="" height="200px" width="200px" />
    
    </div>
  );
};

export default Navbar;