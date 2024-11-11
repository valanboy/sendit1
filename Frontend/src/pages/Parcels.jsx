import { FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid"

const Parcels = () => {

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "weight", headerName: "Weight (kg)", width: 120 },
    { field: "cost", headerName: "Cost ($)", width: 100 }

  ];
  
  const rows = [
    {
      id: 1,
      from: "New York",
      to: "Los Angeles",
      senderName: "Alice Smith",
      recipientName: "Bob Johnson",
      weight: 2.5,
      cost: 15.0,
    },
    {
      id: 2,
      from: "Chicago",
      to: "Miami",
      senderName: "John Doe",
      recipientName: "Jane Doe",
      weight: 5.0,
      cost: 25.0,
    },
    {
      id: 3,
      from: "Houston",
      to: "Dallas",
      senderName: "Sarah Lee",
      recipientName: "Mark Brown",
      weight: 1.0,
      cost: 10.0,
    },
    {
      id: 4,
      from: "Seattle",
      to: "Portland",
      senderName: "James Wilson",
      recipientName: "Emily Davis",
      weight: 3.2,
      cost: 18.5,
    },
    {
      id: 5,
      from: "Denver",
      to: "Phoenix",
      senderName: "Robert Chen",
      recipientName: "Olivia White",
      weight: 4.0,
      cost: 20.0,
    },
    {
      id: 6,
      from: "San Diego",
      to: "San Francisco",
      senderName: "Linda Taylor",
      recipientName: "Ethan Green",
      weight: 2.7,
      cost: 15.75,
    },
    {
      id: 7,
      from: "Boston",
      to: "Orlando",
      senderName: "Michael King",
      recipientName: "Grace Moore",
      weight: 6.5,
      cost: 30.0,
    },
    {
      id: 8,
      from: "Austin",
      to: "Atlanta",
      senderName: "Karen Scott",
      recipientName: "Chris Carter",
      weight: 2.0,
      cost: 12.0,
    },
    {
      id: 9,
      from: "Las Vegas",
      to: "Honolulu",
      senderName: "Patrick Lee",
      recipientName: "Anna Brown",
      weight: 8.0,
      cost: 50.0,
    },
  ];
  

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
      <span className="text-[18px] text-[#444]">All Parcels</span>
      <span className="font-semibold text-[#444]">Believe Gilbert</span>
        </div>

        <div className="p-3">
        <DataGrid rows={rows} columns={columns} checkboxSelection 
        />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
