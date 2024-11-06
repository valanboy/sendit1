import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'from', headerName: 'From', width: 120 },
  { field: 'to', headerName: 'To', width: 120 },
  { field: 'senderName', headerName: 'Sender Name', width: 150 },
  { field: 'recipientName', headerName: 'Recipient Name', width: 150 },
  { field: 'weight', headerName: 'Weight (kg)', width: 120 },
  { field: 'cost', headerName: 'Cost ($)', width: 100 },
  { field: 'edit', headerName: 'Edit', width: 150, 
    rendercell: (params)=>{
      return(
        <div>
          <button className='bg-teal-500 text-white cursor-pointer w-[70px]'>Edit</button>
        </div>
      )
    }
   },

   { field: 'delete', headerName: 'Delete', width: 150, 
    rendercell: (params)=>{
      return(
        <div>
        <FaTrash/>
        </div>
      )
    }
   }
];

const rows = [
  { id: 1, from: 'New York', to: 'Los Angeles', senderName: 'Alice Smith', recipientName: 'Bob Johnson', weight: 2.5, cost: 15.0 },
  { id: 2, from: 'Chicago', to: 'Miami', senderName: 'John Doe', recipientName: 'Jane Doe', weight: 5.0, cost: 25.0 },
  { id: 3, from: 'Houston', to: 'Dallas', senderName: 'Sarah Lee', recipientName: 'Mark Brown', weight: 1.0, cost: 10.0 },
  { id: 4, from: 'Seattle', to: 'Portland', senderName: 'James Wilson', recipientName: 'Emily Davis', weight: 3.2, cost: 18.5 },
  { id: 5, from: 'Denver', to: 'Phoenix', senderName: 'Robert Chen', recipientName: 'Olivia White', weight: 4.0, cost: 20.0 },
  { id: 6, from: 'San Diego', to: 'San Francisco', senderName: 'Linda Taylor', recipientName: 'Ethan Green', weight: 2.7, cost: 15.75 },
  { id: 7, from: 'Boston', to: 'Orlando', senderName: 'Michael King', recipientName: 'Grace Moore', weight: 6.5, cost: 30.0 },
  { id: 8, from: 'Austin', to: 'Atlanta', senderName: 'Karen Scott', recipientName: 'Chris Carter', weight: 2.0, cost: 12.0 },
  { id: 9, from: 'Las Vegas', to: 'Honolulu', senderName: 'Patrick Lee', recipientName: 'Anna Brown', weight: 8.0, cost: 50.0 },
];

const Parcels = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
          <h1 className="m-[20px] text-[20px]">All parcels</h1>
          <Link to="/newparcel">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">New Parcel</button>
          </Link>
      </div>

      <DataGrid 
      rows={rows} 
      columns={columns}
      checkboxSelection />
   </div>

  )
}

export default Parcels
