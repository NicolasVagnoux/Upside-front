import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersList = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_DB_URL}/api/users`);
      setUsers(data);
    };
    getUsersList();
  }, []);

  return (
    <div>
      <div className="m-4">
        <h2>- USERS - </h2>
        {users &&
          users.map(({ id, firstname, lastname, email }) => (
            <div key={id}>
              <p>{firstname}</p>
              <p>{lastname}</p>
              <p>{email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
