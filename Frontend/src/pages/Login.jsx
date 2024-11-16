import { useState } from "react";
import {Navigate} from "react-router-dom"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {login} from "../redux/apiCalls"
import {useDispatch, useSelector} from "react-redux"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false)
const user = useSelector((state)=> state.user)
const error = useSelector((state)=> state.user.error)

const dispatch = useDispatch()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);

    };

    const handleLogin = async() =>{
      if(email && password){
        try {
          setLoading(true)
          await login(dispatch, {email, password})
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
    }

    console.log(user.currentUser)
  
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center jusitfy-evenly p-[50px] text-gray-300">
        <img src="/hero.png" alt="" />
        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounder-md">
          <input
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
            onChange={(e)=> setEmail(e.target.value.trim())}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
          ></input>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Enter your password"
              onChange={(e)=> setPassword(e.target.value.trim()) }
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
          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]" onClick={handleLogin}>
          {loading ? 'Loading...' : Login}
          {user.currentUser && <Navigate to="/myparcels"/> }
          </button>

          {error && <span className="text-red-500">please make sure that your email and password are correct</span>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
