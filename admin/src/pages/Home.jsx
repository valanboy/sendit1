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
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setUsers(res.data);
        console.log(users.length);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="h-auto w-[97%] justify-center mx-auto bg-orange-50">
      <div className="grid grid-cols-3 md:flex md:items-center mt-5 md:justify-evenly gap-1 mr-5">
        <div className="flex flex-col items-center justify-center text-gray-700 h-auto w-[120px] md:w-[250px] md:h-[250px] lg:w-[400px] shadow-lg">
          <h1 className="text-[13px] pt-2 text-center w-[50px] md:w-[150px] md:text-[1rem] lg:text-[1.2rem] font-semibold">
            Users
          </h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#e78d63]" />
          </div>
          <span className="mt-[1.2rem] text-[15px] mb-2 md:text-[1rem] lg:text-[1.2rem]">
            {" "}
            {usersCount}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-gray-700 h-auto w-[120px] md:w-[250px] md:h-[250px] lg:w-[400px] shadow-lg">
          <h1 className="text-[13px] pt-2 text-center w-[50px] md:w-[150px] md:text-[1rem] lg:text-[1.2rem] font-semibold">
            Delivered Parcels
          </h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#e78d63]" />
          </div>
          <span className="mt-[1.2rem] text-[15px] mb-2 md:text-[1rem] lg:text-[1.2rem]">
            {" "}
            {deliveredCount}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-gray-700 h-auto w-[120px] md:w-[250px] md:h-[250px] lg:w-[400px] shadow-lg">
          <h1 className="text-[13px] pt-2 text-center w-[50px] md:w-[150px] md:text-[1rem] lg:text-[1.2rem] font-semibold">
            Pending Parcels
          </h1>
          <div className="flex items-center mt-[1.2rem]">
            <HiArrowSmallUp className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-green-500" />
            <HiArrowLongDown className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] text-[#e78d63]" />
          </div>
          <span className="mt-[1.2rem] text-[15px] mb-2 md:text-[1rem] lg:text-[1.2rem]">
            {" "}
            {pendingCount}
          </span>
        </div>
      </div>

      <div className="block sm:flex items-center sm:mt-10 md:mt-12">
        <div className="h-auto w-[100%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-auto  mt-9">
          <div className="flex mb-6 mt-4 w-full justify-center space-x-7">
            <div className="flex items-center">
              <label className="text-[13px] md:text-[1rem] lg:text-[1rem] text-center text-gray-700">
                Pending Parcels
              </label>
              <FaCircle className="text-blue-900 ml-1" />
            </div>
            <div className="flex items-center ">
              <label className="text-[13px] md:text-[1rem] lg:text-[1rem] text-center text-gray-700">
                Delivered Parcels
              </label>
              <FaCircle className="text-[#e78d63] ml-1" />
            </div>
            <div className="flex items-center">
              <label className="text-[13px] md:text-[1rem] lg:text-[1rem] text-center text-gray-700">Users</label>
              <FaCircle className="text-[#02b2af] ml-1" />
            </div>
          </div>
          <div className="w-[300px] md:w-[] aspect-square mx-auto">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: pendingCount, color: "#374151" },
                    { id: 1, value: deliveredCount, color: "#e78d63" },
                    { id: 2, value: usersCount, color: "#02b2af" },
                  ],
                  innerRadius: 50,
                  outerRadius: 150,
                  paddingAngle: 9,
                  cornerRadius: 5,
                  startAngle: -45,
                  endAngle: 235,
                  cx: 123,
                },
              ]}
              height={undefined}
              width={undefined}
            />
          </div>
        </div>
        <div className="h-auto w-[40%] md:w-[25%] lg:w-[20%] xl:w-[15%] mx-auto shadow-2xl mb-5 mt-[6%] ">
          <h2 className="px-[1.2rem] text-sm md:text-[1rem] p- text-center pt-3 font-semibold text-gray-700 ">
            Recent Users
          </h2>
          <hr className="h-[5px] pb-2 w-[50%] mx-auto"/>
          <div className="h-auto overflow-y-auto w-[100%] flex flex-col space-y-1 pb-5 items-center max-h-[200px]">
            {users.map((user, index) => (
              <ol className=" justify-end text-sm md:text-[15px] text-gray-700 " key={index}>
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
