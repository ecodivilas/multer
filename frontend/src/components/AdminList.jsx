import React, { useEffect, useState } from "react";
import { getAllusers, deleteUser } from "../services/userServices";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditUsers from "./EditUsers";

const AdminList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const fetchUser = await getAllusers();
      setUsers(fetchUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    //fetchUsers()
    const interval = setInterval(() => {
      fetchUsers();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleUser = async (id) => {
    try {
      const success = await deleteUser(id);
      if (success) {
        setUsers((prevState) => prevState.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center flex-col px-4">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        USERS
      </h1>

      <table className="max-w-6xl mx-auto rounded-md text-xs m-2 bg-sky-100 border-solid border-2 border-slate-200 ">
        {/* <table className="table-fixed rounded-md"> */}
        <thead>
          <tr>
            {/* <td colSpan={10} className="text-center text-xl">User List</td> */}
          </tr>
          <tr>
            <th className="p-2 rounded-md text-base text-stone-700">#</th>
            <th className="p-2 rounded-md text-base text-stone-700">
              Username
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">Email</th>
            <th className="p-2 rounded-md text-base text-stone-700">
              Password
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">
              FirstName
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">
              MiddleName
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">
              LastName
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">Status</th>
            <th className="p-2 rounded-md text-base text-stone-700">
              BranchCode
            </th>
            <th className="p-2 rounded-md text-base text-stone-700">Command</th>
          </tr>
        </thead>
        <tbody>

          {users.length === 0 ? (<td colSpan={10} className="my-8 text-center p-4 text-black text-lg"> No data available</td>) :
          users.map((users, index) => (
            <tr
              key={users.id}
              className="bg-sky-100 odd:bg-zinc-200 text-stone-600 hover:bg-sky-300"
            >
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2 text-center">{users.username}</td>
              <td className="p-2 text-center">{users.email}</td>
              <td className="p-2 text-center">{users.password}</td>
              <td className="p-2 text-center">{users.firstname}</td>
              <td className="p-2 text-center">{users.middlename}</td>
              <td className="p-2 text-center">{users.lastname}</td>
              <td className="p-2 text-center">{users.status}</td>
              <td className="p-2 text-center">{users.branch_code}</td>
              <td>
                <div className="flex flex-row justify-center">

                <button
                      onClick={() => handleUser(users.id)}
                      className="px-2"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  <td>
                    <button>
                      <EditUsers user={users} />
                    </button>
                  </td>
                </div>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
