import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcels = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "from", headerName: "From", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "sendername", headerName: "Sender Name", width: 170 },
    { field: "recipientname", headerName: "Recipient Name", width: 175 },
    { field: "weight", headerName: "Weight (kg)", width: 150 },
    { field: "cost", headerName: "Cost ($)", width: 125 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/parcel/${params.row._id}`}>
              <button className="bg-teal-500 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </div>
        );
      },
    },

    {
      field: "delete",
      headerName: "Delete",
      width: 115,
      renderCell: (params) => {
        return (
          <div className="flex items-center  h-[50px] ">
            <FaTrash
              className="text-red-500 text-[1.3rem] cursor-pointer m-2"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="w-full min-h-screen">
    <div className="mt-[2rem] md:mt-[0rem] md:m-[3rem] bg-[#fff] p-[1rem] ">
      <div className="flex items-center w-[90%] mx-auto justify-between">
        <h1 className="m-[1rem] text-[1.2rem]">All parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#e78d63] text-sm md:text-[1rem] text-white p-[10px] rounded-md cursor-pointer">
            New Parcel Order
          </button>
        </Link>
      </div>

<div className="overflow-x-auto">
       <Paper sx={{ height: 590, width: {xs:"300px", md:"100%"} }} className="md:mx-auto mt-[5%]">
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
       // checkboxSelection
      />

      </Paper>
</div>  </div>
    </div>
  );
};

export default Parcels;
