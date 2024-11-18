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
          <h1 className="text-[20px] font-semibold">Users</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> {usersCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[30vh] w-[45vh] shadow-lg m-[20px]">
          <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> {deliveredCount}</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> {pendingCount}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="h-[55vh] w-[69vh] text-[#fff]">
          <PieChart
                    series={[
              {
                data: [
                  { id: 0, value: pendingCount, label: "Pending Parcels" },
                  { id: 1, value: deliveredCount, label: "Delivered Parcels" },
                  { id: 2, value: usersCount, label: "Users" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 150,
                   },
                             
            ]}
            
          />
        </div>
        <div className="h-[30vh] w-[35vh] shadow-lg p-[20px]">
          <h2 className="flex px-[20px] font-semibold text-[#fff]">
            Recent Users
          </h2>
          {users.map((user, index)=>(
            <ol className="flex flex-col justify-end px-[20px] mt-[10px] text-[#d9d9d9]" key={index}>
            <li>{user.fullname}</li>
             </ol>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
