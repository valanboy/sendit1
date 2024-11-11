import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"

const Myparcels = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!Open);
  };

  

  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] font-semibold mt-[5%] cursor-pointer">
        <div className="flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
          <span>Believe Gilbert</span>
        </div>
        {Open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999]">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
             <Link to="/allparcels"><li className="hover:text-[#fff] my-[5px]">All Parcels</li></Link> 
              <li className="hover:text-[#fff] my-[5px]">Statements</li>
              <li className="hover:text-[#fff] my-[5px]">Log out</li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">My Parcels</h2>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Lagos, Nigeria</li>
              <li>Weight: 780g</li>
              <li>Date: 26/11/2024</li>
              <li>Sender: Valanboy</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Amsterdam, Netherlands</li>
              <li>Weight: 920g</li>
              <li>Date: 02/08/2024</li>
              <li>Sender: Mike Evans</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span>To: Hong kong, China</span>
            <button className="bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]">
              Delivered
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Huston, Texas</li>
              <li>Weight: 400g</li>
              <li>Date: 15/10/2024</li>
              <li>Sender: Micky Ray</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span>To: Tokyo, Japan</span>
            <button className="bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myparcels;
