import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
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
    <div className="">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1.2rem] font-semibold">Users</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {usersCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1.2rem] font-semibold">Delivered Parcels</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {deliveredCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[1.2rem] font-semibold">Pending Parcels</h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.8rem] text-red-500" />
          </div>
          <span className="mt-[1.2rem] text-[1rem]"> {pendingCount}</span>
        </div>
      </div>

      <div className="block sm:flex items-center justify-between">
  
        <div className="h-[45vh] w-[85vw]  text-[#fff] mr-[25%]">
          <PieChart
                    series={[
              {
                data: [
                  { id: 0, value: pendingCount, label: "Pending Parcels" },
                  { id: 1, value: deliveredCount, label: "Delivered Parcels" },
                  { id: 2, value: usersCount, label: "Users" },
                ],
                innerRadius: 30,
                outerRadius: 150,
                paddingAngle: 9,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 235,
                cx: 120,
                   },
                             
            ]}
            
          />
        </div>
        <div className="h-[40vh] w-[100%] shadow-lg p-[1.2rem] m-3 ">
          <h2 className="flex px-[1.2rem] text-[1rem] font-semibold text-[#fff] ">
            Recent Users
          </h2>
          <div className="h-[30vh] overflow-auto mt-5">
          {users.map((user, index)=>(
            <ol className="flex flex-col justify-end text-[1rem] px-[1.2rem] mt-[0.5rem] text-[#d9d9d9]" key={index}>
            <li>{user.fullname} kelly</li>
             </ol>
          ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
