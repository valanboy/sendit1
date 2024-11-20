import Footer from "../components/Footer";
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
    if(inputs.age < 18){
      toast.error("admins must be up to 18 years ")
    }
    else if (emailIncorrect) {
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
    <div>
      <div className="h-[115vh] block md:flex items-center justify-evenly p-[20px] text-gray-300">
        <div className="mb-3">
          <h2 className="text-[#d9d9d9] font-semibold text-[35px]">
            SendIT Admin
          </h2>

          <img src="/hero.png" alt="" />
        </div>

        <div className="h-[460px] text-[#666666] w-[340px]   bg-[#E9EB77] rounded-md">
         <div className="pt-2">
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            onChange={handleChange}
            className="flex items-center justify-center bg-[#fff]  p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="flex items-center justify-center bg-[#fff] p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
          />

          <input
            type="number"
            name="age"
            min={18}
            max={100}
            placeholder="Enter your age"
            onChange={handleChange}
            className="flex items-center justify-center bg-[#fff] p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
          />

          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            onChange={handleChange}
            className="flex items-center justify-center bg-[#fff] p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
          />

          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
            className="flex items-center justify-center bg-[#fff] p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
          />

          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="flex items-center justify-center bg-[#fff] p-[10px] w-[250px] rounded-xl m-[3%] ml-[10%] outline-none"
            />
            <span className="cursor-pointer" onClick={handleToggleVisibility}>
              {showPassword ? "👁️" : "🔒"}{" "}
            </span>
          </div>

          <button
            className="bg-[#1e1e1e] w-[250px] rounded-xl text-white font-semibold text-[18px] p-[15px] m-[2%] ml-[10%]"
            onClick={handleAddUser}
          >
            {loading ? "Loading..." : "Signup"}
            {user.email && <Navigate to="/login" />}
          </button>
          <ToastContainer />
          <div className="text-[#6e6e6e] w-[290px] rounded-xl ml-[12%] ">
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
      <Footer />
    </div>
  );
};

export default Signup;
