import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcels = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "sendername", headerName: "Sender Name", width: 150 },
    { field: "recipientname", headerName: "Recipient Name", width: 150 },
    { field: "weight", headerName: "Weight (kg)", width: 120 },
    { field: "cost", headerName: "Cost ($)", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
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
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
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
<div className="h-[100vh]">
    <div className="m-[3rem]  w-[90%] bg-[#fff] p-[1rem]">
      <div className="flex items-center justify-between">
        <h1 className="m-[1.2rem] text-[1.2rem]">All parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#1e1e1e] text-[0.75rem] text-white p-[10px] rounded-md cursor-pointer">
            New Parcel Order
          </button>
        </Link>
      </div>

      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        // checkboxSelection
      />
    </div>
    </div>
  );
};

export default Parcels;
