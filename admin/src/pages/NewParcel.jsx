

const NewParcel = () => {
  return (
    <div className='m-[30px] bg-[#fff] p-[20px]'>
      <h2 className="font-semibold">New Parcel</h2>
      <div className="flex">
   <div className="m-[20px]">
<div className="flex flex-col my-[20px]">
<label htmlFor="">From</label>
<input type="text" placeholder="ontario, USA"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">To</label>
<input type="text" placeholder="Nevada, Canada"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Sender Name</label>
<input type="text" placeholder="Believe Nchere-awaji Gilbert"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Recipient Name</label>
<input type="text" placeholder="Favour Nchere-awaji Gilbert"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Sender Email</label>
<input type="email" placeholder="believegilbert20@gmail.com"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Recipient Email</label>
<input type="email" placeholder="favourgilbert@demo.com"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
</div>
   </div>

   <div className="m-[20px]">
<div className="flex flex-col my-[20px]">
<label htmlFor="">weight</label>
<input type="text" placeholder="200g"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Cost</label>
<input type="number" placeholder="$50"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Date</label>
<input type="date" placeholder="Believe Nchere-awaji Gilbert"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<label htmlFor="">Note</label>
<textarea type="text" 
placeholder="fragile item, handle with care"
name="note"
  className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
/>
<button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] my-[15px]">Create</button>
</div>
   </div>
      </div>
    </div>
  )
}

export default NewParcel
