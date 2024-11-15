import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";

const NewUser = () => {
  const [inputs, setInputs] = useState({});

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
    try {
      const password = generatePassword(8);
      const password1 = password
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
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          name="fullname"
          onChange={handleChange}
          type="text"
          placeholder="Believe Nchere-awaji Gilbert"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="believegilbert@demo.com"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Age</label>
        <input
          name="age"
          onChange={handleChange}
          type="number"
          min="0"
          max="120"
          placeholder="30"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Country</label>
        <input
          name="country"
          onChange={handleChange}
          type="text"
          placeholder="Nigeria"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <label htmlFor="">Address</label>
        <input
          name="address"
          onChange={handleChange}
          type="text"
          placeholder="#13 aves avenue, Ejigbo, Lagos, Nigeria"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
        <button
          className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] my-[15px]"
          onClick={handleAddUser}
        >
          Create
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default NewUser;
