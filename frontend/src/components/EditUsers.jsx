import React, { useState } from "react";
import { updateUser } from "../services/userServices";
import { BiSolidEdit } from "react-icons/bi";

const EditUsers = ({ user }) => {
  const [userInfo, setUserInfo] = useState({
    id: user?.id || "",
    username: user?.username || "",
    email: user?.email || "",
    firstname: user?.firstname || "",
    middlename: user?.middlename || "",
    lastname: user?.lastname || "",
    password: user?.password || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userInfo);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleModal} className="px-2">
          <BiSolidEdit />
        </button>
      </div>
      {showModal && (
        ////
        <div className="absolute inset-0 h-4/5 max-w-screen-lg mx-auto  flex translate-y-28 flex-col bg-slate-200">

          <div className="w-full pt-4 flex flex-col ">
            {/* start */}
            {/* <div class="lg:col-span-2"> */}
              {/* <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"> */}
                <div class="text-start p-2">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="username"
                    value={userInfo.username}
                    onChange={handleChange}
                  />
                </div>

                <div class="text-start p-2">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="email"
                    value={userInfo.email}
                    onChange={handleChange}
                  />
                </div>

                <div class="text-start p-2">
                  <label for="firstname">First name</label>
                  <input
                    type="text"
                    name="firstname"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="first name"
                    value={userInfo.firstname}
                    onChange={handleChange}
                  />
                </div>

                <div class="text-start p-2">
                  <label for="middlename">Middle Name</label>
                  <input
                    type="text"
                    name="middlename"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="middle name"
                    value={userInfo.middlename}
                    onChange={handleChange}
                  />
                </div>

                <div class="text-start p-2">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="last name"
                    value={userInfo.lastname}
                    onChange={handleChange}
                  />
                </div>

                <div class="text-start p-2">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="password"
                    value={userInfo.password}
                    onChange={handleChange}
                  />
                </div>
              {/* </div> */}
            {/* </div> */}

            
          </div>

          <div className="flex flex-row justify-end mx-5">
              <div className="m-1 p-1 text-base">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                    toggleModal();
                  }}
                  className="bg-green-500 px-4  rounded-full text-white" 
                >
                  Submit
                </button>
              </div>
              <div className="m-1 p-1 text-base">
                <button onClick={toggleModal} className="bg-red-500 px-4  rounded-full text-white">
                  Cancel
                </button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};
export default EditUsers;
