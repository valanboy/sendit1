import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const [parcel, setParcel] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const parcelId = location.pathname.split("/")[3];

  

    useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getParcel();
  }, [parcelId]);

 const updateParcelStatus = async()=>{
try { setLoading(true)
    setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds
    }, 1000);
    const status1 = 2
    await publicRequest.put(`/parcels/status/${parcelId}`, {status1})
       parcel.status++
} catch (error) {
    console.log(error)
}
     }

  return (
    <div className="m-[3rem] h-[87vh] bg-[#fff] p-[1.2rem] w-[75.5vw]">
      <h2 className="font-semibold ">Parcel</h2>
      <div className="block md:flex justify-evenly m-[2rem]">
        <div className=" ">
        <ul>
                <li className="mr-10 mt-3"><span className="font-semibold ">From:</span><span className="ml-1"> {parcel.from}</span>  </li>
                <li className="mr-10 mt-3"><span className="font-semibold ">Sender Email: </span><span className="ml-1">{parcel.senderemail}</span> </li>
                <li className="mr-10 mt-3"><span className="font-semibold ">Sender: </span><span className="ml-1">{parcel.sendername}</span> </li>
                
                <li className="mr-10 mt-3"><span className="font-semibold ">Weight: </span><span className="ml-1">{parcel.weight}</span> </li>
                
                </ul>
        </div>

        <div className=" ">
        <ul>
                <li className="mr-10 mt-3"><span className="font-semibold ">To:</span><span className="ml-1"> {parcel.to}</span>  </li>
                <li className="mr-10 mt-3"><span className="font-semibold ">Recipient Email:</span><span className="ml-1"> {parcel.recipientemail}</span>  </li>
        
                <li className="mr-10 mt-3"><span className="font-semibold ">Recipient:</span><span className="ml-1"> {parcel.recipientname}</span> </li>
                <li className="mr-10 mt-3"><span className="font-semibold ">Date: </span><span className="ml-1">{parcel.date}</span></li>
              </ul>
        </div>

        <div className=" items-center ">
          
        </div>
        <div className="flex flex-col items-center mt-4">
          <h2 className="font-semibold">Feeback</h2>
          <span>Goods received in perfect condition</span>
          <button className={parcel.status === 1 || parcel.status === 0 ? "bg-[#555] text-white w-[15rem] cursor-pointer p-[10px] mt-[20px] text-[1.3rem]" : "bg-[#21b134] text-white w-[200px] cursor-pointer p-[10px] m-[20px] text-[1.3rem]"}>
              {parcel.status === 1 || parcel.status === 0 ? "Pending..." : "Delivered"}
            </button>
          <button className= "bg-[#080808] text-white w-[10rem] cursor-pointer p-[10px] mt-[6rem] rounded-lg text-[1rem]" onClick={updateParcelStatus} >
             {loading? "Loading...": "Update status"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
