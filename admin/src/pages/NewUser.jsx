import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import {Link} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const NewUser = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const generatePassword = (length) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*";

    const allChars =
      lowerCaseChars + upperCaseChars + numberChars + specialChars;

    let password = "";

    // Ensure the password contains at least one of each required type
    password +=
      lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password +=
      upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters from all types
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the characters to ensure a random order
    password = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    return password;
  };

  const handleAddUser = async () => {
    if (inputs) {
      if (!inputs.fullname) {
        toast.error("please enter fullname!");
      } else if (!inputs.email) {
        toast.error("please enter email address!");
      } else if (!inputs.age) {
        toast.error("please enter age!");
      } else if (!inputs.country) {
        toast.error("please enter country!");
      } else if (!inputs.address) {
        toast.error("please enter address!");
      } else {
        try {
          const password = generatePassword(8);
          const password1 = password;
          await publicRequest.post("/auth/signup", {
            // password1 will be deleted after the user gets it in the email message
            password1,
            password,
            ...inputs,
          });
          toast.success("User successfully reistered");
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
else{ toast.error("fields cannot be empty");}
   
  };

  console.log(inputs);

  return (
    <div className="h-[100vh]">
      <div className="m-[4rem] h-[80%] w-[90%] rounded-xl bg-[#fff] p-[1.2rem]">
      <Link to="/users">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer mb-9" />
        </Link>
        <h2 className="font-semibold">New User</h2>
        <div className="block md:flex">
          <div className="flex flex-col my-[1.2rem] m-3">
            <label htmlFor="">Full Name</label>
            <input
              name="fullname"
              onChange={handleChange}
              type="text"
              placeholder="Believe Nchere-awaji Gilbert"
              className="border-2 border-[#555] border-solid rounded-xl w-[13rem] p-[5px]"
            />
            <label htmlFor="">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="believegilbert@demo.com"
              className="border-2 border-[#555] w-[13rem] border-solid rounded-xl p-[5px] "
            />
            <label htmlFor="">Age</label>
            <input
              name="age"
              onChange={handleChange}
              type="number"
              min="0"
              max="120"
              placeholder="30"
              className="border-2 border-[#555] border-solid rounded-xl p-[5px] w-[13rem]"
            />
          </div>
          <div className="flex flex-col my-[1.2rem] m-3">
            <label htmlFor="">Country</label>
            <input
              name="country"
              onChange={handleChange}
              type="text"
              placeholder="Nigeria"
              className="border-2 border-[#555] border-solid rounded-xl p-[5px] w-[13rem]"
            />
            <label htmlFor="">Address</label>
            <input
              name="address"
              onChange={handleChange}
              type="text"
              placeholder="#13 aves avenue, Ejigbo, Lagos, Nigeria"
              className="border-2 border-[#555] border-solid rounded-xl p-[5px] w-[13rem]"
            />
            <button
              className="bg-[#1e1e1e] cursor-pointer text-white p-[5px] text-[0.75rem] w-[13rem] my-[15px] rounded-lg"
              onClick={handleAddUser}
            >
              Create
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
