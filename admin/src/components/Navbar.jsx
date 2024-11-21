import { Link, useNavigate } from "react-router-dom"
import CurrentDateTime from "./Recentdate"
import {logOut} from "../redux/userReducer"
import {useDispatch} from 'react-redux'

const Navbar = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const LogOut = ()=>{
  try {
   dispatch(logOut())
   navigate("/login")
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="bg-[#E9EB77]">
    <CurrentDateTime/>
    <div className="h-[10vh] bg-[#E9EB77] flex items-center justify-between px-[0.5rem]">
      <Link to="/"><img src="/logo.png" alt="logo" height="200px" width="200px"/></Link>
      <button className="text-[0.75rem] text-white p-[0.5rem] cursor-pointer font-semibold rounded-lg bg-[#000]" onClick={LogOut}>Logout</button>
    </div>
    </div>
  )
}

export default Navbar

