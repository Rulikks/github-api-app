import React, { useState } from "react";
import UserSearch from "./UserSearch";  
import UserInfo from "./UserInfo";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Github Kullanıcı Arama</h1>
      <UserSearch setUser={setUser} />
      <UserInfo user={user} />
    </div>
  );
};

export default App;

