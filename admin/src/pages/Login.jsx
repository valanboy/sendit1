import { useState } from "react";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const validDomains = [
      "gmail.com",
      "live.com",
      "qq.com",
      "126.com",
      "163.com",
      "yahoo.com",
      "msn.com",
      "yahoo.co.uk",
      "yahoo.co.in",
      "outlook.com",
      "mac.com",
      "me.com",
      "hotmail.com",
      "orange.fr",
      "laposte.net",
      "rediffmail.com",
      "hotmail.com",
      "protonmail.com",
      "icloud.com",
      ".org",
      ".edu",
      ".gov",
      ".protonmail",
      ".zohomail",
      "tutanota.com",

      "protonmail.com",
      "icloud.com",
      ".org",
      ".edu",
      ".gov",
      ".protonmail",
      ".zohomail",
      "tutanota.com",
      "btinternet.com",
      "mail.co.uk",
      "web.de",
    ];

    function isInvalidEmail(email) {
      const domain = email.split("@")[1]; // Extract the domain from the email
      return !validDomains.includes(domain); // Return true if domain is not in the list
    }

    const emailIncorrect = isInvalidEmail(email);


   if(!email && !password){
    toast.error("please enter your email and password")
   }   else if (emailIncorrect) {
    toast.error("please enter a valid email address");
  } else if (!email.includes("@")) {
    toast.error("please enter a valid email address");
  }

    else if(!password){
     toast.error("enter your password")
    }
    else if (email && password) {
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false);
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    } 
    
  };

  return (
    <div className=" ">
      <div className="block w-[100%] h-[105vh] md:flex items-center justify-evenly  text-gray-300">
        <div className="">
          <h2 className="text-[#d9d9d9] font-semibold text-[35px]">
            SendIT Admin
          </h2>

          <img src="/hero.png" alt="" />
        </div>

        <div className="h-[400px] w-[375px] max-w-screen-md:[450px] bg-[#E9EB77] rounded-md">
          <div className="justify-center items-center relative flex">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value.trim())}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[300px] m-[8%] outline-none rounded-xl"
          />
          </div>
          <div className="flex items-center justify-center relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value.trim())}
              className="flex items-center justify-center bg-[#fff] p-[20px] w-[300px] m-[5%]  outline-none rounded-xl"
            />
            <div className="absolute ml-[90%]">
            <span className=" cursor-pointer" onClick={handleToggleVisibility}>
              {" "}
              {showPassword ? "👁️" : "🔒"}
            </span>
            </div>
          </div>

          <button
            className="bg-[#1e1e1e] w-[77.78%] text-white font-semibold text-[18px] p-[15px] mt-[5%] mb-5 ml-[10%] rounded-xl"
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
