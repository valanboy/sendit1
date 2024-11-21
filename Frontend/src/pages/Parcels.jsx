import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../admin/src/requestMethods";
import { useSelector } from "react-redux"

const Parcels = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "sendername", headerName: "Sender Name", width: 150 },
    { field: "recipientname", headerName: "Recipient Name", width: 150 },
    { field: "weight", headerName: "Weight (kg)", width: 120 },
    { field: "cost", headerName: "Cost ($)", width: 100 },
  ];

  const [parcel, setParcel] = useState({});

  const user = useSelector((state)=> state.user)
  const email = user.currentUser.email

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: email
        });
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);

  return (
    <div className="h-[100vh] overflow-y-auto w-[90vw] flex flex-col items-center ml-4  mt-[3%] mr-[5%]">
      <div className="bg-[#fff] h-auto w-[100%]  rounded-md p-[30px]">
        <div className="mb-10">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>
</div>
        <div className="flex justify-between p-[10px]">
          <span className="text-[1rem] text-[#444]">All Parcels</span>
          <span className="font-semibold text-[#444]">{user.currentUser.fullname}</span>
        </div>
        <div className="p-3 w-[100%]">
          <DataGrid
            rows={parcel}
            getRowId={(row) => row._id}
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
