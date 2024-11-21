
import { useSelector } from "react-redux";
 

const Profile = () => {
  const user = useSelector((state) => state.user);
  


  return (

    <div className="flex flex-col h-[100vh] items-center justify-center text-gray-300 m-[3rem]">
      
      <div className=" items-center mb-[5%]">
        <img src="profile.svg" width="300px" />
        <span className="m-[15%] font-semibold text-[1rem] ml-[30%]">{user.currentUser.email}</span>
      </div>

<div className="flex ">
<div className=" items-center ">
        <p className="m-5  ">Full Name: </p>
        <p className="m-5 ">Age:  </p>
        <p className="m-5 ">Country:   </p>
        <p className="m-5 ">Address: </p>
      </div>
     
      
      <div className=" items-center ">
        <p className="m-5  ">{user.currentUser.fullname} </p>
        <p className="m-5 ">{user.currentUser.age} </p>
        <p className="m-5 ">{user.currentUser.country} </p>
        <p className="m-5 ">{user.currentUser.address} </p>
      </div>
          </div>
          </div>
  );
};

export default Profile;
