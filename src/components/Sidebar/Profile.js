import React from "react";
import avatar from "../../images/avatar1.jpg";
import { profile } from "../../data";
import { Offcanvas } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" className="profile_img" />
      <div>
        <span>{profile.name}</span>
        <small>{profile.role}</small>
      </div>
      <Offcanvas.Header closeButton></Offcanvas.Header>
    </div>
  );
};

export default Profile;
