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
    <div className="m-[3rem] h-[90%] w-[90%] bg-[#fff] p-[1.2rem]">
      <h2 className="font-semibold text-[1rem]">New Parcel</h2>
      <div className="flex">
        <div className="m-[1.2rem] w-[35%]">
          <div className="flex flex-col my-[20px] ">
            <label htmlFor="" className='text-[1rem]'>From</label>
            <input
              type="text"
              name='from'
              onChange={handleChange}
              placeholder="ontario, USA"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>To</label>
            <input
              type="text"
              name='to'
              onChange={handleChange}
              placeholder="Nevada, Canada"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]' >Sender Name</label>
            <input
              type="text"
              name='sendername'
              onChange={handleChange}
              placeholder="Believe Nchere-awaji Gilbert"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Recipient Name</label>
            <input
              type="text"
              name='recipientname'
              onChange={handleChange}
              placeholder="Favour Nchere-awaji Gilbert"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Sender Email</label>
            <input
              type="email"
              name='senderemail'
              onChange={handleChange}
              placeholder="believegilbert20@gmail.com"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Recipient Email</label>
            <input
              type="email"
              name='recipientemail'
              onChange={handleChange}
              placeholder="favourgilbert@demo.com"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
          </div>
        </div>

        <div className="m-[1.2rem] w-[35%]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="" className='text-[1rem]'>weight (g)</label>
            <input
              type="text"
              name='weight'
              onChange={handleChange}
              placeholder="200g"
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Cost $</label>
            <input
              type="number"
              name='cost'
              onChange={handleChange}
              placeholder="$50"
              
              className="border-2 rounded-xl border-[#555] border-solid p-[0.5rem] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Date</label>
            <input
              type="date"
              name='date'
              onChange={handleChange}
              placeholder="20/10/2024"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <label htmlFor="" className='text-[1rem]'>Note</label>
            <textarea
              type="text"
              name='note'
              onChange={handleChange}
              placeholder="fragile item, handle with care"
              className="border-2 rounded-xl border-[#555] border-solid p-[10px] w-[100%]"
            />
            <button className="bg-[#1e1e1e] cursor-pointer text-white p-[0.5rem] w-[100%] text-[0.75rem] my-[15px] rounded-xl" onClick={handleAppParcel}>
              Create Order
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewParcel;
