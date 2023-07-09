import React from "react";

const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt="Profil resmi" width="200" />
      <p>Takipçi sayısı: {user.followers}</p>
      <p>Takip edilen sayısı: {user.following}</p>
      <p>Biyografi: {user.bio}</p>
      <p>GitHub sayfası: <a href={user.html_url}>{user.html_url}</a></p>
    </div>
  );
};

export default UserInfo;
