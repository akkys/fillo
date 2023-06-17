import React from "react";
import avatar from "../images/avatar1.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" />
      <div>
        <span>Washim</span>
        <small>Admin</small>
      </div>
    </div>
  );
};

export default Profile;
