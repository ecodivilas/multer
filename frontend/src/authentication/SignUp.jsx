import React, { useState } from "react";
import Inputs from "./Inputs";
import { validate } from "../utils/validation";
import { createUsers } from "../services/userServices";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    password: "",
    status: "",
    branch_code: "",
  });

  const navigate = useNavigate()

  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const [errors, setErrors] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    try {
      createUsers(formData)
      setFormData({    username: "",
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      password: "",
      status: "",
      branch_code: "",})
      navigate('/')
    } catch (error) {
      console.error(error.message)
    }
   
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl pb-3">Sign Up</h1>
      <form
        className="w-full max-w-md p-4 bg-slate-300 rounded-md"
        onSubmit={handleSubmit}
      >
        <Inputs
          type="text"
          id="username"
          name="username"
          label="Username"
          value={formData.username}
          error={errors.username}
          onChange={handleInputChange}
        />
        <Inputs
          type="text"
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          error={errors.email}
          onChange={handleInputChange}
        />
                <Inputs
          type="text"
          id="firstname"
          name="firstname"
          label="First Name"
          value={formData.firstname}
          error={errors.firstname}
          onChange={handleInputChange}
        />
                <Inputs
          type="text"
          id="middlename"
          name="middlename"
          label="Middle Name"
          value={formData.middlename}
          error={errors.middlename}
          onChange={handleInputChange}
        />
                <Inputs
          type="text"
          id="lastname"
          name="lastname"
          label="Last Name"
          value={formData.lastname}
          error={errors.lastname}
          onChange={handleInputChange}
        />
        <Inputs
          type="password"
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          error={errors.password}
          onTogglePass={handleShowPass}
          showPass={showPass}
          onChange={handleInputChange}
        />
                <Inputs
          type="text"
          id="status"
          name="status"
          label="Status"
          value={formData.status}
          error={errors.status}
          onChange={handleInputChange}
        />
                        <Inputs
          type="text"
          id="branch_code"
          name="branch_code"
          label="Branch Code"
          value={formData.branch_code}
          error={errors.branch_code}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 px-4 py-2 mt-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
