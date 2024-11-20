import { publicRequest } from "../requestMethods";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom"


const Orders = () => {
    const [parcels, setParcels] = useState([]);
   
    

    
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
 
  
  
    return (
      <div>
        <div className="flex flex-col mr-[10%] ml-[10%]">
          <h2 className="text-[18px] text-[#d9d9d9] p-[20px] font-semibold">All Orders</h2>
          
        
        <div className="h-[90vh] w-[85vw] overflow-auto">
          {parcels.map((parcel, index)=>(
            <Link to={`/parcel/status/${parcel._id}`} key={index}>
          <div className="flex justify-between bg-[#d9d9d9] h-[12rems] w-[80%] m-[1.2rem] p-[1.2rem] cursor-pointer text-[#555">
            <div className="flex flex-col">
           
              <ul>
                <li><span className="font-semibold">From:</span><span className="ml-"> {parcel.from}</span>  </li>
                <li><span className="font-semibold">Weight: </span><span className="ml-">{parcel.weight}</span> </li>
                <li><span className="font-semibold">Date: </span><span className="ml-">{parcel.date}</span></li>
                <li><span className="font-semibold">Sender: </span><span className="ml-">{parcel.sendername}</span> </li>
                </ul>
            
            </div>
  
            <div className="flex flex-col">
              <span className="font-semibold">To:  {parcel.to}</span>
              
              <ul>
               <li><span className="font-semibold">Reciever:</span><span className="ml-"> {parcel.recipientname}</span> </li>
               <li><span className="font-semibold">Reciever Email:</span><span className="ml-"> {parcel.recipientemail}</span> </li>
              </ul>
            </div>
            
          </div>
          </Link>
        ))}
        </div>
         
             
        </div>
      </div>
    )
  }
  
  export default Orders
  