import { useState } from "react";
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

    if (!email && !password) {
      toast.error("please enter your email and password");
    } else if (emailIncorrect) {
      toast.error("please enter a valid email address");
    } else if (!email.includes("@")) {
      toast.error("please enter a valid email address");
    } else if (!password) {
      toast.error("enter your password");
    } else if (email && password) {
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
    <div className="h-[100vh] w-[100%] bg-orange-50">
      <h2 className="text-[#2e58cab7] text-[1.5rem] text-center md:pt-[4rem] pt-[3rem] md:text-[2.2rem] lg:text-[2.5rem] font-semibold md:font-semibold md:mb-1 mb-12">
        SendIT Admin
      </h2>
      <div className="block justify-cente w-[100%] md:w-[90%] xl:w-[70%] h-screen md:mx-auto md:flex md:items-center md:justify-between md:mt-[-5rem] text-gray-300">
        <div className="flex-1 mb-[2rem]">
          <img src="/hero.png" alt="" width="" height="" className="w-full min-w-[350px] max-w-[1100px]"/>
        </div>

        <div className="mx-auto w-[70%] md:w-[50%] lg:w-[35%] xl:w-[35%] bg-white rounded-md shadow-lg px-5 py-5 md:px-10 md:py-[3rem] mb-10 space-y-3">
          <div className=" w-[100%] md:w-[100%] mx-auto rounded-lg flex bg-gray-100 mt-[1rem]">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value.trim())}
              className="bg-gray-100 md:p-[15px] lg:p-[15px] p-[10px] w-[100%] outline-none rounded-xl text-sm md:text-[16px] lg:text-[16px] xl:text-[18px] text-gray-700"
            />
          </div>
          <div className="flex items-center justify-center bg-gray-100 w-[100%] md:w-[100%] mx-auto rounded-lg">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value.trim())}
              className="md:p-[15px] lg:p-[15px] p-[10px] bg-gray-100 w-[100%] outline-none rounded-xl text-sm md:text-[16px] lg:text-[16px] xl:text-[18px] text-gray-700"
            />

            <span
              className=" cursor-pointer mr-5"
              onClick={handleToggleVisibility}
            >
              {" "}
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>

          <div className="w-[100%] md:w-[100%] mx-auto">
            
            <button
              className="bg-[#e78d63] w-full text-white font-semibold text-sm md:p-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px] p-[10px] mb-2 mt-2 rounded-xl"
              onClick={handleLogin}
            >
              {loading ? "Loading..." : "Login"}
              {user.currentUser && <Navigate to="/" />}
            </button>
          </div>

          <ToastContainer />
          <div className="text-[#6e6e6e] w-[100%] mx-auto text-center text-sm sm:text-[14px] md:text-[15px] lg:text-[17px] pb-[0.5rem]">
            <span>
              Dont have an account?
              <span className="cursor-pointer hover:underline">
                <Link to="/signup">
                  <em> register as admin</em>
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
