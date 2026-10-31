import React from 'react'
import UseUsereContext from './UserContext';

const Users = () => {
  const {user, bio} = UseUsereContext ();
  return (
    <div>
      <div>User Type : {bio.designation} ({bio.type})</div>
      <div>User Name : {user.name}</div>
    </div>
  )
}

export default Users
