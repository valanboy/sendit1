import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { publicRequest } from '../requestMethods';
  

const NewParcel = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleAppParcel = async() => {
 try {
  await publicRequest.post("/parcels", inputs)
  toast.success("Parcel has been successfully added to our database")
 } catch (error) {
  console.log(error)
  toast.error("make sure to fill in the form")
 }
  }

  return (
    <div className="m-[30px] h-[78%] w-[90%] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>
      <div className="flex">
        <div className="m-[20px] w-[35%]">
          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">From</label>
            <input
              type="text"
              name='from'
              onChange={handleChange}
              placeholder="ontario, USA"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">To</label>
            <input
              type="text"
              name='to'
              onChange={handleChange}
              placeholder="Nevada, Canada"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              name='sendername'
              onChange={handleChange}
              placeholder="Believe Nchere-awaji Gilbert"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              name='recipientname'
              onChange={handleChange}
              placeholder="Favour Nchere-awaji Gilbert"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Sender Email</label>
            <input
              type="email"
              name='senderemail'
              onChange={handleChange}
              placeholder="believegilbert20@gmail.com"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Recipient Email</label>
            <input
              type="email"
              name='recipientemail'
              onChange={handleChange}
              placeholder="favourgilbert@demo.com"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
          </div>
        </div>

        <div className="m-[20px] w-[35%]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">weight</label>
            <input
              type="text"
              name='weight'
              onChange={handleChange}
              placeholder="200g"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Cost</label>
            <input
              type="number"
              name='cost'
              onChange={handleChange}
              placeholder="$50"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Date</label>
            <input
              type="date"
              name='date'
              onChange={handleChange}
              placeholder="20/10/2024"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="">Note</label>
            <textarea
              type="text"
              name='note'
              onChange={handleChange}
              placeholder="fragile item, handle with care"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[100%] font-[0.3rem] my-[15px] rounded-xl" onClick={handleAppParcel}>
              Create Parcel Order
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewParcel;
