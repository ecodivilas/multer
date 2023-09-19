// import { DB_PORT } from "../../../server/.env";
let server_url = import.meta.env.VITE_SERVER_URL

export async function getAllusers() {
  try {
    const response = await fetch(`${server_url}/api/v1/users`);
    const jsonData = await response.json();

    // console.log(`here's the data ${DB_PORT}`, jsonData)
    return jsonData;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const confirmation = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmation) {
      const response = await fetch(`/api/v1/users/${id}`, {
        method: "DELETE",
      });
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }
}
export async function updateUser(userInfo) {

    try {
        const response = await fetch('/api/v1/users', {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ users: userInfo })
        })
        return await response.json()
    } catch (error) {
         console.error(error.message)
    }
}


export async function createUsers(users) {

  try {
      const response = await fetch('/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({ users })
      })
      return response.json()
  } catch (error) {
       console.error(error.message)
  }
}

