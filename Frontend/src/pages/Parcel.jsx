import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Parcel = () => {
  return (
    <div className="flex flex-col items-center justfiy-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-[70vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between">
          <div className="flex-1">
            <ul className="m-3 text-[#444]">
              <li className="m-3">From: 101 Pine St, Seattle, WA 98101</li>
              <li className="m-3">Weight: 290g</li>
              <li className="m-3">Date: 20/07/2024</li>
              <li className="m-3">Sender:James Doe</li>
              <li className="m-3">To: Ontario, USA</li>
              <li className="m-3">Cost: $200</li>
              <li className="m-3">Recipient: Melissa Doe</li>
              <li className="m-3">Track ID: 1278650</li>
              <li className="m-3">Note: Perishable Goods</li>
            </ul>

            <button className="bg-[#555] text-white w-[200px] cursor-pointer p-[10px] m-[20px]">
              Pending
            </button>
          </div>
          <div className="flex-1">
          <ul className="m-3 text-[#444]">
              <li className="m-3">Sender Email: jamesdoe@gmail.com</li>
              <li className="m-3">Recipient Email: melisaadoe@mail.com</li>
              </ul>
              <textarea name=""
              id=""
              cols={50}
              rows={7}
              className="outline-none p-[50px] m-[20px] bg-[#d9d9d9] text-[#555]"
              placeholder="Leave a feedback"
              >

              </textarea>
              <button className="bg-[#1e1e1e] w-[200px] p-[10px] text-white cursor-pointer m-[20px]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
