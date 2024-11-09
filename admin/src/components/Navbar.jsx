import { Link } from "react-router-dom"
import CurrentDateTime from "./Recentdate"

const Navbar = () => {
  return (
    <div className="bg-[#E9EB77]">
    <CurrentDateTime/>
    <div className="h-[100px] bg-[#E9EB77] flex items-center justify-between px-10">
      <Link to="/"><img src="/logo.png" alt="logo" height="200px" width="200px"/></Link>
      <button className="text-[18px] cursor-pointer font-semibold">Logout</button>
    </div>
    </div>
  )
}

export default Navbar

