import {FaUser} from "react-icons/fa"

const Myparcels = () => {
  return (
    <div>
     
     <div className="relative flex items-end justify-end mr-[20%] text-white font-semibold mt-[5%] cursor-pointer">
        <div className="flex items-center">
          <FaUser className="mr-[10px]"/>
        <span>Believe Gilbert</span> 
        </div> 
        <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999]">
<ul className="flex flex-col items-center justify-center mt-[10px]">
  <li className="hover:text-[#fff] my-[5px]">All Parcels</li>
</ul>
        </div>
     </div>
    </div>
  )
}

export default Myparcels
