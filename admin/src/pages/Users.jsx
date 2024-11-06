import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'fullName', headerName: 'Full Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'address', headerName: 'Address', width: 250 },
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
  { id: 1, email: 'alice@example.com', fullName: 'Alice Smith', age: 28, country: 'USA', address: '123 Main St, New York' },
  { id: 2, email: 'bob@example.com', fullName: 'Bob Johnson', age: 35, country: 'Canada', address: '456 Maple Ave, Toronto' },
  { id: 3, email: 'charlie@example.com', fullName: 'Charlie Brown', age: 22, country: 'UK', address: '789 Elm St, London' },
  { id: 4, email: 'david@example.com', fullName: 'David Wilson', age: 45, country: 'Australia', address: '321 Pine St, Sydney' },
  { id: 5, email: 'emma@example.com', fullName: 'Emma Davis', age: 30, country: 'USA', address: '654 Oak St, Los Angeles' },
  { id: 6, email: 'frank@example.com', fullName: 'Frank Miller', age: 40, country: 'Germany', address: '987 Birch Rd, Berlin' },
  { id: 7, email: 'grace@example.com', fullName: 'Grace Moore', age: 27, country: 'France', address: '135 Cedar Ave, Paris' },
  { id: 8, email: 'harry@example.com', fullName: 'Harry Potter', age: 29, country: 'UK', address: '246 Willow St, Oxford' },
  { id: 9, email: 'isla@example.com', fullName: 'Isla Thompson', age: 33, country: 'Ireland', address: '357 Fir St, Dublin' },
  
];

const Users = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
          <h1 className="m-[20px] text-[20px]">All Users</h1>
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">New User</button>
      </div>

      <DataGrid 
      rows={rows} 
      columns={columns}
      checkboxSelection />
   </div>

  )
}


export default Users
