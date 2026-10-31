import React from "react";
import UseUsereContext from "./UserContext";

const Profile = () => {
  const { user, bio } = UseUsereContext();
  console.log(user);

  return (
    <>
    <h1>User Autheticated To Profile</h1>
      <div>Profile Type : {bio.designation} ({bio.type})</div>
      <div>Profile Name : {user.name}</div>
    </>
  );
};

export default Profile;
