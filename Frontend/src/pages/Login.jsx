import { useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
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
      
    toast.error("email and password field cannot be empty")
    }
    else if(!password){
      toast.error("enter password to login")
    }
    
     else if (emailIncorrect) {
      toast.error("please enter a valid email address");
    } else if (!email.includes("@")) {
      toast.error("please enter a valid email address");
    }

  

    else if (email && password) {
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false)
      } catch (error) {
        toast.error(error)
        setLoading(false);
      }
    }
    

  };

  console.log(user.currentUser);

  return (
    <div>
      <Navbar />
      <ToastContainer />

      <div className="h-[80vh] flex items-center jusitfy-evenly p-[50px] text-[#757272]">
        <img src="/hero.png" alt="" />
        <div className="h-[450px] w-[450px] bg-[#e9eb77] rounded-md">
          <input
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value.trim())}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none rounded-md"
          ></input>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value.trim())}
              className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] ml-[10%] outline-none rounded-md"
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
          <button
            className="bg-[#1e1e1e] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]"
            onClick={handleLogin}
          >
            {loading ? "Loading..." : "Login"}
            {user.currentUser && <Navigate to="/myparcels" />}
          </button>
         

          
        </div>
      </div>
      <Footer />
         </div>
  );
};

export default Login;
