
import { useSelector } from "react-redux";
 

const Profile = () => {
  const user = useSelector((state) => state.user);
  


  return (

    <div className="flex flex-col h-screen items-center  text-gray-700 text-sm m-[3rem]">
      
      <div className="flex flex-col items-center mb-7">
        <img src="profile.svg" width="150px" className="md:w-200px mb-2"/>
        <span className=" font-semibold text-sm text-gray-700 text-center">{user.currentUser.email}</span>
      </div>

<div className="flex justify-center items-center w-[100%]">
<div className=" items-center space-y-3 h-auto space-x-5 w-[50%] flex flex-col justify-center">
        <p className="font-semibold ">Full Name: </p>
        <p className="font-semibold">Age:  </p>
        <p className="font-semibold">Country:   </p>
        <p className="font-semibold">Address: </p>
      </div>
     
      
      <div className=" items-center space-y-3 h-auto space-x-5 w-[50%] flex flex-col justify-center">
        <p className=" ">{user.currentUser.fullname} </p>
        <p className="">{user.currentUser.age} </p>
        <p className="">{user.currentUser.country} </p>
        <p className="">{user.currentUser.address} </p>
      </div>
          </div>
          </div>
  );
};

export default Profile;
