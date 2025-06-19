import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);

  const handleToggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddUser = async () => {
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

    const emailIncorrect = isInvalidEmail(inputs.email);
    if (inputs.age < 18) {
      toast.error("admins must be up to 18 years ");
    } else if (emailIncorrect) {
      toast.error("please enter a valid email address");
    } else if (inputs.password.length < 6) {
      toast.error("password length must be more than 6 characters");
    } else if (!inputs.email.includes("@")) {
      toast.error("please enter a valid email address");
    } else {
      try {
        setLoading(true);
        const res = await publicRequest.post("/auth/signup", inputs);
        setUser(res.data);

        toast.success("Admin successfully registered");

        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  console.log(inputs);

  return (
    <div className="h-auto bg-orange-50">
     <h2 className="text-[#2e58cab7] font-semibold text-[1.5rem] md:text-[2.2rem] lg:text-[2.5rem] text-center pt-[1rem] md:pt-[4rem] md:mb-0 ">
          SendIT Admin
        </h2>
      <div className="md:h-screen md:w-[90%] md:mx-auto md:mt-[-5rem] block md:flex items-center justify-evenly p-[20px] text-gray-300">
       
        <div className="flex mb-[1rem] justify-center w-[100%]">
          <img
            src="/hero.png"
            alt=""
            className="w-full min-w-[350px] max-w-[1100px] mb-5"
          />
        </div>

        <div className="h-auto text-[#666666] w-[80%] md:w-[70%] lg:w-[40%] xl:w-[35%] md:pt-5 mx-auto bg-gray-100 rounded-lg shadow-2xl mb-10 md:mb-0">
          <div className="w-[100%] pt-4 md:space-y-4 space-y-2 px-4  md:px-10 lg:px-10 xl:px-10 text-sm md:text-[16px] lg:text-[16px] xl:text-[17px]">
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff]  p-[10px] w-full rounded-xl outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff] p-[10px] w-full rounded-xl outline-none"
            />

            <input
              type="number"
              name="age"
              min={18}
              max={100}
              placeholder="Enter your age"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff] p-[10px] w-full rounded-xl outline-none"
            />

            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff] p-[10px] w-full rounded-xl outline-none"
            />

            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff] p-[10px] w-full rounded-xl outline-none"
            />

<div className="flex items-center justify-between bg-[#fff] p-[10px] w-full rounded-xl outline-none">
            <div className="flex items-center w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="flex items-center justify-center bg-[#fff] p-[10px] w-full rounded-xl outline-none"
              />
              <span className="cursor-pointer" onClick={handleToggleVisibility}>
                {showPassword ? "👁️" : "🔒"}{" "}
              </span>
            </div></div>

            <button
              className="bg-[#e78d63] w-full rounded-xl text-white font-semibold text-sm p-[10px] md:text-[16px] lg:text-[18px] xl:text-[18px] mb-2 mt-2"
              onClick={handleAddUser}
            >
              {loading ? "Loading..." : "Signup"}
              {user.email && <Navigate to="/login" />}
            </button>
            <ToastContainer />
            <div className="text-[#6e6e6e] w-full text-center text-sm md:text-[16px] lg:text-[18px] xl:text-[18px] rounded-xl pt-2 pb-[1.5rem]">
              <span>
                Already have an account?
                <span className="cursor-pointer hover:underline">
                  <Link to="/login">
                    <em>login as admin</em>
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
