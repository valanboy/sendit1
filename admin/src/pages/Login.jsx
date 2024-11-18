import { useState } from "react";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      toast.error("please enter your email and password");
    }
  };

  return (
    <div>
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <div>
          <h2 className="text-[#d9d9d9] font-semibold text-[35px]">
            SendIT Admin
          </h2>

          <img src="/hero.png" alt="" />
        </div>

        <div className="h-[55vh] w-[470px] bg-[#E9EB77] rounded-md">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value.trim())}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[78.77%] m-[10%] ml-[5%] outline-none rounded-xl"
          />

          <div className="flex items-center justify-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value.trim())}
              className="flex items-center justify-center bg-[#fff] p-[20px] w-[78.77%] m-[10%] ml-[3%] outline-none rounded-xl"
            />
            <span className="cursor-pointer" onClick={handleToggleVisibility}>
              {" "}
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>

          <button
            className="bg-[#1e1e1e] w-[77.78%] text-white font-semibold text-[18px] p-[15px] m-[10%] ml-[6%] rounded-xl"
            onClick={handleLogin}
          >
            {loading ? "Loading..." : "Login"}
            {user.currentUser && <Navigate to="/" />}
          </button>
          <ToastContainer />
          <div className="text-[#6e6e6e] w-[77.78%] ml-[12%] ">
            <span>
              Don't have an account?{" "}
              <span className="cursor-pointer hover:underline">
                <Link to="/signup">
                  <em>register as admin</em>
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
