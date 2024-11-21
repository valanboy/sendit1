import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";


const Home = () => {
  const [parcels, setParcels] = useState([]);
  const [users, setUsers] = useState([]);

  const usersCount = users.length;
  const deliveredCount = parcels.filter((parcel) => parcel.status === 3).length;
  const pendingCount = parcels.filter((parcel) => parcel.status === 1).length;

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  },[]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setUsers(res.data);
        console.log(users.length)
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  },[]);

  return (
    <div className="h-[]">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1rem] font-semibold">Users</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {usersCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1rem] font-semibold">Delivered Parcels</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {deliveredCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1rem] font-semibold">Pending Parcels</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {pendingCount}</span>
        </div>
      </div>

      <div className="block sm:flex items-center ">
  
        <div className="h-[45vh] text-[#fff] mr-[25%]">
        <div className="flex ml-2 mb-5 mt-4">
        <div className="flex items-center mb-3"> <label className="ml-4 text-[0.85rem]" >Pending Parcels</label>
        <FaCircle className="text-[#02b2af] ml-1"/>
        </div>
        <div className="flex items-center mb-3 ">
          <label className="ml-4 text-[0.85rem]">Delivered Parcels</label>
          <FaCircle className="text-[#2e96ff] ml-1"/>
        </div>
        <div className="flex items-center mb-3">
           <label className="ml-4 text-[0.85rem]">Users</label>
           <FaCircle className="text-[#b800d8] ml-1"/>
        </div>
        </div>
        <div className="w-[375px] h-[300px] ">
          <PieChart
                    series={[
              {
                data: [
                  { id: 0, value: pendingCount,  },
                  { id: 1, value: deliveredCount,},
                  { id: 2, value: usersCount, },
                ],
                innerRadius: 30,
                outerRadius: 150,
                paddingAngle: 9,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 235,
                cx: 163,
                   },
                             
            ]}
            
          /></div>
        </div>
        <div className="h-[40vh] w-[300px] shadow-lg  mt-[25%] ">
          <h2 className="flex px-[1.2rem] text-[1rem] font-semibold text-[#d9d9d9] ">
            Recent Users
          </h2>
          <div className="h-[30vh] overflow-auto mt-5">
          {users.map((user, index)=>(
            <ol className="flex flex-col justify-end text-[0.85rem] px-[1.2rem] mt-[0.5rem] text-[#d9d9d9]" key={index}>
            <li>{user.fullname} </li>
             </ol>
          ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
