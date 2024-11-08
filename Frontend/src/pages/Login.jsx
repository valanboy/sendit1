import { useState } from "react";
import Footer from "../compnents/Footer";
import Navbar from "../compnents/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center jusitfy-evenly p-[50px] text-gray-300">
        <img src="/hero.png" alt="" />
        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounder-md">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
          ></input>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="Enter your password"
              className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] ml-[10%] outline-none"
            ></input>
            <span
              style={{
                display: "inline",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>
          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]">Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
