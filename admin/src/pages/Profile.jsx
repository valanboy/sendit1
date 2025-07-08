import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex w-[100%] m-[1rem] flex-col h-screen items-center mt-3 md:mt-[8rem]  text-gray-700 text-sm md:text-[1rem] lg:text-[1.1rem]">
      <div className="flex flex-col justify-center items-center w-full mb-7">
        <img src="profile.svg" width="150px" className="md:w-[200px] lg:w-[250px] mb-2" />
        <span className=" font-semibold text-sm md:text-[1rem] lg:text-[1.1rem] text-gray-700 text-center">
          {user.currentUser.email}
        </span>
      </div>

      <div className="md:mt-5 w-[100%] flex justify-center  items-center">
<div className="flex flex-col items-start space-y-2 p-4 md:space-y-5">
  <div className="flex gap-4">
    <p className="font-semibold">Full Name:</p>
    <p>{user.currentUser.fullname}</p>
  </div>
  <div className="flex gap-14">
    <p className="font-semibold">Age:</p>
    <p>{user.currentUser.age}</p>
  </div>
  <div className="flex gap-7">
    <p className="font-semibold">Country:</p>
    <p>{user.currentUser.country}</p>
  </div>
  <div className="flex gap-7">
    <p className="font-semibold ">Address:</p>
    <p className=" w-[170px] md:w-full">{user.currentUser.address}</p>
  </div>
</div>

</div>

      </div>
    
  );
};

export default Profile;
