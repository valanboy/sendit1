import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";


const Users = () => {
  const [data, setData] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "fullname", headerName: "Full Name", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "address", headerName: "Address", width: 250 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <FaTrash className="text-red-500 cursor-pointer m-2" onClick={()=> handleDelete(params.row._id)}/>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const handleDelete = async(id)=>{
   try {
    await publicRequest(`/users/${id}`)
    window.location.reload();
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <div className="m-[3rem] bg-[#fff] w-[90%] p-[1.2rem]">
      <div className="flex items-center justify-between">
        <h1 className="m-[1.2rem] text-[1.2rem]">All Users</h1>
        <Link to="/newuser">
          <button className="bg-[#1e1e1e] text-white p-[0.5rem] text-[0.75rem] cursor-pointer rounded-xl">
            New User
          </button>
        </Link>
      </div>
<div >
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

export default Users;
