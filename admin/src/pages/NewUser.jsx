const NewUser = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="Believe Nchere-awaji Gilbert"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="believegilbert@demo.com"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Age</label>
        <input
          type="number"
          min="0"
          max="120"
          placeholder="30"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Country</label>
        <input
          type="text"
          placeholder="Nigeria"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="#13 aves avenue, Ejigbo, Lagos, Nigeria"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] my-[15px]">
          Create
        </button>
      </div>
    </div>
  );
};

export default NewUser;
