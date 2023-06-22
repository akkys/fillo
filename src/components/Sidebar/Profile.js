import React from "react";
import avatar from "../../images/avatar1.jpg";
import { profile } from "../../data";

const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" />
      <div>
        <span>{profile.name}</span>
        <small>{profile.role}</small>
      </div>
    </div>
  );
};

export default Profile;
