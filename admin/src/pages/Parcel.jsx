import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const [parcel, setParcel] = useState({});
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

  const handleUpdate = async() => {
   try {
    await publicRequest.put(`/parcels/${parcelId}`)
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Parcel</h2>
      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              name="from"
              type="text"
              placeholder={parcel.from}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">To</label>
            <input
              name="to"
              onChange={handleChange}
              type="text"
              placeholder={parcel.to}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Sender Name</label>
            <input
              name="sendername"
              onChange={handleChange}
              type="text"
              placeholder={parcel.sendername}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />{" "}
            <label htmlFor="">Recipient Name</label>
            <input
              name="recipientname"
              onChange={handleChange}
              type="text"
              placeholder={parcel.recipientname}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Sender Email</label>
            <input
              name="senderemail"
              onChange={handleChange}
              type="email"
              placeholder={parcel.senderemail}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Recipient Email</label>
            <input
              name="recipientemail"
              onChange={handleChange}
              type="email"
              placeholder={parcel.recipientemail}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">weight</label>
            <input
              name="weight"
              onChange={handleChange}
              type="text"
              placeholder={parcel.weight}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Cost</label>
            <input
              name="cost"
              onChange={handleChange}
              type="number"
              placeholder={parcel.cost}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Date</label>
            <input
              name="date"
              onChange={handleChange}
              type="date"
              placeholder={parcel.date}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <label htmlFor="">Note</label>
            <textarea
              type="text"
              placeholder={parcel.note}
              name="note"
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
            <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] my-[15px]" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Feeback</h2>
          <span>Goods received in perfect condition</span>
         {parcel.status === 1 || parcel.status === 0 ? <span className="text-red-500 text-[18px]">Pending</span>:<span className="text-green-500 text-[18px]">Delivered</span>} 
        </div>
      </div>
    </div>
  );
};

export default Parcel;
