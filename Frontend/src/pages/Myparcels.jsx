import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CurrentDateTime from "../components/recentDate";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { logOut } from "../redux/userRedux";

const Myparcels = () => {
  const [Open, setOpen] = useState(false);
  const [parcels, setParcels] = useState([]);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!Open);
  };

  const Logout = async () => {
    dispatch(logOut())
    navigate('/login')
   };

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });
        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);
  console.log(parcels)

  return (
    <div className="h-[100vh] overflow-y-auto">
   
      <div className="relative flex items-end justify-end mr-[20%] mt-[15%] cursor-pointer">
        <div className="mb-3 flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
          <span>{user.currentUser.fullname}</span>
        </div>
        {Open && (
          <div className="absolute top-full h-[160px]  w-[250px] backdrop-blur-3xl z-[999]  rounded-xl">
            <ul className="flex flex-col items-center text-[0.85rem] justify-center mt-[10px] text-[#fff]">
              <Link to="/allparcels">
              {/* takes you #parcels page */}
                <li className="hover:text-[#e8f1bc] text hover:text-[17px] my-[5px]">My Parcels</li>  
              </Link>
              <li className="hover:text-[#e8f1bc] hover:text-[17px] my-[5px]">Track Orders</li>
              <li className="hover:text-[#e8f1bc] hover:text-[17px] my-[5px]">Settings</li>
              <li className="hover:text-[#e8f1bc] hover:text-[17px] my-[5px]" onClick={Logout}>
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[1rem] text-[#d9d9d9] p-[20px] font-semibold text-[1rem]">My Orders</h2>
        
       {parcels.map((parcel, index)=>(
        <Link to={`/parcel/${parcel._id}`} key={index}>
          
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li><span className="font-semibold text-[1rem]">From: </span>  {parcel.from}</li>
              <li><span className="font-semibold text-[1rem]">Weight: </span> {parcel.weight}</li>
              <li><span className="font-semibold text-[1rem]">Date: </span> {parcel.date}</li>
              <li><span className="font-semibold text-[1rem]">Sender: </span> {parcel.sendername}</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <span>To: {parcel.to}</span>
            <button className={parcel.status === 0 || parcel.status === 1 ? "bg-[#555] text-white w-[100px] cursor-pointer p-[5px]" : "bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]"}>
              {parcel.status === 1 || parcel.status === 0 ? "Pending" : "Delivered"}
            </button>
          </div>
        </div>
        </Link>
              ))}
      </div>
    </div>
  );
};

export default Myparcels;