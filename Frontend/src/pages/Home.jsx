import { Link } from "react-router-dom"
import {FaLongArrowAltRight, FaAccessibleIcon} from "react-icons/fa"
import propTypes from "prop-types"
import { useState } from "react"


 const Child = ({username}) =>{
  const info = "mark"
  const passdata = ()=>{
    username(info)
  }
  

  return(
    <div className="text-white grid justify-center" onClick={passdata}>click to pass data to parent</div>
  )
}

 const Home = () => {
  const [data, setdata] = useState(" ")
  let username = (info)=>{
   setdata(info)
  } 
  return (
   
    <div className="h-[100vh]"> 
 <Child username={username}/>
 <div className="text-white">{data}</div>
   
    <Link to="/login">
     <div className="flex mt-[20%] ml-[50%]">
     <div>
     <FaLongArrowAltRight className="text-[#e9eb77] text-[3.5rem] mr-6"/>
     </div>
     <div className="bg-[#e9eb77] flex items-center justify-center p-[1rem] rounded-xl">
    <FaAccessibleIcon className="text-[#181817] text-[2rem] "/>
    <span className="text-[1rem]">Login</span>
     </div>
          </div>
          </Link>
      <div className="-mt-[] block md:flex h-[] items-center p-[50px] text-gray-300">
     
     <div className="mb-10">
     
     
<h2 className="font-bold text-[2rem] w-[50%]">SIMPLE, FAST AND RELIABLE PARCEL DELIVERY SYSTEM</h2>
</div>
<div className="">
<img src="/hero.png" height="500px" alt=""/>
</div>
     </div>
    
   </div>
  )
}

Child.propTypes = {
  username: propTypes.string.isRequired,
}

export default Home