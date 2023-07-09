import React, { useState } from "react";
import axios from "axios";

const UserSearch = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      setUsername("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub kullanıcı adı girin"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  );
};

export default UserSearch;
